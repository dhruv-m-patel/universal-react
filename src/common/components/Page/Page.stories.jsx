import React from 'react';
import Page from './Page';

export default {
  title: 'Components/Page',
  component: Page,
};

export const Default = () => (
  <Page>
    <div>
      <h3>Page Content</h3>
      <p>This is the content inside the Page component.</p>
    </div>
  </Page>
);

Default.parameters = {
  docs: {
    description: {
      story:
        'Default Page layout component with header, logo, and dark mode toggle.',
    },
  },
};

export const WithTitleAndDescription = () => (
  <Page title="Custom Title" description="Custom page description">
    <div>
      <h3>Page with Metadata</h3>
      <p>This page has custom title and description for SEO.</p>
    </div>
  </Page>
);

WithTitleAndDescription.parameters = {
  docs: {
    description: {
      story: 'Page component with custom title and description metadata.',
    },
  },
};
