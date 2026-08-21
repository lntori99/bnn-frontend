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

import AnimatedIcon from "@/components/animatedicon";
import CTASection from "@/components/ctasection";
import PageHeader from "@/components/pageheader";
import Reveal from "@/components/reveal";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Bold New Normal's mission, vision, values and intended long-term impact.",
};

const themes = [
  {
    icon: <FiGlobe aria-hidden="true" focusable="false" />,
    t: "Culture",
    d: "Shifting the narratives and norms that shape how Africans see prosperity and their own agency.",
  },
  {
    icon: <FiUsers aria-hidden="true" focusable="false" />,
    t: "Language",
    d: "Reframing the words we use, because language can either enable or constrain transformation.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" focusable="false" />,
    t: "Leadership",
    d: "Equipping leaders with the competence and character to steward institutions and enterprises.",
  },
  {
    icon: <FiLayers aria-hidden="true" focusable="false" />,
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
        lead="Bold New Normal's mission, vision, values and intended long-term impact — the compass behind every conference, community and conversation."
        image={placeholderImages.collaboration}
      />

      <div>
        <section className="bg-ivory py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white  lg:grid lg:grid-cols-[1.15fr_0.85fr]">
              <article className="relative p-7 sm:p-10 lg:p-14">
                <span
                  className="absolute right-7 top-4 font-display text-[6rem] leading-none text-ink/[0.035] sm:right-10 sm:text-[8rem]"
                  aria-hidden="true"
                >
                  01
                </span>
                <Reveal>
                  <div className="relative">
                    <AnimatedIcon>
                      <FiCompass aria-hidden="true" focusable="false" />
                    </AnimatedIcon>
                    <p className="mt-6 text-3xl tracking-tight text-forest-deep sm:text-4xl">
                      Mission
                    </p>
                    <div className="mt-5 h-1 w-20 bg-gold" aria-hidden="true" />
                    <p className="mt-8 max-w-2xl  text-2xl leading-snug text-ink sm:text-base">
                      TBNN delivers its mission through two complementary roles.
                    </p>
                    <p className="mt-7 max-w-2xl text-sm  text-ink/70">
                      First, as a{" "}
                      <strong className="font-semibold text-ink">
                        Change Agent Incubator &amp; Community
                      </strong>
                      , it trains, equips and activates a network of change agents
                      to lead transformation in their spheres of passion and
                      influence. Second, as a{" "}
                      <strong className="font-semibold text-ink">
                        Thought Leadership Organisation
                      </strong>
                      , it spreads the ethos of a bolder new normal through
                      powerful ideas, insights and ideologies that shift thinking
                      and drive behavioural and systemic change across the
                      continent.
                    </p>
                  </div>
                </Reveal>
              </article>

              <article className="on-dark relative overflow-hidden bg-forest-deep p-7 text-ivory sm:p-10 lg:p-14">
                <div
                  className="absolute -bottom-28 -right-28 size-80 rounded-full border border-ivory/10"
                  aria-hidden="true"
                >
                  <div className="absolute inset-14 rounded-full border border-gold/20" />
                  <div className="absolute inset-28 rounded-full border border-ivory/10" />
                </div>
                <span
                  className="absolute right-7 top-4 font-display text-[6rem] leading-none text-white/[0.045] sm:right-10 sm:text-[8rem]"
                  aria-hidden="true"
                >
                  02
                </span>
                <Reveal delay={0.1}>
                  <div className="relative">
                    <AnimatedIcon tone="onDark" delay={0.1}>
                      <FiEye aria-hidden="true" focusable="false" />
                    </AnimatedIcon>
                    <h2 className="mt-6 text-3xl tracking-tight text-ivory sm:text-4xl">
                      Vision
                    </h2>
                    <div className="mt-5 h-1 w-20 bg-gold" aria-hidden="true" />
                    <p className="mt-8  text-2xl leading-snug text-ivory sm:text-base">
                      To be a continental vehicle for transformation that leads
                      to prosperity, where every person has the unfettered
                      opportunity to thrive and fulfil their God-given potential.
                    </p>
                    <p className="mt-7 text-sm  text-ivory/75">
                      TBNN catalyses change through culture, language, leadership
                      and infrastructure — starting with individuals and expanding
                      to communities and nations.
                    </p>
                  </div>
                </Reveal>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bg-sand/55 py-16 sm:py-24 lg:py-28"
          aria-labelledby="catalyse-title"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/25 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-forest-deep">
                  <span className="size-1.5 rounded-full bg-forest-deep" />
                  How we catalyse change
                </span>
                <p
                  id="catalyse-title"
                  className="mt-6 max-w-xl text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
                >
                  Starting with individuals. Expanding to nations.
                </p>
                <div className="kente-band mt-7 max-w-48" aria-hidden="true" />
              </div>
            </Reveal>

            <ol className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white px-6 shadow-[0_18px_50px_rgba(36,32,33,0.06)] sm:px-9">
              {themes.map((theme, index) => (
                <li
                  key={theme.t}
                  className="border-b border-ink/10 py-8 last:border-b-0 sm:py-10"
                >
                  <Reveal delay={index * 0.06}>
                    <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                      <div className="flex flex-col items-center gap-3">
                        <span
                          className="font-display text-sm text-forest-deep/60"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <AnimatedIcon delay={index * 0.06}>
                          {theme.icon}
                        </AnimatedIcon>
                      </div>
                      <div className="pt-6">
                        <p className="text-xl tracking-tight text-forest-deep sm:text-2xl">
                          {theme.t}
                        </p>
                        <p className="mt-3 max-w-xl text-sm  text-ink/70 sm:text-base">
                          {theme.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="on-dark relative overflow-hidden bg-ink text-ivory"
          aria-labelledby="impact-title"
        >
          <div className="kente-band" aria-hidden="true" />
          <div
            className="absolute -right-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full border border-ivory/[0.06]"
            aria-hidden="true"
          >
            <div className="absolute inset-20 rounded-full border border-gold/10" />
            <div className="absolute inset-40 rounded-full bg-forest/10 blur-2xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16 lg:px-8 lg:py-28">
            <Reveal>
              <div>
                <AnimatedIcon tone="onDark">
                  <FiAward aria-hidden="true" focusable="false" />
                </AnimatedIcon>
                <p
                  id="impact-title"
                  className="mt-6 text-4xl tracking-tight text-ivory sm:text-5xl"
                >
                  Long-term impact
                </p>
                <div className="mt-6 h-1 w-20 bg-gold" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-ivory/15 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                <p className="max-w-4xl tracking-tight text-xl  text-ivory/90 sm:text-2xl lg:text-3xl">
                  The wider vision is the materialisation of a bold new Africa
                  where self-actualisation and prosperity are possible because
                  the right opportunities are created for all to thrive and not
                  merely survive. It calls for a fundamental shift in mindset,
                  leadership and collective responsibility so that the existing
                  status quo is no longer accepted.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
