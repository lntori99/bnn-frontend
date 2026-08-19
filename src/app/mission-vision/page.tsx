import type { Metadata } from "next";
import {
  FiAward,
  FiCompass,
  FiEye,
  FiGlobe,
  FiLayers,
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
    icon: <FiGlobe />,
    t: "Culture",
    d: "Shifting the narratives and norms that shape how Africans see prosperity and their own agency.",
  },
  {
    icon: <FiUsers />,
    t: "Language",
    d: "Reframing the words we use, because language can either enable or constrain transformation.",
  },
  {
    icon: <FiTrendingUp />,
    t: "Leadership",
    d: "Equipping leaders with the competence and character to steward institutions and enterprises.",
  },
  {
    icon: <FiLayers />,
    t: "Infrastructure",
    d: "Building the systems and institutions that let individual change compound into national change.",
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
              <p className="mt-4 text-lg leading-relaxed text-ivory/90">
                TBNN delivers its mission through two complementary roles.
                First, as a <strong className="font-medium text-ivory">Change Agent Incubator &amp; Community</strong>,
                it trains, equips and activates a network of change agents to
                lead transformation in their spheres of passion and influence.
                Second, as a <strong className="font-medium text-ivory">Thought Leadership Organisation</strong>,
                it spreads the ethos of a bolder new normal through powerful
                ideas, insights and ideologies that shift thinking and drive
                behavioural and systemic change across the continent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="on-dark group h-full rounded-2xl bg-ink p-8 text-ivory sm:p-10">
              <AnimatedIcon tone="onDark" delay={0.1}>
                <FiEye />
              </AnimatedIcon>
              <p className="eyebrow mt-5">Vision</p>
              <p className="mt-4 text-lg leading-relaxed text-ivory/90">
                To be a continental vehicle for transformation that leads to
                prosperity, where every person has the unfettered opportunity
                to thrive and fulfil their God-given potential. TBNN catalyses
                change through culture, language, leadership and
                infrastructure — starting with individuals and expanding to
                communities and nations.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="How we catalyse change"
            title="Starting with individuals. Expanding to nations."
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
              The wider vision is the materialisation of a bold new Africa
              where self-actualisation and prosperity are possible because
              the right opportunities are created for all to thrive and not
              merely survive. It calls for a fundamental shift in mindset,
              leadership and collective responsibility so that the existing
              status quo is no longer accepted.
            </p>
          </div>
        </Reveal>
      </section>
      <CTASection />
    </>
  );
}
