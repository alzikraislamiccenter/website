import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { site } from "@/config/site";
import { policyLinks } from "@/data/navigation";

const socialMarks: Record<string, string> = { facebook: "f", instagram: "◎", youtube: "▶", linkedin: "in", tiktok: "♪" };

export default function Footer() {
  return <footer className="site-footer" data-header-surface="dark"><Container>
    <div className="footer-grid">
      <div className="footer-brand"><Logo light /><p>Explore learning, community, and connection at Al Zikra Islamic Center.</p><div className="footer-social" aria-label="Social media">{site.socialLinks.map(link => link.href ? <a key={link.id} href={link.href} aria-label={link.label} title={link.label} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">{socialMarks[link.id]}</span></a> : <span key={link.id} aria-label={`${link.label} link pending`}>{socialMarks[link.id]}</span>)}</div></div>
      {site.navigation.filter(item => item.children).map(item => <div key={item.label}><h2>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</h2><ul className="footer-links">{item.children?.map(child => <li key={child.href}><Link href={child.href}>{child.label}</Link></li>)}</ul></div>)}
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Al Zikra Islamic Center</span><nav aria-label="Footer legal and contact"><Link href="/contact">Contact Us</Link>{policyLinks.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
  </Container></footer>;
}
