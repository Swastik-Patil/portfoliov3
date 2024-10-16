"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Get In Touch
        </h2>
        <form
          action={"https://formsubmit.co/2103cd8425e2b6b435b9a13234b46f4a"}
          method="POST"
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
