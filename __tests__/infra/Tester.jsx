import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../src/client/store';
import { DEFAULT_STATE } from '../../src/client/redux/reducers';

// Tester helper class for snapshot testing with react-test-renderer
// Compatible with Vitest (migrated from Jest/Enzyme)

export default class Tester {
  // eslint-disable-next-line class-methods-use-this
  getSnapshot(Component, props, initialState = DEFAULT_STATE) {
    const store = configureStore(initialState);

    return renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Component {...props} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
  }
}
