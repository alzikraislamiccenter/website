import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: site.defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer />
  </body></html>;
}
