"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/#processus", label: "Processus" },
  { href: "/#apropos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-2 shadow-[0_2px_8px_rgba(10,37,64,.08)] backdrop-blur-md"
            : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          <a
            href="/#accueil"
            className={`flex items-center gap-2 font-head text-lg font-extrabold tracking-tight ${
              scrolled ? "text-navy-800" : "text-white"
            }`}
          >
            <BrandMark className="h-9 w-9 flex-none" />
            Future
            <span className={scrolled ? "text-gold-600" : "text-gold-400"}>Access</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-head text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-navy-700 hover:bg-slate-100"
                    : "text-white/85 hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+22392246542"
            className={`hidden items-center gap-2 font-head text-sm font-semibold lg:flex ${
              scrolled ? "text-navy-800" : "text-white"
            }`}
          >
            <span aria-hidden>📞</span> +223 92 24 65 42
          </a>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
            className={`grid h-11 w-11 place-items-center rounded-2xl border transition-colors lg:hidden ${
              scrolled
                ? "border-slate-200 bg-slate-50 text-navy-800"
                : "border-white/25 bg-white/10 text-white"
            }`}
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
          <span className="flex items-center gap-2 font-head text-lg font-extrabold text-white">
            <BrandMark className="h-9 w-9" />
            Future<span className="text-gold-400">Access</span>
          </span>
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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 font-head text-xl font-bold text-white transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="text-base text-gold-400">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto grid gap-3 pt-8">
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-gradient-to-br from-gold-400 to-gold-600 py-4 text-center font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)]"
          >
            🎓 Commencer mon projet
          </a>
          <a
            href="https://wa.me/22392246542"
            className="rounded-full bg-[#25D366] py-4 text-center font-head font-bold text-[#063e1c]"
          >
            💬 Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
