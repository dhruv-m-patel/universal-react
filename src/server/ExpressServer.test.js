import request from 'supertest';
import ExpressServer from './ExpressServer';

describe('ExpressServer SSR Integration', () => {
  let server;
  let app;

  beforeAll(async () => {
    // Set to test mode (Vite middleware handles this differently)
    process.env.NODE_ENV = 'test';

    server = new ExpressServer();
    await server.configure();
    await server.start();

    app = server.app;
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

      expect(response.text.toLowerCase()).toContain('<!doctype html>');
      expect(response.text).toContain('<html');
      expect(response.text).toContain('<head>');
      expect(response.text).toContain('<body>');
    });

    it('should include root div for React hydration', async () => {
      const response = await request(app).get('/');

      expect(response.text).toContain('<div id="root">');
    });

    it('should include client bundle scripts', async () => {
      const response = await request(app).get('/');

      // Vite generates scripts with pattern: /assets/*.js
      expect(response.text).toContain('<script');
      expect(response.text).toMatch(/\/assets\/.*\.js/);
    });
  });

  describe('GET /redux-example', () => {
    it('should return 200 status', async () => {
      const response = await request(app).get('/redux-example');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<div id="root">');
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
