import GridSection from "./GridSection";
import CampusCard from "@/components/cards/CampusCard";
import type { Campus } from "@/types/campus";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface CampusSectionProps extends SectionIntroProps { campuses: Campus[]; id?: string; variant?: SectionVariant }
export default function CampusSection({ campuses, ...intro }: CampusSectionProps) {
  return <GridSection {...intro} empty={campuses.length === 0}>{campuses.map(item => <CampusCard key={item.id} campus={item} />)}</GridSection>;
}
