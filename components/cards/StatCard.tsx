import type { Stat } from "@/types/common";

export default function StatCard({ stat }: { stat: Stat }) {
  return <article className="card"><p className="stat-value">{stat.value}</p><h3>{stat.label}</h3>{stat.description && <p>{stat.description}</p>}</article>;
}
