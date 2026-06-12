"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, headSpaServices, stylingServices } from "@/lib/services";
import type { Service } from "@/lib/services";
import ServiceCard from "./ServiceCard";
import ServiceDrawer from "./ServiceDrawer";

type Tab = "all" | "head-spa" | "styling";

export default function RitualsMenu() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const displayedServices =
    activeTab === "all"
      ? services
      : activeTab === "head-spa"
      ? headSpaServices
      : stylingServices;

  const tabs: { id: Tab; label: string }[] = [
    { id: "all", label: "All Services" },
    { id: "head-spa", label: "Head Spa" },
    { id: "styling", label: "Styling" },
  ];

  return (
    <>
      <section id="rituals" className="relative bg-alabaster-200/50 py-28 md:py-36 px-6">
        {/* Background accent — gold + sapphire from the painting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 50% at 50% 100%, rgba(214,232,240,0.3) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 10%, rgba(27,79,168,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-screen-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-jost text-[9px] tracking-[0.45em] uppercase text-gold-500/80 mb-4"
            >
              Morning Peace Menu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-ink-700 leading-tight mb-5"
            >
              Choose Your Peace
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-jost text-sm font-light text-ink-400 max-w-md mx-auto leading-loose"
            >
              Every service is a sacred act of care. Select any service to see full details and book your time.
            </motion.p>
          </div>

          {/* Tab filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center gap-0 mb-14"
          >
            <div className="flex border border-gold-200/60 rounded-full p-1 bg-alabaster-100/70">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2 rounded-full font-jost text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gold-400/90 text-alabaster-50 shadow-sm"
                      : "text-ink-400 hover:text-gold-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services grid — asymmetric: 3 cols on large, 2 on medium, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {displayedServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onClick={setSelectedService}
              />
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center font-jost text-xs font-light text-ink-300 mt-12 tracking-wide"
          >
            Add-ons are available with any service. A{" "}
            <span className="text-gold-500">$35 deposit</span> secures your appointment.
          </motion.p>
        </div>
      </section>

      {/* Service drawer (portal-like, rendered at top level visually) */}
      <ServiceDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
