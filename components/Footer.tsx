"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  Experience: [
    { label: "Peace", href: "#rituals" },
    { label: "The Journey", href: "#journey" },
    { label: "Our Story", href: "#about" },
    { label: "KS7 Guidelines", href: "#guidelines" },
  ],
  Hours: [
    { label: "Tue – Fri", href: null },
    { label: "9 AM – 5 PM", href: null },
    { label: "Saturday", href: null },
    { label: "9 AM – 5 PM", href: null },
    { label: "Sun – Mon", href: null },
    { label: "Closed", href: null },
  ],
  Connect: [
    { label: "(862) 596-6565", href: "tel:8625966565" },
    { label: "info@kingdomspa7.com", href: "mailto:info@kingdomspa7.com" },
    {
      label: "Book Online",
      href: "https://kingdomspa7.glossgenius.com/services",
    },
    { label: "155 Belmont Ave, Ste 116", href: "https://maps.google.com/?q=155+Belmont+Ave+Suite+116+Belleville+NJ+07109" },
    { label: "Belleville, NJ 07109", href: "https://maps.google.com/?q=155+Belmont+Ave+Suite+116+Belleville+NJ+07109" },
  ],
};

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer
      id="footer"
      className="relative bg-ink-900 overflow-hidden"
      style={{ backgroundColor: "#1E1A18" }}
    >
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 pt-20 pb-12">
        {/* Top section: Logo + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Full logo */}
          <div className="flex justify-center mb-8">
            {!logoError ? (
              <div className="w-40 h-40 rounded-full overflow-hidden bg-white shadow-[0_0_40px_rgba(212,175,55,0.15)] flex-shrink-0">
                <img
                  src="/logo.hero.png"
                  alt="Kingdom Spa 7"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="font-cormorant text-3xl font-light text-gold-400 tracking-wide">
                  Kingdom Spa 7
                </p>
                <p className="font-jost text-[10px] tracking-[0.4em] uppercase text-gold-500/50">
                  Powered by the Holy Spirit
                </p>
                <p className="font-cormorant italic text-ink-200/40 text-sm">Psalm 122:7</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 mb-16 max-w-3xl mx-auto"
        >
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold-500/60 mb-5">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                        className="font-jost text-sm font-light text-ink-200/60 hover:text-gold-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="font-jost text-sm font-light text-ink-200/40">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Book CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a
            href="https://kingdomspa7.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 border border-gold-500/40 text-gold-400 font-jost text-xs tracking-[0.3em] uppercase rounded-full hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-500 group"
          >
            Reserve Your Peace
            <span className="w-4 h-px bg-gold-500/60 group-hover:w-6 transition-all duration-300 block" />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-gold-500/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-jost text-[10px] text-ink-200/30 tracking-wide">
            © {new Date().getFullYear()} Kingdom Spa 7. All rights reserved.
          </p>
          <p className="font-cormorant italic text-ink-200/30 text-sm">
            &ldquo;Peace be within your walls.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
