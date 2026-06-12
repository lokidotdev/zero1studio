import type { Metadata } from "next";
import { siteConfig } from "./site";

const defaultTitle =
  "Zero1 Studio | Website Development, MVP, 3D Experiences & E-commerce";

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const pageTitle = title ?? defaultTitle;
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const imageUrl = new URL(ogImage, siteConfig.url).toString();

  return {
    title: title ? { absolute: `${title} | ${siteConfig.name}` } : defaultTitle,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — web development agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
      // creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    logo: new URL("/favicon.ico", siteConfig.url).toString(),
    sameAs: [] as string[],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function projectsItemListJsonLd(
  items: { title: string; url: string; description: string; image: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zero1 Studio — Selected Projects",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        url: item.url,
        description: item.description,
        image: new URL(item.image, siteConfig.url).toString(),
      },
    })),
  };
}
