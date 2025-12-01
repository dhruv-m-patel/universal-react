import { j as L } from './jsx-dev-runtime-mFCcXBaF.js';
import { r as k } from './index-CfFaKb_3.js';
import { o as ce, p as fe, P as Y } from './index-DufvmrK5.js';
import { c as Z } from './_commonjsHelpers-Cpj98o6Y.js';
var Te = function (e, n, r, a) {
  var i = r ? r.call(a, e, n) : void 0;
  if (i !== void 0) return !!i;
  if (e === n) return !0;
  if (typeof e != 'object' || !e || typeof n != 'object' || !n) return !1;
  var c = Object.keys(e),
    u = Object.keys(n);
  if (c.length !== u.length) return !1;
  for (
    var s = Object.prototype.hasOwnProperty.bind(n), l = 0;
    l < c.length;
    l++
  ) {
    var f = c[l];
    if (!s(f)) return !1;
    var T = e[f],
      p = n[f];
    if (
      ((i = r ? r.call(a, T, p, f) : void 0),
      i === !1 || (i === void 0 && T !== p))
    )
      return !1;
  }
  return !0;
};
function K(t) {
  return t && typeof t == 'object' && 'default' in t ? t.default : t;
}
var ee = k,
  pe = K(ee),
  de = K(Te);
