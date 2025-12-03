import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as stories from './HomePage.stories';

const { Default } = composeStories(stories);

describe('HomePage', () => {
  test('Default story renders home page content', () => {
    render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    expect(
      screen.getByText('This starter app was built with:')
    ).toBeInTheDocument();
    expect(screen.getByText('React v18')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('React Router v6')).toBeInTheDocument();
    expect(screen.getByText('Vite v5')).toBeInTheDocument();

    // Check navigation links
    expect(
      screen.getByText('View Posts (Modern React Features Demo)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('View Users (useTransition Demo)')
    ).toBeInTheDocument();
  });
});
