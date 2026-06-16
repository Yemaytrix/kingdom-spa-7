import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NarrativeTransition from "@/components/NarrativeTransition";
import RitualsMenu from "@/components/RitualsMenu";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import PoliciesSection from "@/components/PoliciesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster-100">
      <Nav />
      <Hero />

      {/* Marble PNG texture — scoped to middle sections only, excluded from hero and footer */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/blue-gold-marble-wall-swirl.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            opacity: 0.62,
          }}
        />
        <NarrativeTransition />
        <RitualsMenu />
        <JourneySection />
        <AboutSection />
        <PoliciesSection />
      </div>

      <Footer />
    </main>
  );
}
