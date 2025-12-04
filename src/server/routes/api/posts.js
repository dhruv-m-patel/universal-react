/**
 * Posts API Routes
 * Endpoints for fetching posts and comments
 */

export default async function postsRoutes(router) {
  /**
   * GET /api/posts
   * Fetch paginated list of posts
   * Query params:
   *   - page: Page number (default: 1)
   *   - limit: Posts per page (default: 10)
   */
  router.get('/', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const posts = await req.repositories.posts.getPosts(page, limit);

      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({
        error: 'Failed to fetch posts',
        message: error.message,
      });
    }
  });

  /**
   * GET /api/posts/:id
   * Fetch a single post by ID
   */
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid post ID',
          message: 'Post ID must be a valid number',
        });
      }

      const post = await req.repositories.posts.getPostById(id);

      if (!post || !post.id) {
        return res.status(404).json({
          error: 'Post not found',
          message: `Post with ID ${id} not found`,
        });
      }

      res.json(post);
    } catch (error) {
      console.error(`Error fetching post ${req.params.id}:`, error);
      res.status(500).json({
        error: 'Failed to fetch post',
        message: error.message,
      });
    }
  });

  /**
   * GET /api/posts/:id/comments
   * Fetch comments for a specific post
   */
  router.get('/:id/comments', async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid post ID',
          message: 'Post ID must be a valid number',
        });
      }

      const comments = await req.repositories.posts.getPostComments(id);

      res.json(comments);
    } catch (error) {
      console.error(`Error fetching comments for post ${req.params.id}:`, error);
      res.status(500).json({
        error: 'Failed to fetch comments',
        message: error.message,
      });
    }
  });
}
