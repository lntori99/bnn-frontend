"use client";

import { useState } from "react";
import FormShell from "@/components/formShell";
import { submitForm, type FormStatus } from "@/core/forms";

const partnershipTypes = [
  "Corporate / strategic partnership",
  "Sponsorship",
  "Programme support",
  "Institutional collaboration",
  "Philanthropy / donation",
  "In-kind support",
];

export default function PartnerForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    country: "",
    partnershipType: partnershipTypes[0],
    support: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const set =
    (k: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("submitting");
    const res = await submitForm("partner", { ...fields, consent });
    setStatus(res.ok ? "success" : "error");
    setMessage(res.message);
  };

  return (
    <FormShell
      status={status}
      message={message}
      consent={consent}
      onConsentChange={setConsent}
      submitLabel="Send partnership enquiry"
      onSubmit={handleSubmit}
      successTitle="Thank you — let's build together"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="p-name" className="field-label">Full name</label>
          <input id="p-name" className="field" value={fields.name} onChange={set("name")} required autoComplete="name" />
        </div>
        <div>
          <label htmlFor="p-email" className="field-label">Email</label>
          <input id="p-email" type="email" className="field" value={fields.email} onChange={set("email")} required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="p-phone" className="field-label">Phone (optional)</label>
          <input id="p-phone" type="tel" className="field" value={fields.phone} onChange={set("phone")} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="p-org" className="field-label">Organisation</label>
          <input id="p-org" className="field" value={fields.organisation} onChange={set("organisation")} required autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="p-country" className="field-label">Country</label>
          <input id="p-country" className="field" value={fields.country} onChange={set("country")} required />
        </div>
        <div>
          <label htmlFor="p-type" className="field-label">Partnership type</label>
          <select id="p-type" className="field" value={fields.partnershipType} onChange={set("partnershipType")}>
            {partnershipTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="p-support" className="field-label">Proposed support / collaboration</label>
        <input id="p-support" className="field" placeholder="e.g. sponsor the 2026 conference, fund a sector programme" value={fields.support} onChange={set("support")} />
      </div>
      <div>
        <label htmlFor="p-message" className="field-label">Message</label>
        <textarea id="p-message" rows={5} className="field" value={fields.message} onChange={set("message")} required />
      </div>
    </FormShell>
  );
}
