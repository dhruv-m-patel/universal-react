import request from 'supertest';
import { vi, describe, it, expect, beforeAll, afterAll } from 'vitest';
import ExpressServer from '../../ExpressServer.js';

describe('Users API Routes', () => {
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

  describe('GET /api/users', () => {
    it('should return 200 status and array of users', async () => {
      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return users with correct structure', async () => {
      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      const user = response.body[0];
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return 200 status and a single user', async () => {
      const response = await request(app).get('/api/users/1');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('username');
      expect(response.body).toHaveProperty('email');
    });

    it('should return 400 for invalid user ID', async () => {
      const response = await request(app).get('/api/users/invalid');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid user ID');
    });

    it('should handle different user IDs correctly', async () => {
      const response1 = await request(app).get('/api/users/1');
      const response2 = await request(app).get('/api/users/2');

      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
      expect(response1.body.id).toBe(1);
      expect(response2.body.id).toBe(2);
      expect(response1.body.id).not.toBe(response2.body.id);
    });
  });

  describe('GET /api/users/:id/posts', () => {
    it('should return 200 status and array of user posts', async () => {
      const response = await request(app).get('/api/users/1/posts');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return posts with correct structure', async () => {
      const response = await request(app).get('/api/users/1/posts');

      expect(response.status).toBe(200);
      const post = response.body[0];
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('userId', 1);
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });

    it('should return 400 for invalid user ID', async () => {
      const response = await request(app).get('/api/users/invalid/posts');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid user ID');
    });

    it('should return posts only for the specified user', async () => {
      const response = await request(app).get('/api/users/1/posts');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      // All posts should belong to user 1
      response.body.forEach((post) => {
        expect(post.userId).toBe(1);
      });
    });
  });

  describe('GET /api/users/:id/albums', () => {
    it('should return 200 status and array of user albums', async () => {
      const response = await request(app).get('/api/users/1/albums');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return albums with correct structure', async () => {
      const response = await request(app).get('/api/users/1/albums');

      expect(response.status).toBe(200);
      const album = response.body[0];
      expect(album).toHaveProperty('id');
      expect(album).toHaveProperty('userId', 1);
      expect(album).toHaveProperty('title');
    });

    it('should return 400 for invalid user ID', async () => {
      const response = await request(app).get('/api/users/invalid/albums');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Invalid user ID');
    });

    it('should return albums only for the specified user', async () => {
      const response = await request(app).get('/api/users/1/albums');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      // All albums should belong to user 1
      response.body.forEach((album) => {
        expect(album.userId).toBe(1);
      });
    });
  });
});
