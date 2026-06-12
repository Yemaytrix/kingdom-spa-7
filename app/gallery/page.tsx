"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.7, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const placeholders = Array.from({ length: 9 });

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-alabaster-100 relative overflow-hidden">
      {/* Marble swirl overlay */}
      <div className="marble-swirl-layer" aria-hidden="true" />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-alabaster-100/90 backdrop-blur-md border-b border-gold-200/30">
        <Link
          href="/"
          className="font-cormorant text-xl font-medium text-gold-500 tracking-wide"
        >
          KS<span className="text-base">7</span>
        </Link>
        <Link
          href="/"
          className="font-jost text-xs tracking-[0.25em] uppercase text-ink-400 hover:text-gold-500 transition-colors flex items-center gap-2"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <line x1="14" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
            <line x1="5" y1="1" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
            <line x1="5" y1="9" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 pb-12 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto"
        >
          {/* Logo — full size, not clipped */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <img
              src="/logo.hero.png"
              alt="Kingdom Spa 7"
              width={220}
              height={220}
              className="object-contain w-[180px] sm:w-[220px]"
            />
          </motion.div>

          {/* Label */}
          <motion.p
            variants={item}
            className="font-jost text-[10px] tracking-[0.45em] uppercase text-gold-500/80 mb-4"
          >
            Photo Gallery
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-light text-ink-700 leading-tight mb-6"
          >
            Something
            <br />
            <em className="text-gold-500">beautiful</em> is coming.
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gold-300/50" />
            <span className="text-gold-400/60 text-sm">✦</span>
            <div className="h-px w-16 bg-gold-300/50" />
          </motion.div>

          {/* Body — updated copy, no email form */}
          <motion.p
            variants={item}
            className="font-jost text-sm font-light text-ink-400 leading-loose max-w-md mx-auto mb-12"
          >
            Our gallery is being thoughtfully curated to showcase the transformations,
            and the calm quiet beauty that lives inside Kingdom Spa 7. Come back soon.
          </motion.p>
        </motion.div>

        {/* Placeholder gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.0 }}
          className="w-full max-w-5xl mx-auto mt-16 px-4"
        >
          <p className="text-center font-jost text-[9px] tracking-[0.4em] uppercase text-gold-400/60 mb-8">
            Gallery Preview
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {placeholders.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + i * 0.08, duration: 0.6 }}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 || i === 4 ? "aspect-[4/5]" : "aspect-square"
                }`}
                style={{
                  background: `linear-gradient(${135 + i * 15}deg,
                    rgba(${212 + i * 3},${175 + i * 2},${55 + i},0.15) 0%,
                    rgba(214,232,240,0.25) 50%,
                    rgba(250,248,245,0.4) 100%)`,
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cormorant text-gold-300/40 text-3xl">✦</span>
                </div>
                <div className="absolute inset-0 bg-alabaster-100/0 hover:bg-alabaster-100/60 transition-all duration-500 flex items-center justify-center opacity-0 hover:opacity-100">
                  <p className="font-jost text-[9px] tracking-[0.3em] uppercase text-gold-500">
                    Coming Soon
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-jost text-xs tracking-[0.25em] uppercase text-gold-500 hover:text-gold-600 transition-colors"
          >
            <span className="w-4 h-px bg-gold-400 block" />
            Return to the Sanctuary
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
