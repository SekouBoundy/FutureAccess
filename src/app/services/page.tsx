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
  "graduation-cap": (
    <>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
  ),
  "file-text": (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </>
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
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
    icon: "chat",
    title: "Conseil personnalisé",
    text: "Des conseils adaptés à votre parcours, à votre niveau d'études et à votre budget.",
  },
  {
    icon: "graduation-cap",
    title: "Admission universitaire",
    text: "Accompagnement complet dans vos démarches de candidature auprès des universités.",
  },
  {
    icon: "file-text",
    title: "Préparation du dossier",
    text: "Vérification et organisation de tous les documents nécessaires à votre admission.",
  },
  {
    icon: "shield",
    title: "Demande de visa",
    text: "Assistance dans la préparation de votre dossier et des démarches de visa.",
  },
  {
    icon: "home",
    title: "Recherche de logement",
    text: "Aide à trouver un hébergement adapté à vos besoins et à votre budget.",
  },
  {
    icon: "plane",
    title: "Assistance voyage",
    text: "Préparation et conseils pratiques pour votre départ à l'étranger.",
  },
  {
    icon: "map-pin",
    title: "Assistance à l'arrivée",
    text: "Accompagnement pour faciliter votre installation dans votre pays d'études.",
  },
  {
    icon: "heart",
    title: "Suivi après installation",
    text: "Un accompagnement continu pour répondre à vos questions après votre arrivée.",
  },
];

const PLANS: {
  country: string;
  code: FlagCode;
  tagline: string;
  price: string;
  unit: string;
  popular: boolean;
  features: string[];
}[] = [
  {
    country: "Chine",
    code: "cn",
    tagline: "L'essentiel pour concrétiser vos études en Chine, à petit prix.",
    price: "700 000",
    unit: "FCFA / dossier",
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
    tagline: "Notre forfait le plus choisi : accompagnement complet et prioritaire.",
    price: "500 000",
    unit: "FCFA / dossier",
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
    tagline: "L'expérience premium, du dossier d'admission à la bourse d'études.",
    price: "500 000",
    unit: "FCFA / dossier",
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
      <section className="pt-28 sm:pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
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
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white ">
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
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Tarifs &amp; Forfaits
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Des solutions adaptées à votre budget
            </h2>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PLANS.map((plan, i) => (
              <div
                key={plan.country}
                data-reveal={i}
                className="relative flex flex-col rounded-[32px] bg-slate-100 p-5 transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_30px_70px_rgba(10,37,64,.16)] lg:p-6"
              >
                {/* En-tête : carte blanche flottant sur le panneau gris */}
                <div
                  className={`rounded-[24px] bg-white p-6 lg:p-7 ${
                    plan.popular
                      ? "shadow-[0_20px_45px_rgba(10,37,64,.14)]"
                      : "shadow-[0_8px_24px_rgba(10,37,64,.07)]"
                  }`}
                >
                  {/* Pays + drapeau + badge */}
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-head text-xl font-extrabold text-navy-800">{plan.country}</h3>
                    <Flag code={plan.code} className="h-4 w-6" title={plan.country} />
                    {plan.popular && (
                      <span className="ml-auto rounded-full bg-gold-500 px-2.5 py-0.5 font-head text-[10px] font-bold uppercase tracking-wide text-white">
                        Populaire
                      </span>
                    )}
                  </div>

                  {/* Tagline (hauteur min. pour aligner les prix) */}
                  <p className="mt-2 min-h-[2.75rem] text-sm leading-relaxed text-slate-500">
                    {plan.tagline}
                  </p>

                  {/* Prix */}
                  <div className="mt-5 flex items-end gap-1.5">
                    <span className="font-head text-4xl font-extrabold tracking-tight text-navy-800 lg:text-4xl">
                      {plan.price}
                    </span>
                    <span className="mb-1.5 text-sm text-slate-500">{plan.unit}</span>
                  </div>

                  {/* Bouton : foncé pour le populaire, clair + flèche pour les autres */}
                  <a
                    href="/contact"
                    className={`mt-6 flex items-center justify-center gap-2 rounded-full py-3.5 text-center font-head font-bold transition ${
                      plan.popular
                        ?"bg-white text-navy-800 ring-1 ring-slate-200 hover:bg-slate-50"
                        :"bg-white text-navy-800 ring-1 ring-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Choisir ce plan
                    {!plan.popular && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        {ICONS.arrow}
                      </svg>
                    )}
                     {plan.popular && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        {ICONS.arrow}
                      </svg>
                    )}
                    
                  </a>
                </div>

                {/* Prestations — sous la carte, sur le panneau gris */}
                <div className="px-6 pt-6 lg:px-7">
                  <p className="mb-4 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Prestations incluses
                  </p>
                  <ul className="space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-navy-800/80">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-navy-900 text-white">
                          <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
