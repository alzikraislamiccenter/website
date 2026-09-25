import type { MediaCategory, MediaItem } from "@/types/media";
export const mediaCategories: MediaCategory[] = ["Lectures", "Bayan", "Quran", "Events", "Audio", "Photos", "Resources"];
export const media: MediaItem[] = [
  { id: "video-placeholder", title: "Video awaiting publication", description: "Add an approved video, caption and transcript.", category: "Lectures", kind: "video", featured: true, placeholder: true },
  { id: "audio-placeholder", title: "Audio awaiting publication", description: "Add an approved recording and transcript.", category: "Audio", kind: "audio", placeholder: true },
  { id: "photo-placeholder", title: "Photo awaiting approval", description: "Add an approved photo and descriptive alternative text.", category: "Photos", kind: "photo", placeholder: true },
];
