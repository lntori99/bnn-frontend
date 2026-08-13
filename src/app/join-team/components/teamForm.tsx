"use client";

import FormShell from "@/components/formShell";
import { FormStatus, submitForm } from "@/core/forms";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";


const areas = [
  "Community & membership",
  "Programmes & events",
  "Partnerships & fundraising",
  "Media & storytelling",
  "Operations",
  "Research & policy",
];

export default function TeamForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    profileUrl: "",
    areaOfInterest: areas[0],
    motivation: "",
  });
  const [cvName, setCvName] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const set =
    (k: keyof typeof fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("submitting");
    // CV binary upload is wired to storage in production; the filename travels with the record.
    const res = await submitForm("join-team", {
      ...fields,
      cvFileName: cvName,
      consent,
    });
    setStatus(res.ok ? "success" : "error");
    setMessage(res.message);
  };

  return (
  
    <FormShell
      status={status}
      message={message}
      consent={consent}
      onConsentChange={setConsent}
      submitLabel="Express interest"
      onSubmit={handleSubmit}
      successTitle="Thank you — we've got your details"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="t-name" className="field-label">
            Full name
          </label>
          <input
            id="t-name"
            className="field"
            value={fields.name}
            onChange={set("name")}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="t-email" className="field-label">
            Email
          </label>
          <input
            id="t-email"
            type="email"
            className="field"
            value={fields.email}
            onChange={set("email")}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="t-phone" className="field-label">
            Phone
          </label>
          <input
            id="t-phone"
            type="tel"
            className="field"
            value={fields.phone}
            onChange={set("phone")}
            required
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="t-location" className="field-label">
            Location
          </label>
          <input
            id="t-location"
            className="field"
            value={fields.location}
            onChange={set("location")}
            required
          />
        </div>
        <div>
          <label htmlFor="t-profession" className="field-label">
            Profession / skills
          </label>
          <input
            id="t-profession"
            className="field"
            value={fields.profession}
            onChange={set("profession")}
            required
          />
        </div>
        <div>
          <label htmlFor="t-profile" className="field-label">
            LinkedIn / profile URL (optional)
          </label>
          <input
            id="t-profile"
            type="url"
            className="field"
            value={fields.profileUrl}
            onChange={set("profileUrl")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="t-area" className="field-label">
            Area of interest
          </label>
          <select
            id="t-area"
            className="field"
            value={fields.areaOfInterest}
            onChange={set("areaOfInterest")}
          >
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="t-motivation" className="field-label">
          Why do you want to join?
        </label>
        <textarea
          id="t-motivation"
          rows={5}
          className="field"
          value={fields.motivation}
          onChange={set("motivation")}
          required
        />
      </div>
      <div>
        <span className="field-label">CV (optional)</span>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-ink/25 px-4 py-3.5 text-sm text-ink/60 transition-colors hover:border-brand hover:text-brand">
          <FiUpload />
          {cvName || "Upload a PDF or Word document"}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(e) => setCvName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>
    </FormShell>
   
  );
}
