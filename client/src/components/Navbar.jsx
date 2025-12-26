import React, { useState, useEffect } from 'react'; // React imported for older versions compatibility just in case, though Vite handles it.
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`} style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            height: 'var(--nav-height)', display: 'flex', alignItems: 'center',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                    <Code2 size={32} color="var(--accent)" />
                    <span>Neel.Dev</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
                    {/* Note: I will use media queries in CSS or inline logic for responsiveness if not using Tailwind. 
                Since "No Tailwind", I should use a CSS module or standard CSS classes. 
                I will use inline styles for structural quickness here but rely on 'desktop-menu' class in index.css or add a <style> block or just allow `display: none` by default and show on desktop.
                Actually, let's use the className and add media query to index.css or just inline style with window width? No, that's bad.
                Better: I'll use standard classes defined in index.css or just simple flex logic.
             */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            style={{ cursor: 'pointer', fontWeight: 500 }}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: 'var(--nav-height)',
                        left: 0,
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column', // fixed typo flex-col
                        gap: '1.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.2rem', cursor: 'pointer', textAlign: 'center' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}

            {/* CSS for responsiveness injected here for simplicity or added to index.css earlier */}
            <style>{`
        @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
            .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block !important; cursor: pointer; }
        }
        .nav-link:hover { color: var(--accent); }
      `}</style>
        </nav>
    );
};

export default Navbar;
