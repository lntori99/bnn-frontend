"use client";

import { useState } from "react";
import FormStatus from "@/components/formstatus";
import { submitCommunityJoin } from "@/services/forms";
import { errorMessage } from "@/lib/api-error";
import { sectors } from "@/data/sectors";

export default function JoinForm({ sector }: { sector: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string>();
  const sectorName = sectors.find((s) => s.key === sector)?.name ?? sector;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    try {
      await submitCommunityJoin({
        name: String(f.get("name")),
        email: String(f.get("email")),
        country: String(f.get("country")),
        sector,
        occupation: String(f.get("occupation")),
        interests: String(f.get("interests")),
        contribution: String(f.get("contribution")),
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
      <div className="mt-6 max-w-2xl">
        <FormStatus status="success" success={`You're in. Your application to the ${sectorName} community has been received — we'll be in touch by email.`} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid max-w-2xl gap-5">
      <p className="border-l-4 border-gold bg-sand p-4 text-sm">
        Joining the <strong>{sectorName}</strong> community.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="j-name">Full name</label>
          <input id="j-name" name="name" className="field" required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="j-email">Email</label>
          <input id="j-email" name="email" type="email" className="field" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="j-country">Country / location</label>
          <input id="j-country" name="country" className="field" required autoComplete="country-name" />
        </div>
        <div>
          <label htmlFor="j-occupation">Occupation / organisation</label>
          <input id="j-occupation" name="occupation" className="field" required />
        </div>
      </div>
      <div>
        <label htmlFor="j-interests">Areas of interest</label>
        <input id="j-interests" name="interests" className="field" required placeholder="e.g. agritech, distribution, policy" />
      </div>
      <div>
        <label htmlFor="j-contribution">How would you like to contribute?</label>
        <textarea id="j-contribution" name="contribution" className="field" rows={4} required />
      </div>
      <label className="flex items-start gap-3 text-sm font-normal">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-forest" />
        <span>
          I consent to Bold New Normal storing this information to manage my community
          membership and contact me about BNN activities.
        </span>
      </label>
      <FormStatus status={status} success="" error={error} />
      <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 w-fit disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Join the community"}
      </button>
    </form>
  );
}
