import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

export default function () {
  return async function renderPage(req, res, next) {
    try {
      // Redirect to secure url in production
      if (
        req.config.get('env:env') === 'production' &&
        req.protocol === 'http' &&
        process.env.HTTPS_ONLY === true
      ) {
        res.redirect(`https://${req.headers.host}${req.originalUrl}`);
        return;
      }

      const url = req.originalUrl;
      const isDev = process.env.NODE_ENV === 'development';

      let template;
      let render;
      let manifest;

      if (isDev) {
        // Development: use Vite dev server with HMR
        const vite = req.app.locals.vite;

        // Read index.html
        template = fs.readFileSync(
          path.resolve(process.cwd(), 'index.html'),
          'utf-8'
        );

        // Apply Vite HTML transforms (this injects HMR client, etc)
        template = await vite.transformIndexHtml(url, template);

        // Load the server entry via Vite's SSR loader
        const entryServer = await vite.ssrLoadModule('/src/entry-server.js');
        render = entryServer.render;
      } else {
        // Production: use pre-built files
        template = fs.readFileSync(
          path.resolve(process.cwd(), 'build-static/index.html'),
          'utf-8'
        );

        // Import the pre-built server entry
        const entryServerPath = path.resolve(
          process.cwd(),
          'build/server/entry-server.js'
        );
        const entryServer = await import(
          fileURLToPath(new URL(`file://${entryServerPath}`))
        );
        render = entryServer.render;

        // Load client manifest for production
        const manifestPath = path.resolve(
          process.cwd(),
          'build-static/.vite/manifest.json'
        );
        manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      }

      // Render the app HTML
      const initialState = req.initialState || {};
      const { html: appHtml, preloadedState } = render(url, initialState);

      // Inject preloaded state
      const stateScript = `<script id="stateData">window.__PRELOADED_STATE__ = ${JSON.stringify(
        preloadedState
      ).replace(/</g, '\\u003c')};</script>`;

      let htmlWithState = template.replace('<!--app-html-->', appHtml);

      // Inject state before closing head tag
      htmlWithState = htmlWithState.replace('</head>', `${stateScript}</head>`);

      // In production, inject preload links for assets
      if (!isDev && manifest) {
        const preloadLinks = renderPreloadLinks(manifest);
        htmlWithState = htmlWithState.replace(
          '</head>',
          `${preloadLinks}</head>`
        );
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlWithState);
    } catch (e) {
      // If an error occurs, let Vite fix the stack trace
      if (process.env.NODE_ENV === 'development' && req.app.locals.vite) {
        req.app.locals.vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  };
}

// Helper to render preload links for production
function renderPreloadLinks(manifest) {
  const entryChunk = manifest['src/entry-client.js'];
  if (!entryChunk) return '';

  const links = [];

  // Preload entry file
  if (entryChunk.file) {
    links.push(`<link rel="modulepreload" href="/${entryChunk.file}" />`);
  }

  // Preload CSS
  if (entryChunk.css) {
    entryChunk.css.forEach((cssFile) => {
      links.push(`<link rel="stylesheet" href="/${cssFile}" />`);
    });
  }

  // Preload imports
  if (entryChunk.imports) {
    entryChunk.imports.forEach((importFile) => {
      const chunk = manifest[importFile];
      if (chunk && chunk.file) {
        links.push(`<link rel="modulepreload" href="/${chunk.file}" />`);
      }
    });
  }

  return links.join('\n');
}
