import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import CTASection from "@/components/ctasection";
import Reveal from "@/components/reveal";
import { placeholderImages } from "@/data/placeholder-images";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About BNN",
  description:
    "The story, purpose and philosophy of Bold New Normal — the case for African-led change and entrepreneurship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About The Bold New Normal"
        title="A continental vehicle for transformation"
        lead="The Bold New Normal (TBNN) challenges Africans to move beyond survival thinking and intentionally shape the institutions, enterprises and leadership cultures that determine economic outcomes."
        image={placeholderImages.hero}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
              Our story & philosophy
            </span>
            <p className="mt-4 text-3xl tracking-tight sm:text-3xl">
              From a question to a movement.
            </p>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/70 ">
              <p>
                Inspired by Lucy Quist's book, <em>The Bold New Normal</em>,
                the platform challenges Africans to move beyond survival
                thinking and intentionally shape the institutions, enterprises
                and leadership cultures that enable self-actualisation and
                determine economic outcomes.
              </p>
              <p>
                TBNN began by expressing a powerful set of ideas and
                ideologies through the book, conference and podcast, all
                centred on championing a new mindset for Africa. Its next
                chapter is a deliberate shift from simply sharing ideas to
                incubating change: building and mobilising a community of
                doers equipped to translate those ideas into practical action.
              </p>
              <p>
                The Bold New Normal envisages an Africa where prosperity is
                not exceptional but expected; where people have genuine
                opportunities to thrive and fulfil their potential; and where
                ownership, excellence, innovation and economic agency replace
                subsistence, inherited limitations and passive acceptance of
                the status quo.
              </p>
              <p>
                The platform catalyses change through culture, language,
                leadership and infrastructure, beginning with individuals and
                expanding to communities and nations — through thought
                leadership, conferences, media, learning, community-building
                and the activation of change agents.
              </p>
              <p>
                TBNN is aimed at Africans on the continent and across the
                diaspora who want to contribute to Africa's prosperity —
                including professionals, entrepreneurs, business leaders,
                policymakers, investors, students, emerging leaders,
                institutions and changemakers.
              </p>
            </div>
            <Link
              href="/mission-vision"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark"
            >
              Our mission & vision
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal
            delay={0.12}
            className="mx-auto w-full max-w-sm lg:sticky lg:top-28"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src="/images/img_lucy_2.jpg"
                alt="Lucy Quist, founder of Bold New Normal"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
