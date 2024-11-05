"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export function Hero() {
  return (
      <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
          {/* animated background */}
          <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                  <motion.div
                      key={i}
                      className="absolute h-2 w-2 bg-primary rounded-full opacity-30"
                      style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                          x: [0, Math.random() * 50 - 25, 0],
                          y: [0, Math.random() * 50 - 25, 0],
                          scale: [1, 1.2, 1],
                      }}
                      transition={{
                          duration: 8 + Math.random() * 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                      }}
                  />
              ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
              >
                  <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-32 h-32 rounded-full mx-auto flex items-center justify-center"
                  >
                      <img src="/LogoBg.png" alt="NA" />
                  </motion.div>

                  <div className="space-y-4">
                      <motion.h1
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-gradient font-Montserrat"
                          style={{
                              background:
                                  "linear-gradient(to right, #4b9eda, #0b3fb3)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                          }}
                      >
                          Hi, I’m Navid Alvi Ahsan
                      </motion.h1>
                      <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                          <span className="text-primary font-semibold">
                              Full-stack Developer{" "}
                          </span>
                          based in{" "}
                          <span className="text-primary font-semibold">
                              Bangladesh
                          </span>
                          , crafting exceptional digital experiences
                      </p>
                  </div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                      <Button size="lg" asChild>
                          <ScrollLink
                              to="contact"
                              smooth={true}
                              duration={500}
                              className="cursor-pointer"
                          >
                              Get in Touch
                          </ScrollLink>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                          <a href="/Navid Alvi Ahsan.pdf" download>
                              Download Resume
                              <Download className="ml-2 h-4 w-4" />
                          </a>
                      </Button>
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-12"
                  >
                      <ScrollLink
                          to="about"
                          smooth={true}
                          duration={500}
                          className="cursor-pointer"
                      >
                          <motion.div
                              animate={{ y: [0, 10, 0] }}
                              transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                              }}
                              className="text-muted-foreground hover:text-primary transition-colors"
                          >
                              <ArrowDown className="h-6 w-6 mx-auto" />
                          </motion.div>
                      </ScrollLink>
                  </motion.div>
              </motion.div>
          </div>
      </section>
  );
}