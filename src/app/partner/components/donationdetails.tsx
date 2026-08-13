"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiShield } from "react-icons/fi";
import { donationDetails } from "@/data/site";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — value remains selectable */
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3.5 last:border-0">
      <div>
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/45">{label}</p>
        <p className="mt-0.5 select-all font-medium text-white">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-[#d6ac63]"
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
      >
        {copied ? <FiCheck className="text-[#d6ac63]" /> : <FiCopy />}
      </button>
    </div>
  );
}

/**
 * Bank details render only after BNN has verified them (CMS-managed flag).
 * The values shown in this build are placeholders.
 */
export default function DonationDetails() {
  return (
    <aside className="rounded-3xl bg-ink p-8 sm:p-9" aria-labelledby="donation-heading">
      <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#d6ac63]">
        <FiShield /> Official donation details
      </p>
      <h3 id="donation-heading" className="mt-5 font-display text-2xl text-white">
        Give directly to the movement.
      </h3>

      {donationDetails.verified ? (
        <div className="mt-6">
          <CopyRow label="Account name" value={donationDetails.accountName} />
          <CopyRow label="Bank" value={donationDetails.bankName} />
          <CopyRow label="Account number" value={donationDetails.accountNumber} />
          <CopyRow label="SWIFT / BIC" value={donationDetails.swift} />
          <CopyRow label="Currency" value={donationDetails.currency} />
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/70">
          Verified account details will be published here shortly. In the
          meantime, use the partnership form and we'll get back to you.
        </p>
      )}

      <p className="mt-6 text-xs leading-relaxed text-white/45">{donationDetails.note}</p>
    </aside>
  );
}
