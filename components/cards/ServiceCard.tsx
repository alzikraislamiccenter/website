import Card from "@/components/common/Card";
import type { Service } from "@/types/service";

export default function ServiceCard({ service }: { service: Service }) {
  return <Card item={service} label={service.category}></Card>;
}
