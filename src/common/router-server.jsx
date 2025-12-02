import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Direct imports for SSR (no lazy loading)
// React.lazy() doesn't work with renderToString() - it requires streaming SSR
import HomePage from './components/HomePage';
import ReduxExamplePage from './components/ReduxExamplePage';
import PostsPage from './components/PostsPage';
import PostDetailPage from './components/PostDetailPage';
import NotFound from './components/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/redux-example" element={<ReduxExamplePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
