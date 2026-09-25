import type { ContentItem } from "./common";
export type CourseCategory = "Quran" | "Hadith" | "Fiqh" | "Seerah" | "Arabic" | "Islamic Studies" | "Kids / Youth";
export interface Course extends ContentItem { category: CourseCategory; duration?: string; audience?: string; schedule?: string }
