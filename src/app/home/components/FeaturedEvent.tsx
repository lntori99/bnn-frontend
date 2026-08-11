import Link from "next/link";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import { EventItem } from "@/models/response/event-response";

export default function FeaturedEvent({ event }: { event: EventItem }) {
  const date = new Date(event.startsAt);
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 lg:px-8" aria-label="Featured event">
      <Reveal>
        <div className="on-dark grid gap-6 border-4 border-gold bg-ink-soft p-6 text-ivory shadow-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Next event</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{event.title}</h2>
            <p className="mt-2 text-sm text-ivory/80">
              {date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              {" · "}
              {event.isOnline ? event.onlineDetails ?? "Online" : event.venue} ({event.timezone})
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Countdown target={event.startsAt} />
            <div className="flex gap-3">
              {event.registrationUrl && (
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  Register
                </a>
              )}
              <Link href={`/events/${event.slug}`} className="btn btn-outline text-ivory">
                Event details
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
