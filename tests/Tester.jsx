import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

// Tester helper class for snapshot testing with react-test-renderer
// Compatible with Vitest (migrated from Jest/Enzyme)

export default class Tester {
  // eslint-disable-next-line class-methods-use-this
  getSnapshot(Component, props) {
    return renderer
      .create(
        <MemoryRouter>
          <Component {...props} />
        </MemoryRouter>
      )
      .toJSON();
  }
}
