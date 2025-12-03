import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import { Container, Card } from '../../ui';

/**
 * ServerError Component
 * Displays a 500 error page when a server error occurs during SSR
 */
export default function ServerError() {
  return (
    <Page
      title="500 Server Error - Universal React"
      description="An unexpected server error occurred"
    >
      <Container>
        <Card className="bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800 p-12 text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-red-600 dark:text-red-400">
            500
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Server Error
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            An unexpected error occurred while processing your request.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Go Home
          </Link>
        </Card>
      </Container>
    </Page>
  );
}
