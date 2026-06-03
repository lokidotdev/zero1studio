"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import ProjectImage from "@/components/project-image";
import { projects } from "@/lib/projects";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const carouselProjects = [...projects, ...projects, ...projects];

export default function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 bg-background overflow-hidden relative"
    >
      <div className="px-6 max-w-[90rem] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2
          id="projects-heading"
          className="font-display text-5xl md:text-8xl font-bold uppercase text-white leading-[0.8] text-balance"
        >
          Selected <br />
          <span className="text-outline-accent">Works</span>
        </h2>
        <div className="flex flex-col items-start gap-4 pb-2 min-w-0">
          <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest">
            {prefersReducedMotion
              ? "Browse selected work below."
              : "Drag to explore or hover to pause."}
          </p>
          <Link
            href="/projects"
            className="text-sm uppercase tracking-widest font-bold text-white hover:text-accent transition-colors inline-flex items-center gap-2 focus-ring rounded-sm"
            data-hover="true"
          >
            View All Projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        {prefersReducedMotion ? (
          <ul className="flex gap-8 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scroll-px-6">
            {projects.map((project) => (
              <li key={project.title} className="snap-start shrink-0 w-[80vw] md:w-[50vw] list-none">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="flex gap-8 w-max px-6 list-none"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            whileHover={{ animationPlayState: "paused" }}
            style={{ cursor: "grab" }}
            whileTap={{ cursor: "grabbing" }}
          >
            {carouselProjects.map((project, i) => (
              <li key={`${project.title}-${i}`} className="shrink-0 w-[80vw] md:w-[50vw]">
                <ProjectCard project={project} />
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-ring rounded-2xl"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <ProjectImage
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            className="object-cover opacity-70 group-hover:opacity-90 transition-all duration-700"
          />
        </div>
      </div>

      <div className="mt-4 md:mt-6 flex flex-col gap-3 min-w-0">
        <div className="flex flex-wrap items-center gap-3 md:justify-between md:items-start md:gap-4">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-widest text-white tabular-nums">
            {project.year}
          </span>
          <span className="text-accent text-xs font-mono uppercase tracking-widest truncate md:hidden">
            {project.category}
          </span>
          <div className="hidden md:block">
            <Magnetic>
              <span
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-accent transition-colors duration-300"
                aria-hidden="true"
              >
                <ArrowUpRight size={20} />
              </span>
            </Magnetic>
          </div>
        </div>

        <div className="hidden md:block min-w-0">
          <span className="text-accent text-xs font-mono mb-2 block truncate">
            {project.category}
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white uppercase leading-none text-pretty">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.a>
  );
}
