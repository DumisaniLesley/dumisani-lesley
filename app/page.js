import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Blogs />
      <Contact />
    </main>
  );
}
