import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { site } from "@/config/site";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Admission", href: "/academics/admission" },
  { label: "Class Schedule", href: "/academics/class-schedule" },
  { label: "Blogs", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms of Use", href: "/policies/terms-of-use" },
];

const programLinks = [
  { label: "Hifz-ul-Quran", href: "/programs/hifz-ul-quran" },
  { label: "Nazra Quran", href: "/programs/nazra-quran" },
  { label: "Tajweed", href: "/programs/tajweed" },
  { label: "Islamic Studies", href: "/programs/islamic-studies" },
  { label: "Full-Time Program", href: "/programs/full-time-program" },
  { label: "Part-Time Program", href: "/programs/part-time-program" },
];

export default function Footer() {
  return <footer className="site-footer" data-header-surface="dark"><Container>
    <div className="footer-grid">
      <div className="footer-brand"><Logo light /><p className="footer-headline">Begin your Quran journey with Al Zikra.</p><a className="footer-email" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a></div>
      <nav className="footer-column" aria-label="Footer navigation"><h2>Navigation</h2><ul className="footer-links">{navigationLinks.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <nav className="footer-column" aria-label="Footer programs"><h2>Programs</h2><ul className="footer-links">{programLinks.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <nav className="footer-column" aria-label="Footer quick links"><h2>Quick Links</h2><ul className="footer-links">{quickLinks.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <div className="footer-column"><h2>Social</h2><ul className="footer-links">{site.socialLinks.filter(link => link.href).map(link => <li key={link.id}><a href={link.href!} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Al Zikra Islamic Center. All Rights Reserved</span><span>Web by <a href="https://dynamgalaxy.com" target="_blank" rel="noopener noreferrer">Dynam Galaxy</a></span></div>
  </Container></footer>;
}
