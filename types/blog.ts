import type { ContentItem } from "./common";
export type BlogCategory = "Quran" | "Hadith" | "Seerah" | "Islamic Knowledge" | "Family" | "Youth" | "Spirituality";
export interface BlogArticle extends ContentItem { category: BlogCategory; author?: string; publishedAt?: string; featured?: boolean; popular?: boolean }
