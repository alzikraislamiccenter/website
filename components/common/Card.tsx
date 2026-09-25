import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentItem } from "@/types/common";
import ImageWrapper from "./ImageWrapper";
import { PLACEHOLDER_NOTICE } from "@/lib/constants";

export interface CardProps { item: ContentItem; label?: string; children?: ReactNode; showImage?: boolean }
export default function Card({ item, label, children, showImage = false }: CardProps) {
  return <article className="card">
    {(showImage || item.image) && <ImageWrapper image={item.image} />}
    {label && <p className="eyebrow">{label}</p>}
    <h3>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h3>
    <p>{item.description}</p>
    {children}
    {item.placeholder && <small className="status-note">{PLACEHOLDER_NOTICE}</small>}
  </article>;
}
