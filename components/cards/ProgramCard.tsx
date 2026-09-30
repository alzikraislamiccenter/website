import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";
import type { Program } from "@/types/program";
import AnimatedArrow from "@/components/common/AnimatedArrow";

export default function ProgramCard({ program, editorial = false, index = 0 }: { program: Program; editorial?: boolean; index?: number }) {
  if (editorial) {
    return <article className="home-program-card">
      <span className="home-program-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <Link href={program.href ?? "/contact#enquiry"}>{program.href ? "View program" : "Ask about this program"} <AnimatedArrow /></Link>
    </article>;
  }
  return <Card item={program} label={program.dateLabel}><Button href="/contact#enquiry" variant="secondary">Ask about programmes</Button></Card>;
}
