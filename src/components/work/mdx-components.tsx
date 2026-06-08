import type { MDXComponents } from "mdx/types";
import { CaseHero } from "./CaseHero";
import { Pullquote } from "./Pullquote";
import { Stat, StatRow } from "./Stat";
import { ImageGrid, SingleImage } from "./ImageGrid";
import { Aside } from "./Aside";
import { BeforeAfter } from "./BeforeAfter";
import { Divider } from "./Divider";
import { CodeBlock } from "./CodeBlock";

export const mdxComponents: MDXComponents = {
  CaseHero,
  Pullquote,
  Stat,
  StatRow,
  ImageGrid,
  SingleImage,
  Aside,
  BeforeAfter,
  Divider,
  CodeBlock,

  // Override default HTML elements
  h1: ({ children }) => (
    <h1
      style={{
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
        fontWeight: 400,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        color: "var(--ink)",
        marginTop: "3rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
        fontWeight: 400,
        letterSpacing: "-0.02em",
        color: "var(--ink)",
        marginTop: "3rem",
        marginBottom: "0.75rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "1.2rem",
        fontWeight: 400,
        color: "var(--ink)",
        marginTop: "2rem",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--ink)",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      style={{
        color: "var(--accent)",
        textDecoration: "underline",
        textUnderlineOffset: 3,
        transition: "color 0.15s ease",
      }}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        paddingLeft: "1.25rem",
        marginBottom: "1.25rem",
        color: "var(--ink)",
        lineHeight: 1.7,
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      style={{
        paddingLeft: "1.25rem",
        marginBottom: "1.25rem",
        color: "var(--ink)",
        lineHeight: 1.7,
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: "0.3rem" }}>{children}</li>
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--hairline)",
        margin: "3rem 0",
      }}
    />
  ),
  code: ({ children }) => (
    <code
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: "0.875em",
        backgroundColor: "var(--surface)",
        color: "var(--accent)",
        padding: "0.1em 0.4em",
        borderRadius: 2,
      }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--hairline)",
        borderRadius: 4,
        padding: "1.25rem 1.5rem",
        overflowX: "auto",
        margin: "1.5rem 0",
        fontFamily: "var(--font-mono), monospace",
        fontSize: 13,
        lineHeight: 1.7,
      }}
    >
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "3px solid var(--accent)",
        paddingLeft: "1.5rem",
        margin: "2rem 0",
        fontStyle: "italic",
        color: "var(--ink)",
      }}
    >
      {children}
    </blockquote>
  ),
};
