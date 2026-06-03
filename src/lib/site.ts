export const siteConfig = {
  name: "Zero1 Studio",
  shortName: "Zero1 Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zero1studio.xyz",
  description:
    "Zero1 Studio builds high-performance websites, startup MVPs, interactive 3D web experiences, and conversion-focused e-commerce platforms.",
  email: "hello@zero1studio.xyz",
  locale: "en_US",
  twitter: "@pixelflowui",
  ogImage: "/og-image.jpg",
} as const;

export const navLinks = [
  { name: "Expertise", href: "/#services" },
  { name: "Selected Work", href: "/projects" },
  { name: "Start Project", href: "/#pricing" },
] as const;
