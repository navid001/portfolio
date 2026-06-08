import { Hero } from "@/components/sections/hero";
import { WorkList } from "@/components/sections/work-list";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Contact } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/loaders/PageLoader";
import { getFeaturedWork } from "@/lib/mdx";

export default function HomePage() {
  const featuredWork = getFeaturedWork();

  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <WorkList items={featuredWork} />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
