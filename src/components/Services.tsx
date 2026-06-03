"use client";

import React, { useState, useRef, } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import { MoveRight, Asterisk, Circle, Hexagon, Triangle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "High-performance websites designed to convert. We blend immersive aesthetics with technical excellence using React & Next.js.",
    bg: "bg-[#0a0a0a]",
    icon: Circle
  },
  {
    id: "02",
    title: "Chatbot Creation",
    desc: "Intelligent AI agents that automate support and sales. 24/7 customer engagement with custom LLM integration.",
    bg: "bg-[#0d0d0d]",
    icon: Asterisk
  },
  {
    id: "03",
    title: "MVP Build",
    desc: "Rapid prototyping and development for startups. Go from concept to market-ready product in weeks, not months.",
    bg: "bg-[#050505]",
    icon: Hexagon
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeExpanded, setActiveExpanded] = useState(-1);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const serviceRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["start end", "end start"],
  })

  const activeExpandedNumber = useTransform(scrollYProgress, [0, 1 / 4, 2 / 6, 3 / 6], [-1, 0, 1, 2])

  useMotionValueEvent(activeExpandedNumber, "change", (value) => {
    const index = Math.floor(value)
    setActiveExpanded(index)

  })

  return (
    <section
      id="services"
      ref={serviceRef}
      className="relative min-h-screen py-20 md:py-32 overflow-hidden transition-colors duration-700 ease-in-out"
    >
      {/* Immersive Background Layer */}
      <div className={`absolute inset-0 transition-colors duration-1000 ease-in-out ${services[activeService].bg}`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        {/* Abstract Shape Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[80vh] h-[80vh] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">

        {/* Left Column: Title */}
        <div className="lg:col-span-4">
          <h2 className="font-display text-xs md:text-sm font-bold uppercase tracking-widest text-white/40 mb-6 md:mb-8 border-l-2 border-accent pl-4">
            Our Expertise
          </h2>
          <div className="text-white/80 text-lg leading-relaxed max-w-sm hidden lg:block">
            Select a discipline to explore how we can elevate your digital presence.
          </div>
        </div>

        {/* Right Column: Interactive List */}
        <div className="lg:col-span-8 flex flex-col">
          {services.map((service, index) => {
            const isActive = index === activeExpanded;
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                ref={(el) => { serviceRefs.current[index] = el }}
                role="button"
                tabIndex={0}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveService(index);
                  }
                }}
                onClick={() => setActiveService(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveService(index);
                  }
                }}
                className={`group service-${index} relative border-b border-white/10 transition-[padding,opacity] duration-500 cursor-pointer hover:opacity-100 focus-ring rounded-sm ${isActive ? 'py-8 md:py-12 opacity-100' : 'py-6 md:py-8 opacity-40'}`}
                data-hover="true"
                aria-expanded={isActive}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className={`font-mono text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white/30'} group-hover:text-accent`}>
                      0{index + 1}
                    </span>
                    <h3 className={`font-display text-2xl sm:text-4xl md:text-7xl font-bold uppercase transition-all duration-500 ${isActive ? 'text-white translate-x-2 md:translate-x-4' : 'text-white/50 text-outline'} group-hover:text-white!`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Animated Icon for Active State */}
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: isActive ? 90 : 0,
                      scale: isActive ? 1 : 0.5,
                      opacity: isActive ? 1 : 0
                    }}
                    className={`hidden md:block ${isActive ? 'text-accent' : 'text-white'}`}
                  >
                    <Icon size={48} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={`overflow-hidden service-${index}-expanded`}
                    >
                      <div className="pt-6 pl-0 md:pl-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <p className="text-white/70 text-base md:text-lg max-w-lg leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="flex items-center gap-2 text-accent uppercase text-xs font-bold tracking-widest group-hover:gap-4 transition-all">
                          <span>Explore</span>
                          <MoveRight size={16} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}