"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/processus", label: "Processus" },
  { href: "/#apropos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const PHONE_DISPLAY = "+223 92 24 63 42";
const PHONE_TEL = "+22392246342";
const WHATSAPP = "https://wa.me/22392246342";

function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`font-head text-xl font-extrabold tracking-tight ${className}`}>
      <span className="text-blue-500">Future</span>
      <span className="text-gold-400">Access</span>
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Accueil est actif sur la page d'accueil ; sinon on compare la route exacte.
  const isActive = (href: string) =>
    pathname === "/" ? href === "/#accueil" : href === pathname;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-xl sm:px-7">
          <Link href="/#accueil" aria-label="FutureAccess — accueil">
            <Brand />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 font-head text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 font-head text-sm font-bold text-white lg:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366]/20 text-[#25D366]">
              📞
            </span>
            {PHONE_DISPLAY}
          </a>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/25 bg-white/10 text-white lg:hidden"
          >
            <span className="relative block h-0.5 w-5 rounded bg-current before:absolute before:-top-1.5 before:h-0.5 before:w-5 before:rounded before:bg-current after:absolute after:top-1.5 after:h-0.5 after:w-5 after:rounded after:bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-gradient-to-br from-navy-900 to-navy-700 px-6 py-7 transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Brand />
          <button
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-2xl text-white"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 font-head text-xl font-bold text-white transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="text-base text-gold-400">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto grid gap-3 pt-8">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-gradient-to-br from-gold-400 to-gold-600 py-4 text-center font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)]"
          >
            🎓 Commencer mon projet
          </Link>
          <a
            href={WHATSAPP}
            className="rounded-full bg-[#25D366] py-4 text-center font-head font-bold text-[#063e1c]"
          >
            💬 Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
