import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'UI/Pagination',
  component: Pagination,
};

export const Default = () => (
  <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
);

export const FirstPage = () => (
  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
);

export const LastPage = () => (
  <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
);

export const FewPages = () => (
  <Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />
);

export const ManyPages = () => (
  <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} />
);

export const WithoutPageInfo = () => (
  <Pagination
    currentPage={5}
    totalPages={10}
    onPageChange={() => {}}
    showPageInfo={false}
  />
);

export const CustomMaxPages = () => (
  <Pagination
    currentPage={5}
    totalPages={20}
    onPageChange={() => {}}
    maxPagesToShow={7}
  />
);

export const SinglePage = () => (
  <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
);
