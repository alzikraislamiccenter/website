import Card from "@/components/common/Card";
import type { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  return <Card item={course} label={course.category}></Card>;
}
