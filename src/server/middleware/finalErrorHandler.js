import path from 'path';
import fs from 'fs';

/**
 * Final error handler middleware for SSR
 * Catches errors during initial page load and renders appropriate error pages
 * This only handles SSR errors - API errors should be handled by API routes
 */
export default function () {
  return async function finalErrorHandler(err, req, res, next) {
    // Skip if response already sent
    if (res.headersSent) {
      return next(err);
    }

    const isDev = process.env.NODE_ENV === 'development';
    const isTest = process.env.NODE_ENV === 'test';

    // Determine status code
    const statusCode = err.statusCode || 500;

    // Log error details
    console.error('SSR Error Handler:', {
      statusCode,
      message: err.message,
      url: req.originalUrl,
    });

    // In test mode, just send a simple error response
    if (isTest) {
      res
        .status(statusCode)
        .set({ 'Content-Type': 'text/html' })
        .end(
          `<!doctype html>
<html>
  <body>
    <h1>${statusCode} Error</h1>
    <p>${err.message}</p>
  </body>
</html>`
        );
      return;
    }

    try {
      let template;
      let render;

      if (isDev && req.app.locals.vite) {
        // Development: use Vite dev server
        const vite = req.app.locals.vite;

        template = fs.readFileSync(
          path.resolve(process.cwd(), 'index.html'),
          'utf-8'
        );

        template = await vite.transformIndexHtml(req.originalUrl, template);

        // Load the server entry
        const entryServer = await vite.ssrLoadModule('/src/server/app.jsx');
        render = entryServer.render;
      } else {
        // Production: use pre-built files
        template = fs.readFileSync(
          path.resolve(process.cwd(), 'build-static/index.html'),
          'utf-8'
        );

        const entryServerPath = path.resolve(
          process.cwd(),
          'build/server/app.mjs'
        );

        const entryServer = await import(entryServerPath);
        render = entryServer.render;
      }

      // Determine which error page to render
      const errorPageUrl =
        statusCode === 404 || statusCode === 400 ? '/404' : '/500';

      // Create initial state with error information to prevent client-side data fetching
      const errorState = {
        ssr: {
          error: {
            statusCode,
            url: req.originalUrl,
            hasError: true,
          },
        },
      };

      // Render the error page with error state
      const { html: appHtml, preloadedState } = render(
        errorPageUrl,
        errorState
      );

      // Inject preloaded state
      const stateScript = `<script id="stateData">window.__PRELOADED_STATE__ = ${JSON.stringify(
        preloadedState
      ).replace(/</g, '\\u003c')};</script>`;

      let htmlWithState = template.replace('<!--app-html-->', appHtml);
      htmlWithState = htmlWithState.replace('</head>', `${stateScript}</head>`);

      // Send response with appropriate status code
      res
        .status(statusCode)
        .set({ 'Content-Type': 'text/html' })
        .end(htmlWithState);
    } catch (renderError) {
      // If rendering error page fails, send a simple HTML error page
      console.error('Error rendering error page:', renderError);

      res
        .status(statusCode)
        .set({ 'Content-Type': 'text/html' })
        .end(
          `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${statusCode} Error</title>
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        background-color: #f3f4f6;
      }
      .error-container {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 0.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        max-width: 600px;
      }
      h1 {
        font-size: 4rem;
        margin: 0;
        color: #dc2626;
      }
      h2 {
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #1f2937;
      }
      p {
        color: #6b7280;
        margin: 1rem 0;
      }
      a {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        background-color: #2563eb;
        color: white;
        text-decoration: none;
        border-radius: 0.375rem;
        font-weight: 600;
      }
      a:hover {
        background-color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <div class="error-container">
      <h1>${statusCode}</h1>
      <h2>${statusCode === 404 ? 'Not Found' : 'Server Error'}</h2>
      <p>${statusCode === 404 ? 'The page you are looking for was not found.' : 'An unexpected error occurred while processing your request.'}</p>
      <a href="/">Go Home</a>
    </div>
  </body>
</html>`
        );
    }
  };
}
