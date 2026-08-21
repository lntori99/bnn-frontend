import Link from "next/link";
import {
  HiArrowDown,
  HiArrowLongRight,
  HiCalendarDays,
} from "react-icons/hi2";

import Reveal from "@/components/reveal";
import type { EventItem } from "@/models/response/event-response";
import EventVisual from "./eventvisual";

function dateParts(value: string) {
  const date = new Date(value);

  return {
    day: date.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: date.toLocaleDateString("en-GB", { month: "short" }),
  };
}

export default function EventsHero({
  nextEvent,
  fallbackImage,
}: {
  nextEvent?: EventItem;
  fallbackImage: string;
}) {
  const date = nextEvent ? dateParts(nextEvent.startsAt) : null;

  return (
    <header className="on-dark relative isolate -mt-16 overflow-hidden bg-ink pt-32 text-ivory sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute -left-44 top-20 h-96 w-96 rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="absolute -left-28 top-36 h-64 w-64 rounded-full border border-gold/10"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:pb-28">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-ivory/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]" />
              BNN Events
            </span>
            <p className="mt-7 text-5xl sm:text-6xl lg:text-7xl  tracking-[-0.045em] text-ivory">
              Convene.
              <br />
              Connect.
              <br />
              <span className="text-gold">Build.</span>
            </p>
            <p className="mt-8 max-w-lg text-sm leading-7 text-ivory/70 sm:text-sm sm:leading-8">
              The Bold New Normal Flagship Conference has convened four editions
              in Accra, Ghana — plus a first UK edition in London — establishing
              itself as a platform for high-level dialogue, leadership formation
              and cross-sector engagement.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#upcoming"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                See what&apos;s next
                <HiArrowDown aria-hidden="true" />
              </a>
              <Link
                href="/media"
                className="group inline-flex items-center gap-3 px-2 py-3 text-sm font-semibold text-ivory/75 transition-colors hover:text-gold focus-visible:rounded-full focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                Explore past conversations
                <HiArrowLongRight
                  aria-hidden="true"
                  className="text-lg transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-gold sm:-right-10 sm:-top-10 sm:h-48 sm:w-48"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 h-28 w-28 border border-ivory/20 sm:-bottom-8 sm:-left-8 sm:h-40 sm:w-40"
            />

            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-forest-deep shadow-2xl shadow-black/30 sm:rounded-[2.25rem] lg:aspect-[6/5]">
              <EventVisual
                image={nextEvent?.image ?? fallbackImage}
                sizes="(min-width: 1024px) 56vw, 100vw"
                preload
                className="scale-[1.01]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-ink/20 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                {nextEvent && date ? (
                  <Link
                    href={`/events/${nextEvent.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-ivory/95 p-3.5 text-ink shadow-xl backdrop-blur-md transition hover:bg-white focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4 sm:gap-5 sm:p-4"
                  >
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gold text-center sm:h-20 sm:w-20">
                      <span>
                        <span className="block text-2xl font-bold leading-none sm:text-3xl">
                          {date.day}
                        </span>
                        <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.18em]">
                          {date.month}
                        </span>
                      </span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-clay">
                        <HiCalendarDays aria-hidden="true" />
                        Next gathering
                      </span>
                      <span className="mt-1.5 block line-clamp-2  text-lg leading-tight sm:text-xl">
                        {nextEvent.title}
                      </span>
                    </span>
                    <HiArrowLongRight
                      aria-hidden="true"
                      className="hidden shrink-0 text-xl text-forest transition-transform group-hover:translate-x-1 sm:block"
                    />
                  </Link>
                ) : (
                  <div className="rounded-2xl border border-white/60 bg-ivory/95 p-5 text-ink shadow-xl backdrop-blur-md">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-clay">
                      The next gathering
                    </p>
                    <p className="mt-1.5 font-display text-xl">
                      New dates are taking shape.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="kente-band relative" aria-hidden="true" />
    </header>
  );
}
