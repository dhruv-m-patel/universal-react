import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import { r as f } from './index-CfFaKb_3.js';
import { P as r } from './index-DufvmrK5.js';
import { L as I } from './index-Cdhz9Epx.js';
import { P as F } from './Page-CQFF9JD5.js';
import { C as S } from './Container-CefAlw1k.js';
import { S as w } from './Spinner-DALj5yVf.js';
import { C as p } from './Card-pkHQ9FEO.js';
import { P as C } from './Pagination-D0bv8qZe.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-C3scH-S8.js';
import './index-CGJVjR-L.js';
import './DefaultHelmet-CDoBarfe.js';
import './index-DUolvyrz.js';
function t({ posts: a, isFetching: i, error: o, fetchPosts: u }) {
  const [d, U] = f.useState(1),
    P = 10,
    _ = 10;
  f.useEffect(() => {
    !i && !o && a.length === 0 && u(d, P);
  }, [i, o, a, d, P, u]);
  const k = (s) => {
    (U(s), u(s, P), window.scrollTo({ top: 0, behavior: 'smooth' }));
  };
  return e.jsxDEV(
    F,
    {
      title: 'Posts - Universal React',
      description: 'Browse posts from JSONPlaceholder API',
      children: e.jsxDEV(
        S,
        {
          children: e.jsxDEV(
            'div',
            {
              className: 'flex justify-center',
              children: e.jsxDEV(
                'div',
                {
                  className: 'w-full max-w-4xl',
                  children: [
                    e.jsxDEV(
                      'h1',
                      {
                        className: 'text-3xl font-bold mb-6',
                        children: 'Posts',
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                        lineNumber: 32,
                        columnNumber: 13,
                      },
                      this
                    ),
                    i &&
                      e.jsxDEV(
                        'div',
                        {
                          className:
                            'flex items-center justify-center gap-3 py-8',
                          children: [
                            e.jsxDEV(
                              w,
                              { size: 'md' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                lineNumber: 36,
                                columnNumber: 17,
                              },
                              this
                            ),
                            e.jsxDEV(
                              'span',
                              {
                                className: 'text-lg',
                                children: 'Loading posts...',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                lineNumber: 37,
                                columnNumber: 17,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                          lineNumber: 35,
                          columnNumber: 15,
                        },
                        this
                      ),
                    o &&
                      e.jsxDEV(
                        p,
                        {
                          className:
                            'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800',
                          children: e.jsxDEV(
                            'p',
                            {
                              className:
                                'text-red-700 dark:text-red-200 font-medium',
                              children: o,
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                              lineNumber: 43,
                              columnNumber: 17,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                          lineNumber: 42,
                          columnNumber: 15,
                        },
                        this
                      ),
                    !i &&
                      !o &&
                      a.length > 0 &&
                      e.jsxDEV(
                        'div',
                        {
                          className: 'space-y-4',
                          children: [
                            a.map((s) =>
                              e.jsxDEV(
                                p,
                                {
                                  className:
                                    'hover:shadow-md transition-shadow',
                                  children: e.jsxDEV(
                                    I,
                                    {
                                      to: `/posts/${s.id}`,
                                      className: 'block',
                                      children: [
                                        e.jsxDEV(
                                          'h2',
                                          {
                                            className:
                                              'text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 capitalize',
                                            children: s.title,
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                            lineNumber: 57,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                        e.jsxDEV(
                                          'p',
                                          {
                                            className:
                                              'text-gray-700 dark:text-gray-200 line-clamp-2',
                                            children: s.body,
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                            lineNumber: 60,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                        e.jsxDEV(
                                          'div',
                                          {
                                            className:
                                              'mt-3 text-sm text-gray-600 dark:text-gray-400',
                                            children: [
                                              'Post #',
                                              s.id,
                                              ' • User #',
                                              s.userId,
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                            lineNumber: 63,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                      lineNumber: 56,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                },
                                s.id,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                  lineNumber: 52,
                                  columnNumber: 19,
                                },
                                this
                              )
                            ),
                            e.jsxDEV(
                              C,
                              {
                                currentPage: d,
                                totalPages: _,
                                onPageChange: k,
                                className: 'mt-8',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                                lineNumber: 71,
                                columnNumber: 17,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                          lineNumber: 50,
                          columnNumber: 15,
                        },
                        this
                      ),
                    !i &&
                      !o &&
                      a.length === 0 &&
                      e.jsxDEV(
                        p,
                        {
                          className: 'text-center py-8',
                          children: e.jsxDEV(
                            'p',
                            {
                              className:
                                'text-gray-600 dark:text-gray-300 text-lg',
                              children: 'No posts found.',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                              lineNumber: 82,
                              columnNumber: 17,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                          lineNumber: 81,
                          columnNumber: 15,
                        },
                        this
                      ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
                  lineNumber: 31,
                  columnNumber: 11,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
              lineNumber: 30,
              columnNumber: 9,
            },
            this
          ),
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
          lineNumber: 29,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.jsx',
      lineNumber: 25,
      columnNumber: 5,
    },
    this
  );
}
t.propTypes = {
  posts: r.arrayOf(
    r.shape({
      id: r.number.isRequired,
      userId: r.number.isRequired,
      title: r.string.isRequired,
      body: r.string.isRequired,
    })
  ),
  isFetching: r.bool,
  error: r.string,
  fetchPosts: r.func.isRequired,
};
t.defaultProps = { posts: [], isFetching: !1, error: void 0 };
t.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PostsPage',
  props: {
    posts: {
      defaultValue: { value: '[]', computed: !1 },
      description: '',
      type: {
        name: 'arrayOf',
        value: {
          name: 'shape',
          value: {
            id: { name: 'number', required: !0 },
            userId: { name: 'number', required: !0 },
            title: { name: 'string', required: !0 },
            body: { name: 'string', required: !0 },
          },
        },
      },
      required: !1,
    },
    isFetching: {
      defaultValue: { value: 'false', computed: !1 },
      description: '',
      type: { name: 'bool' },
      required: !1,
    },
    error: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    fetchPosts: { description: '', type: { name: 'func' }, required: !0 },
  },
};
const X = { title: 'Pages/PostsPage', component: t },
  R = [
    {
      id: 1,
      userId: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: `quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto`,
    },
    {
      id: 2,
      userId: 1,
      title: 'qui est esse',
      body: `est rerum tempore vitae
sequi sint nihil reprehenderit dolor beatae ea dolores neque
fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis
qui aperiam non debitis possimus qui neque nisi nulla`,
    },
    {
      id: 3,
      userId: 1,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: `et iusto sed quo iure
voluptatem occaecati omnis eligendi aut ad
voluptatem doloribus vel accusantium quis pariatur
molestiae porro eius odio et labore et velit aut`,
    },
  ],
  n = () =>
    e.jsxDEV(
      t,
      { posts: R, isFetching: !1, error: void 0, fetchPosts: () => {} },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.stories.jsx',
        lineNumber: 23,
        columnNumber: 30,
      },
      void 0
    ),
  m = () =>
    e.jsxDEV(
      t,
      { posts: [], isFetching: !0, error: void 0, fetchPosts: () => {} },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.stories.jsx',
        lineNumber: 24,
        columnNumber: 30,
      },
      void 0
    ),
  c = () =>
    e.jsxDEV(
      t,
      {
        posts: [],
        isFetching: !1,
        error: 'Failed to fetch posts',
        fetchPosts: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.stories.jsx',
        lineNumber: 25,
        columnNumber: 28,
      },
      void 0
    ),
  l = () =>
    e.jsxDEV(
      t,
      { posts: [], isFetching: !1, error: void 0, fetchPosts: () => {} },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostsPage/PostsPage.stories.jsx',
        lineNumber: 26,
        columnNumber: 28,
      },
      void 0
    );
n.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
m.__docgenInfo = { description: '', methods: [], displayName: 'Loading' };
c.__docgenInfo = { description: '', methods: [], displayName: 'Error' };
l.__docgenInfo = { description: '', methods: [], displayName: 'Empty' };
var g, h, v;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((g = n.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource:
        '() => <PostsPage posts={mockPosts} isFetching={false} error={undefined} fetchPosts={() => {}} />',
      ...((v = (h = n.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var N, x, b;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((N = m.parameters) == null ? void 0 : N.docs),
    source: {
      originalSource:
        '() => <PostsPage posts={[]} isFetching error={undefined} fetchPosts={() => {}} />',
      ...((b = (x = m.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var j, y, E;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((j = c.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource:
        '() => <PostsPage posts={[]} isFetching={false} error="Failed to fetch posts" fetchPosts={() => {}} />',
      ...((E = (y = c.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : E.source),
    },
  },
};
var D, q, V;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((D = l.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource:
        '() => <PostsPage posts={[]} isFetching={false} error={undefined} fetchPosts={() => {}} />',
      ...((V = (q = l.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : V.source),
    },
  },
};
const Y = ['Default', 'Loading', 'Error', 'Empty'];
export {
  n as Default,
  l as Empty,
  c as Error,
  m as Loading,
  Y as __namedExportsOrder,
  X as default,
};
