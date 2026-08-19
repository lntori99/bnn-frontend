import type { Metadata } from "next";
import PageHeader from "@/components/pageheader";
import SectionHeading from "@/components/sectionheading";
import EventCard from "./components/eventcard";
import CTASection from "@/components/ctasection";
import { getEvents } from "@/services/events";
import { placeholderImages } from "@/data/placeholder-images";

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
      <PageHeader
        eyebrow="Events"
        title="Convene. Connect. Build."
        lead="The Bold New Normal Flagship Conference has successfully convened four editions in Accra, Ghana — plus a first UK edition in London — establishing itself as a platform for high-level dialogue, leadership formation and cross-sector engagement. Across the conferences, TBNN has convened senior leaders, executives, policymakers, entrepreneurs and emerging leaders; created space for future-focused conversations on prosperity, leadership and institutional development; sparked collaborations and communities of practice; and grown a community committed to rethinking Africa's development through ownership, excellence and collective action."
        image={placeholderImages.events.conference2027}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <SectionHeading eyebrow="Upcoming" title="Current events" />
        {upcoming.length === 0 ? (
          <p className="mt-8 max-w-xl rounded-2xl border border-ink/10 bg-sand p-6 text-sm leading-relaxed text-ink/70">
            No upcoming events yet. New dates land here first — join the community to hear about them early.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {upcoming.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        )}

        {past.length > 0 && (
          <>
            <div className="mt-20">
              <SectionHeading eyebrow="Archive" title="Past events" />
            </div>
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
