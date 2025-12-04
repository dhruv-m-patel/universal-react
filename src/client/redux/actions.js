import { RSAA } from 'redux-api-middleware';

export const Actions = {
  Posts: {
    FetchPostsPending: 'FetchPostsPending',
    FetchPostsCompleted: 'FetchPostsCompleted',
    FetchPostsFailed: 'FetchPostsFailed',
    FetchPostPending: 'FetchPostPending',
    FetchPostCompleted: 'FetchPostCompleted',
    FetchPostFailed: 'FetchPostFailed',
    FetchCommentsPending: 'FetchCommentsPending',
    FetchCommentsCompleted: 'FetchCommentsCompleted',
    FetchCommentsFailed: 'FetchCommentsFailed',
  },
  Users: {
    FetchUsersPending: 'FetchUsersPending',
    FetchUsersCompleted: 'FetchUsersCompleted',
    FetchUsersFailed: 'FetchUsersFailed',
    FetchUserPending: 'FetchUserPending',
    FetchUserCompleted: 'FetchUserCompleted',
    FetchUserFailed: 'FetchUserFailed',
    FetchUserPostsPending: 'FetchUserPostsPending',
    FetchUserPostsCompleted: 'FetchUserPostsCompleted',
    FetchUserPostsFailed: 'FetchUserPostsFailed',
    FetchUserAlbumsPending: 'FetchUserAlbumsPending',
    FetchUserAlbumsCompleted: 'FetchUserAlbumsCompleted',
    FetchUserAlbumsFailed: 'FetchUserAlbumsFailed',
  },
};

export function generateRequest({ body, ...options }) {
  return {
    [RSAA]: {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: body && JSON.stringify(body),
      ...options,
    },
  };
}

// Posts actions
export const fetchPosts = (page = 1, limit = 10) =>
  generateRequest({
    endpoint: `/api/posts?page=${page}&limit=${limit}`,
    types: [
      Actions.Posts.FetchPostsPending,
      Actions.Posts.FetchPostsCompleted,
      Actions.Posts.FetchPostsFailed,
    ],
  });

export const fetchPost = (id) =>
  generateRequest({
    endpoint: `/api/posts/${id}`,
    types: [
      Actions.Posts.FetchPostPending,
      Actions.Posts.FetchPostCompleted,
      Actions.Posts.FetchPostFailed,
    ],
  });

export const fetchComments = (postId) =>
  generateRequest({
    endpoint: `/api/posts/${postId}/comments`,
    types: [
      Actions.Posts.FetchCommentsPending,
      Actions.Posts.FetchCommentsCompleted,
      Actions.Posts.FetchCommentsFailed,
    ],
  });

// Users actions
export const fetchUsers = () =>
  generateRequest({
    endpoint: '/api/users',
    types: [
      Actions.Users.FetchUsersPending,
      Actions.Users.FetchUsersCompleted,
      Actions.Users.FetchUsersFailed,
    ],
  });

export const fetchUser = (id, includePosts) =>
  generateRequest({
    endpoint: `/api/users/${id}?include_posts=${includePosts}`,
    types: [
      Actions.Users.FetchUserPending,
      Actions.Users.FetchUserCompleted,
      Actions.Users.FetchUserFailed,
    ],
  });

export const fetchUserPosts = (userId) =>
  generateRequest({
    endpoint: `/api/users/${userId}/posts`,
    types: [
      Actions.Users.FetchUserPostsPending,
      Actions.Users.FetchUserPostsCompleted,
      Actions.Users.FetchUserPostsFailed,
    ],
  });

export const fetchUserAlbums = (userId) =>
  generateRequest({
    endpoint: `/api/users/${userId}/albums`,
    types: [
      Actions.Users.FetchUserAlbumsPending,
      Actions.Users.FetchUserAlbumsCompleted,
      Actions.Users.FetchUserAlbumsFailed,
    ],
  });
