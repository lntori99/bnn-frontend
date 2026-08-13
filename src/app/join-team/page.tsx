import type { Metadata } from "next";

import Reveal from "@/components/reveal";
import TeamForm from "@/app/join-team/components/teamForm";
import PageHeader from "@/components/pageheader";

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Help run Bold New Normal itself — express your interest in joining the team behind the movement.",
};

const traits = [
  "Believers in African agency who act like it",
  "Builders who finish what they start",
  "Generous collaborators across borders and disciplines",
  "People with the ambition to make prosperity normal",
];

export default function JoinTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the team"
        title="Run the movement with us."
        lead="Beyond the communities, a small team keeps BNN moving — programmes, media, partnerships, operations. If that's you, we'd love to hear from you."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=75"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl bg-ink p-8 lg:sticky lg:top-28">
              <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                Who we're looking for
              </span>
              <ul className="mt-6 space-y-4">
                {traits.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ac63]"
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-white/45">
                We review every expression of interest and reply by email. Your
                details are stored securely and never shared.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/10 p-7 shadow-sm sm:p-10">
              <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                Expression of interest
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl">
                Tell us who you are.
              </h2>
              <div className="mt-8">
                <TeamForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
