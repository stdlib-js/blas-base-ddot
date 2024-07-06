"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=c(function(D,j){
var s=5;function b(e,r,n,q,t,o,f){var v,i,a,d,u;if(v=0,e<=0)return v;if(i=q,a=f,n===1&&o===1){if(d=e%s,d>0)for(u=0;u<d;u++)v+=r[i]*t[a],i+=1,a+=1;if(e<s)return v;for(u=d;u<e;u+=s)v+=r[i]*t[a]+r[i+1]*t[a+1]+r[i+2]*t[a+2]+r[i+3]*t[a+3]+r[i+4]*t[a+4],i+=s,a+=s;return v}for(u=0;u<e;u++)v+=r[i]*t[a],i+=n,a+=o;return v}j.exports=b
});var _=c(function(F,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=p();function h(e,r,n,q,t){var o,f;return e<=0?0:(o=l(e,n),f=l(e,t),g(e,r,n,o,q,t,f))}R.exports=h
});var M=c(function(G,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=_(),w=p();k(y,"ndarray",w);E.exports=y
});var x=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=M(),m,O=z(x(__dirname,"./native.js"));A(O)?m=B:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
