import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import './index-CfFaKb_3.js';
import { C as o } from './Card-pkHQ9FEO.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-DufvmrK5.js';
import './index-DUolvyrz.js';
const j = { title: 'UI/Card', component: o },
  r = () =>
    e.jsxDEV(
      o,
      {
        children: [
          e.jsxDEV(
            'h3',
            { className: 'text-xl font-bold mb-2', children: 'Card Title' },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 8,
              columnNumber: 5,
            },
            void 0
          ),
          e.jsxDEV(
            'p',
            { children: 'This is a card with some content inside it.' },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 9,
              columnNumber: 5,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
        lineNumber: 7,
        columnNumber: 30,
      },
      void 0
    ),
  s = () =>
    e.jsxDEV(
      o,
      {
        className: 'bg-blue-100',
        children: [
          e.jsxDEV(
            'h3',
            { className: 'text-xl font-bold mb-2', children: 'Custom Card' },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 12,
              columnNumber: 5,
            },
            void 0
          ),
          e.jsxDEV(
            'p',
            { children: 'This card has a custom background color.' },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 13,
              columnNumber: 5,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
        lineNumber: 11,
        columnNumber: 38,
      },
      void 0
    ),
  a = () =>
    e.jsxDEV(
      o,
      {
        className: 'bg-gray-100 dark:bg-gray-700 p-12 text-center',
        children: [
          e.jsxDEV(
            'h1',
            {
              className: 'text-4xl font-bold mb-4',
              children: '404 Not Found!',
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 16,
              columnNumber: 5,
            },
            void 0
          ),
          e.jsxDEV(
            'p',
            {
              className: 'text-lg',
              children: 'The page you are looking for was not found.',
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
              lineNumber: 17,
              columnNumber: 5,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Card/Card.stories.jsx',
        lineNumber: 15,
        columnNumber: 32,
      },
      void 0
    );
r.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
s.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'WithCustomClass',
};
a.__docgenInfo = { description: '', methods: [], displayName: 'Jumbotron' };
var t, d, n;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `() => <Card>
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p>This is a card with some content inside it.</p>
  </Card>`,
      ...((n = (d = r.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var i, m, c;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((i = s.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `() => <Card className="bg-blue-100">
    <h3 className="text-xl font-bold mb-2">Custom Card</h3>
    <p>This card has a custom background color.</p>
  </Card>`,
      ...((c = (m = s.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : c.source),
    },
  },
};
var l, u, p;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((l = a.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `() => <Card className="bg-gray-100 dark:bg-gray-700 p-12 text-center">
    <h1 className="text-4xl font-bold mb-4">404 Not Found!</h1>
    <p className="text-lg">The page you are looking for was not found.</p>
  </Card>`,
      ...((p = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.source),
    },
  },
};
const v = ['Default', 'WithCustomClass', 'Jumbotron'];
export {
  r as Default,
  a as Jumbotron,
  s as WithCustomClass,
  v as __namedExportsOrder,
  j as default,
};
