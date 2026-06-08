"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Subtle variable font weight modulation on scroll — skipped on slow connections
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
    if (conn && ["2g", "slow-2g"].includes(conn.effectiveType)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleScroll = () => {
      if (!headlineRef.current) return;
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight * 0.6;
      const progress = Math.min(1, scrolled / maxScroll);
      const weight = Math.round(400 + progress * 200);
      headlineRef.current.style.fontWeight = String(weight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "7rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        {/* Status indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            id="status-dot"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              flexShrink: 0,
              animation: "pulse-dot 2.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              color: "var(--quiet)",
              letterSpacing: "0.06em",
            }}
          >
            Open to interesting problems — 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            color: "var(--ink)",
            maxWidth: 800,
            marginBottom: "1.5rem",
          }}
        >
          Software engineer.
          <br />
          <span style={{ color: "var(--quiet)" }}>
            I design and build
            <br />
            web products end-to-end.
          </span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            color: "var(--quiet)",
            lineHeight: 1.6,
            maxWidth: 500,
            marginBottom: "3rem",
          }}
        >
          Currently building SaaS products at ChefsRHere.
        </p>

        {/* CTA */}
        <Link
          href="/work"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 15,
            color: "var(--ink)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          See selected work →
        </Link>
      </div>

      {/* Bottom metadata row */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "1.5rem",
          right: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderTop: "1px solid var(--hairline)",
            paddingTop: "0.75rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            "dhaka, bangladesh",
            "chefsrhere — software engineer",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                color: "var(--quiet)",
                letterSpacing: "0.08em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
