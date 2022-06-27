"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{9175:function(e,t,r){r.d(t,{w:function(){return O}});var n=r(5893),o=r(7294),i=r(1604),a=r(9703);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var c=["className"],s=["placement"],d=["isNumeric"],f=["isNumeric"],v=(0,i.Gp)((function(e,t){var r=(0,i.jC)("Table",e),n=(0,i.Lr)(e),s=n.className,d=u(n,c);return o.createElement(i.Fo,{value:r},o.createElement(i.m$.table,l({role:"table",ref:t,__css:r.table,className:(0,a.cx)("chakra-table",s)},d)))}));a.Ts&&(v.displayName="Table");var p=(0,i.Gp)((function(e,t){var r=e.placement,n=void 0===r?"bottom":r,a=u(e,s),c=(0,i.yK)();return o.createElement(i.m$.caption,l({},a,{ref:t,__css:l({},c.caption,{captionSide:n})}))}));a.Ts&&(p.displayName="TableCaption");var h=(0,i.Gp)((function(e,t){var r=(0,i.yK)();return o.createElement(i.m$.thead,l({},e,{ref:t,__css:r.thead}))})),m=(0,i.Gp)((function(e,t){var r=(0,i.yK)();return o.createElement(i.m$.tbody,l({},e,{ref:t,__css:r.tbody}))})),b=(0,i.Gp)((function(e,t){var r=(0,i.yK)();return o.createElement(i.m$.tfoot,l({},e,{ref:t,__css:r.tfoot}))})),y=(0,i.Gp)((function(e,t){var r=e.isNumeric,n=u(e,d),a=(0,i.yK)();return o.createElement(i.m$.th,l({},n,{ref:t,__css:a.th,"data-is-numeric":r}))})),x=(0,i.Gp)((function(e,t){var r=(0,i.yK)();return o.createElement(i.m$.tr,l({role:"row"},e,{ref:t,__css:r.tr}))})),w=(0,i.Gp)((function(e,t){var r=e.isNumeric,n=u(e,f),a=(0,i.yK)();return o.createElement(i.m$.td,l({role:"gridcell"},n,{ref:t,__css:a.td,"data-is-numeric":r}))})),g=r(8527),j=r(949),k=r(9238);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var t=e.title,r=e.rawTitle,o=e.right;return r?(0,n.jsxs)(g.kC,{w:"full",justify:"space-between",children:[r,o]}):(0,n.jsxs)(g.kC,{w:"full",justify:"space-between",children:[t?(0,n.jsx)(g.X6,{mb:"2",children:t}):(0,n.jsx)("div",{}),o]})};function C(e){var t=e.headerStyle,r=e.keys,o=e.tableProps,i=e.head,a=e.labels;return(0,n.jsx)(x,S({textTransform:"none"===t?"initial":"upper"===t?"uppercase":void 0},i?null===o||void 0===o?void 0:o.trHead:null===o||void 0===o?void 0:o.trFoot,{children:r.map((function(e){var r,i,l=(null===(r=a)||void 0===r?void 0:r[e])||e;return(0,n.jsx)(y,S({},null===o||void 0===o?void 0:o.th,{children:"capitalize"===t?(i=l,i.slice(0,1).toUpperCase()+i.slice(1).toLowerCase()):l}),e)}))}))}var N=function(e,t,r){return(0,i.dQ)("colors",[t,r])["light"===e?0:1]};function O(e){var t=e.keys,r=e.overflow,i=e.headerStyle,a=void 0===i?"upper":i,l=e.data,u=e.mapper,c=e.keyFunc,s=e.showEmpty,d=e.outerProps,f=e.tableProps,p=e.showFooter,y=e.showHeader,_=void 0===y||y,O=e.emptyText,P=e.striped,G=e.widths,$=e.variant,K=e.rawTitle,L=e.right,A=e.rowProps,D=e.title,I=e.isLoading,z=e.labels,F=function(){var e=(0,j.If)(),t=(0,o.useState)(e.colorMode||"light"),r=t[0],n=t[1],i=(0,o.useRef)();return(0,o.useEffect)((function(){var e=document.querySelector("body");if(e){var t=function(){e.classList.contains("chakra-ui-dark")?n("dark"):n("light")};return i.current=new MutationObserver((function(e){var r;(null===(r=e.filter((function(e){return"class"===e.attributeName}))[0])||void 0===r?void 0:r.target)&&t()})),i.current.observe(e,{attributes:!0}),t(),function(){var e;return null===(e=i.current)||void 0===e?void 0:e.disconnect()}}}),[]),r}(),W=N(F,"gray.50","gray.900"),M=N(F,"white","gray.800"),R=function(e,t,r){var n=u[t];if(!0===n){var o=e[t]||null;return function(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}(o,Date)&&(o=o.toDateString()),[o,{}]}if(Array.isArray(n)){var i=T(n,2),a=i[0],l=i[1];return!0===a?[e[t]||null,"function"===typeof l?l(e,r):l]:[a(e,r),"function"===typeof l?l(e,r):l]}return"function"!==typeof n?(console.error("Mapper[".concat(t,"] is not a function")),[null,{}]):[n(e,r)||null,{}]};return(0,n.jsxs)(g.kC,S({flexDir:"column",w:r?"100vw":"full",minW:"full",maxW:"100vw"},d,{children:[(0,n.jsx)(E,{title:D,rawTitle:K,right:L}),(0,n.jsxs)(g.xu,{pos:"relative",w:"full",h:"full",children:[I&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.kC,{w:"full",h:"full",pos:"absolute",top:"0",left:"0",right:"0",bottom:"0",zIndex:"12",align:"center",justify:"center",children:(0,n.jsx)(k.$,{size:"xl"})}),(0,n.jsx)(g.xu,{w:"full",h:"full",opacity:"0.7",bg:M,pos:"absolute",top:"0",left:"0",right:"0",bottom:"0",zIndex:"10"})]}),l.length>0||0===l.length&&s?(0,n.jsxs)(v,S({overflowX:r?"scroll":"hidden"},P?{variant:"simple"}:{variant:$},null===f||void 0===f?void 0:f.table,{children:[_&&(0,n.jsx)(h,S({},null===f||void 0===f?void 0:f.thead,{children:(0,n.jsx)(C,{keys:t,tableProps:f,headerStyle:a,head:!0,labels:z})})),(0,n.jsx)(m,S({},null===f||void 0===f?void 0:f.tbody,{children:l.map((function(e,r){var o=r.toString();return c&&(o="string"===typeof c?e[c]:c(e,r)),(0,n.jsx)(x,S({backgroundColor:P&&r%2===0?W:void 0},null===f||void 0===f?void 0:f.tr,null===A||void 0===A?void 0:A(e,o),{children:t.map((function(t){var i=T(R(e,t,r),2),a=i[0],l=i[1];return(0,n.jsx)(w,S({},null===f||void 0===f?void 0:f.td,{minW:null===G||void 0===G?void 0:G[t],w:null===G||void 0===G?void 0:G[t],maxW:null===G||void 0===G?void 0:G[t]},l,{children:a}),"".concat(o,"-").concat(t))}))}),o)}))})),p&&(0,n.jsx)(b,S({},null===f||void 0===f?void 0:f.tfoot,{children:(0,n.jsx)(C,{keys:t,tableProps:f,headerStyle:a,head:!1,labels:z})}))]})):(0,n.jsx)(g.X6,{size:"sm",children:O||"Sense dades"})]})]}))}},2844:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(5666),o=r.n(n),i=r(5893),a=r(1163),l=r(7294),u=r(8527),c=JSON.parse('{"L":"cf915bb","h":"2022-06-27T16:12:16.819Z"}');function s(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}var d=function(){var e,t,r=(0,a.useRouter)(),n=(t=o().mark((function t(){var i,a,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(e){return fetch(e).then((function(e){return e.json()}))},clearTimeout(e),console.log("Checking for updates..."),t.next=5,i("/info.json?v="+(new Date).getTime());case 5:a=t.sent,console.log(c.h+" vs "+a.date),c.h!==a.date&&(console.log("Update found, reload page!"),l=window.location.pathname+"?reload="+(new Date).getTime(),r.push(l)),e=setTimeout((function(){n()}),1e4);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(e){s(i,n,o,a,l,"next",e)}function l(e){s(i,n,o,a,l,"throw",e)}a(void 0)}))}),d=(0,l.useState)(!1);d[0],d[1];return(0,l.useEffect)((function(){n()}),[]),(0,i.jsx)(u.xu,{w:"100%",borderTop:"1px solid #c0c0c0",pt:"20px",children:(0,i.jsx)(u.xu,{w:"100%",maxW:"62.5rem",mx:"auto",children:(0,i.jsx)(u.xu,{w:"100%",mx:"auto",textAlign:"center",children:(0,i.jsxs)(u.xv,{className:"footerText",children:["(C) Agust\xed - GNU License - Rev. ",c.L," - Build ",c.h]})})})})}},1338:function(e,t,r){var n=r(5893),o=(r(7294),r(8527));t.C=function(e){return(0,n.jsx)(o.xu,{w:"100%",h:[e.mobile?e.mobile:e.desktop,e.tablet?e.tablet:e.desktop,e.desktop],backgroundColor:e.bgcolor?e.bgcolor:"transparent"})}}}]);