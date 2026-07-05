import { BakongKHQR, khqrData, IndividualInfo } from "bakong-khqr";

export const MERCHANT = {
  bakongAccount: process.env.BAKONG_ACCOUNT_ID || "sokpheng_phoeurn@bkrt",
  name: process.env.MERCHANT_NAME || "Coffee NT26",
  city: process.env.MERCHANT_CITY || "Phnom Penh",
};

export const QR_LIFETIME_MS = 5 * 60 * 1000; // 5 minutes

export function generateKhqr(params: {
  amount: number;
  currency: "USD" | "KHR";
  billNumber: string;
  storeLabel?: string;
}): { qr: string; md5: string; expiresAt: Date } {
  const expiresAt = new Date(Date.now() + QR_LIFETIME_MS);

  const optionalData = {
    currency:
      params.currency === "USD" ? khqrData.currency.usd : khqrData.currency.khr,
    amount: params.amount,
    billNumber: params.billNumber.slice(0, 25),
    storeLabel: (params.storeLabel || MERCHANT.name).slice(0, 25),
    terminalLabel: "Web Checkout".slice(0, 25),
    expirationTimestamp: expiresAt.getTime(),
  };

  const info = new IndividualInfo(
    MERCHANT.bakongAccount,
    MERCHANT.name.slice(0, 25),
    MERCHANT.city.slice(0, 15),
    optionalData
  );

  const khqr = new BakongKHQR();
  const response = khqr.generateIndividual(info);

  if (response.status.code !== 0 || !response.data) {
    throw new Error(
      `KHQR generation failed: ${response.status.message || "unknown error"}`
    );
  }

  return { qr: response.data.qr, md5: response.data.md5, expiresAt };
}

/**
 * Check payment status against the Bakong Open API using the md5 hash of
 * the KHQR string. Requires BAKONG_TOKEN (get one at https://api-bakong.nbc.gov.kh).
 * Returns "PAID", "PENDING", or "UNAVAILABLE" (no token / network issue).
 */
export async function checkBakongTransaction(
  md5: string
): Promise<"PAID" | "PENDING" | "UNAVAILABLE"> {
  const token = process.env.BAKONG_TOKEN;
  if (!token) return "UNAVAILABLE";

  const baseUrl =
    process.env.BAKONG_API_URL || "https://api-bakong.nbc.gov.kh";

  try {
    const res = await fetch(`${baseUrl}/v1/check_transaction_by_md5`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ md5 }),
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 401) return "UNAVAILABLE";
      return "PENDING";
    }

    const data = (await res.json()) as { responseCode?: number };
    // responseCode 0 => transaction found (paid); 1 => not found yet
    return data.responseCode === 0 ? "PAID" : "PENDING";
  } catch {
    return "UNAVAILABLE";
  }
}

export function isDemoMode(): boolean {
  return !process.env.BAKONG_TOKEN;
}
