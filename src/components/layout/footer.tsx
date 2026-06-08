"use client";

const SOCIAL_LINKS = [
  { href: "https://github.com/navid001", label: "github" },
  { href: "https://www.linkedin.com/in/navid-alvi-ahsan", label: "linkedin" },
  { href: "mailto:navidalvi.001@gmail.com", label: "email" },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--hairline)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            color: "var(--quiet)",
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} navid alvi ahsan
        </span>

        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                color: "var(--quiet)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--quiet)")}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
