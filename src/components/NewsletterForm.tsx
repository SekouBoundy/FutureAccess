"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");

        const form = e.currentTarget;
        const email = new FormData(form).get("email");

        setSending(true);
        try {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          if (!res.ok) {
            const { error: message } = await res.json().catch(() => ({}));
            throw new Error(message || "L'inscription a échoué.");
          }

          setSent(true);
          form.reset();
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
    >
      <div className="w-full flex-1">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre email"
          className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none"
        />
        {error && <p className="mt-2 text-left text-xs font-medium text-red-300">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-6 py-3.5 font-head text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Envoi…" : sent ? "Merci !" : "S'inscrire"}
      </button>
    </form>
  );
}
