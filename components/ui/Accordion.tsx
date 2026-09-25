import type { FAQ } from "@/types/faq";

export default function Accordion({ items }: { items: FAQ[] }) {
  return <div className="accordion">{items.map(item => <details key={item.id}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>;
}
