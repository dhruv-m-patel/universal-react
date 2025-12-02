import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as stories from './ReduxExamplePage.stories';

const { Default, Loading, Error, Empty } = composeStories(stories);

describe('ReduxExamplePage', () => {
  test('Default story renders page with data', () => {
    render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    expect(
      screen.getByText('An example page showing Redux integration')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Following data was fetched using Redux')
    ).toBeInTheDocument();

    // Check that all 5 items are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
    expect(screen.getByText('Item 5')).toBeInTheDocument();
  });

  test('Loading story shows spinner', () => {
    render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Fetching data with redux...')).toBeInTheDocument();
  });

  test('Error story shows error message', () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });

  test('Empty story renders without data list', () => {
    render(
      <MemoryRouter>
        <Empty />
      </MemoryRouter>
    );

    expect(
      screen.getByText('An example page showing Redux integration')
    ).toBeInTheDocument();
    // Should not show the "Following data was fetched" message when empty
    expect(
      screen.queryByText('Following data was fetched using Redux')
    ).not.toBeInTheDocument();
  });
});
