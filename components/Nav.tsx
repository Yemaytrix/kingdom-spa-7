"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection, useScrollY } from "@/hooks/useScrollDirection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Peace", href: "#rituals" },
  { label: "The Journey", href: "#journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "KS7 Guidelines", href: "#guidelines" },
  { label: "Contact", href: "#footer" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDir = useScrollDirection();
  const scrollY = useScrollY();

  const isScrolled = scrollY > 60;
  const isHidden = scrollDir === "down" && scrollY > 120;

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-alabaster-100/95 backdrop-blur-md border-b border-gold-200/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span
              className={`font-cormorant text-xl font-medium transition-colors duration-300 ${
                isScrolled ? "text-gold-500" : "text-gold-400"
              }`}
              style={!isScrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.5)" } : {}}
            >
              KS<span className="text-base">7</span>
            </span>
          </a>

          {/* Center link */}
          <a
            href="#rituals"
            className={`hidden md:flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-jost font-light transition-colors duration-300 ${
              isScrolled
                ? "text-ink-400 hover:text-gold-500"
                : "text-white hover:text-gold-300"
            }`}
            style={!isScrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.55)" } : {}}
          >
            Peace
            <span className="text-gold-400 font-light">+</span>
          </a>

          {/* Right: Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-jost font-light transition-colors duration-300 ${
              isScrolled
                ? "text-ink-400 hover:text-gold-500"
                : "text-white hover:text-gold-300"
            }`}
            style={!isScrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.55)" } : {}}
          >
            Menu
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <line
                x1="0"
                y1="1"
                x2="18"
                y2="1"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="4"
                y1="6"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="8"
                y1="11"
                x2="18"
                y2="11"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-alabaster-100/98 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-8 py-5">
              <span className="font-cormorant text-xl text-gold-500">
                KS<span className="text-base">7</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-ink-400 hover:text-gold-500 transition-colors text-xs tracking-[0.2em] uppercase font-jost flex items-center gap-2"
              >
                Close
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="15"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="15"
                    y1="1"
                    x2="1"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                  className="font-cormorant text-4xl md:text-6xl font-light text-ink-700 hover:text-gold-500 transition-colors py-3 border-b border-gold-200/30 block"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
              <div className="font-jost text-xs tracking-[0.2em] text-ink-400 uppercase space-y-1">
                <p>155 Belmont Ave Suite 116</p>
                <p>Belleville, NJ 07109</p>
              </div>
              <div className="font-jost text-xs tracking-[0.2em] text-ink-400 uppercase space-y-1 text-right">
                <p>(862) 596-6565</p>
                <p>info@kingdomspa7.com</p>
              </div>
            </motion.div>

            {/* Psalm */}
            <div className="pb-8 text-center">
              <p className="font-cormorant italic text-gold-500/70 text-sm">
                Psalm 122:7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
