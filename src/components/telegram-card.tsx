"use client";

import { useEffect, useState } from "react";

export default function TelegramCard() {
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [channel, setChannel] = useState<string | null>(null);
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(
    null
  );
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    fetch("/api/telegram/test")
      .then((r) => r.json())
      .then((d) => {
        setConfigured(d.configured);
        setChannel(d.channel);
      })
      .catch(() => setConfigured(false));
  }, []);

  const sendTest = async () => {
    setTesting(true);
    setResult(null);
    try {
      const res = await fetch("/api/telegram/test", { method: "POST" });
      const data = await res.json();
      setResult(
        data.ok
          ? { ok: true, msg: "Test alert sent! Check your Telegram channel." }
          : { ok: false, msg: data.error || "Failed to send test alert." }
      );
    } catch {
      setResult({ ok: false, msg: "Network error." });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-xl">
            ✈️
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">
                Telegram alerts
              </h3>
              {configured === null ? (
                <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300" />
              ) : configured ? (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  CONNECTED{channel ? ` · ${channel}` : ""}
                </span>
              ) : (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                  NOT CONFIGURED
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              Get notified when a checkout is created and when payment arrives.
            </p>
          </div>
        </div>

        {/* <div className="flex items-center gap-2">
          {configured ? (
            <button
              onClick={sendTest}
              disabled={testing}
              className="rounded-full bg-sky-500 px-4 py-2 text-xs font-bold text-white shadow hover:bg-sky-600 disabled:opacity-50"
            >
              {testing ? "Sending…" : "Send test alert"}
            </button>
          ) : (
            configured === false && (
              <button
                onClick={() => setShowHelp((s) => !s)}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                {showHelp ? "Hide setup" : "How to set up"}
              </button>
            )
          )}
        </div> */}
      </div>

      {result && (
        <div
          className={`mt-3 rounded-xl px-4 py-2.5 text-xs font-medium ${
            result.ok
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {result.msg}
        </div>
      )}

      {showHelp && !configured && (
        <ol className="mt-4 list-decimal space-y-2 rounded-xl bg-slate-50 p-4 pl-8 text-xs leading-relaxed text-slate-600">
          <li>
            Message <b>@BotFather</b> on Telegram → <code>/newbot</code> → copy
            the <b>bot token</b>.
          </li>
          <li>
            Create a Telegram <b>channel</b> (public, with a username like{" "}
            <code>@mystore_alerts</code>).
          </li>
          <li>
            Add your bot to the channel as an <b>administrator</b> with
            &quot;Post messages&quot; permission.
          </li>
          <li>
            Set these environment variables, then restart the app:
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-[11px] text-emerald-300">
{`TELEGRAM_BOT_TOKEN=123456789:AAF...your-token
TELEGRAM_CHANNEL=@mystore_alerts`}
            </pre>
          </li>
        </ol>
      )}
    </div>
  );
}
