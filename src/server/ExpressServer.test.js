import request from 'supertest';
import ExpressServer from './ExpressServer';

describe('ExpressServer SSR Integration', () => {
  let server;
  let app;

  beforeAll(async () => {
    // Set to production mode to avoid webpack dev middleware
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    server = new ExpressServer();
    await server.configure();
    await server.start();

    app = server.app;

    // Restore original env
    process.env.NODE_ENV = originalEnv;
  });

  afterAll(async () => {
    if (server && server.server) {
      await new Promise((resolve) => {
        server.server.close(resolve);
      });
    }
  });

  describe('GET /', () => {
    it('should return 200 status', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
    });

    it('should render HTML with proper structure', async () => {
      const response = await request(app).get('/');

      expect(response.text).toContain('<!DOCTYPE html>');
      expect(response.text).toContain('<html');
      expect(response.text).toContain('<head>');
      expect(response.text).toContain('<body>');
    });

    it('should include root div for React hydration', async () => {
      const response = await request(app).get('/');

      expect(response.text).toContain('<div id="root">');
    });

    it('should include preloaded Redux state', async () => {
      const response = await request(app).get('/');

      expect(response.text).toContain('window.__PRELOADED_STATE__');
      expect(response.text).toContain('<script id="stateData">');
    });

    it('should include client bundle scripts', async () => {
      const response = await request(app).get('/');

      expect(response.text).toContain('client.bundle.js');
      expect(response.text).toContain('vendor.bundle.js');
    });

    it('should render server-side React content', async () => {
      const response = await request(app).get('/');

      // Check that there's actual content inside the root div (not empty)
      const rootDivMatch = response.text.match(/<div id="root">(.+?)<\/div>/s);
      expect(rootDivMatch).toBeTruthy();
      expect(rootDivMatch[1].trim().length).toBeGreaterThan(0);
    });
  });

  describe('GET /redux-example', () => {
    it('should return 200 status', async () => {
      const response = await request(app).get('/redux-example');

      expect(response.status).toBe(200);
    });

    it('should render the Redux example page', async () => {
      const response = await request(app).get('/redux-example');

      expect(response.text).toContain('<div id="root">');
      expect(response.text).toContain('window.__PRELOADED_STATE__');
    });
  });

  describe('GET /nonexistent-route', () => {
    it('should return 200 but render 404 page', async () => {
      const response = await request(app).get('/nonexistent-route');

      // React Router handles 404 on client side, server returns 200
      expect(response.status).toBe(200);
      expect(response.text).toContain('<div id="root">');
    });
  });
});
