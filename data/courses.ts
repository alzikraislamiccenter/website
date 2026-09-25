import type { Course, CourseCategory } from "@/types/course";
export const courseCategories: CourseCategory[] = ["Quran", "Hadith", "Fiqh", "Seerah", "Arabic", "Islamic Studies", "Kids / Youth"];
export const courses: Course[] = courseCategories.map((category, index) => ({
  id: `course-placeholder-${index}`, title: `${category} course placeholder`, category,
  description: "Course details, availability, teachers and enrolment information await confirmation.", placeholder: true,
}));
