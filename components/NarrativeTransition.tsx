"use client";

import { motion } from "framer-motion";

export default function NarrativeTransition() {
  return (
    <section className="relative bg-alabaster-100 py-40 px-6 overflow-hidden">
      {/* Soft background texture — very subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Sapphire blue accent — top-right whisper from the abstract painting */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(27,79,168,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Top gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent mb-16 origin-center"
        />

        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="font-jost text-[10px] tracking-[0.4em] uppercase text-gold-500/60 mb-3"
        >
          Powered by the Holy Spirit
        </motion.p>

        {/* Kingdom Spa 7 — title size, Cormorant to match logo font */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.08, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-gold-500 tracking-wide mb-10"
        >
          <em>K</em>ingdom <em>S</em>pa 7
        </motion.h2>

        {/* Main narrative */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-60px" }}
          className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-ink-700 leading-[1.2] mb-8"
        >
          A sanctuary designed to quiet the mind,
          <br />
          <em className="text-gold-600">restore the crown,</em>
          <br />
          and awaken the spirit.
        </motion.h2>

        {/* Faith tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="font-jost text-sm md:text-base font-light tracking-[0.12em] text-ink-400 leading-loose max-w-xl mx-auto mb-16"
        >
          Powered by the Holy Spirit, every treatment is an offering of peace.
          We hold sacred space for your restoration: body, hair, and spirit.
        </motion.p>

        {/* Bottom gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent origin-center"
        />

        {/* Small decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <span className="text-gold-400/50 text-lg">✦</span>
        </motion.div>
      </div>
    </section>
  );
}
