import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionheading";
import { sectors } from "@/data/sectors";

export default function CommunityPreview() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Join the community"
            title="Five sectors. One movement."
            intro="Choose the sector where you want to connect, contribute, collaborate and build."
          />
          <Reveal delay={0.1}>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Join the Community
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {sectors.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.06}>
              <Link
                href={`/community?sector=${s.key}`}
                className="group relative block aspect-3/4 overflow-hidden rounded-2xl bg-ink"
              >
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className=" text-lg leading-snug text-ivory">{s.name}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#d6ac63] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Join this sector <HiArrowUpRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
