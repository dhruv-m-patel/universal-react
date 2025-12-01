import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { expect, test, describe } from 'vitest';
import { Helmet } from 'react-helmet';
import * as stories from './DefaultHelmet.stories';

const { WithDefaultProps, WithOverrides } = composeStories(stories);

describe('DefaultHelmet', () => {
  test('WithDefaultProps story renders with default title and description', () => {
    render(<WithDefaultProps />);

    const helmet = Helmet.peek();

    // Check default title
    expect(helmet.title).toBe('Universal React App');

    // Check default description
    const descriptionMeta = helmet.metaTags.find(
      (tag) => tag.name === 'description'
    );
    expect(descriptionMeta.content).toBe(
      'A universal react app SSR and database support'
    );
  });

  test('WithOverrides story renders with custom title and description', () => {
    render(<WithOverrides />);

    const helmet = Helmet.peek();

    // Check custom title
    expect(helmet.title).toBe('My Custom Title');

    // Check custom description
    const descriptionMeta = helmet.metaTags.find(
      (tag) => tag.name === 'description'
    );
    expect(descriptionMeta.content).toBe('This is a custom page description');
  });
});
