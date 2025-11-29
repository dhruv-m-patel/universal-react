import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./components/HomePage'));
const ReduxExamplePage = loadable(() =>
  import('./components/ReduxExamplePage')
);
const NotFound = loadable(() => import('./components/NotFound'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/redux-example" element={<ReduxExamplePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
