import styles from "./AboutTeachersSection.module.css";

const strengths = [
  { title: "Close supervision", description: "Teachers guide Quran reading, memorisation and regular revision, identifying and correcting mistakes." },
  { title: "Individual attention", description: "Students receive guidance and encouragement suited to their learning pace and progress." },
  { title: "Character & family", description: "Adab, responsibility and regular parent communication remain part of the learning experience." },
] as const;

export default function AboutTeachersSection() {
  return <section className={`section ${styles.section}`} aria-labelledby="about-teachers-title">
    <div className="container">
      <div className={styles.heading}>
        <div><span className="eyebrow">Guided learning</span><h2 id="about-teachers-title">Our Teachers</h2></div>
        <p>Experienced and highly qualified teachers provide structured guidance, careful correction and steady encouragement throughout each student’s Quranic journey.</p>
      </div>
      <div className={styles.grid}>
        {strengths.map((strength, index) => <div className={styles.item} key={strength.title}>
          <div className={styles.portrait} role="img" aria-label="Teacher portrait placeholder">
            <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false"><circle cx="60" cy="43" r="17"/><path d="M25 99c2-21 15-32 35-32s33 11 35 32"/></svg>
            <span>Portrait to be added</span>
          </div>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{strength.title}</h3>
          <p>{strength.description}</p>
        </div>)}
      </div>
      <p className={styles.note}>Individual teacher names and portraits will be added when confirmed.</p>
    </div>
  </section>;
}
