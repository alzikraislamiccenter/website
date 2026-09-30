import type { MediaCategory, MediaItem } from "@/types/media";
export const mediaCategories: MediaCategory[] = ["Lectures", "Bayan", "Quran", "Events", "Audio", "Photos", "Resources"];
export const media: MediaItem[] = [
  { id: "video-placeholder", title: "Video library coming soon", description: "Approved video recordings will appear here with captions or transcripts where available.", category: "Lectures", kind: "video", featured: true, placeholder: true },
  { id: "audio-placeholder", title: "Audio library coming soon", description: "Approved audio recordings will appear here.", category: "Audio", kind: "audio", placeholder: true },
  { id: "photo-placeholder", title: "Photo gallery coming soon", description: "Approved centre photography will appear here.", category: "Photos", kind: "photo", placeholder: true },
];
