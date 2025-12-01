import { Actions } from '../actions';

export const defaultState = {
  // Posts list state
  posts: {
    isFetching: false,
    error: undefined,
    data: [],
    currentPage: 1,
    totalPages: 10, // JSONPlaceholder has 100 posts, 10 per page = 10 pages
  },
  // Single post detail state
  post: {
    isFetching: false,
    error: undefined,
    data: null,
  },
  // Comments state
  comments: {
    isFetching: false,
    error: undefined,
    data: [],
  },
};

export default function postsReducer(
  state = defaultState,
  action = { type: undefined }
) {
  const { payload } = action;

  switch (action.type) {
    // Fetch posts list
    case Actions.Posts.FetchPostsPending:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Posts.FetchPostsCompleted:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Posts.FetchPostsFailed:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: false,
          error: 'Failed to fetch posts',
        },
      };

    // Fetch single post
    case Actions.Posts.FetchPostPending:
      return {
        ...state,
        post: {
          ...state.post,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Posts.FetchPostCompleted:
      return {
        ...state,
        post: {
          ...state.post,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Posts.FetchPostFailed:
      return {
        ...state,
        post: {
          ...state.post,
          isFetching: false,
          error: 'Failed to fetch post',
        },
      };

    // Fetch comments
    case Actions.Posts.FetchCommentsPending:
      return {
        ...state,
        comments: {
          ...state.comments,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Posts.FetchCommentsCompleted:
      return {
        ...state,
        comments: {
          ...state.comments,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Posts.FetchCommentsFailed:
      return {
        ...state,
        comments: {
          ...state.comments,
          isFetching: false,
          error: 'Failed to fetch comments',
        },
      };

    default:
      return state;
  }
}
