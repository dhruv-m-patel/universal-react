import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, isSsrBuild }) => {
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';
  // Note: isSsrBuild is true when running `vite build --ssr`
  const ssrBuild = isSsrBuild || false;

  return {
    plugins: [
      react({
        // Include JSX runtime for React 18
        jsxRuntime: 'automatic',
        // Explicitly include .js files for JSX
        include: '**/*.{jsx,js}',
      }),
      // Bundle analysis in production
      isProduction &&
        visualizer({
          filename: './build-static/stats.html',
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),

    // Resolve configuration
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    },

    // CSS configuration
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: (name, filename) => {
          // Extract just the component name without the .module suffix
          const componentName = path.basename(filename, '.module.css');
          // Generate hash from filename + classname for uniqueness
          const hash = Buffer.from(filename + name)
            .toString('base64')
            .replace(/[+/=]/g, '')
            .substring(0, 5);
          return `${componentName}__${name}__${hash}`;
        },
      },
      postcss: './postcss.config.js',
    },

    // Build configuration
    build: {
      outDir: ssrBuild ? 'build/server' : 'build-static',
      emptyOutDir: true,
      sourcemap: true,
      manifest: !ssrBuild, // Generate manifest for client build
      ssrManifest: !ssrBuild, // Generate SSR manifest for client build
      rollupOptions: {
        input: ssrBuild
          ? path.resolve(__dirname, 'src/server/app.jsx')
          : path.resolve(__dirname, 'index.html'),
        output: {
          // Code splitting configuration
          manualChunks: !ssrBuild
            ? {
                vendor: [
                  'react',
                  'react-dom',
                  'react-router-dom',
                  'redux',
                  'react-redux',
                ],
              }
            : undefined,
        },
      },
      // Minification
      minify: isProduction ? 'esbuild' : false,
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
    },

    // Server configuration for development
    // Note: In middleware mode, most server options are ignored
    // HMR is configured in ExpressServer.js when creating the Vite server
    server: {
      hmr: {
        overlay: true,
      },
    },

    // Optimize deps
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'redux',
        'react-redux',
      ],
    },

    // SSR configuration
    ssr: {
      noExternal: ssrBuild ? ['react-helmet', '@loadable/component'] : [],
    },
  };
});
