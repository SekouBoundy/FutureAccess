import type { Metadata } from "next";
import CtaCard from "@/components/CtaCard";

export const metadata: Metadata = {
  title: "Processus — FutureAccess",
  description:
    "De l'évaluation de votre profil au suivi post-arrivée : découvrez les 6 étapes de l'accompagnement FutureAccess pour vos études à l'international.",
};

// Icônes SVG (style trait, jeu Lucide)
const ICONS: Record<string, React.ReactNode> = {
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
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
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  award: (
    <>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </>
  ),
};

const STEPS = [
  {
    icon: "chat",
    title: "Évaluation de votre profil",
    text: "Audit de vos compétences, de votre parcours académique et de vos aspirations professionnelles pour définir la meilleure stratégie.",
  },
  {
    icon: "globe",
    title: "Choix de la destination",
    text: "Aide à la sélection du pays et des universités partenaires qui correspondent le mieux à vos critères et à votre budget.",
  },
  {
    icon: "landmark",
    title: "Dossier de candidature",
    text: "Préparation minutieuse des documents, lettres de motivation et CV pour maximiser vos chances d'admission.",
  },
  {
    icon: "shield",
    title: "Assistance Visa",
    text: "Accompagnement stratégique pour la constitution du dossier consulaire et simulation d'entretien avec nos experts.",
  },
  {
    icon: "home",
    title: "Arrivée et intégration",
    text: "Logement, accueil à l'aéroport et formalités administratives locales pour un démarrage serein dans votre nouveau pays.",
  },
  {
    icon: "heart",
    title: "Suivi post-arrivée",
    text: "Nous restons à vos côtés durant tout votre cursus pour toute question académique ou administrative sur place.",
  },
];

const ENGAGEMENTS = [
  {
    icon: "users",
    title: "Conseiller dédié",
    text: "Un interlocuteur unique qui connaît parfaitement votre dossier et vos objectifs.",
  },
  {
    icon: "clock",
    title: "Réponse sous 24h",
    text: "Une réactivité garantie pour ne jamais freiner l'avancée de votre projet d'étude.",
  },
  {
    icon: "award",
    title: "Taux de succès",
    text: "98% d'admissions réussies dans nos universités partenaires à travers le monde.",
  },
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

export default function ProcessusPage() {
  return (
    <main className="flex-1">
      {/* ===== EN-TÊTE ===== */}
      <section className="bg-paper pt-28 sm:pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-2xl px-6 text-center">
          <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            Comment ça marche&nbsp;?
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
            Un processus clair, étape par étape
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Un accompagnement personnalisé de votre premier bilan jusqu&apos;à votre installation à
            l&apos;étranger.
          </p>
        </div>
      </section>

      {/* ===== ÉTAPES — TIMELINE ===== */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative">
            {/* Ligne centrale */}
            <div
              aria-hidden
              className="absolute bottom-4 left-6 top-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold-400 via-slate-200 to-blue-500 lg:left-1/2"
            />
            <ol className="space-y-8 lg:space-y-12">
              {STEPS.map((step, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={step.title} data-reveal className="relative pl-16 lg:pl-0">
                    {/* Pastille numérotée sur la ligne */}
                    <span className="absolute left-6 top-7 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-head text-sm font-extrabold text-[#3a2c08] shadow-[0_8px_20px_rgba(201,162,39,.35)] ring-4 ring-paper lg:left-1/2">
                      {i + 1}
                    </span>
                    <div className={`lg:w-[calc(50%-3.5rem)] ${right ? "lg:ml-auto" : ""}`}>
                      <div className="flex items-start gap-3.5 rounded-3xl bg-white p-5 shadow-[0_2px_10px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,37,64,.10)] sm:gap-4 sm:p-6">
                        <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-navy-800 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                          <Icon name={step.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1.5 font-head text-lg font-bold text-navy-800">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENTS ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Nos engagements
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Votre réussite est notre priorité
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENTS.map((e, i) => (
              <div
                key={e.title}
                data-reveal={i}
                className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_rgba(10,37,64,.06)]"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gold-100 text-gold-600">
                  <Icon name={e.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-head text-base font-bold text-navy-800">{e.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CtaCard
        title={"Prêt à commencer votre aventure ?"}
        subtitle="Nos experts sont là pour répondre à toutes vos questions lors d'un premier entretien gratuit."
        ctaLabel="Prendre rendez-vous"
      />
    </main>
  );
}
