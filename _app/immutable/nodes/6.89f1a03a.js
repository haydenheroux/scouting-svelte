import{s as k,n as v}from"../chunks/scheduler.cc2b1be1.js";import{S as w,i as q,e as u,a as h,d as i,b as x,t as f,f as g,E as C,r as d,u as S,v as b,w as y,p as N,s as Q,c as B}from"../chunks/index.dcec8585.js";import{e as p}from"../chunks/_commonjsHelpers.48a303f3.js";import{Q as D}from"../chunks/QRCodeDisplay.e6a43f27.js";import{m as E,S as J}from"../chunks/stores.2b7084df.js";import{b as O}from"../chunks/Serialized.34ed9f12.js";function _(l,t,s){const r=l.slice();return r[1]=t[s],r}function P(l){let t,s,r;return t=new D({props:{showable:!0,value:JSON.stringify(l[1])}}),{c(){d(t.$$.fragment),s=Q()},l(e){S(t.$$.fragment,e),s=B(e)},m(e,c){b(t,e,c),h(e,s,c),r=!0},p:v,i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){e&&g(s),y(t,e)}}}function $(l){let t,s;return t=new J({props:{name:O(l[1].participant),$$slots:{default:[P]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(r){S(t.$$.fragment,r)},m(r,e){b(t,r,e),s=!0},p(r,e){const c={};e&16&&(c.$$scope={dirty:e,ctx:r}),t.$set(c)},i(r){s||(i(t.$$.fragment,r),s=!0)},o(r){f(t.$$.fragment,r),s=!1},d(r){y(t,r)}}}function R(l){let t,s,r=p(l[0]),e=[];for(let n=0;n<r.length;n+=1)e[n]=$(_(l,r,n));const c=n=>f(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=u()},l(n){for(let a=0;a<e.length;a+=1)e[a].l(n);t=u()},m(n,a){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,a);h(n,t,a),s=!0},p(n,[a]){if(a&1){r=p(n[0]);let o;for(o=0;o<r.length;o+=1){const m=_(n,r,o);e[o]?(e[o].p(m,a),i(e[o],1)):(e[o]=$(m),e[o].c(),i(e[o],1),e[o].m(t.parentNode,t))}for(N(),o=r.length;o<e.length;o+=1)c(o);x()}},i(n){if(!s){for(let a=0;a<r.length;a+=1)i(e[a]);s=!0}},o(n){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)f(e[a]);s=!1},d(n){n&&g(t),C(e,n)}}}function j(l){return[E.get()]}class K extends w{constructor(t){super(),q(this,t,j,R,k,{})}}export{K as component};