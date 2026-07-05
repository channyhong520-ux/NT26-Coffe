import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import { isDemoMode } from "@/lib/khqr";
import { notifyPaymentReceived } from "@/lib/telegram";

/**
 * Demo-only endpoint: simulates a successful Bakong payment so the full
 * checkout flow can be tested without a real BAKONG_TOKEN / bank transfer.
 * Disabled automatically when a real BAKONG_TOKEN is configured.
 */
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDemoMode()) {
    return NextResponse.json(
      { error: "Simulation is disabled when BAKONG_TOKEN is configured." },
      { status: 403 }
    );
  }

  const { id } = await params;

  const [tx] = await db
    .select()
    .from(transactions)
    .where(eq(transactions.id, id))
    .limit(1);

  if (!tx) {
    return NextResponse.json({ error: "Transaction not found." }, { status: 404 });
  }

  if (tx.status === "EXPIRED" || new Date(tx.expiresAt).getTime() < Date.now()) {
    return NextResponse.json({ error: "This QR code has expired." }, { status: 400 });
  }

  if (tx.status === "PAID") {
    return NextResponse.json({ status: "PAID", paidAt: tx.paidAt });
  }

  const paidAt = new Date();
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
