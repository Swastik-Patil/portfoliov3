import React from "react";
import { Linkedin, Github, File } from "lucide-react";

const Socials = ({ sz }: { sz: number }) => {
  return (
    <div className="flex space-x-8">
      <a
        href="https://www.linkedin.com/in/swastik-patil-976177235/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="linkedin"
      >
        <Linkedin size={sz} />
      </a>
      <a
        href="https://github.com/Swastik-Patil"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="github"
      >
        <Github size={sz} />
      </a>
      <a
        href="https://drive.google.com/file/d/1pIEkGbWrTg9TLzT1haOqGeYJU0cVrwuF/view?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="file"
      >
        <File size={sz} />
      </a>
    </div>
  );
};

export default Socials;
