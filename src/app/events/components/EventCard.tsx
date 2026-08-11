import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import { EventItem } from "@/models/response/event-response";

export default function EventCard({ event, past = false }: { event: EventItem; past?: boolean }) {
  const date = new Date(event.startsAt);
  return (
    <article className={`border ${past ? "border-ink/15 bg-sand" : "on-dark border-gold bg-ink text-ivory"}`}>
      {event.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={event.image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover ${past ? "grayscale" : ""}`}
          />
        </div>
      )}
      <div className="p-6">
        <p className={`text-xs font-bold uppercase tracking-widest ${past ? "text-clay" : "text-gold"}`}>
          {past ? "Past event" : "Upcoming"}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold">
          <Link href={`/events/${event.slug}`} className="hover:underline decoration-gold">
            {event.title}
          </Link>
        </h3>
        <p className={`mt-2 text-sm ${past ? "opacity-70" : "text-ivory/75"}`}>
          {date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          {" · "}{event.isOnline ? "Online" : event.venue} ({event.timezone})
        </p>
        <p className={`mt-3 text-sm ${past ? "opacity-75" : "text-ivory/80"}`}>{event.description}</p>
        {!past && <Countdown target={event.startsAt} className="mt-5" />}
        <div className="mt-5 flex flex-wrap gap-3">
          {/* Registration switches to Watch/Listen once content is published */}
          {!past && event.registrationUrl && (
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Register
            </a>
          )}
          {past && event.watchUrl && (
            <Link href={event.watchUrl} className="btn btn-forest">Watch / Listen</Link>
          )}
          <Link href={`/events/${event.slug}`} className={`btn btn-outline ${past ? "" : "text-ivory"}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
