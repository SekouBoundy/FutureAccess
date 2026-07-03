"use client";

import { useState } from "react";
import { DESTINATIONS } from "@/data/destinations";
import { Icon } from "@/components/icons";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
const labelClass = "mb-1.5 block font-head text-sm font-semibold text-navy-800";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-[0_2px_10px_rgba(10,37,64,.06)]">
        <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-gold-100 text-gold-600">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mb-2 font-head text-2xl font-bold text-navy-800">Message envoyé&nbsp;!</h3>
        <p className="mb-7 max-w-sm text-sm text-slate-600">
          Merci de nous avoir contactés. Notre équipe vous répondra sous 24&nbsp;heures.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="rounded-full border border-slate-200 px-6 py-2.5 font-head text-sm font-bold text-navy-800 transition-colors hover:border-navy-800/40"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
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
          <select id="destination" name="destination" defaultValue="" className={inputClass}>
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

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-br from-gold-400 to-gold-600 py-3.5 font-head font-bold text-[#3a2c08] shadow-[0_14px_34px_rgba(201,162,39,.34)] transition-transform hover:-translate-y-0.5"
      >
        Envoyer le message
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        Réponse garantie sous 24&nbsp;heures. Vos informations restent confidentielles.
      </p>
    </form>
  );
}
