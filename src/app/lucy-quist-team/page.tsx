import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import TeamGrid from "./components/teamgrid";
import CTASection from "@/components/ctasection";
import { getTeam } from "@/services/team";

export const metadata: Metadata = {
  title: "Lucy Quist & Team",
  description:
    "Meet Lucy Quist, founder of Bold New Normal, and the team behind the movement.",
};

export default async function TeamPage() {
  const team = await getTeam();
  const lucy = team.find((t) => t.isFounder) ?? team[0];
  const rest = team.filter((t) => t.id !== lucy?.id);

  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Lucy Quist & Team"
        image="/images/img_lucy.jpg"
      />

      {lucy && (
        <section
          className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8"
          aria-label="Founder profile"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl">
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
                <div className="flex h-full items-center justify-center bg-sand p-6 text-center font-medium text-forest">
                  Photo of {lucy.name}
                </div>
              )}
            </div>
            <div>
              <span className="inline-flex mb-2 items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                Founder
              </span>
              <p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
                {lucy.name}
              </p>
              <p className="mt-1 font-semibold text-forest">{lucy.title}</p>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/70 sm:text-base">
                {lucy.fullBio ?? lucy.shortBio}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {lucy.links?.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-current px-4 py-2 text-sm font-medium transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="The people behind the movement"
          />
          <TeamGrid members={rest} />
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8"
        aria-label="2027 focus"
      >
        <SectionHeading
          eyebrow="Bold New Normal: 2027 Focus"
          title="Where we're pointing next"
        />
        <Link
          href="/focus/2027/governance-leadership"
          className="group on-dark mt-8 block max-w-2xl rounded-2xl bg-ink p-8 text-ivory transition hover:-translate-y-1 sm:p-10"
        >
          <p className="text-5xl font-medium tracking-tight text-[#d6ac63]">
            2027
          </p>
          <p className="mt-2 text-2xl font-medium tracking-tight">
            Governance & Leadership
          </p>
          <p className="mt-2 text-ivory/75">
            Why Lucy Quist believes leadership is the multiplier on Africa's
            future — and what BNN will do about it.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d6ac63] px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out group-hover:bg-[#d6ac63]-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
            Explore the focus
            <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </section>
      <CTASection />
    </>
  );
}