function V(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function Ee(t, e) {
  ((t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e));
}
var Ae = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
function me(t, e, n) {
  if (typeof t != 'function')
    throw new Error('Expected reducePropsToState to be a function.');
  if (typeof e != 'function')
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  if (typeof n < 'u' && typeof n != 'function')
    throw new Error(
      'Expected mapStateOnServer to either be undefined or a function.'
    );
  function r(a) {
    return a.displayName || a.name || 'Component';
  }
  return function (i) {
    if (typeof i != 'function')
      throw new Error('Expected WrappedComponent to be a React component.');
    var c = [],
      u;
    function s() {
      ((u = t(
        c.map(function (f) {
          return f.props;
        })
      )),
        l.canUseDOM ? e(u) : n && (u = n(u)));
    }
    var l = (function (f) {
      Ee(T, f);
      function T() {
        return f.apply(this, arguments) || this;
      }
      ((T.peek = function () {
        return u;
      }),
        (T.rewind = function () {
          if (T.canUseDOM)
            throw new Error(
              'You may only call rewind() on the server. Call peek() to read the current state.'
            );
          var A = u;
          return ((u = void 0), (c = []), A);
        }));
      var p = T.prototype;
      return (
        (p.shouldComponentUpdate = function (A) {
          return !de(A, this.props);
        }),
        (p.componentWillMount = function () {
          (c.push(this), s());
        }),
        (p.componentDidUpdate = function () {
          s();
        }),
        (p.componentWillUnmount = function () {
          var A = c.indexOf(this);
          (c.splice(A, 1), s());
        }),
        (p.render = function () {
          return pe.createElement(i, this.props);
        }),
        T
      );
    })(ee.Component);
    return (
      V(l, 'displayName', 'SideEffect(' + r(i) + ')'),
      V(l, 'canUseDOM', Ae),
      l
    );
  };
}
var ve = me,
  $ = Array.isArray,
  X = Object.keys,
  Se = Object.prototype.hasOwnProperty,
  he = typeof Element < 'u';
function D(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == 'object' && typeof e == 'object') {
    var n = $(t),
      r = $(e),
      a,
      i,
      c;
    if (n && r) {
      if (((i = t.length), i != e.length)) return !1;
      for (a = i; a-- !== 0; ) if (!D(t[a], e[a])) return !1;
      return !0;
    }
    if (n != r) return !1;
    var u = t instanceof Date,
      s = e instanceof Date;
    if (u != s) return !1;
    if (u && s) return t.getTime() == e.getTime();
    var l = t instanceof RegExp,
      f = e instanceof RegExp;
    if (l != f) return !1;
    if (l && f) return t.toString() == e.toString();
    var T = X(t);
    if (((i = T.length), i !== X(e).length)) return !1;
    for (a = i; a-- !== 0; ) if (!Se.call(e, T[a])) return !1;
    if (he && t instanceof Element && e instanceof Element) return t === e;
    for (a = i; a-- !== 0; )
      if (((c = T[a]), !(c === '_owner' && t.$$typeof) && !D(t[c], e[c])))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var _e = function (e, n) {
    try {
      return D(e, n);
    } catch (r) {
      if (
        (r.message && r.message.match(/stack|recursion/i)) ||
        r.number === -2146828260
      )
        return (
          console.warn(
            'Warning: react-fast-compare does not handle circular references.',
            r.name,
            r.message
          ),
          !1
        );
      throw r;
    }
  },
  m = {},
  h = {};
h.__esModule = !0;
h.ATTRIBUTE_NAMES = {
  BODY: 'bodyAttributes',
  HTML: 'htmlAttributes',
  TITLE: 'titleAttributes',
};
var b = (h.TAG_NAMES = {
  BASE: 'base',
  BODY: 'body',
  HEAD: 'head',
  HTML: 'html',
  LINK: 'link',
  META: 'meta',
  NOSCRIPT: 'noscript',
  SCRIPT: 'script',
  STYLE: 'style',
  TITLE: 'title',
});
h.VALID_TAG_NAMES = Object.keys(b).map(function (t) {
  return b[t];
});
h.TAG_PROPERTIES = {
  CHARSET: 'charset',
  CSS_TEXT: 'cssText',
  HREF: 'href',
  HTTPEQUIV: 'http-equiv',
  INNER_HTML: 'innerHTML',
  ITEM_PROP: 'itemprop',
  NAME: 'name',
  PROPERTY: 'property',
  REL: 'rel',
  SRC: 'src',
};
var W = (h.REACT_TAG_MAP = {
  accesskey: 'accessKey',
  charset: 'charSet',
  class: 'className',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  'http-equiv': 'httpEquiv',
  itemprop: 'itemProp',
  tabindex: 'tabIndex',
});
h.HELMET_PROPS = {
  DEFAULT_TITLE: 'defaultTitle',
  DEFER: 'defer',
  ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
  ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
  TITLE_TEMPLATE: 'titleTemplate',
};
h.HTML_TAG_MAP = Object.keys(W).reduce(function (t, e) {
  return ((t[W[e]] = e), t);
}, {});
h.SELF_CLOSING_TAGS = [b.NOSCRIPT, b.SCRIPT, b.STYLE];
h.HELMET_ATTRIBUTE = 'data-react-helmet';
m.__esModule = !0;
m.warn =
  m.requestAnimationFrame =
  m.reducePropsToState =
  m.mapStateOnServer =
  m.handleClientStateChange =
  m.convertReactPropstoHtmlAttributes =
    void 0;
var ye =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        },
  ge =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    },
  Pe = k,
  te = re(Pe),
  Re = ce,
  Oe = re(Re),
  o = h;
