import PageHero from "@/components/common/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import SplitContentSection from "@/components/sections/SplitContentSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import CampusSection from "@/components/sections/CampusSection";
import CommunityImpactSection from "@/components/sections/CommunityImpactSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { pages, sectionContent, callsToAction, missionVision } from "@/data/pages";
import { values, impactStats } from "@/data/company";
import { team } from "@/data/team";
import { campuses } from "@/data/campuses";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.about.seo);

export default function AboutPage() {
  return (
    <>
      <PageHero {...pages.about.hero} />
      <AboutSection {...sectionContent.about} />
      <SplitContentSection {...sectionContent.story} imagePosition="left" />
      <MissionVisionSection {...sectionContent.mission} items={missionVision} />
      <ValuesSection {...sectionContent.values} values={values} />
      <LeadershipSection {...sectionContent.leadership} members={team} />
      <CampusSection {...sectionContent.campus} campuses={campuses} />
      <CommunityImpactSection {...sectionContent.impact} stats={impactStats} />
      <LeadCTASection {...callsToAction.join} />
    </>
  );
}
