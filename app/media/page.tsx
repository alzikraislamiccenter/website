import { pages, sectionContent, callsToAction } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import MediaPreviewSection from "@/components/sections/MediaPreviewSection";
import MediaGallerySection from "@/components/sections/MediaGallerySection";
import AudioLecturesSection from "@/components/sections/AudioLecturesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import Section from "@/components/common/Section";
import SocialLinks from "@/components/common/SocialLinks";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { media, mediaCategories } from "@/data/media";
import { resources } from "@/data/resources";
import { socialLinks } from "@/data/socialLinks";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.media.seo);

export default function MediaPage() {
  return (
    <>
      <PageHero {...pages.media.hero} />
      <MediaPreviewSection {...sectionContent.featuredVideo} items={media.filter(item => item.kind === "video" && item.featured)} limit={1} />
      <MediaGallerySection {...sectionContent.gallery} items={media} categories={mediaCategories} />
      <AudioLecturesSection {...sectionContent.audio} items={media} />
      <MediaGallerySection {...sectionContent.photos} items={media.filter(item => item.kind === "photo")} />
      <ResourcesSection {...sectionContent.resources} resources={resources} />
      <Section {...sectionContent.social}><SocialLinks links={socialLinks} /></Section>
      <LeadCTASection {...callsToAction.exploreCourses} />
    </>
  );
}
