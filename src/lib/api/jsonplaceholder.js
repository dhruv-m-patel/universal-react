/**
 * JSONPlaceholder API service
 * API Documentation: https://jsonplaceholder.typicode.com/
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all posts with optional pagination
 * @param {number} page - Page number (optional)
 * @param {number} limit - Number of posts per page (optional)
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchPosts(page = null, limit = null) {
  let url = `${BASE_URL}/posts`;

  if (page !== null && limit !== null) {
    const start = (page - 1) * limit;
    url += `?_start=${start}&_limit=${limit}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Post object
 */
export async function fetchPost(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch all users
 * @returns {Promise<Array>} Array of users
 */
export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch a single user by ID
 * @param {number} id - User ID
 * @returns {Promise<Object>} User object
 */
export async function fetchUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch comments for a specific post
 * @param {number} postId - Post ID
 * @returns {Promise<Array>} Array of comments
 */
export async function fetchComments(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch albums for a specific user
 * @param {number} userId - User ID
 * @returns {Promise<Array>} Array of albums
 */
export async function fetchUserAlbums(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/albums`);
  if (!response.ok) {
    throw new Error(`Failed to fetch albums: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch posts by a specific user
 * @param {number} userId - User ID
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchUserPosts(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user posts: ${response.statusText}`);
  }

  return response.json();
}
