"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";

export default function ContactForm({ notice, enabled = false }: { notice: string; enabled?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");
    setMessage("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent. Please try again.");
      form.reset();
      setState("success");
      setMessage("Thank you. Your enquiry has been sent.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent. Please try again.");
    }
  }

  return <form className="contact-form" aria-label="Contact form" onSubmit={submit}>
    <p className="form-notice">{notice}</p>
    <div className="form-row">
      <label htmlFor="contact-name">Name <span aria-hidden="true">*</span><input id="contact-name" name="name" autoComplete="name" maxLength={100} required /></label>
      <label htmlFor="contact-email">Email <span aria-hidden="true">*</span><input id="contact-email" type="email" name="email" autoComplete="email" maxLength={254} required /></label>
    </div>
    <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span><input id="contact-subject" name="subject" maxLength={160} required /></label>
    <label htmlFor="contact-message">Message <span aria-hidden="true">*</span><textarea id="contact-message" name="message" rows={6} minLength={10} maxLength={5000} required /></label>
    <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Website<input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-actions"><Button type="submit" disabled={!enabled || state === "sending"}>{state === "sending" ? "Sending…" : "Send enquiry"}</Button><p aria-live="polite" className={`form-status ${state}`}>{message}</p></div>
  </form>;
}
