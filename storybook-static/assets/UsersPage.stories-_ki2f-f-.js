import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import { r as a } from './index-CfFaKb_3.js';
import { L as _ } from './index-Cdhz9Epx.js';
import { C as d } from './Container-CefAlw1k.js';
import { S as I } from './Spinner-DALj5yVf.js';
import { C as n } from './Card-pkHQ9FEO.js';
import { P as $ } from './Pagination-D0bv8qZe.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-C3scH-S8.js';
import './index-CGJVjR-L.js';
import './index-DufvmrK5.js';
import './index-DUolvyrz.js';
function h() {
  const [g, y] = a.useState([]),
    [m, N] = a.useState([]),
    [l, V] = a.useState(''),
    [k, w] = a.useTransition(),
    [C, p] = a.useState(!0),
    [x, b] = a.useState(null),
    [P, v] = a.useState(1),
    c = 10;
  a.useEffect(() => {
    (async () => {
      try {
        p(!0);
        const r = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!r.ok) throw new Error('Failed to fetch users');
        const o = await r.json();
        (y(o), N(o), b(null));
      } catch (r) {
        b(r.message);
      } finally {
        p(!1);
      }
    })();
  }, []);
  const S = (s) => {
      const r = s.target.value;
      (V(r),
        w(() => {
          const o = g.filter(
            (u) =>
              u.name.toLowerCase().includes(r.toLowerCase()) ||
              u.email.toLowerCase().includes(r.toLowerCase()) ||
              u.username.toLowerCase().includes(r.toLowerCase())
          );
          (N(o), v(1));
        }));
    },
    U = Math.ceil(m.length / c),
    j = (P - 1) * c,
    L = j + c,
    i = m.slice(j, L),
    T = (s) => {
      (v(s), window.scrollTo({ top: 0, behavior: 'smooth' }));
    };
  return C
    ? e.jsxDEV(
        d,
        {
          children: e.jsxDEV(
            'div',
            {
              className: 'flex justify-center items-center py-12',
              children: e.jsxDEV(
                I,
                { size: 'lg', label: 'Loading users...' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                  lineNumber: 74,
                  columnNumber: 11,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
              lineNumber: 73,
              columnNumber: 9,
            },
            this
          ),
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
          lineNumber: 72,
          columnNumber: 7,
        },
        this
      )
    : x
      ? e.jsxDEV(
          d,
          {
            children: e.jsxDEV(
              n,
              {
                className:
                  'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800',
                children: e.jsxDEV(
                  'p',
                  {
                    className: 'text-red-700 dark:text-red-200 font-medium',
                    children: ['Error: ', x],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                    lineNumber: 84,
                    columnNumber: 11,
                  },
                  this
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                lineNumber: 83,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
            lineNumber: 82,
            columnNumber: 7,
          },
          this
        )
      : e.jsxDEV(
          d,
          {
            children: [
              e.jsxDEV(
                'h1',
                {
                  className:
                    'text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100',
                  children: 'Users Directory',
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                  lineNumber: 94,
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
                        placeholder: 'Search by name, username, or email...',
                        value: l,
                        onChange: S,
                        className: `w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`,
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                        lineNumber: 100,
                        columnNumber: 9,
                      },
                      this
                    ),
                    k &&
                      e.jsxDEV(
                        'p',
                        {
                          className:
                            'mt-2 text-sm text-gray-600 dark:text-gray-400',
                          children: 'Filtering results...',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                          lineNumber: 110,
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
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                  lineNumber: 99,
                  columnNumber: 7,
                },
                this
              ),
              e.jsxDEV(
                'p',
                {
                  className: 'text-sm text-gray-600 dark:text-gray-400 mb-4',
                  children: [
                    'Showing ',
                    i.length,
                    ' of ',
                    m.length,
                    ' users',
                    l && ` (filtered from ${g.length} total)`,
                  ],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                  lineNumber: 117,
                  columnNumber: 7,
                },
                this
              ),
              i.length === 0
                ? e.jsxDEV(
                    n,
                    {
                      children: e.jsxDEV(
                        'p',
                        {
                          className:
                            'text-center text-gray-600 dark:text-gray-400 py-8',
                          children: ['No users found matching "', l, '"'],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                          lineNumber: 125,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                      lineNumber: 124,
                      columnNumber: 9,
                    },
                    this
                  )
                : e.jsxDEV(
                    'div',
                    {
                      className: 'grid gap-4 mb-8',
                      children: i.map((s) =>
                        e.jsxDEV(
                          n,
                          {
                            className: 'hover:shadow-md transition-shadow',
                            children: e.jsxDEV(
                              'div',
                              {
                                className: 'flex items-start gap-4',
                                children: [
                                  e.jsxDEV(
                                    'div',
                                    {
                                      className:
                                        'flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center',
                                      children: e.jsxDEV(
                                        'span',
                                        {
                                          className:
                                            'text-blue-700 dark:text-blue-200 text-xl font-bold',
                                          children: s.name.charAt(0),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                          lineNumber: 136,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                      lineNumber: 135,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex-grow',
                                      children: [
                                        e.jsxDEV(
                                          _,
                                          {
                                            to: `/users/${s.id}`,
                                            children: e.jsxDEV(
                                              'h2',
                                              {
                                                className:
                                                  'text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
                                                children: s.name,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                lineNumber: 144,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                            lineNumber: 143,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        e.jsxDEV(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-gray-600 dark:text-gray-400 mb-2',
                                            children: ['@', s.username],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                            lineNumber: 148,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        e.jsxDEV(
                                          'div',
                                          {
                                            className: 'space-y-1',
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
                                                        className:
                                                          'font-medium',
                                                        children: 'Email:',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 154,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                    ' ',
                                                    e.jsxDEV(
                                                      'a',
                                                      {
                                                        href: `mailto:${s.email}`,
                                                        className:
                                                          'text-blue-600 dark:text-blue-400 hover:underline',
                                                        children: s.email,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 155,
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
                                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                  lineNumber: 153,
                                                  columnNumber: 21,
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
                                                        className:
                                                          'font-medium',
                                                        children: 'Phone:',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 163,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                    ' ',
                                                    s.phone,
                                                  ],
                                                },
                                                void 0,
                                                !0,
                                                {
                                                  fileName:
                                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                  lineNumber: 162,
                                                  columnNumber: 21,
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
                                                        className:
                                                          'font-medium',
                                                        children: 'Website:',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 166,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                    ' ',
                                                    e.jsxDEV(
                                                      'a',
                                                      {
                                                        href: `https://${s.website}`,
                                                        target: '_blank',
                                                        rel: 'noopener noreferrer',
                                                        className:
                                                          'text-blue-600 dark:text-blue-400 hover:underline',
                                                        children: s.website,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 167,
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
                                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                  lineNumber: 165,
                                                  columnNumber: 21,
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
                                                        className:
                                                          'font-medium',
                                                        children: 'Company:',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName:
                                                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                        lineNumber: 177,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                    ' ',
                                                    s.company.name,
                                                  ],
                                                },
                                                void 0,
                                                !0,
                                                {
                                                  fileName:
                                                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                                  lineNumber: 176,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                            lineNumber: 152,
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
                                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                      lineNumber: 142,
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
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                                lineNumber: 133,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          s.id,
                          !1,
                          {
                            fileName:
                              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                            lineNumber: 132,
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
                        '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                      lineNumber: 130,
                      columnNumber: 9,
                    },
                    this
                  ),
              U > 1 &&
                e.jsxDEV(
                  $,
                  {
                    currentPage: P,
                    totalPages: U,
                    onPageChange: T,
                    className: 'mt-8',
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                    lineNumber: 190,
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
                        children: 'React 18 useTransition Demo',
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                        lineNumber: 200,
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
                              children: 'useTransition',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                              lineNumber: 205,
                              columnNumber: 11,
                            },
                            this
                          ),
                          '. Try typing in the search box - the input remains responsive while filtering happens in the background. The',
                          ' ',
                          e.jsxDEV(
                            'code',
                            {
                              className:
                                'bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded',
                              children: 'isPending',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                              lineNumber: 210,
                              columnNumber: 11,
                            },
                            this
                          ),
                          ' ',
                          'state shows when a transition is in progress.',
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                        lineNumber: 203,
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
                    '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
                  lineNumber: 199,
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
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.jsx',
            lineNumber: 93,
            columnNumber: 5,
          },
          this
        );
}
h.__docgenInfo = { description: '', methods: [], displayName: 'UsersPage' };
const K = { title: 'Pages/UsersPage', component: h },
  t = () =>
    e.jsxDEV(
      h,
      {},
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/UsersPage/UsersPage.stories.jsx',
        lineNumber: 7,
        columnNumber: 30,
      },
      void 0
    );
t.parameters = {
  docs: {
    description: {
      story:
        'Default UsersPage with user directory and search functionality using useTransition.',
    },
  },
};
t.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
var f, E, D;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((f = t.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: '() => <UsersPage />',
      ...((D = (E = t.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : D.source),
    },
  },
};
const Q = ['Default'];
export { t as Default, Q as __namedExportsOrder, K as default };
