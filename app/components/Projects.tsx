"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Teacher Guardian Mentoring Session System",
    description:
      "The TGMS System is a web application designed to alleviate the challenges faced by Teacher Guardians in managing student data and fostering effective mentorship.",
    images: [
      "/assets/projectsnaps/Tgms1.png",
      "/assets/projectsnaps/Tgms2.png",
      "/assets/projectsnaps/Tgms3.png",
      "/assets/projectsnaps/Tgms4.png",
      "/assets/projectsnaps/Tgms5.png",
    ],
    tags: ["React", "Firebase", "Youtube API", "Tesseract OCR"],
    liveLink: "https://tgmssystem.web.app/",
    sourceCode: "https://github.com/Swastik-Patil/TGMS-System",
  },
  {
    title: "Shree Vinayak Arts E-Commerce Website",
    description:
      "An e-commerce website for a local business that sells shree ganesha idols. It has features like user authentication, product search, cart management and payment gateway powered by stripe.",
    images: ["/assets/projectsnaps/Ecommerce1.png"],
    tags: ["React", "Node JS", "Mongo DB", "Stripe"],
    liveLink: "https://shrivinayakartsstore.web.app/",
    sourceCode: "#",
  },
  {
    title: "Goverment Polytecnic Pen, Portal",
    description:
      "An online portal enables students to request and receive certificates digitally, eliminating the need to visit the college in person.",
    username: "Username: test@gmail.com",
    password: "Password: test123",
    images: ["/assets/projectsnaps/Section 1.png"],
    tags: ["React", "Firebase", "Chakra UI"],
    liveLink: "https://gov-poly-pen-portal.web.app/",
    sourceCode: "https://github.com/Yash-Dabhade/gppenPortal",
  },
  {
    title: "AICTE Portal for Curriculum - SIH22",
    description:
      "This project fills the gap between the technologies used in the market and the subjects taught in the college.",
    username: "Username: admin@gmail.com",
    password: "Password: admin123",
    images: ["/assets/projectsnaps/AICTE.png"],
    tags: ["React", "Chakra UI", "Firebase"],
    liveLink: "https://aicte-portal.web.app/",
    sourceCode: "https://github.com/Yash-Dabhade/AICTE_PORTAL_SIH22",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "It provides a way of learning Algorithms through visualization which help the students and teachers also.Algorithm Visualizer allows to visualize an algorithm and extend human intellect.",
    images: [
      "/assets/projectsnaps/algo1.png",
      "/assets/projectsnaps/algo2.png",
      "/assets/projectsnaps/algo3.png",
    ],
    tags: ["HTML", "JavaScript", "CSS"],
    liveLink: "https://algovisualizr.web.app/",
    sourceCode: "https://github.com/Swastik-Patil/AlgoVisualizr",
  },
];

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  username?: string;
  password?: string;
  sourceCode: string;
  liveLink: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="relative overflow-hidden min-h-full">
      <CardHeader className="p-0 relative">
        <div className="relative h-48 overflow-hidden">
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div>
          {project.username && (
            <p className="text-muted-foreground">{project.username}</p>
          )}
          {project.password && (
            <p className="text-muted-foreground">{project.password} </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </Button>
        <Button asChild size="sm">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            See Live
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-h-[31rem]"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
