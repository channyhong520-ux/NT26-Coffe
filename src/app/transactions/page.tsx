import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import TelegramCard from "@/components/telegram-card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const dynamic = "force-dynamic";

const STATUS_STYLES: Record<string, string> = {
  PAID: "bg-emerald-100 text-emerald-700",
  PENDING: "bg-amber-100 text-amber-700",
  EXPIRED: "bg-slate-200 text-slate-500",
};

export default async function TransactionsPage() {
  const rows = await db
    .select()
    .from(transactions)
    .orderBy(desc(transactions.createdAt))
    .limit(50);

  const paidRows = rows.filter((r) => r.status === "PAID");
  const totalUsd = paidRows
    .filter((r) => r.currency === "USD")
    .reduce((s, r) => s + Number(r.amount), 0);
  const totalKhr = paidRows
    .filter((r) => r.currency === "KHR")
    .reduce((s, r) => s + Number(r.amount), 0);

  return (
    <main className="min-h-screen bg-slate-100">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900">Transactions</h1>
            <p className="text-xs text-slate-500">
              Last {rows.length} KHQR checkout sessions
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full bg-[#E1232E] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#c11d27]"
          >
            + New payment
          </Link>
        </div>

        <TelegramCard />

        {/* Summary cards */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[11px] uppercase tracking-wide text-slate-400">
              Paid (USD)
            </div>
            <div className="mt-1 text-xl font-black text-slate-900">
              ${totalUsd.toFixed(2)}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[11px] uppercase tracking-wide text-slate-400">
              Paid (KHR)
            </div>
            <div className="mt-1 text-xl font-black text-slate-900">
              ៛{Math.round(totalKhr).toLocaleString()}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-[11px] uppercase tracking-wide text-slate-400">
              Success rate
            </div>
            <div className="mt-1 text-xl font-black text-slate-900">
              {rows.length ? Math.round((paidRows.length / rows.length) * 100) : 0}%
            </div>
          </div>
        </div>

        {/* List */}
        {rows.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="text-4xl">🧾</div>
            <p className="mt-3 text-sm font-semibold text-slate-600">
              No transactions yet
            </p>
            <p className="text-xs text-slate-400">
              Create your first KHQR payment from the checkout page.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white shadow-sm">
            {rows.map((tx) => (
              <Link
                key={tx.id}
                href={
                  tx.status === "PENDING" ? `/pay/${tx.id}` : `/receipt/${tx.id}`
                }
                className="flex items-center justify-between gap-3 px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-700">
                      {tx.billNumber}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        STATUS_STYLES[tx.status] || STATUS_STYLES.EXPIRED
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-slate-400">
                    {tx.description || "Custom payment"} ·{" "}
                    {new Date(tx.createdAt).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <div className="shrink-0 text-right text-sm font-black text-slate-900 tabular-nums">
                  {tx.currency === "USD"
                    ? `$${Number(tx.amount).toFixed(2)}`
                    : `៛${Math.round(Number(tx.amount)).toLocaleString()}`}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <SiteFooter />
    </main>
  );
}
