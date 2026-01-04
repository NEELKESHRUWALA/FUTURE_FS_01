import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "0",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              textAlign: "left",
              flexWrap: "wrap-reverse", // Ensure stacking on mobile
            }}
          >
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                Hello, I'm
              </h2>
              <h1
                style={{
                  fontSize: "4rem",
                  marginBottom: "1rem",
                  background: "linear-gradient(to right, #fff, #a1a1aa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                Neel Keshruwala
              </h1>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                Full Stack Web Developer
              </h3>
              <p
                style={{
                  maxWidth: "600px",
                  color: "var(--text-secondary)",
                  fontSize: "1.1rem",
                  marginBottom: "2rem",
                }}
              >
                I build exceptional digital experiences that differ, using the
                MERN stack. Focused on performance, aesthetics, and user
                experience.
              </p>
            </div>

            <div
              style={{
                width: "280px",
                height: "280px", // Square for perfect circle
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid var(--accent)",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                animation: "float 6s ease-in-out infinite",
                flexShrink: 0,
              }}
            >
              <img
                src={profileImg}
                alt="Neel Keshruwala"
                style={{
                  width: "100%",
                  height: "150%",
                  objectFit: "cover",
                  objectPosition: "center", // Focus on face
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  background: "var(--accent)",
                  color: "white",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: 600,
                }}
              >
                View Work <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  background: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50px",
                  fontWeight: 600,
                }}
              >
                Contact Me
              </button>
            </Link>
          </div>

          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <a
              href="https://github.com/NEELKESHRUWALA"
              className="social-icon"
              style={{ color: "var(--text-secondary)" }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/neel-keshruwala-41737526a"
              className="social-icon"
              style={{ color: "var(--text-secondary)" }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=keshruwalaneel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ color: "var(--text-secondary)" }}
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
