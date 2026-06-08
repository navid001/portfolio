import Image from "next/image";

interface CaseHeroProps {
  title: string;
  client: string;
  year: string;
  role: string;
  outcome?: string;
  cover?: string;
  accent?: string;
}

export function CaseHero({ title, client, year, role, outcome, cover, accent = "var(--accent)" }: CaseHeroProps) {
  return (
    <section style={{ marginBottom: "4rem" }}>
      {/* Metadata row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--hairline)",
        }}
      >
        {[
          { label: "client", value: client },
          { label: "year", value: year },
          { label: "role", value: role },
        ].map(({ label, value }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--quiet)",
                textTransform: "uppercase",
                marginBottom: "0.2rem",
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                color: "var(--ink)",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--ink)",
          maxWidth: 720,
          marginBottom: outcome ? "1.5rem" : "2rem",
        }}
      >
        {title}
      </h1>

      {/* Outcome stat */}
      {outcome && (
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1.1rem",
            color: accent,
            marginBottom: "2rem",
            maxWidth: 560,
          }}
        >
          {outcome}
        </p>
      )}

      {/* Cover image */}
      {cover && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "2 / 1",
            borderRadius: 4,
            overflow: "hidden",
            marginTop: "2rem",
          }}
        >
          <Image
            src={cover}
            alt={`${title} — cover`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}
    </section>
  );
}
