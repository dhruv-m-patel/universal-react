import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as stories from './PostDetailPage.stories';

const {
  Default,
  LoadingPost,
  LoadingComments,
  PostError,
  CommentsError,
  NoComments,
} = composeStories(stories);

describe('PostDetailPage', () => {
  test('Default story renders post with comments', () => {
    render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check for post title
    expect(
      screen.getByText(/sunt aut facere repellat provident/i)
    ).toBeInTheDocument();

    // Check for post body
    expect(screen.getByText(/quia et suscipit/i)).toBeInTheDocument();

    // Check for comments section (includes count)
    expect(screen.getByText(/Comments \(\d+\)/i)).toBeInTheDocument();

    // Check for comment content
    expect(
      screen.getByText(/id labore ex et quam laborum/i)
    ).toBeInTheDocument();
  });

  test('LoadingPost story shows spinner while loading post', () => {
    render(
      <MemoryRouter>
        <LoadingPost />
      </MemoryRouter>
    );

    // Should show spinner
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Should not show post content
    expect(
      screen.queryByText(/sunt aut facere repellat provident/i)
    ).not.toBeInTheDocument();
  });

  test('LoadingComments story shows post but loading spinner for comments', () => {
    render(
      <MemoryRouter>
        <LoadingComments />
      </MemoryRouter>
    );

    // Post should be visible
    expect(
      screen.getByText(/sunt aut facere repellat provident/i)
    ).toBeInTheDocument();

    // Comments section should show loading spinner
    const spinners = screen.getAllByRole('status');
    expect(spinners.length).toBeGreaterThan(0);
  });

  test('PostError story shows error message when post fails to load', () => {
    render(
      <MemoryRouter>
        <PostError />
      </MemoryRouter>
    );

    // Should show error message
    expect(screen.getByText(/Failed to fetch post/i)).toBeInTheDocument();

    // Should not show post content
    expect(
      screen.queryByText(/sunt aut facere repellat provident/i)
    ).not.toBeInTheDocument();
  });

  test('CommentsError story shows post but error for comments', () => {
    render(
      <MemoryRouter>
        <CommentsError />
      </MemoryRouter>
    );

    // Post should be visible
    expect(
      screen.getByText(/sunt aut facere repellat provident/i)
    ).toBeInTheDocument();

    // Should show comments error
    expect(screen.getByText(/Failed to fetch comments/i)).toBeInTheDocument();
  });

  test('NoComments story shows post without comments', () => {
    render(
      <MemoryRouter>
        <NoComments />
      </MemoryRouter>
    );

    // Post should be visible
    expect(
      screen.getByText(/sunt aut facere repellat provident/i)
    ).toBeInTheDocument();

    // Comments section should show "No comments yet"
    expect(screen.getByText(/No comments yet/i)).toBeInTheDocument();
  });
});
