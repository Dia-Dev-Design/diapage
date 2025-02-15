function t0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function n0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nf={exports:{}},Uo={},Of={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),r0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),Lu=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var Lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zf=Object.assign,$f={};function ir(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Lf}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Af(){}Af.prototype=ir.prototype;function ja(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Lf}var Pa=ja.prototype=new Af;Pa.constructor=ja;zf(Pa,ir.prototype);Pa.isPureReactComponent=!0;var zu=Array.isArray,Df=Object.prototype.hasOwnProperty,Ra={current:null},If={key:!0,ref:!0,__self:!0,__source:!0};function Ff(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Df.call(t,r)&&!If.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:li,type:e,key:o,ref:l,props:i,_owner:Ra.current}}function h0(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _a(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function m0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $u=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m0(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case r0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+wl(l,0):r,zu(i)?(n="",e!=null&&(n=e.replace($u,"$&/")+"/"),bi(i,t,n,"",function(u){return u})):i!=null&&(_a(i)&&(i=h0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($u,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",zu(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+wl(o,s);l+=bi(o,t,n,a,i)}else if(a=p0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+wl(o,s++),l+=bi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yi(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Hi={transition:null},y0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:Ra};function Mf(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!_a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=ir;I.Fragment=i0;I.Profiler=l0;I.PureComponent=ja;I.StrictMode=o0;I.Suspense=c0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;I.act=Mf;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ra.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Df.call(t,a)&&!If.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:a0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};I.createElement=Ff;I.createFactory=function(e){var t=Ff.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:u0,render:e}};I.isValidElement=_a;I.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:g0}};I.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};I.unstable_act=Mf;I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return we.current.useTransition()};I.version="18.3.1";Of.exports=I;var _=Of.exports;const Ze=n0(_),v0=t0({__proto__:null,default:Ze},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=_,x0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),C0=Object.prototype.hasOwnProperty,k0=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)C0.call(t,r)&&!E0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:x0,type:e,key:o,ref:l,props:i,_owner:k0.current}}Uo.Fragment=S0;Uo.jsx=Uf;Uo.jsxs=Uf;Nf.exports=Uo;var f=Nf.exports,ps={},Bf={exports:{}},Me={},bf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var z=T.length;T.push(L);e:for(;0<z;){var b=z-1>>>1,H=T[b];if(0<i(H,L))T[b]=L,T[z]=H,z=b;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],z=T.pop();if(z!==L){T[0]=z;e:for(var b=0,H=T.length,en=H>>>1;b<en;){var Ge=2*(b+1)-1,kt=T[Ge],Te=Ge+1,ft=T[Te];if(0>i(kt,z))Te<H&&0>i(ft,kt)?(T[b]=ft,T[Te]=z,b=Te):(T[b]=kt,T[Ge]=z,b=Ge);else if(Te<H&&0>i(ft,z))T[b]=ft,T[Te]=z,b=Te;else break e}}return L}function i(T,L){var z=T.sortIndex-L.sortIndex;return z!==0?z:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,g=3,x=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function S(T){if(w=!1,m(T),!v)if(n(a)!==null)v=!0,fr(E);else{var L=n(u);L!==null&&Zt(S,L.startTime-T)}}function E(T,L){v=!1,w&&(w=!1,h(O),O=-1),x=!0;var z=g;try{for(m(L),c=n(a);c!==null&&(!(c.expirationTime>L)||T&&!_e());){var b=c.callback;if(typeof b=="function"){c.callback=null,g=c.priorityLevel;var H=b(c.expirationTime<=L);L=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(a)&&r(a),m(L)}else r(a);c=n(a)}if(c!==null)var en=!0;else{var Ge=n(u);Ge!==null&&Zt(S,Ge.startTime-L),en=!1}return en}finally{c=null,g=z,x=!1}}var P=!1,j=null,O=-1,U=5,D=-1;function _e(){return!(e.unstable_now()-D<U)}function Jt(){if(j!==null){var T=e.unstable_now();D=T;var L=!0;try{L=j(!0,T)}finally{L?Xt():(P=!1,j=null)}}else P=!1}var Xt;if(typeof p=="function")Xt=function(){p(Jt)};else if(typeof MessageChannel<"u"){var mi=new MessageChannel,yl=mi.port2;mi.port1.onmessage=Jt,Xt=function(){yl.postMessage(null)}}else Xt=function(){C(Jt,0)};function fr(T){j=T,P||(P=!0,Xt())}function Zt(T,L){O=C(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,fr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var z=g;g=L;try{return T()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=g;g=T;try{return L()}finally{g=z}},e.unstable_scheduleCallback=function(T,L,z){var b=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?b+z:b):z=b,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,T={id:d++,callback:L,priorityLevel:T,startTime:z,expirationTime:H,sortIndex:-1},z>b?(T.sortIndex=z,t(u,T),n(a)===null&&T===n(u)&&(w?(h(O),O=-1):w=!0,Zt(S,z-b))):(T.sortIndex=H,t(a,T),v||x||(v=!0,fr(E))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var L=g;return function(){var z=g;g=L;try{return T.apply(this,arguments)}finally{g=z}}}})(Hf);bf.exports=Hf;var j0=bf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=_,Fe=j0;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wf=new Set,Ir={};function xn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Ir[e]=t,e=0;e<t.length;e++)Wf.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Au={},Du={};function _0(e){return hs.call(Du,e)?!0:hs.call(Au,e)?!1:R0.test(e)?Du[e]=!0:(Au[e]=!0,!1)}function T0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N0(e,t,n,r){if(t===null||typeof t>"u"||T0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,Na);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,Na);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,Na);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oa(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N0(t,n,i,r)&&(n=null),r||i===null?_0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),za=Symbol.for("react.forward_ref"),gs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Kf=Symbol.for("react.offscreen"),Iu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Iu&&e[Iu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,xl;function Cr(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var Sl=!1;function Cl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function O0(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case Rn:return"Portal";case ms:return"Profiler";case La:return"StrictMode";case gs:return"Suspense";case ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function L0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e){var t=Gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=z0(e))}function qf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ws(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yf(e,t){t=t.checked,t!=null&&Oa(e,"checked",t,!1)}function xs(e,t){Yf(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ss(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ss(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(kr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function Jf(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Zf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){$0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function ed(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function td(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ed(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function js(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function Aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Bn=null,bn=null;function bu(e){if(e=ui(e)){if(typeof Rs!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Vo(t),Rs(e.stateNode,e.type,t))}}function nd(e){Bn?bn?bn.push(e):bn=[e]:Bn=e}function rd(){if(Bn){var e=Bn,t=bn;if(bn=Bn=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function id(e,t){return e(t)}function od(){}var kl=!1;function ld(e,t,n){if(kl)return e(t,n);kl=!0;try{return id(e,t,n)}finally{kl=!1,(Bn!==null||bn!==null)&&(od(),rd())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var _s=!1;if(vt)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){_s=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{_s=!1}function D0(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var _r=!1,ao=null,uo=!1,Ts=null,I0={onError:function(e){_r=!0,ao=e}};function F0(e,t,n,r,i,o,l,s,a){_r=!1,ao=null,D0.apply(I0,arguments)}function M0(e,t,n,r,i,o,l,s,a){if(F0.apply(this,arguments),_r){if(_r){var u=ao;_r=!1,ao=null}else throw Error(R(198));uo||(uo=!0,Ts=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hu(e){if(Sn(e)!==e)throw Error(R(188))}function U0(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hu(i),e;if(o===r)return Hu(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function ad(e){return e=U0(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var cd=Fe.unstable_scheduleCallback,Wu=Fe.unstable_cancelCallback,B0=Fe.unstable_shouldYield,b0=Fe.unstable_requestPaint,Z=Fe.unstable_now,H0=Fe.unstable_getCurrentPriorityLevel,Da=Fe.unstable_ImmediatePriority,fd=Fe.unstable_UserBlockingPriority,co=Fe.unstable_NormalPriority,W0=Fe.unstable_LowPriority,dd=Fe.unstable_IdlePriority,Bo=null,ut=null;function V0(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:G0,Q0=Math.log,K0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(Q0(e)/K0|0)|0}var Si=64,Ci=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Er(s):(o&=l,o!==0&&(r=Er(o)))}else l=n&~i,l!==0?r=Er(l):o!==0&&(r=Er(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-et(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=q0(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Ns(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function J0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var md,Fa,gd,yd,vd,Os=!1,ki=[],At=null,Dt=null,It=null,Ur=new Map,Br=new Map,Nt=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&Fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z0(e,t,n,r,i){switch(t){case"focusin":return At=mr(At,e,t,n,r,i),!0;case"dragenter":return Dt=mr(Dt,e,t,n,r,i),!0;case"mouseover":return It=mr(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ur.set(o,mr(Ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Br.set(o,mr(Br.get(o)||null,e,t,n,r,i)),!0}return!1}function wd(e){var t=on(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=sd(n),t!==null){e.blockedOn=t,vd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ls(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ps=r,n.target.dispatchEvent(r),Ps=null}else return t=ui(n),t!==null&&Fa(t),e.blockedOn=n,!1;t.shift()}return!0}function Qu(e,t,n){Wi(e)&&n.delete(t)}function em(){Os=!1,At!==null&&Wi(At)&&(At=null),Dt!==null&&Wi(Dt)&&(Dt=null),It!==null&&Wi(It)&&(It=null),Ur.forEach(Qu),Br.forEach(Qu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,em)))}function br(e){function t(i){return gr(i,e)}if(0<ki.length){gr(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&gr(At,e),Dt!==null&&gr(Dt,e),It!==null&&gr(It,e),Ur.forEach(t),Br.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)wd(n),n.blockedOn===null&&Nt.shift()}var Hn=Ct.ReactCurrentBatchConfig,po=!0;function tm(e,t,n,r){var i=B,o=Hn.transition;Hn.transition=null;try{B=1,Ma(e,t,n,r)}finally{B=i,Hn.transition=o}}function nm(e,t,n,r){var i=B,o=Hn.transition;Hn.transition=null;try{B=4,Ma(e,t,n,r)}finally{B=i,Hn.transition=o}}function Ma(e,t,n,r){if(po){var i=Ls(e,t,n,r);if(i===null)$l(e,t,r,ho,n),Vu(e,r);else if(Z0(i,e,t,n,r))r.stopPropagation();else if(Vu(e,r),t&4&&-1<X0.indexOf(e)){for(;i!==null;){var o=ui(i);if(o!==null&&md(o),o=Ls(e,t,n,r),o===null&&$l(e,t,r,ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var ho=null;function Ls(e,t,n,r){if(ho=null,e=Aa(r),e=on(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ho=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H0()){case Da:return 1;case fd:return 4;case co:case W0:return 16;case dd:return 536870912;default:return 16}default:return 16}}var Lt=null,Ua=null,Vi=null;function Sd(){if(Vi)return Vi;var e,t=Ua,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Vi=i.slice(e,1<r?1-r:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function Ku(){return!1}function Ue(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ei:Ku,this.isPropagationStopped=Ku,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Ue(or),ai=J({},or,{view:0,detail:0}),rm=Ue(ai),jl,Pl,yr,bo=J({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(jl=e.screenX-yr.screenX,Pl=e.screenY-yr.screenY):Pl=jl=0,yr=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Gu=Ue(bo),im=J({},bo,{dataTransfer:0}),om=Ue(im),lm=J({},ai,{relatedTarget:0}),Rl=Ue(lm),sm=J({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ue(sm),um=J({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Ue(um),fm=J({},or,{data:0}),qu=Ue(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hm[e])?!!t[e]:!1}function ba(){return mm}var gm=J({},ai,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Ue(gm),vm=J({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yu=Ue(vm),wm=J({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),xm=Ue(wm),Sm=J({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cm=Ue(Sm),km=J({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=Ue(km),jm=[9,13,27,32],Ha=vt&&"CompositionEvent"in window,Tr=null;vt&&"documentMode"in document&&(Tr=document.documentMode);var Pm=vt&&"TextEvent"in window&&!Tr,Cd=vt&&(!Ha||Tr&&8<Tr&&11>=Tr),Ju=" ",Xu=!1;function kd(e,t){switch(e){case"keyup":return jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function Rm(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(Xu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Xu?null:e;default:return null}}function _m(e,t){if(Tn)return e==="compositionend"||!Ha&&kd(e,t)?(e=Sd(),Vi=Ua=Lt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cd&&t.locale!=="ko"?null:t.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tm[e.type]:t==="textarea"}function jd(e,t,n,r){nd(r),t=mo(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Hr=null;function Nm(e){Dd(e,0)}function Ho(e){var t=Ln(e);if(qf(t))return e}function Om(e,t){if(e==="change")return t}var Pd=!1;if(vt){var _l;if(vt){var Tl="oninput"in document;if(!Tl){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Tl=typeof ec.oninput=="function"}_l=Tl}else _l=!1;Pd=_l&&(!document.documentMode||9<document.documentMode)}function tc(){Nr&&(Nr.detachEvent("onpropertychange",Rd),Hr=Nr=null)}function Rd(e){if(e.propertyName==="value"&&Ho(Hr)){var t=[];jd(t,Hr,e,Aa(e)),ld(Nm,t)}}function Lm(e,t,n){e==="focusin"?(tc(),Nr=t,Hr=n,Nr.attachEvent("onpropertychange",Rd)):e==="focusout"&&tc()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(Hr)}function $m(e,t){if(e==="click")return Ho(t)}function Am(e,t){if(e==="input"||e==="change")return Ho(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Dm;function Wr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hs.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,t){var n=nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Im(e){var t=Td(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_d(n.ownerDocument.documentElement,n)){if(r!==null&&Wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rc(n,o);var l=rc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fm=vt&&"documentMode"in document&&11>=document.documentMode,Nn=null,zs=null,Or=null,$s=!1;function ic(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$s||Nn==null||Nn!==so(r)||(r=Nn,"selectionStart"in r&&Wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Wr(Or,r)||(Or=r,r=mo(zs,"onSelect"),0<r.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},Nl={},Nd={};vt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Wo(e){if(Nl[e])return Nl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nd)return Nl[e]=t[n];return e}var Od=Wo("animationend"),Ld=Wo("animationiteration"),zd=Wo("animationstart"),$d=Wo("transitionend"),Ad=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Ad.set(e,t),xn(t,[e])}for(var Ol=0;Ol<oc.length;Ol++){var Ll=oc[Ol],Mm=Ll.toLowerCase(),Um=Ll[0].toUpperCase()+Ll.slice(1);Kt(Mm,"on"+Um)}Kt(Od,"onAnimationEnd");Kt(Ld,"onAnimationIteration");Kt(zd,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt($d,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M0(r,t,void 0,e),e.currentTarget=null}function Dd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;lc(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;lc(i,s,u),o=a}}}if(uo)throw e=Ts,uo=!1,Ts=null,e}function V(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var r=e+"__bubble";n.has(r)||(Id(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Pi]){e[Pi]=!0,Wf.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,zl("selectionchange",!1,t))}}function Id(e,t,n,r){switch(xd(t)){case 1:var i=tm;break;case 4:i=nm;break;default:i=Ma}n=i.bind(null,t,n,e),i=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=on(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}ld(function(){var u=o,d=Aa(n),c=[];e:{var g=Ad.get(e);if(g!==void 0){var x=Ba,v=e;switch(e){case"keypress":if(Qi(n)===0)break e;case"keydown":case"keyup":x=ym;break;case"focusin":v="focus",x=Rl;break;case"focusout":v="blur",x=Rl;break;case"beforeblur":case"afterblur":x=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=xm;break;case Od:case Ld:case zd:x=am;break;case $d:x=Cm;break;case"scroll":x=rm;break;case"wheel":x=Em;break;case"copy":case"cut":case"paste":x=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Yu}var w=(t&4)!==0,C=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Mr(p,h),S!=null&&w.push(Qr(p,S,m)))),C)break;p=p.return}0<w.length&&(g=new x(g,v,null,n,d),c.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Ps&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[wt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?on(v):null,v!==null&&(C=Sn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Gu,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Yu,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=x==null?g:Ln(x),m=v==null?g:Ln(v),g=new w(S,p+"leave",x,n,d),g.target=C,g.relatedTarget=m,S=null,on(d)===u&&(w=new w(h,p+"enter",v,n,d),w.target=m,w.relatedTarget=C,S=w),C=S,x&&v)t:{for(w=x,h=v,p=0,m=w;m;m=En(m))p++;for(m=0,S=h;S;S=En(S))m++;for(;0<p-m;)w=En(w),p--;for(;0<m-p;)h=En(h),m--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=En(w),h=En(h)}w=null}else w=null;x!==null&&sc(c,g,x,w,!1),v!==null&&C!==null&&sc(c,C,v,w,!0)}}e:{if(g=u?Ln(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var E=Om;else if(Zu(g))if(Pd)E=Am;else{E=zm;var P=Lm}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=$m);if(E&&(E=E(e,u))){jd(c,E,n,d);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Ss(g,"number",g.value)}switch(P=u?Ln(u):window,e){case"focusin":(Zu(P)||P.contentEditable==="true")&&(Nn=P,zs=u,Or=null);break;case"focusout":Or=zs=Nn=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,ic(c,n,d);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":ic(c,n,d)}var j;if(Ha)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Tn?kd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Cd&&n.locale!=="ko"&&(Tn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Tn&&(j=Sd()):(Lt=d,Ua="value"in Lt?Lt.value:Lt.textContent,Tn=!0)),P=mo(u,O),0<P.length&&(O=new qu(O,e,null,n,d),c.push({event:O,listeners:P}),j?O.data=j:(j=Ed(n),j!==null&&(O.data=j)))),(j=Pm?Rm(e,n):_m(e,n))&&(u=mo(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=j))}Dd(c,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mr(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Mr(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Mr(n,o),a!=null&&l.unshift(Qr(n,a,s))):i||(a=Mr(n,o),a!=null&&l.push(Qr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var bm=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(bm,`
`).replace(Hm,"")}function Ri(e,t,n){if(t=ac(t),ac(e)!==t&&n)throw Error(R(425))}function go(){}var As=null,Ds=null;function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(e){return uc.resolve(null).then(e).catch(Qm)}:Fs;function Qm(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);br(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),at="__reactFiber$"+lr,Kr="__reactProps$"+lr,wt="__reactContainer$"+lr,Ms="__reactEvents$"+lr,Km="__reactListeners$"+lr,Gm="__reactHandles$"+lr;function on(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cc(e);e!==null;){if(n=e[at])return n;e=cc(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Vo(e){return e[Kr]||null}var Us=[],zn=-1;function Gt(e){return{current:e}}function K(e){0>zn||(e.current=Us[zn],Us[zn]=null,zn--)}function W(e,t){zn++,Us[zn]=e.current,e.current=t}var Qt={},ge=Gt(Qt),ke=Gt(!1),hn=Qt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function yo(){K(ke),K(ge)}function fc(e,t,n){if(ge.current!==Qt)throw Error(R(168));W(ge,t),W(ke,n)}function Fd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,L0(e)||"Unknown",i));return J({},n,r)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,hn=ge.current,W(ge,e),W(ke,ke.current),!0}function dc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Fd(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,K(ke),K(ge),W(ge,e)):K(ke),W(ke,n)}var ht=null,Qo=!1,Dl=!1;function Md(e){ht===null?ht=[e]:ht.push(e)}function qm(e){Qo=!0,Md(e)}function qt(){if(!Dl&&ht!==null){Dl=!0;var e=0,t=B;try{var n=ht;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Qo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),cd(Da,qt),i}finally{B=t,Dl=!1}}return null}var $n=[],An=0,wo=null,xo=0,Be=[],be=0,mn=null,mt=1,gt="";function nn(e,t){$n[An++]=xo,$n[An++]=wo,wo=e,xo=t}function Ud(e,t,n){Be[be++]=mt,Be[be++]=gt,Be[be++]=mn,mn=e;var r=mt;e=gt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mt=1<<32-et(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function Va(e){e.return!==null&&(nn(e,1),Ud(e,1,0))}function Qa(e){for(;e===wo;)wo=$n[--An],$n[An]=null,xo=$n[--An],$n[An]=null;for(;e===mn;)mn=Be[--be],Be[be]=null,gt=Be[--be],Be[be]=null,mt=Be[--be],Be[be]=null}var De=null,Ae=null,G=!1,Xe=null;function Bd(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Ae=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Ae=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bs(e){if(G){var t=Ae;if(t){var n=t;if(!pc(e,t)){if(Bs(e))throw Error(R(418));t=Ft(n.nextSibling);var r=De;t&&pc(e,t)?Bd(r,n):(e.flags=e.flags&-4097|2,G=!1,De=e)}}else{if(Bs(e))throw Error(R(418));e.flags=e.flags&-4097|2,G=!1,De=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function _i(e){if(e!==De)return!1;if(!G)return hc(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Is(e.type,e.memoizedProps)),t&&(t=Ae)){if(Bs(e))throw bd(),Error(R(418));for(;t;)Bd(e,t),t=Ft(t.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=De?Ft(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=Ae;e;)e=Ft(e.nextSibling)}function Gn(){Ae=De=null,G=!1}function Ka(e){Xe===null?Xe=[e]:Xe.push(e)}var Ym=Ct.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mc(e){var t=e._init;return t(e._payload)}function Hd(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=bt(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,S){return p===null||p.tag!==6?(p=Hl(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function a(h,p,m,S){var E=m.type;return E===_n?d(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&mc(E)===p.type)?(S=i(p,m.props),S.ref=vr(h,p,m),S.return=h,S):(S=Zi(m.type,m.key,m.props,null,h.mode,S),S.ref=vr(h,p,m),S.return=h,S)}function u(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Wl(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function d(h,p,m,S,E){return p===null||p.tag!==7?(p=fn(m,h.mode,S,E),p.return=h,p):(p=i(p,m),p.return=h,p)}function c(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hl(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return m=Zi(p.type,p.key,p.props,null,h.mode,m),m.ref=vr(h,null,p),m.return=h,m;case Rn:return p=Wl(p,h.mode,m),p.return=h,p;case _t:var S=p._init;return c(h,S(p._payload),m)}if(kr(p)||pr(p))return p=fn(p,h.mode,m,null),p.return=h,p;Ti(h,p)}return null}function g(h,p,m,S){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vi:return m.key===E?a(h,p,m,S):null;case Rn:return m.key===E?u(h,p,m,S):null;case _t:return E=m._init,g(h,p,E(m._payload),S)}if(kr(m)||pr(m))return E!==null?null:d(h,p,m,S,null);Ti(h,m)}return null}function x(h,p,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vi:return h=h.get(S.key===null?m:S.key)||null,a(p,h,S,E);case Rn:return h=h.get(S.key===null?m:S.key)||null,u(p,h,S,E);case _t:var P=S._init;return x(h,p,m,P(S._payload),E)}if(kr(S)||pr(S))return h=h.get(m)||null,d(p,h,S,E,null);Ti(p,S)}return null}function v(h,p,m,S){for(var E=null,P=null,j=p,O=p=0,U=null;j!==null&&O<m.length;O++){j.index>O?(U=j,j=null):U=j.sibling;var D=g(h,j,m[O],S);if(D===null){j===null&&(j=U);break}e&&j&&D.alternate===null&&t(h,j),p=o(D,p,O),P===null?E=D:P.sibling=D,P=D,j=U}if(O===m.length)return n(h,j),G&&nn(h,O),E;if(j===null){for(;O<m.length;O++)j=c(h,m[O],S),j!==null&&(p=o(j,p,O),P===null?E=j:P.sibling=j,P=j);return G&&nn(h,O),E}for(j=r(h,j);O<m.length;O++)U=x(j,h,O,m[O],S),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?O:U.key),p=o(U,p,O),P===null?E=U:P.sibling=U,P=U);return e&&j.forEach(function(_e){return t(h,_e)}),G&&nn(h,O),E}function w(h,p,m,S){var E=pr(m);if(typeof E!="function")throw Error(R(150));if(m=E.call(m),m==null)throw Error(R(151));for(var P=E=null,j=p,O=p=0,U=null,D=m.next();j!==null&&!D.done;O++,D=m.next()){j.index>O?(U=j,j=null):U=j.sibling;var _e=g(h,j,D.value,S);if(_e===null){j===null&&(j=U);break}e&&j&&_e.alternate===null&&t(h,j),p=o(_e,p,O),P===null?E=_e:P.sibling=_e,P=_e,j=U}if(D.done)return n(h,j),G&&nn(h,O),E;if(j===null){for(;!D.done;O++,D=m.next())D=c(h,D.value,S),D!==null&&(p=o(D,p,O),P===null?E=D:P.sibling=D,P=D);return G&&nn(h,O),E}for(j=r(h,j);!D.done;O++,D=m.next())D=x(j,h,O,D.value,S),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?O:D.key),p=o(D,p,O),P===null?E=D:P.sibling=D,P=D);return e&&j.forEach(function(Jt){return t(h,Jt)}),G&&nn(h,O),E}function C(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===_n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vi:e:{for(var E=m.key,P=p;P!==null;){if(P.key===E){if(E=m.type,E===_n){if(P.tag===7){n(h,P.sibling),p=i(P,m.props.children),p.return=h,h=p;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&mc(E)===P.type){n(h,P.sibling),p=i(P,m.props),p.ref=vr(h,P,m),p.return=h,h=p;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===_n?(p=fn(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=Zi(m.type,m.key,m.props,null,h.mode,S),S.ref=vr(h,p,m),S.return=h,h=S)}return l(h);case Rn:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Wl(m,h.mode,S),p.return=h,h=p}return l(h);case _t:return P=m._init,C(h,p,P(m._payload),S)}if(kr(m))return v(h,p,m,S);if(pr(m))return w(h,p,m,S);Ti(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Hl(m,h.mode,S),p.return=h,h=p),l(h)):n(h,p)}return C}var qn=Hd(!0),Wd=Hd(!1),So=Gt(null),Co=null,Dn=null,Ga=null;function qa(){Ga=Dn=Co=null}function Ya(e){var t=So.current;K(So),e._currentValue=t}function Hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){Co=e,Ga=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Co===null)throw Error(R(308));Dn=e,Co.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var ln=null;function Ja(e){ln===null?ln=[e]:ln.push(e)}function Vd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}function gc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;l=0,d=u=a=null,s=o;do{var g=s.lane,x=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(g=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(x,c,g);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(x,c,g):v,g==null)break e;c=J({},c,g);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=x,a=c):d=d.next=x,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=c}}function yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var ci={},ct=Gt(ci),Gr=Gt(ci),qr=Gt(ci);function sn(e){if(e===ci)throw Error(R(174));return e}function Za(e,t){switch(W(qr,t),W(Gr,e),W(ct,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}K(ct),W(ct,t)}function Yn(){K(ct),K(Gr),K(qr)}function Kd(e){sn(qr.current);var t=sn(ct.current),n=ks(t,e.type);t!==n&&(W(Gr,e),W(ct,n))}function eu(e){Gr.current===e&&(K(ct),K(Gr))}var q=Gt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function tu(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Gi=Ct.ReactCurrentDispatcher,Fl=Ct.ReactCurrentBatchConfig,gn=0,Y=null,ie=null,le=null,jo=!1,Lr=!1,Yr=0,Jm=0;function de(){throw Error(R(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function ru(e,t,n,r,i,o){if(gn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?tg:ng,e=n(r,i),Lr){o=0;do{if(Lr=!1,Yr=0,25<=o)throw Error(R(301));o+=1,le=ie=null,t.updateQueue=null,Gi.current=rg,e=n(r,i)}while(Lr)}if(Gi.current=Po,t=ie!==null&&ie.next!==null,gn=0,le=ie=Y=null,jo=!1,t)throw Error(R(300));return e}function iu(){var e=Yr!==0;return Yr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Qe(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(R(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Jr(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if((gn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,Y.lanes|=d,yn|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=Qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gd(){}function qd(e,t){var n=Y,r=Qe(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,ou(Xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Jd.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(R(349));gn&30||Yd(n,t,i)}return i}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,r){t.value=n,t.getSnapshot=r,Zd(t)&&ep(e)}function Xd(e,t,n){return n(function(){Zd(t)&&ep(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function ep(e){var t=xt(e,1);t!==null&&tt(t,e,1,-1)}function vc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=eg.bind(null,Y,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tp(){return Qe().memoizedState}function qi(e,t,n,r){var i=lt();Y.flags|=e,i.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&nu(r,l.deps)){i.memoizedState=Xr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Xr(1|t,n,o,r)}function wc(e,t){return qi(8390656,8,e,t)}function ou(e,t){return Ko(2048,8,e,t)}function np(e,t){return Ko(4,2,e,t)}function rp(e,t){return Ko(4,4,e,t)}function ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function op(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,ip.bind(null,t,e),n)}function lu(){}function lp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ap(e,t,n){return gn&21?(rt(n,t)||(n=pd(),Y.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Xm(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{B=n,Fl.transition=r}}function up(){return Qe().memoizedState}function Zm(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))fp(t,n);else if(n=Vd(e,t,n,r),n!==null){var i=ve();tt(n,e,r,i),dp(n,t,r)}}function eg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))fp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,rt(s,l)){var a=t.interleaved;a===null?(i.next=i,Ja(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Vd(e,t,i,r),n!==null&&(i=ve(),tt(n,e,r,i),dp(n,t,r))}}function cp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function fp(e,t){Lr=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}var Po={readContext:Ve,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},tg={readContext:Ve,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qi(4194308,4,ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return qi(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:vc,useDebugValue:lu,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=vc(!1),t=e[0];return e=Xm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=lt();if(G){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ae===null)throw Error(R(349));gn&30||Yd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wc(Xd.bind(null,r,o,e),[e]),r.flags|=2048,Xr(9,Jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=lt(),t=ae.identifierPrefix;if(G){var n=gt,r=mt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ng={readContext:Ve,useCallback:lp,useContext:Ve,useEffect:ou,useImperativeHandle:op,useInsertionEffect:np,useLayoutEffect:rp,useMemo:sp,useReducer:Ml,useRef:tp,useState:function(){return Ml(Jr)},useDebugValue:lu,useDeferredValue:function(e){var t=Qe();return ap(t,ie.memoizedState,e)},useTransition:function(){var e=Ml(Jr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:qd,useId:up,unstable_isNewReconciler:!1},rg={readContext:Ve,useCallback:lp,useContext:Ve,useEffect:ou,useImperativeHandle:op,useInsertionEffect:np,useLayoutEffect:rp,useMemo:sp,useReducer:Ul,useRef:tp,useState:function(){return Ul(Jr)},useDebugValue:lu,useDeferredValue:function(e){var t=Qe();return ie===null?t.memoizedState=e:ap(t,ie.memoizedState,e)},useTransition:function(){var e=Ul(Jr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:qd,useId:up,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Bt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(tt(t,e,i,r),Ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Bt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(tt(t,e,i,r),Ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Bt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mt(e,i,r),t!==null&&(tt(t,e,r,n),Ki(t,e,r))}};function xc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,o):!0}function pp(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ee(t)?hn:ge.current,r=t.contextTypes,o=(r=r!=null)?Kn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Vs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ee(t)?hn:ge.current,i.context=Kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ws(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function hp(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,na=r),Qs(e,t)},n}function mp(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vg.bind(null,e,t,n),t.then(e,e))}function kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ec(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var og=Ct.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?Wd(t,null,n,r):qn(t,e.child,n,r)}function jc(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=ru(e,t,n,r,o,i),n=iu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(G&&n&&Va(t),t.flags|=1,ye(e,t,r,i),t.child)}function Pc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!hu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gp(e,t,o,r,i)):(e=Zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(l,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function gp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return Ks(e,t,n,r,i)}function yp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Fn,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Fn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Fn,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Fn,$e),$e|=r;return ye(e,t,i,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var o=Ee(n)?hn:ge.current;return o=Kn(t,o),Wn(t,i),n=ru(e,t,n,r,o,i),r=iu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(G&&r&&Va(t),t.flags|=1,ye(e,t,n,i),t.child)}function Rc(e,t,n,r,i){if(Ee(n)){var o=!0;vo(t)}else o=!1;if(Wn(t,i),t.stateNode===null)Yi(e,t),pp(t,n,r),Vs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ee(n)?hn:ge.current,u=Kn(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Sc(t,l,r,u),Tt=!1;var g=t.memoizedState;l.state=g,ko(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||Tt?(typeof d=="function"&&(Ws(t,n,d,r),a=t.memoizedState),(s=Tt||xc(t,n,s,r,g,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Qd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ye(t.type,s),l.props=u,c=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ee(n)?hn:ge.current,a=Kn(t,a));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||g!==a)&&Sc(t,l,r,a),Tt=!1,g=t.memoizedState,l.state=g,ko(t,r,l,i);var v=t.memoizedState;s!==c||g!==v||ke.current||Tt?(typeof x=="function"&&(Ws(t,n,x,r),v=t.memoizedState),(u=Tt||xc(t,n,u,r,g,v,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,o,i)}function Gs(e,t,n,r,i,o){vp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&dc(t,n,!1),St(e,t,o);r=t.stateNode,og.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=qn(t,e.child,null,o),t.child=qn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,i&&dc(t,n,!0),t.child}function wp(e){var t=e.stateNode;t.pendingContext?fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fc(e,t.context,!1),Za(e,t.containerInfo)}function _c(e,t,n,r,i){return Gn(),Ka(i),t.flags|=256,ye(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function xp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Jo(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ys(n),t.memoizedState=qs,e):su(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return lg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=bt(s,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ys(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return o=e.child,e=o.sibling,r=bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&Ka(r),qn(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(R(422))),Ni(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Jo({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qn(t,e.child,null,l),t.child.memoizedState=Ys(l),t.memoizedState=qs,o);if(!(t.mode&1))return Ni(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(R(419)),r=Bl(o,r,void 0),Ni(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xt(e,i),tt(r,e,i,-1))}return pu(),r=Bl(Error(R(421))),Ni(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ae=Ft(i.nextSibling),De=t,G=!0,Xe=null,e!==null&&(Be[be++]=mt,Be[be++]=gt,Be[be++]=mn,mt=e.id,gt=e.overflow,mn=t),t=su(t,r.children),t.flags|=4096,t)}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hs(e.return,t,n)}function bl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bl(t,!0,n,null,o);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:wp(t),Gn();break;case 5:Kd(t);break;case 1:Ee(t.type)&&vo(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?xp(e,t,n):(W(q,q.current&1),e=St(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return St(e,t,n)}var Cp,Js,kp,Ep;Cp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Js=function(){};kp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sn(ct.current);var o=null;switch(n){case"input":i=ws(e,i),r=ws(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Cs(e,i),r=Cs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}Es(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ir.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ep=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ag(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&yo(),pe(t),null;case 3:return r=t.stateNode,Yn(),K(ke),K(ge),tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(oa(Xe),Xe=null))),Js(e,t),pe(t),null;case 5:eu(t);var i=sn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)kp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return pe(t),null}if(e=sn(ct.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)V(jr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Fu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Uu(r,o),V("invalid",r)}Es(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",""+s]):Ir.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":wi(r),Mu(r,o,!0);break;case"textarea":wi(r),Bu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[Kr]=r,Cp(e,t,!1,!1),t.stateNode=e;e:{switch(l=js(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)V(jr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Fu(e,r),i=ws(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Uu(e,r),i=Cs(e,r),V("invalid",e);break;default:i=r}Es(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?td(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Zf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fr(e,a):typeof a=="number"&&Fr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ir.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Oa(e,o,a,l))}switch(n){case"input":wi(e),Mu(e,r,!1);break;case"textarea":wi(e),Bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Un(e,!!r.multiple,o,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Ep(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=sn(qr.current),sn(ct.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return pe(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ae!==null&&t.mode&1&&!(t.flags&128))bd(),Gn(),t.flags|=98560,o=!1;else if(o=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[at]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(oa(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):pu())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Yn(),Js(e,t),e===null&&Vr(t.stateNode.containerInfo),pe(t),null;case 10:return Ya(t.type._context),pe(t),null;case 17:return Ee(t.type)&&yo(),pe(t),null;case 19:if(K(q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)wr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Eo(e),l!==null){for(t.flags|=128,wr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Xn&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return pe(t),null}else 2*Z()-o.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function ug(e,t){switch(Qa(t),t.tag){case 1:return Ee(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),K(ke),K(ge),tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eu(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Yn(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Oi=!1,he=!1,cg=typeof WeakSet=="function"?WeakSet:Set,N=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Xs(e,t,n){try{n()}catch(r){X(e,t,r)}}var Nc=!1;function fg(e,t){if(As=po,e=Td(),Wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,g=null;t:for(;;){for(var x;c!==n||i!==0&&c.nodeType!==3||(s=l+i),c!==o||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(x=c.firstChild)!==null;)g=c,c=x;for(;;){if(c===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++d===r&&(a=l),(x=c.nextSibling)!==null)break;c=g,g=c.parentNode}c=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ds={focusedElem:e,selectionRange:n},po=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){X(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Nc,Nc=!1,v}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xs(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jp(e){var t=e.alternate;t!==null&&(e.alternate=null,jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Kr],delete t[Ms],delete t[Km],delete t[Gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pp(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var ue=null,Je=!1;function jt(e,t,n){for(n=n.child;n!==null;)Rp(e,t,n),n=n.sibling}function Rp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:he||In(n,t);case 6:var r=ue,i=Je;ue=null,jt(e,t,n),ue=r,Je=i,ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),br(e)):Al(ue,n.stateNode));break;case 4:r=ue,i=Je,ue=n.stateNode.containerInfo,Je=!0,jt(e,t,n),ue=r,Je=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Xs(n,t,l),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!he&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,jt(e,t,n),he=r):jt(e,t,n);break;default:jt(e,t,n)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cg),t.forEach(function(r){var i=xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Je=!1;break e;case 3:ue=s.stateNode.containerInfo,Je=!0;break e;case 4:ue=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(ue===null)throw Error(R(160));Rp(o,l,i),ue=null,Je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_p(t,e),t=t.sibling}function _p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{zr(3,e,e.return),qo(3,e)}catch(w){X(e,e.return,w)}try{zr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Yf(i,o),js(s,l);var u=js(s,o);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?td(i,c):d==="dangerouslySetInnerHTML"?Zf(i,c):d==="children"?Fr(i,c):Oa(i,d,c,u)}switch(s){case"input":xs(i,o);break;case"textarea":Jf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Un(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Un(i,!!o.multiple,o.defaultValue,!0):Un(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(w){X(e,e.return,w)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cu=Z())),r&4&&Lc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||d,qe(t,e),he=u):qe(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(c=N=d;N!==null;){switch(g=N,x=g.child,g.tag){case 0:case 11:case 14:case 15:zr(4,g,g.return);break;case 1:In(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:In(g,g.return);break;case 22:if(g.memoizedState!==null){$c(c);continue}}x!==null?(x.return=g,N=x):$c(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ed("display",l))}catch(w){X(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){X(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qe(t,e),ot(e),r&4&&Lc(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var o=Oc(e);ta(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Oc(e);ea(e,s,l);break;default:throw Error(R(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dg(e,t,n){N=e,Tp(e)}function Tp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Oi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||he;s=Oi;var u=he;if(Oi=l,(he=a)&&!u)for(N=i;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Ac(i):a!==null?(a.return=l,N=a):Ac(i);for(;o!==null;)N=o,Tp(o),o=o.sibling;N=i,Oi=s,he=u}zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):zc(e)}}function zc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&br(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}he||t.flags&512&&Zs(t)}catch(g){X(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function $c(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ac(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{Zs(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{Zs(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var pg=Math.ceil,Ro=Ct.ReactCurrentDispatcher,au=Ct.ReactCurrentOwner,We=Ct.ReactCurrentBatchConfig,F=0,ae=null,te=null,ce=0,$e=0,Fn=Gt(0),oe=0,Zr=null,yn=0,Yo=0,uu=0,$r=null,Se=null,cu=0,Xn=1/0,dt=null,_o=!1,na=null,Ut=null,Li=!1,zt=null,To=0,Ar=0,ra=null,Ji=-1,Xi=0;function ve(){return F&6?Z():Ji!==-1?Ji:Ji=Z()}function Bt(e){return e.mode&1?F&2&&ce!==0?ce&-ce:Ym.transition!==null?(Xi===0&&(Xi=pd()),Xi):(e=B,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e):1}function tt(e,t,n,r){if(50<Ar)throw Ar=0,ra=null,Error(R(185));si(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(Yo|=n),oe===4&&Ot(e,ce)),je(e,r),n===1&&F===0&&!(t.mode&1)&&(Xn=Z()+500,Qo&&qt()))}function je(e,t){var n=e.callbackNode;Y0(e,t);var r=fo(e,e===ae?ce:0);if(r===0)n!==null&&Wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wu(n),t===1)e.tag===0?qm(Dc.bind(null,e)):Md(Dc.bind(null,e)),Vm(function(){!(F&6)&&qt()}),n=null;else{switch(hd(r)){case 1:n=Da;break;case 4:n=fd;break;case 16:n=co;break;case 536870912:n=dd;break;default:n=co}n=Ip(n,Np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Np(e,t){if(Ji=-1,Xi=0,F&6)throw Error(R(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=fo(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=F;F|=2;var o=Lp();(ae!==e||ce!==t)&&(dt=null,Xn=Z()+500,cn(e,t));do try{gg();break}catch(s){Op(e,s)}while(!0);qa(),Ro.current=o,F=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=Ns(e),i!==0&&(r=i,t=ia(e,i))),t===1)throw n=Zr,cn(e,0),Ot(e,r),je(e,Z()),n;if(t===6)Ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=No(e,r),t===2&&(o=Ns(e),o!==0&&(r=o,t=ia(e,o))),t===1))throw n=Zr,cn(e,0),Ot(e,r),je(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:rn(e,Se,dt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=cu+500-Z(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fs(rn.bind(null,e,Se,dt),t);break}rn(e,Se,dt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-et(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pg(r/1960))-r,10<r){e.timeoutHandle=Fs(rn.bind(null,e,Se,dt),r);break}rn(e,Se,dt);break;case 5:rn(e,Se,dt);break;default:throw Error(R(329))}}}return je(e,Z()),e.callbackNode===n?Np.bind(null,e):null}function ia(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=No(e,t),e!==2&&(t=Se,Se=n,t!==null&&oa(t)),e}function oa(e){Se===null?Se=e:Se.push.apply(Se,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~uu,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Dc(e){if(F&6)throw Error(R(327));Vn();var t=fo(e,0);if(!(t&1))return je(e,Z()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Ns(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=Zr,cn(e,0),Ot(e,t),je(e,Z()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Se,dt),je(e,Z()),null}function fu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Xn=Z()+500,Qo&&qt())}}function vn(e){zt!==null&&zt.tag===0&&!(F&6)&&Vn();var t=F;F|=1;var n=We.transition,r=B;try{if(We.transition=null,B=1,e)return e()}finally{B=r,We.transition=n,F=t,!(F&6)&&qt()}}function du(){$e=Fn.current,K(Fn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Yn(),K(ke),K(ge),tu();break;case 5:eu(r);break;case 4:Yn();break;case 13:K(q);break;case 19:K(q);break;case 10:Ya(r.type._context);break;case 22:case 23:du()}n=n.return}if(ae=e,te=e=bt(e.current,null),ce=$e=t,oe=0,Zr=null,uu=Yo=yn=0,Se=$r=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ln=null}return e}function Op(e,t){do{var n=te;try{if(qa(),Gi.current=Po,jo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(gn=0,le=ie=Y=null,Lr=!1,Yr=0,au.current=null,n===null||n.return===null){oe=1,Zr=t,te=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=kc(l);if(x!==null){x.flags&=-257,Ec(x,l,s,o,t),x.mode&1&&Cc(o,u,t),t=x,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){Cc(o,u,t),pu();break e}a=Error(R(426))}}else if(G&&s.mode&1){var C=kc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ec(C,l,s,o,t),Ka(Jn(a,s));break e}}o=a=Jn(a,s),oe!==4&&(oe=2),$r===null?$r=[o]:$r.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=hp(o,a,t);gc(o,h);break e;case 1:s=a;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=mp(o,s,t);gc(o,S);break e}}o=o.return}while(o!==null)}$p(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Lp(){var e=Ro.current;return Ro.current=Po,e===null?Po:e}function pu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(yn&268435455)&&!(Yo&268435455)||Ot(ae,ce)}function No(e,t){var n=F;F|=2;var r=Lp();(ae!==e||ce!==t)&&(dt=null,cn(e,t));do try{mg();break}catch(i){Op(e,i)}while(!0);if(qa(),F=n,Ro.current=r,te!==null)throw Error(R(261));return ae=null,ce=0,oe}function mg(){for(;te!==null;)zp(te)}function gg(){for(;te!==null&&!B0();)zp(te)}function zp(e){var t=Dp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?$p(e):te=t,au.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ug(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=ag(n,t,$e),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function rn(e,t,n){var r=B,i=We.transition;try{We.transition=null,B=1,yg(e,t,n,r)}finally{We.transition=i,B=r}return null}function yg(e,t,n,r){do Vn();while(zt!==null);if(F&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(J0(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Ip(co,function(){return Vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var l=B;B=1;var s=F;F|=4,au.current=null,fg(e,n),_p(n,e),Im(Ds),po=!!As,Ds=As=null,e.current=n,dg(n),b0(),F=s,B=l,We.transition=o}else e.current=n;if(Li&&(Li=!1,zt=e,To=i),o=e.pendingLanes,o===0&&(Ut=null),V0(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=na,na=null,e;return To&1&&e.tag!==0&&Vn(),o=e.pendingLanes,o&1?e===ra?Ar++:(Ar=0,ra=e):Ar=0,qt(),null}function Vn(){if(zt!==null){var e=hd(To),t=We.transition,n=B;try{if(We.transition=null,B=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,To=0,F&6)throw Error(R(331));var i=F;for(F|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:zr(8,d,o)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var g=d.sibling,x=d.return;if(jp(d),d===u){N=null;break}if(g!==null){g.return=x,N=g;break}N=x}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){l=N;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,N=m;else e:for(l=p;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qo(9,s)}}catch(E){X(s,s.return,E)}if(s===l){N=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,N=S;break e}N=s.return}}if(F=i,qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{B=n,We.transition=t}}return!1}function Ic(e,t,n){t=Jn(n,t),t=hp(e,t,1),e=Mt(e,t,1),t=ve(),e!==null&&(si(e,1,t),je(e,t))}function X(e,t,n){if(e.tag===3)Ic(e,e,n);else for(;t!==null;){if(t.tag===3){Ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Jn(n,e),e=mp(t,e,1),t=Mt(t,e,1),e=ve(),t!==null&&(si(t,1,e),je(t,e));break}}t=t.return}}function vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>Z()-cu?cn(e,0):uu|=n),je(e,t)}function Ap(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=ve();e=xt(e,t),e!==null&&(si(e,t,n),je(e,n))}function wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ap(e,n)}function xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Ap(e,n)}var Dp;Dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,sg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,G&&t.flags&1048576&&Ud(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yi(e,t),e=t.pendingProps;var i=Kn(t,ge.current);Wn(t,n),i=ru(null,t,r,e,i,n);var o=iu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xa(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,Vs(t,r,e,n),t=Gs(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Va(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cg(r),e=Ye(r,e),i){case 0:t=Ks(null,t,r,e,n);break e;case 1:t=Rc(null,t,r,e,n);break e;case 11:t=jc(null,t,r,e,n);break e;case 14:t=Pc(null,t,r,Ye(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ks(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Rc(e,t,r,i,n);case 3:e:{if(wp(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qd(e,t),ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jn(Error(R(423)),t),t=_c(e,t,r,n,i);break e}else if(r!==i){i=Jn(Error(R(424)),t),t=_c(e,t,r,n,i);break e}else for(Ae=Ft(t.stateNode.containerInfo.firstChild),De=t,G=!0,Xe=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=St(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Kd(t),e===null&&bs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Is(r,i)?l=null:o!==null&&Is(r,o)&&(t.flags|=32),vp(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&bs(t),null;case 13:return xp(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),jc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(So,r._currentValue),r._currentValue=l,o!==null)if(rt(o.value,l)){if(o.children===i.children&&!ke.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=yt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hs(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(R(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Hs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Pc(e,t,r,i,n);case 15:return gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Yi(e,t),t.tag=1,Ee(r)?(e=!0,vo(t)):e=!1,Wn(t,n),pp(t,r,i),Vs(t,r,i,n),Gs(null,t,r,!0,e,n);case 19:return Sp(e,t,n);case 22:return yp(e,t,n)}throw Error(R(156,t.tag))};function Ip(e,t){return cd(e,t)}function Sg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Sg(e,t,n,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cg(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===za)return 11;if(e===$a)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")hu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _n:return fn(n.children,i,o,t);case La:l=8,i|=8;break;case ms:return e=He(12,n,t,i|2),e.elementType=ms,e.lanes=o,e;case gs:return e=He(13,n,t,i),e.elementType=gs,e.lanes=o,e;case ys:return e=He(19,n,t,i),e.elementType=ys,e.lanes=o,e;case Kf:return Jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:l=10;break e;case Qf:l=9;break e;case za:l=11;break e;case $a:l=14;break e;case _t:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=He(22,e,r,t),e.elementType=Kf,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mu(e,t,n,r,i,o,l,s,a){return e=new kg(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(o),e}function Eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fp(e){if(!e)return Qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Fd(e,n,t)}return t}function Mp(e,t,n,r,i,o,l,s,a){return e=mu(n,r,!0,e,i,o,l,s,a),e.context=Fp(null),n=e.current,r=ve(),i=Bt(n),o=yt(r,i),o.callback=t??null,Mt(n,o,i),e.current.lanes=i,si(e,i,r),je(e,r),e}function Xo(e,t,n,r){var i=t.current,o=ve(),l=Bt(i);return n=Fp(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(i,t,l),e!==null&&(tt(e,i,l,o),Ki(e,i,l)),l}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gu(e,t){Fc(e,t),(e=e.alternate)&&Fc(e,t)}function jg(){return null}var Up=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}Zo.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Xo(e,t,null,null)};Zo.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Xo(null,e,null,null)}),t[wt]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&wd(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function Pg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Oo(l);o.call(u)}}var l=Mp(t,r,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=l,e[wt]=l.current,Vr(e.nodeType===8?e.parentNode:e),vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Oo(a);s.call(u)}}var a=mu(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=a,e[wt]=a.current,Vr(e.nodeType===8?e.parentNode:e),vn(function(){Xo(t,a,n,r)}),a}function tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Oo(l);s.call(a)}}Xo(t,l,e,i)}else l=Pg(n,t,e,i,r);return Oo(l)}md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(Ia(t,n|1),je(t,Z()),!(F&6)&&(Xn=Z()+500,qt()))}break;case 13:vn(function(){var r=xt(e,1);if(r!==null){var i=ve();tt(r,e,1,i)}}),gu(e,1)}};Fa=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=ve();tt(t,e,134217728,n)}gu(e,134217728)}};gd=function(e){if(e.tag===13){var t=Bt(e),n=xt(e,t);if(n!==null){var r=ve();tt(n,e,t,r)}gu(e,t)}};yd=function(){return B};vd=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Rs=function(e,t,n){switch(t){case"input":if(xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vo(r);if(!i)throw Error(R(90));qf(r),xs(r,i)}}}break;case"textarea":Jf(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};id=fu;od=vn;var Rg={usingClientEntryPoint:!1,Events:[ui,Ln,Vo,nd,rd,fu]},xr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_g={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ad(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{Bo=zi.inject(_g),ut=zi}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(R(200));return Eg(e,t,null,n)};Me.createRoot=function(e,t){if(!vu(e))throw Error(R(299));var n=!1,r="",i=Up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new yu(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=ad(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return vn(e)};Me.hydrate=function(e,t,n){if(!el(t))throw Error(R(200));return tl(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Up;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,i,!1,o,l),e[wt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zo(t)};Me.render=function(e,t,n){if(!el(t))throw Error(R(200));return tl(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!el(e))throw Error(R(40));return e._reactRootContainer?(vn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Me.unstable_batchedUpdates=fu;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return tl(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp)}catch(e){console.error(e)}}Bp(),Bf.exports=Me;var Tg=Bf.exports,Uc=Tg;ps.createRoot=Uc.createRoot,ps.hydrateRoot=Uc.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function ei(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Q="-ms-",Dr="-moz-",M="-webkit-",bp="comm",nl="rule",wu="decl",Ng="@import",Hp="@keyframes",Og="@layer",Wp=Math.abs,xu=String.fromCharCode,la=Object.assign;function Lg(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Vp(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function eo(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function Zn(e,t,n){return e.slice(t,n)}function st(e){return e.length}function Qp(e){return e.length}function Pr(e,t){return t.push(e),e}function zg(e,t){return e.map(t).join("")}function Bc(e,t){return e.filter(function(n){return!pt(n,t)})}var rl=1,er=1,Kp=0,Ke=0,ee=0,sr="";function il(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rl,column:er,length:l,return:"",siblings:s}}function Rt(e,t){return la(il("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Rt(e.root,{children:[e]});Pr(e,e.siblings)}function $g(){return ee}function Ag(){return ee=Ke>0?se(sr,--Ke):0,er--,ee===10&&(er=1,rl--),ee}function nt(){return ee=Ke<Kp?se(sr,Ke++):0,er++,ee===10&&(er=1,rl++),ee}function dn(){return se(sr,Ke)}function to(){return Ke}function ol(e,t){return Zn(sr,e,t)}function sa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dg(e){return rl=er=1,Kp=st(sr=e),Ke=0,[]}function Ig(e){return sr="",e}function Vl(e){return Vp(ol(Ke-1,aa(e===91?e+2:e===40?e+1:e)))}function Fg(e){for(;(ee=dn())&&ee<33;)nt();return sa(e)>2||sa(ee)>3?"":" "}function Mg(e,t){for(;--t&&nt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return ol(e,to()+(t<6&&dn()==32&&nt()==32))}function aa(e){for(;nt();)switch(ee){case e:return Ke;case 34:case 39:e!==34&&e!==39&&aa(ee);break;case 40:e===41&&aa(e);break;case 92:nt();break}return Ke}function Ug(e,t){for(;nt()&&e+ee!==57;)if(e+ee===84&&dn()===47)break;return"/*"+ol(t,Ke-1)+"*"+xu(e===47?e:nt())}function Bg(e){for(;!sa(dn());)nt();return ol(e,Ke)}function bg(e){return Ig(no("",null,null,null,[""],e=Dg(e),0,[0],e))}function no(e,t,n,r,i,o,l,s,a){for(var u=0,d=0,c=l,g=0,x=0,v=0,w=1,C=1,h=1,p=0,m="",S=i,E=o,P=r,j=m;C;)switch(v=p,p=nt()){case 40:if(v!=108&&se(j,c-1)==58){eo(j+=A(Vl(p),"&","&\f"),"&\f",Wp(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Vl(p);break;case 9:case 10:case 13:case 32:j+=Fg(v);break;case 92:j+=Mg(to()-1,7);continue;case 47:switch(dn()){case 42:case 47:Pr(Hg(Ug(nt(),to()),t,n,a),a);break;default:j+="/"}break;case 123*w:s[u++]=st(j)*h;case 125*w:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+d:h==-1&&(j=A(j,/\f/g,"")),x>0&&st(j)-c&&Pr(x>32?Hc(j+";",r,n,c-1,a):Hc(A(j," ","")+";",r,n,c-2,a),a);break;case 59:j+=";";default:if(Pr(P=bc(j,t,n,u,d,i,s,m,S=[],E=[],c,o),o),p===123)if(d===0)no(j,t,P,P,S,o,c,s,E);else switch(g===99&&se(j,3)===110?100:g){case 100:case 108:case 109:case 115:no(e,P,P,r&&Pr(bc(e,P,P,0,0,i,s,m,i,S=[],c,E),E),i,E,c,s,r?S:E);break;default:no(j,P,P,P,[""],E,0,s,E)}}u=d=x=0,w=h=1,m=j="",c=l;break;case 58:c=1+st(j),x=v;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&Ag()==125)continue}switch(j+=xu(p),p*w){case 38:h=d>0?1:(j+="\f",-1);break;case 44:s[u++]=(st(j)-1)*h,h=1;break;case 64:dn()===45&&(j+=Vl(nt())),g=dn(),d=c=st(m=j+=Bg(to())),p++;break;case 45:v===45&&st(j)==2&&(w=0)}}return o}function bc(e,t,n,r,i,o,l,s,a,u,d,c){for(var g=i-1,x=i===0?o:[""],v=Qp(x),w=0,C=0,h=0;w<r;++w)for(var p=0,m=Zn(e,g+1,g=Wp(C=l[w])),S=e;p<v;++p)(S=Vp(C>0?x[p]+" "+m:A(m,/&\f/g,x[p])))&&(a[h++]=S);return il(e,t,n,i===0?nl:s,a,u,d,c)}function Hg(e,t,n,r){return il(e,t,n,bp,xu($g()),Zn(e,2,-2),0,r)}function Hc(e,t,n,r,i){return il(e,t,n,wu,Zn(e,0,r),Zn(e,r+1,-1),r,i)}function Gp(e,t,n){switch(Lg(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return Dr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Dr+e+Q+e+e;case 5936:switch(se(e,t+11)){case 114:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+Q+e+e;case 6165:return M+e+Q+"flex-"+e+e;case 5187:return M+e+A(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return M+e+Q+"flex-item-"+A(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":Q+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return M+e+Q+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+Q+A(e,"shrink","negative")+e;case 5292:return M+e+Q+A(e,"basis","preferred-size")+e;case 6060:return M+"box-"+A(e,"-grow","")+M+e+Q+A(e,"grow","positive")+e;case 4554:return M+A(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!pt(e,/flex-|baseline/))return Q+"grid-column-align"+Zn(e,t)+e;break;case 2592:case 3360:return Q+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pt(r.props,/grid-\w+-end/)})?~eo(e+(n=n[t].value),"span",0)?e:Q+A(e,"-start","")+e+Q+"grid-row-span:"+(~eo(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":Q+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:Q+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Dr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eo(e,"stretch",0)?Gp(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return Q+i+":"+o+u+(l?Q+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return A(e,":",":"+M)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(se(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+Q+"$2box$3")+e;case 100:return A(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Wg(e,t,n,r){switch(e.type){case Og:if(e.children.length)break;case Ng:case wu:return e.return=e.return||e.value;case bp:return"";case Hp:return e.return=e.value+"{"+Lo(e.children,r)+"}";case nl:if(!st(e.value=e.props.join(",")))return""}return st(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Vg(e){var t=Qp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Qg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wu:e.return=Gp(e.value,e.length,n);return;case Hp:return Lo([Rt(e,{value:A(e.value,"@","@"+M)})],r);case nl:if(e.length)return zg(n=e.props,function(i){switch(pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Rt(e,{props:[A(i,/:(read-\w+)/,":"+Dr+"$1")]})),jn(Rt(e,{props:[i]})),la(e,{props:Bc(n,r)});break;case"::placeholder":jn(Rt(e,{props:[A(i,/:(plac\w+)/,":"+M+"input-$1")]})),jn(Rt(e,{props:[A(i,/:(plac\w+)/,":"+Dr+"$1")]})),jn(Rt(e,{props:[A(i,/:(plac\w+)/,Q+"input-$1")]})),jn(Rt(e,{props:[i]})),la(e,{props:Bc(n,r)});break}return""})}}var Gg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},tr=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",qp="active",Yp="data-styled-version",ll="6.1.12",Su=`/*!sc*/
`,zo=typeof window<"u"&&"HTMLElement"in window,qg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),Yg={},sl=Object.freeze([]),nr=Object.freeze({});function Jp(e,t,n){return n===void 0&&(n=nr),e.theme!==n.theme&&e.theme||t||n.theme}var Xp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xg=/(^-|-$)/g;function Wc(e){return e.replace(Jg,"-").replace(Xg,"")}var Zg=/(a)(d)/gi,$i=52,Vc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ua(e){var t,n="";for(t=Math.abs(e);t>$i;t=t/$i|0)n=Vc(t%$i)+n;return(Vc(t%$i)+n).replace(Zg,"$1-$2")}var Ql,Zp=5381,Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eh=function(e){return Mn(Zp,e)};function th(e){return ua(eh(e)>>>0)}function e1(e){return e.displayName||e.name||"Component"}function Kl(e){return typeof e=="string"&&!0}var nh=typeof Symbol=="function"&&Symbol.for,rh=nh?Symbol.for("react.memo"):60115,t1=nh?Symbol.for("react.forward_ref"):60112,n1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ih={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i1=((Ql={})[t1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ql[rh]=ih,Ql);function Qc(e){return("type"in(t=e)&&t.type.$$typeof)===rh?ih:"$$typeof"in e?i1[e.$$typeof]:n1;var t}var o1=Object.defineProperty,l1=Object.getOwnPropertyNames,Kc=Object.getOwnPropertySymbols,s1=Object.getOwnPropertyDescriptor,a1=Object.getPrototypeOf,Gc=Object.prototype;function oh(e,t,n){if(typeof t!="string"){if(Gc){var r=a1(t);r&&r!==Gc&&oh(e,r,n)}var i=l1(t);Kc&&(i=i.concat(Kc(t)));for(var o=Qc(e),l=Qc(t),s=0;s<i.length;++s){var a=i[s];if(!(a in r1||n&&n[a]||l&&a in l||o&&a in o)){var u=s1(t,a);try{o1(e,a,u)}catch{}}}}return e}function rr(e){return typeof e=="function"}function Cu(e){return typeof e=="object"&&"styledComponentId"in e}function an(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ca(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ti(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fa(e,t,n){if(n===void 0&&(n=!1),!n&&!ti(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fa(e[r],t[r]);else if(ti(t))for(var r in t)e[r]=fa(e[r],t[r]);return e}function ku(e,t){Object.defineProperty(e,"toString",{value:t})}function fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var u1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw fi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Su);return n},e}(),ro=new Map,$o=new Map,io=1,Ai=function(e){if(ro.has(e))return ro.get(e);for(;$o.has(io);)io++;var t=io++;return ro.set(e,t),$o.set(t,e),t},c1=function(e,t){io=t+1,ro.set(e,t),$o.set(t,e)},f1="style[".concat(tr,"][").concat(Yp,'="').concat(ll,'"]'),d1=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},h1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Su),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(d1);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(c1(d,u),p1(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},qc=function(e){for(var t=document.querySelectorAll(f1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(tr)!==qp&&(h1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function m1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(tr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(tr,qp),r.setAttribute(Yp,ll);var l=m1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},g1=function(){function e(t){this.element=lh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw fi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),y1=function(){function e(t){this.element=lh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),v1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yc=zo,w1={isServer:!zo,useCSSOMInjection:!qg},Ao=function(){function e(t,n,r){t===void 0&&(t=nr),n===void 0&&(n={});var i=this;this.options=me(me({},w1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&zo&&Yc&&(Yc=!1,qc(this)),ku(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(c){var g=function(h){return $o.get(h)}(c);if(g===void 0)return"continue";var x=o.names.get(g),v=l.getGroup(c);if(x===void 0||!x.size||v.length===0)return"continue";var w="".concat(tr,".g").concat(c,'[id="').concat(g,'"]'),C="";x!==void 0&&x.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(v).concat(w,'{content:"').concat(C,'"}').concat(Su)},d=0;d<s;d++)u(d);return a}(i)})}return e.registerId=function(t){return Ai(t)},e.prototype.rehydrate=function(){!this.server&&zo&&qc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new v1(i):r?new g1(i):new y1(i)}(this.options),new u1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),x1=/&/g,S1=/^\s*\/\/.*$/gm;function sh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sh(n.children,t)),n})}function C1(e){var t,n,r,i=nr,o=i.options,l=o===void 0?nr:o,s=i.plugins,a=s===void 0?sl:s,u=function(g,x,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=a.slice();d.push(function(g){g.type===nl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(x1,n).replace(r,u))}),l.prefix&&d.push(Kg),d.push(Wg);var c=function(g,x,v,w){x===void 0&&(x=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(S1,""),h=bg(v||x?"".concat(v," ").concat(x," { ").concat(C," }"):C);l.namespace&&(h=sh(h,l.namespace));var p=[];return Lo(h,Vg(d.concat(Qg(function(m){return p.push(m)})))),p};return c.hash=a.length?a.reduce(function(g,x){return x.name||fi(15),Mn(g,x.name)},Zp).toString():"",c}var k1=new Ao,da=C1(),ah=Ze.createContext({shouldForwardProp:void 0,styleSheet:k1,stylis:da});ah.Consumer;Ze.createContext(void 0);function pa(){return _.useContext(ah)}var E1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=da);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ku(this,function(){throw fi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=da),this.name+t.hash},e}(),j1=function(e){return e>="A"&&e<="Z"};function Jc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;j1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var uh=function(e){return e==null||e===!1||e===""},ch=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!uh(o)&&(Array.isArray(o)&&o.isCss||rr(o)?r.push("".concat(Jc(i),":"),o,";"):ti(o)?r.push.apply(r,ei(ei(["".concat(i," {")],ch(o),!1),["}"],!1)):r.push("".concat(Jc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Gg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ht(e,t,n,r){if(uh(e))return[];if(Cu(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ht(i,t,n,r)}var o;return e instanceof E1?n?(e.inject(n,r),[e.getName(r)]):[e]:ti(e)?ch(e):Array.isArray(e)?Array.prototype.concat.apply(sl,e.map(function(l){return Ht(l,t,n,r)})):[e.toString()]}function fh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!Cu(n))return!1}return!0}var P1=eh(ll),R1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fh(t),this.componentId=n,this.baseHash=Mn(P1,n),this.baseStyle=r,Ao.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=an(i,this.staticRulesId);else{var o=ca(Ht(this.rules,t,n,r)),l=ua(Mn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=an(i,l),this.staticRulesId=l}else{for(var a=Mn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var g=ca(Ht(c,t,n,r));a=Mn(a,g+d),u+=g}}if(u){var x=ua(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=an(i,x)}}return i},e}(),Eu=Ze.createContext(void 0);Eu.Consumer;var Gl={};function _1(e,t,n){var r=Cu(e),i=e,o=!Kl(e),l=t.attrs,s=l===void 0?sl:l,a=t.componentId,u=a===void 0?function(S,E){var P=typeof S!="string"?"sc":Wc(S);Gl[P]=(Gl[P]||0)+1;var j="".concat(P,"-").concat(th(ll+P+Gl[P]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):a,d=t.displayName,c=d===void 0?function(S){return Kl(S)?"styled.".concat(S):"Styled(".concat(e1(S),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Wc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,E){return w(S,E)&&C(S,E)}}else v=w}var h=new R1(n,g,r?i.componentStyle:void 0);function p(S,E){return function(P,j,O){var U=P.attrs,D=P.componentStyle,_e=P.defaultProps,Jt=P.foldedComponentIds,Xt=P.styledComponentId,mi=P.target,yl=Ze.useContext(Eu),fr=pa(),Zt=P.shouldForwardProp||fr.shouldForwardProp,T=Jp(j,yl,_e)||nr,L=function(kt,Te,ft){for(var dr,tn=me(me({},Te),{className:void 0,theme:ft}),vl=0;vl<kt.length;vl+=1){var gi=rr(dr=kt[vl])?dr(tn):dr;for(var Et in gi)tn[Et]=Et==="className"?an(tn[Et],gi[Et]):Et==="style"?me(me({},tn[Et]),gi[Et]):gi[Et]}return Te.className&&(tn.className=an(tn.className,Te.className)),tn}(U,j,T),z=L.as||mi,b={};for(var H in L)L[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&L.theme===T||(H==="forwardedAs"?b.as=L.forwardedAs:Zt&&!Zt(H,z)||(b[H]=L[H]));var en=function(kt,Te){var ft=pa(),dr=kt.generateAndInjectStyles(Te,ft.styleSheet,ft.stylis);return dr}(D,L),Ge=an(Jt,Xt);return en&&(Ge+=" "+en),L.className&&(Ge+=" "+L.className),b[Kl(z)&&!Xp.has(z)?"class":"className"]=Ge,b.ref=O,_.createElement(z,b)}(m,S,E)}p.displayName=c;var m=Ze.forwardRef(p);return m.attrs=x,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=v,m.foldedComponentIds=r?an(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],j=1;j<arguments.length;j++)P[j-1]=arguments[j];for(var O=0,U=P;O<U.length;O++)fa(E,U[O],!0);return E}({},i.defaultProps,S):S}}),ku(m,function(){return".".concat(m.styledComponentId)}),o&&oh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Xc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Zc=function(e){return Object.assign(e,{isCss:!0})};function dh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||ti(e))return Zc(Ht(Xc(sl,ei([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ht(r):Zc(Ht(Xc(r,t)))}function ha(e,t,n){if(n===void 0&&(n=nr),!t)throw fi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,dh.apply(void 0,ei([i],o,!1)))};return r.attrs=function(i){return ha(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ha(e,t,me(me({},n),i))},r}var ph=function(e){return ha(_1,e)},y=ph;Xp.forEach(function(e){y[e]=ph(e)});var T1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=fh(t),Ao.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ca(Ht(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ao.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function hh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=dh.apply(void 0,ei([e],t,!1)),i="sc-global-".concat(th(JSON.stringify(r))),o=new T1(r,i),l=function(a){var u=pa(),d=Ze.useContext(Eu),c=Ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(c,a,u.styleSheet,d,u.stylis),Ze.useLayoutEffect(function(){if(!u.styleSheet.server)return s(c,a,u.styleSheet,d,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,a,u.styleSheet,d,u.stylis]),null};function s(a,u,d,c,g){if(o.isStatic)o.renderStyles(a,Yg,d,g);else{var x=me(me({},u),{theme:Jp(u,c,l.defaultProps)});o.renderStyles(a,x,d,g)}}return Ze.memo(l)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const ef="popstate";function N1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ma("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Do(i)}return L1(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O1(){return Math.random().toString(36).substr(2,8)}function tf(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||O1()})}function Do(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=$t.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(ni({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function c(){s=$t.Pop;let C=d(),h=C==null?null:C-u;u=C,a&&a({action:s,location:w.location,delta:h})}function g(C,h){s=$t.Push;let p=ma(w.location,C,h);u=d()+1;let m=tf(p,u),S=w.createHref(p);try{l.pushState(m,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&a&&a({action:s,location:w.location,delta:1})}function x(C,h){s=$t.Replace;let p=ma(w.location,C,h);u=d();let m=tf(p,u),S=w.createHref(p);l.replaceState(m,"",S),o&&a&&a({action:s,location:w.location,delta:0})}function v(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Do(C);return p=p.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let w={get action(){return s},get location(){return e(i,l)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ef,c),a=C,()=>{i.removeEventListener(ef,c),a=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(C){return l.go(C)}};return w}var nf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nf||(nf={}));function z1(e,t,n){return n===void 0&&(n="/"),$1(e,t,n,!1)}function $1(e,t,n,r){let i=typeof t=="string"?ar(t):t,o=ju(i.pathname||"/",n);if(o==null)return null;let l=gh(e);A1(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=Q1(o);s=W1(l[a],u,r)}return s}function gh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Wt([r,a.relativePath]),d=n.concat(a);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:b1(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of yh(o.path))i(o,l,a)}),t}function yh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=yh(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function A1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:H1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D1=/^:[\w-]+$/,I1=3,F1=2,M1=1,U1=10,B1=-2,rf=e=>e==="*";function b1(e,t){let n=e.split("/"),r=n.length;return n.some(rf)&&(r+=B1),t&&(r+=F1),n.filter(i=>!rf(i)).reduce((i,o)=>i+(D1.test(o)?I1:o===""?M1:U1),r)}function H1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function W1(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",c=of({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),g=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=of({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),l.push({params:i,pathname:Wt([o,c.pathname]),pathnameBase:Y1(Wt([o,c.pathnameBase])),route:g}),c.pathnameBase!=="/"&&(o=Wt([o,c.pathnameBase]))}return l}function of(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=V1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:g,isOptional:x}=d;if(g==="*"){let w=s[c]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[c];return x&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function V1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Q1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ju(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function K1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ar(e):e;return{pathname:n?n.startsWith("/")?n:G1(n,t):t,search:J1(r),hash:X1(i)}}function G1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vh(e,t){let n=q1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ar(e):(i=ni({},e),ne(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),c-=1;i.pathname=g.join("/")}s=c>=0?t[c]:"/"}let a=K1(i,s),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Y1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,X1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xh=["post","put","patch","delete"];new Set(xh);const ey=["get",...xh];new Set(ey);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}const Pu=_.createContext(null),ty=_.createContext(null),Cn=_.createContext(null),al=_.createContext(null),kn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Sh=_.createContext(null);function ny(e,t){let{relative:n}=t===void 0?{}:t;di()||ne(!1);let{basename:r,navigator:i}=_.useContext(Cn),{hash:o,pathname:l,search:s}=Eh(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Wt([r,l])),i.createHref({pathname:a,search:s,hash:o})}function di(){return _.useContext(al)!=null}function ul(){return di()||ne(!1),_.useContext(al).location}function Ch(e){_.useContext(Cn).static||_.useLayoutEffect(e)}function kh(){let{isDataRoute:e}=_.useContext(kn);return e?my():ry()}function ry(){di()||ne(!1);let e=_.useContext(Pu),{basename:t,future:n,navigator:r}=_.useContext(Cn),{matches:i}=_.useContext(kn),{pathname:o}=ul(),l=JSON.stringify(vh(i,n.v7_relativeSplatPath)),s=_.useRef(!1);return Ch(()=>{s.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=wh(u,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Wt([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,o,e])}function Eh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Cn),{matches:i}=_.useContext(kn),{pathname:o}=ul(),l=JSON.stringify(vh(i,r.v7_relativeSplatPath));return _.useMemo(()=>wh(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function iy(e,t){return oy(e,t)}function oy(e,t,n,r){di()||ne(!1);let{navigator:i}=_.useContext(Cn),{matches:o}=_.useContext(kn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=ul(),d;if(t){var c;let C=typeof t=="string"?ar(t):t;a==="/"||(c=C.pathname)!=null&&c.startsWith(a)||ne(!1),d=C}else d=u;let g=d.pathname||"/",x=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=z1(e,{pathname:x}),w=cy(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Wt([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Wt([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?_.createElement(al.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$t.Pop}},w):w}function ly(){let e=hy(),t=Z1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const sy=_.createElement(ly,null);class ay extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(kn.Provider,{value:this.props.routeContext},_.createElement(Sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uy(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(kn.Provider,{value:t},r)}function cy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);d>=0||ne(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:g,errors:x}=n,v=c.route.loader&&g[c.route.id]===void 0&&(!x||x[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,c,g)=>{let x,v=!1,w=null,C=null;n&&(x=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||sy,a&&(u<0&&g===0?(v=!0,C=null):u===g&&(v=!0,C=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,g+1)),p=()=>{let m;return x?m=w:v?m=C:c.route.Component?m=_.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,_.createElement(uy,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||g===0)?_.createElement(ay,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var jh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(jh||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function fy(e){let t=_.useContext(Pu);return t||ne(!1),t}function dy(e){let t=_.useContext(ty);return t||ne(!1),t}function py(e){let t=_.useContext(kn);return t||ne(!1),t}function Ph(e){let t=py(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function hy(){var e;let t=_.useContext(Sh),n=dy(Io.UseRouteError),r=Ph(Io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function my(){let{router:e}=fy(jh.UseNavigateStable),t=Ph(Io.UseNavigateStable),n=_.useRef(!1);return Ch(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ri({fromRouteId:t},o)))},[e,t])}function ii(e){ne(!1)}function gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:l=!1,future:s}=e;di()&&ne(!1);let a=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:a,navigator:o,static:l,future:ri({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=ar(r));let{pathname:d="/",search:c="",hash:g="",state:x=null,key:v="default"}=r,w=_.useMemo(()=>{let C=ju(d,a);return C==null?null:{location:{pathname:C,search:c,hash:g,state:x,key:v},navigationType:i}},[a,d,c,g,x,v,i]);return w==null?null:_.createElement(Cn.Provider,{value:u},_.createElement(al.Provider,{children:n,value:w}))}function Rh(e){let{children:t,location:n}=e;return iy(ga(t),n)}new Promise(()=>{});function ga(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,ga(r.props.children,o));return}r.type!==ii&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ga(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wy(e,t){return e.button===0&&(!t||t==="_self")&&!vy(e)}const xy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sy="6";try{window.__reactRouterVersion=Sy}catch{}const Cy="startTransition",lf=v0[Cy];function ky(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=N1({window:i,v5Compat:!0}));let l=o.current,[s,a]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=_.useCallback(c=>{u&&lf?lf(()=>a(c)):a(c)},[a,u]);return _.useLayoutEffect(()=>l.listen(d),[l,d]),_.createElement(gy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Ey=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_h=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=t,g=yy(t,xy),{basename:x}=_.useContext(Cn),v,w=!1;if(typeof u=="string"&&jy.test(u)&&(v=u,Ey))try{let m=new URL(window.location.href),S=u.startsWith("//")?new URL(m.protocol+u):new URL(u),E=ju(S.pathname,x);S.origin===m.origin&&E!=null?u=E+S.search+S.hash:w=!0}catch{}let C=ny(u,{relative:i}),h=Py(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function p(m){r&&r(m),m.defaultPrevented||h(m)}return _.createElement("a",ya({},g,{href:v||C,onClick:w||o?r:p,ref:n,target:a}))});var sf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sf||(sf={}));var af;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(af||(af={}));function Py(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,a=kh(),u=ul(),d=Eh(e,{relative:l});return _.useCallback(c=>{if(wy(c,n)){c.preventDefault();let g=r!==void 0?r:Do(u)===Do(d);a(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[u,a,d,r,i,n,e,o,l,s])}const Th="/assets/NavbarLogo-CUmuBQyF.png",Ry=y.nav`
  ${""}
  width: 8.2%
`,_y=y.button`
  display: block;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`,Yl=y.span`
  display: block;
  width: 100%;
  height: 3px;
  margin: 6px 0;
  background-color: ${e=>e.isOpen?"white":"black"};
  transition: all 0.3s ease-in-out;
  
  &:nth-child(1) {
    transform: ${e=>e.isOpen?"rotate(45deg) translate(6px, 7px)":"rotate(0)"};
  }
  
  &:nth-child(2) {
    opacity: ${e=>e.isOpen?"0":"1"};
  }
  
  &:nth-child(3) {
    transform: ${e=>e.isOpen?"rotate(-45deg) translate(5px, -7px)":"rotate(0)"};
  }
`,Ty=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.isOpen?"1":"0"};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transition: all 0.3s ease-in-out;
`,Jl=y(_h)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 1rem 0;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #ccc;
  }
`,Ny=()=>{const[e,t]=_.useState(!1),n=()=>{t(!e)};return f.jsxs(Ry,{children:[f.jsxs(_y,{onClick:n,children:[f.jsx(Yl,{isOpen:e}),f.jsx(Yl,{isOpen:e}),f.jsx(Yl,{isOpen:e})]}),f.jsxs(Ty,{isOpen:e,children:[f.jsx(Jl,{to:"/",children:"Home"}),f.jsx(Jl,{to:"/about",children:"About"}),f.jsx(Jl,{href:"#contact",children:"Contact"})]})]})},Nh=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,Oy=y.div`
  width: 100%;
  height: 32vw;
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #F2F2F2;
`,Ly=y.div`
  height: 62.5%;
  width: 14.2%;
  margin-left: 4%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,zy=y.img`
  height: 70%;
  width: auto;
  margin-left: -40%;
`,$y=y.span`
  color: #070d0d;
  font-size: 28px;
  font-family: "Aileron";
  font-weight: 700;
  white-space: nowrap;
`;y.img``;const Ay=()=>f.jsxs(Oy,{children:[f.jsx(Ly,{children:f.jsx(zy,{src:Th,alt:"Logo"})}),f.jsxs($y,{children:[f.jsx("span",{children:"<"}),f.jsx(Nh,{children:"Día:"})," Dev & Design",f.jsx("span",{children:">"})]}),f.jsx(Ny,{})]}),Dy="/assets/DevBro-BrzQ5_d1.svg",Iy=y.div`
    width: 1200px;
    height: inherit;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    align-self: inherit;
    border: 2px solid red;
`,Fy=({children:e})=>f.jsx(Iy,{children:e});y.div`
  height: 85vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center
`;y.div`
  display: flex;
  padding: 0;
  ${""}
  ${""}
  justify-content: space-between;
  align-items: center;
`;y.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${""}
`;y.button`
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
`;y.h1`
  font-size: 6.4rem;
    margin: 0 0 2%;
`;y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`;y.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`;y.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`;const My="data:image/svg+xml,%3csvg%20width='119'%20height='96'%20viewBox='0%200%20119%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M117.318%200H1.68181C0.885686%200%200.236359%200.59896%200.236359%201.33333V94.6667C0.236359%2095.4063%200.885686%2096%201.68181%2096H117.318C118.12%2096%20118.764%2095.4063%20118.764%2094.6667V1.33333C118.764%200.59896%20118.12%200%20117.318%200ZM3.12727%202.66667H115.873V20H3.12727V2.66667ZM115.873%2093.3333H3.12727V22.6667H115.873V93.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_2'%20d='M13.9682%206.66666C11.1789%206.66666%208.90909%208.76039%208.90909%2011.3333C8.90909%2013.9063%2011.1789%2016%2013.9682%2016C16.7575%2016%2019.0273%2013.9063%2019.0273%2011.3333C19.0273%208.76039%2016.7575%206.66666%2013.9682%206.66666ZM13.9682%2013.3333C12.7712%2013.3333%2011.8%2012.4375%2011.8%2011.3333C11.8%2010.2292%2012.7712%209.33332%2013.9682%209.33332C15.1652%209.33332%2016.1364%2010.2292%2016.1364%2011.3333C16.1364%2012.4375%2015.1652%2013.3333%2013.9682%2013.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_3'%20d='M41.3754%2069.9267C41.6577%2070.1871%2042.0304%2070.3173%2042.3974%2070.3173C42.7644%2070.3173%2043.1371%2070.1871%2043.4194%2069.9267C43.984%2069.4058%2043.984%2068.5621%2043.4194%2068.0412L32.5334%2057.9996L43.4194%2047.958C43.984%2047.4372%2043.984%2046.5934%2043.4194%2046.0725C42.8548%2045.5517%2041.9401%2045.5517%2041.3754%2046.0725L29.4673%2057.0569C28.9027%2057.5777%2028.9027%2058.4214%2029.4673%2058.9424L41.3754%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_4'%20d='M75.3769%2069.9267C75.6592%2070.1871%2076.0319%2070.3173%2076.3989%2070.3173C76.7659%2070.3173%2077.1385%2070.1871%2077.4209%2069.9267L89.3289%2058.9423C89.8936%2058.4214%2089.8936%2057.5777%2089.3289%2057.0568L77.4209%2046.0724C76.8562%2045.5516%2075.9416%2045.5516%2075.3768%2046.0724C74.8122%2046.5932%2074.8122%2047.4369%2075.3768%2047.9579L86.2628%2057.9995L75.3768%2068.0411C74.8122%2068.5619%2074.8123%2069.4057%2075.3769%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_5'%20d='M49.7547%2079.2293C49.9354%2079.3022%2050.1274%2079.3335%2050.3137%2079.3335C50.8783%2079.3335%2051.4147%2079.0262%2051.6462%2078.5158L69.8156%2038.5158C70.1261%2037.8387%2069.7761%2037.0574%2069.0421%2036.771C68.3024%2036.4897%2067.461%2036.8074%2067.1505%2037.4845L48.9812%2077.4845C48.6706%2078.1616%2049.0207%2078.9429%2049.7547%2079.2293Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_6'%20d='M109.667%207.05734C109.103%206.53651%20108.188%206.53651%20107.623%207.05734L105.032%209.44801L102.44%207.05734C101.875%206.53651%20100.961%206.53651%20100.396%207.05734C99.8312%207.57816%2099.8313%208.42187%20100.396%208.9428L102.988%2011.3335L100.396%2013.7241C99.8313%2014.245%2099.8313%2015.0887%20100.396%2015.6096C100.678%2015.87%20101.051%2016.0002%20101.418%2016.0002C101.785%2016.0002%20102.158%2015.87%20102.44%2015.6096L105.032%2013.2189L107.623%2015.6096C107.906%2015.87%20108.278%2016.0002%20108.645%2016.0002C109.012%2016.0002%20109.385%2015.87%20109.667%2015.6096C110.232%2015.0888%20110.232%2014.2451%20109.667%2013.7241L107.076%2011.3335L109.667%208.9428C110.232%208.42198%20110.232%207.57827%20109.667%207.05734Z'%20fill='%23070D0D'/%3e%3c/g%3e%3c/svg%3e",Uy="/assets/CustomApplicationsNew-CGRyDJpo.svg",By="/assets/ProblemSolutionsNew-DGYs1PFU.svg",by="/assets/TalentIncubatorNew-Z-AuMXFv.svg";y.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
`;y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;y.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;y.span`
  font-weight: 700;
  font-size: 9.6rem;
`;y.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`;y.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${""}
`;y.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${""}
  ${""}
`;y.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;const cl=y.div`
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
`;y(cl)`
  background-color: #edf3ff;
`;y(cl)`
  background-color: #fffaec;
`;y(cl)`
  background-color: #f0fff4;
`;y(cl)`
  background-color: #fff5f3;
`;y.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
  ${""}
  ${""}
  width: 38%;
  ${""}
`;y.img`
  height: 62%;
  width: 62%;
  ${""}
`;y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0
  `;y.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0
`;y.p`
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
`;function Oh(e,t){return function(){return e.apply(t,arguments)}}const{toString:Hy}=Object.prototype,{getPrototypeOf:Ru}=Object,fl=(e=>t=>{const n=Hy.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),it=e=>(e=e.toLowerCase(),t=>fl(t)===e),dl=e=>t=>typeof t===e,{isArray:ur}=Array,oi=dl("undefined");function Wy(e){return e!==null&&!oi(e)&&e.constructor!==null&&!oi(e.constructor)&&Ie(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Lh=it("ArrayBuffer");function Vy(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Lh(e.buffer),t}const Qy=dl("string"),Ie=dl("function"),zh=dl("number"),pl=e=>e!==null&&typeof e=="object",Ky=e=>e===!0||e===!1,oo=e=>{if(fl(e)!=="object")return!1;const t=Ru(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gy=it("Date"),qy=it("File"),Yy=it("Blob"),Jy=it("FileList"),Xy=e=>pl(e)&&Ie(e.pipe),Zy=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ie(e.append)&&((t=fl(e))==="formdata"||t==="object"&&Ie(e.toString)&&e.toString()==="[object FormData]"))},ev=it("URLSearchParams"),[tv,nv,rv,iv]=["ReadableStream","Request","Response","Headers"].map(it),ov=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ur(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function $h(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ah=e=>!oi(e)&&e!==un;function va(){const{caseless:e}=Ah(this)&&this||{},t={},n=(r,i)=>{const o=e&&$h(t,i)||i;oo(t[o])&&oo(r)?t[o]=va(t[o],r):oo(r)?t[o]=va({},r):ur(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&pi(arguments[r],n);return t}const lv=(e,t,n,{allOwnKeys:r}={})=>(pi(t,(i,o)=>{n&&Ie(i)?e[o]=Oh(i,n):e[o]=i},{allOwnKeys:r}),e),sv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),av=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},uv=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Ru(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},cv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},fv=e=>{if(!e)return null;if(ur(e))return e;let t=e.length;if(!zh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ru(Uint8Array)),pv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},hv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mv=it("HTMLFormElement"),gv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),uf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yv=it("RegExp"),Dh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};pi(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},vv=e=>{Dh(e,(t,n)=>{if(Ie(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ie(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wv=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ur(e)?r(e):r(String(e).split(t)),n},xv=()=>{},Sv=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Xl="abcdefghijklmnopqrstuvwxyz",cf="0123456789",Ih={DIGIT:cf,ALPHA:Xl,ALPHA_DIGIT:Xl+Xl.toUpperCase()+cf},Cv=(e=16,t=Ih.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kv(e){return!!(e&&Ie(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ev=e=>{const t=new Array(10),n=(r,i)=>{if(pl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ur(r)?[]:{};return pi(r,(l,s)=>{const a=n(l,i+1);!oi(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},jv=it("AsyncFunction"),Pv=e=>e&&(pl(e)||Ie(e))&&Ie(e.then)&&Ie(e.catch),Fh=((e,t)=>e?setImmediate:t?((n,r)=>(un.addEventListener("message",({source:i,data:o})=>{i===un&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),un.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ie(un.postMessage)),Rv=typeof queueMicrotask<"u"?queueMicrotask.bind(un):typeof process<"u"&&process.nextTick||Fh,k={isArray:ur,isArrayBuffer:Lh,isBuffer:Wy,isFormData:Zy,isArrayBufferView:Vy,isString:Qy,isNumber:zh,isBoolean:Ky,isObject:pl,isPlainObject:oo,isReadableStream:tv,isRequest:nv,isResponse:rv,isHeaders:iv,isUndefined:oi,isDate:Gy,isFile:qy,isBlob:Yy,isRegExp:yv,isFunction:Ie,isStream:Xy,isURLSearchParams:ev,isTypedArray:dv,isFileList:Jy,forEach:pi,merge:va,extend:lv,trim:ov,stripBOM:sv,inherits:av,toFlatObject:uv,kindOf:fl,kindOfTest:it,endsWith:cv,toArray:fv,forEachEntry:pv,matchAll:hv,isHTMLForm:mv,hasOwnProperty:uf,hasOwnProp:uf,reduceDescriptors:Dh,freezeMethods:vv,toObjectSet:wv,toCamelCase:gv,noop:xv,toFiniteNumber:Sv,findKey:$h,global:un,isContextDefined:Ah,ALPHABET:Ih,generateString:Cv,isSpecCompliantForm:kv,toJSONObject:Ev,isAsyncFn:jv,isThenable:Pv,setImmediate:Fh,asap:Rv};function $(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Mh=$.prototype,Uh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Uh[e]={value:e}});Object.defineProperties($,Uh);Object.defineProperty(Mh,"isAxiosError",{value:!0});$.from=(e,t,n,r,i,o)=>{const l=Object.create(Mh);return k.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),$.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const _v=null;function wa(e){return k.isPlainObject(e)||k.isArray(e)}function Bh(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function ff(e,t,n){return e?e.concat(t).map(function(i,o){return i=Bh(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Tv(e){return k.isArray(e)&&!e.some(wa)}const Nv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function hl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!k.isUndefined(C[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!a&&k.isBlob(v))throw new $("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,w,C){let h=v;if(v&&!C&&typeof v=="object"){if(k.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&Tv(v)||(k.isFileList(v)||k.endsWith(w,"[]"))&&(h=k.toArray(v)))return w=Bh(w),h.forEach(function(m,S){!(k.isUndefined(m)||m===null)&&t.append(l===!0?ff([w],S,o):l===null?w:w+"[]",u(m))}),!1}return wa(v)?!0:(t.append(ff(C,w,o),u(v)),!1)}const c=[],g=Object.assign(Nv,{defaultVisitor:d,convertValue:u,isVisitable:wa});function x(v,w){if(!k.isUndefined(v)){if(c.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));c.push(v),k.forEach(v,function(h,p){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(p)?p.trim():p,w,g))===!0&&x(h,w?w.concat(p):[p])}),c.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return x(e),t}function df(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function _u(e,t){this._pairs=[],e&&hl(e,this,t)}const bh=_u.prototype;bh.append=function(t,n){this._pairs.push([t,n])};bh.toString=function(t){const n=t?function(r){return t.call(this,r,df)}:df;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Ov(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Hh(e,t,n){if(!t)return e;const r=n&&n.encode||Ov,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new _u(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class pf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Wh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lv=typeof URLSearchParams<"u"?URLSearchParams:_u,zv=typeof FormData<"u"?FormData:null,$v=typeof Blob<"u"?Blob:null,Av={isBrowser:!0,classes:{URLSearchParams:Lv,FormData:zv,Blob:$v},protocols:["http","https","file","blob","url","data"]},Tu=typeof window<"u"&&typeof document<"u",xa=typeof navigator=="object"&&navigator||void 0,Dv=Tu&&(!xa||["ReactNative","NativeScript","NS"].indexOf(xa.product)<0),Iv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fv=Tu&&window.location.href||"http://localhost",Mv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Tu,hasStandardBrowserEnv:Dv,hasStandardBrowserWebWorkerEnv:Iv,navigator:xa,origin:Fv},Symbol.toStringTag,{value:"Module"})),Pe={...Mv,...Av};function Uv(e,t){return hl(e,new Pe.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Pe.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Bv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bv(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Vh(e){function t(n,r,i,o){let l=n[o++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&k.isArray(i)?i.length:l,a?(k.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!k.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&k.isArray(i[l])&&(i[l]=bv(i[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(Bv(r),i,n,0)}),n}return null}function Hv(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const hi={transitional:Wh,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(Vh(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Uv(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return hl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Hv(t)):t}],transformResponse:[function(t){const n=this.transitional||hi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?$.from(s,$.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{hi.headers[e]={}});const Wv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vv=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&Wv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},hf=Symbol("internals");function Sr(e){return e&&String(e).trim().toLowerCase()}function lo(e){return e===!1||e==null?e:k.isArray(e)?e.map(lo):String(e)}function Qv(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Kv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Zl(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Gv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qv(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Re{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,u){const d=Sr(a);if(!d)throw new Error("header name must be a non-empty string");const c=k.findKey(i,d);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||a]=lo(s))}const l=(s,a)=>k.forEach(s,(u,d)=>o(u,d,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!Kv(t))l(Vv(t),n);else if(k.isHeaders(t))for(const[s,a]of t.entries())o(a,s,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Sr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Qv(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Sr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Zl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Sr(l),l){const s=k.findKey(r,l);s&&(!n||Zl(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Zl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const l=k.findKey(r,o);if(l){n[l]=lo(i),delete n[o];return}const s=t?Gv(o):String(o).trim();s!==o&&delete n[o],n[s]=lo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[hf]=this[hf]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=Sr(l);r[s]||(qv(i,l),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Re.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Re);function es(e,t){const n=this||hi,r=t||n,i=Re.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Qh(e){return!!(e&&e.__CANCEL__)}function cr(e,t,n){$.call(this,e??"canceled",$.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(cr,$,{__CANCEL__:!0});function Kh(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Yv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];l||(l=u),n[i]=a,r[i]=u;let c=o,g=0;for(;c!==i;)g+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const x=d&&u-d;return x?Math.round(g*1e3/x):void 0}}function Xv(e,t){let n=0,r=1e3/t,i,o;const l=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),c=d-n;c>=r?l(u,d):(i=u,o||(o=setTimeout(()=>{o=null,l(i)},r-c)))},()=>i&&l(i)]}const Fo=(e,t,n=3)=>{let r=0;const i=Jv(50,250);return Xv(o=>{const l=o.loaded,s=o.lengthComputable?o.total:void 0,a=l-r,u=i(a),d=l<=s;r=l;const c={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&d?(s-l)/u:void 0,event:o,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(c)},n)},mf=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},gf=e=>(...t)=>k.asap(()=>e(...t)),Zv=Pe.hasStandardBrowserEnv?function(){const t=Pe.navigator&&/(msie|trident)/i.test(Pe.navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=k.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),e2=Pe.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function t2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function n2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Gh(e,t){return e&&!t2(t)?n2(e,t):t}const yf=e=>e instanceof Re?{...e}:e;function wn(e,t){t=t||{};const n={};function r(u,d,c){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:c},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function i(u,d,c){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function o(u,d){if(!k.isUndefined(d))return r(void 0,d)}function l(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>i(yf(u),yf(d),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=a[d]||i,g=c(e[d],t[d],d);k.isUndefined(g)&&c!==s||(n[d]=g)}),n}const qh=e=>{const t=wn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:l,auth:s}=t;t.headers=l=Re.from(l),t.url=Hh(Gh(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(k.isFormData(n)){if(Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[u,...d]=a?a.split(";").map(c=>c.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Pe.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Zv(t.url))){const u=i&&o&&e2.read(o);u&&l.set(i,u)}return t},r2=typeof XMLHttpRequest<"u",i2=r2&&function(e){return new Promise(function(n,r){const i=qh(e);let o=i.data;const l=Re.from(i.headers).normalize();let{responseType:s,onUploadProgress:a,onDownloadProgress:u}=i,d,c,g,x,v;function w(){x&&x(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function h(){if(!C)return;const m=Re.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!s||s==="text"||s==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:m,config:e,request:C};Kh(function(j){n(j),w()},function(j){r(j),w()},E),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new $("Request aborted",$.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new $("Network Error",$.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||Wh;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new $(S,E.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,C)),C=null},o===void 0&&l.setContentType(null),"setRequestHeader"in C&&k.forEach(l.toJSON(),function(S,E){C.setRequestHeader(E,S)}),k.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),s&&s!=="json"&&(C.responseType=i.responseType),u&&([g,v]=Fo(u,!0),C.addEventListener("progress",g)),a&&C.upload&&([c,x]=Fo(a),C.upload.addEventListener("progress",c),C.upload.addEventListener("loadend",x)),(i.cancelToken||i.signal)&&(d=m=>{C&&(r(!m||m.type?new cr(null,e,C):m),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const p=Yv(i.url);if(p&&Pe.protocols.indexOf(p)===-1){r(new $("Unsupported protocol "+p+":",$.ERR_BAD_REQUEST,e));return}C.send(o||null)})},o2=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,s();const d=u instanceof Error?u:this.reason;r.abort(d instanceof $?d:new cr(d instanceof Error?d.message:d))}};let l=t&&setTimeout(()=>{l=null,o(new $(`timeout ${t} of ms exceeded`,$.ETIMEDOUT))},t);const s=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>k.asap(s),a}},l2=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},s2=async function*(e,t){for await(const n of a2(e))yield*l2(n,t)},a2=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},vf=(e,t,n,r)=>{const i=s2(e,t);let o=0,l,s=a=>{l||(l=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:u,value:d}=await i.next();if(u){s(),a.close();return}let c=d.byteLength;if(n){let g=o+=c;n(g)}a.enqueue(new Uint8Array(d))}catch(u){throw s(u),u}},cancel(a){return s(a),i.return()}},{highWaterMark:2})},ml=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Yh=ml&&typeof ReadableStream=="function",u2=ml&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Jh=(e,...t)=>{try{return!!e(...t)}catch{return!1}},c2=Yh&&Jh(()=>{let e=!1;const t=new Request(Pe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),wf=64*1024,Sa=Yh&&Jh(()=>k.isReadableStream(new Response("").body)),Mo={stream:Sa&&(e=>e.body)};ml&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Mo[t]&&(Mo[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new $(`Response type '${t}' is not supported`,$.ERR_NOT_SUPPORT,r)})})})(new Response);const f2=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Pe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await u2(e)).byteLength},d2=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??f2(t)},p2=ml&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:u,headers:d,withCredentials:c="same-origin",fetchOptions:g}=qh(e);u=u?(u+"").toLowerCase():"text";let x=o2([i,o&&o.toAbortSignal()],l),v;const w=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let C;try{if(a&&c2&&n!=="get"&&n!=="head"&&(C=await d2(d,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(k.isFormData(r)&&(P=E.headers.get("content-type"))&&d.setContentType(P),E.body){const[j,O]=mf(C,Fo(gf(a)));r=vf(E.body,wf,j,O)}}k.isString(c)||(c=c?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:h?c:void 0});let p=await fetch(v);const m=Sa&&(u==="stream"||u==="response");if(Sa&&(s||m&&w)){const E={};["status","statusText","headers"].forEach(U=>{E[U]=p[U]});const P=k.toFiniteNumber(p.headers.get("content-length")),[j,O]=s&&mf(P,Fo(gf(s),!0))||[];p=new Response(vf(p.body,wf,j,()=>{O&&O(),w&&w()}),E)}u=u||"text";let S=await Mo[k.findKey(Mo,u)||"text"](p,e);return!m&&w&&w(),await new Promise((E,P)=>{Kh(E,P,{data:S,headers:Re.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(h){throw w&&w(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new $("Network Error",$.ERR_NETWORK,e,v),{cause:h.cause||h}):$.from(h,h&&h.code,e,v)}}),Ca={http:_v,xhr:i2,fetch:p2};k.forEach(Ca,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xf=e=>`- ${e}`,h2=e=>k.isFunction(e)||e===null||e===!1,Xh={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!h2(n)&&(r=Ca[(l=String(n)).toLowerCase()],r===void 0))throw new $(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(xf).join(`
`):" "+xf(o[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Ca};function ts(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new cr(null,e)}function Sf(e){return ts(e),e.headers=Re.from(e.headers),e.data=es.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xh.getAdapter(e.adapter||hi.adapter)(e).then(function(r){return ts(e),r.data=es.call(e,e.transformResponse,r),r.headers=Re.from(r.headers),r},function(r){return Qh(r)||(ts(e),r&&r.response&&(r.response.data=es.call(e,e.transformResponse,r.response),r.response.headers=Re.from(r.response.headers))),Promise.reject(r)})}const Zh="1.7.7",Nu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Nu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Cf={};Nu.transitional=function(t,n,r){function i(o,l){return"[Axios v"+Zh+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new $(i(l," has been removed"+(n?" in "+n:"")),$.ERR_DEPRECATED);return n&&!Cf[l]&&(Cf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function m2(e,t,n){if(typeof e!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new $("option "+o+" must be "+a,$.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $("Unknown option "+o,$.ERR_BAD_OPTION)}}const ka={assertOptions:m2,validators:Nu},Pt=ka.validators;class pn{constructor(t){this.defaults=t,this.interceptors={request:new pf,response:new pf}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ka.assertOptions(r,{silentJSONParsing:Pt.transitional(Pt.boolean),forcedJSONParsing:Pt.transitional(Pt.boolean),clarifyTimeoutError:Pt.transitional(Pt.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:ka.assertOptions(i,{encode:Pt.function,serialize:Pt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Re.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,c=0,g;if(!a){const v=[Sf.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),g=v.length,d=Promise.resolve(n);c<g;)d=d.then(v[c++],v[c++]);return d}g=s.length;let x=n;for(c=0;c<g;){const v=s[c++],w=s[c++];try{x=v(x)}catch(C){w.call(this,C);break}}try{d=Sf.call(this,x)}catch(v){return Promise.reject(v)}for(c=0,g=u.length;c<g;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=wn(this.defaults,t);const n=Gh(t.baseURL,t.url);return Hh(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){pn.prototype[t]=function(n,r){return this.request(wn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(wn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}pn.prototype[t]=n(),pn.prototype[t+"Form"]=n(!0)});class Ou{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new cr(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ou(function(i){t=i}),cancel:t}}}function g2(e){return function(n){return e.apply(null,n)}}function y2(e){return k.isObject(e)&&e.isAxiosError===!0}const Ea={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ea).forEach(([e,t])=>{Ea[t]=e});function e0(e){const t=new pn(e),n=Oh(pn.prototype.request,t);return k.extend(n,pn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return e0(wn(e,i))},n}const re=e0(hi);re.Axios=pn;re.CanceledError=cr;re.CancelToken=Ou;re.isCancel=Qh;re.VERSION=Zh;re.toFormData=hl;re.AxiosError=$;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=g2;re.isAxiosError=y2;re.mergeConfig=wn;re.AxiosHeaders=Re;re.formToJSON=e=>Vh(k.isHTMLForm(e)?new FormData(e):e);re.getAdapter=Xh.getAdapter;re.HttpStatusCode=Ea;re.default=re;const v2="https://diapage-server.fly.dev",w2=(e,t)=>{let n=localStorage.getItem("authToken");return re.post(v2+e,t,{headers:{Authorization:`Bearer ${n}`}})},x2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9471%201.02847C24.0017%200.892169%2024.015%200.742859%2023.9855%200.599044C23.956%200.45523%2023.885%200.323236%2023.7812%200.219426C23.6774%200.115616%2023.5454%200.0445561%2023.4015%200.0150549C23.2577%20-0.0144463%2023.1084%20-0.00109103%2022.9721%200.053465L1.15162%208.78197H1.15012L0.472125%209.05196C0.34371%209.10319%200.231953%209.18891%200.149198%209.29966C0.0664433%209.41041%200.0159116%209.54188%200.00318483%209.67955C-0.00954198%209.81721%200.0160314%209.95572%200.0770801%2010.0798C0.138129%2010.2038%200.232277%2010.3086%200.349125%2010.3825L0.964125%2010.7725L0.965625%2010.7755L8.45812%2015.5425L13.2251%2023.035L13.2281%2023.038L13.6181%2023.653C13.6923%2023.7694%2013.7971%2023.863%2013.921%2023.9237C14.045%2023.9844%2014.1833%2024.0097%2014.3207%2023.9968C14.4581%2023.9839%2014.5892%2023.9334%2014.6998%2023.8508C14.8103%2023.7681%2014.8959%2023.6566%2014.9471%2023.5285L23.9471%201.02847ZM21.1976%203.86347L9.95662%2015.1045L9.63412%2014.5975C9.57503%2014.5044%209.49616%2014.4256%209.40312%2014.3665L8.89612%2014.044L20.1371%202.80296L21.9041%202.09646L21.1991%203.86347H21.1976Z'%20fill='%23EEEEEE'/%3e%3c/svg%3e",S2="/assets/Dog-DhZuYJLQ.svg",C2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='EnvelopeFill'%3e%3cpath%20id='Vector'%20d='M0.075%205.3325C0.226227%204.66986%200.597983%204.07822%201.12938%203.65446C1.66078%203.23071%202.32033%202.99995%203%203H21C21.6797%202.99995%2022.3392%203.23071%2022.8706%203.65446C23.402%204.07822%2023.7738%204.66986%2023.925%205.3325L12%2012.621L0.075%205.3325ZM0%207.0455V17.7015L8.7045%2012.3645L0%207.0455ZM10.1415%2013.245L0.2865%2019.2855C0.52999%2019.7989%200.91429%2020.2326%201.39467%2020.5362C1.87505%2020.8397%202.43176%2021.0005%203%2021H21C21.5681%2021.0001%2022.1246%2020.8389%2022.6048%2020.5351C23.0849%2020.2313%2023.4688%2019.7975%2023.712%2019.284L13.857%2013.2435L12%2014.379L10.1415%2013.2435V13.245ZM15.2955%2012.366L24%2017.7015V7.0455L15.2955%2012.3645V12.366Z'%20fill='%2302A66A'/%3e%3c/g%3e%3c/svg%3e";y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh ${""};
  width: 100%;
  background-color: #01402f;
`;y.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`;y.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
`;y.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
  height: 60% ${""};
`;y.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;y.div`
  margin-top: -10%;
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
  width: 490px;
  text-align: left;
  color: white;
`;y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`;y.div`
  width: 90%;
  height: 77%;
  display: flex;
  flex-direction: column;
  justif-content: space-between;
  margin-right: 10%;
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`;y.img`
  width: 20%;
  ${""}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`;y.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${""}
`;y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`;y.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 4vh;
`;y.button`
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
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  &:active {
    background-color: var(--green);
  }

  ${e=>e.active&&`
    background-color: var(--green);
    color: black;
    `}
`;y.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;y.label`
  transform: translate(3px, ${e=>e.active?"0.1rem":"1.3rem"});
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${e=>e.active?"15px":"20px"};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`;y.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`;y.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`;y.button`
  margin-top: 3%;
  height: 2vw;
  width: 20vw;
  padding: 24px 64px;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-between;
  transform: translateY(3rem);
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`;const k2=y.div`
  width: 361px;
  height: 375px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`,E2=y.div``,kf=y.span`
  color: #070D0D;
  font-size: 48px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`,j2=y.span`
  color: #02A66A;
  font-size: 48px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`,P2=y.div`
  width: 361px;
  color: #070D0D;
  font-size: 16px;
  font-family: 'Aileron';
  font-weight: 400;
  word-wrap: break-word;
`,R2=y.div`
  width: 179px;
  height: 61px;
  padding: 16px 27px;
  background: #02A66A;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,_2=y.div`
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: 'Aileron';
  font-weight: 700;
  word-wrap: break-word;
`,T2=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return f.jsxs(k2,{children:[f.jsxs(E2,{children:[f.jsx(kf,{children:"Every-"}),f.jsx(j2,{children:"Día"}),f.jsxs(kf,{children:[".",f.jsx("br",{}),"We create.",f.jsx("br",{}),"You succeed."]})]}),f.jsx(P2,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),f.jsx(R2,{onClick:e,children:f.jsx(_2,{children:"Contact Us"})})]})},N2=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
  margin-top: 32vw
  ${""}
  ${""}
`,O2=()=>f.jsx(N2,{children:f.jsx(T2,{})}),L2=hh`
  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    background-color: #ffffff;
    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
    background-color: #F2F2F2
  }

  body {
    margin: 0;
    padding: 0;
    width: 99vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2F2F2
  }
`,z2="/assets/BalloonCat-v3wmWc6F.svg",$2="/assets/DDDGreenLogoClearBackGround-g-vtVwvB.svg";y.div`
    height: 85vh;
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`;y.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`;y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 80%;

`;y.h1`
    font-family: 'Aileron-Bold';
    font-size: 9.6rem;
    font-weight: 700;
`;y.img`
    height: 80%
`;y.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;y.img`
    height: 85%;
    margin-left: 1%
`;y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    width: 74%
`;y.div`
    font-size: 1.6rem;
    font-family: 'Roboto'
`;const A2="/assets/TargetIcon-BDgFxHvR.svg",D2="/assets/EyeIcon-GMqB3cgM.svg",I2="/assets/HandsIcon-DC7nJpKX.svg";y.div`
  ${""}
  width: 100%;

  background-color: #F2F2F2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

`;y(Fy)`
  flex-direction: column
`;y.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${""}
  ${""}
`;y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`;y.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;y.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;y.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;y.img`
  height: 60%;
`;y.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`;const F2="/assets/Fishermen-D8grav2G.svg",M2="data:image/svg+xml,%3csvg%20width='1512'%20height='657'%20viewBox='0%200%201512%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M962.408%2046.0762C1037.52%2065.7203%201108.42%2084.265%201184.4%2084.2649C1385.21%2084.2649%201512%2017.7214%201512%2017.7214V175.219H0V0C38.0005%200%2073.3722%207.92574%20113.298%2016.872C200.793%2036.4769%20310.159%2060.9827%20516.994%2017.7214C704.245%20-21.444%20839.001%2013.8002%20962.408%2046.0762ZM1512%20175.219V602.831C1512%20602.831%201253.7%20548.888%20964.688%20602.831C761.911%20640.679%20733.582%20637.047%20626.749%20623.35C581.316%20617.526%20521.685%20609.88%20428.4%20602.831C115.763%20579.206%200.000242615%20656.775%200.000242615%20656.775V175.219H1512Z'%20fill='%2377B9F3'/%3e%3c/svg%3e";y.div`
  height: 80vh;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${M2});
  background-position: 50% 100%;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  overflow-y: visible;
`;y.div`
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
`;y.div`
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
`;y.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${""}
  z-index: 13
`;y.img`
  width: 100%;
  height: 100%;
`;y.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;y.div`
  width: 100%;
  margin-top: -2%;

`;y.p`
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
`;y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 750px;
  background-color: #F2F2F2;
`;y.div`
  position: absolute;
  margin-top: 1.5%;
  width: 100%;
  height: 100%
`;y.div`
  height: 100%;
  width: 71%;
  display: flex;
  flex-direction: row;
  margin-left: 3.5%;
  gap: 3%;
  ${""}
  position: relative;
  left: 14%;
`;y.div`
  display: flex;
  height: 60%;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(-8deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
  z-index: 2;
`;y.div`
  display: flex;
  height: 60%;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(8deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
`;y.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`;y.h3`
  color: #070d0d;
  font-family: Aileron;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5% 0;
`;y.div`
  align-self: stretch;
  ${""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${""}
`;y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 2rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
`;y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 1.6rem;
  font-family: "Aileron";
  font-weight: 400;
  word-wrap: break-word;
`;const U2="/assets/Plant-BKSABYCs.svg",B2="/assets/Hands-On-Training-CAh4lW99.svg",b2="/assets/Performance-CiLV-Kb0.svg",H2="/assets/Community-Engagement-Cuw581Qp.svg",W2="/assets/BalloonDog-IURLZLkm.svg",V2="data:image/svg+xml,%3csvg%20width='1512'%20height='185'%20viewBox='0%200%201512%20185'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M359.888%200C672.131%20-8.65219e-05%20602.831%2071.7909%20964.688%2071.7909C1326.54%2071.7909%201512%20184.211%201512%20184.211V185H0C0%20185%2047.6438%208.65221e-05%20359.888%200Z'%20fill='%2301402F'/%3e%3c/svg%3e";y.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%
`;y.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto
`;y.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;y.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`;y.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`;y.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;const Q2=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,K2=()=>f.jsx(Q2,{}),G2=y.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-contents: center;
`;function q2(){return f.jsxs(G2,{children:[f.jsx(L2,{}),f.jsx(Ay,{}),f.jsxs(Rh,{children:[f.jsx(ii,{path:"/",element:f.jsx(O2,{})}),f.jsx(ii,{path:"/about",element:f.jsx(K2,{})})]})]})}const Y2=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 15vh;
  margin-left: 3%;
`,J2=y.img`
  height: 75%
`,X2=y.h1`
  font-size: 5rem;
  margin-left: 1%
`,Z2=y.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Ef=y(_h)`
  font-size: 2.1rem;
  font-family: 'Aileron-Bold';
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &:hover {
    color: var(--green);
  }
`,ew=y.button`
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
`,tw=()=>{const e=kh(),t=()=>{e("/")},n=async()=>{t(),setTimeout(()=>{const r=document.getElementById("contact");r&&window.scrollTo({top:r.getBoundingClientRect().top,behavior:"smooth"})},1)};return f.jsxs(Y2,{children:[f.jsx(J2,{onClick:t,src:Th}),f.jsxs(X2,{children:["<",f.jsx(Nh,{children:"Día:"})," Dev & Design>"]}),f.jsxs(Z2,{children:[f.jsx(Ef,{to:"/",children:"Home"}),f.jsx(Ef,{to:"/about",children:"About Us"}),f.jsx(ew,{onClick:n,children:"Contact Us"})]})]})},nw=y.div`
    width: 1200px;
    height: inherit;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    align-self: inherit;
    border: 2px solid red;
`,Yt=({children:e})=>f.jsx(nw,{children:e}),rw=y.div`
  height: 85vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center
`,iw=y.div`
  display: flex;
  padding: 0;
  ${""}
  ${""}
  justify-content: space-between;
  align-items: center;
`,ow=y.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${""}
`,lw=y.button`
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
`,Di=y.h1`
  font-size: 6.4rem;
    margin: 0 0 2%;
`,jf=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,sw=y.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`,aw=y.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`,uw=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return f.jsx(rw,{children:f.jsx(Yt,{children:f.jsxs(iw,{children:[f.jsxs(ow,{children:[f.jsxs(Di,{children:["Every-",f.jsx(jf,{id:"dia",children:"Día"}),". "]}),f.jsx(Di,{children:"We build."}),f.jsx(Di,{children:"We create."}),f.jsxs(Di,{children:["You ",f.jsx(jf,{id:"dia",children:"succeed"}),"!"]}),f.jsx(sw,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),f.jsx(lw,{onClick:e,children:"Contact Us"})]}),f.jsx(aw,{children:f.jsx("img",{src:Dy,alt:"header-image"})})]})})})},cw=y.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
`,fw=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,dw=y.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,pw=y.span`
  font-weight: 700;
  font-size: 9.6rem;
`,hw=y.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`,mw=y.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${""}
`,gw=y.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${""}
  ${""}
`,yw=y.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`,gl=y.div`
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
`,vw=y(gl)`
  background-color: #edf3ff;
`,ww=y(gl)`
  background-color: #fffaec;
`,xw=y(gl)`
  background-color: #f0fff4;
`,Sw=y(gl)`
  background-color: #fff5f3;
`,Ii=y.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
  ${""}
  ${""}
  width: 38%;
  ${""}
`,Fi=y.img`
  height: 62%;
  width: 62%;
  ${""}
`,Mi=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0
  `,Ui=y.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0
`,Bi=y.p`
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
`,Cw=()=>f.jsx(cw,{children:f.jsx(Yt,{children:f.jsxs(fw,{children:[f.jsxs(dw,{children:[f.jsx(pw,{children:"We Are"}),f.jsxs(hw,{children:[f.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),f.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),f.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),f.jsxs(mw,{children:[f.jsx(gw,{children:"What We Do"}),f.jsxs(yw,{children:[f.jsxs(vw,{children:[f.jsx(Ii,{children:f.jsx(Fi,{src:My,alt:"web-dev"})}),f.jsxs(Mi,{children:[f.jsx(Ui,{children:"Web Development"}),f.jsx(Bi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),f.jsxs(ww,{children:[f.jsx(Ii,{children:f.jsx(Fi,{src:Uy,alt:"custom-applications"})}),f.jsxs(Mi,{children:[f.jsx(Ui,{children:"Custom Applications"}),f.jsx(Bi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),f.jsxs(xw,{children:[f.jsx(Ii,{children:f.jsx(Fi,{src:By,alt:"problem-solutions"})}),f.jsxs(Mi,{children:[f.jsx(Ui,{children:"Marketing"}),f.jsx(Bi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),f.jsxs(Sw,{children:[f.jsx(Ii,{children:f.jsx(Fi,{src:by,alt:"tech-talent-incubator"})}),f.jsxs(Mi,{children:[f.jsx(Ui,{children:"Tech Incubator"}),f.jsx(Bi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]})})}),kw=y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh ${""};
  width: 100%;
  background-color: #01402f;
`,Ew=y.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`,jw=y.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
`,Pw=y.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
  height: 60% ${""};
`,Rw=y.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_w=y.div`
  margin-top: -10%;
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
  width: 490px;
  text-align: left;
  color: white;
`,Tw=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`,Nw=y.div`
  width: 90%;
  height: 77%;
  display: flex;
  flex-direction: column;
  justif-content: space-between;
  margin-right: 10%;
  text-align: left;
  background-color: #eeeeee;
  border-radius: 24px;
`,Ow=y.img`
  width: 20%;
  ${""}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`,Lw=y.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${""}
`,zw=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`,$w=y.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 4vh;
`,Pn=y.button`
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
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  &:active {
    background-color: var(--green);
  }

  ${e=>e.active&&`
    background-color: var(--green);
    color: black;
    `}
`,Aw=y.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`,ns=y.label`
  transform: translate(3px, ${e=>e.active?"0.1rem":"1.3rem"});
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${e=>e.active?"15px":"20px"};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`,Pf=y.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,Dw=y.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 80%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,Iw=y.button`
  margin-top: 3%;
  height: 2vw;
  width: 20vw;
  padding: 24px 64px;
  background-color: var(--green);
  border-radius: 16px;
  display: flex;
  font-size: 20px;
  color: white;
  border: none;
  justify-content: space-between;
  transform: translateY(3rem);
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #a9e6b9;
  }
`,Fw=()=>{const[e,t]=_.useState([]),[n,r]=_.useState(null),[i,o]=_.useState({name:"",email:"",message:""}),[l,s]=_.useState(""),a=(c,g)=>{let x=[...e],v=x.findIndex(w=>w===g);v>-1?x.splice(v,1):x.push(g),t(x)},u=c=>{o(g=>({...g,[c.target.name]:c.target.value}))},d=c=>{c.preventDefault(),w2("/send-email",{emailContent:i,subjectsSelected:e}).then(g=>{console.log(g.data.message),s(g.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(g=>{console.log(g)})};return _.useEffect(()=>{document.addEventListener("mousedown",()=>r(null))},[]),f.jsx(kw,{children:f.jsx(Yt,{children:f.jsxs(jw,{id:"contact",children:[f.jsxs(Pw,{children:[f.jsx(Ew,{children:"Get In Touch"}),f.jsxs(_w,{children:["Let’s discuss something ",f.jsx(Tw,{children:"cool"})," together!"]}),f.jsxs(Lw,{children:[f.jsx("span",{children:f.jsx("img",{src:C2})}),f.jsx("span",{style:{color:"white",fontSize:"2rem",fontWeight:"500"},children:"info@diadevdesign.com"})]})]}),l?f.jsx("p",{style:{whiteSpace:"pre-wrap",color:"white",fontFamily:"Aileron-Bold",fontSize:"3.6rem",fontWeight:"900"},children:l}):f.jsxs(Rw,{children:[f.jsx(Ow,{src:S2,alt:"Dog Image"}),f.jsx(Nw,{children:f.jsxs(zw,{children:[f.jsx("span",{children:"I’m interested in..."}),f.jsxs($w,{children:[f.jsx(Pn,{active:e.includes("Web Development"),value:"Web Development",onClick:c=>a(c,"Web Development"),children:"Web Development"},"button-1"),f.jsx(Pn,{active:e.includes("UX/UI Design"),value:"UX/UI Design",onClick:c=>a(c,"UX/UI Design"),children:"UX/UI Design"},"button-2"),f.jsx(Pn,{active:e.includes("Graphic Design"),value:"Graphic Design",onClick:c=>a(c,"Graphic Design"),children:"Marketing"},"button-3"),f.jsx(Pn,{active:e.includes("Custom APIs"),value:"Custom APIs",onClick:c=>a(c,"Custom APIs"),children:"Custom APIs"},"button-5"),f.jsx(Pn,{active:e.includes("Data Analysis"),value:"Data Analysis",onClick:c=>a(c,"Data Analysis"),children:"Data Analysis"},"button-6"),f.jsx(Pn,{active:e.includes("Other"),value:"Other",onClick:c=>a(c,"Other"),children:"Other"},"button-7")]}),f.jsxs(Aw,{onSubmit:d,children:[f.jsx(ns,{htmlFor:"name",active:n==="input-1",children:"Your Name"}),f.jsx(Pf,{type:"text",name:"name",value:i.name,active:n==="input-1",onClick:()=>r("input-1"),onChange:c=>u(c)}),f.jsx(ns,{htmlFor:"email",active:n==="input-2",children:"Your Email"}),f.jsx(Pf,{type:"email",name:"email",value:i.email,active:n==="input-2",onClick:()=>r("input-2"),onChange:c=>u(c)}),f.jsx(ns,{htmlFor:"message",active:n==="input-3",children:"Your Message"}),f.jsx(Dw,{type:"text",name:"message",value:i.message,active:n==="input-3",onClick:()=>r("input-3"),onChange:c=>u(c)}),f.jsxs(Iw,{type:"submit",children:[f.jsx("img",{src:x2,alt:"send message"}),"Send Message"]})]})]})})]})]})})})},Mw=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
  ${""}
  ${""}
`,Uw=()=>f.jsxs(Mw,{children:[f.jsx(uw,{}),f.jsx(Cw,{}),f.jsx(Fw,{})]}),Bw=hh`
  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    background-color: #ffffff;
    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px
  }

  body {
    margin: 0;
    padding: 0;
    width: 99vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,bw=y.div`
    height: 85vh;
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`,Hw=y.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`,Ww=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 80%;

`,Vw=y.h1`
    font-family: 'Aileron-Bold';
    font-size: 9.6rem;
    font-weight: 700;
`,Qw=y.img`
    height: 80%
`,Kw=y.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Gw=y.img`
    height: 85%;
    margin-left: 1%
`,qw=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    width: 74%
`,rs=y.div`
    font-size: 1.6rem;
    font-family: 'Roboto'
`,Yw=()=>f.jsx(bw,{children:f.jsx(Yt,{children:f.jsxs(Hw,{children:[f.jsxs(Ww,{children:[f.jsx(Vw,{children:"Our Story"}),f.jsx(Qw,{src:z2,alt:"ballon-cat"})]}),f.jsxs(Kw,{children:[f.jsx(Gw,{src:$2,alt:"dia-green-logo"}),f.jsxs(qw,{children:[f.jsx(rs,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),f.jsx(rs,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),f.jsx(rs,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})]})})}),Jw=y.div`
  ${""}
  width: 100%;

  background-color: #F2F2F2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

`,Xw=y(Yt)`
  flex-direction: column
`,Zw=y.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${""}
  ${""}
`,ex=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`,tx=y.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`,nx=y.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`,is=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,os=y.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ls=y.img`
  height: 60%;
`,ss=y.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`,rx=()=>f.jsx(Jw,{children:f.jsxs(Xw,{children:[f.jsx(Zw,{children:"Why We Do It"}),f.jsxs(ex,{children:[f.jsx(tx,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),f.jsxs(nx,{children:[f.jsxs(is,{children:[f.jsx(os,{children:f.jsx(ls,{src:A2,alt:"target-icon"})}),f.jsx(ss,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."})]}),f.jsxs(is,{children:[f.jsx(os,{children:f.jsx(ls,{src:D2,alt:"eye-icon"})}),f.jsx(ss,{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."})]}),f.jsxs(is,{children:[f.jsx(os,{children:f.jsx(ls,{src:I2,alt:"hands-icon"})}),f.jsx(ss,{children:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]})]})]})}),ix="/Sea.svg",ox=y.div`
  height: 80vh;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${ix});
  background-position: 50% 100%;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  overflow-y: visible;
`,lx=y.div`
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
`,sx=y.div`
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
`,ax=y.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${""}
  z-index: 13
`,ux=y.img`
  width: 100%;
  height: 100%;
`,cx=y.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,fx=y.div`
  width: 100%;
  margin-top: -2%;

`,Rf=y.p`
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
`,dx=()=>f.jsx(ox,{children:f.jsxs(lx,{children:[f.jsx(ax,{children:f.jsx(ux,{src:F2,alt:"fishermen"})}),f.jsx(Yt,{children:f.jsxs(sx,{children:[f.jsx(cx,{children:"Consulting"}),f.jsxs(fx,{children:[f.jsxs(Rf,{children:["At ","<Día Dev & Design>",", we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."]}),f.jsxs(Rf,{children:["At ","<Día Dev & Design>",", we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."]})]})]})})]})}),px=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 750px;
  background-color: #F2F2F2;
`,hx=y.div`
  position: absolute;
  margin-top: 1.5%;
  width: 100%;
  height: 100%
`,mx=y.div`
  height: 100%;
  width: 71%;
  display: flex;
  flex-direction: row;
  margin-left: 3.5%;
  gap: 3%;
  ${""}
  position: relative;
  left: 14%;
`,gx=y.div`
  display: flex;
  height: 60%;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(-8deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
  z-index: 2;
`,yx=y.div`
  display: flex;
  height: 60%;
  width: unset;
  aspect-ratio: 85/100;
  transform: rotate(8deg);
  padding: 24px 16px 96px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 20px;
  border: 8px solid #77b9f3;
  background: rgba(119, 185, 243, 0.3);
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
`,_f=y.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`,Tf=y.h3`
  color: #070d0d;
  font-family: Aileron;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5% 0;
`,Ne=y.div`
  align-self: stretch;
  ${""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${""}
`,Oe=y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 2rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
`,Le=y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 1.6rem;
  font-family: "Aileron";
  font-weight: 400;
  word-wrap: break-word;
`,vx=()=>f.jsx("div",{children:f.jsx(px,{children:f.jsx(Yt,{children:f.jsx(hx,{children:f.jsxs(mx,{children:[f.jsx(gx,{children:f.jsxs(_f,{children:[f.jsx(Tf,{children:"We build..."}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Tailored"}),f.jsx(Le,{children:"Solutions for your unique business needs and goals."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Scalable"}),f.jsx(Le,{children:"Applications that evolve as your business grows."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Responsive"}),f.jsx(Le,{children:"Seamlessly compatible with all devices and screen sizes."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Cross-Platform Integration"}),f.jsx(Le,{children:"Incorporate custom applications with your current systems and software."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Robust Architecture"}),f.jsx(Le,{children:"Reliable and scalable software that can handle increasing loads and complexities."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"User-Centered Experience"}),f.jsx(Le,{children:"Intuitive design and engaging interfaces."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Agile Development"}),f.jsx(Le,{children:"To deliver projects on time and adapt to changing requirements quickly."})]})]})}),f.jsx(yx,{children:f.jsxs(_f,{children:[f.jsx(Tf,{children:"You get..."}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Increased efficiency"}),f.jsx(Le,{children:"Save time and cut costs with automated, streamlined processes."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Competitive Advantage"}),f.jsx(Le,{children:"Cutting-edge technology to stay ahead in your industry and set you apart."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Advanced Analytics"}),f.jsx(Le,{children:"Reporting features to provide valuable insights into your operations."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Security"}),f.jsx(Le,{children:"Safeguard your data and observe compliance with advanced measures and best practices."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Maintenance and Support"}),f.jsx(Le,{children:"Keep your software up-to-date and optimized with ongoing care."})]}),f.jsxs(Ne,{children:[f.jsx(Oe,{children:"Excellence"}),f.jsx(Le,{children:"With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!"})]})]})})]})})})})}),wx=y.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%
`,xx=y.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto
`,Sx=y.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`,as=y.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`,us=y.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`,cs=y.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`,fs=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`,ds=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,Cx=()=>f.jsxs(wx,{children:[f.jsx("img",{style:{height:"40vh",marginRight:"-60%",marginBottom:"-5%"},src:U2,alt:"plant-image"}),f.jsx(Yt,{style:{marginTop:"-20%",height:"fit-content"},children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"-20%"},children:[f.jsx(xx,{children:"Tech Incubator"}),f.jsxs(Sx,{children:[f.jsxs(as,{children:[f.jsx(us,{src:B2,alt:"hands-on-training"}),f.jsxs(cs,{children:[f.jsx(fs,{children:"Hands-On Training"}),f.jsx(ds,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),f.jsxs(as,{children:[f.jsx(us,{src:b2,alt:"performance"}),f.jsxs(cs,{children:[f.jsx(fs,{children:"Performance Feedback"}),f.jsx(ds,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),f.jsxs(as,{children:[f.jsx(us,{src:H2,alt:"community-engagement"}),f.jsxs(cs,{children:[f.jsx(fs,{children:"Community Engagement"}),f.jsx(ds,{children:"Participate in advancing local technological innovation and progress."})]})]})]})]})}),f.jsx("img",{style:{height:"40vh",marginLeft:"-80%"},src:W2,alt:"ballon-dog"}),f.jsx("img",{style:{width:"100vw"},src:V2,alt:"bottom-wavy-top-rectangle"})]}),kx=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,Ex=()=>f.jsxs(kx,{children:[f.jsx(Yw,{}),f.jsx(rx,{}),f.jsx(dx,{}),f.jsx(vx,{}),f.jsx(Cx,{})]}),jx=y.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-contents: center;
`;function Px(){return f.jsxs(jx,{children:[f.jsx(Bw,{}),f.jsx(tw,{}),f.jsxs(Rh,{children:[f.jsx(ii,{path:"/",element:f.jsx(Uw,{})}),f.jsx(ii,{path:"/about",element:f.jsx(Ex,{})})]})]})}const Rx=()=>{const[e,t]=_.useState(null);return window.addEventListener("resize",()=>{let n=window.document.body.getBoundingClientRect().width;t(n)}),_.useEffect(()=>{let n=window.document.body.getBoundingClientRect().width;t(n)},[]),f.jsx(f.Fragment,{children:e>1024?f.jsx(Px,{}):e?f.jsx(q2,{}):null})};ps.createRoot(document.getElementById("root")).render(f.jsx(Ze.StrictMode,{children:f.jsx(ky,{children:f.jsx(Rx,{})})}));
