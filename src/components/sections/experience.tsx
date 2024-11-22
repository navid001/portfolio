"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
    designation: string;
    duration: string;
    company: string;
    duties: string[];
}
const experiences: Experience[] = [
    {
        designation: "Freelance Developer",
        duration: "06/2024 - Present",
        company: "Self Employed",
        duties: [
            "Design, develop, and deploy dynamic full-stack web applications tailored to client needs, leveraging technologies such as React.js, Next.js, Node.js, and Typescript",
            "Collaborate with clients to gather requirements, create prototypes, and deliver user- centric solutions focusing on scalability and performance",
            "Deliver projects on time, meeting tight deadlines while maintaining code quality and adherence to best practices",
        ],
    },
    {
        designation: "Technical Support Specialist Intern",
        duration: "01/2024 - 03/2024",
        company: "NSU Startups Next",
        duties: [
            "Developed and maintained website features to optimize user experience, ensuring they performed smoothly and enhanced overall site functionality",
            "Collaborated with teams to ensure website content accurately represented organizational goals and was updated regularly for user engagement",
            "Worked with different departments, gathering insights to support technical needs and align website features with departmental strategies",
        ],
    },
];

export function Experience() {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Experience</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            My professional journey in software development
                        </p>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                variants={itemVariants}
                                key={index}
                                className="relative p-6 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-semibold">
                                        {experience.designation}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{experience.duration}</span>
                                        <MapPin className="h-4 w-4 ml-2" />
                                        <span>{experience.company}</span>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    {experience.duties.map((duty, index) => (
                                        <li key={index}>{duty}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
