import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Direct imports for SSR (no lazy loading)
// React.lazy() doesn't work with renderToString() - it requires streaming SSR
import HomePage from './components/HomePage';
import ReduxExamplePage from './components/ReduxExamplePage';
import NotFound from './components/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/redux-example" element={<ReduxExamplePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
