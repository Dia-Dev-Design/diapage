function b0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function N0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},qo={},Kd={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),O0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),D0=Symbol.for("react.strict_mode"),F0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),M0=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),W0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Mu=Symbol.iterator;function G0(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Jd={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||qd}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xd(){}Xd.prototype=lr.prototype;function ba(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||qd}var Na=ba.prototype=new Xd;Na.constructor=ba;Yd(Na,lr.prototype);Na.isPureReactComponent=!0;var Hu=Array.isArray,Zd=Object.prototype.hasOwnProperty,Oa={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zd.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ui,type:e,key:o,ref:l,props:i,_owner:Oa.current}}function Q0(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function K0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K0(""+e.key):t.toString(36)}function Ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ui:case O0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Pl(l,0):r,Hu(i)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),Ji(i,t,n,"",function(c){return c})):i!=null&&($a(i)&&(i=Q0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Hu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Pl(o,s);l+=Ji(o,t,n,u,i)}else if(u=G0(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Pl(o,s++),l+=Ji(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wi(e,t,n){if(e==null)return e;var r=[],i=0;return Ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Xi={transition:null},Y0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Xi,ReactCurrentOwner:Oa};function nf(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:wi,forEach:function(e,t,n){wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wi(e,function(){t++}),t},toArray:function(e){return wi(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=lr;$.Fragment=$0;$.Profiler=F0;$.PureComponent=ba;$.StrictMode=D0;$.Suspense=H0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;$.act=nf;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Oa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Zd.call(t,u)&&!ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ui,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:U0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B0,_context:e},e.Consumer=e};$.createElement=tf;$.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:M0,render:e}};$.isValidElement=$a;$.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:q0}};$.memo=function(e,t){return{$$typeof:W0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Xi.transition;Xi.transition={};try{e()}finally{Xi.transition=t}};$.unstable_act=nf;$.useCallback=function(e,t){return xe.current.useCallback(e,t)};$.useContext=function(e){return xe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};$.useEffect=function(e,t){return xe.current.useEffect(e,t)};$.useId=function(){return xe.current.useId()};$.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return xe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};$.useRef=function(e){return xe.current.useRef(e)};$.useState=function(e){return xe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return xe.current.useTransition()};$.version="18.3.1";Kd.exports=$;var P=Kd.exports;const et=N0(P),J0=b0({__proto__:null,default:et},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=P,Z0=Symbol.for("react.element"),em=Symbol.for("react.fragment"),tm=Object.prototype.hasOwnProperty,nm=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tm.call(t,r)&&!rm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z0,type:e,key:o,ref:l,props:i,_owner:nm.current}}qo.Fragment=em;qo.jsx=rf;qo.jsxs=rf;Qd.exports=qo;var a=Qd.exports,Cs={},of={exports:{}},Fe={},lf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,I){var L=R.length;R.push(I);e:for(;0<L;){var M=L-1>>>1,H=R[M];if(0<i(H,I))R[M]=I,R[L]=H,L=M;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],L=R.pop();if(L!==I){R[0]=L;e:for(var M=0,H=R.length,tn=H>>>1;M<tn;){var Ke=2*(M+1)-1,jt=R[Ke],Re=Ke+1,ft=R[Re];if(0>i(jt,L))Re<H&&0>i(ft,jt)?(R[M]=ft,R[Re]=L,M=Re):(R[M]=jt,R[Ke]=L,M=Ke);else if(Re<H&&0>i(ft,L))R[M]=ft,R[Re]=L,M=Re;else break e}}return I}function i(R,I){var L=R.sortIndex-I.sortIndex;return L!==0?L:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],f=1,d=null,y=3,w=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=R)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function S(R){if(x=!1,m(R),!v)if(n(u)!==null)v=!0,pr(j);else{var I=n(c);I!==null&&en(S,I.startTime-R)}}function j(R,I){v=!1,x&&(x=!1,h(_),_=-1),w=!0;var L=y;try{for(m(I),d=n(u);d!==null&&(!(d.expirationTime>I)||R&&!Pe());){var M=d.callback;if(typeof M=="function"){d.callback=null,y=d.priorityLevel;var H=M(d.expirationTime<=I);I=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(u)&&r(u),m(I)}else r(u);d=n(u)}if(d!==null)var tn=!0;else{var Ke=n(c);Ke!==null&&en(S,Ke.startTime-I),tn=!1}return tn}finally{d=null,y=L,w=!1}}var A=!1,E=null,_=-1,B=5,O=-1;function Pe(){return!(e.unstable_now()-O<B)}function Xt(){if(E!==null){var R=e.unstable_now();O=R;var I=!0;try{I=E(!0,R)}finally{I?Zt():(A=!1,E=null)}}else A=!1}var Zt;if(typeof p=="function")Zt=function(){p(Xt)};else if(typeof MessageChannel<"u"){var vi=new MessageChannel,Al=vi.port2;vi.port1.onmessage=Xt,Zt=function(){Al.postMessage(null)}}else Zt=function(){C(Xt,0)};function pr(R){E=R,A||(A=!0,Zt())}function en(R,I){_=C(function(){R(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,pr(j))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(R){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var L=y;y=I;try{return R()}finally{y=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=y;y=R;try{return I()}finally{y=L}},e.unstable_scheduleCallback=function(R,I,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,R={id:f++,callback:I,priorityLevel:R,startTime:L,expirationTime:H,sortIndex:-1},L>M?(R.sortIndex=L,t(c,R),n(u)===null&&R===n(c)&&(x?(h(_),_=-1):x=!0,en(S,L-M))):(R.sortIndex=H,t(u,R),v||w||(v=!0,pr(j))),R},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(R){var I=y;return function(){var L=y;y=I;try{return R.apply(this,arguments)}finally{y=L}}}})(sf);lf.exports=sf;var im=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=P,De=im;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Ur={};function Sn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)af.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Gu={};function sm(e){return ks.call(Gu,e)?!0:ks.call(Vu,e)?!1:lm.test(e)?Gu[e]=!0:(Vu[e]=!0,!1)}function am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,t,n,r){if(t===null||typeof t>"u"||am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Fa);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ba(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(um(t,n,i,r)&&(n=null),r||i===null?sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),js=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),Es=Symbol.for("react.suspense"),As=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Rl;function Ar(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var zl=!1;function _l(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function cm(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function Ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Rn:return"Portal";case js:return"Profiler";case Ua:return"StrictMode";case Es:return"Suspense";case As:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:Ts(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Ts(e(t))}catch{}}return null}function dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(t);case 8:return t===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=fm(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Ba(e,"checked",t,!1)}function Rs(e,t){hf(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zs(e,t.type,n):t.hasOwnProperty("defaultValue")&&zs(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zs(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function mf(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pm=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ls(e,t){if(t){if(hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Hn=null,Wn=null;function Xu(e){if(e=fi(e)){if(typeof Os!="function")throw Error(T(280));var t=e.stateNode;t&&(t=el(t),Os(e.stateNode,e.type,t))}}function wf(e){Hn?Wn?Wn.push(e):Wn=[e]:Hn=e}function Sf(){if(Hn){var e=Hn,t=Wn;if(Wn=Hn=null,Xu(e),t)for(e=0;e<t.length;e++)Xu(t[e])}}function Cf(e,t){return e(t)}function kf(){}var Il=!1;function jf(e,t,n){if(Il)return e(t,n);Il=!0;try{return Cf(e,t,n)}finally{Il=!1,(Hn!==null||Wn!==null)&&(kf(),Sf())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var $s=!1;if(xt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{$s=!1}function mm(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Ir=!1,vo=null,xo=!1,Ds=null,gm={onError:function(e){Ir=!0,vo=e}};function ym(e,t,n,r,i,o,l,s,u){Ir=!1,vo=null,mm.apply(gm,arguments)}function vm(e,t,n,r,i,o,l,s,u){if(ym.apply(this,arguments),Ir){if(Ir){var c=vo;Ir=!1,vo=null}else throw Error(T(198));xo||(xo=!0,Ds=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zu(e){if(Cn(e)!==e)throw Error(T(188))}function xm(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zu(i),e;if(o===r)return Zu(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Af(e){return e=xm(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var Pf=De.unstable_scheduleCallback,ec=De.unstable_cancelCallback,wm=De.unstable_shouldYield,Sm=De.unstable_requestPaint,Z=De.unstable_now,Cm=De.unstable_getCurrentPriorityLevel,Va=De.unstable_ImmediatePriority,Rf=De.unstable_UserBlockingPriority,wo=De.unstable_NormalPriority,km=De.unstable_LowPriority,zf=De.unstable_IdlePriority,Yo=null,ct=null;function jm(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Tm,Em=Math.log,Am=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Em(e)/Am|0)|0}var ji=64,Ei=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Pr(s):(o&=l,o!==0&&(r=Pr(o)))}else l=n&~i,l!==0?r=Pr(l):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-tt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Pm(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function If(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lf,Qa,bf,Nf,Of,Bs=!1,Ai=[],Ot=null,$t=null,Dt=null,Wr=new Map,Vr=new Map,_t=[],_m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fi(t),t!==null&&Qa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Im(e,t,n,r,i){switch(t){case"focusin":return Ot=yr(Ot,e,t,n,r,i),!0;case"dragenter":return $t=yr($t,e,t,n,r,i),!0;case"mouseover":return Dt=yr(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wr.set(o,yr(Wr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vr.set(o,yr(Vr.get(o)||null,e,t,n,r,i)),!0}return!1}function $f(e){var t=ln(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,Of(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=fi(n),t!==null&&Qa(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){Zi(e)&&n.delete(t)}function Lm(){Bs=!1,Ot!==null&&Zi(Ot)&&(Ot=null),$t!==null&&Zi($t)&&($t=null),Dt!==null&&Zi(Dt)&&(Dt=null),Wr.forEach(nc),Vr.forEach(nc)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bs||(Bs=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Lm)))}function Gr(e){function t(i){return vr(i,e)}if(0<Ai.length){vr(Ai[0],e);for(var n=1;n<Ai.length;n++){var r=Ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&vr(Ot,e),$t!==null&&vr($t,e),Dt!==null&&vr(Dt,e),Wr.forEach(t),Vr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)$f(n),n.blockedOn===null&&_t.shift()}var Vn=kt.ReactCurrentBatchConfig,Co=!0;function bm(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=1,Ka(e,t,n,r)}finally{U=i,Vn.transition=o}}function Nm(e,t,n,r){var i=U,o=Vn.transition;Vn.transition=null;try{U=4,Ka(e,t,n,r)}finally{U=i,Vn.transition=o}}function Ka(e,t,n,r){if(Co){var i=Us(e,t,n,r);if(i===null)Hl(e,t,r,ko,n),tc(e,r);else if(Im(i,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<_m.indexOf(e)){for(;i!==null;){var o=fi(i);if(o!==null&&Lf(o),o=Us(e,t,n,r),o===null&&Hl(e,t,r,ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var ko=null;function Us(e,t,n,r){if(ko=null,e=Wa(r),e=ln(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Df(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cm()){case Va:return 1;case Rf:return 4;case wo:case km:return 16;case zf:return 536870912;default:return 16}default:return 16}}var Lt=null,qa=null,eo=null;function Ff(){if(eo)return eo;var e,t=qa,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function rc(){return!1}function Be(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ti:rc,this.isPropagationStopped=rc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=Be(sr),di=J({},sr,{view:0,detail:0}),Om=Be(di),bl,Nl,xr,Jo=J({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(bl=e.screenX-xr.screenX,Nl=e.screenY-xr.screenY):Nl=bl=0,xr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),ic=Be(Jo),$m=J({},Jo,{dataTransfer:0}),Dm=Be($m),Fm=J({},di,{relatedTarget:0}),Ol=Be(Fm),Bm=J({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Be(Bm),Mm=J({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=Be(Mm),Wm=J({},sr,{data:0}),oc=Be(Wm),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function Ja(){return Km}var qm=J({},di,{key:function(e){if(e.key){var t=Vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ja,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=Be(qm),Jm=J({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Be(Jm),Xm=J({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ja}),Zm=Be(Xm),eg=J({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Be(eg),ng=J({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Be(ng),ig=[9,13,27,32],Xa=xt&&"CompositionEvent"in window,Lr=null;xt&&"documentMode"in document&&(Lr=document.documentMode);var og=xt&&"TextEvent"in window&&!Lr,Bf=xt&&(!Xa||Lr&&8<Lr&&11>=Lr),sc=" ",ac=!1;function Uf(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function lg(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(ac=!0,sc);case"textInput":return e=t.data,e===sc&&ac?null:e;default:return null}}function sg(e,t){if(_n)return e==="compositionend"||!Xa&&Uf(e,t)?(e=Ff(),eo=qa=Lt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function Hf(e,t,n,r){wf(r),t=jo(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Qr=null;function ug(e){ep(e,0)}function Xo(e){var t=bn(e);if(pf(t))return e}function cg(e,t){if(e==="change")return t}var Wf=!1;if(xt){var $l;if(xt){var Dl="oninput"in document;if(!Dl){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Dl=typeof cc.oninput=="function"}$l=Dl}else $l=!1;Wf=$l&&(!document.documentMode||9<document.documentMode)}function dc(){br&&(br.detachEvent("onpropertychange",Vf),Qr=br=null)}function Vf(e){if(e.propertyName==="value"&&Xo(Qr)){var t=[];Hf(t,Qr,e,Wa(e)),jf(ug,t)}}function dg(e,t,n){e==="focusin"?(dc(),br=t,Qr=n,br.attachEvent("onpropertychange",Vf)):e==="focusout"&&dc()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Qr)}function pg(e,t){if(e==="click")return Xo(t)}function hg(e,t){if(e==="input"||e==="change")return Xo(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:mg;function Kr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ks.call(t,i)||!it(e[i],t[i]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=Qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pc(n,o);var l=pc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=xt&&"documentMode"in document&&11>=document.documentMode,In=null,Ms=null,Nr=null,Hs=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hs||In==null||In!==yo(r)||(r=In,"selectionStart"in r&&Za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Kr(Nr,r)||(Nr=r,r=jo(Ms,"onSelect"),0<r.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},Fl={},Kf={};xt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Zo(e){if(Fl[e])return Fl[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Fl[e]=t[n];return e}var qf=Zo("animationend"),Yf=Zo("animationiteration"),Jf=Zo("animationstart"),Xf=Zo("transitionend"),Zf=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Zf.set(e,t),Sn(t,[e])}for(var Bl=0;Bl<mc.length;Bl++){var Ul=mc[Bl],vg=Ul.toLowerCase(),xg=Ul[0].toUpperCase()+Ul.slice(1);Kt(vg,"on"+xg)}Kt(qf,"onAnimationEnd");Kt(Yf,"onAnimationIteration");Kt(Jf,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Xf,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vm(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;gc(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;gc(i,s,c),o=u}}}if(xo)throw e=Ds,xo=!1,Ds=null,e}function V(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Ri]){e[Ri]=!0,af.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Ml("selectionchange",!1,t))}}function tp(e,t,n,r){switch(Df(t)){case 1:var i=bm;break;case 4:i=Nm;break;default:i=Ka}n=i.bind(null,t,n,e),i=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=ln(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}jf(function(){var c=o,f=Wa(n),d=[];e:{var y=Zf.get(e);if(y!==void 0){var w=Ya,v=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":w=Ym;break;case"focusin":v="focus",w=Ol;break;case"focusout":v="blur",w=Ol;break;case"beforeblur":case"afterblur":w=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Zm;break;case qf:case Yf:case Jf:w=Um;break;case Xf:w=tg;break;case"scroll":w=Om;break;case"wheel":w=rg;break;case"copy":case"cut":case"paste":w=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=lc}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?y!==null?y+"Capture":null:y;x=[];for(var p=c,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Hr(p,h),S!=null&&x.push(Yr(p,S,m)))),C)break;p=p.return}0<x.length&&(y=new w(y,v,null,n,f),d.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Ns&&(v=n.relatedTarget||n.fromElement)&&(ln(v)||v[wt]))break e;if((w||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?ln(v):null,v!==null&&(C=Cn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(x=ic,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=lc,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=w==null?y:bn(w),m=v==null?y:bn(v),y=new x(S,p+"leave",w,n,f),y.target=C,y.relatedTarget=m,S=null,ln(f)===c&&(x=new x(h,p+"enter",v,n,f),x.target=m,x.relatedTarget=C,S=x),C=S,w&&v)t:{for(x=w,h=v,p=0,m=x;m;m=En(m))p++;for(m=0,S=h;S;S=En(S))m++;for(;0<p-m;)x=En(x),p--;for(;0<m-p;)h=En(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=En(x),h=En(h)}x=null}else x=null;w!==null&&yc(d,y,w,x,!1),v!==null&&C!==null&&yc(d,C,v,x,!0)}}e:{if(y=c?bn(c):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var j=cg;else if(uc(y))if(Wf)j=hg;else{j=fg;var A=dg}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=pg);if(j&&(j=j(e,c))){Hf(d,j,n,f);break e}A&&A(e,y,c),e==="focusout"&&(A=y._wrapperState)&&A.controlled&&y.type==="number"&&zs(y,"number",y.value)}switch(A=c?bn(c):window,e){case"focusin":(uc(A)||A.contentEditable==="true")&&(In=A,Ms=c,Nr=null);break;case"focusout":Nr=Ms=In=null;break;case"mousedown":Hs=!0;break;case"contextmenu":case"mouseup":case"dragend":Hs=!1,hc(d,n,f);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":hc(d,n,f)}var E;if(Xa)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _n?Uf(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Bf&&n.locale!=="ko"&&(_n||_!=="onCompositionStart"?_==="onCompositionEnd"&&_n&&(E=Ff()):(Lt=f,qa="value"in Lt?Lt.value:Lt.textContent,_n=!0)),A=jo(c,_),0<A.length&&(_=new oc(_,e,null,n,f),d.push({event:_,listeners:A}),E?_.data=E:(E=Mf(n),E!==null&&(_.data=E)))),(E=og?lg(e,n):sg(e,n))&&(c=jo(c,"onBeforeInput"),0<c.length&&(f=new oc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}ep(d,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hr(e,n),o!=null&&r.unshift(Yr(e,o,i)),o=Hr(e,t),o!=null&&r.push(Yr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Hr(n,o),u!=null&&l.unshift(Yr(n,u,s))):i||(u=Hr(n,o),u!=null&&l.push(Yr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Sg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(Cg,"")}function zi(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(T(425))}function Eo(){}var Ws=null,Vs=null;function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,xc=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof xc<"u"?function(e){return xc.resolve(null).then(e).catch(Eg)}:Qs;function Eg(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),ut="__reactFiber$"+ar,Jr="__reactProps$"+ar,wt="__reactContainer$"+ar,Ks="__reactEvents$"+ar,Ag="__reactListeners$"+ar,Tg="__reactHandles$"+ar;function ln(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[ut])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[ut]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function el(e){return e[Jr]||null}var qs=[],Nn=-1;function qt(e){return{current:e}}function Q(e){0>Nn||(e.current=qs[Nn],qs[Nn]=null,Nn--)}function W(e,t){Nn++,qs[Nn]=e.current,e.current=t}var Qt={},ge=qt(Qt),ke=qt(!1),mn=Qt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Ao(){Q(ke),Q(ge)}function Sc(e,t,n){if(ge.current!==Qt)throw Error(T(168));W(ge,t),W(ke,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,dm(e)||"Unknown",i));return J({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,mn=ge.current,W(ge,e),W(ke,ke.current),!0}function Cc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=np(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(ge),W(ge,e)):Q(ke),W(ke,n)}var mt=null,tl=!1,Vl=!1;function rp(e){mt===null?mt=[e]:mt.push(e)}function Pg(e){tl=!0,rp(e)}function Yt(){if(!Vl&&mt!==null){Vl=!0;var e=0,t=U;try{var n=mt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,tl=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Pf(Va,Yt),i}finally{U=t,Vl=!1}}return null}var On=[],$n=0,Po=null,Ro=0,Ue=[],Me=0,gn=null,gt=1,yt="";function rn(e,t){On[$n++]=Ro,On[$n++]=Po,Po=e,Ro=t}function ip(e,t,n){Ue[Me++]=gt,Ue[Me++]=yt,Ue[Me++]=gn,gn=e;var r=gt;e=yt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,gt=1<<32-tt(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function eu(e){e.return!==null&&(rn(e,1),ip(e,1,0))}function tu(e){for(;e===Po;)Po=On[--$n],On[$n]=null,Ro=On[--$n],On[$n]=null;for(;e===gn;)gn=Ue[--Me],Ue[Me]=null,yt=Ue[--Me],Ue[Me]=null,gt=Ue[--Me],Ue[Me]=null}var Oe=null,Ne=null,K=!1,Xe=null;function op(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ne=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(K){var t=Ne;if(t){var n=t;if(!kc(e,t)){if(Ys(e))throw Error(T(418));t=Ft(n.nextSibling);var r=Oe;t&&kc(e,t)?op(r,n):(e.flags=e.flags&-4097|2,K=!1,Oe=e)}}else{if(Ys(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Oe=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function _i(e){if(e!==Oe)return!1;if(!K)return jc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gs(e.type,e.memoizedProps)),t&&(t=Ne)){if(Ys(e))throw lp(),Error(T(418));for(;t;)op(e,t),t=Ft(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Oe?Ft(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Ne;e;)e=Ft(e.nextSibling)}function Yn(){Ne=Oe=null,K=!1}function nu(e){Xe===null?Xe=[e]:Xe.push(e)}var Rg=kt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function sp(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ht(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,S){return p===null||p.tag!==6?(p=Xl(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function u(h,p,m,S){var j=m.type;return j===zn?f(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rt&&Ec(j)===p.type)?(S=i(p,m.props),S.ref=wr(h,p,m),S.return=h,S):(S=ao(m.type,m.key,m.props,null,h.mode,S),S.ref=wr(h,p,m),S.return=h,S)}function c(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Zl(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,S,j){return p===null||p.tag!==7?(p=fn(m,h.mode,S,j),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:return m=ao(p.type,p.key,p.props,null,h.mode,m),m.ref=wr(h,null,p),m.return=h,m;case Rn:return p=Zl(p,h.mode,m),p.return=h,p;case Rt:var S=p._init;return d(h,S(p._payload),m)}if(Tr(p)||mr(p))return p=fn(p,h.mode,m,null),p.return=h,p;Ii(h,p)}return null}function y(h,p,m,S){var j=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Si:return m.key===j?u(h,p,m,S):null;case Rn:return m.key===j?c(h,p,m,S):null;case Rt:return j=m._init,y(h,p,j(m._payload),S)}if(Tr(m)||mr(m))return j!==null?null:f(h,p,m,S,null);Ii(h,m)}return null}function w(h,p,m,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,s(p,h,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Si:return h=h.get(S.key===null?m:S.key)||null,u(p,h,S,j);case Rn:return h=h.get(S.key===null?m:S.key)||null,c(p,h,S,j);case Rt:var A=S._init;return w(h,p,m,A(S._payload),j)}if(Tr(S)||mr(S))return h=h.get(m)||null,f(p,h,S,j,null);Ii(p,S)}return null}function v(h,p,m,S){for(var j=null,A=null,E=p,_=p=0,B=null;E!==null&&_<m.length;_++){E.index>_?(B=E,E=null):B=E.sibling;var O=y(h,E,m[_],S);if(O===null){E===null&&(E=B);break}e&&E&&O.alternate===null&&t(h,E),p=o(O,p,_),A===null?j=O:A.sibling=O,A=O,E=B}if(_===m.length)return n(h,E),K&&rn(h,_),j;if(E===null){for(;_<m.length;_++)E=d(h,m[_],S),E!==null&&(p=o(E,p,_),A===null?j=E:A.sibling=E,A=E);return K&&rn(h,_),j}for(E=r(h,E);_<m.length;_++)B=w(E,h,_,m[_],S),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?_:B.key),p=o(B,p,_),A===null?j=B:A.sibling=B,A=B);return e&&E.forEach(function(Pe){return t(h,Pe)}),K&&rn(h,_),j}function x(h,p,m,S){var j=mr(m);if(typeof j!="function")throw Error(T(150));if(m=j.call(m),m==null)throw Error(T(151));for(var A=j=null,E=p,_=p=0,B=null,O=m.next();E!==null&&!O.done;_++,O=m.next()){E.index>_?(B=E,E=null):B=E.sibling;var Pe=y(h,E,O.value,S);if(Pe===null){E===null&&(E=B);break}e&&E&&Pe.alternate===null&&t(h,E),p=o(Pe,p,_),A===null?j=Pe:A.sibling=Pe,A=Pe,E=B}if(O.done)return n(h,E),K&&rn(h,_),j;if(E===null){for(;!O.done;_++,O=m.next())O=d(h,O.value,S),O!==null&&(p=o(O,p,_),A===null?j=O:A.sibling=O,A=O);return K&&rn(h,_),j}for(E=r(h,E);!O.done;_++,O=m.next())O=w(E,h,_,O.value,S),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?_:O.key),p=o(O,p,_),A===null?j=O:A.sibling=O,A=O);return e&&E.forEach(function(Xt){return t(h,Xt)}),K&&rn(h,_),j}function C(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Si:e:{for(var j=m.key,A=p;A!==null;){if(A.key===j){if(j=m.type,j===zn){if(A.tag===7){n(h,A.sibling),p=i(A,m.props.children),p.return=h,h=p;break e}}else if(A.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rt&&Ec(j)===A.type){n(h,A.sibling),p=i(A,m.props),p.ref=wr(h,A,m),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}m.type===zn?(p=fn(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=ao(m.type,m.key,m.props,null,h.mode,S),S.ref=wr(h,p,m),S.return=h,h=S)}return l(h);case Rn:e:{for(A=m.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Zl(m,h.mode,S),p.return=h,h=p}return l(h);case Rt:return A=m._init,C(h,p,A(m._payload),S)}if(Tr(m))return v(h,p,m,S);if(mr(m))return x(h,p,m,S);Ii(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Xl(m,h.mode,S),p.return=h,h=p),l(h)):n(h,p)}return C}var Jn=sp(!0),ap=sp(!1),zo=qt(null),_o=null,Dn=null,ru=null;function iu(){ru=Dn=_o=null}function ou(e){var t=zo.current;Q(zo),e._currentValue=t}function Xs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){_o=e,ru=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(ru!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(_o===null)throw Error(T(308));Dn=e,_o.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var sn=null;function lu(e){sn===null?sn=[e]:sn.push(e)}function up(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}function Ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Io(e,t,n,r){var i=e.updateQueue;zt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;l=0,f=c=u=null,s=o;do{var y=s.lane,w=s.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(y=t,w=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,y);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,y=typeof v=="function"?v.call(w,d,y):v,y==null)break e;d=J({},d,y);break e;case 2:zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else w={eventTime:w,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=w,u=d):f=f.next=w,l|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=d}}function Tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var pi={},dt=qt(pi),Xr=qt(pi),Zr=qt(pi);function an(e){if(e===pi)throw Error(T(174));return e}function au(e,t){switch(W(Zr,t),W(Xr,e),W(dt,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}Q(dt),W(dt,t)}function Xn(){Q(dt),Q(Xr),Q(Zr)}function dp(e){an(Zr.current);var t=an(dt.current),n=Is(t,e.type);t!==n&&(W(Xr,e),W(dt,n))}function uu(e){Xr.current===e&&(Q(dt),Q(Xr))}var q=qt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function cu(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var ro=kt.ReactCurrentDispatcher,Ql=kt.ReactCurrentBatchConfig,yn=0,Y=null,ie=null,le=null,bo=!1,Or=!1,ei=0,zg=0;function fe(){throw Error(T(321))}function du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function fu(e,t,n,r,i,o){if(yn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?bg:Ng,e=n(r,i),Or){o=0;do{if(Or=!1,ei=0,25<=o)throw Error(T(301));o+=1,le=ie=null,t.updateQueue=null,ro.current=Og,e=n(r,i)}while(Or)}if(ro.current=No,t=ie!==null&&ie.next!==null,yn=0,le=ie=Y=null,bo=!1,t)throw Error(T(300));return e}function pu(){var e=ei!==0;return ei=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ge(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(T(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function ti(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var f=c.lane;if((yn&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,l=r):u=u.next=d,Y.lanes|=f,vn|=f}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,it(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);it(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fp(){}function pp(e,t){var n=Y,r=Ge(),i=t(),o=!it(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,hu(gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ni(9,mp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(T(349));yn&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&vp(e)}function gp(e,t,n){return n(function(){yp(t)&&vp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function vp(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Pc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Lg.bind(null,Y,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xp(){return Ge().memoizedState}function io(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&du(r,l.deps)){i.memoizedState=ni(t,n,o,r);return}}Y.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function Rc(e,t){return io(8390656,8,e,t)}function hu(e,t){return nl(2048,8,e,t)}function wp(e,t){return nl(4,2,e,t)}function Sp(e,t){return nl(4,4,e,t)}function Cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,Cp.bind(null,t,e),n)}function mu(){}function jp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&du(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ap(e,t,n){return yn&21?(it(n,t)||(n=_f(),Y.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function _g(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{U=n,Ql.transition=r}}function Tp(){return Ge().memoizedState}function Ig(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pp(e))Rp(t,n);else if(n=up(e,t,n,r),n!==null){var i=ve();nt(n,e,r,i),zp(n,t,r)}}function Lg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))Rp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,it(s,l)){var u=t.interleaved;u===null?(i.next=i,lu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=up(e,t,i,r),n!==null&&(i=ve(),nt(n,e,r,i),zp(n,t,r))}}function Pp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Rp(e,t){Or=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}var No={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},bg={readContext:Ve,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,Cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ig.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:mu,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=_g.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ae===null)throw Error(T(349));yn&30||hp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rc(gp.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,mp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ae.identifierPrefix;if(K){var n=yt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ng={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:hu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:Ep,useReducer:Kl,useRef:xp,useState:function(){return Kl(ti)},useDebugValue:mu,useDeferredValue:function(e){var t=Ge();return Ap(t,ie.memoizedState,e)},useTransition:function(){var e=Kl(ti)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1},Og={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:hu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:Ep,useReducer:ql,useRef:xp,useState:function(){return ql(ti)},useDebugValue:mu,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:Ap(t,ie.memoizedState,e)},useTransition:function(){var e=ql(ti)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(nt(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(nt(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Mt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(nt(t,e,r,n),no(t,e,r))}};function zc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function _p(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=je(t)?mn:ge.current,r=t.contextTypes,o=(r=r!=null)?qn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},su(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=je(t)?mn:ge.current,i.context=qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rl.enqueueReplaceState(i,i.state,null),Io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=cm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Ip(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$o||($o=!0,da=r),ta(e,t)},n}function Lp(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ta(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $g;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Dg=kt.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?ap(t,null,n,r):Jn(t,e.child,n,r)}function Nc(e,t,n,r,i){n=n.render;var o=t.ref;return Gn(t,i),r=fu(e,t,n,r,o,i),n=pu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&n&&eu(t),t.flags|=1,ye(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ku(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bp(e,t,o,r,i)):(e=ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return na(e,t,n,r,i)}function Np(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Bn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Bn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Bn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Bn,be),be|=r;return ye(e,t,i,n),t.child}function Op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,n,r,i){var o=je(n)?mn:ge.current;return o=qn(t,o),Gn(t,i),n=fu(e,t,n,r,o,i),r=pu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(K&&r&&eu(t),t.flags|=1,ye(e,t,n,i),t.child)}function $c(e,t,n,r,i){if(je(n)){var o=!0;To(t)}else o=!1;if(Gn(t,i),t.stateNode===null)oo(e,t),_p(t,n,r),ea(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=je(n)?mn:ge.current,c=qn(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&_c(t,l,r,c),zt=!1;var y=t.memoizedState;l.state=y,Io(t,r,l,i),u=t.memoizedState,s!==r||y!==u||ke.current||zt?(typeof f=="function"&&(Zs(t,n,f,r),u=t.memoizedState),(s=zt||zc(t,n,s,r,y,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,cp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ye(t.type,s),l.props=c,d=t.pendingProps,y=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ve(u):(u=je(n)?mn:ge.current,u=qn(t,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||y!==u)&&_c(t,l,r,u),zt=!1,y=t.memoizedState,l.state=y,Io(t,r,l,i);var v=t.memoizedState;s!==d||y!==v||ke.current||zt?(typeof w=="function"&&(Zs(t,n,w,r),v=t.memoizedState),(c=zt||zc(t,n,c,r,y,v,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return ra(e,t,n,r,o,i)}function ra(e,t,n,r,i,o){Op(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Cc(t,n,!1),Ct(e,t,o);r=t.stateNode,Dg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,o),t.child=Jn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,i&&Cc(t,n,!0),t.child}function $p(e){var t=e.stateNode;t.pendingContext?Sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sc(e,t.context,!1),au(e,t.containerInfo)}function Dc(e,t,n,r,i){return Yn(),nu(i),t.flags|=256,ye(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ll(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oa(n),t.memoizedState=ia,e):gu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Fg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ht(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ht(s,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?oa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return o=e.child,e=o.sibling,r=Ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gu(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&nu(r),Jn(t,e.child,null,n),e=gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(T(422))),Li(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ll({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jn(t,e.child,null,l),t.child.memoizedState=oa(l),t.memoizedState=ia,o);if(!(t.mode&1))return Li(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=Yl(o,r,void 0),Li(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),nt(r,e,i,-1))}return Cu(),r=Yl(Error(T(421))),Li(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Ft(i.nextSibling),Oe=t,K=!0,Xe=null,e!==null&&(Ue[Me++]=gt,Ue[Me++]=yt,Ue[Me++]=gn,gt=e.id,yt=e.overflow,gn=t),t=gu(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xs(e.return,t,n)}function Jl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jl(t,!0,n,null,o);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bg(e,t,n){switch(t.tag){case 3:$p(t),Yn();break;case 5:dp(t);break;case 1:je(t.type)&&To(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Dp(e,t,n):(W(q,q.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return Ct(e,t,n)}var Bp,la,Up,Mp;Bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(dt.current);var o=null;switch(n){case"input":i=Ps(e,i),r=Ps(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=_s(e,i),r=_s(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Ls(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ur.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return je(t.type)&&Ao(),pe(t),null;case 3:return r=t.stateNode,Xn(),Q(ke),Q(ge),cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ha(Xe),Xe=null))),la(e,t),pe(t),null;case 5:uu(t);var i=an(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return pe(t),null}if(e=an(dt.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ut]=t,r[Jr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)V(Rr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ku(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Yu(r,o),V("invalid",r)}Ls(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),i=["children",""+s]):Ur.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":Ci(r),qu(r,o,!0);break;case"textarea":Ci(r),Ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ut]=t,e[Jr]=r,Bp(e,t,!1,!1),t.stateNode=e;e:{switch(l=bs(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)V(Rr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ku(e,r),i=Ps(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Yu(e,r),i=_s(e,r),V("invalid",e);break;default:i=r}Ls(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?xf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mr(e,u):typeof u=="number"&&Mr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ur.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&Ba(e,o,u,l))}switch(n){case"input":Ci(e),qu(e,r,!1);break;case"textarea":Ci(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=an(Zr.current),an(dt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return pe(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ne!==null&&t.mode&1&&!(t.flags&128))lp(),Yn(),t.flags|=98560,o=!1;else if(o=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[ut]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(ha(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):Cu())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Xn(),la(e,t),e===null&&qr(t.stateNode.containerInfo),pe(t),null;case 10:return ou(t.type._context),pe(t),null;case 17:return je(t.type)&&Ao(),pe(t),null;case 19:if(Q(q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Sr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>er&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return pe(t),null}else 2*Z()-o.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Mg(e,t){switch(tu(t),t.tag){case 1:return je(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Q(ke),Q(ge),cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uu(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Xn(),null;case 10:return ou(t.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var bi=!1,he=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,z=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function sa(e,t,n){try{n()}catch(r){X(e,t,r)}}var Bc=!1;function Wg(e,t){if(Ws=Co,e=Qf(),Za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,f=0,d=e,y=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==o||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(w=d.firstChild)!==null;)y=d,d=w;for(;;){if(d===e)break t;if(y===n&&++c===i&&(s=l),y===o&&++f===r&&(u=l),(w=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},Co=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){X(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Bc,Bc=!1,v}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&sa(t,n,o)}i=i.next}while(i!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Jr],delete t[Ks],delete t[Ag],delete t[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var ue=null,Je=!1;function At(e,t,n){for(n=n.child;n!==null;)Vp(e,t,n),n=n.sibling}function Vp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:he||Fn(n,t);case 6:var r=ue,i=Je;ue=null,At(e,t,n),ue=r,Je=i,ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Gr(e)):Wl(ue,n.stateNode));break;case 4:r=ue,i=Je,ue=n.stateNode.containerInfo,Je=!0,At(e,t,n),ue=r,Je=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&sa(n,t,l),i=i.next}while(i!==r)}At(e,t,n);break;case 1:if(!he&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,At(e,t,n),he=r):At(e,t,n);break;default:At(e,t,n)}}function Mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hg),t.forEach(function(r){var i=Zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Je=!1;break e;case 3:ue=s.stateNode.containerInfo,Je=!0;break e;case 4:ue=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(ue===null)throw Error(T(160));Vp(o,l,i),ue=null,Je=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),lt(e),r&4){try{$r(3,e,e.return),il(3,e)}catch(x){X(e,e.return,x)}try{$r(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:qe(t,e),lt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(qe(t,e),lt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),bs(s,l);var c=bs(s,o);for(l=0;l<u.length;l+=2){var f=u[l],d=u[l+1];f==="style"?xf(i,d):f==="dangerouslySetInnerHTML"?yf(i,d):f==="children"?Mr(i,d):Ba(i,f,d,c)}switch(s){case"input":Rs(i,o);break;case"textarea":mf(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Mn(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Jr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(qe(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(qe(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:qe(t,e),lt(e);break;case 13:qe(t,e),lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xu=Z())),r&4&&Mc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||f,qe(t,e),he=c):qe(t,e),lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(d=z=f;z!==null;){switch(y=z,w=y.child,y.tag){case 0:case 11:case 14:case 15:$r(4,y,y.return);break;case 1:Fn(y,y.return);var v=y.stateNode;if(typeof v.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Fn(y,y.return);break;case 22:if(y.memoizedState!==null){Wc(d);continue}}w!==null?(w.return=y,z=w):Wc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vf("display",l))}catch(x){X(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){X(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qe(t,e),lt(e),r&4&&Mc(e);break;case 21:break;default:qe(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var o=Uc(e);ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Uc(e);ua(e,s,l);break;default:throw Error(T(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vg(e,t,n){z=e,Qp(e)}function Qp(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||bi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||he;s=bi;var c=he;if(bi=l,(he=u)&&!c)for(z=i;z!==null;)l=z,u=l.child,l.tag===22&&l.memoizedState!==null?Vc(i):u!==null?(u.return=l,z=u):Vc(i);for(;o!==null;)z=o,Qp(o),o=o.sibling;z=i,bi=s,he=c}Hc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Hc(e)}}function Hc(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Gr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}he||t.flags&512&&aa(t)}catch(y){X(t,t.return,y)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Wc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Vc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{aa(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{aa(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Gg=Math.ceil,Oo=kt.ReactCurrentDispatcher,yu=kt.ReactCurrentOwner,We=kt.ReactCurrentBatchConfig,D=0,ae=null,te=null,ce=0,be=0,Bn=qt(0),oe=0,ri=null,vn=0,ol=0,vu=0,Dr=null,Se=null,xu=0,er=1/0,pt=null,$o=!1,da=null,Ut=null,Ni=!1,bt=null,Do=0,Fr=0,fa=null,lo=-1,so=0;function ve(){return D&6?Z():lo!==-1?lo:lo=Z()}function Mt(e){return e.mode&1?D&2&&ce!==0?ce&-ce:Rg.transition!==null?(so===0&&(so=_f()),so):(e=U,e!==0||(e=window.event,e=e===void 0?16:Df(e.type)),e):1}function nt(e,t,n,r){if(50<Fr)throw Fr=0,fa=null,Error(T(185));ci(e,n,r),(!(D&2)||e!==ae)&&(e===ae&&(!(D&2)&&(ol|=n),oe===4&&It(e,ce)),Ee(e,r),n===1&&D===0&&!(t.mode&1)&&(er=Z()+500,tl&&Yt()))}function Ee(e,t){var n=e.callbackNode;Rm(e,t);var r=So(e,e===ae?ce:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?Pg(Gc.bind(null,e)):rp(Gc.bind(null,e)),jg(function(){!(D&6)&&Yt()}),n=null;else{switch(If(r)){case 1:n=Va;break;case 4:n=Rf;break;case 16:n=wo;break;case 536870912:n=zf;break;default:n=wo}n=th(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(lo=-1,so=0,D&6)throw Error(T(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=So(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fo(e,r);else{t=r;var i=D;D|=2;var o=Yp();(ae!==e||ce!==t)&&(pt=null,er=Z()+500,dn(e,t));do try{qg();break}catch(s){qp(e,s)}while(!0);iu(),Oo.current=o,D=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=Fs(e),i!==0&&(r=i,t=pa(e,i))),t===1)throw n=ri,dn(e,0),It(e,r),Ee(e,Z()),n;if(t===6)It(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qg(i)&&(t=Fo(e,r),t===2&&(o=Fs(e),o!==0&&(r=o,t=pa(e,o))),t===1))throw n=ri,dn(e,0),It(e,r),Ee(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:on(e,Se,pt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=xu+500-Z(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qs(on.bind(null,e,Se,pt),t);break}on(e,Se,pt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=Qs(on.bind(null,e,Se,pt),r);break}on(e,Se,pt);break;case 5:on(e,Se,pt);break;default:throw Error(T(329))}}}return Ee(e,Z()),e.callbackNode===n?Kp.bind(null,e):null}function pa(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Fo(e,t),e!==2&&(t=Se,Se=n,t!==null&&ha(t)),e}function ha(e){Se===null?Se=e:Se.push.apply(Se,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~vu,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(D&6)throw Error(T(327));Qn();var t=So(e,0);if(!(t&1))return Ee(e,Z()),null;var n=Fo(e,t);if(e.tag!==0&&n===2){var r=Fs(e);r!==0&&(t=r,n=pa(e,r))}if(n===1)throw n=ri,dn(e,0),It(e,t),Ee(e,Z()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Se,pt),Ee(e,Z()),null}function wu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(er=Z()+500,tl&&Yt())}}function xn(e){bt!==null&&bt.tag===0&&!(D&6)&&Qn();var t=D;D|=1;var n=We.transition,r=U;try{if(We.transition=null,U=1,e)return e()}finally{U=r,We.transition=n,D=t,!(D&6)&&Yt()}}function Su(){be=Bn.current,Q(Bn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kg(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:Xn(),Q(ke),Q(ge),cu();break;case 5:uu(r);break;case 4:Xn();break;case 13:Q(q);break;case 19:Q(q);break;case 10:ou(r.type._context);break;case 22:case 23:Su()}n=n.return}if(ae=e,te=e=Ht(e.current,null),ce=be=t,oe=0,ri=null,vu=ol=vn=0,Se=Dr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}sn=null}return e}function qp(e,t){do{var n=te;try{if(iu(),ro.current=No,bo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if(yn=0,le=ie=Y=null,Or=!1,ei=0,yu.current=null,n===null||n.return===null){oe=1,ri=t,te=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ce,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Lc(l);if(w!==null){w.flags&=-257,bc(w,l,s,o,t),w.mode&1&&Ic(o,c,t),t=w,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){Ic(o,c,t),Cu();break e}u=Error(T(426))}}else if(K&&s.mode&1){var C=Lc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bc(C,l,s,o,t),nu(Zn(u,s));break e}}o=u=Zn(u,s),oe!==4&&(oe=2),Dr===null?Dr=[o]:Dr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Ip(o,u,t);Ac(o,h);break e;case 1:s=u;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Lp(o,s,t);Ac(o,S);break e}}o=o.return}while(o!==null)}Xp(n)}catch(j){t=j,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Yp(){var e=Oo.current;return Oo.current=No,e===null?No:e}function Cu(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(vn&268435455)&&!(ol&268435455)||It(ae,ce)}function Fo(e,t){var n=D;D|=2;var r=Yp();(ae!==e||ce!==t)&&(pt=null,dn(e,t));do try{Kg();break}catch(i){qp(e,i)}while(!0);if(iu(),D=n,Oo.current=r,te!==null)throw Error(T(261));return ae=null,ce=0,oe}function Kg(){for(;te!==null;)Jp(te)}function qg(){for(;te!==null&&!wm();)Jp(te)}function Jp(e){var t=eh(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Xp(e):te=t,yu.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mg(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=Ug(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function on(e,t,n){var r=U,i=We.transition;try{We.transition=null,U=1,Yg(e,t,n,r)}finally{We.transition=i,U=r}return null}function Yg(e,t,n,r){do Qn();while(bt!==null);if(D&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zm(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,th(wo,function(){return Qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var l=U;U=1;var s=D;D|=4,yu.current=null,Wg(e,n),Gp(n,e),gg(Vs),Co=!!Ws,Vs=Ws=null,e.current=n,Vg(n),Sm(),D=s,U=l,We.transition=o}else e.current=n;if(Ni&&(Ni=!1,bt=e,Do=i),o=e.pendingLanes,o===0&&(Ut=null),jm(n.stateNode),Ee(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,e=da,da=null,e;return Do&1&&e.tag!==0&&Qn(),o=e.pendingLanes,o&1?e===fa?Fr++:(Fr=0,fa=e):Fr=0,Yt(),null}function Qn(){if(bt!==null){var e=If(Do),t=We.transition,n=U;try{if(We.transition=null,U=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,Do=0,D&6)throw Error(T(331));var i=D;for(D|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(z=c;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:$r(8,f,o)}var d=f.child;if(d!==null)d.return=f,z=d;else for(;z!==null;){f=z;var y=f.sibling,w=f.return;if(Hp(f),f===c){z=null;break}if(y!==null){y.return=w,z=y;break}z=w}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$r(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,z=h;break e}z=o.return}}var p=e.current;for(z=p;z!==null;){l=z;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,z=m;else e:for(l=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:il(9,s)}}catch(j){X(s,s.return,j)}if(s===l){z=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,z=S;break e}z=s.return}}if(D=i,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{U=n,We.transition=t}}return!1}function Qc(e,t,n){t=Zn(n,t),t=Ip(e,t,1),e=Bt(e,t,1),t=ve(),e!==null&&(ci(e,1,t),Ee(e,t))}function X(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Zn(n,e),e=Lp(t,e,1),t=Bt(t,e,1),e=ve(),t!==null&&(ci(t,1,e),Ee(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>Z()-xu?dn(e,0):vu|=n),Ee(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=Ei,Ei<<=1,!(Ei&130023424)&&(Ei=4194304)):t=1);var n=ve();e=St(e,t),e!==null&&(ci(e,t,n),Ee(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Zp(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Bg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&ip(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var i=qn(t,ge.current);Gn(t,n),i=fu(null,t,r,e,i,n);var o=pu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(t),i.updater=rl,t.stateNode=i,i._reactInternals=t,ea(t,r,e,n),t=ra(null,t,r,!0,o,n)):(t.tag=0,K&&o&&eu(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t1(r),e=Ye(r,e),i){case 0:t=na(null,t,r,e,n);break e;case 1:t=$c(null,t,r,e,n);break e;case 11:t=Nc(null,t,r,e,n);break e;case 14:t=Oc(null,t,r,Ye(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),$c(e,t,r,i,n);case 3:e:{if($p(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cp(e,t),Io(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(T(423)),t),t=Dc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(T(424)),t),t=Dc(e,t,r,n,i);break e}else for(Ne=Ft(t.stateNode.containerInfo.firstChild),Oe=t,K=!0,Xe=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=Ct(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&Js(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Gs(r,i)?l=null:o!==null&&Gs(r,o)&&(t.flags|=32),Op(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Js(t),null;case 13:return Dp(e,t,n);case 4:return au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Nc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(zo,r._currentValue),r._currentValue=l,o!==null)if(it(o.value,l)){if(o.children===i.children&&!ke.current){t=Ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=vt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Xs(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Xs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Oc(e,t,r,i,n);case 15:return bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),oo(e,t),t.tag=1,je(r)?(e=!0,To(t)):e=!1,Gn(t,n),_p(t,r,i),ea(t,r,i,n),ra(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Np(e,t,n)}throw Error(T(156,t.tag))};function th(e,t){return Pf(e,t)}function e1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new e1(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t1(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===Ha)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ku(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zn:return fn(n.children,i,o,t);case Ua:l=8,i|=8;break;case js:return e=He(12,n,t,i|2),e.elementType=js,e.lanes=o,e;case Es:return e=He(13,n,t,i),e.elementType=Es,e.lanes=o,e;case As:return e=He(19,n,t,i),e.elementType=As,e.lanes=o,e;case df:return ll(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:l=10;break e;case cf:l=9;break e;case Ma:l=11;break e;case Ha:l=14;break e;case Rt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=He(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,i,o,l,s,u){return e=new n1(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(o),e}function r1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return Qt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(je(n))return np(e,n,t)}return t}function rh(e,t,n,r,i,o,l,s,u){return e=ju(n,r,!0,e,i,o,l,s,u),e.context=nh(null),n=e.current,r=ve(),i=Mt(n),o=vt(r,i),o.callback=t??null,Bt(n,o,i),e.current.lanes=i,ci(e,i,r),Ee(e,r),e}function sl(e,t,n,r){var i=t.current,o=ve(),l=Mt(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,l),e!==null&&(nt(e,i,l,o),no(e,i,l)),l}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function i1(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Au(e){this._internalRoot=e}al.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));sl(e,t,null,null)};al.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){sl(null,e,null,null)}),t[wt]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&$f(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function o1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Bo(l);o.call(c)}}var l=rh(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=l,e[wt]=l.current,qr(e.nodeType===8?e.parentNode:e),xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Bo(u);s.call(c)}}var u=ju(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=u,e[wt]=u.current,qr(e.nodeType===8?e.parentNode:e),xn(function(){sl(t,u,n,r)}),u}function cl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Bo(l);s.call(u)}}sl(t,l,e,i)}else l=o1(n,t,e,i,r);return Bo(l)}Lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Ga(t,n|1),Ee(t,Z()),!(D&6)&&(er=Z()+500,Yt()))}break;case 13:xn(function(){var r=St(e,1);if(r!==null){var i=ve();nt(r,e,1,i)}}),Eu(e,1)}};Qa=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=ve();nt(t,e,134217728,n)}Eu(e,134217728)}};bf=function(e){if(e.tag===13){var t=Mt(e),n=St(e,t);if(n!==null){var r=ve();nt(n,e,t,r)}Eu(e,t)}};Nf=function(){return U};Of=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Os=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=el(r);if(!i)throw Error(T(90));pf(r),Rs(r,i)}}}break;case"textarea":mf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Cf=wu;kf=xn;var l1={usingClientEntryPoint:!1,Events:[fi,bn,el,wf,Sf,wu]},Cr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s1={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Yo=Oi.inject(s1),ct=Oi}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(T(200));return r1(e,t,null,n)};Fe.createRoot=function(e,t){if(!Tu(e))throw Error(T(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,qr(e.nodeType===8?e.parentNode:e),new Au(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Af(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return xn(e)};Fe.hydrate=function(e,t,n){if(!ul(t))throw Error(T(200));return cl(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,l),e[wt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};Fe.render=function(e,t,n){if(!ul(t))throw Error(T(200));return cl(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!ul(e))throw Error(T(40));return e._reactRootContainer?(xn(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Fe.unstable_batchedUpdates=wu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return cl(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=Fe;var a1=of.exports,Yc=a1;Cs.createRoot=Yc.createRoot,Cs.hydrateRoot=Yc.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function ii(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",Br="-moz-",F="-webkit-",lh="comm",dl="rule",Pu="decl",u1="@import",sh="@keyframes",c1="@layer",ah=Math.abs,Ru=String.fromCharCode,ma=Object.assign;function d1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function uh(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function uo(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function tr(e,t,n){return e.slice(t,n)}function at(e){return e.length}function ch(e){return e.length}function zr(e,t){return t.push(e),e}function f1(e,t){return e.map(t).join("")}function Jc(e,t){return e.filter(function(n){return!ht(n,t)})}var fl=1,nr=1,dh=0,Qe=0,ee=0,ur="";function pl(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:fl,column:nr,length:l,return:"",siblings:s}}function Pt(e,t){return ma(pl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function An(e){for(;e.root;)e=Pt(e.root,{children:[e]});zr(e,e.siblings)}function p1(){return ee}function h1(){return ee=Qe>0?se(ur,--Qe):0,nr--,ee===10&&(nr=1,fl--),ee}function rt(){return ee=Qe<dh?se(ur,Qe++):0,nr++,ee===10&&(nr=1,fl++),ee}function pn(){return se(ur,Qe)}function co(){return Qe}function hl(e,t){return tr(ur,e,t)}function ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m1(e){return fl=nr=1,dh=at(ur=e),Qe=0,[]}function g1(e){return ur="",e}function es(e){return uh(hl(Qe-1,ya(e===91?e+2:e===40?e+1:e)))}function y1(e){for(;(ee=pn())&&ee<33;)rt();return ga(e)>2||ga(ee)>3?"":" "}function v1(e,t){for(;--t&&rt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return hl(e,co()+(t<6&&pn()==32&&rt()==32))}function ya(e){for(;rt();)switch(ee){case e:return Qe;case 34:case 39:e!==34&&e!==39&&ya(ee);break;case 40:e===41&&ya(e);break;case 92:rt();break}return Qe}function x1(e,t){for(;rt()&&e+ee!==57;)if(e+ee===84&&pn()===47)break;return"/*"+hl(t,Qe-1)+"*"+Ru(e===47?e:rt())}function w1(e){for(;!ga(pn());)rt();return hl(e,Qe)}function S1(e){return g1(fo("",null,null,null,[""],e=m1(e),0,[0],e))}function fo(e,t,n,r,i,o,l,s,u){for(var c=0,f=0,d=l,y=0,w=0,v=0,x=1,C=1,h=1,p=0,m="",S=i,j=o,A=r,E=m;C;)switch(v=p,p=rt()){case 40:if(v!=108&&se(E,d-1)==58){uo(E+=N(es(p),"&","&\f"),"&\f",ah(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=es(p);break;case 9:case 10:case 13:case 32:E+=y1(v);break;case 92:E+=v1(co()-1,7);continue;case 47:switch(pn()){case 42:case 47:zr(C1(x1(rt(),co()),t,n,u),u);break;default:E+="/"}break;case 123*x:s[c++]=at(E)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+f:h==-1&&(E=N(E,/\f/g,"")),w>0&&at(E)-d&&zr(w>32?Zc(E+";",r,n,d-1,u):Zc(N(E," ","")+";",r,n,d-2,u),u);break;case 59:E+=";";default:if(zr(A=Xc(E,t,n,c,f,i,s,m,S=[],j=[],d,o),o),p===123)if(f===0)fo(E,t,A,A,S,o,d,s,j);else switch(y===99&&se(E,3)===110?100:y){case 100:case 108:case 109:case 115:fo(e,A,A,r&&zr(Xc(e,A,A,0,0,i,s,m,i,S=[],d,j),j),i,j,d,s,r?S:j);break;default:fo(E,A,A,A,[""],j,0,s,j)}}c=f=w=0,x=h=1,m=E="",d=l;break;case 58:d=1+at(E),w=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&h1()==125)continue}switch(E+=Ru(p),p*x){case 38:h=f>0?1:(E+="\f",-1);break;case 44:s[c++]=(at(E)-1)*h,h=1;break;case 64:pn()===45&&(E+=es(rt())),y=pn(),f=d=at(m=E+=w1(co())),p++;break;case 45:v===45&&at(E)==2&&(x=0)}}return o}function Xc(e,t,n,r,i,o,l,s,u,c,f,d){for(var y=i-1,w=i===0?o:[""],v=ch(w),x=0,C=0,h=0;x<r;++x)for(var p=0,m=tr(e,y+1,y=ah(C=l[x])),S=e;p<v;++p)(S=uh(C>0?w[p]+" "+m:N(m,/&\f/g,w[p])))&&(u[h++]=S);return pl(e,t,n,i===0?dl:s,u,c,f,d)}function C1(e,t,n,r){return pl(e,t,n,lh,Ru(p1()),tr(e,2,-2),0,r)}function Zc(e,t,n,r,i){return pl(e,t,n,Pu,tr(e,0,r),tr(e,r+1,-1),r,i)}function fh(e,t,n){switch(d1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Br+e+G+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+G+e+e;case 6165:return F+e+G+"flex-"+e+e;case 5187:return F+e+N(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return F+e+G+"flex-item-"+N(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":G+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return F+e+G+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+G+N(e,"shrink","negative")+e;case 5292:return F+e+G+N(e,"basis","preferred-size")+e;case 6060:return F+"box-"+N(e,"-grow","")+F+e+G+N(e,"grow","positive")+e;case 4554:return F+N(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!ht(e,/flex-|baseline/))return G+"grid-column-align"+tr(e,t)+e;break;case 2592:case 3360:return G+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~uo(e+(n=n[t].value),"span",0)?e:G+N(e,"-start","")+e+G+"grid-row-span:"+(~uo(n,"span",0)?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":G+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:G+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Br+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uo(e,"stretch",0)?fh(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return G+i+":"+o+c+(l?G+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if(se(e,t+6)===121)return N(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+G+"$2box$3")+e;case 100:return N(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Uo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function k1(e,t,n,r){switch(e.type){case c1:if(e.children.length)break;case u1:case Pu:return e.return=e.return||e.value;case lh:return"";case sh:return e.return=e.value+"{"+Uo(e.children,r)+"}";case dl:if(!at(e.value=e.props.join(",")))return""}return at(n=Uo(e.children,r))?e.return=e.value+"{"+n+"}":""}function j1(e){var t=ch(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function E1(e){return function(t){t.root||(t=t.return)&&e(t)}}function A1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=fh(e.value,e.length,n);return;case sh:return Uo([Pt(e,{value:N(e.value,"@","@"+F)})],r);case dl:if(e.length)return f1(n=e.props,function(i){switch(ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(Pt(e,{props:[N(i,/:(read-\w+)/,":"+Br+"$1")]})),An(Pt(e,{props:[i]})),ma(e,{props:Jc(n,r)});break;case"::placeholder":An(Pt(e,{props:[N(i,/:(plac\w+)/,":"+F+"input-$1")]})),An(Pt(e,{props:[N(i,/:(plac\w+)/,":"+Br+"$1")]})),An(Pt(e,{props:[N(i,/:(plac\w+)/,G+"input-$1")]})),An(Pt(e,{props:[i]})),ma(e,{props:Jc(n,r)});break}return""})}}var T1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},rr=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",ph="active",hh="data-styled-version",ml="6.1.12",zu=`/*!sc*/
`,Mo=typeof window<"u"&&"HTMLElement"in window,P1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),R1={},gl=Object.freeze([]),ir=Object.freeze({});function mh(e,t,n){return n===void 0&&(n=ir),e.theme!==n.theme&&e.theme||t||n.theme}var gh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),z1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_1=/(^-|-$)/g;function ed(e){return e.replace(z1,"-").replace(_1,"")}var I1=/(a)(d)/gi,$i=52,td=function(e){return String.fromCharCode(e+(e>25?39:97))};function va(e){var t,n="";for(t=Math.abs(e);t>$i;t=t/$i|0)n=td(t%$i)+n;return(td(t%$i)+n).replace(I1,"$1-$2")}var ts,yh=5381,Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vh=function(e){return Un(yh,e)};function xh(e){return va(vh(e)>>>0)}function L1(e){return e.displayName||e.name||"Component"}function ns(e){return typeof e=="string"&&!0}var wh=typeof Symbol=="function"&&Symbol.for,Sh=wh?Symbol.for("react.memo"):60115,b1=wh?Symbol.for("react.forward_ref"):60112,N1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},O1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$1=((ts={})[b1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ts[Sh]=Ch,ts);function nd(e){return("type"in(t=e)&&t.type.$$typeof)===Sh?Ch:"$$typeof"in e?$1[e.$$typeof]:N1;var t}var D1=Object.defineProperty,F1=Object.getOwnPropertyNames,rd=Object.getOwnPropertySymbols,B1=Object.getOwnPropertyDescriptor,U1=Object.getPrototypeOf,id=Object.prototype;function kh(e,t,n){if(typeof t!="string"){if(id){var r=U1(t);r&&r!==id&&kh(e,r,n)}var i=F1(t);rd&&(i=i.concat(rd(t)));for(var o=nd(e),l=nd(t),s=0;s<i.length;++s){var u=i[s];if(!(u in O1||n&&n[u]||l&&u in l||o&&u in o)){var c=B1(t,u);try{D1(e,u,c)}catch{}}}}return e}function or(e){return typeof e=="function"}function _u(e){return typeof e=="object"&&"styledComponentId"in e}function un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wa(e,t,n){if(n===void 0&&(n=!1),!n&&!oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wa(e[r],t[r]);else if(oi(t))for(var r in t)e[r]=wa(e[r],t[r]);return e}function Iu(e,t){Object.defineProperty(e,"toString",{value:t})}function hi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw hi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(zu);return n},e}(),po=new Map,Ho=new Map,ho=1,Di=function(e){if(po.has(e))return po.get(e);for(;Ho.has(ho);)ho++;var t=ho++;return po.set(e,t),Ho.set(t,e),t},H1=function(e,t){ho=t+1,po.set(e,t),Ho.set(t,e)},W1="style[".concat(rr,"][").concat(hh,'="').concat(ml,'"]'),V1=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Q1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(zu),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(V1);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(H1(f,c),G1(e,f,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},od=function(e){for(var t=document.querySelectorAll(W1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(rr)!==ph&&(Q1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function K1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(rr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(rr,ph),r.setAttribute(hh,ml);var l=K1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},q1=function(){function e(t){this.element=jh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw hi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Y1=function(){function e(t){this.element=jh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),J1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ld=Mo,X1={isServer:!Mo,useCSSOMInjection:!P1},Wo=function(){function e(t,n,r){t===void 0&&(t=ir),n===void 0&&(n={});var i=this;this.options=me(me({},X1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mo&&ld&&(ld=!1,od(this)),Iu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(d){var y=function(h){return Ho.get(h)}(d);if(y===void 0)return"continue";var w=o.names.get(y),v=l.getGroup(d);if(w===void 0||!w.size||v.length===0)return"continue";var x="".concat(rr,".g").concat(d,'[id="').concat(y,'"]'),C="";w!==void 0&&w.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),u+="".concat(v).concat(x,'{content:"').concat(C,'"}').concat(zu)},f=0;f<s;f++)c(f);return u}(i)})}return e.registerId=function(t){return Di(t)},e.prototype.rehydrate=function(){!this.server&&Mo&&od(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new J1(i):r?new q1(i):new Y1(i)}(this.options),new M1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Di(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Di(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Di(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Z1=/&/g,ey=/^\s*\/\/.*$/gm;function Eh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Eh(n.children,t)),n})}function ty(e){var t,n,r,i=ir,o=i.options,l=o===void 0?ir:o,s=i.plugins,u=s===void 0?gl:s,c=function(y,w,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):y},f=u.slice();f.push(function(y){y.type===dl&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Z1,n).replace(r,c))}),l.prefix&&f.push(A1),f.push(k1);var d=function(y,w,v,x){w===void 0&&(w=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=y.replace(ey,""),h=S1(v||w?"".concat(v," ").concat(w," { ").concat(C," }"):C);l.namespace&&(h=Eh(h,l.namespace));var p=[];return Uo(h,j1(f.concat(E1(function(m){return p.push(m)})))),p};return d.hash=u.length?u.reduce(function(y,w){return w.name||hi(15),Un(y,w.name)},yh).toString():"",d}var ny=new Wo,Sa=ty(),Ah=et.createContext({shouldForwardProp:void 0,styleSheet:ny,stylis:Sa});Ah.Consumer;et.createContext(void 0);function Ca(){return P.useContext(Ah)}var ry=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Sa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Iu(this,function(){throw hi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sa),this.name+t.hash},e}(),iy=function(e){return e>="A"&&e<="Z"};function sd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;iy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Th=function(e){return e==null||e===!1||e===""},Ph=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Th(o)&&(Array.isArray(o)&&o.isCss||or(o)?r.push("".concat(sd(i),":"),o,";"):oi(o)?r.push.apply(r,ii(ii(["".concat(i," {")],Ph(o),!1),["}"],!1)):r.push("".concat(sd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in T1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wt(e,t,n,r){if(Th(e))return[];if(_u(e))return[".".concat(e.styledComponentId)];if(or(e)){if(!or(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wt(i,t,n,r)}var o;return e instanceof ry?n?(e.inject(n,r),[e.getName(r)]):[e]:oi(e)?Ph(e):Array.isArray(e)?Array.prototype.concat.apply(gl,e.map(function(l){return Wt(l,t,n,r)})):[e.toString()]}function Rh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(or(n)&&!_u(n))return!1}return!0}var oy=vh(ml),ly=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Rh(t),this.componentId=n,this.baseHash=Un(oy,n),this.baseStyle=r,Wo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=un(i,this.staticRulesId);else{var o=xa(Wt(this.rules,t,n,r)),l=va(Un(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=un(i,l),this.staticRulesId=l}else{for(var u=Un(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var y=xa(Wt(d,t,n,r));u=Un(u,y+f),c+=y}}if(c){var w=va(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=un(i,w)}}return i},e}(),Lu=et.createContext(void 0);Lu.Consumer;var rs={};function sy(e,t,n){var r=_u(e),i=e,o=!ns(e),l=t.attrs,s=l===void 0?gl:l,u=t.componentId,c=u===void 0?function(S,j){var A=typeof S!="string"?"sc":ed(S);rs[A]=(rs[A]||0)+1;var E="".concat(A,"-").concat(xh(ml+A+rs[A]));return j?"".concat(j,"-").concat(E):E}(t.displayName,t.parentComponentId):u,f=t.displayName,d=f===void 0?function(S){return ns(S)?"styled.".concat(S):"Styled(".concat(L1(S),")")}(e):f,y=t.displayName&&t.componentId?"".concat(ed(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,j){return x(S,j)&&C(S,j)}}else v=x}var h=new ly(n,y,r?i.componentStyle:void 0);function p(S,j){return function(A,E,_){var B=A.attrs,O=A.componentStyle,Pe=A.defaultProps,Xt=A.foldedComponentIds,Zt=A.styledComponentId,vi=A.target,Al=et.useContext(Lu),pr=Ca(),en=A.shouldForwardProp||pr.shouldForwardProp,R=mh(E,Al,Pe)||ir,I=function(jt,Re,ft){for(var hr,nn=me(me({},Re),{className:void 0,theme:ft}),Tl=0;Tl<jt.length;Tl+=1){var xi=or(hr=jt[Tl])?hr(nn):hr;for(var Et in xi)nn[Et]=Et==="className"?un(nn[Et],xi[Et]):Et==="style"?me(me({},nn[Et]),xi[Et]):xi[Et]}return Re.className&&(nn.className=un(nn.className,Re.className)),nn}(B,E,R),L=I.as||vi,M={};for(var H in I)I[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&I.theme===R||(H==="forwardedAs"?M.as=I.forwardedAs:en&&!en(H,L)||(M[H]=I[H]));var tn=function(jt,Re){var ft=Ca(),hr=jt.generateAndInjectStyles(Re,ft.styleSheet,ft.stylis);return hr}(O,I),Ke=un(Xt,Zt);return tn&&(Ke+=" "+tn),I.className&&(Ke+=" "+I.className),M[ns(L)&&!gh.has(L)?"class":"className"]=Ke,M.ref=_,P.createElement(L,M)}(m,S,j)}p.displayName=d;var m=et.forwardRef(p);return m.attrs=w,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?un(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=y,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(j){for(var A=[],E=1;E<arguments.length;E++)A[E-1]=arguments[E];for(var _=0,B=A;_<B.length;_++)wa(j,B[_],!0);return j}({},i.defaultProps,S):S}}),Iu(m,function(){return".".concat(m.styledComponentId)}),o&&kh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ad(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ud=function(e){return Object.assign(e,{isCss:!0})};function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(or(e)||oi(e))return ud(Wt(ad(gl,ii([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wt(r):ud(Wt(ad(r,t)))}function ka(e,t,n){if(n===void 0&&(n=ir),!t)throw hi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,zh.apply(void 0,ii([i],o,!1)))};return r.attrs=function(i){return ka(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ka(e,t,me(me({},n),i))},r}var _h=function(e){return ka(sy,e)},g=_h;gh.forEach(function(e){g[e]=_h(e)});var ay=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Rh(t),Wo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(xa(Wt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Wo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ih(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zh.apply(void 0,ii([e],t,!1)),i="sc-global-".concat(xh(JSON.stringify(r))),o=new ay(r,i),l=function(u){var c=Ca(),f=et.useContext(Lu),d=et.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(d,u,c.styleSheet,f,c.stylis),et.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,u,c.styleSheet,f,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,u,c.styleSheet,f,c.stylis]),null};function s(u,c,f,d,y){if(o.isStatic)o.renderStyles(u,R1,f,y);else{var w=me(me({},c),{theme:mh(c,d,l.defaultProps)});o.renderStyles(u,w,f,y)}}return et.memo(l)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const cd="popstate";function uy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ja("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vo(i)}return dy(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cy(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,n,r){return n===void 0&&(n=null),li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:n,key:t&&t.key||r||cy()})}function Vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Nt.Pop,u=null,c=f();c==null&&(c=0,l.replaceState(li({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function d(){s=Nt.Pop;let C=f(),h=C==null?null:C-c;c=C,u&&u({action:s,location:x.location,delta:h})}function y(C,h){s=Nt.Push;let p=ja(x.location,C,h);c=f()+1;let m=dd(p,c),S=x.createHref(p);try{l.pushState(m,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(S)}o&&u&&u({action:s,location:x.location,delta:1})}function w(C,h){s=Nt.Replace;let p=ja(x.location,C,h);c=f();let m=dd(p,c),S=x.createHref(p);l.replaceState(m,"",S),o&&u&&u({action:s,location:x.location,delta:0})}function v(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Vo(C);return p=p.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return s},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,d),u=C,()=>{i.removeEventListener(cd,d),u=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:w,go(C){return l.go(C)}};return x}var fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fd||(fd={}));function fy(e,t,n){return n===void 0&&(n="/"),py(e,t,n,!1)}function py(e,t,n,r){let i=typeof t=="string"?cr(t):t,o=bu(i.pathname||"/",n);if(o==null)return null;let l=bh(e);hy(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=Ey(o);s=ky(l[u],c,r)}return s}function bh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Vt([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bh(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Sy(c,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Nh(o.path))i(o,l,u)}),t}function Nh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Nh(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function hy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const my=/^:[\w-]+$/,gy=3,yy=2,vy=1,xy=10,wy=-2,pd=e=>e==="*";function Sy(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=wy),t&&(r+=yy),n.filter(i=>!pd(i)).reduce((i,o)=>i+(my.test(o)?gy:o===""?vy:xy),r)}function Cy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ky(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=hd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),y=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=hd({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Vt([o,d.pathname]),pathnameBase:Ry(Vt([o,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(o=Vt([o,d.pathnameBase]))}return l}function hd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:y,isOptional:w}=f;if(y==="*"){let x=s[d]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[d];return w&&!v?c[y]=void 0:c[y]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ey(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ay(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?cr(e):e;return{pathname:n?n.startsWith("/")?n:Ty(n,t):t,search:zy(r),hash:_y(i)}}function Ty(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Py(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oh(e,t){let n=Py(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $h(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=cr(e):(i=li({},e),ne(!i.pathname||!i.pathname.includes("?"),is("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),is("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),is("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),d-=1;i.pathname=y.join("/")}s=d>=0?t[d]:"/"}let u=Ay(i,s),c=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),Ry=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dh=["post","put","patch","delete"];new Set(Dh);const Ly=["get",...Dh];new Set(Ly);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}const Nu=P.createContext(null),by=P.createContext(null),kn=P.createContext(null),yl=P.createContext(null),jn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Fh=P.createContext(null);function Ny(e,t){let{relative:n}=t===void 0?{}:t;mi()||ne(!1);let{basename:r,navigator:i}=P.useContext(kn),{hash:o,pathname:l,search:s}=Uh(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Vt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function mi(){return P.useContext(yl)!=null}function vl(){return mi()||ne(!1),P.useContext(yl).location}function Bh(e){P.useContext(kn).static||P.useLayoutEffect(e)}function Ou(){let{isDataRoute:e}=P.useContext(jn);return e?Ky():Oy()}function Oy(){mi()||ne(!1);let e=P.useContext(Nu),{basename:t,future:n,navigator:r}=P.useContext(kn),{matches:i}=P.useContext(jn),{pathname:o}=vl(),l=JSON.stringify(Oh(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return Bh(()=>{s.current=!0}),P.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=$h(c,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Vt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,l,o,e])}function Uh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(kn),{matches:i}=P.useContext(jn),{pathname:o}=vl(),l=JSON.stringify(Oh(i,r.v7_relativeSplatPath));return P.useMemo(()=>$h(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function $y(e,t){return Dy(e,t)}function Dy(e,t,n,r){mi()||ne(!1);let{navigator:i}=P.useContext(kn),{matches:o}=P.useContext(jn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=vl(),f;if(t){var d;let C=typeof t=="string"?cr(t):t;u==="/"||(d=C.pathname)!=null&&d.startsWith(u)||ne(!1),f=C}else f=c;let y=f.pathname||"/",w=y;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=fy(e,{pathname:w}),x=Hy(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Vt([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Vt([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&x?P.createElement(yl.Provider,{value:{location:si({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Nt.Pop}},x):x}function Fy(){let e=Qy(),t=Iy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const By=P.createElement(Fy,null);class Uy extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(jn.Provider,{value:this.props.routeContext},P.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function My(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Nu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(jn.Provider,{value:t},r)}function Hy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||ne(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let d=l[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:y,errors:w}=n,v=d.route.loader&&y[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((f,d,y)=>{let w,v=!1,x=null,C=null;n&&(w=s&&d.route.id?s[d.route.id]:void 0,x=d.route.errorElement||By,u&&(c<0&&y===0?(v=!0,C=null):c===y&&(v=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,y+1)),p=()=>{let m;return w?m=x:v?m=C:d.route.Component?m=P.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,P.createElement(My,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?P.createElement(Uy,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Mh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mh||{}),Go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Go||{});function Wy(e){let t=P.useContext(Nu);return t||ne(!1),t}function Vy(e){let t=P.useContext(by);return t||ne(!1),t}function Gy(e){let t=P.useContext(jn);return t||ne(!1),t}function Hh(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Qy(){var e;let t=P.useContext(Fh),n=Vy(Go.UseRouteError),r=Hh(Go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ky(){let{router:e}=Wy(Mh.UseNavigateStable),t=Hh(Go.UseNavigateStable),n=P.useRef(!1);return Bh(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,si({fromRouteId:t},o)))},[e,t])}function Ze(e){ne(!1)}function qy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nt.Pop,navigator:o,static:l=!1,future:s}=e;mi()&&ne(!1);let u=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:o,static:l,future:si({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=cr(r));let{pathname:f="/",search:d="",hash:y="",state:w=null,key:v="default"}=r,x=P.useMemo(()=>{let C=bu(f,u);return C==null?null:{location:{pathname:C,search:d,hash:y,state:w,key:v},navigationType:i}},[u,f,d,y,w,v,i]);return x==null?null:P.createElement(kn.Provider,{value:c},P.createElement(yl.Provider,{children:n,value:x}))}function Wh(e){let{children:t,location:n}=e;return $y(Ea(t),n)}new Promise(()=>{});function Ea(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Ea(r.props.children,o));return}r.type!==Ze&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ea(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function Yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xy(e,t){return e.button===0&&(!t||t==="_self")&&!Jy(e)}const Zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ev="6";try{window.__reactRouterVersion=ev}catch{}const tv="startTransition",md=J0[tv];function nv(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=uy({window:i,v5Compat:!0}));let l=o.current,[s,u]=P.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},f=P.useCallback(d=>{c&&md?md(()=>u(d)):u(d)},[u,c]);return P.useLayoutEffect(()=>l.listen(f),[l,f]),P.createElement(qy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vh=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:f,unstable_viewTransition:d}=t,y=Yy(t,Zy),{basename:w}=P.useContext(kn),v,x=!1;if(typeof c=="string"&&iv.test(c)&&(v=c,rv))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),j=bu(S.pathname,w);S.origin===m.origin&&j!=null?c=j+S.search+S.hash:x=!0}catch{}let C=Ny(c,{relative:i}),h=ov(c,{replace:l,state:s,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return P.createElement("a",Aa({},y,{href:v||C,onClick:x||o?r:p,ref:n,target:u}))});var gd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yd||(yd={}));function ov(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,u=Ou(),c=vl(),f=Uh(e,{relative:l});return P.useCallback(d=>{if(Xy(d,n)){d.preventDefault();let y=r!==void 0?r:Vo(c)===Vo(f);u(e,{replace:y,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,u,f,r,i,n,e,o,l,s])}const Gh="/assets/img/DiaGreenLogo-No-Title-Clear-Background-3FMOHvgW.png",lv="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic:round-menu'%3e%3cpath%20id='Vector'%20d='M5.33333%2024H26.6667C27.4%2024%2028%2023.4%2028%2022.6667C28%2021.9333%2027.4%2021.3333%2026.6667%2021.3333H5.33333C4.6%2021.3333%204%2021.9333%204%2022.6667C4%2023.4%204.6%2024%205.33333%2024ZM5.33333%2017.3333H26.6667C27.4%2017.3333%2028%2016.7333%2028%2016C28%2015.2667%2027.4%2014.6667%2026.6667%2014.6667H5.33333C4.6%2014.6667%204%2015.2667%204%2016C4%2016.7333%204.6%2017.3333%205.33333%2017.3333ZM4%209.33333C4%2010.0667%204.6%2010.6667%205.33333%2010.6667H26.6667C27.4%2010.6667%2028%2010.0667%2028%209.33333C28%208.6%2027.4%208%2026.6667%208H5.33333C4.6%208%204%208.6%204%209.33333Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",sv=g.nav`
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
`,kr=g(Vh)`
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
`,vd=g.span`
  color: #77b9f3;
`,gv=()=>{const[e,t]=P.useState(!1),n=Ou(),r=()=>{t(!e)},i=()=>{t(!1),n("/"),window.scrollTo({top:0,behavior:"smooth"})},o=s=>{t(!1),n(s),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},50)},l=()=>{t(!1),window.location.pathname==="/"?setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},100):(n("/"),setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},500))};return a.jsxs(a.Fragment,{children:[a.jsx(sv,{children:a.jsxs(av,{children:[a.jsx(uv,{onClick:i,src:Gh,alt:"Día Dev & Design Logo"}),a.jsxs(cv,{children:[a.jsx(vd,{children:"<"}),a.jsx(dv,{children:"Día"}),a.jsx(vd,{children:": Dev & Design />"})]}),a.jsx(fv,{onClick:r,"aria-label":"Toggle menu",children:a.jsx("img",{src:lv,alt:"Menu"})})]})}),a.jsx(pv,{$isOpen:e,children:a.jsxs(hv,{children:[a.jsx(kr,{to:"/",onClick:()=>o("/"),children:"Home"}),a.jsx(kr,{to:"/about",onClick:()=>o("/about"),children:"About Us"}),a.jsx(kr,{to:"/people",onClick:()=>o("/people"),children:"People"}),a.jsx(kr,{to:"/client-stories",onClick:()=>o("/client-stories"),children:"Client Stories"}),a.jsx(kr,{to:"/services",onClick:()=>o("/services"),children:"Services"}),a.jsx(mv,{onClick:l,children:"Contact Us"})]})})]})},Qh="/assets/img/DevBro-BrzQ5_d1.svg",yv=g.div`
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
`,Fi=g.h1`
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
`,jv=()=>{const e=()=>{setTimeout(()=>{const t=document.getElementById("contact");if(t){const i=t.offsetTop-70;window.scrollTo({top:i,behavior:"smooth"})}},100)};return a.jsxs(yv,{children:[a.jsxs(vv,{children:[a.jsxs(Fi,{children:["Every-",a.jsx(kv,{children:"Día"}),". "]}),a.jsx(Fi,{children:"We build."}),a.jsx(Fi,{children:"We create."}),a.jsxs(Fi,{children:["You ",a.jsx(xv,{children:"succeed"}),"!"]}),a.jsx(wv,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),a.jsx(Sv,{onClick:e,children:"Contact Us"})]}),a.jsx(Cv,{children:a.jsx("img",{src:Qh,alt:"Developer illustration"})})]})},Kh="data:image/svg+xml,%3csvg%20width='119'%20height='96'%20viewBox='0%200%20119%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M117.318%200H1.68181C0.885686%200%200.236359%200.59896%200.236359%201.33333V94.6667C0.236359%2095.4063%200.885686%2096%201.68181%2096H117.318C118.12%2096%20118.764%2095.4063%20118.764%2094.6667V1.33333C118.764%200.59896%20118.12%200%20117.318%200ZM3.12727%202.66667H115.873V20H3.12727V2.66667ZM115.873%2093.3333H3.12727V22.6667H115.873V93.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_2'%20d='M13.9682%206.66666C11.1789%206.66666%208.90909%208.76039%208.90909%2011.3333C8.90909%2013.9063%2011.1789%2016%2013.9682%2016C16.7575%2016%2019.0273%2013.9063%2019.0273%2011.3333C19.0273%208.76039%2016.7575%206.66666%2013.9682%206.66666ZM13.9682%2013.3333C12.7712%2013.3333%2011.8%2012.4375%2011.8%2011.3333C11.8%2010.2292%2012.7712%209.33332%2013.9682%209.33332C15.1652%209.33332%2016.1364%2010.2292%2016.1364%2011.3333C16.1364%2012.4375%2015.1652%2013.3333%2013.9682%2013.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_3'%20d='M41.3754%2069.9267C41.6577%2070.1871%2042.0304%2070.3173%2042.3974%2070.3173C42.7644%2070.3173%2043.1371%2070.1871%2043.4194%2069.9267C43.984%2069.4058%2043.984%2068.5621%2043.4194%2068.0412L32.5334%2057.9996L43.4194%2047.958C43.984%2047.4372%2043.984%2046.5934%2043.4194%2046.0725C42.8548%2045.5517%2041.9401%2045.5517%2041.3754%2046.0725L29.4673%2057.0569C28.9027%2057.5777%2028.9027%2058.4214%2029.4673%2058.9424L41.3754%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_4'%20d='M75.3769%2069.9267C75.6592%2070.1871%2076.0319%2070.3173%2076.3989%2070.3173C76.7659%2070.3173%2077.1385%2070.1871%2077.4209%2069.9267L89.3289%2058.9423C89.8936%2058.4214%2089.8936%2057.5777%2089.3289%2057.0568L77.4209%2046.0724C76.8562%2045.5516%2075.9416%2045.5516%2075.3768%2046.0724C74.8122%2046.5932%2074.8122%2047.4369%2075.3768%2047.9579L86.2628%2057.9995L75.3768%2068.0411C74.8122%2068.5619%2074.8123%2069.4057%2075.3769%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_5'%20d='M49.7547%2079.2293C49.9354%2079.3022%2050.1274%2079.3335%2050.3137%2079.3335C50.8783%2079.3335%2051.4147%2079.0262%2051.6462%2078.5158L69.8156%2038.5158C70.1261%2037.8387%2069.7761%2037.0574%2069.0421%2036.771C68.3024%2036.4897%2067.461%2036.8074%2067.1505%2037.4845L48.9812%2077.4845C48.6706%2078.1616%2049.0207%2078.9429%2049.7547%2079.2293Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_6'%20d='M109.667%207.05734C109.103%206.53651%20108.188%206.53651%20107.623%207.05734L105.032%209.44801L102.44%207.05734C101.875%206.53651%20100.961%206.53651%20100.396%207.05734C99.8312%207.57816%2099.8313%208.42187%20100.396%208.9428L102.988%2011.3335L100.396%2013.7241C99.8313%2014.245%2099.8313%2015.0887%20100.396%2015.6096C100.678%2015.87%20101.051%2016.0002%20101.418%2016.0002C101.785%2016.0002%20102.158%2015.87%20102.44%2015.6096L105.032%2013.2189L107.623%2015.6096C107.906%2015.87%20108.278%2016.0002%20108.645%2016.0002C109.012%2016.0002%20109.385%2015.87%20109.667%2015.6096C110.232%2015.0888%20110.232%2014.2451%20109.667%2013.7241L107.076%2011.3335L109.667%208.9428C110.232%208.42198%20110.232%207.57827%20109.667%207.05734Z'%20fill='%23070D0D'/%3e%3c/g%3e%3c/svg%3e",qh="/assets/img/CustomApplicationsNew-CGRyDJpo.svg",Yh="/assets/img/ProblemSolutionsNew-DGYs1PFU.svg",Jh="/assets/img/TalentIncubatorNew-Z-AuMXFv.svg",Ev=g.div`
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
`,Pv=g.div`
  width: 100%;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  line-height: 2.2rem;

  p {
    margin: 0 0 4%;
    text-align: left;
  }
`,Rv=g.div`
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
`,xl=g.div`
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
`,Iv=g(xl)`
  background-color: #edf3ff;
  margin-top: 0;
`,Lv=g(xl)`
  background-color: #fffaec;
`,bv=g(xl)`
  background-color: #f0fff4;
`,Nv=g(xl)`
  background-color: #fff5f3;
`,Bi=g.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`,Ui=g.img`
  width: 100%;
  height: auto;
`,Mi=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Hi=g.h3`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 700;
  color: #77b9f3;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
`,Wi=g.p`
  font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.3px;
  margin: 0;
  color: #070d0d;
`,Ov=()=>a.jsxs(Ev,{children:[a.jsxs(Av,{children:[a.jsx(Tv,{children:"We Are"}),a.jsxs(Pv,{children:[a.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),a.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),a.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),a.jsxs(Rv,{children:[a.jsx(zv,{children:"What We Do"}),a.jsxs(_v,{children:[a.jsxs(Iv,{children:[a.jsx(Bi,{children:a.jsx(Ui,{src:Kh,alt:"Web Development"})}),a.jsxs(Mi,{children:[a.jsx(Hi,{children:"Web Development"}),a.jsx(Wi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),a.jsxs(Lv,{children:[a.jsx(Bi,{children:a.jsx(Ui,{src:qh,alt:"Custom Applications"})}),a.jsxs(Mi,{children:[a.jsx(Hi,{children:"Custom Applications"}),a.jsx(Wi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),a.jsxs(bv,{children:[a.jsx(Bi,{children:a.jsx(Ui,{src:Yh,alt:"Marketing Solutions"})}),a.jsxs(Mi,{children:[a.jsx(Hi,{children:"Marketing"}),a.jsx(Wi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),a.jsxs(Nv,{children:[a.jsx(Bi,{children:a.jsx(Ui,{src:Jh,alt:"Tech Talent Incubator"})}),a.jsxs(Mi,{children:[a.jsx(Hi,{children:"Tech Incubator"}),a.jsx(Wi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]});function Xh(e,t){return function(){return e.apply(t,arguments)}}const{toString:$v}=Object.prototype,{getPrototypeOf:$u}=Object,wl=(e=>t=>{const n=$v.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=e=>(e=e.toLowerCase(),t=>wl(t)===e),Sl=e=>t=>typeof t===e,{isArray:dr}=Array,ai=Sl("undefined");function Dv(e){return e!==null&&!ai(e)&&e.constructor!==null&&!ai(e.constructor)&&$e(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zh=ot("ArrayBuffer");function Fv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zh(e.buffer),t}const Bv=Sl("string"),$e=Sl("function"),e0=Sl("number"),Cl=e=>e!==null&&typeof e=="object",Uv=e=>e===!0||e===!1,mo=e=>{if(wl(e)!=="object")return!1;const t=$u(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Mv=ot("Date"),Hv=ot("File"),Wv=ot("Blob"),Vv=ot("FileList"),Gv=e=>Cl(e)&&$e(e.pipe),Qv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||$e(e.append)&&((t=wl(e))==="formdata"||t==="object"&&$e(e.toString)&&e.toString()==="[object FormData]"))},Kv=ot("URLSearchParams"),[qv,Yv,Jv,Xv]=["ReadableStream","Request","Response","Headers"].map(ot),Zv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),dr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function t0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const cn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,n0=e=>!ai(e)&&e!==cn;function Ta(){const{caseless:e}=n0(this)&&this||{},t={},n=(r,i)=>{const o=e&&t0(t,i)||i;mo(t[o])&&mo(r)?t[o]=Ta(t[o],r):mo(r)?t[o]=Ta({},r):dr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&gi(arguments[r],n);return t}const e2=(e,t,n,{allOwnKeys:r}={})=>(gi(t,(i,o)=>{n&&$e(i)?e[o]=Xh(i,n):e[o]=i},{allOwnKeys:r}),e),t2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),n2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},r2=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&$u(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},i2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},o2=e=>{if(!e)return null;if(dr(e))return e;let t=e.length;if(!e0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},l2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$u(Uint8Array)),s2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},a2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},u2=ot("HTMLFormElement"),c2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),xd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),d2=ot("RegExp"),r0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};gi(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},f2=e=>{r0(e,(t,n)=>{if($e(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($e(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},p2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return dr(e)?r(e):r(String(e).split(t)),n},h2=()=>{},m2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,os="abcdefghijklmnopqrstuvwxyz",wd="0123456789",i0={DIGIT:wd,ALPHA:os,ALPHA_DIGIT:os+os.toUpperCase()+wd},g2=(e=16,t=i0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function y2(e){return!!(e&&$e(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const v2=e=>{const t=new Array(10),n=(r,i)=>{if(Cl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=dr(r)?[]:{};return gi(r,(l,s)=>{const u=n(l,i+1);!ai(u)&&(o[s]=u)}),t[i]=void 0,o}}return r};return n(e,0)},x2=ot("AsyncFunction"),w2=e=>e&&(Cl(e)||$e(e))&&$e(e.then)&&$e(e.catch),o0=((e,t)=>e?setImmediate:t?((n,r)=>(cn.addEventListener("message",({source:i,data:o})=>{i===cn&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),cn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",$e(cn.postMessage)),S2=typeof queueMicrotask<"u"?queueMicrotask.bind(cn):typeof process<"u"&&process.nextTick||o0,k={isArray:dr,isArrayBuffer:Zh,isBuffer:Dv,isFormData:Qv,isArrayBufferView:Fv,isString:Bv,isNumber:e0,isBoolean:Uv,isObject:Cl,isPlainObject:mo,isReadableStream:qv,isRequest:Yv,isResponse:Jv,isHeaders:Xv,isUndefined:ai,isDate:Mv,isFile:Hv,isBlob:Wv,isRegExp:d2,isFunction:$e,isStream:Gv,isURLSearchParams:Kv,isTypedArray:l2,isFileList:Vv,forEach:gi,merge:Ta,extend:e2,trim:Zv,stripBOM:t2,inherits:n2,toFlatObject:r2,kindOf:wl,kindOfTest:ot,endsWith:i2,toArray:o2,forEachEntry:s2,matchAll:a2,isHTMLForm:u2,hasOwnProperty:xd,hasOwnProp:xd,reduceDescriptors:r0,freezeMethods:f2,toObjectSet:p2,toCamelCase:c2,noop:h2,toFiniteNumber:m2,findKey:t0,global:cn,isContextDefined:n0,ALPHABET:i0,generateString:g2,isSpecCompliantForm:y2,toJSONObject:v2,isAsyncFn:x2,isThenable:w2,setImmediate:o0,asap:S2};function b(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const l0=b.prototype,s0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s0[e]={value:e}});Object.defineProperties(b,s0);Object.defineProperty(l0,"isAxiosError",{value:!0});b.from=(e,t,n,r,i,o)=>{const l=Object.create(l0);return k.toFlatObject(e,l,function(u){return u!==Error.prototype},s=>s!=="isAxiosError"),b.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const C2=null;function Pa(e){return k.isPlainObject(e)||k.isArray(e)}function a0(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Sd(e,t,n){return e?e.concat(t).map(function(i,o){return i=a0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function k2(e){return k.isArray(e)&&!e.some(Pa)}const j2=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function kl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!k.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!u&&k.isBlob(v))throw new b("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,x,C){let h=v;if(v&&!C&&typeof v=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&k2(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(h=k.toArray(v)))return x=a0(x),h.forEach(function(m,S){!(k.isUndefined(m)||m===null)&&t.append(l===!0?Sd([x],S,o):l===null?x:x+"[]",c(m))}),!1}return Pa(v)?!0:(t.append(Sd(C,x,o),c(v)),!1)}const d=[],y=Object.assign(j2,{defaultVisitor:f,convertValue:c,isVisitable:Pa});function w(v,x){if(!k.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),k.forEach(v,function(h,p){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(p)?p.trim():p,x,y))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Cd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Du(e,t){this._pairs=[],e&&kl(e,this,t)}const u0=Du.prototype;u0.append=function(t,n){this._pairs.push([t,n])};u0.toString=function(t){const n=t?function(r){return t.call(this,r,Cd)}:Cd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function E2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function c0(e,t,n){if(!t)return e;const r=n&&n.encode||E2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Du(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class kd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const d0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A2=typeof URLSearchParams<"u"?URLSearchParams:Du,T2=typeof FormData<"u"?FormData:null,P2=typeof Blob<"u"?Blob:null,R2={isBrowser:!0,classes:{URLSearchParams:A2,FormData:T2,Blob:P2},protocols:["http","https","file","blob","url","data"]},Fu=typeof window<"u"&&typeof document<"u",Ra=typeof navigator=="object"&&navigator||void 0,z2=Fu&&(!Ra||["ReactNative","NativeScript","NS"].indexOf(Ra.product)<0),_2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",I2=Fu&&window.location.href||"http://localhost",L2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fu,hasStandardBrowserEnv:z2,hasStandardBrowserWebWorkerEnv:_2,navigator:Ra,origin:I2},Symbol.toStringTag,{value:"Module"})),Ae={...L2,...R2};function b2(e,t){return kl(e,new Ae.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ae.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function N2(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function O2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function f0(e){function t(n,r,i,o){let l=n[o++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),u=o>=n.length;return l=!l&&k.isArray(i)?i.length:l,u?(k.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!k.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&k.isArray(i[l])&&(i[l]=O2(i[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(N2(r),i,n,0)}),n}return null}function $2(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const yi={transitional:d0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(f0(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return b2(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return kl(s?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),$2(t)):t}],transformResponse:[function(t){const n=this.transitional||yi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?b.from(s,b.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{yi.headers[e]={}});const D2=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),F2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&D2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},jd=Symbol("internals");function jr(e){return e&&String(e).trim().toLowerCase()}function go(e){return e===!1||e==null?e:k.isArray(e)?e.map(go):String(e)}function B2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const U2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ls(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function M2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function H2(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Te{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,u,c){const f=jr(u);if(!f)throw new Error("header name must be a non-empty string");const d=k.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||u]=go(s))}const l=(s,u)=>k.forEach(s,(c,f)=>o(c,f,u));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!U2(t))l(F2(t),n);else if(k.isHeaders(t))for(const[s,u]of t.entries())o(u,s,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=jr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return B2(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=jr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ls(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=jr(l),l){const s=k.findKey(r,l);s&&(!n||ls(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ls(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const l=k.findKey(r,o);if(l){n[l]=go(i),delete n[o];return}const s=t?M2(o):String(o).trim();s!==o&&delete n[o],n[s]=go(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[jd]=this[jd]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=jr(l);r[s]||(H2(i,l),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Te.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Te);function ss(e,t){const n=this||yi,r=t||n,i=Te.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function p0(e){return!!(e&&e.__CANCEL__)}function fr(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(fr,b,{__CANCEL__:!0});function h0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function W2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function V2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),f=r[o];l||(l=c),n[i]=u,r[i]=c;let d=o,y=0;for(;d!==i;)y+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-l<t)return;const w=f&&c-f;return w?Math.round(y*1e3/w):void 0}}function G2(e,t){let n=0,r=1e3/t,i,o;const l=(c,f=Date.now())=>{n=f,i=null,o&&(clearTimeout(o),o=null),e.apply(null,c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=r?l(c,f):(i=c,o||(o=setTimeout(()=>{o=null,l(i)},r-d)))},()=>i&&l(i)]}const Qo=(e,t,n=3)=>{let r=0;const i=V2(50,250);return G2(o=>{const l=o.loaded,s=o.lengthComputable?o.total:void 0,u=l-r,c=i(u),f=l<=s;r=l;const d={loaded:l,total:s,progress:s?l/s:void 0,bytes:u,rate:c||void 0,estimated:c&&s&&f?(s-l)/c:void 0,event:o,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},Ed=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ad=e=>(...t)=>k.asap(()=>e(...t)),Q2=Ae.hasStandardBrowserEnv?function(){const t=Ae.navigator&&/(msie|trident)/i.test(Ae.navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=k.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),K2=Ae.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function q2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Y2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function m0(e,t){return e&&!q2(t)?Y2(e,t):t}const Td=e=>e instanceof Te?{...e}:e;function wn(e,t){t=t||{};const n={};function r(c,f,d){return k.isPlainObject(c)&&k.isPlainObject(f)?k.merge.call({caseless:d},c,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function i(c,f,d){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function o(c,f){if(!k.isUndefined(f))return r(void 0,f)}function l(c,f){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function s(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(c,f)=>i(Td(c),Td(f),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=u[f]||i,y=d(e[f],t[f],f);k.isUndefined(y)&&d!==s||(n[f]=y)}),n}const g0=e=>{const t=wn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:l,auth:s}=t;t.headers=l=Te.from(l),t.url=c0(m0(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let u;if(k.isFormData(n)){if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((u=l.getContentType())!==!1){const[c,...f]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];l.setContentType([c||"multipart/form-data",...f].join("; "))}}if(Ae.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Q2(t.url))){const c=i&&o&&K2.read(o);c&&l.set(i,c)}return t},J2=typeof XMLHttpRequest<"u",X2=J2&&function(e){return new Promise(function(n,r){const i=g0(e);let o=i.data;const l=Te.from(i.headers).normalize();let{responseType:s,onUploadProgress:u,onDownloadProgress:c}=i,f,d,y,w,v;function x(){w&&w(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function h(){if(!C)return;const m=Te.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),j={data:!s||s==="text"||s==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:m,config:e,request:C};h0(function(E){n(E),x()},function(E){r(E),x()},j),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new b("Request aborted",b.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const j=i.transitional||d0;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new b(S,j.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,C)),C=null},o===void 0&&l.setContentType(null),"setRequestHeader"in C&&k.forEach(l.toJSON(),function(S,j){C.setRequestHeader(j,S)}),k.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),s&&s!=="json"&&(C.responseType=i.responseType),c&&([y,v]=Qo(c,!0),C.addEventListener("progress",y)),u&&C.upload&&([d,w]=Qo(u),C.upload.addEventListener("progress",d),C.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(f=m=>{C&&(r(!m||m.type?new fr(null,e,C):m),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const p=W2(i.url);if(p&&Ae.protocols.indexOf(p)===-1){r(new b("Unsupported protocol "+p+":",b.ERR_BAD_REQUEST,e));return}C.send(o||null)})},Z2=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,s();const f=c instanceof Error?c:this.reason;r.abort(f instanceof b?f:new fr(f instanceof Error?f.message:f))}};let l=t&&setTimeout(()=>{l=null,o(new b(`timeout ${t} of ms exceeded`,b.ETIMEDOUT))},t);const s=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:u}=r;return u.unsubscribe=()=>k.asap(s),u}},ex=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},tx=async function*(e,t){for await(const n of nx(e))yield*ex(n,t)},nx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Pd=(e,t,n,r)=>{const i=tx(e,t);let o=0,l,s=u=>{l||(l=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:f}=await i.next();if(c){s(),u.close();return}let d=f.byteLength;if(n){let y=o+=d;n(y)}u.enqueue(new Uint8Array(f))}catch(c){throw s(c),c}},cancel(u){return s(u),i.return()}},{highWaterMark:2})},jl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",y0=jl&&typeof ReadableStream=="function",rx=jl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),v0=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ix=y0&&v0(()=>{let e=!1;const t=new Request(Ae.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Rd=64*1024,za=y0&&v0(()=>k.isReadableStream(new Response("").body)),Ko={stream:za&&(e=>e.body)};jl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ko[t]&&(Ko[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new b(`Response type '${t}' is not supported`,b.ERR_NOT_SUPPORT,r)})})})(new Response);const ox=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Ae.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await rx(e)).byteLength},lx=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??ox(t)},sx=jl&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:l,onDownloadProgress:s,onUploadProgress:u,responseType:c,headers:f,withCredentials:d="same-origin",fetchOptions:y}=g0(e);c=c?(c+"").toLowerCase():"text";let w=Z2([i,o&&o.toAbortSignal()],l),v;const x=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(u&&ix&&n!=="get"&&n!=="head"&&(C=await lx(f,r))!==0){let j=new Request(t,{method:"POST",body:r,duplex:"half"}),A;if(k.isFormData(r)&&(A=j.headers.get("content-type"))&&f.setContentType(A),j.body){const[E,_]=Ed(C,Qo(Ad(u)));r=Pd(j.body,Rd,E,_)}}k.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...y,signal:w,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let p=await fetch(v);const m=za&&(c==="stream"||c==="response");if(za&&(s||m&&x)){const j={};["status","statusText","headers"].forEach(B=>{j[B]=p[B]});const A=k.toFiniteNumber(p.headers.get("content-length")),[E,_]=s&&Ed(A,Qo(Ad(s),!0))||[];p=new Response(Pd(p.body,Rd,E,()=>{_&&_(),x&&x()}),j)}c=c||"text";let S=await Ko[k.findKey(Ko,c)||"text"](p,e);return!m&&x&&x(),await new Promise((j,A)=>{h0(j,A,{data:S,headers:Te.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(h){throw x&&x(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,e,v),{cause:h.cause||h}):b.from(h,h&&h.code,e,v)}}),_a={http:C2,xhr:X2,fetch:sx};k.forEach(_a,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const zd=e=>`- ${e}`,ax=e=>k.isFunction(e)||e===null||e===!1,x0={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!ax(n)&&(r=_a[(l=String(n)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(zd).join(`
`):" "+zd(o[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:_a};function as(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fr(null,e)}function _d(e){return as(e),e.headers=Te.from(e.headers),e.data=ss.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),x0.getAdapter(e.adapter||yi.adapter)(e).then(function(r){return as(e),r.data=ss.call(e,e.transformResponse,r),r.headers=Te.from(r.headers),r},function(r){return p0(r)||(as(e),r&&r.response&&(r.response.data=ss.call(e,e.transformResponse,r.response),r.response.headers=Te.from(r.response.headers))),Promise.reject(r)})}const w0="1.7.7",Bu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Bu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Id={};Bu.transitional=function(t,n,r){function i(o,l){return"[Axios v"+w0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new b(i(l," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!Id[l]&&(Id[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function ux(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],u=s===void 0||l(s,o,e);if(u!==!0)throw new b("option "+o+" must be "+u,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const Ia={assertOptions:ux,validators:Bu},Tt=Ia.validators;class hn{constructor(t){this.defaults=t,this.interceptors={request:new kd,response:new kd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ia.assertOptions(r,{silentJSONParsing:Tt.transitional(Tt.boolean),forcedJSONParsing:Tt.transitional(Tt.boolean),clarifyTimeoutError:Tt.transitional(Tt.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:Ia.assertOptions(i,{encode:Tt.function,serialize:Tt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Te.concat(l,o);const s=[];let u=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(u=u&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,y;if(!u){const v=[_d.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,c),y=v.length,f=Promise.resolve(n);d<y;)f=f.then(v[d++],v[d++]);return f}y=s.length;let w=n;for(d=0;d<y;){const v=s[d++],x=s[d++];try{w=v(w)}catch(C){x.call(this,C);break}}try{f=_d.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,y=c.length;d<y;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=wn(this.defaults,t);const n=m0(t.baseURL,t.url);return c0(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){hn.prototype[t]=function(n,r){return this.request(wn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(wn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}hn.prototype[t]=n(),hn.prototype[t+"Form"]=n(!0)});class Uu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new fr(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Uu(function(i){t=i}),cancel:t}}}function cx(e){return function(n){return e.apply(null,n)}}function dx(e){return k.isObject(e)&&e.isAxiosError===!0}const La={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(La).forEach(([e,t])=>{La[t]=e});function S0(e){const t=new hn(e),n=Xh(hn.prototype.request,t);return k.extend(n,hn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return S0(wn(e,i))},n}const re=S0(yi);re.Axios=hn;re.CanceledError=fr;re.CancelToken=Uu;re.isCancel=p0;re.VERSION=w0;re.toFormData=kl;re.AxiosError=b;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=cx;re.isAxiosError=dx;re.mergeConfig=wn;re.AxiosHeaders=Te;re.formToJSON=e=>f0(k.isHTMLForm(e)?new FormData(e):e);re.getAdapter=x0.getAdapter;re.HttpStatusCode=La;re.default=re;const fx="https://diapage-server.fly.dev",C0=(e,t)=>{let n=localStorage.getItem("authToken");return re.post(fx+e,t,{headers:{Authorization:`Bearer ${n}`}})},k0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9471%201.02847C24.0017%200.892169%2024.015%200.742859%2023.9855%200.599044C23.956%200.45523%2023.885%200.323236%2023.7812%200.219426C23.6774%200.115616%2023.5454%200.0445561%2023.4015%200.0150549C23.2577%20-0.0144463%2023.1084%20-0.00109103%2022.9721%200.053465L1.15162%208.78197H1.15012L0.472125%209.05196C0.34371%209.10319%200.231953%209.18891%200.149198%209.29966C0.0664433%209.41041%200.0159116%209.54188%200.00318483%209.67955C-0.00954198%209.81721%200.0160314%209.95572%200.0770801%2010.0798C0.138129%2010.2038%200.232277%2010.3086%200.349125%2010.3825L0.964125%2010.7725L0.965625%2010.7755L8.45812%2015.5425L13.2251%2023.035L13.2281%2023.038L13.6181%2023.653C13.6923%2023.7694%2013.7971%2023.863%2013.921%2023.9237C14.045%2023.9844%2014.1833%2024.0097%2014.3207%2023.9968C14.4581%2023.9839%2014.5892%2023.9334%2014.6998%2023.8508C14.8103%2023.7681%2014.8959%2023.6566%2014.9471%2023.5285L23.9471%201.02847ZM21.1976%203.86347L9.95662%2015.1045L9.63412%2014.5975C9.57503%2014.5044%209.49616%2014.4256%209.40312%2014.3665L8.89612%2014.044L20.1371%202.80296L21.9041%202.09646L21.1991%203.86347H21.1976Z'%20fill='%23EEEEEE'/%3e%3c/svg%3e",j0="/assets/img/Dog-DhZuYJLQ.svg",E0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='EnvelopeFill'%3e%3cpath%20id='Vector'%20d='M0.075%205.3325C0.226227%204.66986%200.597983%204.07822%201.12938%203.65446C1.66078%203.23071%202.32033%202.99995%203%203H21C21.6797%202.99995%2022.3392%203.23071%2022.8706%203.65446C23.402%204.07822%2023.7738%204.66986%2023.925%205.3325L12%2012.621L0.075%205.3325ZM0%207.0455V17.7015L8.7045%2012.3645L0%207.0455ZM10.1415%2013.245L0.2865%2019.2855C0.52999%2019.7989%200.91429%2020.2326%201.39467%2020.5362C1.87505%2020.8397%202.43176%2021.0005%203%2021H21C21.5681%2021.0001%2022.1246%2020.8389%2022.6048%2020.5351C23.0849%2020.2313%2023.4688%2019.7975%2023.712%2019.284L13.857%2013.2435L12%2014.379L10.1415%2013.2435V13.245ZM15.2955%2012.366L24%2017.7015V7.0455L15.2955%2012.3645V12.366Z'%20fill='%2302A66A'/%3e%3c/g%3e%3c/svg%3e",px=g.section`
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
`,jx=g.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`,us=g.label`
  color: var(--gray);
  font-size: ${e=>e.$active?"1.3rem":"1.6rem"};
  margin-top: ${e=>e.$active?"4%":"6%"};
  margin-bottom: 1%;
  transition: font-size 0.3s ease;
`,Ld=g.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`,Ex=g.textarea`
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
`,Px=()=>{const[e,t]=P.useState([]),[n,r]=P.useState(null),[i,o]=P.useState({name:"",email:"",message:""}),[l,s]=P.useState(""),u=(d,y)=>{let w=[...e],v=w.findIndex(x=>x===y);v>-1?w.splice(v,1):w.push(y),t(w)},c=d=>{o(y=>({...y,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(y=>{console.log(y.data.message),s(y.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(y=>{console.log(y)})};return P.useEffect(()=>{const d=()=>r(null);return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),a.jsxs(px,{id:"contact",children:[a.jsx(hx,{children:"Get In Touch"}),a.jsxs(mx,{children:["Let's discuss something ",a.jsx(gx,{children:"cool"})," together!"]}),a.jsxs(yx,{children:[a.jsx("img",{src:E0,alt:"Email icon"}),a.jsx(vx,{children:"info@diadevdesign.com"})]}),l?a.jsx(Tx,{children:l}):a.jsxs(a.Fragment,{children:[a.jsx(xx,{src:j0,alt:"Dog mascot"}),a.jsx(wx,{children:a.jsxs(Sx,{children:[a.jsx(Cx,{children:"I'm interested in..."}),a.jsxs(kx,{children:[a.jsx(Tn,{$active:e.includes("Web Development"),onClick:d=>u(d,"Web Development"),children:"Web Development"}),a.jsx(Tn,{$active:e.includes("UX/UI Design"),onClick:d=>u(d,"UX/UI Design"),children:"UX/UI Design"}),a.jsx(Tn,{$active:e.includes("Marketing"),onClick:d=>u(d,"Marketing"),children:"Marketing"}),a.jsx(Tn,{$active:e.includes("Custom APIs"),onClick:d=>u(d,"Custom APIs"),children:"Custom APIs"}),a.jsx(Tn,{$active:e.includes("AI Apps/Agents"),onClick:d=>u(d,"AI Apps/Agents"),children:"AI Apps/Agents"}),a.jsx(Tn,{$active:e.includes("Other"),onClick:d=>u(d,"Other"),children:"Other"})]}),a.jsxs(jx,{onSubmit:f,children:[a.jsx(us,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),a.jsx(Ld,{type:"text",name:"name",id:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d),required:!0}),a.jsx(us,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),a.jsx(Ld,{type:"email",name:"email",id:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d),required:!0}),a.jsx(us,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),a.jsx(Ex,{name:"message",id:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d),required:!0}),a.jsxs(Ax,{type:"submit",children:[a.jsx("img",{src:k0,alt:"Send message icon"}),a.jsx("p",{children:"Send Message"})]})]})]})})]})]})},Rx=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #f2f2f2;
`,zx=()=>a.jsxs(Rx,{children:[a.jsx(jv,{}),a.jsx(Ov,{}),a.jsx(Px,{})]}),_x="/assets/fonts/Aileron-Regular-CtKlDjcc.otf",Ix="/assets/fonts/Aileron-Bold-BWrAr8GE.otf",Lx="/assets/fonts/Aileron-Black-DX8rpg6F.otf",bx="/assets/fonts/Aileron-BlackItalic-CDBNzfOi.otf",Nx="/assets/fonts/Aileron-BoldItalic-BpRWpHqE.otf",Ox="/assets/fonts/Aileron-Heavy-CNC5NjKR.otf",$x="/assets/fonts/Aileron-HeavyItalic-Cu9nKrNV.otf",Dx="/assets/fonts/Aileron-Italic-DYUE3e7y.otf",Fx="/assets/fonts/Aileron-Light-LZTtHK4h.otf",Bx="/assets/fonts/Aileron-LightItalic-WKAGcBBf.otf",Ux="/assets/fonts/Aileron-SemiBold-C3IbYb9I.otf",Mx="/assets/fonts/Aileron-SemiBoldItalic-DLbJRGCk.otf",Hx="/assets/fonts/Aileron-Thin-Brp9Y9vu.otf",Wx="/assets/fonts/Aileron-ThinItalic-CWr2f7xD.otf",Vx="/assets/fonts/Aileron-UltraLight-Cw0yx4GS.otf",Gx="/assets/fonts/Aileron-UltraLightItalic-B5h6okXt.otf",Qx=Ih`

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
    color-scheme: light only;
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
    color-scheme: light only !important;
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

  @media (prefers-color-scheme: dark) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      filter: none !important;
    }
  }

  @media (forced-colors: active) {
    *, *::before, *::after {
      forced-color-adjust: none !important;
    }
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
`,cs=g.p`
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
`,Jx=()=>a.jsxs(Kx,{children:[a.jsx(qx,{children:"Our Story"}),a.jsx(cs,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),a.jsx(cs,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and individuals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),a.jsx(cs,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."}),a.jsx(Yx,{children:a.jsx("img",{src:A0,alt:"Día Dev & Design Logo"})})]}),Xx=g.section`
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
`,ow=()=>{const e=[{icon:"🎯",text:"We are committed to empowering your business with cutting-edge solutions that align with your goals."},{icon:"⚙️",text:"Our primary focus is on delivering customized technology that caters to your unique requirements."},{icon:"🤝",text:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}];return a.jsxs(Xx,{children:[a.jsx(Zx,{children:"Why We Do It"}),a.jsx(ew,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),a.jsx(tw,{children:e.map((t,n)=>a.jsxs(nw,{children:[a.jsx(rw,{children:a.jsx("span",{style:{fontSize:"32px"},children:t.icon})}),a.jsx(iw,{children:t.text})]},n))})]})},T0="data:image/svg+xml,%3csvg%20width='1512'%20height='657'%20viewBox='0%200%201512%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M962.408%2046.0762C1037.52%2065.7203%201108.42%2084.265%201184.4%2084.2649C1385.21%2084.2649%201512%2017.7214%201512%2017.7214V175.219H0V0C38.0005%200%2073.3722%207.92574%20113.298%2016.872C200.793%2036.4769%20310.159%2060.9827%20516.994%2017.7214C704.245%20-21.444%20839.001%2013.8002%20962.408%2046.0762ZM1512%20175.219V602.831C1512%20602.831%201253.7%20548.888%20964.688%20602.831C761.911%20640.679%20733.582%20637.047%20626.749%20623.35C581.316%20617.526%20521.685%20609.88%20428.4%20602.831C115.763%20579.206%200.000242615%20656.775%200.000242615%20656.775V175.219H1512Z'%20fill='%2377B9F3'/%3e%3c/svg%3e",P0="/assets/img/Fishermen-D8grav2G.svg",lw=g.section`
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
`,bd=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Roboto", "Aileron-Regular", sans-serif;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  text-align: center;
  max-width: 361px;
  position: relative;
  z-index: 3;
`,fw=()=>a.jsxs(a.Fragment,{children:[a.jsx(lw,{children:a.jsxs(sw,{children:[a.jsx(aw,{children:a.jsx("img",{src:T0,alt:"Ocean waves"})}),a.jsx(uw,{children:a.jsx("img",{src:P0,alt:"Fisherman in boat"})})]})}),a.jsxs(cw,{children:[a.jsx(dw,{children:"We Bring Good Tech to Life!"}),a.jsx(bd,{children:"At <Dia, Dev, & Design>, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."}),a.jsx(bd,{children:"At <Dia, Dev, & Design>, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."})]})]}),R0="/assets/img/Plant-BKSABYCs.svg",pw=g.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
`,Nd=g.div`
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
`,Od=g.h3`
  font-size: clamp(2.8rem, 7vw, 3.4rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
`,$d=g.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
`,Dd=g.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`,Fd=g.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0;
`,Bd=g.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,gw=()=>{const e=[{title:"Tailored",description:"Solutions for your unique business needs and goals."},{title:"Scalable",description:"Applications that evolve as your business grows."},{title:"Responsive",description:"Seamlessly compatible with all devices and screen sizes."},{title:"Cross-Platform Integration",description:"Incorporate custom applications with your current systems and software."},{title:"Robust Architecture",description:"Reliable and scalable software that can handle increasing loads and complexities."},{title:"User-Centered Experience",description:"Intuitive design and engaging interfaces."},{title:"Agile Development",description:"To deliver projects on time and adapt to changing requirements quickly."}],t=[{title:"Increased efficiency",description:"Save time and cut costs with automated, streamlined processes."},{title:"Competitive Advantage",description:"Cutting-edge technology to stay ahead in your industry and set you apart."},{title:"Advanced Analytics",description:"Reporting features to provide valuable insights into your operations."},{title:"Security",description:"Safeguard your data and observe compliance with advanced measures and best practices."},{title:"Maintenance and Support",description:"Keep your software up-to-date and optimized with ongoing care."}];return a.jsxs(pw,{children:[a.jsxs(Nd,{children:[a.jsx(Od,{children:"We build…"}),a.jsx($d,{children:e.map((n,r)=>a.jsxs(Dd,{children:[a.jsx(Fd,{children:n.title}),a.jsx(Bd,{children:n.description})]},r))})]}),a.jsxs(hw,{children:[a.jsxs(Nd,{children:[a.jsx(Od,{children:"You get…"}),a.jsx($d,{children:t.map((n,r)=>a.jsxs(Dd,{children:[a.jsx(Fd,{children:n.title}),a.jsx(Bd,{children:n.description})]},r))})]}),a.jsx(mw,{src:R0,alt:"Decorative plant illustration"})]})]})},z0="/assets/img/Hands-On-Training-CAh4lW99.svg",_0="/assets/img/Performance-CiLV-Kb0.svg",I0="/assets/img/Community-Engagement-Cuw581Qp.svg",yw=g.section`
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
`,jw=()=>{const e=[{image:z0,title:"Hands-On Training",description:"Training and workshops covering the latest technologies and industry best practices."},{image:_0,title:"Performance Feedback",description:"Training and workshops covering the latest technologies and industry best practices."},{image:I0,title:"Community Engagement",description:"Participate in advancing local technological innovation and progress."}];return a.jsxs(yw,{children:[a.jsx(vw,{children:"Tech Incubator"}),a.jsx(xw,{children:e.map((t,n)=>a.jsxs(ww,{children:[a.jsx(Sw,{children:t.image?a.jsx("img",{src:t.image,alt:t.title}):a.jsx("span",{style:{fontSize:"64px",color:"#ccc"},children:"📷"})}),a.jsx(Cw,{children:t.title}),a.jsx(kw,{children:t.description})]},n))})]})},L0="/assets/img/BalloonDog-IURLZLkm.svg",Ew="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAABtCAYAAABUf52dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZVSURBVHgB7d2LcdvGFoDhQ9wG3MFVB0YHQQdxB1EHuR3YqSC5FSSuIHYFoSsIXUGQDpgGyOwSAEVZlESJLzy+b4aRaFqTmUzsf87uApgF/VSVb9I/b9pX+n7132LzdfZmvfka3eed7tcOsWxfu+rdz2ebz9fL1fb3FX/v/Fzzmi/qAEZtFlzPXQjKIlZv2wCUsQ3DIORg1O3XFJd1vYoiv++iskgxWQYwSCJxKU0QcgDeFrEuUwyquD8JjFkXknonIl9DQKD3ROJc2iikCeH7dcxyHKpgn820keKxSPH4Ejkm88UigF4QiVOqyirtG1TrWH8XonCMb8OxsP8B1yESx9qEYTMt3MZw9hGGqE6vRfrv/Cl9/SIacBki8RrC0AdpfyPmq5h9Tt/P7W3AeYjEodIeQ1pK+l9aSvoxhKGP5u2U8dmUAacjEs9JU0NaG38f9hiGJC1LrVMwio+CAccRiX3upoYfYjrHVMcq72P8FiYMeBWR2GVJaezmO8GwhwEHEIlMHKYm33bkU9r0/r9rMuBp046EONAsR/2SYvExgAemGQlx4KHuSO1P9i7gzvQiUZXvZrH+OWxI84j0h+K3FIt8MmoeMHHTiURV3qQ4/BqOsnK4ZqPbUhQTNv5I3C0tvQ94nTrF4oNYMEXjjkRzIVyeHm4CjtfEwhFaJmSckWimhw/txjScWtrknn1cpb0Lm9yM3fgiUZVlmh5+D9MD5+dEFKM3qkgUVZn3Hn4OuLD2RJRYMDrjiERaXmqnhyrgisSCsRl+JCwv0UNiwVgMOhKWlxiAfK3FTy7MY6gGG4kUiF+cXmJA3COKQRpeJOw/MGyutWBQhhWJ5tYaf4T9B4bP8VkGYTiREAjG69O6ebbFPKBnhhGJ5gRTDoTbejNm3VLUF9MFfdH/SDT3X8p7EALBZLRHaPO+xaeAK+p1JP5Tlber5gZ9MFXd3oVHrXIVvY2EQMAD9eYYbXMyqg64gF5GQiDgWYvNA5Ga/QsTBmfTv0g0m9R/BnCobknKI1c5uX5FwikmOFa+QC/fCiRveH81ZXCs/kTCdRBwDt2UMQ/R4BX6EQmBgEupo9nPmEcTjXnAE64fieZeTHkP4iaAa1ikvwgWadrIU8bX/N59pehcPRKz6m2+UO5dAH2Sg1GvY52+FjkctaWqabpqJIqq/JD+J3wfwFDkUCzT9J8mj6JO3/8dzRJWbfoYp6tFwgODYHRyJOrYRiS/L7qILDcvFwEOznUi4VoImLJtTGITlFiuYl03HxX51/5pP+/U258zrVzc5SPhJBNwGvUz7w8ye+Tn7sKVbeOVLdvX3b9zxBPSxSORNqpzIKoAGJcuHnV+08Rnvdyz7Dao/ZuLRsJGNcBW3b6W7SmyHI58kmzZp5Nkl4tE81yIPwKAQ9SxuWL+m5NkFw7IZSJhHwLglC52HctFIlFUb39dR9wGAOc035k8TnLblfNHoipvZ54NAXAtu7ddefHzR84biWaZKV8P4dbfAP2QN8gX7cTxJX0/f+q01Vkj4bgrwCB008bnaG7wWHcfnC8SlpkAhmobjfNEwmkmgFEo4gyK5oK5mwBg0E4fibTM5LgrwDicPBIzt90AGI2TRiLfmyksMwGMxuk2rpvN6r8CgNE42SRRWGYCGJ3TTBLu8AowSieZJFw0BzBOx0eiKm/DZjXAKB0dCUdeAcbruEiYIgBG7ahImCIAxu31kTBFAIzeqyNhigAYv9dFwhQBMAmvioQpAmAaXh4JUwTAZLw4EqYIgOl4WSSq8l2YIgAm40WRSFPEjwHAZBx+F1jPiwCYnIMnCc+LAJiewyYJUwTAJB06SVQBwOQcFAnHXgGm6flIVGUVjr0CTFLx/G9Y/xAATNLTG9c2rAEm7blJogoAJuvJSMwsNQFM2uPLTZaaACbviUliZYoAmLhHIzGL2W0AMGn7I1GVZbg2AmDyHpkkLDUB8Egk0lLTuwBg8h5GwlITAK09k8TquwCA2BMJp5oA6Ny/mM4FdADs+HaSqAIAWvcikaaI7wMAWiYJAB51F4nmCXRvAgBaO5OEo68A3LeNxCxmVQDAjt09iSoAYEcTiWY/AgDuaScJ+xEAPLSJhP0IAPbp9iTKAIBvFO2twV0fAcADeZK4CQDYo7BpDcBjirRpbT8CgL3ycpNIALDXv690SKW0S/0rAAAAAElFTkSuQmCC",Aw=g.section`
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
`,Pw=g.img`
  position: absolute;
  bottom: 30%;
  left: 2%;
  width: 18%;
  height: auto;
  pointer-events: none;
`,Rw=()=>a.jsxs(Aw,{children:[a.jsx(Pw,{src:L0,alt:"Decorative balloon dog illustration"}),a.jsx(Tw,{src:Ew,alt:"Decorative wavy bottom shape"})]}),zw=g.div`
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
`,Iw=()=>a.jsx(zw,{children:a.jsxs(_w,{children:[a.jsx(Jx,{}),a.jsx(ow,{}),a.jsx(fw,{}),a.jsx(gw,{}),a.jsx(jw,{}),a.jsx(Rw,{})]})}),Lw=g.div`
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
`,$w=()=>a.jsxs(Lw,{children:[a.jsx(bw,{children:"People"}),a.jsx(Nw,{children:"🚧 Under Construction 🚧"}),a.jsx(Ow,{children:"👷‍♂️🏗️👷‍♀️"})]}),Dw=g.div`
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
`,Mw=()=>a.jsxs(Dw,{children:[a.jsx(Fw,{children:"Client Stories"}),a.jsx(Bw,{children:"🚧 Under Construction 🚧"}),a.jsx(Uw,{children:"👷‍♂️🏗️👷‍♀️"})]}),Hw=g.div`
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
`,Qw=()=>a.jsxs(Hw,{children:[a.jsx(Ww,{children:"Services"}),a.jsx(Vw,{children:"🚧 Under Construction 🚧"}),a.jsx(Gw,{children:"👷‍♂️🏗️👷‍♀️"})]}),Kw=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`,qw=()=>a.jsxs(Kw,{children:[a.jsx(Qx,{}),a.jsx(gv,{}),a.jsxs(Wh,{children:[a.jsx(Ze,{path:"/",element:a.jsx(zx,{})}),a.jsx(Ze,{path:"/about",element:a.jsx(Iw,{})}),a.jsx(Ze,{path:"/people",element:a.jsx($w,{})}),a.jsx(Ze,{path:"/client-stories",element:a.jsx(Mw,{})}),a.jsx(Ze,{path:"/services",element:a.jsx(Qw,{})})]})]}),Yw=g.div`
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
`,Ud=g.span`
  color: #77b9f3;
`,e3=g.div`
  height: 100%;
  width: 55%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Er=g(Vh)`
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
`,n3=()=>{const e=Ou(),t=()=>{e("/")},n=async()=>{t(),setTimeout(()=>{const r=document.getElementById("contact");r&&window.scrollTo({top:r.getBoundingClientRect().top,behavior:"smooth"})},1)};return a.jsxs(Yw,{children:[a.jsx(Jw,{onClick:t,src:Gh,alt:"Día Dev & Design Logo"}),a.jsxs(Xw,{children:[a.jsx(Ud,{children:"<"}),a.jsx(Zw,{children:"Día"}),a.jsx(Ud,{children:": Dev & Design />"})]}),a.jsxs(e3,{children:[a.jsx(Er,{to:"/",children:"Home"}),a.jsx(Er,{to:"/about",children:"About Us"}),a.jsx(Er,{to:"/people",children:"People"}),a.jsx(Er,{to:"/client-stories",children:"Client Stories"}),a.jsx(Er,{to:"/services",children:"Services"}),a.jsx(t3,{onClick:n,children:"Contact Us"})]})]})},r3=g.div`
  width: 1200px;
  height: inherit;
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  align-self: inherit;
`,Jt=({children:e})=>a.jsx(r3,{children:e}),i3=g.div`
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
`,Vi=g.h1`
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
`,c3=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return a.jsx(i3,{children:a.jsx(Jt,{children:a.jsxs(o3,{children:[a.jsxs(l3,{children:[a.jsxs(Vi,{children:["Every-",a.jsx(Md,{id:"dia",children:"Día"}),". "]}),a.jsx(Vi,{children:"We build."}),a.jsx(Vi,{children:"We create."}),a.jsxs(Vi,{children:["You ",a.jsx(Md,{id:"dia",children:"succeed"}),"!"]}),a.jsx(a3,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),a.jsx(s3,{onClick:e,children:"Contact Us"})]}),a.jsx(u3,{children:a.jsx("img",{src:Qh,alt:"header-image"})})]})})})},d3=g.div`
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
`,El=g.div`
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
`,x3=g(El)`
  background-color: #edf3ff;
`,w3=g(El)`
  background-color: #fffaec;
`,S3=g(El)`
  background-color: #f0fff4;
`,C3=g(El)`
  background-color: #fff5f3;
`,Gi=g.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
  ${""}
  ${""}
  width: 38%;
  ${""}
`,Qi=g.img`
  height: 62%;
  width: 62%;
  ${""}
`,Ki=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0;
`,qi=g.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0;
`,Yi=g.p`
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
`,k3=()=>a.jsx(d3,{children:a.jsx(Jt,{children:a.jsxs(f3,{children:[a.jsxs(p3,{children:[a.jsx(h3,{children:"We Are"}),a.jsxs(m3,{children:[a.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),a.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),a.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),a.jsxs(g3,{children:[a.jsx(y3,{children:"What We Do"}),a.jsxs(v3,{children:[a.jsxs(x3,{children:[a.jsx(Gi,{children:a.jsx(Qi,{src:Kh,alt:"web-dev"})}),a.jsxs(Ki,{children:[a.jsx(qi,{children:"Web Development"}),a.jsx(Yi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),a.jsxs(w3,{children:[a.jsx(Gi,{children:a.jsx(Qi,{src:qh,alt:"custom-applications"})}),a.jsxs(Ki,{children:[a.jsx(qi,{children:"Custom Applications"}),a.jsx(Yi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),a.jsxs(S3,{children:[a.jsx(Gi,{children:a.jsx(Qi,{src:Yh,alt:"problem-solutions"})}),a.jsxs(Ki,{children:[a.jsx(qi,{children:"Marketing"}),a.jsx(Yi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),a.jsxs(C3,{children:[a.jsx(Gi,{children:a.jsx(Qi,{src:Jh,alt:"tech-talent-incubator"})}),a.jsxs(Ki,{children:[a.jsx(qi,{children:"Tech Incubator"}),a.jsx(Yi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]})})}),j3=g.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #01402f;
  z-index: 11;
`,E3=g.h1`
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
`,P3=g.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R3=g.div`
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
`,Pn=g.button`
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
`,ds=g.label`
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
`,F3=()=>{const[e,t]=P.useState([]),[n,r]=P.useState(null),[i,o]=P.useState({name:"",email:"",message:""}),[l,s]=P.useState(""),u=(d,y)=>{let w=[...e],v=w.findIndex(x=>x===y);v>-1?w.splice(v,1):w.push(y),t(w)},c=d=>{o(y=>({...y,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(y=>{console.log(y.data.message),s(y.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(y=>{console.log(y)})};return P.useEffect(()=>{document.addEventListener("mousedown",()=>r(null))},[]),a.jsx(j3,{children:a.jsx(Jt,{children:a.jsxs(A3,{id:"contact",children:[a.jsxs(T3,{children:[a.jsx(E3,{children:"Get In Touch"}),a.jsxs(R3,{children:["Let’s discuss something ",a.jsx(z3,{children:"cool"})," together!"]}),a.jsxs(L3,{children:[a.jsx("span",{children:a.jsx("img",{src:E0})}),a.jsx("span",{style:{color:"white",fontSize:"2rem",fontWeight:"500"},children:"info@diadevdesign.com"})]})]}),l?a.jsx("p",{style:{whiteSpace:"pre-wrap",color:"white",fontFamily:"Aileron-Bold",fontSize:"3.6rem",fontWeight:"900"},children:l}):a.jsxs(P3,{children:[a.jsx(I3,{src:j0,alt:"Dog Image"}),a.jsx(_3,{children:a.jsxs(b3,{children:[a.jsx("span",{children:"I’m interested in..."}),a.jsxs(N3,{children:[a.jsx(Pn,{$active:e.includes("Web Development"),value:"Web Development",onClick:d=>u(d,"Web Development"),children:"Web Development"},"button-1"),a.jsx(Pn,{$active:e.includes("UX/UI Design"),value:"UX/UI Design",onClick:d=>u(d,"UX/UI Design"),children:"UX/UI Design"},"button-2"),a.jsx(Pn,{$active:e.includes("Graphic Design"),value:"Graphic Design",onClick:d=>u(d,"Graphic Design"),children:"Marketing"},"button-3"),a.jsx(Pn,{$active:e.includes("Custom APIs"),value:"Custom APIs",onClick:d=>u(d,"Custom APIs"),children:"Custom APIs"},"button-5"),a.jsx(Pn,{$active:e.includes("AI Apps/Agents"),value:"AI Apps/Agents",onClick:d=>u(d,"AI Apps/Agents"),children:"AI Apps/Agents"},"button-6"),a.jsx(Pn,{$active:e.includes("Other"),value:"Other",onClick:d=>u(d,"Other"),children:"Other"},"button-7")]}),a.jsxs(O3,{onSubmit:f,children:[a.jsx(ds,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),a.jsx(Hd,{type:"text",name:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d)}),a.jsx(ds,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),a.jsx(Hd,{type:"email",name:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d)}),a.jsx(ds,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),a.jsx($3,{type:"text",name:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d)}),a.jsxs(D3,{type:"submit",children:[a.jsx("img",{src:k0,alt:"send message"}),a.jsx("p",{children:"Send Message"})]})]})]})})]})]})})})},B3=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,U3=()=>a.jsxs(B3,{children:[a.jsx(c3,{}),a.jsx(k3,{}),a.jsx(F3,{})]}),M3=Ih`

  /* ============================================================
     LIGHT MODE ENFORCEMENT (styled-components layer)
     ============================================================ */

  :root {
    color-scheme: light only;
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
    color-scheme: light only !important;
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

  @media (prefers-color-scheme: dark) {
    html, body {
      background-color: #F2F2F2 !important;
      color: #070d0d !important;
      filter: none !important;
    }
  }

  @media (forced-colors: active) {
    *, *::before, *::after {
      forced-color-adjust: none !important;
    }
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
`,fs=g.div`
  font-size: 1.6rem;
  font-family: "Roboto";
`,X3=()=>a.jsx(W3,{children:a.jsx(Jt,{children:a.jsxs(V3,{children:[a.jsxs(G3,{children:[a.jsx(Q3,{children:"Our Story"}),a.jsx(K3,{src:H3,alt:"ballon-cat"})]}),a.jsxs(q3,{children:[a.jsx(Y3,{src:A0,alt:"dia-green-logo"}),a.jsxs(J3,{children:[a.jsx(fs,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),a.jsx(fs,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),a.jsx(fs,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})]})})}),Z3="/assets/img/TargetIcon-BDgFxHvR.svg",eS="/assets/img/EyeIcon-GMqB3cgM.svg",tS="/assets/img/HandsIcon-DC7nJpKX.svg",nS=g.div`
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
`,ps=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,hs=g.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ms=g.img`
  height: 60%;
`,gs=g.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`,aS=()=>a.jsx(nS,{children:a.jsxs(rS,{children:[a.jsx(iS,{children:"Why We Do It"}),a.jsxs(oS,{children:[a.jsx(lS,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),a.jsxs(sS,{children:[a.jsxs(ps,{children:[a.jsx(hs,{children:a.jsx(ms,{src:Z3,alt:"target-icon"})}),a.jsx(gs,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."})]}),a.jsxs(ps,{children:[a.jsx(hs,{children:a.jsx(ms,{src:eS,alt:"eye-icon"})}),a.jsx(gs,{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."})]}),a.jsxs(ps,{children:[a.jsx(hs,{children:a.jsx(ms,{src:tS,alt:"hands-icon"})}),a.jsx(gs,{children:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]})]})]})}),uS=g.div`
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
`,gS=()=>a.jsx(uS,{children:a.jsxs(cS,{children:[a.jsx(fS,{children:a.jsx(pS,{src:P0,alt:"fishermen"})}),a.jsx(Jt,{children:a.jsxs(dS,{children:[a.jsx(hS,{children:"Consulting"}),a.jsxs(mS,{children:[a.jsxs(Wd,{children:["At ","<Día Dev & Design>",", we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."]}),a.jsxs(Wd,{children:["At ","<Día Dev & Design>",", we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."]})]})]})})]})}),yS=g.div`
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
`,CS=()=>a.jsx(yS,{children:a.jsx(Jt,{children:a.jsx(vS,{children:a.jsxs(xS,{children:[a.jsx(wS,{children:a.jsxs(Vd,{children:[a.jsx(Gd,{children:"We build..."}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Tailored"}),a.jsx(Ie,{children:"Solutions for your unique business needs and goals."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Scalable"}),a.jsx(Ie,{children:"Applications that evolve as your business grows."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Responsive"}),a.jsx(Ie,{children:"Seamlessly compatible with all devices and screen sizes."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Cross-Platform Integration"}),a.jsx(Ie,{children:"Incorporate custom applications with your current systems and software."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Robust Architecture"}),a.jsx(Ie,{children:"Reliable and scalable software that can handle increasing loads and complexities."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"User-Centered Experience"}),a.jsx(Ie,{children:"Intuitive design and engaging interfaces."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Agile Development"}),a.jsx(Ie,{children:"To deliver projects on time and adapt to changing requirements quickly."})]})]})}),a.jsx(SS,{children:a.jsxs(Vd,{children:[a.jsx(Gd,{children:"You get..."}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Increased efficiency"}),a.jsx(Ie,{children:"Save time and cut costs with automated, streamlined processes."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Competitive Advantage"}),a.jsx(Ie,{children:"Cutting-edge technology to stay ahead in your industry and set you apart."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Advanced Analytics"}),a.jsx(Ie,{children:"Reporting features to provide valuable insights into your operations."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Security"}),a.jsx(Ie,{children:"Safeguard your data and observe compliance with advanced measures and best practices."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Maintenance and Support"}),a.jsx(Ie,{children:"Keep your software up-to-date and optimized with ongoing care."})]}),a.jsxs(ze,{children:[a.jsx(_e,{children:"Excellence"}),a.jsx(Ie,{children:"With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!"})]})]})})]})})})}),kS="data:image/svg+xml,%3csvg%20width='1512'%20height='185'%20viewBox='0%200%201512%20185'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M359.888%200C672.131%20-8.65219e-05%20602.831%2071.7909%20964.688%2071.7909C1326.54%2071.7909%201512%20184.211%201512%20184.211V185H0C0%20185%2047.6438%208.65221e-05%20359.888%200Z'%20fill='%2301402F'/%3e%3c/svg%3e",jS=g.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%;
  width: 100%; /* Make sure this has a defined width */
`,ES=g.h1`
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
`,ys=g.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`,vs=g.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`,xs=g.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`,ws=g.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`,Ss=g.div`
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
`,PS=g.img`
  width: 100vw;
  z-index: 2;
  padding: 0;
  display: block;
  margin-top: 25%;
`,RS=()=>a.jsxs(jS,{children:[a.jsx("img",{style:{height:"40vh",marginRight:"-55%",marginBottom:"-5%"},src:R0,alt:"plant-image"}),a.jsx(Jt,{style:{marginTop:"-20%",height:"fit-content"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"-20%"},children:[a.jsx(ES,{children:"Tech Incubator"}),a.jsxs(AS,{children:[a.jsxs(ys,{children:[a.jsx(vs,{src:z0,alt:"hands-on-training"}),a.jsxs(xs,{children:[a.jsx(ws,{children:"Hands-On Training"}),a.jsx(Ss,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),a.jsxs(ys,{children:[a.jsx(vs,{src:_0,alt:"performance"}),a.jsxs(xs,{children:[a.jsx(ws,{children:"Performance Feedback"}),a.jsx(Ss,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),a.jsxs(ys,{children:[a.jsx(vs,{src:I0,alt:"community-engagement"}),a.jsxs(xs,{children:[a.jsx(ws,{children:"Community Engagement"}),a.jsx(Ss,{children:"Participate in advancing local technological innovation and progress."})]})]})]})]})}),a.jsx(TS,{src:L0,alt:"ballon-dog"}),a.jsx(PS,{src:kS,alt:"bottom-wavy-top-rectangle"})]}),zS=g.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,_S=()=>a.jsxs(zS,{children:[a.jsx(X3,{}),a.jsx(aS,{}),a.jsx(gS,{}),a.jsx(CS,{}),a.jsx(RS,{})]}),IS=g.div`
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
`,OS=()=>a.jsxs(IS,{children:[a.jsx(LS,{children:"People"}),a.jsx(bS,{children:"🚧 Under Construction 🚧"}),a.jsx(NS,{children:"👷‍♂️🏗️👷‍♀️"})]}),$S=g.div`
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
`,US=()=>a.jsxs($S,{children:[a.jsx(DS,{children:"Client Stories"}),a.jsx(FS,{children:"🚧 Under Construction 🚧"}),a.jsx(BS,{children:"👷‍♂️🏗️👷‍♀️"})]}),MS=g.div`
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
`,GS=()=>a.jsxs(MS,{children:[a.jsx(HS,{children:"Services"}),a.jsx(WS,{children:"🚧 Under Construction 🚧"}),a.jsx(VS,{children:"👷‍♂️🏗️👷‍♀️"})]}),QS=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`,KS=()=>a.jsxs(QS,{children:[a.jsx(M3,{}),a.jsx(n3,{}),a.jsxs(Wh,{children:[a.jsx(Ze,{path:"/",element:a.jsx(U3,{})}),a.jsx(Ze,{path:"/about",element:a.jsx(_S,{})}),a.jsx(Ze,{path:"/people",element:a.jsx(OS,{})}),a.jsx(Ze,{path:"/client-stories",element:a.jsx(US,{})}),a.jsx(Ze,{path:"/services",element:a.jsx(GS,{})})]})]}),qS=()=>{const[e,t]=P.useState(null),n=()=>{let r=window.innerWidth;t(r)};return P.useEffect(()=>{n();let r;const i=()=>{clearTimeout(r),r=setTimeout(()=>{n()},150)};return window.addEventListener("resize",i),()=>{clearTimeout(r),window.removeEventListener("resize",i)}},[]),a.jsx(a.Fragment,{children:e>1024?a.jsx(KS,{resize:n}):e?a.jsx(qw,{resize:n}):null})};Cs.createRoot(document.getElementById("root")).render(a.jsx(et.StrictMode,{children:a.jsx(nv,{children:a.jsx(qS,{})})}));
