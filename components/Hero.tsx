"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.85, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 2.5, delay: 3.2 } },
};

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-start pt-14 md:pt-20"
    >
      {/*
        VIDEO BACKGROUND
        Drop your video at: public/KS7Hero.mp4
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        poster="/hero-poster.jpg"
      >
        <source src="/KS7Hero.mp4" type="video/mp4" />
      </video>

      {/* Luminous morning overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(250,248,245,0.30) 0%, rgba(250,248,245,0.05) 35%, rgba(250,248,245,0.20) 70%, rgba(250,248,245,0.60) 100%)",
        }}
      />

      {/* Fallback gradient if video fails */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: -1,
          background: "linear-gradient(135deg, #F5F0E8 0%, #EDE8DF 25%, #D6E8F0 60%, #FAF8F5 100%)",
        }}
      />

      {/* Ultra-thin vertical gold divider */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none"
        style={{ zIndex: 2, background: "rgba(212,175,55,0.22)" }}
      />

      {/* Main content — positioned in upper portion of hero */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
        style={{ zIndex: 3 }}
      >
        {/* Logo — transparent PNG, renders cleanly on any background */}
        {!logoError && (
          <motion.div variants={item} className="mt-6 sm:mt-14 mb-2">
            <img
              src="/logo.hero.png"
              alt="Kingdom Spa 7"
              width={160}
              height={160}
              className="object-contain w-24 sm:w-36 md:w-40"
              style={{ mixBlendMode: "multiply" }}
              onError={() => setLogoError(true)}
            />
          </motion.div>
        )}

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.05] tracking-[-0.01em] mb-4 md:mb-5"
        >
          Peace be within
          <br />
          <em className="text-gold-400 not-italic">your walls.</em>
        </motion.h1>

        {/* Scripture */}
        <motion.p
          variants={item}
          className="font-cormorant italic text-lg md:text-xl text-white/85 leading-relaxed mb-2 max-w-xl"
        >
          &ldquo;Peace be within your walls and prosperity within your palaces.&rdquo;
        </motion.p>
        <motion.p
          variants={item}
          className="font-jost text-xs tracking-[0.25em] uppercase text-gold-400 mb-6 md:mb-10"
        >
          Psalm 122:7
        </motion.p>

        {/* Subhead */}
        <motion.p
          variants={item}
          className="font-jost text-xs md:text-sm tracking-[0.3em] uppercase text-white/75 mb-6 md:mb-10"
        >
          Exhale. Your renewal begins here.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item}>
          <a
            href="#rituals"
            className="inline-flex items-center gap-3 px-9 py-4 border border-gold-400/80 text-white font-jost text-xs tracking-[0.25em] uppercase rounded-full hover:bg-white/10 hover:border-gold-300 transition-all duration-500 group"
          >
            Begin Your Peace
            <span className="w-4 h-px bg-gold-400 group-hover:w-6 transition-all duration-300 block" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pb-8 gap-4"
        style={{ zIndex: 3 }}
      >
        <span
          className="font-jost text-[9px] tracking-[0.35em] uppercase text-white/60 [writing-mode:vertical-rl] [text-orientation:mixed]"
        >
          Scroll&nbsp;&nbsp;·&nbsp;&nbsp;Explore
        </span>
        <motion.div
          variants={lineGrow}
          initial="hidden"
          animate="visible"
          className="w-px bg-gradient-to-b from-gold-400/50 to-transparent"
          style={{ height: "48px" }}
        />
      </div>
    </section>
  );
}
