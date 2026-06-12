import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const pinyon = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kingdom Spa 7 | Luxury Hair & Head Spa — Belleville, NJ",
  description:
    "A sanctuary designed to quiet the mind, restore the crown, and awaken the spirit. Powered by the Holy Spirit. Book your peace today.",
  keywords: ["head spa", "hair spa", "luxury salon", "Belleville NJ", "Kingdom Spa 7"],
  openGraph: {
    title: "Kingdom Spa 7",
    description: "Peace be within your walls. Your renewal begins here.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${cormorant.variable} ${jost.variable} ${pinyon.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
