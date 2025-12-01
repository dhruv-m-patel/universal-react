import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './Page.stories';

const { Default, WithTitleAndDescription } = composeStories(stories);

describe('Page', () => {
  test('Default story renders Page component with header', () => {
    const { container } = render(<Default />);

    // Check for header elements
    expect(screen.getByText('React App')).toBeInTheDocument();
    expect(
      screen.getByText('A React starter app with SSR support.')
    ).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();

    // Check for logo
    const logo = container.querySelector('img[alt="logo"]');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/react.svg');

    // Check that children content is rendered
    expect(screen.getByText('Page Content')).toBeInTheDocument();
    expect(
      screen.getByText('This is the content inside the Page component.')
    ).toBeInTheDocument();
  });

  test('WithTitleAndDescription story renders with custom metadata', () => {
    render(<WithTitleAndDescription />);

    expect(screen.getByText('Page with Metadata')).toBeInTheDocument();
    expect(
      screen.getByText('This page has custom title and description for SEO.')
    ).toBeInTheDocument();
  });
});
