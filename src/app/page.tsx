import Photo from "@/components/Photo";
import NewsletterForm from "@/components/NewsletterForm";
import TestimonialsCarousel, { type Testimonial } from "@/components/TestimonialsCarousel";
import { Icon, Flag } from "@/components/icons";
import { DESTINATIONS } from "@/data/destinations";

// Icônes SVG (style trait, jeu Lucide) — remplacent les emojis
const ICONS: Record<string, React.ReactNode> = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </>
  ),
  card: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
};

const ADVANTAGES = [
  {
    icon: "users",
    title: "Accompagnement personnalisé",
    text: "Chaque étudiant bénéficie d'un suivi adapté à son profil et à ses objectifs.",
  },
  {
    icon: "shield",
    title: "Transparence & Pro",
    text: "Des informations claires et des conseils fiables à chaque étape de votre dossier.",
  },
  {
    icon: "sparkles",
    title: "Assistance complète",
    text: "De la constitution du dossier jusqu'à votre installation finale à l'étranger.",
  },
  {
    icon: "card",
    title: "Tarification juste",
    text: "Un accompagnement de haute qualité, avec des tarifs transparents et sans frais cachés.",
  },
];

// Engagements vérifiables (pas de chiffres de volume : l'agence démarre).
// Chaque promesse est déjà tenue ailleurs sur le site.
const TRUST = [
  { icon: "shield", label: "Sans frais cachés" },
  { icon: "clock", label: "Réponse sous 24 h" },
  { icon: "users", label: "Conseiller dédié" },
  { icon: "award", label: "Assistance complète de A à Z" },
];

const PROCESS_STEPS = [
  {
    title: "Choisissez votre destination",
    text: "Sélectionnez le pays et la formation qui correspondent à vos objectifs.",
  },
  {
    title: "Rencontrez votre conseiller",
    text: "Un conseiller dédié vous accompagne pour cibler les meilleures options.",
  },
  {
    title: "Préparez votre départ",
    text: "Nous vous aidons à préparer les documents, le visa et l'installation.",
  },
];

// ⚠️ Témoignages à remplacer par de VRAIS avis dès vos premiers clients.
// Volontairement modestes : centrés sur l'expérience du 1er rendez-vous,
// la clarté et la transparence — crédibles pour une agence qui démarre.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amira B.",
    country: "Dossier Malaisie",
    avatar: "/images/testimonials/amira.jpg",
    text: "Dès le premier rendez-vous, tout était clair. On m'a expliqué chaque étape sans jargon et répondu à mes questions le jour même.",
  },
  {
    name: "Omar K.",
    country: "Dossier Turquie",
    avatar: "/images/testimonials/omar.jpg",
    text: "Ce qui m'a rassuré, c'est la transparence sur les coûts. Un devis détaillé dès le départ, aucune mauvaise surprise.",
  },
  {
    name: "Sofia M.",
    country: "Dossier Chine",
    avatar: "/images/testimonials/sofia.jpg",
    text: "J'étais perdue face aux démarches de visa. Mon conseiller a tout structuré avec moi, étape par étape.",
  },
];

