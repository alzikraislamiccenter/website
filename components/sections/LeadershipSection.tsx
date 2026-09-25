import GridSection from "./GridSection";
import TeamCard from "@/components/cards/TeamCard";
import type { TeamMember } from "@/types/team";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface LeadershipSectionProps extends SectionIntroProps { members: TeamMember[]; id?: string; variant?: SectionVariant }
export default function LeadershipSection({ members, ...intro }: LeadershipSectionProps) {
  return <GridSection {...intro} empty={members.length === 0}>{members.map(item => <TeamCard key={item.id} member={item} />)}</GridSection>;
}
