"use client";

import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { useState, useEffect } from "react";

export default function PageLayout() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute("id") || "";

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <Navbar activeSection={activeSection} />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-screen"
            >
                <Hero />
                <About />
                <Services />
                <Experience />
                <Projects />
                <Skills />
                {/* <Testimonials /> */}
                <Contact />
                <Footer />
            </motion.main>
        </>
    );
}
