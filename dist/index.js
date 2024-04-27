"use strict";var d=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var j=d(function(F,l){
var m=5;function g(i,e,f,o,u){var v,s,t,a,r;if(v=0,i<=0)return v;if(f===1&&u===1){if(a=i%m,a>0)for(r=0;r<a;r++)v+=e[r]*o[r];if(i<m)return v;for(r=a;r<i;r+=m)v+=e[r]*o[r]+e[r+1]*o[r+1]+e[r+2]*o[r+2]+e[r+3]*o[r+3]+e[r+4]*o[r+4];return v}for(f<0?s=(1-i)*f:s=0,u<0?t=(1-i)*u:t=0,r=0;r<i;r++)v+=e[s]*o[t],s+=f,t+=u;return v}l.exports=g
});var R=d(function(G,M){
var q=5;function h(i,e,f,o,u,v,s){var t,a,r,c,n;if(t=0,i<=0)return t;if(a=o,r=s,f===1&&v===1){if(c=i%q,c>0)for(n=0;n<c;n++)t+=e[a]*u[r],a+=1,r+=1;if(i<q)return t;for(n=c;n<i;n+=q)t+=e[a]*u[r]+e[a+1]*u[r+1]+e[a+2]*u[r+2]+e[a+3]*u[r+3]+e[a+4]*u[r+4],a+=q,r+=q;return t}for(n=0;n<i;n++)t+=e[a]*u[r],a+=f,r+=v;return t}M.exports=h
});var O=d(function(H,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=j(),w=R();k(_,"ndarray",w);E.exports=_
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=O(),p,b=A(z(__dirname,"./native.js"));B(b)?p=C:p=b;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
