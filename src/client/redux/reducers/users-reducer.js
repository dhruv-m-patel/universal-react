import { Actions } from '../actions';

export const defaultState = {
  // Users list state
  users: {
    isFetching: false,
    error: undefined,
    data: [],
  },
  // Single user detail state
  user: {
    isFetching: false,
    error: undefined,
    data: null,
  },
  // User posts state
  userPosts: {
    isFetching: false,
    error: undefined,
    data: [],
  },
  // User albums state
  userAlbums: {
    isFetching: false,
    error: undefined,
    data: [],
  },
};

export default function usersReducer(
  state = defaultState,
  action = { type: undefined }
) {
  const { payload } = action;

  switch (action.type) {
    // Fetch users list
    case Actions.Users.FetchUsersPending:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Users.FetchUsersCompleted:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Users.FetchUsersFailed:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: false,
          error: 'Failed to fetch users',
        },
      };

    // Fetch single user
    case Actions.Users.FetchUserPending:
      return {
        ...state,
        user: {
          ...state.user,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Users.FetchUserCompleted:
      return {
        ...state,
        user: {
          ...state.user,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Users.FetchUserFailed:
      return {
        ...state,
        user: {
          ...state.user,
          isFetching: false,
          error: 'Failed to fetch user',
        },
      };

    // Fetch user posts
    case Actions.Users.FetchUserPostsPending:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Users.FetchUserPostsCompleted:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Users.FetchUserPostsFailed:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          isFetching: false,
          error: 'Failed to fetch user posts',
        },
      };

    // Fetch user albums
    case Actions.Users.FetchUserAlbumsPending:
      return {
        ...state,
        userAlbums: {
          ...state.userAlbums,
          isFetching: true,
          error: undefined,
        },
      };

    case Actions.Users.FetchUserAlbumsCompleted:
      return {
        ...state,
        userAlbums: {
          ...state.userAlbums,
          isFetching: false,
          data: payload,
        },
      };

    case Actions.Users.FetchUserAlbumsFailed:
      return {
        ...state,
        userAlbums: {
          ...state.userAlbums,
          isFetching: false,
          error: 'Failed to fetch user albums',
        },
      };

    default:
      return state;
  }
}
