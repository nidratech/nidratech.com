_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),i=t("vOnD"),a=t("YFqc"),c=t.n(a),u=t("X/xQ"),s=t("xQut"),l=r.a.createElement,f=Object(i.e)(["0%{background-position:0 0;}100%{background-position:0 199px;}"]),d=i.d.div.withConfig({displayName:"pages__PageTitleContainer",componentId:"sc-1xh3p16-0"})(["display:inline-block;"]),p=i.d.div.withConfig({displayName:"pages__HomeContainer",componentId:"sc-1xh3p16-1"})(["background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:"," 3.5s linear infinite;color:",";padding:10vh 3vw;"],f,(function(e){return e.theme.colors.white})),h=i.d.h1.withConfig({displayName:"pages__PageTitle",componentId:"sc-1xh3p16-2"})(["font-size:2.5em;margin-top:2vh;"]),g=i.d.h1.withConfig({displayName:"pages__PageSubTitle",componentId:"sc-1xh3p16-3"})(["font-size:1.25em;margin-top:5vh;margin-bottom:6vh;line-height:1.5;"]);n.default=function(){return l(p,null,l(d,null,l(h,null,"Web Consulting in Touch with Tomorrow"),l(u.a,null)),l(g,null,"We bring ideas to life and create products that people love. ",l("br",null),"Let us help you make something remarkable."),l(c.a,{href:"/contact",passHref:!0},l(s.a,{type:"button",as:"a"},"Contact")))}},"X/xQ":function(e,n,t){"use strict";var o=t("vOnD");n.a=o.d.div.withConfig({displayName:"HighlightLine",componentId:"sc-19nb6zv-0"})(["border-radius:0.5rem;background-color:",";opacity:0.7;height:0.5em;transition:0.33s all;"],(function(e){return e.theme.colors.brand}))},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("zoAU"),r=t("7KCV");n.__esModule=!0,n.default=void 0;var i,a=r(t("q1tI")),c=t("g/15"),u=t("nOHt"),s=t("elyg");var l=new Map,f=window.IntersectionObserver,d={};var p=function(e,n){var t=i||(f?i=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var n=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}l.delete(e)}):function(){}};function h(e,n,t,o){e.prefetch(n,t,o).catch((function(e){0})),d[n+"%"+t]=!0}function g(e,n,t,o,r,i,a){var u=e.currentTarget,s=u.nodeName,l=u.target;"A"===s&&(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var n=(0,c.getLocationOrigin)();return new URL(e,n).origin===n}(t)&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}var m=function(e){var n=!1!==e.prefetch,t=a.default.useState(),r=o(t,2),i=r[0],c=r[1],l=(0,u.useRouter)(),m=l&&l.pathname||"/",b=a.default.useMemo((function(){var n=(0,s.resolveHref)(m,e.href);return{href:n,as:e.as?(0,s.resolveHref)(m,e.as):n}}),[m,e.href,e.as]),v=b.href,w=b.as;a.default.useEffect((function(){if(n&&f&&i&&i.tagName&&!d[v+"%"+w])return p(i,(function(){h(l,v,w)}))}),[n,i,v,w,l]);var y=e.children,_=e.replace,O=e.shallow,k=e.scroll;"string"===typeof y&&(y=a.default.createElement("a",null,y));var x=a.Children.only(y),E={ref:function(e){e&&c(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||g(e,l,v,w,_,O,k)}};return n&&(E.onMouseEnter=function(e){x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),h(l,v,w,{priority:!0})}),!e.passHref&&("a"!==x.type||"href"in x.props)||(E.href=(0,s.addBasePath)(w)),a.default.cloneElement(x,E)};n.default=m},xQut:function(e,n,t){"use strict";var o=t("wx14"),r=t("zLVn");var i=t("q1tI"),a=t.n(i),c=t("vOnD"),u=t("ufqH"),s=a.a.createElement;var l=c.d.button.withConfig({displayName:"Button__StyledButton",componentId:"ajxmy-0"})(["min-width:8rem;background-color:",";font-size:0.9em;color:",";text-align:center;user-select:none;border:1px solid transparent;padding:0.5rem 1rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:",";}:disabled{cursor:not-allowed;background-color:",";}"],(function(e){return e.theme.colors.brand}),(function(e){return e.theme.colors.white}),(function(e){var n=e.theme;return Object(u.a)(.05,n.colors.brand)}),(function(e){var n=e.theme;return Object(u.b)(.2,n.colors.brand)}));n.a=Object(i.forwardRef)((function(e,n){var t=e.children,i=e.onClick,a=function(e,n){if(null==e)return{};var t,o,i=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["children","onClick"]);return(s(l,Object(o.a)({ref:n,onClick:i},a),t))}))},zLVn:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return o}))}},[["/EDR",0,1,2,3,4]]]);