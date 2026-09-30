import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { journeyFacts, journeyMilestones } from "@/data/journey";

export default function HomeJourneySection() {
  return <section id="our-journey" className="home-journey" aria-labelledby="journey-title">
    <div className="home-journey-main" data-header-surface="dark">
      <Container>
        <div className="journey-heading">
          <span>ABOUT AL ZIKRA</span>
          <h2 id="journey-title">Timeline &amp; History</h2>
          <p>Four chapters in the Al Zikra journey.</p>
        </div>
        <div className="journey-art" aria-hidden="true">
          <div className="journey-note">Learning with purpose, growing together</div>
          <span className="journey-quote-mark">“</span>
          <div className="journey-ribbon">QURAN LEARNING · COMMUNITY · CONNECTION ·</div>
          <div className="journey-image"><Image src="/assets/gallery/student-reading-boy.webp" alt="" fill sizes="(max-width: 600px) 160px, 240px" /></div>
          <div className="journey-quote"><span>✦</span><p>A space to learn, remember, and grow.</p></div>
        </div>
        <ol className="journey-timeline">
          {journeyMilestones.map(item => <li key={item.year}>
            <span className="journey-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>)}
        </ol>
        <div className="journey-main-action"><Button href="/about">Discover our story <AnimatedArrow /></Button></div>
      </Container>
    </div>
    <div className="home-journey-bottom"><Container>
      <div className="journey-facts">{journeyFacts.map(fact => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div>
      <div className="journey-bottom-content"><div><h3>Learning, one chapter at a time.</h3><Button href="/about" variant="secondary">About Al Zikra <AnimatedArrow /></Button></div><p>Explore the centre, its learning areas, and the people and ideas that shape its story. More details about each milestone can be added as the history is confirmed.</p></div>
    </Container></div>
  </section>;
}
