_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var u=p[s];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],d=r[u]||new Set;d.has(l)?a=!1:(d.add(l),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var g=f;t.default=g},BMua:function(e,t,n){"use strict";var r=n("vOnD");t.a=r.d.div.withConfig({displayName:"Container",componentId:"gy3cny-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},SpL8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=n("vOnD"),c=n("ufqH"),u=n("BMua"),l=n("kz3Y"),d=o.a.createElement,p=s.d.h3.withConfig({displayName:"projects__PageSubTitle",componentId:"sc-1ugqrvt-0"})(["margin-bottom:",";font-size:1.25em;"],(function(e){return e.theme.spacing.mediumLarge})),m=s.d.img.withConfig({displayName:"projects__InlineProjectImg",componentId:"sc-1ugqrvt-1"})(["width:2rem;position:relative;top:0.25rem;@media (min-width:","){display:none;}"],(function(e){return e.theme.breakpoints.mobile})),f=s.d.a.withConfig({displayName:"projects__ProjectLink",componentId:"sc-1ugqrvt-2"})(["@media (max-width:","){display:none;}"],(function(e){return e.theme.breakpoints.mobile})),g=s.d.div.withConfig({displayName:"projects__TitleContainer",componentId:"sc-1ugqrvt-3"})(["display:grid;grid-gap:",";grid-template-columns:5rem 1fr;align-items:center;@media (max-width:","){grid-template-columns:1fr;}"],(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.breakpoints.mobile})),h=s.d.h2.withConfig({displayName:"projects__TomatiTitle",componentId:"sc-1ugqrvt-4"})(["font-size:1.5em;margin:0.5rem 0;a{color:#f93e0b;:hover,:focus{color:",";}}"],Object(c.a)(.05,"#f93e0b")),v=s.d.h2.withConfig({displayName:"projects__HuegasmTitle",componentId:"sc-1ugqrvt-5"})(["font-size:1.5em;margin:0.5rem 0;a{color:#910249;:hover,:focus{color:",";}}"],Object(c.a)(.05,"#910249")),y=s.d.div.withConfig({displayName:"projects__PromoImages",componentId:"sc-1ugqrvt-6"})(["margin-top:",";display:grid;grid-template-columns:repeat(3,12.5rem);grid-gap:",";align-items:center;justify-content:center;justify-items:center;@media (max-width:","){grid-template-columns:1fr;}"],(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.breakpoints.mobile})),w=s.d.img.withConfig({displayName:"projects__ChromeStoreIcon",componentId:"sc-1ugqrvt-7"})(["width:10.5rem;"]),b=s.d.img.withConfig({displayName:"projects__PlayStoreIcon",componentId:"sc-1ugqrvt-8"})(["width:9.25rem;"]),_=s.d.img.withConfig({displayName:"projects__AppStoreIcon",componentId:"sc-1ugqrvt-9"})(["width:7.5rem;"]),C=s.d.div.withConfig({displayName:"projects__IconContainer",componentId:"sc-1ugqrvt-10"})(["display:flex;align-items:center;margin-top:0.5rem;flex-flow:wrap;"]),j=s.d.div.withConfig({displayName:"projects__ProjectContainer",componentId:"sc-1ugqrvt-11"})(["border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:",";"],(function(e){return e.theme.spacing.medium})),k=s.d.img.withConfig({displayName:"projects__ProjectImg",componentId:"sc-1ugqrvt-12"})(["width:12.5rem;margin-bottom:",";padding:0 0.25rem;@media (max-width:","){margin-bottom:0;}"],(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.breakpoints.mobile}));t.default=function(){return d(u.a,null,d(i.a,null,d("title",null,"Projects | Nidratech")),d(l.a,{title:"What we've been up to lately"}),d(p,null,"Outside of working with our clients, we spend some time working on side projects."),d(j,null,d(g,null,d(f,{href:"https://www.tomati.io",rel:"noreferrer",target:"_blank"},d("img",{src:"images/tomati-logo.png",title:"Tomati"})),d("div",null,d(h,null,d("a",{href:"https://www.tomati.io",rel:"noreferrer",target:"_blank"},d(m,{src:"images/tomati-logo.png",title:"Tomati"})," Tomati")),d("p",null,"A restaurant health inspection reports aggregator. We gather inspection reports from hundreds of thousands of Canadian and American food establishments and aggregate them with Groupon deals, data from Google, Yelp and Zomato to provide the user with a rich collection of information about the favorite local restaurants."))),d(y,null,d(k,{src:"images/tomati-1.jpg",alt:"Tomati screenshot #1"}),d(k,{src:"images/tomati-4.jpg",alt:"Tomati screenshot #2"}),d(k,{src:"images/tomati-2.jpg",alt:"Tomati screenshot #3"})),d(C,null,d("a",{href:"https://play.google.com/store/apps/details?id=com.nidratech.tomati",target:"_blank",rel:"noopener noreferrer"},d(b,{src:"images/android-play-badge.png",title:"Android app"})),d("a",{href:"https://itunes.apple.com/us/app/tomati-restaurant-inspector/id1440846554",target:"_blank",rel:"noopener noreferrer"},d(_,{src:"images/app-store-badge.svg",alt:"iOS app"})))),d(j,null,d(g,null,d(f,{href:"https://www.huegasm.com",rel:"noreferrer",target:"_blank"},d("img",{src:"images/huegasm-logo.png",title:"Huegasm"})),d("div",null,d(v,null,d("a",{href:"https://www.huegasm.com",rel:"noreferrer",target:"_blank"},d(m,{src:"images/huegasm-logo.png",title:"Huegasm"})," Huegasm")),d("p",null,"A Chrome extension, web, Android and iOS app for controlling and syncing Philips Hue lights with music."))),d(y,null,d(k,{src:"images/huegasm-1.jpg",alt:"Huegasm screenshot #1"}),d(k,{src:"images/huegasm-2.jpg",alt:"Huegasm screenshot #2"}),d(k,{src:"images/huegasm-3.jpg",alt:"Huegasm screenshot #3"})),d(C,null,d("a",{href:"https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj",target:"_blank",rel:"noopener noreferrer"},d(w,{src:"images/chrome-store-badge.png",title:"Chrome extension"})),d("a",{href:"https://play.google.com/store/apps/details?id=com.hoboman313.huegasm",target:"_blank",rel:"noopener noreferrer"},d(b,{src:"images/android-play-badge.png",title:"Android app"})),d("a",{href:"https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485",target:"_blank",rel:"noopener noreferrer"},d(_,{src:"images/app-store-badge.svg",alt:"iOS app"})))))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Tk32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("SpL8")}])},"X/xQ":function(e,t,n){"use strict";var r=n("vOnD");t.a=r.d.div.withConfig({displayName:"HighlightLine",componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=n("qXWd"),s=n("48fX"),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1,m=function(e){s(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,p&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=m},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kz3Y:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("X/xQ"),s=o.a.createElement;var c=a.d.h1.withConfig({displayName:"PageTitle__Title",componentId:"sc-1dghbrv-0"})(["text-transform:uppercase;font-weight:700;font-size:1.5em;"]),u=a.d.div.withConfig({displayName:"PageTitle__TitleContainer",componentId:"sc-1dghbrv-1"})(["display:inline-block;margin-bottom:",";"],(function(e){return e.theme.spacing.medium}));t.a=function(e){var t=e.title;return s(u,null,s(c,null,t),s(i.a,null))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["Tk32",0,1,2,3]]]);