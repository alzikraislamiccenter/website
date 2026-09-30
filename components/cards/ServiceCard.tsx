import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import type { Service } from "@/types/service";

export default function ServiceCard({ service }: { service: Service }) {
  return <Card item={service} label={service.category}><Button href="/contact#enquiry" variant="secondary">Enquire about services</Button></Card>;
}
