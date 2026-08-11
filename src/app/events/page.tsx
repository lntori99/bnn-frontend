import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventCard from "./components/EventCard";
import CTASection from "@/components/CTASection";
import { getEvents } from "@/services/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Bold New Normal events and the archive of past convenings.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const now = Date.now();
  const upcoming = events.filter((e) => e.status === "upcoming" && new Date(e.startsAt).getTime() >= now - 86400000);
  const past = events.filter((e) => e.status === "past" || new Date(e.startsAt).getTime() < now - 86400000);

  return (
    <>
      <PageHeader eyebrow="Events" title="Convene. Connect. Build." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Current events</h2>
        <div className="kente-band kente-band--thin mt-4 max-w-40" aria-hidden="true" />
        {upcoming.length === 0 ? (
          <p className="mt-8 max-w-xl border border-ink/15 bg-sand p-6">
            No upcoming events yet. New dates land here first — join the community to hear about them early.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {upcoming.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        )}

        {past.length > 0 && (
          <>
            <h2 className="mt-20 text-3xl font-bold">Past events</h2>
            <div className="kente-band kente-band--thin mt-4 max-w-40" aria-hidden="true" />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {past.map((e) => <EventCard key={e.id} event={e} past />)}
            </div>
          </>
        )}
      </section>
      <CTASection />
    </>
  );
}
