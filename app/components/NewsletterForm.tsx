"use client";

import { useForm, ValidationError } from "@formspree/react";
import FaIcon from "./FaIcon";

export default function NewsletterForm() {
  const [state, handleSubmit] = useForm("mnjovdkr");

  if (state.succeeded) {
    return (
      <div className="flex items-center gap-3 text-cyan-soft font-semibold text-sm">
        <FaIcon name="envelope" className="text-cyan-soft" />
        Obrigado! Você está na lista.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
    >
      <div className="flex flex-col gap-1">
        <input
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          required
          className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan-soft w-full sm:w-64"
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="text-red-400 text-xs px-3"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-agreste hover:bg-[#8fa004] disabled:opacity-50 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
      >
        {state.submitting ? "Enviando…" : "Assinar"}
      </button>
    </form>
  );
}
