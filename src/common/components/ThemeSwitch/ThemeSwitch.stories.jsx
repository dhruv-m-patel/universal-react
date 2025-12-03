import React from 'react';
import ThemeSwitch from './ThemeSwitch';

export default {
  title: 'UI/ThemeSwitch',
  component: ThemeSwitch,
};

export const Default = () => <ThemeSwitch />;

Default.parameters = {
  docs: {
    description: {
      story:
        'Default theme switch with dark mode toggle. Persists preference to localStorage and detects OS preference.',
    },
  },
};

export const WithoutLabel = () => <ThemeSwitch label="" />;

WithoutLabel.parameters = {
  docs: {
    description: {
      story: 'Theme switch without a label, showing only the toggle icon.',
    },
  },
};

export const CustomLabel = () => <ThemeSwitch label="Theme" />;

CustomLabel.parameters = {
  docs: {
    description: {
      story: 'Theme switch with a custom label.',
    },
  },
};

export const WithCallback = () => {
  const handleThemeChange = (isDark) => {
    console.log('Theme changed to:', isDark ? 'dark' : 'light');
  };

  return <ThemeSwitch onThemeChange={handleThemeChange} />;
};

WithCallback.parameters = {
  docs: {
    description: {
      story:
        'Theme switch with callback function that gets notified when theme changes. Check console for output.',
    },
  },
};

export const RightAligned = () => (
  <div className="text-right">
    <ThemeSwitch className="inline-flex items-center" />
  </div>
);

RightAligned.parameters = {
  docs: {
    description: {
      story: 'Theme switch aligned to the right, as commonly used in headers.',
    },
  },
};
