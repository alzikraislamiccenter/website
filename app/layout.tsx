import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedSections from "@/components/layout/SharedSections";
import { site } from "@/config/site";
import { createOrganizationStructuredData, serializeStructuredData } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: site.defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = createOrganizationStructuredData();
  return <html lang="en" data-scroll-behavior="smooth"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header /><main id="main-content" tabIndex={-1}>{children}<SharedSections /></main><Footer />
    {organization && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(organization) }} />}
  </body></html>;
}
