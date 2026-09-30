import PageHero from "@/components/common/PageHero";

export default function NotFound() {
  return <PageHero eyebrow="404 · Page not found" title="We couldn’t find that page." description="The page may have moved, or the link may be out of date. You can return home or explore learning pathways." primaryCTA={{ label: "Return home", href: "/" }} secondaryCTA={{ label: "Explore courses", href: "/courses" }} />;
}
