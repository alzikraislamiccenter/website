import type { ContentItem } from "@/types/common";
import styles from "./ProgrammeSchedulesSection.module.css";

function ScheduleIcon({ kind }: { kind: string }) {
  const drawing = kind === "hifz"
    ? <><path d="M24 12c-6-3-12-3-18-1v28c6-2 12-2 18 1 6-3 12-3 18-1V11c-6-2-12-2-18 1Z"/><path d="M24 12v28M12 19h6m-6 6h6m12-6h6m-6 6h6"/></>
    : kind === "nazira"
      ? <><circle cx="24" cy="24" r="16"/><path d="M24 14v10l7 5"/></>
      : <><path d="m5 18 19-9 19 9-19 9L5 18Z"/><path d="M12 22v10c7 6 17 6 24 0V22M42 19v14"/></>;
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawing}</svg>;
}

export default function ProgrammeSchedulesSection({ items, description }: { items: ContentItem[]; description?: string }) {
  return <section className={`section ${styles.section}`} aria-labelledby="programme-schedules-title">
    <div className="container">
      <div className={styles.heading}>
        <span className="eyebrow">Class times</span>
        <h2 id="programme-schedules-title">Programme <em>schedules</em></h2>
        {description && <p>{description}</p>}
      </div>
      <div className={styles.timeline}>
        <svg className={styles.curve} viewBox="0 0 1200 250" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className={styles.curveSoft} d="M0 166 C115 195 157 220 266 183 C404 137 438 17 576 50 C715 84 727 195 856 155 C1004 109 992 48 1200 83" />
          <path className={styles.curveMain} d="M0 166 C115 195 157 220 266 183 C404 137 438 17 576 50 C715 84 727 195 856 155 C1004 109 992 48 1200 83" />
        </svg>
        <ol className={styles.steps}>
          {items.map((item, index) => <li className={styles.step} key={item.id}>
            <span className={styles.marker}><ScheduleIcon kind={item.id} /></span>
            <div className={styles.copy}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>)}
        </ol>
      </div>
    </div>
  </section>;
}
