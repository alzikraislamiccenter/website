import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProgramDetailSections from "@/components/sections/ProgramDetailSections";
import CareerOpenings from "@/components/sections/CareerOpenings";
import { navigation, policyLinks } from "@/data/navigation";

const entries = [...navigation.flatMap(item => item.children ?? []), ...policyLinks].filter(item => item.href.split("/").length === 3);

export function generateStaticParams() {
  return entries.map(item => {
    const [, group, slug] = item.href.split("/");
    return { group, slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ group: string; slug: string }> }): Promise<Metadata> {
  const { group, slug } = await params;
  const item = entries.find(entry => entry.href === `/${group}/${slug}`);
  return { title: item?.label ?? "Page not found", robots: { index: false, follow: true } };
}

export default async function NavigationDetailPage({ params }: { params: Promise<{ group: string; slug: string }> }) {
  const { group, slug } = await params;
  const item = entries.find(entry => entry.href === `/${group}/${slug}`);
  if (!item) notFound();
  return <>
    <PageHero eyebrow="Al Zikra Islamic Center" title={item.label} description={group === "programs" ? item.description : group === "about" && slug === "career" ? "Explore opportunities to contribute to Quran learning and community at Al Zikra." : group === "policies" ? "This policy page is being prepared." : "Confirmed details will be published here when available."} backButton secondaryCTA={{ label: "Contact Us", href: "/contact" }} />
    {group === "programs" ? <ProgramDetailSections slug={slug} title={item.label} description={item.description ?? "Course details will be confirmed with the centre."} /> : group === "about" && slug === "career" ? <CareerOpenings /> : <section className="section"><Container><p>For current information, please <Link href="/contact">contact Al Zikra Islamic Center</Link>.</p></Container></section>}
  </>;
}
