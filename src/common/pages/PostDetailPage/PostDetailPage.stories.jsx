import React from 'react';
import PostDetailPage from './PostDetailPage';

export default {
  title: 'Pages/PostDetailPage',
  component: PostDetailPage,
};

const mockPost = {
  id: 1,
  userId: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const mockComments = [
  {
    id: 1,
    postId: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    id: 2,
    postId: 1,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

export const Default = () => (
  <PostDetailPage
    post={mockPost}
    isFetchingPost={false}
    postError={undefined}
    comments={mockComments}
    isFetchingComments={false}
    commentsError={undefined}
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);

export const LoadingPost = () => (
  <PostDetailPage
    post={null}
    isFetchingPost
    postError={undefined}
    comments={[]}
    isFetchingComments={false}
    commentsError={undefined}
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);

export const LoadingComments = () => (
  <PostDetailPage
    post={mockPost}
    isFetchingPost={false}
    postError={undefined}
    comments={[]}
    isFetchingComments
    commentsError={undefined}
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);

export const PostError = () => (
  <PostDetailPage
    post={null}
    isFetchingPost={false}
    postError="Failed to fetch post"
    comments={[]}
    isFetchingComments={false}
    commentsError={undefined}
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);

export const CommentsError = () => (
  <PostDetailPage
    post={mockPost}
    isFetchingPost={false}
    postError={undefined}
    comments={[]}
    isFetchingComments={false}
    commentsError="Failed to fetch comments"
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);

export const NoComments = () => (
  <PostDetailPage
    post={mockPost}
    isFetchingPost={false}
    postError={undefined}
    comments={[]}
    isFetchingComments={false}
    commentsError={undefined}
    fetchPost={() => {}}
    fetchComments={() => {}}
  />
);
