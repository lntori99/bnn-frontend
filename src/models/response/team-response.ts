export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo?: string | null;
  shortBio: string;
  fullBio?: string | null;
  links?: { label: string; url: string }[];
  isFounder?: boolean;
}
