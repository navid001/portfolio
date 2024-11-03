"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Lorem ipsum odor",
        role: "Lorem ipsum odor",
        image: "https://picsum.photos/seed/picsum/200",
        content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus litora dictumst sociosqu nulla eros inceptos iaculis scelerisque torquent. Porta dapibus adipiscing sodales ipsum hendrerit, dapibus leo nascetur.",
    },
];

export function Testimonials() {
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
        <section id="testimonials" className="py-20 bg-secondary/5">
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
                            Client Testimonials
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            What others say about working with me
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-lg bg-background border hover:border-primary/50 transition-colors relative"
                            >
                                <Quote className="absolute top-4 right-4 h-6 w-6 text-primary/20" />
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
