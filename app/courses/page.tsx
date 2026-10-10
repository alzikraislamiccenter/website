import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import CoursesGridSection from "@/components/sections/CoursesGridSection";
import LearningProcessSection from "@/components/sections/LearningProcessSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import { pages, sectionContent, learningSteps } from "@/data/pages";
import { courses, courseCategories } from "@/data/courses";
import { programs } from "@/data/programs";
import { teachers } from "@/data/team";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.courses.seo);

export default function CoursesPage() {
  return (
    <>
      <PageHero {...pages.courses.hero} />
      <Container className="page-intro"><SectionIntro {...sectionContent.coursesIntro} /></Container>
      <CoursesGridSection {...sectionContent.courses} courses={courses} categories={courseCategories} />
      <LearningProcessSection {...sectionContent.process} steps={learningSteps} />
      <LeadershipSection {...sectionContent.teachers} members={teachers} />
      <ProgramsSection id="programs" {...sectionContent.programs} programs={programs} />
    </>
  );
}
