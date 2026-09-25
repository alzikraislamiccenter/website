import Card from "@/components/common/Card";
import type { Campus } from "@/types/campus";

export default function CampusCard({ campus }: { campus: Campus }) {
  return <Card item={campus} label={campus.address ?? "Address to be confirmed"} showImage></Card>;
}
