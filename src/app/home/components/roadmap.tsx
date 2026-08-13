import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";
import { RoadmapMilestone } from "@/models/response/content-response";

export default function Roadmap({
  milestones,
}: {
  milestones: RoadmapMilestone[];
}) {
  return (
    <section
      id="roadmap"
      className="on-dark relative overflow-hidden bg-ink py-20 text-ivory sm:py-28"
      aria-label="BNN roadmap"
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="The BNN roadmap"
          title="Where the movement is heading."
          intro="Key phases and milestones on the road to the bold new normal."
        />

        <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:thin]">
          <ol
            className="relative grid min-w-[64rem] gap-6"
            style={{
              gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))`,
            }}
          >
            {/* The meridian, horizontal: the movement's throughline */}
            <div
              className="absolute inset-x-0 top-[5px] h-px bg-linear-to-r from-gold/10 via-gold/70 to-gold/10"
              aria-hidden="true"
            />
            {milestones.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <li className="relative pt-8">
                  <span
                    className="absolute left-0 top-0 block h-3 w-3 rounded-full border border-gold bg-ink"
                    aria-hidden="true"
                  />

                  <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                    {m.phase}
                  </span>
                  <p className="mt-1  text-xl text-[#d6ac63]">{m.period}</p>
                  <p className="mt-2  text-lg leading-snug text-ivory">
                    {m.headline}
                  </p>
                  <p className="mt-3 text-sm  text-ivory/60">{m.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
