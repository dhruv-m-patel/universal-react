import getInitialState from '../../lib/utils/getInitialState';

/**
 * Extract HTTP status code from error message
 * BaseRepository throws errors like: "HTTP 404: Not Found - url"
 */
function extractStatusCode(error) {
  const match = error.message?.match(/HTTP (\d{3}):/);
  return match ? parseInt(match[1], 10) : 500;
}

export default async function index(router) {
  // Homepage - no data pre-fetching needed
  router.get('/', async (req, res, next) => {
    next();
  });

  // Posts list page - pre-fetch posts data
  router.get('/posts', async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      // Fetch posts data from repository
      const posts = await req.repositories.posts.getPosts(page, limit);

      // Merge with existing initialState, maintaining other data
      const initialState = getInitialState(req);
      req.initialState = {
        ...initialState,
        posts: {
          ...initialState?.posts,
          posts: {
            data: posts,
            currentPage: page,
            totalPages: 10,
          },
        },
      };
      next();
    } catch (error) {
      console.error('Error pre-fetching posts:', error);
      // Pass error to error handler for posts list failures
      error.statusCode = extractStatusCode(error);
      next(error);
    }
  });

  // Post detail page - pre-fetch post and comments data
  router.get('/posts/:id', async (req, res, next) => {
    try {
      const postId = parseInt(req.params.id);

      if (isNaN(postId)) {
        const error = new Error('Invalid post ID');
        error.statusCode = 400;
        return next(error);
      }

      // Fetch post and comments data from repository
      const post = await req.repositories.posts.getPostById(postId);
      const comments = await req.repositories.posts.getPostComments(postId);

      // Merge with existing initialState, maintaining other data
      const initialState = getInitialState(req);
      req.initialState = {
        ...initialState,
        posts: {
          ...initialState?.posts,
          post: {
            data: post,
          },
          comments: {
            data: comments,
          },
        },
      };
      next();
    } catch (error) {
      console.error('Error pre-fetching post detail:', error);
      // Pass error to error handler for post detail failures
      error.statusCode = extractStatusCode(error);
      next(error);
    }
  });

  // Users list page - pre-fetch users data
  router.get('/users', async (req, res, next) => {
    try {
      // Fetch users data from repository
      const users = await req.repositories.users.getUsers();

      // Merge with existing initialState, maintaining other data
      const initialState = getInitialState(req);
      req.initialState = {
        ...initialState,
        users: {
          ...initialState?.users,
          users: {
            data: users,
          },
        },
      };
      next();
    } catch (error) {
      console.error('Error pre-fetching users:', error);
      // Pass error to error handler for users list failures
      error.statusCode = extractStatusCode(error);
      next(error);
    }
  });

  // User profile page - pre-fetch user and user posts data
  router.get('/users/:id', async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) {
        const error = new Error('Invalid user ID');
        error.statusCode = 400;
        return next(error);
      }

      // Fetch user and user posts data from repository
      const user = await req.repositories.users.getUserById(userId);
      const userPosts = await req.repositories.users.getUserPosts(userId);

      // Merge with existing initialState, maintaining other data
      const initialState = getInitialState(req);
      req.initialState = {
        ...initialState,
        users: {
          ...initialState?.users,
          user: {
            data: user,
          },
          userPosts: {
            data: userPosts,
          },
        },
      };
      next();
    } catch (error) {
      console.error('Error pre-fetching user profile:', error);
      // Pass error to error handler for user profile failures
      error.statusCode = extractStatusCode(error);
      next(error);
    }
  });
}
