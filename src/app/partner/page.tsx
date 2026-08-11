import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PartnerForm from "./components/PartnerForm";
import DonationDetails from "./components/DonationDetails";
import Reveal from "@/components/Reveal";
import { getDonationDetails } from "@/services/content";

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
        intro="Movements scale on partnership. Here's how organisations and individuals power BNN's work."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {types.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="h-full border-t-4 border-forest bg-sand p-6">
                <h2 className="font-display text-lg font-bold">{p.t}</h2>
                <p className="mt-2 text-sm opacity-80">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-2xl font-bold">Start the conversation</h2>
            <PartnerForm />
          </div>
          <DonationDetails details={donation} />
        </div>
      </section>
    </>
  );
}
