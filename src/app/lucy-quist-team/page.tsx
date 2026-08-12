import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import TeamGrid from "./components/teamgrid";
import CTASection from "@/components/ctasection";
import { getTeam } from "@/services/team";

export const metadata: Metadata = {
  title: "Lucy Quist & Team",
  description: "Meet Lucy Quist, founder of Bold New Normal, and the team behind the movement.",
};

export default async function TeamPage() {
  const team = await getTeam();
  const lucy = team.find((t) => t.isFounder) ?? team[0];
  const rest = team.filter((t) => t.id !== lucy?.id);

  return (
    <>
      <PageHeader eyebrow="Leadership" title="Lucy Quist & Team" />

      {lucy && (
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" aria-label="Founder profile">
          <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden rounded-2xl border-4 border-ink bg-sand shadow-[10px_10px_0_0_var(--color-forest)]">
              {/* Placeholder portrait until BNN supplies the real photograph. */}
              {lucy.photo ? (
                <Image
                  src={lucy.photo}
                  alt={lucy.name}
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center font-display font-bold text-forest">
                  Photo of {lucy.name}
                </div>
              )}
            </div>
            <div>
              <p className="eyebrow">Founder</p>
              <h2 className="mt-1 text-4xl font-bold">{lucy.name}</h2>
              <p className="mt-1 font-semibold text-forest">{lucy.title}</p>
              <div className="kente-band kente-band--thin mt-4 max-w-40" aria-hidden="true" />
              <p className="mt-6 max-w-3xl text-lg opacity-85">{lucy.fullBio ?? lucy.shortBio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {lucy.links?.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="The team" title="The people behind the movement" />
          <TeamGrid members={rest} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" aria-label="2027 focus">
        <SectionHeading eyebrow="Bold New Normal: 2027 Focus" title="Where we're pointing next" />
        <Link
          href="/focus/2027/governance-leadership"
          className="on-dark mt-8 block max-w-2xl border-4 border-gold bg-ink p-8 text-ivory transition hover:-translate-y-1"
        >
          <p className="font-display text-5xl font-extrabold text-gold">2027</p>
          <h3 className="mt-2 font-display text-2xl font-bold">Governance & Leadership</h3>
          <p className="mt-2 text-ivory/75">
            Why Lucy Quist believes leadership is the multiplier on Africa's future — and
            what BNN will do about it.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 mt-6">Explore the focus</span>
        </Link>
      </section>
      <CTASection />
    </>
  );
}
