import Image from "next/image";
import type { SectionIntroProps } from "@/types/common";
import styles from "./AboutIntroSections.module.css";

export default function AboutIntroSections({ about, story }: { about: SectionIntroProps; story: SectionIntroProps }) {
  return <>
    <section className={`section ${styles.section}`} aria-labelledby="about-intro-title">
      <div className={`container ${styles.row}`}>
        <div className={`${styles.image} ${styles.imageFirst}`}>
          <Image src="/assets/page-imagery/about-intro-male.webp" alt="Illustrative Quran teacher guiding boys in a classroom" fill sizes="(max-width: 760px) 100vw, 36vw" />
        </div>
        <div className={styles.copy}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 id="about-intro-title">{about.title}</h2>
          <p>{about.description}</p>
          <p>We guide students through Quranic learning while encouraging respect, responsibility and a lasting connection with the Quran.</p>
        </div>
      </div>
    </section>
    <section className={`section ${styles.section} ${styles.second}`} aria-labelledby="about-story-title">
      <div className={`container ${styles.row} ${styles.rowReverse}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Al Zikra Islamic Center</span>
          <h2 id="about-story-title">{story.title}</h2>
          <p>{story.description}</p>
          <p>Our non-residential approach lets students return to their families each day, keeping home and the Center connected throughout their education.</p>
        </div>
        <div className={`${styles.image} ${styles.imageSecond}`}>
          <Image src="/assets/page-imagery/about-story-male.webp" alt="Illustrative male student reading the Quran in a learning space" fill sizes="(max-width: 760px) 100vw, 36vw" />
        </div>
      </div>
    </section>
  </>;
}
