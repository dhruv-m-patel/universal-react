import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
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
        <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 border-red-200 dark:border-slate-700 p-12 text-center max-w-2xl mx-auto shadow-xl">
          <div className="mb-6">
            <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400">
              500
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Server Error
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            An unexpected error occurred while processing your request. Please
            try again later.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
        </Card>
      </Container>
    </Page>
  );
}
