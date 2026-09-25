"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

export interface ModalProps { open: boolean; onClose: () => void; title: string; children: ReactNode }
export default function Modal({ open, onClose, title, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!dialog.open) dialog.showModal();
    return () => { dialog.close(); trigger?.focus(); };
  }, [open]);
  // Native dialog supplies modal semantics, focus containment and Escape handling.
  return <dialog ref={ref} aria-labelledby={id} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="modal-body"><div className="modal-heading"><h2 id={id}>{title}</h2><button type="button" onClick={onClose} aria-label="Close dialog">Close</button></div>{children}</div>
  </dialog>;
}
