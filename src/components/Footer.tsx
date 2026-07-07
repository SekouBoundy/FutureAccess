import Link from "next/link";
import { Icon, Whatsapp } from "@/components/icons";

const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/processus", label: "Processus" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.82-.4.4-.6.8-.8 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.07 3.3c.05 1.1.24 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-3.3s0-2.1-.07-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.05A4.95 4.95 0 1 0 12 17a4.95 4.95 0 0 0 0-9.9Zm0 8.16A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm6.3-8.36a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    label: "Facebook",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.7 8.6 23 10.6 23 14.1V21h-4v-6.14c0-1.46-.03-3.35-2.05-3.35-2.06 0-2.37 1.6-2.37 3.24V21h-4V9Z",
  },
  {
    label: "TikTok",
    path: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.34a2.4 2.4 0 1 1-2.4-2.4c.2 0 .4.03.6.08V9.7a5.6 5.6 0 0 0-.6-.04 5.62 5.62 0 1 0 5.62 5.62V9.01a7.46 7.46 0 0 0 4.36 1.4V7.2a4.28 4.28 0 0 1-3.32-1.38Z",
  },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[34px] bg-navy-900 pb-8 pt-14 text-[#cdd8e6] lg:pt-16">
      {/* Grille : marque | (Navigation + Contact côte à côte, même sur mobile) */}
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr] gap-x-6 gap-y-10 px-6 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-x-10">
        {/* Marque + WhatsApp — pleine largeur sur mobile */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/#accueil" className="font-head text-lg font-extrabold tracking-tight">
            <span className="text-blue-500">Future</span>
            <span className="text-gold-400">Access</span>
          </Link>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[#cdd8e6]/80">
            Votre partenaire de confiance pour vos études à l&apos;international. Nous vous
            accompagnons de A à Z dans votre projet académique.
          </p>
          <a
            href="https://wa.me/22392246342"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 font-head text-sm font-bold text-[#063e1c] transition-transform hover:-translate-y-0.5"
          >
            <Whatsapp className="h-4 w-4" />
            Discuter sur WhatsApp
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-head text-xs font-bold uppercase tracking-[0.12em] text-gold-300">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#cdd8e6] transition-colors hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-0">
          <h4 className="mb-4 font-head text-xs font-bold uppercase tracking-[0.12em] text-gold-300">
            Contact
          </h4>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:futureaccessmali@gmail.com"
              className="flex items-start gap-2.5 transition-colors hover:text-gold-300"
            >
              <span className="mt-0.5 flex-none text-gold-300">
                <Icon name="mail" className="h-4 w-4" />
              </span>
              <span className="break-words">futureaccessmali@<wbr />gmail.com</span>
            </a>
            <p className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-none text-gold-300">
                <Icon name="map-pin" className="h-4 w-4" />
              </span>
              Bamako, Mali
            </p>
            <a
              href="tel:+22392246342"
              className="flex items-start gap-2.5 transition-colors hover:text-gold-300"
            >
              <span className="mt-0.5 flex-none text-gold-300">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              +223 92 24 63 42
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 pt-6 text-xs text-[#cdd8e6]/60 md:mt-12 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} FutureAccess. Tous droits réservés.</span>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-gold-300">
            Conditions d&apos;utilisation
          </a>
          <a href="#" className="transition-colors hover:text-gold-300">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
