import Section from "@/components/common/Section";
import type { SectionIntroProps } from "@/types/common";

export interface ContactSectionProps extends SectionIntroProps { phone: string | null; email: string | null; addresses: string[] }
export default function ContactSection({ phone, email, addresses, ...intro }: ContactSectionProps) {
  return <Section {...intro}><address className="contact-details">
    <p>Phone: {phone ? <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a> : "To be confirmed"}</p>
    <p>Email: {email ? <a href={`mailto:${email}`}>{email}</a> : "To be confirmed"}</p>
    {addresses.length ? addresses.map(address => <p key={address}>{address}</p>) : <p>Address: To be confirmed</p>}
  </address></Section>;
}
