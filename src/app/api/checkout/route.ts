import { NextRequest, NextResponse } from "next/server";
import { db, ensureTransactionsTable } from "@/db";
import { transactions } from "@/db/schema";
import { generateKhqr, MERCHANT } from "@/lib/khqr";
import { notifyCheckoutCreated } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      amount?: number;
      currency?: string;
      description?: string;
    };

    const currency = body.currency === "KHR" ? "KHR" : "USD";
    let amount = Number(body.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Amount must be a positive number." },
        { status: 400 }
      );
    }

    if (currency === "KHR") {
      amount = Math.round(amount); // KHR has no decimals
      if (amount < 100) {
        return NextResponse.json(
          { error: "Minimum amount is 100 KHR." },
          { status: 400 }
        );
      }
      if (amount > 50_000_000) {
        return NextResponse.json(
          { error: "Maximum amount is 50,000,000 KHR." },
          { status: 400 }
        );
      }
    } else {
      amount = Math.round(amount * 100) / 100;
      if (amount < 0.01) {
        return NextResponse.json(
          { error: "Minimum amount is $0.01." },
          { status: 400 }
        );
      }
      if (amount > 10_000) {
        return NextResponse.json(
          { error: "Maximum amount is $10,000." },
          { status: 400 }
        );
      }
    }

    const billNumber = `INV${Date.now().toString(36).toUpperCase()}`;

    const { qr, md5, expiresAt } = generateKhqr({
      amount,
      currency,
      billNumber,
    });

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "Database not configured. Please add DATABASE_URL to your .env file." },
        { status: 500 }
      );
    }

    await ensureTransactionsTable();

    const [tx] = await db
      .insert(transactions)
      .values({
        billNumber,
        description: (body.description || "").slice(0, 200),
        amount: amount.toFixed(2),
        currency,
        merchantName: MERCHANT.name,
        bakongAccount: MERCHANT.bakongAccount,
        qrString: qr,
        md5,
        status: "PENDING",
        expiresAt,
      })
      .returning();

    // Fire-and-forget Telegram alert; never block checkout on it.
    notifyCheckoutCreated(tx).catch(() => {});

    return NextResponse.json({ id: tx.id });
  } catch (err) {
    console.error("checkout error", err);
    let message = "Failed to create checkout session.";
    if (err instanceof Error) {
      message = err.message;
      // Provide a helpful hint if the table is missing
      if (message.includes('relation "transactions" does not exist')) {
        message = "Database table missing. Please run 'npx drizzle-kit push' in your terminal.";
      }
    }
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
