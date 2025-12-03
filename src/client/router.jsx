import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Use React.lazy for code splitting (works with Vite)
const HomePage = lazy(() => import('../common/components/HomePage'));
const ReduxExamplePage = lazy(
  () => import('../common/components/ReduxExamplePage')
);
const PostsPage = lazy(() => import('../common/components/PostsPage'));
const PostDetailPage = lazy(
  () => import('../common/components/PostDetailPage')
);
const UsersPage = lazy(() => import('../common/components/UsersPage'));
const UserProfilePage = lazy(
  () => import('../common/components/UserProfilePage')
);
const NotFound = lazy(() => import('../common/components/NotFound'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Loading...</p>
    </div>
  );
}

export default function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/redux-example" element={<ReduxExamplePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
