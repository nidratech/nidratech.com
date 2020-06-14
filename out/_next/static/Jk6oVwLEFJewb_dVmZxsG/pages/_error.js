(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(u.AmpStateContext));
        });
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        u = n('lwAK');
      function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          u = e.hasQuery;
        return n || (o && void 0 !== u && u);
      }
    },
    '/GRZ': function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      };
    },
    '/a9y': function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        o = n('i2R6'),
        u = n('48fX'),
        a = n('tCBg'),
        i = n('T0f4');
      function c(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      var l = n('AroE');
      (t.__esModule = !0), (t.default = void 0);
      var f = l(n('q1tI')),
        s = l(n('8Kt/')),
        d = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        };
      function p(e) {
        var t = e.res,
          n = e.err;
        return { statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404 };
      }
      var y = (function (e) {
        u(n, e);
        var t = c(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.statusCode,
                  t = this.props.title || d[e] || 'An unexpected error has occurred';
                return f.default.createElement(
                  'div',
                  { style: h.error },
                  f.default.createElement(
                    s.default,
                    null,
                    f.default.createElement('title', null, e, ': ', t)
                  ),
                  f.default.createElement(
                    'div',
                    null,
                    f.default.createElement('style', {
                      dangerouslySetInnerHTML: { __html: 'body { margin: 0 }' },
                    }),
                    e ? f.default.createElement('h1', { style: h.h1 }, e) : null,
                    f.default.createElement(
                      'div',
                      { style: h.desc },
                      f.default.createElement('h2', { style: h.h2 }, t, '.')
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(f.default.Component);
      (t.default = y),
        (y.displayName = 'ErrorPage'),
        (y.getInitialProps = p),
        (y.origGetInitialProps = p);
      var h = {
        error: {
          color: '#000',
          background: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          borderRight: '1px solid rgba(0, 0, 0,.3)',
          margin: 0,
          marginRight: '20px',
          padding: '10px 23px 10px 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
        },
      };
    },
    '04ac': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n('/a9y');
        },
      ]);
    },
    '48fX': function (e, t, n) {
      var r = n('qhzo');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    '7eYB': function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r = c(n('q1tI')),
        o = c(n('Xuae')),
        u = n('lwAK'),
        a = n('FYa8'),
        i = n('/0+H');
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              r.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })
            ),
          t
        );
      }
      function f(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var s = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var u = !0;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  var a = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(a) ? (u = !1) : e.add(a);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (u = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var i = 0, c = s.length; i < c; i++) {
                      var l = s[i];
                      if (o.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (u = !1) : n.add(l);
                        else {
                          var f = o.props[l],
                            d = r[l] || new Set();
                          d.has(f) ? (u = !1) : (d.add(f), (r[l] = d));
                        }
                    }
                }
                return u;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var p = (0, o.default)();
      function y(e) {
        var t = e.children;
        return r.default.createElement(u.AmpStateContext.Consumer, null, function (e) {
          return r.default.createElement(a.HeadManagerContext.Consumer, null, function (n) {
            return r.default.createElement(
              p,
              {
                reduceComponentsToState: d,
                handleStateChange: n,
                inAmpMode: (0, i.isInAmpMode)(e),
              },
              t
            );
          });
        });
      }
      y.rewind = p.rewind;
      var h = y;
      t.default = h;
    },
    AroE: function (e, t) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    'C+bE': function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    FYa8: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext(null);
      t.HeadManagerContext = o;
    },
    KckH: function (e, t, n) {
      var r = n('7eYB');
      e.exports = function (e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      };
    },
    Qetd: function (e, t, n) {
      'use strict';
      var r = Object.assign.bind(Object);
      (e.exports = r), (e.exports.default = e.exports);
    },
    T0f4: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        o = n('qXWd'),
        u = n('i2R6'),
        a = n('48fX'),
        i = n('tCBg'),
        c = n('T0f4'),
        l = n('mPvQ');
      function f(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n('q1tI'),
        d = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(l(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (i) {
          a(l, i);
          var c = f(l);
          function l(e) {
            var u;
            return r(this, l), (u = c.call(this, e)), d && (t.add(o(u)), n(o(u))), u;
          }
          return (
            u(l, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            u(l, [
              {
                key: 'componentDidMount',
                value: function () {
                  t.add(this), n(this);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  n(this);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  t.delete(this), n(this);
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            l
          );
        })(s.Component);
      };
    },
    i2R6: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = o;
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        o = n('rlHP'),
        u = n('KckH'),
        a = n('kG2m');
      e.exports = function (e) {
        return r(e) || o(e) || u(e) || a();
      };
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    qhzo: function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    tCBg: function (e, t, n) {
      var r = n('C+bE'),
        o = n('qXWd');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
  },
  [['04ac', 0, 1]],
]);
