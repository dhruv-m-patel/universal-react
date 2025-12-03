import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff';

/**
 * ThemeSwitch - A reusable dark mode toggle component
 *
 * Features:
 * - Persists theme preference to localStorage
 * - Detects OS dark mode preference on first visit
 * - Updates document root with 'dark' class for Tailwind CSS
 * - Provides callback for parent components that need theme state
 */
export default function ThemeSwitch({ onThemeChange, className, label }) {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    store.set('enableDarkMode', newDarkMode);

    // Update document root for Tailwind dark mode
    if (typeof document !== 'undefined') {
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    // Notify parent component if callback provided
    if (onThemeChange) {
      onThemeChange(newDarkMode);
    }
  }, [isDarkMode, onThemeChange]);

  // Initialize dark mode on mount
  useEffect(() => {
    if (isDarkMode === undefined) {
      let shouldEnableDarkMode = false;
      const darkModeSetting = store.get('enableDarkMode');

      // Check localStorage first, then OS preference
      if (darkModeSetting === undefined && typeof window !== 'undefined') {
        shouldEnableDarkMode =
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        shouldEnableDarkMode = darkModeSetting;
      }

      setIsDarkMode(shouldEnableDarkMode);
      store.set('enableDarkMode', shouldEnableDarkMode);

      // Update document root for Tailwind dark mode
      if (typeof document !== 'undefined') {
        if (shouldEnableDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }

      // Notify parent component on initial load
      if (onThemeChange) {
        onThemeChange(shouldEnableDarkMode);
      }
    }
  }, [isDarkMode, onThemeChange]);

  return (
    <div className={className}>
      {label && (
        <span
          className="mr-2"
          style={{ color: isDarkMode ? '#ffffff' : '#374151' }}
        >
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className="cursor-pointer inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        style={{ verticalAlign: 'middle' }}
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faToggleOn : faToggleOff}
          size="2x"
          style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}
          className="transition-colors hover:opacity-80"
        />
      </button>
    </div>
  );
}

ThemeSwitch.propTypes = {
  onThemeChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
};

ThemeSwitch.defaultProps = {
  onThemeChange: undefined,
  className: '',
  label: 'Dark Mode',
};
