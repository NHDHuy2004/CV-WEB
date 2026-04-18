import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-10">
      <header className="mb-7 flex items-center justify-between rounded-full border px-4 py-2.5 glass grain-card sm:mb-10 sm:px-6">
        <div className="soft-pill border-0">CV Portfolio</div>
        <ThemeToggle />
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
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
