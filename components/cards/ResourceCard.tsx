import Card from "@/components/common/Card";
import type { Resource } from "@/types/resource";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return <Card item={resource} label={resource.format}>{resource.downloadUrl && <a href={resource.downloadUrl} download>Download {resource.title}</a>}</Card>;
}
