import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './BrutalistTheme.css';

export const BrutalistTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    const getMarqueeText = () => {
        return Array(10).fill(`${personal.role} /// `).join('');
    };

    return (
        <div className="brutalist-theme">
            <div className="brutalist-container">

                <header className="bru-hero">
                    <h1>{personal.name.toUpperCase()}</h1>
                    <p>{personal.tagline.toUpperCase()}</p>

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
                            <div key={index} className="bru-skill-tag">{skill}</div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="bru-section-title">The Output</h2>
                    <div className="bru-projects">
                        {projects.map((project) => (
                            <a href={project.link} key={project.id} className="bru-card">
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
                            </a>
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
