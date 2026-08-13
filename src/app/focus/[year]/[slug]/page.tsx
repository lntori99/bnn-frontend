import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck, FiCompass } from "react-icons/fi";
import Reveal from "@/components/reveal";
import { focusPages, getFocusPage } from "@/data/focus";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";

type Params = { year: string; slug: string };

export function generateStaticParams(): Params[] {
  return focusPages.map(({ year, slug }) => ({ year, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year, slug } = await params;
  const focus = getFocusPage(year, slug);
  if (!focus) return {};
  return {
    title: `${year} Focus: ${focus.theme}`,
    description: focus.intro,
  };
}

export default async function FocusYearPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year, slug } = await params;
  const focus = getFocusPage(year, slug);
  if (!focus) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`Bold New Normal · ${focus.year} Focus`}
        title={focus.theme}
        lead={focus.intro}
        image={focus.image}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
              Why it matters
            </span>
            <p className="mt-4 text-3xl leading-tight sm:text-4xl">
              Why Lucy Quist believes this is critical to Africa's future.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink/70 sm:text-base">
              {focus.why}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              light
              eyebrow="Desired outcomes"
              title="What we're committing to."
            />
            <ul className="mt-8 space-y-4">
              {focus.outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 0.06}>
                  <li className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <FiCheck
                      className="mt-0.5 shrink-0 text-lg text-gold"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-white/75">
                      {o}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              light
              eyebrow="Planned activities"
              title="How the year unfolds."
            />
            <ul className="mt-8 space-y-4">
              {focus.activities.map((a, i) => (
                <Reveal key={a} delay={i * 0.06}>
                  <li className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <FiCompass
                      className="mt-0.5 shrink-0 text-lg text-gold"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-white/75">
                      {a}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-2xl leading-snug text-ink">
            Ready to shape the {focus.year} focus with us?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/community" className="btn-brand">
              Join the Community
            </Link>
            <Link href="/partner" className="btn-outline-dark">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
