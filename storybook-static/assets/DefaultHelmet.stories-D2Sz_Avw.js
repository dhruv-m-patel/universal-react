import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import { R as c } from './index-CfFaKb_3.js';
import { D as r } from './DefaultHelmet-CDoBarfe.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-DufvmrK5.js';
const N = {
    title: 'Components/DefaultHelmet',
    component: r,
    decorators: [
      (u) =>
        e.jsxDEV(
          'div',
          {
            style: { margin: '2rem' },
            children: e.jsxDEV(
              u,
              {},
              void 0,
              !1,
              {
                fileName:
                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
                lineNumber: 8,
                columnNumber: 6,
              },
              void 0
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
            lineNumber: 6,
            columnNumber: 25,
          },
          void 0
        ),
    ],
  },
  t = () =>
    e.jsxDEV(
      c.Fragment,
      {
        children: [
          e.jsxDEV(
            r,
            {},
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
              lineNumber: 11,
              columnNumber: 5,
            },
            void 0
          ),
          e.jsxDEV(
            'p',
            { children: 'Inspect page markup in HEAD section to know more.' },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
              lineNumber: 12,
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
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
        lineNumber: 10,
        columnNumber: 39,
      },
      void 0
    );
t.storyName = 'with default props';
const s = () =>
  e.jsxDEV(
    c.Fragment,
    {
      children: [
        e.jsxDEV(
          r,
          {
            title: 'My Custom Title',
            description: 'This is a custom page description',
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
            lineNumber: 16,
            columnNumber: 5,
          },
          void 0
        ),
        e.jsxDEV(
          'p',
          { children: 'Inspect page markup in HEAD section to know more.' },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
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
        '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.stories.jsx',
      lineNumber: 15,
      columnNumber: 36,
    },
    void 0
  );
s.storyName = 'with overrides';
t.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'WithDefaultProps',
};
s.__docgenInfo = { description: '', methods: [], displayName: 'WithOverrides' };
var o, m, n;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((o = t.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `() => <React.Fragment>
    <DefaultHelmet />
    <p>Inspect page markup in HEAD section to know more.</p>
  </React.Fragment>`,
      ...((n = (m = t.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var a, i, l;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((a = s.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `() => <React.Fragment>
    <DefaultHelmet title="My Custom Title" description="This is a custom page description" />
    <p>Inspect page markup in HEAD section to know more.</p>
  </React.Fragment>`,
      ...((l = (i = s.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : l.source),
    },
  },
};
const j = ['WithDefaultProps', 'WithOverrides'];
export {
  t as WithDefaultProps,
  s as WithOverrides,
  j as __namedExportsOrder,
  N as default,
};
