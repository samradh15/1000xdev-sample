import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ThesisBento from "@/components/ThesisBento";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <ThesisBento />
      <ProjectShowcase />
    </main>
  );
}
