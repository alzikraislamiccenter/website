import Image from "next/image";
import styles from "./AboutIdentitySection.module.css";

const facts = [
  { value: "2009", label: "Established", icon: "calendar" },
  { value: "04", label: "Branches", icon: "branches" },
  { value: "02", label: "Year Hifz pathway", icon: "book" },
  { value: "08", label: "Year Islamic Studies", icon: "study" },
] as const;

const guides = [
  { title: "Our Vision", icon: "vision", description: "Nurture young Muslims connected to the Quran, strong in character, grounded in Islamic values and ready to serve society." },
  { title: "Our Mission", icon: "mission", description: "Provide structured Quranic and Islamic education with revision, Tajweed, Arabic, character development and close family involvement." },
  { title: "Our Core Values", icon: "values", description: "Adab, honesty, respect, discipline and responsibility guide how students learn, behave and care for others." },
] as const;

function IdentityIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    calendar: <><rect x="7" y="10" width="34" height="31" rx="3"/><path d="M15 6v8m18-8v8M7 20h34m-26 7h6m6 0h6m-18 7h6"/></>,
    branches: <><circle cx="24" cy="10" r="4"/><circle cx="9" cy="37" r="4"/><circle cx="24" cy="37" r="4"/><circle cx="39" cy="37" r="4"/><path d="M24 14v10M9 33v-9h30v9M24 24v9"/></>,
    book: <><path d="M24 12c-6-3-12-3-18-1v28c6-2 12-2 18 1 6-3 12-3 18-1V11c-6-2-12-2-18 1Z"/><path d="M24 12v28m-13-21h7m12 0h7"/></>,
    study: <><path d="m5 18 19-9 19 9-19 9L5 18Z"/><path d="M12 22v10c7 6 17 6 24 0V22M42 19v14"/></>,
    vision: <><path d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24Z"/><circle cx="24" cy="24" r="5"/></>,
    mission: <><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="4"/></>,
    values: <><path d="M24 40 8 25a9 9 0 0 1 13-13l3 3 3-3a9 9 0 0 1 13 13L24 40Z"/><path d="m17 25 5 5 9-10"/></>,
  };
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[kind]}</svg>;
}

export default function AboutIdentitySection() {
  return <>
    <section className={`section ${styles.identity}`} aria-labelledby="who-we-are-title">
      <div className="container">
        <div className={styles.introGrid}>
          <div className={styles.imageWrap}>
            <Image src="/assets/page-imagery/about-identity-male.webp" alt="Illustrative boys reading the Quran with a male teacher" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.image} />
          </div>
          <div className={styles.introCopy}>
            <span className="eyebrow">Al Zikra Islamic Center</span>
            <h2 id="who-we-are-title">Who We Are</h2>
            <p>Since 2009, Al Zikra Islamic Center has provided Quranic and Islamic education in Westridge III, Rawalpindi. Our non-residential approach keeps students close to their families while they learn.</p>
            <p>Teachers guide Quran reading, memorisation and revision while encouraging discipline, good character and a lasting connection with the Quran.</p>
          </div>
        </div>
        <div className={styles.facts}>
          {facts.map(fact => <div className={styles.fact} key={fact.label}>
            <IdentityIcon kind={fact.icon} />
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>)}
        </div>
      </div>
    </section>
    <section className={`section ${styles.guides}`} aria-labelledby="what-guides-title">
      <div className="container">
        <div className={styles.guidesHeading}>
          <h2 id="what-guides-title">What <em>Guides</em> Al Zikra</h2>
          <p>Quranic learning, character and family connection shape every part of the Al Zikra approach.</p>
        </div>
        <div className={styles.guideGrid}>
          {guides.map(guide => <div className={styles.guide} key={guide.title}>
            <IdentityIcon kind={guide.icon} />
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
          </div>)}
        </div>
      </div>
    </section>
  </>;
}
