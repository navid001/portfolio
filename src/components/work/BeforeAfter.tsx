"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface BeforeAfterProps {
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid var(--hairline)",
        cursor: "col-resize",
        userSelect: "none",
        margin: "2rem 0",
      }}
      onMouseDown={(e) => {
        dragging.current = true;
        updatePosition(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updatePosition(e.clientX);
      }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After (full width base) */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image src={after.src} alt={after.alt} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Before (clipped to left side) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image src={before.src} alt={before.alt} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Divider handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: 1,
          backgroundColor: "var(--accent)",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: "var(--bg)",
            fontFamily: "var(--font-mono), monospace",
            fontWeight: 500,
          }}
        >
          ⇄
        </div>
      </div>

      {/* Labels */}
      <span
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          color: "rgba(245,242,235,0.8)",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        {before.label ?? "Before"}
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "0.75rem",
          right: "0.75rem",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          color: "rgba(245,242,235,0.8)",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        {after.label ?? "After"}
      </span>
    </div>
  );
}
