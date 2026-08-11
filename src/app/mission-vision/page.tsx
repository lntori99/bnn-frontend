import type { Metadata } from "next";
import PageHeader from "@/components/pageheader";
import Reveal from "@/components/reveal";
import CTASection from "@/components/ctasection";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description: "Bold New Normal's mission, vision, values and intended long-term impact.",
};

const themes = [
  { t: "Entrepreneurship", d: "Enterprise as the engine that converts ambition into jobs, products and prosperity." },
  { t: "Leadership", d: "Developing leaders with the competence and character to steward growth." },
  { t: "African agency", d: "Africans as the authors, owners and primary beneficiaries of Africa's transformation." },
  { t: "Scalable enterprise", d: "Building beyond survival businesses — toward organisations that scale across borders." },
  { t: "Sustainable development", d: "Growth that compounds: economically sound, socially grounded, environmentally responsible." },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader eyebrow="Mission & Vision" title="Why we exist. Where we're going." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="on-dark h-full bg-forest-deep p-8 text-ivory sm:p-10">
              <p className="eyebrow">Mission</p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                To mobilise Africans to build, lead and scale the enterprises and
                institutions that transform the continent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="on-dark h-full bg-ink p-8 text-ivory sm:p-10">
              <p className="eyebrow">Vision</p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                An Africa where ambition is normal, excellence is expected, and
                African-led solutions shape the world.
              </p>
            </div>
          </Reveal>
        </div>

        <h2 className="mt-16 text-3xl font-bold">What we stand on</h2>
        <div className="kente-band kente-band--thin mt-4 max-w-40" aria-hidden="true" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <div className="h-full border border-ink/15 bg-ivory p-6">
                <h3 className="font-display text-lg font-bold text-forest">{v.t}</h3>
                <p className="mt-2 opacity-80">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-l-4 border-gold bg-sand p-6 sm:p-8">
          <p className="eyebrow">Long-term impact</p>
          <p className="mt-3 max-w-3xl text-lg opacity-85">
            Success looks like a measurable shift: more African enterprises operating at
            scale, more Africans leading globally significant institutions, and a
            continental narrative defined by what Africans build.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
