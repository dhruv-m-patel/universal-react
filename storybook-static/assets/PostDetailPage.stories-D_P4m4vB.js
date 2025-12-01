import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import { r as v } from './index-CfFaKb_3.js';
import { P as s } from './index-DufvmrK5.js';
import { L as A } from './index-Cdhz9Epx.js';
import { P as B } from './Page-CQFF9JD5.js';
import { C as J } from './Container-CefAlw1k.js';
import { S as N } from './Spinner-DALj5yVf.js';
import { C as m } from './Card-pkHQ9FEO.js';
import './Pagination-D0bv8qZe.js';
import { g as K } from './index-CGJVjR-L.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-C3scH-S8.js';
import './DefaultHelmet-CDoBarfe.js';
import './index-DUolvyrz.js';
function D({ comments: t, isFetchingComments: i, commentsError: o }) {
  return i
    ? e.jsxDEV(
        'div',
        {
          className: 'flex items-center justify-center gap-3 py-4',
          children: [
            e.jsxDEV(
              N,
              { size: 'sm' },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                lineNumber: 12,
                columnNumber: 9,
              },
              this
            ),
            e.jsxDEV(
              'span',
              { children: 'Loading comments...' },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                lineNumber: 13,
                columnNumber: 9,
              },
              this
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName:
            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
          lineNumber: 11,
          columnNumber: 7,
        },
        this
      )
    : o
      ? e.jsxDEV(
          m,
          {
            className:
              'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800',
            children: e.jsxDEV(
              'p',
              {
                className: 'text-red-700 dark:text-red-200 font-medium',
                children: o,
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                lineNumber: 21,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
            lineNumber: 20,
            columnNumber: 7,
          },
          this
        )
      : t.length === 0
        ? e.jsxDEV(
            m,
            {
              className: 'text-center py-4',
              children: e.jsxDEV(
                'p',
                {
                  className: 'text-gray-600 dark:text-gray-300 text-lg',
                  children: 'No comments yet.',
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                  lineNumber: 31,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
              lineNumber: 30,
              columnNumber: 7,
            },
            this
          )
        : e.jsxDEV(
            'div',
            {
              className: 'space-y-4',
              children: [
                e.jsxDEV(
                  'h3',
                  {
                    className: 'text-xl font-semibold',
                    children: ['Comments (', t.length, ')'],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                    lineNumber: 40,
                    columnNumber: 7,
                  },
                  this
                ),
                t.map((a) =>
                  e.jsxDEV(
                    m,
                    {
                      children: e.jsxDEV(
                        'div',
                        {
                          className: 'flex items-start gap-3',
                          children: [
                            e.jsxDEV(
                              'div',
                              {
                                className:
                                  'flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center',
                                children: e.jsxDEV(
                                  'span',
                                  {
                                    className:
                                      'text-blue-700 dark:text-blue-200 font-semibold',
                                    children: a.email.charAt(0).toUpperCase(),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                    lineNumber: 45,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                lineNumber: 44,
                                columnNumber: 13,
                              },
                              this
                            ),
                            e.jsxDEV(
                              'div',
                              {
                                className: 'flex-1',
                                children: [
                                  e.jsxDEV(
                                    'h4',
                                    {
                                      className:
                                        'font-semibold text-gray-900 dark:text-gray-100',
                                      children: a.name,
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                      lineNumber: 50,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  e.jsxDEV(
                                    'p',
                                    {
                                      className:
                                        'text-sm text-gray-600 dark:text-gray-400',
                                      children: a.email,
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                      lineNumber: 53,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  e.jsxDEV(
                                    'p',
                                    {
                                      className:
                                        'mt-2 text-gray-700 dark:text-gray-200',
                                      children: a.body,
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                      lineNumber: 56,
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
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                lineNumber: 49,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                          lineNumber: 43,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    a.id,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                      lineNumber: 42,
                      columnNumber: 9,
                    },
                    this
                  )
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
              lineNumber: 39,
              columnNumber: 5,
            },
            this
          );
}
D.propTypes = {
  comments: s.arrayOf(
    s.shape({
      id: s.number.isRequired,
      postId: s.number.isRequired,
      name: s.string.isRequired,
      email: s.string.isRequired,
      body: s.string.isRequired,
    })
  ),
  isFetchingComments: s.bool,
  commentsError: s.string,
};
D.defaultProps = {
  comments: [],
  isFetchingComments: !1,
  commentsError: void 0,
};
function r({
  post: t,
  isFetchingPost: i,
  postError: o,
  comments: a,
  isFetchingComments: f,
  commentsError: g,
  fetchPost: x,
  fetchComments: b,
}) {
  const { id: h } = K();
  return (
    v.useEffect(() => {
      h && !i && !o && !t && x(h);
    }, [h, i, o, t, x]),
    v.useEffect(() => {
      t && !f && !g && a.length === 0 && b(t.id);
    }, [t, f, g, a, b]),
    e.jsxDEV(
      B,
      {
        title: t
          ? `${t.title} - Universal React`
          : 'Post Detail - Universal React',
        description: t ? t.body : 'View post details',
        children: e.jsxDEV(
          J,
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
                        A,
                        {
                          to: '/posts',
                          className:
                            'inline-flex items-center text-blue-600 hover:text-blue-800 mb-6',
                          children: '← Back to Posts',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                          lineNumber: 128,
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
                                N,
                                { size: 'md' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                  lineNumber: 137,
                                  columnNumber: 17,
                                },
                                this
                              ),
                              e.jsxDEV(
                                'span',
                                {
                                  className: 'text-lg',
                                  children: 'Loading post...',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                  lineNumber: 138,
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
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                            lineNumber: 136,
                            columnNumber: 15,
                          },
                          this
                        ),
                      o &&
                        e.jsxDEV(
                          m,
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
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                lineNumber: 144,
                                columnNumber: 17,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                            lineNumber: 143,
                            columnNumber: 15,
                          },
                          this
                        ),
                      !i &&
                        !o &&
                        t &&
                        e.jsxDEV(
                          'div',
                          {
                            className: 'space-y-6',
                            children: [
                              e.jsxDEV(
                                m,
                                {
                                  children: [
                                    e.jsxDEV(
                                      'h1',
                                      {
                                        className:
                                          'text-3xl font-bold mb-4 capitalize text-gray-900 dark:text-gray-100',
                                        children: t.title,
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                        lineNumber: 153,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    e.jsxDEV(
                                      'div',
                                      {
                                        className:
                                          'text-sm text-gray-600 dark:text-gray-400 mb-4',
                                        children: [
                                          'Post #',
                                          t.id,
                                          ' • User #',
                                          t.userId,
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                        lineNumber: 156,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    e.jsxDEV(
                                      'p',
                                      {
                                        className:
                                          'text-lg text-gray-700 dark:text-gray-200 leading-relaxed',
                                        children: t.body,
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                        lineNumber: 159,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                  lineNumber: 152,
                                  columnNumber: 17,
                                },
                                this
                              ),
                              e.jsxDEV(
                                v.Suspense,
                                {
                                  fallback: e.jsxDEV(
                                    'div',
                                    {
                                      className:
                                        'flex items-center justify-center gap-3 py-8',
                                      children: [
                                        e.jsxDEV(
                                          N,
                                          { size: 'md' },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                            lineNumber: 168,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                        e.jsxDEV(
                                          'span',
                                          { children: 'Loading comments...' },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                            lineNumber: 169,
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
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                      lineNumber: 167,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                  children: e.jsxDEV(
                                    D,
                                    {
                                      comments: a,
                                      isFetchingComments: f,
                                      commentsError: g,
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                      lineNumber: 173,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                  lineNumber: 165,
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
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                            lineNumber: 151,
                            columnNumber: 15,
                          },
                          this
                        ),
                      !i &&
                        !o &&
                        !t &&
                        e.jsxDEV(
                          m,
                          {
                            className: 'text-center py-8',
                            children: e.jsxDEV(
                              'p',
                              {
                                className:
                                  'text-gray-600 dark:text-gray-300 text-lg',
                                children: 'Post not found.',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                                lineNumber: 184,
                                columnNumber: 17,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                            lineNumber: 183,
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
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                    lineNumber: 127,
                    columnNumber: 11,
                  },
                  this
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
                lineNumber: 126,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
            lineNumber: 125,
            columnNumber: 7,
          },
          this
        ),
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.jsx',
        lineNumber: 117,
        columnNumber: 5,
      },
      this
    )
  );
}
r.propTypes = {
  post: s.shape({
    id: s.number.isRequired,
    userId: s.number.isRequired,
    title: s.string.isRequired,
    body: s.string.isRequired,
  }),
  isFetchingPost: s.bool,
  postError: s.string,
  comments: s.arrayOf(
    s.shape({
      id: s.number.isRequired,
      postId: s.number.isRequired,
      name: s.string.isRequired,
      email: s.string.isRequired,
      body: s.string.isRequired,
    })
  ),
  isFetchingComments: s.bool,
  commentsError: s.string,
  fetchPost: s.func.isRequired,
  fetchComments: s.func.isRequired,
};
r.defaultProps = {
  post: null,
  isFetchingPost: !1,
  postError: void 0,
  comments: [],
  isFetchingComments: !1,
  commentsError: void 0,
};
r.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PostDetailPage',
  props: {
    post: {
      defaultValue: { value: 'null', computed: !1 },
      description: '',
      type: {
        name: 'shape',
        value: {
          id: { name: 'number', required: !0 },
          userId: { name: 'number', required: !0 },
          title: { name: 'string', required: !0 },
          body: { name: 'string', required: !0 },
        },
      },
      required: !1,
    },
    isFetchingPost: {
      defaultValue: { value: 'false', computed: !1 },
      description: '',
      type: { name: 'bool' },
      required: !1,
    },
    postError: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    comments: {
      defaultValue: { value: '[]', computed: !1 },
      description: '',
      type: {
        name: 'arrayOf',
        value: {
          name: 'shape',
          value: {
            id: { name: 'number', required: !0 },
            postId: { name: 'number', required: !0 },
            name: { name: 'string', required: !0 },
            email: { name: 'string', required: !0 },
            body: { name: 'string', required: !0 },
          },
        },
      },
      required: !1,
    },
    isFetchingComments: {
      defaultValue: { value: 'false', computed: !1 },
      description: '',
      type: { name: 'bool' },
      required: !1,
    },
    commentsError: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    fetchPost: { description: '', type: { name: 'func' }, required: !0 },
    fetchComments: { description: '', type: { name: 'func' }, required: !0 },
  },
};
const ie = { title: 'Pages/PostDetailPage', component: r },
  p = {
    id: 1,
    userId: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: `quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto`,
  },
  $ = [
    {
      id: 1,
      postId: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`,
    },
    {
      id: 2,
      postId: 1,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body: `est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`,
    },
  ],
  n = () =>
    e.jsxDEV(
      r,
      {
        post: p,
        isFetchingPost: !1,
        postError: void 0,
        comments: $,
        isFetchingComments: !1,
        commentsError: void 0,
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 26,
        columnNumber: 30,
      },
      void 0
    ),
  l = () =>
    e.jsxDEV(
      r,
      {
        post: null,
        isFetchingPost: !0,
        postError: void 0,
        comments: [],
        isFetchingComments: !1,
        commentsError: void 0,
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 27,
        columnNumber: 34,
      },
      void 0
    ),
  c = () =>
    e.jsxDEV(
      r,
      {
        post: p,
        isFetchingPost: !1,
        postError: void 0,
        comments: [],
        isFetchingComments: !0,
        commentsError: void 0,
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 28,
        columnNumber: 38,
      },
      void 0
    ),
  u = () =>
    e.jsxDEV(
      r,
      {
        post: null,
        isFetchingPost: !1,
        postError: 'Failed to fetch post',
        comments: [],
        isFetchingComments: !1,
        commentsError: void 0,
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 29,
        columnNumber: 32,
      },
      void 0
    ),
  d = () =>
    e.jsxDEV(
      r,
      {
        post: p,
        isFetchingPost: !1,
        postError: void 0,
        comments: [],
        isFetchingComments: !1,
        commentsError: 'Failed to fetch comments',
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 30,
        columnNumber: 36,
      },
      void 0
    ),
  P = () =>
    e.jsxDEV(
      r,
      {
        post: p,
        isFetchingPost: !1,
        postError: void 0,
        comments: [],
        isFetchingComments: !1,
        commentsError: void 0,
        fetchPost: () => {},
        fetchComments: () => {},
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/PostDetailPage/PostDetailPage.stories.jsx',
        lineNumber: 31,
        columnNumber: 33,
      },
      void 0
    );
n.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
l.__docgenInfo = { description: '', methods: [], displayName: 'LoadingPost' };
c.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'LoadingComments',
};
u.__docgenInfo = { description: '', methods: [], displayName: 'PostError' };
d.__docgenInfo = { description: '', methods: [], displayName: 'CommentsError' };
P.__docgenInfo = { description: '', methods: [], displayName: 'NoComments' };
var j, E, y;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((j = n.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={mockPost} isFetchingPost={false} postError={undefined} comments={mockComments} isFetchingComments={false} commentsError={undefined} fetchPost={() => {}} fetchComments={() => {}} />',
      ...((y = (E = n.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : y.source),
    },
  },
};
var V, U, q;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((V = l.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={null} isFetchingPost postError={undefined} comments={[]} isFetchingComments={false} commentsError={undefined} fetchPost={() => {}} fetchComments={() => {}} />',
      ...((q = (U = l.parameters) == null ? void 0 : U.docs) == null
        ? void 0
        : q.source),
    },
  },
};
var C, F, k;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((C = c.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={mockPost} isFetchingPost={false} postError={undefined} comments={[]} isFetchingComments commentsError={undefined} fetchPost={() => {}} fetchComments={() => {}} />',
      ...((k = (F = c.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var R, _, I;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((R = u.parameters) == null ? void 0 : R.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={null} isFetchingPost={false} postError="Failed to fetch post" comments={[]} isFetchingComments={false} commentsError={undefined} fetchPost={() => {}} fetchComments={() => {}} />',
      ...((I = (_ = u.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : I.source),
    },
  },
};
var L, S, z;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((L = d.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={mockPost} isFetchingPost={false} postError={undefined} comments={[]} isFetchingComments={false} commentsError="Failed to fetch comments" fetchPost={() => {}} fetchComments={() => {}} />',
      ...((z = (S = d.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : z.source),
    },
  },
};
var w, O, T;
P.parameters = {
  ...P.parameters,
  docs: {
    ...((w = P.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource:
        '() => <PostDetailPage post={mockPost} isFetchingPost={false} postError={undefined} comments={[]} isFetchingComments={false} commentsError={undefined} fetchPost={() => {}} fetchComments={() => {}} />',
      ...((T = (O = P.parameters) == null ? void 0 : O.docs) == null
        ? void 0
        : T.source),
    },
  },
};
const me = [
  'Default',
  'LoadingPost',
  'LoadingComments',
  'PostError',
  'CommentsError',
  'NoComments',
];
export {
  d as CommentsError,
  n as Default,
  c as LoadingComments,
  l as LoadingPost,
  P as NoComments,
  u as PostError,
  me as __namedExportsOrder,
  ie as default,
};
