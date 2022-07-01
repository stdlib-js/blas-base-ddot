// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?l:c;function p(e,r,t,o,n){var i,u,a,f,l;if(i=0,e<=0)return i;if(1===t&&1===n){if((f=e%5)>0)for(l=0;l<f;l++)i+=r[l]*o[l];if(e<5)return i;for(l=f;l<e;l+=5)i+=r[l]*o[l]+r[l+1]*o[l+1]+r[l+2]*o[l+2]+r[l+3]*o[l+3]+r[l+4]*o[l+4];return i}for(u=t<0?(1-e)*t:0,a=n<0?(1-e)*n:0,l=0;l<e;l++)i+=r[u]*o[a],u+=t,a+=n;return i}return _(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n,i,u){var a,f,l,c,_;if(a=0,e<=0)return a;if(f=o,l=u,1===t&&1===i){if((c=e%5)>0)for(_=0;_<c;_++)a+=r[f]*n[l],f+=1,l+=1;if(e<5)return a;for(_=c;_<e;_+=5)a+=r[f]*n[l]+r[f+1]*n[l+1]+r[f+2]*n[l+2]+r[f+3]*n[l+3]+r[f+4]*n[l+4],f+=5,l+=5;return a}for(_=0;_<e;_++)a+=r[f]*n[l],f+=t,l+=i;return a}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ddot=r();
//# sourceMappingURL=index.js.map
