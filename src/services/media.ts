import { apiGet } from "@/lib/api";
import { MediaItem } from "@/models/response/media-response";
import { fallbackMedia } from "@/data/fallback";

export const getMedia = () => apiGet<MediaItem[]>("/media", fallbackMedia);
