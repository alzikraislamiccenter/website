import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import CoursesGridSection from "@/components/sections/CoursesGridSection";
import LearningProcessSection from "@/components/sections/LearningProcessSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FAQSection from "@/components/sections/FAQSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { pages, sectionContent, callsToAction, learningSteps } from "@/data/pages";
import { courses, courseCategories } from "@/data/courses";
import { programs } from "@/data/programs";
import { team } from "@/data/team";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.courses.seo);

export default function CoursesPage() {
  return (
    <>
      <PageHero {...pages.courses.hero} />
      <Container className="page-intro"><SectionIntro {...sectionContent.coursesIntro} /></Container>
      <CoursesGridSection {...sectionContent.courses} courses={courses} categories={courseCategories} />
      <LearningProcessSection {...sectionContent.process} steps={learningSteps} />
      <LeadershipSection {...sectionContent.teachers} members={team} />
      <ProgramsSection {...sectionContent.upcoming} programs={programs} />
      <FAQSection {...sectionContent.faq} items={faqs} />
      <LeadCTASection {...callsToAction.question} />
    </>
  );
}
