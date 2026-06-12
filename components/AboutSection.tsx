"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9 AM – 6 PM" },
  { day: "Wednesday", time: "9 AM – 6 PM" },
  { day: "Thursday", time: "9 AM – 6 PM" },
  { day: "Friday", time: "9 AM – 6 PM" },
  { day: "Saturday", time: "9 AM – 6 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-alabaster-200/40 py-28 md:py-40 px-6 overflow-hidden">
      {/* Soft calm blue background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 30%, rgba(214,232,240,0.35) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-jost text-[9px] tracking-[0.45em] uppercase text-gold-500/80 mb-4"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="font-cormorant text-4xl sm:text-5xl font-light text-ink-700 leading-tight mb-8"
            >
              Built on faith.
              <br />
              <em className="text-gold-600">Carried by the Spirit.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 font-jost text-sm font-light text-ink-500 leading-loose max-w-lg"
            >
              <p>
                Kingdom Spa 7 was founded on a simple but powerful belief: that caring for your
                crown is an act of worship. The number seven is the number of completion. Here,
                every visit is designed to bring you one step closer to wholeness.
              </p>
              <p>
                Powered by the Holy Spirit, this is not just a salon. It is a sanctuary where skilled
                hands and quiet intention come together to restore your hair, your scalp, and your spirit.
                Every steamer session, every scalp massage, every moment of stillness is offered with
                intention.
              </p>
              <p>
                We believe beauty begins in peace. And peace is what we hold for you every time you walk
                through our doors.
              </p>
            </motion.div>

            
          </div>

          {/* Right: Hours + Location */}
          <div className="space-y-12">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-alabaster-300/50 border border-gold-200/40 flex items-center justify-center"
            >
              {/*
                IMAGE PLACEHOLDER
                ──────────────────────────────────────────────────────────────────
                Replace this div with an <Image> component pointing to your
                salon photography. Recommended: a warm, bright morning shot
                of the salon interior or a close-up of a treatment in progress.
                Size: 800×600 or similar 4:3 crop.
                ──────────────────────────────────────────────────────────────────
              */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #F5F0E8 0%, #EDE8DF 40%, #D6E8F0 100%)",
                }}
              />
              <div className="relative text-center px-8">
                <span className="font-cormorant text-4xl font-light text-gold-400/60">
                  KS7
                </span>
                <p className="font-jost text-[9px] tracking-[0.3em] uppercase text-ink-300/60 mt-2">
                  Salon photo coming soon
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold-500/80 mb-5">
                Hours of Service
              </p>
              <ul className="space-y-2.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-center border-b border-gold-200/30 pb-2.5"
                  >
                    <span className="font-jost text-sm font-light text-ink-500">
                      {h.day}
                    </span>
                    <span
                      className={`font-jost text-sm font-light ${
                        h.time === "Closed" ? "text-ink-300" : "text-ink-600"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold-500/80 mb-3">
                Find Us
              </p>
              <p className="font-cormorant text-xl font-light text-ink-700">
                155 Belmont Ave, Suite 116
              </p>
              <p className="font-cormorant text-xl font-light text-ink-500">
                Belleville, NJ 07109
              </p>
              <div className="flex gap-5 mt-4">
                <a
                  href="tel:8625966565"
                  className="font-jost text-xs font-light text-gold-600 hover:text-gold-700 tracking-wide transition-colors"
                >
                  (862) 596-6565
                </a>
                <span className="text-gold-300/50">·</span>
                <a
                  href="mailto:info@kingdomspa7.com"
                  className="font-jost text-xs font-light text-gold-600 hover:text-gold-700 tracking-wide transition-colors"
                >
                  info@kingdomspa7.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
