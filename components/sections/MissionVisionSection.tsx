import GridSection from "./GridSection";
import Card from "@/components/common/Card";
import type { ContentItem, SectionIntroProps } from "@/types/common";

export interface MissionVisionSectionProps extends SectionIntroProps { items: ContentItem[] }
export default function MissionVisionSection({ items, ...intro }: MissionVisionSectionProps) {
  return <GridSection {...intro} empty={!items.length}>{items.map(item => <Card key={item.id} item={item} />)}</GridSection>;
}
