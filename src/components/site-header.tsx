"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Menu" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="border-b border-slate-200 bg-white py-3">
        <div className="mx-auto max-w-5xl px-4 font-black">Coffee NT26</div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Top announcement bar */}
      <div className="bg-slate-900 py-1.5 text-center text-[11px] font-medium text-white">
        ⚡ Instant payment with Bakong KHQR — scan with any Cambodian banking app
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-10 w-10 overflow-hidden rounded-xl shadow-md shadow-red-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYKqy-iKkjZUEu8RfoHDtnp3uRlPVAvdxfftt4me6t64QVVC-9fFdTw&s=10"
              alt="Coffee NT26 logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span>
            <span className="block text-base font-black leading-tight tracking-tight text-slate-900">
              Coffee <span className="text-[#E1232E]">NT26</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Café · Drinks · Internet
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  active
                    ? "bg-[#E1232E] text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="ml-2 hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700 sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open now
          </span>
        </nav>
      </div>
    </header>
  );
}
