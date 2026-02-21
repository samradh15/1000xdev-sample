import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
