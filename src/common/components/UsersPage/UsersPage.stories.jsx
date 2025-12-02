import React from 'react';
import UsersPage from './UsersPage';

export default {
  title: 'Pages/UsersPage',
  component: UsersPage,
};

export const Default = () => <UsersPage />;

Default.parameters = {
  docs: {
    description: {
      story:
        'Default UsersPage with user directory and search functionality using useTransition.',
    },
  },
};
