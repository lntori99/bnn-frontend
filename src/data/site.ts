export const site = {
  name: "Bold New Normal",
  shortName: "BNN",
  founder: "Lucy Quist",
  tagline: "Africa's transformation, driven by Africans.",
  description:
    "The Bold New Normal (TBNN) is a continental vehicle for transformation focused on creating shared prosperity across Africa — turning ideas into a mobilised community of change agents.",
  // Canonical Amazon product URL (ASIN 9988294492). CMS-managed in production.
  bookUrl: "https://www.amazon.com/dp/9988294492",
  email: "team@theboldnewnormal.com",
  youtubeChannelUrl: "https://youtube.com/@lucyquistofficial",
  podcastPlaylistUrl:
    "https://youtube.com/playlist?list=PLcIWfQalcywEv6fCtTA4FJ-NZ5DwQdyDr",
  conferenceRecordingsUrl: "https://theboldnewnormal.systeme.io/tbnncondemand",
  newsletterUrl: "https://theboldnewnormal.systeme.io/subscribe",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/theboldnewnormal" },
    { label: "YouTube", href: "https://youtube.com/@lucyquistofficial" },
    { label: "TikTok", href: "https://www.tiktok.com/@the.bold.new.norm" },
    { label: "LinkedIn", href: "https://www.linkedin.com/groups/9519341" },
  ],
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about" },
        { label: "Mission and Vision", href: "/mission-vision" },
        { label: "Lucy Quist & Team", href: "/lucy-quist-team" },
        { label: "2027 Focus", href: "/focus/2027/governance-leadership" },
      ],
    },
    { label: "Events", href: "/events" },
    { label: "Media", href: "/media" },
    { label: "Partner / Fundraising", href: "/partner" },
    { label: "Join the Team", href: "/join-team" },
  ],
};

/** Flat footer nav — the header's nested "About" dropdown collapses to its top link here. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Partner / Fundraising", href: "/partner" },
  { label: "Join the Team", href: "/join-team" },
];

export const primaryCtas = [
  { label: "Join the Community", href: "/community" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Join the Team", href: "/join-team" },
];

export const donationDetails = {
  verified: true, // demo flag — driven by the CMS in production
  accountName: "Bold New Normal Foundation",
  bankName: "Sample Bank Ghana Ltd (placeholder)",
  accountNumber: "0000 0000 0000 (placeholder)",
  swift: "SAMPGHAC (placeholder)",
  currency: "USD / GHS",
  note: "Official account details are published here only after they have been verified and approved by BNN.",
};
