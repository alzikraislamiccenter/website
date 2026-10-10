import styles from "./AboutCommunityImpactSection.module.css";

const milestones = [
  {
    title: "Quran learning since 2009",
    description: "Structured Quranic and Islamic education has been at the heart of Al Zikra since its establishment.",
    icon: "book",
  },
  {
    title: "Family partnership",
    description: "Non-residential study keeps students close to home while parents stay involved in their progress.",
    icon: "family",
  },
  {
    title: "Character in daily life",
    description: "Adab, discipline and responsibility are taught alongside memorisation, recitation and revision.",
    icon: "heart",
  },
] as const;

function ImpactIcon({ kind }: { kind: string }) {
  const drawing = kind === "book"
    ? <><path d="M24 12c-6-3-12-3-18-1v28c6-2 12-2 18 1 6-3 12-3 18-1V11c-6-2-12-2-18 1Z"/><path d="M24 12v28m-12-21h6m12 0h6"/></>
    : kind === "family"
      ? <><circle cx="17" cy="17" r="5"/><circle cx="32" cy="17" r="5"/><path d="M7 38v-4a10 10 0 0 1 20 0v4m-2-9a10 10 0 0 1 16 8v1"/></>
      : <><path d="M24 40 8 25a9 9 0 0 1 13-13l3 3 3-3a9 9 0 0 1 13 13L24 40Z"/><path d="m17 25 5 5 9-10"/></>;
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawing}</svg>;
}

export default function AboutCommunityImpactSection() {
  return <section className={`section ${styles.section}`} aria-labelledby="community-impact-title">
    <div className="container">
      <div className={styles.heading}>
        <span className="eyebrow">Our contribution</span>
        <h2 id="community-impact-title">Community <em>Impact</em></h2>
        <p>Quranic learning, family connection and character development shape Al Zikra’s work in the community.</p>
      </div>
      <div className={styles.timeline}>
        <svg className={styles.curve} viewBox="0 0 1200 250" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className={styles.curveSoft} d="M0 166 C115 195 157 220 266 183 C404 137 438 17 576 50 C715 84 727 195 856 155 C1004 109 992 48 1200 83" />
          <path className={styles.curveMain} d="M0 166 C115 195 157 220 266 183 C404 137 438 17 576 50 C715 84 727 195 856 155 C1004 109 992 48 1200 83" />
        </svg>
        <ol className={styles.steps}>
          {milestones.map((milestone, index) => <li className={styles.step} key={milestone.title}>
            <span className={styles.marker}><ImpactIcon kind={milestone.icon} /></span>
            <div className={styles.copy}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </li>)}
        </ol>
      </div>
    </div>
  </section>;
}
