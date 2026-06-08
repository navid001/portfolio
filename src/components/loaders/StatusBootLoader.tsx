"use client";

import { useEffect, useRef, useState } from "react";
import { shouldSkipAnimation, lockScroll } from "@/lib/animation-utils";

// ─── Timing ────────────────────────────────────────────────────────────────
//  Line 0: "> init portfolio"          16 chars × 35ms  = 560ms  (starts at   0ms)
//  Line 1: "  loading modules..."      20 chars × 22ms  = 440ms  (starts at 760ms)
//           " done" snaps on                                      (at 1300ms)
//  Line 2: "  ready."                   8 chars × 55ms  = 440ms  (starts at 1450ms)
//  Scroll unlocked + exit fade begins                             (at 1995ms)
//  Done                                                           (at 2495ms)
// ───────────────────────────────────────────────────────────────────────────

const L0 = "> init portfolio";
const L1 = "  loading modules...";
const L1_SUFFIX = " done";
const L2 = "  ready.";

const L0_MS = 35;
const L1_MS = 22;
const L2_MS = 55;

const L0_END   = L0.length * L0_MS;
const L1_START = L0_END + 200;
const L1_END   = L1_START + L1.length * L1_MS;
const L1_DONE  = L1_END + 100;
const L2_START = L1_DONE + 150;
const L2_END   = L2_START + L2.length * L2_MS;
const EXIT_AT  = L2_END + 105;
const DONE_AT  = EXIT_AT + 500;

interface LineState {
  text: string;
  dim: boolean;
}

const EMPTY_LINES: LineState[] = [
  { text: "", dim: false },
  { text: "", dim: false },
  { text: "", dim: false },
];

export function StatusBootLoader() {
  const [lines, setLines] = useState<LineState[]>(EMPTY_LINES);
  const [activeLine, setActiveLine] = useState(0);
  const [exiting, setExiting] = useState(false);
  // KEY FIX: starts as false so we DO render the overlay on first render.
  // The overlay is in the server-rendered HTML from the very first paint.
  // useEffect then either animates it or fast-dismisses it.
  const [done, setDone] = useState(false);
  const mountedRef = useRef(true);

  const patchLine = (idx: number, patch: Partial<LineState>) => {
    if (!mountedRef.current) return;
    setLines((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], ...patch };
      return next;
    });
  };

  useEffect(() => {
    mountedRef.current = true;

    // For users who prefer reduced motion: fast-dismiss the overlay, no animation
    if (shouldSkipAnimation()) {
      setExiting(true);
      const id = setTimeout(() => { if (mountedRef.current) setDone(true); }, 200);
      return () => { mountedRef.current = false; clearTimeout(id); };
    }

    const ids: ReturnType<typeof setTimeout>[] = [];
    const tick = (fn: () => void, ms: number) => ids.push(setTimeout(fn, ms));
    const unlock = lockScroll();

    // ── Line 0 ──────────────────────────────────────────────────────────
    for (let i = 0; i < L0.length; i++) {
      const n = i;
      tick(() => patchLine(0, { text: L0.slice(0, n + 1) }), n * L0_MS);
    }

    // ── Transition → line 1 ─────────────────────────────────────────────
    tick(() => {
      setActiveLine(1);
      patchLine(0, { dim: true });
    }, L1_START);

    // ── Line 1 ──────────────────────────────────────────────────────────
    for (let i = 0; i < L1.length; i++) {
      const n = i;
      tick(() => patchLine(1, { text: L1.slice(0, n + 1) }), L1_START + n * L1_MS);
    }
    tick(() => patchLine(1, { text: L1 + L1_SUFFIX }), L1_DONE);

    // ── Transition → line 2 ─────────────────────────────────────────────
    tick(() => {
      setActiveLine(2);
      patchLine(1, { dim: true });
    }, L2_START);

    // ── Line 2 ──────────────────────────────────────────────────────────
    for (let i = 0; i < L2.length; i++) {
      const n = i;
      tick(() => patchLine(2, { text: L2.slice(0, n + 1) }), L2_START + n * L2_MS);
    }

    // ── Exit: unlock scroll first, then fade overlay ─────────────────────
    tick(() => {
      unlock();
      if (mountedRef.current) setExiting(true);
    }, EXIT_AT);

    tick(() => { if (mountedRef.current) setDone(true); }, DONE_AT);

    return () => {
      mountedRef.current = false;
      ids.forEach(clearTimeout);
      unlock(); // idempotent — safe if called after the tick above already called it
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Only stop rendering once fully done — never return null before that
  if (done) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        backgroundColor: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: exiting ? "none" : "all",
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.5s ease" : "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <TermLine text={lines[0].text} dim={lines[0].dim} active={activeLine === 0} color="#8B8680" />

        {(lines[1].text.length > 0 || activeLine >= 1) && (
          <TermLine text={lines[1].text} dim={lines[1].dim} active={activeLine === 1} color="#8B8680" />
        )}

        {(lines[2].text.length > 0 || activeLine >= 2) && (
          <TermLine text={lines[2].text} dim={lines[2].dim} active={activeLine === 2} color="#E8975A" />
        )}
      </div>
    </div>
  );
}

interface TermLineProps {
  text: string;
  dim: boolean;
  active: boolean;
  color: string;
}

function TermLine({ text, dim, active, color }: TermLineProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono), 'JetBrains Mono', 'Courier New', monospace",
        fontSize: "clamp(13px, 2vw, 15px)",
        letterSpacing: "0.04em",
        color: dim ? "#2E3340" : color,
        transition: "color 0.25s ease",
        display: "flex",
        alignItems: "center",
        minHeight: "1.5em",
        whiteSpace: "pre",
      }}
    >
      {text}
      {active && (
        <span
          style={{
            display: "inline-block",
            width: "0.5em",
            height: "1.1em",
            backgroundColor: "#E8975A",
            marginLeft: 2,
            animation: "cursor-blink 0.8s step-end infinite",
          }}
        />
      )}
    </div>
  );
}
