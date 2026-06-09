import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/work/mdx-components";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/loaders/PageLoader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getWorkBySlug(slug);
    const ogImage = frontmatter.ogImage ?? "https://navidalviahsan.com/og-image.jpg";
    return {
      title: frontmatter.title,
      description: frontmatter.oneLineOutcome,
      alternates: {
        canonical: `https://navidalviahsan.com/work/${slug}`,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.oneLineOutcome,
        url: `https://navidalviahsan.com/work/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: frontmatter.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.oneLineOutcome,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Work" };
  }
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  let frontmatter: Awaited<ReturnType<typeof getWorkBySlug>>["frontmatter"];
  let content: string;

  try {
    const result = getWorkBySlug(slug);
    frontmatter = result.frontmatter;
    content = result.content;
  } catch {
    notFound();
  }

  const accent = frontmatter.accent ?? "var(--accent)";

  return (
    <>
      <PageLoader />
      <Navbar />
      <main
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          // Apply per-case-study accent via CSS custom property
          ["--case-accent" as string]: accent,
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {/* Back link */}
          <Link href="/work" className="case-back-link">
            ← work
          </Link>

          {/* MDX content */}
          <article className="prose-case">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  rehypePlugins: [[rehypePrettyCode, { theme: "github-dark-dimmed" }]] as any,
                },
              }}
            />
          </article>

          {/* Case study footer */}
          <div
            style={{
              marginTop: "5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--hairline)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <span className="mono-meta">{frontmatter.client}</span>
              <span className="mono-meta" style={{ marginLeft: "1rem" }}>
                {frontmatter.year}
              </span>
              <span className="mono-meta" style={{ marginLeft: "1rem" }}>
                {frontmatter.duration}
              </span>
            </div>
            <Link href="/work" className="case-all-work-link">
              All work →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .case-back-link {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--quiet);
          text-decoration: none;
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 3rem;
          transition: color 0.15s ease;
        }
        .case-back-link:hover { color: var(--ink); }
        .case-all-work-link {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--quiet);
          text-decoration: none;
          letter-spacing: 0.06em;
          transition: color 0.15s ease;
        }
        .case-all-work-link:hover { color: var(--accent); }
      `}</style>
    </>
  );
}
