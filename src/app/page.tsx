"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const PRODUCTS = [
  {
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400",
    name: "Iced Latte",
    usd: 2.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=400",
    name: "Matcha Green Tea",
    usd: 3.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400",
    name: "Butter Croissant",
    usd: 1.75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1558857563-b371f30c673e?auto=format&fit=crop&q=80&w=400",
    name: "Brown Sugar Boba",
    usd: 2.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1543508911-41971b93a073?auto=format&fit=crop&q=80&w=400",
    name: "Pandan Cake Slice",
    usd: 3.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=400",
    name: "Mango Sticky Rice",
    usd: 4.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688951566?auto=format&fit=crop&q=80&w=400",
    name: "Espresso",
    usd: 2.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1514432324607-2e467f4af445?auto=format&fit=crop&q=80&w=400",
    name: "Cappuccino",
    usd: 3.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400",
    name: "Americano",
    usd: 2.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-7049fae79eef?auto=format&fit=crop&q=80&w=400",
    name: "Flat White",
    usd: 3.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1502914240471-58c21f1b7d4d?auto=format&fit=crop&q=80&w=400",
    name: "Mocha",
    usd: 3.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1508737764454-cff106cdd8b0?auto=format&fit=crop&q=80&w=400",
    name: "Macchiato",
    usd: 2.75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1490523967868-a2b35b27338f?auto=format&fit=crop&q=80&w=400",
    name: "Iced Americano",
    usd: 2.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400",
    name: "Cold Brew",
    usd: 2.75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1542990253-ce37c71fbbde?auto=format&fit=crop&q=80&w=400",
    name: "Iced Cappuccino",
    usd: 3.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1563859371-f403bf289096?auto=format&fit=crop&q=80&w=400",
    name: "Vietnamese Coffee",
    usd: 3.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1594521231261-5a0c2c35cdde?auto=format&fit=crop&q=80&w=400",
    name: "Chocolate Croissant",
    usd: 2.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1599599810694-b5ac4dd33c4b?auto=format&fit=crop&q=80&w=400",
    name: "Almond Croissant",
    usd: 2.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1585521537396-c5169b90c97c?auto=format&fit=crop&q=80&w=400",
    name: "Pain au Chocolat",
    usd: 2.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551024601-bec78abe488e?auto=format&fit=crop&q=80&w=400",
    name: "Blueberry Muffin",
    usd: 2.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    name: "Strawberry Tart",
    usd: 3.75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1568718846914-96b305d2aaeb?auto=format&fit=crop&q=80&w=400",
    name: "Cheesecake Slice",
    usd: 4.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    name: "Chocolate Cake",
    usd: 3.75,
  },
  {
    image:
      "https://images.unsplash.com/photo-1589985630997-0195a5c1269c?auto=format&fit=crop&q=80&w=400",
    name: "Tiramisu Cup",
    usd: 4.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    name: "Carrot Cake",
    usd: 3.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1585518419759-7fd760b41d6f?auto=format&fit=crop&q=80&w=400",
    name: "Lemon Cake",
    usd: 3.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400",
    name: "Green Tea Latte",
    usd: 3.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1591080876345-f5fb1e52ad5f?auto=format&fit=crop&q=80&w=400",
    name: "Oolong Tea",
    usd: 2.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1594918132657-a0895b4a0ac5?auto=format&fit=crop&q=80&w=400",
    name: "Chamomile Tea",
    usd: 2.25,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576092160562-40fed08345d3?auto=format&fit=crop&q=80&w=400",
    name: "Fresh Croissant",
    usd: 1.5,
  },
];

