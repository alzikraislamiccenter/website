import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { site } from "@/config/site";

export default function Header() {
  return <header className="site-header"><Container className="header-inner"><Logo /><DesktopNav items={site.navigation} /><MobileNav items={site.navigation} /></Container></header>;
}
