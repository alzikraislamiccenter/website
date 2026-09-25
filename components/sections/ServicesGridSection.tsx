import GridSection from "./GridSection";
import ServiceCard from "@/components/cards/ServiceCard";
import type { Service } from "@/types/service";
import type { SectionIntroProps, SectionVariant } from "@/types/common";

export interface ServicesGridSectionProps extends SectionIntroProps { services: Service[]; id?: string; variant?: SectionVariant }
export default function ServicesGridSection({ services, ...intro }: ServicesGridSectionProps) {
  return <GridSection {...intro} empty={services.length === 0}>{services.map(item => <ServiceCard key={item.id} service={item} />)}</GridSection>;
}
