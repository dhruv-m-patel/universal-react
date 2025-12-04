import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './ServerError.stories';

const { Default } = composeStories(stories);

describe('ServerError', () => {
  test('Default story renders without errors', () => {
    const { container } = render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check that component renders
    expect(container.firstChild).not.toBeNull();
  });

  test('renders 500 error code', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check for the 500 error code
    expect(getByText('500')).toBeInTheDocument();
  });

  test('renders error message', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check for error message
    expect(getByText('Server Error')).toBeInTheDocument();
    expect(
      getByText(/An unexpected error occurred while processing your request/i)
    ).toBeInTheDocument();
  });

  test('renders Go Home link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check for Go Home link
    const link = getByText('Go Home');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });
});
