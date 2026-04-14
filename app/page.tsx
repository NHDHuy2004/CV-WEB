import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <header className="mb-6 flex justify-end sm:mb-10">
        <ThemeToggle />
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="space-y-6 lg:space-y-8">
          <Hero />
          <About />
        </div>
        <div className="space-y-6 lg:space-y-8">
          <Skills />
          <Contact />
        </div>
      </section>
    </main>
  );
}
