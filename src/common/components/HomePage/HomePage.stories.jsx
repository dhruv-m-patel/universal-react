import React from 'react';
import HomePage from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

export const Default = () => <HomePage />;

Default.parameters = {
  docs: {
    description: {
      story:
        'Home page showing the starter app features and links to example pages.',
    },
  },
};
