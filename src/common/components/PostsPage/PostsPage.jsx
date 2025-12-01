import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from '../Page';
import { Container, Card, Spinner } from '../ui';

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

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust start if we're near the end
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push(i);
    }
    return pages;
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
                <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500 mt-4">
                  Page {currentPage} of {totalPages}
                </div>
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
