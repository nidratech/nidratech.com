_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=o.props[l],d=r[l]||new Set;d.has(u)?a=!1:(d.add(u),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var g=h;t.default=g},BMua:function(e,t,n){"use strict";var r=n("vOnD");t.a=r.d.div.withConfig({displayName:"Container",componentId:"gy3cny-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JzgJ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("8Kt/"),a=n.n(o),i=n("vOnD"),c=n("BMua"),s=n("kz3Y"),l=i.d.p.withConfig({displayName:"clients__ClientAddress",componentId:"sc-1jgxhf0-0"})(["color:",";font-size:0.9em;margin-bottom:",";"],(function(e){return e.theme.colors.grey}),(function(e){return e.theme.spacing.medium})),u=i.d.div.withConfig({displayName:"clients__ClientInfo",componentId:"sc-1jgxhf0-1"})(["display:flex;flex-direction:column;justify-content:center;"]),d=i.d.div.withConfig({displayName:"clients__ClientLogoContainer",componentId:"sc-1jgxhf0-2"})(["height:8rem;display:flex;flex-direction:column;justify-content:center;"]),f=i.d.img.withConfig({displayName:"clients__ClientLogo",componentId:"sc-1jgxhf0-3"})(["width:8rem;margin-right:5rem;@media (max-width:","){margin-right:2rem;}"],(function(e){return e.theme.breakpoints.mobile})),p=Object(i.d)(f).withConfig({displayName:"clients__GClientLogo",componentId:"sc-1jgxhf0-4"})(["width:6rem;margin-right:6rem;margin-left:1rem;@media (max-width:","){width:4rem;margin-right:2rem;margin-left:0.5rem;}"],(function(e){return e.theme.breakpoints.mobile})),h=i.d.li.withConfig({displayName:"clients__ListGroupItem",componentId:"sc-1jgxhf0-5"})(["display:flex;align-items:center;border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:",";"],(function(e){return e.theme.spacing.medium})),g=i.d.p.withConfig({displayName:"clients__ProjectList",componentId:"sc-1jgxhf0-6"})(["margin-top:0.25rem;"]);t.default=function(){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"Clients | Nidratech"})}),Object(r.jsx)(s.a,{title:"Some of our clients include"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(p,{src:"images/glogo.png",title:"European Gemological Laboratory"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google"}),Object(r.jsx)(l,{children:"Mountain View, USA"}),Object(r.jsx)("p",{children:"We've been working as contractors for Google Nest since 2016."}),Object(r.jsx)(g,{children:"Projects: Google Nest Login, Google Store, Nest Enterprise Portal, Nest HVAC Portal."})]})]}),Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"http://www.egllaboratories.org/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f,{src:"images/egl-logo.png",title:"European Gemological Laboratory"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"http://www.egllaboratories.org/",target:"_blank",rel:"noopener noreferrer",children:"European Gemological Laboratory"}),Object(r.jsx)(l,{children:"New York, USA"})]})]}),Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"https://www.cglgrs.com/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f,{src:"images/cgl-logo.png",title:"Canadian Gemological Laboratory"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"https://www.cglgrs.com/",target:"_blank",rel:"noopener noreferrer",children:"Canadian Gemological Laboratory"}),Object(r.jsx)(l,{children:"Vancouver, BC, Canada"})]})]}),Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"http://ggacanada.ca/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f,{src:"images/gga-logo.jpg",title:"Gems Grading & Appraising"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"http://ggacanada.ca/",target:"_blank",rel:"noopener noreferrer",children:"Gems Grading & Appraising"}),Object(r.jsx)(l,{children:"Vancouver, BC, Canada"})]})]}),Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"https://ia.ca/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f,{src:"images/ia-financial-logo.svg",title:"iA Financial Group"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"https://ia.ca/",target:"_blank",rel:"noopener noreferrer",children:"iA Financial Group"}),Object(r.jsx)(l,{children:"Vancouver, BC, Canada"})]})]}),Object(r.jsxs)(h,{children:[Object(r.jsx)(d,{children:Object(r.jsx)("a",{href:"https://www.worksafebc.com/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f,{src:"images/wsbc-logo.jpg",title:"WorkSafe BC"})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)("a",{href:"https://www.worksafebc.com/",target:"_blank",rel:"noopener noreferrer",children:"WorkSafe BC"}),Object(r.jsx)(l,{children:"Richmond, BC, Canada"})]})]})]})]})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},"X/xQ":function(e,t,n){"use strict";var r=n("vOnD");t.a=r.d.div.withConfig({displayName:"HighlightLine",componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},kz3Y:function(e,t,n){"use strict";var r=n("nKUr"),o=n("vOnD"),a=n("X/xQ");var i=o.d.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1dghbrv-0"})(["text-transform:uppercase;font-weight:700;font-size:1.5em;"]),c=o.d.div.withConfig({displayName:"PageTitle__TitleContainer",componentId:"sc-1dghbrv-1"})(["display:inline-block;margin-bottom:",";"],(function(e){return e.theme.spacing.medium}));t.a=function(e){var t=e.title;return Object(r.jsxs)(c,{children:[Object(r.jsx)(i,{children:t}),Object(r.jsx)(a.a,{})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},"yL+B":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return n("JzgJ")}])}},[["yL+B",0,1,2]]]);