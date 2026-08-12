import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/countdown";
import { EventItem } from "@/models/response/event-response";

export default function EventCard({ event, past = false }: { event: EventItem; past?: boolean }) {
  const date = new Date(event.startsAt);
  return (
    <article className={`border ${past ? "border-ink/15 bg-sand" : "on-dark border-gold bg-ink text-ivory"}`}>
      {event.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
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
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
              Register
            </a>
          )}
          {past && event.watchUrl && (
            <Link href={event.watchUrl} className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Watch / Listen</Link>
          )}
          <Link href={`/events/${event.slug}`} className={`inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 ${past ? "" : "text-ivory"}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
