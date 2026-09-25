"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/types/navigation";

export default function DesktopNav({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();
  return <nav className="desktop-nav" aria-label="Main navigation"><ul className="nav-list">
    {items.map(item => <li key={item.href}><Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link></li>)}
  </ul></nav>;
}
