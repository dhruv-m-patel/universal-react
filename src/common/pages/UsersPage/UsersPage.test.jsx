import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './UsersPage.stories';

const { Default } = composeStories(stories);

describe('UsersPage', () => {
  test('Default story renders without errors', () => {
    const { container } = render(<Default />);

    // Check that component renders
    expect(container.firstChild).not.toBeNull();
  });
});
