import React from 'react';
import Page from '../Page';
import { Container, Card } from '../ui';

export default function HomePage() {
  return (
    <Page>
      <Container>
        <Card className="bg-gray-100 dark:bg-slate-800 p-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            404 Not Found!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            The page you are looking for was not found.
          </p>
        </Card>
      </Container>
    </Page>
  );
}
