import Link from "next/link";

/**
 * Bloc d'appel à l'action de fin de page : carte navy posée sur fond clair.
 * Uniformise tous les CTA du site et garantit que le footer (coins arrondis
 * en haut) remonte toujours depuis une section claire.
 *
 * - layout="center" : titre + sous-titre + bouton centrés (défaut)
 * - layout="split"  : titre à gauche, bouton à droite (desktop)
 */
type CtaCardProps = {
  title: React.ReactNode;
  subtitle?: string;
  ctaLabel: string;
  ctaHref?: string;
  layout?: "center" | "split";
};

export default function CtaCard({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/contact",
  layout = "center",
}: CtaCardProps) {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[34px] bg-navy-800 px-6 py-12 text-white lg:px-14 lg:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(110%_90%_at_80%_-10%,rgba(46,116,230,.35),transparent_55%),radial-gradient(80%_60%_at_0%_110%,rgba(201,162,39,.18),transparent_50%)]"
          />

          {layout === "split" ? (
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <h2 className="text-2xl font-extrabold lg:text-3xl">{title}</h2>
              <Link
                href={ctaHref}
                className="inline-flex flex-none items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-4 font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : (
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">{title}</h2>
              {subtitle && <p className="mb-9 text-white/75">{subtitle}</p>}
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-9 py-4 font-head text-sm font-bold uppercase tracking-wide text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
