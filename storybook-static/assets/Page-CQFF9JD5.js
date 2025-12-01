import { j as jsxDevRuntimeExports } from './jsx-dev-runtime-mFCcXBaF.js';
import { R as React, r as reactExports } from './index-CfFaKb_3.js';
import { P as PropTypes } from './index-DufvmrK5.js';
import {
  c as commonjsGlobal,
  g as getDefaultExportFromCjs,
} from './_commonjsHelpers-Cpj98o6Y.js';
import { D as DefaultHelmet } from './DefaultHelmet-CDoBarfe.js';
import { C as Container } from './Container-CefAlw1k.js';
import './Spinner-DALj5yVf.js';
import './Card-pkHQ9FEO.js';
import './Pagination-D0bv8qZe.js';
var assign = make_assign(),
  create$1 = make_create(),
  trim$1 = make_trim(),
  Global$5 = typeof window < 'u' ? window : commonjsGlobal,
  util$6 = {
    create: create$1,
    trim: trim$1,
    bind: bind$2,
    slice: slice$1,
    each: each$7,
    pluck: pluck$1,
    isList: isList$1,
    isFunction: isFunction$1,
    isObject: isObject$1,
    Global: Global$5,
  };
function make_assign() {
  return Object.assign
    ? Object.assign
    : function (t, n, r, a) {
        for (var i = 1; i < arguments.length; i++)
          each$7(Object(arguments[i]), function (s, o) {
            t[o] = s;
          });
        return t;
      };
}
function make_create() {
  if (Object.create)
    return function (t, n, r, a) {
      var i = slice$1(arguments, 1);
      return assign.apply(this, [Object.create(t)].concat(i));
    };
  {
    let e = function () {};
    return function (n, r, a, i) {
      var s = slice$1(arguments, 1);
      return ((e.prototype = n), assign.apply(this, [new e()].concat(s)));
    };
  }
}
function make_trim() {
  return String.prototype.trim
    ? function (t) {
        return String.prototype.trim.call(t);
      }
    : function (t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
}
function bind$2(e, t) {
  return function () {
    return t.apply(e, Array.prototype.slice.call(arguments, 0));
  };
}
function slice$1(e, t) {
  return Array.prototype.slice.call(e, t || 0);
}
function each$7(e, t) {
  pluck$1(e, function (n, r) {
    return (t(n, r), !1);
  });
}
function pluck$1(e, t) {
  if (isList$1(e)) {
    for (var n = 0; n < e.length; n++) if (t(e[n], n)) return e[n];
  } else for (var r in e) if (e.hasOwnProperty(r) && t(e[r], r)) return e[r];
}
function isList$1(e) {
  return e != null && typeof e != 'function' && typeof e.length == 'number';
}
function isFunction$1(e) {
  return e && {}.toString.call(e) === '[object Function]';
}
function isObject$1(e) {
  return e && {}.toString.call(e) === '[object Object]';
}
var util$5 = util$6,
  slice = util$5.slice,
  pluck = util$5.pluck,
  each$6 = util$5.each,
  bind$1 = util$5.bind,
  create = util$5.create,
  isList = util$5.isList,
  isFunction = util$5.isFunction,
  isObject = util$5.isObject,
  storeEngine = { createStore },
  storeAPI = {
    version: '2.0.12',
    enabled: !1,
    get: function (e, t) {
      var n = this.storage.read(this._namespacePrefix + e);
      return this._deserialize(n, t);
    },
    set: function (e, t) {
      return t === void 0
        ? this.remove(e)
        : (this.storage.write(this._namespacePrefix + e, this._serialize(t)),
          t);
    },
    remove: function (e) {
      this.storage.remove(this._namespacePrefix + e);
    },
    each: function (e) {
      var t = this;
      this.storage.each(function (n, r) {
        e.call(t, t._deserialize(n), (r || '').replace(t._namespaceRegexp, ''));
      });
    },
    clearAll: function () {
      this.storage.clearAll();
    },
    hasNamespace: function (e) {
      return this._namespacePrefix == '__storejs_' + e + '_';
    },
    createStore: function () {
      return createStore.apply(this, arguments);
    },
    addPlugin: function (e) {
      this._addPlugin(e);
    },
    namespace: function (e) {
      return createStore(this.storage, this.plugins, e);
    },
  };
function _warn() {
  var e = typeof console > 'u' ? null : console;
  if (e) {
    var t = e.warn ? e.warn : e.log;
    t.apply(e, arguments);
  }
}
function createStore(e, t, n) {
  (n || (n = ''), e && !isList(e) && (e = [e]), t && !isList(t) && (t = [t]));
  var r = n ? '__storejs_' + n + '_' : '',
    a = n ? new RegExp('^' + r) : null,
    i = /^[a-zA-Z0-9_\-]*$/;
  if (!i.test(n))
    throw new Error(
      'store.js namespaces can only have alphanumerics + underscores and dashes'
    );
  var s = {
      _namespacePrefix: r,
      _namespaceRegexp: a,
      _testStorage: function (l) {
        try {
          var c = '__storejs__test__';
          l.write(c, c);
          var u = l.read(c) === c;
          return (l.remove(c), u);
        } catch {
          return !1;
        }
      },
      _assignPluginFnProp: function (l, c) {
        var u = this[c];
        this[c] = function () {
          var d = slice(arguments, 0),
            v = this;
          function h() {
            if (u)
              return (
                each$6(arguments, function (p, g) {
                  d[g] = p;
                }),
                u.apply(v, d)
              );
          }
          var b = [h].concat(d);
          return l.apply(v, b);
        };
      },
      _serialize: function (l) {
        return JSON.stringify(l);
      },
      _deserialize: function (l, c) {
        if (!l) return c;
        var u = '';
        try {
          u = JSON.parse(l);
        } catch {
          u = l;
        }
        return u !== void 0 ? u : c;
      },
      _addStorage: function (l) {
        this.enabled ||
          (this._testStorage(l) && ((this.storage = l), (this.enabled = !0)));
      },
      _addPlugin: function (l) {
        var c = this;
        if (isList(l)) {
          each$6(l, function (d) {
            c._addPlugin(d);
          });
          return;
        }
        var u = pluck(this.plugins, function (d) {
          return l === d;
        });
        if (!u) {
          if ((this.plugins.push(l), !isFunction(l)))
            throw new Error(
              'Plugins must be function values that return objects'
            );
          var m = l.call(this);
          if (!isObject(m))
            throw new Error(
              'Plugins must return an object of function properties'
            );
          each$6(m, function (d, v) {
            if (!isFunction(d))
              throw new Error(
                'Bad plugin property: ' +
                  v +
                  ' from plugin ' +
                  l.name +
                  '. Plugins should only return functions.'
              );
            c._assignPluginFnProp(d, v);
          });
        }
      },
      addStorage: function (l) {
        (_warn(
          'store.addStorage(storage) is deprecated. Use createStore([storages])'
        ),
          this._addStorage(l));
      },
    },
    o = create(s, storeAPI, { plugins: [] });
  return (
    (o.raw = {}),
    each$6(o, function (l, c) {
      isFunction(l) && (o.raw[c] = bind$1(o, l));
    }),
    each$6(e, function (l) {
      o._addStorage(l);
    }),
    each$6(t, function (l) {
      o._addPlugin(l);
    }),
    o
  );
}
var util$4 = util$6,
  Global$4 = util$4.Global,
  localStorage_1 = {
    name: 'localStorage',
    read: read$5,
    write: write$5,
    each: each$5,
    remove: remove$5,
    clearAll: clearAll$5,
  };
function localStorage() {
  return Global$4.localStorage;
}
function read$5(e) {
  return localStorage().getItem(e);
}
function write$5(e, t) {
  return localStorage().setItem(e, t);
}
function each$5(e) {
  for (var t = localStorage().length - 1; t >= 0; t--) {
    var n = localStorage().key(t);
    e(read$5(n), n);
  }
}
function remove$5(e) {
  return localStorage().removeItem(e);
}
function clearAll$5() {
  return localStorage().clear();
}
var util$3 = util$6,
  Global$3 = util$3.Global,
  oldFFGlobalStorage = {
    name: 'oldFF-globalStorage',
    read: read$4,
    write: write$4,
    each: each$4,
    remove: remove$4,
    clearAll: clearAll$4,
  },
  globalStorage = Global$3.globalStorage;
function read$4(e) {
  return globalStorage[e];
}
function write$4(e, t) {
  globalStorage[e] = t;
}
function each$4(e) {
  for (var t = globalStorage.length - 1; t >= 0; t--) {
    var n = globalStorage.key(t);
    e(globalStorage[n], n);
  }
}
function remove$4(e) {
  return globalStorage.removeItem(e);
}
function clearAll$4() {
  each$4(function (e, t) {
    delete globalStorage[e];
  });
}
var util$2 = util$6,
  Global$2 = util$2.Global,
  oldIEUserDataStorage = {
    name: 'oldIE-userDataStorage',
    write: write$3,
    read: read$3,
    each: each$3,
    remove: remove$3,
    clearAll: clearAll$3,
  },
  storageName = 'storejs',
  doc$1 = Global$2.document,
  _withStorageEl = _makeIEStorageElFunction(),
  disable = (Global$2.navigator ? Global$2.navigator.userAgent : '').match(
    / (MSIE 8|MSIE 9|MSIE 10)\./
  );
function write$3(e, t) {
  if (!disable) {
    var n = fixKey(e);
    _withStorageEl(function (r) {
      (r.setAttribute(n, t), r.save(storageName));
    });
  }
}
function read$3(e) {
  if (!disable) {
    var t = fixKey(e),
      n = null;
    return (
      _withStorageEl(function (r) {
        n = r.getAttribute(t);
      }),
      n
    );
  }
}
function each$3(e) {
  _withStorageEl(function (t) {
    for (
      var n = t.XMLDocument.documentElement.attributes, r = n.length - 1;
      r >= 0;
      r--
    ) {
      var a = n[r];
      e(t.getAttribute(a.name), a.name);
    }
  });
}
function remove$3(e) {
  var t = fixKey(e);
  _withStorageEl(function (n) {
    (n.removeAttribute(t), n.save(storageName));
  });
}
function clearAll$3() {
  _withStorageEl(function (e) {
    var t = e.XMLDocument.documentElement.attributes;
    e.load(storageName);
    for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
    e.save(storageName);
  });
}
var forbiddenCharsRegex = new RegExp(
  '[!"#$%&\'()*+,/\\\\:;<=>?@[\\]^`{|}~]',
  'g'
);
function fixKey(e) {
  return e.replace(/^\d/, '___$&').replace(forbiddenCharsRegex, '___');
}
function _makeIEStorageElFunction() {
  if (!doc$1 || !doc$1.documentElement || !doc$1.documentElement.addBehavior)
    return null;
  var e = 'script',
    t,
    n,
    r;
  try {
    ((n = new ActiveXObject('htmlfile')),
      n.open(),
      n.write(
        '<' +
          e +
          '>document.w=window</' +
          e +
          '><iframe src="/favicon.ico"></iframe>'
      ),
      n.close(),
      (t = n.w.frames[0].document),
      (r = t.createElement('div')));
  } catch {
    ((r = doc$1.createElement('div')), (t = doc$1.body));
  }
  return function (a) {
    var i = [].slice.call(arguments, 0);
    (i.unshift(r),
      t.appendChild(r),
      r.addBehavior('#default#userData'),
      r.load(storageName),
      a.apply(this, i),
      t.removeChild(r));
  };
}
var util$1 = util$6,
  Global$1 = util$1.Global,
  trim = util$1.trim,
  cookieStorage = {
    name: 'cookieStorage',
    read: read$2,
    write: write$2,
    each: each$2,
    remove: remove$2,
    clearAll: clearAll$2,
  },
  doc = Global$1.document;
function read$2(e) {
  if (!e || !_has(e)) return null;
  var t =
    '(?:^|.*;\\s*)' +
    escape(e).replace(/[\-\.\+\*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
  return unescape(doc.cookie.replace(new RegExp(t), '$1'));
}
function each$2(e) {
  for (var t = doc.cookie.split(/; ?/g), n = t.length - 1; n >= 0; n--)
    if (trim(t[n])) {
      var r = t[n].split('='),
        a = unescape(r[0]),
        i = unescape(r[1]);
      e(i, a);
    }
}
function write$2(e, t) {
  e &&
    (doc.cookie =
      escape(e) +
      '=' +
      escape(t) +
      '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/');
}
function remove$2(e) {
  !e ||
    !_has(e) ||
    (doc.cookie =
      escape(e) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/');
}
function clearAll$2() {
  each$2(function (e, t) {
    remove$2(t);
  });
}
function _has(e) {
  return new RegExp(
    '(?:^|;\\s*)' + escape(e).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
  ).test(doc.cookie);
}
var util = util$6,
  Global = util.Global,
  sessionStorage_1 = {
    name: 'sessionStorage',
    read: read$1,
    write: write$1,
    each: each$1,
    remove: remove$1,
    clearAll: clearAll$1,
  };
function sessionStorage() {
  return Global.sessionStorage;
}
function read$1(e) {
  return sessionStorage().getItem(e);
}
function write$1(e, t) {
  return sessionStorage().setItem(e, t);
}
function each$1(e) {
  for (var t = sessionStorage().length - 1; t >= 0; t--) {
    var n = sessionStorage().key(t);
    e(read$1(n), n);
  }
}
function remove$1(e) {
  return sessionStorage().removeItem(e);
}
function clearAll$1() {
  return sessionStorage().clear();
}
var memoryStorage_1 = {
    name: 'memoryStorage',
    read,
    write,
    each,
    remove,
    clearAll,
  },
  memoryStorage = {};
function read(e) {
  return memoryStorage[e];
}
function write(e, t) {
  memoryStorage[e] = t;
}
function each(e) {
  for (var t in memoryStorage)
    memoryStorage.hasOwnProperty(t) && e(memoryStorage[t], t);
}
function remove(e) {
  delete memoryStorage[e];
}
function clearAll(e) {
  memoryStorage = {};
}
var all = [
    localStorage_1,
    oldFFGlobalStorage,
    oldIEUserDataStorage,
    cookieStorage,
    sessionStorage_1,
    memoryStorage_1,
  ],
  json2$1 = {},
  hasRequiredJson2;
function requireJson2() {
  return (
    hasRequiredJson2 ||
      ((hasRequiredJson2 = 1),
      typeof JSON != 'object' && (JSON = {}),
      (function () {
        var rx_one = /^[\],:{}\s]*$/,
          rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          rx_three =
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          rx_four = /(?:^|:|,)(?:\s*\[)+/g,
          rx_escapable =
            /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          rx_dangerous =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        function f(e) {
          return e < 10 ? '0' + e : e;
        }
        function this_value() {
          return this.valueOf();
        }
        typeof Date.prototype.toJSON != 'function' &&
          ((Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() +
                  '-' +
                  f(this.getUTCMonth() + 1) +
                  '-' +
                  f(this.getUTCDate()) +
                  'T' +
                  f(this.getUTCHours()) +
                  ':' +
                  f(this.getUTCMinutes()) +
                  ':' +
                  f(this.getUTCSeconds()) +
                  'Z'
              : null;
          }),
          (Boolean.prototype.toJSON = this_value),
          (Number.prototype.toJSON = this_value),
          (String.prototype.toJSON = this_value));
        var gap, indent, meta, rep;
        function quote(e) {
          return (
            (rx_escapable.lastIndex = 0),
            rx_escapable.test(e)
              ? '"' +
                e.replace(rx_escapable, function (t) {
                  var n = meta[t];
                  return typeof n == 'string'
                    ? n
                    : '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function str(e, t) {
          var n,
            r,
            a,
            i,
            s = gap,
            o,
            l = t[e];
          switch (
            (l &&
              typeof l == 'object' &&
              typeof l.toJSON == 'function' &&
              (l = l.toJSON(e)),
            typeof rep == 'function' && (l = rep.call(t, e, l)),
            typeof l)
          ) {
            case 'string':
              return quote(l);
            case 'number':
              return isFinite(l) ? String(l) : 'null';
            case 'boolean':
            case 'null':
              return String(l);
            case 'object':
              if (!l) return 'null';
              if (
                ((gap += indent),
                (o = []),
                Object.prototype.toString.apply(l) === '[object Array]')
              ) {
                for (i = l.length, n = 0; n < i; n += 1)
                  o[n] = str(n, l) || 'null';
                return (
                  (a =
                    o.length === 0
                      ? '[]'
                      : gap
                        ? `[
` +
                          gap +
                          o.join(
                            `,
` + gap
                          ) +
                          `
` +
                          s +
                          ']'
                        : '[' + o.join(',') + ']'),
                  (gap = s),
                  a
                );
              }
              if (rep && typeof rep == 'object')
                for (i = rep.length, n = 0; n < i; n += 1)
                  typeof rep[n] == 'string' &&
                    ((r = rep[n]),
                    (a = str(r, l)),
                    a && o.push(quote(r) + (gap ? ': ' : ':') + a));
              else
                for (r in l)
                  Object.prototype.hasOwnProperty.call(l, r) &&
                    ((a = str(r, l)),
                    a && o.push(quote(r) + (gap ? ': ' : ':') + a));
              return (
                (a =
                  o.length === 0
                    ? '{}'
                    : gap
                      ? `{
` +
                        gap +
                        o.join(
                          `,
` + gap
                        ) +
                        `
` +
                        s +
                        '}'
                      : '{' + o.join(',') + '}'),
                (gap = s),
                a
              );
          }
        }
        (typeof JSON.stringify != 'function' &&
          ((meta = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\',
          }),
          (JSON.stringify = function (e, t, n) {
            var r;
            if (((gap = ''), (indent = ''), typeof n == 'number'))
              for (r = 0; r < n; r += 1) indent += ' ';
            else typeof n == 'string' && (indent = n);
            if (
              ((rep = t),
              t &&
                typeof t != 'function' &&
                (typeof t != 'object' || typeof t.length != 'number'))
            )
              throw new Error('JSON.stringify');
            return str('', { '': e });
          })),
          typeof JSON.parse != 'function' &&
            (JSON.parse = function (text, reviver) {
              var j;
              function walk(e, t) {
                var n,
                  r,
                  a = e[t];
                if (a && typeof a == 'object')
                  for (n in a)
                    Object.prototype.hasOwnProperty.call(a, n) &&
                      ((r = walk(a, n)),
                      r !== void 0 ? (a[n] = r) : delete a[n]);
                return reviver.call(e, t, a);
              }
              if (
                ((text = String(text)),
                (rx_dangerous.lastIndex = 0),
                rx_dangerous.test(text) &&
                  (text = text.replace(rx_dangerous, function (e) {
                    return (
                      '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4)
                    );
                  })),
                rx_one.test(
                  text
                    .replace(rx_two, '@')
                    .replace(rx_three, ']')
                    .replace(rx_four, '')
                ))
              )
                return (
                  (j = eval('(' + text + ')')),
                  typeof reviver == 'function' ? walk({ '': j }, '') : j
                );
              throw new SyntaxError('JSON.parse');
            }));
      })()),
    json2$1
  );
}
var json2 = json2Plugin;
function json2Plugin() {
  return (requireJson2(), {});
}
var engine = storeEngine,
  storages = all,
  plugins = [json2],
  store_legacy = engine.createStore(storages, plugins);
const store = getDefaultExportFromCjs(store_legacy);
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */ function _typeof$1(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (_typeof$1 = function (t) {
          return typeof t;
        })
      : (_typeof$1 = function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        }),
    _typeof$1(e)
  );
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function _createClass(e, t, n) {
  return (t && _defineProperties(e.prototype, t), e);
}
function _defineProperty$1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    (typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      r.forEach(function (a) {
        _defineProperty$1(e, a, n[a]);
      }));
  }
  return e;
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
  );
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _iterableToArrayLimit(e, t) {
  var n = [],
    r = !0,
    a = !1,
    i = void 0;
  try {
    for (
      var s = e[Symbol.iterator](), o;
      !(r = (o = s.next()).done) && (n.push(o.value), !(t && n.length === t));
      r = !0
    );
  } catch (l) {
    ((a = !0), (i = l));
  } finally {
    try {
      !r && s.return != null && s.return();
    } finally {
      if (a) throw i;
    }
  }
  return n;
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
var noop = function e() {},
  _WINDOW = {},
  _DOCUMENT = {},
  _MUTATION_OBSERVER = null,
  _PERFORMANCE = { mark: noop, measure: noop };
try {
  (typeof window < 'u' && (_WINDOW = window),
    typeof document < 'u' && (_DOCUMENT = document),
    typeof MutationObserver < 'u' && (_MUTATION_OBSERVER = MutationObserver),
    typeof performance < 'u' && (_PERFORMANCE = performance));
} catch (e) {}
var _ref = _WINDOW.navigator || {},
  _ref$userAgent = _ref.userAgent,
  userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent,
  WINDOW = _WINDOW,
  DOCUMENT = _DOCUMENT,
  PERFORMANCE = _PERFORMANCE;
WINDOW.document;
var IS_DOM =
  !!DOCUMENT.documentElement &&
  !!DOCUMENT.head &&
  typeof DOCUMENT.addEventListener == 'function' &&
  typeof DOCUMENT.createElement == 'function';
~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___',
  DEFAULT_FAMILY_PREFIX = 'fa',
  DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa',
  DATA_FA_I2SVG = 'data-fa-i2svg';
(function () {
  try {
    return !1;
  } catch {
    return !1;
  }
})();
var DUOTONE_CLASSES = {
    GROUP: 'group',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(e) {
  var t = DOCUMENT.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function coerce(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (DOCUMENT && typeof DOCUMENT.querySelector == 'function') {
  var attrs = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ];
  attrs.forEach(function (e) {
    var t = _slicedToArray(e, 2),
      n = t[0],
      r = t[1],
      a = coerce(getAttrConfig(n));
    a != null && (initial[r] = a);
  });
}
var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: 'async',
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0,
  },
  _config = _objectSpread({}, _default, initial);
_config.autoReplaceSvg || (_config.observeMutations = !1);
var config = _objectSpread({}, _config);
WINDOW.FontAwesomeConfig = config;
var w = WINDOW || {};
w[NAMESPACE_IDENTIFIER] || (w[NAMESPACE_IDENTIFIER] = {});
w[NAMESPACE_IDENTIFIER].styles || (w[NAMESPACE_IDENTIFIER].styles = {});
w[NAMESPACE_IDENTIFIER].hooks || (w[NAMESPACE_IDENTIFIER].hooks = {});
w[NAMESPACE_IDENTIFIER].shims || (w[NAMESPACE_IDENTIFIER].shims = []);
var namespace = w[NAMESPACE_IDENTIFIER],
  functions = [],
  listener = function e() {
    (DOCUMENT.removeEventListener('DOMContentLoaded', e),
      (loaded = 1),
      functions.map(function (t) {
        return t();
      }));
  },
  loaded = !1;
IS_DOM &&
  ((loaded = (
    DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
  ).test(DOCUMENT.readyState)),
  loaded || DOCUMENT.addEventListener('DOMContentLoaded', listener));
var PENDING = 'pending',
  SETTLED = 'settled',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
  NOOP = function e() {},
  isNode =
    typeof global < 'u' &&
    typeof global.process < 'u' &&
    typeof global.process.emit == 'function',
  asyncSetTimer = typeof setImmediate > 'u' ? setTimeout : setImmediate,
  asyncQueue = [],
  asyncTimer;
function asyncFlush() {
  for (var e = 0; e < asyncQueue.length; e++)
    asyncQueue[e][0](asyncQueue[e][1]);
  ((asyncQueue = []), (asyncTimer = !1));
}
function asyncCall(e, t) {
  (asyncQueue.push([e, t]),
    asyncTimer || ((asyncTimer = !0), asyncSetTimer(asyncFlush, 0)));
}
function invokeResolver(e, t) {
  function n(a) {
    resolve(t, a);
  }
  function r(a) {
    reject(t, a);
  }
  try {
    e(n, r);
  } catch (a) {
    r(a);
  }
}
function invokeCallback(e) {
  var t = e.owner,
    n = t._state,
    r = t._data,
    a = e[n],
    i = e.then;
  if (typeof a == 'function') {
    n = FULFILLED;
    try {
      r = a(r);
    } catch (s) {
      reject(i, s);
    }
  }
  handleThenable(i, r) ||
    (n === FULFILLED && resolve(i, r), n === REJECTED && reject(i, r));
}
function handleThenable(e, t) {
  var n;
  try {
    if (e === t)
      throw new TypeError(
        'A promises callback cannot return that same promise.'
      );
    if (t && (typeof t == 'function' || _typeof$1(t) === 'object')) {
      var r = t.then;
      if (typeof r == 'function')
        return (
          r.call(
            t,
            function (a) {
              n || ((n = !0), t === a ? fulfill(e, a) : resolve(e, a));
            },
            function (a) {
              n || ((n = !0), reject(e, a));
            }
          ),
          !0
        );
    }
  } catch (a) {
    return (n || reject(e, a), !0);
  }
  return !1;
}
function resolve(e, t) {
  (e === t || !handleThenable(e, t)) && fulfill(e, t);
}
function fulfill(e, t) {
  e._state === PENDING &&
    ((e._state = SETTLED), (e._data = t), asyncCall(publishFulfillment, e));
}
function reject(e, t) {
  e._state === PENDING &&
    ((e._state = SETTLED), (e._data = t), asyncCall(publishRejection, e));
}
function publish(e) {
  e._then = e._then.forEach(invokeCallback);
}
function publishFulfillment(e) {
  ((e._state = FULFILLED), publish(e));
}
function publishRejection(e) {
  ((e._state = REJECTED),
    publish(e),
    !e._handled &&
      isNode &&
      global.process.emit('unhandledRejection', e._data, e));
}
function notifyRejectionHandled(e) {
  global.process.emit('rejectionHandled', e);
}
function P(e) {
  if (typeof e != 'function')
    throw new TypeError('Promise resolver ' + e + ' is not a function');
  if (!(this instanceof P))
    throw new TypeError(
      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
    );
  ((this._then = []), invokeResolver(e, this));
}
P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: void 0,
  _handled: !1,
  then: function e(t, n) {
    var r = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: t,
      rejected: n,
    };
    return (
      (n || t) &&
        !this._handled &&
        ((this._handled = !0),
        this._state === REJECTED &&
          isNode &&
          asyncCall(notifyRejectionHandled, this)),
      this._state === FULFILLED || this._state === REJECTED
        ? asyncCall(invokeCallback, r)
        : this._then.push(r),
      r.then
    );
  },
  catch: function e(t) {
    return this.then(null, t);
  },
};
P.all = function (e) {
  if (!Array.isArray(e))
    throw new TypeError('You must pass an array to Promise.all().');
  return new P(function (t, n) {
    var r = [],
      a = 0;
    function i(l) {
      return (
        a++,
        function (c) {
          ((r[l] = c), --a || t(r));
        }
      );
    }
    for (var s = 0, o; s < e.length; s++)
      ((o = e[s]),
        o && typeof o.then == 'function' ? o.then(i(s), n) : (r[s] = o));
    a || t(r);
  });
};
P.race = function (e) {
  if (!Array.isArray(e))
    throw new TypeError('You must pass an array to Promise.race().');
  return new P(function (t, n) {
    for (var r = 0, a; r < e.length; r++)
      ((a = e[r]), a && typeof a.then == 'function' ? a.then(t, n) : t(a));
  });
};
P.resolve = function (e) {
  return e && _typeof$1(e) === 'object' && e.constructor === P
    ? e
    : new P(function (t) {
        t(e);
      });
};
P.reject = function (e) {
  return new P(function (t, n) {
    n(e);
  });
};
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1,
};
function insertCss(e) {
  if (!(!e || !IS_DOM)) {
    var t = DOCUMENT.createElement('style');
    (t.setAttribute('type', 'text/css'), (t.innerHTML = e));
    for (
      var n = DOCUMENT.head.childNodes, r = null, a = n.length - 1;
      a > -1;
      a--
    ) {
      var i = n[a],
        s = (i.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(s) > -1 && (r = i);
    }
    return (DOCUMENT.head.insertBefore(t, r), e);
  }
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  for (var e = 12, t = ''; e-- > 0; ) t += idPool[(Math.random() * 62) | 0];
  return t;
}
function htmlEscape(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function joinAttributes(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(htmlEscape(e[n]), '" ');
    }, '')
    .trim();
}
function joinStyles(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n], ';');
  }, '');
}
function transformIsMeaningful(e) {
  return (
    e.size !== meaninglessTransform.size ||
    e.x !== meaninglessTransform.x ||
    e.y !== meaninglessTransform.y ||
    e.rotate !== meaninglessTransform.rotate ||
    e.flipX ||
    e.flipY
  );
}
function transformForSvg(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    a = { transform: 'translate('.concat(n / 2, ' 256)') },
    i = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    s = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    o = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(i, ' ').concat(s, ' ').concat(o) },
    c = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: a, inner: l, path: c };
}
var ALL_SPACE = { x: 0, y: 0, width: '100%', height: '100%' };
function fillBlack(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'),
    e
  );
}
function deGroup(e) {
  return e.tag === 'g' ? e.children : [e];
}
function makeIconMasking(e) {
  var t = e.children,
    n = e.attributes,
    r = e.main,
    a = e.mask,
    i = e.maskId,
    s = e.transform,
    o = r.width,
    l = r.icon,
    c = a.width,
    u = a.icon,
    m = transformForSvg({ transform: s, containerWidth: c, iconWidth: o }),
    d = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, { fill: 'white' }),
    },
    v = l.children ? { children: l.children.map(fillBlack) } : {},
    h = {
      tag: 'g',
      attributes: _objectSpread({}, m.inner),
      children: [
        fillBlack(
          _objectSpread(
            { tag: l.tag, attributes: _objectSpread({}, l.attributes, m.path) },
            v
          )
        ),
      ],
    },
    b = { tag: 'g', attributes: _objectSpread({}, m.outer), children: [h] },
    p = 'mask-'.concat(i || nextUniqueId()),
    g = 'clip-'.concat(i || nextUniqueId()),
    y = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: p,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse',
      }),
      children: [d, b],
    },
    _ = {
      tag: 'defs',
      children: [
        { tag: 'clipPath', attributes: { id: g }, children: deGroup(u) },
        y,
      ],
    };
  return (
    t.push(_, {
      tag: 'rect',
      attributes: _objectSpread(
        {
          fill: 'currentColor',
          'clip-path': 'url(#'.concat(g, ')'),
          mask: 'url(#'.concat(p, ')'),
        },
        ALL_SPACE
      ),
    }),
    { children: t, attributes: n }
  );
}
function makeIconStandard(e) {
  var t = e.children,
    n = e.attributes,
    r = e.main,
    a = e.transform,
    i = e.styles,
    s = joinStyles(i);
  if ((s.length > 0 && (n.style = s), transformIsMeaningful(a))) {
    var o = transformForSvg({
      transform: a,
      containerWidth: r.width,
      iconWidth: r.width,
    });
    t.push({
      tag: 'g',
      attributes: _objectSpread({}, o.outer),
      children: [
        {
          tag: 'g',
          attributes: _objectSpread({}, o.inner),
          children: [
            {
              tag: r.icon.tag,
              children: r.icon.children,
              attributes: _objectSpread({}, r.icon.attributes, o.path),
            },
          ],
        },
      ],
    });
  } else t.push(r.icon);
  return { children: t, attributes: n };
}
function asIcon(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    a = e.attributes,
    i = e.styles,
    s = e.transform;
  if (transformIsMeaningful(s) && n.found && !r.found) {
    var o = n.width,
      l = n.height,
      c = { x: o / l / 2, y: 0.5 };
    a.style = joinStyles(
      _objectSpread({}, i, {
        'transform-origin': ''
          .concat(c.x + s.x / 16, 'em ')
          .concat(c.y + s.y / 16, 'em'),
      })
    );
  }
  return [{ tag: 'svg', attributes: a, children: t }];
}
function asSymbol(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    a = e.attributes,
    i = e.symbol,
    s =
      i === !0
        ? ''.concat(t, '-').concat(config.familyPrefix, '-').concat(n)
        : i;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [
        {
          tag: 'symbol',
          attributes: _objectSpread({}, a, { id: s }),
          children: r,
        },
      ],
    },
  ];
}
function makeInlineSvgAbstract(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    s = e.transform,
    o = e.symbol,
    l = e.title,
    c = e.maskId,
    u = e.titleId,
    m = e.extra,
    d = e.watchable,
    v = d === void 0 ? !1 : d,
    h = r.found ? r : n,
    b = h.width,
    p = h.height,
    g = a === 'fak',
    y = g ? '' : 'fa-w-'.concat(Math.ceil((b / p) * 16)),
    _ = [
      config.replacementClass,
      i ? ''.concat(config.familyPrefix, '-').concat(i) : '',
      y,
    ]
      .filter(function (O) {
        return m.classes.indexOf(O) === -1;
      })
      .filter(function (O) {
        return O !== '' || !!O;
      })
      .concat(m.classes)
      .join(' '),
    S = {
      children: [],
      attributes: _objectSpread({}, m.attributes, {
        'data-prefix': a,
        'data-icon': i,
        class: _,
        role: m.attributes.role || 'img',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 '.concat(b, ' ').concat(p),
      }),
    },
    E =
      g && !~m.classes.indexOf('fa-fw')
        ? { width: ''.concat((b / p) * 16 * 0.0625, 'em') }
        : {};
  (v && (S.attributes[DATA_FA_I2SVG] = ''),
    l &&
      S.children.push({
        tag: 'title',
        attributes: {
          id:
            S.attributes['aria-labelledby'] ||
            'title-'.concat(u || nextUniqueId()),
        },
        children: [l],
      }));
  var x = _objectSpread({}, S, {
      prefix: a,
      iconName: i,
      main: n,
      mask: r,
      maskId: c,
      transform: s,
      symbol: o,
      styles: _objectSpread({}, E, m.styles),
    }),
    A = r.found && n.found ? makeIconMasking(x) : makeIconStandard(x),
    I = A.children,
    T = A.attributes;
  return ((x.children = I), (x.attributes = T), o ? asSymbol(x) : asIcon(x));
}
config.measurePerformance &&
  PERFORMANCE &&
  PERFORMANCE.mark &&
  PERFORMANCE.measure;
