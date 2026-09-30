import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return ["/", "/about", "/services", "/courses", "/blog", "/media", "/contact"].map(href => ({ url: new URL(href, site.url).href, changeFrequency: "monthly", priority: href === "/" ? 1 : 0.7 }));
}
