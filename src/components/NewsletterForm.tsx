"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Votre email"
        className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-6 py-3.5 font-head text-sm font-bold text-white shadow-[0_14px_34px_rgba(201,162,39,.34)]"
      >
        {sent ? "Merci !" : "S'inscrire"}
      </button>
    </form>
  );
}