const KHR_RATE = 4100;

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "KHR">("USD");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"khqr" | "delivery">("khqr");
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliveryData, setDeliveryData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartItems = PRODUCTS.filter((p) => cart[p.name]);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#E1232E] border-t-transparent"></div>
        </div>
      </main>
    );
  }
  const cartUsd = cartItems.reduce((s, p) => s + p.usd * cart[p.name], 0);
  const custom = parseFloat(customAmount) || 0;

  const totalUsd = cartUsd + (currency === "USD" ? custom : custom / KHR_RATE);
  const total =
    currency === "USD" ? totalUsd : Math.round(cartUsd * KHR_RATE) + Math.round(custom);

  const formatMoney = (v: number) =>
    currency === "USD"
      ? `$${v.toFixed(2)}`
      : `៛ ${Math.round(v).toLocaleString()}`;

  const displayPrice = (usd: number) =>
    currency === "USD" ? `$${usd.toFixed(2)}` : `៛ ${(usd * KHR_RATE).toLocaleString()}`;

  const addItem = (name: string) =>
    setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
  const removeItem = (name: string) =>
    setCart((c) => {
      const next = { ...c };
      if (next[name] > 1) next[name] -= 1;
      else delete next[name];
      return next;
    });

  const sendTelegramAlert = async (message: string) => {
    try {
      await fetch("/api/telegram/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
    } catch (e) {
      console.error("Failed to send Telegram alert:", e);
    }
  };

  const payNow = async () => {
    setError(null);
    const amount =
      currency === "USD"
        ? Math.round(totalUsd * 100) / 100
        : Math.round(cartUsd * KHR_RATE) + Math.round(custom);
    if (amount <= 0) {
      setError("Add items to your cart or enter a custom amount.");
      return;
    }
    setLoading(true);
    try {
      const description =
        cartItems.map((p) => `${p.name} x${cart[p.name]}`).join(", ") ||
        "Custom payment";
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency, description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      
      // Format time in Phnom Penh timezone
      const orderTime = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Phnom_Penh",
      });

      const telegramMsg = [
        "💳 <b>New KHQR Payment</b>",
        "",
        `🛍 Items: ${description}`,
        `💰 Amount: <b>${formatMoney(amount)}</b>`,
        "",
        `📝 Transaction ID: <code>${data.id}</code>`,
        `⏰ Order Time: ${orderTime}`,
      ].join("\n");
      
      await sendTelegramAlert(telegramMsg);
      
      router.push(`/pay/${data.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setLoading(false);
    }
  };

  const submitDeliveryOrder = async () => {
    setError(null);
    if (!deliveryData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!deliveryData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!deliveryData.location.trim()) {
      setError("Please enter your delivery location.");
      return;
    }
    const amount =
      currency === "USD"
        ? Math.round(totalUsd * 100) / 100
        : Math.round(cartUsd * KHR_RATE) + Math.round(custom);
    if (amount <= 0) {
      setError("Add items to your cart or enter a custom amount.");
      return;
    }

    setLoading(true);
    try {
      const description =
        cartItems.map((p) => `${p.name} x${cart[p.name]}`).join(", ") ||
        "Custom order";
      
      // Format time in Phnom Penh timezone
      const orderTime = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Phnom_Penh",
      });

      const telegramMsg = [
        "🚚 <b>New Delivery Order</b>",
        "",
        "<b>Customer Information:</b>",
        `👤 Name: <b>${deliveryData.name}</b>`,
        `📞 Phone: <b>${deliveryData.phone}</b>`,
        `📍 Location: <b>${deliveryData.location}</b>`,
        "",
        "<b>Order Details:</b>",
        `🛍 Items: ${description}`,
        `💰 Total: <b>${formatMoney(amount)}</b>`,
        "",
        `⏰ Order Time: ${orderTime}`,
      ].join("\n");
      
      await sendTelegramAlert(telegramMsg);

      setShowDeliveryForm(false);
      setDeliveryData({ name: "", phone: "", location: "" });
      setError(null);
      
      // Show success message
      alert("Order confirmed! We will contact you soon to finalize the delivery.");
      setCart({});
      setCustomAmount("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <SiteHeader />

      {/* Hero strip */}
      <section className="bg-gradient-to-r from-[#E1232E] to-[#8f141c] text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-1.5 px-4 py-8">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur">
            Welcome to
          </span>
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            Coffee NT26
          </h1>
          <p className="text-sm text-white/80">
            Order your favorites and pay instantly with Bakong KHQR — no cash
            needed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 pb-16">
        {/* Currency toggle */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Menu</h2>
          <div className="flex rounded-full bg-slate-200 p-1 text-xs font-semibold">
            {(["USD", "KHR"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-full px-4 py-1.5 transition ${
                  currency === c
                    ? "bg-[#E1232E] text-white shadow"
                    : "text-slate-600"
                }`}
              >
                {c === "USD" ? "$ USD" : "៛ KHR"}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PRODUCTS.map((p) => {
            const qty = cart[p.name] || 0;
            return (
              <div
                key={p.name}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${
                  qty ? "border-[#E1232E] ring-1 ring-[#E1232E]/30" : "border-slate-200"
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=No+Image";
                    }}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                  {qty > 0 && (
                    <span className="absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#E1232E] px-1.5 text-xs font-bold text-white shadow">
                      {qty}
                    </span>
                  )}
                </div>
                <div className="p-3">
                <div className="flex items-start justify-between">
                  <div className="text-sm font-semibold text-slate-800">
                    {p.name}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    IN STOCK
                  </span>
                </div>
                <div className="text-xs text-slate-500">{displayPrice(p.usd)}</div>
                <div className="mt-3 flex items-center justify-between">
                  {qty > 0 ? (
                    <div className="flex w-full items-center justify-between">
                      <button
                        onClick={() => removeItem(p.name)}
                        className="h-7 w-7 rounded-full bg-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-200"
                      >
                        −
                      </button>
                      <span className="text-sm font-bold">{qty}</span>
                      <button
                        onClick={() => addItem(p.name)}
                        className="h-7 w-7 rounded-full bg-[#E1232E] text-sm font-bold text-white hover:bg-[#c11d27]"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addItem(p.name)}
                      className="w-full rounded-full bg-slate-900 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                    >
                      Add
                    </button>
                  )}
                </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom amount */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800">
            Or pay a custom amount
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Tips, top-ups, or any amount you want to pay via KHQR.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold text-slate-400">
              {currency === "USD" ? "$" : "៛"}
            </span>
            <input
              type="number"
              min="0"
              step={currency === "USD" ? "0.01" : "100"}
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder={currency === "USD" ? "0.00" : "0"}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-lg font-semibold outline-none focus:border-[#E1232E] focus:ring-2 focus:ring-[#E1232E]/20"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}
      </div>

      <SiteFooter />
      {/* Spacer so the fixed pay bar doesn't cover the footer */}
      <div className="h-24" />

      {/* Sticky pay bar */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-wide text-slate-500">
              Total
            </div>
            <div className="text-2xl font-black text-slate-900">
              {formatMoney(total)}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPaymentMethod("khqr")}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                paymentMethod === "khqr"
                  ? "bg-[#E1232E] text-white shadow-lg shadow-red-200"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              KHQR
            </button>
            <button
              onClick={() => setPaymentMethod("delivery")}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                paymentMethod === "delivery"
                  ? "bg-[#E1232E] text-white shadow-lg shadow-red-200"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              Delivery
            </button>
          </div>
          {paymentMethod === "khqr" ? (
            <button
              onClick={payNow}
              disabled={loading || total <= 0}
              className="flex items-center gap-2 rounded-full bg-[#E1232E] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-[#c11d27] disabled:opacity-40"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Generating KHQR…
                </>
              ) : (
                <>Pay with KHQR</>
              )}
            </button>
          ) : (
            <button
              onClick={() => setShowDeliveryForm(true)}
              disabled={total <= 0}
              className="rounded-full bg-[#E1232E] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-[#c11d27] disabled:opacity-40"
            >
              Order for Delivery
            </button>
          )}
        </div>
      </div>

      {/* Delivery Form Modal */}
      {showDeliveryForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Delivery Information</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={deliveryData.name}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-[#E1232E] focus:ring-2 focus:ring-[#E1232E]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={deliveryData.phone}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, phone: e.target.value })
                  }
                  placeholder="+855 ..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-[#E1232E] focus:ring-2 focus:ring-[#E1232E]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Delivery Location
                </label>
                <textarea
                  value={deliveryData.location}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, location: e.target.value })
                  }
                  placeholder="Street address, building, etc."
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-[#E1232E] focus:ring-2 focus:ring-[#E1232E]/20"
                />
              </div>
            </div>

            {error && (
              <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeliveryForm(false);
                  setError(null);
                }}
                className="flex-1 rounded-full bg-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={submitDeliveryOrder}
                disabled={loading}
                className="flex-1 rounded-full bg-[#E1232E] px-4 py-3 text-sm font-bold text-white hover:bg-[#c11d27] transition disabled:opacity-40 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Confirming…
                  </>
                ) : (
                  "Confirm Order"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
