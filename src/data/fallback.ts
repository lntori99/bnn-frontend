import { EventItem } from "@/models/response/event-response";
import { MediaItem } from "@/models/response/media-response";
import { TeamMember } from "@/models/response/team-response";
import { RoadmapMilestone, FocusPage } from "@/models/response/content-response";
import { placeholderImages } from "./placeholder-images";

/** Placeholder content — final approved copy is supplied by BNN via the CMS. */

export const fallbackEvents: EventItem[] = [
  {
    id: 1,
    slug: "bnn-summit-2026",
    title: "Bold New Normal Summit 2026",
    image: placeholderImages.events.summit2026,
    description:
      "A gathering of founders, builders and leaders shaping African-led enterprise. Two days of talks, working sessions and sector meetups.",
    agenda: "Day 1 — Enterprise & capital. Day 2 — Sector communities & the 2027 focus.",
    speakers: [
      { name: "Lucy Quist", title: "Founder, Bold New Normal" },
      { name: "Guest speakers", title: "To be announced" },
    ],
    startsAt: "2026-11-12T09:00:00.000Z",
    endsAt: "2026-11-13T17:00:00.000Z",
    timezone: "GMT",
    venue: "Accra International Conference Centre, Accra, Ghana",
    isOnline: false,
    registrationUrl: "https://example.com/register",
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    slug: "bnn-conference-2025",
    title: "BNN Annual Conference 2025",
    image: placeholderImages.events.conference2025,
    description:
      "The 2025 conference explored entrepreneurship as the engine of African transformation.",
    speakers: [{ name: "Lucy Quist", title: "Founder" }],
    startsAt: "2025-11-06T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
];

export const fallbackMedia: MediaItem[] = [
  {
    id: 1,
    title: "Why Africa needs a bold new normal",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: placeholderImages.media.keynote,
    event: "BNN Annual Conference 2025",
    speaker: "Lucy Quist",
    topic: "Leadership",
    year: 2025,
    description: "Opening keynote on African agency and enterprise.",
  },
  {
    id: 2,
    title: "Building enterprises that scale",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: placeholderImages.media.enterprise,
    event: "BNN Annual Conference 2025",
    speaker: "Panel",
    topic: "Entrepreneurship",
    year: 2025,
    description: "Founders on productive capacity, jobs and growth.",
  },
  {
    id: 3,
    title: "The Bold New Normal conversation",
    type: "audio",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    event: "BNN Podcast",
    speaker: "Lucy Quist",
    topic: "Movement",
    year: 2024,
    description: "Audio conversation on the movement's origins.",
  },
];

export const fallbackTeam: TeamMember[] = [
  {
    id: 1,
    name: "Lucy Quist",
    title: "Founder, Bold New Normal",
    photo: "/images/img_lucy_3.jpg",
    isFounder: true,
    shortBio:
      "Engineer, business leader and author of The Bold New Normal. Lucy has led at the intersection of technology, telecoms and finance across Africa and Europe.",
    fullBio:
      "Lucy Quist is an engineer and business leader whose career spans automotive engineering, banking and telecommunications, including serving as CEO of a national telecoms operator. She wrote The Bold New Normal to make the case that Africa's future prosperity will be created by Africans — through leadership, enterprise and deliberate ambition. BNN is the movement that turns that thesis into action. (Final biography to be supplied by BNN.)",
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/lucyquist" }],
  },
  {
    id: 2,
    name: "Team Member",
    title: "Programmes Lead",
    photo: placeholderImages.team.member2,
    shortBio: "Placeholder profile — managed through the CMS.",
  },
  {
    id: 3,
    name: "Team Member",
    title: "Partnerships Lead",
    photo: placeholderImages.team.member3,
    shortBio: "Placeholder profile — managed through the CMS.",
  },
];

export const fallbackRoadmap: RoadmapMilestone[] = [
  { id: 1, phase: "Phase 1", period: "2024–2025", headline: "Ignite", detail: "Launch the movement, publish the thesis, convene the first communities." },
  { id: 2, phase: "Phase 2", period: "2026", headline: "Organise", detail: "Stand up the five sector communities and the partner network." },
  { id: 3, phase: "Phase 3", period: "2027", headline: "Governance & Leadership", detail: "A year focused on the leadership Africa's enterprises and institutions need." },
  { id: 4, phase: "Phase 4", period: "2028+", headline: "Scale", detail: "Back community-built solutions to scale across the continent." },
];

export const fallbackFocus: FocusPage[] = [
  {
    year: 2027,
    slug: "governance-leadership",
    title: "Governance & Leadership",
    intro:
      "In 2027, Bold New Normal turns its full attention to governance and leadership — the systems and people that decide whether African enterprise can scale.",
    whyItMatters:
      "Lucy Quist believes capable, accountable leadership is the multiplier on every other investment Africa makes. Enterprises, institutions and nations rise to the level of their leadership. (Final narrative to be supplied by BNN.)",
    outcomes: [
      "A pan-African cohort of enterprise and institutional leaders",
      "Practical governance playbooks for growing African organisations",
      "Public conversations that raise the standard of leadership",
    ],
    activities: [
      "Leadership convenings across the sector communities",
      "Governance masterclasses and mentorship",
      "The 2027 BNN annual conference, themed on the focus",
    ],
  },
];
