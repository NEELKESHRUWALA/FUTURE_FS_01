import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured shopping cart application with payment integration and admin dashboard.',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            links: { github: 'https://github.com/NEELKESHRUWALA' }
        },
        {
            title: 'Task Management App',
            description: 'Real-time kanban board for project management with team collaboration features.',
            stack: ['React', 'Firebase', 'Material UI'],
            links: { github: 'https://github.com/NEELKESHRUWALA' }
        },
        {
            title: 'Weather Dashboard',
            description: 'Interactive weather application providing detailed forecasts and historical data.',
            stack: ['React', 'OpenWeatherMap API', 'Chart.js'],
            links: { github: 'https://github.com/NEELKESHRUWALA' }
        },
        {
            title: 'QR based Restaurant Ordering System',
            description: 'An interactive restaurant ordering system with QR code generation and payment integration.',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            links: { github: 'https://github.com/NEELKESHRUWALA' }
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.stack.map((tech, idx) => (
                                    <span key={idx} style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>#{tech}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.links.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}><Github size={20} /> Code</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
