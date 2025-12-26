import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Talk</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently available for freelance projects and internships.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=keshruwalaneel@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <Mail color="var(--accent)" />
                                <span>keshruwalaneel@gmail.com</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <Phone color="var(--accent)" />
                                <span>+91 9408063330</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <MapPin color="var(--accent)" />
                                <span>Gujarat, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '20px' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)',
                                        color: 'white', outline: 'none'
                                    }}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)',
                                        color: 'white', outline: 'none'
                                    }}
                                    placeholder="keshruwalaneel@gmail.com"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)',
                                        color: 'white', outline: 'none', resize: 'none'
                                    }}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                style={{
                                    padding: '1rem', background: 'var(--accent)', color: 'white',
                                    borderRadius: '10px', fontWeight: 'bold', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                                    opacity: status === 'loading' ? 0.7 : 1
                                }}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>

                            {status === 'success' && <p style={{ color: 'green', textAlign: 'center' }}>Message sent successfully!</p>}
                            {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>Failed to send message. Try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
