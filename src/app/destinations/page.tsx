import type { Metadata } from "next";
import DestinationsExplorer from "@/components/DestinationsExplorer";
import CtaCard from "@/components/CtaCard";

export const metadata: Metadata = {
  title: "Destinations — FutureAccess",
  description:
    "Découvrez les destinations d'études proposées par FutureAccess : Malaisie, Turquie, Chine et bien d'autres. Choisissez le pays qui correspond à vos ambitions académiques.",
};

export default function DestinationsPage() {
  return (
    <main className="flex-1">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-900 pb-14 pt-28 text-white sm:pt-36 lg:pb-24 lg:pt-44">
        {/* Image de fond */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/destinations-hero.jpg)" }}
        />
        {/* Voile assombrissant pour la lisibilité du texte */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-navy-900/25"
        />

        <div data-reveal className="relative mx-auto max-w-7xl px-6">
          <h1 className="mb-5 max-w-[14ch] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Explorez nos destinations
          </h1>
          <p className="mb-8 max-w-[48ch] text-lg text-white/85">
            Choisissez la destination qui correspond à vos ambitions académiques.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-4 font-head text-lg font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
          >
            Commencer mon projet
          </a>
        </div>
      </section>

      {/* ===== FILTRES + CARTES ===== */}
      <DestinationsExplorer />

      {/* ===== CTA ===== */}
      <CtaCard
        title={"Vous ne trouvez pas votre destination ?"}
        ctaLabel="Contactez-nous"
        layout="split"
      />
    </main>
  );
}
