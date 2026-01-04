import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          desc: "The standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          desc: "Style sheet language used for describing the presentation of a document written in HTML.",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          desc: "High-level, interpreted programming language that conforms to the ECMAScript specification.",
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          desc: "A JavaScript library for building user interfaces, maintained by Meta.",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          desc: "A Predictable State Container for JS Apps, often used with React.",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          desc: "A utility-first CSS framework for rapidly building custom designs.",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          desc: "The React Framework for the Web, enabling server-side rendering and static site generation.",
        },
        {
          name: "Framer Motion",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
          desc: "A production-ready motion library for React that makes animations easy.",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          desc: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          desc: "Fast, unopinionated, minimalist web framework for Node.js.",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          desc: "NoSQL database program, using JSON-like documents with optional schemas.",
        },
        {
          name: "REST APIs",
          icon: null,
          desc: "Architectural style for an application program interface (API) that uses HTTP requests.",
        },
        {
          name: "Authentication",
          icon: null,
          desc: "Implementing secure login systems using JWT, OAuth, and bcrypt.",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          desc: "High-level, general-purpose programming language known for its readability.",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          desc: "Domain-specific language used in programming and designing for managing data held in a RDBMS.",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          desc: "Distributed version control system for tracking changes in source code.",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          desc: "Internet hosting for software development and version control using Git.",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          desc: "Source-code editor made by Microsoft with support for debugging, syntax highlighting, etc.",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          desc: "API platform for building and using APIs.",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
          desc: "Build tool that aims to provide a faster and leaner development experience for modern web projects.",
        },
        {
          name: "NPM",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
          desc: "Package manager for the JavaScript programming language.",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          desc: "Platform for developing, shipping, and running applications in containers.",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass"
              style={{ padding: "2rem", borderRadius: "15px" }}
            >
              <h3
                style={{
                  marginBottom: "1.5rem",
                  color: "var(--accent)",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "0.5rem",
                }}
              >
                {skillGroup.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {skillGroup.items.map((skill, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                    onClick={() => setSelectedSkill(skill)}
                    style={{
                      padding: "0.8rem 1.2rem",
                      background:
                        "linear-gradient(145deg, var(--bg-secondary), var(--bg-primary))",
                      color: "var(--text-primary)",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      border: "none",
                      borderBottom: "4px solid var(--accent)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      cursor: "pointer",
                      transition: "all 0.1s",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                    {skill.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(5px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass"
              style={{
                background: "var(--bg-secondary)",
                padding: "2.5rem",
                borderRadius: "20px",
                maxWidth: "500px",
                width: "100%",
                border: "1px solid var(--accent)",
                position: "relative",
                boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)",
              }}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "transparent",
                  color: "var(--text-secondary)",
                  padding: "5px",
                }}
              >
                <X size={24} />
              </button>

              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                  borderBottom: "2px solid rgba(255,255,255,0.1)",
                  paddingBottom: "1rem",
                  display: "inline-block",
                }}
              >
                {selectedSkill.name}
              </h3>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  color: "var(--text-primary)",
                }}
              >
                {selectedSkill.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
