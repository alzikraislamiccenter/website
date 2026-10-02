"use client";

import { usePathname } from "next/navigation";
import StudentGallery from "./StudentGallery";
import Testimonials from "./Testimonials";
import FooterFAQ from "./FooterFAQ";
import FooterCTA from "./FooterCTA";

export default function SharedSections() {
  const career = usePathname() === "/about/career";
  return <>{!career && <><StudentGallery /><Testimonials /></>}<FooterFAQ /><FooterCTA /></>;
}
