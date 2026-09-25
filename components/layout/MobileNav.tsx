"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import type { NavigationItem } from "@/types/navigation";

export default function MobileNav({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const id = useId();
  return <div className="mobile-nav" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}>
    <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>Menu</button>
    <nav id={id} aria-label="Mobile navigation" hidden={!open}><ul className="nav-list">
      {items.map(item => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link></li>)}
    </ul></nav>
  </div>;
}
