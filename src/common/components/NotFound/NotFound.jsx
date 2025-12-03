import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import { Container, Card } from '../../ui';

export default function NotFound() {
  return (
    <Page
      title="404 Not Found - Universal React"
      description="The requested resource was not found"
    >
      <Container>
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 border-red-200 dark:border-slate-700 p-12 text-center max-w-2xl mx-auto shadow-xl">
          <div className="mb-6">
            <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400">
              404
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
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
