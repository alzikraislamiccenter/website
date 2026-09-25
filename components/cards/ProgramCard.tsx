import Card from "@/components/common/Card";
import type { Program } from "@/types/program";

export default function ProgramCard({ program }: { program: Program }) {
  return <Card item={program} label={program.dateLabel}></Card>;
}
