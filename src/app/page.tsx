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

        <section
          style={{
            padding: "0.75rem 1.5rem 1.5rem",
            borderTop: "1px solid var(--hairline)",
            marginBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                color: "var(--quiet)",
                lineHeight: 1.8,
                letterSpacing: "0.03em",
                margin: 0,
              }}
            >
              Primarily: TypeScript, Next.js, React, Supabase, PostgreSQL, Shopify Admin GraphQL
              <br />
              Plus: Node.js, Express, Django, .NET / C#, Azure Functions, MongoDB, Python, Git, Figma, Vercel
            </p>
          </div>
        </section>

        <WorkList items={featuredWork} />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
