import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee NT26 · Pay with Bakong KHQR",
  description:
    "Coffee NT26 — café, drinks & internet lounge in Phnom Penh. Order and pay instantly with Bakong KHQR.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
