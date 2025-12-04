/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Override PostCSS config to avoid null byte path error in postcss.config.js
    // Use inline config with just Tailwind and Autoprefixer for Storybook
    config.css = {
      ...config.css,
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    };

    return config;
  },
};

export default config;
