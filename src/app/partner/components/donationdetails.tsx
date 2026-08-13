"use client";

import { useState } from "react";
import { HiClipboardDocument, HiCheck, HiLockClosed } from "react-icons/hi2";
import { DonationDetails as Details } from "@/models/response/content-response";

export default function DonationDetails({ details }: { details: Details }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(label: string, value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  const rows: { label: string; value?: string }[] = [
    { label: "Bank", value: details.bankName },
    { label: "Account name", value: details.accountName },
    { label: "Account number", value: details.accountNumber },
    { label: "SWIFT / BIC", value: details.swift },
  ];

  return (
    <aside className="on-dark h-fit rounded-2xl bg-ink p-6 text-ivory" aria-label="Donation details">
      <div className="flex items-center gap-2">
        <HiLockClosed className="h-5 w-5 text-gold" aria-hidden="true" />
        <p className="text-lg font-medium tracking-tight">Donate directly</p>
      </div>
      {/* Bank details are CMS-managed and only published once verified by BNN */}
      {details.verified ? (
        <ul className="mt-5 space-y-4">
          {rows.filter((r) => r.value).map((r) => (
            <li key={r.label} className="flex items-center justify-between gap-3 border-b border-ivory/15 pb-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-ivory/60">{r.label}</p>
                <p className="font-mono font-semibold">{r.value}</p>
              </div>
              <button
                onClick={() => copy(r.label, r.value!)}
                className="p-2 text-gold hover:text-gold-soft"
                aria-label={`Copy ${r.label}`}
              >
                {copied === r.label ? <HiCheck className="h-5 w-5" /> : <HiClipboardDocument className="h-5 w-5" />}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-ivory/75">
          Official BNN account details will appear here once verified and published by the
          BNN team. In the meantime, use the enquiry form and we'll guide you through
          supporting the movement.
        </p>
      )}
      {details.note && <p className="mt-4 text-xs text-ivory/60">{details.note}</p>}
    </aside>
  );
}
