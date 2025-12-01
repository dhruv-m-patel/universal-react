import { r as i, a as ae } from './index-CfFaKb_3.js';
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    O.apply(this, arguments)
  );
}
var C;
(function (e) {
  ((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'));
})(C || (C = {}));
function oe(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ['/'], initialIndex: n, v5Compat: r = !1 } = e,
    a;
  a = t.map((p, m) =>
    d(p, typeof p == 'string' ? null : p.state, m === 0 ? 'default' : void 0)
  );
  let o = u(n ?? a.length - 1),
    l = C.Pop,
    s = null;
  function u(p) {
    return Math.min(Math.max(p, 0), a.length - 1);
  }
  function h() {
    return a[o];
  }
  function d(p, m, v) {
    m === void 0 && (m = null);
    let y = ie(a ? h().pathname : '/', p, m, v);
    return (
      x(
        y.pathname.charAt(0) === '/',
        'relative pathnames are not supported in memory history: ' +
          JSON.stringify(p)
      ),
      y
    );
  }
  function c(p) {
    return typeof p == 'string' ? p : se(p);
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return l;
    },
    get location() {
      return h();
    },
    createHref: c,
    createURL(p) {
      return new URL(c(p), 'http://localhost');
    },
    encodeLocation(p) {
      let m = typeof p == 'string' ? w(p) : p;
      return {
        pathname: m.pathname || '',
        search: m.search || '',
        hash: m.hash || '',
      };
    },
    push(p, m) {
      l = C.Push;
      let v = d(p, m);
      ((o += 1),
        a.splice(o, a.length, v),
        r && s && s({ action: l, location: v, delta: 1 }));
    },
    replace(p, m) {
      l = C.Replace;
      let v = d(p, m);
      ((a[o] = v), r && s && s({ action: l, location: v, delta: 0 }));
    },
    go(p) {
      l = C.Pop;
      let m = u(o + p),
        v = a[m];
      ((o = m), s && s({ action: l, location: v, delta: p }));
    },
    listen(p) {
      return (
        (s = p),
        () => {
          s = null;
        }
      );
    },
  };
}
function R(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function x(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function le() {
  return Math.random().toString(36).substr(2, 8);
}
function ie(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    O(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? w(t) : t,
      { state: n, key: (t && t.key) || r || le() }
    )
  );
}
function se(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function w(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
var D;
(function (e) {
  ((e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error'));
})(D || (D = {}));
function ue(e, t, n) {
  return (n === void 0 && (n = '/'), ce(e, t, n));
}
function ce(e, t, n, r) {
  let a = typeof t == 'string' ? w(t) : t,
    o = H(a.pathname || '/', n);
  if (o == null) return null;
  let l = q(e);
  he(l);
  let s = null;
  for (let u = 0; s == null && u < l.length; ++u) {
    let h = be(o);
    s = xe(l[u], h);
  }
  return s;
}
function q(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''));
  let a = (o, l, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (R(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let h = b([r, u.relativePath]),
      d = n.concat(u);
    (o.children &&
      o.children.length > 0 &&
      (R(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + h + '".')
      ),
      q(o.children, t, d, h)),
      !(o.path == null && !o.index) &&
        t.push({ path: h, score: ye(h, o.index), routesMeta: d }));
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) a(o, l);
      else for (let u of G(o.path)) a(o, l, u);
    }),
    t
  );
}
function G(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    a = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return a ? [o, ''] : [o];
  let l = G(r.join('/')),
    s = [];
  return (
    s.push(...l.map((u) => (u === '' ? o : [o, u].join('/')))),
    a && s.push(...l),
    s.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function he(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Re(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const de = /^:[\w-]+$/,
  pe = 3,
  fe = 2,
  me = 1,
  ve = 10,
  ge = -2,
  k = (e) => e === '*';
function ye(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(k) && (r += ge),
    t && (r += fe),
    n
      .filter((a) => !k(a))
      .reduce((a, o) => a + (de.test(o) ? pe : o === '' ? me : ve), r)
  );
}
function Re(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xe(e, t, n) {
  let { routesMeta: r } = e,
    a = {},
    o = '/',
    l = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      h = s === r.length - 1,
      d = o === '/' ? t : t.slice(o.length) || '/',
      c = Ee(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: h },
        d
      ),
      f = u.route;
    if (!c) return null;
    (Object.assign(a, c.params),
      l.push({
        params: a,
        pathname: b([o, c.pathname]),
        pathnameBase: Le(b([o, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== '/' && (o = b([o, c.pathnameBase])));
  }
  return l;
}
function Ee(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ce(e.path, e.caseSensitive, e.end),
    a = t.match(n);
  if (!a) return null;
  let o = a[0],
    l = o.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: r.reduce((h, d, c) => {
      let { paramName: f, isOptional: p } = d;
      if (f === '*') {
        let v = s[c] || '';
        l = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const m = s[c];
      return (
        p && !m ? (h[f] = void 0) : (h[f] = (m || '').replace(/%2F/g, '/')),
        h
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Ce(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    x(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    ));
  let r = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), r]
  );
}
function be(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      x(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function H(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
const Pe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  we = (e) => Pe.test(e);
function Ie(e, t) {
  t === void 0 && (t = '/');
  let {
      pathname: n,
      search: r = '',
      hash: a = '',
    } = typeof e == 'string' ? w(e) : e,
    o;
  if (n)
    if (we(n)) o = n;
    else {
      if (n.includes('//')) {
        let l = n;
        ((n = n.replace(/\/\/+/g, '/')),
          x(
            !1,
            'Pathnames cannot have embedded double slashes - normalizing ' +
              (l + ' -> ' + n)
          ));
      }
      n.startsWith('/') ? (o = A(n.substring(1), '/')) : (o = A(n, t));
    }
  else o = t;
  return { pathname: o, search: Ne(r), hash: Ue(a) };
}
function A(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? n.length > 1 && n.pop() : a !== '.' && n.push(a);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function T(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Se(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function X(e, t) {
  let n = Se(e);
  return t
    ? n.map((r, a) => (a === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function K(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == 'string'
    ? (a = w(e))
    : ((a = O({}, e)),
      R(
        !a.pathname || !a.pathname.includes('?'),
        T('?', 'pathname', 'search', a)
      ),
      R(
        !a.pathname || !a.pathname.includes('#'),
        T('#', 'pathname', 'hash', a)
      ),
      R(!a.search || !a.search.includes('#'), T('#', 'search', 'hash', a)));
  let o = e === '' || a.pathname === '',
    l = o ? '/' : a.pathname,
    s;
  if (l == null) s = n;
  else {
    let c = t.length - 1;
    if (!r && l.startsWith('..')) {
      let f = l.split('/');
      for (; f[0] === '..'; ) (f.shift(), (c -= 1));
      a.pathname = f.join('/');
    }
    s = c >= 0 ? t[c] : '/';
  }
  let u = Ie(a, s),
    h = l && l !== '/' && l.endsWith('/'),
    d = (o || l === '.') && n.endsWith('/');
  return (!u.pathname.endsWith('/') && (h || d) && (u.pathname += '/'), u);
}
const b = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Le = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ne = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ue = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Be(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Q = ['post', 'put', 'patch', 'delete'];
new Set(Q);
const Oe = ['get', ...Q];
new Set(Oe);
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    L.apply(this, arguments)
  );
}
const M = i.createContext(null);
M.displayName = 'DataRouter';
const Z = i.createContext(null);
Z.displayName = 'DataRouterState';
const Me = i.createContext(null);
Me.displayName = 'Await';
const I = i.createContext(null);
I.displayName = 'Navigation';
const U = i.createContext(null);
U.displayName = 'Location';
const E = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
E.displayName = 'Route';
const j = i.createContext(null);
j.displayName = 'RouteError';
function et(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  B() ||
    R(!1, 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: a } = i.useContext(I),
    { hash: o, pathname: l, search: s } = We(e, { relative: n }),
    u = l;
  return (
    r !== '/' && (u = l === '/' ? r : b([r, l])),
    a.createHref({ pathname: u, search: s, hash: o })
  );
}
function B() {
  return i.useContext(U) != null;
}
function $() {
  return (
    B() ||
      R(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    i.useContext(U).location
  );
}
const ee =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function te(e) {
  i.useContext(I).static || i.useLayoutEffect(e);
}
function tt() {
  let { isDataRoute: e } = i.useContext(E);
  return e ? qe() : Te();
}
function Te() {
  B() ||
    R(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    );
  let e = i.useContext(M),
    { basename: t, future: n, navigator: r } = i.useContext(I),
    { matches: a } = i.useContext(E),
    { pathname: o } = $(),
    l = JSON.stringify(X(a, n.v7_relativeSplatPath)),
    s = i.useRef(!1);
  return (
    te(() => {
      s.current = !0;
    }),
    i.useCallback(
      function (h, d) {
        if ((d === void 0 && (d = {}), x(s.current, ee), !s.current)) return;
        if (typeof h == 'number') {
          r.go(h);
          return;
        }
        let c = K(h, JSON.parse(l), o, d.relative === 'path');
        (e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : b([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d));
      },
      [t, r, l, o, e]
    )
  );
}
function nt() {
  let { matches: e } = i.useContext(E),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function We(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = i.useContext(I),
    { matches: a } = i.useContext(E),
    { pathname: o } = $(),
    l = JSON.stringify(X(a, r.v7_relativeSplatPath));
  return i.useMemo(() => K(e, JSON.parse(l), o, n === 'path'), [e, l, o, n]);
}
function je(e, t) {
  return $e(e, t);
}
function $e(e, t, n, r) {
  B() ||
    R(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    );
  let { navigator: a } = i.useContext(I),
    { matches: o } = i.useContext(E),
    l = o[o.length - 1],
    s = l ? l.params : {},
    u = l ? l.pathname : '/',
    h = l ? l.pathnameBase : '/',
    d = l && l.route;
  {
    let g = (d && d.path) || '';
    re(
      u,
      !d || g.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + u + '" (under <Route path="' + g + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + g + '"> to <Route ') +
        ('path="' + (g === '/' ? '*' : g + '/*') + '">.')
    );
  }
  let c = $(),
    f;
  if (t) {
    var p;
    let g = typeof t == 'string' ? w(t) : t;
    (h === '/' ||
      ((p = g.pathname) != null && p.startsWith(h)) ||
      R(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            h +
            '" ') +
          ('but pathname "' +
            g.pathname +
            '" was given in the `location` prop.')
      ),
      (f = g));
  } else f = c;
  let m = f.pathname || '/',
    v = m;
  if (h !== '/') {
    let g = h.replace(/^\//, '').split('/');
    v = '/' + m.replace(/^\//, '').split('/').slice(g.length).join('/');
  }
  let y = ue(e, { pathname: v });
  (x(
    d || y != null,
    'No routes matched location "' + f.pathname + f.search + f.hash + '" '
  ),
    x(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "' +
        f.pathname +
        f.search +
        f.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ));
  let S = Ae(
    y &&
      y.map((g) =>
        Object.assign({}, g, {
          params: Object.assign({}, s, g.params),
          pathname: b([
            h,
            a.encodeLocation
              ? a.encodeLocation(g.pathname).pathname
              : g.pathname,
          ]),
          pathnameBase:
            g.pathnameBase === '/'
              ? h
              : b([
                  h,
                  a.encodeLocation
                    ? a.encodeLocation(g.pathnameBase).pathname
                    : g.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
  return t && S
    ? i.createElement(
        U.Provider,
        {
          value: {
            location: L(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              f
            ),
            navigationType: C.Pop,
          },
        },
        S
      )
    : S;
}
function _e() {
  let e = Ye(),
    t = Be(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: r },
    o = { padding: '2px 4px', backgroundColor: r },
    l = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (l = i.createElement(
      i.Fragment,
      null,
      i.createElement('p', null, '💿 Hey developer 👋'),
      i.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        i.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        i.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    i.createElement(
      i.Fragment,
      null,
      i.createElement('h2', null, 'Unexpected Application Error!'),
      i.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? i.createElement('pre', { style: a }, n) : null,
      l
    )
  );
}
const Fe = i.createElement(_e, null);
class De extends i.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? i.createElement(
          E.Provider,
          { value: this.props.routeContext },
          i.createElement(j.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ke(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = i.useContext(M);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    i.createElement(E.Provider, { value: t }, r)
  );
}
function Ae(e, t, n, r) {
  var a;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    s = (a = n) == null ? void 0 : a.errors;
  if (s != null) {
    let d = l.findIndex(
      (c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0
    );
    (d >= 0 ||
      R(
        !1,
        'Could not find a matching route for errors on route IDs: ' +
          Object.keys(s).join(',')
      ),
      (l = l.slice(0, Math.min(l.length, d + 1))));
  }
  let u = !1,
    h = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let c = l[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (h = d),
        c.route.id)
      ) {
        let { loaderData: f, errors: p } = n,
          m =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!p || p[c.route.id] === void 0);
        if (c.route.lazy || m) {
          ((u = !0), h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((d, c, f) => {
    let p,
      m = !1,
      v = null,
      y = null;
    n &&
      ((p = s && c.route.id ? s[c.route.id] : void 0),
      (v = c.route.errorElement || Fe),
      u &&
        (h < 0 && f === 0
          ? (re(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (m = !0),
            (y = null))
          : h === f &&
            ((m = !0), (y = c.route.hydrateFallbackElement || null))));
    let S = t.concat(l.slice(0, f + 1)),
      g = () => {
        let P;
        return (
          p
            ? (P = v)
            : m
              ? (P = y)
              : c.route.Component
                ? (P = i.createElement(c.route.Component, null))
                : c.route.element
                  ? (P = c.route.element)
                  : (P = d),
          i.createElement(ke, {
            match: c,
            routeContext: { outlet: d, matches: S, isDataRoute: n != null },
            children: P,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? i.createElement(De, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: g(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var ne = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(ne || {}),
  N = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(N || {});
function _(e) {
  return (
    e +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function ze(e) {
  let t = i.useContext(M);
  return (t || R(!1, _(e)), t);
}
function Je(e) {
  let t = i.useContext(Z);
  return (t || R(!1, _(e)), t);
}
function Ve(e) {
  let t = i.useContext(E);
  return (t || R(!1, _(e)), t);
}
function F(e) {
  let t = Ve(e),
    n = t.matches[t.matches.length - 1];
  return (
    n.route.id ||
      R(!1, e + ' can only be used on routes that contain a unique "id"'),
    n.route.id
  );
}
function rt() {
  return F(N.UseRouteId);
}
function Ye() {
  var e;
  let t = i.useContext(j),
    n = Je(N.UseRouteError),
    r = F(N.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function qe() {
  let { router: e } = ze(ne.UseNavigateStable),
    t = F(N.UseNavigateStable),
    n = i.useRef(!1);
  return (
    te(() => {
      n.current = !0;
    }),
    i.useCallback(
      function (a, o) {
        (o === void 0 && (o = {}),
          x(n.current, ee),
          n.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : e.navigate(a, L({ fromRouteId: t }, o))));
      },
      [e, t]
    )
  );
}
const z = {};
function re(e, t, n) {
  !t && !z[e] && ((z[e] = !0), x(!1, n));
}
const J = {};
function Ge(e, t) {
  J[t] || ((J[t] = !0), console.warn(t));
}
const V = (e, t, n) =>
  Ge(
    e,
    '⚠️ React Router Future Flag Warning: ' +
      t +
      '. ' +
      ('You can use the `' + e + '` future flag to opt-in early. ') +
      ('For more information, see ' + n + '.')
  );
function He(e, t) {
  ((e == null ? void 0 : e.v7_startTransition) === void 0 &&
    V(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      V(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ));
}
const Xe = 'startTransition',
  Y = ae[Xe];
function at(e) {
  let {
      basename: t,
      children: n,
      initialEntries: r,
      initialIndex: a,
      future: o,
    } = e,
    l = i.useRef();
  l.current == null &&
    (l.current = oe({ initialEntries: r, initialIndex: a, v5Compat: !0 }));
  let s = l.current,
    [u, h] = i.useState({ action: s.action, location: s.location }),
    { v7_startTransition: d } = o || {},
    c = i.useCallback(
      (f) => {
        d && Y ? Y(() => h(f)) : h(f);
      },
      [h, d]
    );
  return (
    i.useLayoutEffect(() => s.listen(c), [s, c]),
    i.useEffect(() => He(o), [o]),
    i.createElement(Qe, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: s,
      future: o,
    })
  );
}
function Ke(e) {
  R(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Qe(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: a = C.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  B() &&
    R(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
  let u = t.replace(/^\/*/, '/'),
    h = i.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: l,
        future: L({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, l]
    );
  typeof r == 'string' && (r = w(r));
  let {
      pathname: d = '/',
      search: c = '',
      hash: f = '',
      state: p = null,
      key: m = 'default',
    } = r,
    v = i.useMemo(() => {
      let y = H(d, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: p, key: m },
            navigationType: a,
          };
    }, [u, d, c, f, p, m, a]);
  return (
    x(
      v != null,
      '<Router basename="' +
        u +
        '"> is not able to match the URL ' +
        ('"' + d + c + f + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    v == null
      ? null
      : i.createElement(
          I.Provider,
          { value: h },
          i.createElement(U.Provider, { children: n, value: v })
        )
  );
}
function ot(e) {
  let { children: t, location: n } = e;
  return je(W(t), n);
}
new Promise(() => {});
function W(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    i.Children.forEach(e, (r, a) => {
      if (!i.isValidElement(r)) return;
      let o = [...t, a];
      if (r.type === i.Fragment) {
        n.push.apply(n, W(r.props.children, o));
        return;
      }
      (r.type !== Ke &&
        R(
          !1,
          '[' +
            (typeof r.type == 'string' ? r.type : r.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        ),
        !r.props.index ||
          !r.props.children ||
          R(!1, 'An index route cannot have child routes.'));
      let l = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (l.children = W(r.props.children, o)), n.push(l));
    }),
    n
  );
}
export {
  Z as D,
  at as M,
  I as N,
  E as R,
  tt as a,
  $ as b,
  We as c,
  se as d,
  rt as e,
  M as f,
  nt as g,
  ot as h,
  R as i,
  b as j,
  Ke as k,
  Ee as m,
  H as s,
  et as u,
  x as w,
};
