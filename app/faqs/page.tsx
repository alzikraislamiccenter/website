import PageHero from "@/components/common/PageHero";
import FAQDirectory from "@/components/sections/FAQDirectory";
import { pages } from "@/data/pages";
import { faqGroups } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.faqs.seo);

export default function FAQsPage() {
  return <>
    <PageHero {...pages.faqs.hero} />
    <FAQDirectory groups={faqGroups} />
  </>;
}
