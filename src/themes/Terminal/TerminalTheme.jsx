import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MatrixRain } from './MatrixRain';
import './TerminalTheme.css';

const AsciiArt = () => (
    <div className="term-ascii">
        {`
 ___  ___      _     ___         _    __     _ _      
 |  \\/  |     | |   / _ \\       | |  / _|   | (_)     
 | .  . |_   _| |  / /_\\ \\_ __  | |_| |_ ___| |_  ___ 
 | |\\/| | | | | |  |  _  | '_ \\ | __|  _/ _ \\ | |/ _ \\
 | |  | | |_| | |__| | | | |_) || |_| ||  __/ | | (_) |
 \\_|  |_/\\__, \\_____\\_| |_/ .__/  \\__|_| \\___|_|_|\\___/
          __/ |           | |                          
         |___/            |_|                          
`}
    </div>
);

export const TerminalTheme = () => {
    const { personal, skills, projects, contact } = portfolioData;

    const [bootSeq, setBootSeq] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setBootSeq(current);
            if (current >= 5) clearInterval(interval);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="terminal-theme">
            <MatrixRain />
            <div className="term-container">
                {bootSeq >= 0 && <div className="term-line">Initializing system... [OK]</div>}
                {bootSeq >= 1 && <div className="term-line">Loading profile data... [OK]</div>}
                {bootSeq >= 2 && <div className="term-line">Mounting UI modules... [OK]</div>}

                {bootSeq >= 3 && (
                    <div style={{ marginTop: '2rem' }}>
                        <div className="term-line">
                            <span className="term-prompt">guest@portfolio:~$</span>
                            <span className="term-command">./profile.sh</span>
                        </div>

                        <div className="term-output">
                            <AsciiArt />
                            <div className="term-line"><strong>NAME:</strong> {personal.name}</div>
                            <div className="term-line"><strong>ROLE:</strong> {personal.role}</div>
                            <div className="term-line"><strong>STATUS:</strong> {personal.tagline}</div>
                        </div>
                    </div>
                )}

                {bootSeq >= 4 && (
                    <>
                        <div className="term-line">
                            <span className="term-prompt">guest@portfolio:~$</span>
                            <span className="term-command">cat about.txt</span>
                        </div>
                        <div className="term-output">
                            {personal.about}
                        </div>

                        <div className="term-line">
                            <span className="term-prompt">guest@portfolio:~$</span>
                            <span className="term-command">ls ./skills</span>
                        </div>
                        <div className="term-output" style={{ color: '#ccc' }}>
                            {skills.join('  |  ')}
                        </div>

                        <div className="term-line">
                            <span className="term-prompt">guest@portfolio:~$</span>
                            <span className="term-command">ls -l ./projects</span>
                        </div>
                        <div className="term-output">
                            {projects.map(p => (
                                <div key={p.id} className="term-project">
                                    <div>drwxr-xr-x  <a href={p.link}>[{p.name}]</a></div>
                                    <div style={{ paddingLeft: '2rem', color: '#aaa' }}>↳ {p.description}</div>
                                    <div style={{ paddingLeft: '2rem', color: '#666' }}>↳ [{p.techStack.join(', ')}]</div>
                                </div>
                            ))}
                        </div>

                        <div className="term-line">
                            <span className="term-prompt">guest@portfolio:~$</span>
                            <span className="term-command">netstat -a | grep contact</span>
                        </div>
                        <div className="term-output">
                            <div>EMAIL     <a href={`mailto:${contact.email}`} className="term-command">{contact.email}</a></div>
                            <div>GITHUB    <a href={contact.github} target="_blank" rel="noreferrer" className="term-command">{contact.github}</a></div>
                            <div>LINKEDIN  <a href={contact.linkedin} target="_blank" rel="noreferrer" className="term-command">{contact.linkedin}</a></div>
                        </div>
                    </>
                )}

                {bootSeq >= 5 && (
                    <div className="term-line" style={{ marginTop: '2rem' }}>
                        <span className="term-prompt">guest@portfolio:~$</span>
                        <span className="term-cursor"></span>
                    </div>
                )}
            </div>
        </div>
    );
};
