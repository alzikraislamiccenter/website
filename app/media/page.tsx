import { pages, sectionContent } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import MediaPreviewSection from "@/components/sections/MediaPreviewSection";
import MediaGallerySection from "@/components/sections/MediaGallerySection";
import AudioLecturesSection from "@/components/sections/AudioLecturesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import Section from "@/components/common/Section";
import SocialLinks from "@/components/common/SocialLinks";
import { media, mediaCategories } from "@/data/media";
import { resources } from "@/data/resources";
import { socialLinks } from "@/data/socialLinks";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.media.seo);

export default function MediaPage() {
  const published = media.filter(item => !item.placeholder);
  return (
    <>
      <PageHero {...pages.media.hero} />
      {published.some(item => item.kind === "video" && item.featured) && <MediaPreviewSection {...sectionContent.featuredVideo} items={published.filter(item => item.kind === "video" && item.featured)} limit={1} />}
      <MediaGallerySection {...sectionContent.gallery} items={media} categories={mediaCategories} />
      {published.some(item => item.kind === "audio") && <AudioLecturesSection {...sectionContent.audio} items={published} />}
      {published.some(item => item.kind === "photo") && <MediaGallerySection {...sectionContent.photos} items={published.filter(item => item.kind === "photo")} />}
      <ResourcesSection {...sectionContent.resources} resources={resources} />
      <Section {...sectionContent.social}><SocialLinks links={socialLinks} /></Section>
    </>
  );
}
