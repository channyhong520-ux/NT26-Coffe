import type { Transaction } from "@/db/schema";

/**
 * Telegram alerts via Bot API.
 *
 * Required env vars:
 *  - TELEGRAM_BOT_TOKEN : bot token from @BotFather (e.g. 123456:ABC-xyz)
 *  - TELEGRAM_CHANNEL   : channel username (e.g. @mystore_alerts) or a chat ID
 *
 * The bot must be added to the channel as an administrator with
 * "Post messages" permission.
 */

export function getTelegramConfig(): {
  token: string;
  chatId: string;
} | null {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  let chatId = (
    process.env.TELEGRAM_CHANNEL ||
    process.env.TELEGRAM_CHANNEL_USERNAME ||
    process.env.TELEGRAM_CHAT_ID ||
    ""
  ).trim();

  if (!token || !chatId) return null;

  // Channel usernames must start with "@" (numeric chat IDs must not).
  if (!/^(@|-?\d+$)/.test(chatId)) {
    chatId = `@${chatId}`;
  }

  return { token, chatId };
}

export function isTelegramConfigured(): boolean {
  return getTelegramConfig() !== null;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function sendTelegramMessage(
  html: string
): Promise<{ ok: boolean; error?: string }> {
  const config = getTelegramConfig();
  if (!config) {
    return { ok: false, error: "Telegram is not configured." };
  }

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${config.token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: config.chatId,
          text: html,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      }
    );

    const data = (await res.json()) as { ok: boolean; description?: string };
    if (!data.ok) {
      console.error("Telegram sendMessage failed:", data.description);
      return { ok: false, error: data.description || "Telegram API error" };
    }
    return { ok: true };
  } catch (err) {
    console.error("Telegram sendMessage error:", err);
    return { ok: false, error: "Network error calling Telegram API." };
  }
}

function formatAmount(tx: Pick<Transaction, "amount" | "currency">): string {
  return tx.currency === "USD"
    ? `$${Number(tx.amount).toFixed(2)} USD`
    : `៛${Math.round(Number(tx.amount)).toLocaleString()} KHR`;
}

/** Alert: payment received (fire-and-forget safe). */
export async function notifyPaymentReceived(tx: Transaction): Promise<void> {
  const paidAt = (tx.paidAt ?? new Date()).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Phnom_Penh",
  });

  const lines = [
    `✅ <b>Payment Received — ${esc(formatAmount(tx))}</b>`,
    ``,
    `🧾 Bill: <code>${esc(tx.billNumber)}</code>`,
    tx.description ? `🛍 Items: ${esc(tx.description)}` : "",
    `🏪 Merchant: ${esc(tx.merchantName)}`,
    `🏦 Bakong: <code>${esc(tx.bakongAccount)}</code>`,
    `🕒 Paid at: ${esc(paidAt)} (Phnom Penh)`,
    `🔖 Ref: <code>${esc(tx.id.slice(0, 8).toUpperCase())}</code>`,
    `#️⃣ MD5: <code>${esc(tx.md5)}</code>`,
  ].filter(Boolean);

  await sendTelegramMessage(lines.join("\n"));
}

/** Alert: new checkout / KHQR generated. */
export async function notifyCheckoutCreated(tx: Transaction): Promise<void> {
  const lines = [
    `🆕 <b>New KHQR Checkout — ${esc(formatAmount(tx))}</b>`,
    ``,
    `🧾 Bill: <code>${esc(tx.billNumber)}</code>`,
    tx.description ? `🛍 Items: ${esc(tx.description)}` : "",
    `⏳ QR expires in 5 minutes — waiting for payment…`,
  ].filter(Boolean);

  await sendTelegramMessage(lines.join("\n"));
}
