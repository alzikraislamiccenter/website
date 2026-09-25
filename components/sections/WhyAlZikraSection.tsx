import GridSection from "./GridSection";
import ValueCard from "@/components/cards/ValueCard";
import type { SectionIntroProps, Value } from "@/types/common";

export interface WhyAlZikraSectionProps extends SectionIntroProps { items: Value[] }
export default function WhyAlZikraSection({ items, ...intro }: WhyAlZikraSectionProps) {
  return <GridSection {...intro} empty={!items.length}>{items.map(item => <ValueCard key={item.id} value={item} />)}</GridSection>;
}
