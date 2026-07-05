module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/telegram.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTelegramConfig",
    ()=>getTelegramConfig,
    "isTelegramConfigured",
    ()=>isTelegramConfigured,
    "notifyCheckoutCreated",
    ()=>notifyCheckoutCreated,
    "notifyPaymentReceived",
    ()=>notifyPaymentReceived,
    "sendTelegramMessage",
    ()=>sendTelegramMessage
]);
function getTelegramConfig() {
    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    let chatId = (process.env.TELEGRAM_CHANNEL || process.env.TELEGRAM_CHANNEL_USERNAME || process.env.TELEGRAM_CHAT_ID || "").trim();
    if (!token || !chatId) return null;
    // Channel usernames must start with "@" (numeric chat IDs must not).
    if (!/^(@|-?\d+$)/.test(chatId)) {
        chatId = `@${chatId}`;
    }
    return {
        token,
        chatId
    };
}
function isTelegramConfigured() {
    return getTelegramConfig() !== null;
}
function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
async function sendTelegramMessage(html) {
    const config = getTelegramConfig();
    if (!config) {
        return {
            ok: false,
            error: "Telegram is not configured."
        };
    }
    try {
        const res = await fetch(`https://api.telegram.org/bot${config.token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: config.chatId,
                text: html,
                parse_mode: "HTML",
                disable_web_page_preview: true
            }),
            cache: "no-store"
        });
        const data = await res.json();
        if (!data.ok) {
            console.error("Telegram sendMessage failed:", data.description);
            return {
                ok: false,
                error: data.description || "Telegram API error"
            };
        }
        return {
            ok: true
        };
    } catch (err) {
        console.error("Telegram sendMessage error:", err);
        return {
            ok: false,
            error: "Network error calling Telegram API."
        };
    }
}
function formatAmount(tx) {
    return tx.currency === "USD" ? `$${Number(tx.amount).toFixed(2)} USD` : `៛${Math.round(Number(tx.amount)).toLocaleString()} KHR`;
}
async function notifyPaymentReceived(tx) {
    const paidAt = (tx.paidAt ?? new Date()).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Phnom_Penh"
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
        `#️⃣ MD5: <code>${esc(tx.md5)}</code>`
    ].filter(Boolean);
    await sendTelegramMessage(lines.join("\n"));
}
async function notifyCheckoutCreated(tx) {
    const lines = [
        `🆕 <b>New KHQR Checkout — ${esc(formatAmount(tx))}</b>`,
        ``,
        `🧾 Bill: <code>${esc(tx.billNumber)}</code>`,
        tx.description ? `🛍 Items: ${esc(tx.description)}` : "",
        `⏳ QR expires in 5 minutes — waiting for payment…`
    ].filter(Boolean);
    await sendTelegramMessage(lines.join("\n"));
}
}),
"[project]/src/app/api/telegram/test/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTelegramConfig"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        configured: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTelegramConfigured"])(),
        // Never expose the bot token — only the target channel.
        channel: config?.chatId ?? null
    });
}
async function POST(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTelegramConfigured"])()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHANNEL environment variables."
        }, {
            status: 400
        });
    }
    let messageText = "";
    try {
        const body = await request.json();
        messageText = body.message || "";
    } catch  {
        // If no JSON body, use default test message
        messageText = "";
    }
    // If no custom message, use default test message
    if (!messageText) {
        messageText = [
            "🔔 <b>Test alert from KHQR Checkout</b>",
            "",
            "Your Telegram integration is working! You will receive alerts here when:",
            "🆕 a new KHQR checkout is created",
            "✅ a payment is received"
        ].join("\n");
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendTelegramMessage"])(messageText);
    if (!result.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: result.error
        }, {
            status: 502
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1102siw._.js.map