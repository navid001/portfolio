import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/layout/theme-provider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2EB" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1419" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://navidalviahsan.com"),
  title: {
    default: "Navid Alvi Ahsan — Software Engineer",
    template: "%s | Navid Alvi Ahsan",
  },
  description:
    "Navid Alvi Ahsan — software engineer building SaaS products end-to-end. Design system, frontend, backend, ship.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "SaaS",
    "Bangladesh",
    "Dhaka",
    "Web Development",
    "Design Systems",
    "Frontend Engineering",
  ],
  authors: [{ name: "Navid Alvi Ahsan", url: "https://navidalviahsan.com" }],
  creator: "Navid Alvi Ahsan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://navidalviahsan.com",
    title: "Navid Alvi Ahsan — Software Engineer",
    description:
      "Software engineer building SaaS products end-to-end. Design system, frontend, backend, ship.",
    siteName: "Navid Alvi Ahsan",
    images: [
      {
        url: "https://navidalviahsan.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Navid Alvi Ahsan — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navid Alvi Ahsan — Software Engineer",
    description:
      "Software engineer building SaaS products end-to-end. Design system, frontend, backend, ship.",
    images: ["https://navidalviahsan.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=wwqQ_Jus2QHahOAeyvt2_5XKbnV_UURAYcwpy6M0WeQ",
  },
  alternates: {
    canonical: "https://navidalviahsan.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="portfolio-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
