import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Whatsapp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — FutureAccess",
  description:
    "Contactez FutureAccess pour votre projet d'études à l'international. Réponse garantie sous 24 heures — par email, téléphone ou WhatsApp.",
};

const PHONE_DISPLAY = "+223 92 24 63 42";
const PHONE_TEL = "+22392246342";
const EMAIL = "contact@futureaccess.com";
const WHATSAPP = "https://wa.me/22392246342";

// Icônes SVG (style trait, jeu Lucide)
const ICONS: Record<string, React.ReactNode> = {
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
};

const CONTACT_ITEMS = [
  { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "phone", label: "Téléphone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: "pin", label: "Adresse", value: "Bamako, Mali", href: undefined },
  { icon: "clock", label: "Horaires", value: "Lun – Ven : 9h – 18h", href: undefined },
];

function Icon({ name, className }: { name: string; className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="flex-1 bg-paper">
      {/* ===== EN-TÊTE ===== */}
      <section className="pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-2xl px-6 text-center">
          <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            Nous contacter
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Une question, un projet d&apos;études&nbsp;? Notre équipe vous répond sous 24&nbsp;heures.
          </p>
        </div>
      </section>

      {/* ===== INFOS + FORMULAIRE ===== */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Colonne infos */}
          <div data-reveal>
            <h2 className="mb-2 font-head text-2xl font-bold text-navy-800">Coordonnées</h2>
            <p className="mb-8 text-sm text-slate-600">
              Contactez-nous directement ou remplissez le formulaire, nous revenons vers vous
              rapidement.
            </p>

            <ul className="space-y-4">
              {CONTACT_ITEMS.map((item) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gold-100 text-gold-600">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-head text-xs font-bold uppercase tracking-wide text-slate-400">
                        {item.label}
                      </span>
                      <span className="font-head text-sm font-semibold text-navy-800">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(10,37,64,.05)] transition-colors hover:border-blue-500/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(10,37,64,.05)]">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={WHATSAPP}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-3.5 font-head font-bold text-[#063e1c] transition-transform hover:-translate-y-0.5"
            >
              <Whatsapp className="h-5 w-5" />
              Discuter sur WhatsApp
            </a>
          </div>

          {/* Colonne formulaire */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
