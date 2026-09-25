import type { SectionIntroProps } from "@/types/common";
import { cn } from "@/lib/utils";

export default function SectionIntro({ eyebrow, title, description, alignment = "left", maxWidth = "wide" }: SectionIntroProps) {
  return <header className={cn("section-intro", `align-${alignment}`, `width-${maxWidth}`)}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </header>;
}
