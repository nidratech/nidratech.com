(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        a = n('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery;
        return n || (o && void 0 !== a && a);
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
        o = c(n('Xuae')),
        a = n('lwAK'),
        i = n('FYa8'),
        u = n('/0+H');
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
      var s = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
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
              return function (o) {
                var a = !0;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  var i = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var u = 0, c = s.length; u < c; u++) {
                      var l = s[u];
                      if (o.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var d = o.props[l],
                            f = r[l] || new Set();
                          f.has(d) ? (a = !1) : (f.add(d), (r[l] = f));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var m = (0, o.default)();
      function p(e) {
        var t = e.children;
        return r.default.createElement(a.AmpStateContext.Consumer, null, function (e) {
          return r.default.createElement(i.HeadManagerContext.Consumer, null, function (n) {
            return r.default.createElement(
              m,
              {
                reduceComponentsToState: f,
                handleStateChange: n,
                inAmpMode: (0, u.isInAmpMode)(e),
              },
              t
            );
          });
        });
      }
      p.rewind = m.rewind;
      var h = p;
      t.default = h;
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
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext(null);
      t.HeadManagerContext = o;
    },
    QLSJ: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact',
        function () {
          return n('qARc');
        },
      ]);
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
        o = n('qXWd'),
        a = n('i2R6'),
        i = n('48fX'),
        u = n('tCBg'),
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
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n('q1tI'),
        f = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(l(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (u) {
          i(l, u);
          var c = d(l);
          function l(e) {
            var a;
            return r(this, l), (a = c.call(this, e)), f && (t.add(o(a)), n(o(a))), a;
          }
          return (
            a(l, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            a(l, [
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
        o = n.n(r),
        a = n('vOnD'),
        i = n('X/xQ'),
        u = o.a.createElement;
      var c = a.default.h1.withConfig({ displayName: 'Title', componentId: 'sc-1dghbrv-0' })([
          'text-transform:uppercase;font-weight:700;font-size:1.5em;',
        ]),
        l = a.default.div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'sc-1dghbrv-1',
        })(['display:inline-block;margin-bottom:', ';'], function (e) {
          return e.theme.spacing.medium;
        });
      t.a = function (e) {
        var t = e.title;
        return u(l, null, u(c, null, t), u(i.a, null));
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
        a = n('KckH'),
        i = n('kG2m');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    qARc: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        o = n.n(r),
        a = n('8Kt/'),
        i = n.n(a),
        u = n('vOnD'),
        c = n('ufqH'),
        l = n('BMua'),
        d = n('kz3Y'),
        s = n('xQut'),
        f = o.a.createElement;
      var m = Object(u.css)(
          [
            'display:block;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus{color:#495057;background-color:#fff;border-color:',
            ';outline:0;box-shadow:0 0 0 0.1rem ',
            ';}',
          ],
          function (e) {
            var t = e.theme;
            return Object(c.b)(0.3, t.colors.brand);
          },
          function (e) {
            var t = e.theme;
            return Object(c.b)(0.3, t.colors.brand);
          }
        ),
        p = u.default.label.withConfig({ displayName: 'FormLabel', componentId: 'g7i81g-0' })(
          ['display:block;margin-bottom:', ';margin-top:', ';'],
          function (e) {
            return e.theme.spacing.medium;
          },
          function (e) {
            return e.theme.spacing.small;
          }
        ),
        h = u.default.textarea.withConfig({ displayName: 'MessageInput', componentId: 'g7i81g-1' })(
          ['', ' height:auto;'],
          m
        ),
        v = u.default.input.withConfig({ displayName: 'EmailInput', componentId: 'g7i81g-2' })(
          ['', ''],
          m
        ),
        g = u.default.div.withConfig({ displayName: 'FormGroup', componentId: 'g7i81g-3' })(
          ['display:grid;margin-bottom:', ';'],
          function (e) {
            return e.theme.spacing.medium;
          }
        );
      t.default = function () {
        var e = Object(r.useState)(''),
          t = e[0],
          n = e[1],
          o = Object(r.useState)(''),
          a = o[0],
          u = o[1],
          c = t.length > 2 && a.length > 2;
        return f(
          l.a,
          null,
          f(i.a, null, f('title', null, 'Contact - Nidratech')),
          f(d.a, { title: 'Got a project? We want to hear about it' }),
          f(
            'form',
            { action: 'https://formspree.io/contact@nidratech.com', method: 'POST' },
            f(
              g,
              null,
              f(p, { htmlFor: 'email' }, 'Email'),
              f(v, {
                id: 'email',
                name: 'email',
                type: 'email',
                onChange: function (e) {
                  return n(e.target.value);
                },
              })
            ),
            f(
              g,
              null,
              f(p, { htmlFor: 'message' }, 'Message'),
              f(h, {
                id: 'message',
                name: 'message',
                rows: 3,
                onChange: function (e) {
                  return u(e.target.value);
                },
              })
            ),
            f('input', {
              type: 'hidden',
              name: '_next',
              value: 'https://www.nidratech.com/success',
            }),
            f(s.a, { disabled: !c, type: 'submit' }, 'Submit')
          )
        );
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    xQut: function (e, t, n) {
      'use strict';
      var r = n('wx14'),
        o = n('zLVn');
      var a = n('q1tI'),
        i = n.n(a),
        u = n('vOnD'),
        c = n('ufqH'),
        l = i.a.createElement;
      var d = u.default.button.withConfig({ displayName: 'StyledButton', componentId: 'ajxmy-0' })(
        [
          'min-width:8rem;background-color:',
          ';font-size:0.9em;color:',
          ';text-align:center;user-select:none;border:1px solid transparent;padding:0.5rem 1rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:',
          ';}:disabled{cursor:not-allowed;background-color:',
          ';}',
        ],
        function (e) {
          return e.theme.colors.brand;
        },
        function (e) {
          return e.theme.colors.white;
        },
        function (e) {
          var t = e.theme;
          return Object(c.a)(0.05, t.colors.brand);
        },
        function (e) {
          var t = e.theme;
          return Object(c.b)(0.2, t.colors.brand);
        }
      );
      t.a = Object(a.forwardRef)(function (e, t) {
        var n = e.children,
          a = e.onClick,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = Object(o.a)(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
          })(e, ['children', 'onClick']);
        return l(d, Object(r.a)({ ref: t, onClick: a }, i), n);
      });
    },
    zLVn: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
  },
  [['QLSJ', 0, 1, 2, 3]],
]);