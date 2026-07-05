"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/Photo";
import { Star, Icon } from "@/components/icons";

export type Testimonial = {
  name: string;
  country: string;
  avatar: string;
  text: string;
};

const REVIEW_MAILTO =
  "mailto:futureaccessmali@gmail.com?subject=Mon%20avis%20sur%20FutureAccess";

/**
 * Carrousel horizontal de témoignages.
 * - défile tout seul vers la droite, une carte à la fois (~4,5 s)
 * - l'utilisateur peut défiler/glisser à la main : l'auto-défilement se met
 *   en pause puis reprend après quelques secondes d'inactivité
 * - boucle au début une fois la dernière carte atteinte
 * - désactivé si l'utilisateur préfère moins de mouvement
 */
export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pause = () => {
      pausedUntil.current = Date.now() + 6000;
    };
    track.addEventListener("pointerdown", pause);
    track.addEventListener("wheel", pause, { passive: true });
    track.addEventListener("touchmove", pause, { passive: true });

    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      const card = track.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const step = card.offsetWidth + 20; // largeur carte + gap-5 (20px)
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);

    return () => {
      clearInterval(id);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("wheel", pause);
      track.removeEventListener("touchmove", pause);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((t) => (
        <article
          data-card
          key={t.name}
          className="flex w-[82%] flex-none snap-start flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[46%] lg:w-[31%]"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="flex gap-0.5 text-gold-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-xs font-semibold text-white/50">5/5</span>
          </div>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/80">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <Photo
              src={t.avatar}
              alt={t.name}
              label=""
              className="h-10 w-10 flex-none rounded-full"
            />
            <div>
              <p className="font-head text-sm font-bold text-white">{t.name}</p>
              <p className="text-xs text-white/60">{t.country}</p>
            </div>
          </div>
        </article>
      ))}

      {/* Carte « donne ton avis » */}
      <a
        data-card
        href={REVIEW_MAILTO}
        className="group flex w-[82%] flex-none snap-start flex-col justify-center gap-3 rounded-3xl border border-dashed border-gold-400/40 bg-white/5 p-6 text-center transition-colors hover:border-gold-400/70 sm:w-[46%] lg:w-[31%]"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
          <Icon name="mail" className="h-6 w-6" />
        </span>
        <h3 className="font-head text-lg font-bold text-white">Vous avez fait appel à nous&nbsp;?</h3>
        <p className="text-sm text-white/70">
          Partagez votre expérience — votre avis aide les prochains étudiants à nous faire
          confiance.
        </p>
        <span className="mt-1 inline-flex items-center justify-center gap-1.5 font-head text-sm font-bold text-gold-400">
          Donner mon avis
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </a>
    </div>
  );
}
