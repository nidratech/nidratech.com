_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{52:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2465);function a(){var e=(0,r.Z)(["\n  max-width: 60rem;\n  margin: auto;\n  margin-top: ",";\n  padding: ",";\n\n  @media (max-width: ",") {\n    max-width: auto;\n    margin: 0 ",";\n    padding: ",";\n  }\n"]);return a=function(){return e},e}const o=n(7288).ZP.div(a(),(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},8513:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2465);function a(){var e=(0,r.Z)(["\n  border-radius: 0.5rem;\n  background-color: ",";\n  opacity: 0.7;\n  height: 0.5em;\n  transition: 0.33s all;\n"]);return a=function(){return e},e}const o=n(7288).ZP.div(a(),(function(e){return e.theme.colors.brand}))},3134:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(2465),a=n(7294),o=n.n(a),u=n(7288),i=n(8513),c=o().createElement;function s(){var e=(0,r.Z)(["\n  display: inline-block;\n  margin-bottom: ",";\n"]);return s=function(){return e},e}function d(){var e=(0,r.Z)(["\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 1.5em;\n"]);return d=function(){return e},e}var f=u.ZP.h1(d()),l=u.ZP.div(s(),(function(e){return e.theme.spacing.medium}));const p=function(e){var t=e.title;return c(l,null,c(f,null,t),c(i.Z,null))}},8636:(e,t,n)=>{"use strict";t.__esModule=!0,t.AmpStateContext=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)).default.createContext({});t.AmpStateContext=r},4458:(e,t,n)=>{"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)),a=n(8636);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},6137:(e,t,n)=>{"use strict";t.__esModule=!0,t.HeadManagerContext=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)).default.createContext({});t.HeadManagerContext=r},2567:(e,t,n)=>{"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=function(e){return e&&e.__esModule?e:{default:e}}(n(169)),o=n(8636),u=n(6137),i=n(4458);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var d=a.props[s],l=r[s]||new Set;l.has(d)?o=!1:(l.add(d),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),c=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:l,headManager:c,inAmpMode:(0,i.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},169:(e,t,n)=>{"use strict";var r=n(3115),a=n(2553),o=n(2012),u=n(450),i=n(9807),c=n(7690),s=n(9828);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=!1,p=function(e){i(n,e);var t=d(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,l&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(u(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},6980:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(2465),a=n(7294),o=n.n(a),u=n(2567),i=n(7288),c=n(52),s=n(3134),d=o().createElement;function f(){var e=(0,r.Z)(["\n  display: flex;\n  height: 70vh;\n  align-items: center;\n  justify-content: center;\n"]);return f=function(){return e},e}var l=i.ZP.div(f());const p=function(){return d(c.Z,null,d(u.default,null,d("title",null,"Success")),d(l,null,d(s.Z,{title:"Your email has been successfully sent"})))}},8610:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(6980)}])},8164:(e,t,n)=>{var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},450:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9828:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:(e,t,n)=>{var r=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},7381:e=>{e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:(e,t,n)=>{var r=n(7917),a=n(450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},3115:(e,t,n)=>{var r=n(8164),a=n(7381),o=n(3585),u=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||u()}}},[[8610,774,576]]]);