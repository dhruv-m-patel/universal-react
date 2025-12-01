import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './Spinner.stories';

const { Small, Medium, Large, WithLabel } = composeStories(stories);

describe('Spinner', () => {
  test('Small spinner renders with correct size classes', () => {
    const { container } = render(<Small />);
    const spinner = container.querySelector('[role="status"]');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('h-4', 'w-4');
    expect(spinner).toHaveClass('animate-spin');
  });

  test('Medium spinner renders with correct size classes', () => {
    const { container } = render(<Medium />);
    const spinner = container.querySelector('[role="status"]');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('h-8', 'w-8');
  });

  test('Large spinner renders with correct size classes', () => {
    const { container } = render(<Large />);
    const spinner = container.querySelector('[role="status"]');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('h-12', 'w-12');
  });

  test('WithLabel story renders spinner with text label', () => {
    const { container } = render(<WithLabel />);

    // Should have spinner with role="status"
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Should have visible "Loading..." text (not in sr-only)
    const loadingTexts = screen.getAllByText('Loading...');
    expect(loadingTexts).toHaveLength(2); // One in sr-only, one visible

    // Verify the container has flex layout for label
    const wrapper = container.querySelector('.flex.items-center.gap-2');
    expect(wrapper).toBeInTheDocument();
  });
});
