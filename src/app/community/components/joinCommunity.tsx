"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FiCheck } from "react-icons/fi";
import Reveal from "@/components/reveal";
import FormShell from "@/components/formShell";
import { submitForm, type FormStatus } from "@/core/forms";
import { sectors } from "@/data/sectors";

export default function JoinCommunity() {
  const params = useSearchParams();
  const preselected =
    sectors.find((s) => s.key === params.get("sector"))?.key ?? "";

  const [sector, setSector] = useState(preselected);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    country: "",
    occupation: "",
    interests: "",
    contribution: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const set =
    (k: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!sector) {
      setStatus("error");
      setMessage("Choose the sector community you'd like to join first.");
      return;
    }
    setStatus("submitting");
    const res = await submitForm("community", { ...fields, sector, consent });
    setStatus(res.ok ? "success" : "error");
    setMessage(res.message);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_26rem] lg:gap-16">
      {/* Step 1 — pick a sector */}
      <div>
        <Reveal>
          <p className="eyebrow">Step 1</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Choose your sector.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sectors.map((s, i) => {
            const selected = sector === s.key;
            return (
              <Reveal key={s.key} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setSector(s.key)}
                  aria-pressed={selected}
                  className={`group relative block w-full overflow-hidden rounded-2xl border-2 text-left transition-all duration-300 ${
                    selected
                      ? "border-gold shadow-[0_10px_40px_rgba(214,172,99,0.25)]"
                      : "border-transparent"
                  }`}
                >
                  <div className="relative aspect-[16/9]">
                    {s.image && (
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                    {selected && (
                      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-[#d6ac63] text-ink">
                        <FiCheck />
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-lg text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/65">
                      {s.scope}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Step 2 — the form */}
      <Reveal delay={0.1}>
        <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm sm:p-9 lg:sticky lg:top-28">
          <p className="eyebrow">Step 2</p>
          <h2 className="mt-3 text-2xl">Tell us about you.</h2>
          <p className="mt-2 text-sm text-ink/60">
            {sector
              ? `Joining: ${sectors.find((s) => s.key === sector)?.name}`
              : "Select a sector to complete your application."}
          </p>

          <div className="mt-7">
            <FormShell
              status={status}
              message={message}
              consent={consent}
              onConsentChange={setConsent}
              submitLabel="Join the Community"
              onSubmit={handleSubmit}
              successTitle="Welcome to the movement"
            >
              <div>
                <label htmlFor="c-name" className="field-label">
                  Full name
                </label>
                <input
                  id="c-name"
                  className="field"
                  value={fields.name}
                  onChange={set("name")}
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="field-label">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  className="field"
                  value={fields.email}
                  onChange={set("email")}
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="c-country" className="field-label">
                  Country / location
                </label>
                <input
                  id="c-country"
                  className="field"
                  value={fields.country}
                  onChange={set("country")}
                  required
                />
              </div>
              <div>
                <label htmlFor="c-occupation" className="field-label">
                  Occupation / organisation
                </label>
                <input
                  id="c-occupation"
                  className="field"
                  value={fields.occupation}
                  onChange={set("occupation")}
                  required
                />
              </div>
              <div>
                <label htmlFor="c-interests" className="field-label">
                  Areas of interest
                </label>
                <input
                  id="c-interests"
                  className="field"
                  placeholder="e.g. healthtech, distribution, policy"
                  value={fields.interests}
                  onChange={set("interests")}
                  required
                />
              </div>
              <div>
                <label htmlFor="c-contribution" className="field-label">
                  How would you like to contribute?
                </label>
                <textarea
                  id="c-contribution"
                  rows={4}
                  className="field"
                  value={fields.contribution}
                  onChange={set("contribution")}
                  required
                />
              </div>
            </FormShell>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
