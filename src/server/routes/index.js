import getInitialState from '../../lib/utils/getInitialState';

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
    } catch (error) {
      console.error('Error pre-fetching posts:', error);
      // Continue to SSR even if pre-fetch fails
    }
    next();
  });

  // Post detail page - pre-fetch post and comments data
  router.get('/posts/:id', async (req, res, next) => {
    try {
      const postId = parseInt(req.params.id);

      if (!isNaN(postId)) {
        // Fetch post and comments data from repository in parallel
        const [post, comments] = await Promise.all([
          req.repositories.posts.getPostById(postId),
          req.repositories.posts.getPostComments(postId),
        ]);

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
      }
    } catch (error) {
      console.error('Error pre-fetching post detail:', error);
      // Continue to SSR even if pre-fetch fails
    }
    next();
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
    } catch (error) {
      console.error('Error pre-fetching users:', error);
      // Continue to SSR even if pre-fetch fails
    }
    next();
  });

  // User profile page - pre-fetch user and user posts data
  router.get('/users/:id', async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id);

      if (!isNaN(userId)) {
        // Fetch user and user posts data from repository in parallel
        const [user, userPosts] = await Promise.all([
          req.repositories.users.getUserById(userId),
          req.repositories.users.getUserPosts(userId),
        ]);

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
      }
    } catch (error) {
      console.error('Error pre-fetching user profile:', error);
      // Continue to SSR even if pre-fetch fails
    }
    next();
  });
}
