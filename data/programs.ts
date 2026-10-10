import type { Program } from "@/types/program";

export const programs: Program[] = [
  { id: "nazira", title: "Nazira", description: "Quran reading with Tajweed and Makharij. Non-residential classes run 3:00 PM–5:00 PM; Sunday holiday.", href: "/programs/nazra-quran", status: "ongoing" },
  { id: "hifz", title: "Hifz", description: "A focused two-year, non-residential Hifz-e-Quran pathway with revision, Tajweed and character development. 7:00 AM–5:00 PM.", href: "/programs/hifz-ul-quran", status: "ongoing" },
  { id: "huffaz-education", title: "Huffaz Education System", description: "For students who have completed Hifz: Matriculation preparation, English language and speaking, computer skills, debate and confidence building.", status: "to-be-confirmed" },
  { id: "seerat-ul-nabi", title: "Seerat Ul Nabi S.A.W.W", description: "Study of the Prophet's life. Format and session dates will be confirmed.", status: "to-be-confirmed" },
  { id: "dars-e-nizami", title: "Dars e Nizami", description: "An eight-year Islamic Studies / Aalim-e-Deen course covering Quran, Hadith, Fiqh, Arabic and contemporary skills.", href: "/programs/islamic-studies", status: "ongoing" },
  { id: "english-urdu", title: "English & Urdu Language", description: "English and Urdu language learning. Levels and schedules will be confirmed.", status: "to-be-confirmed" },
];

export const startSteps = [
  { id: "explore", title: "Explore", description: "Compare the Hifz, Nazira and Islamic Studies pathways" },
  { id: "enquire", title: "Enquire", description: "Ask about programme eligibility and seat availability" },
  { id: "begin", title: "Get started", description: "Complete the assessment for a suitable programme" },
] as const;
