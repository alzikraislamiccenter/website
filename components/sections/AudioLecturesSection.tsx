import MediaGallerySection, { type MediaGallerySectionProps } from "./MediaGallerySection";

export default function AudioLecturesSection({ items, ...intro }: MediaGallerySectionProps) {
  return <MediaGallerySection {...intro} items={items.filter(item => item.kind === "audio")} />;
}