const SUCCESS_CHECKLIST = [
  "Orientation stratégique selon vos ambitions",
  "Accompagnement complet vers l'admission universitaire",
  "Aide à la recherche de logement et installation",
  "Suivi post-arrivée pour une intégration réussie",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* ===== HERO ===== */}
      <section
        id="accueil"
        className="relative overflow-hidden rounded-b-[34px] bg-[linear-gradient(165deg,#061427_5%,#0e3158_60%,#0a2540_100%)] pb-14 pt-28 text-white sm:pt-36 lg:pb-24 lg:pt-44"
      >
        {/* Image de fond texturée (déposer /images/hero-bg.jpg) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />
        {/* Voile assombrissant pour la lisibilité du texte */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/25"
        />
        {/* Halos d'accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_80%_-10%,rgba(46,116,230,.35),transparent_55%),radial-gradient(90%_60%_at_0%_10%,rgba(201,162,39,.15),transparent_50%)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center  px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div data-reveal>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
              Construisez votre{" "} <br />
              <em className="font-display-italic font-normal text-gold-400">avenir </em> académique
            </h1>
            <p className="mb-8 max-w-[46ch] text-sm text-white/85 sm:text-lg">
               Accompagnement fiable et professionnel pour vos projets d&apos;études à
              l&apos;international. De l&apos;orientation au visa, nous sommes votre partenaire
              réussite.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-4 font-head text-lg font-bold text-white shadow-[0_4px_30px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
            >
              Commencer mon projet
            </a>
          </div>

          {/* Photo étudiante — PNG transparent (découpe + halo doré déjà intégrés) */}
          <div data-reveal="1">
            <Photo
              src="/images/hero-student.png"
              alt="Étudiante prête pour ses études à l'international"
              label="Photo héro — étudiante"
              fit="contain"
              className="h-80 w-full sm:h-96 lg:h-[32rem]"
            />
          </div>
        </div>

        {/* Engagements — signaux de confiance vérifiables */}
        <div data-reveal="2" className="relative mx-auto mt-12 max-w-7xl px-6 lg:mt-14">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 lg:flex lg:flex-wrap lg:justify-between lg:gap-8">
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/5 text-gold-400 ring-1 ring-white/10">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <span className="font-head text-sm font-semibold text-white/90">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== AVANTAGES ===== */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Nos avantages
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Pourquoi choisir <em className="font-display-italic font-normal">FutureAccess</em>{" "}
              pour votre orientation&nbsp;?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => (
              <div
                key={a.title}
                data-reveal={i}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(10,37,64,.10)]"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-navy-800 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    {ICONS[a.icon]}
                  </svg>
                </div>
                <h3 className="mb-2 font-head text-base font-bold text-navy-800">{a.title}</h3>
                <p className="text-sm text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section id="destinations" className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
                <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
                Destinations populaires
              </span>
              <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
                Découvrez les pays les plus plébiscités par nos étudiants
              </h2>
            </div>
            <a
              href="/destinations"
              className="group inline-flex items-center gap-1.5 font-head text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              Voir toutes les destinations
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d, i) => (
              <div
                key={d.slug}
                data-reveal={i}
                className="group relative overflow-hidden rounded-3xl bg-navy-800 shadow-[0_10px_30px_rgba(10,37,64,.10)]"
              >
                <Photo
                  src={d.image}
                  alt={d.country}
                  label={d.country}
                  className="h-56 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90">
                  <Flag code={d.code} className="h-3.5 w-5" title={d.country} />
                </span>
                <div className="p-5">
                  <h3 className="font-head text-lg font-bold text-white">{d.country}</h3>
                  <p className="mb-3 text-xs uppercase tracking-wide text-white/60">{d.region}</p>
                  <p className="mb-4 text-sm text-white/80">{d.text}</p>
                  <a
                    href={d.detailed ? `/destinations/${d.slug}` : "/contact"}
                    className="inline-flex items-center gap-1 rounded-full border border-white/25 px-4 py-2 font-head text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                  >
                    Découvrir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESSUS ===== */}
      <section id="processus" className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Comment ça marche&nbsp;?
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Un processus <em className="font-display-italic font-normal">clair</em>, étape par
              étape
            </h2>
          </div>

          <div className="relative grid gap-12 sm:grid-cols-3 sm:gap-8">
            {/* Ligne de connexion entre les étapes */}
            <div
              aria-hidden
              className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-0.5 bg-gradient-to-r from-gold-400 via-slate-200 to-blue-500 sm:block"
            />
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.title} data-reveal={i} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-head text-xl font-extrabold text-white shadow-[0_10px_24px_rgba(201,162,39,.35)] ring-8 ring-paper">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-head text-lg font-bold text-navy-800">{s.title}</h3>
                <p className="mx-auto max-w-[32ch] text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background:radial-gradient(110%_80%_at_50%_-10%,rgba(46,116,230,.25),transparent_60%),radial-gradient(70%_50%_at_100%_100%,rgba(201,162,39,.12),transparent_55%)]"
        />
        <div className="relative">
          <div data-reveal className="mx-auto mb-12 max-w-2xl px-6 text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Premiers retours
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-3xl font-extrabold lg:text-4xl">
              Ce qu&apos;en disent{" "}
              <em className="font-display-italic font-normal">nos étudiants</em>
            </h2>
          </div>

          <TestimonialsCarousel items={TESTIMONIALS} />
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[34px] bg-navy-800 px-6 py-14 text-center text-white lg:px-16 lg:py-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [background:radial-gradient(110%_90%_at_80%_-10%,rgba(46,116,230,.35),transparent_55%),radial-gradient(80%_60%_at_0%_110%,rgba(201,162,39,.18),transparent_50%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="mb-3 text-3xl font-extrabold lg:text-4xl">
                Prêt à commencer votre{" "}
                <em className="font-display-italic font-normal">aventure</em>&nbsp;?
              </h2>
              <p className="mb-8 text-white/75">
                Rejoignez plus de 500 étudiants qui ont réalisé leur rêve avec FutureAccess.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== RÉUSSITE ===== */}
      <section id="apropos" className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div data-reveal>
            <h2 className="mb-4 text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Votre <em className="font-display-italic font-normal">réussite</em> académique est
              notre priorité
            </h2>
            <p className="mb-6 text-slate-600">
              Nous développons activement des collaborations avec des universités reconnues afin
              d&apos;offrir à nos étudiants des opportunités d&apos;études de qualité à
              l&apos;international.
            </p>
            <ul className="mb-8 space-y-3">
              {SUCCESS_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-gold-100 text-gold-600">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-4 font-head font-bold text-white"
            >
              Prendre rendez-vous gratuitement
            </a>
          </div>

          <div data-reveal="1" className="relative mb-6 lg:mb-0">
            {/* Cadre décoratif décalé */}
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border-2 border-gold-300/70 lg:-right-5 lg:-top-5"
            />
            <Photo
              src="/images/success-team.jpg"
              alt="Étudiants qui étudient ensemble en bibliothèque"
              label="Photo — étudiants en bibliothèque"
              className="relative h-72 w-full rounded-[28px] shadow-[0_10px_30px_rgba(10,37,64,.10)] sm:h-96"
            />
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-[0_18px_44px_rgba(10,37,64,.16)] lg:-left-8">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gold-100 text-gold-600">
                <Icon name="award" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-head text-lg font-extrabold leading-tight text-navy-800">98%</p>
                <p className="text-xs text-slate-500">Taux d&apos;admission</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
