import { NextRequest, NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import { checkBakongTransaction, isDemoMode } from "@/lib/khqr";
import { notifyPaymentReceived } from "@/lib/telegram";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const [tx] = await db
    .select()
    .from(transactions)
    .where(eq(transactions.id, id))
    .limit(1);

  if (!tx) {
    return NextResponse.json({ error: "Transaction not found." }, { status: 404 });
  }

  if (tx.status === "PAID" || tx.status === "EXPIRED") {
    return NextResponse.json({ status: tx.status, paidAt: tx.paidAt });
  }

  // Expire stale QR codes
  if (new Date(tx.expiresAt).getTime() < Date.now()) {
    await db
      .update(transactions)
      .set({ status: "EXPIRED" })
      .where(eq(transactions.id, id));
    return NextResponse.json({ status: "EXPIRED" });
  }

  // Ask Bakong Open API whether the KHQR has been paid
  const bakongStatus = await checkBakongTransaction(tx.md5);

  await db
    .update(transactions)
    .set({ checkCount: sql`${transactions.checkCount} + 1` })
    .where(eq(transactions.id, id));

  if (bakongStatus === "PAID") {
    const paidAt = new Date();
    // Conditional update so concurrent polls can't double-fire the alert.
    const [updated] = await db
      .update(transactions)
      .set({ status: "PAID", paidAt })
      .where(and(eq(transactions.id, id), eq(transactions.status, "PENDING")))
      .returning();

    if (updated) {
      // Fire-and-forget Telegram alert; never block the payment response.
      notifyPaymentReceived(updated).catch(() => {});
    }
    return NextResponse.json({ status: "PAID", paidAt });
  }

  return NextResponse.json({
    status: "PENDING",
    demoMode: isDemoMode(),
    bakongAvailable: bakongStatus !== "UNAVAILABLE",
  });
}
