import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './client/store';
import Router from './common/router';
import './common/styles/tailwind.css';

// Client-side entry point for Vite
function render() {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const store = createStore(preloadedState);

  hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Start the app
render();

// Hot Module Replacement (HMR) for development
if (import.meta.hot) {
  // Accept updates to this module
  import.meta.hot.accept();

  // Accept updates to the router module and re-render
  import.meta.hot.accept('./common/router', (newRouter) => {
    if (newRouter) {
      render();
    }
  });
}
