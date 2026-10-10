import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProgramDetailSections from "@/components/sections/ProgramDetailSections";
import AdmissionRequirementsSection from "@/components/sections/AdmissionRequirementsSection";
import ProgrammeSchedulesSection from "@/components/sections/ProgrammeSchedulesSection";
import CareerOpenings from "@/components/sections/CareerOpenings";
import GridSection from "@/components/sections/GridSection";
import Card from "@/components/common/Card";
import type { ContentItem } from "@/types/common";
import { navigation, policyLinks } from "@/data/navigation";
import { pageHeroImage } from "@/data/pages";

const entries = [...navigation.flatMap(item => item.children ?? []), ...policyLinks].filter(item => item.href.split("/").length === 3);

const existingPageCopy: Record<string, { hero: string; title?: string; description?: string; cards?: ContentItem[]; body?: string }> = {
  "/academics/admission": {
    hero: "Find the right programme for your child. Admission depends on educational background, Quran reading ability, readiness, assessment and available seats.",
    title: "Admission requirements",
    description: "Entry criteria vary by programme. Contact the centre to discuss assessment and available seats.",
    cards: [
      { id: "hifz", title: "Hifz-e-Quran", description: "Primary education, Quran reading and Tajweed familiarity. Programme ages: 11–12+; general guidance: boys around 12–13. Final eligibility follows assessment." },
      { id: "nazira", title: "Nazira-e-Quran", description: "Ages 10–11+ and Primary education. Develop Quran reading, pronunciation and Tajweed; the centre confirms readiness through admission assessment." },
      { id: "islamic-studies", title: "Islamic Studies", description: "Completed Hifz and Middle education required. Minimum age is stated as 14–15 years, with basic Arabic reading, writing and speaking." },
      { id: "huffaz", title: "Huffaz Education System", description: "Completed Hifz and Primary education required. Applicants must be 14 or younger and have a basic understanding of English for this pathway." },
      { id: "assessment", title: "Assessment & attendance", description: "Education, Quran reading and readiness are assessed. Admission depends on suitability and available seats; all students return home after classes." },
    ],
  },
  "/academics/class-schedule": {
    hero: "Review the supplied teaching times for Hifz, Nazira and Islamic Studies. Students return home after classes.",
    title: "Programme schedules",
    description: "These are teaching times for the named programmes; Sunday is the weekly holiday. Separate Tajweed and Huffaz Education System timetables have not been supplied.",
    cards: [
      { id: "hifz", title: "Hifz-e-Quran", description: "7:00 AM–5:00 PM. Full-day, non-residential study with memorisation, revision and Tajweed." },
      { id: "nazira", title: "Nazira-e-Quran", description: "3:00 PM–5:00 PM. Part-time Quran learning alongside regular academic education." },
      { id: "islamic-studies", title: "Islamic Studies / Aalim-e-Deen", description: "Monday–Saturday, 7:00 AM–5:00 PM. Full-day, non-residential study. Sunday holiday." },
    ],
  },
};

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
  const copy = existingPageCopy[item.href];
  return <>
    <PageHero eyebrow="Al Zikra Islamic Center" title={item.label} description={copy?.hero ?? (group === "programs" ? item.description : group === "about" && slug === "career" ? "Explore opportunities to contribute to Quran learning and community at Al Zikra." : group === "policies" ? "This policy page is being prepared." : "Confirmed details will be published here when available.")} backgroundImage={{ src: pageHeroImage(slug), alt: "" }} backButton secondaryCTA={{ label: "Contact Us", href: "/contact" }} />
    {group === "programs" ? <ProgramDetailSections slug={slug} title={item.label} description={item.description ?? "Course details will be confirmed with the centre."} /> : group === "about" && slug === "career" ? <CareerOpenings /> : item.href === "/academics/admission" && copy?.cards ? <AdmissionRequirementsSection items={copy.cards} description={copy.description} /> : item.href === "/academics/class-schedule" && copy?.cards ? <ProgrammeSchedulesSection items={copy.cards} description={copy.description} /> : copy?.cards ? <GridSection title={copy.title ?? item.label} description={copy.description}>{copy.cards.map(card => <Card key={card.id} item={card} />)}</GridSection> : <section className="section"><Container><p>{copy?.body ?? <>For current information, please <Link href="/contact">contact Al Zikra Islamic Center</Link>.</>}</p></Container></section>}
  </>;
}
