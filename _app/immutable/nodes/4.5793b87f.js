import{s as Ue,b as ee,f as te,r as xe}from"../chunks/scheduler.cc2b1be1.js";import{S as Ce,i as Pe,D as ne,g as $,r as J,h as k,j as T,u as M,f as p,k as N,a as z,v as H,d as q,t as V,w as W,s as g,c as b,x as a,z as r,B as E,e as Me,b as et,p as tt}from"../chunks/index.dcec8585.js";import{O as Be,F as nt,B as st,N as lt,S as ot,p as it,a as ct,d as at}from"../chunks/array.baeae234.js";import{P as rt,s as ft}from"../chunks/ParticipantSelector.85f4921b.js";import{S as ut,m as He}from"../chunks/stores.2b7084df.js";import{Q as pt}from"../chunks/QRCodeDisplay.e6a43f27.js";const _t=""+new URL("../assets/2023.157ca517.jpg",import.meta.url).href;function mt(t){let n,l,u,i;function m(f){t[3](f)}let o={name:t[1],help:t[2],options:["Cube","Cone"]};return t[0]!==void 0&&(o.selected=t[0]),l=new Be({props:o}),ee.push(()=>ne(l,"selected",m)),{c(){n=$("div"),J(l.$$.fragment),this.h()},l(f){n=k(f,"DIV",{class:!0});var v=T(n);M(l.$$.fragment,v),v.forEach(p),this.h()},h(){N(n,"class","cube_cone")},m(f,v){z(f,n,v),H(l,n,null),i=!0},p(f,[v]){const O={};v&2&&(O.name=f[1]),v&4&&(O.help=f[2]),!u&&v&1&&(u=!0,O.selected=f[0],te(()=>u=!1)),l.$set(O)},i(f){i||(q(l.$$.fragment,f),i=!0)},o(f){V(l.$$.fragment,f),i=!1},d(f){f&&p(n),W(l)}}}function gt(t,n,l){let{name:u}=n,{help:i}=n,{selected:m}=n;function o(f){m=f,l(0,m)}return t.$$set=f=>{"name"in f&&l(1,u=f.name),"help"in f&&l(2,i=f.help),"selected"in f&&l(0,m=f.selected)},[m,u,i,o]}class bt extends Ce{constructor(n){super(),Pe(this,n,gt,mt,Ue,{name:1,help:2,selected:0})}}function dt(t){let n,l,u,i,m,o,f,v,O,S,X,C,P,R,Z,w,oe,A,F,K,se,B,ie,I,G,Q,le,U,d,j,L,Y,ge,c,be,y,de,x,he,ce,ve,ae,$e,re,ke,fe,Te,ue,Ne,pe,Ee,_e,Oe,me,Se,we;return{c(){n=$("div"),l=$("button"),u=g(),i=$("button"),m=g(),o=$("button"),f=g(),v=$("button"),O=g(),S=$("button"),X=g(),C=$("button"),P=g(),R=$("button"),Z=g(),w=$("button"),oe=g(),A=$("button"),F=g(),K=$("button"),se=g(),B=$("button"),ie=g(),I=$("button"),G=g(),Q=$("button"),le=g(),U=$("button"),d=g(),j=$("button"),L=g(),Y=$("button"),ge=g(),c=$("button"),be=g(),y=$("button"),de=g(),x=$("button"),he=g(),ce=$("button"),ve=g(),ae=$("button"),$e=g(),re=$("button"),ke=g(),fe=$("button"),Te=g(),ue=$("button"),Ne=g(),pe=$("button"),Ee=g(),_e=$("button"),Oe=g(),me=$("button"),this.h()},l(h){n=k(h,"DIV",{class:!0});var s=T(n);l=k(s,"BUTTON",{class:!0}),T(l).forEach(p),u=b(s),i=k(s,"BUTTON",{class:!0}),T(i).forEach(p),m=b(s),o=k(s,"BUTTON",{class:!0}),T(o).forEach(p),f=b(s),v=k(s,"BUTTON",{class:!0}),T(v).forEach(p),O=b(s),S=k(s,"BUTTON",{class:!0}),T(S).forEach(p),X=b(s),C=k(s,"BUTTON",{class:!0}),T(C).forEach(p),P=b(s),R=k(s,"BUTTON",{class:!0}),T(R).forEach(p),Z=b(s),w=k(s,"BUTTON",{class:!0}),T(w).forEach(p),oe=b(s),A=k(s,"BUTTON",{class:!0}),T(A).forEach(p),F=b(s),K=k(s,"BUTTON",{class:!0}),T(K).forEach(p),se=b(s),B=k(s,"BUTTON",{class:!0}),T(B).forEach(p),ie=b(s),I=k(s,"BUTTON",{class:!0}),T(I).forEach(p),G=b(s),Q=k(s,"BUTTON",{class:!0}),T(Q).forEach(p),le=b(s),U=k(s,"BUTTON",{class:!0}),T(U).forEach(p),d=b(s),j=k(s,"BUTTON",{class:!0}),T(j).forEach(p),L=b(s),Y=k(s,"BUTTON",{class:!0}),T(Y).forEach(p),ge=b(s),c=k(s,"BUTTON",{class:!0}),T(c).forEach(p),be=b(s),y=k(s,"BUTTON",{class:!0}),T(y).forEach(p),de=b(s),x=k(s,"BUTTON",{class:!0}),T(x).forEach(p),he=b(s),ce=k(s,"BUTTON",{class:!0}),T(ce).forEach(p),ve=b(s),ae=k(s,"BUTTON",{class:!0}),T(ae).forEach(p),$e=b(s),re=k(s,"BUTTON",{class:!0}),T(re).forEach(p),ke=b(s),fe=k(s,"BUTTON",{class:!0}),T(fe).forEach(p),Te=b(s),ue=k(s,"BUTTON",{class:!0}),T(ue).forEach(p),Ne=b(s),pe=k(s,"BUTTON",{class:!0}),T(pe).forEach(p),Ee=b(s),_e=k(s,"BUTTON",{class:!0}),T(_e).forEach(p),Oe=b(s),me=k(s,"BUTTON",{class:!0}),T(me).forEach(p),s.forEach(p),this.h()},h(){N(l,"class","cone svelte-1sciopn"),a(l,"active",t[0][0][0]),N(i,"class","cube svelte-1sciopn"),a(i,"active",t[0][0][1]),N(o,"class","cone svelte-1sciopn"),a(o,"active",t[0][0][2]),N(v,"class","cone svelte-1sciopn"),a(v,"active",t[0][0][3]),N(S,"class","cube svelte-1sciopn"),a(S,"active",t[0][0][4]),N(C,"class","cone svelte-1sciopn"),a(C,"active",t[0][0][5]),N(R,"class","cone svelte-1sciopn"),a(R,"active",t[0][0][6]),N(w,"class","cube svelte-1sciopn"),a(w,"active",t[0][0][7]),N(A,"class","cone svelte-1sciopn"),a(A,"active",t[0][0][8]),N(K,"class","cone svelte-1sciopn"),a(K,"active",t[0][1][0]),N(B,"class","cube svelte-1sciopn"),a(B,"active",t[0][1][1]),N(I,"class","cone svelte-1sciopn"),a(I,"active",t[0][1][2]),N(Q,"class","cone svelte-1sciopn"),a(Q,"active",t[0][1][3]),N(U,"class","cube svelte-1sciopn"),a(U,"active",t[0][1][4]),N(j,"class","cone svelte-1sciopn"),a(j,"active",t[0][1][5]),N(Y,"class","cone svelte-1sciopn"),a(Y,"active",t[0][1][6]),N(c,"class","cube svelte-1sciopn"),a(c,"active",t[0][1][7]),N(y,"class","cone svelte-1sciopn"),a(y,"active",t[0][1][8]),N(x,"class","floor svelte-1sciopn"),a(x,"active",t[0][2][0]),N(ce,"class","floor svelte-1sciopn"),a(ce,"active",t[0][2][1]),N(ae,"class","floor svelte-1sciopn"),a(ae,"active",t[0][2][2]),N(re,"class","floor svelte-1sciopn"),a(re,"active",t[0][2][3]),N(fe,"class","floor svelte-1sciopn"),a(fe,"active",t[0][2][4]),N(ue,"class","floor svelte-1sciopn"),a(ue,"active",t[0][2][5]),N(pe,"class","floor svelte-1sciopn"),a(pe,"active",t[0][2][6]),N(_e,"class","floor svelte-1sciopn"),a(_e,"active",t[0][2][7]),N(me,"class","floor svelte-1sciopn"),a(me,"active",t[0][2][8]),N(n,"class","grid svelte-1sciopn")},m(h,s){z(h,n,s),r(n,l),r(n,u),r(n,i),r(n,m),r(n,o),r(n,f),r(n,v),r(n,O),r(n,S),r(n,X),r(n,C),r(n,P),r(n,R),r(n,Z),r(n,w),r(n,oe),r(n,A),r(n,F),r(n,K),r(n,se),r(n,B),r(n,ie),r(n,I),r(n,G),r(n,Q),r(n,le),r(n,U),r(n,d),r(n,j),r(n,L),r(n,Y),r(n,ge),r(n,c),r(n,be),r(n,y),r(n,de),r(n,x),r(n,he),r(n,ce),r(n,ve),r(n,ae),r(n,$e),r(n,re),r(n,ke),r(n,fe),r(n,Te),r(n,ue),r(n,Ne),r(n,pe),r(n,Ee),r(n,_e),r(n,Oe),r(n,me),Se||(we=[E(l,"click",t[4]),E(i,"click",t[5]),E(o,"click",t[6]),E(v,"click",t[7]),E(S,"click",t[8]),E(C,"click",t[9]),E(R,"click",t[10]),E(w,"click",t[11]),E(A,"click",t[12]),E(K,"click",t[13]),E(B,"click",t[14]),E(I,"click",t[15]),E(Q,"click",t[16]),E(U,"click",t[17]),E(j,"click",t[18]),E(Y,"click",t[19]),E(c,"click",t[20]),E(y,"click",t[21]),E(x,"click",t[22]),E(ce,"click",t[23]),E(ae,"click",t[24]),E(re,"click",t[25]),E(fe,"click",t[26]),E(ue,"click",t[27]),E(pe,"click",t[28]),E(_e,"click",t[29]),E(me,"click",t[30])],Se=!0)},p(h,s){s[0]&1&&a(l,"active",h[0][0][0]),s[0]&1&&a(i,"active",h[0][0][1]),s[0]&1&&a(o,"active",h[0][0][2]),s[0]&1&&a(v,"active",h[0][0][3]),s[0]&1&&a(S,"active",h[0][0][4]),s[0]&1&&a(C,"active",h[0][0][5]),s[0]&1&&a(R,"active",h[0][0][6]),s[0]&1&&a(w,"active",h[0][0][7]),s[0]&1&&a(A,"active",h[0][0][8]),s[0]&1&&a(K,"active",h[0][1][0]),s[0]&1&&a(B,"active",h[0][1][1]),s[0]&1&&a(I,"active",h[0][1][2]),s[0]&1&&a(Q,"active",h[0][1][3]),s[0]&1&&a(U,"active",h[0][1][4]),s[0]&1&&a(j,"active",h[0][1][5]),s[0]&1&&a(Y,"active",h[0][1][6]),s[0]&1&&a(c,"active",h[0][1][7]),s[0]&1&&a(y,"active",h[0][1][8]),s[0]&1&&a(x,"active",h[0][2][0]),s[0]&1&&a(ce,"active",h[0][2][1]),s[0]&1&&a(ae,"active",h[0][2][2]),s[0]&1&&a(re,"active",h[0][2][3]),s[0]&1&&a(fe,"active",h[0][2][4]),s[0]&1&&a(ue,"active",h[0][2][5]),s[0]&1&&a(pe,"active",h[0][2][6]),s[0]&1&&a(_e,"active",h[0][2][7]),s[0]&1&&a(me,"active",h[0][2][8])},d(h){h&&p(n),Se=!1,xe(we)}}}function ht(t){let n,l;return n=new ut({props:{name:t[1],help:t[2],$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){J(n.$$.fragment)},l(u){M(n.$$.fragment,u)},m(u,i){H(n,u,i),l=!0},p(u,i){const m={};i[0]&2&&(m.name=u[1]),i[0]&4&&(m.help=u[2]),i[0]&1|i[1]&1&&(m.$$scope={dirty:i,ctx:u}),n.$set(m)},i(u){l||(q(n.$$.fragment,u),l=!0)},o(u){V(n.$$.fragment,u),l=!1},d(u){W(n,u)}}}function vt(t,n,l){let{name:u}=n,{help:i}=n,{grid:m=[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]]}=n;function o(c,be){l(0,m[c][be]=!m[c][be],m)}const f=c=>o(0,0),v=c=>o(0,1),O=c=>o(0,2),S=c=>o(0,3),X=c=>o(0,4),C=c=>o(0,5),P=c=>o(0,6),R=c=>o(0,7),Z=c=>o(0,8),w=c=>o(1,0),oe=c=>o(1,1),A=c=>o(1,2),F=c=>o(1,3),K=c=>o(1,4),se=c=>o(1,5),B=c=>o(1,6),ie=c=>o(1,7),I=c=>o(1,8),G=c=>o(2,0),Q=c=>o(2,1),le=c=>o(2,2),U=c=>o(2,3),d=c=>o(2,4),j=c=>o(2,5),L=c=>o(2,6),Y=c=>o(2,7),ge=c=>o(2,8);return t.$$set=c=>{"name"in c&&l(1,u=c.name),"help"in c&&l(2,i=c.help),"grid"in c&&l(0,m=c.grid)},[m,u,i,o,f,v,O,S,X,C,P,R,Z,w,oe,A,F,K,se,B,ie,I,G,Q,le,U,d,j,L,Y,ge]}class We extends Ce{constructor(n){super(),Pe(this,n,vt,ht,Ue,{name:1,help:2,grid:0},null,[-1,-1])}}function Xe(t,n){let l={},u=0;const i=n[0];for(const[f,v]of i.entries())if(v){const O=`${t}${u}`;l[O]=`top${f}`,u++}const m=n[1];for(const[f,v]of m.entries())if(v){const O=`${t}${u}`;l[O]=`middle${f}`,u++}const o=n[2];for(const[f,v]of o.entries())if(v){const O=`${t}${u}`;l[O]=`bottom${f}`,u++}return l}function Ye(t){let n,l,u;return l=new pt({props:{value:t[12]}}),{c(){n=$("section"),J(l.$$.fragment)},l(i){n=k(i,"SECTION",{});var m=T(n);M(l.$$.fragment,m),m.forEach(p)},m(i,m){z(i,n,m),H(l,n,null),u=!0},p(i,m){const o={};m&4096&&(o.value=i[12]),l.$set(o)},i(i){u||(q(l.$$.fragment,i),u=!0)},o(i){V(l.$$.fragment,i),u=!1},d(i){i&&p(n),W(l)}}}function $t(t){let n,l,u,i,m,o,f,v,O,S,X,C,P,R,Z,w,oe,A,F,K,se,B,ie,I,G,Q,le,U,d,j,L,Y,ge,c,be,y,de,x;function he(e){t[14](e)}let ce={};t[0]!==void 0&&(ce.participant=t[0]),n=new rt({props:ce}),ee.push(()=>ne(n,"participant",he));function ve(e){t[15](e)}let ae={field:_t,name:"Starting Position",help:"Place where the robot starts the match.",single:!0};t[1]!==void 0&&(ae.points=t[1]),i=new nt({props:ae}),ee.push(()=>ne(i,"points",ve));function $e(e){t[16](e)}let re={name:"Preloaded Game Piece",help:"Game piece the robot stats the match with."};t[2]!==void 0&&(re.selected=t[2]),f=new bt({props:re}),ee.push(()=>ne(f,"selected",$e));function ke(e){t[17](e)}let fe={name:"Mobility",help:"The robot fully leaves the community during auto."};t[3]!==void 0&&(fe.value=t[3]),S=new st({props:fe}),ee.push(()=>ne(S,"value",ke));function Te(e){t[18](e)}let ue={name:"Auto Scores",help:"Nodes where the robot scores during auto."};t[4]!==void 0&&(ue.grid=t[4]),P=new We({props:ue}),ee.push(()=>ne(P,"grid",Te));function Ne(e){t[19](e)}let pe={name:"Auto Charge Station",help:"Interaction between the robot and the charge station during auto.",options:["None","Attempted","Dock","Engage"]};t[5]!==void 0&&(pe.selected=t[5]),w=new Be({props:pe}),ee.push(()=>ne(w,"selected",Ne));function Ee(e){t[20](e)}let _e={name:"Substation Preference",help:"The substation the robot most frequently uses during teleop.",options:["Single Substation","Double Substation"]};t[6]!==void 0&&(_e.selected=t[6]),F=new Be({props:_e}),ee.push(()=>ne(F,"selected",Ee));function Oe(e){t[21](e)}let me={name:"Teleop Scores",help:"Nodes where the robot scores during teleop."};t[7]!==void 0&&(me.grid=t[7]),B=new We({props:me}),ee.push(()=>ne(B,"grid",Oe));function Se(e){t[22](e)}let we={name:"Endgame Charge Station",help:"Interaction between the robot and the charge station during endgame.",options:["None","Attempted","Dock","Engage"]};t[8]!==void 0&&(we.selected=t[8]),G=new Be({props:we}),ee.push(()=>ne(G,"selected",Se));function h(e){t[23](e)}let s={name:"Defense",options:["None","Attempted","Effective","Very Effective"],help:"Quality of defense played.<br/>Effective defense prevents a score.<br/>Very effective defense prevents multiple scores."};t[9]!==void 0&&(s.selected=t[9]),U=new Be({props:s}),ee.push(()=>ne(U,"selected",h));function Ze(e){t[24](e)}let De={};t[10]!==void 0&&(De.notes=t[10]),L=new lt({props:De}),ee.push(()=>ne(L,"notes",Ze));function ye(e){t[25](e)}let Re={};t[11]!==void 0&&(Re.scouterName=t[11]),c=new ot({props:Re}),ee.push(()=>ne(c,"scouterName",ye)),c.$on("click",t[13]);let D=t[12].length>0&&Ye(t);return{c(){J(n.$$.fragment),u=g(),J(i.$$.fragment),o=g(),J(f.$$.fragment),O=g(),J(S.$$.fragment),C=g(),J(P.$$.fragment),Z=g(),J(w.$$.fragment),A=g(),J(F.$$.fragment),se=g(),J(B.$$.fragment),I=g(),J(G.$$.fragment),le=g(),J(U.$$.fragment),j=g(),J(L.$$.fragment),ge=g(),J(c.$$.fragment),y=g(),D&&D.c(),de=Me()},l(e){M(n.$$.fragment,e),u=b(e),M(i.$$.fragment,e),o=b(e),M(f.$$.fragment,e),O=b(e),M(S.$$.fragment,e),C=b(e),M(P.$$.fragment,e),Z=b(e),M(w.$$.fragment,e),A=b(e),M(F.$$.fragment,e),se=b(e),M(B.$$.fragment,e),I=b(e),M(G.$$.fragment,e),le=b(e),M(U.$$.fragment,e),j=b(e),M(L.$$.fragment,e),ge=b(e),M(c.$$.fragment,e),y=b(e),D&&D.l(e),de=Me()},m(e,_){H(n,e,_),z(e,u,_),H(i,e,_),z(e,o,_),H(f,e,_),z(e,O,_),H(S,e,_),z(e,C,_),H(P,e,_),z(e,Z,_),H(w,e,_),z(e,A,_),H(F,e,_),z(e,se,_),H(B,e,_),z(e,I,_),H(G,e,_),z(e,le,_),H(U,e,_),z(e,j,_),H(L,e,_),z(e,ge,_),H(c,e,_),z(e,y,_),D&&D.m(e,_),z(e,de,_),x=!0},p(e,[_]){const je={};!l&&_&1&&(l=!0,je.participant=e[0],te(()=>l=!1)),n.$set(je);const qe={};!m&&_&2&&(m=!0,qe.points=e[1],te(()=>m=!1)),i.$set(qe);const Ae={};!v&&_&4&&(v=!0,Ae.selected=e[2],te(()=>v=!1)),f.$set(Ae);const Fe={};!X&&_&8&&(X=!0,Fe.value=e[3],te(()=>X=!1)),S.$set(Fe);const Ie={};!R&&_&16&&(R=!0,Ie.grid=e[4],te(()=>R=!1)),P.$set(Ie);const Ge={};!oe&&_&32&&(oe=!0,Ge.selected=e[5],te(()=>oe=!1)),w.$set(Ge);const Ve={};!K&&_&64&&(K=!0,Ve.selected=e[6],te(()=>K=!1)),F.$set(Ve);const Ke={};!ie&&_&128&&(ie=!0,Ke.grid=e[7],te(()=>ie=!1)),B.$set(Ke);const Qe={};!Q&&_&256&&(Q=!0,Qe.selected=e[8],te(()=>Q=!1)),G.$set(Qe);const ze={};!d&&_&512&&(d=!0,ze.selected=e[9],te(()=>d=!1)),U.$set(ze);const Le={};!Y&&_&1024&&(Y=!0,Le.notes=e[10],te(()=>Y=!1)),L.$set(Le);const Je={};!be&&_&2048&&(be=!0,Je.scouterName=e[11],te(()=>be=!1)),c.$set(Je),e[12].length>0?D?(D.p(e,_),_&4096&&q(D,1)):(D=Ye(e),D.c(),q(D,1),D.m(de.parentNode,de)):D&&(tt(),V(D,1,1,()=>{D=null}),et())},i(e){x||(q(n.$$.fragment,e),q(i.$$.fragment,e),q(f.$$.fragment,e),q(S.$$.fragment,e),q(P.$$.fragment,e),q(w.$$.fragment,e),q(F.$$.fragment,e),q(B.$$.fragment,e),q(G.$$.fragment,e),q(U.$$.fragment,e),q(L.$$.fragment,e),q(c.$$.fragment,e),q(D),x=!0)},o(e){V(n.$$.fragment,e),V(i.$$.fragment,e),V(f.$$.fragment,e),V(S.$$.fragment,e),V(P.$$.fragment,e),V(w.$$.fragment,e),V(F.$$.fragment,e),V(B.$$.fragment,e),V(G.$$.fragment,e),V(U.$$.fragment,e),V(L.$$.fragment,e),V(c.$$.fragment,e),V(D),x=!1},d(e){e&&(p(u),p(o),p(O),p(C),p(Z),p(A),p(se),p(I),p(le),p(j),p(ge),p(y),p(de)),W(n,e),W(i,e),W(f,e),W(S,e),W(P,e),W(w,e),W(F,e),W(B,e),W(G,e),W(U,e),W(L,e),W(c,e),D&&D.d(e)}}}function kt(t,n,l){let u,i,m,o,f,v,O,S,X,C,P,R,Z="";function w(){const d={startingPoint:it(i[0]),preload:m,mobility:o.toString(),...Xe("autoScore",f),autoChargeStation:v,substationPreference:O,...Xe("teleopScore",S),endgameChargeStation:X,defense:C,...ct("note",P),scouterName:R},j={participant:ft(u),metrics:d};at(new URL("http://localhost/api/add-metrics"),j),l(12,Z=JSON.stringify(j)),He.set([...He.get(),j])}function oe(d){u=d,l(0,u)}function A(d){i=d,l(1,i)}function F(d){m=d,l(2,m)}function K(d){o=d,l(3,o)}function se(d){f=d,l(4,f)}function B(d){v=d,l(5,v)}function ie(d){O=d,l(6,O)}function I(d){S=d,l(7,S)}function G(d){X=d,l(8,X)}function Q(d){C=d,l(9,C)}function le(d){P=d,l(10,P)}function U(d){R=d,l(11,R)}return[u,i,m,o,f,v,O,S,X,C,P,R,Z,w,oe,A,F,K,se,B,ie,I,G,Q,le,U]}class Bt extends Ce{constructor(n){super(),Pe(this,n,kt,$t,Ue,{})}}export{Bt as component};