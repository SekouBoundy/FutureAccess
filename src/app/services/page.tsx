import type { Metadata } from "next";
import { Icon, Flag, type FlagCode } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services — FutureAccess",
  description:
    "Orientation académique, assistance visa, logement, préparation linguistique, intégration et suivi post-arrivée : découvrez l'accompagnement complet FutureAccess et nos forfaits.",
};

// Icônes SVG (style trait, jeu Lucide)
const ICONS: Record<string, React.ReactNode> = {
  landmark: (
    <>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  home: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
};

const SERVICES = [
  {
    icon: "landmark",
    title: "Orientation académique",
    text: "Évaluation de votre profil et aide au choix des universités et formations adaptées.",
  },
  {
    icon: "shield",
    title: "Assistance visa",
    text: "Conseils stratégiques pour la constitution du dossier consulaire et préparation à l'entretien.",
  },
  {
    icon: "home",
    title: "Logement à l'étranger",
    text: "Accès à notre réseau de résidences partenaires pour trouver votre futur chez-vous.",
  },
  {
    icon: "chat",
    title: "Préparation linguistique",
    text: "Cours intensifs et passage de certifications (IELTS, TOEFL, TCF) pour valider vos prérequis.",
  },
  {
    icon: "globe",
    title: "Intégration culturelle",
    text: "Ateliers de préparation au départ pour comprendre les codes de votre pays d'accueil.",
  },
  {
    icon: "heart",
    title: "Suivi post-arrivée",
    text: "Assistance administrative sur place pour vos premières démarches d'installation.",
  },
];

const PLANS: {
  country: string;
  code: FlagCode;
  price: string;
  unit: string;
  popular: boolean;
  features: string[];
}[] = [
  {
    country: "Chine",
    code: "cn",
    price: "1 500€",
    unit: "/ dossier",
    popular: false,
    features: [
      "Bilan d'orientation",
      "Inscription dans 3 universités",
      "Assistance visa",
      "Logement étudiant",
      "Support email",
    ],
  },
  {
    country: "Malaisie",
    code: "my",
    price: "950€",
    unit: "/ dossier",
    popular: true,
    features: [
      "Tout le pack Malaisie",
      "Inscription dans 5 universités",
      "Préparation entretien visa",
      "Aide au logement",
      "Suivi prioritaire",
    ],
  },
  {
    country: "Turquie",
    code: "tr",
    price: "650€",
    unit: "/ dossier",
    popular: false,
    features: [
      "Tout le pack Turquie",
      "Admission garantie",
      "Accompagnement VIP 1:1",
      "Suivi post-arrivée 6 mois",
      "Dossier bourse d'études",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-paper">
      {/* ===== EN-TÊTE ===== */}
      <section className="pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-navy-800 lg:text-6xl">
            Nos Services
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Un accompagnement complet pour votre réussite à l&apos;international.
          </p>
        </div>
      </section>

      {/* ===== GRILLE DE SERVICES ===== */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              data-reveal={i % 3}
              className="group rounded-3xl bg-white p-7 shadow-[0_2px_10px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,37,64,.10)]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_10px_24px_rgba(46,116,230,.35)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden
                >
                  {ICONS[s.icon]}
                </svg>
              </div>
              <h3 className="mb-2 font-head text-xl font-bold text-navy-800">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600">{s.text}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 font-head text-sm font-bold text-blue-600 transition-colors hover:text-blue-500"
              >
                Découvrir
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  {ICONS.arrow}
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TARIFS ===== */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Tarifs &amp; Forfaits
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Des solutions adaptées à votre budget
            </h2>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <div
                key={plan.country}
                data-reveal={i}
                className={`relative flex flex-col rounded-3xl bg-white p-7 lg:p-8 ${
                  plan.popular
                    ? "z-10 ring-1 ring-blue-500/30 shadow-[0_28px_64px_rgba(46,116,230,.20)] lg:-my-4 lg:py-12"
                    : "border border-slate-100 shadow-[0_2px_10px_rgba(10,37,64,.06)]"
                }`}
              >
                {/* Pays + drapeau + pastille */}
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="font-head text-xs font-bold uppercase tracking-[0.12em] text-gold-600">
                    {plan.country}
                  </span>
                  <Flag code={plan.code} className="h-3.5 w-5" title={plan.country} />
                  {plan.popular && (
                    <span className="rounded-full bg-gold-500 px-2.5 py-0.5 font-head text-[10px] font-bold uppercase tracking-wide text-white">
                      Populaire
                    </span>
                  )}
                </div>

                {/* Prix */}
                <div className="mb-7 flex items-end gap-1.5">
                  <span className="font-head text-4xl font-extrabold text-navy-800 lg:text-5xl">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-slate-500">{plan.unit}</span>
                </div>

                {/* Liste de prestations */}
                <ul className="mb-8 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-gold-100 text-gold-600">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-auto block rounded-full bg-gradient-to-br from-gold-400 to-gold-600 py-3.5 text-center font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
                >
                  Choisir ce plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
