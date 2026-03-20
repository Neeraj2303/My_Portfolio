import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

import { MinimalistTheme } from '../themes/Minimalist/MinimalistTheme';
import { TerminalTheme } from '../themes/Terminal/TerminalTheme';
import { BrutalistTheme } from '../themes/Brutalist/BrutalistTheme';
import { DesktopOSTheme } from '../themes/DesktopOS/DesktopOSTheme';
import { GlassTheme } from '../themes/Glassmorphism/GlassTheme';
import { GhibliTheme } from '../themes/Ghibli/GhibliTheme';

const pageVariants = {
    initial: { opacity: 0, filter: 'blur(10px)', scale: 0.98 },
    in: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    out: { opacity: 0, filter: 'blur(10px)', scale: 1.02 }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
};

export const PortfolioContent = () => {
    const { currentTheme } = useTheme();

    const renderTheme = () => {
        switch (currentTheme) {
            case 'terminal': return <TerminalTheme />;
            case 'brutalist': return <BrutalistTheme />;
            case 'os': return <DesktopOSTheme />;
            case 'glass': return <GlassTheme />;
            case 'ghibli': return <GhibliTheme />;
            case 'minimalist':
            default: return <MinimalistTheme />;
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentTheme}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: '100%', minHeight: '100vh', position: 'relative' }}
            >
                {renderTheme()}
            </motion.div>
        </AnimatePresence>
    );
};
