import type { Program } from "@/types/program";

export const programs: Program[] = [
  { id: "nazira", title: "Nazira", description: "Quran reading and recitation. Class levels and schedules will be confirmed.", status: "to-be-confirmed" },
  { id: "hifz", title: "Hifz", description: "Quran memorisation. Timetable and enrolment details will be confirmed.", status: "to-be-confirmed" },
  { id: "huffaz-education", title: "Huffaz Education System", description: "An education pathway for Huffaz. Curriculum and admissions details will be confirmed.", status: "to-be-confirmed" },
  { id: "seerat-ul-nabi", title: "Seerat Ul Nabi S.A.W.W", description: "Study of the Prophet's life. Format and session dates will be confirmed.", status: "to-be-confirmed" },
  { id: "dars-e-nizami", title: "Dars e Nizami", description: "Islamic studies. Levels, curriculum and intake dates will be confirmed.", status: "to-be-confirmed" },
  { id: "english-urdu", title: "English & Urdu Language", description: "English and Urdu language learning. Levels and schedules will be confirmed.", status: "to-be-confirmed" },
];

export const startSteps = [
  { id: "explore", title: "Explore", description: "Browse the learning programs" },
  { id: "enquire", title: "Enquire", description: "Ask about admission and availability" },
  { id: "begin", title: "Get started", description: "Confirm the next steps with the centre" },
] as const;
