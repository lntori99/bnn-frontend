import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function WhatIsBNN() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="What is the Bold New Normal?"
          title="A movement, not a moment"
          intro="Born from Lucy Quist's book, Bold New Normal is the case — and the community — for African-led transformation. We believe entrepreneurship is the engine: Africans building, leading and scaling the enterprises that change the continent's story."
        />
        <Link href="/about" className="btn btn-forest mt-8">About Bold New Normal</Link>
      </Reveal>
    </section>
  );
}
