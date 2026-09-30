import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
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
    <section className="page-hero"><Container><p className="eyebrow">Al Zikra Islamic Center</p><h1>{item.label}</h1><p className="hero-description">{group === "policies" ? "This policy page is being prepared." : "Confirmed details will be published here when available."}</p></Container></section>
    <section className="section"><Container><p>For current information, please <Link href="/contact">contact Al Zikra Islamic Center</Link>.</p></Container></section>
  </>;
}
