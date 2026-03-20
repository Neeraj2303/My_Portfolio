import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './GlassTheme.css';

export const GlassTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <div className="glass-theme">
            {/* Background Blobs */}
            <div className="glass-bg-blob glass-blob-1"></div>
            <div className="glass-bg-blob glass-blob-2"></div>
            <div className="glass-bg-blob glass-blob-3"></div>

            <div className="glass-container">

                <motion.header className="glass-card glass-hero" initial="hidden" animate="visible" variants={fadeUp}>
                    <h1>{personal.name}</h1>
                    <p>{personal.role}</p>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.3rem', opacity: 0.8, maxWidth: '700px', margin: '1.5rem auto 0' }}>{personal.tagline}</p>
                </motion.header>

                <motion.section className="glass-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                    <h2 className="glass-section-title">About Me</h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 300, color: '#f1f5f9' }}>
                        {personal.about}
                    </p>

                    <div style={{ marginTop: '4rem' }}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', fontWeight: 400, opacity: 0.9 }}>Technical Arsenal</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {skills.map((skill, index) => (
                                <motion.span key={index} className="glass-skill-tag" whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}>
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section className="glass-card" style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: '0' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="glass-section-title">Selected Projects</h2>
                    <div className="glass-grid">
                        {projects.map((project, idx) => (
                            <Tilt key={project.id} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="all" style={{ display: 'flex', flexDirection: 'column' }}>
                                <a href={project.link} className="glass-project-card" style={{ flexGrow: 1, height: '100%' }}>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="glass-skill-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>{tech}</span>
                                        ))}
                                    </div>
                                </a>
                            </Tilt>
                        ))}
                    </div>
                </motion.section>

                <motion.footer className="glass-card" style={{ textAlign: 'center', padding: '4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Let's Connect</h2>
                    <p style={{ color: '#cbd5e1', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: 300 }}>Always open to discussing new projects and creative ideas.</p>

                    <div className="glass-socials">
                        <a href={`mailto:${contact.email}`}>Email</a>
                        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </motion.footer>

            </div>
        </div>
    );
};
