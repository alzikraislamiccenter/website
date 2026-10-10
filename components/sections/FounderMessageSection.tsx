"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { founderMessage } from "@/data/team";
import styles from "./FounderMessageSection.module.css";

interface FounderMessageSectionProps {
  title: string;
  description?: string;
}

export default function FounderMessageSection({ title, description }: FounderMessageSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="founder-heading">
      <div className="container">
        <div className={styles.headingRow}>
          <div>
            <span className="eyebrow">About Al Zikra</span>
            <h2 id="founder-heading" className={styles.heading}>{title}</h2>
          </div>
          <div className={styles.headingAside}>
            <Button
              className={styles.readButton}
              type="button"
              aria-expanded={expanded}
              aria-controls="founder-full-message"
              onClick={() => setExpanded(value => !value)}
            >
              {expanded ? "Close full message" : "Read full message"} <AnimatedArrow />
            </Button>
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.portrait}>
            <Image
              src="/assets/about/founder-illustrative.png"
              alt="Illustrative portrait of a scholar; not a photograph of Mufti Muhammad Aamir"
              fill
              sizes="(max-width: 700px) 100vw, 32vw"
              className={styles.portraitImage}
            />
            <span className={styles.portraitLabel}>Illustrative portrait</span>
          </div>
          <div className={styles.quotePanel}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <blockquote>
              <p>The Qur’an should not only be in our children’s memories; it should be reflected in their character, choices and lives.</p>
              <footer>Mufti Muhammad Aamir <span>Founder &amp; Visionary · Al Zikra Islamic Center</span></footer>
            </blockquote>
          </div>
        </div>

        <div id="founder-full-message" className={styles.fullMessage} hidden={!expanded}>
          <div className={styles.fullMessageHeading}>
            <span className="eyebrow">The full message</span>
            <h3>From our founder</h3>
          </div>
          <div className={styles.fullMessageBody}>
            {founderMessage.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <p className={styles.signature}>Mufti Muhammad Aamir<br />Founder &amp; Visionary<br />Al Zikra Islamic Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}