var reduce = function e(t, n, r, a) {
  var i = Object.keys(t),
    s = i.length,
    o = n,
    l,
    c,
    u;
  for (r === void 0 ? ((l = 1), (u = t[i[0]])) : ((l = 0), (u = r)); l < s; l++)
    ((c = i[l]), (u = o(u, t[c], c, t)));
  return u;
};
function defineIcons(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    a = r === void 0 ? !1 : r,
    i = Object.keys(t).reduce(function (s, o) {
      var l = t[o],
        c = !!l.icon;
      return (c ? (s[l.iconName] = l.icon) : (s[o] = l), s);
    }, {});
  (typeof namespace.hooks.addPack == 'function' && !a
    ? namespace.hooks.addPack(e, i)
    : (namespace.styles[e] = _objectSpread({}, namespace.styles[e] || {}, i)),
    e === 'fas' && defineIcons('fa', t));
}
var styles$1 = namespace.styles,
  shims = namespace.shims,
  build = function e() {
    var t = function (a) {
      return reduce(
        styles$1,
        function (i, s, o) {
          return ((i[o] = reduce(s, a, {})), i);
        },
        {}
      );
    };
    (t(function (r, a, i) {
      return (a[3] && (r[a[3]] = i), r);
    }),
      t(function (r, a, i) {
        var s = a[2];
        return (
          (r[i] = i),
          s.forEach(function (o) {
            r[o] = i;
          }),
          r
        );
      }));
    var n = 'far' in styles$1;
    reduce(
      shims,
      function (r, a) {
        var i = a[0],
          s = a[1],
          o = a[2];
        return (
          s === 'far' && !n && (s = 'fas'),
          (r[i] = { prefix: s, iconName: o }),
          r
        );
      },
      {}
    );
  };
