(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=l(n("q1tI")),a=l(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,l=m.length;u<l;u++){var s=m[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var c=a.props[s],d=r[s]||new Set;d.has(c)?o=!1:(d.add(c),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function f(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}f.rewind=p.rewind;var g=f;t.default=g},BMua:function(e,t,n){"use strict";var r=n("vOnD");t.a=r.default.div.withConfig({componentId:"gy3cny-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:48rem){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},SpL8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("vOnD"),l=n("ufqH"),s=n("BMua"),c=n("kz3Y"),m=a.a.createElement;var d=u.default.h3.withConfig({displayName:"PageSubTitle",componentId:"sc-1ugqrvt-0"})(["margin-bottom:",";font-size:1.25em;"],(function(e){return e.theme.spacing.medium})),p=u.default.img.withConfig({displayName:"InlineProjectImg",componentId:"sc-1ugqrvt-1"})(["width:2rem;position:relative;top:0.25rem;@media (min-width:48rem){display:none;}"]),f=u.default.a.withConfig({displayName:"ProjectLink",componentId:"sc-1ugqrvt-2"})(["@media (max-width:48rem){display:none;}"]),g=u.default.div.withConfig({displayName:"TitleContainer",componentId:"sc-1ugqrvt-3"})(["display:grid;grid-gap:",";grid-template-columns:5rem 1fr;align-items:center;@media (max-width:48rem){grid-template-columns:1fr;}"],(function(e){return e.theme.spacing.medium})),h=u.default.h2.withConfig({displayName:"TomatiTitle",componentId:"sc-1ugqrvt-4"})(["font-size:1.5em;margin:0.5rem 0;a{color:#f93e0b;:hover,:focus{color:",";}}"],Object(l.a)(.05,"#f93e0b")),v=u.default.h2.withConfig({displayName:"HuegasmTitle",componentId:"sc-1ugqrvt-5"})(["font-size:1.5em;margin:0.5rem 0;a{color:#910249;:hover,:focus{color:",";}}"],Object(l.a)(.05,"#910249")),w=u.default.div.withConfig({displayName:"PromoImages",componentId:"sc-1ugqrvt-6"})(["margin-top:",";display:grid;grid-template-columns:repeat(3,12.5rem);grid-gap:",";align-items:center;justify-content:center;justify-items:center;@media (max-width:48rem){grid-template-columns:1fr;}"],(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.small})),y=u.default.img.withConfig({displayName:"ChromeStoreIcon",componentId:"sc-1ugqrvt-7"})(["width:10.5rem;"]),b=u.default.img.withConfig({displayName:"PlayStoreIcon",componentId:"sc-1ugqrvt-8"})(["width:9.25rem;"]),C=u.default.img.withConfig({displayName:"AppStoreIcon",componentId:"sc-1ugqrvt-9"})(["width:7.5rem;"]),I=u.default.div.withConfig({displayName:"IconContainer",componentId:"sc-1ugqrvt-10"})(["display:flex;align-items:center;margin-top:0.5rem;flex-flow:wrap;"]),k=u.default.div.withConfig({displayName:"ProjectContainer",componentId:"sc-1ugqrvt-11"})(["border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:",";"],(function(e){return e.theme.spacing.medium})),_=u.default.img.withConfig({displayName:"ProjectImg",componentId:"sc-1ugqrvt-12"})(["width:12.5rem;margin-bottom:",";padding:0 0.25rem;@media (max-width:48rem){margin-bottom:0;}"],(function(e){return e.theme.spacing.medium}));t.default=function(){return m(s.a,null,m(i.a,null,m("title",null,"Projects - Nidratech")),m(c.a,{title:"What we've been up to lately"}),m(d,null,"Outside of working with our clients, we spend some time working on side projects."),m(k,null,m(g,null,m(f,{href:"https://www.tomati.io",rel:"noreferrer",target:"_blank"},m("img",{src:"images/tomati-logo.png",title:"Tomati"})),m("div",null,m(h,null,m("a",{href:"https://www.tomati.io",rel:"noreferrer",target:"_blank"},m(p,{src:"images/tomati-logo.png",title:"Tomati"})," Tomati")),m("p",null,"A restaurant health inspection reports aggregator. We gather inspection reports from hundreds of thousands of Canadian and American food establishments and aggregate them with Groupon deals, data from Google, Yelp and Zomato to provide the user with a rich collection of information about the favorite local restaurants."))),m(w,null,m(_,{src:"images/tomati-1.jpg",alt:"Tomati screenshot #1"}),m(_,{src:"images/tomati-4.jpg",alt:"Tomati screenshot #2"}),m(_,{src:"images/tomati-2.jpg",alt:"Tomati screenshot #3"})),m(I,null,m("a",{href:"https://play.google.com/store/apps/details?id=com.nidratech.tomati",target:"_blank",rel:"noopener noreferrer"},m(b,{src:"images/android-play-badge.png",title:"Android app"})),m("a",{href:"https://itunes.apple.com/us/app/tomati-restaurant-inspector/id1440846554",target:"_blank",rel:"noopener noreferrer"},m(C,{src:"images/app-store-badge.svg",alt:"iOS app"})))),m(k,null,m(g,null,m(f,{href:"https://www.huegasm.com",rel:"noreferrer",target:"_blank"},m("img",{src:"images/huegasm-logo.png",title:"Huegasm"})),m("div",null,m(v,null,m("a",{href:"https://www.huegasm.com",rel:"noreferrer",target:"_blank"},m(p,{src:"images/huegasm-logo.png",title:"Huegasm"})," Huegasm")),m("p",null,"A Chrome extension, web, Android and iOS app for controlling and syncing Philips Hue lights with music."))),m(w,null,m(_,{src:"images/huegasm-1.jpg",alt:"Huegasm screenshot #1"}),m(_,{src:"images/huegasm-2.jpg",alt:"Huegasm screenshot #2"}),m(_,{src:"images/huegasm-3.jpg",alt:"Huegasm screenshot #3"})),m(I,null,m("a",{href:"https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj",target:"_blank",rel:"noopener noreferrer"},m(y,{src:"images/chrome-store-badge.png",title:"Chrome extension"})),m("a",{href:"https://play.google.com/store/apps/details?id=com.hoboman313.huegasm",target:"_blank",rel:"noopener noreferrer"},m(b,{src:"images/android-play-badge.png",title:"Android app"})),m("a",{href:"https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485",target:"_blank",rel:"noopener noreferrer"},m(C,{src:"images/app-store-badge.svg",alt:"iOS app"})))))}},Tk32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("SpL8")}])},"X/xQ":function(e,t,n){"use strict";var r=n("vOnD");t.a=r.default.div.withConfig({componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),i=n("48fX"),u=n("tCBg"),l=n("T0f4"),s=n("mPvQ");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var m=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(s,u);var l=c(s);function s(e){var o;return r(this,s),o=l.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(m.Component))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kz3Y:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("X/xQ"),u=a.a.createElement;var l=o.default.h1.withConfig({displayName:"Title",componentId:"sc-1dghbrv-0"})(["text-transform:uppercase;font-weight:700;font-size:1.5em;"]),s=o.default.div.withConfig({displayName:"TitleContainer",componentId:"sc-1dghbrv-1"})(["display:inline-block;margin-bottom:",";"],(function(e){return e.theme.spacing.medium}));t.a=function(e){var t=e.title;return u(s,null,u(l,null,t),u(i.a,null))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["Tk32",0,1,2,3]]]);