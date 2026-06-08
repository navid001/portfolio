import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/loaders/PageLoader";

export const metadata: Metadata = {
  title: "Notes",
  description: "Thoughts, experiments, and writing by Navid Alvi Ahsan.",
};

export default function NotesPage() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "var(--quiet)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              display: "block",
            }}
          >
            notes
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Nothing here yet.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.05rem",
              color: "var(--quiet)",
              lineHeight: 1.6,
              maxWidth: 440,
            }}
          >
            Thoughts, experiments, and writing will appear here when they&apos;re
            ready. In the meantime, the work is in the{" "}
            <Link
              href="/work"
              style={{
                color: "var(--accent)",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              case studies
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
