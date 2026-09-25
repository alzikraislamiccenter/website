import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import ImageWrapper from "@/components/common/ImageWrapper";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";
import type { CTA, ImageAsset, SectionProps } from "@/types/common";

export interface SplitContentSectionProps extends SectionProps {
  image?: ImageAsset | string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  showImage?: boolean;
  cta?: CTA;
}
export default function SplitContentSection({ image, imageAlt = "", imagePosition = "right", showImage = true, cta, children, id, variant = "default", ...intro }: SplitContentSectionProps) {
  const asset = typeof image === "string" ? (image ? { src: image, alt: imageAlt } : undefined) : image;
  return <section id={id} className={cn("section", `section-${variant}`)}><Container className={cn("split-content", showImage && "with-image", `image-${imagePosition}`)}>
    <div><SectionIntro {...intro} />{children}{cta && <Button href={cta.href}>{cta.label}</Button>}</div>
    {showImage && <ImageWrapper image={asset} sizes="(max-width: 760px) 100vw, 50vw" />}
  </Container></section>;
}
