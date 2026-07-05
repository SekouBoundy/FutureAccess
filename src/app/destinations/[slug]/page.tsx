import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import CtaCard from "@/components/CtaCard";
import { Icon, EmojiIcon } from "@/components/icons";
import { DESTINATION_DETAILS } from "@/data/destination-details";

export function generateStaticParams() {
  return Object.keys(DESTINATION_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = DESTINATION_DETAILS[slug];
  if (!d) return { title: "Destination — FutureAccess" };
  return {
    title: `Étudier en ${d.country} — FutureAccess`,
    description: d.intro.slice(0, 155),
  };
}

/* Icônes SVG */
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
function Clock({ className = "h-4 w-4" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 21l-5.9 3.1 1.2-6.5L2.5 9.2l6.6-.9z" />
    </svg>
  );
}
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function ShieldCheck({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = DESTINATION_DETAILS[slug];
  if (!d) notFound();

  const accentBg = d.accent === "gold" ? "bg-gold-500" : "bg-blue-500";

  return (
    <main className="flex-1">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-900 pb-12 pt-28 text-white sm:pt-36 lg:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${d.heroImage})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/97 via-navy-900/80 to-navy-900/30"
        />

        <div data-reveal className="relative mx-auto max-w-7xl px-6">
          <p className="mb-5 font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
            <a href="/destinations" className="transition-colors hover:text-gold-300">
              Destinations
            </a>{" "}
            <span className="text-white/40">&gt;</span> {d.country}
          </p>

          {(d.rating || d.badge) && (
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {d.rating && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-semibold backdrop-blur-sm">
                  <Star className="h-4 w-4 text-gold-400" />
                  {d.rating}
                  {d.reviews && <span className="text-white/60">· {d.reviews}</span>}
                </span>
              )}
              {d.badge && (
                <span className="rounded-full bg-[#22c55e] px-3.5 py-1.5 font-head text-sm font-bold text-[#052e16]">
                  {d.badge}
                </span>
              )}
            </div>
          )}

          <h1 className="mb-6 max-w-[16ch] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Étudier en <em className="font-display-italic font-normal">{d.country}</em>
          </h1>

          <p className="mb-8 max-w-[62ch] text-lg leading-relaxed text-white/85">{d.intro}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-head text-base font-bold text-white shadow-[0_14px_34px_rgba(46,116,230,.4)] transition-transform hover:-translate-y-0.5"
            >
              Commencer mon dossier
            </a>
            {d.spotsLeft && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-4 font-head text-sm font-bold text-white/90">
                <Clock className="h-4 w-4 text-gold-400" />
                {d.spotsLeft}
              </span>
            )}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 font-head text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Parler à un conseiller
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-slate-100 bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {d.stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 lg:px-8">
              {s.icon && (
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-gold-100 text-gold-600 sm:h-11 sm:w-11">
                  <EmojiIcon emoji={s.icon} className="h-5 w-5" />
                </span>
              )}
              <div>
                <div className="font-head text-xl font-extrabold text-navy-800 sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-sm text-slate-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OPPORTUNITÉS ===== */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Opportunités
            </span>
            <h2 className="mb-8 text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Pourquoi choisir {d.countryArticle}&nbsp;?
            </h2>
            <ul className="space-y-4">
              {d.opportunities.map((o) => (
                <li key={o} className="flex items-center gap-3 font-head font-bold text-navy-800">
                  <span
                    className={`grid h-7 w-7 flex-none place-items-center rounded-full text-white ${accentBg}`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="1">
            <Photo
              src={d.opportunitiesImage}
              alt={`Étudier en ${d.country}`}
              label={`Photo — ${d.country}`}
              className="h-72 w-full rounded-[28px] shadow-[0_10px_30px_rgba(10,37,64,.14)] sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* ===== TOP UNIVERSITÉS (optionnel) ===== */}
      {d.universities && (
        <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-extrabold text-navy-800 lg:text-4xl">
            Top Universités en {d.country}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.universities.map((u) => (
              <div
                key={u.abbr + u.name}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_2px_10px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,37,64,.10)]"
              >
                {(u.rankTone ?? "gold") === "gold" && (
                  <div className="h-1 bg-gradient-to-r from-gold-500 to-gold-300" />
                )}
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-12 min-w-12 items-center justify-center rounded-2xl px-3 font-head text-sm font-extrabold ${
                        u.abbrTone === "blue" ? "bg-blue-500 text-white" : "bg-slate-50 text-navy-800"
                      }`}
                    >
                      {u.abbr}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 font-head text-[10px] font-bold uppercase tracking-wide ${
                        (u.rankTone ?? "gold") === "slate"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-gold-100 text-gold-600"
                      }`}
                    >
                      {u.rank}
                    </span>
                  </div>
                  <h3 className="font-head text-lg font-bold leading-snug text-navy-800">
                    {u.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                    <Icon name="map-pin" className="h-3.5 w-3.5 flex-none" />
                    {u.location}
                    {u.programs && (
                      <>
                        <span className="mx-1 text-slate-300">·</span>
                        {u.programs}
                      </>
                    )}
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 font-head text-sm font-bold text-blue-600 transition-colors hover:text-blue-500"
                  >
                    En savoir plus
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      )}

      {/* ===== ACCOMPAGNEMENT (résumé, optionnel) ===== */}
      {d.summarySteps && (
        <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Accompagnement
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Un processus clair pour votre réussite
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {d.summarySteps.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_rgba(10,37,64,.06)]"
              >
                <span
                  className={`grid h-9 w-9 flex-none place-items-center rounded-full font-head text-sm font-extrabold text-white ${accentBg}`}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1.5 font-head text-base font-bold text-navy-800">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      )}

      {/* ===== FORFAIT ===== */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-lg px-6">
          {(() => {
            const f = d.forfait;
            return (
              <div className="relative flex flex-col rounded-[32px] bg-slate-100 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(10,37,64,.16)] lg:p-6">
                {/* En-tête : carte blanche flottant sur le panneau gris */}
                <div className="rounded-[24px] bg-white p-6 shadow-[0_20px_45px_rgba(10,37,64,.14)] lg:p-7">
                  {/* Forfait + badge */}
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-head text-xl font-extrabold text-navy-800">{f.label}</h3>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-2.5 py-0.5 font-head text-[10px] font-bold uppercase tracking-wide text-white">
                      <Star className="h-2.5 w-2.5" />
                      {f.badge}
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="mt-5 flex items-end gap-1.5">
                    <span className="font-head text-4xl font-extrabold tracking-tight text-navy-800 lg:text-5xl">
                      {f.price}
                    </span>
                    {f.priceUnit && (
                      <span className="mb-1.5 text-sm text-slate-500">{f.priceUnit}</span>
                    )}
                  </div>
                  {f.priceApprox && (
                    <p className="mt-1.5 text-sm text-slate-500">{f.priceApprox}</p>
                  )}

                  {/* Bouton */}
                  <a
                    href="/contact"
                    className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-4 font-head font-bold text-white shadow-[0_16px_34px_rgba(6,20,39,.28)] transition-transform hover:-translate-y-0.5"
                  >
                    Commencer maintenant
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-navy-800" />
                    Sans engagement · Réponse sous 48&nbsp;h
                  </p>
                </div>

                {/* Prestations — sous la carte, sur le panneau gris */}
                <div className="px-6 pt-6 lg:px-7">
                  <p className="mb-4 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Prestations incluses
                  </p>
                  <ul className="space-y-3.5">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-navy-800/80">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-navy-900 text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ===== DOCUMENTS À PRÉPARER (optionnel) ===== */}
      {d.documents && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Documents à préparer
            </h2>
            <p className="mt-2 text-slate-600">
              Réunissez ces pièces pour constituer votre dossier de candidature.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {d.documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm text-slate-700 shadow-[0_2px_10px_rgba(10,37,64,.05)]"
                >
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-blue-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== POURQUOI ÉTUDIER (optionnel) ===== */}
      {d.whyStudy && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              {d.whyStudy.title}
            </span>
            <h2 className="mb-5 max-w-[20ch] text-3xl font-extrabold text-navy-800 lg:text-4xl">
              {d.whyStudy.title}
            </h2>
            <p className="max-w-3xl text-lg text-slate-600">{d.whyStudy.text}</p>
          </div>
        </section>
      )}

      {/* ===== COÛT DES ÉTUDES ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">Coût des études</h2>
          <p className="mt-2 text-slate-600">{d.studyCosts.subtitle}</p>

          {d.studyCosts.layout === "table" ? (
            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-[0_2px_10px_rgba(10,37,64,.06)]">
              <table className="w-full min-w-[520px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-bold uppercase tracking-wide text-slate-400">
                    {d.studyCosts.columns?.map((c, i) => (
                      <th key={c} className={`px-6 py-4 font-head ${i === 0 ? "" : "text-right"}`}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.studyCosts.rows.map((r) => (
                    <tr
                      key={r.label}
                      className={
                        r.highlight ? "bg-gold-100" : "border-b border-slate-100 last:border-0"
                      }
                    >
                      <td className="px-6 py-4 font-head text-sm font-bold text-navy-800">
                        <span className="flex items-center gap-2.5">
                          {r.icon && (
                            <EmojiIcon emoji={r.icon} className="h-4 w-4 flex-none text-gold-600" />
                          )}
                          {r.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-slate-600">{r.value}</td>
                      <td
                        className={`px-6 py-4 text-right text-sm ${
                          r.highlight ? "font-head font-bold text-navy-800" : "text-slate-600"
                        }`}
                      >
                        {r.value2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : d.studyCosts.layout === "stack" ? (
            <div className="mt-8 space-y-2 rounded-3xl border border-slate-100 bg-white p-3 shadow-[0_2px_10px_rgba(10,37,64,.06)]">
              {d.studyCosts.rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex items-start gap-3 rounded-2xl px-5 py-4 ${
                    r.highlight ? "bg-gold-100" : i % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  {r.icon && (
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-gold-100 text-gold-600">
                      <EmojiIcon emoji={r.icon} className="h-4 w-4" />
                    </span>
                  )}
                  <div>
                    <div className="font-head text-sm font-bold text-navy-800">{r.label}</div>
                    <div
                      className={`mt-0.5 text-sm ${r.highlight ? "font-head font-bold text-navy-800" : "text-slate-500"}`}
                    >
                      {r.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_2px_10px_rgba(10,37,64,.06)]">
              {d.studyCosts.rows.map((r) => (
                <div
                  key={r.label}
                  className={`flex items-center justify-between gap-4 px-6 py-5 ${
                    r.highlight ? "bg-gold-100" : "border-b border-slate-100 last:border-0"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {r.icon && (
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-gold-100 text-gold-600">
                        <EmojiIcon emoji={r.icon} className="h-4 w-4" />
                      </span>
                    )}
                    <span className="font-head text-sm font-bold text-navy-800">{r.label}</span>
                  </span>
                  <span
                    className={`font-head font-bold text-navy-800 ${r.highlight ? "text-lg" : "text-base"}`}
                  >
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          )}
          {d.studyCosts.note && <p className="mt-4 text-xs text-slate-400">{d.studyCosts.note}</p>}
        </div>
      </section>

      {/* ===== COÛT DE LA PROCÉDURE ===== */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">Coût de la procédure</h2>
          <p className="mt-2 text-slate-600">{d.procedureCosts.subtitle}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {d.procedureCosts.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_2px_10px_rgba(10,37,64,.06)]"
              >
                <h3 className="flex items-center gap-3 font-head text-base font-bold text-navy-800">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gold-100 text-gold-600">
                    <EmojiIcon emoji={card.icon} className="h-5 w-5" />
                  </span>
                  {card.title}
                </h3>
                {card.amount && (
                  <div className="mt-4 font-head text-2xl font-extrabold text-navy-800">
                    {card.amount}
                  </div>
                )}
                {card.itemsLabel && (
                  <p className="mt-4 font-head text-xs font-bold uppercase tracking-wide text-slate-400">
                    {card.itemsLabel}
                  </p>
                )}
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {card.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {it.icon && (
                        <EmojiIcon
                          emoji={it.icon}
                          className="mt-0.5 h-4 w-4 flex-none text-gold-500"
                        />
                      )}
                      <span>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {d.procedureCosts.notes && (
            <div className="mt-6 rounded-3xl border border-gold-300/60 bg-gold-100/50 p-6">
              <h3 className="mb-3 font-head text-sm font-bold text-navy-800">Important</h3>
              <ul className="space-y-2.5">
                {d.procedureCosts.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 flex-none text-gold-600">
                      <Info className="h-4 w-4" />
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ===== INFORMATIONS IMPORTANTES ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
            Informations importantes
          </h2>
          <p className="mt-2 text-slate-600">
            Points clés à considérer avant de lancer votre candidature.
          </p>
          <ul className="mt-8 space-y-4">
            {d.importantInfo.map((info) => (
              <li key={info} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 flex-none text-gold-500">
                  {d.importantIcon === "info" ? <Info className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                </span>
                {info}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESSUS DE CANDIDATURE ===== */}
      {d.applicationLayout === "grid" ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <span className="mb-3 inline-block font-head text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
              Processus de candidature
            </span>
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Processus de candidature
            </h2>
            <p className="mt-2 text-slate-500">Durée estimée : {d.applicationDuration}.</p>

            <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {d.applicationSteps.map((s, i) => (
                <div
                  key={s.title}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_rgba(10,37,64,.06)]"
                >
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-blue-500 font-head text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-head text-base font-bold leading-snug text-navy-800">
                      {s.title}
                    </h3>
                    {s.text && (
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
                Processus de candidature
              </h2>
              <p className="mt-2 text-slate-600">
                Suivez les étapes clés pour préparer votre dossier et votre départ vers{" "}
                {d.countryArticle}.
              </p>
            </div>

            <details open className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 font-head text-sm font-bold text-navy-800 shadow-[0_2px_10px_rgba(10,37,64,.05)]">
                <span className="flex items-center gap-2">
                  <Icon
                    name="chevron-down"
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                  />
                  Voir le détail des {d.applicationSteps.length} étapes
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Durée estimée : {d.applicationDuration}
                </span>
              </summary>

              <ol className="mt-4 space-y-3">
                {d.applicationSteps.map((s, i) => (
                  <li
                    key={s.title}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_rgba(10,37,64,.05)]"
                  >
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-blue-500 font-head text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-head text-base font-bold text-navy-800">{s.title}</h3>
                      {s.text && (
                        <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </section>
      )}

      {/* ===== PROGRAMMES (optionnel) ===== */}
      {d.programs && (
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-extrabold text-navy-800 lg:text-4xl">
              Programmes d&apos;études disponibles
            </h2>
            <p className="mt-2 text-slate-600">
              Découvrez les parcours proposés par nos universités partenaires en {d.country}.
            </p>

            <div className="mt-10 space-y-12">
              {d.programs.map((level) => (
                <div key={level.level}>
                  <h3 className="mb-5 font-head text-xl font-bold text-navy-800">{level.level}</h3>
                  <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {level.groups.map((g) => (
                      <div
                        key={g.title}
                        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_rgba(10,37,64,.05)]"
                      >
                        <h4 className="mb-4 flex items-center justify-center gap-2 font-head text-base font-bold text-navy-800">
                          {g.icon && (
                            <EmojiIcon emoji={g.icon} className="h-4 w-4 flex-none text-gold-600" />
                          )}
                          {g.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {g.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <CtaCard
        title={<>Prêt à étudier en {d.country}&nbsp;?</>}
        subtitle="Lancez votre dossier dès aujourd'hui ou échangez avec un conseiller lors d'un premier entretien gratuit."
        ctaLabel="Commencer mon dossier"
      />
    </main>
  );
}
