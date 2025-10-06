import { FinalCta } from "@/components/cta";
import { Experience } from "@/components/experience";
import { FlavorGrid } from "@/components/flavor-grid";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Story } from "@/components/story";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <Hero />
        <FlavorGrid />
        <Story />
        <Experience />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
