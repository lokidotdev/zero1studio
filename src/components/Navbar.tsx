"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="fixed navbar top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 grid grid-cols-3 items-center text-white backdrop-blur-md"
        aria-label="Main"
      >
          <div className="justify-self-start">
            <Link
              href="/"
              className="font-display font-bold text-2xl tracking-tighter hover:scale-105 transition-transform focus-ring rounded-sm"
              data-hover="true"
              translate="no"
            >
              Z1
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center gap-12">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors relative group whitespace-nowrap focus-ring rounded-sm"
                  data-hover="true"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-[width] duration-300 group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="justify-self-end flex items-center">
            <Magnetic>
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 group md:hidden focus-ring rounded-sm touch-manipulation"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
                data-hover="true"
              >
                <span className="uppercase text-xs tracking-widest group-hover:text-accent">
                  Menu
                </span>
                <Menu size={24} className="group-hover:text-accent" aria-hidden="true" />
              </button>
            </Magnetic>

            <div className="hidden md:flex items-center">
              <Magnetic>
                <Link
                  href="https://calendly.com/lokeshyadv8177/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors whitespace-nowrap focus-ring rounded-sm"
                  data-hover="true"
                >
                  Book a Call
                </Link>
              </Magnetic>
            </div>
          </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center px-6 overscroll-contain"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-white hover:text-accent transition-colors focus-ring rounded-full touch-manipulation"
              aria-label="Close menu"
              data-hover="true"
            >
              <X size={32} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center gap-8 w-full max-w-md">
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white transition-colors duration-500 text-center focus-ring rounded-sm"
                      data-hover="true"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
