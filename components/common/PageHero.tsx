import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";
import ImageWrapper from "./ImageWrapper";
import Button from "./Button";
import { cn } from "@/lib/utils";
import type { Alignment, BreadcrumbItem, CTA, ImageAsset } from "@/types/common";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: ImageAsset;
  breadcrumbs?: BreadcrumbItem[];
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  alignment?: Alignment;
  variant?: "default" | "home" | "compact";
}
export default function PageHero({ eyebrow, title, description, backgroundImage, breadcrumbs, primaryCTA, secondaryCTA, alignment = "left", variant = "default" }: PageHeroProps) {
  return <section className={cn("page-hero", `hero-${variant}`, `align-${alignment}`)}>
    <Container>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="hero-description">{description}</p>}
      {(primaryCTA || secondaryCTA) && <div className="actions">
        {primaryCTA && <Button href={primaryCTA.href}>{primaryCTA.label}</Button>}
        {secondaryCTA && <Button href={secondaryCTA.href} variant="secondary">{secondaryCTA.label}</Button>}
      </div>}
      {backgroundImage && <ImageWrapper image={backgroundImage} priority sizes="100vw" />}
    </Container>
  </section>;
}
