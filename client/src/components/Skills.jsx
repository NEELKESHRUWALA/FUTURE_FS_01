import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind/Vanilla CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'NPM'] }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass"
                            style={{ padding: '2rem', borderRadius: '15px' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                {skillGroup.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {skillGroup.items.map((item, idx) => (
                                    <span key={idx} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
