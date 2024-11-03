"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="text-primary"
            >
                <Code2 className="w-16 h-16" />
            </motion.div>
        </div>
    );
}
