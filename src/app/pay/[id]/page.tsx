import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import { isDemoMode } from "@/lib/khqr";
import PaymentClient from "./payment-client";

export const dynamic = "force-dynamic";

export default async function PayPage({
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

  return (
    <PaymentClient
      transaction={{
        id: tx.id,
        billNumber: tx.billNumber,
        description: tx.description,
        amount: tx.amount,
        currency: tx.currency,
        merchantName: tx.merchantName,
        bakongAccount: tx.bakongAccount,
        qrString: tx.qrString,
        md5: tx.md5,
        status: tx.status,
        expiresAt: tx.expiresAt.toISOString(),
      }}
      demoMode={isDemoMode()}
    />
  );
}
