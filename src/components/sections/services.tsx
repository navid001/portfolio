"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Layout,
    ShoppingCart,
    Code2,
    Globe,
    Database,
    Smartphone,
} from "lucide-react";

const services = [
    {
        icon: Layout,
        title: "Landing Pages",
        description:
            "Custom-designed, high-converting landing pages optimized for your business goals and target audience.",
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Fast Loading",
            "Analytics Integration",
        ],
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
            "Full-featured online stores with secure payment processing and inventory management.",
        features: [
            "Payment Integration",
            "Inventory System",
            "Order Management",
            "Shopping Cart",
        ],
    },
    {
        icon: Database,
        title: "Full-Stack Applications",
        description:
            "End-to-end web applications with robust backend systems and intuitive frontend interfaces.",
        features: [
            "API Development",
            "Database Design",
            "Authentication",
            "Cloud Deployment",
        ],
    },
    {
        icon: Globe,
        title: "Web Applications",
        description:
            "Scalable and secure web applications tailored to your specific business needs.",
        features: [
            "Custom Features",
            "User Management",
            "Data Security",
            "API Integration",
        ],
    },
    {
        icon: Code2,
        title: "Frontend Development",
        description:
            "Modern, responsive frontend solutions using the latest technologies and best practices.",
        features: [
            "Modern UI/UX",
            "Performance",
            "Accessibility",
            "Cross-browser Support",
        ],
    },
    {
        icon: Smartphone,
        title: "Progressive Web Apps",
        description:
            "Mobile-first applications that work offline and provide native app-like experience.",
        features: [
            "Offline Support",
            "Push Notifications",
            "App-like Experience",
            "Cross-platform",
        ],
    },
];

export function Services() {
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
        <section id="services" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Services</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive web development solutions tailored to
                            your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-6 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
                                >
                                    <Icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center text-sm text-muted-foreground"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
