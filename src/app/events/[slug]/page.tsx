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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="on-dark relative -mt-16 overflow-hidden bg-ink pb-20 pt-36 text-ivory sm:pb-24 sm:pt-44">
        {event.image && (
          <>
            <Image
              src={event.image}
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/40"
            />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-ivory/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_var(--color-gold)]" />
            {isPast ? "Past event" : "Upcoming event"}
          </span>
          <p className="mt-5 max-w-3xl text-4xl leading-[1.05] tracking-tight text-ivory sm:text-5xl">
            {event.title}
          </p>
          <p className="mt-6 text-base text-ivory/70 sm:text-lg">
            {date.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" · "}
            {date.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            {event.timezone}
          </p>
          <p className="mt-1 text-ivory/70">
            {event.isOnline
              ? (event.onlineDetails ?? "Online event")
              : event.venue}
          </p>
          {!isPast && <Countdown target={event.startsAt} className="mt-8" />}
          <div className="mt-8 flex flex-wrap gap-4">
            {!isPast && event.registrationUrl && (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#d6ac63] px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-[#d6ac63]-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Register for this event
              </a>
            )}
            {isPast && event.watchUrl && (
              <Link
                href={event.watchUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[#d6ac63] px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-[#d6ac63]-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Watch / Listen
              </Link>
            )}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border-2 border-current px-4 py-2 text-sm font-medium transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 text-ivory"
            >
              All events
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-2xl font-medium tracking-tight">
              About this event
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              {event.description}
            </p>
            {event.agenda && (
              <>
                <p className="mt-10 text-2xl font-medium tracking-tight">
                  Agenda
                </p>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-ink/70 sm:text-lg">
                  {event.agenda}
                </p>
              </>
            )}
          </div>
          <aside className="h-fit rounded-2xl border border-ink/10 bg-sand p-6">
            <p className="text-lg font-medium tracking-tight">Speakers</p>
            <ul className="mt-4 space-y-4">
              {event.speakers.map((s) => (
                <li key={s.name}>
                  <p className="font-semibold">{s.name}</p>
                  {s.title && <p className="text-sm text-ink/70">{s.title}</p>}
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
