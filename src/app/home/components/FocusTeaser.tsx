import Link from "next/link";
import Reveal from "@/components/reveal";

export default function FocusTeaser() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
            <p className="font-display text-6xl font-extrabold text-forest sm:text-7xl">2027</p>
            <div>
              <p className="eyebrow">Annual focus</p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Governance & Leadership</h2>
              <p className="mt-2 max-w-xl opacity-80">
                In 2027 the movement turns to the leadership Africa's enterprises and institutions need to scale.
              </p>
            </div>
            <Link href="/focus/2027/governance-leadership" className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
              Explore the 2027 focus
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
