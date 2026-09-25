import Card from "@/components/common/Card";
import type { TeamMember } from "@/types/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return <Card item={member} label={member.role} showImage></Card>;
}
