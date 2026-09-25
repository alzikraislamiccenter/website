"use client";

import { useId, useState } from "react";
import Section from "@/components/common/Section";
import BlogCard from "@/components/cards/BlogCard";
import Tabs from "@/components/ui/Tabs";
import type { BlogArticle, BlogCategory } from "@/types/blog";
import type { SectionIntroProps } from "@/types/common";

export interface BlogSectionProps extends SectionIntroProps { articles: BlogArticle[]; categories?: BlogCategory[]; searchable?: boolean }
export default function BlogSection({ articles, categories, searchable = false, ...intro }: BlogSectionProps) {
  const [query, setQuery] = useState("");
  const searchId = useId();
  const filtered = articles.filter(article => `${article.title} ${article.description} ${article.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  const grid = (items: BlogArticle[]) => items.length ? <div className="card-grid">{items.map(article => <BlogCard key={article.id} article={article} />)}</div> : <p className="empty-state">No articles match this selection.</p>;
  return <Section {...intro}>
    {searchable && <search className="search-area"><label htmlFor={searchId}>Search articles</label><input id={searchId} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by title, topic or category" /><p role="status">{filtered.length} {filtered.length === 1 ? "article" : "articles"} found</p></search>}
    {categories?.length ? <Tabs label="Blog categories" items={[
      { id: "all", label: "All", content: grid(filtered) },
      ...categories.map(category => ({ id: category, label: category, content: grid(filtered.filter(article => article.category === category)) })),
    ]} /> : grid(filtered)}
  </Section>;
}
