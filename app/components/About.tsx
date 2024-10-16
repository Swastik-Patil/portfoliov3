"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              width={400}
              height={400}
              src="/assets/images/img.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4 text-justify">
              {`I'm `}a passionate Software Developer and Computer Engineering
              student with a keen interest in web development, app development
              and also in competative programming. Currently pursuing my{" "}
              {`Bachelor's`} degree, {`I'm`} constantly exploring new
              technologies and pushing the boundaries of {`what's`} possible in
              software engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
