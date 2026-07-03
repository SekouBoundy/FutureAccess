"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = { value: string; label: string };

/** Décompose "500+" / "98%" en préfixe + nombre + suffixe pour le compteur */
function parseValue(v: string) {
  const m = v.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] };
}

function CountUp({ value, started }: { value: string; started: boolean }) {
  const parsed = parseValue(value);
  const [current, setCurrent] = useState(0);

  const target = parsed?.target ?? 0;
  useEffect(() => {
    if (!started || target === 0) return;
    const duration = 1600;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  if (!parsed) return <>{value}</>;
  return (
    <>
      {parsed.prefix}
      {current}
      {parsed.suffix}
    </>
  );
}

/**
 * Rangée de chiffres clés avec compteurs animés au scroll.
 * Pensée pour un fond navy (valeurs or, libellés blancs translucides).
 */
export default function StatsBand({
  stats,
  className = "grid grid-cols-2 gap-8 lg:grid-cols-4",
  compact = false,
}: {
  stats: Stat[];
  className?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className={`font-head font-extrabold text-gold-400 ${
              compact ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"
            }`}
          >
            <CountUp value={s.value} started={started} />
          </div>
          <div className="mt-2 text-sm text-white/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
