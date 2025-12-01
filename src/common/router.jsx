import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Use React.lazy for code splitting (works with Vite)
const HomePage = lazy(() => import('./components/HomePage'));
const ReduxExamplePage = lazy(() => import('./components/ReduxExamplePage'));
const PostsPage = lazy(() => import('./components/PostsPage'));
const NotFound = lazy(() => import('./components/NotFound'));

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
