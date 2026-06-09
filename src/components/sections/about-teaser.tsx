import Link from "next/link";
import { HeadshotPlaceholder } from "@/components/ui/HeadshotPlaceholder";

export function AboutTeaser() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        <HeadshotPlaceholder size={100} />

        <div style={{ maxWidth: 560 }}>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--ink)",
              marginBottom: "0.75rem",
            }}
          >
            I&apos;m a software engineer at ChefsRHere, a US-based company,
            where I build SaaS tools across the full stack.
            Before that, I spent a couple of years freelancing — redesigns and
            custom builds for small businesses.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--quiet)",
              marginBottom: "1.5rem",
            }}
          >
            I believe the line between engineering and design is mostly
            artificial. Good software has to be both. Based in Dhaka,
            Bangladesh.
          </p>

          <Link href="/about" className="about-teaser-link">
            Full story →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .about-teaser-link {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          color: var(--quiet);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .about-teaser-link:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
