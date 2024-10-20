import React from "react";
import { Linkedin, Github, File } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex space-x-8">
      <a
        href="https://www.linkedin.com/in/swastik-patil-976177235/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="linkedin"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://github.com/Swastik-Patil"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="github"
      >
        <Github size={24} />
      </a>
      <a
        href="https://drive.google.com/file/d/1pIEkGbWrTg9TLzT1haOqGeYJU0cVrwuF/view?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="file"
      >
        <File size={24} />
      </a>
    </div>
  );
};

export default Socials;
