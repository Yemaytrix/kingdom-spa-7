"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PolicyCard {
  id: string;
  heading: string;
  subheading: string;
  body: React.ReactNode;
}

const policies: PolicyCard[] = [
  {
    id: "deposits",
    heading: "Appointment Deposits",
    subheading: "Securing your sacred time",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          A deposit is required to secure all appointments. Please know that all deposits are non-refundable and
          may only be refunded at the discretion of Kingdom Spa 7.
        </p>
        <p>
          Deposits may be transferred to a future appointment when the appointment is rescheduled
          more than 24 hours before the scheduled time. Transfers are permitted a maximum of two (2)
          times within 30 days of the original appointment date.
        </p>
        <p>
          After the second reschedule, the deposit will be forfeited and a new deposit will be required to
          book another appointment.
        </p>
      </div>
    ),
  },
  {
    id: "client-responsibility",
    heading: "Client Responsibility",
    subheading: "What we ask of every guest",
    body: (
      <div className="space-y-4 font-jost text-sm font-light text-ink-400 leading-loose">
        {/* Detangle callout */}
        <div className="bg-gold-100/50 border border-gold-300/60 rounded-xl p-4 space-y-1">
          <p className="font-jost text-[10px] tracking-[0.3em] uppercase text-gold-600 font-medium">
            Hair Preparation Required
          </p>
          <p className="font-jost text-sm text-ink-600 leading-loose">
            <strong className="font-medium">Clients must arrive with their hair fully detangled.</strong>{" "}
            Clients who arrive with severely tangled, matted, or knotted hair will be refused
            service and required to rebook with a new deposit.
          </p>
        </div>

        <p>Clients are also responsible for providing accurate and complete information regarding:</p>
        <ul className="space-y-2 ml-4">
          {[
            "Health conditions",
            "Scalp conditions",
            "Allergies",
            "Sensitivities",
            "Medications",
            "Any other factors that may affect service safety",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Failure to disclose relevant information may result in refusal of service and forfeiture
          of deposits and applicable fees.
        </p>
      </div>
    ),
  },
  {
    id: "late-arrival",
    heading: "Late Arrival",
    subheading: "Honoring everyone's time",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Clients are granted a 10-minute grace period. We understand that life happens, and we
          hold space for the unexpected.
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>Arriving 11–15 minutes late: a $5 late fee applies.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Arriving 16–24 minutes late: a $22 late fee applies ($5 initial fee plus an additional $17).
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Arriving 25 minutes or more late: your deposit will be forfeited and the appointment must be
              rescheduled with a new deposit.
            </span>
          </li>
        </ul>
        <p>
          Late arrivals may result in a shortened service time to avoid impacting other scheduled
          appointments. Full service pricing may still apply.
        </p>
      </div>
    ),
  },
  {
    id: "cancellation",
    heading: "Cancellation & Rescheduling",
    subheading: "Flexibility with fairness",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Appointments may be rescheduled without penalty when requested more than 24 hours before the
          scheduled appointment time.
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Cancellations made within 24 hours of the appointment time will result in forfeiture of the deposit.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Same-day cancellations will be charged 50% of the scheduled service total.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Deposits forfeited due to late cancellations are non-transferable and non-refundable.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "no-show",
    heading: "No-Call, No-Show",
    subheading: "Protecting the sanctuary for all",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Clients who fail to attend their appointment without providing any notice will be charged
          100% of the scheduled service amount on the day of the appointment.
        </p>
        <p>
          After three (3) no-call, no-show occurrences, the client will no longer be eligible to book
          future appointments with Kingdom Spa 7.
        </p>
        <p className="text-ink-300 italic text-xs">
          We ask that you honor your reservation as we hold sacred space for your renewal.
          Notifying us gives us the opportunity to offer that time to another client who is waiting.
        </p>
      </div>
    ),
  },
  {
    id: "service-modifications",
    heading: "Service Modifications",
    subheading: "Additions & changes during your visit",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Any additions, upgrades, or changes requested during the appointment may result in an
              increase in the final service price.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Additional service time is not guaranteed and will be accommodated based on schedule
              availability.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "contraindications",
    heading: "Contraindications & Health Policy",
    subheading: "For the safety of all guests",
    body: (
      <div className="space-y-4 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>Please do not book an appointment if you have:</p>
        <ul className="space-y-2 ml-4">
          {[
            "Open wounds, cuts, sores, lesions, or scabs on the scalp, face, neck, or treatment area.",
            "Active scalp infections.",
            "Ringworm or other contagious fungal infections.",
            "Active lice or nits.",
            "Severe scalp abrasions, irritation, inflammation, or unexplained scalp conditions.",
            "Any contagious skin condition.",
            "Recent scalp surgery or medical procedures without physician clearance.",
            "Any condition that may be aggravated by scalp massage, steam treatments, water services, or topical products.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "illness",
    heading: "Illness & Sickness Policy",
    subheading: "Keeping our sanctuary safe",
    body: (
      <div className="space-y-4 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          For the safety of all clients and service providers, please do not attend your appointment
          if you are experiencing:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Fever",
            "Chills",
            "Flu-like symptoms",
            "Persistent coughing",
            "Vomiting",
            "Diarrhea",
            "Any contagious illness or infection",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Clients who are feeling unwell should reschedule their appointment and seek appropriate
          medical care if necessary.
        </p>
      </div>
    ),
  },
  {
    id: "medical",
    heading: "Medical Evaluation Recommendation",
    subheading: "Your wellbeing comes first",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Clients experiencing open wounds, active infections, severe scalp irritation, excessive
          scalp sensitivity, unexplained hair loss, or other abnormal scalp conditions should seek
          evaluation and treatment from a licensed healthcare provider or dermatologist before
          booking services.
        </p>
      </div>
    ),
  },
  {
    id: "right-to-refuse",
    heading: "Right to Refuse Service",
    subheading: "Health, safety & professional standards",
    body: (
      <div className="space-y-4 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Kingdom Spa 7 reserves the right to refuse, discontinue, or modify services if a
          condition is observed that:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "May compromise the health or safety of the client.",
            "May compromise the health or safety of the service provider or other clients.",
            "Prevents services from being safely performed.",
            "Violates sanitation and infection-control standards.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          If a client arrives with a contraindicated condition that was not disclosed during
          booking, Kingdom Spa 7 reserves the right to refuse service at the time of the
          appointment. In such cases, deposits will be forfeited, refunds will not be issued, and
          additional fees may apply in accordance with Kingdom Spa 7 policies.
        </p>
      </div>
    ),
  },
  {
    id: "guest-policy",
    heading: "Guest Policy",
    subheading: "A peaceful space for all",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Only the client scheduled for services is permitted in the treatment room.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Guests, family members, and children who are not receiving services must remain in
              the designated waiting area.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "conduct",
    heading: "Respect & Professional Conduct",
    subheading: "Maintaining our sanctuary's peace",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Kingdom Spa 7 is committed to providing a peaceful, professional, and luxury
              experience for every guest.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Clients are expected to be respectful and courteous before, during, and after their
              appointment.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-gold-400/70 flex-shrink-0" />
            <span>
              Disrespectful, threatening, abusive, inappropriate, or disruptive behavior may result
              in refusal of service and/or permanent booking restrictions.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "belongings",
    heading: "Personal Belongings",
    subheading: "Please keep your valuables close",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          Kingdom Spa 7 is not responsible for lost, stolen, misplaced, damaged, or unattended
          personal belongings.
        </p>
      </div>
    ),
  },
  {
    id: "agreement",
    heading: "Agreement to Terms",
    subheading: "By booking, you agree to all policies",
    body: (
      <div className="space-y-3 font-jost text-sm font-light text-ink-400 leading-loose">
        <p>
          By booking an appointment with Kingdom Spa 7, you acknowledge that you have read,
          understood, and agreed to all policies, procedures, terms, conditions, and health
          requirements outlined above.
        </p>
        <p>
          Failure to comply with these policies may result in appointment cancellation, refusal of
          service, forfeiture of deposits, additional fees, or restriction from future bookings.
        </p>
        <p>
          By booking an appointment with Kingdom Spa 7, the client authorizes all charges
          associated with their selected services and acknowledges the cancellation, no-show, and
          deposit policies. Fraudulent chargebacks may result in permanent refusal of future
          services and collection efforts to recover unpaid balances.
        </p>
        <p className="text-ink-300 italic text-xs">
          Kingdom Spa 7 reserves the right to update or modify these policies at any time without
          prior notice.
        </p>
      </div>
    ),
  },
];

