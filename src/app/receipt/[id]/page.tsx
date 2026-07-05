import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const dynamic = "force-dynamic";

export default async function ReceiptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [tx] = await db
    .select()
    .from(transactions)
    .where(eq(transactions.id, id))
    .limit(1);

  if (!tx) notFound();

  const isUsd = tx.currency === "USD";
  const amountDisplay = isUsd
    ? `$${Number(tx.amount).toFixed(2)}`
    : `៛ ${Math.round(Number(tx.amount)).toLocaleString()}`;

  const paid = tx.status === "PAID";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      <SiteHeader />
      <div className="mx-auto w-full max-w-sm px-4 py-10">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Header */}
          <div
            className={`px-6 py-8 text-center ${
              paid ? "bg-emerald-500" : "bg-slate-500"
            }`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow">
              {paid ? "✅" : "⏳"}
            </div>
            <h1 className="mt-4 text-lg font-black text-white">
              {paid ? "Payment Successful" : `Status: ${tx.status}`}
            </h1>
            <p className="mt-1 text-3xl font-black text-white tabular-nums">
              {amountDisplay}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-3 px-6 py-6 text-sm">
            <Row label="Merchant" value={tx.merchantName} />
            <Row label="Bakong account" value={tx.bakongAccount} />
            <Row label="Bill number" value={tx.billNumber} />
            {tx.description && <Row label="Items" value={tx.description} />}
            <Row label="Currency" value={tx.currency} />
            <Row
              label="Paid at"
              value={
                tx.paidAt
                  ? new Date(tx.paidAt).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })
                  : "—"
              }
            />
            <Row label="Transaction MD5" value={`${tx.md5.slice(0, 16)}…`} mono />
            <Row label="Reference" value={tx.id.slice(0, 8).toUpperCase()} mono />
          </div>

          <div className="border-t border-dashed border-slate-200 px-6 py-5 text-center">
            <p className="text-[11px] text-slate-400">
              Processed via Bakong KHQR · National Bank of Cambodia payment
              network
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-[#E1232E] py-3 text-center text-sm font-bold text-white shadow hover:bg-[#c11d27]"
          >
            New payment
          </Link>
          <Link
            href="/transactions"
            className="rounded-2xl bg-white py-3 text-center text-sm font-bold text-slate-700 shadow hover:bg-slate-50"
          >
            All transactions
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-slate-400">{label}</span>
      <span
        className={`text-right font-semibold text-slate-700 ${
          mono ? "font-mono text-xs" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
