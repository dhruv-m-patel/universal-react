import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import createStore from './client/store';
import Router from './common/router';

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
