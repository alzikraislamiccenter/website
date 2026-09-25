import GridSection from "./GridSection";
import ValueCard from "@/components/cards/ValueCard";
import type { Value } from "@/types/common";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface ValuesSectionProps extends SectionIntroProps { values: Value[]; id?: string; variant?: SectionVariant }
export default function ValuesSection({ values, ...intro }: ValuesSectionProps) {
  return <GridSection {...intro} empty={values.length === 0}>{values.map(item => <ValueCard key={item.id} value={item} />)}</GridSection>;
}
