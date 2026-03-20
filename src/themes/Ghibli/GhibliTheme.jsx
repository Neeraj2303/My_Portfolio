import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import './GhibliTheme.css';

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
            {/* Hand-drawn style animated clouds with Parallax Mouse effect */}
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

                <footer className="ghibli-footer" style={{ position: 'relative', zIndex: 10 }}>
                    <p style={{ fontSize: '1.4rem' }}>May the wind guide your path. © {new Date().getFullYear()}</p>
                    <div className="ghibli-socials">
                        <a href={`mailto:${contact.email}`}>Owl Mail (Email)</a>
                        <a href={contact.github} target="_blank" rel="noreferrer">Scrolls (GitHub)</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer">Guild (LinkedIn)</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};
