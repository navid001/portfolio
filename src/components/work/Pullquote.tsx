interface PullquoteProps {
  children: React.ReactNode;
  accent?: string;
}

export function Pullquote({ children, accent = "var(--accent)" }: PullquoteProps) {
  return (
    <blockquote
      style={{
        borderLeft: `3px solid ${accent}`,
        paddingLeft: "1.5rem",
        margin: "2.5rem 0",
        maxWidth: 600,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.45,
          color: "var(--ink)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </blockquote>
  );
}
