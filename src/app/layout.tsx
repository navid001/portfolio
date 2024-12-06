import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "#020817" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.navidalviahsan.me"),
    title: {
        default: "Navid Alvi Ahsan - Full Stack Developer",
        template: "%s | Navid Alvi Ahsan",
    },
    description:
        "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences.",
    keywords: [
        "Full Stack Developer",
        "Web Developer",
        "React Developer",
        "Next.js Developer",
        "Frontend Developer",
        "Backend Developer",
        "JavaScript Developer",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Bangladesh",
    ],
    authors: [
        { name: "Navid Alvi Ahsan", url: "https://www.navidalviahsan.me" },
    ],
    creator: "Navid Alvi Ahsan",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.navidalviahsan.me",
        title: "Navid Alvi Ahsan - Full Stack Developer",
        description:
            "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences.",
        siteName: "Navid Alvi Ahsan's Portfolio",
        images: [
            {
                url: "https://www.navidalviahsan.me/Logo.png",
                width: 1200,
                height: 630,
                alt: "Navid Alvi Ahsan - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Navid Alvi Ahsan - Full Stack Developer",
        description:
            "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
        images: ["https://www.navidalviahsan.me/og-image.jpg"],
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
        canonical: "https://www.navidalviahsan.me",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                    type="image/png"
                    sizes="180x180"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="google-site-verification"
                    content="google-site-verification=wwqQ_Jus2QHahOAeyvt2_5XKbnV_UURAYcwpy6M0WeQ"
                />
            </head>
            <body
                className={`${inter.className} antialiased`}
                suppressHydrationWarning
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
