import Section from "@/components/common/Section";
import type { ContentItem, SectionIntroProps } from "@/types/common";

export interface LearningProcessSectionProps extends SectionIntroProps { steps: ContentItem[] }
export default function LearningProcessSection({ steps, ...intro }: LearningProcessSectionProps) {
  return <Section {...intro}><ol className="process-list">{steps.map(step => <li key={step.id}><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></Section>;
}
