import { pages, sectionContent, callsToAction } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import FeaturedArticleSection from "@/components/sections/FeaturedArticleSection";
import BlogSection from "@/components/sections/BlogSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { articles, blogCategories } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.blog.seo);

export default function BlogPage() {
  return (
    <>
      <PageHero {...pages.blog.hero} />
      <FeaturedArticleSection {...sectionContent.featuredArticle} article={articles.find(article => article.featured)} />
      <BlogSection {...sectionContent.blog} articles={articles} categories={blogCategories} />
      <BlogSection {...sectionContent.popular} articles={articles.filter(article => article.popular)} />
      <BlogSection {...sectionContent.search} articles={articles} searchable />
      <LeadCTASection {...callsToAction.newsletter} variant="newsletter" />
    </>
  );
}
