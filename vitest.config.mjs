import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: '**/*.{jsx,js}',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    postcss: './postcss.config.js',
  },

  test: {
    // Use happy-dom for faster, lightweight DOM simulation
    environment: 'happy-dom',

    // Global test setup
    setupFiles: ['./vitest.setup.js'],

    // Test file patterns
    include: ['src/**/*.test.{js,jsx}'],
    exclude: ['node_modules', 'build', 'build-static'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'build/',
        'build-static/',
        'tests/',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/index.js',
        '**/*.stories.js',
        'src/client/app.jsx',
        'src/server/app.jsx',
        'src/client/index.js',
        'src/server/index.js',
        'babel.config.js',
        'vite.config.mjs',
        'vitest.config.mjs',
        'jest.config.js',
        'jest.setup.js',
      ],
    },

    // Global test APIs (like describe, it, expect)
    globals: true,

    // CSS handling
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },

    // Reporter configuration
    reporters: ['default'],

    // Watch mode configuration
    watch: false,

    // Mock configuration
    mockReset: false,
    restoreMocks: false,

    // Timeout configuration
    testTimeout: 10000,
  },
});
