"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: (service: Service) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

/* All cards share the same warm alabaster base at 50% opacity — consistent, calm */
const cardBg = "bg-alabaster-100/50 border-gold-200/50";

const addonMeta: Record<string, { label: string; note: string; bg: string; border: string; labelColor: string; noteColor: string; iconColor: string }> = {
  "styling-addon": {
    label: "Service Add-On",
    note: "Cannot be combined with Head Spa services",
    bg: "bg-gold-100/50",
    border: "border-gold-300/60",
    labelColor: "text-gold-700",
    noteColor: "text-gold-600/80",
    iconColor: "text-gold-500",
  },
  "head-spa-addon": {
    label: "Head Spa Add-On",
    note: "Requires a Head Spa service to book",
    bg: "bg-sapphire-50/70",
    border: "border-sapphire-200/60",
    labelColor: "text-sapphire-600",
    noteColor: "text-sapphire-500/80",
    iconColor: "text-sapphire-400",
  },
};

export default function ServiceCard({ service, index, onClick }: ServiceCardProps) {
  const addon = addonMeta[service.category];

  return (
    <motion.button
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
      onClick={() => onClick(service)}
      className={`relative group w-full text-left border rounded-2xl p-8 md:p-10 ${cardBg} transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)] cursor-pointer`}
    >
      {/* Add-on notice — replaces featured badge for add-on services */}
      {addon ? (
        <div className={`mb-5 flex items-start gap-2 ${addon.bg} border ${addon.border} rounded-xl px-3 py-2.5`}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className={`mt-0.5 flex-shrink-0 ${addon.iconColor}`}>
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1"/>
            <line x1="6.5" y1="4" x2="6.5" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="6.5" cy="9" r="0.6" fill="currentColor"/>
          </svg>
          <div>
            <p className={`font-jost text-[9px] tracking-[0.3em] uppercase font-medium leading-none mb-0.5 ${addon.labelColor}`}>
              {addon.label}
            </p>
            <p className={`font-jost text-[10px] font-light leading-snug ${addon.noteColor}`}>
              {addon.note}
            </p>
          </div>
        </div>
      ) : (
        /* Featured badge — only shown on non-add-on services */
        service.featured && (
          <div className="absolute top-6 right-6">
            <span className="font-jost text-[8px] tracking-[0.35em] uppercase text-gold-600 bg-gold-100/70 border border-gold-300/50 px-2.5 py-1 rounded-full">
              Most Loved
            </span>
          </div>
        )
      )}

      {/* Category label */}
      <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold-500/70 mb-3">
        {service.category === "head-spa" ? "Head Spa" : "Styling"}
      </p>

      {/* Service name */}
      <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ink-700 leading-tight mb-1.5 group-hover:text-gold-600 transition-colors duration-300">
        {service.name}
      </h3>

      {/* Tagline */}
      <p className="font-cormorant italic text-ink-400 text-base mb-5">
        {service.tagline}
      </p>

      {/* Price / Duration */}
      <div className="flex items-center gap-5 mb-6">
        <span className="font-cormorant text-2xl text-gold-600 font-light">
          {service.price}
        </span>
        <span className="w-px h-5 bg-gold-300/40" />
        <span className="font-jost text-xs text-ink-400 font-light tracking-wide">
          {service.duration}
        </span>
      </div>

      {/* Description snippet */}
      <p className="font-jost text-sm font-light text-ink-400 leading-loose line-clamp-2 mb-7">
        {service.description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-gold-500 group-hover:text-gold-600 transition-colors duration-300">
        <span className="font-jost text-[10px] tracking-[0.3em] uppercase">
          Explore
        </span>
        <span className="w-4 h-px bg-gold-400 group-hover:w-7 transition-all duration-300" />
      </div>

      {/* Subtle corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-full h-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(212,175,55,0.4), transparent 70%)",
          }}
        />
      </div>
    </motion.button>
  );
}
