import Image from "next/image";
import { cn } from "@/lib/utils";
import { IMAGE_SIZES } from "@/lib/constants";
import type { ImageAsset } from "@/types/common";

export interface ImageWrapperProps { image?: ImageAsset; ratio?: "landscape" | "square" | "portrait"; className?: string; sizes?: string; priority?: boolean }
export default function ImageWrapper({ image, ratio = "landscape", className, sizes = IMAGE_SIZES, priority = false }: ImageWrapperProps) {
  return <div className={cn("image-wrapper", `ratio-${ratio}`, className)}>
    {image?.src ? <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} />
      : <span className="image-placeholder">Image pending approval</span>}
  </div>;
}
