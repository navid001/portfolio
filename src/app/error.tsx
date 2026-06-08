"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          minHeight: "70vh",
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
          error
        </span>
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
          Something went wrong.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1.05rem",
            color: "var(--quiet)",
            lineHeight: 1.6,
            maxWidth: 420,
            marginBottom: "2rem",
          }}
        >
          An unexpected error occurred. Try again or navigate elsewhere.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              color: "var(--ink)",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            Try again →
          </button>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              color: "var(--quiet)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--quiet)")}
          >
            Home →
          </Link>
        </div>
      </div>
    </main>
  );
}
