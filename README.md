# navidalviahsan.me

Personal portfolio of Navid Alvi Ahsan — software engineer at ChefsRHere.

## Overview

An editorial-engineering portfolio built to operate on two layers simultaneously: the content reads as a software engineer's work; the execution (typography, layout, motion) demonstrates design craft without claiming it. Built with Next.js 15 App Router, statically generated, MDX-powered case studies.

**Live:** [navidalviahsan.me](https://www.navidalviahsan.me)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static generation) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + inline CSS custom properties |
| Content | MDX via `next-mdx-remote/rsc` + `gray-matter` |
| Syntax highlighting | `rehype-pretty-code` + Shiki |
| Fonts | Playfair Display, DM Sans, JetBrains Mono (Google Fonts via `next/font`) |
| Animations | Framer Motion (2–3 surgical moments) + View Transitions API |
| Theme | `next-themes`, dark default, `localStorage` persistence |
| Contact | Formspree |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── work/
│   │   ├── page.tsx          # Work index
│   │   └── [slug]/page.tsx   # Case study pages (statically generated)
│   ├── about/page.tsx        # About page
│   ├── notes/page.tsx        # Notes (placeholder)
│   ├── loading.tsx           # Route-level loading UI
│   ├── error.tsx             # Route-level error boundary
│   └── not-found.tsx         # 404 page
│
├── content/
│   └── work/                 # MDX case studies
│       ├── shipfree.mdx
│       ├── portfolio.mdx
│       ├── therapy-station-erp.mdx
│       └── ...
│
├── components/
│   ├── sections/             # Page section components
│   │   ├── hero.tsx
│   │   ├── work-list.tsx
│   │   ├── about-teaser.tsx
│   │   └── contact.tsx
│   ├── work/                 # MDX component library
│   │   ├── CaseHero.tsx
│   │   ├── Pullquote.tsx
│   │   ├── Stat.tsx
│   │   ├── ImageGrid.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Aside.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Divider.tsx
│   │   └── mdx-components.tsx
│   ├── loaders/              # On-load animation
│   │   ├── PageLoader.tsx    # Mounts the active loader; toggled via LOADER_ENABLED
│   │   └── StatusBootLoader.tsx
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   └── ui/
│       ├── HeadshotPlaceholder.tsx
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       └── toaster.tsx
│
├── config/
│   └── animation.ts          # LOADER_ENABLED — on/off switch for the boot loader
├── lib/
│   ├── mdx.ts                # MDX utilities (getAllWork, getWorkBySlug, etc.)
│   ├── animation-utils.ts
│   └── utils.ts
└── types/
    └── work.ts               # WorkFrontmatter interface
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a Case Study

Create a new MDX file at `src/content/work/[slug].mdx` with this frontmatter:

```yaml
---
slug: "project-slug"
title: "One-line descriptive title"
client: "Client name or 'Personal'"
year: "2025"
role: "What you did — e.g., Full-stack engineering and design system"
stack: ["Next.js 15", "Supabase", "Tailwind"]
duration: "3 months"
status: "Shipped, in production"
thumbnail: "/work/[slug]/thumb.jpg"
cover: "/work/[slug]/cover.jpg"
ogImage: "/work/[slug]/og.jpg"
accent: "#E8975A"
featured: true
order: 1
oneLineOutcome: "One sentence describing the measurable result"
---
```

Set `featured: true` to show on the homepage (max 6 items, sorted by `order` ascending).
Set `featured: false` to keep it on the `/work` index only.

Create the assets folder at `public/work/[slug]/` and add:

| File | Dimensions | Max size |
|---|---|---|
| `cover.jpg` | 2400×1200px | 200KB |
| `thumb.jpg` | 800×800px | 50KB |
| `og.jpg` | 1200×630px | 150KB |

The page is automatically included in `generateStaticParams` and the sitemap.

---

## Toggling the Boot Loader

The site ships with one on-load animation, `StatusBootLoader`, mounted via `<PageLoader />`. Turn it on or off in `src/config/animation.ts`:

```typescript
export const LOADER_ENABLED = true // set to false to disable site-wide
```

To skip it on a specific page, don't render `<PageLoader />` in that page's JSX.

---

## Adding a Headshot

Place an 800×800px square JPEG at `public/headshot.jpg`. See `TODO_HEADSHOT.md` for specs. The `HeadshotPlaceholder` component detects the file at build time and swaps automatically — no code changes needed.

---

## Design System

See `DESIGN.md` for the full design specification: color tokens, typography, motion rules, component constraints. Referenced by `CLAUDE.md` so future Claude Code sessions load the design context automatically.

**Color tokens (dark theme):**
- Background: `#0F1419` · Ink: `#F5F2EB` · Quiet: `#8B8680` · Accent: `#E8975A`

**Fonts:** Playfair Display (display) · DM Sans (body) · JetBrains Mono (mono)

---

## License

MIT
