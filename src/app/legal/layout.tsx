import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Legal",
  description:
    "Zero1 Studio terms of service, intellectual property, and legal information.",
  path: "/legal",
});

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
