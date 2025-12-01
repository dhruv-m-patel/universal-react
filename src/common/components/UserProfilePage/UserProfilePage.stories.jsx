import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';

export default {
  title: 'Pages/UserProfilePage',
  component: UserProfilePage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/users/1']}>
        <Routes>
          <Route path="/users/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <UserProfilePage />;

Default.parameters = {
  docs: {
    description: {
      story:
        'Default UserProfilePage showing user details and their posts with search functionality using useDeferredValue.',
    },
  },
};
