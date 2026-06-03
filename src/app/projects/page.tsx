"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectImage from "@/components/project-image";
import { projects } from "@/lib/projects";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export default function ProjectsPage() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <main
      id="main-content"
      className="relative z-10 bg-background min-h-screen pt-32 pb-32 px-4 md:px-6"
    >
      <div className="max-w-[90rem] mx-auto">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-accent" aria-hidden="true" />
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.85] text-balance">
            Selected <span className="text-outline-accent">Projects</span>
          </h1>
          <p className="mt-6 text-white/60 font-light leading-relaxed max-w-2xl">
            Websites, MVPs, SaaS, and immersive experiences — built for speed,
            clarity, and conversion.
          </p>
        </motion.header>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 focus-ring"
                data-hover="true"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    priority={i === 0}
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </a>

              <div className="flex flex-col gap-5 lg:py-4 min-w-0">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-widest text-white tabular-nums">
                    {project.year}
                  </span>
                  <span className="text-accent text-xs font-mono uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h2 className="hidden md:block font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-none text-pretty">
                  {project.title}
                </h2>

                <p className="hidden md:block text-white/60 font-light leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-3 w-fit mt-2 text-sm uppercase tracking-widest font-bold text-white hover:text-accent transition-colors group/link focus-ring rounded-full"
                  data-hover="true"
                >
                  Visit Live Site
                  <span
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover/link:bg-accent transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 hover:text-accent uppercase tracking-widest transition-colors inline-flex items-center gap-2 focus-ring rounded-sm"
            data-hover="true"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
