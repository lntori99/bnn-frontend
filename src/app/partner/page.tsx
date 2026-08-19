import type { Metadata } from "next";
import Image from "next/image";
import {
  FiBriefcase,
  FiGift,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiUsers,
} from "react-icons/fi";
import Reveal from "@/components/reveal";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import PartnerForm from "./components/partnerForm";
import DonationDetails from "./components/donationDetails";

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

/**
 * Past partners & sponsors. To add a logo, drop the file in public/partners/
 * using the path below and set `logo` on that entry — until then it shows as a text pill.
 */
const pastPartners: { name: string; logo?: string }[] = [
  { name: "Margins ID Group" }, // /partners/img_partner_margins-id-group.png
  { name: "Stanbic Bank Ghana" }, // /partners/img_partner_stanbic-bank-ghana.png
  { name: "MTN Ghana" }, // /partners/img_partner_mtn-ghana.png
  { name: "Telecel Ghana" }, // /partners/img_partner_telecel-ghana.png
  { name: "Ecobank" }, // /partners/img_partner_ecobank.png
  { name: "Petrosol Ghana" }, // /partners/img_partner_petrosol-ghana.png
  { name: "CSquared Ghana" }, // /partners/img_partner_csquared-ghana.png
  { name: "Ashesi University" }, // /partners/img_partner_ashesi-university.png
  { name: "Dominion TV" }, // /partners/img_partner_dominion-tv.png
  { name: "Sunny FM" }, // /partners/img_partner_sunny-fm.png
  { name: "Joy FM" }, // /partners/img_partner_joy-fm.png
  { name: "Type" }, // /partners/img_partner_type.png
];

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partner / fundraising"
        title="Put your weight behind African-led change."
        lead="TBNN grows through partners who bring capital, capability and conviction to Africa's transformation. Here's how organisations and individuals can support the movement."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=75"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-ink/70 sm:text-base">
            TBNN welcomes partnerships with organisations and individuals that
            share its commitment to Africa's transformation and shared
            prosperity. Relevant partners include businesses, financial
            institutions, development organisations, academic institutions,
            philanthropic organisations, media organisations, policymakers,
            investors and other institutions able to contribute expertise,
            funding, networks, platforms or implementation support.
            Partnerships can support the H-E-A-R-T Agenda, the Change Agent
            Network, learning and capacity building, conferences and
            convenings, regional expansion, corporate programmes, thought
            leadership and the activation of practical projects.
          </p>
          <div className="mt-14">
            <SectionHeading eyebrow="Ways to partner" title="Six ways in." />
          </div>
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

          <div className="mt-16">
            <SectionHeading
              eyebrow="Past support"
              title="Partners and sponsors who've backed the movement"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {pastPartners.map((p) => (
                <div
                  key={p.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-ink/10 bg-sand p-5"
                  title={p.name}
                >
                  {p.logo ? (
                    <div className="relative h-full w-full grayscale transition-all duration-300 hover:grayscale-0">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-center text-sm font-medium text-ink/70">
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
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
