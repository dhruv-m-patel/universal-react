import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';

// Mock user data
const mockUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'leanne@example.com',
  phone: '1-770-736-8031',
  website: 'hildegard.org',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
  },
};

// Mock posts data
const mockPosts = [
  {
    id: 1,
    userId: 1,
    title: 'sunt aut facere repellat provident',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 1,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis',
  },
  {
    id: 3,
    userId: 1,
    title: 'ea molestias quasi exercitationem repellat',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
];

export default {
  title: 'Pages/UserProfilePage',
  component: UserProfilePage,
  parameters: {
    // Disable global MemoryRouter - this story has its own with route params
    router: { disable: true },
  },
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

export const Default = {
  args: {
    fetchUser: () => {},
    user: mockUser,
    posts: mockPosts,
    isLoading: false,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default UserProfilePage showing user details and their posts with search functionality using useDeferredValue.',
      },
    },
  },
};

export const Loading = {
  args: {
    fetchUser: () => {},
    user: null,
    posts: [],
    isLoading: true,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'UserProfilePage in loading state.',
      },
    },
  },
};

export const Error = {
  args: {
    fetchUser: () => {},
    user: null,
    posts: [],
    isLoading: false,
    error: 'Failed to fetch user',
  },
  parameters: {
    docs: {
      description: {
        story: 'UserProfilePage with error state.',
      },
    },
  },
};

export const EmptyPosts = {
  args: {
    fetchUser: () => {},
    user: mockUser,
    posts: [],
    isLoading: false,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'UserProfilePage with user but no posts.',
      },
    },
  },
};
