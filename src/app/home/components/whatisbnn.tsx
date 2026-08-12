import Link from "next/link";
import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";

export default function WhatIsBNN() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="What is the Bold New Normal?"
          title="A movement, not a moment"
          intro="Born from Lucy Quist's book, Bold New Normal is the case — and the community — for African-led transformation. We believe entrepreneurship is the engine: Africans building, leading and scaling the enterprises that change the continent's story."
        />
        <Link href="/about" className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 mt-8">About Bold New Normal</Link>
      </Reveal>
    </section>
  );
}
