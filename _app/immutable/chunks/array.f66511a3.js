var Oe=Object.defineProperty;var Ee=(l,e,n)=>e in l?Oe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var ce=(l,e,n)=>(Ee(l,typeof e!="symbol"?e+"":e,n),n);import{s as ee,h as Ie,r as J,o as Be,n as Ae,b as Ue,i as Pe}from"./scheduler.f5c80806.js";import{S as te,i as ne,r as q,s as w,u as X,c as S,v as x,a as N,d as W,t as G,f as g,w as K,g as v,h as p,j as I,y as E,k as b,z as _,A as B,B as k,E as ge,C as $,x as Q,F as Ve,m as he,n as de,o as me,G as we,e as be}from"./index.f0de9234.js";import{S as H,a as De,p as Le,b as Me,d as ze,e as oe}from"./_commonjsHelpers.c1e8e212.js";function Fe(l){let e,n,t="Event Code",s,i,o,a;return{c(){e=v("div"),n=v("label"),n.textContent=t,s=w(),i=v("input"),this.h()},l(u){e=p(u,"DIV",{});var d=I(e);n=p(d,"LABEL",{for:!0,"data-svelte-h":!0}),E(n)!=="svelte-c93zhd"&&(n.textContent=t),s=S(d),i=p(d,"INPUT",{id:!0,type:!0,placeholder:!0}),d.forEach(g),this.h()},h(){b(n,"for","event"),b(i,"id","event"),b(i,"type","text"),b(i,"placeholder","2023mawne")},m(u,d){N(u,e,d),_(e,n),_(e,s),_(e,i),B(i,l[0].event),o||(a=k(i,"input",l[4]),o=!0)},p(u,d){d&1&&i.value!==u[0].event&&B(i,u[0].event)},d(u){u&&g(e),o=!1,a()}}}function Ce(l){let e,n,t="Set",s,i,o,a;return{c(){e=v("div"),n=v("label"),n.textContent=t,s=w(),i=v("input"),this.h()},l(u){e=p(u,"DIV",{});var d=I(e);n=p(d,"LABEL",{for:!0,"data-svelte-h":!0}),E(n)!=="svelte-1wmixl6"&&(n.textContent=t),s=S(d),i=p(d,"INPUT",{id:!0,type:!0,placeholder:!0,min:!0}),d.forEach(g),this.h()},h(){b(n,"for","set"),b(i,"id","set"),b(i,"type","number"),b(i,"placeholder","1"),b(i,"min","1")},m(u,d){N(u,e,d),_(e,n),_(e,s),_(e,i),B(i,l[0].set),o||(a=k(i,"input",l[6]),o=!0)},p(u,d){d&1&&$(i.value)!==u[0].set&&B(i,u[0].set)},d(u){u&&g(e),o=!1,a()}}}function Qe(l){let e,n,t,s,i="Type",o,a,u,d="Qualification",f,r="Quarterfinal",h,y="Semifinal",m,M="Final",z,O,T,c,C="Match",P,D,V,L,F,_e="Previous Match",ue,R,ve="Next Match",re,pe,A=l[0].type!="Qualification"&&Ce(l);return{c(){e=v("div"),n=v("div"),t=v("div"),s=v("label"),s.textContent=i,o=w(),a=v("select"),u=v("option"),u.textContent=d,f=v("option"),f.textContent=r,h=v("option"),h.textContent=y,m=v("option"),m.textContent=M,z=w(),A&&A.c(),O=w(),T=v("div"),c=v("label"),c.textContent=C,P=w(),D=v("input"),V=w(),L=v("div"),F=v("button"),F.textContent=_e,ue=w(),R=v("button"),R.textContent=ve,this.h()},l(U){e=p(U,"DIV",{});var j=I(e);n=p(j,"DIV",{class:!0});var Z=I(n);t=p(Z,"DIV",{});var se=I(t);s=p(se,"LABEL",{for:!0,"data-svelte-h":!0}),E(s)!=="svelte-15475si"&&(s.textContent=i),o=S(se),a=p(se,"SELECT",{id:!0});var le=I(a);u=p(le,"OPTION",{"data-svelte-h":!0}),E(u)!=="svelte-j9rxec"&&(u.textContent=d),f=p(le,"OPTION",{"data-svelte-h":!0}),E(f)!=="svelte-iblccu"&&(f.textContent=r),h=p(le,"OPTION",{"data-svelte-h":!0}),E(h)!=="svelte-1h74wqm"&&(h.textContent=y),m=p(le,"OPTION",{"data-svelte-h":!0}),E(m)!=="svelte-1aomxam"&&(m.textContent=M),le.forEach(g),se.forEach(g),z=S(Z),A&&A.l(Z),O=S(Z),T=p(Z,"DIV",{});var ie=I(T);c=p(ie,"LABEL",{for:!0,"data-svelte-h":!0}),E(c)!=="svelte-odx92s"&&(c.textContent=C),P=S(ie),D=p(ie,"INPUT",{id:!0,type:!0,placeholder:!0,min:!0}),ie.forEach(g),Z.forEach(g),j.forEach(g),V=S(U),L=p(U,"DIV",{class:!0});var ae=I(L);F=p(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),E(F)!=="svelte-14efff9"&&(F.textContent=_e),ue=S(ae),R=p(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),E(R)!=="svelte-w3g125"&&(R.textContent=ve),ae.forEach(g),this.h()},h(){b(s,"for","type"),u.__value="Qualification",B(u,u.__value),f.__value="Quarterfinal",B(f,f.__value),h.__value="Semifinal",B(h,h.__value),m.__value="Final",B(m,m.__value),b(a,"id","type"),l[0].type===void 0&&Ie(()=>l[5].call(a)),b(c,"for","match"),b(D,"id","match"),b(D,"type","number"),b(D,"placeholder","1"),b(D,"min","1"),b(n,"class","split"),b(F,"class","active"),b(R,"class","active"),b(L,"class","split")},m(U,j){N(U,e,j),_(e,n),_(n,t),_(t,s),_(t,o),_(t,a),_(a,u),_(a,f),_(a,h),_(a,m),ge(a,l[0].type,!0),_(n,z),A&&A.m(n,null),_(n,O),_(n,T),_(T,c),_(T,P),_(T,D),B(D,l[0].match),N(U,V,j),N(U,L,j),_(L,F),_(L,ue),_(L,R),re||(pe=[k(a,"change",l[5]),k(D,"input",l[7]),k(F,"click",l[2]),k(R,"click",l[3])],re=!0)},p(U,j){j&1&&ge(a,U[0].type),U[0].type!="Qualification"?A?A.p(U,j):(A=Ce(U),A.c(),A.m(n,O)):A&&(A.d(1),A=null),j&1&&$(D.value)!==U[0].match&&B(D,U[0].match)},d(U){U&&(g(e),g(V),g(L)),A&&A.d(),re=!1,J(pe)}}}function je(l){let e,n,t="Team",s,i,o,a,u,d="Red Alliance",f,r,h="Blue Alliance",y,m,M="Manual Override",z,O;return{c(){e=v("div"),n=v("label"),n.textContent=t,s=w(),i=v("input"),o=w(),a=v("div"),u=v("button"),u.textContent=d,f=w(),r=v("button"),r.textContent=h,y=w(),m=v("button"),m.textContent=M,this.h()},l(T){e=p(T,"DIV",{});var c=I(e);n=p(c,"LABEL",{for:!0,"data-svelte-h":!0}),E(n)!=="svelte-vt8iuu"&&(n.textContent=t),s=S(c),i=p(c,"INPUT",{id:!0,type:!0,placeholder:!0}),c.forEach(g),o=S(T),a=p(T,"DIV",{class:!0});var C=I(a);u=p(C,"BUTTON",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-1c4v2v4"&&(u.textContent=d),f=S(C),r=p(C,"BUTTON",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-1ymxjcw"&&(r.textContent=h),C.forEach(g),y=S(T),m=p(T,"BUTTON",{"data-svelte-h":!0}),E(m)!=="svelte-k8ivvz"&&(m.textContent=M),this.h()},h(){b(n,"for","team"),b(i,"id","team"),b(i,"type","number"),b(i,"placeholder","5112"),b(u,"class","svelte-1hd4edv"),Q(u,"red",l[0].alliance=="Red"),b(r,"class","svelte-1hd4edv"),Q(r,"blue",l[0].alliance=="Blue"),b(a,"class","split"),Q(m,"active",l[1])},m(T,c){N(T,e,c),_(e,n),_(e,s),_(e,i),B(i,l[0].team),N(T,o,c),N(T,a,c),_(a,u),_(a,f),_(a,r),N(T,y,c),N(T,m,c),z||(O=[k(i,"input",l[8]),k(u,"click",l[9]),k(r,"click",l[10]),k(m,"click",l[11])],z=!0)},p(T,c){c&1&&$(i.value)!==T[0].team&&B(i,T[0].team),c&1&&Q(u,"red",T[0].alliance=="Red"),c&1&&Q(r,"blue",T[0].alliance=="Blue"),c&2&&Q(m,"active",T[1])},d(T){T&&(g(e),g(o),g(a),g(y),g(m)),z=!1,J(O)}}}function Re(l){let e,n,t,s,i,o;return e=new H({props:{name:"Select Event",$$slots:{default:[Fe]},$$scope:{ctx:l}}}),t=new H({props:{name:"Select Match",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),i=new H({props:{name:"Select Team",$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment),n=w(),q(t.$$.fragment),s=w(),q(i.$$.fragment)},l(a){X(e.$$.fragment,a),n=S(a),X(t.$$.fragment,a),s=S(a),X(i.$$.fragment,a)},m(a,u){x(e,a,u),N(a,n,u),x(t,a,u),N(a,s,u),x(i,a,u),o=!0},p(a,[u]){const d={};u&16385&&(d.$$scope={dirty:u,ctx:a}),e.$set(d);const f={};u&16385&&(f.$$scope={dirty:u,ctx:a}),t.$set(f);const r={};u&16387&&(r.$$scope={dirty:u,ctx:a}),i.$set(r)},i(a){o||(W(e.$$.fragment,a),W(t.$$.fragment,a),W(i.$$.fragment,a),o=!0)},o(a){G(e.$$.fragment,a),G(t.$$.fragment,a),G(i.$$.fragment,a),o=!1},d(a){a&&(g(n),g(s)),K(e,a),K(t,a),K(i,a)}}}function Ye(l,e,n){let{participant:t={}}=e,s=!1;function i(O,T){if(T)return O;const c=O.event,C=De(Le(O)),P=Me(c,C);return P==null||(O.team=P.team,O.alliance=ze(P.alliance)),O}function o(){n(0,t=i(t,s))}function a(){t.match>1&&n(0,t.match-=1,t),n(0,t=i(t,s))}function u(){n(0,t.match+=1,t),n(0,t=i(t,s))}function d(){t.event=this.value,n(0,t)}function f(){t.type=Ve(this),n(0,t)}function r(){t.set=$(this.value),n(0,t)}function h(){t.match=$(this.value),n(0,t)}function y(){t.team=$(this.value),n(0,t)}const m=()=>n(0,t.alliance="Red",t),M=()=>n(0,t.alliance="Blue",t),z=()=>n(1,s=!s);return l.$$set=O=>{"participant"in O&&n(0,t=O.participant)},l.$$.update=()=>{l.$$.dirty&1&&o(),l.$$.dirty&2&&o()},[t,s,a,u,d,f,r,h,y,m,M,z]}class ct extends te{constructor(e){super(),ne(this,e,Ye,Re,ee,{participant:0})}}function fe(l){return{width:l.width,height:l.height}}const Se=",";class Y{constructor(e,n){ce(this,"x");ce(this,"y");this.x=e,this.y=n}inverse(){return new Y(-this.x,-this.y)}offset(e){const n=this.x-e.x,t=this.y-e.y;return new Y(n,t)}scale(e){const n=this.x*e.width,t=this.y*e.height;return new Y(n,t)}normalize(e){const n=this.x/e.width,t=this.y/e.height;return new Y(n,t)}toString(){return`${this.x.toFixed(4)}${Se}${this.y.toFixed(4)}`}}function qe(l){return new Y(l.offsetX,l.offsetY)}function ft(l){let e=l.split(Se),n=Number(e[0]),t=Number(e[1]);return new Y(n,t)}function Xe(l){let e,n,t,s="Undo",i,o;return{c(){e=v("canvas"),n=w(),t=v("button"),t.textContent=s,this.h()},l(a){e=p(a,"CANVAS",{}),I(e).forEach(g),n=S(a),t=p(a,"BUTTON",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1uo7lcx"&&(t.textContent=s),this.h()},h(){b(t,"class","primary")},m(a,u){N(a,e,u),l[10](e),N(a,n,u),N(a,t,u),i||(o=[k(e,"click",l[4]),k(e,"touchstart",l[5]),k(e,"touchmove",l[5]),k(t,"click",l[11])],i=!0)},p:Ae,d(a){a&&(g(e),g(n),g(t)),l[10](null),i=!1,J(o)}}}function xe(l){let e,n;return e=new H({props:{name:l[1],help:l[2],$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.name=t[1]),s&4&&(i.help=t[2]),s&65545&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function We(l,e,n){let{name:t}=e,{help:s}=e,{field:i}=e,{points:o=[]}=e,{point:a=null}=e,{single:u=!1}=e,{drawStyle:d="dot"}=e,f=null;Be(()=>{f=new Image,f.src=i,f.onload=()=>{f&&(n(3,r.width=r.offsetWidth,r),n(3,r.height=r.offsetWidth*(f.height/f.width),r),M())}});let r;function h(c){const C=c.normalize(fe(r));u?n(0,o=[C]):n(0,o=[...o,C]),n(6,a=o[0]??null)}function y(c){const C=qe(c);h(C)}function m(c){const C=r.offsetLeft,P=r.offsetTop,D=c.touches[0].clientX-C,V=c.touches[0].clientY-P,L=new Y(D,V);h(L)}function M(){if(!r||!f)return;const c=r.getContext("2d");if(c){c.clearRect(0,0,r.width,r.height),c.drawImage(f,0,0,r.width,r.height),a&&z(a.scale(fe(r)),c);for(let C of o){const P=C.scale(fe(r));z(P,c)}}}function z(c,C){const P="#fafafa";switch(d){case"dot":C.fillStyle=P,C.beginPath(),C.arc(c.x,c.y,12,0,2*Math.PI,!1),C.fill();break;case"cross":C.strokeStyle=P,C.lineWidth=4;const V=.5*12*Math.sqrt(2);C.beginPath(),C.moveTo(c.x-V,c.y-V),C.lineTo(c.x+V,c.y+V),C.moveTo(c.x+V,c.y-V),C.lineTo(c.x-V,c.y+V),C.stroke();break;case"triangle":C.fillStyle=P;const L=.5*Math.sqrt(3)*12,F=.5*12;C.beginPath(),C.moveTo(c.x,c.y-2*F),C.lineTo(c.x-L,c.y+F),C.lineTo(c.x+L,c.y+F),C.fill()}}function O(c){Ue[c?"unshift":"push"](()=>{r=c,n(3,r)})}const T=c=>n(0,o=o.slice(0,o.length-1));return l.$$set=c=>{"name"in c&&n(1,t=c.name),"help"in c&&n(2,s=c.help),"field"in c&&n(7,i=c.field),"points"in c&&n(0,o=c.points),"point"in c&&n(6,a=c.point),"single"in c&&n(8,u=c.single),"drawStyle"in c&&n(9,d=c.drawStyle)},l.$$.update=()=>{l.$$.dirty&65,l.$$.dirty&1&&o&&M()},[o,t,s,r,y,m,a,i,u,d,O,T]}class ht extends te{constructor(e){super(),ne(this,e,We,xe,ee,{name:1,help:2,field:7,points:0,point:6,single:8,drawStyle:9})}}function Ge(l){let e,n,t,s,i,o,a,u;return{c(){e=v("div"),n=v("button"),t=he(l[3]),s=w(),i=v("button"),o=he(l[4]),this.h()},l(d){e=p(d,"DIV",{class:!0});var f=I(e);n=p(f,"BUTTON",{});var r=I(n);t=de(r,l[3]),r.forEach(g),s=S(f),i=p(f,"BUTTON",{});var h=I(i);o=de(h,l[4]),h.forEach(g),f.forEach(g),this.h()},h(){Q(n,"active",l[0]===!1),Q(i,"active",l[0]),b(e,"class","split")},m(d,f){N(d,e,f),_(e,n),_(n,t),_(e,s),_(e,i),_(i,o),a||(u=[k(n,"click",l[5]),k(i,"click",l[6])],a=!0)},p(d,f){f&8&&me(t,d[3]),f&1&&Q(n,"active",d[0]===!1),f&16&&me(o,d[4]),f&1&&Q(i,"active",d[0])},d(d){d&&g(e),a=!1,J(u)}}}function Ke(l){let e,n;return e=new H({props:{name:l[1],help:l[2],$$slots:{default:[Ge]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.name=t[1]),s&4&&(i.help=t[2]),s&153&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function He(l,e,n){let{name:t}=e,{help:s}=e,{value:i=!1}=e,{negative:o="No"}=e,{positive:a="Yes"}=e;const u=()=>n(0,i=!1),d=()=>n(0,i=!0);return l.$$set=f=>{"name"in f&&n(1,t=f.name),"help"in f&&n(2,s=f.help),"value"in f&&n(0,i=f.value),"negative"in f&&n(3,o=f.negative),"positive"in f&&n(4,a=f.positive)},[i,t,s,o,a,u,d]}class dt extends te{constructor(e){super(),ne(this,e,He,Ke,ee,{name:1,help:2,value:0,negative:3,positive:4})}}function Te(l,e,n){const t=l.slice();return t[5]=e[n],t}function ye(l){let e,n=l[5]+"",t,s,i;function o(){return l[4](l[5])}return{c(){e=v("button"),t=he(n),this.h()},l(a){e=p(a,"BUTTON",{});var u=I(e);t=de(u,n),u.forEach(g),this.h()},h(){Q(e,"active",l[0]==l[5])},m(a,u){N(a,e,u),_(e,t),s||(i=k(e,"click",o),s=!0)},p(a,u){l=a,u&8&&n!==(n=l[5]+"")&&me(t,n),u&9&&Q(e,"active",l[0]==l[5])},d(a){a&&g(e),s=!1,i()}}}function Je(l){let e,n=oe(l[3]),t=[];for(let s=0;s<n.length;s+=1)t[s]=ye(Te(l,n,s));return{c(){e=v("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var i=I(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(g),this.h()},h(){b(e,"class","split")},m(s,i){N(s,e,i);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(s,i){if(i&9){n=oe(s[3]);let o;for(o=0;o<n.length;o+=1){const a=Te(s,n,o);t[o]?t[o].p(a,i):(t[o]=ye(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(s){s&&g(e),we(t,s)}}}function Ze(l){let e,n;return e=new H({props:{name:l[1],help:l[2],$$slots:{default:[Je]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.name=t[1]),s&4&&(i.help=t[2]),s&265&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function $e(l,e,n){let{name:t}=e,{help:s}=e,{options:i}=e,{selected:o=""}=e;const a=u=>n(0,o=o!=u?u:"");return l.$$set=u=>{"name"in u&&n(1,t=u.name),"help"in u&&n(2,s=u.help),"options"in u&&n(3,i=u.options),"selected"in u&&n(0,o=u.selected)},[o,t,s,i,a]}class mt extends te{constructor(e){super(),ne(this,e,$e,Ze,ee,{name:1,help:2,options:3,selected:0})}}function et(l){let e,n,t="Scouter Name",s,i,o,a,u="Generate QR Code",d,f;return{c(){e=v("div"),n=v("label"),n.textContent=t,s=w(),i=v("input"),o=w(),a=v("button"),a.textContent=u,this.h()},l(r){e=p(r,"DIV",{});var h=I(e);n=p(h,"LABEL",{for:!0,"data-svelte-h":!0}),E(n)!=="svelte-1dsqkj9"&&(n.textContent=t),s=S(h),i=p(h,"INPUT",{id:!0,type:!0,placeholder:!0}),h.forEach(g),o=S(r),a=p(r,"BUTTON",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-88s059"&&(a.textContent=u),this.h()},h(){b(n,"for","scouter"),b(i,"id","scouter"),b(i,"type","text"),b(i,"placeholder","Scouter Name"),b(a,"class","primary")},m(r,h){N(r,e,h),_(e,n),_(e,s),_(e,i),B(i,l[0]),N(r,o,h),N(r,a,h),d||(f=[k(i,"input",l[2]),k(a,"click",l[1])],d=!0)},p(r,h){h&1&&i.value!==r[0]&&B(i,r[0])},d(r){r&&(g(e),g(o),g(a)),d=!1,J(f)}}}function tt(l){let e,n;return e=new H({props:{name:"Submit",$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),n=!0},p(t,[s]){const i={};s&9&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function nt(l,e,n){let{scouterName:t=""}=e;function s(o){Pe.call(this,l,o)}function i(){t=this.value,n(0,t)}return l.$$set=o=>{"scouterName"in o&&n(0,t=o.scouterName)},[t,s,i]}class _t extends te{constructor(e){super(),ne(this,e,nt,tt,ee,{scouterName:0})}}function Ne(l,e,n){const t=l.slice();return t[1]=e[n],t[7]=e,t[8]=n,t}function ke(l){let e,n,t,s,i="-",o,a,u;function d(){l[5].call(n,l[7],l[8])}function f(...r){return l[6](l[8],...r)}return{c(){e=v("div"),n=v("input"),t=w(),s=v("button"),s.textContent=i,o=w(),this.h()},l(r){e=p(r,"DIV",{class:!0});var h=I(e);n=p(h,"INPUT",{class:!0,type:!0}),t=S(h),s=p(h,"BUTTON",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-ght6ea"&&(s.textContent=i),o=S(h),h.forEach(g),this.h()},h(){b(n,"class","inactive svelte-dz04f9"),b(n,"type","text"),b(s,"class","primary remove"),b(e,"class","svelte-dz04f9")},m(r,h){N(r,e,h),_(e,n),B(n,l[1]),_(e,t),_(e,s),_(e,o),a||(u=[k(n,"input",d),k(s,"click",f)],a=!0)},p(r,h){l=r,h&1&&n.value!==l[1]&&B(n,l[1])},d(r){r&&g(e),a=!1,J(u)}}}function lt(l){let e,n,t,s,i="+",o,a,u,d,f=oe(l[0]),r=[];for(let h=0;h<f.length;h+=1)r[h]=ke(Ne(l,f,h));return{c(){e=v("div"),n=v("input"),t=w(),s=v("button"),s.textContent=i,o=w();for(let h=0;h<r.length;h+=1)r[h].c();a=be(),this.h()},l(h){e=p(h,"DIV",{class:!0});var y=I(e);n=p(y,"INPUT",{type:!0,placeholder:!0}),t=S(y),s=p(y,"BUTTON",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-1rhr61c"&&(s.textContent=i),y.forEach(g),o=S(h);for(let m=0;m<r.length;m+=1)r[m].l(h);a=be(),this.h()},h(){b(n,"type","text"),b(n,"placeholder",""),b(s,"class","primary add"),b(e,"class","svelte-dz04f9")},m(h,y){N(h,e,y),_(e,n),B(n,l[1]),_(e,t),_(e,s),N(h,o,y);for(let m=0;m<r.length;m+=1)r[m]&&r[m].m(h,y);N(h,a,y),u||(d=[k(n,"input",l[4]),k(s,"click",l[2])],u=!0)},p(h,y){if(y&2&&n.value!==h[1]&&B(n,h[1]),y&9){f=oe(h[0]);let m;for(m=0;m<f.length;m+=1){const M=Ne(h,f,m);r[m]?r[m].p(M,y):(r[m]=ke(M),r[m].c(),r[m].m(a.parentNode,a))}for(;m<r.length;m+=1)r[m].d(1);r.length=f.length}},d(h){h&&(g(e),g(o),g(a)),we(r,h),u=!1,J(d)}}}function st(l){let e,n;return e=new H({props:{name:"Notes",$$slots:{default:[lt]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),n=!0},p(t,[s]){const i={};s&515&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function it(l,e,n){let t="",{notes:s=[]}=e;function i(){n(0,s=[...s,t]),n(1,t="")}function o(f){s.splice(f,1),n(0,s)}function a(){t=this.value,n(1,t)}function u(f,r){f[r]=this.value,n(0,s)}const d=(f,r)=>o(f);return l.$$set=f=>{"notes"in f&&n(0,s=f.notes)},[s,t,i,o,a,u,d]}class vt extends te{constructor(e){super(),ne(this,e,it,st,ee,{notes:0})}}function pt(l,e){let n={};for(const[t,s]of e.entries()){const i=`${l}${t}`;n[i]=s}return n}function gt(l,e){const n=Object.keys(e).filter(s=>s.startsWith(l)),t=[];for(l of n){let s=e[l];t.push(s)}return t}export{dt as B,ht as F,vt as N,mt as O,ct as P,_t as S,pt as a,ft as p,gt as s};
