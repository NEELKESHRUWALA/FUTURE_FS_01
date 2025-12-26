import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        { title: 'Java Certification', org: 'Agile Infoways', date: '2023' },
        { title: 'React Certification', org: 'Agile Infoways', date: '2023' },
        { title: 'MERN Stack Certification', org: 'Simplilearn', date: '2024' },
        { title: 'Open Source Contributor', org: 'GitHub', date: 'Ongoing' }
    ];

    return (
        <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Achievements</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '15px' }}
                        >
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.org} | {item.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
