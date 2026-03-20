import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Folder, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import './DesktopOSTheme.css';

export const DesktopOSTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;
    const [windowOpen, setWindowOpen] = useState(true);

    return (
        <div className="os-theme">

            {/* Desktop Icons */}
            <div className="os-desktop-icons">
                <motion.div drag dragMomentum={false} className="os-icon" onDoubleClick={() => setWindowOpen(true)} onClick={() => setWindowOpen(true)}>
                    <div style={{ background: 'transparent', padding: '10px', display: 'inline-block' }}>
                        <Folder size={48} color="#fff" fill="#000080" />
                    </div>
                    <div>My Portfolio</div>
                </motion.div>

                <motion.div drag dragMomentum={false} className="os-icon">
                    <div style={{ background: 'transparent', padding: '10px', display: 'inline-block' }}>
                        <FileText size={48} color="#fff" fill="#fff" />
                    </div>
                    <div>Resume.txt</div>
                </motion.div>
            </div>

            {/* Main Window - Fully Draggable! */}
            {windowOpen && (
                <motion.div
                    className="os-window"
                    drag
                    dragMomentum={false}
                    dragHandle=".os-titlebar"
                    initial={{ scale: 0.8, opacity: 0, x: '-50%' }}
                    animate={{ scale: 1, opacity: 1, x: '-50%' }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    style={{ position: 'absolute', left: '50%' }}
                >
                    <div className="os-titlebar" style={{ cursor: 'grab' }} >
                        <span>My_Portfolio.exe</span>
                        <button className="os-close-btn" onPointerDownCapture={e => e.stopPropagation()} onClick={() => setWindowOpen(false)}>X</button>
                    </div>

                    <div className="os-content" onPointerDownCapture={e => e.stopPropagation()}>
                        <div className="os-hero">
                            <h1>{personal.name}</h1>
                            <p>{personal.role} - {personal.tagline}</p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h2 className="os-section-title">About_Me.txt</h2>
                            <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{personal.about}</p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h2 className="os-section-title">Skills.dll</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {skills.map(s => (
                                    <span key={s} style={{ border: '2px outset #fff', padding: '4px 12px', background: '#ccc', fontSize: '1.1rem' }}>{s}</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h2 className="os-section-title">Projects_Dir</h2>
                            <div className="os-grid">
                                {projects.map((p) => (
                                    <a href={p.link} key={p.id} className="os-card">
                                        <h3>{p.name}</h3>
                                        <p>{p.description}</p>
                                        <div>
                                            {p.techStack.map(t => <span key={t} className="os-tech-tag">{t}</span>)}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 className="os-section-title">Network_Connections</h2>
                            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                                <a href={`mailto:${contact.email}`} style={{ color: '#000080', fontWeight: 'bold', fontSize: '1.2rem' }}>Send_Email</a>
                                <a href={contact.github} style={{ color: '#000080', fontWeight: 'bold', fontSize: '1.2rem' }}>GitHub_Repo</a>
                                <a href={contact.linkedin} style={{ color: '#000080', fontWeight: 'bold', fontSize: '1.2rem' }}>LinkedIn_Profile</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Taskbar */}
            <div className="os-start-menu">
                <button className="os-start-btn">
                    <div style={{ width: '20px', height: '20px', background: 'linear-gradient(135deg, #f00 25%, #0f0 25%, #0f0 50%, #00f 50%, #00f 75%, #ff0 75%, #ff0 100%)', boxShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}></div>
                    Start
                </button>
                {windowOpen && <div className="os-task" onClick={() => setWindowOpen(true)}>My_Portfolio.exe</div>}
            </div>

        </div>
    );
};
