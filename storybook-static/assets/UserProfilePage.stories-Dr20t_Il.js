import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import { r as o } from './index-CfFaKb_3.js';
import { L as c } from './index-Cdhz9Epx.js';
import { C as P } from './Container-CefAlw1k.js';
import { S as w } from './Spinner-DALj5yVf.js';
import { C as n } from './Card-pkHQ9FEO.js';
import './Pagination-D0bv8qZe.js';
import { g as S, M as C, h as L, k as R } from './index-CGJVjR-L.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-C3scH-S8.js';
import './index-DufvmrK5.js';
import './index-DUolvyrz.js';
function f() {
  const { id: i } = S(),
    [r, j] = o.useState(null),
    [u, D] = o.useState([]),
    [m, E] = o.useState(''),
    [V, h] = o.useState(!0),
    [N, p] = o.useState(null),
    l = o.useDeferredValue(m);
  o.useEffect(() => {
    (async () => {
      try {
        (h(!0), p(null));
        const [a, x] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${i}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${i}/posts`),
        ]);
        if (!a.ok || !x.ok) throw new Error('Failed to fetch user data');
        const [y, k] = await Promise.all([a.json(), x.json()]);
        (j(y), D(k));
      } catch (a) {
        p(a.message);
      } finally {
        h(!1);
      }
    })();
  }, [i]);
  const d = o.useMemo(() => {
      if (!l) return u;
      const s = performance.now();
      for (; performance.now() - s < 10; );
      return u.filter(
        (a) =>
          a.title.toLowerCase().includes(l.toLowerCase()) ||
          a.body.toLowerCase().includes(l.toLowerCase())
      );
    }, [u, l]),
    v = m !== l;
  return V
    ? e.jsxDEV(
        P,
        {
          children: e.jsxDEV(
            'div',
            {
              className: 'flex justify-center items-center py-12',
              children: e.jsxDEV(
                w,
                { size: 'lg', label: 'Loading user profile...' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 75,
                  columnNumber: 11,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
              lineNumber: 74,
              columnNumber: 9,
            },
            this
          ),
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
          lineNumber: 73,
          columnNumber: 7,
        },
        this
      )
    : N || !r
      ? e.jsxDEV(
          P,
          {
            children: [
              e.jsxDEV(
                n,
                {
                  className:
                    'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800',
                  children: e.jsxDEV(
                    'p',
                    {
                      className: 'text-red-700 dark:text-red-200 font-medium',
                      children: ['Error: ', N || 'User not found'],
                    },
                    void 0,
                    !0,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 85,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 84,
                  columnNumber: 9,
                },
                this
              ),
              e.jsxDEV(
                'div',
                {
                  className: 'mt-4',
                  children: e.jsxDEV(
                    c,
                    {
                      to: '/users',
                      className:
                        'text-blue-600 dark:text-blue-400 hover:underline',
                      children: '← Back to Users',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 90,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 89,
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
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
            lineNumber: 83,
            columnNumber: 7,
          },
          this
        )
      : e.jsxDEV(
          P,
          {
            children: [
              e.jsxDEV(
                'div',
                {
                  className: 'mb-4',
                  children: e.jsxDEV(
                    c,
                    {
                      to: '/users',
                      className:
                        'text-blue-600 dark:text-blue-400 hover:underline',
                      children: '← Back to Users',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 104,
                      columnNumber: 9,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 103,
                  columnNumber: 7,
                },
                this
              ),
              e.jsxDEV(
                n,
                {
                  className: 'mb-6',
                  children: e.jsxDEV(
                    'div',
                    {
                      className: 'flex items-start gap-6',
                      children: [
                        e.jsxDEV(
                          'div',
                          {
                            className:
                              'flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center',
                            children: e.jsxDEV(
                              'span',
                              {
                                className:
                                  'text-blue-700 dark:text-blue-200 text-3xl font-bold',
                                children: r.name.charAt(0),
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                lineNumber: 117,
                                columnNumber: 13,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                            lineNumber: 116,
                            columnNumber: 11,
                          },
                          this
                        ),
                        e.jsxDEV(
                          'div',
                          {
                            className: 'flex-grow',
                            children: [
                              e.jsxDEV(
                                'h1',
                                {
                                  className:
                                    'text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100',
                                  children: r.name,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 124,
                                  columnNumber: 13,
                                },
                                this
                              ),
                              e.jsxDEV(
                                'p',
                                {
                                  className:
                                    'text-lg text-gray-600 dark:text-gray-400 mb-4',
                                  children: ['@', r.username],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 127,
                                  columnNumber: 13,
                                },
                                this
                              ),
                              e.jsxDEV(
                                'div',
                                {
                                  className: 'grid md:grid-cols-2 gap-3',
                                  children: [
                                    e.jsxDEV(
                                      'div',
                                      {
                                        children: [
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Email:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 134,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                e.jsxDEV(
                                                  'a',
                                                  {
                                                    href: `mailto:${r.email}`,
                                                    className:
                                                      'text-blue-600 dark:text-blue-400 hover:underline',
                                                    children: r.email,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 135,
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
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 133,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Phone:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 143,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                r.phone,
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 142,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Website:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 146,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                e.jsxDEV(
                                                  'a',
                                                  {
                                                    href: `https://${r.website}`,
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className:
                                                      'text-blue-600 dark:text-blue-400 hover:underline',
                                                    children: r.website,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 147,
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
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 145,
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
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                        lineNumber: 132,
                                        columnNumber: 15,
                                      },
                                      this
                                    ),
                                    e.jsxDEV(
                                      'div',
                                      {
                                        children: [
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Company:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 159,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                r.company.name,
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 158,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Catchphrase:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 163,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                r.company.catchPhrase,
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 162,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                          e.jsxDEV(
                                            'p',
                                            {
                                              className:
                                                'text-sm text-gray-700 dark:text-gray-200',
                                              children: [
                                                e.jsxDEV(
                                                  'span',
                                                  {
                                                    className: 'font-medium',
                                                    children: 'Address:',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                                    lineNumber: 167,
                                                    columnNumber: 19,
                                                  },
                                                  this
                                                ),
                                                ' ',
                                                r.address.street,
                                                ', ',
                                                r.address.suite,
                                                ',',
                                                ' ',
                                                r.address.city,
                                                ', ',
                                                r.address.zipcode,
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                              lineNumber: 166,
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
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                        lineNumber: 157,
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
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 131,
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
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                            lineNumber: 123,
                            columnNumber: 11,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 114,
                      columnNumber: 9,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 113,
                  columnNumber: 7,
                },
                this
              ),
              e.jsxDEV(
                'div',
                {
                  className: 'mb-4 flex items-center justify-between',
                  children: e.jsxDEV(
                    'h2',
                    {
                      className:
                        'text-2xl font-bold text-gray-900 dark:text-gray-100',
                      children: ['Posts (', d.length, ')'],
                    },
                    void 0,
                    !0,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 179,
                      columnNumber: 9,
                    },
                    this
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 178,
                  columnNumber: 7,
                },
                this
              ),
              e.jsxDEV(
                'div',
                {
                  className: 'mb-6',
                  children: [
                    e.jsxDEV(
                      'input',
                      {
                        type: 'text',
                        placeholder: 'Search posts by title or content...',
                        value: m,
                        onChange: (s) => E(s.target.value),
                        className: `w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`,
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                        lineNumber: 186,
                        columnNumber: 9,
                      },
                      this
                    ),
                    v &&
                      e.jsxDEV(
                        'p',
                        {
                          className:
                            'mt-2 text-sm text-gray-600 dark:text-gray-400',
                          children: 'Updating results...',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                          lineNumber: 196,
                          columnNumber: 11,
                        },
                        this
                      ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 185,
                  columnNumber: 7,
                },
                this
              ),
              d.length === 0
                ? e.jsxDEV(
                    n,
                    {
                      children: e.jsxDEV(
                        'p',
                        {
                          className:
                            'text-center text-gray-600 dark:text-gray-400 py-8',
                          children: m
                            ? `No posts found matching "${l}"`
                            : 'No posts available',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                          lineNumber: 205,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 204,
                      columnNumber: 9,
                    },
                    this
                  )
                : e.jsxDEV(
                    'div',
                    {
                      className: `grid gap-4 transition-opacity ${v ? 'opacity-60' : 'opacity-100'}`,
                      children: d.map((s) =>
                        e.jsxDEV(
                          n,
                          {
                            className: 'hover:shadow-md transition-shadow',
                            children: [
                              e.jsxDEV(
                                c,
                                {
                                  to: `/posts/${s.id}`,
                                  children: e.jsxDEV(
                                    'h3',
                                    {
                                      className:
                                        'text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 capitalize',
                                      children: s.title,
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                      lineNumber: 218,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 217,
                                  columnNumber: 15,
                                },
                                this
                              ),
                              e.jsxDEV(
                                'p',
                                {
                                  className: 'text-gray-700 dark:text-gray-200',
                                  children: s.body,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 222,
                                  columnNumber: 15,
                                },
                                this
                              ),
                              e.jsxDEV(
                                'div',
                                {
                                  className:
                                    'mt-3 flex items-center justify-between',
                                  children: [
                                    e.jsxDEV(
                                      'span',
                                      {
                                        className:
                                          'text-sm text-gray-600 dark:text-gray-400',
                                        children: ['Post #', s.id],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                        lineNumber: 224,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                    e.jsxDEV(
                                      c,
                                      {
                                        to: `/posts/${s.id}`,
                                        className:
                                          'text-sm text-blue-600 dark:text-blue-400 hover:underline',
                                        children: 'Read more →',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                        lineNumber: 227,
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
                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                                  lineNumber: 223,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            ],
                          },
                          s.id,
                          !0,
                          {
                            fileName:
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                            lineNumber: 216,
                            columnNumber: 13,
                          },
                          this
                        )
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                      lineNumber: 212,
                      columnNumber: 9,
                    },
                    this
                  ),
              e.jsxDEV(
                n,
                {
                  className:
                    'mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
                  children: [
                    e.jsxDEV(
                      'h3',
                      {
                        className:
                          'text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100',
                        children: 'React 18 useDeferredValue Demo',
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                        lineNumber: 241,
                        columnNumber: 9,
                      },
                      this
                    ),
                    e.jsxDEV(
                      'p',
                      {
                        className: 'text-sm text-blue-800 dark:text-blue-200',
                        children: [
                          'This page demonstrates',
                          ' ',
                          e.jsxDEV(
                            'code',
                            {
                              className:
                                'bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded',
                              children: 'useDeferredValue',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                              lineNumber: 246,
                              columnNumber: 11,
                            },
                            this
                          ),
                          '. The search input updates immediately, but the post filtering is deferred to keep the UI responsive. Notice how the search input never lags, and the posts fade out slightly while new results are being calculated. This is different from',
                          ' ',
                          e.jsxDEV(
                            'code',
                            {
                              className:
                                'bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded',
                              children: 'useTransition',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                              lineNumber: 253,
                              columnNumber: 11,
                            },
                            this
                          ),
                          ' ',
                          '- here we defer the ',
                          e.jsxDEV(
                            'em',
                            { children: 'value' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                              lineNumber: 256,
                              columnNumber: 31,
                            },
                            this
                          ),
                          ' itself rather than the state update.',
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                        lineNumber: 244,
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
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
                  lineNumber: 240,
                  columnNumber: 7,
                },
                this
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.jsx',
            lineNumber: 102,
            columnNumber: 5,
          },
          this
        );
}
f.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'UserProfilePage',
};
const G = {
    title: 'Pages/UserProfilePage',
    component: f,
    decorators: [
      (i) =>
        e.jsxDEV(
          C,
          {
            initialEntries: ['/users/1'],
            children: e.jsxDEV(
              L,
              {
                children: e.jsxDEV(
                  R,
                  {
                    path: '/users/:id',
                    element: e.jsxDEV(
                      i,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.stories.jsx',
                        lineNumber: 9,
                        columnNumber: 45,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.stories.jsx',
                    lineNumber: 9,
                    columnNumber: 11,
                  },
                  void 0
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.stories.jsx',
                lineNumber: 8,
                columnNumber: 9,
              },
              void 0
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.stories.jsx',
            lineNumber: 7,
            columnNumber: 25,
          },
          void 0
        ),
    ],
  },
  t = () =>
    e.jsxDEV(
      f,
      {},
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UserProfilePage/UserProfilePage.stories.jsx',
        lineNumber: 13,
        columnNumber: 30,
      },
      void 0
    );
t.parameters = {
  docs: {
    description: {
      story:
        'Default UserProfilePage showing user details and their posts with search functionality using useDeferredValue.',
    },
  },
};
t.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
var g, b, U;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((g = t.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: '() => <UserProfilePage />',
      ...((U = (b = t.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : U.source),
    },
  },
};
const H = ['Default'];
export { t as Default, H as __namedExportsOrder, G as default };
