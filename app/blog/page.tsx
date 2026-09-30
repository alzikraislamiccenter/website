import { pages, sectionContent } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import FeaturedArticleSection from "@/components/sections/FeaturedArticleSection";
import BlogSection from "@/components/sections/BlogSection";
import { articles, blogCategories } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.blog.seo);

export default function BlogPage() {
  const published = articles.filter(article => !article.placeholder);
  const featured = published.find(article => article.featured);
  const popular = published.filter(article => article.popular);
  return (
    <>
      <PageHero {...pages.blog.hero} />
      {featured && <FeaturedArticleSection {...sectionContent.featuredArticle} article={featured} />}
      <BlogSection {...sectionContent.blog} articles={articles} categories={blogCategories} searchable />
      {popular.length > 0 && <BlogSection {...sectionContent.popular} articles={popular} />}
    </>
  );
}
