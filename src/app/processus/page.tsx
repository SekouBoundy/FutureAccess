import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaCard from "@/components/CtaCard";

// Route masquée temporairement — décommenter le retour ci-dessous pour la réactiver.
export const metadata: Metadata = {
  title: "Processus — FutureAccess",
  description:
    "De la consultation gratuite au départ et à l'installation : découvrez les 6 étapes de l'accompagnement FutureAccess pour vos études à l'international.",
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
  file: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.4.5c-.4.5-.2 1.2.3 1.5L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.5 1 .7 1.5.3l.5-.4c.4-.3.6-.8.5-1.3Z" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

const STEPS = [
  {
    icon: "chat",
    title: "Consultation gratuite",
    text: "Analyse de votre profil, de vos objectifs et de votre budget afin de définir le projet d’études le mieux adapté à vos besoins.",
  },
  {
    icon: "globe",
    title: "Choix de la destination et de l’université",
    text: "Sélection de la destination, de l’université et du programme les mieux adaptés à votre profil.",
  },
  {
    icon: "file",
    title: "Préparation du dossier",
    text: "Constitution, vérification et soumission de votre dossier de candidature.",
  },
  {
    icon: "landmark",
    title: "Obtention de l’admission",
    text: "Suivi de votre candidature jusqu’à la décision finale de l’université.",
  },
  {
    icon: "shield",
    title: "Démarches administratives et visa",
    text: "Accompagnement dans les démarches d’inscription, les paiements et la demande de visa.",
  },
  {
    icon: "plane",
    title: "Départ et installation",
    text: "Préparation de votre départ et accompagnement jusqu’à votre arrivée et votre installation dans le pays d’études.",
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
  notFound();

  return (
    <main className="flex-1">
      {/* ===== EN-TÊTE ===== */}
      <section className="bg-paper pt-28 sm:pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-2xl px-6 text-center">
          <span className="mb-3 inline-block font-head text-[18px] font-bold uppercase tracking-[0.16em] text-gold-600">
            Processus
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
            Comment ça fonctionne&nbsp;?
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Un accompagnement simple, personnalisé et sécurisé à chaque étape de votre projet
            d&apos;études à l&apos;étranger.
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
                    <span className="absolute left-6 top-7 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-head text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(201,162,39,.35)] ring-4 ring-paper lg:left-1/2 lg:h-14 lg:w-14 lg:text-lg">
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
            <span className="mb-3 inline-block font-head text-[18px] font-bold uppercase tracking-[0.16em] text-gold-600">
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
