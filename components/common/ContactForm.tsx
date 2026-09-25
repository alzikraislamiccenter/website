import Button from "./Button";

export default function ContactForm({ notice }: { notice: string }) {
  return <form aria-label="Contact form preview" aria-describedby="contact-form-notice">
    <p id="contact-form-notice" role="note">{notice}</p>
    <fieldset disabled><legend>Enquiry form preview</legend>
      <label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required /></label>
      <label htmlFor="contact-email">Email<input id="contact-email" type="email" name="email" autoComplete="email" required /></label>
      <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required /></label>
      <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows={5} required /></label>
      <Button type="submit" disabled>Sending not yet available</Button>
    </fieldset>
  </form>;
}
