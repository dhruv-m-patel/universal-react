/**
 * BaseRepository
 * Abstract base class for all repositories
 * Provides common HTTP methods and error handling
 */
export default class BaseRepository {
  /**
   * @param {string} baseUrl - The base URL for the API
   */
  constructor(baseUrl) {
    if (!baseUrl) {
      throw new Error('BaseRepository requires a baseUrl');
    }
    this.baseUrl = baseUrl;
  }

  /**
   * Perform a GET request
   * @param {string} endpoint - The API endpoint (relative to baseUrl)
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} The response data
   */
  async get(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText} - ${url}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      throw error;
    }
  }

  /**
   * Perform a POST request
   * @param {string} endpoint - The API endpoint (relative to baseUrl)
   * @param {Object} data - The data to send
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} The response data
   */
  async post(endpoint, data, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText} - ${url}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error posting to ${url}:`, error);
      throw error;
    }
  }

  /**
   * Perform a PUT request
   * @param {string} endpoint - The API endpoint (relative to baseUrl)
   * @param {Object} data - The data to send
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} The response data
   */
  async put(endpoint, data, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText} - ${url}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error putting to ${url}:`, error);
      throw error;
    }
  }

  /**
   * Perform a DELETE request
   * @param {string} endpoint - The API endpoint (relative to baseUrl)
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} The response data
   */
  async delete(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText} - ${url}`
        );
      }

      // DELETE might return empty response
      const text = await response.text();
      return text ? JSON.parse(text) : {};
    } catch (error) {
      console.error(`Error deleting ${url}:`, error);
      throw error;
    }
  }

  /**
   * Build query string from params object
   * @param {Object} params - Key-value pairs for query parameters
   * @returns {string} Query string (with leading ?)
   */
  buildQueryString(params) {
    if (!params || Object.keys(params).length === 0) {
      return '';
    }

    const queryString = Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    return queryString ? `?${queryString}` : '';
  }
}
