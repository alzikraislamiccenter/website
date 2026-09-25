import GridSection from "./GridSection";
import ResourceCard from "@/components/cards/ResourceCard";
import type { Resource } from "@/types/resource";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface ResourcesSectionProps extends SectionIntroProps { resources: Resource[]; id?: string; variant?: SectionVariant }
export default function ResourcesSection({ resources, ...intro }: ResourcesSectionProps) {
  return <GridSection {...intro} empty={resources.length === 0}>{resources.map(item => <ResourceCard key={item.id} resource={item} />)}</GridSection>;
}
