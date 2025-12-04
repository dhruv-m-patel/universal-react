import BaseRepository from './BaseRepository.js';

/**
 * PostsRepository
 * Handles all data operations related to posts
 */
export default class PostsRepository extends BaseRepository {
  /**
   * @param {string} baseUrl - The base URL for the JSONPlaceholder API
   */
  constructor(baseUrl) {
    super(baseUrl);
  }

  /**
   * Fetch a paginated list of posts
   * @param {number} page - The page number (1-indexed)
   * @param {number} limit - Number of posts per page
   * @returns {Promise<Array>} Array of post objects
   */
  async getPosts(page = 1, limit = 10) {
    const start = (page - 1) * limit;
    const queryString = this.buildQueryString({
      _start: start,
      _limit: limit,
    });

    return await this.get(`/posts${queryString}`);
  }

  /**
   * Fetch a single post by ID
   * @param {number|string} id - The post ID
   * @returns {Promise<Object>} The post object
   */
  async getPostById(id) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    return await this.get(`/posts/${id}`);
  }

  /**
   * Fetch comments for a specific post
   * @param {number|string} postId - The post ID
   * @returns {Promise<Array>} Array of comment objects
   */
  async getPostComments(postId) {
    if (!postId) {
      throw new Error('Post ID is required');
    }
    return await this.get(`/posts/${postId}/comments`);
  }

  /**
   * Create a new post (for future use)
   * @param {Object} postData - The post data
   * @returns {Promise<Object>} The created post
   */
  async createPost(postData) {
    return await this.post('/posts', postData);
  }

  /**
   * Update a post (for future use)
   * @param {number|string} id - The post ID
   * @param {Object} postData - The updated post data
   * @returns {Promise<Object>} The updated post
   */
  async updatePost(id, postData) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    return await this.put(`/posts/${id}`, postData);
  }

  /**
   * Delete a post (for future use)
   * @param {number|string} id - The post ID
   * @returns {Promise<Object>} Response from the API
   */
  async deletePost(id) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    return await this.delete(`/posts/${id}`);
  }
}