build();
namespace.styles;
function iconFromMapping(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
function toHtml(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    a = e.children,
    i = a === void 0 ? [] : a;
  return typeof e == 'string'
    ? htmlEscape(e)
    : '<'
        .concat(t, ' ')
        .concat(joinAttributes(r), '>')
        .concat(i.map(toHtml).join(''), '</')
        .concat(t, '>');
}
var parseTransformString = function e(t) {
  var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return t
    ? t
        .toLowerCase()
        .split(' ')
        .reduce(function (r, a) {
          var i = a.toLowerCase().split('-'),
            s = i[0],
            o = i.slice(1).join('-');
          if (s && o === 'h') return ((r.flipX = !0), r);
          if (s && o === 'v') return ((r.flipY = !0), r);
          if (((o = parseFloat(o)), isNaN(o))) return r;
          switch (s) {
            case 'grow':
              r.size = r.size + o;
              break;
            case 'shrink':
              r.size = r.size - o;
              break;
            case 'left':
              r.x = r.x - o;
              break;
            case 'right':
              r.x = r.x + o;
              break;
            case 'up':
              r.y = r.y - o;
              break;
            case 'down':
              r.y = r.y + o;
              break;
            case 'rotate':
              r.rotate = r.rotate + o;
              break;
          }
          return r;
        }, n)
    : n;
};
function MissingIcon(e) {
  ((this.name = 'MissingIcon'),
    (this.message = e || 'Icon unavailable'),
    (this.stack = new Error().stack));
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = { fill: 'currentColor' },
  ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s',
  };
_objectSpread({}, FILL, {
  d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
});
var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity',
});
(_objectSpread({}, FILL, { cx: '256', cy: '364', r: '28' }),
  _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'r',
    values: '28;14;28;28;14;28;',
  }),
  _objectSpread({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }));
