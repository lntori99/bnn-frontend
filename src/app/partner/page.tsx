import type { Metadata } from "next";
import {
  FiBriefcase,
  FiGift,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

import Reveal from "@/components/reveal";

import PartnerForm from "@/app/partner/components/partnerForm";
import DonationDetails from "@/app/partner/components/donationDetails";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";

export const metadata: Metadata = {
  title: "Partner / Fundraising",
  description:
    "Partner with Bold New Normal — corporate partnerships, sponsorship, programme support, institutional collaboration, philanthropy and in-kind support.",
};

const opportunities = [
  {
    icon: <FiBriefcase />,
    title: "Corporate & strategic partnerships",
    text: "Align your organisation with the movement's mission and communities.",
  },
  {
    icon: <FiLayers />,
    title: "Sponsorship",
    text: "Put your brand behind conferences, briefings and the media library.",
  },
  {
    icon: <FiUsers />,
    title: "Programme support",
    text: "Fund or co-deliver leadership intensives, mentorship and sector programmes.",
  },
  {
    icon: <FiGlobe />,
    title: "Institutional collaboration",
    text: "Universities, DFIs and public institutions working with BNN at scale.",
  },
  {
    icon: <FiHeart />,
    title: "Philanthropy & donations",
    text: "Direct giving that keeps the movement independent and ambitious.",
  },
  {
    icon: <FiGift />,
    title: "In-kind support",
    text: "Venues, media, tools and expertise that multiply what we can do.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partner / fundraising"
        title="Put your weight behind African-led change."
        lead="BNN grows through partners who bring capital, capability and conviction. Here's how organisations and individuals can support the movement."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=75"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ways to partner" title="Six ways in." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink/10 p-7 transition-shadow duration-300 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/10 text-lg text-brand">
                    {o.icon}
                  </span>
                  <p className="mt-4 text-lg text-ink">{o.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {o.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_24rem] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-ink/10 p-7 shadow-sm sm:p-10">
              <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                Start the conversation
              </span>
              <p className="mt-3 text-xl sm:text-2xl">
                Partnership & funding enquiry
              </p>
              <div className="mt-8">
                <PartnerForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:sticky lg:top-28 lg:self-start">
            <DonationDetails />
          </Reveal>
        </div>
      </section>
    </>
  );
}
