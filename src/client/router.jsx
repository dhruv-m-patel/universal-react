import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Use React.lazy for code splitting (works with Vite)
const HomePage = lazy(() => import('../common/components/HomePage'));
const PostsPage = lazy(() => import('../common/components/PostsPage'));
const PostDetailPage = lazy(
  () => import('../common/components/PostDetailPage')
);
const UsersPage = lazy(() => import('../common/components/UsersPage'));
const UserProfilePage = lazy(
  () => import('../common/components/UserProfilePage')
);
const NotFound = lazy(() => import('../common/components/NotFound'));
const ServerError = lazy(() => import('../common/components/ServerError'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Loading...</p>
    </div>
  );
}

// Component to check for SSR errors and redirect to error pages
function ErrorBoundaryRouter() {
  const location = useLocation();
  const ssrError = useSelector((state) => state.ssr?.error);

  // If there was an SSR error and we're on the original URL, redirect to error page
  if (ssrError?.hasError) {
    const isAlreadyOnErrorPage =
      location.pathname === '/404' || location.pathname === '/500';

    if (!isAlreadyOnErrorPage) {
      // Redirect to appropriate error page based on status code
      const errorPage =
        ssrError.statusCode === 404 || ssrError.statusCode === 400
          ? '/404'
          : '/500';
      return <Navigate to={errorPage} replace />;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />
      {/* Error pages */}
      <Route path="/404" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundaryRouter />
    </Suspense>
  );
}
