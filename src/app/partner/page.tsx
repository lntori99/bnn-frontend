import type { Metadata } from "next";
import PageHeader from "@/components/pageheader";
import PartnerForm from "./components/partnerform";
import DonationDetails from "./components/donationdetails";
import Reveal from "@/components/reveal";
import { getDonationDetails } from "@/services/content";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "Partner / Fundraising",
  description: "Partner with Bold New Normal — sponsorship, strategic partnership, programme support, institutional collaboration and philanthropy.",
};

const types = [
  { t: "Corporate & strategic partnerships", d: "Align your organisation with African-led enterprise at continental scale." },
  { t: "Sponsorship", d: "Back the annual conference, sector convenings and community programmes." },
  { t: "Programme support", d: "Fund a specific programme — from leadership development to sector accelerators." },
  { t: "Institutional collaboration", d: "Universities, DFIs and public institutions building alongside BNN." },
  { t: "Philanthropy & donations", d: "Direct financial support for the movement's mission." },
  { t: "In-kind support", d: "Venues, tools, media, expertise — capability the movement can use." },
];

export default async function PartnerPage() {
  const donation = await getDonationDetails();

  return (
    <>
      <PageHeader
        eyebrow="Partner / Fundraising"
        title="Fund the bold new normal"
        lead="Movements scale on partnership. Here's how organisations and individuals power BNN's work."
        image={placeholderImages.focus}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {types.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-ink/10 bg-sand p-6">
                <p className="text-lg font-medium tracking-tight">{p.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-2xl font-medium tracking-tight">Start the conversation</p>
            <PartnerForm />
          </div>
          <DonationDetails details={donation} />
        </div>
      </section>
    </>
  );
}
