import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: "2rem", borderRadius: "20px" }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
              }}
            >
              I am a passionate Full Stack Developer with a strong foundation in
              the MERN stack. I love building scalable applications and solving
              complex problems with clean, efficient code.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              With a keen eye for design and a drive for perfection, I ensure
              that every project I work on not only functions flawlessly but
              also looks stunning.
            </p>
          </motion.div>

          {/* Placeholder for Image or Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="glass"
              style={{
                padding: "1rem",
                borderRadius: "20px",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "4px solid var(--accent)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <img
                src={profileImg}
                alt="Neel Keshruwala"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
