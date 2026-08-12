"use client";

import { useState } from "react";
import FormStatus from "@/components/formstatus";
import { submitPartnerEnquiry } from "@/services/forms";
import { errorMessage } from "@/lib/api-error";
import { PARTNERSHIP_TYPES } from "@/core/app-constants";

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    try {
      await submitPartnerEnquiry({
        name: String(f.get("name")),
        email: String(f.get("email")),
        phone: String(f.get("phone") ?? ""),
        organisation: String(f.get("organisation")),
        country: String(f.get("country")),
        partnershipType: String(f.get("partnershipType")),
        proposal: String(f.get("proposal")),
        message: String(f.get("message") ?? ""),
        consent: f.get("consent") === "on",
      });
      setStatus("success");
    } catch (err) {
      setError(errorMessage(err));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6">
        <FormStatus status="success" success="Enquiry received. The partnerships team will reply to the email address you provided." />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="p-name">Full name</label>
          <input id="p-name" name="name" className="field" required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="p-email">Email</label>
          <input id="p-email" name="email" type="email" className="field" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="p-phone">Phone (optional)</label>
          <input id="p-phone" name="phone" type="tel" className="field" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="p-org">Organisation</label>
          <input id="p-org" name="organisation" className="field" required autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="p-country">Country</label>
          <input id="p-country" name="country" className="field" required autoComplete="country-name" />
        </div>
        <div>
          <label htmlFor="p-type">Partnership type</label>
          <select id="p-type" name="partnershipType" className="field" required>
            {PARTNERSHIP_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="p-proposal">Proposed support / collaboration</label>
        <textarea id="p-proposal" name="proposal" className="field" rows={3} required />
      </div>
      <div>
        <label htmlFor="p-message">Message (optional)</label>
        <textarea id="p-message" name="message" className="field" rows={3} />
      </div>
      <label className="flex items-start gap-3 text-sm font-normal">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-forest" />
        <span>I consent to BNN storing this information to respond to my enquiry.</span>
      </label>
      <FormStatus status={status} success="" error={error} />
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 w-fit disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
