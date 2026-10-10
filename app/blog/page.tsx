import { pages, sectionContent } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import BlogSection from "@/components/sections/BlogSection";
import { articles, blogCategories } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.blog.seo);

export default function BlogPage() {
  const published = articles.filter(article => !article.placeholder);
  const popular = published.filter(article => article.popular);
  return (
    <>
      <PageHero {...pages.blog.hero} />
      <BlogSection {...sectionContent.blog} alignment="center" articles={articles} categories={blogCategories} searchable />
      {popular.length > 0 && <BlogSection {...sectionContent.popular} alignment="center" articles={popular} />}
    </>
  );
}
