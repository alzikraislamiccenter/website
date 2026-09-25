import GridSection from "./GridSection";
import ProgramCard from "@/components/cards/ProgramCard";
import type { Program } from "@/types/program";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface ProgramsSectionProps extends SectionIntroProps { programs: Program[]; id?: string; variant?: SectionVariant }
export default function ProgramsSection({ programs, ...intro }: ProgramsSectionProps) {
  return <GridSection {...intro} empty={programs.length === 0}>{programs.map(item => <ProgramCard key={item.id} program={item} />)}</GridSection>;
}
