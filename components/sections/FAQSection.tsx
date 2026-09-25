import Section from "@/components/common/Section";
import Accordion from "@/components/ui/Accordion";
import type { FAQ } from "@/types/faq";
import type { SectionIntroProps } from "@/types/common";

export interface FAQSectionProps extends SectionIntroProps { items: FAQ[] }
export default function FAQSection({ items, ...intro }: FAQSectionProps) {
  return <Section {...intro}><Accordion items={items} /></Section>;
}
