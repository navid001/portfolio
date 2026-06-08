interface StatProps {
  value: string;
  label: string;
  accent?: string;
}

export function Stat({ value, label, accent = "var(--accent)" }: StatProps) {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 400,
          color: accent,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "var(--quiet)",
          textTransform: "lowercase",
          marginTop: "0.4rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

interface StatRowProps {
  children: React.ReactNode;
}

export function StatRow({ children }: StatRowProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        padding: "2rem 0",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        margin: "2.5rem 0",
      }}
    >
      {children}
    </div>
  );
}
