import BaseRepository from './BaseRepository.js';

/**
 * UsersRepository
 * Handles all data operations related to users
 */
export default class UsersRepository extends BaseRepository {
  /**
   * @param {string} baseUrl - The base URL for the JSONPlaceholder API
   */
  constructor(baseUrl) {
    super(baseUrl);
  }

  /**
   * Fetch all users
   * @returns {Promise<Array>} Array of user objects
   */
  async getUsers() {
    return await this.get('/users');
  }

  /**
   * Fetch a single user by ID
   * @param {number|string} id - The user ID
   * @returns {Promise<Object>} The user object
   */
  async getUserById(id) {
    if (!id) {
      throw new Error('User ID is required');
    }
    return await this.get(`/users/${id}`);
  }

  /**
   * Fetch posts for a specific user
   * @param {number|string} userId - The user ID
   * @returns {Promise<Array>} Array of post objects
   */
  async getUserPosts(userId) {
    if (!userId) {
      throw new Error('User ID is required');
    }
    return await this.get(`/users/${userId}/posts`);
  }

  /**
   * Fetch albums for a specific user
   * @param {number|string} userId - The user ID
   * @returns {Promise<Array>} Array of album objects
   */
  async getUserAlbums(userId) {
    if (!userId) {
      throw new Error('User ID is required');
    }
    return await this.get(`/users/${userId}/albums`);
  }

  /**
   * Create a new user (for future use)
   * @param {Object} userData - The user data
   * @returns {Promise<Object>} The created user
   */
  async createUser(userData) {
    return await this.post('/users', userData);
  }

  /**
   * Update a user (for future use)
   * @param {number|string} id - The user ID
   * @param {Object} userData - The updated user data
   * @returns {Promise<Object>} The updated user
   */
  async updateUser(id, userData) {
    if (!id) {
      throw new Error('User ID is required');
    }
    return await this.put(`/users/${id}`, userData);
  }

  /**
   * Delete a user (for future use)
   * @param {number|string} id - The user ID
   * @returns {Promise<Object>} Response from the API
   */
  async deleteUser(id) {
    if (!id) {
      throw new Error('User ID is required');
    }
    return await this.delete(`/users/${id}`);
  }
}
