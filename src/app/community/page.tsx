import type { Metadata } from "next";
import { Suspense } from "react";

import JoinCommunity from "@/app/community/components/joinCommunity";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Join the Community",
  description:
    "Join The Bold New Normal's Change Agent Network across the H-E-A-R-T Agenda — Healthcare, Education, Agriculture, Real Enterprise and Trade Beyond Borders.",
};

const stages = [
  {
    t: "Gather",
    d: "The first step is to gather individuals through events, storytelling, regional hubs and open community invitations.",
  },
  {
    t: "Equip",
    d: "Those who are ready to go further are equipped with the mindset, capacity and tools to lead through structured onboarding, learning, mentorship and exposure to TBNN's ethos and frameworks.",
  },
  {
    t: "Mobilise",
    d: "Change agents are then mobilised into meaningful, focused work through communities aligned to the H-E-A-R-T Agenda — contributing to projects and solutions addressing real needs in Healthcare, Education, Agriculture, Real Enterprise and Trade Beyond Borders.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the community"
        title="Become a change agent."
        lead="Joining The Bold New Normal means becoming part of a growing Change Agent Network — a community of people who feel called to create meaningful change and contribute to shared prosperity."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=75"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="TBNN's community model recognises that people begin at different stages."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stages.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 p-7">
                  <p className="text-lg font-medium tracking-tight text-forest">
                    {s.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink/70 sm:text-base">
            The goal is therefore not simply to build an audience, but a
            community of doers capable of turning ideas into action and
            contributing to behavioural, institutional and systemic
            transformation.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense>
            <JoinCommunity />
          </Suspense>
        </div>
      </section>
    </>
  );
}
