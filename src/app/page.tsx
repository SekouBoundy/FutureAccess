import Photo from "@/components/Photo";

const ADVANTAGES = [
  {
    icon: "🎯",
    title: "Accompagnement personnalisé",
    text: "Chaque étudiant bénéficie d'un suivi adapté à son profil et à ses objectifs.",
  },
  {
    icon: "🔒",
    title: "Transparence & Pro",
    text: "Des informations claires et des conseils fiables à chaque étape de votre dossier.",
  },
  {
    icon: "✈️",
    title: "Assistance complète",
    text: "De la constitution du dossier jusqu'à votre installation finale à l'étranger.",
  },
  {
    icon: "💳",
    title: "Tarification juste",
    text: "Un accompagnement de haute qualité, avec des tarifs transparents et sans frais cachés.",
  },
];

const DESTINATIONS = [
  {
    slug: "malaisie",
    flag: "🇲🇾",
    country: "Malaisie",
    region: "Asie",
    text: "Universités reconnues, enseignement en anglais, frais abordables et environnement multiculturel.",
    image: "/images/destinations/malaysia.jpg",
  },
  {
    slug: "turquie",
    flag: "🇹🇷",
    country: "Turquie",
    region: "Asie / Europe",
    text: "Universités de qualité, coût de vie accessible et de nombreuses opportunités académiques.",
    image: "/images/destinations/turkey.jpg",
  },
  {
    slug: "chine",
    flag: "🇨🇳",
    country: "Chine",
    region: "Asie",
    text: "Établissements réputés, programmes variés et possibilités de bourses selon les universités.",
    image: "/images/destinations/china.jpg",
  },
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

const TESTIMONIALS = [
  {
    name: "Amira Benali",
    country: "Canada",
    avatar: "/images/testimonials/amira.jpg",
    text: "L'équipe m'a vraiment aidé à cibler la bonne destination et à préparer mon dossier. Le suivi a été très réactif.",
  },
  {
    name: "Omar Khaled",
    country: "France",
    avatar: "/images/testimonials/omar.jpg",
    text: "Le processus était très clair et l'accompagnement post-admission a vraiment fait la différence.",
  },
  {
    name: "Sofia Martínez",
    country: "Maroc",
    avatar: "/images/testimonials/sofia.jpg",
    text: "FutureAccess m'a donné confiance et a géré les démarches administratives avec transparence.",
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
        className="relative overflow-hidden rounded-b-[34px] bg-[linear-gradient(165deg,#061427_5%,#0e3158_60%,#0a2540_100%)] pb-16 pt-32 text-white lg:pb-24 lg:pt-40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_80%_-10%,rgba(46,116,230,.45),transparent_55%),radial-gradient(90%_60%_at_0%_10%,rgba(201,162,39,.18),transparent_50%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Études à l&apos;international
            </span>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-5xl">
              Construisez votre <em className="font-display-italic text-gold-300">avenir</em>{" "}
              académique
            </h1>
            <p className="mb-8 max-w-[42ch] text-white/85">
              Accompagnement fiable et professionnel pour vos projets d&apos;études à
              l&apos;international. De l&apos;orientation au visa, nous sommes votre partenaire
              réussite.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-4 font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
            >
              Commencer mon projet
            </a>
          </div>

          <Photo
            src="/images/hero-student.jpg"
            alt="Étudiante prête pour ses études à l'international"
            icon="🎓"
            label="Photo héro — étudiante"
            className="h-72 w-full rounded-[28px] shadow-[0_24px_60px_rgba(10,37,64,.35)] sm:h-96 lg:h-[28rem]"
          />
        </div>
      </section>

      {/* ===== AVANTAGES ===== */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Nos avantages
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-2xl font-extrabold text-navy-800 lg:text-3xl">
              Pourquoi choisir FutureAccess pour votre orientation&nbsp;?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(10,37,64,.10)]"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy-800 text-xl text-white">
                  {a.icon}
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
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
                <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
                Destinations populaires
              </span>
              <h2 className="text-2xl font-extrabold text-navy-800 lg:text-3xl">
                Découvrez les pays les plus plébiscités par nos étudiants
              </h2>
            </div>
            <a
              href="#destinations"
              className="font-head text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              Voir toutes les destinations →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <div
                key={d.slug}
                className="group relative overflow-hidden rounded-3xl bg-navy-800 shadow-[0_10px_30px_rgba(10,37,64,.10)]"
              >
                <Photo
                  src={d.image}
                  alt={d.country}
                  icon={d.flag}
                  label={d.country}
                  className="h-56 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg">
                  {d.flag}
                </span>
                <div className="p-5">
                  <h3 className="font-head text-lg font-bold text-white">{d.country}</h3>
                  <p className="mb-3 text-xs uppercase tracking-wide text-white/60">{d.region}</p>
                  <p className="mb-4 text-sm text-white/80">{d.text}</p>
                  <a
                    href="/contact"
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Comment ça marche&nbsp;?
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-2xl font-extrabold text-navy-800 lg:text-3xl">
              Un processus clair, étape par étape
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-[0_2px_8px_rgba(10,37,64,.06)]"
              >
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 font-head text-lg font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-head text-base font-bold text-navy-800">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-500 to-gold-300" />
              Ce que disent nos étudiants
              <span className="h-0.5 w-6 rounded bg-gradient-to-r from-gold-300 to-gold-500" />
            </span>
            <h2 className="text-2xl font-extrabold text-navy-800 lg:text-3xl">
              Des parcours réussis, partout dans le monde
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_rgba(10,37,64,.06)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-gold-500">★★★★★</span>
                  <span className="text-xs font-semibold text-slate-400">5/5</span>
                </div>
                <p className="mb-5 text-sm text-slate-600">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Photo
                    src={t.avatar}
                    alt={t.name}
                    icon="🙂"
                    label=""
                    className="h-10 w-10 flex-none rounded-full"
                  />
                  <div>
                    <p className="font-head text-sm font-bold text-navy-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="bg-navy-900 py-16 text-center text-white lg:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-3 text-2xl font-extrabold lg:text-3xl">
            Prêt à commencer votre aventure académique&nbsp;?
          </h2>
          <p className="mb-8 text-white/75">
            Rejoignez plus de 500 étudiants qui ont réalisé leur rêve avec FutureAccess.
          </p>
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Votre email"
              className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-6 py-3.5 font-head text-sm font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)]"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>

      {/* ===== RÉUSSITE ===== */}
      <section id="apropos" className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-navy-800 lg:text-3xl">
              Votre réussite académique est notre priorité
            </h2>
            <p className="mb-6 text-slate-600">
              Nous développons activement des collaborations avec des universités reconnues afin
              d&apos;offrir à nos étudiants des opportunités d&apos;études de qualité à
              l&apos;international.
            </p>
            <ul className="mb-8 space-y-3">
              {SUCCESS_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-gold-100 text-xs font-bold text-gold-600">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-4 font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)]"
            >
              Prendre rendez-vous gratuitement
            </a>
          </div>

          <Photo
            src="/images/success-team.jpg"
            alt="Étudiants qui étudient ensemble en bibliothèque"
            icon="📚"
            label="Photo — étudiants en bibliothèque"
            className="h-72 w-full rounded-[28px] shadow-[0_10px_30px_rgba(10,37,64,.10)] sm:h-96"
          />
        </div>
      </section>
    </main>
  );
}
