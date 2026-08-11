export interface EventSpeaker {
  name: string;
  title?: string;
}

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  image?: string | null;
  description: string;
  agenda?: string | null;
  speakers: EventSpeaker[];
  startsAt: string; // ISO
  endsAt?: string | null;
  timezone: string;
  venue?: string | null;
  isOnline: boolean;
  onlineDetails?: string | null;
  registrationUrl?: string | null;
  watchUrl?: string | null;
  status: "upcoming" | "past";
  featured?: boolean;
}
