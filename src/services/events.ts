import { apiGet } from "@/lib/api";
import { EventItem } from "@/models/response/event-response";
import { fallbackEvents } from "@/data/fallback";

export const getEvents = () => apiGet<EventItem[]>("/events", fallbackEvents);

export async function getEvent(slug: string): Promise<EventItem | undefined> {
  const events = await getEvents();
  return events.find((e) => e.slug === slug);
}

export async function getFeaturedEvent(): Promise<EventItem | undefined> {
  const events = await getEvents();
  return (
    events.find((e) => e.featured && e.status === "upcoming") ??
    events.find((e) => e.status === "upcoming")
  );
}
