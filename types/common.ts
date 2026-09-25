import type { ReactNode } from "react";

export type Alignment = "left" | "center";
export type SectionVariant = "default" | "muted";
export interface CTA { label: string; href: string }
export interface ImageAsset { src: string; alt: string; width?: number; height?: number }
export interface BreadcrumbItem { label: string; href?: string }
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  image?: ImageAsset;
  href?: string;
  placeholder?: boolean;
}
export interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: Alignment;
  maxWidth?: "narrow" | "wide" | "full";
}
export interface SectionProps extends SectionIntroProps {
  id?: string;
  variant?: SectionVariant;
  children?: ReactNode;
}
export type Value = ContentItem;
export interface Stat { id: string; value: string; label: string; description?: string }
export interface SocialLink { id: string; label: string; href: string | null }
