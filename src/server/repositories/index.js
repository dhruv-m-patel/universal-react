import PostsRepository from './PostsRepository.js';
import UsersRepository from './UsersRepository.js';

/**
 * Initialize repositories with configuration
 * @param {Object} config - Application configuration
 * @returns {Object} Object containing initialized repositories
 */
export function initializeRepositories(config) {
  const apiUrl = config.get('api:jsonPlaceholderUrl');

  if (!apiUrl) {
    throw new Error(
      'api.jsonPlaceholderUrl is not configured in config/config.json'
    );
  }

  return {
    posts: new PostsRepository(apiUrl),
    users: new UsersRepository(apiUrl),
  };
}

// Export repository classes for testing
export { default as PostsRepository } from './PostsRepository.js';
export { default as UsersRepository } from './UsersRepository.js';
export { default as BaseRepository } from './BaseRepository.js';
