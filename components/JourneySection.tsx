"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "You Arrive",
    body: "You arrive carrying the weight of the week. Your schedule, your responsibilities, your constant giving. You bring it all through the door.",
    accent: "bg-sapphire-50/60 border-sapphire-200/40",
    textAccent: "text-sapphire-400",
  },
  {
    number: "02",
    title: "We Receive You",
    body: "We meet you with steam, silence, and intention. Warm hands. Quiet music. A steamed eye mask that asks nothing of you. Here, you do not need to perform.",
    accent: "bg-gold-100/40 border-gold-200/50",
    textAccent: "text-gold-600",
  },
  {
    number: "03",
    title: "You Are Renewed",
    body: "You leave restored. Crown lifted, spirit renewed. What you carry out is lighter than what you carried in. This is not just a hair appointment. It is a return to yourself.",
    accent: "bg-alabaster-200/60 border-gold-200/40",
    textAccent: "text-gold-500",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative bg-alabaster-100 py-28 md:py-40 px-6 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold-400/30 to-transparent" />

      {/* Background gold tone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-jost text-[9px] tracking-[0.45em] uppercase text-gold-500/80 mb-4"
          >
            The Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-ink-700 leading-tight"
          >
            Your journey,
            <br />
            <em className="text-gold-600">from tension to tranquility.</em>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.18,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-40px" }}
              className={`relative border rounded-2xl p-8 md:p-10 ${step.accent}`}
            >
              {/* Step number */}
              <p
                className={`font-cormorant text-5xl font-light ${step.textAccent} opacity-40 mb-6`}
              >
                {step.number}
              </p>

              {/* Title */}
              <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ink-700 mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Thin gold rule */}
              <div className="w-8 h-px bg-gold-400/50 mb-5" />

              {/* Body */}
              <p className="font-jost text-sm font-light text-ink-400 leading-loose">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom faith quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-28 max-w-lg mx-auto"
        >
          <span className="text-gold-400/50 text-xl block mb-5">✦</span>
          <p className="font-cormorant italic text-xl md:text-2xl text-ink-500 leading-relaxed">
            &ldquo;She is clothed with strength and dignity,
            <br />
            and she laughs without fear of the future.&rdquo;
          </p>
          <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-gold-500/70 mt-4">
            Proverbs 31:25
          </p>
        </motion.div>
      </div>
    </section>
  );
}
