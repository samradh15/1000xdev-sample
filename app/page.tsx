"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ThesisBento from "@/components/ThesisBento";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import OnboardingFunnel from "@/components/OnboardingFunnel";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-clip">
      <Navbar />
      <Hero onTryIt={() => setFunnelOpen(true)} />
      <TrustMarquee />
      <ThesisBento />
      <ProjectShowcase />
      <Testimonials />
      <ContactSection />
      <Footer />

      {funnelOpen && <OnboardingFunnel onClose={() => setFunnelOpen(false)} />}
    </main>
  );
}
