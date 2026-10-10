import type { Course, CourseCategory } from "@/types/course";
export const courseCategories: CourseCategory[] = ["Quran", "Hadith", "Fiqh", "Seerah", "Arabic", "Islamic Studies", "Kids / Youth"];
const descriptions: Partial<Record<CourseCategory, string>> = {
  Quran: "Hifz-e-Quran, Nazira reading, Tajweed, Makharij and Tarjuma-e-Quran after Hifz.",
  Hadith: "Hadith is studied within the eight-year Islamic Studies / Aalim-e-Deen course.",
  Fiqh: "Fiqh is studied within the eight-year Islamic Studies / Aalim-e-Deen course.",
  Arabic: "Arabic reading, writing, communication, dialogue and debate are part of the Aalim-e-Deen course.",
  "Islamic Studies": "An eight-year non-residential course combining Quran, Hadith, Fiqh, Arabic and contemporary skills.",
};
export const courses: Course[] = courseCategories.map((category, index) => ({
  id: `course-${index}`, title: category, category,
  description: descriptions[category] ?? "A separate course outline and admission information have not been supplied for this subject.",
  placeholder: !descriptions[category],
}));
