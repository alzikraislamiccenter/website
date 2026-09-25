import { pages, sectionContent, callsToAction } from "@/data/pages";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import CampusSection from "@/components/sections/CampusSection";
import Section from "@/components/common/Section";
import ContactForm from "@/components/common/ContactForm";
import SocialLinks from "@/components/common/SocialLinks";
import FAQSection from "@/components/sections/FAQSection";
import LeadCTASection from "@/components/sections/LeadCTASection";
import { campuses } from "@/data/campuses";
import { faqs } from "@/data/faqs";
import { socialLinks } from "@/data/socialLinks";
import { contact } from "@/data/contact";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.contact.seo);

export default function ContactPage() {
  return (
    <>
      <PageHero {...pages.contact.hero} />
      <ContactSection {...sectionContent.contact} phone={site.phone} email={site.email} addresses={site.addresses} />
      <CampusSection {...sectionContent.campus} campuses={campuses} />
      <Section {...sectionContent.form}><ContactForm notice={contact.formNotice} /></Section>
      <Section {...sectionContent.hours}><dl className="hours-list">{contact.hours.map(entry => <div key={entry.id}><dt>{entry.days}</dt><dd>{entry.hours}</dd></div>)}</dl></Section>
      <Section {...sectionContent.location}>{contact.mapUrl ? <a href={contact.mapUrl}>View centre location on map</a> : <p>{contact.locationNote}</p>}</Section>
      <Section {...sectionContent.social}><SocialLinks links={socialLinks} /></Section>
      <FAQSection {...sectionContent.faq} items={faqs} />
      <LeadCTASection {...callsToAction.startLearning} />
    </>
  );
}
