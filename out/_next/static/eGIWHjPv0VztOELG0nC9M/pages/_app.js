(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = s),
        (t.useAmp = function () {
          return s(o.default.useContext(i.AmpStateContext));
        });
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        i = n('lwAK');
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          i = e.hasQuery;
        return n || (o && void 0 !== i && i);
      }
    },
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'));
    },
    '3niX': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.flush = function () {
          var e = i.cssRules();
          return i.flush(), e;
        }),
        (t.default = void 0);
      var r,
        o = n('q1tI');
      var i = new ((r = n('SevZ')) && r.__esModule ? r : { default: r }).default(),
        s = (function (e) {
          var t, n;
          function r(t) {
            var n;
            return ((n = e.call(this, t) || this).prevProps = {}), n;
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.dynamic = function (e) {
              return e
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return i.computeId(t, n);
                })
                .join(' ');
            });
          var o = r.prototype;
          return (
            (o.shouldComponentUpdate = function (e) {
              return this.props.id !== e.id || String(this.props.dynamic) !== String(e.dynamic);
            }),
            (o.componentWillUnmount = function () {
              i.remove(this.props);
            }),
            (o.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && i.remove(this.prevProps),
                  i.add(this.props),
                  (this.prevProps = this.props)),
                null
              );
            }),
            r
          );
        })(o.Component);
      t.default = s;
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    '74v/': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2');
        },
      ]);
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r = u(n('q1tI')),
        o = u(n('Xuae')),
        i = n('lwAK'),
        s = n('FYa8'),
        a = n('/0+H');
      function u(e) {
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
      function c(e, t) {
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
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(c, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var i = !0;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  var s = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(s) ? (i = !1) : e.add(s);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var a = 0, u = d.length; a < u; a++) {
                      var l = d[a];
                      if (o.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (i = !1) : n.add(l);
                        else {
                          var c = o.props[l],
                            f = r[l] || new Set();
                          f.has(c) ? (i = !1) : (f.add(c), (r[l] = f));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var h = (0, o.default)();
      function p(e) {
        var t = e.children;
        return r.default.createElement(i.AmpStateContext.Consumer, null, function (e) {
          return r.default.createElement(s.HeadManagerContext.Consumer, null, function (n) {
            return r.default.createElement(
              h,
              {
                reduceComponentsToState: f,
                handleStateChange: n,
                inAmpMode: (0, a.isInAmpMode)(e),
              },
              t
            );
          });
        });
      }
      p.rewind = h.rewind;
      var m = p;
      t.default = m;
    },
    '9kyW': function (e, t, n) {
      'use strict';
      e.exports = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      };
    },
    FYa8: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext(null);
      t.HeadManagerContext = o;
    },
    MX0m: function (e, t, n) {
      e.exports = n('3niX');
    },
    SevZ: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var r = i(n('9kyW')),
        o = i(n('bVZc'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            r = void 0 === n ? null : n,
            i = t.optimizeForSpeed,
            s = void 0 !== i && i,
            a = t.isBrowser,
            u = void 0 === a ? 'undefined' !== typeof window : a;
          (this._sheet = r || new o.default({ name: 'styled-jsx', optimizeForSpeed: s })),
            this._sheet.inject(),
            r &&
              'boolean' === typeof s &&
              (this._sheet.setOptimizeForSpeed(s),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = u),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                  return (e[t] = 0), e;
                }, {})));
            var n = this.getIdAndRules(e),
              r = n.styleId,
              o = n.rules;
            if (r in this._instancesCounts) this._instancesCounts[r] += 1;
            else {
              var i = o
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = i), (this._instancesCounts[r] = 1);
            }
          }),
          (t.remove = function (e) {
            var t = this,
              n = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw new Error('StyleSheetRegistry: ' + t + '.');
              })(n in this._instancesCounts, 'styleId: `' + n + '` not found'),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var r = this._fromServer && this._fromServer[n];
              r
                ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                : (this._indices[n].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n];
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e);
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              n = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return n[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? '' : '\n'),
                  ];
                })
                .filter(function (e) {
                  return Boolean(e[1]);
                })
            );
          }),
          (t.createComputeId = function () {
            var e = {};
            return function (t, n) {
              if (!n) return 'jsx-' + t;
              var o = String(n),
                i = t + o;
              return e[i] || (e[i] = 'jsx-' + (0, r.default)(t + '-' + o)), e[i];
            };
          }),
          (t.createComputeSelector = function (e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g);
            var t = {};
            return function (n, r) {
              this._isBrowser || (r = r.replace(/\/style/gi, '\\/style'));
              var o = n + r;
              return t[o] || (t[o] = r.replace(e, n)), t[o];
            };
          }),
          (t.getIdAndRules = function (e) {
            var t = this,
              n = e.children,
              r = e.dynamic,
              o = e.id;
            if (r) {
              var i = this.computeId(o, r);
              return {
                styleId: i,
                rules: Array.isArray(n)
                  ? n.map(function (e) {
                      return t.computeSelector(i, e);
                    })
                  : [this.computeSelector(i, n)],
              };
            }
            return { styleId: this.computeId(o), rules: Array.isArray(n) ? n : [n] };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return (e[t.id.slice(2)] = t), e;
              }, {});
          }),
          e
        );
      })();
      t.default = s;
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        o = n('qXWd'),
        i = n('i2R6'),
        s = n('48fX'),
        a = n('tCBg'),
        u = n('T0f4'),
        l = n('mPvQ');
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
            r = u(e);
          if (t) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var d = n('q1tI'),
        f = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(l(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (a) {
          s(l, a);
          var u = c(l);
          function l(e) {
            var i;
            return r(this, l), (i = u.call(this, e)), f && (t.add(o(i)), n(o(i))), i;
          }
          return (
            i(l, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            i(l, [
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
        })(d.Component);
      };
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO');
    },
    bVZc: function (e, t, n) {
      'use strict';
      (function (e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (t.__esModule = !0), (t.default = void 0);
        var r = 'undefined' !== typeof e && e.env && !0,
          o = function (e) {
            return '[object String]' === Object.prototype.toString.call(e);
          },
          i = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.name,
                i = void 0 === n ? 'stylesheet' : n,
                a = t.optimizeForSpeed,
                u = void 0 === a ? r : a,
                l = t.isBrowser,
                c = void 0 === l ? 'undefined' !== typeof window : l;
              s(o(i), '`name` must be a string'),
                (this._name = i),
                (this._deletedRulePlaceholder = '#' + i + '-deleted-rule____{}'),
                s('boolean' === typeof u, '`optimizeForSpeed` must be a boolean'),
                (this._optimizeForSpeed = u),
                (this._isBrowser = c),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var d = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
              this._nonce = d ? d.getAttribute('content') : null;
            }
            var t,
              i,
              a,
              u = e.prototype;
            return (
              (u.setOptimizeForSpeed = function (e) {
                s('boolean' === typeof e, '`setOptimizeForSpeed` accepts a boolean'),
                  s(
                    0 === this._rulesCount,
                    'optimizeForSpeed cannot be when rules have already been inserted'
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject();
              }),
              (u.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed;
              }),
              (u.inject = function () {
                var e = this;
                if (
                  (s(!this._injected, 'sheet already injected'),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = 'insertRule' in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (r ||
                        console.warn(
                          'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                        ),
                      this.flush(),
                      (this._injected = !0))
                    )
                  );
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, n) {
                    return (
                      'number' === typeof n
                        ? (e._serverSheet.cssRules[n] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      n
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                };
              }),
              (u.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
              }),
              (u.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (u.insertRule = function (e, t) {
                if ((s(o(e), '`insertRule` accepts only strings'), !this._isBrowser))
                  return (
                    'number' !== typeof t && (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  );
                if (this._optimizeForSpeed) {
                  var n = this.getSheet();
                  'number' !== typeof t && (t = n.cssRules.length);
                  try {
                    n.insertRule(e, t);
                  } catch (a) {
                    return (
                      r ||
                        console.warn(
                          'StyleSheet: illegal rule: \n\n' +
                            e +
                            '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                        ),
                      -1
                    );
                  }
                } else {
                  var i = this._tags[t];
                  this._tags.push(this.makeStyleTag(this._name, e, i));
                }
                return this._rulesCount++;
              }),
              (u.replaceRule = function (e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                  if ((t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e])) return e;
                  n.deleteRule(e);
                  try {
                    n.insertRule(t, e);
                  } catch (i) {
                    r ||
                      console.warn(
                        'StyleSheet: illegal rule: \n\n' +
                          t +
                          '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                      ),
                      n.insertRule(this._deletedRulePlaceholder, e);
                  }
                } else {
                  var o = this._tags[e];
                  s(o, 'old rule at index `' + e + '` not found'), (o.textContent = t);
                }
                return e;
              }),
              (u.deleteRule = function (e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, '');
                  else {
                    var t = this._tags[e];
                    s(t, 'rule at index `' + e + '` not found'),
                      t.parentNode.removeChild(t),
                      (this._tags[e] = null);
                  }
                else this._serverSheet.deleteRule(e);
              }),
              (u.flush = function () {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e);
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = []);
              }),
              (u.cssRules = function () {
                var e = this;
                return this._isBrowser
                  ? this._tags.reduce(function (t, n) {
                      return (
                        n
                          ? (t = t.concat(
                              Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t;
                              })
                            ))
                          : t.push(null),
                        t
                      );
                    }, [])
                  : this._serverSheet.cssRules;
              }),
              (u.makeStyleTag = function (e, t, n) {
                t && s(o(t), 'makeStyleTag acceps only strings as second parameter');
                var r = document.createElement('style');
                this._nonce && r.setAttribute('nonce', this._nonce),
                  (r.type = 'text/css'),
                  r.setAttribute('data-' + e, ''),
                  t && r.appendChild(document.createTextNode(t));
                var i = document.head || document.getElementsByTagName('head')[0];
                return n ? i.insertBefore(r, n) : i.appendChild(r), r;
              }),
              (t = e),
              (i = [
                {
                  key: 'length',
                  get: function () {
                    return this._rulesCount;
                  },
                },
              ]) && n(t.prototype, i),
              a && n(t, a),
              e
            );
          })();
        function s(e, t) {
          if (!e) throw new Error('StyleSheet: ' + t + '.');
        }
        t.default = i;
      }.call(this, n('8oxB')));
    },
    cTJO: function (e, t, n) {
      'use strict';
      var r = n('/GRZ'),
        o = n('i2R6'),
        i = n('48fX'),
        s = n('tCBg'),
        a = n('T0f4');
      function u(e) {
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
            r = a(e);
          if (t) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      var l = n('AroE'),
        c = n('7KCV');
      (t.__esModule = !0), (t.default = void 0);
      var d,
        f = c(n('q1tI')),
        h = n('QmWs'),
        p = n('g/15'),
        m = l(n('nOHt')),
        v = n('elyg');
      function g(e) {
        return e && 'object' === typeof e ? (0, p.formatWithValidation)(e) : e;
      }
      var y = new Map(),
        S = window.IntersectionObserver,
        b = {};
      function w() {
        return (
          d ||
          (S
            ? (d = new S(
                function (e) {
                  e.forEach(function (e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (d.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        );
      }
      var A = (function (e) {
        i(n, e);
        var t = u(n);
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
                var s = e(o, i);
                return (t = o), (n = i), (r = s), s;
              };
            })(function (e, t) {
              return { href: (0, v.addBasePath)(g(e)), as: t ? (0, v.addBasePath)(g(t)) : t };
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
                  s = i.href,
                  a = i.as;
                if (
                  (function (e) {
                    var t = (0, h.parse)(e, !1, !0),
                      n = (0, h.parse)((0, p.getLocationOrigin)(), !1, !0);
                    return !t.host || (t.protocol === n.protocol && t.host === n.host);
                  })(s)
                ) {
                  var u = window.location.pathname;
                  (s = (0, h.resolve)(u, s)),
                    (a = a ? (0, h.resolve)(u, a) : s),
                    e.preventDefault();
                  var l = o.props.scroll;
                  null == l && (l = a.indexOf('#') < 0),
                    m.default[o.props.replace ? 'replace' : 'push'](s, a, {
                      shallow: o.props.shallow,
                    }).then(function (e) {
                      e && l && (window.scrollTo(0, 0), document.body.focus());
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
                  S &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  b[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var n = w();
                      return n
                        ? (n.observe(e),
                          y.set(e, t),
                          function () {
                            try {
                              n.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            y.delete(e);
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
                  m.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (b[t.join('%')] = !0);
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
                'string' === typeof t && (t = f.default.createElement('a', null, t));
                var i = f.Children.only(t),
                  s = {
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
                    (s.href = o || r),
                  f.default.cloneElement(i, s)
                );
              },
            },
          ]),
          n
        );
      })(f.Component);
      t.default = A;
    },
    cha2: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('wx14'),
        o = n('q1tI'),
        i = n.n(o),
        s = n('vOnD'),
        a = n('nOHt'),
        u = n.n(a),
        l = n('8Kt/'),
        c = n.n(l),
        d = {
          colors: { brand: '#d5851d', white: '#ffffff', greyLight: '#CFD2D3', grey: '#6c757d' },
          fontSize: { small: '1em', medium: '1.25em', mediumLarge: '1.5em', large: '2.5em' },
          spacing: { navBarHeight: '5rem', small: '0.5rem', medium: '1rem', large: '2rem' },
        };
      var f = n('MX0m'),
        h = n.n(f),
        p = n('vUL5'),
        m = i.a.createElement;
      function v() {
        var e,
          t,
          n =
            ((e = [
              "  \n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n  *, html * {\n    transition: color 0.1s ease, background-color 0.1s ease, border-color 0.1s ease;\n  }\n  html, body {\n    font-family: 'Roboto', sans-serif;\n  }\n  a {\n      color: ",
              ';\n      text-decoration: none;\n  }\n',
            ]),
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      var g = Object(s.createGlobalStyle)(v(), '#d5851d'),
        y = function () {
          return m(
            i.a.Fragment,
            null,
            m(p.Reset, null),
            m(g, null),
            m(h.a, { id: '2741810665' }, [
              "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');",
            ])
          );
        },
        S = n('YFqc'),
        b = n.n(S),
        w = n('ufqH'),
        A = i.a.createElement;
      var C = function (e) {
          return A(
            'svg',
            Object(r.a)({ width: 489, height: 147, viewBox: '0 0 489 147' }, e),
            A('image', {
              x: 7,
              y: 79,
              width: 476,
              height: 64,
              xlinkHref:
                'data:img/png;base64,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',
            }),
            A('image', {
              'data-name': 'Ellipse 1',
              x: 51,
              y: 3,
              width: 60,
              height: 59,
              xlinkHref:
                'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAADm0lEQVRogeWbS0gVURjHf05FLbQiMkiKlCwLwjQpKGxhLYxaZBFBgQZt2kTt3UQPodbSomhTQdEis0VJYW1KAqGHVmIvspdBRm8IqSy+6ZvLZbyPuXcezp35wUW5DOf8f3PPvTNzzneKHrfNxydmAauBFcAyoAKYC8wEirXLH8AX4D3wEngE3APuAJ/8iDXZ4/bk7O0AtgF1gJHl+GJ9zQNWAtv1/THgLnAROAe88SpgtkBOKAI2At3AEHBMw7tp29A2jmqb3dpHkduwboWbdAheAdZ7dALtGNq29HFf+3TVWD4sArqAS0CN14YZWK59dmmGnMlVWIbUXqAf2BCUZQqk74eaJadhnouw/Lp2AO3ANLeJPWCqZunQbI5wKlyulwpX3x+faNJsFV4JLwV6gCUhlLWQbLc1a0ayCVfqJaEskNjuKNOslZlaySRcqr+GhSBrUaaZS9MdkE54EnAh29kKKZWaXRwcCx8AGgpQ1qJBHcaRSlhu6VoDj+g94rDK3qpdWIbByXTDocAQhxN2F7vw7oBvFf2mRp0SJAtPichQttOqbibJwi16RxU1xKk5lfC+CMpa7Lf+sYRrgeoJjeQv1eqYEG6JqGgyu0gS3hyKSP5iPumJ8EKnj1YFzgJxFeH6GMha1BsRu9HIRq0IV4U7o6dUGTH5/lqUi/DscGQJhOkiPCMGohYlRvKNdQwwhX/FSPi7CH8NQZCgMIU/xsPV5JuhC9FxYUiEn8ZI+Imha65x4YGhazJxoUeEXwCvYiD8GnhmTQB0TnCYIJDKgcSMx+lIq/7HdLSE72sJQVTpt36ck6dpj0dYOOGWLHwGeDcxeXxlGDhrdZAs/BM4HC1Xk0PqZmJfTDslF+fgM/nGA3VKYBf+A+zRv4VOSpdUC+K9wMEICMtQ7rW/ma7koQ245n8m35DsR1I1nk54TJcYnxeeq5m5WR3GkalsaQRYB7wNJqcnvNXMI+kay1aYJoXZjXotCzvDmjVjMbmT0sMBXX8aDLHwoGYcyHag0+JSmQZaE9KnqsuazdFUVS7lw5+BrVoaMZp/Ps8Y1SxbNJsjci0Q/6s1ytUTfNm6rhnaNZNj8t0C8FSr0uXs9nnnkZU+HWWN+U4+ut2U0anFIpuAG+mufS6RNm9qH7XWzEW+eLFvSYbUVX3JvqWd+snXuWj/t+5bErnzOh/lCX7uTCsB1uqnslgX3uek2Zn2QYfoE52ZuCXLIp4nAv4BTeSb38Ra/j8AAAAASUVORK5CYII=',
            })
          );
        },
        q = i.a.createElement;
      var _ = Object(s.default)(C).withConfig({
          displayName: 'StyledNidratechLogo',
          componentId: 'sc-1rgxcs4-0',
        })(['width:9.5rem;height:100%;']),
        k = s.default.div.withConfig({ displayName: 'NavContainer', componentId: 'sc-1rgxcs4-1' })([
          'display:flex;align-items:center;',
        ]),
        R = s.default.a.withConfig({ displayName: 'NavItem', componentId: 'sc-1rgxcs4-2' })(
          ['display:flex;padding:0 ', ';color:', ';:hover{color:', ';}'],
          function (e) {
            return e.theme.spacing.medium;
          },
          function (e) {
            var t = e.isActive,
              n = e.theme;
            return t ? n.colors.brand : n.colors.grey;
          },
          function (e) {
            var t = e.isActive,
              n = e.theme;
            return Object(w.a)(0.05, t ? n.colors.brand : n.colors.grey);
          }
        ),
        x = s.default.nav.withConfig({ displayName: 'StyledNav', componentId: 'sc-1rgxcs4-3' })(
          [
            'padding:0 ',
            ';display:flex;align-items:center;justify-content:space-between;height:100%;',
          ],
          function (e) {
            return e.theme.spacing.large;
          }
        ),
        E = s.default.header.withConfig({
          displayName: 'StyledHeader',
          componentId: 'sc-1rgxcs4-4',
        })(
          ['position:fixed;top:0;left:0;width:100%;z-index:99;background:', ';height:', ';'],
          function (e) {
            return e.theme.colors.white;
          },
          function (e) {
            return e.theme.spacing.navBarHeight;
          }
        ),
        B = function () {
          var e = Object(a.useRouter)().pathname;
          return q(
            E,
            null,
            q(
              x,
              null,
              q(
                k,
                null,
                q(
                  b.a,
                  { href: '/', passHref: !0 },
                  q(R, { as: 'a', 'aria-label': 'Nidratech Ltd.' }, q(_, null))
                )
              ),
              q(
                k,
                null,
                q(
                  b.a,
                  { href: '/', passHref: !0 },
                  q(R, { as: 'a', title: 'Home', isActive: '/' === e }, 'Home')
                ),
                q(
                  b.a,
                  { href: '/projects', passHref: !0 },
                  q(R, { as: 'a', title: 'Projects', isActive: '/projects' === e }, 'Projects')
                ),
                q(
                  b.a,
                  { href: '/clients', passHref: !0 },
                  q(R, { as: 'a', title: 'Clients', isActive: '/clients' === e }, 'Clients')
                ),
                q(
                  b.a,
                  { href: '/contact', passHref: !0 },
                  q(R, { as: 'a', title: 'Contact us', isActive: '/contact' === e }, 'Contact us')
                )
              )
            )
          );
        },
        F = i.a.createElement;
      u.a.events.on('routeChangeComplete', function (e) {
        window.scrollTo(0, 0),
          (function (e) {
            window.gtag('config', 'UA-69470561-3', { page_path: e });
          })(e);
      });
      var T = new Date().getFullYear(),
        M = s.default.div.withConfig({
          displayName: 'MainLayoutContainer',
          componentId: 'sc-1qpzaiq-0',
        })(['display:grid;grid-template-rows:1fr min-content;min-height:100vh;']),
        j = s.default.main.withConfig({ displayName: 'StyledMain', componentId: 'sc-1qpzaiq-1' })(
          ['padding-top:', ';'],
          function (e) {
            return e.theme.spacing.navBarHeight;
          }
        ),
        P = s.default.footer.withConfig({
          displayName: 'StyledFooter',
          componentId: 'sc-1qpzaiq-2',
        })(
          ['display:flex;justify-content:center;padding:', ';color:', ';'],
          function (e) {
            return e.theme.spacing.medium;
          },
          function (e) {
            return e.theme.colors.grey;
          }
        );
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps,
          o = e.router;
        return F(
          s.ThemeProvider,
          { theme: d },
          F(c.a, null, F('title', null, 'Nidratech Ltd.')),
          F(y, null),
          F(
            M,
            null,
            F(B, null),
            F(j, null, F(t, Object(r.a)({}, n, { key: o.route }))),
            F(P, null, 'Forged from \ud83d\udd25 \xa9', T, ' Nidratech Ltd.')
          )
        );
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
        i = n('KckH'),
        s = n('kG2m');
      e.exports = function (e) {
        return r(e) || o(e) || i(e) || s();
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    vUL5: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__makeTemplateObject) ||
        function (e, t) {
          return (
            Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
          );
        };
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Reset = t.reset = void 0);
      var o,
        i,
        s = n('vOnD');
      (t.reset = s.css(
        o ||
          (o = r(
            [
              "\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",
            ],
            [
              "\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",
            ]
          ))
      )),
        (t.Reset = s.createGlobalStyle(i || (i = r(['', ''], ['', ''])), t.reset)),
        (t.default = t.reset);
    },
  },
  [[0, 0, 1, 2, 3, 4]],
]);
