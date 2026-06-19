import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-6 lg:px-10 space-y-8">
      {/* Top Section: Hero & Skills */}
      <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8 items-start">
        <Hero />
        <Skills />
      </div>

      {/* Middle Section: Projects (Full Width) */}
      <Projects />

      {/* Bottom Section: About & Contact */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 items-start">
        <About />
        <Contact />
      </div>
    </main>
  );
}
