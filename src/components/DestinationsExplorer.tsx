"use client";

import { useState } from "react";
import Photo from "@/components/Photo";
import { DESTINATIONS } from "@/data/destinations";

const FILTERS = [
  { slug: "tous", label: "Tous" },
  ...DESTINATIONS.map((d) => ({ slug: d.slug, label: d.country })),
];

export default function DestinationsExplorer() {
  const [active, setActive] = useState("tous");

  const visible =
    active === "tous" ? DESTINATIONS : DESTINATIONS.filter((d) => d.slug === active);

  return (
    <section className="bg-paper py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filtres */}
        <div className="mb-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const isActive = active === f.slug;
            return (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={`rounded-full px-6 py-2.5 font-head text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-navy-800 text-white shadow-[0_8px_20px_rgba(10,37,64,.18)]"
                    : "border border-slate-200 bg-white text-navy-800 hover:border-navy-800/40"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grille de cartes */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => (
            <article
              key={d.slug}
              className="group relative h-[420px] overflow-hidden rounded-3xl bg-navy-800 shadow-[0_12px_34px_rgba(10,37,64,.14)]"
            >
              <Photo
                src={d.image}
                alt={d.country}
                icon={d.flag}
                label={d.country}
                className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Voile dégradé pour la lisibilité */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              />
              {/* Drapeau */}
              <span className="absolute bottom-6 right-5 text-2xl drop-shadow-lg">{d.flag}</span>

              {/* Contenu */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="flex items-center gap-1.5 font-head text-2xl font-extrabold text-white">
                  <span className="text-lg">📍</span>
                  {d.country}
                </h3>
                <div className="mb-4 mt-1.5 flex items-center gap-2.5">
                  <span className="text-sm text-white/75">{d.region}</span>
                  {d.badge && (
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-head text-[10px] font-bold uppercase tracking-wide text-white ${
                        d.badge.tone === "gold" ? "bg-gold-500" : "bg-blue-500"
                      }`}
                    >
                      {d.badge.label}
                    </span>
                  )}
                </div>
                <a
                  href={d.detailed ? `/destinations/${d.slug}` : "/contact"}
                  className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  En savoir plus
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
