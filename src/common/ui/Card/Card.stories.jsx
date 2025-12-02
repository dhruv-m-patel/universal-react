import React from 'react';
import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
};

export const Default = () => (
  <Card>
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p>This is a card with some content inside it.</p>
  </Card>
);

export const WithCustomClass = () => (
  <Card className="bg-blue-100">
    <h3 className="text-xl font-bold mb-2">Custom Card</h3>
    <p>This card has a custom background color.</p>
  </Card>
);

export const Jumbotron = () => (
  <Card className="bg-gray-100 dark:bg-gray-700 p-12 text-center">
    <h1 className="text-4xl font-bold mb-4">404 Not Found!</h1>
    <p className="text-lg">The page you are looking for was not found.</p>
  </Card>
);
