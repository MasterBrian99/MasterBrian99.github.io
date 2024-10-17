"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Boxes } from "../ui/background-boxes";

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Developer", "Creator", "Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    enter: (direction: number) => ({ x: direction * 100, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({ x: direction * -100, opacity: 0 }),
  };

  return (
    <section className="min-h-screen dark:text-white text-gray-600 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-7xl sm:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tighter"
          variants={itemVariants}
        >
          Hello I'm a,
        </motion.h1>
        <div className="h-24 sm:h-32 lg:h-40 mb-8 relative overflow-hidden">
          <AnimatePresence
            initial={false}
            mode="wait"
            custom={currentTitleIndex}
          >
            <motion.div
              key={currentTitleIndex}
              variants={titleVariants}
              custom={currentTitleIndex}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-700 dark:text-blue-400">
                {titles[currentTitleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl dark:text-gray-300 text-gray-700 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Brings ideas to life with code!
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 inline-block"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
