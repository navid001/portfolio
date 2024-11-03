"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://github.com/navid001", icon: Github, label: "GitHub" },
    {
        href: "https://www.linkedin.com/in/navid-alvi-ahsan",
        icon: Linkedin,
        label: "LinkedIn",
    },
    { href: "mailto:navidalvi.001@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
    return (
        <footer className="py-8 border-t">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} Navid Ahsan. All rights
                        reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
