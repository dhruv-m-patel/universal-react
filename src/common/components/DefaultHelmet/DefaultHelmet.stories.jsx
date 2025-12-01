import React from 'react';
import DefaultHelmet from './DefaultHelmet';

export default {
  title: 'Components/DefaultHelmet',
  component: DefaultHelmet,
  decorators: [
    (Story) => (
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDefaultProps = () => (
  <React.Fragment>
    <DefaultHelmet />
    <p>Inspect page markup in HEAD section to know more.</p>
  </React.Fragment>
);

WithDefaultProps.storyName = 'with default props';

export const WithOverrides = () => (
  <React.Fragment>
    <DefaultHelmet
      title="My Custom Title"
      description="This is a custom page description"
    />
    <p>Inspect page markup in HEAD section to know more.</p>
  </React.Fragment>
);

WithOverrides.storyName = 'with overrides';
