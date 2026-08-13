"use client";

import { FormStatus } from "@/core/forms";
import type { ReactNode } from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";


/** Shared chrome for all forms: status banner, honeypot, consent, submit. */
export default function FormShell({
  children,
  status,
  message,
  consent,
  onConsentChange,
  submitLabel,
  onSubmit,
  successTitle,
}: {
  children: ReactNode;
  status: FormStatus;
  message: string;
  consent: boolean;
  onConsentChange: (v: boolean) => void;
  submitLabel: string;
  onSubmit: () => void;
  successTitle: string;
}) {
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest/25 bg-forest/5 p-10 text-center">
        <FiCheckCircle className="mx-auto text-4xl text-forest" aria-hidden />
        <h3 className="mt-4 font-display text-2xl text-ink">{successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      noValidate
      className="grid gap-5"
    >
      {children}

      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#1978ba]"
          required
        />
        <span>
          I consent to Bold New Normal storing my details and contacting me
          about this enquiry, in line with its privacy practices.
        </span>
      </label>

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />
          {message}
        </p>
      )}

      <div>
        {/* Every form's submit renders here, so all three CTAs — Express interest,
            Send partnership enquiry, Join the Community — stay identical.
            Styled to match the hero's primary CTA. */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-[#d6ac63] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
