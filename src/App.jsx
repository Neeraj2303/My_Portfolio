import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { PortfolioContent } from './components/PortfolioContent';

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
