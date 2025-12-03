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

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
