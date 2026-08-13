export type MediaItem = {
  id: string;
  title: string;
  event: string;
  speaker: string;
  date: string;
  year: number;
  topic: string;
  type: "video" | "audio";
  description: string;
  thumbnail: string;
  embedUrl: string;
};

export const media: MediaItem[] = [
  {
    id: "opening-keynote-2025",
    title: "Opening Keynote: Creating the Africa Where Everyone Prospers",
    event: "BNN Conference 2025",
    speaker: "Lucy Quist",
    date: "6 Nov 2025",
    year: 2025,
    topic: "Leadership",
    type: "video",
    description:
      "Lucy Quist sets out the Bold New Normal thesis — why Africa's transformation must be African-led, and how entrepreneurship drives it.",
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
  {
    id: "real-enterprise-panel-2025",
    title: "Panel: Building Real Enterprise That Scales",
    event: "BNN Conference 2025",
    speaker: "Sector community leads",
    date: "6 Nov 2025",
    year: 2025,
    topic: "Entrepreneurship",
    type: "video",
    description:
      "Founders and operators on productive capacity, jobs and what it really takes to scale a sustainable African enterprise.",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
  {
    id: "agritech-session-2025",
    title: "Community Session: Agriculture & Food Systems",
    event: "BNN Conference 2025",
    speaker: "Agriculture community",
    date: "7 Nov 2025",
    year: 2025,
    topic: "Agriculture",
    type: "video",
    description:
      "From processing to agritech — where the agriculture community is placing its energy first.",
    thumbnail:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
  {
    id: "healthcare-access-2025",
    title: "Fireside: Health Access as an Enterprise Problem",
    event: "BNN Conference 2025",
    speaker: "Healthcare community",
    date: "7 Nov 2025",
    year: 2025,
    topic: "Healthcare",
    type: "video",
    description:
      "Why prevention, delivery and healthtech need builders as much as budgets.",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
  {
    id: "bnn-podcast-ep1",
    title: "BNN Podcast Ep. 1 — The Case for African Agency",
    event: "BNN Podcast",
    speaker: "Lucy Quist",
    date: "15 Jan 2026",
    year: 2026,
    topic: "Leadership",
    type: "audio",
    description:
      "A conversation on agency, ambition and why the bold new normal starts with mindset.",
    thumbnail:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
  {
    id: "energy-briefing-2026",
    title: "Briefing: Powering African Enterprise",
    event: "Energy & Infrastructure community",
    speaker: "Energy & Infrastructure community",
    date: "20 Mar 2026",
    year: 2026,
    topic: "Energy",
    type: "video",
    description:
      "Clean energy, transport and the infrastructure enterprise needs to scale.",
    thumbnail:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=75",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  },
];
