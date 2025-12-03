/**
 * Users API Routes
 * Endpoints for fetching users, their posts, and albums
 */

export default async function usersRoutes(router) {
  /**
   * GET /api/users
   * Fetch all users
   */
  router.get('/', async (req, res) => {
    try {
      const users = await req.repositories.users.getUsers();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({
        error: 'Failed to fetch users',
        message: error.message,
      });
    }
  });

  /**
   * GET /api/users/:id
   * Fetch a single user by ID
   */
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid user ID',
          message: 'User ID must be a valid number',
        });
      }

      const user = await req.repositories.users.getUserById(id);

      if (!user || !user.id) {
        return res.status(404).json({
          error: 'User not found',
          message: `User with ID ${id} not found`,
        });
      }

      res.json(user);
    } catch (error) {
      console.error(`Error fetching user ${req.params.id}:`, error);
      res.status(500).json({
        error: 'Failed to fetch user',
        message: error.message,
      });
    }
  });

  /**
   * GET /api/users/:id/posts
   * Fetch posts for a specific user
   */
  router.get('/:id/posts', async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid user ID',
          message: 'User ID must be a valid number',
        });
      }

      const posts = await req.repositories.users.getUserPosts(id);

      res.json(posts);
    } catch (error) {
      console.error(`Error fetching posts for user ${req.params.id}:`, error);
      res.status(500).json({
        error: 'Failed to fetch user posts',
        message: error.message,
      });
    }
  });

  /**
   * GET /api/users/:id/albums
   * Fetch albums for a specific user
   */
  router.get('/:id/albums', async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid user ID',
          message: 'User ID must be a valid number',
        });
      }

      const albums = await req.repositories.users.getUserAlbums(id);

      res.json(albums);
    } catch (error) {
      console.error(`Error fetching albums for user ${req.params.id}:`, error);
      res.status(500).json({
        error: 'Failed to fetch user albums',
        message: error.message,
      });
    }
  });
}
