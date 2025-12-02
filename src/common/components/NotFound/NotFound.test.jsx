import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './NotFound.stories';

const { Default } = composeStories(stories);

describe('NotFound', () => {
  test('Default story renders 404 page', () => {
    render(<Default />);

    expect(screen.getByText('404 Not Found!')).toBeInTheDocument();
    expect(
      screen.getByText('The page you are looking for was not found.')
    ).toBeInTheDocument();
  });
});
