"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";

type Tx = {
  id: string;
  billNumber: string;
  description: string;
  amount: string;
  currency: string;
  merchantName: string;
  bakongAccount: string;
  qrString: string;
  md5: string;
  status: string;
  expiresAt: string;
};

export default function PaymentClient({
  transaction,
  demoMode,
}: {
  transaction: Tx;
  demoMode: boolean;
}) {
  const router = useRouter();
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [status, setStatus] = useState(transaction.status);
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, new Date(transaction.expiresAt).getTime() - Date.now())
  );
  const [simulating, setSimulating] = useState(false);
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isUsd = transaction.currency === "USD";
  const amountDisplay = isUsd
    ? Number(transaction.amount).toFixed(2)
    : Math.round(Number(transaction.amount)).toLocaleString();

  // Render QR code
  useEffect(() => {
    QRCode.toDataURL(transaction.qrString, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 480,
      color: { dark: "#000000", light: "#FFFFFF" },
    }).then(setQrDataUrl);
  }, [transaction.qrString]);

  // Countdown
  useEffect(() => {
    if (status !== "PENDING") return;
    const t = setInterval(() => {
      const ms = new Date(transaction.expiresAt).getTime() - Date.now();
      setRemaining(Math.max(0, ms));
      if (ms <= 0) setStatus("EXPIRED");
    }, 1000);
    return () => clearInterval(t);
  }, [status, transaction.expiresAt]);

  // Poll payment status
  const poll = useCallback(async () => {
    try {
      const res = await fetch(`/api/transactions/${transaction.id}/status`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (data.status === "PAID") {
        setStatus("PAID");
        setTimeout(() => router.push(`/receipt/${transaction.id}`), 1200);
      } else if (data.status === "EXPIRED") {
        setStatus("EXPIRED");
      }
    } catch {
      // ignore transient errors
    }
  }, [transaction.id, router]);

  useEffect(() => {
    if (status !== "PENDING") {
      if (pollRef.current) clearInterval(pollRef.current);
      return;
    }
    poll();
    pollRef.current = setInterval(poll, 3000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [status, poll]);

  const simulatePayment = async () => {
    setSimulating(true);
    try {
      const res = await fetch(`/api/transactions/${transaction.id}/simulate`, {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok && data.status === "PAID") {
        setStatus("PAID");
        setTimeout(() => router.push(`/receipt/${transaction.id}`), 1200);
      }
    } finally {
      setSimulating(false);
    }
  };

  const copyQr = async () => {
    await navigator.clipboard.writeText(transaction.qrString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E1232E] via-[#b81b25] to-[#7c1218] px-4 py-8">
      <div className="mx-auto max-w-md">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between text-white">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
          >
            ← Cancel
          </Link>
          {status === "PENDING" && (
            <div className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold tabular-nums backdrop-blur">
              ⏱ {mins}:{secs.toString().padStart(2, "0")}
            </div>
          )}
        </div>

        {/* KHQR Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Red header with angled corner — official KHQR style */}
          <div className="relative bg-[#E1232E] px-6 py-4">
            <div
              className="absolute right-0 top-0 h-full w-10 bg-white"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 60% 100%)" }}
            />
            <span className="text-2xl font-black tracking-widest text-white">
              KHQR
            </span>
          </div>

          {/* Merchant + amount */}
          <div className="px-7 pt-5">
            <div className="text-sm font-medium text-slate-500">
              {transaction.merchantName}
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-slate-900 tabular-nums">
                {amountDisplay}
              </span>
              <span className="text-base font-bold text-slate-500">
                {transaction.currency}
              </span>
            </div>
          </div>

          {/* Dashed divider */}
          <div className="relative my-4 px-0">
            <div className="border-t-2 border-dashed border-slate-200" />
            <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#b81b25]" />
            <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#b81b25]" />
          </div>

          {/* QR area */}
          <div className="relative px-7 pb-7">
            <div className="relative mx-auto w-fit">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="KHQR payment QR code"
                  className={`h-64 w-64 transition ${
                    status === "EXPIRED" ? "opacity-10 blur-[2px]" : ""
                  } ${status === "PAID" ? "opacity-20" : ""}`}
                />
              ) : (
                <div className="flex h-64 w-64 items-center justify-center">
                  <span className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#E1232E]" />
                </div>
              )}

              {/* Currency badge in QR center */}
              {qrDataUrl && status === "PENDING" && (
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#E1232E] text-xl font-black text-white shadow">
                  {isUsd ? "$" : "៛"}
                </div>
              )}

              {/* Overlays */}
              {status === "PAID" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-4xl text-white shadow-lg animate-bounce">
                    ✓
                  </div>
                  <p className="mt-3 font-bold text-emerald-600">
                    Payment received!
                  </p>
                </div>
              )}
              {status === "EXPIRED" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-700 text-3xl text-white shadow-lg">
                    ⏱
                  </div>
                  <p className="mt-3 font-bold text-slate-700">QR expired</p>
                </div>
              )}
            </div>

            {/* Bill info */}
            <div className="mt-4 space-y-1 text-center">
              <p className="text-xs text-slate-400">
                Bill No. <span className="font-semibold text-slate-600">{transaction.billNumber}</span>
              </p>
              {transaction.description && (
                <p className="truncate text-xs text-slate-400">
                  {transaction.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Status / actions */}
        <div className="mt-6 space-y-3">
          {status === "PENDING" && (
            <>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-white/90">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-300" />
                Scan with Bakong or any member bank app… waiting for payment
              </div>

              <button
                onClick={copyQr}
                className="w-full rounded-2xl bg-white/15 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
              >
                {copied ? "✓ Copied KHQR string" : "Copy KHQR string"}
              </button>

              {demoMode && (
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs leading-relaxed text-white/80">
                    <strong className="text-white">Demo mode</strong> — no{" "}
                    <code className="rounded bg-white/20 px-1">BAKONG_TOKEN</code>{" "}
                    is configured, so live Bakong verification is off. Use the
                    button below to simulate a customer scanning &amp; paying.
                  </p>
                  <button
                    onClick={simulatePayment}
                    disabled={simulating}
                    className="mt-3 w-full rounded-xl bg-white py-2.5 text-sm font-bold text-[#E1232E] shadow transition hover:bg-red-50 disabled:opacity-50"
                  >
                    {simulating ? "Processing…" : "✓ Simulate successful payment"}
                  </button>
                </div>
              )}
            </>
          )}

          {status === "PAID" && (
            <Link
              href={`/receipt/${transaction.id}`}
              className="block w-full rounded-2xl bg-white py-3.5 text-center text-sm font-bold text-emerald-600 shadow-lg"
            >
              View receipt →
            </Link>
          )}

          {status === "EXPIRED" && (
            <Link
              href="/"
              className="block w-full rounded-2xl bg-white py-3.5 text-center text-sm font-bold text-[#E1232E] shadow-lg"
            >
              Start a new payment
            </Link>
          )}
        </div>

        <p className="mt-6 text-center text-[11px] text-white/50">
          Bakong account: {transaction.bakongAccount} · MD5:{" "}
          {transaction.md5.slice(0, 12)}…
        </p>
      </div>
    </main>
  );
}
