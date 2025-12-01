import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
};

export const Small = () => <Spinner size="sm" />;

export const Medium = () => <Spinner size="md" />;

export const Large = () => <Spinner size="lg" />;

export const WithLabel = () => (
  <div className="flex items-center gap-2">
    <Spinner size="sm" />
    <span>Loading...</span>
  </div>
);
