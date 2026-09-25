import PageHero from "@/components/common/PageHero";

export default function NotFound() {
  return <PageHero title="Page not found" description="The requested page is not available." primaryCTA={{ label: "Return Home", href: "/" }} />;
}
