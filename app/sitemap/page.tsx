import Link from "next/link";
import Container from "@/components/common/Container";
import { navigation, policyLinks } from "@/data/navigation";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sitemap",
  path: "/sitemap",
  description: "Browse the pages and learning programmes of Al Zikra Islamic Center.",
});

const groups = [
  { title: "Explore", links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/courses" },
    { label: "Services", href: "/services" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ] },
  { title: "Programs", links: navigation.find(item => item.label === "Programs")?.children ?? [] },
  { title: "Academics", links: navigation.find(item => item.label === "Academics")?.children ?? [] },
  { title: "More", links: [
    ...(navigation.find(item => item.label === "More")?.children ?? []),
    { label: "Sitemap", href: "/sitemap" },
  ] },
  { title: "Policies", links: policyLinks },
];

export default function SitemapPage() {
  return <>
    <section className="sitemap-hero" data-header-surface="dark"><Container><span className="eyebrow">Al Zikra Islamic Center</span><h1>Sitemap</h1><p>Find your way through our programmes, academic information and centre pages.</p></Container></section>
    <section className="section sitemap-directory" aria-label="Website pages"><Container><div className="sitemap-grid">{groups.map(group => <div className="sitemap-group" key={group.title}><h2>{group.title}</h2><ul>{group.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link></li>)}</ul></div>)}</div></Container></section>
  </>;
}
