export type ProgramDetail = {
  focus: string;
  benefits: readonly [string, string, string, string];
};

// Editorial learning themes only. The centre must confirm course entry criteria and delivery details.
export const programDetails: Record<string, ProgramDetail> = {
  "hifz-ul-quran": { focus: "Quran memorisation and revision", benefits: ["Memorisation practice", "Revision habits", "Familiarity with verses", "A steady learning rhythm"] },
  "nazra-quran": { focus: "Quran reading and recitation", benefits: ["Reading practice", "Recognition of the text", "Recitation familiarity", "A stronger foundation"] },
  tajweed: { focus: "Principles of careful Quran recitation", benefits: ["Pronunciation awareness", "Recitation principles", "Attentive listening", "Careful practice"] },
  "islamic-studies": { focus: "Exploring Islamic learning", benefits: ["Foundational topics", "Broader context", "Thoughtful reflection", "Continued learning"] },
  "full-time-program": { focus: "A more intensive Quran learning pathway", benefits: ["Focused study time", "A consistent routine", "Regular practice", "Room for progression"] },
  "part-time-program": { focus: "A flexible Quran learning pathway", benefits: ["Flexible pacing", "Manageable study time", "Regular practice", "Ongoing learning"] },
};

export const programRequirements = [
  { title: "Learning level", description: "The suitable starting level will be confirmed with the centre." },
  { title: "Age & eligibility", description: "Eligibility criteria have not yet been published." },
  { title: "Availability", description: "Current places and class times will be confirmed on enquiry." },
  { title: "Enrolment details", description: "The centre will share any required documents and steps." },
] as const;
