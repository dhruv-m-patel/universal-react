import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as stories from './UsersPage.stories';

const { Default } = composeStories(stories);

describe('UsersPage', () => {
  test('Default story renders without errors', () => {
    const { container } = render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>
    );

    // Check that component renders (will show loading spinner initially)
    expect(container.firstChild).not.toBeNull();
  });
});
