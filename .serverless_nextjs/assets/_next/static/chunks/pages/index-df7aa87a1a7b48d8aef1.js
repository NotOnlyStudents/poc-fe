_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"default",(function(){return p}));var r=t("nKUr"),o=t("g4pe"),a=t.n(o),c=t("YFqc"),i=t.n(c),s=t("5M6V"),u=t("Z4Yb"),l=t.n(u),f=t("GOuw"),d=t("AO/9");function p(e){e.allPostsData;return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(a.a,{children:Object(r.jsxs)("title",{children:["Chart - ",s.b]})}),Object(r.jsxs)("section",{className:l.a.headingMd,children:[Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Bread"}),Object(r.jsx)("h3",{children:"$10.00"}),Object(r.jsx)("p",{children:"Quantity: 2"})]})})}),Object(r.jsx)(i.a,{href:"/purchase",children:Object(r.jsx)("a",{children:"Purchase"})})]})]})}f.a.configure({Auth:{region:e.env.USER_POOL_REGION,userPoolId:"eu-central-1_p25eoCGW4",userPoolWebClientId:"66hpug32jqnemqg59bha64pvds",cookieStorage:{domain:"aws-cognito-next-example-app.now.sh",path:"/",expires:7,secure:!1}}}),d.a.configure({oauth:{domain:"nextjs-example-prod.auth.eu-central-1.amazoncognito.com",scope:["email","openid"],redirectSignIn:"https://aws-cognito-next-example-app.now.sh/token",redirectSignOut:"https://aws-cognito-next-example-app.now.sh/",responseType:"token"}})}.call(this,t("8oxB"))},GOuw:function(e,n,t){"use strict";var r=t("fQM2"),o=t("+rSW");t("JIIv"),t("R10A"),o.a.userAgent;n.a=r.a},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,g=e.shallow,b=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var m=a.Children.only(h),x=m&&"object"===typeof m&&m.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),w=r(O,2),y=w[0],_=w[1],E=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);(0,a.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof j?j:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,_,j,n,t]);var M={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,v,g,b,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var I="undefined"!==typeof j?j:t&&t.locale,L=(0,c.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);M.href=L||(0,c.addBasePath)((0,c.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(m,M)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,o=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=t("q1tI"),c=o(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}},[["/EDR",1,3,5,0,4,6]]]);