import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './MinimalistTheme.css';

export const MinimalistTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className="minimalist-theme">
            <div className="minimalist-container">

                <motion.header className="min-hero" initial="hidden" animate="visible" variants={fadeUp}>
                    <h1>{personal.name}</h1>
                    <p>{personal.tagline}</p>
                </motion.header>

                <motion.section className="min-section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2>About</h2>
                    <p style={{ maxWidth: '750px', fontSize: '1.2rem', color: '#444' }}>
                        {personal.about}
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Skills</h3>
                        <div className="min-tech-stack">
                            {skills.map((skill, index) => (
                                <span key={index} className="min-tech-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section className="min-section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2>Selected Work</h2>
                    <div className="min-projects">
                        {projects.map((project, idx) => (
                            <Tilt key={project.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} style={{ display: 'flex', flexDirection: 'column' }}>
                                <a href={project.link} className="min-project-card" style={{ textDecoration: 'none', color: 'inherit', height: '100%', flexGrow: 1 }}>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="min-tech-stack">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="min-tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </a>
                            </Tilt>
                        ))}
                    </div>
                </motion.section>

                <motion.footer className="min-footer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div>© {new Date().getFullYear()} {personal.name}</div>
                    <div className="min-socials">
                        <a href={`mailto:${contact.email}`}>Email</a>
                        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </motion.footer>

            </div>
        </div>
    );
};
