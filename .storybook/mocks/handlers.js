import { http, HttpResponse } from 'msw';

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
    },
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
    },
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
  },
];

const mockPosts = [
  {
    id: 1,
    userId: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 1,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    userId: 1,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

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

export const handlers = [
  // Get all users
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(mockUsers);
  }),

  // Get single user
  http.get('https://jsonplaceholder.typicode.com/users/:id', ({ params }) => {
    const user = mockUsers.find((u) => u.id === Number(params.id));
    if (user) {
      return HttpResponse.json(user);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  // Get all posts
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(mockPosts);
  }),

  // Get single post
  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    const post = mockPosts.find((p) => p.id === Number(params.id));
    if (post) {
      return HttpResponse.json(post);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  // Get posts by user
  http.get('https://jsonplaceholder.typicode.com/users/:userId/posts', () => {
    return HttpResponse.json(mockPosts);
  }),

  // Get comments for a post
  http.get(
    'https://jsonplaceholder.typicode.com/posts/:postId/comments',
    () => {
      return HttpResponse.json(mockComments);
    }
  ),
];
