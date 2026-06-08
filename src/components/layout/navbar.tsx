"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Notes" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        backgroundColor: scrolled ? "var(--bg)" : "transparent",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.06em",
            color: "var(--quiet)",
            textDecoration: "none",
            textTransform: "lowercase",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--quiet)")}
        >
          navid alvi ahsan
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          {/* Desktop nav links */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "1.75rem",
            }}
            className="nav-desktop"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 14,
                    color: isActive(href) ? "var(--accent)" : "var(--quiet)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(href)) e.currentTarget.style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(href)) e.currentTarget.style.color = "var(--quiet)";
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--hairline)",
                borderRadius: 4,
                padding: "3px 8px",
                cursor: "pointer",
                color: "var(--quiet)",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.06em",
                textTransform: "lowercase",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--quiet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--quiet)";
                e.currentTarget.style.borderColor = "var(--hairline)";
              }}
            >
              {theme === "dark" ? "light" : "dark"}
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="nav-mobile-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--quiet)",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 1,
                  backgroundColor: "currentColor",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : menuOpen && i === 2
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg)",
            borderTop: "1px solid var(--hairline)",
            padding: "0.75rem 1.5rem 1.25rem",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 16,
                color: isActive(href) ? "var(--accent)" : "var(--ink)",
                textDecoration: "none",
                padding: "0.6rem 0",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
        @media (max-width: 639px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
