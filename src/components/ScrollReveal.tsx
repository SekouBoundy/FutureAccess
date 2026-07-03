"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observateur global des éléments [data-reveal].
 * Monté une fois dans le layout ; re-scanne le DOM à chaque navigation.
 * Le style de départ/arrivée vit dans globals.css (section Mouvement).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Filet de sécurité si le script inline du layout n'a pas tourné
    document.documentElement.classList.add("js");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
