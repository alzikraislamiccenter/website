import { pages } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import AboutBranchesSection from "@/components/sections/AboutBranchesSection";
import ContactForm from "@/components/common/ContactForm";
import { campuses } from "@/data/campuses";
import { contact } from "@/data/contact";
import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.contact.seo);

export default function ContactPage() {
  return (
    <>
      <PageHero {...pages.contact.hero} />
      <section className="section contact-enquiry-section" id="enquiry" aria-labelledby="contact-enquiry-title">
        <div className="container contact-enquiry-layout">
          <div className="contact-enquiry-copy">
            <div><span className="eyebrow">We&apos;re here to help</span><h2 id="contact-enquiry-title">Contact Us<sup>01</sup></h2></div>
            <div className="contact-enquiry-details">
              <div><span>Head office</span><p>{campuses[0].address}</p></div>
              <div><span>Email</span><p><a href={`mailto:${company.email}`}>{company.email}</a></p></div>
            </div>
          </div>
          <ContactForm notice={contact.formNotice} />
        </div>
      </section>
      <AboutBranchesSection campuses={campuses} />
    </>
  );
}
