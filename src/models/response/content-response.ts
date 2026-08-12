export interface RoadmapMilestone {
  id: number;
  phase: string;
  period: string;
  headline: string;
  detail: string;
}

export interface FocusPage {
  year: number;
  slug: string;
  title: string;
  intro: string;
  whyItMatters: string;
  outcomes: string[];
  activities: string[];
}

export interface Sector {
  key: string;
  name: string;
  scope: string;
  image?: string;
}

export interface DonationDetails {
  verified: boolean;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  swift?: string;
  note?: string;
}
