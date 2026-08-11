import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import CTASection from "@/components/ctasection";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About BNN",
  description: "The story, purpose and philosophy of Bold New Normal — the case for African-led change and entrepreneurship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bold New Normal"
        title="Changing what normal means for Africa"
        intro="Bold New Normal exists because Africa's story is still too often written by others — and its solutions imported. We're changing both."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="The story" title="From a book to a movement" />
            <p className="mt-6 text-lg opacity-85">
              Lucy Quist wrote The Bold New Normal to argue a simple, radical thing:
              Africa's prosperity will be created by Africans. Not received, not donated —
              created. The book found builders across the continent and the diaspora who
              were already living that thesis. Bold New Normal is the structure that
              connects them.
            </p>
            <p className="mt-4 text-lg opacity-85">
              We treat entrepreneurship as the central engine of change: enterprises that
              create jobs, build productive capacity and scale solutions designed for
              African realities.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { t: "What we seek to change", d: "The expectation that transformation comes from outside. We normalise African ambition, ownership and excellence." },
                { t: "Who we serve", d: "Founders, professionals, students and leaders — on the continent and in the diaspora — ready to build." },
                { t: "How we operate", d: "Sector communities, annual focus themes, events and partnerships that turn ideas into working enterprises." },
                { t: "Intended impact", d: "A generation of African-led enterprises and institutions strong enough to change the continent's trajectory." },
              ].map((b) => (
                <div key={b.t} className="border-l-4 border-gold bg-sand p-5">
                  <h3 className="font-display text-lg font-bold">{b.t}</h3>
                  <p className="mt-1 opacity-80">{b.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/mission-vision" className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Mission & Vision</Link>
          <Link href="/community" className="inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Community sectors</Link>
          <Link href="/events" className="inline-flex items-center gap-2 rounded-xs border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Events</Link>
          <Link href="/#roadmap" className="inline-flex items-center gap-2 rounded-xs border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Roadmap</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
