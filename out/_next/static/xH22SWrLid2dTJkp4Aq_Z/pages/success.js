(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(a.default.useContext(o.AmpStateContext));
        });
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK');
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery;
        return n || (a && void 0 !== o && o);
      }
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r = c(n('q1tI')),
        a = c(n('Xuae')),
        o = n('lwAK'),
        u = n('FYa8'),
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
      function d(e, t) {
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
      var f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function s(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0;
                if (a.key && 'number' !== typeof a.key && a.key.indexOf('$') > 0) {
                  var u = a.key.slice(a.key.indexOf('$') + 1);
                  e.has(u) ? (o = !1) : e.add(u);
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case 'meta':
                    for (var i = 0, c = f.length; i < c; i++) {
                      var l = f[i];
                      if (a.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (o = !1) : n.add(l);
                        else {
                          var d = a.props[l],
                            s = r[l] || new Set();
                          s.has(d) ? (o = !1) : (s.add(d), (r[l] = s));
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var p = (0, a.default)();
      function m(e) {
        var t = e.children;
        return r.default.createElement(o.AmpStateContext.Consumer, null, function (e) {
          return r.default.createElement(u.HeadManagerContext.Consumer, null, function (n) {
            return r.default.createElement(
              p,
              {
                reduceComponentsToState: s,
                handleStateChange: n,
                inAmpMode: (0, i.isInAmpMode)(e),
              },
              t
            );
          });
        });
      }
      m.rewind = p.rewind;
      var v = m;
      t.default = v;
    },
    BMua: function (e, t, n) {
      'use strict';
      var r = n('vOnD');
      t.a = r.default.div.withConfig({ componentId: 'gy3cny-0' })(
        [
          'max-width:60rem;margin:auto;margin-top:',
          ';padding:',
          ';@media (max-width:48rem){max-width:auto;margin:0 ',
          ';padding:',
          ';}',
        ],
        function (e) {
          return e.theme.spacing.medium;
        },
        function (e) {
          var t = e.theme;
          return '0 '.concat(t.spacing.large);
        },
        function (e) {
          var t = e.theme;
          return '0 '.concat(t.spacing.medium);
        },
        function (e) {
          var t = e.theme;
          return '0 '.concat(t.spacing.small);
        }
      );
    },
    FYa8: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var a = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext(null);
      t.HeadManagerContext = a;
    },
    G4W8: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/success',
        function () {
          return n('OYzg');
        },
      ]);
    },
    OYzg: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        a = n.n(r),
        o = n('8Kt/'),
        u = n.n(o),
        i = n('vOnD'),
        c = n('BMua'),
        l = n('kz3Y'),
        d = a.a.createElement;
      var f = i.default.div.withConfig({
        displayName: 'ThanksTitleContainer',
        componentId: 'sc-1f9w23e-0',
      })(['display:flex;height:70vh;align-items:center;justify-content:center;']);
      t.default = function () {
        return d(
          c.a,
          null,
          d(u.a, null, d('title', null, 'Success')),
          d(f, null, d(l.a, { title: 'Your email has been successfully sent' }))
        );
      };
    },
    'X/xQ': function (e, t, n) {
      'use strict';
      var r = n('vOnD');
      t.a = r.default.div.withConfig({ componentId: 'sc-19nb6zv-0' })(
        [
          'border-radius:0.5rem;background-color:',
          ';opacity:0.7;height:0.5em;transition:0.33s all;',
        ],
        function (e) {
          return e.theme.colors.brand;
        }
      );
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        a = n('qXWd'),
        o = n('i2R6'),
        u = n('48fX'),
        i = n('tCBg'),
        c = n('T0f4'),
        l = n('mPvQ');
      function d(e) {
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
            var a = c(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var f = n('q1tI'),
        s = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(l(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (i) {
          u(l, i);
          var c = d(l);
          function l(e) {
            var o;
            return r(this, l), (o = c.call(this, e)), s && (t.add(a(o)), n(a(o))), o;
          }
          return (
            o(l, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            o(l, [
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
        })(f.Component);
      };
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    kz3Y: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        a = n.n(r),
        o = n('vOnD'),
        u = n('X/xQ'),
        i = a.a.createElement;
      var c = o.default.h1.withConfig({ displayName: 'Title', componentId: 'sc-1dghbrv-0' })([
          'text-transform:uppercase;font-weight:700;font-size:1.5em;',
        ]),
        l = o.default.div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'sc-1dghbrv-1',
        })(['display:inline-block;margin-bottom:', ';'], function (e) {
          return e.theme.spacing.medium;
        });
      t.a = function (e) {
        var t = e.title;
        return i(l, null, i(c, null, t), i(u.a, null));
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var a = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = a;
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        a = n('rlHP'),
        o = n('KckH'),
        u = n('kG2m');
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || u();
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
  },
  [['G4W8', 0, 1, 2]],
]);
