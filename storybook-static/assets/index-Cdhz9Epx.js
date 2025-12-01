import { r as f } from './index-CfFaKb_3.js';
import './index-C3scH-S8.js';
import {
  N as F,
  s as S,
  w as j,
  u as Y,
  a as J,
  b as O,
  c as N,
  d as I,
  D as Q,
  i as V,
  m as W,
  e as Z,
  R as $,
  j as ee,
  f as te,
} from './index-CGJVjR-L.js';
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function x() {
  return (
    (x = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        }),
    x.apply(this, arguments)
  );
}
function K(e, n) {
  if (e == null) return {};
  var a = {},
    r = Object.keys(e),
    t,
    i;
  for (i = 0; i < r.length; i++)
    ((t = r[i]), !(n.indexOf(t) >= 0) && (a[t] = e[t]));
  return a;
}
const T = 'get',
  E = 'application/x-www-form-urlencoded';
function k(e) {
  return e != null && typeof e.tagName == 'string';
}
function ne(e) {
  return k(e) && e.tagName.toLowerCase() === 'button';
}
function ae(e) {
  return k(e) && e.tagName.toLowerCase() === 'form';
}
function re(e) {
  return k(e) && e.tagName.toLowerCase() === 'input';
}
function ie(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function oe(e, n) {
  return e.button === 0 && (!n || n === '_self') && !ie(e);
}
let L = null;
function le() {
  if (L === null)
    try {
      (new FormData(document.createElement('form'), 0), (L = !1));
    } catch {
      L = !0;
    }
  return L;
}
const se = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function _(e) {
  return e != null && !se.has(e)
    ? (j(
        !1,
        '"' +
          e +
          '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
          ('and will default to "' + E + '"')
      ),
      null)
    : e;
}
function ue(e, n) {
  let a, r, t, i, l;
  if (ae(e)) {
    let s = e.getAttribute('action');
    ((r = s ? S(s, n) : null),
      (a = e.getAttribute('method') || T),
      (t = _(e.getAttribute('enctype')) || E),
      (i = new FormData(e)));
  } else if (ne(e) || (re(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((r = u ? S(u, n) : null),
      (a = e.getAttribute('formmethod') || s.getAttribute('method') || T),
      (t =
        _(e.getAttribute('formenctype')) || _(s.getAttribute('enctype')) || E),
      (i = new FormData(s, e)),
      !le())
    ) {
      let { name: o, type: h, value: p } = e;
      if (h === 'image') {
        let v = o ? o + '.' : '';
        (i.append(v + 'x', '0'), i.append(v + 'y', '0'));
      } else o && i.append(o, p);
    }
  } else {
    if (k(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((a = T), (r = null), (t = E), (l = e));
  }
  return (
    i && t === 'text/plain' && ((l = i), (i = void 0)),
    { action: r, method: a.toLowerCase(), encType: t, formData: i, body: l }
  );
}
const ce = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  me = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  fe = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'viewTransition',
  ],
  de = '6';
try {
  window.__reactRouterVersion = de;
} catch {}
const q = f.createContext({ isTransitioning: !1 });
q.displayName = 'ViewTransition';
const he = f.createContext(new Map());
he.displayName = 'Fetchers';
const pe =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ve = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  z = f.forwardRef(function (n, a) {
    let {
        onClick: r,
        relative: t,
        reloadDocument: i,
        replace: l,
        state: s,
        target: u,
        to: o,
        preventScrollReset: h,
        viewTransition: p,
      } = n,
      v = K(n, ce),
      { basename: C } = f.useContext(F),
      w,
      y = !1;
    if (typeof o == 'string' && ve.test(o) && ((w = o), pe))
      try {
        let d = new URL(window.location.href),
          m = o.startsWith('//') ? new URL(d.protocol + o) : new URL(o),
          R = S(m.pathname, C);
        m.origin === d.origin && R != null
          ? (o = R + m.search + m.hash)
          : (y = !0);
      } catch {
        j(
          !1,
          '<Link to="' +
            o +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
        );
      }
    let b = Y(o, { relative: t }),
      g = ge(o, {
        replace: l,
        state: s,
        target: u,
        preventScrollReset: h,
        relative: t,
        viewTransition: p,
      });
    function c(d) {
      (r && r(d), d.defaultPrevented || g(d));
    }
    return f.createElement(
      'a',
      x({}, v, { href: w || b, onClick: y || i ? r : c, ref: a, target: u })
    );
  });
z.displayName = 'Link';
const we = f.forwardRef(function (n, a) {
  let {
      'aria-current': r = 'page',
      caseSensitive: t = !1,
      className: i = '',
      end: l = !1,
      style: s,
      to: u,
      viewTransition: o,
      children: h,
    } = n,
    p = K(n, me),
    v = N(u, { relative: p.relative }),
    C = O(),
    w = f.useContext(Q),
    { navigator: y, basename: b } = f.useContext(F),
    g = w != null && Te(v) && o === !0,
    c = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname,
    d = C.pathname,
    m =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (t ||
    ((d = d.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (c = c.toLowerCase())),
    m && b && (m = S(m, b) || m));
  const R = c !== '/' && c.endsWith('/') ? c.length - 1 : c.length;
  let U = d === c || (!l && d.startsWith(c) && d.charAt(R) === '/'),
    M =
      m != null &&
      (m === c || (!l && m.startsWith(c) && m.charAt(c.length) === '/')),
    A = { isActive: U, isPending: M, isTransitioning: g },
    H = U ? r : void 0,
    D;
  typeof i == 'function'
    ? (D = i(A))
    : (D = [
        i,
        U ? 'active' : null,
        M ? 'pending' : null,
        g ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let X = typeof s == 'function' ? s(A) : s;
  return f.createElement(
    z,
    x({}, p, {
      'aria-current': H,
      className: D,
      ref: a,
      style: X,
      to: u,
      viewTransition: o,
    }),
    typeof h == 'function' ? h(A) : h
  );
});
we.displayName = 'NavLink';
const ye = f.forwardRef((e, n) => {
  let {
      fetcherKey: a,
      navigate: r,
      reloadDocument: t,
      replace: i,
      state: l,
      method: s = T,
      action: u,
      onSubmit: o,
      relative: h,
      preventScrollReset: p,
      viewTransition: v,
    } = e,
    C = K(e, fe),
    w = Re(),
    y = Le(u, { relative: h }),
    b = s.toLowerCase() === 'get' ? 'get' : 'post',
    g = (c) => {
      if ((o && o(c), c.defaultPrevented)) return;
      c.preventDefault();
      let d = c.nativeEvent.submitter,
        m = (d == null ? void 0 : d.getAttribute('formmethod')) || s;
      w(d || c.currentTarget, {
        fetcherKey: a,
        method: m,
        navigate: r,
        replace: i,
        state: l,
        relative: h,
        preventScrollReset: p,
        viewTransition: v,
      });
    };
  return f.createElement(
    'form',
    x({ ref: n, method: b, action: y, onSubmit: t ? o : g }, C)
  );
});
ye.displayName = 'Form';
var P;
(function (e) {
  ((e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState'));
})(P || (P = {}));
var B;
(function (e) {
  ((e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration'));
})(B || (B = {}));
function be(e) {
  return (
    e +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function G(e) {
  let n = f.useContext(te);
  return (n || V(!1, be(e)), n);
}
function ge(e, n) {
  let {
      target: a,
      replace: r,
      state: t,
      preventScrollReset: i,
      relative: l,
      viewTransition: s,
    } = n === void 0 ? {} : n,
    u = J(),
    o = O(),
    h = N(e, { relative: l });
  return f.useCallback(
    (p) => {
      if (oe(p, a)) {
        p.preventDefault();
        let v = r !== void 0 ? r : I(o) === I(h);
        u(e, {
          replace: v,
          state: t,
          preventScrollReset: i,
          relative: l,
          viewTransition: s,
        });
      }
    },
    [o, u, h, r, t, a, e, i, l, s]
  );
}
function Se() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let xe = 0,
  Ce = () => '__' + String(++xe) + '__';
function Re() {
  let { router: e } = G(P.UseSubmit),
    { basename: n } = f.useContext(F),
    a = Z();
  return f.useCallback(
    function (r, t) {
      (t === void 0 && (t = {}), Se());
      let { action: i, method: l, encType: s, formData: u, body: o } = ue(r, n);
      if (t.navigate === !1) {
        let h = t.fetcherKey || Ce();
        e.fetch(h, a, t.action || i, {
          preventScrollReset: t.preventScrollReset,
          formData: u,
          body: o,
          formMethod: t.method || l,
          formEncType: t.encType || s,
          flushSync: t.flushSync,
        });
      } else
        e.navigate(t.action || i, {
          preventScrollReset: t.preventScrollReset,
          formData: u,
          body: o,
          formMethod: t.method || l,
          formEncType: t.encType || s,
          replace: t.replace,
          state: t.state,
          fromRouteId: a,
          flushSync: t.flushSync,
          viewTransition: t.viewTransition,
        });
    },
    [e, n, a]
  );
}
function Le(e, n) {
  let { relative: a } = n === void 0 ? {} : n,
    { basename: r } = f.useContext(F),
    t = f.useContext($);
  t || V(!1, 'useFormAction must be used inside a RouteContext');
  let [i] = t.matches.slice(-1),
    l = x({}, N(e || '.', { relative: a })),
    s = O();
  if (e == null) {
    l.search = s.search;
    let u = new URLSearchParams(l.search),
      o = u.getAll('index');
    if (o.some((p) => p === '')) {
      (u.delete('index'),
        o.filter((v) => v).forEach((v) => u.append('index', v)));
      let p = u.toString();
      l.search = p ? '?' + p : '';
    }
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (l.pathname = l.pathname === '/' ? r : ee([r, l.pathname])),
    I(l)
  );
}
function Te(e, n) {
  n === void 0 && (n = {});
  let a = f.useContext(q);
  a == null &&
    V(
      !1,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
  let { basename: r } = G(P.useViewTransitionState),
    t = N(e, { relative: n.relative });
  if (!a.isTransitioning) return !1;
  let i = S(a.currentLocation.pathname, r) || a.currentLocation.pathname,
    l = S(a.nextLocation.pathname, r) || a.nextLocation.pathname;
  return W(t.pathname, l) != null || W(t.pathname, i) != null;
}
export { z as L };
