import React, { useState, useEffect, useDeferredValue, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Spinner } from '../../ui';

export default function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Defer the search term to keep UI responsive
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // Fetch user and their posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [userResponse, postsResponse] = await Promise.all([
          fetch(`/api/users/${id}`),
          fetch(`/api/users/${id}/posts`),
        ]);

        if (!userResponse.ok || !postsResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const [userData, postsData] = await Promise.all([
          userResponse.json(),
          postsResponse.json(),
        ]);

        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Filter posts based on deferred search term
  const filteredPosts = useMemo(() => {
    if (!deferredSearchTerm) {
      return posts;
    }

    // Simulate expensive filtering operation
    const start = performance.now();
    while (performance.now() - start < 10) {
      // Artificial delay to demonstrate useDeferredValue
    }

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  }, [posts, deferredSearchTerm]);

  // Check if we're showing stale results
  const isStale = searchTerm !== deferredSearchTerm;

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center items-center py-12">
          <Spinner size="lg" label="Loading user profile..." />
        </div>
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container>
        <Card className="bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800">
          <p className="text-red-700 dark:text-red-200 font-medium">
            Error: {error || 'User not found'}
          </p>
        </Card>
        <div className="mt-4">
          <Link
            to="/users"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Users
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-4">
        <Link
          to="/users"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Users
        </Link>
      </div>

      {/* User Profile Card */}
      <Card className="mb-6">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
            <span className="text-blue-700 dark:text-blue-200 text-3xl font-bold">
              {user.name.charAt(0)}
            </span>
          </div>

          {/* User Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {user.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              @{user.username}
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {user.email}
                  </a>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Website:</span>{' '}
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {user.website}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Company:</span>{' '}
                  {user.company.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Catchphrase:</span>{' '}
                  {user.company.catchPhrase}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Address:</span>{' '}
                  {user.address.street}, {user.address.suite},{' '}
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Posts Section */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Posts ({filteredPosts.length})
        </h2>
      </div>

      {/* Search Input with useDeferredValue demo */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts by title or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        {isStale && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Updating results...
          </p>
        )}
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <Card>
          <p className="text-center text-gray-600 dark:text-gray-400 py-8">
            {searchTerm
              ? `No posts found matching "${deferredSearchTerm}"`
              : 'No posts available'}
          </p>
        </Card>
      ) : (
        <div
          className={`grid gap-4 transition-opacity ${isStale ? 'opacity-60' : 'opacity-100'}`}
        >
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <Link to={`/posts/${post.id}`}>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 capitalize">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-700 dark:text-gray-200">{post.body}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Post #{post.id}
                </span>
                <Link
                  to={`/posts/${post.id}`}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* useDeferredValue explanation */}
      <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
          React 18 useDeferredValue Demo
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          This page demonstrates{' '}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">
            useDeferredValue
          </code>
          . The search input updates immediately, but the post filtering is
          deferred to keep the UI responsive. Notice how the search input never
          lags, and the posts fade out slightly while new results are being
          calculated. This is different from{' '}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">
            useTransition
          </code>{' '}
          - here we defer the <em>value</em> itself rather than the state
          update.
        </p>
      </Card>
    </Container>
  );
}
