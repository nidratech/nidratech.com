(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '/EDR': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('23aj');
        },
      ]);
    },
    '23aj': function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        o = n.n(r),
        i = n('vOnD'),
        a = n('YFqc'),
        c = n.n(a),
        s = n('X/xQ'),
        u = n('xQut'),
        l = o.a.createElement;
      var f = Object(i.keyframes)([
          '0%{background-position:0 0;}100%{background-position:0 199px;}',
        ]),
        p = i.default.div.withConfig({
          displayName: 'PageTitleContainer',
          componentId: 'sc-1xh3p16-0',
        })(['display:inline-block;']),
        h = i.default.div.withConfig({ displayName: 'HomeContainer', componentId: 'sc-1xh3p16-1' })(
          [
            'background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:',
            ' 3.5s linear infinite;color:',
            ';padding:6vh 3vw;',
          ],
          f,
          function (e) {
            return e.theme.colors.white;
          }
        ),
        d = i.default.h1.withConfig({ displayName: 'PageTitle', componentId: 'sc-1xh3p16-2' })(
          ['font-size:', ';margin-top:2vh;'],
          function (e) {
            return e.theme.fontSize.large;
          }
        ),
        v = i.default.h1.withConfig({ displayName: 'PageSubTitle', componentId: 'sc-1xh3p16-3' })(
          ['font-size:', ';margin-top:5vh;margin-bottom:6vh;line-height:1.5;'],
          function (e) {
            return e.theme.fontSize.medium;
          }
        );
      t.default = function () {
        return l(
          h,
          null,
          l(p, null, l(d, null, 'Web Consulting in Touch with Tomorrow'), l(s.a, null)),
          l(
            v,
            null,
            'We bring ideas to life and create products that people love. ',
            l('br', null),
            'Let us help you make something remarkable.'
          ),
          l(
            c.a,
            { href: '/contact', passHref: !0 },
            l(u.a, { type: 'button', as: 'a' }, 'Contact Us')
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
    YFqc: function (e, t, n) {
      e.exports = n('cTJO');
    },
    cTJO: function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        o = n('i2R6'),
        i = n('48fX'),
        a = n('tCBg'),
        c = n('T0f4');
      function s(e) {
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
          return a(this, n);
        };
      }
      var u = n('AroE'),
        l = n('7KCV');
      (t.__esModule = !0), (t.default = void 0);
      var f,
        p = l(n('q1tI')),
        h = n('QmWs'),
        d = n('g/15'),
        v = u(n('nOHt')),
        m = n('elyg');
      function g(e) {
        return e && 'object' === typeof e ? (0, d.formatWithValidation)(e) : e;
      }
      var b = new Map(),
        y = window.IntersectionObserver,
        w = {};
      function k() {
        return (
          f ||
          (y
            ? (f = new y(
                function (e) {
                  e.forEach(function (e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (f.unobserve(e.target), b.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        );
      }
      var x = (function (e) {
        i(n, e);
        var t = s(n);
        function n(e) {
          var o;
          return (
            r(this, n),
            ((o = t.call(this, e)).p = void 0),
            (o.cleanUpListeners = function () {}),
            (o.formatUrls = (function (e) {
              var t = null,
                n = null,
                r = null;
              return function (o, i) {
                if (r && o === t && i === n) return r;
                var a = e(o, i);
                return (t = o), (n = i), (r = a), a;
              };
            })(function (e, t) {
              return { href: (0, m.addBasePath)(g(e)), as: t ? (0, m.addBasePath)(g(t)) : t };
            })),
            (o.linkClicked = function (e) {
              var t = e.currentTarget,
                n = t.nodeName,
                r = t.target;
              if (
                'A' !== n ||
                !(
                  (r && '_self' !== r) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var i = o.formatUrls(o.props.href, o.props.as),
                  a = i.href,
                  c = i.as;
                if (
                  (function (e) {
                    var t = (0, h.parse)(e, !1, !0),
                      n = (0, h.parse)((0, d.getLocationOrigin)(), !1, !0);
                    return !t.host || (t.protocol === n.protocol && t.host === n.host);
                  })(a)
                ) {
                  var s = window.location.pathname;
                  (a = (0, h.resolve)(s, a)),
                    (c = c ? (0, h.resolve)(s, c) : a),
                    e.preventDefault();
                  var u = o.props.scroll;
                  null == u && (u = c.indexOf('#') < 0),
                    v.default[o.props.replace ? 'replace' : 'push'](a, c, {
                      shallow: o.props.shallow,
                    }).then(function (e) {
                      e && u && (window.scrollTo(0, 0), document.body.focus());
                    });
                }
              }
            }),
            (o.p = !1 !== e.prefetch),
            o
          );
        }
        return (
          o(n, [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.cleanUpListeners();
              },
            },
            {
              key: 'getPaths',
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  n = t.href,
                  r = t.as,
                  o = (0, h.resolve)(e, n);
                return [o, r ? (0, h.resolve)(e, r) : o];
              },
            },
            {
              key: 'handleRef',
              value: function (e) {
                var t = this;
                this.p &&
                  y &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  w[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var n = k();
                      return n
                        ? (n.observe(e),
                          b.set(e, t),
                          function () {
                            try {
                              n.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            b.delete(e);
                          })
                        : function () {};
                    })(e, function () {
                      t.prefetch();
                    })));
              },
            },
            {
              key: 'prefetch',
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths();
                  v.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (w[t.join('%')] = !0);
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.children,
                  n = this.formatUrls(this.props.href, this.props.as),
                  r = n.href,
                  o = n.as;
                'string' === typeof t && (t = p.default.createElement('a', null, t));
                var i = p.Children.only(t),
                  a = {
                    ref: function (t) {
                      e.handleRef(t),
                        i &&
                          'object' === typeof i &&
                          i.ref &&
                          ('function' === typeof i.ref
                            ? i.ref(t)
                            : 'object' === typeof i.ref && (i.ref.current = t));
                    },
                    onMouseEnter: function (t) {
                      i.props &&
                        'function' === typeof i.props.onMouseEnter &&
                        i.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 });
                    },
                    onClick: function (t) {
                      i.props && 'function' === typeof i.props.onClick && i.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                return (
                  (!this.props.passHref && ('a' !== i.type || 'href' in i.props)) ||
                    (a.href = o || r),
                  p.default.cloneElement(i, a)
                );
              },
            },
          ]),
          n
        );
      })(p.Component);
      t.default = x;
    },
    xQut: function (e, t, n) {
      'use strict';
      var r = n('wx14');
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var i = n('q1tI'),
        a = n.n(i),
        c = n('vOnD'),
        s = n('ufqH'),
        u = a.a.createElement;
      var l = c.default.button.withConfig({ displayName: 'StyledButton', componentId: 'ajxmy-0' })(
        [
          'min-width:8rem;background-color:',
          ';font-size:',
          ';color:',
          ';text-align:center;user-select:none;border:1px solid transparent;padding:0.5rem 1rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:',
          ';}:disabled{cursor:not-allowed;background-color:',
          ';}',
        ],
        function (e) {
          return e.theme.colors.brand;
        },
        function (e) {
          return e.theme.fontSize.small;
        },
        function (e) {
          return e.theme.colors.white;
        },
        function (e) {
          var t = e.theme;
          return Object(s.a)(0.1, t.colors.brand);
        },
        function (e) {
          var t = e.theme;
          return Object(s.b)(0.2, t.colors.brand);
        }
      );
      t.a = Object(i.forwardRef)(function (e, t) {
        var n = e.children,
          i = e.onClick,
          a = o(e, ['children', 'onClick']);
        return u(l, Object(r.a)({ ref: t, onClick: i }, a), n);
      });
    },
  },
  [['/EDR', 0, 1, 2, 3, 4]],
]);
