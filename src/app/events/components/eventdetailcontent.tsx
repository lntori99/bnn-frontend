import Link from "next/link";
import {
  HiArrowLongLeft,
  HiArrowUpRight,
  HiCalendarDays,
  HiClock,
  HiGlobeAlt,
  HiListBullet,
  HiMapPin,
  HiMicrophone,
  HiPlayCircle,
} from "react-icons/hi2";

import Reveal from "@/components/reveal";
import type { EventItem } from "@/models/response/event-response";

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
  const format = (value: string) =>
    new Date(value).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const start = format(event.startsAt);
  const end = event.endsAt ? format(event.endsAt) : null;

  return `${start}${end ? ` – ${end}` : ""} ${event.timezone}`;
}

function speakerInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function EventDetailContent({
  event,
  isPast,
}: {
  event: EventItem;
  isPast: boolean;
}) {
  const location = event.isOnline
    ? event.onlineDetails || "Online event"
    : event.venue || "Venue to be announced";
  const agenda = event.agenda?.trim();
  const speakers = event.speakers ?? [];

  return (
    <>
      <div className="kente-band" aria-hidden="true" />

      <section
        aria-labelledby="event-overview-title"
        className="relative overflow-hidden bg-ivory py-16 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-12 h-96 w-96 rounded-full border-[56px] border-gold/10"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start xl:gap-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-white/70 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clay">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  About the gathering
                </span>
                <p
                  id="event-overview-title"
                  className="mt-6 text-3xl leading-[1.04] tracking-tight text-ink sm:text-4xl"
                >
                  About this event
                </p>
                <div
                  aria-hidden="true"
                  className="kente-band kente-band--thin mt-6 max-w-36"
                />
                <p className="mt-8 text-sm text-ink/70 sm:text-base">
                  {event.description}
                </p>
              </div>
            </Reveal>

            <aside
              aria-labelledby="event-glance-title"
              className="h-fit lg:sticky lg:top-24"
            >
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_24px_70px_-48px_rgba(36,32,33,0.7)]">
                  <div className="h-1.5 bg-gold" aria-hidden="true" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-clay">
                          At a glance
                        </p>
                        <h2
                          id="event-glance-title"
                          className="mt-2 text-2xl leading-tight text-ink"
                        >
                          Event details
                        </h2>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] ${
                          isPast
                            ? "bg-sand text-ink/60"
                            : "bg-forest/10 text-forest"
                        }`}
                      >
                        {isPast ? "Past" : "Upcoming"}
                      </span>
                    </div>

                    <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                      <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
                        <HiCalendarDays
                          aria-hidden="true"
                          className="mt-0.5 text-lg text-forest"
                        />
                        <div>
                          <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/40">
                            Date
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leading-6 text-ink">
                            <time dateTime={event.startsAt}>
                              {formatDate(event)}
                            </time>
                          </dd>
                        </div>
                      </div>

                      <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
                        <HiClock
                          aria-hidden="true"
                          className="mt-0.5 text-lg text-forest"
                        />
                        <div>
                          <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/40">
                            Time
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leading-6 text-ink">
                            {formatTime(event)}
                          </dd>
                        </div>
                      </div>

                      <div className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
                        {event.isOnline ? (
                          <HiGlobeAlt
                            aria-hidden="true"
                            className="mt-0.5 text-lg text-forest"
                          />
                        ) : (
                          <HiMapPin
                            aria-hidden="true"
                            className="mt-0.5 text-lg text-forest"
                          />
                        )}
                        <div>
                          <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/40">
                            {event.isOnline ? "Format" : "Location"}
                          </dt>
                          <dd className="mt-1 break-words text-sm font-semibold leading-6 text-ink">
                            {location}
                          </dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-6">
                      {!isPast && event.registrationUrl ? (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
                        >
                          Register for this event
                          <HiArrowUpRight aria-hidden="true" />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : isPast && event.watchUrl ? (
                        <a
                          href={event.watchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-ivory transition duration-200 hover:-translate-y-0.5 hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
                        >
                          <HiPlayCircle aria-hidden="true" className="text-lg" />
                          Watch / Listen
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <p className="rounded-2xl bg-sand/70 px-4 py-3 text-sm leading-6 text-ink/60">
                          {isPast
                            ? "This gathering has concluded."
                            : "Registration details will be announced soon."}
                        </p>
                      )}
                    </div>

                    <Link
                      href="/events"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink/60 transition-colors hover:text-forest focus-visible:rounded-sm focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      <HiArrowLongLeft aria-hidden="true" className="text-lg" />
                      Back to all events
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {agenda && (
        <section
          id="agenda"
          aria-labelledby="event-agenda-title"
          className="on-dark relative overflow-hidden bg-ink text-ivory"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[60px] border-gold/10"
          />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20 lg:px-8">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-ivory/5 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold">
                  <HiListBullet aria-hidden="true" />
                  The programme
                </span>
                <h2
                  id="event-agenda-title"
                  className="mt-6 text-4xl leading-[1.04] text-ivory sm:text-5xl"
                >
                  What to expect
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.75rem] border border-ivory/15 bg-ivory/5 p-6 backdrop-blur-sm sm:p-8">
                <p className="whitespace-pre-line border-l-2 border-gold pl-5 text-base leading-8 text-ivory/75 sm:pl-7 sm:text-lg sm:leading-9">
                  {agenda}
                </p>
              </div>
            </Reveal>
          </div>
          <div className="kente-band" aria-hidden="true" />
        </section>
      )}

      {speakers.length > 0 && (
        <section
          aria-labelledby="event-speakers-title"
          className="bg-sand/65 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/55 bg-white/60 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clay">
                    <HiMicrophone aria-hidden="true" />
                    On the programme
                  </span>
                  <h2
                    id="event-speakers-title"
                    className="mt-6 text-4xl leading-[1.04] tracking-tight text-ink sm:text-5xl"
                  >
                    Voices in the room
                  </h2>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/40">
                  {speakers.length} {speakers.length === 1 ? "speaker" : "speakers"}
                </p>
              </div>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker, index) => (
                <Reveal
                  key={`${speaker.name}-${index}`}
                  delay={(index % 3) * 0.07}
                >
                  <li className="flex h-full items-center gap-4 rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-[0_16px_40px_-36px_rgba(36,32,33,0.65)] sm:p-6">
                    <span
                      aria-hidden="true"
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-xl ${
                        index % 2 === 0
                          ? "bg-gold text-ink"
                          : "bg-forest text-ivory"
                      }`}
                    >
                      {speakerInitials(speaker.name)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl leading-tight text-ink sm:text-2xl">
                        {speaker.name}
                      </h3>
                      {speaker.title && (
                        <p className="mt-1.5 text-sm leading-6 text-ink/55">
                          {speaker.title}
                        </p>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
