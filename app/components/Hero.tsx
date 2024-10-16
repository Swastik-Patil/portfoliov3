"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, {`I'm`} Swastik Patil
        </motion.h1>
        <motion.div
          className="text-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Computer Engineering Student",
              2000,
              "Problem Solver",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
      </div>
    </section>
  );
}
