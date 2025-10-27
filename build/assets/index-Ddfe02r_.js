function R0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function T0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},Ko={},qd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),_0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),z0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),b0=Symbol.for("react.lazy"),Hu=Symbol.iterator;function F0(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xd=Object.assign,Jd={};function or(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Yd}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zd(){}Zd.prototype=or.prototype;function Oa(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Yd}var za=Oa.prototype=new Zd;za.constructor=Oa;Xd(za,or.prototype);za.isPureReactComponent=!0;var Wu=Array.isArray,ef=Object.prototype.hasOwnProperty,Da={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:li,type:e,key:o,ref:s,props:i,_owner:Da.current}}function B0(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function M0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vu=/\/+/g;function Rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M0(""+e.key):t.toString(36)}function Yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case li:case _0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Rs(s,0):r,Wu(i)?(n="",e!=null&&(n=e.replace(Vu,"$&/")+"/"),Yi(i,t,n,"",function(c){return c})):i!=null&&(ba(i)&&(i=B0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Wu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Rs(o,l);s+=Yi(o,t,n,a,i)}else if(a=F0(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Rs(o,l++),s+=Yi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Xi={transition:null},H0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Xi,ReactCurrentOwner:Da};function rf(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=or;D.Fragment=A0;D.Profiler=L0;D.PureComponent=Oa;D.StrictMode=N0;D.Suspense=z0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;D.act=rf;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Da.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)ef.call(t,a)&&!tf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:$0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I0,_context:e},e.Consumer=e};D.createElement=nf;D.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:O0,render:e}};D.isValidElement=ba;D.lazy=function(e){return{$$typeof:b0,_payload:{_status:-1,_result:e},_init:U0}};D.memo=function(e,t){return{$$typeof:D0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Xi.transition;Xi.transition={};try{e()}finally{Xi.transition=t}};D.unstable_act=rf;D.useCallback=function(e,t){return xe.current.useCallback(e,t)};D.useContext=function(e){return xe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};D.useEffect=function(e,t){return xe.current.useEffect(e,t)};D.useId=function(){return xe.current.useId()};D.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return xe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};D.useRef=function(e){return xe.current.useRef(e)};D.useState=function(e){return xe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return xe.current.useTransition()};D.version="18.3.1";qd.exports=D;var T=qd.exports;const Ze=T0(T),W0=R0({__proto__:null,default:Ze},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=T,G0=Symbol.for("react.element"),Q0=Symbol.for("react.fragment"),K0=Object.prototype.hasOwnProperty,q0=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)K0.call(t,r)&&!Y0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:G0,type:e,key:o,ref:s,props:i,_owner:q0.current}}Ko.Fragment=Q0;Ko.jsx=of;Ko.jsxs=of;Kd.exports=Ko;var u=Kd.exports,kl={},sf={exports:{}},Fe={},lf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var I=_.length;_.push(L);e:for(;0<I;){var U=I-1>>>1,H=_[U];if(0<i(H,L))_[U]=L,_[I]=H,I=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],I=_.pop();if(I!==L){_[0]=I;e:for(var U=0,H=_.length,en=H>>>1;U<en;){var Ke=2*(U+1)-1,kt=_[Ke],_e=Ke+1,dt=_[_e];if(0>i(kt,I))_e<H&&0>i(dt,kt)?(_[U]=dt,_[_e]=I,U=_e):(_[U]=kt,_[Ke]=I,U=Ke);else if(_e<H&&0>i(dt,I))_[U]=dt,_[_e]=I,U=_e;else break e}}return L}function i(_,L){var I=_.sortIndex-L.sortIndex;return I!==0?I:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,d=null,g=3,w=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=_)r(c),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(c)}}function S(_){if(x=!1,m(_),!v)if(n(a)!==null)v=!0,fr(E);else{var L=n(c);L!==null&&Zt(S,L.startTime-_)}}function E(_,L){v=!1,x&&(x=!1,h(N),N=-1),w=!0;var I=g;try{for(m(L),d=n(a);d!==null&&(!(d.expirationTime>L)||_&&!Te());){var U=d.callback;if(typeof U=="function"){d.callback=null,g=d.priorityLevel;var H=U(d.expirationTime<=L);L=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(a)&&r(a),m(L)}else r(a);d=n(a)}if(d!==null)var en=!0;else{var Ke=n(c);Ke!==null&&Zt(S,Ke.startTime-L),en=!1}return en}finally{d=null,g=I,w=!1}}var P=!1,j=null,N=-1,B=5,z=-1;function Te(){return!(e.unstable_now()-z<B)}function Xt(){if(j!==null){var _=e.unstable_now();z=_;var L=!0;try{L=j(!0,_)}finally{L?Jt():(P=!1,j=null)}}else P=!1}var Jt;if(typeof p=="function")Jt=function(){p(Xt)};else if(typeof MessageChannel<"u"){var gi=new MessageChannel,js=gi.port2;gi.port1.onmessage=Xt,Jt=function(){js.postMessage(null)}}else Jt=function(){C(Xt,0)};function fr(_){j=_,P||(P=!0,Jt())}function Zt(_,L){N=C(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,fr(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var I=g;g=L;try{return _()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=g;g=_;try{return L()}finally{g=I}},e.unstable_scheduleCallback=function(_,L,I){var U=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?U+I:U):I=U,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=I+H,_={id:f++,callback:L,priorityLevel:_,startTime:I,expirationTime:H,sortIndex:-1},I>U?(_.sortIndex=I,t(c,_),n(a)===null&&_===n(c)&&(x?(h(N),N=-1):x=!0,Zt(S,I-U))):(_.sortIndex=H,t(a,_),v||w||(v=!0,fr(E))),_},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(_){var L=g;return function(){var I=g;g=L;try{return _.apply(this,arguments)}finally{g=I}}}})(af);lf.exports=af;var X0=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=T,be=X0;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,br={};function wn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(br[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gu={},Qu={};function em(e){return El.call(Qu,e)?!0:El.call(Gu,e)?!1:Z0.test(e)?Qu[e]=!0:(Gu[e]=!0,!1)}function tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nm(e,t,n,r){if(t===null||typeof t>"u"||tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fa=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fa,Ba);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fa,Ba);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fa,Ba);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nm(t,n,i,r)&&(n=null),r||i===null?em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Ha=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),Ku=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ts;function kr(e){if(Ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ts=t&&t[1]||""}return`
`+Ts+e}var _s=!1;function As(e,t){if(!e||_s)return"";_s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{_s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function rm(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=As(e.type,!1),e;case 11:return e=As(e.type.render,!1),e;case 1:return e=As(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case Tn:return"Portal";case jl:return"Profiler";case Ua:return"StrictMode";case Pl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Ha:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wa:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function om(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=om(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _l(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&Ma(e,"checked",t,!1)}function Al(e,t){mf(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Er(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function gf(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sm=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lm=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Un=null,Hn=null;function Zu(e){if(e=ci(e)){if(typeof Dl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Zo(t),Dl(e.stateNode,e.type,t))}}function Sf(e){Un?Hn?Hn.push(e):Hn=[e]:Un=e}function Cf(){if(Un){var e=Un,t=Hn;if(Hn=Un=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function kf(e,t){return e(t)}function Ef(){}var Ns=!1;function jf(e,t,n){if(Ns)return e(t,n);Ns=!0;try{return kf(e,t,n)}finally{Ns=!1,(Un!==null||Hn!==null)&&(Ef(),Cf())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var bl=!1;if(vt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){bl=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{bl=!1}function am(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var _r=!1,yo=null,vo=!1,Fl=null,um={onError:function(e){_r=!0,yo=e}};function cm(e,t,n,r,i,o,s,l,a){_r=!1,yo=null,am.apply(um,arguments)}function dm(e,t,n,r,i,o,s,l,a){if(cm.apply(this,arguments),_r){if(_r){var c=yo;_r=!1,yo=null}else throw Error(R(198));vo||(vo=!0,Fl=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Sn(e)!==e)throw Error(R(188))}function fm(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ec(i),e;if(o===r)return ec(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Rf(e){return e=fm(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var _f=be.unstable_scheduleCallback,tc=be.unstable_cancelCallback,pm=be.unstable_shouldYield,hm=be.unstable_requestPaint,Z=be.unstable_now,mm=be.unstable_getCurrentPriorityLevel,Ga=be.unstable_ImmediatePriority,Af=be.unstable_UserBlockingPriority,xo=be.unstable_NormalPriority,gm=be.unstable_LowPriority,Nf=be.unstable_IdlePriority,qo=null,ut=null;function ym(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:wm,vm=Math.log,xm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(vm(e)/xm|0)|0}var Ci=64,ki=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=jr(l):(o&=s,o!==0&&(r=jr(o)))}else s=n&~i,s!==0?r=jr(s):o!==0&&(r=jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Sm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Sm(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function If(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $f,Ka,Of,zf,Df,Ml=!1,Ei=[],Ot=null,zt=null,Dt=null,Mr=new Map,Ur=new Map,At=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jm(e,t,n,r,i){switch(t){case"focusin":return Ot=gr(Ot,e,t,n,r,i),!0;case"dragenter":return zt=gr(zt,e,t,n,r,i),!0;case"mouseover":return Dt=gr(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,gr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,gr(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function bf(e){var t=on(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pf(n),t!==null){e.blockedOn=t,Df(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=ci(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){Ji(e)&&n.delete(t)}function Pm(){Ml=!1,Ot!==null&&Ji(Ot)&&(Ot=null),zt!==null&&Ji(zt)&&(zt=null),Dt!==null&&Ji(Dt)&&(Dt=null),Mr.forEach(rc),Ur.forEach(rc)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Pm)))}function Hr(e){function t(i){return yr(i,e)}if(0<Ei.length){yr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&yr(Ot,e),zt!==null&&yr(zt,e),Dt!==null&&yr(Dt,e),Mr.forEach(t),Ur.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&At.shift()}var Wn=Ct.ReactCurrentBatchConfig,So=!0;function Rm(e,t,n,r){var i=M,o=Wn.transition;Wn.transition=null;try{M=1,qa(e,t,n,r)}finally{M=i,Wn.transition=o}}function Tm(e,t,n,r){var i=M,o=Wn.transition;Wn.transition=null;try{M=4,qa(e,t,n,r)}finally{M=i,Wn.transition=o}}function qa(e,t,n,r){if(So){var i=Ul(e,t,n,r);if(i===null)Us(e,t,r,Co,n),nc(e,r);else if(jm(i,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<Em.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&$f(o),o=Ul(e,t,n,r),o===null&&Us(e,t,r,Co,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Us(e,t,r,null,n)}}var Co=null;function Ul(e,t,n,r){if(Co=null,e=Va(r),e=on(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mm()){case Ga:return 1;case Af:return 4;case xo:case gm:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var Lt=null,Ya=null,Zi=null;function Bf(){if(Zi)return Zi;var e,t=Ya,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function ic(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ji:ic,this.isPropagationStopped=ic,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=Be(sr),ui=X({},sr,{view:0,detail:0}),_m=Be(ui),Is,$s,vr,Yo=X({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Is=e.screenX-vr.screenX,$s=e.screenY-vr.screenY):$s=Is=0,vr=e),Is)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),oc=Be(Yo),Am=X({},Yo,{dataTransfer:0}),Nm=Be(Am),Lm=X({},ui,{relatedTarget:0}),Os=Be(Lm),Im=X({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),$m=Be(Im),Om=X({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zm=Be(Om),Dm=X({},sr,{data:0}),sc=Be(Dm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bm[e])?!!t[e]:!1}function Ja(){return Mm}var Um=X({},ui,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ja,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hm=Be(Um),Wm=X({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Be(Wm),Vm=X({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ja}),Gm=Be(Vm),Qm=X({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=Be(Qm),qm=X({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=Be(qm),Xm=[9,13,27,32],Za=vt&&"CompositionEvent"in window,Ar=null;vt&&"documentMode"in document&&(Ar=document.documentMode);var Jm=vt&&"TextEvent"in window&&!Ar,Mf=vt&&(!Za||Ar&&8<Ar&&11>=Ar),ac=" ",uc=!1;function Uf(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Zm(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:(uc=!0,ac);case"textInput":return e=t.data,e===ac&&uc?null:e;default:return null}}function eg(e,t){if(An)return e==="compositionend"||!Za&&Uf(e,t)?(e=Bf(),Zi=Ya=Lt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mf&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function Wf(e,t,n,r){Sf(r),t=ko(t,"onChange"),0<t.length&&(n=new Xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Wr=null;function ng(e){tp(e,0)}function Xo(e){var t=In(e);if(hf(t))return e}function rg(e,t){if(e==="change")return t}var Vf=!1;if(vt){var zs;if(vt){var Ds="oninput"in document;if(!Ds){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Ds=typeof dc.oninput=="function"}zs=Ds}else zs=!1;Vf=zs&&(!document.documentMode||9<document.documentMode)}function fc(){Nr&&(Nr.detachEvent("onpropertychange",Gf),Wr=Nr=null)}function Gf(e){if(e.propertyName==="value"&&Xo(Wr)){var t=[];Wf(t,Wr,e,Va(e)),jf(ng,t)}}function ig(e,t,n){e==="focusin"?(fc(),Nr=t,Wr=n,Nr.attachEvent("onpropertychange",Gf)):e==="focusout"&&fc()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Wr)}function sg(e,t){if(e==="click")return Xo(t)}function lg(e,t){if(e==="input"||e==="change")return Xo(t)}function ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:ag;function Vr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ug(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qf(n.ownerDocument.documentElement,n)){if(r!==null&&eu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hc(n,o);var s=hc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=vt&&"documentMode"in document&&11>=document.documentMode,Nn=null,Hl=null,Lr=null,Wl=!1;function mc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wl||Nn==null||Nn!==go(r)||(r=Nn,"selectionStart"in r&&eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Vr(Lr,r)||(Lr=r,r=ko(Hl,"onSelect"),0<r.length&&(t=new Xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},bs={},qf={};vt&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Jo(e){if(bs[e])return bs[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return bs[e]=t[n];return e}var Yf=Jo("animationend"),Xf=Jo("animationiteration"),Jf=Jo("animationstart"),Zf=Jo("transitionend"),ep=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){ep.set(e,t),wn(t,[e])}for(var Fs=0;Fs<gc.length;Fs++){var Bs=gc[Fs],dg=Bs.toLowerCase(),fg=Bs[0].toUpperCase()+Bs.slice(1);Qt(dg,"on"+fg)}Qt(Yf,"onAnimationEnd");Qt(Xf,"onAnimationIteration");Qt(Jf,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Zf,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dm(r,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;yc(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;yc(i,l,c),o=a}}}if(vo)throw e=Fl,vo=!1,Fl=null,e}function V(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(np(t,e,2,!1),n.add(r))}function Ms(e,t,n){var r=0;t&&(r|=4),np(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Ri]){e[Ri]=!0,uf.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||Ms(n,!1,e),Ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Ms("selectionchange",!1,t))}}function np(e,t,n,r){switch(Ff(t)){case 1:var i=Rm;break;case 4:i=Tm;break;default:i=qa}n=i.bind(null,t,n,e),i=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Us(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=on(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}jf(function(){var c=o,f=Va(n),d=[];e:{var g=ep.get(e);if(g!==void 0){var w=Xa,v=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":w=Hm;break;case"focusin":v="focus",w=Os;break;case"focusout":v="blur",w=Os;break;case"beforeblur":case"afterblur":w=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Gm;break;case Yf:case Xf:case Jf:w=$m;break;case Zf:w=Km;break;case"scroll":w=_m;break;case"wheel":w=Ym;break;case"copy":case"cut":case"paste":w=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=lc}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Br(p,h),S!=null&&x.push(Qr(p,S,m)))),C)break;p=p.return}0<x.length&&(g=new w(g,v,null,n,f),d.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==zl&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[xt]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?on(v):null,v!==null&&(C=Sn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(x=oc,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=lc,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=w==null?g:In(w),m=v==null?g:In(v),g=new x(S,p+"leave",w,n,f),g.target=C,g.relatedTarget=m,S=null,on(f)===c&&(x=new x(h,p+"enter",v,n,f),x.target=m,x.relatedTarget=C,S=x),C=S,w&&v)t:{for(x=w,h=v,p=0,m=x;m;m=En(m))p++;for(m=0,S=h;S;S=En(S))m++;for(;0<p-m;)x=En(x),p--;for(;0<m-p;)h=En(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=En(x),h=En(h)}x=null}else x=null;w!==null&&vc(d,g,w,x,!1),v!==null&&C!==null&&vc(d,C,v,x,!0)}}e:{if(g=c?In(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=rg;else if(cc(g))if(Vf)E=lg;else{E=og;var P=ig}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=sg);if(E&&(E=E(e,c))){Wf(d,E,n,f);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Nl(g,"number",g.value)}switch(P=c?In(c):window,e){case"focusin":(cc(P)||P.contentEditable==="true")&&(Nn=P,Hl=c,Lr=null);break;case"focusout":Lr=Hl=Nn=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,mc(d,n,f);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":mc(d,n,f)}var j;if(Za)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else An?Uf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Mf&&n.locale!=="ko"&&(An||N!=="onCompositionStart"?N==="onCompositionEnd"&&An&&(j=Bf()):(Lt=f,Ya="value"in Lt?Lt.value:Lt.textContent,An=!0)),P=ko(c,N),0<P.length&&(N=new sc(N,e,null,n,f),d.push({event:N,listeners:P}),j?N.data=j:(j=Hf(n),j!==null&&(N.data=j)))),(j=Jm?Zm(e,n):eg(e,n))&&(c=ko(c,"onBeforeInput"),0<c.length&&(f=new sc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=j))}tp(d,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Br(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Br(n,o),a!=null&&s.unshift(Qr(n,a,l))):i||(a=Br(n,o),a!=null&&s.push(Qr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var hg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(mg,"")}function Ti(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(R(425))}function Eo(){}var Vl=null,Gl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof wc<"u"?function(e){return wc.resolve(null).then(e).catch(vg)}:Kl;function vg(e){setTimeout(function(){throw e})}function Hs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),at="__reactFiber$"+lr,Kr="__reactProps$"+lr,xt="__reactContainer$"+lr,ql="__reactEvents$"+lr,xg="__reactListeners$"+lr,wg="__reactHandles$"+lr;function on(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[at])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Zo(e){return e[Kr]||null}var Yl=[],$n=-1;function Kt(e){return{current:e}}function Q(e){0>$n||(e.current=Yl[$n],Yl[$n]=null,$n--)}function W(e,t){$n++,Yl[$n]=e.current,e.current=t}var Gt={},ge=Kt(Gt),ke=Kt(!1),hn=Gt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function jo(){Q(ke),Q(ge)}function Cc(e,t,n){if(ge.current!==Gt)throw Error(R(168));W(ge,t),W(ke,n)}function rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,im(e)||"Unknown",i));return X({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,hn=ge.current,W(ge,e),W(ke,ke.current),!0}function kc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=rp(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(ge),W(ge,e)):Q(ke),W(ke,n)}var ht=null,es=!1,Ws=!1;function ip(e){ht===null?ht=[e]:ht.push(e)}function Sg(e){es=!0,ip(e)}function qt(){if(!Ws&&ht!==null){Ws=!0;var e=0,t=M;try{var n=ht;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,es=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),_f(Ga,qt),i}finally{M=t,Ws=!1}}return null}var On=[],zn=0,Ro=null,To=0,Me=[],Ue=0,mn=null,mt=1,gt="";function nn(e,t){On[zn++]=To,On[zn++]=Ro,Ro=e,To=t}function op(e,t,n){Me[Ue++]=mt,Me[Ue++]=gt,Me[Ue++]=mn,mn=e;var r=mt;e=gt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-et(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function tu(e){e.return!==null&&(nn(e,1),op(e,1,0))}function nu(e){for(;e===Ro;)Ro=On[--zn],On[zn]=null,To=On[--zn],On[zn]=null;for(;e===mn;)mn=Me[--Ue],Me[Ue]=null,gt=Me[--Ue],Me[Ue]=null,mt=Me[--Ue],Me[Ue]=null}var ze=null,Oe=null,K=!1,Je=null;function sp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(K){var t=Oe;if(t){var n=t;if(!Ec(e,t)){if(Xl(e))throw Error(R(418));t=bt(n.nextSibling);var r=ze;t&&Ec(e,t)?sp(r,n):(e.flags=e.flags&-4097|2,K=!1,ze=e)}}else{if(Xl(e))throw Error(R(418));e.flags=e.flags&-4097|2,K=!1,ze=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function _i(e){if(e!==ze)return!1;if(!K)return jc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Oe)){if(Xl(e))throw lp(),Error(R(418));for(;t;)sp(e,t),t=bt(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?bt(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Oe;e;)e=bt(e.nextSibling)}function qn(){Oe=ze=null,K=!1}function ru(e){Je===null?Je=[e]:Je.push(e)}var Cg=Ct.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function ap(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ut(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,m,S){return p===null||p.tag!==6?(p=Xs(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function a(h,p,m,S){var E=m.type;return E===_n?f(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&Pc(E)===p.type)?(S=i(p,m.props),S.ref=xr(h,p,m),S.return=h,S):(S=lo(m.type,m.key,m.props,null,h.mode,S),S.ref=xr(h,p,m),S.return=h,S)}function c(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Js(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,S,E){return p===null||p.tag!==7?(p=dn(m,h.mode,S,E),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xs(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:return m=lo(p.type,p.key,p.props,null,h.mode,m),m.ref=xr(h,null,p),m.return=h,m;case Tn:return p=Js(p,h.mode,m),p.return=h,p;case Tt:var S=p._init;return d(h,S(p._payload),m)}if(Er(p)||hr(p))return p=dn(p,h.mode,m,null),p.return=h,p;Ai(h,p)}return null}function g(h,p,m,S){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:return m.key===E?a(h,p,m,S):null;case Tn:return m.key===E?c(h,p,m,S):null;case Tt:return E=m._init,g(h,p,E(m._payload),S)}if(Er(m)||hr(m))return E!==null?null:f(h,p,m,S,null);Ai(h,m)}return null}function w(h,p,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,l(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xi:return h=h.get(S.key===null?m:S.key)||null,a(p,h,S,E);case Tn:return h=h.get(S.key===null?m:S.key)||null,c(p,h,S,E);case Tt:var P=S._init;return w(h,p,m,P(S._payload),E)}if(Er(S)||hr(S))return h=h.get(m)||null,f(p,h,S,E,null);Ai(p,S)}return null}function v(h,p,m,S){for(var E=null,P=null,j=p,N=p=0,B=null;j!==null&&N<m.length;N++){j.index>N?(B=j,j=null):B=j.sibling;var z=g(h,j,m[N],S);if(z===null){j===null&&(j=B);break}e&&j&&z.alternate===null&&t(h,j),p=o(z,p,N),P===null?E=z:P.sibling=z,P=z,j=B}if(N===m.length)return n(h,j),K&&nn(h,N),E;if(j===null){for(;N<m.length;N++)j=d(h,m[N],S),j!==null&&(p=o(j,p,N),P===null?E=j:P.sibling=j,P=j);return K&&nn(h,N),E}for(j=r(h,j);N<m.length;N++)B=w(j,h,N,m[N],S),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?N:B.key),p=o(B,p,N),P===null?E=B:P.sibling=B,P=B);return e&&j.forEach(function(Te){return t(h,Te)}),K&&nn(h,N),E}function x(h,p,m,S){var E=hr(m);if(typeof E!="function")throw Error(R(150));if(m=E.call(m),m==null)throw Error(R(151));for(var P=E=null,j=p,N=p=0,B=null,z=m.next();j!==null&&!z.done;N++,z=m.next()){j.index>N?(B=j,j=null):B=j.sibling;var Te=g(h,j,z.value,S);if(Te===null){j===null&&(j=B);break}e&&j&&Te.alternate===null&&t(h,j),p=o(Te,p,N),P===null?E=Te:P.sibling=Te,P=Te,j=B}if(z.done)return n(h,j),K&&nn(h,N),E;if(j===null){for(;!z.done;N++,z=m.next())z=d(h,z.value,S),z!==null&&(p=o(z,p,N),P===null?E=z:P.sibling=z,P=z);return K&&nn(h,N),E}for(j=r(h,j);!z.done;N++,z=m.next())z=w(j,h,N,z.value,S),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?N:z.key),p=o(z,p,N),P===null?E=z:P.sibling=z,P=z);return e&&j.forEach(function(Xt){return t(h,Xt)}),K&&nn(h,N),E}function C(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===_n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:e:{for(var E=m.key,P=p;P!==null;){if(P.key===E){if(E=m.type,E===_n){if(P.tag===7){n(h,P.sibling),p=i(P,m.props.children),p.return=h,h=p;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&Pc(E)===P.type){n(h,P.sibling),p=i(P,m.props),p.ref=xr(h,P,m),p.return=h,h=p;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===_n?(p=dn(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=lo(m.type,m.key,m.props,null,h.mode,S),S.ref=xr(h,p,m),S.return=h,h=S)}return s(h);case Tn:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Js(m,h.mode,S),p.return=h,h=p}return s(h);case Tt:return P=m._init,C(h,p,P(m._payload),S)}if(Er(m))return v(h,p,m,S);if(hr(m))return x(h,p,m,S);Ai(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Xs(m,h.mode,S),p.return=h,h=p),s(h)):n(h,p)}return C}var Yn=ap(!0),up=ap(!1),_o=Kt(null),Ao=null,Dn=null,iu=null;function ou(){iu=Dn=Ao=null}function su(e){var t=_o.current;Q(_o),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){Ao=e,iu=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Ao===null)throw Error(R(308));Dn=e,Ao.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var sn=null;function lu(e){sn===null?sn=[e]:sn.push(e)}function cp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,f=c=a=null,l=o;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,w=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(w,d,g):v,g==null)break e;d=X({},d,g);break e;case 2:_t=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,a=d):f=f.next=w,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=d}}function Tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var di={},ct=Kt(di),qr=Kt(di),Yr=Kt(di);function ln(e){if(e===di)throw Error(R(174));return e}function uu(e,t){switch(W(Yr,t),W(qr,e),W(ct,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}Q(ct),W(ct,t)}function Xn(){Q(ct),Q(qr),Q(Yr)}function fp(e){ln(Yr.current);var t=ln(ct.current),n=Il(t,e.type);t!==n&&(W(qr,e),W(ct,n))}function cu(e){qr.current===e&&(Q(ct),Q(qr))}var q=Kt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vs=[];function du(){for(var e=0;e<Vs.length;e++)Vs[e]._workInProgressVersionPrimary=null;Vs.length=0}var no=Ct.ReactCurrentDispatcher,Gs=Ct.ReactCurrentBatchConfig,gn=0,Y=null,ie=null,se=null,Io=!1,Ir=!1,Xr=0,kg=0;function fe(){throw Error(R(321))}function fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function pu(e,t,n,r,i,o){if(gn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?Rg:Tg,e=n(r,i),Ir){o=0;do{if(Ir=!1,Xr=0,25<=o)throw Error(R(301));o+=1,se=ie=null,t.updateQueue=null,no.current=_g,e=n(r,i)}while(Ir)}if(no.current=$o,t=ie!==null&&ie.next!==null,gn=0,se=ie=Y=null,Io=!1,t)throw Error(R(300));return e}function hu(){var e=Xr!==0;return Xr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Y.memoizedState=se=e:se=se.next=e,se}function Ge(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?Y.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(R(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?Y.memoizedState=se=e:se=se.next=e}return se}function Jr(e,t){return typeof t=="function"?t(e):t}function Qs(e){var t=Ge(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((gn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Y.lanes|=f,yn|=f}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=Ge(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pp(){}function hp(e,t){var n=Y,r=Ge(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,mu(yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Zr(9,gp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(R(349));gn&30||mp(n,t,i)}return i}function mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,vp(t)&&xp(e)}function yp(e,t,n){return n(function(){vp(t)&&xp(e)})}function vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function xp(e){var t=wt(e,1);t!==null&&tt(t,e,1,-1)}function _c(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pg.bind(null,Y,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wp(){return Ge().memoizedState}function ro(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function ts(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&fu(r,s.deps)){i.memoizedState=Zr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Zr(1|t,n,o,r)}function Ac(e,t){return ro(8390656,8,e,t)}function mu(e,t){return ts(2048,8,e,t)}function Sp(e,t){return ts(4,2,e,t)}function Cp(e,t){return ts(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,n){return n=n!=null?n.concat([e]):null,ts(4,4,kp.bind(null,t,e),n)}function gu(){}function jp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rp(e,t,n){return gn&21?(rt(n,t)||(n=Lf(),Y.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Eg(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Gs.transition;Gs.transition={};try{e(!1),t()}finally{M=n,Gs.transition=r}}function Tp(){return Ge().memoizedState}function jg(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(e))Ap(t,n);else if(n=cp(e,t,n,r),n!==null){var i=ve();tt(n,e,r,i),Np(n,t,r)}}function Pg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,rt(l,s)){var a=t.interleaved;a===null?(i.next=i,lu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=cp(e,t,i,r),n!==null&&(i=ve(),tt(n,e,r,i),Np(n,t,r))}}function _p(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ap(e,t){Ir=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var $o={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Rg={readContext:Ve,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jg.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:gu,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Eg.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(K){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ae===null)throw Error(R(349));gn&30||mp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ac(yp.bind(null,r,o,e),[e]),r.flags|=2048,Zr(9,gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ae.identifierPrefix;if(K){var n=gt,r=mt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tg={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:mu,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Pp,useReducer:Qs,useRef:wp,useState:function(){return Qs(Jr)},useDebugValue:gu,useDeferredValue:function(e){var t=Ge();return Rp(t,ie.memoizedState,e)},useTransition:function(){var e=Qs(Jr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:hp,useId:Tp,unstable_isNewReconciler:!1},_g={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:mu,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Pp,useReducer:Ks,useRef:wp,useState:function(){return Ks(Jr)},useDebugValue:gu,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:Rp(t,ie.memoizedState,e)},useTransition:function(){var e=Ks(Jr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:hp,useId:Tp,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ns={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Mt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(tt(t,e,r,n),to(t,e,r))}};function Nc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,o):!0}function Lp(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ee(t)?hn:ge.current,r=t.contextTypes,o=(r=r!=null)?Kn(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},au(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ee(t)?hn:ge.current,i.context=Kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ea(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ns.enqueueReplaceState(i,i.state,null),No(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=rm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ag=typeof WeakMap=="function"?WeakMap:Map;function Ip(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,fa=r),na(e,t)},n}function $p(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ag;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wg.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Ng=Ct.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?up(t,null,n,r):Yn(t,e.child,n,r)}function zc(e,t,n,r,i){n=n.render;var o=t.ref;return Vn(t,i),r=pu(e,t,n,r,o,i),n=hu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(K&&n&&tu(t),t.flags|=1,ye(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Op(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Op(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return ra(e,t,n,r,i)}function zp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Fn,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Fn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Fn,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Fn,$e),$e|=r;return ye(e,t,i,n),t.child}function Dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,i){var o=Ee(n)?hn:ge.current;return o=Kn(t,o),Vn(t,i),n=pu(e,t,n,r,o,i),r=hu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(K&&r&&tu(t),t.flags|=1,ye(e,t,n,i),t.child)}function bc(e,t,n,r,i){if(Ee(n)){var o=!0;Po(t)}else o=!1;if(Vn(t,i),t.stateNode===null)io(e,t),Lp(t,n,r),ta(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ee(n)?hn:ge.current,c=Kn(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Lc(t,s,r,c),_t=!1;var g=t.memoizedState;s.state=g,No(t,r,s,i),a=t.memoizedState,l!==r||g!==a||ke.current||_t?(typeof f=="function"&&(ea(t,n,f,r),a=t.memoizedState),(l=_t||Nc(t,n,l,r,g,a,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),s.props=c,d=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ee(n)?hn:ge.current,a=Kn(t,a));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||g!==a)&&Lc(t,s,r,a),_t=!1,g=t.memoizedState,s.state=g,No(t,r,s,i);var v=t.memoizedState;l!==d||g!==v||ke.current||_t?(typeof w=="function"&&(ea(t,n,w,r),v=t.memoizedState),(c=_t||Nc(t,n,c,r,g,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,o,i)}function ia(e,t,n,r,i,o){Dp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&kc(t,n,!1),St(e,t,o);r=t.stateNode,Ng.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,l,o)):ye(e,t,l,o),t.memoizedState=r.state,i&&kc(t,n,!0),t.child}function bp(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),uu(e,t.containerInfo)}function Fc(e,t,n,r,i){return qn(),ru(i),t.flags|=256,ye(e,t,n,r),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=os(s,r,0,null),e=dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sa(n),t.memoizedState=oa,e):yu(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Lg(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ut(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=dn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?sa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=oa,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&ru(r),Yn(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=qs(Error(R(422))),Ni(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=os({mode:"visible",children:r.children},i,0,null),o=dn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,s),t.child.memoizedState=sa(s),t.memoizedState=oa,o);if(!(t.mode&1))return Ni(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(R(419)),r=qs(o,r,void 0),Ni(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),tt(r,e,i,-1))}return ku(),r=qs(Error(R(421))),Ni(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Oe=bt(i.nextSibling),ze=t,K=!0,Je=null,e!==null&&(Me[Ue++]=mt,Me[Ue++]=gt,Me[Ue++]=mn,mt=e.id,gt=e.overflow,mn=t),t=yu(t,r.children),t.flags|=4096,t)}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function Ys(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ys(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ys(t,!0,n,null,o);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ig(e,t,n){switch(t.tag){case 3:bp(t),qn();break;case 5:fp(t);break;case 1:Ee(t.type)&&Po(t);break;case 4:uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(_o,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(W(q,q.current&1),e=St(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,zp(e,t,n)}return St(e,t,n)}var Mp,la,Up,Hp;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ln(ct.current);var o=null;switch(n){case"input":i=_l(e,i),r=_l(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}$l(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(br.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(br.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $g(e,t,n){var r=t.pendingProps;switch(nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&jo(),pe(t),null;case 3:return r=t.stateNode,Xn(),Q(ke),Q(ge),du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ma(Je),Je=null))),la(e,t),pe(t),null;case 5:cu(t);var i=ln(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return pe(t),null}if(e=ln(ct.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)V(Pr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":qu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Xu(r,o),V("invalid",r)}$l(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,l,e),i=["children",""+l]):br.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":wi(r),Yu(r,o,!0);break;case"textarea":wi(r),Ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Kr]=r,Mp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ol(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)V(Pr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":qu(e,r),i=_l(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Xu(e,r),i=Ll(e,r),V("invalid",e);break;default:i=r}$l(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?wf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fr(e,a):typeof a=="number"&&Fr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(br.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Ma(e,o,a,s))}switch(n){case"input":wi(e),Yu(e,r,!1);break;case"textarea":wi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=ln(Yr.current),ln(ct.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return pe(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Oe!==null&&t.mode&1&&!(t.flags&128))lp(),qn(),t.flags|=98560,o=!1;else if(o=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[at]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Je!==null&&(ma(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):ku())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Xn(),la(e,t),e===null&&Gr(t.stateNode.containerInfo),pe(t),null;case 10:return su(t.type._context),pe(t),null;case 17:return Ee(t.type)&&jo(),pe(t),null;case 19:if(Q(q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)wr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Lo(e),s!==null){for(t.flags|=128,wr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Zn&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return pe(t),null}else 2*Z()-o.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Og(e,t){switch(nu(t),t.tag){case 1:return Ee(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Q(ke),Q(ge),du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cu(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Xn(),null;case 10:return su(t.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Li=!1,he=!1,zg=typeof WeakSet=="function"?WeakSet:Set,A=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function aa(e,t,n){try{n()}catch(r){J(e,t,r)}}var Mc=!1;function Dg(e,t){if(Vl=So,e=Kf(),eu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,f=0,d=e,g=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(w=d.firstChild)!==null;)g=d,d=w;for(;;){if(d===e)break t;if(g===n&&++c===i&&(l=s),g===o&&++f===r&&(a=s),(w=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},So=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Mc,Mc=!1,v}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&aa(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Kr],delete t[ql],delete t[xg],delete t[wg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var ue=null,Xe=!1;function jt(e,t,n){for(n=n.child;n!==null;)Gp(e,t,n),n=n.sibling}function Gp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:he||bn(n,t);case 6:var r=ue,i=Xe;ue=null,jt(e,t,n),ue=r,Xe=i,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?Hs(e.parentNode,n):e.nodeType===1&&Hs(e,n),Hr(e)):Hs(ue,n.stateNode));break;case 4:r=ue,i=Xe,ue=n.stateNode.containerInfo,Xe=!0,jt(e,t,n),ue=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&aa(n,t,s),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!he&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,t,l)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,jt(e,t,n),he=r):jt(e,t,n);break;default:jt(e,t,n)}}function Hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zg),t.forEach(function(r){var i=Gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Xe=!1;break e;case 3:ue=l.stateNode.containerInfo,Xe=!0;break e;case 4:ue=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(ue===null)throw Error(R(160));Gp(o,s,i),ue=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qp(t,e),t=t.sibling}function Qp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{$r(3,e,e.return),rs(3,e)}catch(x){J(e,e.return,x)}try{$r(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),Ol(l,s);var c=Ol(l,o);for(s=0;s<a.length;s+=2){var f=a[s],d=a[s+1];f==="style"?wf(i,d):f==="dangerouslySetInnerHTML"?vf(i,d):f==="children"?Fr(i,d):Ma(i,f,d,c)}switch(l){case"input":Al(i,o);break;case"textarea":gf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Mn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(x){J(e,e.return,x)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){J(e,e.return,x)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=Z())),r&4&&Hc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||f,qe(t,e),he=c):qe(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(d=A=f;A!==null;){switch(g=A,w=g.child,g.tag){case 0:case 11:case 14:case 15:$r(4,g,g.return);break;case 1:bn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){Vc(d);continue}}w!==null?(w.return=g,A=w):Vc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=xf("display",s))}catch(x){J(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){J(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qe(t,e),ot(e),r&4&&Hc(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var o=Uc(e);da(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Uc(e);ca(e,l,s);break;default:throw Error(R(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e,t,n){A=e,Kp(e)}function Kp(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Li;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||he;l=Li;var c=he;if(Li=s,(he=a)&&!c)for(A=i;A!==null;)s=A,a=s.child,s.tag===22&&s.memoizedState!==null?Gc(i):a!==null?(a.return=s,A=a):Gc(i);for(;o!==null;)A=o,Kp(o),o=o.sibling;A=i,Li=l,he=c}Wc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Wc(e)}}function Wc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Hr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}he||t.flags&512&&ua(t)}catch(g){J(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Vc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Gc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){J(t,i,a)}}var o=t.return;try{ua(t)}catch(a){J(t,o,a)}break;case 5:var s=t.return;try{ua(t)}catch(a){J(t,s,a)}}}catch(a){J(t,t.return,a)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var Fg=Math.ceil,Oo=Ct.ReactCurrentDispatcher,vu=Ct.ReactCurrentOwner,We=Ct.ReactCurrentBatchConfig,b=0,ae=null,te=null,ce=0,$e=0,Fn=Kt(0),oe=0,ei=null,yn=0,is=0,xu=0,Or=null,Se=null,wu=0,Zn=1/0,ft=null,zo=!1,fa=null,Bt=null,Ii=!1,It=null,Do=0,zr=0,pa=null,oo=-1,so=0;function ve(){return b&6?Z():oo!==-1?oo:oo=Z()}function Mt(e){return e.mode&1?b&2&&ce!==0?ce&-ce:Cg.transition!==null?(so===0&&(so=Lf()),so):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function tt(e,t,n,r){if(50<zr)throw zr=0,pa=null,Error(R(185));ai(e,n,r),(!(b&2)||e!==ae)&&(e===ae&&(!(b&2)&&(is|=n),oe===4&&Nt(e,ce)),je(e,r),n===1&&b===0&&!(t.mode&1)&&(Zn=Z()+500,es&&qt()))}function je(e,t){var n=e.callbackNode;Cm(e,t);var r=wo(e,e===ae?ce:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?Sg(Qc.bind(null,e)):ip(Qc.bind(null,e)),yg(function(){!(b&6)&&qt()}),n=null;else{switch(If(r)){case 1:n=Ga;break;case 4:n=Af;break;case 16:n=xo;break;case 536870912:n=Nf;break;default:n=xo}n=nh(n,qp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qp(e,t){if(oo=-1,so=0,b&6)throw Error(R(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=wo(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var i=b;b|=2;var o=Xp();(ae!==e||ce!==t)&&(ft=null,Zn=Z()+500,cn(e,t));do try{Ug();break}catch(l){Yp(e,l)}while(!0);ou(),Oo.current=o,b=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=Bl(e),i!==0&&(r=i,t=ha(e,i))),t===1)throw n=ei,cn(e,0),Nt(e,r),je(e,Z()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bg(i)&&(t=bo(e,r),t===2&&(o=Bl(e),o!==0&&(r=o,t=ha(e,o))),t===1))throw n=ei,cn(e,0),Nt(e,r),je(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:rn(e,Se,ft);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=wu+500-Z(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(rn.bind(null,e,Se,ft),t);break}rn(e,Se,ft);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fg(r/1960))-r,10<r){e.timeoutHandle=Kl(rn.bind(null,e,Se,ft),r);break}rn(e,Se,ft);break;case 5:rn(e,Se,ft);break;default:throw Error(R(329))}}}return je(e,Z()),e.callbackNode===n?qp.bind(null,e):null}function ha(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=Se,Se=n,t!==null&&ma(t)),e}function ma(e){Se===null?Se=e:Se.push.apply(Se,e)}function Bg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~xu,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(b&6)throw Error(R(327));Gn();var t=wo(e,0);if(!(t&1))return je(e,Z()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=Bl(e);r!==0&&(t=r,n=ha(e,r))}if(n===1)throw n=ei,cn(e,0),Nt(e,t),je(e,Z()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Se,ft),je(e,Z()),null}function Su(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Zn=Z()+500,es&&qt())}}function vn(e){It!==null&&It.tag===0&&!(b&6)&&Gn();var t=b;b|=1;var n=We.transition,r=M;try{if(We.transition=null,M=1,e)return e()}finally{M=r,We.transition=n,b=t,!(b&6)&&qt()}}function Cu(){$e=Fn.current,Q(Fn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gg(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Xn(),Q(ke),Q(ge),du();break;case 5:cu(r);break;case 4:Xn();break;case 13:Q(q);break;case 19:Q(q);break;case 10:su(r.type._context);break;case 22:case 23:Cu()}n=n.return}if(ae=e,te=e=Ut(e.current,null),ce=$e=t,oe=0,ei=null,xu=is=yn=0,Se=Or=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}sn=null}return e}function Yp(e,t){do{var n=te;try{if(ou(),no.current=$o,Io){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Io=!1}if(gn=0,se=ie=Y=null,Ir=!1,Xr=0,vu.current=null,n===null||n.return===null){oe=1,ei=t,te=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=$c(s);if(w!==null){w.flags&=-257,Oc(w,s,l,o,t),w.mode&1&&Ic(o,c,t),t=w,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Ic(o,c,t),ku();break e}a=Error(R(426))}}else if(K&&l.mode&1){var C=$c(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Oc(C,s,l,o,t),ru(Jn(a,l));break e}}o=a=Jn(a,l),oe!==4&&(oe=2),Or===null?Or=[o]:Or.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Ip(o,a,t);Rc(o,h);break e;case 1:l=a;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=$p(o,l,t);Rc(o,S);break e}}o=o.return}while(o!==null)}Zp(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Xp(){var e=Oo.current;return Oo.current=$o,e===null?$o:e}function ku(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(yn&268435455)&&!(is&268435455)||Nt(ae,ce)}function bo(e,t){var n=b;b|=2;var r=Xp();(ae!==e||ce!==t)&&(ft=null,cn(e,t));do try{Mg();break}catch(i){Yp(e,i)}while(!0);if(ou(),b=n,Oo.current=r,te!==null)throw Error(R(261));return ae=null,ce=0,oe}function Mg(){for(;te!==null;)Jp(te)}function Ug(){for(;te!==null&&!pm();)Jp(te)}function Jp(e){var t=th(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Zp(e):te=t,vu.current=null}function Zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Og(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=$g(n,t,$e),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function rn(e,t,n){var r=M,i=We.transition;try{We.transition=null,M=1,Hg(e,t,n,r)}finally{We.transition=i,M=r}return null}function Hg(e,t,n,r){do Gn();while(It!==null);if(b&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(km(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,nh(xo,function(){return Gn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var s=M;M=1;var l=b;b|=4,vu.current=null,Dg(e,n),Qp(n,e),ug(Gl),So=!!Vl,Gl=Vl=null,e.current=n,bg(n),hm(),b=l,M=s,We.transition=o}else e.current=n;if(Ii&&(Ii=!1,It=e,Do=i),o=e.pendingLanes,o===0&&(Bt=null),ym(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=fa,fa=null,e;return Do&1&&e.tag!==0&&Gn(),o=e.pendingLanes,o&1?e===pa?zr++:(zr=0,pa=e):zr=0,qt(),null}function Gn(){if(It!==null){var e=If(Do),t=We.transition,n=M;try{if(We.transition=null,M=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,Do=0,b&6)throw Error(R(331));var i=b;for(b|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(A=c;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:$r(8,f,o)}var d=f.child;if(d!==null)d.return=f,A=d;else for(;A!==null;){f=A;var g=f.sibling,w=f.return;if(Wp(f),f===c){A=null;break}if(g!==null){g.return=w,A=g;break}A=w}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$r(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var p=e.current;for(A=p;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=p;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rs(9,l)}}catch(E){J(l,l.return,E)}if(l===s){A=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,A=S;break e}A=l.return}}if(b=i,qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{M=n,We.transition=t}}return!1}function Kc(e,t,n){t=Jn(n,t),t=Ip(e,t,1),e=Ft(e,t,1),t=ve(),e!==null&&(ai(e,1,t),je(e,t))}function J(e,t,n){if(e.tag===3)Kc(e,e,n);else for(;t!==null;){if(t.tag===3){Kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Jn(n,e),e=$p(t,e,1),t=Ft(t,e,1),e=ve(),t!==null&&(ai(t,1,e),je(t,e));break}}t=t.return}}function Wg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>Z()-wu?cn(e,0):xu|=n),je(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=ve();e=wt(e,t),e!==null&&(ai(e,t,n),je(e,n))}function Vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function Gg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Ig(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&op(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var i=Kn(t,ge.current);Vn(t,n),i=pu(null,t,r,e,i,n);var o=hu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,Po(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,au(t),i.updater=ns,t.stateNode=i,i._reactInternals=t,ta(t,r,e,n),t=ia(null,t,r,!0,o,n)):(t.tag=0,K&&o&&tu(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Kg(r),e=Ye(r,e),i){case 0:t=ra(null,t,r,e,n);break e;case 1:t=bc(null,t,r,e,n);break e;case 11:t=zc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,Ye(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),bc(e,t,r,i,n);case 3:e:{if(bp(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dp(e,t),No(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jn(Error(R(423)),t),t=Fc(e,t,r,n,i);break e}else if(r!==i){i=Jn(Error(R(424)),t),t=Fc(e,t,r,n,i);break e}else for(Oe=bt(t.stateNode.containerInfo.firstChild),ze=t,K=!0,Je=null,n=up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){t=St(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return fp(t),e===null&&Jl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ql(r,i)?s=null:o!==null&&Ql(r,o)&&(t.flags|=32),Dp(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return Fp(e,t,n);case 4:return uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),zc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(_o,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!ke.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=yt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vn(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Dc(e,t,r,i,n);case 15:return Op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),io(e,t),t.tag=1,Ee(r)?(e=!0,Po(t)):e=!1,Vn(t,n),Lp(t,r,i),ta(t,r,i,n),ia(null,t,r,!0,e,n);case 19:return Bp(e,t,n);case 22:return zp(e,t,n)}throw Error(R(156,t.tag))};function nh(e,t){return _f(e,t)}function Qg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Qg(e,t,n,r)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kg(e){if(typeof e=="function")return Eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ha)return 11;if(e===Wa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _n:return dn(n.children,i,o,t);case Ua:s=8,i|=8;break;case jl:return e=He(12,n,t,i|2),e.elementType=jl,e.lanes=o,e;case Pl:return e=He(13,n,t,i),e.elementType=Pl,e.lanes=o,e;case Rl:return e=He(19,n,t,i),e.elementType=Rl,e.lanes=o,e;case ff:return os(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:s=10;break e;case df:s=9;break e;case Ha:s=11;break e;case Wa:s=14;break e;case Tt:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function os(e,t,n,r){return e=He(22,e,r,t),e.elementType=ff,e.lanes=n,e.stateNode={isHidden:!1},e}function Xs(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Js(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ls(0),this.expirationTimes=Ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ls(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,i,o,s,l,a){return e=new qg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(o),e}function Yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return Gt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ee(n))return rp(e,n,t)}return t}function ih(e,t,n,r,i,o,s,l,a){return e=ju(n,r,!0,e,i,o,s,l,a),e.context=rh(null),n=e.current,r=ve(),i=Mt(n),o=yt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,ai(e,i,r),je(e,r),e}function ss(e,t,n,r){var i=t.current,o=ve(),s=Mt(i);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(tt(e,i,s,o),to(e,i,s)),s}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pu(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}function Xg(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}ls.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ss(e,t,null,null)};ls.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){ss(null,e,null,null)}),t[xt]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&bf(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yc(){}function Jg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Fo(s);o.call(c)}}var s=ih(t,r,e,0,null,!1,!1,"",Yc);return e._reactRootContainer=s,e[xt]=s.current,Gr(e.nodeType===8?e.parentNode:e),vn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Fo(a);l.call(c)}}var a=ju(e,0,!1,null,null,!1,!1,"",Yc);return e._reactRootContainer=a,e[xt]=a.current,Gr(e.nodeType===8?e.parentNode:e),vn(function(){ss(t,a,n,r)}),a}function us(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Fo(s);l.call(a)}}ss(t,s,e,i)}else s=Jg(n,t,e,i,r);return Fo(s)}$f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(Qa(t,n|1),je(t,Z()),!(b&6)&&(Zn=Z()+500,qt()))}break;case 13:vn(function(){var r=wt(e,1);if(r!==null){var i=ve();tt(r,e,1,i)}}),Pu(e,1)}};Ka=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=ve();tt(t,e,134217728,n)}Pu(e,134217728)}};Of=function(e){if(e.tag===13){var t=Mt(e),n=wt(e,t);if(n!==null){var r=ve();tt(n,e,t,r)}Pu(e,t)}};zf=function(){return M};Df=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Dl=function(e,t,n){switch(t){case"input":if(Al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(R(90));hf(r),Al(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};kf=Su;Ef=vn;var Zg={usingClientEntryPoint:!1,Events:[ci,In,Zo,Sf,Cf,Su]},Sr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rf(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{qo=$i.inject(e1),ut=$i}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(R(200));return Yg(e,t,null,n)};Fe.createRoot=function(e,t){if(!Tu(e))throw Error(R(299));var n=!1,r="",i=oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Ru(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Rf(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return vn(e)};Fe.hydrate=function(e,t,n){if(!as(t))throw Error(R(200));return us(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ih(t,null,e,1,n??null,i,!1,o,s),e[xt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ls(t)};Fe.render=function(e,t,n){if(!as(t))throw Error(R(200));return us(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!as(e))throw Error(R(40));return e._reactRootContainer?(vn(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Fe.unstable_batchedUpdates=Su;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!as(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return us(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),sf.exports=Fe;var t1=sf.exports,Xc=t1;kl.createRoot=Xc.createRoot,kl.hydrateRoot=Xc.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function ti(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",Dr="-moz-",F="-webkit-",lh="comm",cs="rule",_u="decl",n1="@import",ah="@keyframes",r1="@layer",uh=Math.abs,Au=String.fromCharCode,ga=Object.assign;function i1(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function ch(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ao(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function er(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function dh(e){return e.length}function Rr(e,t){return t.push(e),e}function o1(e,t){return e.map(t).join("")}function Jc(e,t){return e.filter(function(n){return!pt(n,t)})}var ds=1,tr=1,fh=0,Qe=0,ee=0,ar="";function fs(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ds,column:tr,length:s,return:"",siblings:l}}function Rt(e,t){return ga(fs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Rt(e.root,{children:[e]});Rr(e,e.siblings)}function s1(){return ee}function l1(){return ee=Qe>0?le(ar,--Qe):0,tr--,ee===10&&(tr=1,ds--),ee}function nt(){return ee=Qe<fh?le(ar,Qe++):0,tr++,ee===10&&(tr=1,ds++),ee}function fn(){return le(ar,Qe)}function uo(){return Qe}function ps(e,t){return er(ar,e,t)}function ya(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a1(e){return ds=tr=1,fh=lt(ar=e),Qe=0,[]}function u1(e){return ar="",e}function Zs(e){return ch(ps(Qe-1,va(e===91?e+2:e===40?e+1:e)))}function c1(e){for(;(ee=fn())&&ee<33;)nt();return ya(e)>2||ya(ee)>3?"":" "}function d1(e,t){for(;--t&&nt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return ps(e,uo()+(t<6&&fn()==32&&nt()==32))}function va(e){for(;nt();)switch(ee){case e:return Qe;case 34:case 39:e!==34&&e!==39&&va(ee);break;case 40:e===41&&va(e);break;case 92:nt();break}return Qe}function f1(e,t){for(;nt()&&e+ee!==57;)if(e+ee===84&&fn()===47)break;return"/*"+ps(t,Qe-1)+"*"+Au(e===47?e:nt())}function p1(e){for(;!ya(fn());)nt();return ps(e,Qe)}function h1(e){return u1(co("",null,null,null,[""],e=a1(e),0,[0],e))}function co(e,t,n,r,i,o,s,l,a){for(var c=0,f=0,d=s,g=0,w=0,v=0,x=1,C=1,h=1,p=0,m="",S=i,E=o,P=r,j=m;C;)switch(v=p,p=nt()){case 40:if(v!=108&&le(j,d-1)==58){ao(j+=O(Zs(p),"&","&\f"),"&\f",uh(c?l[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Zs(p);break;case 9:case 10:case 13:case 32:j+=c1(v);break;case 92:j+=d1(uo()-1,7);continue;case 47:switch(fn()){case 42:case 47:Rr(m1(f1(nt(),uo()),t,n,a),a);break;default:j+="/"}break;case 123*x:l[c++]=lt(j)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+f:h==-1&&(j=O(j,/\f/g,"")),w>0&&lt(j)-d&&Rr(w>32?ed(j+";",r,n,d-1,a):ed(O(j," ","")+";",r,n,d-2,a),a);break;case 59:j+=";";default:if(Rr(P=Zc(j,t,n,c,f,i,l,m,S=[],E=[],d,o),o),p===123)if(f===0)co(j,t,P,P,S,o,d,l,E);else switch(g===99&&le(j,3)===110?100:g){case 100:case 108:case 109:case 115:co(e,P,P,r&&Rr(Zc(e,P,P,0,0,i,l,m,i,S=[],d,E),E),i,E,d,l,r?S:E);break;default:co(j,P,P,P,[""],E,0,l,E)}}c=f=w=0,x=h=1,m=j="",d=s;break;case 58:d=1+lt(j),w=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&l1()==125)continue}switch(j+=Au(p),p*x){case 38:h=f>0?1:(j+="\f",-1);break;case 44:l[c++]=(lt(j)-1)*h,h=1;break;case 64:fn()===45&&(j+=Zs(nt())),g=fn(),f=d=lt(m=j+=p1(uo())),p++;break;case 45:v===45&&lt(j)==2&&(x=0)}}return o}function Zc(e,t,n,r,i,o,s,l,a,c,f,d){for(var g=i-1,w=i===0?o:[""],v=dh(w),x=0,C=0,h=0;x<r;++x)for(var p=0,m=er(e,g+1,g=uh(C=s[x])),S=e;p<v;++p)(S=ch(C>0?w[p]+" "+m:O(m,/&\f/g,w[p])))&&(a[h++]=S);return fs(e,t,n,i===0?cs:l,a,c,f,d)}function m1(e,t,n,r){return fs(e,t,n,lh,Au(s1()),er(e,2,-2),0,r)}function ed(e,t,n,r,i){return fs(e,t,n,_u,er(e,0,r),er(e,r+1,-1),r,i)}function ph(e,t,n){switch(i1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Dr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Dr+e+G+e+e;case 5936:switch(le(e,t+11)){case 114:return F+e+G+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+G+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+G+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+G+e+e;case 6165:return F+e+G+"flex-"+e+e;case 5187:return F+e+O(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return F+e+G+"flex-item-"+O(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":G+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return F+e+G+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+G+O(e,"shrink","negative")+e;case 5292:return F+e+G+O(e,"basis","preferred-size")+e;case 6060:return F+"box-"+O(e,"-grow","")+F+e+G+O(e,"grow","positive")+e;case 4554:return F+O(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!pt(e,/flex-|baseline/))return G+"grid-column-align"+er(e,t)+e;break;case 2592:case 3360:return G+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pt(r.props,/grid-\w+-end/)})?~ao(e+(n=n[t].value),"span",0)?e:G+O(e,"-start","")+e+G+"grid-row-span:"+(~ao(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":G+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:G+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Dr+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ao(e,"stretch",0)?ph(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,c){return G+i+":"+o+c+(s?G+i+"-span:"+(l?a:+a-+o)+c:"")+e});case 4949:if(le(e,t+6)===121)return O(e,":",":"+F)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(le(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+G+"$2box$3")+e;case 100:return O(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Bo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function g1(e,t,n,r){switch(e.type){case r1:if(e.children.length)break;case n1:case _u:return e.return=e.return||e.value;case lh:return"";case ah:return e.return=e.value+"{"+Bo(e.children,r)+"}";case cs:if(!lt(e.value=e.props.join(",")))return""}return lt(n=Bo(e.children,r))?e.return=e.value+"{"+n+"}":""}function y1(e){var t=dh(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function v1(e){return function(t){t.root||(t=t.return)&&e(t)}}function x1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _u:e.return=ph(e.value,e.length,n);return;case ah:return Bo([Rt(e,{value:O(e.value,"@","@"+F)})],r);case cs:if(e.length)return o1(n=e.props,function(i){switch(pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Rt(e,{props:[O(i,/:(read-\w+)/,":"+Dr+"$1")]})),jn(Rt(e,{props:[i]})),ga(e,{props:Jc(n,r)});break;case"::placeholder":jn(Rt(e,{props:[O(i,/:(plac\w+)/,":"+F+"input-$1")]})),jn(Rt(e,{props:[O(i,/:(plac\w+)/,":"+Dr+"$1")]})),jn(Rt(e,{props:[O(i,/:(plac\w+)/,G+"input-$1")]})),jn(Rt(e,{props:[i]})),ga(e,{props:Jc(n,r)});break}return""})}}var w1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie={},nr=typeof process<"u"&&Ie!==void 0&&(Ie.REACT_APP_SC_ATTR||Ie.SC_ATTR)||"data-styled",hh="active",mh="data-styled-version",hs="6.1.12",Nu=`/*!sc*/
`,Mo=typeof window<"u"&&"HTMLElement"in window,S1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==""?Ie.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ie.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.SC_DISABLE_SPEEDY!==void 0&&Ie.SC_DISABLE_SPEEDY!==""&&Ie.SC_DISABLE_SPEEDY!=="false"&&Ie.SC_DISABLE_SPEEDY),C1={},ms=Object.freeze([]),rr=Object.freeze({});function gh(e,t,n){return n===void 0&&(n=rr),e.theme!==n.theme&&e.theme||t||n.theme}var yh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),k1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,E1=/(^-|-$)/g;function td(e){return e.replace(k1,"-").replace(E1,"")}var j1=/(a)(d)/gi,Oi=52,nd=function(e){return String.fromCharCode(e+(e>25?39:97))};function xa(e){var t,n="";for(t=Math.abs(e);t>Oi;t=t/Oi|0)n=nd(t%Oi)+n;return(nd(t%Oi)+n).replace(j1,"$1-$2")}var el,vh=5381,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xh=function(e){return Bn(vh,e)};function wh(e){return xa(xh(e)>>>0)}function P1(e){return e.displayName||e.name||"Component"}function tl(e){return typeof e=="string"&&!0}var Sh=typeof Symbol=="function"&&Symbol.for,Ch=Sh?Symbol.for("react.memo"):60115,R1=Sh?Symbol.for("react.forward_ref"):60112,T1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A1=((el={})[R1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[Ch]=kh,el);function rd(e){return("type"in(t=e)&&t.type.$$typeof)===Ch?kh:"$$typeof"in e?A1[e.$$typeof]:T1;var t}var N1=Object.defineProperty,L1=Object.getOwnPropertyNames,id=Object.getOwnPropertySymbols,I1=Object.getOwnPropertyDescriptor,$1=Object.getPrototypeOf,od=Object.prototype;function Eh(e,t,n){if(typeof t!="string"){if(od){var r=$1(t);r&&r!==od&&Eh(e,r,n)}var i=L1(t);id&&(i=i.concat(id(t)));for(var o=rd(e),s=rd(t),l=0;l<i.length;++l){var a=i[l];if(!(a in _1||n&&n[a]||s&&a in s||o&&a in o)){var c=I1(t,a);try{N1(e,a,c)}catch{}}}}return e}function ir(e){return typeof e=="function"}function Lu(e){return typeof e=="object"&&"styledComponentId"in e}function an(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ni(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sa(e,t,n){if(n===void 0&&(n=!1),!n&&!ni(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sa(e[r],t[r]);else if(ni(t))for(var r in t)e[r]=Sa(e[r],t[r]);return e}function Iu(e,t){Object.defineProperty(e,"toString",{value:t})}function fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw fi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Nu);return n},e}(),fo=new Map,Uo=new Map,po=1,zi=function(e){if(fo.has(e))return fo.get(e);for(;Uo.has(po);)po++;var t=po++;return fo.set(e,t),Uo.set(t,e),t},z1=function(e,t){po=t+1,fo.set(e,t),Uo.set(t,e)},D1="style[".concat(nr,"][").concat(mh,'="').concat(hs,'"]'),b1=new RegExp("^".concat(nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F1=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},B1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Nu),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(b1);if(a){var c=0|parseInt(a[1],10),f=a[2];c!==0&&(z1(f,c),F1(e,f,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},sd=function(e){for(var t=document.querySelectorAll(D1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(nr)!==hh&&(B1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function M1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(nr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(nr,hh),r.setAttribute(mh,hs);var s=M1();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},U1=function(){function e(t){this.element=jh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw fi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),H1=function(){function e(t){this.element=jh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),W1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ld=Mo,V1={isServer:!Mo,useCSSOMInjection:!S1},Ho=function(){function e(t,n,r){t===void 0&&(t=rr),n===void 0&&(n={});var i=this;this.options=me(me({},V1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mo&&ld&&(ld=!1,sd(this)),Iu(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",c=function(d){var g=function(h){return Uo.get(h)}(d);if(g===void 0)return"continue";var w=o.names.get(g),v=s.getGroup(d);if(w===void 0||!w.size||v.length===0)return"continue";var x="".concat(nr,".g").concat(d,'[id="').concat(g,'"]'),C="";w!==void 0&&w.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(v).concat(x,'{content:"').concat(C,'"}').concat(Nu)},f=0;f<l;f++)c(f);return a}(i)})}return e.registerId=function(t){return zi(t)},e.prototype.rehydrate=function(){!this.server&&Mo&&sd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new W1(i):r?new U1(i):new H1(i)}(this.options),new O1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(zi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(zi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),G1=/&/g,Q1=/^\s*\/\/.*$/gm;function Ph(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ph(n.children,t)),n})}function K1(e){var t,n,r,i=rr,o=i.options,s=o===void 0?rr:o,l=i.plugins,a=l===void 0?ms:l,c=function(g,w,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},f=a.slice();f.push(function(g){g.type===cs&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(G1,n).replace(r,c))}),s.prefix&&f.push(x1),f.push(g1);var d=function(g,w,v,x){w===void 0&&(w=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(Q1,""),h=h1(v||w?"".concat(v," ").concat(w," { ").concat(C," }"):C);s.namespace&&(h=Ph(h,s.namespace));var p=[];return Bo(h,y1(f.concat(v1(function(m){return p.push(m)})))),p};return d.hash=a.length?a.reduce(function(g,w){return w.name||fi(15),Bn(g,w.name)},vh).toString():"",d}var q1=new Ho,Ca=K1(),Rh=Ze.createContext({shouldForwardProp:void 0,styleSheet:q1,stylis:Ca});Rh.Consumer;Ze.createContext(void 0);function ka(){return T.useContext(Rh)}var Y1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ca);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Iu(this,function(){throw fi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ca),this.name+t.hash},e}(),X1=function(e){return e>="A"&&e<="Z"};function ad(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;X1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Th=function(e){return e==null||e===!1||e===""},_h=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Th(o)&&(Array.isArray(o)&&o.isCss||ir(o)?r.push("".concat(ad(i),":"),o,";"):ni(o)?r.push.apply(r,ti(ti(["".concat(i," {")],_h(o),!1),["}"],!1)):r.push("".concat(ad(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in w1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ht(e,t,n,r){if(Th(e))return[];if(Lu(e))return[".".concat(e.styledComponentId)];if(ir(e)){if(!ir(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ht(i,t,n,r)}var o;return e instanceof Y1?n?(e.inject(n,r),[e.getName(r)]):[e]:ni(e)?_h(e):Array.isArray(e)?Array.prototype.concat.apply(ms,e.map(function(s){return Ht(s,t,n,r)})):[e.toString()]}function Ah(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ir(n)&&!Lu(n))return!1}return!0}var J1=xh(hs),Z1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ah(t),this.componentId=n,this.baseHash=Bn(J1,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=an(i,this.staticRulesId);else{var o=wa(Ht(this.rules,t,n,r)),s=xa(Bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=an(i,s),this.staticRulesId=s}else{for(var a=Bn(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var g=wa(Ht(d,t,n,r));a=Bn(a,g+f),c+=g}}if(c){var w=xa(a>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=an(i,w)}}return i},e}(),$u=Ze.createContext(void 0);$u.Consumer;var nl={};function ey(e,t,n){var r=Lu(e),i=e,o=!tl(e),s=t.attrs,l=s===void 0?ms:s,a=t.componentId,c=a===void 0?function(S,E){var P=typeof S!="string"?"sc":td(S);nl[P]=(nl[P]||0)+1;var j="".concat(P,"-").concat(wh(hs+P+nl[P]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):a,f=t.displayName,d=f===void 0?function(S){return tl(S)?"styled.".concat(S):"Styled(".concat(P1(S),")")}(e):f,g=t.displayName&&t.componentId?"".concat(td(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,E){return x(S,E)&&C(S,E)}}else v=x}var h=new Z1(n,g,r?i.componentStyle:void 0);function p(S,E){return function(P,j,N){var B=P.attrs,z=P.componentStyle,Te=P.defaultProps,Xt=P.foldedComponentIds,Jt=P.styledComponentId,gi=P.target,js=Ze.useContext($u),fr=ka(),Zt=P.shouldForwardProp||fr.shouldForwardProp,_=gh(j,js,Te)||rr,L=function(kt,_e,dt){for(var pr,tn=me(me({},_e),{className:void 0,theme:dt}),Ps=0;Ps<kt.length;Ps+=1){var yi=ir(pr=kt[Ps])?pr(tn):pr;for(var Et in yi)tn[Et]=Et==="className"?an(tn[Et],yi[Et]):Et==="style"?me(me({},tn[Et]),yi[Et]):yi[Et]}return _e.className&&(tn.className=an(tn.className,_e.className)),tn}(B,j,_),I=L.as||gi,U={};for(var H in L)L[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&L.theme===_||(H==="forwardedAs"?U.as=L.forwardedAs:Zt&&!Zt(H,I)||(U[H]=L[H]));var en=function(kt,_e){var dt=ka(),pr=kt.generateAndInjectStyles(_e,dt.styleSheet,dt.stylis);return pr}(z,L),Ke=an(Xt,Jt);return en&&(Ke+=" "+en),L.className&&(Ke+=" "+L.className),U[tl(I)&&!yh.has(I)?"class":"className"]=Ke,U.ref=N,T.createElement(I,U)}(m,S,E)}p.displayName=d;var m=Ze.forwardRef(p);return m.attrs=w,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?an(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var P=[],j=1;j<arguments.length;j++)P[j-1]=arguments[j];for(var N=0,B=P;N<B.length;N++)Sa(E,B[N],!0);return E}({},i.defaultProps,S):S}}),Iu(m,function(){return".".concat(m.styledComponentId)}),o&&Eh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ud(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var cd=function(e){return Object.assign(e,{isCss:!0})};function Nh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ir(e)||ni(e))return cd(Ht(ud(ms,ti([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ht(r):cd(Ht(ud(r,t)))}function Ea(e,t,n){if(n===void 0&&(n=rr),!t)throw fi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Nh.apply(void 0,ti([i],o,!1)))};return r.attrs=function(i){return Ea(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ea(e,t,me(me({},n),i))},r}var Lh=function(e){return Ea(ey,e)},y=Lh;yh.forEach(function(e){y[e]=Lh(e)});var ty=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ah(t),Ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(wa(Ht(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ih(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Nh.apply(void 0,ti([e],t,!1)),i="sc-global-".concat(wh(JSON.stringify(r))),o=new ty(r,i),s=function(a){var c=ka(),f=Ze.useContext($u),d=Ze.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(d,a,c.styleSheet,f,c.stylis),Ze.useLayoutEffect(function(){if(!c.styleSheet.server)return l(d,a,c.styleSheet,f,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,a,c.styleSheet,f,c.stylis]),null};function l(a,c,f,d,g){if(o.isStatic)o.renderStyles(a,C1,f,g);else{var w=me(me({},c),{theme:gh(c,d,s.defaultProps)});o.renderStyles(a,w,f,g)}}return Ze.memo(s)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const dd="popstate";function ny(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return ja("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wo(i)}return iy(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $h(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ry(){return Math.random().toString(36).substr(2,8)}function fd(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,n,r){return n===void 0&&(n=null),ri({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||ry()})}function Wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function iy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=$t.Pop,a=null,c=f();c==null&&(c=0,s.replaceState(ri({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function d(){l=$t.Pop;let C=f(),h=C==null?null:C-c;c=C,a&&a({action:l,location:x.location,delta:h})}function g(C,h){l=$t.Push;let p=ja(x.location,C,h);c=f()+1;let m=fd(p,c),S=x.createHref(p);try{s.pushState(m,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&a&&a({action:l,location:x.location,delta:1})}function w(C,h){l=$t.Replace;let p=ja(x.location,C,h);c=f();let m=fd(p,c),S=x.createHref(p);s.replaceState(m,"",S),o&&a&&a({action:l,location:x.location,delta:0})}function v(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Wo(C);return p=p.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return l},get location(){return e(i,s)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(dd,d),a=C,()=>{i.removeEventListener(dd,d),a=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(C){return s.go(C)}};return x}var pd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pd||(pd={}));function oy(e,t,n){return n===void 0&&(n="/"),sy(e,t,n,!1)}function sy(e,t,n,r){let i=typeof t=="string"?ur(t):t,o=Ou(i.pathname||"/",n);if(o==null)return null;let s=Oh(e);ly(s);let l=null;for(let a=0;l==null&&a<s.length;++a){let c=vy(o);l=gy(s[a],c,r)}return l}function Oh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Wt([r,a.relativePath]),f=n.concat(a);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Oh(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:hy(c,o.index),routesMeta:f})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of zh(o.path))i(o,s,a)}),t}function zh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=zh(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function ly(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:my(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ay=/^:[\w-]+$/,uy=3,cy=2,dy=1,fy=10,py=-2,hd=e=>e==="*";function hy(e,t){let n=e.split("/"),r=n.length;return n.some(hd)&&(r+=py),t&&(r+=cy),n.filter(i=>!hd(i)).reduce((i,o)=>i+(ay.test(o)?uy:o===""?dy:fy),r)}function my(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gy(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],c=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=md({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),g=a.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=md({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Wt([o,d.pathname]),pathnameBase:Cy(Wt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Wt([o,d.pathnameBase]))}return s}function md(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let x=l[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[d];return w&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function yy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$h(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ou(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ur(e):e;return{pathname:n?n.startsWith("/")?n:wy(n,t):t,search:ky(r),hash:Ey(i)}}function wy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dh(e,t){let n=Sy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ur(e):(i=ri({},e),ne(!i.pathname||!i.pathname.includes("?"),rl("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),rl("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),rl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let a=xy(i,l),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Cy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ky=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ey=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fh=["post","put","patch","delete"];new Set(Fh);const Py=["get",...Fh];new Set(Py);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}const zu=T.createContext(null),Ry=T.createContext(null),Cn=T.createContext(null),gs=T.createContext(null),kn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Bh=T.createContext(null);function Ty(e,t){let{relative:n}=t===void 0?{}:t;pi()||ne(!1);let{basename:r,navigator:i}=T.useContext(Cn),{hash:o,pathname:s,search:l}=Uh(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Wt([r,s])),i.createHref({pathname:a,search:l,hash:o})}function pi(){return T.useContext(gs)!=null}function ys(){return pi()||ne(!1),T.useContext(gs).location}function Mh(e){T.useContext(Cn).static||T.useLayoutEffect(e)}function Du(){let{isDataRoute:e}=T.useContext(kn);return e?My():_y()}function _y(){pi()||ne(!1);let e=T.useContext(zu),{basename:t,future:n,navigator:r}=T.useContext(Cn),{matches:i}=T.useContext(kn),{pathname:o}=ys(),s=JSON.stringify(Dh(i,n.v7_relativeSplatPath)),l=T.useRef(!1);return Mh(()=>{l.current=!0}),T.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=bh(c,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Wt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,s,o,e])}function Uh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Cn),{matches:i}=T.useContext(kn),{pathname:o}=ys(),s=JSON.stringify(Dh(i,r.v7_relativeSplatPath));return T.useMemo(()=>bh(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Ay(e,t){return Ny(e,t)}function Ny(e,t,n,r){pi()||ne(!1);let{navigator:i}=T.useContext(Cn),{matches:o}=T.useContext(kn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=ys(),f;if(t){var d;let C=typeof t=="string"?ur(t):t;a==="/"||(d=C.pathname)!=null&&d.startsWith(a)||ne(!1),f=C}else f=c;let g=f.pathname||"/",w=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=oy(e,{pathname:w}),x=zy(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Wt([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Wt([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&x?T.createElement(gs.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:$t.Pop}},x):x}function Ly(){let e=By(),t=jy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const Iy=T.createElement(Ly,null);class $y extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(kn.Provider,{value:this.props.routeContext},T.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(zu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(kn.Provider,{value:t},r)}function zy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||ne(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:g,errors:w}=n,v=d.route.loader&&g[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){a=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,d,g)=>{let w,v=!1,x=null,C=null;n&&(w=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||Iy,a&&(c<0&&g===0?(v=!0,C=null):c===g&&(v=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,g+1)),p=()=>{let m;return w?m=x:v?m=C:d.route.Component?m=T.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,T.createElement(Oy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?T.createElement($y,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hh||{}),Vo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vo||{});function Dy(e){let t=T.useContext(zu);return t||ne(!1),t}function by(e){let t=T.useContext(Ry);return t||ne(!1),t}function Fy(e){let t=T.useContext(kn);return t||ne(!1),t}function Wh(e){let t=Fy(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function By(){var e;let t=T.useContext(Bh),n=by(Vo.UseRouteError),r=Wh(Vo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function My(){let{router:e}=Dy(Hh.UseNavigateStable),t=Wh(Vo.UseNavigateStable),n=T.useRef(!1);return Mh(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ii({fromRouteId:t},o)))},[e,t])}function oi(e){ne(!1)}function Uy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:s=!1,future:l}=e;pi()&&ne(!1);let a=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:a,navigator:o,static:s,future:ii({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=ur(r));let{pathname:f="/",search:d="",hash:g="",state:w=null,key:v="default"}=r,x=T.useMemo(()=>{let C=Ou(f,a);return C==null?null:{location:{pathname:C,search:d,hash:g,state:w,key:v},navigationType:i}},[a,f,d,g,w,v,i]);return x==null?null:T.createElement(Cn.Provider,{value:c},T.createElement(gs.Provider,{children:n,value:x}))}function Vh(e){let{children:t,location:n}=e;return Ay(Pa(t),n)}new Promise(()=>{});function Pa(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Pa(r.props.children,o));return}r.type!==oi&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}function Hy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vy(e,t){return e.button===0&&(!t||t==="_self")&&!Wy(e)}const Gy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Qy="6";try{window.__reactRouterVersion=Qy}catch{}const Ky="startTransition",gd=W0[Ky];function qy(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=ny({window:i,v5Compat:!0}));let s=o.current,[l,a]=T.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=T.useCallback(d=>{c&&gd?gd(()=>a(d)):a(d)},[a,c]);return T.useLayoutEffect(()=>s.listen(f),[s,f]),T.createElement(Uy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Yy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gh=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:c,preventScrollReset:f,unstable_viewTransition:d}=t,g=Hy(t,Gy),{basename:w}=T.useContext(Cn),v,x=!1;if(typeof c=="string"&&Xy.test(c)&&(v=c,Yy))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=Ou(S.pathname,w);S.origin===m.origin&&E!=null?c=E+S.search+S.hash:x=!0}catch{}let C=Ty(c,{relative:i}),h=Jy(c,{replace:s,state:l,target:a,preventScrollReset:f,relative:i,unstable_viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return T.createElement("a",Ra({},g,{href:v||C,onClick:x||o?r:p,ref:n,target:a}))});var yd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yd||(yd={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function Jy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,a=Du(),c=ys(),f=Uh(e,{relative:s});return T.useCallback(d=>{if(Vy(d,n)){d.preventDefault();let g=r!==void 0?r:Wo(c)===Wo(f);a(e,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[c,a,f,r,i,n,e,o,s,l])}const Qh="/assets/img/NavbarLogo-CUmuBQyF.png",Zy="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic:round-menu'%3e%3cpath%20id='Vector'%20d='M5.33333%2024H26.6667C27.4%2024%2028%2023.4%2028%2022.6667C28%2021.9333%2027.4%2021.3333%2026.6667%2021.3333H5.33333C4.6%2021.3333%204%2021.9333%204%2022.6667C4%2023.4%204.6%2024%205.33333%2024ZM5.33333%2017.3333H26.6667C27.4%2017.3333%2028%2016.7333%2028%2016C28%2015.2667%2027.4%2014.6667%2026.6667%2014.6667H5.33333C4.6%2014.6667%204%2015.2667%204%2016C4%2016.7333%204.6%2017.3333%205.33333%2017.3333ZM4%209.33333C4%2010.0667%204.6%2010.6667%205.33333%2010.6667H26.6667C27.4%2010.6667%2028%2010.0667%2028%209.33333C28%208.6%2027.4%208%2026.6667%208H5.33333C4.6%208%204%208.6%204%209.33333Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",ev=y.nav`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,tv=y.div`
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`,nv=y.img`
  height: 50px;
  cursor: pointer;
`,rv=y.h1`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin: 0 auto 0 3%;
  font-family: "Aileron-Bold";
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,iv=y.span`
  color: var(--green);
`,ov=y.button`
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
`,sv=y.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${e=>e.$isOpen?"calc(100vh - 70px)":"0"};
  background-color: #ffffff;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  box-shadow: ${e=>e.$isOpen?"0 4px 6px rgba(0, 0, 0, 0.1)":"none"};
`,lv=y.div`
  width: 100%;
  padding: 8% 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;
`,xd=y(Gh)`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-family: "Aileron-Bold";
  text-decoration: none;
  color: black;
  padding: 4% 0;
  border-bottom: 1px solid #f0f0f0;

  &:active {
    color: var(--green);
  }
`,av=y.button`
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
`,uv=()=>{const[e,t]=T.useState(!1),n=Du(),r=()=>{t(!e)},i=()=>{t(!1),n("/")},o=l=>{t(!1),n(l)},s=()=>{t(!1),n("/"),setTimeout(()=>{const l=document.getElementById("contact");l&&l.scrollIntoView({behavior:"smooth"})},100)};return u.jsxs(u.Fragment,{children:[u.jsx(ev,{children:u.jsxs(tv,{children:[u.jsx(nv,{onClick:i,src:Qh,alt:"Día Dev & Design Logo"}),u.jsxs(rv,{children:["<",u.jsx(iv,{children:"Día:"})," Dev & Design>"]}),u.jsx(ov,{onClick:r,"aria-label":"Toggle menu",children:u.jsx("img",{src:Zy,alt:"Menu"})})]})}),u.jsx(sv,{$isOpen:e,children:u.jsxs(lv,{children:[u.jsx(xd,{to:"/",onClick:()=>o("/"),children:"Home"}),u.jsx(xd,{to:"/about",onClick:()=>o("/about"),children:"About Us"}),u.jsx(av,{onClick:s,children:"Contact Us"})]})})]})},Kh="/assets/img/DevBro-BrzQ5_d1.svg",cv=y.div`
  width: 100%;
  min-height: 85vh;
  padding: 4% 5%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`,dv=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
`,Di=y.h1`
  font-size: clamp(3.2rem, 8vw, 4.8rem);
  margin: 0 0 2%;
  font-family: "Aileron-Bold";
  line-height: 1.2;
`,wd=y.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,fv=y.p`
  width: 100%;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  text-align: left;
  margin: 4% 0;
`,pv=y.button`
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
`,hv=y.div`
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
`,mv=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return u.jsxs(cv,{children:[u.jsxs(dv,{children:[u.jsxs(Di,{children:["Every-",u.jsx(wd,{children:"Día"}),". "]}),u.jsx(Di,{children:"We build."}),u.jsx(Di,{children:"We create."}),u.jsxs(Di,{children:["You ",u.jsx(wd,{children:"succeed"}),"!"]}),u.jsx(fv,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(pv,{onClick:e,children:"Contact Us"})]}),u.jsx(hv,{children:u.jsx("img",{src:Kh,alt:"Developer illustration"})})]})},qh="data:image/svg+xml,%3csvg%20width='119'%20height='96'%20viewBox='0%200%20119%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M117.318%200H1.68181C0.885686%200%200.236359%200.59896%200.236359%201.33333V94.6667C0.236359%2095.4063%200.885686%2096%201.68181%2096H117.318C118.12%2096%20118.764%2095.4063%20118.764%2094.6667V1.33333C118.764%200.59896%20118.12%200%20117.318%200ZM3.12727%202.66667H115.873V20H3.12727V2.66667ZM115.873%2093.3333H3.12727V22.6667H115.873V93.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_2'%20d='M13.9682%206.66666C11.1789%206.66666%208.90909%208.76039%208.90909%2011.3333C8.90909%2013.9063%2011.1789%2016%2013.9682%2016C16.7575%2016%2019.0273%2013.9063%2019.0273%2011.3333C19.0273%208.76039%2016.7575%206.66666%2013.9682%206.66666ZM13.9682%2013.3333C12.7712%2013.3333%2011.8%2012.4375%2011.8%2011.3333C11.8%2010.2292%2012.7712%209.33332%2013.9682%209.33332C15.1652%209.33332%2016.1364%2010.2292%2016.1364%2011.3333C16.1364%2012.4375%2015.1652%2013.3333%2013.9682%2013.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_3'%20d='M41.3754%2069.9267C41.6577%2070.1871%2042.0304%2070.3173%2042.3974%2070.3173C42.7644%2070.3173%2043.1371%2070.1871%2043.4194%2069.9267C43.984%2069.4058%2043.984%2068.5621%2043.4194%2068.0412L32.5334%2057.9996L43.4194%2047.958C43.984%2047.4372%2043.984%2046.5934%2043.4194%2046.0725C42.8548%2045.5517%2041.9401%2045.5517%2041.3754%2046.0725L29.4673%2057.0569C28.9027%2057.5777%2028.9027%2058.4214%2029.4673%2058.9424L41.3754%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_4'%20d='M75.3769%2069.9267C75.6592%2070.1871%2076.0319%2070.3173%2076.3989%2070.3173C76.7659%2070.3173%2077.1385%2070.1871%2077.4209%2069.9267L89.3289%2058.9423C89.8936%2058.4214%2089.8936%2057.5777%2089.3289%2057.0568L77.4209%2046.0724C76.8562%2045.5516%2075.9416%2045.5516%2075.3768%2046.0724C74.8122%2046.5932%2074.8122%2047.4369%2075.3768%2047.9579L86.2628%2057.9995L75.3768%2068.0411C74.8122%2068.5619%2074.8123%2069.4057%2075.3769%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_5'%20d='M49.7547%2079.2293C49.9354%2079.3022%2050.1274%2079.3335%2050.3137%2079.3335C50.8783%2079.3335%2051.4147%2079.0262%2051.6462%2078.5158L69.8156%2038.5158C70.1261%2037.8387%2069.7761%2037.0574%2069.0421%2036.771C68.3024%2036.4897%2067.461%2036.8074%2067.1505%2037.4845L48.9812%2077.4845C48.6706%2078.1616%2049.0207%2078.9429%2049.7547%2079.2293Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_6'%20d='M109.667%207.05734C109.103%206.53651%20108.188%206.53651%20107.623%207.05734L105.032%209.44801L102.44%207.05734C101.875%206.53651%20100.961%206.53651%20100.396%207.05734C99.8312%207.57816%2099.8313%208.42187%20100.396%208.9428L102.988%2011.3335L100.396%2013.7241C99.8313%2014.245%2099.8313%2015.0887%20100.396%2015.6096C100.678%2015.87%20101.051%2016.0002%20101.418%2016.0002C101.785%2016.0002%20102.158%2015.87%20102.44%2015.6096L105.032%2013.2189L107.623%2015.6096C107.906%2015.87%20108.278%2016.0002%20108.645%2016.0002C109.012%2016.0002%20109.385%2015.87%20109.667%2015.6096C110.232%2015.0888%20110.232%2014.2451%20109.667%2013.7241L107.076%2011.3335L109.667%208.9428C110.232%208.42198%20110.232%207.57827%20109.667%207.05734Z'%20fill='%23070D0D'/%3e%3c/g%3e%3c/svg%3e",Yh="/assets/img/CustomApplicationsNew-CGRyDJpo.svg",Xh="/assets/img/ProblemSolutionsNew-DGYs1PFU.svg",Jh="/assets/img/TalentIncubatorNew-Z-AuMXFv.svg",gv=y.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 6% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,yv=y.div`
  width: 100%;
  margin-bottom: 8%;
`,vv=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 5%;
  font-family: "Aileron-Bold";
`,xv=y.div`
  width: 100%;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  line-height: 2.2rem;
  
  p {
    margin: 0 0 4%;
    text-align: left;
  }
`,wv=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Sv=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,Cv=y.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
`,vs=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 6%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
`,kv=y(vs)`
  background-color: #edf3ff;
`,Ev=y(vs)`
  background-color: #fffaec;
`,jv=y(vs)`
  background-color: #f0fff4;
`,Pv=y(vs)`
  background-color: #fff5f3;
`,bi=y.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`,Fi=y.img`
  width: 100%;
  height: auto;
`,Bi=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Mi=y.h3`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 700;
  color: #77b9f3;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
`,Ui=y.p`
  font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.3px;
  margin: 0;
  color: #070d0d;
`,Rv=()=>u.jsxs(gv,{children:[u.jsxs(yv,{children:[u.jsx(vv,{children:"We Are"}),u.jsxs(xv,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(wv,{children:[u.jsx(Sv,{children:"What We Do"}),u.jsxs(Cv,{children:[u.jsxs(kv,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:qh,alt:"Web Development"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Web Development"}),u.jsx(Ui,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs(Ev,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Yh,alt:"Custom Applications"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Custom Applications"}),u.jsx(Ui,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(jv,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Xh,alt:"Marketing Solutions"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Marketing"}),u.jsx(Ui,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(Pv,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Jh,alt:"Tech Talent Incubator"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Tech Incubator"}),u.jsx(Ui,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]});function Zh(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tv}=Object.prototype,{getPrototypeOf:bu}=Object,xs=(e=>t=>{const n=Tv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),it=e=>(e=e.toLowerCase(),t=>xs(t)===e),ws=e=>t=>typeof t===e,{isArray:cr}=Array,si=ws("undefined");function _v(e){return e!==null&&!si(e)&&e.constructor!==null&&!si(e.constructor)&&De(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const e0=it("ArrayBuffer");function Av(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&e0(e.buffer),t}const Nv=ws("string"),De=ws("function"),t0=ws("number"),Ss=e=>e!==null&&typeof e=="object",Lv=e=>e===!0||e===!1,ho=e=>{if(xs(e)!=="object")return!1;const t=bu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Iv=it("Date"),$v=it("File"),Ov=it("Blob"),zv=it("FileList"),Dv=e=>Ss(e)&&De(e.pipe),bv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||De(e.append)&&((t=xs(e))==="formdata"||t==="object"&&De(e.toString)&&e.toString()==="[object FormData]"))},Fv=it("URLSearchParams"),[Bv,Mv,Uv,Hv]=["ReadableStream","Request","Response","Headers"].map(it),Wv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),cr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function n0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,r0=e=>!si(e)&&e!==un;function Ta(){const{caseless:e}=r0(this)&&this||{},t={},n=(r,i)=>{const o=e&&n0(t,i)||i;ho(t[o])&&ho(r)?t[o]=Ta(t[o],r):ho(r)?t[o]=Ta({},r):cr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&hi(arguments[r],n);return t}const Vv=(e,t,n,{allOwnKeys:r}={})=>(hi(t,(i,o)=>{n&&De(i)?e[o]=Zh(i,n):e[o]=i},{allOwnKeys:r}),e),Gv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qv=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Kv=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&bu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Yv=e=>{if(!e)return null;if(cr(e))return e;let t=e.length;if(!t0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&bu(Uint8Array)),Jv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Zv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ex=it("HTMLFormElement"),tx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Sd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nx=it("RegExp"),i0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};hi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},rx=e=>{i0(e,(t,n)=>{if(De(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(De(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ix=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return cr(e)?r(e):r(String(e).split(t)),n},ox=()=>{},sx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,il="abcdefghijklmnopqrstuvwxyz",Cd="0123456789",o0={DIGIT:Cd,ALPHA:il,ALPHA_DIGIT:il+il.toUpperCase()+Cd},lx=(e=16,t=o0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ax(e){return!!(e&&De(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ux=e=>{const t=new Array(10),n=(r,i)=>{if(Ss(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=cr(r)?[]:{};return hi(r,(s,l)=>{const a=n(s,i+1);!si(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},cx=it("AsyncFunction"),dx=e=>e&&(Ss(e)||De(e))&&De(e.then)&&De(e.catch),s0=((e,t)=>e?setImmediate:t?((n,r)=>(un.addEventListener("message",({source:i,data:o})=>{i===un&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),un.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",De(un.postMessage)),fx=typeof queueMicrotask<"u"?queueMicrotask.bind(un):typeof process<"u"&&process.nextTick||s0,k={isArray:cr,isArrayBuffer:e0,isBuffer:_v,isFormData:bv,isArrayBufferView:Av,isString:Nv,isNumber:t0,isBoolean:Lv,isObject:Ss,isPlainObject:ho,isReadableStream:Bv,isRequest:Mv,isResponse:Uv,isHeaders:Hv,isUndefined:si,isDate:Iv,isFile:$v,isBlob:Ov,isRegExp:nx,isFunction:De,isStream:Dv,isURLSearchParams:Fv,isTypedArray:Xv,isFileList:zv,forEach:hi,merge:Ta,extend:Vv,trim:Wv,stripBOM:Gv,inherits:Qv,toFlatObject:Kv,kindOf:xs,kindOfTest:it,endsWith:qv,toArray:Yv,forEachEntry:Jv,matchAll:Zv,isHTMLForm:ex,hasOwnProperty:Sd,hasOwnProp:Sd,reduceDescriptors:i0,freezeMethods:rx,toObjectSet:ix,toCamelCase:tx,noop:ox,toFiniteNumber:sx,findKey:n0,global:un,isContextDefined:r0,ALPHABET:o0,generateString:lx,isSpecCompliantForm:ax,toJSONObject:ux,isAsyncFn:cx,isThenable:dx,setImmediate:s0,asap:fx};function $(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const l0=$.prototype,a0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{a0[e]={value:e}});Object.defineProperties($,a0);Object.defineProperty(l0,"isAxiosError",{value:!0});$.from=(e,t,n,r,i,o)=>{const s=Object.create(l0);return k.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),$.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const px=null;function _a(e){return k.isPlainObject(e)||k.isArray(e)}function u0(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function kd(e,t,n){return e?e.concat(t).map(function(i,o){return i=u0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function hx(e){return k.isArray(e)&&!e.some(_a)}const mx=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Cs(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!k.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!a&&k.isBlob(v))throw new $("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,x,C){let h=v;if(v&&!C&&typeof v=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&hx(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(h=k.toArray(v)))return x=u0(x),h.forEach(function(m,S){!(k.isUndefined(m)||m===null)&&t.append(s===!0?kd([x],S,o):s===null?x:x+"[]",c(m))}),!1}return _a(v)?!0:(t.append(kd(C,x,o),c(v)),!1)}const d=[],g=Object.assign(mx,{defaultVisitor:f,convertValue:c,isVisitable:_a});function w(v,x){if(!k.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),k.forEach(v,function(h,p){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(p)?p.trim():p,x,g))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Ed(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Fu(e,t){this._pairs=[],e&&Cs(e,this,t)}const c0=Fu.prototype;c0.append=function(t,n){this._pairs.push([t,n])};c0.toString=function(t){const n=t?function(r){return t.call(this,r,Ed)}:Ed;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function gx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function d0(e,t,n){if(!t)return e;const r=n&&n.encode||gx,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Fu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const f0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yx=typeof URLSearchParams<"u"?URLSearchParams:Fu,vx=typeof FormData<"u"?FormData:null,xx=typeof Blob<"u"?Blob:null,wx={isBrowser:!0,classes:{URLSearchParams:yx,FormData:vx,Blob:xx},protocols:["http","https","file","blob","url","data"]},Bu=typeof window<"u"&&typeof document<"u",Aa=typeof navigator=="object"&&navigator||void 0,Sx=Bu&&(!Aa||["ReactNative","NativeScript","NS"].indexOf(Aa.product)<0),Cx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kx=Bu&&window.location.href||"http://localhost",Ex=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bu,hasStandardBrowserEnv:Sx,hasStandardBrowserWebWorkerEnv:Cx,navigator:Aa,origin:kx},Symbol.toStringTag,{value:"Module"})),Pe={...Ex,...wx};function jx(e,t){return Cs(e,new Pe.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Pe.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Px(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function p0(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&k.isArray(i)?i.length:s,a?(k.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!k.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&k.isArray(i[s])&&(i[s]=Rx(i[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(Px(r),i,n,0)}),n}return null}function Tx(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const mi={transitional:f0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(p0(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return jx(t,this.formSerializer).toString();if((l=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Cs(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Tx(t)):t}],transformResponse:[function(t){const n=this.transitional||mi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?$.from(l,$.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{mi.headers[e]={}});const _x=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ax=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&_x[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Pd=Symbol("internals");function Cr(e){return e&&String(e).trim().toLowerCase()}function mo(e){return e===!1||e==null?e:k.isArray(e)?e.map(mo):String(e)}function Nx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Lx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ol(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Ix(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $x(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Re{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,c){const f=Cr(a);if(!f)throw new Error("header name must be a non-empty string");const d=k.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||a]=mo(l))}const s=(l,a)=>k.forEach(l,(c,f)=>o(c,f,a));if(k.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(k.isString(t)&&(t=t.trim())&&!Lx(t))s(Ax(t),n);else if(k.isHeaders(t))for(const[l,a]of t.entries())o(a,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Nx(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ol(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Cr(s),s){const l=k.findKey(r,s);l&&(!n||ol(r,r[l],l,n))&&(delete r[l],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ol(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const s=k.findKey(r,o);if(s){n[s]=mo(i),delete n[o];return}const l=t?Ix(o):String(o).trim();l!==o&&delete n[o],n[l]=mo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Pd]=this[Pd]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Cr(s);r[l]||($x(i,s),r[l]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Re.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Re);function sl(e,t){const n=this||mi,r=t||n,i=Re.from(r.headers);let o=r.data;return k.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function h0(e){return!!(e&&e.__CANCEL__)}function dr(e,t,n){$.call(this,e??"canceled",$.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(dr,$,{__CANCEL__:!0});function m0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ox(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),f=r[o];s||(s=c),n[i]=a,r[i]=c;let d=o,g=0;for(;d!==i;)g+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const w=f&&c-f;return w?Math.round(g*1e3/w):void 0}}function Dx(e,t){let n=0,r=1e3/t,i,o;const s=(c,f=Date.now())=>{n=f,i=null,o&&(clearTimeout(o),o=null),e.apply(null,c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=r?s(c,f):(i=c,o||(o=setTimeout(()=>{o=null,s(i)},r-d)))},()=>i&&s(i)]}const Go=(e,t,n=3)=>{let r=0;const i=zx(50,250);return Dx(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,a=s-r,c=i(a),f=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:c||void 0,estimated:c&&l&&f?(l-s)/c:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},Rd=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Td=e=>(...t)=>k.asap(()=>e(...t)),bx=Pe.hasStandardBrowserEnv?function(){const t=Pe.navigator&&/(msie|trident)/i.test(Pe.navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=k.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Fx=Pe.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),k.isString(r)&&s.push("path="+r),k.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function g0(e,t){return e&&!Bx(t)?Mx(e,t):t}const _d=e=>e instanceof Re?{...e}:e;function xn(e,t){t=t||{};const n={};function r(c,f,d){return k.isPlainObject(c)&&k.isPlainObject(f)?k.merge.call({caseless:d},c,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function i(c,f,d){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function o(c,f){if(!k.isUndefined(f))return r(void 0,f)}function s(c,f){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function l(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,f)=>i(_d(c),_d(f),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,g=d(e[f],t[f],f);k.isUndefined(g)&&d!==l||(n[f]=g)}),n}const y0=e=>{const t=xn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=Re.from(s),t.url=d0(g0(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(k.isFormData(n)){if(Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[c,...f]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...f].join("; "))}}if(Pe.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&bx(t.url))){const c=i&&o&&Fx.read(o);c&&s.set(i,c)}return t},Ux=typeof XMLHttpRequest<"u",Hx=Ux&&function(e){return new Promise(function(n,r){const i=y0(e);let o=i.data;const s=Re.from(i.headers).normalize();let{responseType:l,onUploadProgress:a,onDownloadProgress:c}=i,f,d,g,w,v;function x(){w&&w(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function h(){if(!C)return;const m=Re.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:m,config:e,request:C};m0(function(j){n(j),x()},function(j){r(j),x()},E),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new $("Request aborted",$.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new $("Network Error",$.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||f0;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new $(S,E.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,C)),C=null},o===void 0&&s.setContentType(null),"setRequestHeader"in C&&k.forEach(s.toJSON(),function(S,E){C.setRequestHeader(E,S)}),k.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),l&&l!=="json"&&(C.responseType=i.responseType),c&&([g,v]=Go(c,!0),C.addEventListener("progress",g)),a&&C.upload&&([d,w]=Go(a),C.upload.addEventListener("progress",d),C.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(f=m=>{C&&(r(!m||m.type?new dr(null,e,C):m),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const p=Ox(i.url);if(p&&Pe.protocols.indexOf(p)===-1){r(new $("Unsupported protocol "+p+":",$.ERR_BAD_REQUEST,e));return}C.send(o||null)})},Wx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,l();const f=c instanceof Error?c:this.reason;r.abort(f instanceof $?f:new dr(f instanceof Error?f.message:f))}};let s=t&&setTimeout(()=>{s=null,o(new $(`timeout ${t} of ms exceeded`,$.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>k.asap(l),a}},Vx=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Gx=async function*(e,t){for await(const n of Qx(e))yield*Vx(n,t)},Qx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ad=(e,t,n,r)=>{const i=Gx(e,t);let o=0,s,l=a=>{s||(s=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:c,value:f}=await i.next();if(c){l(),a.close();return}let d=f.byteLength;if(n){let g=o+=d;n(g)}a.enqueue(new Uint8Array(f))}catch(c){throw l(c),c}},cancel(a){return l(a),i.return()}},{highWaterMark:2})},ks=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",v0=ks&&typeof ReadableStream=="function",Kx=ks&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),x0=(e,...t)=>{try{return!!e(...t)}catch{return!1}},qx=v0&&x0(()=>{let e=!1;const t=new Request(Pe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Nd=64*1024,Na=v0&&x0(()=>k.isReadableStream(new Response("").body)),Qo={stream:Na&&(e=>e.body)};ks&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Qo[t]&&(Qo[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new $(`Response type '${t}' is not supported`,$.ERR_NOT_SUPPORT,r)})})})(new Response);const Yx=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Pe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await Kx(e)).byteLength},Xx=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??Yx(t)},Jx=ks&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:c,headers:f,withCredentials:d="same-origin",fetchOptions:g}=y0(e);c=c?(c+"").toLowerCase():"text";let w=Wx([i,o&&o.toAbortSignal()],s),v;const x=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(a&&qx&&n!=="get"&&n!=="head"&&(C=await Xx(f,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(k.isFormData(r)&&(P=E.headers.get("content-type"))&&f.setContentType(P),E.body){const[j,N]=Rd(C,Go(Td(a)));r=Ad(E.body,Nd,j,N)}}k.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...g,signal:w,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let p=await fetch(v);const m=Na&&(c==="stream"||c==="response");if(Na&&(l||m&&x)){const E={};["status","statusText","headers"].forEach(B=>{E[B]=p[B]});const P=k.toFiniteNumber(p.headers.get("content-length")),[j,N]=l&&Rd(P,Go(Td(l),!0))||[];p=new Response(Ad(p.body,Nd,j,()=>{N&&N(),x&&x()}),E)}c=c||"text";let S=await Qo[k.findKey(Qo,c)||"text"](p,e);return!m&&x&&x(),await new Promise((E,P)=>{m0(E,P,{data:S,headers:Re.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(h){throw x&&x(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new $("Network Error",$.ERR_NETWORK,e,v),{cause:h.cause||h}):$.from(h,h&&h.code,e,v)}}),La={http:px,xhr:Hx,fetch:Jx};k.forEach(La,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ld=e=>`- ${e}`,Zx=e=>k.isFunction(e)||e===null||e===!1,w0={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Zx(n)&&(r=La[(s=String(n)).toLowerCase()],r===void 0))throw new $(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Ld).join(`
`):" "+Ld(o[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:La};function ll(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dr(null,e)}function Id(e){return ll(e),e.headers=Re.from(e.headers),e.data=sl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),w0.getAdapter(e.adapter||mi.adapter)(e).then(function(r){return ll(e),r.data=sl.call(e,e.transformResponse,r),r.headers=Re.from(r.headers),r},function(r){return h0(r)||(ll(e),r&&r.response&&(r.response.data=sl.call(e,e.transformResponse,r.response),r.response.headers=Re.from(r.response.headers))),Promise.reject(r)})}const S0="1.7.7",Mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $d={};Mu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+S0+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new $(i(s," has been removed"+(n?" in "+n:"")),$.ERR_DEPRECATED);return n&&!$d[s]&&($d[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function e2(e,t,n){if(typeof e!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new $("option "+o+" must be "+a,$.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $("Unknown option "+o,$.ERR_BAD_OPTION)}}const Ia={assertOptions:e2,validators:Mu},Pt=Ia.validators;class pn{constructor(t){this.defaults=t,this.interceptors={request:new jd,response:new jd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ia.assertOptions(r,{silentJSONParsing:Pt.transitional(Pt.boolean),forcedJSONParsing:Pt.transitional(Pt.boolean),clarifyTimeoutError:Pt.transitional(Pt.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:Ia.assertOptions(i,{encode:Pt.function,serialize:Pt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Re.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(a=a&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,g;if(!a){const v=[Id.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,c),g=v.length,f=Promise.resolve(n);d<g;)f=f.then(v[d++],v[d++]);return f}g=l.length;let w=n;for(d=0;d<g;){const v=l[d++],x=l[d++];try{w=v(w)}catch(C){x.call(this,C);break}}try{f=Id.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,g=c.length;d<g;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=xn(this.defaults,t);const n=g0(t.baseURL,t.url);return d0(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){pn.prototype[t]=function(n,r){return this.request(xn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(xn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}pn.prototype[t]=n(),pn.prototype[t+"Form"]=n(!0)});class Uu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new dr(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Uu(function(i){t=i}),cancel:t}}}function t2(e){return function(n){return e.apply(null,n)}}function n2(e){return k.isObject(e)&&e.isAxiosError===!0}const $a={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($a).forEach(([e,t])=>{$a[t]=e});function C0(e){const t=new pn(e),n=Zh(pn.prototype.request,t);return k.extend(n,pn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return C0(xn(e,i))},n}const re=C0(mi);re.Axios=pn;re.CanceledError=dr;re.CancelToken=Uu;re.isCancel=h0;re.VERSION=S0;re.toFormData=Cs;re.AxiosError=$;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=t2;re.isAxiosError=n2;re.mergeConfig=xn;re.AxiosHeaders=Re;re.formToJSON=e=>p0(k.isHTMLForm(e)?new FormData(e):e);re.getAdapter=w0.getAdapter;re.HttpStatusCode=$a;re.default=re;const r2="https://diapage-server.fly.dev",k0=(e,t)=>{let n=localStorage.getItem("authToken");return re.post(r2+e,t,{headers:{Authorization:`Bearer ${n}`}})},E0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9471%201.02847C24.0017%200.892169%2024.015%200.742859%2023.9855%200.599044C23.956%200.45523%2023.885%200.323236%2023.7812%200.219426C23.6774%200.115616%2023.5454%200.0445561%2023.4015%200.0150549C23.2577%20-0.0144463%2023.1084%20-0.00109103%2022.9721%200.053465L1.15162%208.78197H1.15012L0.472125%209.05196C0.34371%209.10319%200.231953%209.18891%200.149198%209.29966C0.0664433%209.41041%200.0159116%209.54188%200.00318483%209.67955C-0.00954198%209.81721%200.0160314%209.95572%200.0770801%2010.0798C0.138129%2010.2038%200.232277%2010.3086%200.349125%2010.3825L0.964125%2010.7725L0.965625%2010.7755L8.45812%2015.5425L13.2251%2023.035L13.2281%2023.038L13.6181%2023.653C13.6923%2023.7694%2013.7971%2023.863%2013.921%2023.9237C14.045%2023.9844%2014.1833%2024.0097%2014.3207%2023.9968C14.4581%2023.9839%2014.5892%2023.9334%2014.6998%2023.8508C14.8103%2023.7681%2014.8959%2023.6566%2014.9471%2023.5285L23.9471%201.02847ZM21.1976%203.86347L9.95662%2015.1045L9.63412%2014.5975C9.57503%2014.5044%209.49616%2014.4256%209.40312%2014.3665L8.89612%2014.044L20.1371%202.80296L21.9041%202.09646L21.1991%203.86347H21.1976Z'%20fill='%23EEEEEE'/%3e%3c/svg%3e",j0="/assets/img/Dog-DhZuYJLQ.svg",P0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='EnvelopeFill'%3e%3cpath%20id='Vector'%20d='M0.075%205.3325C0.226227%204.66986%200.597983%204.07822%201.12938%203.65446C1.66078%203.23071%202.32033%202.99995%203%203H21C21.6797%202.99995%2022.3392%203.23071%2022.8706%203.65446C23.402%204.07822%2023.7738%204.66986%2023.925%205.3325L12%2012.621L0.075%205.3325ZM0%207.0455V17.7015L8.7045%2012.3645L0%207.0455ZM10.1415%2013.245L0.2865%2019.2855C0.52999%2019.7989%200.91429%2020.2326%201.39467%2020.5362C1.87505%2020.8397%202.43176%2021.0005%203%2021H21C21.5681%2021.0001%2022.1246%2020.8389%2022.6048%2020.5351C23.0849%2020.2313%2023.4688%2019.7975%2023.712%2019.284L13.857%2013.2435L12%2014.379L10.1415%2013.2435V13.245ZM15.2955%2012.366L24%2017.7015V7.0455L15.2955%2012.3645V12.366Z'%20fill='%2302A66A'/%3e%3c/g%3e%3c/svg%3e",i2=y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #01402f;
  padding: 8% 5%;
  box-sizing: border-box;
`,o2=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
  text-align: center;
`,s2=y.h3`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,l2=y.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,a2=y.div`
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
`,u2=y.span`
  color: white;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 500;
`,c2=y.img`
  width: 30%;
  max-width: 150px;
  margin-bottom: -2%;
  z-index: 12;
`,d2=y.div`
  width: 100%;
  min-height: 70vh;
  background-color: #eeeeee;
  border-radius: 16px;
  padding: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,f2=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,p2=y.span`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin-bottom: 4%;
  font-weight: 500;
`,h2=y.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  margin-bottom: 6%;
`,Pn=y.button`
  flex-basis: calc(50% - 1.5%);
  min-height: 48px;
  padding: 12px;
  border-radius: 8px;
  font-size: clamp(1.4rem, 3.5vw, 1.6rem);
  border: 1px solid var(--gray);
  background-color: white;
  color: #b4a7bc;
  margin-bottom: 3%;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;

  &:active {
    background-color: #a9e6b9;
    color: black;
  }

  ${e=>e.$active&&`
    background-color: var(--green);
    color: black;
    border-color: var(--green);
  `}
`,m2=y.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`,al=y.label`
  color: var(--gray);
  font-size: ${e=>e.$active?"1.3rem":"1.6rem"};
  margin-top: ${e=>e.$active?"4%":"6%"};
  margin-bottom: 1%;
  transition: font-size 0.3s ease;
`,Od=y.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`,g2=y.textarea`
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
`,y2=y.button`
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
`,v2=y.p`
  white-space: pre-wrap;
  color: white;
  font-family: "Aileron-Bold";
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 900;
  text-align: center;
  margin-top: 10%;
`,x2=()=>{const[e,t]=T.useState([]),[n,r]=T.useState(null),[i,o]=T.useState({name:"",email:"",message:""}),[s,l]=T.useState(""),a=(d,g)=>{d.preventDefault();let w=[...e],v=w.findIndex(x=>x===g);v>-1?w.splice(v,1):w.push(g),t(w)},c=d=>{o(g=>({...g,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),k0("/send-email",{emailContent:i,subjectsSelected:e}).then(g=>{console.log(g.data.message),l(g.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{l("")},4500)}).catch(g=>{console.log(g)})};return T.useEffect(()=>{const d=()=>r(null);return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),u.jsxs(i2,{id:"contact",children:[u.jsx(o2,{children:"Get In Touch"}),u.jsxs(s2,{children:["Let's discuss something ",u.jsx(l2,{children:"cool"})," together!"]}),u.jsxs(a2,{children:[u.jsx("img",{src:P0,alt:"Email icon"}),u.jsx(u2,{children:"info@diadevdesign.com"})]}),s?u.jsx(v2,{children:s}):u.jsxs(u.Fragment,{children:[u.jsx(c2,{src:j0,alt:"Dog mascot"}),u.jsx(d2,{children:u.jsxs(f2,{children:[u.jsx(p2,{children:"I'm interested in..."}),u.jsxs(h2,{children:[u.jsx(Pn,{$active:e.includes("Web Development"),onClick:d=>a(d,"Web Development"),children:"Web Development"}),u.jsx(Pn,{$active:e.includes("UX/UI Design"),onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"}),u.jsx(Pn,{$active:e.includes("Marketing"),onClick:d=>a(d,"Marketing"),children:"Marketing"}),u.jsx(Pn,{$active:e.includes("Custom APIs"),onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"}),u.jsx(Pn,{$active:e.includes("AI Apps/Agents"),onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"}),u.jsx(Pn,{$active:e.includes("Other"),onClick:d=>a(d,"Other"),children:"Other"})]}),u.jsxs(m2,{onSubmit:f,children:[u.jsx(al,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Od,{type:"text",name:"name",id:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d),required:!0}),u.jsx(al,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Od,{type:"email",name:"email",id:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d),required:!0}),u.jsx(al,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx(g2,{name:"message",id:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d),required:!0}),u.jsxs(y2,{type:"submit",children:[u.jsx("img",{src:E0,alt:"Send message icon"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})},w2=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,S2=()=>u.jsxs(w2,{children:[u.jsx(mv,{}),u.jsx(Rv,{}),u.jsx(x2,{})]}),C2="/assets/fonts/Aileron-Regular-CtKlDjcc.otf",k2="/assets/fonts/Aileron-Bold-BWrAr8GE.otf",E2="/assets/fonts/Aileron-Black-DX8rpg6F.otf",j2="/assets/fonts/Aileron-BlackItalic-CDBNzfOi.otf",P2="/assets/fonts/Aileron-BoldItalic-BpRWpHqE.otf",R2="/assets/fonts/Aileron-Heavy-CNC5NjKR.otf",T2="/assets/fonts/Aileron-HeavyItalic-Cu9nKrNV.otf",_2="/assets/fonts/Aileron-Italic-DYUE3e7y.otf",A2="/assets/fonts/Aileron-Light-LZTtHK4h.otf",N2="/assets/fonts/Aileron-LightItalic-WKAGcBBf.otf",L2="/assets/fonts/Aileron-SemiBold-C3IbYb9I.otf",I2="/assets/fonts/Aileron-SemiBoldItalic-DLbJRGCk.otf",$2="/assets/fonts/Aileron-Thin-Brp9Y9vu.otf",O2="/assets/fonts/Aileron-ThinItalic-CWr2f7xD.otf",z2="/assets/fonts/Aileron-UltraLight-Cw0yx4GS.otf",D2="/assets/fonts/Aileron-UltraLightItalic-B5h6okXt.otf",b2=Ih`

@font-face {
  font-family: "Aileron-Regular";   /*Can be any text*/
  src: url(${C2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black";   /*Can be any text*/
  src: url(${E2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black-Italic";   /*Can be any text*/
  src: url(${j2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold";   /*Can be any text*/
  src: url(${k2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold-Italic";   /*Can be any text*/
  src: url(${P2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy";   /*Can be any text*/
  src: url(${R2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy-Italic";   /*Can be any text*/
  src: url(${T2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Italic";   /*Can be any text*/
  src: url(${_2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light";   /*Can be any text*/
  src: url(${A2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light-Italic";   /*Can be any text*/
  src: url(${N2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold";   /*Can be any text*/
  src: url(${L2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold-Italic";   /*Can be any text*/
  src: url(${I2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin";   /*Can be any text*/
  src: url(${$2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin-Italic";   /*Can be any text*/
  src: url(${O2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite";   /*Can be any text*/
  src: url(${z2}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite-Italic";   /*Can be any text*/
  src: url(${D2}) format("opentype");
}

  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'poppins', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
    ${""}

    ${""}


    --green: #65B47B;
    --gray: #b4a7bc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html {
    font-size: 10px;
    ${""}
    ${""}
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${""}
    ${""}
  }
`,F2=y.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  font-family: Aileron, sans-serif;
`,B2=y.header`
  padding: 24px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,M2=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,U2=y.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  
  .accent { color: #48d994; }
  .dark { color: #070d0d; }
`,H2=y.div`
  width: 32px;
  height: 32px;
  background: #070d0d;
  border-radius: 4px;
  cursor: pointer;
`,Hi=y.section`
  padding: 64px 16px;
`,ul=y.h2`
  font-size: 48px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 32px 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;y.h3`
  font-size: 34px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 24px 0;
  text-align: center;
`;const cl=y.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
`,W2=y.div`
  display: grid;
  gap: 16px;
  margin: 32px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,V2=y.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,G2=y.div`
  width: 48px;
  height: 48px;
  background: #02a66a;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,Q2=y.div`
  flex: 1;
`;y.h4`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 8px 0;
`;const K2=y.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,zd=y.div`
  background: rgba(119, 185, 243, 0.3);
  border: 8px solid #77b9f3;
  border-radius: 20px;
  padding: 32px 24px;
  margin: 32px 0;
  backdrop-filter: blur(5px);
`,Dd=y.h3`
  font-size: 34px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 32px 0;
  text-align: center;
`,bd=y.div`
  display: grid;
  gap: 16px;
`,Fd=y.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(7, 13, 13, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,Bd=y.h5`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 4px 0;
`,Md=y.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,q2=y.div`
  display: grid;
  gap: 32px;
  margin: 32px 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,Y2=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`,X2=y.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 64px;
`,J2=y.h4`
  font-size: 20px;
  font-weight: 700;
  color: #070d0d;
  margin: 0 0 12px 0;
`,Z2=y.p`
  font-size: 16px;
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,ew=y.section`
  padding: 64px 16px;
  background: #01402f;
  color: white;
`,tw=y.h2`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 0 0 32px 0;
  text-align: center;
`,dl=y.p`
  font-size: 16px;
  color: white;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,nw=y.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: #f0f0f0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  color: #666;
  font-size: 18px;
`;function rw(){const e=[{icon:"🎯",title:"Tailored Solutions",description:"We are committed to empowering your business with cutting-edge solutions that align with your goals."},{icon:"⚙️",title:"Custom Technology",description:"Our primary focus is on delivering customized technology that caters to your unique requirements."},{icon:"🤝",title:"Community Support",description:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}],t=[{title:"Tailored",description:"Solutions for your unique business needs and goals."},{title:"Scalable",description:"Applications that evolve as your business grows."},{title:"Responsive",description:"Seamlessly compatible with all devices and screen sizes."},{title:"Cross-Platform Integration",description:"Incorporate custom applications with your current systems and software."},{title:"Robust Architecture",description:"Reliable and scalable software that can handle increasing loads and complexities."},{title:"User-Centered Experience",description:"Intuitive design and engaging interfaces."},{title:"Agile Development",description:"To deliver projects on time and adapt to changing requirements quickly."}],n=[{title:"Increased Efficiency",description:"Save time and cut costs with automated, streamlined processes."},{title:"Competitive Advantage",description:"Cutting-edge technology to stay ahead in your industry and set you apart."},{title:"Advanced Analytics",description:"Reporting features to provide valuable insights into your operations."},{title:"Security",description:"Safeguard your data and observe compliance with advanced measures and best practices."},{title:"Maintenance and Support",description:"Keep your software up-to-date and optimized with ongoing care."}],r=[{icon:"👨‍💻",title:"Hands-On Training",description:"Training and workshops covering the latest technologies and industry best practices."},{icon:"📊",title:"Performance Feedback",description:"Regular assessments and constructive feedback to help you grow and improve your skills."},{icon:"🌍",title:"Community Engagement",description:"Participate in advancing local technological innovation and progress."}];return u.jsxs(F2,{children:[u.jsxs(B2,{children:[u.jsxs(M2,{children:[u.jsx("div",{style:{width:"32px",height:"32px",background:"#48d994",borderRadius:"4px"}}),u.jsxs(U2,{children:[u.jsx("span",{className:"accent",children:"Dia"}),u.jsx("span",{className:"dark",children:" dev & Design"})]})]}),u.jsx(H2,{})]}),u.jsxs(Hi,{children:[u.jsx(ul,{children:"Our Story"}),u.jsx(cl,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsx(nw,{children:"Company Illustration"}),u.jsx(W2,{children:e.map((i,o)=>u.jsxs(V2,{children:[u.jsx(G2,{children:i.icon}),u.jsx(Q2,{children:u.jsx(K2,{children:i.description})})]},o))})]}),u.jsxs(Hi,{children:[u.jsx(ul,{children:"Why We Do It"}),u.jsx(cl,{children:"At Dia Dev Design, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments."}),u.jsx(cl,{children:"At Dia Dev Design, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues."})]}),u.jsxs(Hi,{children:[u.jsxs(zd,{children:[u.jsx(Dd,{children:"We build…"}),u.jsx(bd,{children:t.map((i,o)=>u.jsxs(Fd,{children:[u.jsx(Bd,{children:i.title}),u.jsx(Md,{children:i.description})]},o))})]}),u.jsxs(zd,{children:[u.jsx(Dd,{children:"You get…"}),u.jsx(bd,{children:n.map((i,o)=>u.jsxs(Fd,{children:[u.jsx(Bd,{children:i.title}),u.jsx(Md,{children:i.description})]},o))})]})]}),u.jsxs(Hi,{children:[u.jsx(ul,{children:"Talent Incubator"}),u.jsx(q2,{children:r.map((i,o)=>u.jsxs(Y2,{children:[u.jsx(X2,{children:i.icon}),u.jsx(J2,{children:i.title}),u.jsx(Z2,{children:i.description})]},o))})]}),u.jsxs(ew,{children:[u.jsx(tw,{children:"Our Journey"}),u.jsx(dl,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(dl,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and individuals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(dl,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})}const iw=y.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`,ow=({resize:e})=>(T.useEffect(()=>{e()},[]),u.jsxs(iw,{children:[u.jsx(b2,{}),u.jsx(uv,{}),u.jsxs(Vh,{children:[u.jsx(oi,{path:"/",element:u.jsx(S2,{})}),u.jsx(oi,{path:"/about",element:u.jsx(rw,{})})]})]})),sw=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,lw=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 15vh;
  margin-left: 3%;
`,aw=y.img`
  height: 75%
`,uw=y.h1`
  font-size: 5rem;
  margin-left: 1%
`,cw=y.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Ud=y(Gh)`
  font-size: 2.1rem;
  font-family: 'Aileron-Bold';
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &:hover {
    color: var(--green);
  }
`,dw=y.button`
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
`,fw=()=>{const e=Du(),t=()=>{e("/")},n=async()=>{t(),setTimeout(()=>{const r=document.getElementById("contact");r&&window.scrollTo({top:r.getBoundingClientRect().top,behavior:"smooth"})},1)};return u.jsxs(lw,{children:[u.jsx(aw,{onClick:t,src:Qh}),u.jsxs(uw,{children:["<",u.jsx(sw,{children:"Día:"})," Dev & Design>"]}),u.jsxs(cw,{children:[u.jsx(Ud,{to:"/",children:"Home"}),u.jsx(Ud,{to:"/about",children:"About Us"}),u.jsx(dw,{onClick:n,children:"Contact Us"})]})]})},pw=y.div`
    width: 1200px;
    height: inherit;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    align-self: inherit;
`,Yt=({children:e})=>u.jsx(pw,{children:e}),hw=y.div`
  height: 85vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center
`,mw=y.div`
  display: flex;
  padding: 0;
  ${""}
  ${""}
  justify-content: space-between;
  align-items: center;
`,gw=y.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${""}
`,yw=y.button`
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
`,Wi=y.h1`
  font-size: 6.4rem;
    margin: 0 0 2%;
`,Hd=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,vw=y.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`,xw=y.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`,ww=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return u.jsx(hw,{children:u.jsx(Yt,{children:u.jsxs(mw,{children:[u.jsxs(gw,{children:[u.jsxs(Wi,{children:["Every-",u.jsx(Hd,{id:"dia",children:"Día"}),". "]}),u.jsx(Wi,{children:"We build."}),u.jsx(Wi,{children:"We create."}),u.jsxs(Wi,{children:["You ",u.jsx(Hd,{id:"dia",children:"succeed"}),"!"]}),u.jsx(vw,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(yw,{onClick:e,children:"Contact Us"})]}),u.jsx(xw,{children:u.jsx("img",{src:Kh,alt:"header-image"})})]})})})},Sw=y.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
`,Cw=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,kw=y.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,Ew=y.span`
  font-weight: 700;
  font-size: 9.6rem;
`,jw=y.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`,Pw=y.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${""}
`,Rw=y.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${""}
  ${""}
`,Tw=y.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`,Es=y.div`
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
`,_w=y(Es)`
  background-color: #edf3ff;
`,Aw=y(Es)`
  background-color: #fffaec;
`,Nw=y(Es)`
  background-color: #f0fff4;
`,Lw=y(Es)`
  background-color: #fff5f3;
`,Vi=y.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${""}
  ${""}
  ${""}
  width: 38%;
  ${""}
`,Gi=y.img`
  height: 62%;
  width: 62%;
  ${""}
`,Qi=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0
  `,Ki=y.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0
`,qi=y.p`
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
`,Iw=()=>u.jsx(Sw,{children:u.jsx(Yt,{children:u.jsxs(Cw,{children:[u.jsxs(kw,{children:[u.jsx(Ew,{children:"We Are"}),u.jsxs(jw,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(Pw,{children:[u.jsx(Rw,{children:"What We Do"}),u.jsxs(Tw,{children:[u.jsxs(_w,{children:[u.jsx(Vi,{children:u.jsx(Gi,{src:qh,alt:"web-dev"})}),u.jsxs(Qi,{children:[u.jsx(Ki,{children:"Web Development"}),u.jsx(qi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs(Aw,{children:[u.jsx(Vi,{children:u.jsx(Gi,{src:Yh,alt:"custom-applications"})}),u.jsxs(Qi,{children:[u.jsx(Ki,{children:"Custom Applications"}),u.jsx(qi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(Nw,{children:[u.jsx(Vi,{children:u.jsx(Gi,{src:Xh,alt:"problem-solutions"})}),u.jsxs(Qi,{children:[u.jsx(Ki,{children:"Marketing"}),u.jsx(qi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(Lw,{children:[u.jsx(Vi,{children:u.jsx(Gi,{src:Jh,alt:"tech-talent-incubator"})}),u.jsxs(Qi,{children:[u.jsx(Ki,{children:"Tech Incubator"}),u.jsx(qi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]})})}),$w=y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #01402f;
  z-index: 11;
`,Ow=y.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`,zw=y.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${""}
`,Dw=y.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
  height: 60% ${""};
`,bw=y.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Fw=y.div`
  margin-top: -10%;
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
  width: 490px;
  text-align: left;
  color: white;
`,Bw=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`,Mw=y.div`
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
`,Uw=y.img`
  width: 20%;
  ${""}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`,Hw=y.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${""}
`,Ww=y.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`,Vw=y.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 4vh;
`,Rn=y.button`
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

  ${e=>e.$active&&`
    background-color: var(--green);
    color: black;
    `}
`,Gw=y.form`
  display: flex;
  flex-direction: column;
  min-height: 65%;
  height: fit-content;
  justify-content: space-evenly;
  ${""}
`,fl=y.label`
  transform: translate(3px, ${e=>e.$active?"0.1rem":"1.3rem"});
  color: var(--gray);
  margin-top: 2rem;
  font-size: ${e=>e.$active?"15px":"20px"};
  transition: transform 0.5s ease-in-out, font-size 0.5s ease-in-out;
`,Wd=y.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,Qw=y.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,Kw=y.button`
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
`,qw=()=>{const[e,t]=T.useState([]),[n,r]=T.useState(null),[i,o]=T.useState({name:"",email:"",message:""}),[s,l]=T.useState(""),a=(d,g)=>{let w=[...e],v=w.findIndex(x=>x===g);v>-1?w.splice(v,1):w.push(g),t(w)},c=d=>{o(g=>({...g,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),k0("/send-email",{emailContent:i,subjectsSelected:e}).then(g=>{console.log(g.data.message),l(g.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{l("")},4500)}).catch(g=>{console.log(g)})};return T.useEffect(()=>{document.addEventListener("mousedown",()=>r(null))},[]),u.jsx($w,{children:u.jsx(Yt,{children:u.jsxs(zw,{id:"contact",children:[u.jsxs(Dw,{children:[u.jsx(Ow,{children:"Get In Touch"}),u.jsxs(Fw,{children:["Let’s discuss something ",u.jsx(Bw,{children:"cool"})," together!"]}),u.jsxs(Hw,{children:[u.jsx("span",{children:u.jsx("img",{src:P0})}),u.jsx("span",{style:{color:"white",fontSize:"2rem",fontWeight:"500"},children:"info@diadevdesign.com"})]})]}),s?u.jsx("p",{style:{whiteSpace:"pre-wrap",color:"white",fontFamily:"Aileron-Bold",fontSize:"3.6rem",fontWeight:"900"},children:s}):u.jsxs(bw,{children:[u.jsx(Uw,{src:j0,alt:"Dog Image"}),u.jsx(Mw,{children:u.jsxs(Ww,{children:[u.jsx("span",{children:"I’m interested in..."}),u.jsxs(Vw,{children:[u.jsx(Rn,{$active:e.includes("Web Development"),value:"Web Development",onClick:d=>a(d,"Web Development"),children:"Web Development"},"button-1"),u.jsx(Rn,{$active:e.includes("UX/UI Design"),value:"UX/UI Design",onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"},"button-2"),u.jsx(Rn,{$active:e.includes("Graphic Design"),value:"Graphic Design",onClick:d=>a(d,"Graphic Design"),children:"Marketing"},"button-3"),u.jsx(Rn,{$active:e.includes("Custom APIs"),value:"Custom APIs",onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"},"button-5"),u.jsx(Rn,{$active:e.includes("AI Apps/Agents"),value:"AI Apps/Agents",onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"},"button-6"),u.jsx(Rn,{$active:e.includes("Other"),value:"Other",onClick:d=>a(d,"Other"),children:"Other"},"button-7")]}),u.jsxs(Gw,{onSubmit:f,children:[u.jsx(fl,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Wd,{type:"text",name:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d)}),u.jsx(fl,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Wd,{type:"email",name:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d)}),u.jsx(fl,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx(Qw,{type:"text",name:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d)}),u.jsxs(Kw,{type:"submit",children:[u.jsx("img",{src:E0,alt:"send message"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})})})},Yw=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,Xw=()=>u.jsxs(Yw,{children:[u.jsx(ww,{}),u.jsx(Iw,{}),u.jsx(qw,{})]}),Jw=Ih`


  :root {
    font-family: "Aileron-Regular", 'Inter Variable', 'poppins', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial';
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
`,Zw="/assets/img/BalloonCat-v3wmWc6F.svg",e3="/assets/img/DDDGreenLogoClearBackGround-g-vtVwvB.svg",t3=y.div`
    height: 85vh;
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`,n3=y.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`,r3=y.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 80%;

`,i3=y.h1`
    font-family: 'Aileron-Bold';
    font-size: 9.6rem;
    font-weight: 700;
`,o3=y.img`
    height: 80%
`,s3=y.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,l3=y.img`
    height: 85%;
    margin-left: 1%
`,a3=y.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    width: 74%
`,pl=y.div`
    font-size: 1.6rem;
    font-family: 'Roboto'
`,u3=()=>u.jsx(t3,{children:u.jsx(Yt,{children:u.jsxs(n3,{children:[u.jsxs(r3,{children:[u.jsx(i3,{children:"Our Story"}),u.jsx(o3,{src:Zw,alt:"ballon-cat"})]}),u.jsxs(s3,{children:[u.jsx(l3,{src:e3,alt:"dia-green-logo"}),u.jsxs(a3,{children:[u.jsx(pl,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(pl,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(pl,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})]})})}),c3="/assets/img/TargetIcon-BDgFxHvR.svg",d3="/assets/img/EyeIcon-GMqB3cgM.svg",f3="/assets/img/HandsIcon-DC7nJpKX.svg",p3=y.div`
  ${""}
  width: 100%;

  background-color: #F2F2F2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

`,h3=y(Yt)`
  flex-direction: column
`,m3=y.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${""}
  ${""}
`,g3=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`,y3=y.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`,v3=y.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`,hl=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,ml=y.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`,gl=y.img`
  height: 60%;
`,yl=y.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`,x3=()=>u.jsx(p3,{children:u.jsxs(h3,{children:[u.jsx(m3,{children:"Why We Do It"}),u.jsxs(g3,{children:[u.jsx(y3,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsxs(v3,{children:[u.jsxs(hl,{children:[u.jsx(ml,{children:u.jsx(gl,{src:c3,alt:"target-icon"})}),u.jsx(yl,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."})]}),u.jsxs(hl,{children:[u.jsx(ml,{children:u.jsx(gl,{src:d3,alt:"eye-icon"})}),u.jsx(yl,{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."})]}),u.jsxs(hl,{children:[u.jsx(ml,{children:u.jsx(gl,{src:f3,alt:"hands-icon"})}),u.jsx(yl,{children:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]})]})]})}),w3="/assets/img/Fishermen-D8grav2G.svg",S3="/Sea.svg",C3=y.div`
  height: 80vh;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${S3});
  background-position: 50% 100%;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  overflow-y: visible;
`,k3=y.div`
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
`,E3=y.div`
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
`,j3=y.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${""}
  z-index: 13
`,P3=y.img`
  width: 100%;
  height: 100%;
`,R3=y.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,T3=y.div`
  width: 100%;
  margin-top: -2%;

`,Vd=y.p`
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
`,_3=()=>u.jsx(C3,{children:u.jsxs(k3,{children:[u.jsx(j3,{children:u.jsx(P3,{src:w3,alt:"fishermen"})}),u.jsx(Yt,{children:u.jsxs(E3,{children:[u.jsx(R3,{children:"Consulting"}),u.jsxs(T3,{children:[u.jsxs(Vd,{children:["At ","<Día Dev & Design>",", we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."]}),u.jsxs(Vd,{children:["At ","<Día Dev & Design>",", we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."]})]})]})})]})}),A3=y.div`
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
`,N3=y.div`
  ${""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,L3=y.div`
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
`,I3=y.div`
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
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
  z-index: 2;
`,$3=y.div`
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
  box-shadow: 4px -4px 6px 2px rgba(0, 0, 0, 0.25) inset,
    -4px 4px 6px 2px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(5px);
`,Gd=y.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`,Qd=y.h3`
  color: #070d0d;
  font-family: Aileron;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1.5% 0;
`,Ae=y.div`
  align-self: stretch;
  ${""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${""}
`,Ne=y.div`
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
`,O3=()=>u.jsx(A3,{children:u.jsx(Yt,{children:u.jsx(N3,{children:u.jsxs(L3,{children:[u.jsx(I3,{children:u.jsxs(Gd,{children:[u.jsx(Qd,{children:"We build..."}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Tailored"}),u.jsx(Le,{children:"Solutions for your unique business needs and goals."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Scalable"}),u.jsx(Le,{children:"Applications that evolve as your business grows."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Responsive"}),u.jsx(Le,{children:"Seamlessly compatible with all devices and screen sizes."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Cross-Platform Integration"}),u.jsx(Le,{children:"Incorporate custom applications with your current systems and software."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Robust Architecture"}),u.jsx(Le,{children:"Reliable and scalable software that can handle increasing loads and complexities."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"User-Centered Experience"}),u.jsx(Le,{children:"Intuitive design and engaging interfaces."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Agile Development"}),u.jsx(Le,{children:"To deliver projects on time and adapt to changing requirements quickly."})]})]})}),u.jsx($3,{children:u.jsxs(Gd,{children:[u.jsx(Qd,{children:"You get..."}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Increased efficiency"}),u.jsx(Le,{children:"Save time and cut costs with automated, streamlined processes."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Competitive Advantage"}),u.jsx(Le,{children:"Cutting-edge technology to stay ahead in your industry and set you apart."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Advanced Analytics"}),u.jsx(Le,{children:"Reporting features to provide valuable insights into your operations."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Security"}),u.jsx(Le,{children:"Safeguard your data and observe compliance with advanced measures and best practices."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Maintenance and Support"}),u.jsx(Le,{children:"Keep your software up-to-date and optimized with ongoing care."})]}),u.jsxs(Ae,{children:[u.jsx(Ne,{children:"Excellence"}),u.jsx(Le,{children:"With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!"})]})]})})]})})})}),z3="/assets/img/Plant-BKSABYCs.svg",D3="/assets/img/Hands-On-Training-CAh4lW99.svg",b3="/assets/img/Performance-CiLV-Kb0.svg",F3="/assets/img/Community-Engagement-Cuw581Qp.svg",B3="/assets/img/BalloonDog-IURLZLkm.svg",M3="data:image/svg+xml,%3csvg%20width='1512'%20height='185'%20viewBox='0%200%201512%20185'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M359.888%200C672.131%20-8.65219e-05%20602.831%2071.7909%20964.688%2071.7909C1326.54%2071.7909%201512%20184.211%201512%20184.211V185H0C0%20185%2047.6438%208.65221e-05%20359.888%200Z'%20fill='%2301402F'/%3e%3c/svg%3e",U3=y.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%;
  width: 100%; /* Make sure this has a defined width */
`,H3=y.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto;
`,W3=y.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
  z-index: 2;
`,vl=y.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`,xl=y.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`,wl=y.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`,Sl=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`,Cl=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,V3=y.img`
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
`,G3=y.img`
  width: 100vw;
  z-index: 2;
  padding: 0;
  display: block;
  margin-top: 25%;

`,Q3=()=>u.jsxs(U3,{children:[u.jsx("img",{style:{height:"40vh",marginRight:"-55%",marginBottom:"-5%"},src:z3,alt:"plant-image"}),u.jsx(Yt,{style:{marginTop:"-20%",height:"fit-content"},children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"-20%"},children:[u.jsx(H3,{children:"Tech Incubator"}),u.jsxs(W3,{children:[u.jsxs(vl,{children:[u.jsx(xl,{src:D3,alt:"hands-on-training"}),u.jsxs(wl,{children:[u.jsx(Sl,{children:"Hands-On Training"}),u.jsx(Cl,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(vl,{children:[u.jsx(xl,{src:b3,alt:"performance"}),u.jsxs(wl,{children:[u.jsx(Sl,{children:"Performance Feedback"}),u.jsx(Cl,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(vl,{children:[u.jsx(xl,{src:F3,alt:"community-engagement"}),u.jsxs(wl,{children:[u.jsx(Sl,{children:"Community Engagement"}),u.jsx(Cl,{children:"Participate in advancing local technological innovation and progress."})]})]})]})]})}),u.jsx(V3,{src:B3,alt:"ballon-dog"}),u.jsx(G3,{src:M3,alt:"bottom-wavy-top-rectangle"})]}),K3=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,q3=()=>u.jsxs(K3,{children:[u.jsx(u3,{}),u.jsx(x3,{}),u.jsx(_3,{}),u.jsx(O3,{}),u.jsx(Q3,{})]}),Y3=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;let X3=({resize:e})=>(T.useEffect(()=>{e()},[]),u.jsxs(Y3,{children:[u.jsx(Jw,{}),u.jsx(fw,{}),u.jsxs(Vh,{children:[u.jsx(oi,{path:"/",element:u.jsx(Xw,{})}),u.jsx(oi,{path:"/about",element:u.jsx(q3,{})})]})]}));const J3=()=>{const[e,t]=T.useState(null),n=()=>{let r=window.innerWidth;t(r)};return T.useEffect(()=>{n();let r;const i=()=>{clearTimeout(r),r=setTimeout(()=>{n()},150)};return window.addEventListener("resize",i),()=>{clearTimeout(r),window.removeEventListener("resize",i)}},[]),u.jsx(u.Fragment,{children:e>1024?u.jsx(X3,{resize:n}):e?u.jsx(ow,{resize:n}):null})};kl.createRoot(document.getElementById("root")).render(u.jsx(Ze.StrictMode,{children:u.jsx(qy,{children:u.jsx(J3,{})})}));
