import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { site } from "@/config/site";

export default function Footer() {
  return <footer className="site-footer"><Container>
    <Logo />
    <nav aria-label="Footer navigation"><ul className="nav-list">{site.navigation.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
    <p>Development foundation · Content pending approval</p>
  </Container></footer>;
}