function re(t) {
  return t && t.__esModule ? t : { default: t };
}
var U = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(e)
      : String(e)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;');
  },
  Me = function (e) {
    var n = M(e, o.TAG_NAMES.TITLE),
      r = M(e, o.HELMET_PROPS.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return n;
      });
    var a = M(e, o.HELMET_PROPS.DEFAULT_TITLE);
    return n || a || void 0;
  },
  Ce = function (e) {
    return M(e, o.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  H = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[e] < 'u';
      })
      .map(function (r) {
        return r[e];
      })
      .reduce(function (r, a) {
        return ge({}, r, a);
      }, {});
  },
  Ie = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[o.TAG_NAMES.BASE] < 'u';
      })
      .map(function (r) {
        return r[o.TAG_NAMES.BASE];
      })
      .reverse()
      .reduce(function (r, a) {
        if (!r.length)
          for (var i = Object.keys(a), c = 0; c < i.length; c++) {
            var u = i[c],
              s = u.toLowerCase();
            if (e.indexOf(s) !== -1 && a[s]) return r.concat(a);
          }
        return r;
      }, []);
  },
  I = function (e, n, r) {
    var a = {};
    return r
      .filter(function (i) {
        return Array.isArray(i[e])
          ? !0
          : (typeof i[e] < 'u' &&
              ae(
                'Helmet: ' +
                  e +
                  ' should be of type "Array". Instead found type "' +
                  ye(i[e]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[e];
      })
      .reverse()
      .reduce(function (i, c) {
        var u = {};
        c.filter(function (p) {
          for (var d = void 0, A = Object.keys(p), _ = 0; _ < A.length; _++) {
            var y = A[_],
              g = y.toLowerCase();
            (n.indexOf(g) !== -1 &&
              !(
                d === o.TAG_PROPERTIES.REL && p[d].toLowerCase() === 'canonical'
              ) &&
              !(
                g === o.TAG_PROPERTIES.REL &&
                p[g].toLowerCase() === 'stylesheet'
              ) &&
              (d = g),
              n.indexOf(y) !== -1 &&
                (y === o.TAG_PROPERTIES.INNER_HTML ||
                  y === o.TAG_PROPERTIES.CSS_TEXT ||
                  y === o.TAG_PROPERTIES.ITEM_PROP) &&
                (d = y));
          }
          if (!d || !p[d]) return !1;
          var C = p[d].toLowerCase();
          return (
            a[d] || (a[d] = {}),
            u[d] || (u[d] = {}),
            a[d][C] ? !1 : ((u[d][C] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (p) {
            return i.push(p);
          });
        for (var s = Object.keys(u), l = 0; l < s.length; l++) {
          var f = s[l],
            T = (0, Oe.default)({}, a[f], u[f]);
          a[f] = T;
        }
        return i;
      }, [])
      .reverse();
  },
  M = function (e, n) {
    for (var r = e.length - 1; r >= 0; r--) {
      var a = e[r];
      if (a.hasOwnProperty(n)) return a[n];
    }
    return null;
  },
  Ne = function (e) {
    return {
      baseTag: Ie([o.TAG_PROPERTIES.HREF], e),
      bodyAttributes: H(o.ATTRIBUTE_NAMES.BODY, e),
      defer: M(e, o.HELMET_PROPS.DEFER),
      encode: M(e, o.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: H(o.ATTRIBUTE_NAMES.HTML, e),
      linkTags: I(
        o.TAG_NAMES.LINK,
        [o.TAG_PROPERTIES.REL, o.TAG_PROPERTIES.HREF],
        e
      ),
      metaTags: I(
        o.TAG_NAMES.META,
        [
          o.TAG_PROPERTIES.NAME,
          o.TAG_PROPERTIES.CHARSET,
          o.TAG_PROPERTIES.HTTPEQUIV,
          o.TAG_PROPERTIES.PROPERTY,
          o.TAG_PROPERTIES.ITEM_PROP,
        ],
        e
      ),
      noscriptTags: I(o.TAG_NAMES.NOSCRIPT, [o.TAG_PROPERTIES.INNER_HTML], e),
      onChangeClientState: Ce(e),
      scriptTags: I(
        o.TAG_NAMES.SCRIPT,
        [o.TAG_PROPERTIES.SRC, o.TAG_PROPERTIES.INNER_HTML],
        e
      ),
      styleTags: I(o.TAG_NAMES.STYLE, [o.TAG_PROPERTIES.CSS_TEXT], e),
      title: Me(e),
      titleAttributes: H(o.ATTRIBUTE_NAMES.TITLE, e),
    };
  },
  x = (function () {
    var t = Date.now();
    return function (e) {
      var n = Date.now();
      n - t > 16
        ? ((t = n), e(n))
        : setTimeout(function () {
            x(e);
          }, 0);
    };
  })(),
  z = function (e) {
    return clearTimeout(e);
  },
  ne =
    typeof window < 'u'
      ? window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        x
      : Z.requestAnimationFrame || x,
  be =
    typeof window < 'u'
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        z
      : Z.cancelAnimationFrame || z,
  ae = function (e) {
    return console && typeof console.warn == 'function' && console.warn(e);
  },
  N = null,
  we = function (e) {
    (N && be(N),
      e.defer
        ? (N = ne(function () {
            Q(e, function () {
              N = null;
            });
          }))
        : (Q(e), (N = null)));
  },
  Q = function (e, n) {
    var r = e.baseTag,
      a = e.bodyAttributes,
      i = e.htmlAttributes,
      c = e.linkTags,
      u = e.metaTags,
      s = e.noscriptTags,
      l = e.onChangeClientState,
      f = e.scriptTags,
      T = e.styleTags,
      p = e.title,
      d = e.titleAttributes;
    (j(o.TAG_NAMES.BODY, a), j(o.TAG_NAMES.HTML, i), Le(p, d));
    var A = {
        baseTag: O(o.TAG_NAMES.BASE, r),
        linkTags: O(o.TAG_NAMES.LINK, c),
        metaTags: O(o.TAG_NAMES.META, u),
        noscriptTags: O(o.TAG_NAMES.NOSCRIPT, s),
        scriptTags: O(o.TAG_NAMES.SCRIPT, f),
        styleTags: O(o.TAG_NAMES.STYLE, T),
      },
      _ = {},
      y = {};
    (Object.keys(A).forEach(function (g) {
      var C = A[g],
        q = C.newTags,
        le = C.oldTags;
      (q.length && (_[g] = q), le.length && (y[g] = A[g].oldTags));
    }),
      n && n(),
      l(e, _, y));
  },
  oe = function (e) {
    return Array.isArray(e) ? e.join('') : e;
  },
  Le = function (e, n) {
    (typeof e < 'u' && document.title !== e && (document.title = oe(e)),
      j(o.TAG_NAMES.TITLE, n));
  },
  j = function (e, n) {
    var r = document.getElementsByTagName(e)[0];
    if (r) {
      for (
        var a = r.getAttribute(o.HELMET_ATTRIBUTE),
          i = a ? a.split(',') : [],
          c = [].concat(i),
          u = Object.keys(n),
          s = 0;
        s < u.length;
        s++
      ) {
        var l = u[s],
          f = n[l] || '';
        (r.getAttribute(l) !== f && r.setAttribute(l, f),
          i.indexOf(l) === -1 && i.push(l));
        var T = c.indexOf(l);
        T !== -1 && c.splice(T, 1);
      }
      for (var p = c.length - 1; p >= 0; p--) r.removeAttribute(c[p]);
      i.length === c.length
        ? r.removeAttribute(o.HELMET_ATTRIBUTE)
        : r.getAttribute(o.HELMET_ATTRIBUTE) !== u.join(',') &&
          r.setAttribute(o.HELMET_ATTRIBUTE, u.join(','));
    }
  },
  O = function (e, n) {
    var r = document.head || document.querySelector(o.TAG_NAMES.HEAD),
      a = r.querySelectorAll(e + '[' + o.HELMET_ATTRIBUTE + ']'),
      i = Array.prototype.slice.call(a),
      c = [],
      u = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (s) {
          var l = document.createElement(e);
          for (var f in s)
            if (s.hasOwnProperty(f))
              if (f === o.TAG_PROPERTIES.INNER_HTML) l.innerHTML = s.innerHTML;
              else if (f === o.TAG_PROPERTIES.CSS_TEXT)
                l.styleSheet
                  ? (l.styleSheet.cssText = s.cssText)
                  : l.appendChild(document.createTextNode(s.cssText));
              else {
                var T = typeof s[f] > 'u' ? '' : s[f];
                l.setAttribute(f, T);
              }
          (l.setAttribute(o.HELMET_ATTRIBUTE, 'true'),
            i.some(function (p, d) {
              return ((u = d), l.isEqualNode(p));
            })
              ? i.splice(u, 1)
              : c.push(l));
        }),
      i.forEach(function (s) {
        return s.parentNode.removeChild(s);
      }),
      c.forEach(function (s) {
        return r.appendChild(s);
      }),
      { oldTags: i, newTags: c }
    );
  },
  ie = function (e) {
    return Object.keys(e).reduce(function (n, r) {
      var a = typeof e[r] < 'u' ? r + '="' + e[r] + '"' : '' + r;
      return n ? n + ' ' + a : a;
    }, '');
  },
  He = function (e, n, r, a) {
    var i = ie(r),
      c = oe(n);
    return i
      ? '<' +
          e +
          ' ' +
          o.HELMET_ATTRIBUTE +
          '="true" ' +
          i +
          '>' +
          U(c, a) +
          '</' +
          e +
          '>'
      : '<' +
          e +
          ' ' +
          o.HELMET_ATTRIBUTE +
          '="true">' +
          U(c, a) +
          '</' +
          e +
          '>';
  },
  Ge = function (e, n, r) {
    return n.reduce(function (a, i) {
      var c = Object.keys(i)
          .filter(function (l) {
            return !(
              l === o.TAG_PROPERTIES.INNER_HTML ||
              l === o.TAG_PROPERTIES.CSS_TEXT
            );
          })
          .reduce(function (l, f) {
            var T = typeof i[f] > 'u' ? f : f + '="' + U(i[f], r) + '"';
            return l ? l + ' ' + T : T;
          }, ''),
        u = i.innerHTML || i.cssText || '',
        s = o.SELF_CLOSING_TAGS.indexOf(e) === -1;
      return (
        a +
        '<' +
        e +
        ' ' +
        o.HELMET_ATTRIBUTE +
        '="true" ' +
        c +
        (s ? '/>' : '>' + u + '</' + e + '>')
      );
    }, '');
  },
  ue = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, a) {
      return ((r[o.REACT_TAG_MAP[a] || a] = e[a]), r);
    }, n);
  },
  De = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, a) {
      return ((r[o.HTML_TAG_MAP[a] || a] = e[a]), r);
    }, n);
  },
  Ue = function (e, n, r) {
    var a,
      i = ((a = { key: n }), (a[o.HELMET_ATTRIBUTE] = !0), a),
      c = ue(r, i);
    return [te.default.createElement(o.TAG_NAMES.TITLE, c, n)];
  },
  xe = function (e, n) {
    return n.map(function (r, a) {
      var i,
        c = ((i = { key: a }), (i[o.HELMET_ATTRIBUTE] = !0), i);
      return (
        Object.keys(r).forEach(function (u) {
          var s = o.REACT_TAG_MAP[u] || u;
          if (
            s === o.TAG_PROPERTIES.INNER_HTML ||
            s === o.TAG_PROPERTIES.CSS_TEXT
          ) {
            var l = r.innerHTML || r.cssText;
            c.dangerouslySetInnerHTML = { __html: l };
          } else c[s] = r[u];
        }),
        te.default.createElement(e, c)
      );
    });
  },
  P = function (e, n, r) {
    switch (e) {
      case o.TAG_NAMES.TITLE:
        return {
          toComponent: function () {
            return Ue(e, n.title, n.titleAttributes);
          },
          toString: function () {
            return He(e, n.title, n.titleAttributes, r);
          },
        };
      case o.ATTRIBUTE_NAMES.BODY:
      case o.ATTRIBUTE_NAMES.HTML:
        return {
          toComponent: function () {
            return ue(n);
          },
          toString: function () {
            return ie(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return xe(e, n);
          },
          toString: function () {
            return Ge(e, n, r);
          },
        };
    }
  },
  je = function (e) {
    var n = e.baseTag,
      r = e.bodyAttributes,
      a = e.encode,
      i = e.htmlAttributes,
      c = e.linkTags,
      u = e.metaTags,
      s = e.noscriptTags,
      l = e.scriptTags,
      f = e.styleTags,
      T = e.title,
      p = T === void 0 ? '' : T,
      d = e.titleAttributes;
    return {
      base: P(o.TAG_NAMES.BASE, n, a),
      bodyAttributes: P(o.ATTRIBUTE_NAMES.BODY, r, a),
      htmlAttributes: P(o.ATTRIBUTE_NAMES.HTML, i, a),
      link: P(o.TAG_NAMES.LINK, c, a),
      meta: P(o.TAG_NAMES.META, u, a),
      noscript: P(o.TAG_NAMES.NOSCRIPT, s, a),
      script: P(o.TAG_NAMES.SCRIPT, l, a),
      style: P(o.TAG_NAMES.STYLE, f, a),
      title: P(o.TAG_NAMES.TITLE, { title: p, titleAttributes: d }, a),
    };
  };
m.convertReactPropstoHtmlAttributes = De;
m.handleClientStateChange = we;
m.mapStateOnServer = je;
m.reducePropsToState = Ne;
m.requestAnimationFrame = ne;
m.warn = ae;
var se = void 0,
  v =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    },
  Fe = (function () {
    function t(e, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        ((a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a));
      }
    }
    return function (e, n, r) {
      return (n && t(e.prototype, n), r && t(e, r), e);
    };
  })(),
  ke = k,
  G = w(ke),
  Be = fe,
  E = w(Be),
  qe = ve,
  Ye = w(qe),
  Ve = _e,
  $e = w(Ve),
  R = m,
  S = h;
