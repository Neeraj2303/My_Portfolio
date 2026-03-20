import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio_theme');
        return saved || 'minimalist'; // default to minimalist theme
    });

    useEffect(() => {
        localStorage.setItem('portfolio_theme', currentTheme);
        // Set a global CSS class on body just in case some themes want global reset tweaks
        document.body.className = `theme-${currentTheme}`;
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
