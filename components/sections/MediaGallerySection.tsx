import Section from "@/components/common/Section";
import MediaCard from "@/components/cards/MediaCard";
import Tabs from "@/components/ui/Tabs";
import type { MediaCategory, MediaItem } from "@/types/media";
import type { SectionIntroProps } from "@/types/common";

export interface MediaGallerySectionProps extends SectionIntroProps { items: MediaItem[]; categories?: MediaCategory[] }
export default function MediaGallerySection({ items, categories, ...intro }: MediaGallerySectionProps) {
  const grid = (entries: MediaItem[]) => entries.length ? <div className="card-grid">{entries.map(item => <MediaCard key={item.id} item={item} />)}</div> : <p className="empty-state">Approved media will appear here when available.</p>;
  return <Section {...intro}>{categories?.length ? <Tabs label="Media categories" items={[
    { id: "all", label: "All", content: grid(items) },
    ...categories.map(category => ({ id: category, label: category, content: grid(items.filter(item => item.category === category)) })),
  ]} /> : grid(items)}</Section>;
}
