import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { navigation, policyLinks } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  const paths = new Set(["/", "/services", "/courses", "/media", "/sitemap", ...navigation.flatMap(item => [item.href, ...(item.children ?? []).map(child => child.href)]).filter((href): href is string => Boolean(href)), ...policyLinks.map(item => item.href)]);
  return Array.from(paths).map(href => ({ url: new URL(href, site.url).href, changeFrequency: "monthly", priority: href === "/" ? 1 : 0.7 }));
}
