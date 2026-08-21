import Link from "next/link";
import {
  HiArrowLongRight,
  HiArrowUpRight,
  HiGlobeAlt,
  HiMapPin,
  HiPlayCircle,
} from "react-icons/hi2";

import type { EventItem } from "@/models/response/event-response";
import EventVisual from "./eventvisual";

export default function EventCard({
  event,
  past = false,
}: {
  event: EventItem;
  past?: boolean;
}) {
  const date = new Date(event.startsAt);
  const location = event.isOnline
    ? "Online"
    : event.venue || "Venue to be announced";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_18px_55px_-42px_rgba(36,32,33,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-38px_rgba(36,32,33,0.6)]">
      <Link
        href={`/events/${event.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-[-3px]"
        aria-label={`View details for ${event.title}`}
      >
        <EventVisual
          image={event.image}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/5" />
        <time
          dateTime={event.startsAt}
          className="absolute bottom-4 left-4 rounded-xl bg-gold px-3.5 py-2 text-center text-ink shadow-lg"
        >
          <span className="block text-2xl font-bold leading-none">
            {date.toLocaleDateString("en-GB", { day: "2-digit" })}
          </span>
          <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.16em]">
            {date.toLocaleDateString("en-GB", { month: "short" })}{" "}
            {date.getFullYear()}
          </span>
        </time>
        <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-ink/65 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ivory backdrop-blur-md">
          {past ? "From the archive" : "Upcoming"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start gap-2 text-xs leading-5 text-ink/55">
          {event.isOnline ? (
            <HiGlobeAlt
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-base text-forest"
            />
          ) : (
            <HiMapPin
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-base text-forest"
            />
          )}
          <span className="line-clamp-2">{location}</span>
        </div>

        <p className="mt-4 text-xl line-clamp-2 tracking-tight text-ink">
          <Link
            href={`/events/${event.slug}`}
            className="decoration-gold decoration-2 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            {event.title}
          </Link>
        </p>
        <p className="mt-3 line-clamp-3 text-sm  text-ink/60">
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
          {past && event.watchUrl ? (
            <a
              href={event.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors hover:text-forest-deep focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              <HiPlayCircle aria-hidden="true" className="text-lg" />
              Watch / Listen
              <HiArrowUpRight aria-hidden="true" />
            </a>
          ) : !past && event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors hover:text-forest-deep focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              Register
              <HiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/35">
              {event.timezone}
            </span>
          )}

          <Link
            href={`/events/${event.slug}`}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-forest focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            Details
            <HiArrowLongRight
              aria-hidden="true"
              className="text-lg transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
