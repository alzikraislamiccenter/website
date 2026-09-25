"use client";

import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Lightbox from "@/components/ui/Lightbox";
import Modal from "@/components/ui/Modal";
import type { MediaItem } from "@/types/media";

export default function MediaCard({ item }: { item: MediaItem }) {
  const [open, setOpen] = useState(false);
  return <Card item={item} label={item.category} showImage={item.kind !== "audio"}>
    {item.kind === "photo" && item.image && <>
      <Button variant="secondary" onClick={() => setOpen(true)}>View {item.title}</Button>
      <Lightbox open={open} onClose={() => setOpen(false)} image={item.image} title={item.title} />
    </>}
    {item.kind === "video" && item.sourceUrl && <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Watch {item.title}</Button>
      <Modal open={open} onClose={() => setOpen(false)} title={item.title}>
        {open && <video controls preload="none" aria-label={item.title} src={item.sourceUrl}>
          {item.captions && <track kind="captions" src={item.captions.src} srcLang={item.captions.language} label={item.captions.label} default />}
          Your browser does not support video playback.
        </video>}
        {item.transcriptUrl && <a href={item.transcriptUrl}>Read transcript</a>}
      </Modal>
    </>}
    {item.kind === "audio" && item.sourceUrl && <>
      <audio controls preload="none" aria-label={item.title} src={item.sourceUrl}>Your browser does not support audio playback.</audio>
      {item.transcriptUrl && <a href={item.transcriptUrl}>Read transcript</a>}
    </>}
  </Card>;
}
