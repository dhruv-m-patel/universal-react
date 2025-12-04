import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test, describe } from 'vitest';
import * as stories from './NotFound.stories';

const { Default } = composeStories(stories);

describe('NotFound', () => {
  test('Default story renders 404 page', () => {
    render(
      <BrowserRouter>
        <Default />
      </BrowserRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText(
        "The page you are looking for doesn't exist or has been moved."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument();
  });
});
