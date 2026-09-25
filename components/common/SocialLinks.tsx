import type { SocialLink } from "@/types/common";

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  const verified = links.filter((link): link is SocialLink & { href: string } => Boolean(link.href));
  return verified.length ? <ul className="nav-list">{verified.map(link => <li key={link.id}><a href={link.href}>{link.label}</a></li>)}</ul> : <p>Verified social media links will be added here.</p>;
}
