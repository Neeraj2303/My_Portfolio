import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './MinimalistTheme.css';

export const MinimalistTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    return (
        <div className="minimalist-theme">
            <div className="minimalist-container">

                <header className="min-hero">
                    <h1>{personal.name}</h1>
                    <p>{personal.tagline}</p>
                </header>

                <section className="min-section">
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
                </section>

                <section className="min-section">
                    <h2>Selected Work</h2>
                    <div className="min-projects">
                        {projects.map(project => (
                            <a href={project.link} key={project.id} className="min-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="min-tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="min-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <footer className="min-footer">
                    <div>© {new Date().getFullYear()} {personal.name}</div>
                    <div className="min-socials">
                        <a href={`mailto:${contact.email}`}>Email</a>
                        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};
