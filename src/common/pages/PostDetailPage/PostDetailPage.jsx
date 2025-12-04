import React, { useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Page from '../../components/Page';
import { Container, Card, Spinner } from '../../ui';

// Comments component wrapped in Suspense
function Comments({ comments, isFetchingComments, commentsError }) {
  if (isFetchingComments) {
    return (
      <div className="flex items-center justify-center gap-3 py-4">
        <Spinner size="sm" />
        <span>Loading comments...</span>
      </div>
    );
  }

  if (commentsError) {
    return (
      <Card className="bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800">
        <p className="text-red-700 dark:text-red-200 font-medium">
          {commentsError}
        </p>
      </Card>
    );
  }

  if (comments.length === 0) {
    return (
      <Card className="text-center py-4">
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          No comments yet.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
              <span className="text-blue-700 dark:text-blue-200 font-semibold">
                {comment.email.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                {comment.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {comment.email}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                {comment.body}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  isFetchingComments: PropTypes.bool,
  commentsError: PropTypes.string,
};

Comments.defaultProps = {
  comments: [],
  isFetchingComments: false,
  commentsError: undefined,
};

export default function PostDetailPage({
  post,
  isFetchingPost,
  postError,
  comments,
  isFetchingComments,
  commentsError,
  fetchPost,
  fetchComments,
}) {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  // Track the last fetched post ID to prevent unnecessary re-fetches
  const lastFetchedPostId = useRef(null);
  const lastFetchedCommentsPostId = useRef(null);

  // Fetch post if needed (on mount or when ID changes)
  useEffect(() => {
    // Check if we need to fetch:
    // 1. Post doesn't exist, OR
    // 2. Post ID doesn't match requested ID (navigated to different post), OR
    // 3. We haven't fetched this ID yet (but still checking for SSR data)
    const needsFetch =
      !post ||
      post.id !== postId ||
      (lastFetchedPostId.current !== postId &&
        lastFetchedPostId.current !== null);

    // Only fetch if we haven't already fetched this ID and we're not currently fetching
    if (
      postId &&
      !isFetchingPost &&
      !postError &&
      needsFetch &&
      lastFetchedPostId.current !== postId
    ) {
      lastFetchedPostId.current = postId;
      fetchPost(postId);
    }
    // If we have SSR data for this post, mark it as fetched
    else if (post && post.id === postId && lastFetchedPostId.current === null) {
      lastFetchedPostId.current = postId;
    }
  }, [postId, post, isFetchingPost, postError, fetchPost]);

  // Fetch comments when post is loaded
  useEffect(() => {
    // Only fetch comments if:
    // 1. We have a post loaded
    // 2. The post ID matches what we're viewing
    // 3. We haven't fetched comments for this post yet
    if (
      post &&
      post.id === postId &&
      lastFetchedCommentsPostId.current !== postId &&
      !isFetchingComments &&
      !commentsError
    ) {
      lastFetchedCommentsPostId.current = postId;
      fetchComments(postId);
    }
  }, [post, postId, isFetchingComments, commentsError, fetchComments]);

  return (
    <Page
      title={
        post
          ? `${post.title} - Universal React`
          : 'Post Detail - Universal React'
      }
      description={post ? post.body : 'View post details'}
    >
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Link
              to="/posts"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              ← Back to Posts
            </Link>

            {isFetchingPost && (
              <div className="flex items-center justify-center gap-3 py-8">
                <Spinner size="md" />
                <span className="text-lg">Loading post...</span>
              </div>
            )}

            {postError && (
              <Card className="bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800">
                <p className="text-red-700 dark:text-red-200 font-medium">
                  {postError}
                </p>
              </Card>
            )}

            {!isFetchingPost && !postError && post && (
              <div className="space-y-6">
                <Card>
                  <h1 className="text-3xl font-bold mb-4 capitalize text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h1>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Post #{post.id} • User #{post.userId}
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                    {post.body}
                  </p>
                </Card>

                {/* Suspense boundary for comments */}
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center gap-3 py-8">
                      <Spinner size="md" />
                      <span>Loading comments...</span>
                    </div>
                  }
                >
                  <Comments
                    comments={comments}
                    isFetchingComments={isFetchingComments}
                    commentsError={commentsError}
                  />
                </Suspense>
              </div>
            )}

            {!isFetchingPost && !postError && !post && (
              <Card className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Post not found.
                </p>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </Page>
  );
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  isFetchingPost: PropTypes.bool,
  postError: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  isFetchingComments: PropTypes.bool,
  commentsError: PropTypes.string,
  fetchPost: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

PostDetailPage.defaultProps = {
  post: null,
  isFetchingPost: false,
  postError: undefined,
  comments: [],
  isFetchingComments: false,
  commentsError: undefined,
};
