"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

export function Contact() {
    const { toast } = useToast();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const formRef = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
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

    const validateForm = () => {
        const newErrors = {
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
        };
        let isValid = true;

        if (!formRef.current?.user_name.value.trim()) {
            newErrors.user_name = "This is a required field.";
            isValid = false;
        }
        if (!formRef.current?.user_email.value.trim()) {
            newErrors.user_email = "This is a required field.";
            isValid = false;
        }
        if (!formRef.current?.subject.value.trim()) {
            newErrors.subject = "This is a required field.";
            isValid = false;
        }
        if (!formRef.current?.message.value.trim()) {
            newErrors.message = "This is a required field.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch(
                    "https://formspree.io/f/manyevvr",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            user_name: formRef.current?.user_name.value,
                            user_email: formRef.current?.user_email.value,
                            subject: formRef.current?.subject.value,
                            message: formRef.current?.message.value,
                        }),
                    }
                );

                if (response.ok) {
                    toast({
                        title: "Message sent!",
                        description:
                            "Thank you for your message. I'll get back to you soon.",
                    });
                    formRef.current?.reset();
                } else {
                    throw new Error("Failed to send message");
                }
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again.",
                });
                console.error("Email send error:", error);
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-secondary/5">
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
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Have a question or want to work together? Feel free
                            to reach out!
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <Input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full"
                                />
                                {errors.user_name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.user_name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full"
                                />
                                {errors.user_email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.user_email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className="w-full"
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className="w-full min-h-[150px]"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
