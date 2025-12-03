import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Direct imports for SSR (no lazy loading)
// React.lazy() doesn't work with renderToString() - it requires streaming SSR
import HomePage from '../common/components/HomePage';
import PostsPage from '../common/components/PostsPage';
import PostDetailPage from '../common/components/PostDetailPage';
import UsersPage from '../common/components/UsersPage';
import UserProfilePage from '../common/components/UserProfilePage';
import NotFound from '../common/components/NotFound';
import ServerError from '../common/components/ServerError';

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
