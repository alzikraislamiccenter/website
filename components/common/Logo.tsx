import Link from "next/link";
import { site } from "@/config/site";

export default function Logo() {
  return <Link className="logo" href="/" aria-label={`${site.name} home`}>{site.name}</Link>;
}
