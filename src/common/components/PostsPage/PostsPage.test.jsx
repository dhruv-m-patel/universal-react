import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as stories from './PostsPage.stories';

const { Default, Loading, Error, Empty } = composeStories(stories);

describe('PostsPage', () => {
  test('Default story renders posts list', () => {
    render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(
      screen.getByText(/sunt aut facere repellat provident/i)
    ).toBeInTheDocument();
    expect(screen.getByText('qui est esse')).toBeInTheDocument();

    // Check that all 3 posts are rendered
    const postLinks = screen.getAllByRole('link');
    // 3 post cards rendered
    expect(postLinks.length).toBe(3);
  });

  test('Loading story shows spinner', () => {
    render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    );

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Loading posts...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('Error story shows error message', () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Failed to fetch posts')).toBeInTheDocument();
  });

  test('Empty story shows no posts message', () => {
    render(
      <MemoryRouter>
        <Empty />
      </MemoryRouter>
    );

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('No posts found.')).toBeInTheDocument();
  });
});
