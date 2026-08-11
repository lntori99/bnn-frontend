import Link from "next/link";
import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";
import { sectors } from "@/data/sectors";

export default function CommunityPreview() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Join the Community"
          title="Five sectors. One movement."
          intro="Pick the arena where you'll build. Each community connects members to collaborate on real African solutions."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sectors.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.06}>
              <Link
                href={`/community?sector=${s.key}`}
                className="block h-full border-t-4 border-forest bg-ivory p-5 transition hover:-translate-y-1 hover:border-gold"
              >
                <h3 className="font-display text-base font-bold">{s.name}</h3>
                <p className="mt-2 text-sm opacity-75">{s.scope}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/community" className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Join the Community</Link>
        </div>
      </div>
    </section>
  );
}
