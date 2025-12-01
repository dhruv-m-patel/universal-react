import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './Container.stories';

const { Default, Fluid, WithCustomClass } = composeStories(stories);

describe('Container', () => {
  test('Default story renders container with max-width', () => {
    const { container } = render(<Default />);

    expect(screen.getByText('Default Container Content')).toBeInTheDocument();

    // Default container should have max-w-7xl class
    const containerDiv = container.querySelector('.max-w-7xl');
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass('mx-auto', 'px-4');
  });

  test('Fluid story renders full-width container', () => {
    const { container } = render(<Fluid />);

    expect(
      screen.getByText('Fluid Container Content (Full Width)')
    ).toBeInTheDocument();

    // Fluid container should have w-full class instead of max-w-7xl
    const fluidContainer = container.querySelector('.w-full');
    expect(fluidContainer).toBeInTheDocument();
    expect(fluidContainer).toHaveClass('px-4');
  });

  test('WithCustomClass story renders with custom classes', () => {
    const { container } = render(<WithCustomClass />);

    expect(
      screen.getByText('Container with Custom Background')
    ).toBeInTheDocument();

    // Should have custom class bg-blue-50
    const customContainer = container.querySelector('.bg-blue-50');
    expect(customContainer).toBeInTheDocument();
    expect(customContainer).toHaveClass('max-w-7xl', 'mx-auto', 'px-4');
  });
});
