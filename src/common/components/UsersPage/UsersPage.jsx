import React, { useState, useTransition, useEffect } from 'react';
import { Container, Card, Spinner, Pagination } from '../../ui';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search with useTransition
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Use startTransition to mark this as a non-urgent update
    // This keeps the input responsive while filtering happens
    startTransition(() => {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase()) ||
          user.username.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filtered);
      setCurrentPage(1); // Reset to first page when filtering
    });
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center items-center py-12">
          <Spinner size="lg" label="Loading users..." />
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Card className="bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800">
          <p className="text-red-700 dark:text-red-200 font-medium">
            Error: {error}
          </p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Users Directory
      </h1>

      {/* Search input with useTransition demo */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, username, or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        {isPending && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Filtering results...
          </p>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Showing {currentUsers.length} of {filteredUsers.length} users
        {searchTerm && ` (filtered from ${users.length} total)`}
      </p>

      {/* User cards */}
      {currentUsers.length === 0 ? (
        <Card>
          <p className="text-center text-gray-600 dark:text-gray-400 py-8">
            No users found matching &quot;{searchTerm}&quot;
          </p>
        </Card>
      ) : (
        <div className="grid gap-4 mb-8">
          {currentUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                  <span className="text-blue-700 dark:text-blue-200 text-xl font-bold">
                    {user.name.charAt(0)}
                  </span>
                </div>

                {/* User info */}
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    @{user.username}
                  </p>

                  <div className="space-y-1">
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
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      <span className="font-medium">Company:</span>{' '}
                      {user.company.name}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}

      {/* useTransition explanation */}
      <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
          React 18 useTransition Demo
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          This page demonstrates{' '}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">
            useTransition
          </code>
          . Try typing in the search box - the input remains responsive while
          filtering happens in the background. The{' '}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">
            isPending
          </code>{' '}
          state shows when a transition is in progress.
        </p>
      </Card>
    </Container>
  );
}
