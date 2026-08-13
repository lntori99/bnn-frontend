import type { Metadata } from "next";
import {
  FiAward,
  FiCompass,
  FiEye,
  FiGlobe,
  FiLayers,
  FiRefreshCw,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";
import AnimatedIcon from "@/components/animatedicon";
import CTASection from "@/components/ctasection";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Bold New Normal's mission, vision, values and intended long-term impact.",
};

const themes = [
  {
    icon: <FiTrendingUp />,
    t: "Entrepreneurship",
    d: "Enterprise as the engine that converts ambition into jobs, products and prosperity.",
  },
  {
    icon: <FiUsers />,
    t: "Leadership",
    d: "Developing leaders with the competence and character to steward growth.",
  },
  {
    icon: <FiGlobe />,
    t: "African agency",
    d: "Africans as the authors, owners and primary beneficiaries of Africa's transformation.",
  },
  {
    icon: <FiLayers />,
    t: "Scalable enterprise",
    d: "Building beyond survival businesses — toward organisations that scale across borders.",
  },
  {
    icon: <FiRefreshCw />,
    t: "Sustainable development",
    d: "Growth that compounds: economically sound, socially grounded, environmentally responsible.",
  },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission & Vision"
        title="Why we exist. Where we're going."
        image={placeholderImages.collaboration}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="on-dark group h-full rounded-2xl bg-forest-deep p-8 text-ivory sm:p-10">
              <AnimatedIcon tone="onDark">
                <FiCompass />
              </AnimatedIcon>
              <p className="eyebrow mt-5">Mission</p>
              <p className="mt-4 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                To mobilise Africans to build, lead and scale the enterprises
                and institutions that transform the continent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="on-dark group h-full rounded-2xl bg-ink p-8 text-ivory sm:p-10">
              <AnimatedIcon tone="onDark" delay={0.1}>
                <FiEye />
              </AnimatedIcon>
              <p className="eyebrow mt-5">Vision</p>
              <p className="mt-4 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                An Africa where ambition is normal, excellence is expected, and
                African-led solutions shape the world.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="What we stand on"
            title="The commitments that guide the work"
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-ivory p-6 transition-shadow duration-300 hover:shadow-lg">
                <AnimatedIcon delay={i * 0.05}>{v.icon}</AnimatedIcon>
                <p className="mt-4 text-lg font-medium tracking-tight text-forest">
                  {v.t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {v.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="on-dark group mt-16 rounded-2xl bg-ink p-8 text-ivory sm:p-10">
            <AnimatedIcon tone="onDark">
              <FiAward />
            </AnimatedIcon>
            <p className="eyebrow mt-5">Long-term impact</p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ivory/85">
              Success looks like a measurable shift: more African enterprises
              operating at scale, more Africans leading globally significant
              institutions, and a continental narrative defined by what Africans
              build.
            </p>
          </div>
        </Reveal>
      </section>
      <CTASection />
    </>
  );
}
