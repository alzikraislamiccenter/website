import GridSection from "./GridSection";
import StatCard from "@/components/cards/StatCard";
import type { SectionIntroProps, Stat } from "@/types/common";

export interface CommunityImpactSectionProps extends SectionIntroProps { stats: Stat[] }
export default function CommunityImpactSection({ stats, ...intro }: CommunityImpactSectionProps) {
  return <GridSection {...intro} empty={!stats.length}>{stats.map(stat => <StatCard key={stat.id} stat={stat} />)}</GridSection>;
}
