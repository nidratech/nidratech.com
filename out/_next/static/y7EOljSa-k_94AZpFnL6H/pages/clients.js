(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(a.default.useContext(o.AmpStateContext));
        });
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK');
      function i() {
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
      (t.__esModule = !0), (t.defaultHead = c), (t.default = void 0);
      var r = u(n('q1tI')),
        a = u(n('Xuae')),
        o = n('lwAK'),
        i = n('FYa8'),
        l = n('/0+H');
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
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
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function s(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(c(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0;
                if (a.key && 'number' !== typeof a.key && a.key.indexOf('$') > 0) {
                  var i = a.key.slice(a.key.indexOf('$') + 1);
                  e.has(i) ? (o = !1) : e.add(i);
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case 'meta':
                    for (var l = 0, u = d.length; l < u; l++) {
                      var c = d[l];
                      if (a.props.hasOwnProperty(c))
                        if ('charSet' === c) n.has(c) ? (o = !1) : n.add(c);
                        else {
                          var f = a.props[c],
                            s = r[c] || new Set();
                          s.has(f) ? (o = !1) : (s.add(f), (r[c] = s));
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
      var m = (0, a.default)();
      function p(e) {
        var t = e.children;
        return r.default.createElement(o.AmpStateContext.Consumer, null, function (e) {
          return r.default.createElement(i.HeadManagerContext.Consumer, null, function (n) {
            return r.default.createElement(
              m,
              {
                reduceComponentsToState: s,
                handleStateChange: n,
                inAmpMode: (0, l.isInAmpMode)(e),
              },
              t
            );
          });
        });
      }
      p.rewind = m.rewind;
      var g = p;
      t.default = g;
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
    JzgJ: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        a = n.n(r),
        o = n('8Kt/'),
        i = n.n(o),
        l = n('vOnD'),
        u = n('BMua'),
        c = n('kz3Y'),
        f = a.a.createElement;
      var d = l.default.p.withConfig({ displayName: 'ClientAddress', componentId: 'sc-1jgxhf0-0' })(
          ['color:', ';font-size:0.9em;margin-bottom:', ';'],
          function (e) {
            return e.theme.colors.grey;
          },
          function (e) {
            return e.theme.spacing.medium;
          }
        ),
        s = l.default.div.withConfig({ displayName: 'ClientInfo', componentId: 'sc-1jgxhf0-1' })([
          'display:flex;flex-direction:column;justify-content:center;',
        ]),
        m = l.default.div.withConfig({
          displayName: 'ClientLogoContainer',
          componentId: 'sc-1jgxhf0-2',
        })(['height:8rem;display:flex;flex-direction:column;justify-content:center;']),
        p = l.default.img.withConfig({ displayName: 'ClientLogo', componentId: 'sc-1jgxhf0-3' })([
          'width:8rem;margin-right:5rem;',
        ]),
        g = Object(l.default)(p).withConfig({
          displayName: 'GClientLogo',
          componentId: 'sc-1jgxhf0-4',
        })([
          'width:6rem;margin-right:6rem;margin-left:1rem;@media (max-width:48rem){width:4rem;margin-right:2rem;margin-left:0.5rem;}',
        ]),
        h = l.default.li.withConfig({ displayName: 'ListGroupItem', componentId: 'sc-1jgxhf0-5' })(
          [
            'display:flex;align-items:center;border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:',
            ';',
          ],
          function (e) {
            return e.theme.spacing.medium;
          }
        );
      t.default = function () {
        return f(
          u.a,
          null,
          f(i.a, null, f('title', null, 'Clients - Nidratech')),
          f(c.a, { title: 'Some of our clients include' }),
          f(
            'ul',
            null,
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  { href: 'https://www.google.com/', target: '_blank', rel: 'noopener noreferrer' },
                  f(g, { src: 'images/glogo.png', title: 'European Gemological Laboratory' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  { href: 'https://www.google.com/', target: '_blank', rel: 'noopener noreferrer' },
                  'Google'
                ),
                f(d, null, 'Mountain View, USA'),
                f(
                  'p',
                  null,
                  "We've been working as contractors for Google Nest since 2016. ",
                  f('br', null),
                  'Projects: Google Nest Login, Google Store, Nest Enterprise Portal, Nest HVAC Portal.'
                )
              )
            ),
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  {
                    href: 'http://www.egllaboratories.org/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  f(p, { src: 'images/egl-logo.png', title: 'European Gemological Laboratory' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  {
                    href: 'http://www.egllaboratories.org/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'European Gemological Laboratory'
                ),
                f(d, null, 'New York, USA')
              )
            ),
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  { href: 'https://www.cglgrs.com/', target: '_blank', rel: 'noopener noreferrer' },
                  f(p, { src: 'images/cgl-logo.png', title: 'Canadian Gemological Laboratory' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  { href: 'https://www.cglgrs.com/', target: '_blank', rel: 'noopener noreferrer' },
                  'Canadian Gemological Laboratory'
                ),
                f(d, null, 'Vancouver, BC, Canada')
              )
            ),
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  { href: 'http://ggacanada.ca/', target: '_blank', rel: 'noopener noreferrer' },
                  f(p, { src: 'images/gga-logo.jpg', title: 'Gems Grading & Appraising' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  { href: 'http://ggacanada.ca/', target: '_blank', rel: 'noopener noreferrer' },
                  'Gems Grading & Appraising'
                ),
                f(d, null, 'Vancouver, BC, Canada')
              )
            ),
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  { href: 'https://ia.ca/', target: '_blank', rel: 'noopener noreferrer' },
                  f(p, { src: 'images/ia-financial-logo.svg', title: 'iA Financial Group' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  { href: 'https://ia.ca/', target: '_blank', rel: 'noopener noreferrer' },
                  'iA Financial Group'
                ),
                f(d, null, 'Vancouver, BC, Canada')
              )
            ),
            f(
              h,
              null,
              f(
                m,
                null,
                f(
                  'a',
                  {
                    href: 'https://www.worksafebc.com/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  f(p, { src: 'images/wsbc-logo.jpg', title: 'WorkSafe BC' })
                )
              ),
              f(
                s,
                null,
                f(
                  'a',
                  {
                    href: 'https://www.worksafebc.com/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'WorkSafe BC'
                ),
                f(d, null, 'Richmond, BC, Canada')
              )
            )
          )
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
        i = n('48fX'),
        l = n('tCBg'),
        u = n('T0f4'),
        c = n('mPvQ');
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
            r = u(e);
          if (t) {
            var a = u(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var d = n('q1tI'),
        s = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(c(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (l) {
          i(c, l);
          var u = f(c);
          function c(e) {
            var o;
            return r(this, c), (o = u.call(this, e)), s && (t.add(a(o)), n(a(o))), o;
          }
          return (
            o(c, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            o(c, [
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
            c
          );
        })(d.Component);
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
        i = n('X/xQ'),
        l = a.a.createElement;
      var u = o.default.h1.withConfig({ displayName: 'Title', componentId: 'sc-1dghbrv-0' })([
          'text-transform:uppercase;font-weight:700;font-size:1.5em;',
        ]),
        c = o.default.div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'sc-1dghbrv-1',
        })(['display:inline-block;margin-bottom:', ';'], function (e) {
          return e.theme.spacing.medium;
        });
      t.a = function (e) {
        var t = e.title;
        return l(c, null, l(u, null, t), l(i.a, null));
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
        i = n('kG2m');
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || i();
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    'yL+B': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/clients',
        function () {
          return n('JzgJ');
        },
      ]);
    },
  },
  [['yL+B', 0, 1, 2]],
]);
