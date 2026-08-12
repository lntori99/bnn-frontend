import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Countdown from "@/components/countdown";
import CTASection from "@/components/ctasection";
import { getEvent, getEvents } from "@/services/events";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  return { title: event?.title ?? "Event" };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  const date = new Date(event.startsAt);
  const isPast = event.status === "past" || date.getTime() < Date.now();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.startsAt,
    endDate: event.endsAt ?? undefined,
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: event.isOnline
      ? { "@type": "VirtualLocation", url: event.onlineDetails ?? "" }
      : { "@type": "Place", name: event.venue ?? "" },
    organizer: { "@type": "Organization", name: "Bold New Normal" },
    description: event.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="on-dark relative -mt-16 overflow-hidden bg-ink text-ivory">
        {event.image && (
          <>
            <Image
              src={event.image}
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40" />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="eyebrow">{isPast ? "Past event" : "Upcoming event"}</p>
          <h1 className="mt-2 max-w-4xl text-4xl font-bold uppercase sm:text-5xl">{event.title}</h1>
          <p className="mt-4 text-lg text-ivory/80">
            {date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            {" · "}
            {date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} {event.timezone}
          </p>
          <p className="mt-1 text-ivory/80">{event.isOnline ? event.onlineDetails ?? "Online event" : event.venue}</p>
          {!isPast && <Countdown target={event.startsAt} className="mt-8" />}
          <div className="mt-8 flex flex-wrap gap-4">
            {!isPast && event.registrationUrl && (
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
                Register for this event
              </a>
            )}
            {isPast && event.watchUrl && (
              <Link href={event.watchUrl} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">Watch / Listen</Link>
            )}
            <Link href="/events" className="inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 text-ivory">All events</Link>
          </div>
        </div>
        <div className="kente-band relative" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-bold">About this event</h2>
            <p className="mt-4 text-lg opacity-85">{event.description}</p>
            {event.agenda && (
              <>
                <h2 className="mt-10 text-2xl font-bold">Agenda</h2>
                <p className="mt-4 whitespace-pre-line opacity-85">{event.agenda}</p>
              </>
            )}
          </div>
          <aside className="h-fit border-t-4 border-gold bg-sand p-6">
            <h2 className="font-display text-lg font-bold">Speakers</h2>
            <ul className="mt-4 space-y-4">
              {event.speakers.map((s) => (
                <li key={s.name}>
                  <p className="font-bold">{s.name}</p>
                  {s.title && <p className="text-sm opacity-70">{s.title}</p>}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <CTASection />
    </>
  );
}
