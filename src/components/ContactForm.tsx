"use client";

import { useState } from "react";
import { DESTINATIONS } from "@/data/destinations";
import { DESTINATION_DETAILS } from "@/data/destination-details";
import { Icon } from "@/components/icons";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
const labelClass = "mb-1.5 block font-head text-sm font-semibold text-navy-800";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [destination, setDestination] = useState("");
  const [program, setProgram] = useState("");

  // Niveaux disponibles pour le pays choisi (vide si le pays n'a pas de programmes définis)
  const levels = (destination && DESTINATION_DETAILS[destination]?.programs) || [];

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-[0_2px_10px_rgba(10,37,64,.06)]">
        <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-gold-100 text-gold-600">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mb-2 font-head text-2xl font-bold text-navy-800">Message envoyé&nbsp;!</h3>
        <p className="mb-7 max-w-sm text-sm text-slate-600">
          Merci de nous avoir contactés. Notre équipe vous répondra sous 12&nbsp;heures.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setDestination("");
            setProgram("");
          }}
          className="rounded-full border border-slate-200 px-6 py-2.5 font-head text-sm font-bold text-navy-800 transition-colors hover:border-navy-800/40"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setSending(true);

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              email: data.get("email"),
              phone: data.get("phone"),
              destination: data.get("destination"),
              program: data.get("program"),
              message: data.get("message"),
            }),
          });

          if (!res.ok) {
            const { error: message } = await res.json().catch(() => ({}));
            throw new Error(message || "L'envoi a échoué.");
          }

          setSent(true);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : "Une erreur est survenue. Veuillez réessayer."
          );
        } finally {
          setSending(false);
        }
      }}
      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_2px_10px_rgba(10,37,64,.06)] lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet
          </label>
          <input id="name" name="name" type="text" required placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+223 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>
            Destination souhaitée
          </label>
          <select
            id="destination"
            name="destination"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setProgram(""); // on repart de zéro : les programmes dépendent du pays
            }}
            className={inputClass}
          >
            <option value="" disabled>
              Choisir…
            </option>
            {DESTINATIONS.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.country}
              </option>
            ))}
            <option value="autre">Autre pays</option>
            <option value="indecis">Je ne sais pas encore</option>
          </select>
        </div>
      </div>

      {/* Champ dépendant : n'apparaît que si le pays choisi a des programmes définis */}
      {levels.length > 0 && (
        <div className="mt-5">
          <label htmlFor="program" className={labelClass}>
            Programme souhaité
          </label>
          <select
            id="program"
            name="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Choisir un niveau…
            </option>
            {levels.map((lvl) => (
              <option key={lvl.level} value={lvl.level}>
                {lvl.level}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre projet d'études…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-12 mb-2 w-full rounded-full bg-gradient-to-br from-gold-400 to-gold-600 py-3.5 font-head font-bold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {sending ? "Envoi en cours…" : "Envoyer le message"}
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        {/* Réponse garantie sous 12&nbsp;heures. Vos informations restent confidentielles. */}
      </p>
    </form>
  );
}
