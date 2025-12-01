import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from '../Page';
import { Container, Card, Spinner, Pagination } from '../ui';

export default function PostsPage({ posts, isFetching, error, fetchPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = 10; // JSONPlaceholder has 100 posts total

  useEffect(() => {
    if (!isFetching && !error && posts.length === 0) {
      fetchPosts(currentPage, postsPerPage);
    }
  }, [isFetching, error, posts, currentPage, postsPerPage, fetchPosts]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchPosts(page, postsPerPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Page
      title="Posts - Universal React"
      description="Browse posts from JSONPlaceholder API"
    >
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Posts</h1>

            {isFetching && (
              <div className="flex items-center justify-center gap-3 py-8">
                <Spinner size="md" />
                <span className="text-lg">Loading posts...</span>
              </div>
            )}

            {error && (
              <Card className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700">
                <p className="text-red-600 dark:text-red-200">{error}</p>
              </Card>
            )}

            {!isFetching && !error && posts.length > 0 && (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <Link to={`/posts/${post.id}`} className="block">
                      <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800 capitalize">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                        {post.body}
                      </p>
                      <div className="mt-3 text-sm text-gray-500">
                        Post #{post.id} • User #{post.userId}
                      </div>
                    </Link>
                  </Card>
                ))}

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mt-8"
                />
              </div>
            )}

            {!isFetching && !error && posts.length === 0 && (
              <Card className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-300">
                  No posts found.
                </p>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </Page>
  );
}

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  fetchPosts: PropTypes.func.isRequired,
};

PostsPage.defaultProps = {
  posts: [],
  isFetching: false,
  error: undefined,
};
