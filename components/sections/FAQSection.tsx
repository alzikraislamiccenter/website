import Section from "@/components/common/Section";
import Accordion from "@/components/ui/Accordion";
import type { FAQ } from "@/types/faq";
import type { SectionIntroProps } from "@/types/common";

export interface FAQSectionProps extends SectionIntroProps { items: FAQ[]; id?: string }
export default function FAQSection({ items, id, ...intro }: FAQSectionProps) {
  return <Section {...intro} id={id}><Accordion items={items} /></Section>;
}
