"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, Whatsapp } from "@/components/icons";

const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/processus", label: "Processus" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const PHONE_DISPLAY = "+223 92 24 63 42";
const PHONE_TEL = "+22392246342";
const EMAIL = "futureaccessmali@gmail.com";
const WHATSAPP = "https://wa.me/22392246342";

function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-head text-xl font-extrabold tracking-tight">
        <span className="text-blue-500">Future</span>
        <span className="text-gold-400">Access</span>
      </span>
      <span className="mt-1 self-end font-head text-[10px] font-bold uppercase tracking-[0.3em] text-gold-300/80">
        Mali
      </span>
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
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-navy-900/95 px-5 py-3 shadow-[0_12px_34px_rgba(6,20,39,.35)] backdrop-blur-xl sm:px-7">
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
              <Icon name="phone" className="h-4 w-4" />
            </span>
            {PHONE_DISPLAY}
          </a>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`Appeler FutureAccess au ${PHONE_DISPLAY}`}
              className="grid h-10 w-10 place-items-center rounded-2xl bg-[#25D366]/20 text-[#25D366]"
            >
              <Icon name="phone" className="h-4 w-4" />
            </a>
            <button
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-controls="menu-mobile"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <span aria-hidden className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-out ${
                    menuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Menu mobile — panneau déroulant (variante A) ===== */}
      {/* Voile : assombrit la page derrière, ferme au clic */}
      <div
        aria-hidden
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-navy-900/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panneau : dropdown sous le header, dimensionné au contenu */}
      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-x-3 top-20 z-[60] flex max-h-[calc(100dvh-6rem)] flex-col overflow-y-auto rounded-[28px] border border-white/10 bg-navy-900 px-5 pb-6 pt-5 shadow-[0_30px_70px_rgba(0,0,0,.5)] transition-all duration-300 ease-out sm:inset-x-5 sm:top-24 sm:px-7 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        {/* Liens — état actif en doré */}
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`border-b border-white/10 py-3.5 font-head text-[18px] font-bold transition-colors ${
                  active ? "text-gold-400" : "text-white hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bloc contact */}
        {/* <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 font-head text-sm font-semibold text-white"
          >
            <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 font-head text-sm font-semibold text-white"
          >
            <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-gold-500/20 text-gold-300">
              <Icon name="mail" className="h-4 w-4" />
            </span>
            {EMAIL}
          </a>
        </div> */}

        {/* Appels à l'action */}
        <div className="mt-4 grid gap-3">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-500 py-4 text-center font-head font-bold text--[#063e1c] shadow-[0_14px_34px_rgba(201,162,39,.34)]"
          >
            <Icon name="graduation-cap" className="h-5 w-5" />
            Commencer mon projet
          </Link>
          <a
            href={WHATSAPP}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-4 text-center font-head font-bold text-[#063e1c]"
          >
            <Whatsapp className="h-5 w-5" />
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
