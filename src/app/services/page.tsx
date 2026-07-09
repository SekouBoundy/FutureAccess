import type { Metadata } from "next";
import { Icon, Flag, type FlagCode } from "@/components/icons";
import ServicesGrid, { type ServicePhase } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services — FutureAccess",
  description:
    "Orientation académique, assistance visa, logement, préparation linguistique, intégration et suivi post-arrivée : découvrez l'accompagnement complet FutureAccess et nos forfaits.",
};

const PHASES: ServicePhase[] = [
  {
    label: "Avant le départ",
    services: [
      {
        slug: "orientation-academique",
        icon: "landmark",
        title: "Orientation académique",
        text: "Évaluation de votre profil et aide au choix des universités et formations adaptées.",
        detail:
          "Nous analysons votre parcours scolaire, vos objectifs et votre budget pour identifier les formations et destinations qui vous correspondent réellement, avant de vous lancer dans les démarches.",
        bullets: [
          "Bilan de profil personnalisé",
          "Sélection de formations et universités adaptées",
          "Comparatif des destinations selon votre budget",
          "Recommandations claires et sans jargon",
        ],
      },
      {
        slug: "conseil-personnalise",
        icon: "chat",
        title: "Conseil personnalisé",
        text: "Des conseils adaptés à votre parcours, à votre niveau d'études et à votre budget.",
        detail:
          "Un conseiller dédié vous accompagne à chaque étape, répond à vos questions et ajuste ses recommandations en fonction de votre situation réelle, pas d'un parcours standard.",
        bullets: [
          "Conseiller dédié tout au long du processus",
          "Échanges par téléphone, email ou WhatsApp",
          "Réponses adaptées à votre budget et calendrier",
          "Suivi continu jusqu'à votre départ",
        ],
      },
      {
        slug: "admission-universitaire",
        icon: "graduation-cap",
        title: "Admission universitaire",
        text: "Accompagnement complet dans vos démarches de candidature auprès des universités.",
        detail:
          "Nous préparons et soumettons vos candidatures auprès des universités partenaires, suivons chaque dossier et vous tenons informé jusqu'à l'obtention de votre lettre d'admission.",
        bullets: [
          "Candidature dans plusieurs universités partenaires",
          "Suivi de l'avancement de chaque dossier",
          "Relance et échanges directs avec les établissements",
          "Obtention de la lettre d'admission",
        ],
      },
    ],
  },
  {
    label: "Pendant les démarches",
    services: [
      {
        slug: "preparation-dossier",
        icon: "file-text",
        title: "Préparation du dossier",
        text: "Vérification et organisation de tous les documents nécessaires à votre admission.",
        detail:
          "Nous vérifions la conformité de chaque document, gérons les traductions et légalisations nécessaires, et constituons un dossier complet et prêt à être soumis.",
        bullets: [
          "Liste complète des documents requis",
          "Vérification de conformité",
          "Aide à la traduction et à la légalisation",
          "Dossier prêt à soumettre",
        ],
      },
      {
        slug: "demande-visa",
        icon: "shield",
        title: "Demande de visa",
        text: "Assistance dans la préparation de votre dossier et des démarches de visa.",
        detail:
          "De la constitution du dossier consulaire à la préparation de l'entretien, nous vous accompagnons pour maximiser vos chances d'obtenir votre visa étudiant.",
        bullets: [
          "Constitution du dossier consulaire",
          "Préparation à l'entretien de visa",
          "Suivi des délais et des rendez-vous",
          "Assistance en cas de demande complémentaire",
        ],
      },
      {
        slug: "recherche-logement",
        icon: "home",
        title: "Recherche de logement",
        text: "Aide à trouver un hébergement adapté à vos besoins et à votre budget.",
        detail:
          "Nous vous mettons en relation avec des résidences étudiantes ou familles d'accueil vérifiées, adaptées à votre budget et à la proximité de votre établissement.",
        bullets: [
          "Sélection de logements vérifiés",
          "Options adaptées à votre budget",
          "Proximité avec votre université",
          "Aide à la signature du contrat",
        ],
      },
      {
        slug: "assistance-voyage",
        icon: "plane",
        title: "Assistance voyage",
        text: "Préparation et conseils pratiques pour votre départ à l'étranger.",
        detail:
          "Réservation de billets, conseils sur les bagages et documents à emporter, informations pratiques sur le pays d'accueil : nous préparons votre départ dans les moindres détails.",
        bullets: [
          "Conseils pour la réservation du billet",
          "Checklist des documents et bagages",
          "Informations pratiques sur le pays d'accueil",
          "Point de contact avant le départ",
        ],
      },
    ],
  },
  {
    label: "Après l'arrivée",
    services: [
      {
        slug: "assistance-arrivee",
        icon: "map-pin",
        title: "Assistance à l'arrivée",
        text: "Accompagnement pour faciliter votre installation dans votre pays d'études.",
        detail:
          "Un accueil à l'arrivée, de l'aide pour les premières démarches administratives et une orientation dans votre nouvelle ville pour bien démarrer.",
        bullets: [
          "Accueil à l'arrivée",
          "Aide aux démarches administratives locales",
          "Orientation dans votre nouvelle ville",
          "Mise en relation avec la communauté étudiante",
        ],
      },
      {
        slug: "suivi-installation",
        icon: "heart",
        title: "Suivi après installation",
        text: "Un accompagnement continu pour répondre à vos questions après votre arrivée.",
        detail:
          "Notre équipe reste disponible après votre installation pour répondre à vos questions, résoudre les imprévus et vous accompagner tout au long de votre première année.",
        bullets: [
          "Support continu à distance",
          "Aide en cas d'imprévu",
          "Suivi régulier pendant la première année",
          "Réponses rapides par email ou WhatsApp",
        ],
      },
    ],
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
      "Installation à Kuala Lumpur",
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
      "Recherche logement Istanbul",
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
      <ServicesGrid phases={PHASES} />

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
                    <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.5} />
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
