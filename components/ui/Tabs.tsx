"use client";

import { useId, useRef, useState, type ReactNode, type KeyboardEvent } from "react";

export interface TabItem { id: string; label: string; content: ReactNode }
export interface TabsProps { items: TabItem[]; label: string; defaultTab?: string }
export default function Tabs({ items, label, defaultTab }: TabsProps) {
  const [selected, setSelected] = useState(defaultTab ?? items[0]?.id);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = items.find(item => item.id === selected)?.id ?? items[0]?.id;
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    setSelected(items[next].id);
    refs.current[next]?.focus();
  }
  if (!items.length) return null;
  return <div className="tabs">
    <div role="tablist" aria-label={label} className="tab-list">{items.map((item, index) => <button
      key={item.id} ref={element => { refs.current[index] = element; }} type="button" role="tab"
      id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={active === item.id}
      tabIndex={active === item.id ? 0 : -1} onClick={() => setSelected(item.id)} onKeyDown={event => onKeyDown(event, index)}
    >{item.label}</button>)}</div>
    {items.map((item, index) => <div key={item.id} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={active !== item.id} tabIndex={0}>{item.content}</div>)}
  </div>;
}
