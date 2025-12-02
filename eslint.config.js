const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const promisePlugin = require('eslint-plugin-promise');
const nodePlugin = require('eslint-plugin-node');
const globals = require('globals');

module.exports = [
  // Global ignores
  {
    ignores: [
      'build/**',
      'build-static/**',
      'node_modules/**',
      'storybook-static/**',
      '**/*.min.js',
    ],
  },
  // Base recommended config
  js.configs.recommended,
  // Custom configuration
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      react,
      import: importPlugin,
      promise: promisePlugin,
      node: nodePlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Disable semicolon requirement
      semi: 0,
      // Disable space before function paren
      'space-before-function-paren': 0,
      // Disable comma dangle requirement
      'comma-dangle': 0,
      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      // Standard-like rules
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^React$', // React is used in JSX
        },
      ],
      'no-console': 'off',
    },
  },
];
