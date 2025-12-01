import React from 'react';
import Container from './Container';

export default {
  title: 'UI/Container',
  component: Container,
};

export const Default = () => (
  <Container>
    <div className="bg-gray-200 p-4">Default Container Content</div>
  </Container>
);

export const Fluid = () => (
  <Container fluid>
    <div className="bg-gray-200 p-4">Fluid Container Content (Full Width)</div>
  </Container>
);

export const WithCustomClass = () => (
  <Container className="bg-blue-50">
    <div className="p-4">Container with Custom Background</div>
  </Container>
);
