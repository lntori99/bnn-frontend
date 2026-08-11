export interface MediaItem {
  id: number;
  title: string;
  type: "video" | "audio";
  embedUrl: string;
  thumbnail?: string | null;
  event?: string | null;
  speaker?: string | null;
  topic?: string | null;
  year: number;
  date?: string | null;
  description?: string | null;
}
