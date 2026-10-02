// Replace these example listings with approved vacancies before publication.
export const jobs = [
  { id: "quran-teacher", title: "Quran Teacher", description: "Guide learners in Quran reading and recitation.", category: "Teaching" },
  { id: "hifz-instructor", title: "Hifz Instructor", description: "Support students in memorisation and revision.", category: "Teaching" },
  { id: "tajweed-teacher", title: "Tajweed Teacher", description: "Teach the principles of careful Quran recitation.", category: "Teaching" },
  { id: "islamic-studies-teacher", title: "Islamic Studies Teacher", description: "Help learners explore core Islamic topics.", category: "Teaching" },
  { id: "academic-coordinator", title: "Academic Coordinator", description: "Support the organisation of learning programmes.", category: "Administration" },
] as const;

export const qualifications = ["Hifz", "Dars e Nizami", "Tajweed", "Islamic Studies", "Matric", "FSc", "BS", "MS", "PhD", "Other"] as const;
