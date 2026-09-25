import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import CoursesGridSection from "@/components/sections/CoursesGridSection";
import IslamicLearningSection from "@/components/sections/IslamicLearningSection";
import WhyAlZikraSection from "@/components/sections/WhyAlZikraSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import BlogSection from "@/components/sections/BlogSection";
import MediaPreviewSection from "@/components/sections/MediaPreviewSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { pages, sectionContent, callsToAction, reasons } from "@/data/pages";
import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { programs } from "@/data/programs";
import { articles } from "@/data/blog";
import { media } from "@/data/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.home.seo);

export default function HomePage() {
  return (
    <>
      <HeroSection {...pages.home.hero} />
      <AboutSection {...sectionContent.about} />
      <ServicesGridSection {...sectionContent.services} services={services} />
      <CoursesGridSection {...sectionContent.courses} courses={courses.slice(0, 3)} />
      <IslamicLearningSection {...sectionContent.learning} imagePosition="left" />
      <WhyAlZikraSection {...sectionContent.why} items={reasons} />
      <ProgramsSection {...sectionContent.programs} programs={programs} />
      <BlogSection {...sectionContent.blog} articles={articles} />
      <MediaPreviewSection {...sectionContent.media} items={media} />
      <LeadCTASection {...callsToAction.startLearning} />
    </>
  );
}
