import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import WhyAlZikraSection from "@/components/sections/WhyAlZikraSection";
import CommunityImpactSection from "@/components/sections/CommunityImpactSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FAQSection from "@/components/sections/FAQSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { pages, sectionContent, callsToAction, reasons } from "@/data/pages";
import { services } from "@/data/services";
import { programs } from "@/data/programs";
import { impactStats } from "@/data/company";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.services.seo);

export default function ServicesPage() {
  return (
    <>
      <PageHero {...pages.services.hero} />
      <Container className="page-intro"><SectionIntro {...sectionContent.servicesIntro} /></Container>
      <ServicesGridSection {...sectionContent.services} services={services} />
      <WhyAlZikraSection {...sectionContent.why} items={reasons} />
      <CommunityImpactSection {...sectionContent.impact} stats={impactStats} />
      <ProgramsSection {...sectionContent.programs} programs={programs} />
      <FAQSection {...sectionContent.faq} items={faqs} />
      <LeadCTASection {...callsToAction.involved} />
    </>
  );
}
