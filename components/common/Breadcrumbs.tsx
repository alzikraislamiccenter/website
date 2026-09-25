import Link from "next/link";
import type { BreadcrumbItem } from "@/types/common";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;
  return <nav aria-label="Breadcrumb"><ol className="breadcrumbs">{items.map((item, index) =>
    <li key={`${item.label}-${index}`}>{item.href && index !== items.length - 1
      ? <Link href={item.href}>{item.label}</Link>
      : <span aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>}
    </li>)}</ol></nav>;
}
