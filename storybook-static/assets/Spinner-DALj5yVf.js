import { j as s } from './jsx-dev-runtime-mFCcXBaF.js';
import './index-CfFaKb_3.js';
import { P as r } from './index-DufvmrK5.js';
import { c as l } from './index-DUolvyrz.js';
function e({ size: a, className: n }) {
  const i = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' };
  return s.jsxDEV(
    'div',
    {
      className: l(
        'inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        i[a],
        n
      ),
      role: 'status',
      children: s.jsxDEV(
        'span',
        { className: 'sr-only', children: 'Loading...' },
        void 0,
        !1,
        {
          fileName:
            '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Spinner/Spinner.jsx',
          lineNumber: 21,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Spinner/Spinner.jsx',
      lineNumber: 13,
      columnNumber: 5,
    },
    this
  );
}
e.propTypes = { size: r.oneOf(['sm', 'md', 'lg']), className: r.string };
e.defaultProps = { size: 'md', className: void 0 };
e.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Spinner',
  props: {
    size: {
      defaultValue: { value: "'md'", computed: !1 },
      description: '',
      type: {
        name: 'enum',
        value: [
          { value: "'sm'", computed: !1 },
          { value: "'md'", computed: !1 },
          { value: "'lg'", computed: !1 },
        ],
      },
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
export { e as S };
