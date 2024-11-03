"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C", "PHP"],
    },
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Django", "MongoDB", "MySQL"],
    },
    {
        title: "Tools",
        skills: ["Git", "Figma", "Photoshop", "Illustrator", "MS Office"],
    },
];

export function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <section id="skills" className="py-20">
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
                            Skills & Technologies
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive list of my technical skills and
                            expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                            >
                                <h3 className="text-xl font-semibold mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
