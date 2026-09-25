import Card from "@/components/common/Card";
import type { BlogArticle } from "@/types/blog";

export default function BlogCard({ article }: { article: BlogArticle }) {
  return <Card item={article} label={article.category} showImage></Card>;
}
