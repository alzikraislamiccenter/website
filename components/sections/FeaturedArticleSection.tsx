import GridSection from "./GridSection";
import BlogCard from "@/components/cards/BlogCard";
import type { BlogArticle } from "@/types/blog";
import type { SectionIntroProps } from "@/types/common";

export interface FeaturedArticleSectionProps extends SectionIntroProps { article?: BlogArticle }
export default function FeaturedArticleSection({ article, ...intro }: FeaturedArticleSectionProps) {
  return <GridSection {...intro} empty={!article}>{article && <BlogCard article={article} />}</GridSection>;
}
