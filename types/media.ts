import type { ContentItem } from "./common";
export type MediaCategory = "Lectures" | "Bayan" | "Quran" | "Events" | "Audio" | "Photos" | "Resources";
export interface MediaItem extends ContentItem {
  category: MediaCategory;
  kind: "video" | "audio" | "photo";
  sourceUrl?: string;
  captions?: { src: string; language: string; label: string };
  transcriptUrl?: string;
  featured?: boolean;
}
