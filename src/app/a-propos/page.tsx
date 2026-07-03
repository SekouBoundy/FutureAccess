import type { Metadata } from "next";
import Photo from "@/components/Photo";
import StatsBand from "@/components/StatsBand";

export const metadata: Metadata = {
  title: "À propos — FutureAccess",
  description:
    "FutureAccess accompagne les étudiants dans leurs projets d'études à l'international, de l'orientation à l'installation. Découvrez notre mission, nos valeurs et nos résultats.",
};

// Icônes SVG (style trait, jeu Lucide)
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
  award: (
    <>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
};

const STATS = [
  { value: "500+", label: "Étudiants accompagnés" },
  { value: "98%", label: "Taux d'admission" },
  { value: "15+", label: "Pays partenaires" },
  { value: "10+", label: "Années d'expérience" },
];

const VALUES = [
  {
    icon: "users",
    title: "Accompagnement humain",
    text: "Un conseiller dédié qui connaît votre dossier et vous guide à chaque étape.",
  },
  {
    icon: "shield",
    title: "Transparence",
    text: "Des tarifs clairs et des conseils honnêtes, sans frais cachés.",
  },
  {
    icon: "award",
    title: "Excellence",
    text: "Un réseau d'universités reconnues et un taux d'admission de 98%.",
  },
  {
    icon: "heart",
    title: "Proximité",
    text: "Un suivi de A à Z, avant, pendant et après votre départ.",
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

export default function AProposPage() {
  return (
    <main className="flex-1">
      {/* ===== EN-TÊTE ===== */}
      <section className="bg-paper pt-36 lg:pt-44">
        <div data-reveal className="mx-auto max-w-2xl px-6 text-center">
          <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            À propos
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
            Qui sommes-nous&nbsp;?
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Votre partenaire de confiance pour transformer vos ambitions académiques en réussite à
            l&apos;international.
          </p>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Notre mission
            </span>
            <h2 className="mb-5 text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Rendre les études à l&apos;étranger accessibles à tous
            </h2>
            <p className="mb-4 text-slate-600">
              FutureAccess met son expertise au service des étudiants qui souhaitent poursuivre leurs
              études à l&apos;international. De l&apos;orientation au visa, jusqu&apos;à votre
              installation, nous simplifions chaque étape de votre parcours.
            </p>
            <p className="mb-8 text-slate-600">
              Basés à Bamako, nous développons un réseau d&apos;universités partenaires à travers le
              monde afin d&apos;offrir à chaque étudiant des opportunités de qualité, adaptées à son
              profil et à son budget.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-4 font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
            >
              Découvrir nos services
            </a>
          </div>

          <div data-reveal="1">
            <Photo
              src="/images/about-team.jpg"
              alt="Étudiants diplômés célébrant leur réussite"
              label="Photo — étudiants diplômés"
              className="h-72 w-full rounded-[28px] shadow-[0_10px_30px_rgba(10,37,64,.14)] sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* ===== CHIFFRES ===== */}
      <section className="bg-navy-900 py-14 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <StatsBand
            stats={STATS}
            className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4"
          />
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Nos valeurs
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Ce qui nous distingue
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                data-reveal={i}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,37,64,.10)]"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy-800 text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-head text-base font-bold text-navy-800">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-center text-white lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_90%_at_50%_-10%,rgba(46,116,230,.28),transparent_60%)]"
        />
        <div data-reveal className="relative mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">
            Prêt à écrire votre réussite&nbsp;?
          </h2>
          <p className="mb-9 text-white/75">
            Discutons de votre projet d&apos;études lors d&apos;un premier entretien gratuit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-9 py-4 font-head text-sm font-bold uppercase tracking-wide text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </main>
  );
}
