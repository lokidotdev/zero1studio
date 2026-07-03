import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppLoader from "@/components/app-loader";
import { DeferredUI } from "@/components/deferred-ui";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus_jakarta_sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Zero1 Studio | Website Development, MVP, 3D Experiences & E-commerce",
    template: "%s | Zero1 Studio",
  },
  description: siteConfig.description,
  keywords: [
    "zero1 studio",
    "website development",
    "mvp development",
    "3d web experience",
    "ecommerce development",
    "next.js development",
    "web development agency",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Zero1 Studio | Website Development, MVP, 3D Experiences & E-commerce",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Zero1 Studio — web development, MVP, 3D & e-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero1 Studio | Website, MVP, 3D & E-commerce Development",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    // creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteId = process.env.SILENT_PULSE_WEBSITE_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plus_jakarta_sans.variable} ${syne.variable} font-sans antialiased`}
      >
        <AppLoader />
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="relative min-h-screen bg-background">
          <DeferredUI />
          <div
            className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
            aria-hidden="true"
          />
          <Navbar />
          {children}
          <div className="fixed bottom-0 left-0 right-0 z-0 h-screen">
            <Footer />
          </div>
        </div>
        {websiteId ? (
          <Script
            src="https://silentpulse.vercel.app/script.js"
            data-website-id={websiteId}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
