import path from 'path';
import http from 'http';
import confit from 'confit';
import express from 'express';
import meddleware from 'meddleware';
import handlers from 'shortstop-handlers';
import shortstopRegex from 'shortstop-regex';
import 'fetch-everywhere';
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

    // NOTE: configure using Vite dev middleware earlier than other middlewares
    // for hot module replacement to work. Changing order may not guarantee live browser refresh.
    if (process.env.NODE_ENV === 'development') {
      const { createServer: createViteServer } = require('vite');
      const net = require('net');

      // Find an available port before creating Vite server
      const basePort = config.get('port') || 3000;
      const availablePort = await new Promise((resolve) => {
        const server = net.createServer();
        server.listen(basePort, () => {
          const { port } = server.address();
          server.close(() => resolve(port));
        });
        server.on('error', () => {
          // Port in use, try next one
          const tryNext = (p) => {
            const s = net.createServer();
            s.listen(p, () => {
              const { port } = s.address();
              s.close(() => resolve(port));
            });
            s.on('error', () => tryNext(p + 1));
          };
          tryNext(basePort + 1);
        });
      });

      // Store the available port for later use
      this.actualPort = availablePort;

      const vite = await createViteServer({
        server: {
          middlewareMode: true,
          hmr: {
            // Use the available port for HMR WebSocket
            port: availablePort,
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
      // Use the port we already found (in dev mode) or the configured port
      const port =
        this.actualPort ||
        (['staging', 'production'].includes(process.env.NODE_ENV)
          ? process.env.PORT
          : config.get('port'));

      this.server.listen(port, () => {
        console.log(`✓ Server listening on http://localhost:${port}`);
        resolve(config);
      });

      this.server.once('error', (err) => {
        reject(err);
      });
    });
  }

  stop(callback) {
    this.server.close(callback);
  }
}
