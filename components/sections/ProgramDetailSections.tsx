import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { programDetails, programRequirements } from "@/data/programDetails";

export default function ProgramDetailSections({ slug, title, description }: { slug: string; title: string; description: string }) {
  const detail = programDetails[slug];
  if (!detail) return null;

  return <>
    <section className="program-learner-message" aria-labelledby="program-learner-message-title"><Container>
      <span className="program-learner-eyebrow">OUR MESSAGE</span>
      <h2 id="program-learner-message-title">Learning for every learner</h2>
      <p>Explore a Quran learning pathway that speaks to your goals. Ask the centre about current programs, availability, and the next steps to begin.</p>
      <div className="program-learner-stats" aria-label="Al Zikra at a glance">
        <div><span>Listed programs</span><strong>06</strong></div>
        <div><span>Languages named</span><strong>02</strong></div>
        <div><span>Islamic center</span><strong>01</strong></div>
      </div>
    </Container></section>
    <section className="program-overview" data-header-surface="dark" aria-labelledby="program-overview-title"><Container>
      <div className="program-overview-intro">
        <div><span className="program-kicker">ABOUT THE COURSE</span><h2 id="program-overview-title">About {title}</h2></div>
        <p>{description} Contact the centre for the latest course details and availability.</p>
      </div>
      <div className="program-requirements-heading"><h3>Course requirements</h3><p>Specific entry criteria are awaiting confirmation.</p></div>
      <ol className="program-requirements">{programRequirements.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{item.title}</h4><p>{item.description}</p></li>)}</ol>
      <div className="program-focus"><div><span className="program-kicker">LEARNING FOCUS</span><p>{detail.focus}</p></div><Button href="/contact#enquiry">Ask about this course <AnimatedArrow /></Button></div>
    </Container></section>
    <section className="program-why" aria-labelledby="program-why-title"><Container>
      <div className="program-why-intro"><span className="program-kicker">WHY EXPLORE THIS COURSE</span><h2 id="program-why-title">Why choose {title}?</h2><p>Four learning areas this course is designed to explore. Confirmed teaching and outcomes will be shared by the centre.</p></div>
      <div className="program-benefits">{detail.benefits.map((benefit, index) => <div key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><h3>{benefit}</h3></div>)}</div>
    </Container></section>
  </>;
}
