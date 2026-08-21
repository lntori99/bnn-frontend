import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

import CTASection from "@/components/ctasection";
import Reveal from "@/components/reveal";
import { placeholderImages } from "@/data/placeholder-images";
import { getEvents } from "@/services/events";
import EventCard from "./components/eventcard";
import EventsHero from "./components/eventshero";
import FeaturedEvent from "./components/featuredevent";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Bold New Normal events and the archive of past convenings.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const now = Date.now();
  const isUpcoming = (event: (typeof events)[number]) => {
    const eventEnd = new Date(event.endsAt ?? event.startsAt).getTime();
    return event.status === "upcoming" && eventEnd >= now;
  };

  const upcoming = events
    .filter(isUpcoming)
    .sort(
      (a, b) =>
        new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime() ||
        Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  const past = events
    .filter((event) => !isUpcoming(event))
    .sort(
      (a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime(),
    );
  const [featuredEvent, ...moreUpcoming] = upcoming;

  return (
    <>
      <EventsHero
        nextEvent={featuredEvent}
        fallbackImage={placeholderImages.events.conference2027}
      />

      <section id="upcoming" className="scroll-mt-16 bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <span className="inline-flex mb-4 items-center gap-2 rounded-full border border-ink/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-ink backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink shadow-[0_0_8px_#d6ac63]" />
                  Upcoming gatherings
                </span>
                <p className="mt-4 text-4xl tracking-tight text-ink sm:text-5xl">
                  Make room for
                  <br className="hidden sm:block" /> what&apos;s next.
                </p>
              </div>
              <p className="max-w-2xl text-sm  text-ink/60 sm:text-base lg:justify-self-end">
                Meet the people asking sharper questions, building practical
                answers and moving Africa&apos;s bold new normal from ambition
                to action.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14">
            {featuredEvent ? (
              <FeaturedEvent event={featuredEvent} />
            ) : (
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-ivory sm:p-12 lg:p-16">
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[36px] border-gold/20"
                  />
                  <div className="relative max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      Dates coming soon
                    </p>
                    <h3 className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl">
                      The next gathering is taking shape.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ivory/65 sm:text-base">
                      Join the BNN community to meet fellow builders and hear
                      about new events as soon as they are announced.
                    </p>
                    <Link
                      href="/community"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      Join the community
                      <HiArrowLongRight
                        aria-hidden="true"
                        className="text-lg"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {moreUpcoming.length > 0 && (
            <div className="mt-16 border-t border-ink/10 pt-12">
              <h3 className="text-2xl text-ink sm:text-3xl">
                More ways to gather
              </h3>
              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {moreUpcoming.map((event, index) => (
                  <Reveal key={event.id} delay={(index % 3) * 0.07}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="bg-sand/65 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="inline-flex mb-4 items-center gap-2 rounded-full border border-ink/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-ink backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink shadow-[0_0_8px_#d6ac63]" />
                    From the archive
                  </span>
                  <p className="mt-2 text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                    Gatherings that moved us.
                  </p>
                </div>
                <Link
                  href="/media"
                  className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-forest transition-colors hover:text-forest-deep focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
                >
                  Watch the conversations
                  <HiArrowLongRight
                    aria-hidden="true"
                    className="text-lg transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
              <p className="mt-4 max-w-4xl text-sm  text-ink/60">
                Across the conferences, TBNN has convened senior leaders,
                executives, policymakers, entrepreneurs and emerging leaders;
                created space for future-focused conversations on prosperity,
                leadership and institutional development; sparked collaborations
                and communities of practice; and grown a community committed to
                rethinking Africa&apos;s development through ownership,
                excellence and collective action.
              </p>
              <div className="mt-8 h-px bg-ink/12" aria-hidden="true" />
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event, index) => (
                <Reveal key={event.id} delay={(index % 3) * 0.07}>
                  <EventCard event={event} past />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
