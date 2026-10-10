export type ProgramDetail = {
  overview: string;
  focus: string;
  requirements: readonly { title: string; description: string }[];
  benefits: readonly [string, string, string, string];
};

export const programDetails: Record<string, ProgramDetail> = {
  "hifz-ul-quran": {
    overview: "A focused, non-residential two-year pathway combining Quran memorisation, daily revision, Tajweed and character development. Teachers guide progress, families remain involved, and admissions are open for eligible students.",
    focus: "Accurate memorisation, continuous revision, fluent recitation and character development.",
    requirements: [
      { title: "Age and education", description: "Ages 11–12 and above, with at least Primary School education." },
      { title: "Readiness", description: "Basic Quran reading and Tajweed familiarity; admission follows assessment and seat availability." },
      { title: "Daily schedule", description: "Full-day study runs from 7:00 AM to 5:00 PM. Sunday is the weekly holiday." },
      { title: "Learning & family", description: "Non-residential study, Parent–Teacher Meetings, reading and writing, activities and Tarjuma-e-Quran after Hifz." },
    ],
    benefits: ["Structured Hifz and revision", "Tajweed and Makharij", "Tarjuma-e-Quran after Hifz", "Parent–Teacher partnership"],
  },
  "nazra-quran": {
    overview: "A non-residential Quran reading pathway focused on correct pronunciation, Tajweed, Makharij and fluent recitation. It can prepare learners for Hifz; admissions are open for eligible students.",
    focus: "Confident, fluent and accurate Quran reading with Tajweed and Makharij.",
    requirements: [
      { title: "Age and education", description: "Ages 10–11 and above, with at least Primary School education." },
      { title: "Learning foundation", description: "Reading, writing, accurate recitation and preparation for a possible Hifz pathway." },
      { title: "Class schedule", description: "Classes run from 3:00 PM to 5:00 PM. Sunday is the weekly holiday." },
      { title: "Family & character", description: "Non-residential study alongside regular education, with Islamic manners, activities and Parent–Teacher Meetings." },
    ],
    benefits: ["Quran reading and fluency", "Tajweed and Makharij", "Preparation for Hifz", "Parent–Teacher partnership"],
  },
  tajweed: {
    overview: "Tajweed supports careful, accurate Quran recitation through pronunciation, Makharij and fluent reading. It is included in the supplied Hifz and Nazira pathways.",
    focus: "Correct pronunciation, Makharij, fluency and accurate recitation.",
    requirements: [
      { title: "Pronunciation", description: "Careful, correct articulation of Quranic words." },
      { title: "Makharij", description: "Attention to the proper articulation of letters." },
      { title: "Tajweed", description: "Principles of accurate and fluent Quran recitation." },
      { title: "Availability", description: "Ask which programme provides suitable Tajweed instruction; no separate schedule is supplied." },
    ],
    benefits: ["Pronunciation awareness", "Makharij practice", "Recitation fluency", "Accurate reading habits"],
  },
  "islamic-studies": {
    overview: "An eight-year, non-residential Aalim-e-Deen pathway combining Islamic scholarship with Arabic, reading, discussion and contemporary skills. It prepares students for learning, character and service.",
    focus: "Traditional Islamic scholarship, Arabic proficiency, contemporary skills and service to society.",
    requirements: [
      { title: "Prior study", description: "Completed Hifz-e-Quran and at least Middle-level education." },
      { title: "Age and Arabic", description: "Minimum age stated as 14–15 years; basic Arabic reading, writing and speaking are required." },
      { title: "Daily schedule", description: "Monday to Saturday, 7:00 AM to 5:00 PM. Sunday is the weekly holiday." },
      { title: "Learning & pathways", description: "Quran, Hadith, Fiqh, Arabic, library study, digital skills and activities; possible teaching or research pathways." },
    ],
    benefits: ["Quran, Hadith and Fiqh", "Arabic dialogue and debate", "Digital and reading skills", "Pathways to teaching and research"],
  },
  "full-time-program": {
    overview: "A structured full-day environment for supervised Quranic and Islamic learning. Hifz and Aalim-e-Deen follow distinct, non-residential pathways with different entry requirements.",
    focus: "A structured day for focused Quranic and Islamic education.",
    requirements: [
      { title: "Choose a pathway", description: "Hifz and Islamic Studies have different prior-study and age requirements." },
      { title: "Assessment", description: "Background, Quran reading, readiness and suitability are reviewed." },
      { title: "Daily schedule", description: "The supplied full-day programme schedule is 7:00 AM to 5:00 PM, with Sunday as the weekly holiday." },
      { title: "Attendance", description: "Non-residential study; students return home daily. Availability depends on the chosen programme." },
    ],
    benefits: ["Supervised learning", "Memorisation and revision", "Islamic knowledge", "Character development"],
  },
  "part-time-program": {
    overview: "The supplied part-time pathway is Nazira-e-Quran: Quran reading with Tajweed, Makharij and pronunciation practice alongside regular academic education.",
    focus: "A Quran reading foundation alongside regular academic education.",
    requirements: [
      { title: "Programme", description: "Nazira-e-Quran is the supplied part-time pathway; no other timetable has been provided." },
      { title: "Age and education", description: "Ages 10–11 and above, with at least Primary School education." },
      { title: "Class schedule", description: "Nazira classes run from 3:00 PM to 5:00 PM; Sunday is the weekly holiday." },
      { title: "Attendance", description: "Non-residential learning designed to sit alongside regular academic education." },
    ],
    benefits: ["Quran reading", "Tajweed and Makharij", "Preparation for Hifz", "Family involvement"],
  },
};
