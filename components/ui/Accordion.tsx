"use client";

import { useId, useState } from "react";
import type { FAQ } from "@/types/faq";

export default function Accordion({ items, defaultOpenFirst = false }: { items: FAQ[]; defaultOpenFirst?: boolean }) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenFirst ? items[0]?.id ?? null : null);
  const id = useId();
  return <div className="accordion">{items.map(item => {
    const open = openId === item.id;
    const questionId = `${id}-${item.id}-question`;
    const answerId = `${id}-${item.id}-answer`;
    return <div className="accordion-item" data-open={open} key={item.id}>
      <h3><button id={questionId} className="accordion-question" type="button" aria-expanded={open} aria-controls={answerId} onClick={() => setOpenId(open ? null : item.id)}><span>{item.question}</span><span className="accordion-icon" aria-hidden="true"><svg viewBox="0 0 16 16" width="16" height="16" fill="none"><path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button></h3>
      <div id={answerId} className="accordion-answer" role="region" aria-labelledby={questionId} aria-hidden={!open}><div className="accordion-answer-inner"><p>{item.answer}</p></div></div>
    </div>;
  })}</div>;
}
