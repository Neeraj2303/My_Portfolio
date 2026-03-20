import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Settings, X } from 'lucide-react';
import './ThemeSwitcher.css';

const themes = [
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'terminal', name: 'Terminal' },
    { id: 'brutalist', name: 'Brutalist' },
    { id: 'os', name: 'Desktop OS' },
    { id: 'glass', name: 'Glassmorphism' },
    { id: 'ghibli', name: 'Studio Ghibli' },
];

export const ThemeSwitcher = () => {
    const { currentTheme, setCurrentTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="theme-switcher-container">
            <button
                className="theme-switcher-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle theme menu"
            >
                {isOpen ? <X size={24} /> : <Settings size={24} />}
            </button>

            {isOpen && (
                <div className="theme-switcher-menu">
                    <h3>Select Experience</h3>
                    <div className="theme-options">
                        {themes.map((theme) => (
                            <button
                                key={theme.id}
                                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentTheme(theme.id);
                                    setIsOpen(false);
                                }}
                            >
                                {theme.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
