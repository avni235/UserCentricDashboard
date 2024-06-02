import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mode-icon" size="2x" />
    </div>
  );
};

export default DarkModeToggle;
