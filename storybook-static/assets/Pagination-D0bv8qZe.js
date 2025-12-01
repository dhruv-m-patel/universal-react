import { j as a } from './jsx-dev-runtime-mFCcXBaF.js';
import './index-CfFaKb_3.js';
import { P as t } from './index-DufvmrK5.js';
import { c as m } from './index-DUolvyrz.js';
function d({
  currentPage: e,
  totalPages: i,
  onPageChange: n,
  maxPagesToShow: s,
  showPageInfo: c,
  className: b,
}) {
  const p = () => {
      e > 1 && n(e - 1);
    },
    g = () => {
      e < i && n(e + 1);
    },
    f = () => {
      const r = [];
      let o = Math.max(1, e - Math.floor(s / 2));
      const l = Math.min(i, o + s - 1);
      l - o < s - 1 && (o = Math.max(1, l - s + 1));
      for (let u = o; u <= l; u += 1) r.push(u);
      return r;
    };
  return i <= 1
    ? null
    : a.jsxDEV(
        'div',
        {
          className: m('space-y-4', b),
          children: [
            a.jsxDEV(
              'div',
              {
                className: 'flex items-center justify-center gap-2 flex-wrap',
                children: [
                  a.jsxDEV(
                    'button',
                    {
                      type: 'button',
                      onClick: p,
                      disabled: e === 1,
                      className:
                        'px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-900 dark:text-gray-100 font-medium',
                      children: 'Previous',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
                      lineNumber: 49,
                      columnNumber: 9,
                    },
                    this
                  ),
                  f().map((r) =>
                    a.jsxDEV(
                      'button',
                      {
                        type: 'button',
                        onClick: () => n(r),
                        className: m(
                          'px-4 py-2 rounded-lg transition-colors font-medium',
                          e === r
                            ? 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
                            : 'bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-gray-100'
                        ),
                        children: r,
                      },
                      r,
                      !1,
                      {
                        fileName:
                          '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
                        lineNumber: 59,
                        columnNumber: 11,
                      },
                      this
                    )
                  ),
                  a.jsxDEV(
                    'button',
                    {
                      type: 'button',
                      onClick: g,
                      disabled: e === i,
                      className:
                        'px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-900 dark:text-gray-100 font-medium',
                      children: 'Next',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
                      lineNumber: 74,
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
                  '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
                lineNumber: 48,
                columnNumber: 7,
              },
              this
            ),
            c &&
              a.jsxDEV(
                'div',
                {
                  className:
                    'text-center text-sm text-gray-600 dark:text-gray-400',
                  children: ['Page ', e, ' of ', i],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
                  lineNumber: 85,
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
            '/Users/dhruvpatel/Projects/universal-react/src/common/ui/Pagination/Pagination.jsx',
          lineNumber: 47,
          columnNumber: 5,
        },
        this
      );
}
d.propTypes = {
  currentPage: t.number.isRequired,
  totalPages: t.number.isRequired,
  onPageChange: t.func.isRequired,
  maxPagesToShow: t.number,
  showPageInfo: t.bool,
  className: t.string,
};
d.defaultProps = { maxPagesToShow: 5, showPageInfo: !0, className: void 0 };
d.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Pagination',
  props: {
    maxPagesToShow: {
      defaultValue: { value: '5', computed: !1 },
      description: '',
      type: { name: 'number' },
      required: !1,
    },
    showPageInfo: {
      defaultValue: { value: 'true', computed: !1 },
      description: '',
      type: { name: 'bool' },
      required: !1,
    },
    className: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    currentPage: { description: '', type: { name: 'number' }, required: !0 },
    totalPages: { description: '', type: { name: 'number' }, required: !0 },
    onPageChange: { description: '', type: { name: 'func' }, required: !0 },
  },
};
export { d as P };
