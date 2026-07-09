"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/icons";

export type Service = {
  slug: string;
  icon: string;
  title: string;
  text: string;
  detail: string;
  bullets: string[];
};

export type ServicePhase = {
  label: string;
  services: Service[];
};

export default function ServicesGrid({ phases }: { phases: ServicePhase[] }) {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-6">
          {phases.map((phase, phaseIndex) => (
            <div key={phase.label}>
              <div data-reveal className="mb-7 flex items-center gap-4">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-navy-800 font-head text-sm font-bold text-white">
                  {phaseIndex + 1}
                </span>
                <h2 className="font-head text-xl font-extrabold text-navy-800 lg:text-2xl">
                  {phase.label}
                </h2>
                <span className="h-px flex-1 bg-slate-200" aria-hidden />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {phase.services.map((s, i) => (
                  <div
                    key={s.slug}
                    data-reveal={i % 3}
                    className="group rounded-3xl bg-white p-7 shadow-[0_2px_10px_rgba(10,37,64,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,37,64,.10)]"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-head text-xl font-bold text-navy-800">{s.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    <button
                      type="button"
                      onClick={() => setActive(s)}
                      className="inline-flex items-center gap-1.5 font-head text-sm font-bold text-blue-600 transition-colors hover:text-blue-500"
                    >
                      Découvrir
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {active &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" aria-hidden />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-7 shadow-[0_30px_70px_rgba(10,37,64,.28)] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy-800"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>

            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <Icon name={active.icon} className="h-6 w-6" />
            </div>

            <h3 id="service-modal-title" className="mb-3 font-head text-2xl font-bold text-navy-800">
              {active.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">{active.detail}</p>

            <p className="mb-3 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Ce que ça comprend
            </p>
            <ul className="mb-7 space-y-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy-800/80">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-navy-900 text-white">
                    <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-navy-800 py-3.5 text-center font-head font-bold text-white transition hover:bg-navy-700"
            >
              Demander ce service
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
          </div>,
          document.body,
        )}
    </>
  );
}
