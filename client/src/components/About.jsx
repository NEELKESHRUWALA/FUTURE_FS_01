import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '20px' }}
                    >
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            I am a passionate Full Stack Developer with a strong foundation in the MERN stack.
                            I love building scalable applications and solving complex problems with clean, efficient code.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            With a keen eye for design and a drive for perfection, I ensure that every project I work on
                            not only functions flawlessly but also looks stunning.
                        </p>
                    </motion.div>

                    {/* Placeholder for Image or Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                    >
                        {[
                            { number: '0', label: 'Years Experience' },
                            { number: '10+', label: 'Projects Completed' },
                            { number: '5+', label: 'Happy Clients' },
                            { number: '24/7', label: 'Support' }
                        ].map((stat, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '15px' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{stat.number}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
