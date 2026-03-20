import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './GhibliTheme.css';

export const GhibliTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    return (
        <div className="ghibli-theme">
            {/* Hand-drawn style animated clouds */}
            <div className="ghibli-cloud ghibli-cloud-1"></div>
            <div className="ghibli-cloud ghibli-cloud-2"></div>

            <div className="ghibli-container">

                <header className="ghibli-header">
                    <h1>{personal.name}</h1>
                    <p>{personal.tagline}</p>
                </header>

                <section className="ghibli-section">
                    <h2 className="ghibli-section-title">My Story</h2>
                    <p className="ghibli-text">
                        {personal.about}
                    </p>

                    <div className="ghibli-skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="ghibli-skill-tag">{skill}</span>
                        ))}
                    </div>
                </section>

                <section className="ghibli-section" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
                    <h2 className="ghibli-section-title" style={{ paddingLeft: '1rem' }}>Magical Creations</h2>
                    <div className="ghibli-projects">
                        {projects.map((project) => (
                            <a href={project.link} key={project.id} className="ghibli-project-card">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="ghibli-skill-tag" style={{ fontSize: '1rem', padding: '0.3rem 0.8rem', background: '#eef5ee', borderColor: '#dceddc' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <footer className="ghibli-footer">
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
