_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("vOnD"),i=t("YFqc"),c=t.n(i),a=t("X/xQ"),u=t("xQut"),s=Object(o.e)(["0%{background-position:0 0;}100%{background-position:0 199px;}"]),l=o.d.div.withConfig({displayName:"pages__PageTitleContainer",componentId:"sc-1xh3p16-0"})(["display:inline-block;"]),f=o.d.div.withConfig({displayName:"pages__HomeContainer",componentId:"sc-1xh3p16-1"})(["background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:"," 3.5s linear infinite;color:",";padding:10vh 3vw;"],s,(function(e){return e.theme.colors.white})),d=o.d.h1.withConfig({displayName:"pages__PageTitle",componentId:"sc-1xh3p16-2"})(["font-size:2.5em;margin-top:2vh;"]),p=o.d.h1.withConfig({displayName:"pages__PageSubTitle",componentId:"sc-1xh3p16-3"})(["font-size:1.25em;margin-top:5vh;margin-bottom:6vh;line-height:1.5;"]);n.default=function(){return Object(r.jsxs)(f,{children:[Object(r.jsxs)(l,{children:[Object(r.jsx)(d,{children:"Web Consulting in Touch with Tomorrow"}),Object(r.jsx)(a.a,{})]}),Object(r.jsxs)(p,{children:["We bring ideas to life and create products that people love. ",Object(r.jsx)("br",{}),"Let us help you make something remarkable."]}),Object(r.jsx)(c.a,{href:"/contact",passHref:!0,children:Object(r.jsx)(u.a,{type:"button",as:"a",children:"Contact"})})]})}},"X/xQ":function(e,n,t){"use strict";var r=t("vOnD");n.a=r.d.div.withConfig({displayName:"HighlightLine",componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),c=t("elyg"),a=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if((0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,g=e.shallow,v=e.scroll,m=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var y=i.Children.only(b),O=y&&"object"===typeof y&&y.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),x=w[0],_=w[1],k=i.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,i.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,_,m,n,t]);var E={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,a,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,g,v,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof m?m:t&&t.locale,t&&t.defaultLocale))),i.default.cloneElement(y,E)};n.default=f},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,o=(0,i.useRef)(),s=(0,i.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){i.unobserve(e),0===c.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){a||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var i=t("q1tI"),c=o(t("0G5g")),a="undefined"!==typeof IntersectionObserver;var u=new Map},xQut:function(e,n,t){"use strict";var r=t("rePB"),o=t("zLVn");var i=t("nKUr"),c=t("q1tI"),a=t("vOnD"),u=t("ufqH");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){var t=e.children,r=e.onClick,c=function(e,n){if(null==e)return{};var t,r,i=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["children","onClick"]);return Object(i.jsx)(d,l(l({ref:n,onClick:r},c),{},{children:t}))}var d=a.d.button.withConfig({displayName:"Button__StyledButton",componentId:"ajxmy-0"})(["min-width:8rem;background-color:",";font-size:0.9em;color:",";text-align:center;user-select:none;border:1px solid transparent;padding:0.5rem 1rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:",";}:disabled{cursor:not-allowed;background-color:",";}"],(function(e){return e.theme.colors.brand}),(function(e){return e.theme.colors.white}),(function(e){var n=e.theme;return Object(u.a)(.05,n.colors.brand)}),(function(e){var n=e.theme;return Object(u.b)(.2,n.colors.brand)}));n.a=Object(c.forwardRef)(f)},zLVn:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))}},[["/EDR",0,1,2,3,4]]]);