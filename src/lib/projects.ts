export type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  description: string;
  isCompleted: boolean
};

export const projects: Project[] = [
  {
    title: "Friends Of The Future",
    category: "Web Development",
    year: "2024",
    isCompleted: true,
    image: "/images/fotf.png",
    link: "https://fotf-frontend.vercel.app",
    description:
      "Community-driven site for a creative collective — fast, accessible, and tuned for events and storytelling.",
  },
  {
    title: "Montreal",
    isCompleted: true,

    category: "Web Development / Motion Design",
    year: "2026",
    image: "/images/montreal.png",
    link: "https://montreal-clone.vercel.app/",
    description:
      "Clone of the award-winning Montreal agency site — recreating its signature smooth scrolling, scroll-triggered reveals, typography, and micro-interactions with a focus on performance and responsiveness. Built with Next.js, Motion, and Tailwind CSS.",
  },
  {
    title: "Dwello",
    category: "Web Development / Web Design",
    year: "2026",
    image: "/images/dwello.png",
    link: "https://dwello.zero1studio.xyz",
    isCompleted: true,
    description:
      "High-fidelity mockup — UI design and front-end development for a property platform concept, focused on layout, visuals, and brand presentation.",
  },
  {
    title: "Stocklit",
    category: "Web Development / Web Design",
    year: "202+6",
    isCompleted: false,
    image: "/images/stocklit.png",
    link: "https://stocklit.zero1studio.xyz",
    description:
      "Community-driven site for a creative collective — fast, accessible, and tuned for events and storytelling.",
  },

  {
    title: "Homie",
    isCompleted: true,

    category: "Web Development / Web Design",
    year: "2026",
    image: "/images/homie.png",
    link: "https://homie.zero1studio.xyz",
    description:
      "High-fidelity mockup — UI design and front-end development for a property platform concept, focused on layout, visuals, and brand presentation.",
  },
  {
    title: "Muse Ink",
    isCompleted: true,

    category: "Web Development",
    year: "2025",
    image: "/images/museink.png",
    link: "https://museink.zero1studio.xyz/",
    description:
      "Editorial landing experience for a creative studio — motion, typography, and conversion-focused layout.",
  },
  {
    title: "Promptboard",
    isCompleted: true,

    category: "Saas / Web Development / Web Design",
    year: "2026",
    image: "/images/promptboard.png",
    link: "https://promptboard.zero1studio.xyz",
    description:
      "Platform to discover and share cool, trendy AI prompts — with subscriptions to generate images directly on the site.",
  },
  {
    title: "Enipp",
    isCompleted: true,

    category: "Web Development / WebXR",
    year: "2024",
    image: "/images/enipp.png",
    link: "https://enipp.com",
    description:
      "Immersive WebXR experience blending 3D interaction with a polished marketing site for a next-gen product launch.",
  }
];
