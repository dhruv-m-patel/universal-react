import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import createStore from './client/store';
// Use server-specific router without lazy loading
// React.lazy() doesn't work with renderToString() - requires streaming SSR (Wave 5)
import Router from './common/router-server';

// Server-side entry point for Vite SSR
export function render(url, initialState = {}) {
  const store = createStore(initialState);

  const html = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <Router />
      </Provider>
    </StaticRouter>
  );

  const preloadedState = store.getState();

  return { html, preloadedState };
}
