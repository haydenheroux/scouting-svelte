import{s as S,n as k}from"../chunks/scheduler.f5c80806.js";import{S as w,i as C,e as m,a as h,d as i,b as N,t as f,f as g,G as q,r as d,u as b,v,w as y,p as M,s as Q,c as B}from"../chunks/index.f0de9234.js";import{e as p,s as D,S as G}from"../chunks/_commonjsHelpers.db51605f.js";import{a as J,Q as O}from"../chunks/QRCodeDisplay.06f76b81.js";function _(l,t,s){const n=l.slice();return n[1]=t[s],n}function P(l){let t,s,n;return t=new O({props:{showable:!0,value:JSON.stringify(l[1])}}),{c(){d(t.$$.fragment),s=Q()},l(e){b(t.$$.fragment,e),s=B(e)},m(e,c){v(t,e,c),h(e,s,c),n=!0},p:k,i(e){n||(i(t.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),n=!1},d(e){e&&g(s),y(t,e)}}}function $(l){let t,s;return t=new G({props:{name:`${l[1].participant.event} ${J(l[1].participant)} - Team ${l[1].participant.teamNumber}`,$$slots:{default:[P]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(n){b(t.$$.fragment,n)},m(n,e){v(t,n,e),s=!0},p(n,e){const c={};e&16&&(c.$$scope={dirty:e,ctx:n}),t.$set(c)},i(n){s||(i(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){y(t,n)}}}function R(l){let t,s,n=p(l[0]),e=[];for(let a=0;a<n.length;a+=1)e[a]=$(_(l,n,a));const c=a=>f(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=m()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=m()},m(a,o){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,o);h(a,t,o),s=!0},p(a,[o]){if(o&1){n=p(a[0]);let r;for(r=0;r<n.length;r+=1){const u=_(a,n,r);e[r]?(e[r].p(u,o),i(e[r],1)):(e[r]=$(u),e[r].c(),i(e[r],1),e[r].m(t.parentNode,t))}for(M(),r=n.length;r<e.length;r+=1)c(r);N()}},i(a){if(!s){for(let o=0;o<n.length;o+=1)i(e[o]);s=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)f(e[o]);s=!1},d(a){a&&g(t),q(e,a)}}}function T(l){return[D.get()]}class E extends w{constructor(t){super(),C(this,t,T,R,S,{})}}export{E as component};
