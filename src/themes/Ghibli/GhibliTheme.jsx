import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import './GhibliTheme.css';

const TotoroSVG = () => (
    <svg width="150" height="180" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: '0px', right: '5%', zIndex: 5, pointerEvents: 'none' }}>
        {/* Ears */}
        <path d="M 30,50 Q 20,10 40,20 Q 50,30 40,50 Z" fill="#758A80" />
        <path d="M 90,50 Q 100,10 80,20 Q 70,30 80,50 Z" fill="#758A80" />
        {/* Body */}
        <ellipse cx="60" cy="100" rx="45" ry="55" fill="#758A80" />
        {/* Belly */}
        <ellipse cx="60" cy="110" rx="35" ry="40" fill="#E8F1DC" />
        {/* Belly Marks */}
        <path d="M 40,90 Q 45,80 50,90" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 60,85 Q 65,75 70,85" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 80,90 Q 85,80 90,90" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 35,110 Q 40,100 45,110" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 55,105 Q 60,95 65,105" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 75,105 Q 80,95 85,105" stroke="#758A80" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="45" cy="65" r="6" fill="#FFF" />
        <circle cx="45" cy="65" r="2.5" fill="#000" />
        <circle cx="75" cy="65" r="6" fill="#FFF" />
        <circle cx="75" cy="65" r="2.5" fill="#000" />
        {/* Nose */}
        <ellipse cx="60" cy="72" rx="4" ry="2.5" fill="#000" />
        {/* Whiskers */}
        <line x1="12" y1="65" x2="30" y2="70" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="75" x2="28" y2="76" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="108" y1="65" x2="90" y2="70" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="112" y1="75" x2="92" y2="76" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        {/* Leaf on head */}
        <path d="M 60,35 Q 45,20 70,15 Q 85,25 60,35 Z" fill="#6DAA60" />
    </svg>
);

export const GhibliTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="ghibli-theme">
            <motion.div
                className="ghibli-cloud ghibli-cloud-1"
                animate={{ x: mousePos.x * -2, y: mousePos.y * -2 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            ></motion.div>
            <motion.div
                className="ghibli-cloud ghibli-cloud-2"
                animate={{ x: mousePos.x * -4, y: mousePos.y * -4 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            ></motion.div>

            <div className="ghibli-container">

                <motion.header
                    className="ghibli-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>{personal.name}</h1>
                    <p>{personal.tagline}</p>
                </motion.header>

                <section className="ghibli-section" style={{ position: 'relative', zIndex: 10 }}>
                    <h2 className="ghibli-section-title">My Story</h2>
                    <p className="ghibli-text">
                        {personal.about}
                    </p>

                    <div className="ghibli-skills">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="ghibli-skill-tag"
                                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </section>

                <section className="ghibli-section" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0, position: 'relative', zIndex: 10 }}>
                    <h2 className="ghibli-section-title" style={{ paddingLeft: '1rem' }}>Magical Creations</h2>
                    <div className="ghibli-projects">
                        {projects.map((project) => (
                            <motion.a
                                href={project.link}
                                key={project.id}
                                className="ghibli-project-card"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="ghibli-skill-tag" style={{ fontSize: '1rem', padding: '0.3rem 0.8rem', background: '#eef5ee', borderColor: '#dceddc' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                <footer className="ghibli-footer" style={{ position: 'relative', zIndex: 10, minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem' }}>
                    <p style={{ fontSize: '1.4rem' }}>May the wind guide your path. © {new Date().getFullYear()}</p>
                    <div className="ghibli-socials">
                        <a href={`mailto:${contact.email}`}>Owl Mail (Email)</a>
                        <a href={contact.github} target="_blank" rel="noreferrer">Scrolls (GitHub)</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer">Guild (LinkedIn)</a>
                    </div>
                    <TotoroSVG />
                </footer>

            </div>
        </div>
    );
};
