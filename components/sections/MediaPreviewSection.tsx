import MediaGallerySection, { type MediaGallerySectionProps } from "./MediaGallerySection";

export interface MediaPreviewSectionProps extends MediaGallerySectionProps { limit?: number }
export default function MediaPreviewSection({ items, limit = 3, ...intro }: MediaPreviewSectionProps) {
  return <MediaGallerySection {...intro} items={items.slice(0, limit)} />;
}