function w(t) {
  return t && t.__esModule ? t : { default: t };
}
function J(t, e) {
  var n = {};
  for (var r in t)
    e.indexOf(r) >= 0 ||
      (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
  return n;
}
function Xe(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function');
}
function We(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t;
}
function ze(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof e
    );
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf
        ? Object.setPrototypeOf(t, e)
        : (t.__proto__ = e)));
}
var Qe = function (e) {
    var n, r;
    return (
      (r = n =
        (function (a) {
          ze(i, a);
          function i() {
            return (Xe(this, i), We(this, a.apply(this, arguments)));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (u) {
              return !(0, $e.default)(this.props, u);
            }),
            (i.prototype.mapNestedChildrenToProps = function (u, s) {
              if (!s) return null;
              switch (u.type) {
                case S.TAG_NAMES.SCRIPT:
                case S.TAG_NAMES.NOSCRIPT:
                  return { innerHTML: s };
                case S.TAG_NAMES.STYLE:
                  return { cssText: s };
              }
              throw new Error(
                '<' +
                  u.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (u) {
              var s,
                l = u.child,
                f = u.arrayTypeChildren,
                T = u.newChildProps,
                p = u.nestedChildren;
              return v(
                {},
                f,
                ((s = {}),
                (s[l.type] = [].concat(f[l.type] || [], [
                  v({}, T, this.mapNestedChildrenToProps(l, p)),
                ])),
                s)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (u) {
              var s,
                l,
                f = u.child,
                T = u.newProps,
                p = u.newChildProps,
                d = u.nestedChildren;
              switch (f.type) {
                case S.TAG_NAMES.TITLE:
                  return v(
                    {},
                    T,
                    ((s = {}),
                    (s[f.type] = d),
                    (s.titleAttributes = v({}, p)),
                    s)
                  );
                case S.TAG_NAMES.BODY:
                  return v({}, T, { bodyAttributes: v({}, p) });
                case S.TAG_NAMES.HTML:
                  return v({}, T, { htmlAttributes: v({}, p) });
              }
              return v({}, T, ((l = {}), (l[f.type] = v({}, p)), l));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (u, s) {
              var l = v({}, s);
              return (
                Object.keys(u).forEach(function (f) {
                  var T;
                  l = v({}, l, ((T = {}), (T[f] = u[f]), T));
                }),
                l
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (u, s) {
              {
                if (
                  !S.VALID_TAG_NAMES.some(function (l) {
                    return u.type === l;
                  })
                )
                  return typeof u.type == 'function'
                    ? (0, R.warn)(
                        'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
                      )
                    : (0, R.warn)(
                        'Only elements types ' +
                          S.VALID_TAG_NAMES.join(', ') +
                          ' are allowed. Helmet does not support rendering <' +
                          u.type +
                          '> elements. Refer to our API for more information.'
                      );
                if (
                  s &&
                  typeof s != 'string' &&
                  (!Array.isArray(s) ||
                    s.some(function (l) {
                      return typeof l != 'string';
                    }))
                )
                  throw new Error(
                    'Helmet expects a string as a child of <' +
                      u.type +
                      '>. Did you forget to wrap your children in braces? ( <' +
                      u.type +
                      '>{``}</' +
                      u.type +
                      '> ) Refer to our API for more information.'
                  );
              }
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (u, s) {
              var l = this,
                f = {};
              return (
                G.default.Children.forEach(u, function (T) {
                  if (!(!T || !T.props)) {
                    var p = T.props,
                      d = p.children,
                      A = J(p, ['children']),
                      _ = (0, R.convertReactPropstoHtmlAttributes)(A);
                    switch ((l.warnOnInvalidChildren(T, d), T.type)) {
                      case S.TAG_NAMES.LINK:
                      case S.TAG_NAMES.META:
                      case S.TAG_NAMES.NOSCRIPT:
                      case S.TAG_NAMES.SCRIPT:
                      case S.TAG_NAMES.STYLE:
                        f = l.flattenArrayTypeChildren({
                          child: T,
                          arrayTypeChildren: f,
                          newChildProps: _,
                          nestedChildren: d,
                        });
                        break;
                      default:
                        s = l.mapObjectTypeChildren({
                          child: T,
                          newProps: s,
                          newChildProps: _,
                          nestedChildren: d,
                        });
                        break;
                    }
                  }
                }),
                (s = this.mapArrayTypeChildrenToProps(f, s)),
                s
              );
            }),
            (i.prototype.render = function () {
              var u = this.props,
                s = u.children,
                l = J(u, ['children']),
                f = v({}, l);
              return (
                s && (f = this.mapChildrenToProps(s, f)),
                G.default.createElement(e, f)
              );
            }),
            Fe(i, null, [
              {
                key: 'canUseDOM',
                set: function (u) {
                  e.canUseDOM = u;
                },
              },
            ]),
            i
          );
        })(G.default.Component)),
      (n.propTypes = {
        base: E.default.object,
        bodyAttributes: E.default.object,
        children: E.default.oneOfType([
          E.default.arrayOf(E.default.node),
          E.default.node,
        ]),
        defaultTitle: E.default.string,
        defer: E.default.bool,
        encodeSpecialCharacters: E.default.bool,
        htmlAttributes: E.default.object,
        link: E.default.arrayOf(E.default.object),
        meta: E.default.arrayOf(E.default.object),
        noscript: E.default.arrayOf(E.default.object),
        onChangeClientState: E.default.func,
        script: E.default.arrayOf(E.default.object),
        style: E.default.arrayOf(E.default.object),
        title: E.default.string,
        titleAttributes: E.default.object,
        titleTemplate: E.default.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = e.peek),
      (n.rewind = function () {
        var a = e.rewind();
        return (
          a ||
            (a = (0, R.mapStateOnServer)({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: '',
              titleAttributes: {},
            })),
          a
        );
      }),
      r
    );
  },
  Je = function () {
    return null;
  },
  Ze = (0, Ye.default)(
    R.reducePropsToState,
    R.handleClientStateChange,
    R.mapStateOnServer
  )(Je),
  F = Qe(Ze);
F.renderStatic = F.rewind;
se = F;
function B({ title: t, description: e }) {
  return L.jsxDEV(
    se,
    {
      children: [
        L.jsxDEV(
          'title',
          { children: t },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.jsx',
            lineNumber: 8,
            columnNumber: 7,
          },
          this
        ),
        L.jsxDEV(
          'meta',
          { name: 'description', content: e },
          void 0,
          !1,
          {
            fileName:
              '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.jsx',
            lineNumber: 9,
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
        '/Users/dhruvpatel/Projects/universal-react/src/common/components/DefaultHelmet/DefaultHelmet.jsx',
      lineNumber: 7,
      columnNumber: 5,
    },
    this
  );
}
B.propTypes = { title: Y.string, description: Y.string };
B.defaultProps = {
  title: 'Universal React App',
  description: 'A universal react app SSR and database support',
};
B.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DefaultHelmet',
  props: {
    title: {
      defaultValue: { value: "'Universal React App'", computed: !1 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    description: {
      defaultValue: {
        value: "'A universal react app SSR and database support'",
        computed: !1,
      },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
  },
};
export { B as D };
