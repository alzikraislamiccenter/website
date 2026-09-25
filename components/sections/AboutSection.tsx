import SplitContentSection, { type SplitContentSectionProps } from "./SplitContentSection";

// Semantic entry point; shared layout and styling live in SplitContentSection.
export default function AboutSection(props: SplitContentSectionProps) {
  return <SplitContentSection {...props} />;
}
