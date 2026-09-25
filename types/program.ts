import type { ContentItem } from "./common";
export interface Program extends ContentItem { dateLabel?: string; status?: "upcoming" | "ongoing" | "to-be-confirmed" }
