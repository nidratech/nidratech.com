_N_E=(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},8078:function(e,t,n){"use strict";var r=n(9163);t.Z=r.ZP.div.withConfig({displayName:"Container",componentId:"gy3cny-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},2416:function(e,t,n){"use strict";var r=n(9163);t.Z=r.ZP.div.withConfig({displayName:"HighlightLine",componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},3520:function(e,t,n){"use strict";var r=n(5893),o=n(9163),a=n(2416);var i=o.ZP.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1dghbrv-0"})(["text-transform:uppercase;font-weight:700;font-size:1.5em;"]),c=o.ZP.div.withConfig({displayName:"PageTitle__TitleContainer",componentId:"sc-1dghbrv-1"})(["display:inline-block;margin-bottom:",";"],(function(e){return e.theme.spacing.medium}));t.Z=function(e){var t=e.title;return(0,r.jsxs)(c,{children:[(0,r.jsx)(i,{children:t}),(0,r.jsx)(a.Z,{})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";n(9713);t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(r=n(617))&&r.__esModule?r:{default:r},i=n(3367),c=n(4287),s=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=o.props[l],d=r[l]||new Set;d.has(u)?a=!1:(d.add(u),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},3145:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(9008),a=n(9163),i=n(8078),c=n(3520),s=a.ZP.p.withConfig({displayName:"clients__ClientAddress",componentId:"sc-1jgxhf0-0"})(["color:",";font-size:0.9em;margin-bottom:",";"],(function(e){return e.theme.colors.grey}),(function(e){return e.theme.spacing.medium})),l=a.ZP.div.withConfig({displayName:"clients__ClientInfo",componentId:"sc-1jgxhf0-1"})(["display:flex;flex-direction:column;justify-content:center;"]),u=a.ZP.div.withConfig({displayName:"clients__ClientLogoContainer",componentId:"sc-1jgxhf0-2"})(["height:8rem;display:flex;flex-direction:column;justify-content:center;"]),d=a.ZP.img.withConfig({displayName:"clients__ClientLogo",componentId:"sc-1jgxhf0-3"})(["width:8rem;margin-right:5rem;@media (max-width:","){margin-right:2rem;}"],(function(e){return e.theme.breakpoints.mobile})),f=(0,a.ZP)(d).withConfig({displayName:"clients__GClientLogo",componentId:"sc-1jgxhf0-4"})(["width:6rem;margin-right:6rem;margin-left:1rem;@media (max-width:","){width:4rem;margin-right:2rem;margin-left:0.5rem;}"],(function(e){return e.theme.breakpoints.mobile})),p=a.ZP.li.withConfig({displayName:"clients__ListGroupItem",componentId:"sc-1jgxhf0-5"})(["display:flex;align-items:center;border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:",";"],(function(e){return e.theme.spacing.medium})),h=a.ZP.p.withConfig({displayName:"clients__ProjectList",componentId:"sc-1jgxhf0-6"})(["margin-top:0.25rem;"]);t.default=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Clients | Nidratech"})}),(0,r.jsx)(c.Z,{title:"Some of our clients include"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(f,{src:"images/glogo.png",title:"European Gemological Laboratory"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google"}),(0,r.jsx)(s,{children:"Mountain View, USA"}),(0,r.jsx)("p",{children:"We've been working as contractors for Google Nest since 2016."}),(0,r.jsx)(h,{children:"Projects: Google Nest Login, Google Store, Nest Enterprise Portal, Nest HVAC Portal."})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"http://www.egllaboratories.org/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d,{src:"images/egl-logo.png",title:"European Gemological Laboratory"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"http://www.egllaboratories.org/",target:"_blank",rel:"noopener noreferrer",children:"European Gemological Laboratory"}),(0,r.jsx)(s,{children:"New York, USA"})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"https://www.cglgrs.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d,{src:"images/cgl-logo.png",title:"Canadian Gemological Laboratory"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"https://www.cglgrs.com/",target:"_blank",rel:"noopener noreferrer",children:"Canadian Gemological Laboratory"}),(0,r.jsx)(s,{children:"Vancouver, BC, Canada"})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"http://ggacanada.ca/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d,{src:"images/gga-logo.jpg",title:"Gems Grading & Appraising"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"http://ggacanada.ca/",target:"_blank",rel:"noopener noreferrer",children:"Gems Grading & Appraising"}),(0,r.jsx)(s,{children:"Vancouver, BC, Canada"})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"https://ia.ca/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d,{src:"images/ia-financial-logo.svg",title:"iA Financial Group"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"https://ia.ca/",target:"_blank",rel:"noopener noreferrer",children:"iA Financial Group"}),(0,r.jsx)(s,{children:"Vancouver, BC, Canada"})]})]}),(0,r.jsxs)(p,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("a",{href:"https://www.worksafebc.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d,{src:"images/wsbc-logo.jpg",title:"WorkSafe BC"})})}),(0,r.jsxs)(l,{children:[(0,r.jsx)("a",{href:"https://www.worksafebc.com/",target:"_blank",rel:"noopener noreferrer",children:"WorkSafe BC"}),(0,r.jsx)(s,{children:"Richmond, BC, Canada"})]})]})]})]})}},7585:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return n(3145)}])},9008:function(e,t,n){e.exports=n(7947)}},0,[[7585,272,774,576]]]);