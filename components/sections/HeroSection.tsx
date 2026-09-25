import PageHero, { type PageHeroProps } from "@/components/common/PageHero";

export default function HeroSection(props: PageHeroProps) {
  return <PageHero variant="home" {...props} />;
}