(_objectSpread({}, FILL, {
  opacity: '1',
  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
}),
  _objectSpread({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }));
(_objectSpread({}, FILL, {
  opacity: '0',
  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
}),
  _objectSpread({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }));
namespace.styles;
function asFoundIcon(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    a = _slicedToArray(r, 1),
    i = a[0],
    s = null;
  return (
    Array.isArray(i)
      ? (s = {
          tag: 'g',
          attributes: {
            class: ''
              .concat(config.familyPrefix, '-')
              .concat(DUOTONE_CLASSES.GROUP),
          },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''
                  .concat(config.familyPrefix, '-')
                  .concat(DUOTONE_CLASSES.SECONDARY),
                fill: 'currentColor',
                d: i[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''
                  .concat(config.familyPrefix, '-')
                  .concat(DUOTONE_CLASSES.PRIMARY),
                fill: 'currentColor',
                d: i[1],
              },
            },
          ],
        })
      : (s = { tag: 'path', attributes: { fill: 'currentColor', d: i } }),
    { found: !0, width: t, height: n, icon: s }
  );
}
namespace.styles;
var baseStyles = `svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;
function css() {
  var e = DEFAULT_FAMILY_PREFIX,
    t = DEFAULT_REPLACEMENT_CLASS,
    n = config.familyPrefix,
    r = config.replacementClass,
    a = baseStyles;
  if (n !== e || r !== t) {
    var i = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      s = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\.'.concat(t), 'g');
    a = a
      .replace(i, '.'.concat(n, '-'))
      .replace(s, '--'.concat(n, '-'))
      .replace(o, '.'.concat(r));
  }
  return a;
}
var Library = (function () {
  function e() {
    (_classCallCheck(this, e), (this.definitions = {}));
  }
  return (
    _createClass(e, [
      {
        key: 'add',
        value: function () {
          for (
            var n = this, r = arguments.length, a = new Array(r), i = 0;
            i < r;
            i++
          )
            a[i] = arguments[i];
          var s = a.reduce(this._pullDefinitions, {});
          Object.keys(s).forEach(function (o) {
            ((n.definitions[o] = _objectSpread(
              {},
              n.definitions[o] || {},
              s[o]
            )),
              defineIcons(o, s[o]),
              build());
          });
        },
      },
      {
        key: 'reset',
        value: function () {
          this.definitions = {};
        },
      },
      {
        key: '_pullDefinitions',
        value: function (n, r) {
          var a = r.prefix && r.iconName && r.icon ? { 0: r } : r;
          return (
            Object.keys(a).map(function (i) {
              var s = a[i],
                o = s.prefix,
                l = s.iconName,
                c = s.icon;
              (n[o] || (n[o] = {}), (n[o][l] = c));
            }),
            n
          );
        },
      },
    ]),
    e
  );
})();
function ensureCss() {
  config.autoAddCss && !_cssInserted && (insertCss(css()), (_cssInserted = !0));
}
function apiObject(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return toHtml(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (IS_DOM) {
          var r = DOCUMENT.createElement('div');
          return ((r.innerHTML = e.html), r.children);
        }
      },
    }),
    e
  );
}
function findIconDefinition(e) {
  var t = e.prefix,
    n = t === void 0 ? 'fa' : t,
    r = e.iconName;
  if (r)
    return (
      iconFromMapping(library.definitions, n, r) ||
      iconFromMapping(namespace.styles, n, r)
    );
}
function resolveIcons(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : findIconDefinition(t || {}),
      a = n.mask;
    return (
      a && (a = (a || {}).icon ? a : findIconDefinition(a || {})),
      e(r, _objectSpread({}, n, { mask: a }))
    );
  };
}
var library = new Library(),
  _cssInserted = !1,
  parse = {
    transform: function e(t) {
      return parseTransformString(t);
    },
  },
  icon = resolveIcons(function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.transform,
      r = n === void 0 ? meaninglessTransform : n,
      a = t.symbol,
      i = a === void 0 ? !1 : a,
      s = t.mask,
      o = s === void 0 ? null : s,
      l = t.maskId,
      c = l === void 0 ? null : l,
      u = t.title,
      m = u === void 0 ? null : u,
      d = t.titleId,
      v = d === void 0 ? null : d,
      h = t.classes,
      b = h === void 0 ? [] : h,
      p = t.attributes,
      g = p === void 0 ? {} : p,
      y = t.styles,
      _ = y === void 0 ? {} : y;
    if (e) {
      var S = e.prefix,
        E = e.iconName,
        x = e.icon;
      return apiObject(_objectSpread({ type: 'icon' }, e), function () {
        return (
          ensureCss(),
          config.autoA11y &&
            (m
              ? (g['aria-labelledby'] = ''
                  .concat(config.replacementClass, '-title-')
                  .concat(v || nextUniqueId()))
              : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
          makeInlineSvgAbstract({
            icons: {
              main: asFoundIcon(x),
              mask: o
                ? asFoundIcon(o.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: E,
            transform: _objectSpread({}, meaninglessTransform, r),
            symbol: i,
            title: m,
            maskId: c,
            titleId: v,
            extra: { attributes: g, styles: _, classes: b },
          })
        );
      });
    }
  });
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), !0).forEach(function (r) {
          _defineProperty(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ownKeys(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function _typeof(e) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
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
          }),
    _typeof(e)
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _objectWithoutPropertiesLoose(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    i;
  for (i = 0; i < r.length; i++)
    ((a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a]));
  return n;
}
function _objectWithoutProperties(e, t) {
  if (e == null) return {};
  var n = _objectWithoutPropertiesLoose(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      ((r = i[a]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _iterableToArray(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(e, t);
  }
}
function _arrayLikeToArray(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function classList(e) {
  var t,
    n = e.beat,
    r = e.fade,
    a = e.beatFade,
    i = e.bounce,
    s = e.shake,
    o = e.flash,
    l = e.spin,
    c = e.spinPulse,
    u = e.spinReverse,
    m = e.pulse,
    d = e.fixedWidth,
    v = e.inverse,
    h = e.border,
    b = e.listItem,
    p = e.flip,
    g = e.size,
    y = e.rotation,
    _ = e.pull,
    S =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': a,
        'fa-bounce': i,
        'fa-shake': s,
        'fa-flash': o,
        'fa-spin': l,
        'fa-spin-reverse': u,
        'fa-spin-pulse': c,
        'fa-pulse': m,
        'fa-fw': d,
        'fa-inverse': v,
        'fa-border': h,
        'fa-li': b,
        'fa-flip': p === !0,
        'fa-flip-horizontal': p === 'horizontal' || p === 'both',
        'fa-flip-vertical': p === 'vertical' || p === 'both',
      }),
      _defineProperty(t, 'fa-'.concat(g), typeof g < 'u' && g !== null),
      _defineProperty(
        t,
        'fa-rotate-'.concat(y),
        typeof y < 'u' && y !== null && y !== 0
      ),
      _defineProperty(t, 'fa-pull-'.concat(_), typeof _ < 'u' && _ !== null),
      _defineProperty(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (E) {
      return S[E] ? E : null;
    })
    .filter(function (E) {
      return E;
    });
}
function _isNumerical(e) {
  return ((e = e - 0), e === e);
}
function camelize(e) {
  return _isNumerical(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var _excluded$1 = ['style'];
function capitalize(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function styleToObject(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        a = camelize(n.slice(0, r)),
        i = n.slice(r + 1).trim();
      return (a.startsWith('webkit') ? (t[capitalize(a)] = i) : (t[a] = i), t);
    }, {});
}
function convert(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (l) {
      return convert(e, l);
    }),
    a = Object.keys(t.attributes || {}).reduce(
      function (l, c) {
        var u = t.attributes[c];
        switch (c) {
          case 'class':
            ((l.attrs.className = u), delete t.attributes.class);
            break;
          case 'style':
            l.attrs.style = styleToObject(u);
            break;
          default:
            c.indexOf('aria-') === 0 || c.indexOf('data-') === 0
              ? (l.attrs[c.toLowerCase()] = u)
              : (l.attrs[camelize(c)] = u);
        }
        return l;
      },
      { attrs: {} }
    ),
    i = n.style,
    s = i === void 0 ? {} : i,
    o = _objectWithoutProperties(n, _excluded$1);
  return (
    (a.attrs.style = _objectSpread2(_objectSpread2({}, a.attrs.style), s)),
    e.apply(
      void 0,
      [t.tag, _objectSpread2(_objectSpread2({}, a.attrs), o)].concat(
        _toConsumableArray(r)
      )
    )
  );
}
var PRODUCTION = !1;
try {
  PRODUCTION = !1;
} catch (e) {}
function log() {
  if (!PRODUCTION && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function normalizeIconArgs(e) {
  if (e && _typeof(e) === 'object' && e.prefix && e.iconName && e.icon)
    return e;
  if (parse.icon) return parse.icon(e);
  if (e === null) return null;
  if (e && _typeof(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function objectWithKey(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? _defineProperty({}, e, t)
    : {};
}
var _excluded = ['forwardedRef'];
function FontAwesomeIcon(e) {
  var t = e.forwardedRef,
    n = _objectWithoutProperties(e, _excluded),
    r = n.icon,
    a = n.mask,
    i = n.symbol,
    s = n.className,
    o = n.title,
    l = n.titleId,
    c = n.maskId,
    u = normalizeIconArgs(r),
    m = objectWithKey(
      'classes',
      [].concat(
        _toConsumableArray(classList(n)),
        _toConsumableArray(s.split(' '))
      )
    ),
    d = objectWithKey(
      'transform',
      typeof n.transform == 'string'
        ? parse.transform(n.transform)
        : n.transform
    ),
    v = objectWithKey('mask', normalizeIconArgs(a)),
    h = icon(
      u,
      _objectSpread2(
        _objectSpread2(_objectSpread2(_objectSpread2({}, m), d), v),
        {},
        { symbol: i, title: o, titleId: l, maskId: c }
      )
    );
  if (!h) return (log('Could not find icon', u), null);
  var b = h.abstract,
    p = { ref: t };
  return (
    Object.keys(n).forEach(function (g) {
      FontAwesomeIcon.defaultProps.hasOwnProperty(g) || (p[g] = n[g]);
    }),
    convertCurry(b[0], p)
  );
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: PropTypes.bool,
  border: PropTypes.bool,
  beatFade: PropTypes.bool,
  bounce: PropTypes.bool,
  className: PropTypes.string,
  fade: PropTypes.bool,
  flash: PropTypes.bool,
  mask: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  maskId: PropTypes.string,
  fixedWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  flip: PropTypes.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  listItem: PropTypes.bool,
  pull: PropTypes.oneOf(['right', 'left']),
  pulse: PropTypes.bool,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  shake: PropTypes.bool,
  size: PropTypes.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: PropTypes.bool,
  spinPulse: PropTypes.bool,
  spinReverse: PropTypes.bool,
  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  titleId: PropTypes.string,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  swapOpacity: PropTypes.bool,
};
FontAwesomeIcon.defaultProps = {
  border: !1,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var convertCurry = convert.bind(null, React.createElement),
  faToggleOn = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = 'fas',
    n = 'toggle-on',
    r = 576,
    a = 512,
    i = [],
    s = 'f205',
    o =
      'M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z';
  ((e.definition = { prefix: t, iconName: n, icon: [r, a, i, s, o] }),
    (e.faToggleOn = e.definition),
    (e.prefix = t),
    (e.iconName = n),
    (e.width = r),
    (e.height = a),
    (e.ligatures = i),
    (e.unicode = s),
    (e.svgPathData = o));
})(faToggleOn);
var faToggleOff = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = 'fas',
    n = 'toggle-off',
    r = 576,
    a = 512,
    i = [],
    s = 'f204',
    o =
      'M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z';
  ((e.definition = { prefix: t, iconName: n, icon: [r, a, i, s, o] }),
    (e.faToggleOff = e.definition),
    (e.prefix = t),
    (e.iconName = n),
    (e.width = r),
    (e.height = a),
    (e.ligatures = i),
    (e.unicode = s),
    (e.svgPathData = o));
})(faToggleOff);
var bind = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        o && (i = a(i, r.call(this, o)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number')
        return (this && this[i]) || i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(this, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString();
      var s = '';
      for (var o in i)
        t.call(i, o) && i[o] && (s = a(s, (this && this[o]) || o));
      return s;
    }
    function a(i, s) {
      return s ? (i ? i + ' ' + s : i + s) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(bind);
var bindExports = bind.exports;
const classnames = getDefaultExportFromCjs(bindExports),
  styles = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  cx = classnames.bind(styles);
function Page({ title: e, description: t, children: n }) {
  const [r, a] = reactExports.useState(void 0),
    i = reactExports.useCallback(() => {
      (a(!r), store.set('enableDarkMode', !r));
    }, [r]);
  return (
    reactExports.useEffect(() => {
      if (r === void 0) {
        let s = !1;
        const o = store.get('enableDarkMode');
        (o === void 0 && typeof window < 'u'
          ? (s =
              window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          : (s = o),
          a(s),
          store.set('enableDarkMode', s));
      }
    }, [r]),
    jsxDevRuntimeExports.jsxDEV(
      Container,
      {
        fluid: !0,
        className: cx('page', { darkTheme: r, lightTheme: !r }),
        children: [
          jsxDevRuntimeExports.jsxDEV(
            DefaultHelmet,
            { title: e, description: t },
            void 0,
            !1,
            {
              fileName:
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
              lineNumber: 48,
              columnNumber: 7,
            },
            this
          ),
          jsxDevRuntimeExports.jsxDEV(
            'div',
            {
              className: cx('textRight'),
              children: [
                'Dark Mode',
                jsxDevRuntimeExports.jsxDEV(
                  FontAwesomeIcon,
                  {
                    icon: r ? faToggleOn.faToggleOn : faToggleOff.faToggleOff,
                    size: '2x',
                    onClick: i,
                    className: cx('clickable', 'padTop10px'),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                    lineNumber: 51,
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
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
              lineNumber: 49,
              columnNumber: 7,
            },
            this
          ),
          jsxDevRuntimeExports.jsxDEV(
            'div',
            {
              className: cx('app'),
              children: [
                jsxDevRuntimeExports.jsxDEV(
                  'header',
                  {
                    className: cx('appHeader'),
                    children: [
                      jsxDevRuntimeExports.jsxDEV(
                        'h2',
                        {
                          children: [
                            jsxDevRuntimeExports.jsxDEV(
                              'img',
                              {
                                src: '/images/react.svg',
                                className: cx('appLogo'),
                                alt: 'logo',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                                lineNumber: 61,
                                columnNumber: 13,
                              },
                              this
                            ),
                            'React App',
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                          lineNumber: 60,
                          columnNumber: 11,
                        },
                        this
                      ),
                      jsxDevRuntimeExports.jsxDEV(
                        'small',
                        { children: 'A React starter app with SSR support.' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                          lineNumber: 64,
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
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                    lineNumber: 59,
                    columnNumber: 9,
                  },
                  this
                ),
                jsxDevRuntimeExports.jsxDEV(
                  'br',
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                    lineNumber: 66,
                    columnNumber: 9,
                  },
                  this
                ),
                jsxDevRuntimeExports.jsxDEV(
                  'br',
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                    lineNumber: 67,
                    columnNumber: 9,
                  },
                  this
                ),
                jsxDevRuntimeExports.jsxDEV(
                  Container,
                  { className: cx('content'), children: n },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
                    lineNumber: 68,
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
                '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
              lineNumber: 58,
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
          '/Users/dhruvpatel/Projects/universal-react/src/common/components/Page/Page.jsx',
        lineNumber: 41,
        columnNumber: 5,
      },
      this
    )
  );
}
Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};
Page.defaultProps = { title: void 0, description: void 0 };
Page.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Page',
  props: {
    title: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    description: {
      defaultValue: { value: 'undefined', computed: !0 },
      description: '',
      type: { name: 'string' },
      required: !1,
    },
    children: { description: '', type: { name: 'node' }, required: !0 },
  },
};
export { Page as P };
