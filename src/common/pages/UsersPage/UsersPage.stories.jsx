import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import UsersPage from './UsersPage';

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'leanne@example.com',
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'ervin@example.com',
    phone: '010-692-6593',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'clementine@example.com',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'patricia@example.com',
    phone: '493-170-9623',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'chelsey@example.com',
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
    },
  },
];

export default {
  title: 'Pages/UsersPage',
  component: UsersPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    fetchUsers: () => {},
    users: mockUsers,
    isLoading: false,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default UsersPage with user directory and search functionality using useTransition.',
      },
    },
  },
};

export const Loading = {
  args: {
    fetchUsers: () => {},
    users: [],
    isLoading: true,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'UsersPage in loading state.',
      },
    },
  },
};

export const Error = {
  args: {
    fetchUsers: () => {},
    users: [],
    isLoading: false,
    error: 'Failed to fetch users',
  },
  parameters: {
    docs: {
      description: {
        story: 'UsersPage with error state.',
      },
    },
  },
};

export const EmptyState = {
  args: {
    fetchUsers: () => {},
    users: [],
    isLoading: false,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'UsersPage with no users available.',
      },
    },
  },
};

export const LargeDataset = {
  args: {
    fetchUsers: () => {},
    users: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      username: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `555-000-${String(i + 1).padStart(4, '0')}`,
      website: `user${i + 1}.com`,
      company: {
        name: `Company ${i + 1}`,
      },
    })),
    isLoading: false,
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'UsersPage with large dataset to demonstrate pagination and search filtering.',
      },
    },
  },
};
