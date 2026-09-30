import type { Course, CourseCategory } from "@/types/course";
export const courseCategories: CourseCategory[] = ["Quran", "Hadith", "Fiqh", "Seerah", "Arabic", "Islamic Studies", "Kids / Youth"];
export const courses: Course[] = courseCategories.map((category, index) => ({
  id: `course-placeholder-${index}`, title: category, category,
  description: "Explore this learning area. Course details, teachers and availability will be confirmed here.", placeholder: true,
}));
