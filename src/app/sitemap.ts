import type { MetadataRoute } from "next";
import { getEvents } from "@/services/events";
import { getFocusPages } from "@/services/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [events, focus] = await Promise.all([getEvents(), getFocusPages()]);
  const staticPages = [
    "", "/about", "/mission-vision", "/lucy-quist-team", "/events",
    "/media", "/community", "/partner", "/join-team",
  ].map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const }));

  return [
    ...staticPages,
    ...events.map((e) => ({ url: `${base}/events/${e.slug}`, changeFrequency: "daily" as const })),
    ...focus.map((f) => ({ url: `${base}/focus/${f.year}/${f.slug}`, changeFrequency: "monthly" as const })),
  ];
}
