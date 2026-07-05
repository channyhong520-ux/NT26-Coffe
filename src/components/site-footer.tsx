import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 overflow-hidden rounded-xl shadow-md shadow-red-200">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYKqy-iKkjZUEu8RfoHDtnp3uRlPVAvdxfftt4me6t64QVVC-9fFdTw&s=10"
                  alt="Coffee NT26 logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-black tracking-tight text-white">
                Coffee <span className="text-[#E1232E]">NT26</span>
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              Your neighborhood café &amp; internet lounge in Phnom Penh. Fresh
              drinks, tasty snacks, fast Wi-Fi — pay in seconds with Bakong
              KHQR.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              Quick links
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Menu &amp; Checkout
                </Link>
              </li>
              <li>
                <Link
                  href="/transactions"
                  className="transition hover:text-white"
                >
                  Transaction History
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              Visit us
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span>📍</span> St. 271, Toul Kork, Phnom Penh, Cambodia
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span> Open daily · 7:00 AM – 10:00 PM
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span> +855 12 345 678
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span> hello@coffeent26.com
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
              We accept
            </h4>
            <div className="mt-4 inline-flex overflow-hidden rounded-lg shadow">
              <span className="bg-[#E1232E] px-3 py-2 text-sm font-black tracking-widest text-white">
                KHQR
              </span>
              <span className="bg-white px-3 py-2 text-[10px] font-bold leading-tight text-slate-700">
                Bakong
                <br />
                Payment
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <img
                src="https://www.bank-cambodia.org/wp-content/uploads/2023/08/master-logo-aba.jpg"
                alt="ABA"
                className="h-8 w-auto rounded-sm"
              />
              <img
                src="https://cccbic.org/businesses/430-logo.jpg"
                alt="ACLEDA"
                className="h-8 w-auto rounded-sm"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbF439gy6zvgIqmwtZXG0ajK5oHG2UKyv1E7QQLGUw7AiycAuZy2dcEY&s=10"
                alt="WING"
                className="h-8 w-auto rounded-sm"
              />
              <img
                src="https://play-lh.googleusercontent.com/Fk6vi1cxwiXsOvyK4PlTKK8D9bjsFjvkpfk4ZvQjwjWhxf1LnF-MCnglpoCTn0-NrbAcuUPp5EAs3K8TMjiQruw"
                alt="SATHAPANA"
                className="h-8 w-auto rounded-sm"
              />
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
              One QR, every bank — ABA, ACLEDA, Wing, TrueMoney and all Bakong
              member apps.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-[11px] text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Coffee NT26. All rights reserved.
          </p>
          <p>
            Powered by <span className="font-bold text-slate-300">T4 Development</span>{" "}
            
          </p>
        </div>
      </div>
    </footer>
  );
}
