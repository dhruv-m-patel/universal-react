import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import * as stories from './UserProfilePage.stories';

const { Default } = composeStories(stories);

describe('UserProfilePage', () => {
  test('Default story renders without errors', () => {
    const { container } = render(<Default />);

    // Check that component renders (will show loading spinner initially)
    expect(container.firstChild).not.toBeNull();
  });
});
