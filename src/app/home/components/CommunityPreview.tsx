import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
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
          <Link href="/community" className="btn btn-forest">Join the Community</Link>
        </div>
      </div>
    </section>
  );
}
