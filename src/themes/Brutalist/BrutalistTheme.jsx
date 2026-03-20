import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import './BrutalistTheme.css';

export const BrutalistTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const getMarqueeText = () => {
        return Array(10).fill(`${personal.role} /// `).join('');
    };

    return (
        <div className="brutalist-theme">
            {/* Custom Global Cursor - Portaled to avoid transform containing blocks */}
            {createPortal(
                <div
                    className="bru-cursor"
                    style={{ left: mousePos.x, top: mousePos.y }}
                >
                    <div className="bru-cursor-h"></div>
                    <div className="bru-cursor-v"></div>
                </div>,
                document.body
            )}

            <div className="brutalist-container">

                <header className="bru-hero">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                    >
                        {personal.name.toUpperCase()}
                    </motion.h1>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        {personal.tagline.toUpperCase()}
                    </motion.p>

                    <div className="bru-marquee">
                        <div className="bru-marquee-content">
                            {getMarqueeText()}
                        </div>
                    </div>
                </header>

                <section style={{ paddingTop: '6rem' }}>
                    <h2 className="bru-section-title">Warning: About Me</h2>
                    <p className="bru-about">{personal.about}</p>

                    <div className="bru-skills">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bru-skill-tag"
                                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5, backgroundColor: '#ffea00' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="bru-section-title">The Output</h2>
                    <div className="bru-projects">
                        {projects.map((project, idx) => (
                            <motion.a
                                href={project.link}
                                key={project.id}
                                className="bru-card"
                                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2, x: 10, y: -10 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            >
                                <h3>{project.name.toUpperCase()}</h3>
                                <p>{project.description}</p>
                                <div className="bru-card-tech">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} style={{
                                            background: '#fff',
                                            color: '#000',
                                            padding: '0.25rem 0.75rem',
                                            border: '3px solid currentcolor',
                                            fontWeight: '900',
                                            fontSize: '1rem',
                                            textTransform: 'uppercase'
                                        }}>{tech}</span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                <footer className="bru-footer">
                    <div style={{ fontSize: '3rem', fontWeight: 900 }}>© {new Date().getFullYear()}</div>
                    <div className="bru-socials">
                        <a href={`mailto:${contact.email}`} className="bru-social">Email</a>
                        <a href={contact.github} target="_blank" rel="noreferrer" className="bru-social">GitHub</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="bru-social">LinkedIn</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};
