export interface ServiceInclusion {
  label: string;
}

export interface Service {
  id: string;
  name: string;
  category: "head-spa" | "styling" | "add-on";
  tagline: string;
  description: string;
  inclusions: string[];
  price: string;
  priceNote?: string;
  duration: string;
  deposit: string;
  bookingUrl: string;
  /** Used for optional add-on note */
  note?: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "take-rest",
    name: "Take Rest",
    category: "head-spa",
    tagline: "A restorative beginning",
    description:
      "A restorative treatment designed to cleanse, hydrate, and refresh while providing a moment of pure relaxation and self-care. The simplest invitation to exhale.",
    inclusions: [
      "Deep cleansing wash",
      "Relaxing scalp massage",
      "Deep conditioning treatment with steam",
      "Steamed eye mask",
      "Professional blow dry",
      "Two signature cornrow braids",
    ],
    price: "$145+",
    duration: "90 min",
    deposit: "$35",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
    featured: false,
  },
  {
    id: "relax-and-reset",
    name: "Relax & Reset",
    category: "head-spa",
    tagline: "The complete escape",
    description:
      "Unwind with the ultimate self-care escape. This soothing treatment deeply cleanses, hydrates, and rejuvenates your hair, scalp, and skin while providing pure relaxation. Leave feeling refreshed, radiant, and beautifully styled from scalp to glow.",
    inclusions: [
      "Deep cleansing wash",
      "Relaxing scalp massage",
      "Deep conditioning treatment with steam",
      "Steamed eye mask",
      "Glow facial — cleanse, jelly mask, tone & moisturize",
      "Professional blow dry",
      "Two signature cornrow braids",
    ],
    price: "$175+",
    duration: "115 min",
    deposit: "$35",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
    featured: true,
  },
  {
    id: "luxury-day-off",
    name: "Luxury Day Off",
    category: "head-spa",
    tagline: "The full indulgence",
    description:
      "Pamper yourself to the ultimate self-care escape. This indulgent experience combines deep hydration, rejuvenating massage, and skin-loving treatments to refresh your hair, scalp, and glow. Leave feeling renewed, radiant, and beautifully styled from scalp to glow.",
    inclusions: [
      "Deep cleansing wash",
      "Relaxing scalp massage",
      "Upper body massage — neck, shoulders & clavicle",
      "Deep conditioning treatment with steam",
      "Steamed eye mask",
      "Glow facial — cleanse, jelly mask, tone & moisturize",
      "Facial extraction",
      "Professional blow dry",
      "Two signature cornrow braids",
    ],
    price: "$215",
    duration: "155 min",
    deposit: "$35",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
    featured: true,
  },
  {
    id: "silk-press",
    name: "Silk Press & Style",
    category: "styling",
    tagline: "Luminous, sleek perfection",
    description:
      "A complete wash and style ritual ending in a silky, radiant press. Perfect for those who seek polished, glossy results with deep conditioning at the foundation.",
    inclusions: [
      "Wash",
      "Deep conditioning treatment with steamer",
      "Blow dry",
      "Silk press",
      "Style",
    ],
    price: "$145+",
    duration: "95 min",
    deposit: "$35",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
  {
    id: "clip-in-install",
    name: "Clip-In Install",
    category: "styling",
    tagline: "Voluminous transformation",
    description:
      "A full wash service followed by professional clip-in extension installation for seamless, natural-looking volume. Requires 2–3 bundles of 100% human hair clip-in extensions for optimal results.",
    inclusions: [
      "Wash",
      "Deep conditioning treatment with steamer",
      "Blow dry",
      "Braid down",
      "Hair net",
      "Clip-in install",
      "Style",
    ],
    price: "$180+",
    duration: "145 min",
    deposit: "$35",
    note: "Requires 2–3 bundles of 100% human hair clip-in extensions. Please ensure clip-ins are made from 100% human hair for best blending results.",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
  {
    id: "finger-coils",
    name: "Finger Coils",
    category: "styling",
    tagline: "Celebrate your natural curl",
    description:
      "Curl definition is achieved using expert finger-coiling techniques to enhance your hair's natural curl pattern. Best suited for clients with already prominent curl patterns.",
    inclusions: [
      "Wash",
      "Deep conditioning with steamer",
      "Blow dry",
      "Finger coils",
    ],
    price: "$145+",
    duration: "90 min",
    deposit: "$35",
    note: "For best results, this service is ideal for hair with already prominent curl patterns.",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
  {
    id: "curl-define",
    name: "Wash, Curl Define & Go",
    category: "styling",
    tagline: "Natural beauty, defined",
    description:
      "A clean, refreshing wash followed by professional curl definition. Embrace your natural texture with a technique that enhances your pattern without manipulation.",
    inclusions: [
      "Wash",
      "Deep conditioning treatment with steamer",
      "Blow dry",
      "Define natural curl pattern",
    ],
    price: "$135+",
    duration: "90 min",
    deposit: "$35",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
  {
    id: "flat-twist",
    name: "Flat Twist & Go",
    category: "styling",
    tagline: "Protective elegance",
    description:
      "Flat twists applied to wet or blow-dried hair for a beautiful twist-out result. Medium to large sections create soft, defined texture with lasting hold.",
    inclusions: [
      "Wash",
      "Deep conditioning treatment with steamer",
      "Flat twist on wet or blow-dried hair",
    ],
    price: "$90+",
    duration: "85 min",
    deposit: "$35",
    note: "This technique is mainly used for twist-outs. Medium to large sections of the hair will be used to achieve results.",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
  {
    id: "braid-down",
    name: "Braid Down",
    category: "styling",
    tagline: "A protected foundation",
    description:
      "A thorough wash and conditioning service followed by a flat protective braid foundation. Ideal as preparation for wig installs, sew-ins, crochet, and other protective styles.",
    inclusions: [
      "Wash",
      "Deep conditioning treatment with steamer",
      "Blow dry",
      "Braid down",
    ],
    price: "$100+",
    duration: "90 min",
    deposit: "$35",
    note: "Braid down is a flat protective foundation typically done before styles outside this service, such as wig installs, sew-ins, or crochet.",
    bookingUrl: "https://kingdomspa7.glossgenius.com/services",
  },
];

export const headSpaServices = services.filter((s) => s.category === "head-spa");
export const stylingServices = services.filter((s) => s.category === "styling");
export const featuredServices = services.filter((s) => s.featured);
