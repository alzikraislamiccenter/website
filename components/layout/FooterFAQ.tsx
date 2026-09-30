import Link from "next/link";
import Container from "@/components/common/Container";
import Accordion from "@/components/ui/Accordion";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { faqs } from "@/data/faqs";

export default function FooterFAQ() {
  return <section id="faqs" className="footer-faq" aria-labelledby="footer-faq-title">
    <Container className="footer-faq-inner">
      <div className="footer-faq-intro">
        <p className="footer-faq-eyebrow"><span aria-hidden="true">✦</span> Questions &amp; answers</p>
        <h2 id="footer-faq-title">Clear answers for Quran learning</h2>
        <p className="footer-faq-description">Answers about programs, schedules and learning at Al Zikra.</p>
        <aside className="footer-faq-contact">
          <h3>Still have questions?</h3>
          <p>Visit our contact page for the latest ways to reach the centre.</p>
          <Link href="/contact"><AnimatedArrow className="footer-faq-contact-icon" />Contact us</Link>
        </aside>
      </div>
      <Accordion items={faqs} defaultOpenFirst />
    </Container>
  </section>;
}
