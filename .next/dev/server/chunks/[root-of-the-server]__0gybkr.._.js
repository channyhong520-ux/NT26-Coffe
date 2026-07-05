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
"[project]/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const databaseUrl = process.env.DATABASE_URL;
const globalForDb = globalThis;
const pool = globalForDb.__arenaNextJsPostgresqlPool ?? (databaseUrl ? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: databaseUrl
}) : {
    connect: ()=>Promise.reject(new Error("Database not configured")),
    query: ()=>Promise.reject(new Error("Database not configured")),
    on: ()=>{},
    end: ()=>Promise.resolve()
});
if (("TURBOPACK compile-time value", "development") !== "production" && databaseUrl) {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transactions",
    ()=>transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
;
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("transactions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    billNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("bill_number").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull().default(""),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])("amount", {
        precision: 14,
        scale: 2
    }).notNull(),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("currency").notNull(),
    merchantName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("merchant_name").notNull(),
    bakongAccount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("bakong_account").notNull(),
    qrString: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("qr_string").notNull(),
    md5: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("md5").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status").notNull().default("PENDING"),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at", {
        withTimezone: true
    }).notNull(),
    paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("paid_at", {
        withTimezone: true
    }),
    checkCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("check_count").notNull().default(0),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at", {
        withTimezone: true
    }).notNull().defaultNow()
});
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/lib/khqr.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MERCHANT",
    ()=>MERCHANT,
    "QR_LIFETIME_MS",
    ()=>QR_LIFETIME_MS,
    "checkBakongTransaction",
    ()=>checkBakongTransaction,
    "generateKhqr",
    ()=>generateKhqr,
    "isDemoMode",
    ()=>isDemoMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bakong-khqr/src/index.js [app-route] (ecmascript)");
;
const MERCHANT = {
    bakongAccount: process.env.BAKONG_ACCOUNT_ID || "sokpheng_phoeurn@bkrt",
    name: process.env.MERCHANT_NAME || "Coffee NT26",
    city: process.env.MERCHANT_CITY || "Phnom Penh"
};
const QR_LIFETIME_MS = 5 * 60 * 1000; // 5 minutes
function generateKhqr(params) {
    const expiresAt = new Date(Date.now() + QR_LIFETIME_MS);
    const optionalData = {
        currency: params.currency === "USD" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["khqrData"].currency.usd : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["khqrData"].currency.khr,
        amount: params.amount,
        billNumber: params.billNumber.slice(0, 25),
        storeLabel: (params.storeLabel || MERCHANT.name).slice(0, 25),
        terminalLabel: "Web Checkout".slice(0, 25),
        expirationTimestamp: expiresAt.getTime()
    };
    const info = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IndividualInfo"](MERCHANT.bakongAccount, MERCHANT.name.slice(0, 25), MERCHANT.city.slice(0, 15), optionalData);
    const khqr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BakongKHQR"]();
    const response = khqr.generateIndividual(info);
    if (response.status.code !== 0 || !response.data) {
        throw new Error(`KHQR generation failed: ${response.status.message || "unknown error"}`);
    }
    return {
        qr: response.data.qr,
        md5: response.data.md5,
        expiresAt
    };
}
async function checkBakongTransaction(md5) {
    const token = process.env.BAKONG_TOKEN;
    if (!token) return "UNAVAILABLE";
    const baseUrl = process.env.BAKONG_API_URL || "https://api-bakong.nbc.gov.kh";
    try {
        const res = await fetch(`${baseUrl}/v1/check_transaction_by_md5`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                md5
            }),
            cache: "no-store"
        });
        if (!res.ok) {
            if (res.status === 401) return "UNAVAILABLE";
            return "PENDING";
        }
        const data = await res.json();
        // responseCode 0 => transaction found (paid); 1 => not found yet
        return data.responseCode === 0 ? "PAID" : "PENDING";
    } catch  {
        return "UNAVAILABLE";
    }
}
function isDemoMode() {
    return !process.env.BAKONG_TOKEN;
}
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
"[project]/src/app/api/checkout/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$khqr$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/khqr.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/telegram.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const currency = body.currency === "KHR" ? "KHR" : "USD";
        let amount = Number(body.amount);
        if (!Number.isFinite(amount) || amount <= 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Amount must be a positive number."
            }, {
                status: 400
            });
        }
        if (currency === "KHR") {
            amount = Math.round(amount); // KHR has no decimals
            if (amount < 100) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Minimum amount is 100 KHR."
                }, {
                    status: 400
                });
            }
            if (amount > 50_000_000) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Maximum amount is 50,000,000 KHR."
                }, {
                    status: 400
                });
            }
        } else {
            amount = Math.round(amount * 100) / 100;
            if (amount < 0.01) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Minimum amount is $0.01."
                }, {
                    status: 400
                });
            }
            if (amount > 10_000) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Maximum amount is $10,000."
                }, {
                    status: 400
                });
            }
        }
        const billNumber = `INV${Date.now().toString(36).toUpperCase()}`;
        const { qr, md5, expiresAt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$khqr$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateKhqr"])({
            amount,
            currency,
            billNumber
        });
        if (!process.env.DATABASE_URL) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Database not configured. Please add DATABASE_URL to your .env file."
            }, {
                status: 500
            });
        }
        const [tx] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"]).values({
            billNumber,
            description: (body.description || "").slice(0, 200),
            amount: amount.toFixed(2),
            currency,
            merchantName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$khqr$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MERCHANT"].name,
            bakongAccount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$khqr$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MERCHANT"].bakongAccount,
            qrString: qr,
            md5,
            status: "PENDING",
            expiresAt
        }).returning();
        // Fire-and-forget Telegram alert; never block checkout on it.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$telegram$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notifyCheckoutCreated"])(tx).catch(()=>{});
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: tx.id
        });
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gybkr.._.js.map