"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "@/components/common/Container";
import { jobs, qualifications } from "@/data/jobs";

const maxFileSize = 5 * 1024 * 1024;

function ApplicationUpload({ name, title, formats, accept }: { name: string; title: string; formats: string; accept: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);

  return <div className="career-upload">
    <span className="career-upload-title">{title}</span>
    <div className={`career-dropzone${dragging ? " is-dragging" : ""}`}
      onDragOver={event => { event.preventDefault(); setDragging(true); }}
      onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false); }}
      onDrop={event => {
        event.preventDefault(); setDragging(false);
        const file = event.dataTransfer.files[0];
        if (!file || !inputRef.current) return;
        const transfer = new DataTransfer();
        transfer.items.add(file);
        inputRef.current.files = transfer.files;
        setFileName(file.name);
      }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 16V5m0 0-4 4m4-4 4 4"/><path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/></svg>
      <strong>{fileName || "Choose a file or drag and drop here"}</strong>
      <small>{formats} · Max 5 MB</small>
      <button type="button" onClick={() => inputRef.current?.click()}>{fileName ? "Change file" : "Browse files"}</button>
      <input ref={inputRef} className="career-file-input" name={name} type="file" accept={accept} aria-label={title} onChange={event => setFileName(event.target.files?.[0]?.name ?? "")} />
    </div>
  </div>;
}

export default function CareerOpenings() {
  const [activeJob, setActiveJob] = useState<(typeof jobs)[number] | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const [uploadReset, setUploadReset] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeJob) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setActiveJob(null); triggerRef.current?.focus(); }
      if (event.key !== "Tab") return;
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]') ?? []).filter(element => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); };
  }, [activeJob]);

  const close = () => { if (!sending) { setActiveJob(null); setStatus(null); triggerRef.current?.focus(); } };
  const apply = (job: (typeof jobs)[number], trigger: HTMLButtonElement) => { triggerRef.current = trigger; setStatus(null); setActiveJob(job); };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeJob || sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const cv = data.get("cv");
    const documentFile = data.get("educationDocument");
    if (!(cv instanceof File) || !(documentFile instanceof File) || !cv.size || !documentFile.size || cv.size > maxFileSize || documentFile.size > maxFileSize) {
      setStatus({ type: "error", message: "Upload both documents, each no larger than 5 MB." });
      return;
    }
    if (!data.getAll("qualifications").length) {
      setStatus({ type: "error", message: "Select at least one completed qualification." });
      return;
    }
    data.set("jobId", activeJob.id);
    setSending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/career", { method: "POST", body: data });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Application could not be sent. Please try again.");
      form.reset();
      setUploadReset(value => value + 1);
      setStatus({ type: "success", message: "Your application was sent to the careers team." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Application could not be sent. Please try again." });
    } finally { setSending(false); }
  }

  return <section className="career-openings" aria-labelledby="career-openings-title"><Container>
    <div className="career-heading"><span>CAREERS AT AL ZIKRA</span><h2 id="career-openings-title">Explore opportunities</h2><p>These example roles can be updated as openings are confirmed. Select a role to share your application.</p></div>
    <div className="career-jobs">{jobs.map(job => <article className="career-job" key={job.id}>
      <div><h3>{job.title}</h3><p>{job.description}</p><div className="career-tags"><span>{job.category}</span><span>Details on enquiry</span></div></div>
      <button type="button" className="career-apply" onClick={event => apply(job, event.currentTarget)}><span aria-hidden="true">◆</span> Apply Now</button>
    </article>)}</div>
    {activeJob && <div className="career-modal" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="career-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="career-dialog-title">
        <div className="career-dialog-head"><div className="career-dialog-mark" aria-hidden="true">✦</div><div className="career-dialog-heading"><span>CAREER APPLICATION</span><h2 id="career-dialog-title">Apply for {activeJob.title}</h2><p>Share your details with the Al Zikra team.</p></div><button type="button" ref={closeRef} className="career-close" aria-label="Close application" onClick={close} disabled={sending}>×</button></div>
        <form onSubmit={submit} encType="multipart/form-data">
          <div className="career-form-content">
          <h3 className="career-form-section-title">Personal details</h3>
          <div className="career-fields">
            <label>Full name <input name="fullName" autoComplete="name" maxLength={100} required /></label>
            <label>Father&apos;s name <input name="fatherName" maxLength={100} required /></label>
            <label>Email address <input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
            <label>Phone number <input name="phone" type="tel" autoComplete="tel" maxLength={25} required /></label>
          </div>
          <h3 className="career-form-section-title">Address &amp; identification</h3>
          <div className="career-fields">
            <label className="career-field-wide">Street address <input name="address" autoComplete="street-address" maxLength={200} required /></label>
            <label>City <input name="city" autoComplete="address-level2" maxLength={80} required /></label>
            <label>Postal code <input name="postalCode" autoComplete="postal-code" maxLength={20} required /></label>
            <label>Province / region <input name="region" autoComplete="address-level1" maxLength={80} required /></label>
            <label>CNIC number <input name="cnic" inputMode="numeric" placeholder="12345-1234567-1" pattern="[0-9]{5}-?[0-9]{7}-?[0-9]" title="Enter a 13-digit CNIC, with or without dashes" required /></label>
          </div>
          <h3 className="career-form-section-title">Education &amp; documents</h3>
          <fieldset className="career-qualifications"><legend>Completed qualifications <span>(select all that apply)</span></legend><div>{qualifications.map(value => <label key={value}><input type="checkbox" name="qualifications" value={value} />{value}</label>)}</div></fieldset>
          <div className="career-uploads"><ApplicationUpload key={`education-${uploadReset}`} name="educationDocument" title="Latest educational document" formats="PDF, JPG or PNG" accept=".pdf,.jpg,.jpeg,.png" /><ApplicationUpload key={`cv-${uploadReset}`} name="cv" title="CV" formats="PDF or DOCX" accept=".pdf,.docx" /></div>
          <label className="career-experience">Relevant experience <span>(optional)</span><textarea name="experience" rows={3} maxLength={1000} placeholder="Tell us briefly about your teaching or work experience" /></label>
          <label className="career-consent"><input type="checkbox" name="consent" value="yes" required />I agree to send these details and documents to career@alzikra.org for this application.</label>
          <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          </div>
          <div className="career-form-bottom"><p role="status" className={status?.type === "error" ? "career-error" : ""}>{status?.message}</p><div className="career-form-actions"><button type="button" className="career-cancel" onClick={close} disabled={sending}>Cancel</button><button type="submit" disabled={sending}>{sending ? "Sending…" : "Submit application"}</button></div></div>
        </form>
      </div>
    </div>}
  </Container></section>;
}
