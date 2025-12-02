import React from 'react';
import NotFound from './NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFound,
};

export const Default = () => <NotFound />;

Default.parameters = {
  docs: {
    description: {
      story: '404 Not Found page displayed when a route does not exist.',
    },
  },
};
