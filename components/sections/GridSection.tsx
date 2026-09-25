import Section from "@/components/common/Section";
import type { SectionProps } from "@/types/common";

export interface GridSectionProps extends SectionProps { empty?: boolean; emptyMessage?: string }
export default function GridSection({ children, empty = false, emptyMessage = "Content will be added once approved.", ...props }: GridSectionProps) {
  return <Section {...props}>{empty ? <p className="empty-state">{emptyMessage}</p> : <div className="card-grid">{children}</div>}</Section>;
}
