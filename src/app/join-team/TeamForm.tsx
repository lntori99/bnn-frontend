"use client";

import { useState } from "react";
import FormStatus from "@/components/FormStatus";
import { submitJoinTeam } from "@/services/forms";
import { errorMessage } from "@/lib/api-error";
import { AREAS_OF_INTEREST } from "@/core/app-constants";

export default function TeamForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    form.set("consent", form.get("consent") === "on" ? "true" : "false");
    try {
      await submitJoinTeam(form);
      setStatus("success");
    } catch (err) {
      setError(errorMessage(err));
      setStatus("error");
    }
  }

  if (status === "success") {
    return <FormStatus status="success" success="Thanks — your expression of interest has been received. You'll get an acknowledgement by email, and the team will follow up if there's a fit." />;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="t-name">Full name</label>
          <input id="t-name" name="name" className="field" required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="t-email">Email</label>
          <input id="t-email" name="email" type="email" className="field" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="t-phone">Phone</label>
          <input id="t-phone" name="phone" type="tel" className="field" required autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="t-location">Location</label>
          <input id="t-location" name="location" className="field" required />
        </div>
        <div>
          <label htmlFor="t-profession">Profession / skills</label>
          <input id="t-profession" name="profession" className="field" required />
        </div>
        <div>
          <label htmlFor="t-url">LinkedIn / profile URL</label>
          <input id="t-url" name="profileUrl" type="url" className="field" placeholder="https://" />
        </div>
      </div>
      <div>
        <label htmlFor="t-area">Area of interest</label>
        <select id="t-area" name="areaOfInterest" className="field" required>
          {AREAS_OF_INTEREST.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="t-why">Why do you want to join BNN?</label>
        <textarea id="t-why" name="motivation" className="field" rows={4} required />
      </div>
      <div>
        <label htmlFor="t-cv">CV upload (optional, PDF)</label>
        <input id="t-cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="field" />
      </div>
      <label className="flex items-start gap-3 text-sm font-normal">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-forest" />
        <span>I consent to BNN storing my details and CV to assess my expression of interest.</span>
      </label>
      <FormStatus status={status} success="" error={error} />
      <button type="submit" disabled={status === "sending"} className="btn btn-forest w-fit disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Submit expression of interest"}
      </button>
    </form>
  );
}
