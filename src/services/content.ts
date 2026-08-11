import { apiGet } from "@/lib/api";
import {
  RoadmapMilestone,
  FocusPage,
  DonationDetails,
} from "@/models/response/content-response";
import { fallbackRoadmap, fallbackFocus } from "@/data/fallback";

export const getRoadmap = () =>
  apiGet<RoadmapMilestone[]>("/roadmap", fallbackRoadmap);

export const getFocusPages = () =>
  apiGet<FocusPage[]>("/focus", fallbackFocus);

export async function getFocusPage(year: string, slug: string) {
  const pages = await getFocusPages();
  return pages.find((p) => String(p.year) === year && p.slug === slug);
}

export const getDonationDetails = () =>
  apiGet<DonationDetails>("/settings/donation-details", { verified: false });
