import { j as e } from './jsx-dev-runtime-mFCcXBaF.js';
import './index-CfFaKb_3.js';
import { C as o } from './Container-CefAlw1k.js';
import './_commonjsHelpers-Cpj98o6Y.js';
import './index-DufvmrK5.js';
import './index-DUolvyrz.js';
const j = { title: 'UI/Container', component: o },
  r = () =>
    e.jsxDEV(
      o,
      {
        children: e.jsxDEV(
          'div',
          {
            className: 'bg-gray-200 p-4',
            children: 'Default Container Content',
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
            lineNumber: 8,
            columnNumber: 5,
          },
          void 0
        ),
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
        lineNumber: 7,
        columnNumber: 30,
      },
      void 0
    ),
  s = () =>
    e.jsxDEV(
      o,
      {
        fluid: !0,
        children: e.jsxDEV(
          'div',
          {
            className: 'bg-gray-200 p-4',
            children: 'Fluid Container Content (Full Width)',
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
            lineNumber: 11,
            columnNumber: 5,
          },
          void 0
        ),
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
        lineNumber: 10,
        columnNumber: 28,
      },
      void 0
    ),
  n = () =>
    e.jsxDEV(
      o,
      {
        className: 'bg-blue-50',
        children: e.jsxDEV(
          'div',
          { className: 'p-4', children: 'Container with Custom Background' },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
            lineNumber: 14,
            columnNumber: 5,
          },
          void 0
        ),
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.stories.jsx',
        lineNumber: 13,
        columnNumber: 38,
      },
      void 0
    );
r.__docgenInfo = { description: '', methods: [], displayName: 'Default' };
s.__docgenInfo = { description: '', methods: [], displayName: 'Fluid' };
n.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'WithCustomClass',
};
var a, i, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((a = r.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `() => <Container>
    <div className="bg-gray-200 p-4">Default Container Content</div>
  </Container>`,
      ...((t = (i = r.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : t.source),
    },
  },
};
var l, m, u;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((l = s.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `() => <Container fluid>
    <div className="bg-gray-200 p-4">Fluid Container Content (Full Width)</div>
  </Container>`,
      ...((u = (m = s.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : u.source),
    },
  },
};
var c, d, p;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((c = n.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `() => <Container className="bg-blue-50">
    <div className="p-4">Container with Custom Background</div>
  </Container>`,
      ...((p = (d = n.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
  },
};
const g = ['Default', 'Fluid', 'WithCustomClass'];
export {
  r as Default,
  s as Fluid,
  n as WithCustomClass,
  g as __namedExportsOrder,
  j as default,
};
