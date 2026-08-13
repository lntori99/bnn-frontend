import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/pageheader";
import CTASection from "@/components/ctasection";
import Reveal from "@/components/reveal";
import { getFocusPage, getFocusPages } from "@/services/content";
import { placeholderImages } from "@/data/placeholder-images";

interface Props {
  params: Promise<{ year: string; slug: string }>;
}

/** New focus-year pages are added in the CMS — no engineering changes needed. */
export async function generateStaticParams() {
  const pages = await getFocusPages();
  return pages.map((p) => ({ year: String(p.year), slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, slug } = await params;
  const page = await getFocusPage(year, slug);
  return { title: page ? `${page.year} Focus: ${page.title}` : "Focus" };
}

export default async function FocusPage({ params }: Props) {
  const { year, slug } = await params;
  const page = await getFocusPage(year, slug);
  if (!page) notFound();

  return (
    <>
      <PageHeader eyebrow={`${page.year} Focus`} title={page.title} lead={page.intro} image={placeholderImages.focus} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Why it matters</p>
            <p className="mt-4 text-xl leading-relaxed text-ink/70">{page.whyItMatters}</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-ink/10 bg-sand p-7">
              <p className="text-xl font-medium tracking-tight">Desired outcomes</p>
              <ul className="mt-4 space-y-3">
                {page.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span className="text-ink/80">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-ink/10 bg-sand p-7">
              <p className="text-xl font-medium tracking-tight">Planned activities</p>
              <ul className="mt-4 space-y-3">
                {page.activities.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                    <span className="text-ink/80">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
