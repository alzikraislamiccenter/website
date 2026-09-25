import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import type { CTA, SectionIntroProps } from "@/types/common";

export interface LeadCTASectionProps extends SectionIntroProps { primaryCTA?: CTA; secondaryCTA?: CTA; variant?: "default" | "newsletter"; notice?: string }
export default function LeadCTASection({ primaryCTA, secondaryCTA, variant = "default", notice, ...intro }: LeadCTASectionProps) {
  return <Section {...intro} variant="muted">
    {(primaryCTA || secondaryCTA) && <div className="actions">
      {primaryCTA && <Button href={primaryCTA.href}>{primaryCTA.label}</Button>}
      {secondaryCTA && <Button href={secondaryCTA.href} variant="secondary">{secondaryCTA.label}</Button>}
    </div>}
    {variant === "newsletter" && <p className="status-note">{notice ?? "Newsletter registration will be available after the mailing service is configured."}</p>}
  </Section>;
}
