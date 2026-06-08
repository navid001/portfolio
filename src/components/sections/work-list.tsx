"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { WorkFrontmatter } from "@/types/work";

interface WorkListProps {
  items: WorkFrontmatter[];
}

interface WorkItemRowProps {
  item: WorkFrontmatter;
  index: number;
}

function WorkItemRow({ item, index }: WorkItemRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${item.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          padding: "2rem 0",
          borderBottom: "1px solid var(--hairline)",
          cursor: "pointer",
        }}
      >
        {/* Left: content */}
        <div>
          {/* Index + client */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.6rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                color: "var(--quiet)",
                letterSpacing: "0.1em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                color: "var(--quiet)",
                letterSpacing: "0.08em",
              }}
            >
              {item.client}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                color: "var(--quiet)",
                letterSpacing: "0.08em",
              }}
            >
              · {item.year}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.15rem, 3vw, 1.65rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: hovered ? "var(--accent)" : "var(--ink)",
              transition: "color 0.15s ease",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            {item.title}
          </h3>

          {/* Outcome / description */}
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "var(--quiet)",
              lineHeight: 1.5,
              maxWidth: 480,
              marginBottom: "0.75rem",
              transition: "transform 0.15s ease",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {item.oneLineOutcome}
          </p>

          {/* Role */}
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--quiet)",
              letterSpacing: "0.06em",
            }}
          >
            {item.role}
          </span>
        </div>

        {/* Right: thumbnail */}
        {item.thumbnail && (
          <div
            style={{
              width: 120,
              height: 80,
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid var(--hairline)",
              opacity: hovered ? 1 : 0.7,
              transition: "opacity 0.15s ease",
              position: "relative",
            }}
            className="work-thumb"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="120px"
            />
          </div>
        )}
      </article>

      <style>{`
        @media (max-width: 480px) {
          .work-thumb { display: none !important; }
        }
      `}</style>
    </Link>
  );
}

export function WorkList({ items }: WorkListProps) {
  if (items.length === 0) {
    return (
      <p
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 13,
          color: "var(--quiet)",
        }}
      >
        No work items yet.
      </p>
    );
  }

  return (
    <section style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--hairline)",
            marginBottom: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              fontWeight: 400,
              color: "var(--quiet)",
              letterSpacing: "-0.01em",
            }}
          >
            Selected Work
          </h2>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--quiet)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--quiet)")}
          >
            All work →
          </Link>
        </div>

        {/* Work items */}
        <div>
          {items.map((item, i) => (
            <WorkItemRow key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
