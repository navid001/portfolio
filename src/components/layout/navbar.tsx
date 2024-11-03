"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
];

interface NavbarProps {
    activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-1 flex justify-center md:justify-start">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                        >
                            <img src="/Logo.png" alt="NA" className="h-10" />
                        </ScrollLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.href}
                                to={item.href}
                                smooth={true}
                                duration={500}
                                className={cn(
                                    "text-muted-foreground hover:text-primary transition-colors cursor-pointer",
                                    activeSection === item.href &&
                                        "text-primary font-medium"
                                )}
                            >
                                {item.label}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-background border-b h-screen"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.href}
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    className={cn(
                                        "block px-3 py-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer",
                                        activeSection === item.href &&
                                            "text-primary font-medium"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </ScrollLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
