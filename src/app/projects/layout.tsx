import { JsonLd } from "@/components/json-ld";
import { projects } from "@/lib/projects";
import { createPageMetadata, projectsItemListJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected work from Zero1 Studio — websites, MVPs, WebXR, SaaS, and e-commerce builds.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const listItems = projects.map((p) => ({
    title: p.title,
    url: p.link,
    description: p.description,
    image: p.image,
  }));

  return (
    <>
      <JsonLd data={projectsItemListJsonLd(listItems)} />
      {children}
    </>
  );
}
