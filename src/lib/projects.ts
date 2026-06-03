export type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Dwello",
    category: "Web Development / Web Design",
    year: "2026",
    image: "/images/dwello.png",
    link: "https://dwello.zero1studio.xyz",
    description:
      "High-fidelity mockup — UI design and front-end development for a property platform concept, focused on layout, visuals, and brand presentation.",
  },
  {
    title: "Friends Of The Future",
    category: "Web Development",
    year: "2024",
    image: "/images/fotf.png",
    link: "https://fotf-frontend.vercel.app",
    description:
      "Community-driven site for a creative collective — fast, accessible, and tuned for events and storytelling.",
  },
  {
    title: "Muse Ink",
    category: "Web Development",
    year: "2025",
    image: "/images/museink.png",
    link: "https://muse-landing-page-next.vercel.app/",
    description:
      "Editorial landing experience for a creative studio — motion, typography, and conversion-focused layout.",
  },
  {
    title: "Promptboard",
    category: "Saas / Web Development / Web Design",
    year: "2026",
    image: "/images/promptboard.png",
    link: "https://promptboard.zero1studio.xyz",
    description:
      "Platform to discover and share cool, trendy AI prompts — with subscriptions to generate images directly on the site.",
  },
  {
    title: "Enipp",
    category: "Web Development / WebXR",
    year: "2024",
    image: "/images/enipp.png",
    link: "https://enipp.com",
    description:
      "Immersive WebXR experience blending 3D interaction with a polished marketing site for a next-gen product launch.",
  },
];
