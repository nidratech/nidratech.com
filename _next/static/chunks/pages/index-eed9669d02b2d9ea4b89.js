_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(n,e,t){"use strict";t.r(e);var r=t("h4VS"),o=t("q1tI"),a=t.n(o),i=t("vOnD"),u=t("YFqc"),c=t.n(u),f=t("X/xQ"),s=t("xQut"),l=a.a.createElement;function d(){var n=Object(r.a)(["\n  font-size: 1.25em;\n  margin-top: 5vh;\n  margin-bottom: 6vh;\n  line-height: 1.5;\n"]);return d=function(){return n},n}function p(){var n=Object(r.a)(["\n  font-size: 2.5em;\n  margin-top: 2vh;\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  background-color: #292929;\n  background-image: url(images/hero-pattern.svg);\n  background-size: 100px 199px;\n  animation: "," 3.5s linear infinite;\n  color: ",";\n  padding: 10vh 3vw;\n"]);return h=function(){return n},n}function v(){var n=Object(r.a)(["\n  display: inline-block;\n"]);return v=function(){return n},n}function b(){var n=Object(r.a)(["\n  0% {\n    background-position: 0 0;\n  }\n\n  100% {\n    background-position: 0 199px;\n  }\n"]);return b=function(){return n},n}var g=Object(i.e)(b()),m=i.d.div(v()),w=i.d.div(h(),g,(function(n){return n.theme.colors.white})),O=i.d.h1(p()),y=i.d.h1(d());e.default=function(){return l(w,null,l(m,null,l(O,null,"Web Consulting in Touch with Tomorrow"),l(f.a,null)),l(y,null,"We bring ideas to life and create products that people love. ",l("br",null),"Let us help you make something remarkable."),l(c.a,{href:"/contact",passHref:!0},l(s.a,{type:"button",as:"a"},"Contact")))}},"X/xQ":function(n,e,t){"use strict";var r=t("h4VS"),o=t("vOnD");function a(){var n=Object(r.a)(["\n  border-radius: 0.5rem;\n  background-color: ",";\n  opacity: 0.7;\n  height: 0.5em;\n  transition: 0.33s all;\n"]);return a=function(){return n},n}e.a=o.d.div(a(),(function(n){return n.theme.colors.brand}))},YFqc:function(n,e,t){n.exports=t("cTJO")},cTJO:function(n,e,t){"use strict";var r=t("zoAU"),o=t("7KCV");e.__esModule=!0,e.default=void 0;var a,i=o(t("q1tI")),u=t("g/15"),c=t("nOHt"),f=t("elyg");var s=new Map,l=window.IntersectionObserver,d={};var p=function(n,e){var t=a||(l?a=new l((function(n){n.forEach((function(n){if(s.has(n.target)){var e=s.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(a.unobserve(n.target),s.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(n),s.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}s.delete(n)}):function(){}};function h(n,e,t,r){n.prefetch(e,t,r).catch((function(n){0})),d[e+"%"+t]=!0}function v(n,e,t,r,o,a,i){var c=n.currentTarget,f=c.nodeName,s=c.target;"A"===f&&(s&&"_self"!==s||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)||function(n){var e=(0,u.getLocationOrigin)();return new URL(n,e).origin===e}(t)&&(n.preventDefault(),null==i&&(i=r.indexOf("#")<0),e[o?"replace":"push"](t,r,{shallow:a}).then((function(n){n&&i&&(window.scrollTo(0,0),document.body.focus())})))}var b=function(n){var e=!1!==n.prefetch,t=i.default.useState(),o=r(t,2),a=o[0],u=o[1],s=(0,c.useRouter)(),b=i.default.useMemo((function(){var e=(0,f.resolveHref)(s.pathname,n.href);return{href:e,as:n.as?(0,f.resolveHref)(s.pathname,n.as):e}}),[s.pathname,n.href,n.as]),g=b.href,m=b.as;i.default.useEffect((function(){if(e&&l&&a&&a.tagName&&!d[g+"%"+m])return p(a,(function(){h(s,g,m)}))}),[e,a,g,m,s]);var w=n.children,O=n.replace,y=n.shallow,k=n.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var j=i.Children.only(w),E={ref:function(n){n&&u(n),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(n):"object"===typeof j.ref&&(j.ref.current=n))},onClick:function(n){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(n),n.defaultPrevented||v(n,s,g,m,O,y,k)}};return e&&(E.onMouseEnter=function(n){j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(n),h(s,g,m,{priority:!0})}),!n.passHref&&("a"!==j.type||"href"in j.props)||(E.href=(0,f.addBasePath)(m)),i.default.cloneElement(j,E)};e.default=b},xQut:function(n,e,t){"use strict";var r=t("h4VS"),o=t("wx14"),a=t("zLVn");var i=t("q1tI"),u=t.n(i),c=t("vOnD"),f=t("ufqH"),s=u.a.createElement;function l(){var n=Object(r.a)(["\n  min-width: 8rem;\n  background-color: ",";\n  font-size: 0.9em;\n  color: ",";\n  text-align: center;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  :focus,\n  :hover {\n    background-color: ",";\n  }\n\n  :disabled {\n    cursor: not-allowed;\n    background-color: ",";\n  }\n"]);return l=function(){return n},n}var d=c.d.button(l(),(function(n){return n.theme.colors.brand}),(function(n){return n.theme.colors.white}),(function(n){var e=n.theme;return Object(f.a)(.05,e.colors.brand)}),(function(n){var e=n.theme;return Object(f.b)(.2,e.colors.brand)}));e.a=Object(i.forwardRef)((function(n,e){var t=n.children,r=n.onClick,i=function(n,e){if(null==n)return{};var t,r,o=Object(a.a)(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(n,["children","onClick"]);return(s(d,Object(o.a)({ref:e,onClick:r},i),t))}))},zLVn:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}t.d(e,"a",(function(){return r}))}},[["/EDR",0,1,2,3,4]]]);