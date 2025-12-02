import path from 'path';
import http from 'http';
import confit from 'confit';
import express from 'express';
import meddleware from 'meddleware';
import handlers from 'shortstop-handlers';
import shortstopRegex from 'shortstop-regex';
import getConfiguration from '../lib/utils/getConfiguration';
import betterRequire from '../lib/utils/betterRequire';

export default class ExpressServer {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.addConfiguration(process.cwd());
  }

  configurations = [];

  async configure() {
    let lastConfig;
    for (const config of this.configurations.reverse()) {
      if (lastConfig) {
        config.addOverride(lastConfig._store);
      }
      lastConfig = await getConfiguration(config);
    }
    return lastConfig;
  }

  addConfiguration(rootDirectory) {
    const configFactory = confit({
      basedir: path.join(rootDirectory, 'config'),
      protocols: {
        path: handlers.path(rootDirectory),
        sourcepath: handlers.path(
          path.join(
            rootDirectory,
            process.env.NODE_ENV === 'development' ? 'src' : 'build'
          )
        ),
        require: betterRequire(rootDirectory),
        regex: shortstopRegex(),
        env: handlers.env(),
      },
    });
    this.configurations.push(configFactory);
  }

  async start() {
    const config = (this.config = await this.configure());
    if (config.get('trustProxy')) {
      this.app.enable('trust proxy');
    }

    // disable X-Powered-By header
    this.app.disable('x-powered-by');

    this.app.use((req, res, next) => {
      req.config = config;
      next();
    });

    // In development, disable all caching for HMR
    if (process.env.NODE_ENV === 'development') {
      this.app.use((req, res, next) => {
        res.setHeader(
          'Cache-Control',
          'no-store, no-cache, must-revalidate, proxy-revalidate'
        );
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        next();
      });
    }

    // NOTE: configure using Vite dev middleware earlier than other middlewares
    // for hot module replacement to work. Changing order may not guarantee live browser refresh.
    if (process.env.NODE_ENV === 'development') {
      const { createServer: createViteServer } = require('vite');

      const vite = await createViteServer({
        server: {
          middlewareMode: true,
          hmr: {
            // HMR will use the same port as the Express server
            // We'll let the server auto-detect the port below
            server: this.server,
          },
        },
        appType: 'custom',
      });

      // Store vite instance for SSR
      this.app.locals.vite = vite;
      // Use vite's connect instance as middleware
      this.app.use(vite.middlewares);
    }

    const middleware = config.get('meddleware');
    if (middleware) {
      this.app.use(meddleware(middleware));
    }

    return new Promise((resolve, reject) => {
      const basePort = ['staging', 'production'].includes(process.env.NODE_ENV)
        ? process.env.PORT
        : config.get('port');

      const tryPort = (port) => {
        // Remove any existing error listeners
        this.server.removeAllListeners('error');

        this.server.once('error', (err) => {
          if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is in use, trying ${port + 1}...`);
            tryPort(port + 1);
          } else {
            reject(err);
          }
        });

        this.server.listen(port, () => {
          console.log(`✓ Server listening on http://localhost:${port}`);
          resolve(config);
        });
      };

      tryPort(basePort);
    });
  }

  stop(callback) {
    this.server.close(callback);
  }
}
