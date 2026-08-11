import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { getFocusPage, getFocusPages } from "@/services/content";

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
      <PageHeader eyebrow={`${page.year} Focus`} title={page.title} intro={page.intro} />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Why it matters</p>
            <p className="mt-4 text-xl leading-relaxed opacity-85">{page.whyItMatters}</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full border-t-4 border-forest bg-sand p-7">
              <h2 className="font-display text-xl font-bold">Desired outcomes</h2>
              <ul className="mt-4 space-y-3">
                {page.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-gold" aria-hidden="true" />
                    <span className="opacity-85">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border-t-4 border-gold bg-sand p-7">
              <h2 className="font-display text-xl font-bold">Planned activities</h2>
              <ul className="mt-4 space-y-3">
                {page.activities.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-forest" aria-hidden="true" />
                    <span className="opacity-85">{a}</span>
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