function PolicyAccordion({ policy, index }: { policy: PolicyCard; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="border-t border-gold-200/50"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-7 flex items-start justify-between gap-6 group"
        aria-expanded={open}
      >
        <div>
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ink-700 group-hover:text-gold-600 transition-colors duration-300 mb-1">
            {policy.heading}
          </h3>
          <p className="font-jost text-xs font-light text-ink-400 tracking-wide">
            {policy.subheading}
          </p>
        </div>
        <span
          className={`flex-shrink-0 mt-1.5 w-7 h-7 rounded-full border border-gold-300/50 flex items-center justify-center text-gold-500 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-4 md:pr-10 max-w-2xl">{policy.body}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PoliciesSection() {
  return (
    <section
      id="guidelines"
      className="relative bg-alabaster-100 py-28 md:py-40 px-6 overflow-hidden"
    >
      {/* Dove watermark SVG — decorative, very subtle */}
      <div className="absolute top-16 right-8 md:right-16 opacity-[0.06] pointer-events-none select-none" aria-hidden>
        <svg
          width="180"
          height="180"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized dove outline */}
          <path
            d="M100 40 C80 35, 50 50, 40 75 C30 100, 45 120, 60 125 C50 135, 40 150, 45 165 C55 145, 75 140, 90 145 L100 160 L110 145 C125 140, 145 145, 155 165 C160 150, 150 135, 140 125 C155 120, 170 100, 160 75 C150 50, 120 35, 100 40Z"
            fill="#C9A84C"
          />
          <circle cx="85" cy="62" r="4" fill="#C9A84C" />
          {/* Olive branch */}
          <path
            d="M45 170 Q50 160, 60 155 Q65 162, 55 168 Q70 155, 75 145 Q80 152, 70 160 Q82 148, 90 140"
            stroke="#C9A84C"
            strokeWidth="2"
            fill="none"
          />
          <ellipse cx="52" cy="162" rx="5" ry="3" fill="#C9A84C" transform="rotate(-30 52 162)" />
          <ellipse cx="63" cy="156" rx="5" ry="3" fill="#C9A84C" transform="rotate(-15 63 156)" />
          <ellipse cx="75" cy="148" rx="5" ry="3" fill="#C9A84C" transform="rotate(-40 75 148)" />
        </svg>
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-jost text-[9px] tracking-[0.45em] uppercase text-gold-500/80 mb-4"
          >
            Policies & Agreement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-ink-700 leading-tight mb-5"
          >
          Kingdom Spa 7
          <br />
          <em className="text-gold-600">Guidelines</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-jost text-sm font-light text-ink-400 leading-loose max-w-md"
          >
            Our policies are designed to respect everyone's time, ensure fairness to all clients, and
            maintain a peaceful, luxurious, and sanitary environment. By booking an appointment, you
            agree to all policies outlined below.
          </motion.p>
        </div>

        {/* Policy accordions */}
        <div className="max-w-3xl">
          {policies.map((policy, i) => (
            <PolicyAccordion key={policy.id} policy={policy} index={i} />
          ))}

          {/* Bottom border */}
          <div className="border-t border-gold-200/50 pt-8">
            <p className="font-jost text-xs font-light text-ink-300 leading-loose max-w-xl">
              For questions about our policies, please contact us at{" "}
              <a
                href="tel:8625966565"
                className="text-gold-600 hover:text-gold-700 transition-colors"
              >
                (862) 596-6565
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@kingdomspa7.com"
                className="text-gold-600 hover:text-gold-700 transition-colors"
              >
                info@kingdomspa7.com
              </a>
              . We are here to serve you with excellence and grace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
