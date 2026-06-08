interface AsideProps {
  children: React.ReactNode;
  label?: string;
}

export function Aside({ children, label = "note" }: AsideProps) {
  return (
    <aside
      style={{
        borderLeft: "1px solid var(--hairline)",
        paddingLeft: "1.25rem",
        margin: "2rem 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.1em",
          color: "var(--quiet)",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--quiet)",
        }}
      >
        {children}
      </div>
    </aside>
  );
}
