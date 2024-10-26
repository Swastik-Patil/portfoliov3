import { motion } from "framer-motion";

const skills = [
  {
    name: "ReactJS",
    iconpath: "/assets/images/React.png",
  },
  {
    name: "Next.js",
    iconpath: "/assets/images/Next.png",
  },

  {
    name: "Git",
    iconpath: "/assets/images/GitLogo.png",
  },
  {
    name: "Firebase",
    iconpath: "/assets/images/firebase.png",
  },
  {
    name: "NodeJS",
    iconpath: "/assets/images/node.png",
  },
  {
    name: "MongoDB",
    iconpath: "/assets/images/MongoDB.png",
  },

  {
    name: "C++",
    iconpath: "/assets/images/C++.png",
  },
  {
    name: "TypeScript",
    iconpath: "/assets/images/Typescript.png",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background to-muted"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div
                className={`${
                  skill.name === "Next.js" ? "bg-white" : "bg-card"
                } text-card-foreground rounded-full p-4 mb-2 shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-110`}
              >
                <img
                  alt={skill.name}
                  src={skill.iconpath}
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
