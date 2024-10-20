"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className={`bg-background shadow-lg py-8 `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Swastik Patil. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
