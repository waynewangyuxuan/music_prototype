import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const ThemeSelector = () => {
  const [theme, setTheme] = useState('original'); // Default to 'original' theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    // Remove any previously applied theme classes
    document.body.className = '';
    // Add the selected theme class to the body
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="theme-selector">
      <label>Select Theme:</label>
      <button onClick={() => handleThemeChange('original')}>Original</button>
      <button onClick={() => handleThemeChange('hacker')}>Hacker</button>
      <button onClick={() => handleThemeChange('artistic')}>Artistic</button>
    </div>
  );
};

export default ThemeSelector;