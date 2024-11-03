import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Navid Alvi Ahsan",
    description: "A portfolio generated leveraging Next Js and Typescript styling with Tailwind CSS and used Framer Motion for animations",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
