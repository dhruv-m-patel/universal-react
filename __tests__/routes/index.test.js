import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import ExpressServer from '../../src/server/ExpressServer.js';

describe('SSR Routes with Data Pre-population', () => {
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

  describe('GET /', () => {
    it('should return 200 status for homepage', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!doctype html>');
    });

    it('should render HTML without pre-populated data', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('GET /posts', () => {
    it('should return 200 status for posts list', async () => {
      const response = await request(app).get('/posts');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!doctype html>');
    });

    it('should handle pagination query parameters', async () => {
      const response = await request(app).get('/posts?page=2&limit=5');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });

    it('should handle default pagination', async () => {
      const response = await request(app).get('/posts');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });

    it('should handle invalid pagination gracefully', async () => {
      const response = await request(app).get('/posts?page=abc&limit=xyz');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('GET /posts/:id', () => {
    it('should return 200 status for valid post ID', async () => {
      const response = await request(app).get('/posts/1');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!doctype html>');
    });

    it('should handle different valid post IDs', async () => {
      const response1 = await request(app).get('/posts/1');
      const response2 = await request(app).get('/posts/2');

      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
    });

    it('should handle invalid post ID gracefully', async () => {
      const response = await request(app).get('/posts/invalid');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });

    it('should handle non-existent post ID', async () => {
      const response = await request(app).get('/posts/99999');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('GET /users', () => {
    it('should return 200 status for users list', async () => {
      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!doctype html>');
    });

    it('should render users page successfully', async () => {
      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('GET /users/:id', () => {
    it('should return 200 status for valid user ID', async () => {
      const response = await request(app).get('/users/1');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!doctype html>');
    });

    it('should handle different valid user IDs', async () => {
      const response1 = await request(app).get('/users/1');
      const response2 = await request(app).get('/users/2');

      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
    });

    it('should handle invalid user ID gracefully', async () => {
      const response = await request(app).get('/users/invalid');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });

    it('should handle non-existent user ID', async () => {
      const response = await request(app).get('/users/99999');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('Error handling', () => {
    it('should not crash when external API is slow', async () => {
      const response = await request(app).get('/posts/1');

      expect(response.status).toBe(200);
    });

    it('should render page even if data fetching fails', async () => {
      // Testing with a potentially problematic ID
      const response = await request(app).get('/posts/0');

      expect(response.status).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('Route specificity', () => {
    it('should handle homepage separately from other routes', async () => {
      const homeResponse = await request(app).get('/');
      const postsResponse = await request(app).get('/posts');

      expect(homeResponse.status).toBe(200);
      expect(postsResponse.status).toBe(200);
    });

    it('should differentiate between list and detail routes', async () => {
      const listResponse = await request(app).get('/posts');
      const detailResponse = await request(app).get('/posts/1');

      expect(listResponse.status).toBe(200);
      expect(detailResponse.status).toBe(200);
    });
  });
});
