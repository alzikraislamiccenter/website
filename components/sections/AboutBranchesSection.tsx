import type { Campus } from "@/types/campus";
import styles from "./AboutBranchesSection.module.css";

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}

export default function AboutBranchesSection({ campuses }: { campuses: Campus[] }) {
  return <section className={`section ${styles.section}`} aria-labelledby="about-branches-title">
    <div className="container">
      <div className={styles.heading}>
        <span className="eyebrow">Our locations</span>
        <h2 id="about-branches-title">Our Four <em>Branches</em></h2>
        <p>Al Zikra Islamic Center has campuses in Rawalpindi and Islamabad. Find the location that suits your family.</p>
      </div>
      <div className={styles.grid}>
        {campuses.map((campus, index) => <article className={styles.card} key={campus.id}>
          <div className={styles.cardHead}>
            <span className={styles.tag}>Branch {String(index + 1).padStart(2, "0")}</span>
            <h3>{campus.title}</h3>
            <span className={styles.city}>{campus.address?.includes("Islamabad") ? "Islamabad" : "Rawalpindi"}, Pakistan</span>
          </div>
          <div className={styles.cardBody}>
            <span className={styles.icon}><LocationIcon /></span>
            <div><span className={styles.label}>Location</span><p>{campus.address}</p></div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
