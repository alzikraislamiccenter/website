"use client";

import { usePathname } from "next/navigation";
import StudentGallery from "./StudentGallery";
import Testimonials from "./Testimonials";
import FooterFAQ from "./FooterFAQ";
import FooterCTA from "./FooterCTA";

export default function SharedSections() {
  const pathname = usePathname();
  const career = pathname === "/about/career";
  const focused = pathname === "/contact" || pathname === "/faqs" || pathname === "/sitemap";
  return <>{!career && !focused && <><StudentGallery /><Testimonials /></>}{!focused && <FooterFAQ />}<FooterCTA /></>;
}
