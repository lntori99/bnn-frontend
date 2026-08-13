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
        eyebrow="About Bold New Normal"
        title="Changing what normal means for Africa"
        lead="Bold New Normal exists because Africa's story is still too often written by others — and its solutions imported. We're changing both."
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
                Bold New Normal was founded by Lucy Quist around a question she
                kept meeting in boardrooms, classrooms and communities: why do
                we accept a "normal" for Africa that no one would accept
                anywhere else?
              </p>
              <p>
                Her answer — first argued in the book{" "}
                <em>The Bold New Normal</em> — is that transformation follows
                agency. When Africans decide to build, lead and scale solutions
                themselves, prosperity stops being an aspiration and becomes an
                outcome. Entrepreneurship is the engine: real enterprises,
                creating real jobs, solving real problems.
              </p>
              <p>
                The movement exists to make that answer practical — connecting
                people into sector communities, focusing each year's energy on
                one lever of change, and celebrating the builders proving the
                thesis every day.
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
