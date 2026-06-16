"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Service } from "@/lib/services";

interface ServiceDrawerProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDrawer({ service, onClose }: ServiceDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Scrim overlay */}
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink-900/20 backdrop-blur-[2px]"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg z-[70] bg-alabaster-100/98 backdrop-blur-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5 md:p-8 pb-6 border-b border-gold-200/40">
              <div>
                <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold-500/80 mb-1.5">
                  {service.category === "head-spa"
                    ? "Head Spa"
                    : service.category === "styling-addon"
                    ? "Service Add-On"
                    : service.category === "head-spa-addon"
                    ? "Head Spa Add-On"
                    : "Styling Service"}
                </p>
                <h2 className="font-cormorant text-3xl font-light text-ink-700 leading-tight">
                  {service.name}
                </h2>
                <p className="font-cormorant italic text-ink-400 mt-1">
                  {service.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="mt-1 ml-4 text-ink-300 hover:text-gold-500 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <line
                    x1="2"
                    y1="2"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="18"
                    y1="2"
                    x2="2"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-5 md:px-8 py-7 space-y-8">
              {/* Price & Duration row */}
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <div>
                  <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-ink-300 mb-1">
                    Starting From
                  </p>
                  <p className="font-cormorant text-3xl font-light text-gold-600">
                    {service.price}
                  </p>
                </div>
                <div className="w-px h-10 bg-gold-200/50" />
                <div>
                  <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-ink-300 mb-1">
                    Duration
                  </p>
                  <p className="font-cormorant text-3xl font-light text-ink-600">
                    {service.duration}
                  </p>
                </div>
                <div className="w-px h-10 bg-gold-200/50" />
                <div>
                  <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-ink-300 mb-1">
                    Deposit
                  </p>
                  <p className="font-cormorant text-3xl font-light text-ink-600">
                    {service.deposit}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-gold-500/80 mb-3">
                  About This Service
                </p>
                <p className="font-jost text-sm font-light text-ink-500 leading-loose">
                  {service.description}
                </p>
              </div>

              {/* Inclusions */}
              <div>
                <p className="font-jost text-[9px] tracking-[0.35em] uppercase text-gold-500/80 mb-4">
                  What&rsquo;s Included
                </p>
                <ul className="space-y-3">
                  {service.inclusions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-jost text-sm font-light text-ink-500"
                    >
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {service.note && (
                <div className="bg-calm-50/60 border border-calm-200/50 rounded-xl p-5">
                  <p className="font-jost text-[9px] tracking-[0.3em] uppercase text-calm-500 mb-2">
                    Please Note
                  </p>
                  <p className="font-jost text-xs font-light text-ink-400 leading-loose">
                    {service.note}
                  </p>
                </div>
              )}

            </div>

            {/* Footer CTA */}
            <div className="p-5 md:p-8 pt-5 border-t border-gold-200/40 space-y-3">
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-gold-500 hover:bg-gold-600 text-alabaster-50 font-jost text-xs tracking-[0.3em] uppercase rounded-full transition-all duration-300 hover:shadow-lg"
              >
                  Book Your Peace
              </a>
              <button
                onClick={onClose}
                className="block w-full text-center py-3 text-ink-300 font-jost text-xs tracking-[0.2em] uppercase hover:text-gold-500 transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
