import React from 'react';
import ServerError from './ServerError';

export default {
  title: 'Pages/ServerError',
  component: ServerError,
};

export const Default = {
  parameters: {
    docs: {
      description: {
        story:
          'Default ServerError page displayed when a 500 server error occurs during SSR.',
      },
    },
  },
};
