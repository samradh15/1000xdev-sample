import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ThesisBento from "@/components/ThesisBento";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-clip">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <ThesisBento />
      <ProjectShowcase />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
