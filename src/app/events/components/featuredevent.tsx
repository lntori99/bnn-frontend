import Link from "next/link";
import {
  HiArrowLongRight,
  HiCalendarDays,
  HiClock,
  HiGlobeAlt,
  HiMapPin,
} from "react-icons/hi2";

import Countdown from "@/components/countdown";
import Reveal from "@/components/reveal";
import type { EventItem } from "@/models/response/event-response";
import EventVisual from "./eventvisual";

function formatDate(event: EventItem) {
  const start = new Date(event.startsAt);
  const end = event.endsAt ? new Date(event.endsAt) : null;
  const format = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  if (!end || start.toDateString() === end.toDateString()) return format(start);
  return `${format(start)} – ${format(end)}`;
}

function formatTime(event: EventItem) {
  const start = new Date(event.startsAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const end = event.endsAt
    ? new Date(event.endsAt).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return `${start}${end ? ` – ${end}` : ""} ${event.timezone}`;
}

export default function FeaturedEvent({ event }: { event: EventItem }) {
  const date = new Date(event.startsAt);
  const location = event.isOnline
    ? event.onlineDetails || "Online event"
    : event.venue || "Venue to be announced";

  return (
    <Reveal>
      <article className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_28px_80px_-44px_rgba(36,32,33,0.55)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[22rem] overflow-hidden bg-forest-deep sm:min-h-[30rem] lg:min-h-[38rem]">
          <EventVisual
            image={event.image}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/10" />
          <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-ink/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-md sm:left-7 sm:top-7">
            Featured event
          </div>
          <time
            dateTime={event.startsAt}
            className="absolute bottom-5 left-5 grid h-24 w-24 place-items-center rounded-2xl bg-gold text-center text-ink shadow-xl sm:bottom-7 sm:left-7 sm:h-28 sm:w-28"
          >
            <span>
              <span className="block text-4xl font-bold leading-none sm:text-5xl">
                {date.toLocaleDateString("en-GB", { day: "2-digit" })}
              </span>
              <span className="mt-1.5 block text-xs font-bold uppercase tracking-[0.18em]">
                {date.toLocaleDateString("en-GB", { month: "short" })}
              </span>
            </span>
          </time>
        </div>

        <div className="flex flex-col p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-clay">
            <span>Upcoming</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{event.isOnline ? "Online" : "In person"}</span>
          </div>

          <p className="mt-5 text-3xl tracking-tight text-ink lg:text-4xl">
            <Link
              href={`/events/${event.slug}`}
              className="decoration-gold decoration-2 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              {event.title}
            </Link>
          </p>
          <p className="mt-5 text-sm  text-ink/65 ">
            {event.description}
          </p>

          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
              <HiCalendarDays aria-hidden="true" className="mt-0.5 text-lg text-forest" />
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm font-semibold leading-6 text-ink">
                  <time dateTime={event.startsAt}>{formatDate(event)}</time>
                </dd>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
              <HiClock aria-hidden="true" className="mt-0.5 text-lg text-forest" />
              <div>
                <dt className="sr-only">Time</dt>
                <dd className="text-sm font-semibold leading-6 text-ink">
                  {formatTime(event)}
                </dd>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
              {event.isOnline ? (
                <HiGlobeAlt aria-hidden="true" className="mt-0.5 text-lg text-forest" />
              ) : (
                <HiMapPin aria-hidden="true" className="mt-0.5 text-lg text-forest" />
              )}
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-sm font-semibold leading-6 text-ink">
                  {location}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink/45">
              Event begins in
            </p>
            <Countdown target={event.startsAt} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {event.registrationUrl && (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                Register now
                <HiArrowLongRight aria-hidden="true" className="text-lg" />
              </a>
            )}
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-6 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-forest hover:text-forest focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              Event details
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
