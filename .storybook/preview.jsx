import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withThemeByClassName } from '@storybook/addon-themes';
import { withRedux } from './decorators/withRedux';
import '../src/common/styles/tailwind.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Theme switcher - must come before other decorators
    // Apply theme to <html> element to match ThemeSwitch behavior
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
    // Redux with default state - can be overridden per story via parameters
    withRedux(),
    // React Router wrapper for Link components - can be disabled per story
    (Story, context) => {
      // Allow stories to opt-out if they have their own Router
      if (context.parameters.router?.disable) {
        return <Story />;
      }
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
