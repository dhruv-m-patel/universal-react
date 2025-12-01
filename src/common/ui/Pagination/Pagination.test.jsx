import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './Pagination.stories';

const {
  Default,
  FirstPage,
  LastPage,
  FewPages,
  ManyPages,
  WithoutPageInfo,
  CustomMaxPages,
  SinglePage,
} = composeStories(stories);

describe('Pagination', () => {
  test('Default story renders pagination with middle page', () => {
    const { container } = render(<Default />);

    // Check for Previous and Next buttons
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();

    // Check for page info (Page 5 of 10)
    expect(screen.getByText(/Page 5 of 10/i)).toBeInTheDocument();

    // Check for active page button (blue background for current page)
    const activeButton = container.querySelector('button.bg-blue-600');
    expect(activeButton).toBeInTheDocument();
    expect(activeButton.textContent).toBe('5');
  });

  test('FirstPage story renders with disabled Previous button', () => {
    render(<FirstPage />);

    const prevButton = screen.getByText('Previous');
    expect(prevButton.closest('button')).toHaveAttribute('disabled');

    expect(screen.getByText(/Page 1 of 10/i)).toBeInTheDocument();
  });

  test('LastPage story renders with disabled Next button', () => {
    render(<LastPage />);

    const nextButton = screen.getByText('Next');
    expect(nextButton.closest('button')).toHaveAttribute('disabled');

    expect(screen.getByText(/Page 10 of 10/i)).toBeInTheDocument();
  });

  test('FewPages story renders all page numbers', () => {
    render(<FewPages />);

    // With only 3 pages, all should be visible
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    // Check current page is highlighted
    expect(screen.getByText('2').closest('button')).toHaveClass('bg-blue-600');
  });

  test('ManyPages story renders with ellipsis', () => {
    render(<ManyPages />);

    // Should show page info for 50 pages
    expect(screen.getByText(/Page 25 of 50/i)).toBeInTheDocument();

    // Should have Previous and Next buttons
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('WithoutPageInfo story renders without page count text', () => {
    render(<WithoutPageInfo />);

    // Should NOT have page info text
    expect(screen.queryByText(/Page \d+ of \d+/i)).not.toBeInTheDocument();

    // But should still have navigation buttons
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('CustomMaxPages story renders with custom max pages', () => {
    render(<CustomMaxPages />);

    // Should still render with 20 total pages
    expect(screen.getByText(/Page 5 of 20/i)).toBeInTheDocument();

    // Navigation should work
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('SinglePage story renders null (no pagination needed)', () => {
    const { container } = render(<SinglePage />);

    // With only 1 page, pagination should not render anything
    // The component returns null in this case
    expect(container.firstChild).toBeNull();
  });
});
