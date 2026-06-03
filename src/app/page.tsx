import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/pricing";

export default function HomePage() {
  return (
    <>
      <main
        id="main-content"
        className="relative z-10 bg-background mb-[calc(100vh-80px)] md:mb-[calc(100vh-96px)]"
      >
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}
