"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database } from "lucide-react";

export function About() {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="about" className="py-20 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-4"
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            I&apos;m a passionate full-stack developer based in
                            Bangladesh, with expertise in modern web
                            technologies and a keen eye for creating exceptional
                            digital experiences.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors">
                            <Code2 className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Frontend Development
                            </h3>
                            <p className="text-muted-foreground">
                                Crafting responsive and intuitive user
                                interfaces using React, Next.js, Typescript and modern CSS
                                frameworks.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors">
                            <Server className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Backend Development
                            </h3>
                            <p className="text-muted-foreground">
                                Building robust server-side applications with
                                Node.js, Express, Typescript and MongoDB.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors">
                            <Database className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                Full Stack Development
                            </h3>
                            <p className="text-muted-foreground">
                                Creating end-to-end solutions with seamless
                                integration between frontend and backend
                                systems.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
