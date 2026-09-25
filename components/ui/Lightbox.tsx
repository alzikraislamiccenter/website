"use client";

import Modal from "./Modal";
import ImageWrapper from "@/components/common/ImageWrapper";
import type { ImageAsset } from "@/types/common";

export interface LightboxProps { open: boolean; onClose: () => void; image: ImageAsset; title: string }
export default function Lightbox({ open, onClose, image, title }: LightboxProps) {
  return <Modal open={open} onClose={onClose} title={title}><ImageWrapper image={image} sizes="90vw" /></Modal>;
}
