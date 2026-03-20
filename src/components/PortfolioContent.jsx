import React from 'react';
import { useTheme } from '../context/ThemeContext';

import { MinimalistTheme } from '../themes/Minimalist/MinimalistTheme';
import { TerminalTheme } from '../themes/Terminal/TerminalTheme';
import { BrutalistTheme } from '../themes/Brutalist/BrutalistTheme';
import { DesktopOSTheme } from '../themes/DesktopOS/DesktopOSTheme';
import { GlassTheme } from '../themes/Glassmorphism/GlassTheme';
import { GhibliTheme } from '../themes/Ghibli/GhibliTheme';

export const PortfolioContent = () => {
    const { currentTheme } = useTheme();

    switch (currentTheme) {
        case 'terminal':
            return <TerminalTheme />;
        case 'brutalist':
            return <BrutalistTheme />;
        case 'os':
            return <DesktopOSTheme />;
        case 'glass':
            return <GlassTheme />;
        case 'ghibli':
            return <GhibliTheme />;
        case 'minimalist':
        default:
            return <MinimalistTheme />;
    }
};
