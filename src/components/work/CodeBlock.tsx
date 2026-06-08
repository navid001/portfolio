interface CodeBlockProps {
  children: React.ReactNode;
  filename?: string;
  language?: string;
}

export function CodeBlock({ children, filename }: CodeBlockProps) {
  return (
    <div style={{ margin: "1.5rem 0" }}>
      {filename && (
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--quiet)",
            letterSpacing: "0.06em",
            padding: "0.5rem 1.25rem",
            borderRadius: "4px 4px 0 0",
            border: "1px solid var(--hairline)",
            borderBottom: "none",
            backgroundColor: "var(--surface)",
          }}
        >
          {filename}
        </div>
      )}
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--hairline)",
          borderRadius: filename ? "0 0 4px 4px" : 4,
          padding: "1.25rem 1.5rem",
          overflowX: "auto",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}
