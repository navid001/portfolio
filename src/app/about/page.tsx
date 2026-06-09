import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeadshotPlaceholder } from "@/components/ui/HeadshotPlaceholder";
import { PageLoader } from "@/components/loaders/PageLoader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Navid Alvi Ahsan — software engineer at ChefsRHere. Based in Dhaka, Bangladesh.",
};

const EXPERIENCE = [
  {
    company: "ChefsRHere",
    role: "Software Engineer",
    period: "Mar 2025 — Present",
    location: "Remote (US)",
    bullets: [
      "Built ShipFree, a shipping automation dashboard running in daily production, handling label generation and carrier rate selection across the company's fulfilment operation",
      "Engineered the backend, API layer, and deployment pipeline for OrderPack, a Shopify-embedded order management tool that replaced a manual warehouse lookup process with a consolidated pick list",
      "Collaborate with the operations team on platform stability, workflow automations, and ongoing technical problem-solving — sustaining and improving running systems alongside shipping new products",
      "Work spans Next.js 15, TypeScript, .NET / C#, Azure Functions, Azure Static Web Apps, and Shopify Admin GraphQL depending on the problem",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 — 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Built Therapy Station ERP, a solo project replacing a paper-based physiotherapy clinic's full operation — scheduling, patient records, billing, and audit trail — with a live Next.js and Supabase system",
      "Designed, built, and deployed web projects end to end for small businesses: redesigns, brand sites, and custom platforms",
      "Covered the full stack on every project: design, frontend, backend, and deployment — no handoffs",
    ],
  },
  {
    company: "NSU Startups Next",
    role: "Technical Support Specialist Intern",
    period: "Jan 2024 — Mar 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Improved website performance and user experience through targeted feature improvements",
      "Collaborated across departments to align technical changes with business goals",
      "Provided documentation to ensure smooth handovers and project continuity",
    ],
  },
];

function ExperienceItem({
  company,
  role,
  period,
  location,
  bullets,
}: (typeof EXPERIENCE)[0]) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "2rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--hairline)",
      }}
      className="exp-item"
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: "0.25rem",
          }}
        >
          {company}
        </div>
        <div className="mono-meta" style={{ marginBottom: "0.15rem" }}>{role}</div>
        <div className="mono-meta">{period}</div>
        <div className="mono-meta">{location}</div>
      </div>
      <div>
        {bullets.map((bullet, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: i < bullets.length - 1 ? "0.5rem" : 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "var(--quiet)",
                flexShrink: 0,
                lineHeight: 1.6,
                userSelect: "none",
              }}
            >
              —
            </span>
            <span
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "var(--ink)",
                lineHeight: 1.6,
              }}
            >
              {bullet}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Top: headshot + intro */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "3rem",
              alignItems: "start",
              marginBottom: "5rem",
            }}
            className="about-top"
          >
            <HeadshotPlaceholder size={160} />

            <div style={{ maxWidth: 600 }}>
              <h1
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                }}
              >
                Navid Alvi Ahsan
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                I&apos;m a software engineer at ChefsRHere, a US-based software
                company, where I build SaaS tools across the full stack. Before that, I spent a couple of years freelancing —
                redesigns, brand sites, and custom platforms for small
                businesses that needed both design thinking and engineering
                execution.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--quiet)",
                  marginBottom: "1rem",
                }}
              >
                I studied Computer Science at BRAC University (class of 2024).
                The engineering foundation is formal. The design interest came
                from noticing — over and over — that technically correct software
                can still be bad software if nobody can understand or use it.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--quiet)",
                }}
              >
                I believe the line between engineering and design is mostly
                artificial. Based in Dhaka, Bangladesh.
              </p>
            </div>
          </div>

          {/* Experience */}
          <section style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--quiet)",
                marginBottom: "0",
                letterSpacing: "-0.01em",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              Experience
            </h2>
            {EXPERIENCE.map((item) => (
              <ExperienceItem key={item.company + item.period} {...item} />
            ))}
          </section>

          {/* Currently */}
          <section style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--quiet)",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--hairline)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Currently working with
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "var(--quiet)",
                lineHeight: 1.8,
                maxWidth: 600,
              }}
            >
              TypeScript, JavaScript, Next.js, React, Node.js, Express, Django,
              Supabase, PostgreSQL, MongoDB, Shopify, .NET / C#, Azure
              Functions, Python. Git and Figma throughout. Always something new.
            </p>
          </section>

          {/* Education */}
          <section style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--quiet)",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--hairline)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Education
            </h2>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                  marginBottom: "0.25rem",
                }}
              >
                BRAC University
              </div>
              <div className="mono-meta">BSc Computer Science · Class of 2024</div>
              <div className="mono-meta">Dhaka, Bangladesh</div>
            </div>
          </section>

          {/* Contact CTA */}
          <section
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid var(--hairline)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1.05rem",
                color: "var(--quiet)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Open to hearing about interesting problems — reach out below.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/#contact" className="about-cta-btn">
                Get in touch
              </Link>
              <a href="mailto:navidalvi.001@gmail.com" className="about-email-link">
                navidalvi.001@gmail.com
              </a>
              {/* cv.pdf is placed manually in /public/ */}
              <a href="/cv.pdf" className="about-email-link" target="_blank" rel="noopener noreferrer">
                Or download my CV →
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .about-top {
            grid-template-columns: 1fr !important;
          }
          .exp-item {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
        .about-cta-btn {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          color: var(--bg);
          text-decoration: none;
          background-color: var(--accent);
          padding: 0.6rem 1.25rem;
          border-radius: 4px;
          transition: opacity 0.15s ease;
        }
        .about-cta-btn:hover { opacity: 0.85; }
        .about-email-link {
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          color: var(--quiet);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .about-email-link:hover { color: var(--accent); }
      `}</style>
    </>
  );
}
