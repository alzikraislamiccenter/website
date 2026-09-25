import Section from "@/components/common/Section";
import CourseCard from "@/components/cards/CourseCard";
import Tabs from "@/components/ui/Tabs";
import type { Course, CourseCategory } from "@/types/course";
import type { SectionIntroProps } from "@/types/common";

export interface CoursesGridSectionProps extends SectionIntroProps { courses: Course[]; categories?: CourseCategory[] }
export default function CoursesGridSection({ courses, categories, ...intro }: CoursesGridSectionProps) {
  const grid = (items: Course[]) => items.length ? <div className="card-grid">{items.map(course => <CourseCard key={course.id} course={course} />)}</div> : <p className="empty-state">No approved courses in this category yet.</p>;
  return <Section {...intro}>{categories?.length ? <Tabs label="Course categories" items={[
    { id: "all", label: "All", content: grid(courses) },
    ...categories.map(category => ({ id: category, label: category, content: grid(courses.filter(course => course.category === category)) })),
  ]} /> : grid(courses)}</Section>;
}
