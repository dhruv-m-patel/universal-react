import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import ExpressServer from '../../ExpressServer.js';

describe('Posts API Routes', () => {
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

  describe('GET /api/posts', () => {
    it('should return 200 status and array of posts', async () => {
      const response = await request(app).get('/api/posts');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return posts with correct structure', async () => {
      const response = await request(app).get('/api/posts');

      expect(response.status).toBe(200);
      const post = response.body[0];
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });

    it('should support pagination with page parameter', async () => {
      const response = await request(app).get('/api/posts?page=2&limit=5');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeLessThanOrEqual(5);
    });

    it('should use default pagination when parameters not provided', async () => {
      const response = await request(app).get('/api/posts');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      // Default limit is 10
      expect(response.body.length).toBeLessThanOrEqual(10);
    });
  });

  describe('GET /api/posts/:id', () => {
    it('should return 200 status and a single post', async () => {
      const response = await request(app).get('/api/posts/1');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('userId');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('body');
    });

    it('should return 400 for invalid post ID', async () => {
      const response = await request(app).get('/api/posts/invalid');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid post ID');
    });

    it('should handle different post IDs correctly', async () => {
      const response1 = await request(app).get('/api/posts/1');
      const response2 = await request(app).get('/api/posts/2');

      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
      expect(response1.body.id).toBe(1);
      expect(response2.body.id).toBe(2);
      expect(response1.body.id).not.toBe(response2.body.id);
    });
  });

  describe('GET /api/posts/:id/comments', () => {
    it('should return 200 status and array of comments', async () => {
      const response = await request(app).get('/api/posts/1/comments');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return comments with correct structure', async () => {
      const response = await request(app).get('/api/posts/1/comments');

      expect(response.status).toBe(200);
      const comment = response.body[0];
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('postId', 1);
      expect(comment).toHaveProperty('name');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    });

    it('should return 400 for invalid post ID', async () => {
      const response = await request(app).get('/api/posts/invalid/comments');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid post ID');
    });

    it('should handle different post IDs correctly', async () => {
      const response1 = await request(app).get('/api/posts/1/comments');
      const response2 = await request(app).get('/api/posts/2/comments');

      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
      expect(Array.isArray(response1.body)).toBe(true);
      expect(Array.isArray(response2.body)).toBe(true);

      // Comments should be for different posts
      if (response1.body.length > 0 && response2.body.length > 0) {
        expect(response1.body[0].postId).toBe(1);
        expect(response2.body[0].postId).toBe(2);
      }
    });
  });
});
