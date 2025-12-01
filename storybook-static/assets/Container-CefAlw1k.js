import { j as i } from './jsx-dev-runtime-mFCcXBaF.js';
import './index-CfFaKb_3.js';
import { P as e } from './index-DufvmrK5.js';
import { c as n } from './index-DUolvyrz.js';
function a({ fluid: s, children: l, className: r, ...o }) {
  return i.jsxDEV(
    'div',
    {
      className: n(
        'mx-auto px-4 sm:px-6 lg:px-8',
        { 'w-full': s, 'max-w-7xl': !s },
        r
      ),
      ...o,
      children: l,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Container/Container.jsx',
      lineNumber: 7,
      columnNumber: 5,
    },
    this
  );
}
a.propTypes = { fluid: e.bool, children: e.node, className: e.string };
a.defaultProps = { fluid: !1, children: null, className: void 0 };
a.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Container',
  props: {
    fluid: {
      defaultValue: { value: 'false', computed: !1 },
      description: '',
      type: { name: 'bool' },
      required: !1,
    },
    children: {
      defaultValue: { value: 'null', computed: !1 },
      description: '',
      type: { name: 'node' },
      required: !1,
    },
    className: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
  },
};
export { a as C };
