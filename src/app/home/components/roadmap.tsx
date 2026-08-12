import SectionHeading from "@/components/sectionheading";
import Reveal from "@/components/reveal";
import { RoadmapMilestone } from "@/models/response/content-response";

export default function Roadmap({ milestones }: { milestones: RoadmapMilestone[] }) {
  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-4 py-20 lg:px-8" aria-label="BNN roadmap">
      <SectionHeading
        eyebrow="BNN Roadmap"
        title="Where the movement is going"
        intro="The phases below are managed in the CMS and updated as the movement grows."
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {milestones.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.08}>
            <li className="relative h-full border border-ink/15 bg-ivory p-6 pt-8">
              <span className="absolute -top-3 left-6 bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {m.period}
              </span>
              <p className="eyebrow">{m.phase}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{m.headline}</h3>
              <p className="mt-2 text-sm opacity-75">{m.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
