function r(e){return e=="red"?"Red":"Blue"}function u(e){let n="";return n+=e.type,e.type!="qm"&&(n+=e.set,n+="m"),n+=e.number,n}function t(e){return new URLSearchParams({team:e.teamNumber.toString(),match:u(e),event:e.event,alliance:e.alliance})}function m(e){return`${e.event} ${u(e)} - Team ${e.teamNumber}`}export{u as a,m as b,r as d,t as g};