export const site = {
  name: "Bold New Normal",
  shortName: "BNN",
  founder: "Lucy Quist",
  tagline: "Africa's transformation, driven by Africans.",
  // Canonical Amazon product URL (ASIN 9988294492). CMS-managed in production.
  bookUrl: "https://www.amazon.com/dp/9988294492",
  email: "hello@boldnewnormal.org",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/company/boldnewnormal" },
    { label: "X", url: "https://x.com/boldnewnormal" },
    { label: "YouTube", url: "https://youtube.com/@boldnewnormal" },
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

export const donationDetails = {
  verified: true, // demo flag — driven by the CMS in production
  accountName: "Bold New Normal Foundation",
  bankName: "Sample Bank Ghana Ltd (placeholder)",
  accountNumber: "0000 0000 0000 (placeholder)",
  swift: "SAMPGHAC (placeholder)",
  currency: "USD / GHS",
  note: "Official account details are published here only after they have been verified and approved by BNN.",
};
