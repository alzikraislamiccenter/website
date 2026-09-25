import Container from "./Container";
import SectionIntro from "./SectionIntro";
import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types/common";

export default function Section({ children, id, variant = "default", ...intro }: SectionProps) {
  return <section id={id} className={cn("section", `section-${variant}`)}>
    <Container><SectionIntro {...intro} />{children}</Container>
  </section>;
}
