import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllWork } from "@/lib/mdx";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/loaders/PageLoader";
import type { WorkFrontmatter } from "@/types/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — software engineering and design projects by Navid Alvi Ahsan.",
};

function WorkIndexItem({ item, index }: { item: WorkFrontmatter; index: number }) {
  return (
    <Link href={`/work/${item.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          padding: "2.5rem 0",
          borderBottom: "1px solid var(--hairline)",
          transition: "color 0.15s ease",
        }}
        className="work-index-item"
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.6rem",
            }}
          >
            <span className="mono-meta">{String(index + 1).padStart(2, "0")}</span>
            <span className="mono-meta">{item.client}</span>
            <span className="mono-meta">· {item.year}</span>
            {item.status === "In progress" && (
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                }}
              >
                in progress
              </span>
            )}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
              transition: "color 0.15s ease",
            }}
            className="work-title"
          >
            {item.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "var(--quiet)",
              lineHeight: 1.5,
              maxWidth: 480,
              marginBottom: "0.75rem",
            }}
          >
            {item.oneLineOutcome}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {item.stack?.slice(0, 4).map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.06em",
                  color: "var(--quiet)",
                  border: "1px solid var(--hairline)",
                  borderRadius: 2,
                  padding: "2px 6px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {item.thumbnail && (
          <div
            style={{
              width: 140,
              height: 90,
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid var(--hairline)",
              position: "relative",
            }}
            className="work-thumb"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="140px"
            />
          </div>
        )}
      </article>
    </Link>
  );
}

export default function WorkIndexPage() {
  const allWork = getAllWork();

  return (
    <>
      <PageLoader />
      <Navbar />
      <main style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Selected Work
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1.05rem",
                color: "var(--quiet)",
                lineHeight: 1.6,
                maxWidth: 560,
              }}
            >
              A mix of professional and personal projects — SaaS tools, internal
              systems, and freelance builds. The professional work shows screenshots
              rather than code; the patterns and outcomes speak for themselves.
            </p>
          </div>

          {/* Work list */}
          <div style={{ borderTop: "1px solid var(--hairline)" }}>
            {allWork.map((item, i) => (
              <WorkIndexItem key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .work-index-item:hover .work-title {
          color: var(--accent) !important;
        }
        @media (max-width: 480px) {
          .work-thumb { display: none !important; }
        }
      `}</style>
    </>
  );
}
