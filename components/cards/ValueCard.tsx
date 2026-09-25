import Card from "@/components/common/Card";
import type { Value } from "@/types/common";

export default function ValueCard({ value }: { value: Value }) {
  return <Card item={value} label={undefined}></Card>;
}
