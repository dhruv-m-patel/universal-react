import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Direct imports for SSR (no lazy loading)
// React.lazy() doesn't work with renderToString() - it requires streaming SSR
import HomePage from '../common/pages/HomePage';
import PostsPage from '../common/pages/PostsPage';
import PostDetailPage from '../common/pages/PostDetailPage';
import UsersPage from '../common/pages/UsersPage';
import UserProfilePage from '../common/pages/UserProfilePage';
import NotFound from '../common/pages/NotFound';
import ServerError from '../common/pages/ServerError';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />
      {/* Error pages for SSR error handling */}
      <Route path="/404" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
