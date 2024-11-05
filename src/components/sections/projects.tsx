"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/types/projects";
import { useState } from "react";
import { SelectedProjectDialog } from "./selectedProject";


const projects: Project[] = [
    {
        title: "Personal Portfolio",
        description:
            "Modern portfolio website built with Next.js, featuring smooth animations and a responsive design.",
        image: "/projects/portfolio/hero.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Shadcn UI",
        ],
        liveUrl: "https://navid-alvi-ahsan.vercel.app",
        githubUrl: "https://github.com/navid001/portfolio",
        date: "10/2024",
        caseStudy: {
            overview:
                "A modern, responsive portfolio website showcasing my work as a full-stack developer.",
            challenge:
                "Create a performant, visually appealing portfolio that effectively presents my skills and projects while ensuring an excellent user experience.",
            solution:
                "Implemented a Next.js application with Tailwind CSS for styling and Framer Motion for smooth animations. The website features a modular component structure and responsive design.",
            features: [
                "Interactive hero section with particle animations",
                "Smooth scroll animations",
                "Project case studies with detailed information",
                "Contact form with validation",
                "Responsive design for all devices",
            ],
            images: [
                "/projects/portfolio/hero.png", // Hero section screenshot
                "/projects/portfolio/projects.png", // Projects section screenshot
                "/projects/portfolio/services.png", // Services section screenshot
                "/projects/portfolio/contact.png", // Contact form screenshot
            ],
            results:
                "Created a professional portfolio that effectively showcases my skills and projects, resulting in improved client engagement and project inquiries.",
        },
    },
    {
        title: "Floortech Construction Landing Page",
        description:
            "Interactive landing page showcasing modern web development practices with responsive design and smooth animations.",
        image: "/projects/floortech/hero.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "",
        githubUrl: "https://github.com/navid001/FloorTech-Construction",
        date: "09/2024",
        caseStudy: {
            overview:
                "An interactive and user-friendly landing page for Floortech Constructions, showcasing their impressive portfolio through modern web technologies.",
            challenge:
                "Create a visually appealing and performant website that effectively presents construction projects and services while ensuring optimal user experience across all devices.",
            solution:
                "Implemented a clean, modern design using vanilla JavaScript for smooth interactions and CSS animations for engaging user experience. The website features a responsive layout that adapts seamlessly to different screen sizes.",
            features: [
                "Project portfolio with filterable gallery",
                "Interactive service showcases",
                "Contact form with validation",
                "Performance optimized images and animations",
            ],
            images: [
                "/projects/floortech/hero.png", // Hero section screenshot
                "/projects/floortech/portfolio.png", // Projects gallery screenshot
                "/projects/floortech/services.png", // Services section screenshot
                "/projects/floortech/contact.png", // Contact page screenshot
            ],
            results:
                "The website significantly improved Floortech Construction's online presence, resulting in increased client inquiries and improved user engagement metrics.",
        },
    },
    {
        title: "Craigslist Web Scraper",
        description:
            "Full-stack web scraping application built with Django and BeautifulSoup for automated data collection.",
        image: "/projects/webscraper/hero.png",
        technologies: ["Python", "Django", "BeautifulSoup"],
        liveUrl: "",
        githubUrl: "https://github.com/navid001/Craigslist-Web-Scraper",
        date: "03/2022",
        caseStudy: {
            overview:
                "A comprehensive web scraping solution that extracts and presents data from Craigslist in a user-friendly interface.",
            challenge:
                "Develop a reliable and efficient system to scrape, store, and display Craigslist data while handling large amounts of information and maintaining performance.",
            solution:
                "Created a full-stack application using Django for the backend and Bootstrap for the frontend. Implemented BeautifulSoup for efficient data scraping with error handling and rate limiting.",
            features: [
                "Advanced search functionality",
                "Real-time data scraping",
                "Customizable search filters",
                "Data export capabilities",
                "User-friendly dashboard",
            ],
            images: [
                "/projects/webscraper/hero.png", // Hero Section screenshot
                "https://picsum.photos/seed/picsum/800", // Search interface screenshot
                "https://picsum.photos/seed/picsum/800", // Results page screenshot
                "https://picsum.photos/seed/picsum/800", // Export functionality screenshot
            ],
            results:
                "Successfully implemented a robust scraping system that handles thousands of listings while maintaining excellent performance and user experience.",
        },
    },
];


export function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="projects" className="py-20 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A selection of my recent work and personal projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="rounded-lg overflow-hidden bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-muted-foreground">
                                            {project.date}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <div className="flex gap-4 justify-around">
                                        {project.liveUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="h-4 w-4 mr-2" />
                                                Source Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Selected project dialog */}
            <SelectedProjectDialog
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
