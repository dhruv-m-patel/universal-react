import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './Card.stories';

const { Default, WithCustomClass, Jumbotron } = composeStories(stories);

describe('Card', () => {
  test('Default story renders with correct content', () => {
    const { container } = render(<Default />);

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText(/card with some content/i)).toBeInTheDocument();

    // Verify default Card styling
    const cardDiv = container.querySelector('div[class*="rounded-lg"]');
    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv).toHaveClass('bg-gray-50');
    expect(cardDiv).toHaveClass('p-6');
  });

  test('WithCustomClass story applies custom classes', () => {
    const { container } = render(<WithCustomClass />);

    expect(screen.getByText('Custom Card')).toBeInTheDocument();

    const cardDiv = container.querySelector('div[class*="bg-blue-100"]');
    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv).toHaveClass('bg-blue-100');
    // Should still have default classes
    expect(cardDiv).toHaveClass('rounded-lg');
  });

  test('Jumbotron story renders large centered content', () => {
    render(<Jumbotron />);

    expect(screen.getByText('404 Not Found!')).toBeInTheDocument();
    expect(
      screen.getByText(/page you are looking for was not found/i)
    ).toBeInTheDocument();
  });
});
