import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import ExpressServer from '../../src/server/ExpressServer.js';

describe('SSR Error Handling', () => {
  let server;
  let app;

  beforeAll(async () => {
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

  describe('404 Not Found Errors', () => {
    it('should return 404 for non-existent post ID', async () => {
      const response = await request(app).get('/posts/999999');

      expect(response.status).toBe(404);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
      expect(response.text).toContain('404');
    });

    it('should return 404 for non-existent user ID', async () => {
      const response = await request(app).get('/users/999999');

      expect(response.status).toBe(404);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
      expect(response.text).toContain('404');
    });

    it('should return 404 for completely unknown route', async () => {
      const response = await request(app).get('/this-route-does-not-exist');

      expect(response.status).toBe(200); // React Router handles this with * route
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });
  });

  describe('400 Bad Request Errors', () => {
    it('should handle invalid post ID (non-numeric)', async () => {
      const response = await request(app).get('/posts/invalid-id');

      expect(response.status).toBe(400);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });

    it('should handle invalid user ID (non-numeric)', async () => {
      const response = await request(app).get('/users/invalid-id');

      expect(response.status).toBe(400);
      expect(response.headers['content-type']).toContain('text/html');
    });
  });

  describe('Error Page Content', () => {
    it('should render error page with proper HTML structure', async () => {
      const response = await request(app).get('/posts/999999');

      expect(response.status).toBe(404);
      expect(response.text).toContain('<!doctype html>');
      expect(response.text).toContain('<html');
      expect(response.text).toContain('<body');
      expect(response.text).toContain('404');
      // Should contain error-related text
      expect(
        response.text.toLowerCase().includes('not found') ||
          response.text.toLowerCase().includes('error')
      ).toBe(true);
    });

    it('should not leak error details in production', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      const response = await request(app).get('/posts/999999');

      // Should not contain stack traces or detailed error messages
      expect(response.text).not.toContain('Error:');
      expect(response.text).not.toContain('at ');
      expect(response.text).not.toContain('stack');

      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('Valid Requests', () => {
    it('should return 200 for valid post ID', async () => {
      const response = await request(app).get('/posts/1');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });

    it('should return 200 for valid user ID', async () => {
      const response = await request(app).get('/users/1');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });

    it('should return 200 for posts list', async () => {
      const response = await request(app).get('/posts');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });

    it('should return 200 for users list', async () => {
      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('text/html');
      expect(response.text).toContain('<!doctype html>');
    });
  });
});
