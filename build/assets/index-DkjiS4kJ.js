function b0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function N0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Qo={},Kd={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),O0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),D0=Symbol.for("react.strict_mode"),F0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),M0=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),W0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Bu=Symbol.iterator;function G0(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Jd={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||qd}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xd(){}Xd.prototype=lr.prototype;function Ia(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||qd}var La=Ia.prototype=new Xd;La.constructor=Ia;Yd(La,lr.prototype);La.isPureReactComponent=!0;var Uu=Array.isArray,Zd=Object.prototype.hasOwnProperty,ba={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zd.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:si,type:e,key:o,ref:l,props:i,_owner:ba.current}}function Q0(e,t){return{$$typeof:si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function K0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mu=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K0(""+e.key):t.toString(36)}function qi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case si:case O0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Al(l,0):r,Uu(i)?(n="",e!=null&&(n=e.replace(Mu,"$&/")+"/"),qi(i,t,n,"",function(c){return c})):i!=null&&(Na(i)&&(i=Q0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Mu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Uu(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Al(o,s);l+=qi(o,t,n,a,i)}else if(a=G0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Al(o,s++),l+=qi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return qi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Yi={transition:null},Y0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:ba};function nf(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=lr;$.Fragment=$0;$.Profiler=F0;$.PureComponent=Ia;$.StrictMode=D0;$.Suspense=H0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;$.act=nf;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Zd.call(t,a)&&!ef.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:si,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:U0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};$.createElement=tf;$.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:M0,render:e}};$.isValidElement=Na;$.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:q0}};$.memo=function(e,t){return{$$typeof:W0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};$.unstable_act=nf;$.useCallback=function(e,t){return xe.current.useCallback(e,t)};$.useContext=function(e){return xe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};$.useEffect=function(e,t){return xe.current.useEffect(e,t)};$.useId=function(){return xe.current.useId()};$.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return xe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};$.useRef=function(e){return xe.current.useRef(e)};$.useState=function(e){return xe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return xe.current.useTransition()};$.version="18.3.1";Kd.exports=$;var R=Kd.exports;const et=N0(R),J0=b0({__proto__:null,default:et},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=R,Z0=Symbol.for("react.element"),em=Symbol.for("react.fragment"),tm=Object.prototype.hasOwnProperty,nm=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tm.call(t,r)&&!rm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z0,type:e,key:o,ref:l,props:i,_owner:nm.current}}Qo.Fragment=em;Qo.jsx=rf;Qo.jsxs=rf;Qd.exports=Qo;var u=Qd.exports,ws={},of={exports:{}},Fe={},lf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var L=P.length;P.push(I);e:for(;0<L;){var M=L-1>>>1,H=P[M];if(0<i(H,I))P[M]=I,P[L]=H,L=M;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],L=P.pop();if(L!==I){P[0]=L;e:for(var M=0,H=P.length,tn=H>>>1;M<tn;){var Ke=2*(M+1)-1,Et=P[Ke],Pe=Ke+1,ft=P[Pe];if(0>i(Et,L))Pe<H&&0>i(ft,Et)?(P[M]=ft,P[Pe]=L,M=Pe):(P[M]=Et,P[Ke]=L,M=Ke);else if(Pe<H&&0>i(ft,L))P[M]=ft,P[Pe]=L,M=Pe;else break e}}return I}function i(P,I){var L=P.sortIndex-I.sortIndex;return L!==0?L:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],f=1,d=null,y=3,w=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=P)r(c),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(c)}}function S(P){if(x=!1,m(P),!v)if(n(a)!==null)v=!0,pr(E);else{var I=n(c);I!==null&&en(S,I.startTime-P)}}function E(P,I){v=!1,x&&(x=!1,h(_),_=-1),w=!0;var L=y;try{for(m(I),d=n(a);d!==null&&(!(d.expirationTime>I)||P&&!Re());){var M=d.callback;if(typeof M=="function"){d.callback=null,y=d.priorityLevel;var H=M(d.expirationTime<=I);I=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(a)&&r(a),m(I)}else r(a);d=n(a)}if(d!==null)var tn=!0;else{var Ke=n(c);Ke!==null&&en(S,Ke.startTime-I),tn=!1}return tn}finally{d=null,y=L,w=!1}}var A=!1,j=null,_=-1,B=5,O=-1;function Re(){return!(e.unstable_now()-O<B)}function Xt(){if(j!==null){var P=e.unstable_now();O=P;var I=!0;try{I=j(!0,P)}finally{I?Zt():(A=!1,j=null)}}else A=!1}var Zt;if(typeof p=="function")Zt=function(){p(Xt)};else if(typeof MessageChannel<"u"){var gi=new MessageChannel,El=gi.port2;gi.port1.onmessage=Xt,Zt=function(){El.postMessage(null)}}else Zt=function(){C(Xt,0)};function pr(P){j=P,A||(A=!0,Zt())}function en(P,I){_=C(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,pr(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var L=y;y=I;try{return P()}finally{y=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=y;y=P;try{return I()}finally{y=L}},e.unstable_scheduleCallback=function(P,I,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,P){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,P={id:f++,callback:I,priorityLevel:P,startTime:L,expirationTime:H,sortIndex:-1},L>M?(P.sortIndex=L,t(c,P),n(a)===null&&P===n(c)&&(x?(h(_),_=-1):x=!0,en(S,L-M))):(P.sortIndex=H,t(a,P),v||w||(v=!0,pr(E))),P},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(P){var I=y;return function(){var L=y;y=I;try{return P.apply(this,arguments)}finally{y=L}}}})(sf);lf.exports=sf;var im=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=R,De=im;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Fr={};function Sn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)af.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ss=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Wu={};function sm(e){return Ss.call(Wu,e)?!0:Ss.call(Hu,e)?!1:lm.test(e)?Wu[e]=!0:(Hu[e]=!0,!1)}function am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,t,n,r){if(t===null||typeof t>"u"||am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oa=/[\-:]([a-z])/g;function $a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oa,$a);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oa,$a);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oa,$a);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Da(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(um(t,n,i,r)&&(n=null),r||i===null?sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),Cs=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),ks=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),Vu=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Tl;function Er(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Rl=!1;function Pl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function cm(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Pn:return"Portal";case Cs:return"Profiler";case Fa:return"StrictMode";case ks:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=fm(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Da(e,"checked",t,!1)}function Ts(e,t){hf(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(jr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function mf(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(e,t){if(t){if(hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ls=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,Hn=null,Wn=null;function Yu(e){if(e=ci(e)){if(typeof bs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Xo(t),bs(e.stateNode,e.type,t))}}function wf(e){Hn?Wn?Wn.push(e):Wn=[e]:Hn=e}function Sf(){if(Hn){var e=Hn,t=Wn;if(Wn=Hn=null,Yu(e),t)for(e=0;e<t.length;e++)Yu(t[e])}}function Cf(e,t){return e(t)}function kf(){}var zl=!1;function Ef(e,t,n){if(zl)return e(t,n);zl=!0;try{return Cf(e,t,n)}finally{zl=!1,(Hn!==null||Wn!==null)&&(kf(),Sf())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ns=!1;if(xt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Ns=!1}function mm(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var zr=!1,go=null,yo=!1,Os=null,gm={onError:function(e){zr=!0,go=e}};function ym(e,t,n,r,i,o,l,s,a){zr=!1,go=null,mm.apply(gm,arguments)}function vm(e,t,n,r,i,o,l,s,a){if(ym.apply(this,arguments),zr){if(zr){var c=go;zr=!1,go=null}else throw Error(T(198));yo||(yo=!0,Os=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(Cn(e)!==e)throw Error(T(188))}function xm(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ju(i),e;if(o===r)return Ju(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Af(e){return e=xm(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var Rf=De.unstable_scheduleCallback,Xu=De.unstable_cancelCallback,wm=De.unstable_shouldYield,Sm=De.unstable_requestPaint,Z=De.unstable_now,Cm=De.unstable_getCurrentPriorityLevel,Ha=De.unstable_ImmediatePriority,Pf=De.unstable_UserBlockingPriority,vo=De.unstable_NormalPriority,km=De.unstable_LowPriority,zf=De.unstable_IdlePriority,Ko=null,ct=null;function Em(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ko,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Tm,jm=Math.log,Am=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(jm(e)/Am|0)|0}var Ci=64,ki=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Ar(s):(o&=l,o!==0&&(r=Ar(o)))}else l=n&~i,l!==0?r=Ar(l):o!==0&&(r=Ar(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-tt(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=Rm(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function If(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lf,Va,bf,Nf,Of,Ds=!1,Ei=[],Ot=null,$t=null,Dt=null,Mr=new Map,Hr=new Map,_t=[],_m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Im(e,t,n,r,i){switch(t){case"focusin":return Ot=yr(Ot,e,t,n,r,i),!0;case"dragenter":return $t=yr($t,e,t,n,r,i),!0;case"mouseover":return Dt=yr(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,yr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,yr(Hr.get(o)||null,e,t,n,r,i)),!0}return!1}function $f(e){var t=ln(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Of(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ls=r,n.target.dispatchEvent(r),Ls=null}else return t=ci(n),t!==null&&Va(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){Ji(e)&&n.delete(t)}function Lm(){Ds=!1,Ot!==null&&Ji(Ot)&&(Ot=null),$t!==null&&Ji($t)&&($t=null),Dt!==null&&Ji(Dt)&&(Dt=null),Mr.forEach(ec),Hr.forEach(ec)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ds||(Ds=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Lm)))}function Wr(e){function t(i){return vr(i,e)}if(0<Ei.length){vr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&vr(Ot,e),$t!==null&&vr($t,e),Dt!==null&&vr(Dt,e),Mr.forEach(t),Hr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)$f(n),n.blockedOn===null&&_t.shift()}var Vn=kt.ReactCurrentBatchConfig,wo=!0;function bm(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=1,Ga(e,t,n,r)}finally{U=i,Vn.transition=o}}function Nm(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=4,Ga(e,t,n,r)}finally{U=i,Vn.transition=o}}function Ga(e,t,n,r){if(wo){var i=Fs(e,t,n,r);if(i===null)Ul(e,t,r,So,n),Zu(e,r);else if(Im(i,e,t,n,r))r.stopPropagation();else if(Zu(e,r),t&4&&-1<_m.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&Lf(o),o=Fs(e,t,n,r),o===null&&Ul(e,t,r,So,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var So=null;function Fs(e,t,n,r){if(So=null,e=Ma(r),e=ln(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function Df(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cm()){case Ha:return 1;case Pf:return 4;case vo:case km:return 16;case zf:return 536870912;default:return 16}default:return 16}}var Lt=null,Qa=null,Xi=null;function Ff(){if(Xi)return Xi;var e,t=Qa,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Xi=i.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function tc(){return!1}function Be(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ji:tc,this.isPropagationStopped=tc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Be(sr),ui=J({},sr,{view:0,detail:0}),Om=Be(ui),Il,Ll,xr,qo=J({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Il=e.screenX-xr.screenX,Ll=e.screenY-xr.screenY):Ll=Il=0,xr=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),nc=Be(qo),$m=J({},qo,{dataTransfer:0}),Dm=Be($m),Fm=J({},ui,{relatedTarget:0}),bl=Be(Fm),Bm=J({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Be(Bm),Mm=J({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=Be(Mm),Wm=J({},sr,{data:0}),rc=Be(Wm),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function qa(){return Km}var qm=J({},ui,{key:function(e){if(e.key){var t=Vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=Be(qm),Jm=J({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Be(Jm),Xm=J({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Zm=Be(Xm),eg=J({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Be(eg),ng=J({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Be(ng),ig=[9,13,27,32],Ya=xt&&"CompositionEvent"in window,_r=null;xt&&"documentMode"in document&&(_r=document.documentMode);var og=xt&&"TextEvent"in window&&!_r,Bf=xt&&(!Ya||_r&&8<_r&&11>=_r),oc=" ",lc=!1;function Uf(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function lg(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(lc=!0,oc);case"textInput":return e=t.data,e===oc&&lc?null:e;default:return null}}function sg(e,t){if(_n)return e==="compositionend"||!Ya&&Uf(e,t)?(e=Ff(),Xi=Qa=Lt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function Hf(e,t,n,r){wf(r),t=Co(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Vr=null;function ug(e){ep(e,0)}function Yo(e){var t=bn(e);if(pf(t))return e}function cg(e,t){if(e==="change")return t}var Wf=!1;if(xt){var Nl;if(xt){var Ol="oninput"in document;if(!Ol){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Ol=typeof ac.oninput=="function"}Nl=Ol}else Nl=!1;Wf=Nl&&(!document.documentMode||9<document.documentMode)}function uc(){Ir&&(Ir.detachEvent("onpropertychange",Vf),Vr=Ir=null)}function Vf(e){if(e.propertyName==="value"&&Yo(Vr)){var t=[];Hf(t,Vr,e,Ma(e)),Ef(ug,t)}}function dg(e,t,n){e==="focusin"?(uc(),Ir=t,Vr=n,Ir.attachEvent("onpropertychange",Vf)):e==="focusout"&&uc()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Vr)}function pg(e,t){if(e==="click")return Yo(t)}function hg(e,t){if(e==="input"||e==="change")return Yo(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:mg;function Gr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ss.call(t,i)||!it(e[i],t[i]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(){for(var e=window,t=mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mo(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=Qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=dc(n,o);var l=dc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=xt&&"documentMode"in document&&11>=document.documentMode,In=null,Bs=null,Lr=null,Us=!1;function fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||In==null||In!==mo(r)||(r=In,"selectionStart"in r&&Ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Gr(Lr,r)||(Lr=r,r=Co(Bs,"onSelect"),0<r.length&&(t=new Ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},$l={},Kf={};xt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Jo(e){if($l[e])return $l[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return $l[e]=t[n];return e}var qf=Jo("animationend"),Yf=Jo("animationiteration"),Jf=Jo("animationstart"),Xf=Jo("transitionend"),Zf=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Zf.set(e,t),Sn(t,[e])}for(var Dl=0;Dl<pc.length;Dl++){var Fl=pc[Dl],vg=Fl.toLowerCase(),xg=Fl[0].toUpperCase()+Fl.slice(1);Kt(vg,"on"+xg)}Kt(qf,"onAnimationEnd");Kt(Yf,"onAnimationIteration");Kt(Jf,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Xf,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vm(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;hc(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;hc(i,s,c),o=a}}}if(yo)throw e=Os,yo=!1,Os=null,e}function V(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Ti]){e[Ti]=!0,af.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Bl("selectionchange",!1,t))}}function tp(e,t,n,r){switch(Df(t)){case 1:var i=bm;break;case 4:i=Nm;break;default:i=Ga}n=i.bind(null,t,n,e),i=void 0,!Ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=ln(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ef(function(){var c=o,f=Ma(n),d=[];e:{var y=Zf.get(e);if(y!==void 0){var w=Ka,v=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":w=Ym;break;case"focusin":v="focus",w=bl;break;case"focusout":v="blur",w=bl;break;case"beforeblur":case"afterblur":w=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Zm;break;case qf:case Yf:case Jf:w=Um;break;case Xf:w=tg;break;case"scroll":w=Om;break;case"wheel":w=rg;break;case"copy":case"cut":case"paste":w=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ic}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?y!==null?y+"Capture":null:y;x=[];for(var p=c,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Ur(p,h),S!=null&&x.push(Kr(p,S,m)))),C)break;p=p.return}0<x.length&&(y=new w(y,v,null,n,f),d.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Ls&&(v=n.relatedTarget||n.fromElement)&&(ln(v)||v[wt]))break e;if((w||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?ln(v):null,v!==null&&(C=Cn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(x=nc,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=ic,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=w==null?y:bn(w),m=v==null?y:bn(v),y=new x(S,p+"leave",w,n,f),y.target=C,y.relatedTarget=m,S=null,ln(f)===c&&(x=new x(h,p+"enter",v,n,f),x.target=m,x.relatedTarget=C,S=x),C=S,w&&v)t:{for(x=w,h=v,p=0,m=x;m;m=jn(m))p++;for(m=0,S=h;S;S=jn(S))m++;for(;0<p-m;)x=jn(x),p--;for(;0<m-p;)h=jn(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=jn(x),h=jn(h)}x=null}else x=null;w!==null&&mc(d,y,w,x,!1),v!==null&&C!==null&&mc(d,C,v,x,!0)}}e:{if(y=c?bn(c):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var E=cg;else if(sc(y))if(Wf)E=hg;else{E=fg;var A=dg}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=pg);if(E&&(E=E(e,c))){Hf(d,E,n,f);break e}A&&A(e,y,c),e==="focusout"&&(A=y._wrapperState)&&A.controlled&&y.type==="number"&&Rs(y,"number",y.value)}switch(A=c?bn(c):window,e){case"focusin":(sc(A)||A.contentEditable==="true")&&(In=A,Bs=c,Lr=null);break;case"focusout":Lr=Bs=In=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,fc(d,n,f);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":fc(d,n,f)}var j;if(Ya)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _n?Uf(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Bf&&n.locale!=="ko"&&(_n||_!=="onCompositionStart"?_==="onCompositionEnd"&&_n&&(j=Ff()):(Lt=f,Qa="value"in Lt?Lt.value:Lt.textContent,_n=!0)),A=Co(c,_),0<A.length&&(_=new rc(_,e,null,n,f),d.push({event:_,listeners:A}),j?_.data=j:(j=Mf(n),j!==null&&(_.data=j)))),(j=og?lg(e,n):sg(e,n))&&(c=Co(c,"onBeforeInput"),0<c.length&&(f=new rc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=j))}ep(d,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ur(e,n),o!=null&&r.unshift(Kr(e,o,i)),o=Ur(e,t),o!=null&&r.push(Kr(e,o,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Ur(n,o),a!=null&&l.unshift(Kr(n,a,s))):i||(a=Ur(n,o),a!=null&&l.push(Kr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Sg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(Cg,"")}function Ri(e,t,n){if(t=gc(t),gc(e)!==t&&n)throw Error(T(425))}function ko(){}var Ms=null,Hs=null;function Ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(jg)}:Vs;function jg(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),ut="__reactFiber$"+ar,qr="__reactProps$"+ar,wt="__reactContainer$"+ar,Gs="__reactEvents$"+ar,Ag="__reactListeners$"+ar,Tg="__reactHandles$"+ar;function ln(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vc(e);e!==null;){if(n=e[ut])return n;e=vc(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[ut]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Xo(e){return e[qr]||null}var Qs=[],Nn=-1;function qt(e){return{current:e}}function Q(e){0>Nn||(e.current=Qs[Nn],Qs[Nn]=null,Nn--)}function W(e,t){Nn++,Qs[Nn]=e.current,e.current=t}var Qt={},ge=qt(Qt),ke=qt(!1),mn=Qt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Eo(){Q(ke),Q(ge)}function xc(e,t,n){if(ge.current!==Qt)throw Error(T(168));W(ge,t),W(ke,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,dm(e)||"Unknown",i));return J({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,mn=ge.current,W(ge,e),W(ke,ke.current),!0}function wc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=np(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(ge),W(ge,e)):Q(ke),W(ke,n)}var mt=null,Zo=!1,Hl=!1;function rp(e){mt===null?mt=[e]:mt.push(e)}function Rg(e){Zo=!0,rp(e)}function Yt(){if(!Hl&&mt!==null){Hl=!0;var e=0,t=U;try{var n=mt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Zo=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Rf(Ha,Yt),i}finally{U=t,Hl=!1}}return null}var On=[],$n=0,Ao=null,To=0,Ue=[],Me=0,gn=null,gt=1,yt="";function rn(e,t){On[$n++]=To,On[$n++]=Ao,Ao=e,To=t}function ip(e,t,n){Ue[Me++]=gt,Ue[Me++]=yt,Ue[Me++]=gn,gn=e;var r=gt;e=yt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,gt=1<<32-tt(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Xa(e){e.return!==null&&(rn(e,1),ip(e,1,0))}function Za(e){for(;e===Ao;)Ao=On[--$n],On[$n]=null,To=On[--$n],On[$n]=null;for(;e===gn;)gn=Ue[--Me],Ue[Me]=null,yt=Ue[--Me],Ue[Me]=null,gt=Ue[--Me],Ue[Me]=null}var Oe=null,Ne=null,K=!1,Xe=null;function op(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ne=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qs(e){if(K){var t=Ne;if(t){var n=t;if(!Sc(e,t)){if(Ks(e))throw Error(T(418));t=Ft(n.nextSibling);var r=Oe;t&&Sc(e,t)?op(r,n):(e.flags=e.flags&-4097|2,K=!1,Oe=e)}}else{if(Ks(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Oe=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function Pi(e){if(e!==Oe)return!1;if(!K)return Cc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ws(e.type,e.memoizedProps)),t&&(t=Ne)){if(Ks(e))throw lp(),Error(T(418));for(;t;)op(e,t),t=Ft(t.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Oe?Ft(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Ne;e;)e=Ft(e.nextSibling)}function Yn(){Ne=Oe=null,K=!1}function eu(e){Xe===null?Xe=[e]:Xe.push(e)}var Pg=kt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function sp(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ht(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,S){return p===null||p.tag!==6?(p=Yl(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function a(h,p,m,S){var E=m.type;return E===zn?f(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&kc(E)===p.type)?(S=i(p,m.props),S.ref=wr(h,p,m),S.return=h,S):(S=lo(m.type,m.key,m.props,null,h.mode,S),S.ref=wr(h,p,m),S.return=h,S)}function c(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Jl(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,S,E){return p===null||p.tag!==7?(p=fn(m,h.mode,S,E),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yl(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:return m=lo(p.type,p.key,p.props,null,h.mode,m),m.ref=wr(h,null,p),m.return=h,m;case Pn:return p=Jl(p,h.mode,m),p.return=h,p;case Pt:var S=p._init;return d(h,S(p._payload),m)}if(jr(p)||mr(p))return p=fn(p,h.mode,m,null),p.return=h,p;zi(h,p)}return null}function y(h,p,m,S){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:return m.key===E?a(h,p,m,S):null;case Pn:return m.key===E?c(h,p,m,S):null;case Pt:return E=m._init,y(h,p,E(m._payload),S)}if(jr(m)||mr(m))return E!==null?null:f(h,p,m,S,null);zi(h,m)}return null}function w(h,p,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xi:return h=h.get(S.key===null?m:S.key)||null,a(p,h,S,E);case Pn:return h=h.get(S.key===null?m:S.key)||null,c(p,h,S,E);case Pt:var A=S._init;return w(h,p,m,A(S._payload),E)}if(jr(S)||mr(S))return h=h.get(m)||null,f(p,h,S,E,null);zi(p,S)}return null}function v(h,p,m,S){for(var E=null,A=null,j=p,_=p=0,B=null;j!==null&&_<m.length;_++){j.index>_?(B=j,j=null):B=j.sibling;var O=y(h,j,m[_],S);if(O===null){j===null&&(j=B);break}e&&j&&O.alternate===null&&t(h,j),p=o(O,p,_),A===null?E=O:A.sibling=O,A=O,j=B}if(_===m.length)return n(h,j),K&&rn(h,_),E;if(j===null){for(;_<m.length;_++)j=d(h,m[_],S),j!==null&&(p=o(j,p,_),A===null?E=j:A.sibling=j,A=j);return K&&rn(h,_),E}for(j=r(h,j);_<m.length;_++)B=w(j,h,_,m[_],S),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?_:B.key),p=o(B,p,_),A===null?E=B:A.sibling=B,A=B);return e&&j.forEach(function(Re){return t(h,Re)}),K&&rn(h,_),E}function x(h,p,m,S){var E=mr(m);if(typeof E!="function")throw Error(T(150));if(m=E.call(m),m==null)throw Error(T(151));for(var A=E=null,j=p,_=p=0,B=null,O=m.next();j!==null&&!O.done;_++,O=m.next()){j.index>_?(B=j,j=null):B=j.sibling;var Re=y(h,j,O.value,S);if(Re===null){j===null&&(j=B);break}e&&j&&Re.alternate===null&&t(h,j),p=o(Re,p,_),A===null?E=Re:A.sibling=Re,A=Re,j=B}if(O.done)return n(h,j),K&&rn(h,_),E;if(j===null){for(;!O.done;_++,O=m.next())O=d(h,O.value,S),O!==null&&(p=o(O,p,_),A===null?E=O:A.sibling=O,A=O);return K&&rn(h,_),E}for(j=r(h,j);!O.done;_++,O=m.next())O=w(j,h,_,O.value,S),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?_:O.key),p=o(O,p,_),A===null?E=O:A.sibling=O,A=O);return e&&j.forEach(function(Xt){return t(h,Xt)}),K&&rn(h,_),E}function C(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:e:{for(var E=m.key,A=p;A!==null;){if(A.key===E){if(E=m.type,E===zn){if(A.tag===7){n(h,A.sibling),p=i(A,m.props.children),p.return=h,h=p;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pt&&kc(E)===A.type){n(h,A.sibling),p=i(A,m.props),p.ref=wr(h,A,m),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}m.type===zn?(p=fn(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=lo(m.type,m.key,m.props,null,h.mode,S),S.ref=wr(h,p,m),S.return=h,h=S)}return l(h);case Pn:e:{for(A=m.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Jl(m,h.mode,S),p.return=h,h=p}return l(h);case Pt:return A=m._init,C(h,p,A(m._payload),S)}if(jr(m))return v(h,p,m,S);if(mr(m))return x(h,p,m,S);zi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Yl(m,h.mode,S),p.return=h,h=p),l(h)):n(h,p)}return C}var Jn=sp(!0),ap=sp(!1),Ro=qt(null),Po=null,Dn=null,tu=null;function nu(){tu=Dn=Po=null}function ru(e){var t=Ro.current;Q(Ro),e._currentValue=t}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Po=e,tu=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(tu!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Po===null)throw Error(T(308));Dn=e,Po.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var sn=null;function iu(e){sn===null?sn=[e]:sn.push(e)}function up(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}function Ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;zt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;l=0,f=c=a=null,s=o;do{var y=s.lane,w=s.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(y=t,w=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,y);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,y=typeof v=="function"?v.call(w,d,y):v,y==null)break e;d=J({},d,y);break e;case 2:zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else w={eventTime:w,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=w,a=d):f=f.next=w,l|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=d}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var di={},dt=qt(di),Yr=qt(di),Jr=qt(di);function an(e){if(e===di)throw Error(T(174));return e}function lu(e,t){switch(W(Jr,t),W(Yr,e),W(dt,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zs(t,e)}Q(dt),W(dt,t)}function Xn(){Q(dt),Q(Yr),Q(Jr)}function dp(e){an(Jr.current);var t=an(dt.current),n=zs(t,e.type);t!==n&&(W(Yr,e),W(dt,n))}function su(e){Yr.current===e&&(Q(dt),Q(Yr))}var q=qt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function au(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var to=kt.ReactCurrentDispatcher,Vl=kt.ReactCurrentBatchConfig,yn=0,Y=null,ie=null,le=null,Io=!1,br=!1,Xr=0,zg=0;function fe(){throw Error(T(321))}function uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function cu(e,t,n,r,i,o){if(yn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?bg:Ng,e=n(r,i),br){o=0;do{if(br=!1,Xr=0,25<=o)throw Error(T(301));o+=1,le=ie=null,t.updateQueue=null,to.current=Og,e=n(r,i)}while(br)}if(to.current=Lo,t=ie!==null&&ie.next!==null,yn=0,le=ie=Y=null,Io=!1,t)throw Error(T(300));return e}function du(){var e=Xr!==0;return Xr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ge(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(T(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Zr(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var f=c.lane;if((yn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,Y.lanes|=f,vn|=f}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,it(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);it(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fp(){}function pp(e,t){var n=Y,r=Ge(),i=t(),o=!it(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,fu(gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ei(9,mp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(T(349));yn&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&vp(e)}function gp(e,t,n){return n(function(){yp(t)&&vp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function vp(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Ac(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lg.bind(null,Y,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xp(){return Ge().memoizedState}function no(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&uu(r,l.deps)){i.memoizedState=ei(t,n,o,r);return}}Y.flags|=e,i.memoizedState=ei(1|t,n,o,r)}function Tc(e,t){return no(8390656,8,e,t)}function fu(e,t){return el(2048,8,e,t)}function wp(e,t){return el(4,2,e,t)}function Sp(e,t){return el(4,4,e,t)}function Cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,Cp.bind(null,t,e),n)}function pu(){}function Ep(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ap(e,t,n){return yn&21?(it(n,t)||(n=_f(),Y.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function _g(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{U=n,Vl.transition=r}}function Tp(){return Ge().memoizedState}function Ig(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rp(e))Pp(t,n);else if(n=up(e,t,n,r),n!==null){var i=ve();nt(n,e,r,i),zp(n,t,r)}}function Lg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rp(e))Pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,it(s,l)){var a=t.interleaved;a===null?(i.next=i,iu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=up(e,t,i,r),n!==null&&(i=ve(),nt(n,e,r,i),zp(n,t,r))}}function Rp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Pp(e,t){br=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}var Lo={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},bg={readContext:Ve,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,Cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ig.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:pu,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=_g.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ae===null)throw Error(T(349));yn&30||hp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Tc(gp.bind(null,r,o,e),[e]),r.flags|=2048,ei(9,mp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ae.identifierPrefix;if(K){var n=yt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ng={readContext:Ve,useCallback:Ep,useContext:Ve,useEffect:fu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:jp,useReducer:Gl,useRef:xp,useState:function(){return Gl(Zr)},useDebugValue:pu,useDeferredValue:function(e){var t=Ge();return Ap(t,ie.memoizedState,e)},useTransition:function(){var e=Gl(Zr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1},Og={readContext:Ve,useCallback:Ep,useContext:Ve,useEffect:fu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:jp,useReducer:Ql,useRef:xp,useState:function(){return Ql(Zr)},useDebugValue:pu,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:Ap(t,ie.memoizedState,e)},useTransition:function(){var e=Ql(Zr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(nt(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(nt(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Mt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(nt(t,e,r,n),eo(t,e,r))}};function Rc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,o):!0}function _p(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ee(t)?mn:ge.current,r=t.contextTypes,o=(r=r!=null)?qn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ou(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ee(t)?mn:ge.current,i.context=qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Js(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=cm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Ip(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,ua=r),Zs(e,t)},n}function Lp(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zs(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $g;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function _c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Dg=kt.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?ap(t,null,n,r):Jn(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var o=t.ref;return Gn(t,i),r=cu(e,t,n,r,o,i),n=du(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&n&&Xa(t),t.flags|=1,ye(e,t,r,i),t.child)}function bc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Su(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bp(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return ea(e,t,n,r,i)}function Np(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Bn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Bn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Bn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Bn,be),be|=r;return ye(e,t,i,n),t.child}function Op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,i){var o=Ee(n)?mn:ge.current;return o=qn(t,o),Gn(t,i),n=cu(e,t,n,r,o,i),r=du(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&r&&Xa(t),t.flags|=1,ye(e,t,n,i),t.child)}function Nc(e,t,n,r,i){if(Ee(n)){var o=!0;jo(t)}else o=!1;if(Gn(t,i),t.stateNode===null)ro(e,t),_p(t,n,r),Xs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ee(n)?mn:ge.current,c=qn(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Pc(t,l,r,c),zt=!1;var y=t.memoizedState;l.state=y,zo(t,r,l,i),a=t.memoizedState,s!==r||y!==a||ke.current||zt?(typeof f=="function"&&(Js(t,n,f,r),a=t.memoizedState),(s=zt||Rc(t,n,s,r,y,a,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,cp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ye(t.type,s),l.props=c,d=t.pendingProps,y=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ee(n)?mn:ge.current,a=qn(t,a));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||y!==a)&&Pc(t,l,r,a),zt=!1,y=t.memoizedState,l.state=y,zo(t,r,l,i);var v=t.memoizedState;s!==d||y!==v||ke.current||zt?(typeof w=="function"&&(Js(t,n,w,r),v=t.memoizedState),(c=zt||Rc(t,n,c,r,y,v,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,o,i)}function ta(e,t,n,r,i,o){Op(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&wc(t,n,!1),Ct(e,t,o);r=t.stateNode,Dg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,o),t.child=Jn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,i&&wc(t,n,!0),t.child}function $p(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),lu(e,t.containerInfo)}function Oc(e,t,n,r,i){return Yn(),eu(i),t.flags|=256,ye(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=il(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ra(n),t.memoizedState=na,e):hu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Fg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ht(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ht(s,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ra(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=na,r}return o=e.child,e=o.sibling,r=Ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hu(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&eu(r),Jn(t,e.child,null,n),e=hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(T(422))),_i(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=il({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jn(t,e.child,null,l),t.child.memoizedState=ra(l),t.memoizedState=na,o);if(!(t.mode&1))return _i(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=Kl(o,r,void 0),_i(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),nt(r,e,i,-1))}return wu(),r=Kl(Error(T(421))),_i(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Ft(i.nextSibling),Oe=t,K=!0,Xe=null,e!==null&&(Ue[Me++]=gt,Ue[Me++]=yt,Ue[Me++]=gn,gt=e.id,yt=e.overflow,gn=t),t=hu(t,r.children),t.flags|=4096,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function ql(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ql(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ql(t,!0,n,null,o);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bg(e,t,n){switch(t.tag){case 3:$p(t),Yn();break;case 5:dp(t);break;case 1:Ee(t.type)&&jo(t);break;case 4:lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Dp(e,t,n):(W(q,q.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return Ct(e,t,n)}var Bp,ia,Up,Mp;Bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ia=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(dt.current);var o=null;switch(n){case"input":i=As(e,i),r=As(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ps(e,i),r=Ps(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}_s(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(Za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Eo(),pe(t),null;case 3:return r=t.stateNode,Xn(),Q(ke),Q(ge),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(fa(Xe),Xe=null))),ia(e,t),pe(t),null;case 5:su(t);var i=an(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return pe(t),null}if(e=an(dt.current),Pi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ut]=t,r[qr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)V(Tr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Gu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Ku(r,o),V("invalid",r)}_s(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",""+s]):Fr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":wi(r),Qu(r,o,!0);break;case"textarea":wi(r),qu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ut]=t,e[qr]=r,Bp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Is(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)V(Tr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Gu(e,r),i=As(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ku(e,r),i=Ps(e,r),V("invalid",e);break;default:i=r}_s(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?xf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&yf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Br(e,a):typeof a=="number"&&Br(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Da(e,o,a,l))}switch(n){case"input":wi(e),Qu(e,r,!1);break;case"textarea":wi(e),qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=an(Jr.current),an(dt.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return pe(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ne!==null&&t.mode&1&&!(t.flags&128))lp(),Yn(),t.flags|=98560,o=!1;else if(o=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[ut]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(fa(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):wu())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Xn(),ia(e,t),e===null&&Qr(t.stateNode.containerInfo),pe(t),null;case 10:return ru(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Eo(),pe(t),null;case 19:if(Q(q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Sr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,Sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>er&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return pe(t),null}else 2*Z()-o.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Mg(e,t){switch(Za(t),t.tag){case 1:return Ee(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Q(ke),Q(ge),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return su(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Xn(),null;case 10:return ru(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Ii=!1,he=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,z=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function oa(e,t,n){try{n()}catch(r){X(e,t,r)}}var Dc=!1;function Wg(e,t){if(Ms=wo,e=Qf(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,f=0,d=e,y=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==o||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(w=d.firstChild)!==null;)y=d,d=w;for(;;){if(d===e)break t;if(y===n&&++c===i&&(s=l),y===o&&++f===r&&(a=l),(w=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hs={focusedElem:e,selectionRange:n},wo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){X(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Dc,Dc=!1,v}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&oa(t,n,o)}i=i.next}while(i!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function la(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[qr],delete t[Gs],delete t[Ag],delete t[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var ue=null,Je=!1;function At(e,t,n){for(n=n.child;n!==null;)Vp(e,t,n),n=n.sibling}function Vp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 5:he||Fn(n,t);case 6:var r=ue,i=Je;ue=null,At(e,t,n),ue=r,Je=i,ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Wr(e)):Ml(ue,n.stateNode));break;case 4:r=ue,i=Je,ue=n.stateNode.containerInfo,Je=!0,At(e,t,n),ue=r,Je=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&oa(n,t,l),i=i.next}while(i!==r)}At(e,t,n);break;case 1:if(!he&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,At(e,t,n),he=r):At(e,t,n);break;default:At(e,t,n)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hg),t.forEach(function(r){var i=Zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Je=!1;break e;case 3:ue=s.stateNode.containerInfo,Je=!0;break e;case 4:ue=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(ue===null)throw Error(T(160));Vp(o,l,i),ue=null,Je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),lt(e),r&4){try{Nr(3,e,e.return),nl(3,e)}catch(x){X(e,e.return,x)}try{Nr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:qe(t,e),lt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(qe(t,e),lt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Br(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Is(s,l);var c=Is(s,o);for(l=0;l<a.length;l+=2){var f=a[l],d=a[l+1];f==="style"?xf(i,d):f==="dangerouslySetInnerHTML"?yf(i,d):f==="children"?Br(i,d):Da(i,f,d,c)}switch(s){case"input":Ts(i,o);break;case"textarea":mf(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Mn(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(qe(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(qe(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:qe(t,e),lt(e);break;case 13:qe(t,e),lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yu=Z())),r&4&&Bc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||f,qe(t,e),he=c):qe(t,e),lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(d=z=f;z!==null;){switch(y=z,w=y.child,y.tag){case 0:case 11:case 14:case 15:Nr(4,y,y.return);break;case 1:Fn(y,y.return);var v=y.stateNode;if(typeof v.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Fn(y,y.return);break;case 22:if(y.memoizedState!==null){Mc(d);continue}}w!==null?(w.return=y,z=w):Mc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=vf("display",l))}catch(x){X(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){X(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qe(t,e),lt(e),r&4&&Bc(e);break;case 21:break;default:qe(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Br(i,""),r.flags&=-33);var o=Fc(e);aa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Fc(e);sa(e,s,l);break;default:throw Error(T(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vg(e,t,n){z=e,Qp(e)}function Qp(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ii;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||he;s=Ii;var c=he;if(Ii=l,(he=a)&&!c)for(z=i;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?Hc(i):a!==null?(a.return=l,z=a):Hc(i);for(;o!==null;)z=o,Qp(o),o=o.sibling;z=i,Ii=s,he=c}Uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Uc(e)}}function Uc(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Wr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}he||t.flags&512&&la(t)}catch(y){X(t,t.return,y)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Mc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Hc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{la(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{la(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Gg=Math.ceil,bo=kt.ReactCurrentDispatcher,mu=kt.ReactCurrentOwner,We=kt.ReactCurrentBatchConfig,D=0,ae=null,te=null,ce=0,be=0,Bn=qt(0),oe=0,ti=null,vn=0,rl=0,gu=0,Or=null,Se=null,yu=0,er=1/0,pt=null,No=!1,ua=null,Ut=null,Li=!1,bt=null,Oo=0,$r=0,ca=null,io=-1,oo=0;function ve(){return D&6?Z():io!==-1?io:io=Z()}function Mt(e){return e.mode&1?D&2&&ce!==0?ce&-ce:Pg.transition!==null?(oo===0&&(oo=_f()),oo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Df(e.type)),e):1}function nt(e,t,n,r){if(50<$r)throw $r=0,ca=null,Error(T(185));ai(e,n,r),(!(D&2)||e!==ae)&&(e===ae&&(!(D&2)&&(rl|=n),oe===4&&It(e,ce)),je(e,r),n===1&&D===0&&!(t.mode&1)&&(er=Z()+500,Zo&&Yt()))}function je(e,t){var n=e.callbackNode;Pm(e,t);var r=xo(e,e===ae?ce:0);if(r===0)n!==null&&Xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xu(n),t===1)e.tag===0?Rg(Wc.bind(null,e)):rp(Wc.bind(null,e)),Eg(function(){!(D&6)&&Yt()}),n=null;else{switch(If(r)){case 1:n=Ha;break;case 4:n=Pf;break;case 16:n=vo;break;case 536870912:n=zf;break;default:n=vo}n=th(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(io=-1,oo=0,D&6)throw Error(T(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=xo(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=D;D|=2;var o=Yp();(ae!==e||ce!==t)&&(pt=null,er=Z()+500,dn(e,t));do try{qg();break}catch(s){qp(e,s)}while(!0);nu(),bo.current=o,D=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=$s(e),i!==0&&(r=i,t=da(e,i))),t===1)throw n=ti,dn(e,0),It(e,r),je(e,Z()),n;if(t===6)It(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qg(i)&&(t=$o(e,r),t===2&&(o=$s(e),o!==0&&(r=o,t=da(e,o))),t===1))throw n=ti,dn(e,0),It(e,r),je(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:on(e,Se,pt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=yu+500-Z(),10<t)){if(xo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vs(on.bind(null,e,Se,pt),t);break}on(e,Se,pt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=Vs(on.bind(null,e,Se,pt),r);break}on(e,Se,pt);break;case 5:on(e,Se,pt);break;default:throw Error(T(329))}}}return je(e,Z()),e.callbackNode===n?Kp.bind(null,e):null}function da(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Se,Se=n,t!==null&&fa(t)),e}function fa(e){Se===null?Se=e:Se.push.apply(Se,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~gu,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Wc(e){if(D&6)throw Error(T(327));Qn();var t=xo(e,0);if(!(t&1))return je(e,Z()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=$s(e);r!==0&&(t=r,n=da(e,r))}if(n===1)throw n=ti,dn(e,0),It(e,t),je(e,Z()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Se,pt),je(e,Z()),null}function vu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(er=Z()+500,Zo&&Yt())}}function xn(e){bt!==null&&bt.tag===0&&!(D&6)&&Qn();var t=D;D|=1;var n=We.transition,r=U;try{if(We.transition=null,U=1,e)return e()}finally{U=r,We.transition=n,D=t,!(D&6)&&Yt()}}function xu(){be=Bn.current,Q(Bn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kg(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:Xn(),Q(ke),Q(ge),au();break;case 5:su(r);break;case 4:Xn();break;case 13:Q(q);break;case 19:Q(q);break;case 10:ru(r.type._context);break;case 22:case 23:xu()}n=n.return}if(ae=e,te=e=Ht(e.current,null),ce=be=t,oe=0,ti=null,gu=rl=vn=0,Se=Or=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}sn=null}return e}function qp(e,t){do{var n=te;try{if(nu(),to.current=Lo,Io){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Io=!1}if(yn=0,le=ie=Y=null,br=!1,Xr=0,mu.current=null,n===null||n.return===null){oe=1,ti=t,te=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=_c(l);if(w!==null){w.flags&=-257,Ic(w,l,s,o,t),w.mode&1&&zc(o,c,t),t=w,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){zc(o,c,t),wu();break e}a=Error(T(426))}}else if(K&&s.mode&1){var C=_c(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ic(C,l,s,o,t),eu(Zn(a,s));break e}}o=a=Zn(a,s),oe!==4&&(oe=2),Or===null?Or=[o]:Or.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Ip(o,a,t);Ec(o,h);break e;case 1:s=a;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Lp(o,s,t);Ec(o,S);break e}}o=o.return}while(o!==null)}Xp(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Yp(){var e=bo.current;return bo.current=Lo,e===null?Lo:e}function wu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(vn&268435455)&&!(rl&268435455)||It(ae,ce)}function $o(e,t){var n=D;D|=2;var r=Yp();(ae!==e||ce!==t)&&(pt=null,dn(e,t));do try{Kg();break}catch(i){qp(e,i)}while(!0);if(nu(),D=n,bo.current=r,te!==null)throw Error(T(261));return ae=null,ce=0,oe}function Kg(){for(;te!==null;)Jp(te)}function qg(){for(;te!==null&&!wm();)Jp(te)}function Jp(e){var t=eh(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Xp(e):te=t,mu.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mg(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=Ug(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function on(e,t,n){var r=U,i=We.transition;try{We.transition=null,U=1,Yg(e,t,n,r)}finally{We.transition=i,U=r}return null}function Yg(e,t,n,r){do Qn();while(bt!==null);if(D&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zm(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,th(vo,function(){return Qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var l=U;U=1;var s=D;D|=4,mu.current=null,Wg(e,n),Gp(n,e),gg(Hs),wo=!!Ms,Hs=Ms=null,e.current=n,Vg(n),Sm(),D=s,U=l,We.transition=o}else e.current=n;if(Li&&(Li=!1,bt=e,Oo=i),o=e.pendingLanes,o===0&&(Ut=null),Em(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=ua,ua=null,e;return Oo&1&&e.tag!==0&&Qn(),o=e.pendingLanes,o&1?e===ca?$r++:($r=0,ca=e):$r=0,Yt(),null}function Qn(){if(bt!==null){var e=If(Oo),t=We.transition,n=U;try{if(We.transition=null,U=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,Oo=0,D&6)throw Error(T(331));var i=D;for(D|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(z=c;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Nr(8,f,o)}var d=f.child;if(d!==null)d.return=f,z=d;else for(;z!==null;){f=z;var y=f.sibling,w=f.return;if(Hp(f),f===c){z=null;break}if(y!==null){y.return=w,z=y;break}z=w}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,z=h;break e}z=o.return}}var p=e.current;for(z=p;z!==null;){l=z;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,z=m;else e:for(l=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:nl(9,s)}}catch(E){X(s,s.return,E)}if(s===l){z=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,z=S;break e}z=s.return}}if(D=i,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ko,e)}catch{}r=!0}return r}finally{U=n,We.transition=t}}return!1}function Vc(e,t,n){t=Zn(n,t),t=Ip(e,t,1),e=Bt(e,t,1),t=ve(),e!==null&&(ai(e,1,t),je(e,t))}function X(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Zn(n,e),e=Lp(t,e,1),t=Bt(t,e,1),e=ve(),t!==null&&(ai(t,1,e),je(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>Z()-yu?dn(e,0):gu|=n),je(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=ve();e=St(e,t),e!==null&&(ai(e,t,n),je(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Zp(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Bg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&ip(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=qn(t,ge.current);Gn(t,n),i=cu(null,t,r,e,i,n);var o=du();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ou(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,Xs(t,r,e,n),t=ta(null,t,r,!0,o,n)):(t.tag=0,K&&o&&Xa(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t1(r),e=Ye(r,e),i){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Nc(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=bc(null,t,r,Ye(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ea(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Nc(e,t,r,i,n);case 3:e:{if($p(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cp(e,t),zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(T(423)),t),t=Oc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(T(424)),t),t=Oc(e,t,r,n,i);break e}else for(Ne=Ft(t.stateNode.containerInfo.firstChild),Oe=t,K=!0,Xe=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=Ct(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&qs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ws(r,i)?l=null:o!==null&&Ws(r,o)&&(t.flags|=32),Op(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&qs(t),null;case 13:return Dp(e,t,n);case 4:return lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Lc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(Ro,r._currentValue),r._currentValue=l,o!==null)if(it(o.value,l)){if(o.children===i.children&&!ke.current){t=Ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=vt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ys(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ys(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),bc(e,t,r,i,n);case 15:return bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ro(e,t),t.tag=1,Ee(r)?(e=!0,jo(t)):e=!1,Gn(t,n),_p(t,r,i),Xs(t,r,i,n),ta(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Np(e,t,n)}throw Error(T(156,t.tag))};function th(e,t){return Rf(e,t)}function e1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new e1(e,t,n,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t1(e){if(typeof e=="function")return Su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===Ua)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Su(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zn:return fn(n.children,i,o,t);case Fa:l=8,i|=8;break;case Cs:return e=He(12,n,t,i|2),e.elementType=Cs,e.lanes=o,e;case ks:return e=He(13,n,t,i),e.elementType=ks,e.lanes=o,e;case Es:return e=He(19,n,t,i),e.elementType=Es,e.lanes=o,e;case df:return il(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:l=10;break e;case cf:l=9;break e;case Ba:l=11;break e;case Ua:l=14;break e;case Pt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=He(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(e,t,n,r,i,o,l,s,a){return e=new n1(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(o),e}function r1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return Qt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ee(n))return np(e,n,t)}return t}function rh(e,t,n,r,i,o,l,s,a){return e=Cu(n,r,!0,e,i,o,l,s,a),e.context=nh(null),n=e.current,r=ve(),i=Mt(n),o=vt(r,i),o.callback=t??null,Bt(n,o,i),e.current.lanes=i,ai(e,i,r),je(e,r),e}function ol(e,t,n,r){var i=t.current,o=ve(),l=Mt(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,l),e!==null&&(nt(e,i,l,o),eo(e,i,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function i1(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eu(e){this._internalRoot=e}ll.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ol(e,t,null,null)};ll.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){ol(null,e,null,null)}),t[wt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&$f(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function o1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Do(l);o.call(c)}}var l=rh(t,r,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=l,e[wt]=l.current,Qr(e.nodeType===8?e.parentNode:e),xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Do(a);s.call(c)}}var a=Cu(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=a,e[wt]=a.current,Qr(e.nodeType===8?e.parentNode:e),xn(function(){ol(t,a,n,r)}),a}function al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Do(l);s.call(a)}}ol(t,l,e,i)}else l=o1(n,t,e,i,r);return Do(l)}Lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Wa(t,n|1),je(t,Z()),!(D&6)&&(er=Z()+500,Yt()))}break;case 13:xn(function(){var r=St(e,1);if(r!==null){var i=ve();nt(r,e,1,i)}}),ku(e,1)}};Va=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=ve();nt(t,e,134217728,n)}ku(e,134217728)}};bf=function(e){if(e.tag===13){var t=Mt(e),n=St(e,t);if(n!==null){var r=ve();nt(n,e,t,r)}ku(e,t)}};Nf=function(){return U};Of=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};bs=function(e,t,n){switch(t){case"input":if(Ts(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xo(r);if(!i)throw Error(T(90));pf(r),Ts(r,i)}}}break;case"textarea":mf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Cf=vu;kf=xn;var l1={usingClientEntryPoint:!1,Events:[ci,bn,Xo,wf,Sf,vu]},Cr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s1={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Ko=bi.inject(s1),ct=bi}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(t))throw Error(T(200));return r1(e,t,null,n)};Fe.createRoot=function(e,t){if(!ju(e))throw Error(T(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Eu(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Af(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return xn(e)};Fe.hydrate=function(e,t,n){if(!sl(t))throw Error(T(200));return al(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!ju(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,l),e[wt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ll(t)};Fe.render=function(e,t,n){if(!sl(t))throw Error(T(200));return al(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!sl(e))throw Error(T(40));return e._reactRootContainer?(xn(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Fe.unstable_batchedUpdates=vu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return al(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=Fe;var a1=of.exports,Kc=a1;ws.createRoot=Kc.createRoot,ws.hydrateRoot=Kc.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function ni(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",Dr="-moz-",F="-webkit-",lh="comm",ul="rule",Au="decl",u1="@import",sh="@keyframes",c1="@layer",ah=Math.abs,Tu=String.fromCharCode,pa=Object.assign;function d1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function uh(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function so(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function tr(e,t,n){return e.slice(t,n)}function at(e){return e.length}function ch(e){return e.length}function Rr(e,t){return t.push(e),e}function f1(e,t){return e.map(t).join("")}function qc(e,t){return e.filter(function(n){return!ht(n,t)})}var cl=1,nr=1,dh=0,Qe=0,ee=0,ur="";function dl(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:cl,column:nr,length:l,return:"",siblings:s}}function Rt(e,t){return pa(dl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function An(e){for(;e.root;)e=Rt(e.root,{children:[e]});Rr(e,e.siblings)}function p1(){return ee}function h1(){return ee=Qe>0?se(ur,--Qe):0,nr--,ee===10&&(nr=1,cl--),ee}function rt(){return ee=Qe<dh?se(ur,Qe++):0,nr++,ee===10&&(nr=1,cl++),ee}function pn(){return se(ur,Qe)}function ao(){return Qe}function fl(e,t){return tr(ur,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m1(e){return cl=nr=1,dh=at(ur=e),Qe=0,[]}function g1(e){return ur="",e}function Xl(e){return uh(fl(Qe-1,ma(e===91?e+2:e===40?e+1:e)))}function y1(e){for(;(ee=pn())&&ee<33;)rt();return ha(e)>2||ha(ee)>3?"":" "}function v1(e,t){for(;--t&&rt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return fl(e,ao()+(t<6&&pn()==32&&rt()==32))}function ma(e){for(;rt();)switch(ee){case e:return Qe;case 34:case 39:e!==34&&e!==39&&ma(ee);break;case 40:e===41&&ma(e);break;case 92:rt();break}return Qe}function x1(e,t){for(;rt()&&e+ee!==57;)if(e+ee===84&&pn()===47)break;return"/*"+fl(t,Qe-1)+"*"+Tu(e===47?e:rt())}function w1(e){for(;!ha(pn());)rt();return fl(e,Qe)}function S1(e){return g1(uo("",null,null,null,[""],e=m1(e),0,[0],e))}function uo(e,t,n,r,i,o,l,s,a){for(var c=0,f=0,d=l,y=0,w=0,v=0,x=1,C=1,h=1,p=0,m="",S=i,E=o,A=r,j=m;C;)switch(v=p,p=rt()){case 40:if(v!=108&&se(j,d-1)==58){so(j+=N(Xl(p),"&","&\f"),"&\f",ah(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Xl(p);break;case 9:case 10:case 13:case 32:j+=y1(v);break;case 92:j+=v1(ao()-1,7);continue;case 47:switch(pn()){case 42:case 47:Rr(C1(x1(rt(),ao()),t,n,a),a);break;default:j+="/"}break;case 123*x:s[c++]=at(j)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+f:h==-1&&(j=N(j,/\f/g,"")),w>0&&at(j)-d&&Rr(w>32?Jc(j+";",r,n,d-1,a):Jc(N(j," ","")+";",r,n,d-2,a),a);break;case 59:j+=";";default:if(Rr(A=Yc(j,t,n,c,f,i,s,m,S=[],E=[],d,o),o),p===123)if(f===0)uo(j,t,A,A,S,o,d,s,E);else switch(y===99&&se(j,3)===110?100:y){case 100:case 108:case 109:case 115:uo(e,A,A,r&&Rr(Yc(e,A,A,0,0,i,s,m,i,S=[],d,E),E),i,E,d,s,r?S:E);break;default:uo(j,A,A,A,[""],E,0,s,E)}}c=f=w=0,x=h=1,m=j="",d=l;break;case 58:d=1+at(j),w=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&h1()==125)continue}switch(j+=Tu(p),p*x){case 38:h=f>0?1:(j+="\f",-1);break;case 44:s[c++]=(at(j)-1)*h,h=1;break;case 64:pn()===45&&(j+=Xl(rt())),y=pn(),f=d=at(m=j+=w1(ao())),p++;break;case 45:v===45&&at(j)==2&&(x=0)}}return o}function Yc(e,t,n,r,i,o,l,s,a,c,f,d){for(var y=i-1,w=i===0?o:[""],v=ch(w),x=0,C=0,h=0;x<r;++x)for(var p=0,m=tr(e,y+1,y=ah(C=l[x])),S=e;p<v;++p)(S=uh(C>0?w[p]+" "+m:N(m,/&\f/g,w[p])))&&(a[h++]=S);return dl(e,t,n,i===0?ul:s,a,c,f,d)}function C1(e,t,n,r){return dl(e,t,n,lh,Tu(p1()),tr(e,2,-2),0,r)}function Jc(e,t,n,r,i){return dl(e,t,n,Au,tr(e,0,r),tr(e,r+1,-1),r,i)}function fh(e,t,n){switch(d1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Dr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Dr+e+G+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+G+e+e;case 6165:return F+e+G+"flex-"+e+e;case 5187:return F+e+N(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return F+e+G+"flex-item-"+N(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":G+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return F+e+G+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+G+N(e,"shrink","negative")+e;case 5292:return F+e+G+N(e,"basis","preferred-size")+e;case 6060:return F+"box-"+N(e,"-grow","")+F+e+G+N(e,"grow","positive")+e;case 4554:return F+N(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!ht(e,/flex-|baseline/))return G+"grid-column-align"+tr(e,t)+e;break;case 2592:case 3360:return G+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~so(e+(n=n[t].value),"span",0)?e:G+N(e,"-start","")+e+G+"grid-row-span:"+(~so(n,"span",0)?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":G+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:G+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Dr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~so(e,"stretch",0)?fh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,c){return G+i+":"+o+c+(l?G+i+"-span:"+(s?a:+a-+o)+c:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+G+"$2box$3")+e;case 100:return N(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Fo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function k1(e,t,n,r){switch(e.type){case c1:if(e.children.length)break;case u1:case Au:return e.return=e.return||e.value;case lh:return"";case sh:return e.return=e.value+"{"+Fo(e.children,r)+"}";case ul:if(!at(e.value=e.props.join(",")))return""}return at(n=Fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function E1(e){var t=ch(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function j1(e){return function(t){t.root||(t=t.return)&&e(t)}}function A1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Au:e.return=fh(e.value,e.length,n);return;case sh:return Fo([Rt(e,{value:N(e.value,"@","@"+F)})],r);case ul:if(e.length)return f1(n=e.props,function(i){switch(ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(Rt(e,{props:[N(i,/:(read-\w+)/,":"+Dr+"$1")]})),An(Rt(e,{props:[i]})),pa(e,{props:qc(n,r)});break;case"::placeholder":An(Rt(e,{props:[N(i,/:(plac\w+)/,":"+F+"input-$1")]})),An(Rt(e,{props:[N(i,/:(plac\w+)/,":"+Dr+"$1")]})),An(Rt(e,{props:[N(i,/:(plac\w+)/,G+"input-$1")]})),An(Rt(e,{props:[i]})),pa(e,{props:qc(n,r)});break}return""})}}var T1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},rr=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",ph="active",hh="data-styled-version",pl="6.1.12",Ru=`/*!sc*/
`,Bo=typeof window<"u"&&"HTMLElement"in window,R1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),P1={},hl=Object.freeze([]),ir=Object.freeze({});function mh(e,t,n){return n===void 0&&(n=ir),e.theme!==n.theme&&e.theme||t||n.theme}var gh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),z1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_1=/(^-|-$)/g;function Xc(e){return e.replace(z1,"-").replace(_1,"")}var I1=/(a)(d)/gi,Ni=52,Zc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ga(e){var t,n="";for(t=Math.abs(e);t>Ni;t=t/Ni|0)n=Zc(t%Ni)+n;return(Zc(t%Ni)+n).replace(I1,"$1-$2")}var Zl,yh=5381,Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vh=function(e){return Un(yh,e)};function xh(e){return ga(vh(e)>>>0)}function L1(e){return e.displayName||e.name||"Component"}function es(e){return typeof e=="string"&&!0}var wh=typeof Symbol=="function"&&Symbol.for,Sh=wh?Symbol.for("react.memo"):60115,b1=wh?Symbol.for("react.forward_ref"):60112,N1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},O1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$1=((Zl={})[b1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zl[Sh]=Ch,Zl);function ed(e){return("type"in(t=e)&&t.type.$$typeof)===Sh?Ch:"$$typeof"in e?$1[e.$$typeof]:N1;var t}var D1=Object.defineProperty,F1=Object.getOwnPropertyNames,td=Object.getOwnPropertySymbols,B1=Object.getOwnPropertyDescriptor,U1=Object.getPrototypeOf,nd=Object.prototype;function kh(e,t,n){if(typeof t!="string"){if(nd){var r=U1(t);r&&r!==nd&&kh(e,r,n)}var i=F1(t);td&&(i=i.concat(td(t)));for(var o=ed(e),l=ed(t),s=0;s<i.length;++s){var a=i[s];if(!(a in O1||n&&n[a]||l&&a in l||o&&a in o)){var c=B1(t,a);try{D1(e,a,c)}catch{}}}}return e}function or(e){return typeof e=="function"}function Pu(e){return typeof e=="object"&&"styledComponentId"in e}function un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ya(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ri(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function va(e,t,n){if(n===void 0&&(n=!1),!n&&!ri(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=va(e[r],t[r]);else if(ri(t))for(var r in t)e[r]=va(e[r],t[r]);return e}function zu(e,t){Object.defineProperty(e,"toString",{value:t})}function fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw fi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Ru);return n},e}(),co=new Map,Uo=new Map,fo=1,Oi=function(e){if(co.has(e))return co.get(e);for(;Uo.has(fo);)fo++;var t=fo++;return co.set(e,t),Uo.set(t,e),t},H1=function(e,t){fo=t+1,co.set(e,t),Uo.set(t,e)},W1="style[".concat(rr,"][").concat(hh,'="').concat(pl,'"]'),V1=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Q1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ru),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(V1);if(a){var c=0|parseInt(a[1],10),f=a[2];c!==0&&(H1(f,c),G1(e,f,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},rd=function(e){for(var t=document.querySelectorAll(W1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(rr)!==ph&&(Q1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function K1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Eh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(rr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(rr,ph),r.setAttribute(hh,pl);var l=K1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},q1=function(){function e(t){this.element=Eh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw fi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Y1=function(){function e(t){this.element=Eh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),J1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),id=Bo,X1={isServer:!Bo,useCSSOMInjection:!R1},Mo=function(){function e(t,n,r){t===void 0&&(t=ir),n===void 0&&(n={});var i=this;this.options=me(me({},X1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Bo&&id&&(id=!1,rd(this)),zu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",c=function(d){var y=function(h){return Uo.get(h)}(d);if(y===void 0)return"continue";var w=o.names.get(y),v=l.getGroup(d);if(w===void 0||!w.size||v.length===0)return"continue";var x="".concat(rr,".g").concat(d,'[id="').concat(y,'"]'),C="";w!==void 0&&w.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(v).concat(x,'{content:"').concat(C,'"}').concat(Ru)},f=0;f<s;f++)c(f);return a}(i)})}return e.registerId=function(t){return Oi(t)},e.prototype.rehydrate=function(){!this.server&&Bo&&rd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new J1(i):r?new q1(i):new Y1(i)}(this.options),new M1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Z1=/&/g,ey=/^\s*\/\/.*$/gm;function jh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jh(n.children,t)),n})}function ty(e){var t,n,r,i=ir,o=i.options,l=o===void 0?ir:o,s=i.plugins,a=s===void 0?hl:s,c=function(y,w,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):y},f=a.slice();f.push(function(y){y.type===ul&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Z1,n).replace(r,c))}),l.prefix&&f.push(A1),f.push(k1);var d=function(y,w,v,x){w===void 0&&(w=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=y.replace(ey,""),h=S1(v||w?"".concat(v," ").concat(w," { ").concat(C," }"):C);l.namespace&&(h=jh(h,l.namespace));var p=[];return Fo(h,E1(f.concat(j1(function(m){return p.push(m)})))),p};return d.hash=a.length?a.reduce(function(y,w){return w.name||fi(15),Un(y,w.name)},yh).toString():"",d}var ny=new Mo,xa=ty(),Ah=et.createContext({shouldForwardProp:void 0,styleSheet:ny,stylis:xa});Ah.Consumer;et.createContext(void 0);function wa(){return R.useContext(Ah)}var ry=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=xa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,zu(this,function(){throw fi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xa),this.name+t.hash},e}(),iy=function(e){return e>="A"&&e<="Z"};function od(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;iy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Th=function(e){return e==null||e===!1||e===""},Rh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Th(o)&&(Array.isArray(o)&&o.isCss||or(o)?r.push("".concat(od(i),":"),o,";"):ri(o)?r.push.apply(r,ni(ni(["".concat(i," {")],Rh(o),!1),["}"],!1)):r.push("".concat(od(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in T1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wt(e,t,n,r){if(Th(e))return[];if(Pu(e))return[".".concat(e.styledComponentId)];if(or(e)){if(!or(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wt(i,t,n,r)}var o;return e instanceof ry?n?(e.inject(n,r),[e.getName(r)]):[e]:ri(e)?Rh(e):Array.isArray(e)?Array.prototype.concat.apply(hl,e.map(function(l){return Wt(l,t,n,r)})):[e.toString()]}function Ph(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(or(n)&&!Pu(n))return!1}return!0}var oy=vh(pl),ly=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ph(t),this.componentId=n,this.baseHash=Un(oy,n),this.baseStyle=r,Mo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=un(i,this.staticRulesId);else{var o=ya(Wt(this.rules,t,n,r)),l=ga(Un(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=un(i,l),this.staticRulesId=l}else{for(var a=Un(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var y=ya(Wt(d,t,n,r));a=Un(a,y+f),c+=y}}if(c){var w=ga(a>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=un(i,w)}}return i},e}(),_u=et.createContext(void 0);_u.Consumer;var ts={};function sy(e,t,n){var r=Pu(e),i=e,o=!es(e),l=t.attrs,s=l===void 0?hl:l,a=t.componentId,c=a===void 0?function(S,E){var A=typeof S!="string"?"sc":Xc(S);ts[A]=(ts[A]||0)+1;var j="".concat(A,"-").concat(xh(pl+A+ts[A]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):a,f=t.displayName,d=f===void 0?function(S){return es(S)?"styled.".concat(S):"Styled(".concat(L1(S),")")}(e):f,y=t.displayName&&t.componentId?"".concat(Xc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,E){return x(S,E)&&C(S,E)}}else v=x}var h=new ly(n,y,r?i.componentStyle:void 0);function p(S,E){return function(A,j,_){var B=A.attrs,O=A.componentStyle,Re=A.defaultProps,Xt=A.foldedComponentIds,Zt=A.styledComponentId,gi=A.target,El=et.useContext(_u),pr=wa(),en=A.shouldForwardProp||pr.shouldForwardProp,P=mh(j,El,Re)||ir,I=function(Et,Pe,ft){for(var hr,nn=me(me({},Pe),{className:void 0,theme:ft}),jl=0;jl<Et.length;jl+=1){var yi=or(hr=Et[jl])?hr(nn):hr;for(var jt in yi)nn[jt]=jt==="className"?un(nn[jt],yi[jt]):jt==="style"?me(me({},nn[jt]),yi[jt]):yi[jt]}return Pe.className&&(nn.className=un(nn.className,Pe.className)),nn}(B,j,P),L=I.as||gi,M={};for(var H in I)I[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&I.theme===P||(H==="forwardedAs"?M.as=I.forwardedAs:en&&!en(H,L)||(M[H]=I[H]));var tn=function(Et,Pe){var ft=wa(),hr=Et.generateAndInjectStyles(Pe,ft.styleSheet,ft.stylis);return hr}(O,I),Ke=un(Xt,Zt);return tn&&(Ke+=" "+tn),I.className&&(Ke+=" "+I.className),M[es(L)&&!gh.has(L)?"class":"className"]=Ke,M.ref=_,R.createElement(L,M)}(m,S,E)}p.displayName=d;var m=et.forwardRef(p);return m.attrs=w,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?un(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=y,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var A=[],j=1;j<arguments.length;j++)A[j-1]=arguments[j];for(var _=0,B=A;_<B.length;_++)va(E,B[_],!0);return E}({},i.defaultProps,S):S}}),zu(m,function(){return".".concat(m.styledComponentId)}),o&&kh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ld(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sd=function(e){return Object.assign(e,{isCss:!0})};function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(or(e)||ri(e))return sd(Wt(ld(hl,ni([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wt(r):sd(Wt(ld(r,t)))}function Sa(e,t,n){if(n===void 0&&(n=ir),!t)throw fi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,zh.apply(void 0,ni([i],o,!1)))};return r.attrs=function(i){return Sa(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sa(e,t,me(me({},n),i))},r}var _h=function(e){return Sa(sy,e)},g=_h;gh.forEach(function(e){g[e]=_h(e)});var ay=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ph(t),Mo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ya(Wt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Mo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ih(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zh.apply(void 0,ni([e],t,!1)),i="sc-global-".concat(xh(JSON.stringify(r))),o=new ay(r,i),l=function(a){var c=wa(),f=et.useContext(_u),d=et.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(d,a,c.styleSheet,f,c.stylis),et.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,a,c.styleSheet,f,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,a,c.styleSheet,f,c.stylis]),null};function s(a,c,f,d,y){if(o.isStatic)o.renderStyles(a,P1,f,y);else{var w=me(me({},c),{theme:mh(c,d,l.defaultProps)});o.renderStyles(a,w,f,y)}}return et.memo(l)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const ad="popstate";function uy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Ca("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ho(i)}return dy(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cy(){return Math.random().toString(36).substr(2,8)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:n,key:t&&t.key||r||cy()})}function Ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Nt.Pop,a=null,c=f();c==null&&(c=0,l.replaceState(ii({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function d(){s=Nt.Pop;let C=f(),h=C==null?null:C-c;c=C,a&&a({action:s,location:x.location,delta:h})}function y(C,h){s=Nt.Push;let p=Ca(x.location,C,h);c=f()+1;let m=ud(p,c),S=x.createHref(p);try{l.pushState(m,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&a&&a({action:s,location:x.location,delta:1})}function w(C,h){s=Nt.Replace;let p=Ca(x.location,C,h);c=f();let m=ud(p,c),S=x.createHref(p);l.replaceState(m,"",S),o&&a&&a({action:s,location:x.location,delta:0})}function v(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Ho(C);return p=p.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return s},get location(){return e(i,l)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,d),a=C,()=>{i.removeEventListener(ad,d),a=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:w,go(C){return l.go(C)}};return x}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function fy(e,t,n){return n===void 0&&(n="/"),py(e,t,n,!1)}function py(e,t,n,r){let i=typeof t=="string"?cr(t):t,o=Iu(i.pathname||"/",n);if(o==null)return null;let l=bh(e);hy(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let c=jy(o);s=ky(l[a],c,r)}return s}function bh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Vt([r,a.relativePath]),f=n.concat(a);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bh(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Sy(c,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Nh(o.path))i(o,l,a)}),t}function Nh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Nh(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function hy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const my=/^:[\w-]+$/,gy=3,yy=2,vy=1,xy=10,wy=-2,dd=e=>e==="*";function Sy(e,t){let n=e.split("/"),r=n.length;return n.some(dd)&&(r+=wy),t&&(r+=yy),n.filter(i=>!dd(i)).reduce((i,o)=>i+(my.test(o)?gy:o===""?vy:xy),r)}function Cy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ky(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=fd({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),y=a.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=fd({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Vt([o,d.pathname]),pathnameBase:Py(Vt([o,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(o=Vt([o,d.pathnameBase]))}return l}function fd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ey(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:y,isOptional:w}=f;if(y==="*"){let x=s[d]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[d];return w&&!v?c[y]=void 0:c[y]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Ey(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function jy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Iu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ay(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?cr(e):e;return{pathname:n?n.startsWith("/")?n:Ty(n,t):t,search:zy(r),hash:_y(i)}}function Ty(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ns(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ry(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oh(e,t){let n=Ry(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $h(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=cr(e):(i=ii({},e),ne(!i.pathname||!i.pathname.includes("?"),ns("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),ns("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),ns("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),d-=1;i.pathname=y.join("/")}s=d>=0?t[d]:"/"}let a=Ay(i,s),c=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),Py=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dh=["post","put","patch","delete"];new Set(Dh);const Ly=["get",...Dh];new Set(Ly);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const Lu=R.createContext(null),by=R.createContext(null),kn=R.createContext(null),ml=R.createContext(null),En=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Fh=R.createContext(null);function Ny(e,t){let{relative:n}=t===void 0?{}:t;pi()||ne(!1);let{basename:r,navigator:i}=R.useContext(kn),{hash:o,pathname:l,search:s}=Uh(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Vt([r,l])),i.createHref({pathname:a,search:s,hash:o})}function pi(){return R.useContext(ml)!=null}function gl(){return pi()||ne(!1),R.useContext(ml).location}function Bh(e){R.useContext(kn).static||R.useLayoutEffect(e)}function bu(){let{isDataRoute:e}=R.useContext(En);return e?Ky():Oy()}function Oy(){pi()||ne(!1);let e=R.useContext(Lu),{basename:t,future:n,navigator:r}=R.useContext(kn),{matches:i}=R.useContext(En),{pathname:o}=gl(),l=JSON.stringify(Oh(i,n.v7_relativeSplatPath)),s=R.useRef(!1);return Bh(()=>{s.current=!0}),R.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=$h(c,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Vt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,l,o,e])}function Uh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(kn),{matches:i}=R.useContext(En),{pathname:o}=gl(),l=JSON.stringify(Oh(i,r.v7_relativeSplatPath));return R.useMemo(()=>$h(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function $y(e,t){return Dy(e,t)}function Dy(e,t,n,r){pi()||ne(!1);let{navigator:i}=R.useContext(kn),{matches:o}=R.useContext(En),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=gl(),f;if(t){var d;let C=typeof t=="string"?cr(t):t;a==="/"||(d=C.pathname)!=null&&d.startsWith(a)||ne(!1),f=C}else f=c;let y=f.pathname||"/",w=y;if(a!=="/"){let C=a.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=fy(e,{pathname:w}),x=Hy(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Vt([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Vt([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&x?R.createElement(ml.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Nt.Pop}},x):x}function Fy(){let e=Qy(),t=Iy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,null)}const By=R.createElement(Fy,null);class Uy extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(En.Provider,{value:this.props.routeContext},R.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function My(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(Lu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(En.Provider,{value:t},r)}function Hy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||ne(!1),l=l.slice(0,Math.min(l.length,f+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let d=l[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:y,errors:w}=n,v=d.route.loader&&y[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((f,d,y)=>{let w,v=!1,x=null,C=null;n&&(w=s&&d.route.id?s[d.route.id]:void 0,x=d.route.errorElement||By,a&&(c<0&&y===0?(v=!0,C=null):c===y&&(v=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,y+1)),p=()=>{let m;return w?m=x:v?m=C:d.route.Component?m=R.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,R.createElement(My,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?R.createElement(Uy,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Mh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mh||{}),Wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wo||{});function Wy(e){let t=R.useContext(Lu);return t||ne(!1),t}function Vy(e){let t=R.useContext(by);return t||ne(!1),t}function Gy(e){let t=R.useContext(En);return t||ne(!1),t}function Hh(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Qy(){var e;let t=R.useContext(Fh),n=Vy(Wo.UseRouteError),r=Hh(Wo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ky(){let{router:e}=Wy(Mh.UseNavigateStable),t=Hh(Wo.UseNavigateStable),n=R.useRef(!1);return Bh(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}function Ze(e){ne(!1)}function qy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nt.Pop,navigator:o,static:l=!1,future:s}=e;pi()&&ne(!1);let a=t.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:a,navigator:o,static:l,future:oi({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=cr(r));let{pathname:f="/",search:d="",hash:y="",state:w=null,key:v="default"}=r,x=R.useMemo(()=>{let C=Iu(f,a);return C==null?null:{location:{pathname:C,search:d,hash:y,state:w,key:v},navigationType:i}},[a,f,d,y,w,v,i]);return x==null?null:R.createElement(kn.Provider,{value:c},R.createElement(ml.Provider,{children:n,value:x}))}function Wh(e){let{children:t,location:n}=e;return $y(ka(t),n)}new Promise(()=>{});function ka(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let o=[...t,i];if(r.type===R.Fragment){n.push.apply(n,ka(r.props.children,o));return}r.type!==Ze&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ka(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}function Yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xy(e,t){return e.button===0&&(!t||t==="_self")&&!Jy(e)}const Zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ev="6";try{window.__reactRouterVersion=ev}catch{}const tv="startTransition",pd=J0[tv];function nv(e){let{basename:t,children:n,future:r,window:i}=e,o=R.useRef();o.current==null&&(o.current=uy({window:i,v5Compat:!0}));let l=o.current,[s,a]=R.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},f=R.useCallback(d=>{c&&pd?pd(()=>a(d)):a(d)},[a,c]);return R.useLayoutEffect(()=>l.listen(f),[l,f]),R.createElement(qy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vh=R.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:c,preventScrollReset:f,unstable_viewTransition:d}=t,y=Yy(t,Zy),{basename:w}=R.useContext(kn),v,x=!1;if(typeof c=="string"&&iv.test(c)&&(v=c,rv))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=Iu(S.pathname,w);S.origin===m.origin&&E!=null?c=E+S.search+S.hash:x=!0}catch{}let C=Ny(c,{relative:i}),h=ov(c,{replace:l,state:s,target:a,preventScrollReset:f,relative:i,unstable_viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return R.createElement("a",Ea({},y,{href:v||C,onClick:x||o?r:p,ref:n,target:a}))});var hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hd||(hd={}));var md;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(md||(md={}));function ov(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,a=bu(),c=gl(),f=Uh(e,{relative:l});return R.useCallback(d=>{if(Xy(d,n)){d.preventDefault();let y=r!==void 0?r:Ho(c)===Ho(f);a(e,{replace:y,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,a,f,r,i,n,e,o,l,s])}const Gh="/assets/img/DiaGreenLogo-No-Title-Clear-Background-3FMOHvgW.png",lv="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic:round-menu'%3e%3cpath%20id='Vector'%20d='M5.33333%2024H26.6667C27.4%2024%2028%2023.4%2028%2022.6667C28%2021.9333%2027.4%2021.3333%2026.6667%2021.3333H5.33333C4.6%2021.3333%204%2021.9333%204%2022.6667C4%2023.4%204.6%2024%205.33333%2024ZM5.33333%2017.3333H26.6667C27.4%2017.3333%2028%2016.7333%2028%2016C28%2015.2667%2027.4%2014.6667%2026.6667%2014.6667H5.33333C4.6%2014.6667%204%2015.2667%204%2016C4%2016.7333%204.6%2017.3333%205.33333%2017.3333ZM4%209.33333C4%2010.0667%204.6%2010.6667%205.33333%2010.6667H26.6667C27.4%2010.6667%2028%2010.0667%2028%209.33333C28%208.6%2027.4%208%2026.6667%208H5.33333C4.6%208%204%208.6%204%209.33333Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",sv=g.nav`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,av=g.div`
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`,uv=g.img`
  height: 50px;
  cursor: pointer;
`,cv=g.h1`
  font-size: 2.5rem;
  margin: 0 auto;
  font-family: "Aileron-Black", "Aileron-Heavy", "Aileron-Bold";
  font-weight: 900;
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 394px) {
    font-size: 2.3rem;
  }
  @media (max-width: 321px) {
    font-size: 1.9rem;
  }
`,dv=g.span`
  color: var(--green);
`,fv=g.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`,pv=g.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${e=>e.$isOpen?"calc(100vh - 70px)":"0"};
  background-color: #ffffff;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  box-shadow: ${e=>e.$isOpen?"0 4px 6px rgba(0, 0, 0, 0.1)":"none"};
  z-index: 999;
`,hv=g.div`
  width: 100%;
  padding: 8% 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;
`,gd=g(Vh)`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-family: "Aileron-Bold";
  text-decoration: none;
  color: black;
  padding: 4% 0;
  border-bottom: 1px solid #f0f0f0;

  &:active {
    color: var(--green);
  }
`,mv=g.button`
  width: 100%;
  max-width: 250px;
  font-size: clamp(1.8rem, 4vw, 2rem);
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 56px;
  margin-top: 6%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }
`,yd=g.span`
  color: #77b9f3;
`,gv=()=>{const[e,t]=R.useState(!1),n=bu(),r=()=>{t(!e)},i=()=>{t(!1),n("/"),window.scrollTo({top:0,behavior:"smooth"})},o=s=>{t(!1),n(s),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},50)},l=()=>{t(!1),window.location.pathname==="/"?setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},100):(n("/"),setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},500))};return u.jsxs(u.Fragment,{children:[u.jsx(sv,{children:u.jsxs(av,{children:[u.jsx(uv,{onClick:i,src:Gh,alt:"Día Dev & Design Logo"}),u.jsxs(cv,{children:[u.jsx(yd,{children:"<"}),u.jsx(dv,{children:"Día"}),u.jsx(yd,{children:": Dev & Design />"})]}),u.jsx(fv,{onClick:r,"aria-label":"Toggle menu",children:u.jsx("img",{src:lv,alt:"Menu"})})]})}),u.jsx(pv,{$isOpen:e,children:u.jsxs(hv,{children:[u.jsx(gd,{to:"/",onClick:()=>o("/"),children:"Home"}),u.jsx(gd,{to:"/about",onClick:()=>o("/about"),children:"About Us"}),u.jsx(mv,{onClick:l,children:"Contact Us"})]})})]})},Qh="/assets/img/DevBro-BrzQ5_d1.svg",yv=g.div`
  width: 100%;
  min-height: 85vh;
  padding: 4% 5%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`,vv=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
`,$i=g.h1`
  font-size: clamp(3.2rem, 8vw, 4.8rem);
  margin: 0 0 2%;
  font-family: "Aileron-Bold";
  line-height: 1.2;
`,xv=g.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,wv=g.p`
  width: 100%;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  text-align: left;
  margin: 4% 0;
`,Sv=g.button`
  width: 100%;
  max-width: 200px;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 48px;
  padding: 0;
  margin-top: 4%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }
`,Cv=g.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  img {
    width: 100%;
    height: auto;
  }
`,kv=g.span`
  color: #77b9f3;
`,Ev=()=>{const e=()=>{setTimeout(()=>{const t=document.getElementById("contact");if(t){const i=t.offsetTop-70;window.scrollTo({top:i,behavior:"smooth"})}},100)};return u.jsxs(yv,{children:[u.jsxs(vv,{children:[u.jsxs($i,{children:["Every-",u.jsx(kv,{children:"Día"}),". "]}),u.jsx($i,{children:"We build."}),u.jsx($i,{children:"We create."}),u.jsxs($i,{children:["You ",u.jsx(xv,{children:"succeed"}),"!"]}),u.jsx(wv,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(Sv,{onClick:e,children:"Contact Us"})]}),u.jsx(Cv,{children:u.jsx("img",{src:Qh,alt:"Developer illustration"})})]})},Kh="data:image/svg+xml,%3csvg%20width='119'%20height='96'%20viewBox='0%200%20119%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M117.318%200H1.68181C0.885686%200%200.236359%200.59896%200.236359%201.33333V94.6667C0.236359%2095.4063%200.885686%2096%201.68181%2096H117.318C118.12%2096%20118.764%2095.4063%20118.764%2094.6667V1.33333C118.764%200.59896%20118.12%200%20117.318%200ZM3.12727%202.66667H115.873V20H3.12727V2.66667ZM115.873%2093.3333H3.12727V22.6667H115.873V93.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_2'%20d='M13.9682%206.66666C11.1789%206.66666%208.90909%208.76039%208.90909%2011.3333C8.90909%2013.9063%2011.1789%2016%2013.9682%2016C16.7575%2016%2019.0273%2013.9063%2019.0273%2011.3333C19.0273%208.76039%2016.7575%206.66666%2013.9682%206.66666ZM13.9682%2013.3333C12.7712%2013.3333%2011.8%2012.4375%2011.8%2011.3333C11.8%2010.2292%2012.7712%209.33332%2013.9682%209.33332C15.1652%209.33332%2016.1364%2010.2292%2016.1364%2011.3333C16.1364%2012.4375%2015.1652%2013.3333%2013.9682%2013.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_3'%20d='M41.3754%2069.9267C41.6577%2070.1871%2042.0304%2070.3173%2042.3974%2070.3173C42.7644%2070.3173%2043.1371%2070.1871%2043.4194%2069.9267C43.984%2069.4058%2043.984%2068.5621%2043.4194%2068.0412L32.5334%2057.9996L43.4194%2047.958C43.984%2047.4372%2043.984%2046.5934%2043.4194%2046.0725C42.8548%2045.5517%2041.9401%2045.5517%2041.3754%2046.0725L29.4673%2057.0569C28.9027%2057.5777%2028.9027%2058.4214%2029.4673%2058.9424L41.3754%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_4'%20d='M75.3769%2069.9267C75.6592%2070.1871%2076.0319%2070.3173%2076.3989%2070.3173C76.7659%2070.3173%2077.1385%2070.1871%2077.4209%2069.9267L89.3289%2058.9423C89.8936%2058.4214%2089.8936%2057.5777%2089.3289%2057.0568L77.4209%2046.0724C76.8562%2045.5516%2075.9416%2045.5516%2075.3768%2046.0724C74.8122%2046.5932%2074.8122%2047.4369%2075.3768%2047.9579L86.2628%2057.9995L75.3768%2068.0411C74.8122%2068.5619%2074.8123%2069.4057%2075.3769%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_5'%20d='M49.7547%2079.2293C49.9354%2079.3022%2050.1274%2079.3335%2050.3137%2079.3335C50.8783%2079.3335%2051.4147%2079.0262%2051.6462%2078.5158L69.8156%2038.5158C70.1261%2037.8387%2069.7761%2037.0574%2069.0421%2036.771C68.3024%2036.4897%2067.461%2036.8074%2067.1505%2037.4845L48.9812%2077.4845C48.6706%2078.1616%2049.0207%2078.9429%2049.7547%2079.2293Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_6'%20d='M109.667%207.05734C109.103%206.53651%20108.188%206.53651%20107.623%207.05734L105.032%209.44801L102.44%207.05734C101.875%206.53651%20100.961%206.53651%20100.396%207.05734C99.8312%207.57816%2099.8313%208.42187%20100.396%208.9428L102.988%2011.3335L100.396%2013.7241C99.8313%2014.245%2099.8313%2015.0887%20100.396%2015.6096C100.678%2015.87%20101.051%2016.0002%20101.418%2016.0002C101.785%2016.0002%20102.158%2015.87%20102.44%2015.6096L105.032%2013.2189L107.623%2015.6096C107.906%2015.87%20108.278%2016.0002%20108.645%2016.0002C109.012%2016.0002%20109.385%2015.87%20109.667%2015.6096C110.232%2015.0888%20110.232%2014.2451%20109.667%2013.7241L107.076%2011.3335L109.667%208.9428C110.232%208.42198%20110.232%207.57827%20109.667%207.05734Z'%20fill='%23070D0D'/%3e%3c/g%3e%3c/svg%3e",qh="/assets/img/CustomApplicationsNew-CGRyDJpo.svg",Yh="/assets/img/ProblemSolutionsNew-DGYs1PFU.svg",Jh="/assets/img/TalentIncubatorNew-Z-AuMXFv.svg",jv=g.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 6% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,Av=g.div`
  width: 100%;
  margin-bottom: 8%;
`,Tv=g.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 5%;
  font-family: "Aileron-Bold";
`,Rv=g.div`
  width: 100%;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  line-height: 2.2rem;

  p {
    margin: 0 0 4%;
    text-align: left;
  }
`,Pv=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,zv=g.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,_v=g.div`
  display: flex;
  flex-direction: column;
  gap: 50%;
  width: 100%;
`,yl=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 6%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
  margin-top: 5%;
`,Iv=g(yl)`
  background-color: #edf3ff;
  margin-top: 0;
`,Lv=g(yl)`
  background-color: #fffaec;
`,bv=g(yl)`
  background-color: #f0fff4;
`,Nv=g(yl)`
  background-color: #fff5f3;
`,Di=g.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`,Fi=g.img`
  width: 100%;
  height: auto;
`,Bi=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Ui=g.h3`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 700;
  color: #77b9f3;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
`,Mi=g.p`
  font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.3px;
  margin: 0;
  color: #070d0d;
`,Ov=()=>u.jsxs(jv,{children:[u.jsxs(Av,{children:[u.jsx(Tv,{children:"We Are"}),u.jsxs(Rv,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(Pv,{children:[u.jsx(zv,{children:"What We Do"}),u.jsxs(_v,{children:[u.jsxs(Iv,{children:[u.jsx(Di,{children:u.jsx(Fi,{src:Kh,alt:"Web Development"})}),u.jsxs(Bi,{children:[u.jsx(Ui,{children:"Web Development"}),u.jsx(Mi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs(Lv,{children:[u.jsx(Di,{children:u.jsx(Fi,{src:qh,alt:"Custom Applications"})}),u.jsxs(Bi,{children:[u.jsx(Ui,{children:"Custom Applications"}),u.jsx(Mi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(bv,{children:[u.jsx(Di,{children:u.jsx(Fi,{src:Yh,alt:"Marketing Solutions"})}),u.jsxs(Bi,{children:[u.jsx(Ui,{children:"Marketing"}),u.jsx(Mi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(Nv,{children:[u.jsx(Di,{children:u.jsx(Fi,{src:Jh,alt:"Tech Talent Incubator"})}),u.jsxs(Bi,{children:[u.jsx(Ui,{children:"Tech Incubator"}),u.jsx(Mi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]});function Xh(e,t){return function(){return e.apply(t,arguments)}}const{toString:$v}=Object.prototype,{getPrototypeOf:Nu}=Object,vl=(e=>t=>{const n=$v.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=e=>(e=e.toLowerCase(),t=>vl(t)===e),xl=e=>t=>typeof t===e,{isArray:dr}=Array,li=xl("undefined");function Dv(e){return e!==null&&!li(e)&&e.constructor!==null&&!li(e.constructor)&&$e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zh=ot("ArrayBuffer");function Fv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zh(e.buffer),t}const Bv=xl("string"),$e=xl("function"),e0=xl("number"),wl=e=>e!==null&&typeof e=="object",Uv=e=>e===!0||e===!1,po=e=>{if(vl(e)!=="object")return!1;const t=Nu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Mv=ot("Date"),Hv=ot("File"),Wv=ot("Blob"),Vv=ot("FileList"),Gv=e=>wl(e)&&$e(e.pipe),Qv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||$e(e.append)&&((t=vl(e))==="formdata"||t==="object"&&$e(e.toString)&&e.toString()==="[object FormData]"))},Kv=ot("URLSearchParams"),[qv,Yv,Jv,Xv]=["ReadableStream","Request","Response","Headers"].map(ot),Zv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),dr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function t0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const cn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,n0=e=>!li(e)&&e!==cn;function ja(){const{caseless:e}=n0(this)&&this||{},t={},n=(r,i)=>{const o=e&&t0(t,i)||i;po(t[o])&&po(r)?t[o]=ja(t[o],r):po(r)?t[o]=ja({},r):dr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&hi(arguments[r],n);return t}const e2=(e,t,n,{allOwnKeys:r}={})=>(hi(t,(i,o)=>{n&&$e(i)?e[o]=Xh(i,n):e[o]=i},{allOwnKeys:r}),e),t2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),n2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},r2=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Nu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},i2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},o2=e=>{if(!e)return null;if(dr(e))return e;let t=e.length;if(!e0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},l2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nu(Uint8Array)),s2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},a2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},u2=ot("HTMLFormElement"),c2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),vd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),d2=ot("RegExp"),r0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};hi(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},f2=e=>{r0(e,(t,n)=>{if($e(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($e(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},p2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return dr(e)?r(e):r(String(e).split(t)),n},h2=()=>{},m2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,rs="abcdefghijklmnopqrstuvwxyz",xd="0123456789",i0={DIGIT:xd,ALPHA:rs,ALPHA_DIGIT:rs+rs.toUpperCase()+xd},g2=(e=16,t=i0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function y2(e){return!!(e&&$e(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const v2=e=>{const t=new Array(10),n=(r,i)=>{if(wl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=dr(r)?[]:{};return hi(r,(l,s)=>{const a=n(l,i+1);!li(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},x2=ot("AsyncFunction"),w2=e=>e&&(wl(e)||$e(e))&&$e(e.then)&&$e(e.catch),o0=((e,t)=>e?setImmediate:t?((n,r)=>(cn.addEventListener("message",({source:i,data:o})=>{i===cn&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),cn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",$e(cn.postMessage)),S2=typeof queueMicrotask<"u"?queueMicrotask.bind(cn):typeof process<"u"&&process.nextTick||o0,k={isArray:dr,isArrayBuffer:Zh,isBuffer:Dv,isFormData:Qv,isArrayBufferView:Fv,isString:Bv,isNumber:e0,isBoolean:Uv,isObject:wl,isPlainObject:po,isReadableStream:qv,isRequest:Yv,isResponse:Jv,isHeaders:Xv,isUndefined:li,isDate:Mv,isFile:Hv,isBlob:Wv,isRegExp:d2,isFunction:$e,isStream:Gv,isURLSearchParams:Kv,isTypedArray:l2,isFileList:Vv,forEach:hi,merge:ja,extend:e2,trim:Zv,stripBOM:t2,inherits:n2,toFlatObject:r2,kindOf:vl,kindOfTest:ot,endsWith:i2,toArray:o2,forEachEntry:s2,matchAll:a2,isHTMLForm:u2,hasOwnProperty:vd,hasOwnProp:vd,reduceDescriptors:r0,freezeMethods:f2,toObjectSet:p2,toCamelCase:c2,noop:h2,toFiniteNumber:m2,findKey:t0,global:cn,isContextDefined:n0,ALPHABET:i0,generateString:g2,isSpecCompliantForm:y2,toJSONObject:v2,isAsyncFn:x2,isThenable:w2,setImmediate:o0,asap:S2};function b(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const l0=b.prototype,s0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s0[e]={value:e}});Object.defineProperties(b,s0);Object.defineProperty(l0,"isAxiosError",{value:!0});b.from=(e,t,n,r,i,o)=>{const l=Object.create(l0);return k.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),b.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const C2=null;function Aa(e){return k.isPlainObject(e)||k.isArray(e)}function a0(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function wd(e,t,n){return e?e.concat(t).map(function(i,o){return i=a0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function k2(e){return k.isArray(e)&&!e.some(Aa)}const E2=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Sl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!k.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!a&&k.isBlob(v))throw new b("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,x,C){let h=v;if(v&&!C&&typeof v=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&k2(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(h=k.toArray(v)))return x=a0(x),h.forEach(function(m,S){!(k.isUndefined(m)||m===null)&&t.append(l===!0?wd([x],S,o):l===null?x:x+"[]",c(m))}),!1}return Aa(v)?!0:(t.append(wd(C,x,o),c(v)),!1)}const d=[],y=Object.assign(E2,{defaultVisitor:f,convertValue:c,isVisitable:Aa});function w(v,x){if(!k.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),k.forEach(v,function(h,p){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(p)?p.trim():p,x,y))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Sd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ou(e,t){this._pairs=[],e&&Sl(e,this,t)}const u0=Ou.prototype;u0.append=function(t,n){this._pairs.push([t,n])};u0.toString=function(t){const n=t?function(r){return t.call(this,r,Sd)}:Sd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function j2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function c0(e,t,n){if(!t)return e;const r=n&&n.encode||j2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Ou(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Cd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const d0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A2=typeof URLSearchParams<"u"?URLSearchParams:Ou,T2=typeof FormData<"u"?FormData:null,R2=typeof Blob<"u"?Blob:null,P2={isBrowser:!0,classes:{URLSearchParams:A2,FormData:T2,Blob:R2},protocols:["http","https","file","blob","url","data"]},$u=typeof window<"u"&&typeof document<"u",Ta=typeof navigator=="object"&&navigator||void 0,z2=$u&&(!Ta||["ReactNative","NativeScript","NS"].indexOf(Ta.product)<0),_2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",I2=$u&&window.location.href||"http://localhost",L2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$u,hasStandardBrowserEnv:z2,hasStandardBrowserWebWorkerEnv:_2,navigator:Ta,origin:I2},Symbol.toStringTag,{value:"Module"})),Ae={...L2,...P2};function b2(e,t){return Sl(e,new Ae.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ae.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function N2(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function O2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function f0(e){function t(n,r,i,o){let l=n[o++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&k.isArray(i)?i.length:l,a?(k.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!k.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&k.isArray(i[l])&&(i[l]=O2(i[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(N2(r),i,n,0)}),n}return null}function $2(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const mi={transitional:d0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(f0(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return b2(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Sl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),$2(t)):t}],transformResponse:[function(t){const n=this.transitional||mi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?b.from(s,b.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{mi.headers[e]={}});const D2=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),F2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&D2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},kd=Symbol("internals");function kr(e){return e&&String(e).trim().toLowerCase()}function ho(e){return e===!1||e==null?e:k.isArray(e)?e.map(ho):String(e)}function B2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const U2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function is(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function M2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function H2(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Te{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,c){const f=kr(a);if(!f)throw new Error("header name must be a non-empty string");const d=k.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||a]=ho(s))}const l=(s,a)=>k.forEach(s,(c,f)=>o(c,f,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!U2(t))l(F2(t),n);else if(k.isHeaders(t))for(const[s,a]of t.entries())o(a,s,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=kr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return B2(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=kr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||is(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=kr(l),l){const s=k.findKey(r,l);s&&(!n||is(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||is(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const l=k.findKey(r,o);if(l){n[l]=ho(i),delete n[o];return}const s=t?M2(o):String(o).trim();s!==o&&delete n[o],n[s]=ho(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[kd]=this[kd]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=kr(l);r[s]||(H2(i,l),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Te.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Te);function os(e,t){const n=this||mi,r=t||n,i=Te.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function p0(e){return!!(e&&e.__CANCEL__)}function fr(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(fr,b,{__CANCEL__:!0});function h0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function W2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function V2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),f=r[o];l||(l=c),n[i]=a,r[i]=c;let d=o,y=0;for(;d!==i;)y+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-l<t)return;const w=f&&c-f;return w?Math.round(y*1e3/w):void 0}}function G2(e,t){let n=0,r=1e3/t,i,o;const l=(c,f=Date.now())=>{n=f,i=null,o&&(clearTimeout(o),o=null),e.apply(null,c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=r?l(c,f):(i=c,o||(o=setTimeout(()=>{o=null,l(i)},r-d)))},()=>i&&l(i)]}const Vo=(e,t,n=3)=>{let r=0;const i=V2(50,250);return G2(o=>{const l=o.loaded,s=o.lengthComputable?o.total:void 0,a=l-r,c=i(a),f=l<=s;r=l;const d={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&f?(s-l)/c:void 0,event:o,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},Ed=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},jd=e=>(...t)=>k.asap(()=>e(...t)),Q2=Ae.hasStandardBrowserEnv?function(){const t=Ae.navigator&&/(msie|trident)/i.test(Ae.navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=k.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),K2=Ae.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function q2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Y2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function m0(e,t){return e&&!q2(t)?Y2(e,t):t}const Ad=e=>e instanceof Te?{...e}:e;function wn(e,t){t=t||{};const n={};function r(c,f,d){return k.isPlainObject(c)&&k.isPlainObject(f)?k.merge.call({caseless:d},c,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function i(c,f,d){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function o(c,f){if(!k.isUndefined(f))return r(void 0,f)}function l(c,f){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function s(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(c,f)=>i(Ad(c),Ad(f),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,y=d(e[f],t[f],f);k.isUndefined(y)&&d!==s||(n[f]=y)}),n}const g0=e=>{const t=wn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:l,auth:s}=t;t.headers=l=Te.from(l),t.url=c0(m0(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(k.isFormData(n)){if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[c,...f]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];l.setContentType([c||"multipart/form-data",...f].join("; "))}}if(Ae.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Q2(t.url))){const c=i&&o&&K2.read(o);c&&l.set(i,c)}return t},J2=typeof XMLHttpRequest<"u",X2=J2&&function(e){return new Promise(function(n,r){const i=g0(e);let o=i.data;const l=Te.from(i.headers).normalize();let{responseType:s,onUploadProgress:a,onDownloadProgress:c}=i,f,d,y,w,v;function x(){w&&w(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function h(){if(!C)return;const m=Te.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!s||s==="text"||s==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:m,config:e,request:C};h0(function(j){n(j),x()},function(j){r(j),x()},E),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new b("Request aborted",b.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||d0;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new b(S,E.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,C)),C=null},o===void 0&&l.setContentType(null),"setRequestHeader"in C&&k.forEach(l.toJSON(),function(S,E){C.setRequestHeader(E,S)}),k.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),s&&s!=="json"&&(C.responseType=i.responseType),c&&([y,v]=Vo(c,!0),C.addEventListener("progress",y)),a&&C.upload&&([d,w]=Vo(a),C.upload.addEventListener("progress",d),C.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(f=m=>{C&&(r(!m||m.type?new fr(null,e,C):m),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const p=W2(i.url);if(p&&Ae.protocols.indexOf(p)===-1){r(new b("Unsupported protocol "+p+":",b.ERR_BAD_REQUEST,e));return}C.send(o||null)})},Z2=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,s();const f=c instanceof Error?c:this.reason;r.abort(f instanceof b?f:new fr(f instanceof Error?f.message:f))}};let l=t&&setTimeout(()=>{l=null,o(new b(`timeout ${t} of ms exceeded`,b.ETIMEDOUT))},t);const s=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>k.asap(s),a}},ex=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},tx=async function*(e,t){for await(const n of nx(e))yield*ex(n,t)},nx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Td=(e,t,n,r)=>{const i=tx(e,t);let o=0,l,s=a=>{l||(l=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:c,value:f}=await i.next();if(c){s(),a.close();return}let d=f.byteLength;if(n){let y=o+=d;n(y)}a.enqueue(new Uint8Array(f))}catch(c){throw s(c),c}},cancel(a){return s(a),i.return()}},{highWaterMark:2})},Cl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",y0=Cl&&typeof ReadableStream=="function",rx=Cl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),v0=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ix=y0&&v0(()=>{let e=!1;const t=new Request(Ae.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Rd=64*1024,Ra=y0&&v0(()=>k.isReadableStream(new Response("").body)),Go={stream:Ra&&(e=>e.body)};Cl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Go[t]&&(Go[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new b(`Response type '${t}' is not supported`,b.ERR_NOT_SUPPORT,r)})})})(new Response);const ox=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Ae.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await rx(e)).byteLength},lx=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??ox(t)},sx=Cl&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:c,headers:f,withCredentials:d="same-origin",fetchOptions:y}=g0(e);c=c?(c+"").toLowerCase():"text";let w=Z2([i,o&&o.toAbortSignal()],l),v;const x=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(a&&ix&&n!=="get"&&n!=="head"&&(C=await lx(f,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),A;if(k.isFormData(r)&&(A=E.headers.get("content-type"))&&f.setContentType(A),E.body){const[j,_]=Ed(C,Vo(jd(a)));r=Td(E.body,Rd,j,_)}}k.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...y,signal:w,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let p=await fetch(v);const m=Ra&&(c==="stream"||c==="response");if(Ra&&(s||m&&x)){const E={};["status","statusText","headers"].forEach(B=>{E[B]=p[B]});const A=k.toFiniteNumber(p.headers.get("content-length")),[j,_]=s&&Ed(A,Vo(jd(s),!0))||[];p=new Response(Td(p.body,Rd,j,()=>{_&&_(),x&&x()}),E)}c=c||"text";let S=await Go[k.findKey(Go,c)||"text"](p,e);return!m&&x&&x(),await new Promise((E,A)=>{h0(E,A,{data:S,headers:Te.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(h){throw x&&x(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,e,v),{cause:h.cause||h}):b.from(h,h&&h.code,e,v)}}),Pa={http:C2,xhr:X2,fetch:sx};k.forEach(Pa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pd=e=>`- ${e}`,ax=e=>k.isFunction(e)||e===null||e===!1,x0={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!ax(n)&&(r=Pa[(l=String(n)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(Pd).join(`
`):" "+Pd(o[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Pa};function ls(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fr(null,e)}function zd(e){return ls(e),e.headers=Te.from(e.headers),e.data=os.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),x0.getAdapter(e.adapter||mi.adapter)(e).then(function(r){return ls(e),r.data=os.call(e,e.transformResponse,r),r.headers=Te.from(r.headers),r},function(r){return p0(r)||(ls(e),r&&r.response&&(r.response.data=os.call(e,e.transformResponse,r.response),r.response.headers=Te.from(r.response.headers))),Promise.reject(r)})}const w0="1.7.7",Du={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Du[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _d={};Du.transitional=function(t,n,r){function i(o,l){return"[Axios v"+w0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new b(i(l," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!_d[l]&&(_d[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function ux(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new b("option "+o+" must be "+a,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const za={assertOptions:ux,validators:Du},Tt=za.validators;class hn{constructor(t){this.defaults=t,this.interceptors={request:new Cd,response:new Cd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&za.assertOptions(r,{silentJSONParsing:Tt.transitional(Tt.boolean),forcedJSONParsing:Tt.transitional(Tt.boolean),clarifyTimeoutError:Tt.transitional(Tt.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:za.assertOptions(i,{encode:Tt.function,serialize:Tt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Te.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(a=a&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,y;if(!a){const v=[zd.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,c),y=v.length,f=Promise.resolve(n);d<y;)f=f.then(v[d++],v[d++]);return f}y=s.length;let w=n;for(d=0;d<y;){const v=s[d++],x=s[d++];try{w=v(w)}catch(C){x.call(this,C);break}}try{f=zd.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,y=c.length;d<y;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=wn(this.defaults,t);const n=m0(t.baseURL,t.url);return c0(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){hn.prototype[t]=function(n,r){return this.request(wn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(wn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}hn.prototype[t]=n(),hn.prototype[t+"Form"]=n(!0)});class Fu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new fr(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Fu(function(i){t=i}),cancel:t}}}function cx(e){return function(n){return e.apply(null,n)}}function dx(e){return k.isObject(e)&&e.isAxiosError===!0}const _a={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_a).forEach(([e,t])=>{_a[t]=e});function S0(e){const t=new hn(e),n=Xh(hn.prototype.request,t);return k.extend(n,hn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return S0(wn(e,i))},n}const re=S0(mi);re.Axios=hn;re.CanceledError=fr;re.CancelToken=Fu;re.isCancel=p0;re.VERSION=w0;re.toFormData=Sl;re.AxiosError=b;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=cx;re.isAxiosError=dx;re.mergeConfig=wn;re.AxiosHeaders=Te;re.formToJSON=e=>f0(k.isHTMLForm(e)?new FormData(e):e);re.getAdapter=x0.getAdapter;re.HttpStatusCode=_a;re.default=re;const fx="https://diapage-server.fly.dev",C0=(e,t)=>{let n=localStorage.getItem("authToken");return re.post(fx+e,t,{headers:{Authorization:`Bearer ${n}`}})},k0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9471%201.02847C24.0017%200.892169%2024.015%200.742859%2023.9855%200.599044C23.956%200.45523%2023.885%200.323236%2023.7812%200.219426C23.6774%200.115616%2023.5454%200.0445561%2023.4015%200.0150549C23.2577%20-0.0144463%2023.1084%20-0.00109103%2022.9721%200.053465L1.15162%208.78197H1.15012L0.472125%209.05196C0.34371%209.10319%200.231953%209.18891%200.149198%209.29966C0.0664433%209.41041%200.0159116%209.54188%200.00318483%209.67955C-0.00954198%209.81721%200.0160314%209.95572%200.0770801%2010.0798C0.138129%2010.2038%200.232277%2010.3086%200.349125%2010.3825L0.964125%2010.7725L0.965625%2010.7755L8.45812%2015.5425L13.2251%2023.035L13.2281%2023.038L13.6181%2023.653C13.6923%2023.7694%2013.7971%2023.863%2013.921%2023.9237C14.045%2023.9844%2014.1833%2024.0097%2014.3207%2023.9968C14.4581%2023.9839%2014.5892%2023.9334%2014.6998%2023.8508C14.8103%2023.7681%2014.8959%2023.6566%2014.9471%2023.5285L23.9471%201.02847ZM21.1976%203.86347L9.95662%2015.1045L9.63412%2014.5975C9.57503%2014.5044%209.49616%2014.4256%209.40312%2014.3665L8.89612%2014.044L20.1371%202.80296L21.9041%202.09646L21.1991%203.86347H21.1976Z'%20fill='%23EEEEEE'/%3e%3c/svg%3e",E0="/assets/img/Dog-DhZuYJLQ.svg",j0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='EnvelopeFill'%3e%3cpath%20id='Vector'%20d='M0.075%205.3325C0.226227%204.66986%200.597983%204.07822%201.12938%203.65446C1.66078%203.23071%202.32033%202.99995%203%203H21C21.6797%202.99995%2022.3392%203.23071%2022.8706%203.65446C23.402%204.07822%2023.7738%204.66986%2023.925%205.3325L12%2012.621L0.075%205.3325ZM0%207.0455V17.7015L8.7045%2012.3645L0%207.0455ZM10.1415%2013.245L0.2865%2019.2855C0.52999%2019.7989%200.91429%2020.2326%201.39467%2020.5362C1.87505%2020.8397%202.43176%2021.0005%203%2021H21C21.5681%2021.0001%2022.1246%2020.8389%2022.6048%2020.5351C23.0849%2020.2313%2023.4688%2019.7975%2023.712%2019.284L13.857%2013.2435L12%2014.379L10.1415%2013.2435V13.245ZM15.2955%2012.366L24%2017.7015V7.0455L15.2955%2012.3645V12.366Z'%20fill='%2302A66A'/%3e%3c/g%3e%3c/svg%3e",px=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #01402f;
  padding: 8% 5%;
  box-sizing: border-box;
`,hx=g.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
  text-align: center;
`,mx=g.h3`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,gx=g.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,yx=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
  margin-bottom: 8%;
  color: white;

  img {
    width: 24px;
    height: auto;
  }
`,vx=g.span`
  color: white;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 500;
`,xx=g.img`
  width: 30%;
  max-width: 150px;
  margin-bottom: -2%;
  position: relative;
  z-index: 1;
`,wx=g.div`
  width: 100%;
  min-height: 70vh;
  background-color: #eeeeee;
  border-radius: 16px;
  padding: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,Sx=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Cx=g.span`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin-bottom: 4%;
  font-weight: 500;
`,kx=g.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  margin-bottom: 6%;
`,Tn=g.button`
  flex-basis: calc(50% - 1.5%);
  min-height: 48px;
  padding: 12px;
  border-radius: 8px;
  font-size: clamp(1.4rem, 3.5vw, 1.6rem);
  border: 1px solid var(--gray);
  background-color: white;
  color: #b4a7bc;
  margin-bottom: 3%;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;

  // &:hover {
  //   background-color: #a9e6b9;
  //   color: black;
  // }

  // &:active {
  //   background-color: var(--green);
  // }

  ${e=>e.$active&&`
    background-color: #77b9f3;
    color: black;
    border-color: var(--green);
    `}
`,Ex=g.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ss=g.label`
  color: var(--gray);
  font-size: ${e=>e.$active?"1.3rem":"1.6rem"};
  margin-top: ${e=>e.$active?"4%":"6%"};
  margin-bottom: 1%;
  transition: font-size 0.3s ease;
`,Id=g.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`,jx=g.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  min-height: 80px;
  resize: vertical;
  transition: border-color 0.3s ease;
`,Ax=g.button`
  width: 100%;
  max-width: 250px;
  height: 56px;
  background-color: var(--green);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
  font-size: 1.8rem;
  color: white;
  border: none;
  margin: 8% auto 0;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
  }

  img {
    width: 24px;
    height: auto;
  }

  p {
    margin: 0;
  }
`,Tx=g.p`
  white-space: pre-wrap;
  color: white;
  font-family: "Aileron-Bold";
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 900;
  text-align: center;
  margin-top: 10%;
`,Rx=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(null),[i,o]=R.useState({name:"",email:"",message:""}),[l,s]=R.useState(""),a=(d,y)=>{let w=[...e],v=w.findIndex(x=>x===y);v>-1?w.splice(v,1):w.push(y),t(w)},c=d=>{o(y=>({...y,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(y=>{console.log(y.data.message),s(y.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(y=>{console.log(y)})};return R.useEffect(()=>{const d=()=>r(null);return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),u.jsxs(px,{id:"contact",children:[u.jsx(hx,{children:"Get In Touch"}),u.jsxs(mx,{children:["Let's discuss something ",u.jsx(gx,{children:"cool"})," together!"]}),u.jsxs(yx,{children:[u.jsx("img",{src:j0,alt:"Email icon"}),u.jsx(vx,{children:"info@diadevdesign.com"})]}),l?u.jsx(Tx,{children:l}):u.jsxs(u.Fragment,{children:[u.jsx(xx,{src:E0,alt:"Dog mascot"}),u.jsx(wx,{children:u.jsxs(Sx,{children:[u.jsx(Cx,{children:"I'm interested in..."}),u.jsxs(kx,{children:[u.jsx(Tn,{$active:e.includes("Web Development"),onClick:d=>a(d,"Web Development"),children:"Web Development"}),u.jsx(Tn,{$active:e.includes("UX/UI Design"),onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"}),u.jsx(Tn,{$active:e.includes("Marketing"),onClick:d=>a(d,"Marketing"),children:"Marketing"}),u.jsx(Tn,{$active:e.includes("Custom APIs"),onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"}),u.jsx(Tn,{$active:e.includes("AI Apps/Agents"),onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"}),u.jsx(Tn,{$active:e.includes("Other"),onClick:d=>a(d,"Other"),children:"Other"})]}),u.jsxs(Ex,{onSubmit:f,children:[u.jsx(ss,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Id,{type:"text",name:"name",id:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d),required:!0}),u.jsx(ss,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Id,{type:"email",name:"email",id:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d),required:!0}),u.jsx(ss,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx(jx,{name:"message",id:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d),required:!0}),u.jsxs(Ax,{type:"submit",children:[u.jsx("img",{src:k0,alt:"Send message icon"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})},Px=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #f2f2f2;
`,zx=()=>u.jsxs(Px,{children:[u.jsx(Ev,{}),u.jsx(Ov,{}),u.jsx(Rx,{})]}),_x="/assets/fonts/Aileron-Regular-CtKlDjcc.otf",Ix="/assets/fonts/Aileron-Bold-BWrAr8GE.otf",Lx="/assets/fonts/Aileron-Black-DX8rpg6F.otf",bx="/assets/fonts/Aileron-BlackItalic-CDBNzfOi.otf",Nx="/assets/fonts/Aileron-BoldItalic-BpRWpHqE.otf",Ox="/assets/fonts/Aileron-Heavy-CNC5NjKR.otf",$x="/assets/fonts/Aileron-HeavyItalic-Cu9nKrNV.otf",Dx="/assets/fonts/Aileron-Italic-DYUE3e7y.otf",Fx="/assets/fonts/Aileron-Light-LZTtHK4h.otf",Bx="/assets/fonts/Aileron-LightItalic-WKAGcBBf.otf",Ux="/assets/fonts/Aileron-SemiBold-C3IbYb9I.otf",Mx="/assets/fonts/Aileron-SemiBoldItalic-DLbJRGCk.otf",Hx="/assets/fonts/Aileron-Thin-Brp9Y9vu.otf",Wx="/assets/fonts/Aileron-ThinItalic-CWr2f7xD.otf",Vx="/assets/fonts/Aileron-UltraLight-Cw0yx4GS.otf",Gx="/assets/fonts/Aileron-UltraLightItalic-B5h6okXt.otf",Qx=Ih`

@font-face {
  font-family: "Aileron-Regular";   /*Can be any text*/
  src: url(${_x}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black";   /*Can be any text*/
  src: url(${Lx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black-Italic";   /*Can be any text*/
  src: url(${bx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold";   /*Can be any text*/
  src: url(${Ix}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold-Italic";   /*Can be any text*/
  src: url(${Nx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy";   /*Can be any text*/
  src: url(${Ox}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy-Italic";   /*Can be any text*/
  src: url(${$x}) format("opentype");
}

@font-face {
  font-family: "Aileron-Italic";   /*Can be any text*/
  src: url(${Dx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light";   /*Can be any text*/
  src: url(${Fx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light-Italic";   /*Can be any text*/
  src: url(${Bx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold";   /*Can be any text*/
  src: url(${Ux}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold-Italic";   /*Can be any text*/
  src: url(${Mx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin";   /*Can be any text*/
  src: url(${Hx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin-Italic";   /*Can be any text*/
  src: url(${Wx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite";   /*Can be any text*/
  src: url(${Vx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite-Italic";   /*Can be any text*/
  src: url(${Gx}) format("opentype");
}

  /* ============================================================
     LIGHT MODE ENFORCEMENT (styled-components layer)
     ============================================================ */

  :root {
    color-scheme: only light !important;
    font-family: "Aileron-Regular", 'Inter Variable', 'poppins', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    background-color: #F2F2F2 !important;
    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
    background-color: #F2F2F2 !important;
    color-scheme: only light !important;
    filter: none !important;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2F2F2 !important;
  }

  @media (prefers-color-scheme: light) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      color-scheme: only light !important;
      filter: none !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      color-scheme: only light !important;
      filter: none !important;
    }
  }

  @media (forced-colors: active) {
    *, *::before, *::after {
      forced-color-adjust: none !important;
    }
  }

  * {
    color-scheme: only light !important;
  }
`,A0="/assets/img/DiaGreenLogo-2-b3J3yriU.png",Kx=g.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
`,qx=g.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
  width: 100%;
`,as=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  width: 100%;
`,Yx=g.div`
  width: 100%;
  max-width: 310px;
  height: 310px;
  margin: 8% auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`,Jx=()=>u.jsxs(Kx,{children:[u.jsx(qx,{children:"Our Story"}),u.jsx(as,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(as,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and individuals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(as,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."}),u.jsx(Yx,{children:u.jsx("img",{src:A0,alt:"Día Dev & Design Logo"})})]}),Xx=g.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
`,Zx=g.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
  width: 100%;
`,ew=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  width: 100%;
`,tw=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4%;
  margin-top: 4%;
`,nw=g.div`
  display: flex;
  align-items: flex-start;
  gap: 8%;
  padding: 2%;
  box-sizing: border-box;
`,rw=g.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: 100%;
    height: 100%;
  }
`,iw=g.p`
  flex: 1;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,ow=()=>{const e=[{icon:"🎯",text:"We are committed to empowering your business with cutting-edge solutions that align with your goals."},{icon:"⚙️",text:"Our primary focus is on delivering customized technology that caters to your unique requirements."},{icon:"🤝",text:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}];return u.jsxs(Xx,{children:[u.jsx(Zx,{children:"Why We Do It"}),u.jsx(ew,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsx(tw,{children:e.map((t,n)=>u.jsxs(nw,{children:[u.jsx(rw,{children:u.jsx("span",{style:{fontSize:"32px"},children:t.icon})}),u.jsx(iw,{children:t.text})]},n))})]})},T0="data:image/svg+xml,%3csvg%20width='1512'%20height='657'%20viewBox='0%200%201512%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M962.408%2046.0762C1037.52%2065.7203%201108.42%2084.265%201184.4%2084.2649C1385.21%2084.2649%201512%2017.7214%201512%2017.7214V175.219H0V0C38.0005%200%2073.3722%207.92574%20113.298%2016.872C200.793%2036.4769%20310.159%2060.9827%20516.994%2017.7214C704.245%20-21.444%20839.001%2013.8002%20962.408%2046.0762ZM1512%20175.219V602.831C1512%20602.831%201253.7%20548.888%20964.688%20602.831C761.911%20640.679%20733.582%20637.047%20626.749%20623.35C581.316%20617.526%20521.685%20609.88%20428.4%20602.831C115.763%20579.206%200.000242615%20656.775%200.000242615%20656.775V175.219H1512Z'%20fill='%2377B9F3'/%3e%3c/svg%3e",R0="/assets/img/Fishermen-D8grav2G.svg",lw=g.section`
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 4% 0;
  box-sizing: border-box;
  overflow: hidden;
`,sw=g.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
`,aw=g.div`
  position: absolute;
  bottom: -238%;
  left: -10%;
  width: 220%;
  height: auto;
  z-index: 1;

  @media (max-width: 321px) {
    bottom: -188%;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`,uw=g.div`
  position: relative;
  width: 100%;
  max-width: 212px;
  margin-bottom: 15px;
  z-index: 5;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 5;
  }
`,cw=g.section`
  width: 100%;
  background-color: #77b9f3;
  padding: 0 4% 8%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 0;
`,dw=g.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 6% 0;
  text-align: center;
  position: relative;
  z-index: 3;
`,Ld=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Roboto", "Aileron-Regular", sans-serif;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  text-align: center;
  max-width: 361px;
  position: relative;
  z-index: 3;
`,fw=()=>u.jsxs(u.Fragment,{children:[u.jsx(lw,{children:u.jsxs(sw,{children:[u.jsx(aw,{children:u.jsx("img",{src:T0,alt:"Ocean waves"})}),u.jsx(uw,{children:u.jsx("img",{src:R0,alt:"Fisherman in boat"})})]})}),u.jsxs(cw,{children:[u.jsx(dw,{children:"We Bring Good Tech to Life!"}),u.jsx(Ld,{children:"At <Dia, Dev, & Design>, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."}),u.jsx(Ld,{children:"At <Dia, Dev, & Design>, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."})]})]}),P0="/assets/img/Plant-BKSABYCs.svg",pw=g.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
`,bd=g.div`
  width: 100%;
  background: rgba(119, 185, 243, 0.3);
  backdrop-filter: blur(5px);
  border: 8px solid #77b9f3;
  border-radius: 20px;
  padding: 6%;
  box-sizing: border-box;
  box-shadow:
    4px -4px 6px 2px inset rgba(0, 0, 0, 0.25),
    -4px 4px 6px 2px inset rgba(0, 0, 0, 0.25);
  margin-bottom: 8%;
  position: relative;
  z-index: 3;
`,hw=g.div`
  position: relative;
  width: 100%;
`,mw=g.img`
  position: absolute;
  bottom: -16%;
  right: 0;
  width: 30%;
  max-width: 120px;
  height: auto;
  z-index: 2;
  pointer-events: none;
`,Nd=g.h3`
  font-size: clamp(2.8rem, 7vw, 3.4rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
`,Od=g.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
`,$d=g.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`,Dd=g.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0;
`,Fd=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,gw=()=>{const e=[{title:"Tailored",description:"Solutions for your unique business needs and goals."},{title:"Scalable",description:"Applications that evolve as your business grows."},{title:"Responsive",description:"Seamlessly compatible with all devices and screen sizes."},{title:"Cross-Platform Integration",description:"Incorporate custom applications with your current systems and software."},{title:"Robust Architecture",description:"Reliable and scalable software that can handle increasing loads and complexities."},{title:"User-Centered Experience",description:"Intuitive design and engaging interfaces."},{title:"Agile Development",description:"To deliver projects on time and adapt to changing requirements quickly."}],t=[{title:"Increased efficiency",description:"Save time and cut costs with automated, streamlined processes."},{title:"Competitive Advantage",description:"Cutting-edge technology to stay ahead in your industry and set you apart."},{title:"Advanced Analytics",description:"Reporting features to provide valuable insights into your operations."},{title:"Security",description:"Safeguard your data and observe compliance with advanced measures and best practices."},{title:"Maintenance and Support",description:"Keep your software up-to-date and optimized with ongoing care."}];return u.jsxs(pw,{children:[u.jsxs(bd,{children:[u.jsx(Nd,{children:"We build…"}),u.jsx(Od,{children:e.map((n,r)=>u.jsxs($d,{children:[u.jsx(Dd,{children:n.title}),u.jsx(Fd,{children:n.description})]},r))})]}),u.jsxs(hw,{children:[u.jsxs(bd,{children:[u.jsx(Nd,{children:"You get…"}),u.jsx(Od,{children:t.map((n,r)=>u.jsxs($d,{children:[u.jsx(Dd,{children:n.title}),u.jsx(Fd,{children:n.description})]},r))})]}),u.jsx(mw,{src:P0,alt:"Decorative plant illustration"})]})]})},z0="/assets/img/Hands-On-Training-CAh4lW99.svg",_0="/assets/img/Performance-CiLV-Kb0.svg",I0="/assets/img/Community-Engagement-Cuw581Qp.svg",yw=g.section`
  width: 100%;
  padding: 8% 4% 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  position: relative;
  overflow: visible;
`,vw=g.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 10% 0 8%;
  text-align: center;
  z-index: 1;
`,xw=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6%;
`,ww=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6%;
  box-sizing: border-box;
  z-index: 1;
`,Sw=g.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f0f0f0;
  margin-bottom: 6%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Cw=g.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 3%;
`,kw=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
  width: 110%;
  z-index: 99;
  overflow-y: visible;
`,Ew=()=>{const e=[{image:z0,title:"Hands-On Training",description:"Training and workshops covering the latest technologies and industry best practices."},{image:_0,title:"Performance Feedback",description:"Training and workshops covering the latest technologies and industry best practices."},{image:I0,title:"Community Engagement",description:"Participate in advancing local technological innovation and progress."}];return u.jsxs(yw,{children:[u.jsx(vw,{children:"Tech Incubator"}),u.jsx(xw,{children:e.map((t,n)=>u.jsxs(ww,{children:[u.jsx(Sw,{children:t.image?u.jsx("img",{src:t.image,alt:t.title}):u.jsx("span",{style:{fontSize:"64px",color:"#ccc"},children:"📷"})}),u.jsx(Cw,{children:t.title}),u.jsx(kw,{children:t.description})]},n))})]})},L0="/assets/img/BalloonDog-IURLZLkm.svg",jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAABtCAYAAABUf52dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZVSURBVHgB7d2LcdvGFoDhQ9wG3MFVB0YHQQdxB1EHuR3YqSC5FSSuIHYFoSsIXUGQDpgGyOwSAEVZlESJLzy+b4aRaFqTmUzsf87uApgF/VSVb9I/b9pX+n7132LzdfZmvfka3eed7tcOsWxfu+rdz2ebz9fL1fb3FX/v/Fzzmi/qAEZtFlzPXQjKIlZv2wCUsQ3DIORg1O3XFJd1vYoiv++iskgxWQYwSCJxKU0QcgDeFrEuUwyquD8JjFkXknonIl9DQKD3ROJc2iikCeH7dcxyHKpgn820keKxSPH4Ejkm88UigF4QiVOqyirtG1TrWH8XonCMb8OxsP8B1yESx9qEYTMt3MZw9hGGqE6vRfrv/Cl9/SIacBki8RrC0AdpfyPmq5h9Tt/P7W3AeYjEodIeQ1pK+l9aSvoxhKGP5u2U8dmUAacjEs9JU0NaG38f9hiGJC1LrVMwio+CAccRiX3upoYfYjrHVMcq72P8FiYMeBWR2GVJaezmO8GwhwEHEIlMHKYm33bkU9r0/r9rMuBp046EONAsR/2SYvExgAemGQlx4KHuSO1P9i7gzvQiUZXvZrH+OWxI84j0h+K3FIt8MmoeMHHTiURV3qQ4/BqOsnK4ZqPbUhQTNv5I3C0tvQ94nTrF4oNYMEXjjkRzIVyeHm4CjtfEwhFaJmSckWimhw/txjScWtrknn1cpb0Lm9yM3fgiUZVlmh5+D9MD5+dEFKM3qkgUVZn3Hn4OuLD2RJRYMDrjiERaXmqnhyrgisSCsRl+JCwv0UNiwVgMOhKWlxiAfK3FTy7MY6gGG4kUiF+cXmJA3COKQRpeJOw/MGyutWBQhhWJ5tYaf4T9B4bP8VkGYTiREAjG69O6ebbFPKBnhhGJ5gRTDoTbejNm3VLUF9MFfdH/SDT3X8p7EALBZLRHaPO+xaeAK+p1JP5Tlber5gZ9MFXd3oVHrXIVvY2EQMAD9eYYbXMyqg64gF5GQiDgWYvNA5Ga/QsTBmfTv0g0m9R/BnCobknKI1c5uX5FwikmOFa+QC/fCiRveH81ZXCs/kTCdRBwDt2UMQ/R4BX6EQmBgEupo9nPmEcTjXnAE64fieZeTHkP4iaAa1ikvwgWadrIU8bX/N59pehcPRKz6m2+UO5dAH2Sg1GvY52+FjkctaWqabpqJIqq/JD+J3wfwFDkUCzT9J8mj6JO3/8dzRJWbfoYp6tFwgODYHRyJOrYRiS/L7qILDcvFwEOznUi4VoImLJtTGITlFiuYl03HxX51/5pP+/U258zrVzc5SPhJBNwGvUz7w8ye+Tn7sKVbeOVLdvX3b9zxBPSxSORNqpzIKoAGJcuHnV+08Rnvdyz7Dao/ZuLRsJGNcBW3b6W7SmyHI58kmzZp5Nkl4tE81yIPwKAQ9SxuWL+m5NkFw7IZSJhHwLglC52HctFIlFUb39dR9wGAOc035k8TnLblfNHoipvZ54NAXAtu7ddefHzR84biWaZKV8P4dbfAP2QN8gX7cTxJX0/f+q01Vkj4bgrwCB008bnaG7wWHcfnC8SlpkAhmobjfNEwmkmgFEo4gyK5oK5mwBg0E4fibTM5LgrwDicPBIzt90AGI2TRiLfmyksMwGMxuk2rpvN6r8CgNE42SRRWGYCGJ3TTBLu8AowSieZJFw0BzBOx0eiKm/DZjXAKB0dCUdeAcbruEiYIgBG7ahImCIAxu31kTBFAIzeqyNhigAYv9dFwhQBMAmvioQpAmAaXh4JUwTAZLw4EqYIgOl4WSSq8l2YIgAm40WRSFPEjwHAZBx+F1jPiwCYnIMnCc+LAJiewyYJUwTAJB06SVQBwOQcFAnHXgGm6flIVGUVjr0CTFLx/G9Y/xAATNLTG9c2rAEm7blJogoAJuvJSMwsNQFM2uPLTZaaACbviUliZYoAmLhHIzGL2W0AMGn7I1GVZbg2AmDyHpkkLDUB8Egk0lLTuwBg8h5GwlITAK09k8TquwCA2BMJp5oA6Ny/mM4FdADs+HaSqAIAWvcikaaI7wMAWiYJAB51F4nmCXRvAgBaO5OEo68A3LeNxCxmVQDAjt09iSoAYEcTiWY/AgDuaScJ+xEAPLSJhP0IAPbp9iTKAIBvFO2twV0fAcADeZK4CQDYo7BpDcBjirRpbT8CgL3ycpNIALDXv690SKW0S/0rAAAAAElFTkSuQmCC",Aw=g.section`
  width: 100%;
  position: relative;
  height: 300px;
  background-color: #f2f2f2;
  overflow-x: hidden;
  margin-top: -30%;
  padding: 0;
  z-index: 99;
  overflow-y: visible;
  container-type: size;
`,Tw=g.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 99.7vw;
  height: calc(100cqw * 1000%);
  z-index: 2;
  pointer-events: none;
`,Rw=g.img`
  position: absolute;
  bottom: 30%;
  left: 2%;
  width: 18%;
  height: auto;
  pointer-events: none;
`,Pw=()=>u.jsxs(Aw,{children:[u.jsx(Rw,{src:L0,alt:"Decorative balloon dog illustration"}),u.jsx(Tw,{src:jw,alt:"Decorative wavy bottom shape"})]}),zw=g.div`
  width: 100%;
  min-height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`,_w=g.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`,Iw=()=>u.jsx(zw,{children:u.jsxs(_w,{children:[u.jsx(Jx,{}),u.jsx(ow,{}),u.jsx(fw,{}),u.jsx(gw,{}),u.jsx(Ew,{}),u.jsx(Pw,{})]})}),Lw=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 12% 6%;
  box-sizing: border-box;
`,bw=g.h1`
  font-size: clamp(3.6rem, 9vw, 5rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 6% 0;
  text-align: center;
`,Nw=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 10% 0;
  text-align: center;
`,Ow=g.div`
  font-size: clamp(5rem, 15vw, 8rem);
  text-align: center;
  line-height: 1;
  filter: none !important;
`,$w=()=>u.jsxs(Lw,{children:[u.jsx(bw,{children:"People"}),u.jsx(Nw,{children:"🚧 Under Construction 🚧"}),u.jsx(Ow,{children:"👷‍♂️🏗️👷‍♀️"})]}),Dw=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 12% 6%;
  box-sizing: border-box;
`,Fw=g.h1`
  font-size: clamp(3.6rem, 9vw, 5rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 6% 0;
  text-align: center;
`,Bw=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 10% 0;
  text-align: center;
`,Uw=g.div`
  font-size: clamp(5rem, 15vw, 8rem);
  text-align: center;
  line-height: 1;
  filter: none !important;
`,Mw=()=>u.jsxs(Dw,{children:[u.jsx(Fw,{children:"Client Stories"}),u.jsx(Bw,{children:"🚧 Under Construction 🚧"}),u.jsx(Uw,{children:"👷‍♂️🏗️👷‍♀️"})]}),Hw=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 12% 6%;
  box-sizing: border-box;
`,Ww=g.h1`
  font-size: clamp(3.6rem, 9vw, 5rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 6% 0;
  text-align: center;
`,Vw=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 10% 0;
  text-align: center;
`,Gw=g.div`
  font-size: clamp(5rem, 15vw, 8rem);
  text-align: center;
  line-height: 1;
  filter: none !important;
`,Qw=()=>u.jsxs(Hw,{children:[u.jsx(Ww,{children:"Services"}),u.jsx(Vw,{children:"🚧 Under Construction 🚧"}),u.jsx(Gw,{children:"👷‍♂️🏗️👷‍♀️"})]}),Kw=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`,qw=()=>u.jsxs(Kw,{children:[u.jsx(Qx,{}),u.jsx(gv,{}),u.jsxs(Wh,{children:[u.jsx(Ze,{path:"/",element:u.jsx(zx,{})}),u.jsx(Ze,{path:"/about",element:u.jsx(Iw,{})}),u.jsx(Ze,{path:"/people",element:u.jsx($w,{})}),u.jsx(Ze,{path:"/client-stories",element:u.jsx(Mw,{})}),u.jsx(Ze,{path:"/services",element:u.jsx(Qw,{})})]})]}),Yw=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 0 2%;
  box-sizing: border-box;
  background-color: #ffffff;
`,Jw=g.img`
  height: 65%;
  cursor: pointer;
`,Xw=g.h1`
  font-size: clamp(2.5rem, 3vw, 4rem);
  font-family: "Aileron-Black", "Aileron-Heavy", "Aileron-Bold";
  font-weight: 300;
  flex: 1;
  text-align: center;
  white-space: nowrap;
`,Zw=g.span`
  color: var(--green);
`,Bd=g.span`
  color: #77b9f3;
`,e3=g.div`
  height: 100%;
  width: 55%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Ud=g(Vh)`
  font-size: 2.1rem;
  font-family: "Aileron-Bold";
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &:hover {
    color: var(--green);
  }
`,t3=g.button`
  width: 33%;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 45%;
  padding: 0;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`,n3=()=>{const e=bu(),t=()=>{e("/")},n=async()=>{t(),setTimeout(()=>{const r=document.getElementById("contact");r&&window.scrollTo({top:r.getBoundingClientRect().top,behavior:"smooth"})},1)};return u.jsxs(Yw,{children:[u.jsx(Jw,{onClick:t,src:Gh,alt:"Día Dev & Design Logo"}),u.jsxs(Xw,{children:[u.jsx(Bd,{children:"<"}),u.jsx(Zw,{children:"Día"}),u.jsx(Bd,{children:": Dev & Design />"})]}),u.jsxs(e3,{children:[u.jsx(Ud,{to:"/",children:"Home"}),u.jsx(Ud,{to:"/about",children:"About Us"}),u.jsx(t3,{onClick:n,children:"Contact Us"})]})]})},r3=g.div`
  width: 1200px;
  height: inherit;
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  align-self: inherit;
`,Jt=({children:e})=>u.jsx(r3,{children:e}),i3=g.div`
  height: 85vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`,o3=g.div`
  display: flex;
  padding: 0;
  ${""}
  ${""}
  justify-content: space-between;
  align-items: center;
`,l3=g.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${""}
`,s3=g.button`
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  background-color: var(--green);
  height: 45px;
  padding: 1.5%;
  border: none;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`,Hi=g.h1`
  font-size: 6.4rem;
  margin: 0 0 2%;
`,Md=g.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,a3=g.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`,u3=g.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`,c3=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return u.jsx(i3,{children:u.jsx(Jt,{children:u.jsxs(o3,{children:[u.jsxs(l3,{children:[u.jsxs(Hi,{children:["Every-",u.jsx(Md,{id:"dia",children:"Día"}),". "]}),u.jsx(Hi,{children:"We build."}),u.jsx(Hi,{children:"We create."}),u.jsxs(Hi,{children:["You ",u.jsx(Md,{id:"dia",children:"succeed"}),"!"]}),u.jsx(a3,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(s3,{onClick:e,children:"Contact Us"})]}),u.jsx(u3,{children:u.jsx("img",{src:Qh,alt:"header-image"})})]})})})},d3=g.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
`,f3=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,p3=g.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,h3=g.span`
  font-weight: 700;
  font-size: 9.6rem;
`,m3=g.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`,g3=g.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${""}
`,y3=g.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${""}
  ${""}
`,v3=g.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`,kl=g.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9f9f9;
  font-size: 10px;
  padding: 20px;
  border-radius: 10px;
  width: 44%;
  height: 45%;
  margin-bottom: 2%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,x3=g(kl)`
  background-color: #edf3ff;
`,w3=g(kl)`
  background-color: #fffaec;
`,S3=g(kl)`
  background-color: #f0fff4;
`,C3=g(kl)`
  background-color: #fff5f3;
`,Wi=g.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
  ${""}
  ${""}
  width: 38%;
  ${""}
`,Vi=g.img`
  height: 62%;
  width: 62%;
  ${""}
`,Gi=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0;
`,Qi=g.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0;
`,Ki=g.p`
  ${""}

  color: var(--Natural-2, #070D0D);

  font-family: Aileron;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  paddding: 0;
  letter-spacing: -0.5px;
  text-align: justify;
  margin-top: 5%;
`,k3=()=>u.jsx(d3,{children:u.jsx(Jt,{children:u.jsxs(f3,{children:[u.jsxs(p3,{children:[u.jsx(h3,{children:"We Are"}),u.jsxs(m3,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(g3,{children:[u.jsx(y3,{children:"What We Do"}),u.jsxs(v3,{children:[u.jsxs(x3,{children:[u.jsx(Wi,{children:u.jsx(Vi,{src:Kh,alt:"web-dev"})}),u.jsxs(Gi,{children:[u.jsx(Qi,{children:"Web Development"}),u.jsx(Ki,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs(w3,{children:[u.jsx(Wi,{children:u.jsx(Vi,{src:qh,alt:"custom-applications"})}),u.jsxs(Gi,{children:[u.jsx(Qi,{children:"Custom Applications"}),u.jsx(Ki,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(S3,{children:[u.jsx(Wi,{children:u.jsx(Vi,{src:Yh,alt:"problem-solutions"})}),u.jsxs(Gi,{children:[u.jsx(Qi,{children:"Marketing"}),u.jsx(Ki,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(C3,{children:[u.jsx(Wi,{children:u.jsx(Vi,{src:Jh,alt:"tech-talent-incubator"})}),u.jsxs(Gi,{children:[u.jsx(Qi,{children:"Tech Incubator"}),u.jsx(Ki,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]})})}),E3=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #01402f;
  z-index: 11;
`,j3=g.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`,A3=g.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${""}
`,T3=g.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
  height: 60% ${""};
`,R3=g.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,P3=g.div`
  margin-top: -10%;
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
  width: 490px;
  text-align: left;
  color: white;
`,z3=g.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`,_3=g.div`
  width: 90%;
  min-height: 77%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justif-content: space-between;
  ${""}
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`,I3=g.img`
  width: 20%;
  ${""}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`,L3=g.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${""}
`,b3=g.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`,N3=g.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 4vh;
`,Rn=g.button`
  ${""}
  flex-basis: 30%;
  height: 47%;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  border: 1px solid;
  border-color: var(--gray);
  background-color: white;
  color: #b4a7bc;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  &:active {
    background-color: var(--green);
  }

  ${e=>e.$active&&`
    background-color: #77b9f3;
    color: black;
    border-color: var(--green);
    `}
`,O3=g.form`
  display: flex;
  flex-direction: column;
  min-height: 65%;
  height: fit-content;
  justify-content: space-evenly;
  ${""}
`,us=g.label`
  transform: translate(
    3px,
    ${e=>e.$active?"0.1rem":"1.3rem"}
  );
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${e=>e.$active?"15px":"20px"};
  transition:
    transform 0.5s ease-in-out,
    font-size 0.5s ease-in-out;
`,Hd=g.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,$3=g.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,D3=g.button`
  ${""}
  height: 2vw;
  min-width: fit-content;
  width: 15vw;
  padding: 24px 0;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-evenly;
  transform: translateY(3rem);
  ${""}
  align-items: center;
  align-self: center;
  margin-left: -2.5vw;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`,F3=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(null),[i,o]=R.useState({name:"",email:"",message:""}),[l,s]=R.useState(""),a=(d,y)=>{let w=[...e],v=w.findIndex(x=>x===y);v>-1?w.splice(v,1):w.push(y),t(w)},c=d=>{o(y=>({...y,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(y=>{console.log(y.data.message),s(y.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(y=>{console.log(y)})};return R.useEffect(()=>{document.addEventListener("mousedown",()=>r(null))},[]),u.jsx(E3,{children:u.jsx(Jt,{children:u.jsxs(A3,{id:"contact",children:[u.jsxs(T3,{children:[u.jsx(j3,{children:"Get In Touch"}),u.jsxs(P3,{children:["Let’s discuss something ",u.jsx(z3,{children:"cool"})," together!"]}),u.jsxs(L3,{children:[u.jsx("span",{children:u.jsx("img",{src:j0})}),u.jsx("span",{style:{color:"white",fontSize:"2rem",fontWeight:"500"},children:"info@diadevdesign.com"})]})]}),l?u.jsx("p",{style:{whiteSpace:"pre-wrap",color:"white",fontFamily:"Aileron-Bold",fontSize:"3.6rem",fontWeight:"900"},children:l}):u.jsxs(R3,{children:[u.jsx(I3,{src:E0,alt:"Dog Image"}),u.jsx(_3,{children:u.jsxs(b3,{children:[u.jsx("span",{children:"I’m interested in..."}),u.jsxs(N3,{children:[u.jsx(Rn,{$active:e.includes("Web Development"),value:"Web Development",onClick:d=>a(d,"Web Development"),children:"Web Development"},"button-1"),u.jsx(Rn,{$active:e.includes("UX/UI Design"),value:"UX/UI Design",onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"},"button-2"),u.jsx(Rn,{$active:e.includes("Graphic Design"),value:"Graphic Design",onClick:d=>a(d,"Graphic Design"),children:"Marketing"},"button-3"),u.jsx(Rn,{$active:e.includes("Custom APIs"),value:"Custom APIs",onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"},"button-5"),u.jsx(Rn,{$active:e.includes("AI Apps/Agents"),value:"AI Apps/Agents",onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"},"button-6"),u.jsx(Rn,{$active:e.includes("Other"),value:"Other",onClick:d=>a(d,"Other"),children:"Other"},"button-7")]}),u.jsxs(O3,{onSubmit:f,children:[u.jsx(us,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Hd,{type:"text",name:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d)}),u.jsx(us,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Hd,{type:"email",name:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d)}),u.jsx(us,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx($3,{type:"text",name:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d)}),u.jsxs(D3,{type:"submit",children:[u.jsx("img",{src:k0,alt:"send message"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})})})},B3=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,U3=()=>u.jsxs(B3,{children:[u.jsx(c3,{}),u.jsx(k3,{}),u.jsx(F3,{})]}),M3=Ih`

  /* ============================================================
     LIGHT MODE ENFORCEMENT (styled-components layer)
     ============================================================ */

  :root {
    color-scheme: only light !important;
    font-family: "Aileron-Regular", 'Inter Variable', 'poppins', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    background-color: #F2F2F2 !important;
    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
    background-color: #F2F2F2 !important;
    color-scheme: only light !important;
    filter: none !important;
  }

  body {
    margin: 0;
    padding: 0;
    width: 99vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2F2F2 !important;
  }

  @media (prefers-color-scheme: light) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      color-scheme: only light !important;
      filter: none !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      color-scheme: only light !important;
      filter: none !important;
    }
  }

  @media (forced-colors: active) {
    *, *::before, *::after {
      forced-color-adjust: none !important;
    }
  }

  * {
    color-scheme: only light !important;
  }
`,H3="/assets/img/BalloonCat-v3wmWc6F.svg",W3=g.div`
  height: 85vh;
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,V3=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,G3=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 80%;
`,Q3=g.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
`,K3=g.img`
  height: 80%;
`,q3=g.div`
  width: 95%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y3=g.img`
  height: 85%;
  margin-left: 1%;
`,J3=g.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 74%;
`,cs=g.div`
  font-size: 1.6rem;
  font-family: "Roboto";
`,X3=()=>u.jsx(W3,{children:u.jsx(Jt,{children:u.jsxs(V3,{children:[u.jsxs(G3,{children:[u.jsx(Q3,{children:"Our Story"}),u.jsx(K3,{src:H3,alt:"ballon-cat"})]}),u.jsxs(q3,{children:[u.jsx(Y3,{src:A0,alt:"dia-green-logo"}),u.jsxs(J3,{children:[u.jsx(cs,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(cs,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(cs,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})]})})}),Z3="/assets/img/TargetIcon-BDgFxHvR.svg",eS="/assets/img/EyeIcon-GMqB3cgM.svg",tS="/assets/img/HandsIcon-DC7nJpKX.svg",nS=g.div`
  ${""}
  width: 100%;

  background-color: #f2f2f2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`,rS=g(Jt)`
  flex-direction: column;
`,iS=g.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${""}
  ${""}
`,oS=g.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`,lS=g.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`,sS=g.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`,ds=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,fs=g.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ps=g.img`
  height: 60%;
`,hs=g.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`,aS=()=>u.jsx(nS,{children:u.jsxs(rS,{children:[u.jsx(iS,{children:"Why We Do It"}),u.jsxs(oS,{children:[u.jsx(lS,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsxs(sS,{children:[u.jsxs(ds,{children:[u.jsx(fs,{children:u.jsx(ps,{src:Z3,alt:"target-icon"})}),u.jsx(hs,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."})]}),u.jsxs(ds,{children:[u.jsx(fs,{children:u.jsx(ps,{src:eS,alt:"eye-icon"})}),u.jsx(hs,{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."})]}),u.jsxs(ds,{children:[u.jsx(fs,{children:u.jsx(ps,{src:tS,alt:"hands-icon"})}),u.jsx(hs,{children:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]})]})]})}),uS=g.div`
  height: 80vh;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${T0});
  background-position: 50% 100%;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  overflow-y: visible;
`,cS=g.div`
  height: 100%;
  width: 100%;
  ${""}
  z-index: 10;
  ${""}
  display: flex;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,dS=g.div`
  width: 100%;
  height: 50%;
  ${""}
  ${""}
  ${""}
  margin-top: -10%;
  z-index: 13;
  display: flex;
  flex-direction: column;
  align-items: center;
`,fS=g.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${""}
  z-index: 13
`,pS=g.img`
  width: 100%;
  height: 100%;
`,hS=g.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,mS=g.div`
  width: 100%;
  margin-top: -2%;
`,Wd=g.p`
  color: var(--Natural-2, #070d0d);
  font-family: "Roboto";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center;
  @media (min-width: 1800px) {
    font-size: 22px;
  }
`,gS=()=>u.jsx(uS,{children:u.jsxs(cS,{children:[u.jsx(fS,{children:u.jsx(pS,{src:R0,alt:"fishermen"})}),u.jsx(Jt,{children:u.jsxs(dS,{children:[u.jsx(hS,{children:"Consulting"}),u.jsxs(mS,{children:[u.jsxs(Wd,{children:["At ","<Día Dev & Design>",", we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."]}),u.jsxs(Wd,{children:["At ","<Día Dev & Design>",", we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."]})]})]})})]})}),yS=g.div`
  ${""}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 750px;
  ${""}
  margin-bottom: -10%;
  background-color: #f2f2f2;
  ${""}
`,vS=g.div`
  ${""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,xS=g.div`
  height: 100%;
  width: 100%;
  margin-top: -10%;
  display: flex;
  flex-direction: row;
  gap: 7.5%;
  justify-content: center;
  align-items: center;
  ${""}
  z-index: 1;
`,wS=g.div`
  display: flex;
  height: 60%;
  ${""}
  ${""}
  aspect-ratio: 92.5/100;
  transform: rotate(-15deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow:
    4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
  z-index: 2;
`,SS=g.div`
  display: flex;
  height: 60%;
  ${""}
  ${""}
  aspect-ratio: 92.5/100;
  transform: rotate(15deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow:
    4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
`,Vd=g.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`,Gd=g.h3`
  color: #070d0d;
  font-family: Aileron;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5% 0;
`,ze=g.div`
  align-self: stretch;
  ${""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${""}
`,_e=g.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 2rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
`,Ie=g.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 1.6rem;
  font-family: "Aileron";
  font-weight: 400;
  word-wrap: break-word;
`,CS=()=>u.jsx(yS,{children:u.jsx(Jt,{children:u.jsx(vS,{children:u.jsxs(xS,{children:[u.jsx(wS,{children:u.jsxs(Vd,{children:[u.jsx(Gd,{children:"We build..."}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Tailored"}),u.jsx(Ie,{children:"Solutions for your unique business needs and goals."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Scalable"}),u.jsx(Ie,{children:"Applications that evolve as your business grows."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Responsive"}),u.jsx(Ie,{children:"Seamlessly compatible with all devices and screen sizes."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Cross-Platform Integration"}),u.jsx(Ie,{children:"Incorporate custom applications with your current systems and software."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Robust Architecture"}),u.jsx(Ie,{children:"Reliable and scalable software that can handle increasing loads and complexities."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"User-Centered Experience"}),u.jsx(Ie,{children:"Intuitive design and engaging interfaces."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Agile Development"}),u.jsx(Ie,{children:"To deliver projects on time and adapt to changing requirements quickly."})]})]})}),u.jsx(SS,{children:u.jsxs(Vd,{children:[u.jsx(Gd,{children:"You get..."}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Increased efficiency"}),u.jsx(Ie,{children:"Save time and cut costs with automated, streamlined processes."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Competitive Advantage"}),u.jsx(Ie,{children:"Cutting-edge technology to stay ahead in your industry and set you apart."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Advanced Analytics"}),u.jsx(Ie,{children:"Reporting features to provide valuable insights into your operations."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Security"}),u.jsx(Ie,{children:"Safeguard your data and observe compliance with advanced measures and best practices."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Maintenance and Support"}),u.jsx(Ie,{children:"Keep your software up-to-date and optimized with ongoing care."})]}),u.jsxs(ze,{children:[u.jsx(_e,{children:"Excellence"}),u.jsx(Ie,{children:"With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!"})]})]})})]})})})}),kS="data:image/svg+xml,%3csvg%20width='1512'%20height='185'%20viewBox='0%200%201512%20185'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M359.888%200C672.131%20-8.65219e-05%20602.831%2071.7909%20964.688%2071.7909C1326.54%2071.7909%201512%20184.211%201512%20184.211V185H0C0%20185%2047.6438%208.65221e-05%20359.888%200Z'%20fill='%2301402F'/%3e%3c/svg%3e",ES=g.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%;
  width: 100%; /* Make sure this has a defined width */
`,jS=g.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto;
`,AS=g.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
  z-index: 2;
`,ms=g.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`,gs=g.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`,ys=g.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`,vs=g.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`,xs=g.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,TS=g.img`
  position: absolute;
  bottom: 10%;
  ${""}
  z-index: 1;
  height: 40vh;
  ${""}
  padding: 0;
  z-index: 1;

  @media (max-width: 1200px) {
    left: 85%;
    bottom: 3%;
  }
`,RS=g.img`
  width: 100vw;
  z-index: 2;
  padding: 0;
  display: block;
  margin-top: 25%;
`,PS=()=>u.jsxs(ES,{children:[u.jsx("img",{style:{height:"40vh",marginRight:"-55%",marginBottom:"-5%"},src:P0,alt:"plant-image"}),u.jsx(Jt,{style:{marginTop:"-20%",height:"fit-content"},children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"-20%"},children:[u.jsx(jS,{children:"Tech Incubator"}),u.jsxs(AS,{children:[u.jsxs(ms,{children:[u.jsx(gs,{src:z0,alt:"hands-on-training"}),u.jsxs(ys,{children:[u.jsx(vs,{children:"Hands-On Training"}),u.jsx(xs,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(ms,{children:[u.jsx(gs,{src:_0,alt:"performance"}),u.jsxs(ys,{children:[u.jsx(vs,{children:"Performance Feedback"}),u.jsx(xs,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(ms,{children:[u.jsx(gs,{src:I0,alt:"community-engagement"}),u.jsxs(ys,{children:[u.jsx(vs,{children:"Community Engagement"}),u.jsx(xs,{children:"Participate in advancing local technological innovation and progress."})]})]})]})]})}),u.jsx(TS,{src:L0,alt:"ballon-dog"}),u.jsx(RS,{src:kS,alt:"bottom-wavy-top-rectangle"})]}),zS=g.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,_S=()=>u.jsxs(zS,{children:[u.jsx(X3,{}),u.jsx(aS,{}),u.jsx(gS,{}),u.jsx(CS,{}),u.jsx(PS,{})]}),IS=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 6% 4%;
  box-sizing: border-box;
`,LS=g.h1`
  font-size: clamp(4rem, 6vw, 7rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 2% 0;
  text-align: center;
`,bS=g.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 6% 0;
  text-align: center;
`,NS=g.div`
  font-size: clamp(6rem, 10vw, 12rem);
  text-align: center;
  line-height: 1;
  margin-bottom: 3%;
  filter: none !important;
`,OS=()=>u.jsxs(IS,{children:[u.jsx(LS,{children:"People"}),u.jsx(bS,{children:"🚧 Under Construction 🚧"}),u.jsx(NS,{children:"👷‍♂️🏗️👷‍♀️"})]}),$S=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 6% 4%;
  box-sizing: border-box;
`,DS=g.h1`
  font-size: clamp(4rem, 6vw, 7rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 2% 0;
  text-align: center;
`,FS=g.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 6% 0;
  text-align: center;
`,BS=g.div`
  font-size: clamp(6rem, 10vw, 12rem);
  text-align: center;
  line-height: 1;
  margin-bottom: 3%;
  filter: none !important;
`,US=()=>u.jsxs($S,{children:[u.jsx(DS,{children:"Client Stories"}),u.jsx(FS,{children:"🚧 Under Construction 🚧"}),u.jsx(BS,{children:"👷‍♂️🏗️👷‍♀️"})]}),MS=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: #f2f2f2;
  padding: 6% 4%;
  box-sizing: border-box;
`,HS=g.h1`
  font-size: clamp(4rem, 6vw, 7rem);
  font-family: "Aileron-Bold";
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 2% 0;
  text-align: center;
`,WS=g.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-family: "Aileron-Regular";
  font-weight: 400;
  color: #888888;
  margin: 0 0 6% 0;
  text-align: center;
`,VS=g.div`
  font-size: clamp(6rem, 10vw, 12rem);
  text-align: center;
  line-height: 1;
  margin-bottom: 3%;
  filter: none !important;
`,GS=()=>u.jsxs(MS,{children:[u.jsx(HS,{children:"Services"}),u.jsx(WS,{children:"🚧 Under Construction 🚧"}),u.jsx(VS,{children:"👷‍♂️🏗️👷‍♀️"})]}),QS=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
`,KS=()=>u.jsxs(QS,{children:[u.jsx(M3,{}),u.jsx(n3,{}),u.jsxs(Wh,{children:[u.jsx(Ze,{path:"/",element:u.jsx(U3,{})}),u.jsx(Ze,{path:"/about",element:u.jsx(_S,{})}),u.jsx(Ze,{path:"/people",element:u.jsx(OS,{})}),u.jsx(Ze,{path:"/client-stories",element:u.jsx(US,{})}),u.jsx(Ze,{path:"/services",element:u.jsx(GS,{})})]})]}),qS=()=>{const[e,t]=R.useState(null),n=()=>{let r=window.innerWidth;t(r)};return R.useEffect(()=>{n();let r;const i=()=>{clearTimeout(r),r=setTimeout(()=>{n()},150)};return window.addEventListener("resize",i),()=>{clearTimeout(r),window.removeEventListener("resize",i)}},[]),u.jsx(u.Fragment,{children:e>1024?u.jsx(KS,{resize:n}):e?u.jsx(qw,{resize:n}):null})};ws.createRoot(document.getElementById("root")).render(u.jsx(et.StrictMode,{children:u.jsx(nv,{children:u.jsx(qS,{})})}));
