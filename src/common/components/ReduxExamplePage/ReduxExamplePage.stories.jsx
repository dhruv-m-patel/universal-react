import React from 'react';
import ReduxExamplePage from './ReduxExamplePage';

export default {
  title: 'Pages/ReduxExamplePage',
  component: ReduxExamplePage,
};

const mockFetchTestData = () => {};

export const Default = () => (
  <ReduxExamplePage
    isFetching={false}
    error={undefined}
    data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
    fetchTestData={mockFetchTestData}
  />
);

Default.parameters = {
  docs: {
    description: {
      story:
        'Redux example page showing data fetched from Redux store with a list of items.',
    },
  },
};

export const Loading = () => (
  <ReduxExamplePage
    isFetching={true}
    error={undefined}
    data={undefined}
    fetchTestData={mockFetchTestData}
  />
);

Loading.parameters = {
  docs: {
    description: {
      story: 'Loading state while fetching data from Redux.',
    },
  },
};

export const Error = () => (
  <ReduxExamplePage
    isFetching={false}
    error="Failed to fetch data"
    data={undefined}
    fetchTestData={mockFetchTestData}
  />
);

Error.parameters = {
  docs: {
    description: {
      story: 'Error state when data fetching fails.',
    },
  },
};

export const Empty = () => (
  <ReduxExamplePage
    isFetching={false}
    error={undefined}
    data={[]}
    fetchTestData={mockFetchTestData}
  />
);

Empty.parameters = {
  docs: {
    description: {
      story: 'Empty state when no data is available.',
    },
  },
};
