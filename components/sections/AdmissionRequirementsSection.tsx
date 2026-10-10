import type { ContentItem } from "@/types/common";
import styles from "./AdmissionRequirementsSection.module.css";

function RequirementIcon({ kind }: { kind: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  let drawing;
  switch (kind) {
    case "hifz":
      drawing = <><path d="M24 12c-6-3-12-3-18-1v28c6-2 12-2 18 1 6-3 12-3 18-1V11c-6-2-12-2-18 1Z"/><path d="M24 12v28M11 18h7m-7 7h7m12-7h7m-7 7h7"/></>;
      break;
    case "nazira":
      drawing = <><path d="M24 9c-8 0-14 6-14 14s6 14 14 14 14-6 14-14S32 9 24 9Z"/><path d="M18 23l4 4 8-9M7 39l4-4m30 4-4-4"/></>;
      break;
    case "islamic-studies":
      drawing = <><path d="m5 18 19-9 19 9-19 9L5 18Z"/><path d="M12 22v10c7 6 17 6 24 0V22M42 19v14"/><circle cx="42" cy="35" r="2"/></>;
      break;
    case "huffaz":
      drawing = <><rect x="7" y="9" width="34" height="30" rx="3"/><path d="M14 16h12M14 23h19M14 30h12m8 0h5"/><path d="m31 33 3 3 7-8"/></>;
      break;
    default:
      drawing = <><rect x="9" y="11" width="30" height="31" rx="3"/><path d="M17 8h14v6H17zM16 23h10m-10 8h10m4-8 2 2 4-5m-6 12 2 2 4-5"/></>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" {...common}>{drawing}</svg>;
}

export default function AdmissionRequirementsSection({ items, description }: { items: ContentItem[]; description?: string }) {
  return <section className={`section ${styles.section}`} aria-labelledby="admission-requirements-title">
    <div className="container">
      <div className={styles.heading}>
        <h2 id="admission-requirements-title">Admission <em>requirements</em></h2>
        {description && <p>{description}</p>}
      </div>
      <div className={styles.grid}>
        {items.map(item => <div className={styles.item} key={item.id}>
          <RequirementIcon kind={item.id} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
