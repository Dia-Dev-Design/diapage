function $0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},Ko={},qd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),D0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),V0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),Mu=Symbol.iterator;function G0(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xd=Object.assign,Jd={};function or(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Yd}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zd(){}Zd.prototype=or.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=Jd,this.updater=n||Yd}var Ia=Na.prototype=new Zd;Ia.constructor=Na;Xd(Ia,or.prototype);Ia.isPureReactComponent=!0;var Uu=Array.isArray,ef=Object.prototype.hasOwnProperty,$a={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:si,type:e,key:o,ref:l,props:i,_owner:$a.current}}function K0(e,t){return{$$typeof:si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function q0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hu=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q0(""+e.key):t.toString(36)}function Yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case si:case D0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Pl(l,0):r,Uu(i)?(n="",e!=null&&(n=e.replace(Hu,"$&/")+"/"),Yi(i,t,n,"",function(c){return c})):i!=null&&(Oa(i)&&(i=K0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Hu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Uu(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Pl(o,s);l+=Yi(o,t,n,a,i)}else if(a=G0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Pl(o,s++),l+=Yi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Xi={transition:null},X0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Xi,ReactCurrentOwner:$a};function rf(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=or;D.Fragment=b0;D.Profiler=B0;D.PureComponent=Na;D.StrictMode=F0;D.Suspense=W0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;D.act=rf;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=$a.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ef.call(t,a)&&!tf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:si,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:U0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M0,_context:e},e.Consumer=e};D.createElement=nf;D.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:H0,render:e}};D.isValidElement=Oa;D.lazy=function(e){return{$$typeof:Q0,_payload:{_status:-1,_result:e},_init:Y0}};D.memo=function(e,t){return{$$typeof:V0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Xi.transition;Xi.transition={};try{e()}finally{Xi.transition=t}};D.unstable_act=rf;D.useCallback=function(e,t){return xe.current.useCallback(e,t)};D.useContext=function(e){return xe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};D.useEffect=function(e,t){return xe.current.useEffect(e,t)};D.useId=function(){return xe.current.useId()};D.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return xe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};D.useRef=function(e){return xe.current.useRef(e)};D.useState=function(e){return xe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return xe.current.useTransition()};D.version="18.3.1";qd.exports=D;var R=qd.exports;const Ze=O0(R),J0=$0({__proto__:null,default:Ze},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=R,em=Symbol.for("react.element"),tm=Symbol.for("react.fragment"),nm=Object.prototype.hasOwnProperty,rm=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,im={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)nm.call(t,r)&&!im.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:em,type:e,key:o,ref:l,props:i,_owner:rm.current}}Ko.Fragment=tm;Ko.jsx=of;Ko.jsxs=of;Kd.exports=Ko;var u=Kd.exports,Ss={},lf={exports:{}},Fe={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var N=_.length;_.push(z);e:for(;0<N;){var U=N-1>>>1,H=_[U];if(0<i(H,z))_[U]=z,_[N]=H,N=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],N=_.pop();if(N!==z){_[0]=N;e:for(var U=0,H=_.length,en=H>>>1;U<en;){var Ke=2*(U+1)-1,kt=_[Ke],_e=Ke+1,dt=_[_e];if(0>i(kt,N))_e<H&&0>i(dt,kt)?(_[U]=dt,_[_e]=N,U=_e):(_[U]=kt,_[Ke]=N,U=Ke);else if(_e<H&&0>i(dt,N))_[U]=dt,_[_e]=N,U=_e;else break e}}return z}function i(_,z){var N=_.sortIndex-z.sortIndex;return N!==0?N:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],f=1,d=null,g=3,w=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=_)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function S(_){if(x=!1,m(_),!v)if(n(a)!==null)v=!0,fr(E);else{var z=n(c);z!==null&&Zt(S,z.startTime-_)}}function E(_,z){v=!1,x&&(x=!1,h(L),L=-1),w=!0;var N=g;try{for(m(z),d=n(a);d!==null&&(!(d.expirationTime>z)||_&&!Re());){var U=d.callback;if(typeof U=="function"){d.callback=null,g=d.priorityLevel;var H=U(d.expirationTime<=z);z=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(a)&&r(a),m(z)}else r(a);d=n(a)}if(d!==null)var en=!0;else{var Ke=n(c);Ke!==null&&Zt(S,Ke.startTime-z),en=!1}return en}finally{d=null,g=N,w=!1}}var T=!1,j=null,L=-1,B=5,O=-1;function Re(){return!(e.unstable_now()-O<B)}function Xt(){if(j!==null){var _=e.unstable_now();O=_;var z=!0;try{z=j(!0,_)}finally{z?Jt():(T=!1,j=null)}}else T=!1}var Jt;if(typeof p=="function")Jt=function(){p(Xt)};else if(typeof MessageChannel<"u"){var gi=new MessageChannel,jl=gi.port2;gi.port1.onmessage=Xt,Jt=function(){jl.postMessage(null)}}else Jt=function(){C(Xt,0)};function fr(_){j=_,T||(T=!0,Jt())}function Zt(_,z){L=C(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,fr(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var N=g;g=z;try{return _()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=g;g=_;try{return z()}finally{g=N}},e.unstable_scheduleCallback=function(_,z,N){var U=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=N+H,_={id:f++,callback:z,priorityLevel:_,startTime:N,expirationTime:H,sortIndex:-1},N>U?(_.sortIndex=N,t(c,_),n(a)===null&&_===n(c)&&(x?(h(L),L=-1):x=!0,Zt(S,N-U))):(_.sortIndex=H,t(a,_),v||w||(v=!0,fr(E))),_},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(_){var z=g;return function(){var N=g;g=z;try{return _.apply(this,arguments)}finally{g=N}}}})(af);sf.exports=af;var om=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=R,be=om;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,br={};function wn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(br[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=Object.prototype.hasOwnProperty,sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Vu={};function am(e){return Cs.call(Vu,e)?!0:Cs.call(Wu,e)?!1:sm.test(e)?Vu[e]=!0:(Wu[e]=!0,!1)}function um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cm(e,t,n,r){if(t===null||typeof t>"u"||um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,ba);de[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,ba);de[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,ba);de[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fa(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cm(t,n,i,r)&&(n=null),r||i===null?am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),Es=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Rl;function kr(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var _l=!1;function Al(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function dm(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function Ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case Rn:return"Portal";case ks:return"Profiler";case Ba:return"StrictMode";case Es:return"Suspense";case js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:Ts(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Ts(e(t))}catch{}}return null}function fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=pm(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&Fa(e,"checked",t,!1)}function Rs(e,t){mf(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function As(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Er(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function gf(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ls(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hm=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mm=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zs(e,t){if(t){if(mm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Un=null,Hn=null;function Xu(e){if(e=ci(e)){if(typeof $s!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Zo(t),$s(e.stateNode,e.type,t))}}function Sf(e){Un?Hn?Hn.push(e):Hn=[e]:Un=e}function Cf(){if(Un){var e=Un,t=Hn;if(Hn=Un=null,Xu(e),t)for(e=0;e<t.length;e++)Xu(t[e])}}function kf(e,t){return e(t)}function Ef(){}var Ll=!1;function jf(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return kf(e,t,n)}finally{Ll=!1,(Un!==null||Hn!==null)&&(Ef(),Cf())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Os=!1;if(vt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Os=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Os=!1}function gm(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var _r=!1,yo=null,vo=!1,Ds=null,ym={onError:function(e){_r=!0,yo=e}};function vm(e,t,n,r,i,o,l,s,a){_r=!1,yo=null,gm.apply(ym,arguments)}function xm(e,t,n,r,i,o,l,s,a){if(vm.apply(this,arguments),_r){if(_r){var c=yo;_r=!1,yo=null}else throw Error(P(198));vo||(vo=!0,Ds=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(Sn(e)!==e)throw Error(P(188))}function wm(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ju(i),e;if(o===r)return Ju(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Pf(e){return e=wm(e),e!==null?Rf(e):null}function Rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rf(e);if(t!==null)return t;e=e.sibling}return null}var _f=be.unstable_scheduleCallback,Zu=be.unstable_cancelCallback,Sm=be.unstable_shouldYield,Cm=be.unstable_requestPaint,Z=be.unstable_now,km=be.unstable_getCurrentPriorityLevel,Wa=be.unstable_ImmediatePriority,Af=be.unstable_UserBlockingPriority,xo=be.unstable_NormalPriority,Em=be.unstable_LowPriority,Lf=be.unstable_IdlePriority,qo=null,ut=null;function jm(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Rm,Tm=Math.log,Pm=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Tm(e)/Pm|0)|0}var Ci=64,ki=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=jr(s):(o&=l,o!==0&&(r=jr(o)))}else l=n&~i,l!==0?r=jr(l):o!==0&&(r=jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function _m(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-et(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=_m(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var If,Qa,$f,Of,Df,Fs=!1,Ei=[],$t=null,Ot=null,Dt=null,Mr=new Map,Ur=new Map,At=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ec(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Qa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nm(e,t,n,r,i){switch(t){case"focusin":return $t=gr($t,e,t,n,r,i),!0;case"dragenter":return Ot=gr(Ot,e,t,n,r,i),!0;case"mouseover":return Dt=gr(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,gr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,gr(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function bf(e){var t=on(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Tf(n),t!==null){e.blockedOn=t,Df(e.priority,function(){$f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Is=r,n.target.dispatchEvent(r),Is=null}else return t=ci(n),t!==null&&Qa(t),e.blockedOn=n,!1;t.shift()}return!0}function tc(e,t,n){Ji(e)&&n.delete(t)}function Im(){Fs=!1,$t!==null&&Ji($t)&&($t=null),Ot!==null&&Ji(Ot)&&(Ot=null),Dt!==null&&Ji(Dt)&&(Dt=null),Mr.forEach(tc),Ur.forEach(tc)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Im)))}function Hr(e){function t(i){return yr(i,e)}if(0<Ei.length){yr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&yr($t,e),Ot!==null&&yr(Ot,e),Dt!==null&&yr(Dt,e),Mr.forEach(t),Ur.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&At.shift()}var Wn=Ct.ReactCurrentBatchConfig,So=!0;function $m(e,t,n,r){var i=M,o=Wn.transition;Wn.transition=null;try{M=1,Ga(e,t,n,r)}finally{M=i,Wn.transition=o}}function Om(e,t,n,r){var i=M,o=Wn.transition;Wn.transition=null;try{M=4,Ga(e,t,n,r)}finally{M=i,Wn.transition=o}}function Ga(e,t,n,r){if(So){var i=Bs(e,t,n,r);if(i===null)Ul(e,t,r,Co,n),ec(e,r);else if(Nm(i,e,t,n,r))r.stopPropagation();else if(ec(e,r),t&4&&-1<zm.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&If(o),o=Bs(e,t,n,r),o===null&&Ul(e,t,r,Co,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Co=null;function Bs(e,t,n,r){if(Co=null,e=Ha(r),e=on(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case Wa:return 1;case Af:return 4;case xo:case Em:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var zt=null,Ka=null,Zi=null;function Bf(){if(Zi)return Zi;var e,t=Ka,n=t.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function nc(){return!1}function Be(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ji:nc,this.isPropagationStopped=nc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Be(lr),ui=X({},lr,{view:0,detail:0}),Dm=Be(ui),Nl,Il,vr,Yo=X({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Nl=e.screenX-vr.screenX,Il=e.screenY-vr.screenY):Il=Nl=0,vr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),rc=Be(Yo),bm=X({},Yo,{dataTransfer:0}),Fm=Be(bm),Bm=X({},ui,{relatedTarget:0}),$l=Be(Bm),Mm=X({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Be(Mm),Hm=X({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Be(Hm),Vm=X({},lr,{data:0}),ic=Be(Vm),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Km[e])?!!t[e]:!1}function Ya(){return qm}var Ym=X({},ui,{key:function(e){if(e.key){var t=Qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=Be(Ym),Jm=X({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=Be(Jm),Zm=X({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),eg=Be(Zm),tg=X({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=Be(tg),rg=X({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ig=Be(rg),og=[9,13,27,32],Xa=vt&&"CompositionEvent"in window,Ar=null;vt&&"documentMode"in document&&(Ar=document.documentMode);var lg=vt&&"TextEvent"in window&&!Ar,Mf=vt&&(!Xa||Ar&&8<Ar&&11>=Ar),lc=" ",sc=!1;function Uf(e,t){switch(e){case"keyup":return og.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function sg(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:(sc=!0,lc);case"textInput":return e=t.data,e===lc&&sc?null:e;default:return null}}function ag(e,t){if(An)return e==="compositionend"||!Xa&&Uf(e,t)?(e=Bf(),Zi=Ka=zt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mf&&t.locale!=="ko"?null:t.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ug[e.type]:t==="textarea"}function Wf(e,t,n,r){Sf(r),t=ko(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Wr=null;function cg(e){tp(e,0)}function Xo(e){var t=Nn(e);if(hf(t))return e}function dg(e,t){if(e==="change")return t}var Vf=!1;if(vt){var Ol;if(vt){var Dl="oninput"in document;if(!Dl){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),Dl=typeof uc.oninput=="function"}Ol=Dl}else Ol=!1;Vf=Ol&&(!document.documentMode||9<document.documentMode)}function cc(){Lr&&(Lr.detachEvent("onpropertychange",Qf),Wr=Lr=null)}function Qf(e){if(e.propertyName==="value"&&Xo(Wr)){var t=[];Wf(t,Wr,e,Ha(e)),jf(cg,t)}}function fg(e,t,n){e==="focusin"?(cc(),Lr=t,Wr=n,Lr.attachEvent("onpropertychange",Qf)):e==="focusout"&&cc()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Wr)}function hg(e,t){if(e==="click")return Xo(t)}function mg(e,t){if(e==="input"||e==="change")return Xo(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:gg;function Vr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cs.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var n=dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fc(n,o);var l=fc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=vt&&"documentMode"in document&&11>=document.documentMode,Ln=null,Ms=null,zr=null,Us=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||Ln==null||Ln!==go(r)||(r=Ln,"selectionStart"in r&&Ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Vr(zr,r)||(zr=r,r=ko(Ms,"onSelect"),0<r.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function Ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},bl={},qf={};vt&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function Jo(e){if(bl[e])return bl[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return bl[e]=t[n];return e}var Yf=Jo("animationend"),Xf=Jo("animationiteration"),Jf=Jo("animationstart"),Zf=Jo("transitionend"),ep=new Map,hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){ep.set(e,t),wn(t,[e])}for(var Fl=0;Fl<hc.length;Fl++){var Bl=hc[Fl],xg=Bl.toLowerCase(),wg=Bl[0].toUpperCase()+Bl.slice(1);Gt(xg,"on"+wg)}Gt(Yf,"onAnimationEnd");Gt(Xf,"onAnimationIteration");Gt(Jf,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Zf,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xm(r,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;mc(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;mc(i,s,c),o=a}}}if(vo)throw e=Ds,vo=!1,Ds=null,e}function V(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(np(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),np(n,e,r,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Pi]){e[Pi]=!0,uf.forEach(function(n){n!=="selectionchange"&&(Sg.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,Ml("selectionchange",!1,t))}}function np(e,t,n,r){switch(Ff(t)){case 1:var i=$m;break;case 4:i=Om;break;default:i=Ga}n=i.bind(null,t,n,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=on(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}jf(function(){var c=o,f=Ha(n),d=[];e:{var g=ep.get(e);if(g!==void 0){var w=qa,v=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":w=Xm;break;case"focusin":v="focus",w=$l;break;case"focusout":v="blur",w=$l;break;case"beforeblur":case"afterblur":w=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=eg;break;case Yf:case Xf:case Jf:w=Um;break;case Zf:w=ng;break;case"scroll":w=Dm;break;case"wheel":w=ig;break;case"copy":case"cut":case"paste":w=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=oc}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Br(p,h),S!=null&&x.push(Gr(p,S,m)))),C)break;p=p.return}0<x.length&&(g=new w(g,v,null,n,f),d.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Is&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[xt]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?on(v):null,v!==null&&(C=Sn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(x=rc,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=oc,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=w==null?g:Nn(w),m=v==null?g:Nn(v),g=new x(S,p+"leave",w,n,f),g.target=C,g.relatedTarget=m,S=null,on(f)===c&&(x=new x(h,p+"enter",v,n,f),x.target=m,x.relatedTarget=C,S=x),C=S,w&&v)t:{for(x=w,h=v,p=0,m=x;m;m=En(m))p++;for(m=0,S=h;S;S=En(S))m++;for(;0<p-m;)x=En(x),p--;for(;0<m-p;)h=En(h),m--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=En(x),h=En(h)}x=null}else x=null;w!==null&&gc(d,g,w,x,!1),v!==null&&C!==null&&gc(d,C,v,x,!0)}}e:{if(g=c?Nn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=dg;else if(ac(g))if(Vf)E=mg;else{E=pg;var T=fg}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=hg);if(E&&(E=E(e,c))){Wf(d,E,n,f);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&_s(g,"number",g.value)}switch(T=c?Nn(c):window,e){case"focusin":(ac(T)||T.contentEditable==="true")&&(Ln=T,Ms=c,zr=null);break;case"focusout":zr=Ms=Ln=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,pc(d,n,f);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":pc(d,n,f)}var j;if(Xa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else An?Uf(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Mf&&n.locale!=="ko"&&(An||L!=="onCompositionStart"?L==="onCompositionEnd"&&An&&(j=Bf()):(zt=f,Ka="value"in zt?zt.value:zt.textContent,An=!0)),T=ko(c,L),0<T.length&&(L=new ic(L,e,null,n,f),d.push({event:L,listeners:T}),j?L.data=j:(j=Hf(n),j!==null&&(L.data=j)))),(j=lg?sg(e,n):ag(e,n))&&(c=ko(c,"onBeforeInput"),0<c.length&&(f=new ic("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=j))}tp(d,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(Gr(e,o,i)),o=Br(e,t),o!=null&&r.push(Gr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Br(n,o),a!=null&&l.unshift(Gr(n,a,s))):i||(a=Br(n,o),a!=null&&l.push(Gr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Cg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(Cg,`
`).replace(kg,"")}function Ri(e,t,n){if(t=yc(t),yc(e)!==t&&n)throw Error(P(425))}function Eo(){}var Hs=null,Ws=null;function Vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Eg=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(Tg)}:Qs;function Tg(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),at="__reactFiber$"+sr,Kr="__reactProps$"+sr,xt="__reactContainer$"+sr,Gs="__reactEvents$"+sr,Pg="__reactListeners$"+sr,Rg="__reactHandles$"+sr;function on(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xc(e);e!==null;){if(n=e[at])return n;e=xc(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Zo(e){return e[Kr]||null}var Ks=[],In=-1;function Kt(e){return{current:e}}function G(e){0>In||(e.current=Ks[In],Ks[In]=null,In--)}function W(e,t){In++,Ks[In]=e.current,e.current=t}var Qt={},ge=Kt(Qt),ke=Kt(!1),hn=Qt;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function jo(){G(ke),G(ge)}function wc(e,t,n){if(ge.current!==Qt)throw Error(P(168));W(ge,t),W(ke,n)}function rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,fm(e)||"Unknown",i));return X({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,hn=ge.current,W(ge,e),W(ke,ke.current),!0}function Sc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=rp(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,G(ke),G(ge),W(ge,e)):G(ke),W(ke,n)}var ht=null,el=!1,Wl=!1;function ip(e){ht===null?ht=[e]:ht.push(e)}function _g(e){el=!0,ip(e)}function qt(){if(!Wl&&ht!==null){Wl=!0;var e=0,t=M;try{var n=ht;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,el=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),_f(Wa,qt),i}finally{M=t,Wl=!1}}return null}var $n=[],On=0,Po=null,Ro=0,Me=[],Ue=0,mn=null,mt=1,gt="";function nn(e,t){$n[On++]=Ro,$n[On++]=Po,Po=e,Ro=t}function op(e,t,n){Me[Ue++]=mt,Me[Ue++]=gt,Me[Ue++]=mn,mn=e;var r=mt;e=gt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mt=1<<32-et(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function Za(e){e.return!==null&&(nn(e,1),op(e,1,0))}function eu(e){for(;e===Po;)Po=$n[--On],$n[On]=null,Ro=$n[--On],$n[On]=null;for(;e===mn;)mn=Me[--Ue],Me[Ue]=null,gt=Me[--Ue],Me[Ue]=null,mt=Me[--Ue],Me[Ue]=null}var Oe=null,$e=null,K=!1,Je=null;function lp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,$e=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,$e=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ys(e){if(K){var t=$e;if(t){var n=t;if(!Cc(e,t)){if(qs(e))throw Error(P(418));t=bt(n.nextSibling);var r=Oe;t&&Cc(e,t)?lp(r,n):(e.flags=e.flags&-4097|2,K=!1,Oe=e)}}else{if(qs(e))throw Error(P(418));e.flags=e.flags&-4097|2,K=!1,Oe=e}}}function kc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function _i(e){if(e!==Oe)return!1;if(!K)return kc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vs(e.type,e.memoizedProps)),t&&(t=$e)){if(qs(e))throw sp(),Error(P(418));for(;t;)lp(e,t),t=bt(t.nextSibling)}if(kc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Oe?bt(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=$e;e;)e=bt(e.nextSibling)}function qn(){$e=Oe=null,K=!1}function tu(e){Je===null?Je=[e]:Je.push(e)}var Ag=Ct.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function ap(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ut(h,p),h.index=0,h.sibling=null,h}function o(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,S){return p===null||p.tag!==6?(p=Xl(m,h.mode,S),p.return=h,p):(p=i(p,m),p.return=h,p)}function a(h,p,m,S){var E=m.type;return E===_n?f(h,p,m.props.children,S,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Ec(E)===p.type)?(S=i(p,m.props),S.ref=xr(h,p,m),S.return=h,S):(S=so(m.type,m.key,m.props,null,h.mode,S),S.ref=xr(h,p,m),S.return=h,S)}function c(h,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Jl(m,h.mode,S),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function f(h,p,m,S,E){return p===null||p.tag!==7?(p=dn(m,h.mode,S,E),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xi:return m=so(p.type,p.key,p.props,null,h.mode,m),m.ref=xr(h,null,p),m.return=h,m;case Rn:return p=Jl(p,h.mode,m),p.return=h,p;case Rt:var S=p._init;return d(h,S(p._payload),m)}if(Er(p)||hr(p))return p=dn(p,h.mode,m,null),p.return=h,p;Ai(h,p)}return null}function g(h,p,m,S){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:return m.key===E?a(h,p,m,S):null;case Rn:return m.key===E?c(h,p,m,S):null;case Rt:return E=m._init,g(h,p,E(m._payload),S)}if(Er(m)||hr(m))return E!==null?null:f(h,p,m,S,null);Ai(h,m)}return null}function w(h,p,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xi:return h=h.get(S.key===null?m:S.key)||null,a(p,h,S,E);case Rn:return h=h.get(S.key===null?m:S.key)||null,c(p,h,S,E);case Rt:var T=S._init;return w(h,p,m,T(S._payload),E)}if(Er(S)||hr(S))return h=h.get(m)||null,f(p,h,S,E,null);Ai(p,S)}return null}function v(h,p,m,S){for(var E=null,T=null,j=p,L=p=0,B=null;j!==null&&L<m.length;L++){j.index>L?(B=j,j=null):B=j.sibling;var O=g(h,j,m[L],S);if(O===null){j===null&&(j=B);break}e&&j&&O.alternate===null&&t(h,j),p=o(O,p,L),T===null?E=O:T.sibling=O,T=O,j=B}if(L===m.length)return n(h,j),K&&nn(h,L),E;if(j===null){for(;L<m.length;L++)j=d(h,m[L],S),j!==null&&(p=o(j,p,L),T===null?E=j:T.sibling=j,T=j);return K&&nn(h,L),E}for(j=r(h,j);L<m.length;L++)B=w(j,h,L,m[L],S),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?L:B.key),p=o(B,p,L),T===null?E=B:T.sibling=B,T=B);return e&&j.forEach(function(Re){return t(h,Re)}),K&&nn(h,L),E}function x(h,p,m,S){var E=hr(m);if(typeof E!="function")throw Error(P(150));if(m=E.call(m),m==null)throw Error(P(151));for(var T=E=null,j=p,L=p=0,B=null,O=m.next();j!==null&&!O.done;L++,O=m.next()){j.index>L?(B=j,j=null):B=j.sibling;var Re=g(h,j,O.value,S);if(Re===null){j===null&&(j=B);break}e&&j&&Re.alternate===null&&t(h,j),p=o(Re,p,L),T===null?E=Re:T.sibling=Re,T=Re,j=B}if(O.done)return n(h,j),K&&nn(h,L),E;if(j===null){for(;!O.done;L++,O=m.next())O=d(h,O.value,S),O!==null&&(p=o(O,p,L),T===null?E=O:T.sibling=O,T=O);return K&&nn(h,L),E}for(j=r(h,j);!O.done;L++,O=m.next())O=w(j,h,L,O.value,S),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?L:O.key),p=o(O,p,L),T===null?E=O:T.sibling=O,T=O);return e&&j.forEach(function(Xt){return t(h,Xt)}),K&&nn(h,L),E}function C(h,p,m,S){if(typeof m=="object"&&m!==null&&m.type===_n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:e:{for(var E=m.key,T=p;T!==null;){if(T.key===E){if(E=m.type,E===_n){if(T.tag===7){n(h,T.sibling),p=i(T,m.props.children),p.return=h,h=p;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Ec(E)===T.type){n(h,T.sibling),p=i(T,m.props),p.ref=xr(h,T,m),p.return=h,h=p;break e}n(h,T);break}else t(h,T);T=T.sibling}m.type===_n?(p=dn(m.props.children,h.mode,S,m.key),p.return=h,h=p):(S=so(m.type,m.key,m.props,null,h.mode,S),S.ref=xr(h,p,m),S.return=h,h=S)}return l(h);case Rn:e:{for(T=m.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Jl(m,h.mode,S),p.return=h,h=p}return l(h);case Rt:return T=m._init,C(h,p,T(m._payload),S)}if(Er(m))return v(h,p,m,S);if(hr(m))return x(h,p,m,S);Ai(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Xl(m,h.mode,S),p.return=h,h=p),l(h)):n(h,p)}return C}var Yn=ap(!0),up=ap(!1),_o=Kt(null),Ao=null,Dn=null,nu=null;function ru(){nu=Dn=Ao=null}function iu(e){var t=_o.current;G(_o),e._currentValue=t}function Xs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){Ao=e,nu=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Ao===null)throw Error(P(308));Dn=e,Ao.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var ln=null;function ou(e){ln===null?ln=[e]:ln.push(e)}function cp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ou(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,ou(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;l=0,f=c=a=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(g=t,w=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(w,d,g):v,g==null)break e;d=X({},d,g);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=w,a=d):f=f.next=w,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=d}}function Tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var di={},ct=Kt(di),qr=Kt(di),Yr=Kt(di);function sn(e){if(e===di)throw Error(P(174));return e}function su(e,t){switch(W(Yr,t),W(qr,e),W(ct,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ls(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ls(t,e)}G(ct),W(ct,t)}function Xn(){G(ct),G(qr),G(Yr)}function fp(e){sn(Yr.current);var t=sn(ct.current),n=Ls(t,e.type);t!==n&&(W(qr,e),W(ct,n))}function au(e){qr.current===e&&(G(ct),G(qr))}var q=Kt(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function uu(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var no=Ct.ReactCurrentDispatcher,Ql=Ct.ReactCurrentBatchConfig,gn=0,Y=null,ie=null,le=null,No=!1,Nr=!1,Xr=0,Lg=0;function fe(){throw Error(P(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function du(e,t,n,r,i,o){if(gn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?$g:Og,e=n(r,i),Nr){o=0;do{if(Nr=!1,Xr=0,25<=o)throw Error(P(301));o+=1,le=ie=null,t.updateQueue=null,no.current=Dg,e=n(r,i)}while(Nr)}if(no.current=Io,t=ie!==null&&ie.next!==null,gn=0,le=ie=Y=null,No=!1,t)throw Error(P(300));return e}function fu(){var e=Xr!==0;return Xr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Qe(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(P(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Jr(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var f=c.lane;if((gn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=d,l=r):a=a.next=d,Y.lanes|=f,yn|=f}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=Qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pp(){}function hp(e,t){var n=Y,r=Qe(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,pu(yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Zr(9,gp.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(P(349));gn&30||mp(n,t,i)}return i}function mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,vp(t)&&xp(e)}function yp(e,t,n){return n(function(){vp(t)&&xp(e)})}function vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function xp(e){var t=wt(e,1);t!==null&&tt(t,e,1,-1)}function Pc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ig.bind(null,Y,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wp(){return Qe().memoizedState}function ro(e,t,n,r){var i=lt();Y.flags|=e,i.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&cu(r,l.deps)){i.memoizedState=Zr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Zr(1|t,n,o,r)}function Rc(e,t){return ro(8390656,8,e,t)}function pu(e,t){return tl(2048,8,e,t)}function Sp(e,t){return tl(4,2,e,t)}function Cp(e,t){return tl(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,kp.bind(null,t,e),n)}function hu(){}function jp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pp(e,t,n){return gn&21?(rt(n,t)||(n=zf(),Y.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function zg(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{M=n,Ql.transition=r}}function Rp(){return Qe().memoizedState}function Ng(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(e))Ap(t,n);else if(n=cp(e,t,n,r),n!==null){var i=ve();tt(n,e,r,i),Lp(n,t,r)}}function Ig(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,rt(s,l)){var a=t.interleaved;a===null?(i.next=i,ou(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=cp(e,t,i,r),n!==null&&(i=ve(),tt(n,e,r,i),Lp(n,t,r))}}function _p(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ap(e,t){Nr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}var Io={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},$g={readContext:Ve,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ng.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:hu,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=zg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=lt();if(K){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ae===null)throw Error(P(349));gn&30||mp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rc(yp.bind(null,r,o,e),[e]),r.flags|=2048,Zr(9,gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=lt(),t=ae.identifierPrefix;if(K){var n=gt,r=mt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Tp,useReducer:Gl,useRef:wp,useState:function(){return Gl(Jr)},useDebugValue:hu,useDeferredValue:function(e){var t=Qe();return Pp(t,ie.memoizedState,e)},useTransition:function(){var e=Gl(Jr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1},Dg={readContext:Ve,useCallback:jp,useContext:Ve,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Tp,useReducer:Kl,useRef:wp,useState:function(){return Kl(Jr)},useDebugValue:hu,useDeferredValue:function(e){var t=Qe();return ie===null?t.memoizedState=e:Pp(t,ie.memoizedState,e)},useTransition:function(){var e=Kl(Jr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Mt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Mt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(tt(t,e,r,n),to(t,e,r))}};function _c(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,o):!0}function zp(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ee(t)?hn:ge.current,r=t.contextTypes,o=(r=r!=null)?Kn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Zs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ee(t)?hn:ge.current,i.context=Kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Js(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),Lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=dm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,ca=r),ea(e,t)},n}function Ip(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ea(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ea(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Fg=Ct.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?up(t,null,n,r):Yn(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var o=t.ref;return Vn(t,i),r=du(e,t,n,r,o,i),n=fu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(K&&n&&Za(t),t.flags|=1,ye(e,t,r,i),t.child)}function $c(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$p(e,t,o,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(l,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return ta(e,t,n,r,i)}function Op(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Fn,Ie),Ie|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Fn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Fn,Ie),Ie|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Fn,Ie),Ie|=r;return ye(e,t,i,n),t.child}function Dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ta(e,t,n,r,i){var o=Ee(n)?hn:ge.current;return o=Kn(t,o),Vn(t,i),n=du(e,t,n,r,o,i),r=fu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(K&&r&&Za(t),t.flags|=1,ye(e,t,n,i),t.child)}function Oc(e,t,n,r,i){if(Ee(n)){var o=!0;To(t)}else o=!1;if(Vn(t,i),t.stateNode===null)io(e,t),zp(t,n,r),Zs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ee(n)?hn:ge.current,c=Kn(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ac(t,l,r,c),_t=!1;var g=t.memoizedState;l.state=g,Lo(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||_t?(typeof f=="function"&&(Js(t,n,f,r),a=t.memoizedState),(s=_t||_c(t,n,s,r,g,a,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,dp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ye(t.type,s),l.props=c,d=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ee(n)?hn:ge.current,a=Kn(t,a));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||g!==a)&&Ac(t,l,r,a),_t=!1,g=t.memoizedState,l.state=g,Lo(t,r,l,i);var v=t.memoizedState;s!==d||g!==v||ke.current||_t?(typeof w=="function"&&(Js(t,n,w,r),v=t.memoizedState),(c=_t||_c(t,n,c,r,g,v,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return na(e,t,n,r,o,i)}function na(e,t,n,r,i,o){Dp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Sc(t,n,!1),St(e,t,o);r=t.stateNode,Fg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,s,o)):ye(e,t,s,o),t.memoizedState=r.state,i&&Sc(t,n,!0),t.child}function bp(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),su(e,t.containerInfo)}function Dc(e,t,n,r,i){return qn(),tu(i),t.flags|=256,ye(e,t,n,r),t.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ol(l,r,0,null),e=dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ia(n),t.memoizedState=ra,e):mu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Bg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ut(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ut(s,o):(o=dn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ia(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ra,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mu(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&tu(r),Yn(t,e.child,null,n),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(P(422))),Li(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ol({mode:"visible",children:r.children},i,0,null),o=dn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=ia(l),t.memoizedState=ra,o);if(!(t.mode&1))return Li(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=ql(o,r,void 0),Li(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),tt(r,e,i,-1))}return Su(),r=ql(Error(P(421))),Li(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=bt(i.nextSibling),Oe=t,K=!0,Je=null,e!==null&&(Me[Ue++]=mt,Me[Ue++]=gt,Me[Ue++]=mn,mt=e.id,gt=e.overflow,mn=t),t=mu(t,r.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xs(e.return,t,n)}function Yl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yl(t,!0,n,null,o);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mg(e,t,n){switch(t.tag){case 3:bp(t),qn();break;case 5:fp(t);break;case 1:Ee(t.type)&&To(t);break;case 4:su(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(_o,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(W(q,q.current&1),e=St(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return St(e,t,n)}var Mp,oa,Up,Hp;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oa=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sn(ct.current);var o=null;switch(n){case"input":i=Ps(e,i),r=Ps(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=As(e,i),r=As(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}zs(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(br.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(br.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&jo(),pe(t),null;case 3:return r=t.stateNode,Xn(),G(ke),G(ge),uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(pa(Je),Je=null))),oa(e,t),pe(t),null;case 5:au(t);var i=sn(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return pe(t),null}if(e=sn(ct.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)V(Tr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Gu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":qu(r,o),V("invalid",r)}zs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ri(r.textContent,s,e),i=["children",""+s]):br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":wi(r),Ku(r,o,!0);break;case"textarea":wi(r),Yu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[Kr]=r,Mp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ns(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)V(Tr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Gu(e,r),i=Ps(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":qu(e,r),i=As(e,r),V("invalid",e);break;default:i=r}zs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?wf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fr(e,a):typeof a=="number"&&Fr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(br.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Fa(e,o,a,l))}switch(n){case"input":wi(e),Ku(e,r,!1);break;case"textarea":wi(e),Yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=sn(Yr.current),sn(ct.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return pe(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&$e!==null&&t.mode&1&&!(t.flags&128))sp(),qn(),t.flags|=98560,o=!1;else if(o=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[at]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Je!==null&&(pa(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):Su())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Xn(),oa(e,t),e===null&&Qr(t.stateNode.containerInfo),pe(t),null;case 10:return iu(t.type._context),pe(t),null;case 17:return Ee(t.type)&&jo(),pe(t),null;case 19:if(G(q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)wr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=zo(e),l!==null){for(t.flags|=128,wr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Zn&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=zo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return pe(t),null}else 2*Z()-o.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Hg(e,t){switch(eu(t),t.tag){case 1:return Ee(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),G(ke),G(ge),uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return au(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return Xn(),null;case 10:return iu(t.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var zi=!1,he=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,A=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){J(e,t,r)}}var Fc=!1;function Vg(e,t){if(Hs=So,e=Kf(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,f=0,d=e,g=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==o||r!==0&&d.nodeType!==3||(a=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(w=d.firstChild)!==null;)g=d,d=w;for(;;){if(d===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++f===r&&(a=l),(w=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ws={focusedElem:e,selectionRange:n},So=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Fc,Fc=!1,v}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&la(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Kr],delete t[Gs],delete t[Pg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}var ue=null,Xe=!1;function jt(e,t,n){for(n=n.child;n!==null;)Qp(e,t,n),n=n.sibling}function Qp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:he||bn(n,t);case 6:var r=ue,i=Xe;ue=null,jt(e,t,n),ue=r,Xe=i,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),Hr(e)):Hl(ue,n.stateNode));break;case 4:r=ue,i=Xe,ue=n.stateNode.containerInfo,Xe=!0,jt(e,t,n),ue=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&la(n,t,l),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!he&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,jt(e,t,n),he=r):jt(e,t,n);break;default:jt(e,t,n)}}function Mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var i=e1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Xe=!1;break e;case 3:ue=s.stateNode.containerInfo,Xe=!0;break e;case 4:ue=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(ue===null)throw Error(P(160));Qp(o,l,i),ue=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gp(t,e),t=t.sibling}function Gp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{Ir(3,e,e.return),rl(3,e)}catch(x){J(e,e.return,x)}try{Ir(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),Ns(s,l);var c=Ns(s,o);for(l=0;l<a.length;l+=2){var f=a[l],d=a[l+1];f==="style"?wf(i,d):f==="dangerouslySetInnerHTML"?vf(i,d):f==="children"?Fr(i,d):Fa(i,f,d,c)}switch(s){case"input":Rs(i,o);break;case"textarea":gf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Mn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(x){J(e,e.return,x)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){J(e,e.return,x)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vu=Z())),r&4&&Mc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||f,qe(t,e),he=c):qe(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(d=A=f;A!==null;){switch(g=A,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:bn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){Hc(d);continue}}w!==null?(w.return=g,A=w):Hc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=xf("display",l))}catch(x){J(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){J(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qe(t,e),ot(e),r&4&&Mc(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var o=Bc(e);ua(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Bc(e);aa(e,s,l);break;default:throw Error(P(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qg(e,t,n){A=e,Kp(e)}function Kp(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||zi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||he;s=zi;var c=he;if(zi=l,(he=a)&&!c)for(A=i;A!==null;)l=A,a=l.child,l.tag===22&&l.memoizedState!==null?Wc(i):a!==null?(a.return=l,A=a):Wc(i);for(;o!==null;)A=o,Kp(o),o=o.sibling;A=i,zi=s,he=c}Uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Uc(e)}}function Uc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Hr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}he||t.flags&512&&sa(t)}catch(g){J(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Hc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Wc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){J(t,i,a)}}var o=t.return;try{sa(t)}catch(a){J(t,o,a)}break;case 5:var l=t.return;try{sa(t)}catch(a){J(t,l,a)}}}catch(a){J(t,t.return,a)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var Gg=Math.ceil,$o=Ct.ReactCurrentDispatcher,gu=Ct.ReactCurrentOwner,We=Ct.ReactCurrentBatchConfig,b=0,ae=null,te=null,ce=0,Ie=0,Fn=Kt(0),oe=0,ei=null,yn=0,il=0,yu=0,$r=null,Se=null,vu=0,Zn=1/0,ft=null,Oo=!1,ca=null,Bt=null,Ni=!1,Nt=null,Do=0,Or=0,da=null,oo=-1,lo=0;function ve(){return b&6?Z():oo!==-1?oo:oo=Z()}function Mt(e){return e.mode&1?b&2&&ce!==0?ce&-ce:Ag.transition!==null?(lo===0&&(lo=zf()),lo):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function tt(e,t,n,r){if(50<Or)throw Or=0,da=null,Error(P(185));ai(e,n,r),(!(b&2)||e!==ae)&&(e===ae&&(!(b&2)&&(il|=n),oe===4&&Lt(e,ce)),je(e,r),n===1&&b===0&&!(t.mode&1)&&(Zn=Z()+500,el&&qt()))}function je(e,t){var n=e.callbackNode;Am(e,t);var r=wo(e,e===ae?ce:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?_g(Vc.bind(null,e)):ip(Vc.bind(null,e)),jg(function(){!(b&6)&&qt()}),n=null;else{switch(Nf(r)){case 1:n=Wa;break;case 4:n=Af;break;case 16:n=xo;break;case 536870912:n=Lf;break;default:n=xo}n=nh(n,qp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qp(e,t){if(oo=-1,lo=0,b&6)throw Error(P(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=wo(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var i=b;b|=2;var o=Xp();(ae!==e||ce!==t)&&(ft=null,Zn=Z()+500,cn(e,t));do try{Yg();break}catch(s){Yp(e,s)}while(!0);ru(),$o.current=o,b=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=bs(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=ei,cn(e,0),Lt(e,r),je(e,Z()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kg(i)&&(t=bo(e,r),t===2&&(o=bs(e),o!==0&&(r=o,t=fa(e,o))),t===1))throw n=ei,cn(e,0),Lt(e,r),je(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:rn(e,Se,ft);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=vu+500-Z(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qs(rn.bind(null,e,Se,ft),t);break}rn(e,Se,ft);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-et(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=Qs(rn.bind(null,e,Se,ft),r);break}rn(e,Se,ft);break;case 5:rn(e,Se,ft);break;default:throw Error(P(329))}}}return je(e,Z()),e.callbackNode===n?qp.bind(null,e):null}function fa(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=Se,Se=n,t!==null&&pa(t)),e}function pa(e){Se===null?Se=e:Se.push.apply(Se,e)}function Kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~yu,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Vc(e){if(b&6)throw Error(P(327));Qn();var t=wo(e,0);if(!(t&1))return je(e,Z()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=bs(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=ei,cn(e,0),Lt(e,t),je(e,Z()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Se,ft),je(e,Z()),null}function xu(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Zn=Z()+500,el&&qt())}}function vn(e){Nt!==null&&Nt.tag===0&&!(b&6)&&Qn();var t=b;b|=1;var n=We.transition,r=M;try{if(We.transition=null,M=1,e)return e()}finally{M=r,We.transition=n,b=t,!(b&6)&&qt()}}function wu(){Ie=Fn.current,G(Fn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eg(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Xn(),G(ke),G(ge),uu();break;case 5:au(r);break;case 4:Xn();break;case 13:G(q);break;case 19:G(q);break;case 10:iu(r.type._context);break;case 22:case 23:wu()}n=n.return}if(ae=e,te=e=Ut(e.current,null),ce=Ie=t,oe=0,ei=null,yu=il=yn=0,Se=$r=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ln=null}return e}function Yp(e,t){do{var n=te;try{if(ru(),no.current=Io,No){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(gn=0,le=ie=Y=null,Nr=!1,Xr=0,gu.current=null,n===null||n.return===null){oe=1,ei=t,te=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=zc(l);if(w!==null){w.flags&=-257,Nc(w,l,s,o,t),w.mode&1&&Lc(o,c,t),t=w,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Lc(o,c,t),Su();break e}a=Error(P(426))}}else if(K&&s.mode&1){var C=zc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Nc(C,l,s,o,t),tu(Jn(a,s));break e}}o=a=Jn(a,s),oe!==4&&(oe=2),$r===null?$r=[o]:$r.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Np(o,a,t);jc(o,h);break e;case 1:s=a;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Ip(o,s,t);jc(o,S);break e}}o=o.return}while(o!==null)}Zp(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Xp(){var e=$o.current;return $o.current=Io,e===null?Io:e}function Su(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(yn&268435455)&&!(il&268435455)||Lt(ae,ce)}function bo(e,t){var n=b;b|=2;var r=Xp();(ae!==e||ce!==t)&&(ft=null,cn(e,t));do try{qg();break}catch(i){Yp(e,i)}while(!0);if(ru(),b=n,$o.current=r,te!==null)throw Error(P(261));return ae=null,ce=0,oe}function qg(){for(;te!==null;)Jp(te)}function Yg(){for(;te!==null&&!Sm();)Jp(te)}function Jp(e){var t=th(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Zp(e):te=t,gu.current=null}function Zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hg(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=Ug(n,t,Ie),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function rn(e,t,n){var r=M,i=We.transition;try{We.transition=null,M=1,Xg(e,t,n,r)}finally{We.transition=i,M=r}return null}function Xg(e,t,n,r){do Qn();while(Nt!==null);if(b&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lm(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,nh(xo,function(){return Qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var l=M;M=1;var s=b;b|=4,gu.current=null,Vg(e,n),Gp(n,e),yg(Ws),So=!!Hs,Ws=Hs=null,e.current=n,Qg(n),Cm(),b=s,M=l,We.transition=o}else e.current=n;if(Ni&&(Ni=!1,Nt=e,Do=i),o=e.pendingLanes,o===0&&(Bt=null),jm(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oo)throw Oo=!1,e=ca,ca=null,e;return Do&1&&e.tag!==0&&Qn(),o=e.pendingLanes,o&1?e===da?Or++:(Or=0,da=e):Or=0,qt(),null}function Qn(){if(Nt!==null){var e=Nf(Do),t=We.transition,n=M;try{if(We.transition=null,M=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Do=0,b&6)throw Error(P(331));var i=b;for(b|=4,A=e.current;A!==null;){var o=A,l=o.child;if(A.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(A=c;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Ir(8,f,o)}var d=f.child;if(d!==null)d.return=f,A=d;else for(;A!==null;){f=A;var g=f.sibling,w=f.return;if(Wp(f),f===c){A=null;break}if(g!==null){g.return=w,A=g;break}A=w}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}A=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,A=l;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var p=e.current;for(A=p;A!==null;){l=A;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,A=m;else e:for(l=p;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:rl(9,s)}}catch(E){J(s,s.return,E)}if(s===l){A=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,A=S;break e}A=s.return}}if(b=i,qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{M=n,We.transition=t}}return!1}function Qc(e,t,n){t=Jn(n,t),t=Np(e,t,1),e=Ft(e,t,1),t=ve(),e!==null&&(ai(e,1,t),je(e,t))}function J(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Jn(n,e),e=Ip(t,e,1),t=Ft(t,e,1),e=ve(),t!==null&&(ai(t,1,e),je(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>Z()-vu?cn(e,0):yu|=n),je(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=ve();e=wt(e,t),e!==null&&(ai(e,t,n),je(e,n))}function Zg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function e1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Mg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&op(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var i=Kn(t,ge.current);Vn(t,n),i=du(null,t,r,e,i,n);var o=fu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lu(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,Zs(t,r,e,n),t=na(null,t,r,!0,o,n)):(t.tag=0,K&&o&&Za(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=n1(r),e=Ye(r,e),i){case 0:t=ta(null,t,r,e,n);break e;case 1:t=Oc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=$c(null,t,r,Ye(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Oc(e,t,r,i,n);case 3:e:{if(bp(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dp(e,t),Lo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jn(Error(P(423)),t),t=Dc(e,t,r,n,i);break e}else if(r!==i){i=Jn(Error(P(424)),t),t=Dc(e,t,r,n,i);break e}else for($e=bt(t.stateNode.containerInfo.firstChild),Oe=t,K=!0,Je=null,n=up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){t=St(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return fp(t),e===null&&Ys(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Vs(r,i)?l=null:o!==null&&Vs(r,o)&&(t.flags|=32),Dp(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Ys(t),null;case 13:return Fp(e,t,n);case 4:return su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ic(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(_o,r._currentValue),r._currentValue=l,o!==null)if(rt(o.value,l)){if(o.children===i.children&&!ke.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=yt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xs(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Xs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vn(t,n),i=Ve(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),$c(e,t,r,i,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),io(e,t),t.tag=1,Ee(r)?(e=!0,To(t)):e=!1,Vn(t,n),zp(t,r,i),Zs(t,r,i,n),na(null,t,r,!0,e,n);case 19:return Bp(e,t,n);case 22:return Op(e,t,n)}throw Error(P(156,t.tag))};function nh(e,t){return _f(e,t)}function t1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new t1(e,t,n,r)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n1(e){if(typeof e=="function")return Cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===Ua)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Cu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _n:return dn(n.children,i,o,t);case Ba:l=8,i|=8;break;case ks:return e=He(12,n,t,i|2),e.elementType=ks,e.lanes=o,e;case Es:return e=He(13,n,t,i),e.elementType=Es,e.lanes=o,e;case js:return e=He(19,n,t,i),e.elementType=js,e.lanes=o,e;case ff:return ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:l=10;break e;case df:l=9;break e;case Ma:l=11;break e;case Ua:l=14;break e;case Rt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function ol(e,t,n,r){return e=He(22,e,r,t),e.elementType=ff,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ku(e,t,n,r,i,o,l,s,a){return e=new r1(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(o),e}function i1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return Qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ee(n))return rp(e,n,t)}return t}function ih(e,t,n,r,i,o,l,s,a){return e=ku(n,r,!0,e,i,o,l,s,a),e.context=rh(null),n=e.current,r=ve(),i=Mt(n),o=yt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,ai(e,i,r),je(e,r),e}function ll(e,t,n,r){var i=t.current,o=ve(),l=Mt(i);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,l),e!==null&&(tt(e,i,l,o),to(e,i,l)),l}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function o1(){return null}var oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function ju(e){this._internalRoot=e}sl.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ll(e,t,null,null)};sl.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){ll(null,e,null,null)}),t[xt]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&bf(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function l1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Fo(l);o.call(c)}}var l=ih(t,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=l,e[xt]=l.current,Qr(e.nodeType===8?e.parentNode:e),vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Fo(a);s.call(c)}}var a=ku(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=a,e[xt]=a.current,Qr(e.nodeType===8?e.parentNode:e),vn(function(){ll(t,a,n,r)}),a}function ul(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Fo(l);s.call(a)}}ll(t,l,e,i)}else l=l1(n,t,e,i,r);return Fo(l)}If=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(Va(t,n|1),je(t,Z()),!(b&6)&&(Zn=Z()+500,qt()))}break;case 13:vn(function(){var r=wt(e,1);if(r!==null){var i=ve();tt(r,e,1,i)}}),Eu(e,1)}};Qa=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=ve();tt(t,e,134217728,n)}Eu(e,134217728)}};$f=function(e){if(e.tag===13){var t=Mt(e),n=wt(e,t);if(n!==null){var r=ve();tt(n,e,t,r)}Eu(e,t)}};Of=function(){return M};Df=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};$s=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(P(90));hf(r),Rs(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};kf=xu;Ef=vn;var s1={usingClientEntryPoint:!1,Events:[ci,Nn,Zo,Sf,Cf,xu]},Sr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a1={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||o1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{qo=Ii.inject(a1),ut=Ii}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(P(200));return i1(e,t,null,n)};Fe.createRoot=function(e,t){if(!Tu(e))throw Error(P(299));var n=!1,r="",i=oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ku(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new ju(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Pf(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return vn(e)};Fe.hydrate=function(e,t,n){if(!al(t))throw Error(P(200));return ul(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ih(t,null,e,1,n??null,i,!1,o,l),e[xt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sl(t)};Fe.render=function(e,t,n){if(!al(t))throw Error(P(200));return ul(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!al(e))throw Error(P(40));return e._reactRootContainer?(vn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Fe.unstable_batchedUpdates=xu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ul(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),lf.exports=Fe;var u1=lf.exports,qc=u1;Ss.createRoot=qc.createRoot,Ss.hydrateRoot=qc.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function ti(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Q="-ms-",Dr="-moz-",F="-webkit-",sh="comm",cl="rule",Pu="decl",c1="@import",ah="@keyframes",d1="@layer",uh=Math.abs,Ru=String.fromCharCode,ha=Object.assign;function f1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function ch(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function ao(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function er(e,t,n){return e.slice(t,n)}function st(e){return e.length}function dh(e){return e.length}function Pr(e,t){return t.push(e),e}function p1(e,t){return e.map(t).join("")}function Yc(e,t){return e.filter(function(n){return!pt(n,t)})}var dl=1,tr=1,fh=0,Ge=0,ee=0,ar="";function fl(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:dl,column:tr,length:l,return:"",siblings:s}}function Pt(e,t){return ha(fl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=Pt(e.root,{children:[e]});Pr(e,e.siblings)}function h1(){return ee}function m1(){return ee=Ge>0?se(ar,--Ge):0,tr--,ee===10&&(tr=1,dl--),ee}function nt(){return ee=Ge<fh?se(ar,Ge++):0,tr++,ee===10&&(tr=1,dl++),ee}function fn(){return se(ar,Ge)}function uo(){return Ge}function pl(e,t){return er(ar,e,t)}function ma(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g1(e){return dl=tr=1,fh=st(ar=e),Ge=0,[]}function y1(e){return ar="",e}function Zl(e){return ch(pl(Ge-1,ga(e===91?e+2:e===40?e+1:e)))}function v1(e){for(;(ee=fn())&&ee<33;)nt();return ma(e)>2||ma(ee)>3?"":" "}function x1(e,t){for(;--t&&nt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return pl(e,uo()+(t<6&&fn()==32&&nt()==32))}function ga(e){for(;nt();)switch(ee){case e:return Ge;case 34:case 39:e!==34&&e!==39&&ga(ee);break;case 40:e===41&&ga(e);break;case 92:nt();break}return Ge}function w1(e,t){for(;nt()&&e+ee!==57;)if(e+ee===84&&fn()===47)break;return"/*"+pl(t,Ge-1)+"*"+Ru(e===47?e:nt())}function S1(e){for(;!ma(fn());)nt();return pl(e,Ge)}function C1(e){return y1(co("",null,null,null,[""],e=g1(e),0,[0],e))}function co(e,t,n,r,i,o,l,s,a){for(var c=0,f=0,d=l,g=0,w=0,v=0,x=1,C=1,h=1,p=0,m="",S=i,E=o,T=r,j=m;C;)switch(v=p,p=nt()){case 40:if(v!=108&&se(j,d-1)==58){ao(j+=$(Zl(p),"&","&\f"),"&\f",uh(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Zl(p);break;case 9:case 10:case 13:case 32:j+=v1(v);break;case 92:j+=x1(uo()-1,7);continue;case 47:switch(fn()){case 42:case 47:Pr(k1(w1(nt(),uo()),t,n,a),a);break;default:j+="/"}break;case 123*x:s[c++]=st(j)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+f:h==-1&&(j=$(j,/\f/g,"")),w>0&&st(j)-d&&Pr(w>32?Jc(j+";",r,n,d-1,a):Jc($(j," ","")+";",r,n,d-2,a),a);break;case 59:j+=";";default:if(Pr(T=Xc(j,t,n,c,f,i,s,m,S=[],E=[],d,o),o),p===123)if(f===0)co(j,t,T,T,S,o,d,s,E);else switch(g===99&&se(j,3)===110?100:g){case 100:case 108:case 109:case 115:co(e,T,T,r&&Pr(Xc(e,T,T,0,0,i,s,m,i,S=[],d,E),E),i,E,d,s,r?S:E);break;default:co(j,T,T,T,[""],E,0,s,E)}}c=f=w=0,x=h=1,m=j="",d=l;break;case 58:d=1+st(j),w=v;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&m1()==125)continue}switch(j+=Ru(p),p*x){case 38:h=f>0?1:(j+="\f",-1);break;case 44:s[c++]=(st(j)-1)*h,h=1;break;case 64:fn()===45&&(j+=Zl(nt())),g=fn(),f=d=st(m=j+=S1(uo())),p++;break;case 45:v===45&&st(j)==2&&(x=0)}}return o}function Xc(e,t,n,r,i,o,l,s,a,c,f,d){for(var g=i-1,w=i===0?o:[""],v=dh(w),x=0,C=0,h=0;x<r;++x)for(var p=0,m=er(e,g+1,g=uh(C=l[x])),S=e;p<v;++p)(S=ch(C>0?w[p]+" "+m:$(m,/&\f/g,w[p])))&&(a[h++]=S);return fl(e,t,n,i===0?cl:s,a,c,f,d)}function k1(e,t,n,r){return fl(e,t,n,sh,Ru(h1()),er(e,2,-2),0,r)}function Jc(e,t,n,r,i){return fl(e,t,n,Pu,er(e,0,r),er(e,r+1,-1),r,i)}function ph(e,t,n){switch(f1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Dr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Dr+e+Q+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+Q+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Q+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Q+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+Q+e+e;case 6165:return F+e+Q+"flex-"+e+e;case 5187:return F+e+$(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return F+e+Q+"flex-item-"+$(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":Q+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return F+e+Q+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+Q+$(e,"shrink","negative")+e;case 5292:return F+e+Q+$(e,"basis","preferred-size")+e;case 6060:return F+"box-"+$(e,"-grow","")+F+e+Q+$(e,"grow","positive")+e;case 4554:return F+$(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!pt(e,/flex-|baseline/))return Q+"grid-column-align"+er(e,t)+e;break;case 2592:case 3360:return Q+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pt(r.props,/grid-\w+-end/)})?~ao(e+(n=n[t].value),"span",0)?e:Q+$(e,"-start","")+e+Q+"grid-row-span:"+(~ao(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":Q+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:Q+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Dr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ao(e,"stretch",0)?ph($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,c){return Q+i+":"+o+c+(l?Q+i+"-span:"+(s?a:+a-+o)+c:"")+e});case 4949:if(se(e,t+6)===121)return $(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Q+"$2box$3")+e;case 100:return $(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Bo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function E1(e,t,n,r){switch(e.type){case d1:if(e.children.length)break;case c1:case Pu:return e.return=e.return||e.value;case sh:return"";case ah:return e.return=e.value+"{"+Bo(e.children,r)+"}";case cl:if(!st(e.value=e.props.join(",")))return""}return st(n=Bo(e.children,r))?e.return=e.value+"{"+n+"}":""}function j1(e){var t=dh(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function T1(e){return function(t){t.root||(t=t.return)&&e(t)}}function P1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=ph(e.value,e.length,n);return;case ah:return Bo([Pt(e,{value:$(e.value,"@","@"+F)})],r);case cl:if(e.length)return p1(n=e.props,function(i){switch(pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(Pt(e,{props:[$(i,/:(read-\w+)/,":"+Dr+"$1")]})),jn(Pt(e,{props:[i]})),ha(e,{props:Yc(n,r)});break;case"::placeholder":jn(Pt(e,{props:[$(i,/:(plac\w+)/,":"+F+"input-$1")]})),jn(Pt(e,{props:[$(i,/:(plac\w+)/,":"+Dr+"$1")]})),jn(Pt(e,{props:[$(i,/:(plac\w+)/,Q+"input-$1")]})),jn(Pt(e,{props:[i]})),ha(e,{props:Yc(n,r)});break}return""})}}var R1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ne={},nr=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",hh="active",mh="data-styled-version",hl="6.1.12",_u=`/*!sc*/
`,Mo=typeof window<"u"&&"HTMLElement"in window,_1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==""?Ne.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ne.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.SC_DISABLE_SPEEDY!==void 0&&Ne.SC_DISABLE_SPEEDY!==""&&Ne.SC_DISABLE_SPEEDY!=="false"&&Ne.SC_DISABLE_SPEEDY),A1={},ml=Object.freeze([]),rr=Object.freeze({});function gh(e,t,n){return n===void 0&&(n=rr),e.theme!==n.theme&&e.theme||t||n.theme}var yh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),L1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z1=/(^-|-$)/g;function Zc(e){return e.replace(L1,"-").replace(z1,"")}var N1=/(a)(d)/gi,$i=52,ed=function(e){return String.fromCharCode(e+(e>25?39:97))};function ya(e){var t,n="";for(t=Math.abs(e);t>$i;t=t/$i|0)n=ed(t%$i)+n;return(ed(t%$i)+n).replace(N1,"$1-$2")}var es,vh=5381,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xh=function(e){return Bn(vh,e)};function wh(e){return ya(xh(e)>>>0)}function I1(e){return e.displayName||e.name||"Component"}function ts(e){return typeof e=="string"&&!0}var Sh=typeof Symbol=="function"&&Symbol.for,Ch=Sh?Symbol.for("react.memo"):60115,$1=Sh?Symbol.for("react.forward_ref"):60112,O1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b1=((es={})[$1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},es[Ch]=kh,es);function td(e){return("type"in(t=e)&&t.type.$$typeof)===Ch?kh:"$$typeof"in e?b1[e.$$typeof]:O1;var t}var F1=Object.defineProperty,B1=Object.getOwnPropertyNames,nd=Object.getOwnPropertySymbols,M1=Object.getOwnPropertyDescriptor,U1=Object.getPrototypeOf,rd=Object.prototype;function Eh(e,t,n){if(typeof t!="string"){if(rd){var r=U1(t);r&&r!==rd&&Eh(e,r,n)}var i=B1(t);nd&&(i=i.concat(nd(t)));for(var o=td(e),l=td(t),s=0;s<i.length;++s){var a=i[s];if(!(a in D1||n&&n[a]||l&&a in l||o&&a in o)){var c=M1(t,a);try{F1(e,a,c)}catch{}}}}return e}function ir(e){return typeof e=="function"}function Au(e){return typeof e=="object"&&"styledComponentId"in e}function an(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ni(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xa(e,t,n){if(n===void 0&&(n=!1),!n&&!ni(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xa(e[r],t[r]);else if(ni(t))for(var r in t)e[r]=xa(e[r],t[r]);return e}function Lu(e,t){Object.defineProperty(e,"toString",{value:t})}function fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var H1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw fi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(_u);return n},e}(),fo=new Map,Uo=new Map,po=1,Oi=function(e){if(fo.has(e))return fo.get(e);for(;Uo.has(po);)po++;var t=po++;return fo.set(e,t),Uo.set(t,e),t},W1=function(e,t){po=t+1,fo.set(e,t),Uo.set(t,e)},V1="style[".concat(nr,"][").concat(mh,'="').concat(hl,'"]'),Q1=new RegExp("^".concat(nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},K1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_u),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(Q1);if(a){var c=0|parseInt(a[1],10),f=a[2];c!==0&&(W1(f,c),G1(e,f,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},id=function(e){for(var t=document.querySelectorAll(V1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(nr)!==hh&&(K1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function q1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(nr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(nr,hh),r.setAttribute(mh,hl);var l=q1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Y1=function(){function e(t){this.element=jh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw fi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),X1=function(){function e(t){this.element=jh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),J1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),od=Mo,Z1={isServer:!Mo,useCSSOMInjection:!_1},Ho=function(){function e(t,n,r){t===void 0&&(t=rr),n===void 0&&(n={});var i=this;this.options=me(me({},Z1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mo&&od&&(od=!1,id(this)),Lu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",c=function(d){var g=function(h){return Uo.get(h)}(d);if(g===void 0)return"continue";var w=o.names.get(g),v=l.getGroup(d);if(w===void 0||!w.size||v.length===0)return"continue";var x="".concat(nr,".g").concat(d,'[id="').concat(g,'"]'),C="";w!==void 0&&w.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(v).concat(x,'{content:"').concat(C,'"}').concat(_u)},f=0;f<s;f++)c(f);return a}(i)})}return e.registerId=function(t){return Oi(t)},e.prototype.rehydrate=function(){!this.server&&Mo&&id(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new J1(i):r?new Y1(i):new X1(i)}(this.options),new H1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ey=/&/g,ty=/^\s*\/\/.*$/gm;function Th(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Th(n.children,t)),n})}function ny(e){var t,n,r,i=rr,o=i.options,l=o===void 0?rr:o,s=i.plugins,a=s===void 0?ml:s,c=function(g,w,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},f=a.slice();f.push(function(g){g.type===cl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(ey,n).replace(r,c))}),l.prefix&&f.push(P1),f.push(E1);var d=function(g,w,v,x){w===void 0&&(w=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(ty,""),h=C1(v||w?"".concat(v," ").concat(w," { ").concat(C," }"):C);l.namespace&&(h=Th(h,l.namespace));var p=[];return Bo(h,j1(f.concat(T1(function(m){return p.push(m)})))),p};return d.hash=a.length?a.reduce(function(g,w){return w.name||fi(15),Bn(g,w.name)},vh).toString():"",d}var ry=new Ho,wa=ny(),Ph=Ze.createContext({shouldForwardProp:void 0,styleSheet:ry,stylis:wa});Ph.Consumer;Ze.createContext(void 0);function Sa(){return R.useContext(Ph)}var iy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=wa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lu(this,function(){throw fi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wa),this.name+t.hash},e}(),oy=function(e){return e>="A"&&e<="Z"};function ld(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;oy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rh=function(e){return e==null||e===!1||e===""},_h=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Rh(o)&&(Array.isArray(o)&&o.isCss||ir(o)?r.push("".concat(ld(i),":"),o,";"):ni(o)?r.push.apply(r,ti(ti(["".concat(i," {")],_h(o),!1),["}"],!1)):r.push("".concat(ld(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in R1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ht(e,t,n,r){if(Rh(e))return[];if(Au(e))return[".".concat(e.styledComponentId)];if(ir(e)){if(!ir(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ht(i,t,n,r)}var o;return e instanceof iy?n?(e.inject(n,r),[e.getName(r)]):[e]:ni(e)?_h(e):Array.isArray(e)?Array.prototype.concat.apply(ml,e.map(function(l){return Ht(l,t,n,r)})):[e.toString()]}function Ah(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ir(n)&&!Au(n))return!1}return!0}var ly=xh(hl),sy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ah(t),this.componentId=n,this.baseHash=Bn(ly,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=an(i,this.staticRulesId);else{var o=va(Ht(this.rules,t,n,r)),l=ya(Bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=an(i,l),this.staticRulesId=l}else{for(var a=Bn(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var g=va(Ht(d,t,n,r));a=Bn(a,g+f),c+=g}}if(c){var w=ya(a>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=an(i,w)}}return i},e}(),zu=Ze.createContext(void 0);zu.Consumer;var ns={};function ay(e,t,n){var r=Au(e),i=e,o=!ts(e),l=t.attrs,s=l===void 0?ml:l,a=t.componentId,c=a===void 0?function(S,E){var T=typeof S!="string"?"sc":Zc(S);ns[T]=(ns[T]||0)+1;var j="".concat(T,"-").concat(wh(hl+T+ns[T]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):a,f=t.displayName,d=f===void 0?function(S){return ts(S)?"styled.".concat(S):"Styled(".concat(I1(S),")")}(e):f,g=t.displayName&&t.componentId?"".concat(Zc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,E){return x(S,E)&&C(S,E)}}else v=x}var h=new sy(n,g,r?i.componentStyle:void 0);function p(S,E){return function(T,j,L){var B=T.attrs,O=T.componentStyle,Re=T.defaultProps,Xt=T.foldedComponentIds,Jt=T.styledComponentId,gi=T.target,jl=Ze.useContext(zu),fr=Sa(),Zt=T.shouldForwardProp||fr.shouldForwardProp,_=gh(j,jl,Re)||rr,z=function(kt,_e,dt){for(var pr,tn=me(me({},_e),{className:void 0,theme:dt}),Tl=0;Tl<kt.length;Tl+=1){var yi=ir(pr=kt[Tl])?pr(tn):pr;for(var Et in yi)tn[Et]=Et==="className"?an(tn[Et],yi[Et]):Et==="style"?me(me({},tn[Et]),yi[Et]):yi[Et]}return _e.className&&(tn.className=an(tn.className,_e.className)),tn}(B,j,_),N=z.as||gi,U={};for(var H in z)z[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&z.theme===_||(H==="forwardedAs"?U.as=z.forwardedAs:Zt&&!Zt(H,N)||(U[H]=z[H]));var en=function(kt,_e){var dt=Sa(),pr=kt.generateAndInjectStyles(_e,dt.styleSheet,dt.stylis);return pr}(O,z),Ke=an(Xt,Jt);return en&&(Ke+=" "+en),z.className&&(Ke+=" "+z.className),U[ts(N)&&!yh.has(N)?"class":"className"]=Ke,U.ref=L,R.createElement(N,U)}(m,S,E)}p.displayName=d;var m=Ze.forwardRef(p);return m.attrs=w,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?an(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var T=[],j=1;j<arguments.length;j++)T[j-1]=arguments[j];for(var L=0,B=T;L<B.length;L++)xa(E,B[L],!0);return E}({},i.defaultProps,S):S}}),Lu(m,function(){return".".concat(m.styledComponentId)}),o&&Eh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function sd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ad=function(e){return Object.assign(e,{isCss:!0})};function Lh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ir(e)||ni(e))return ad(Ht(sd(ml,ti([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ht(r):ad(Ht(sd(r,t)))}function Ca(e,t,n){if(n===void 0&&(n=rr),!t)throw fi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Lh.apply(void 0,ti([i],o,!1)))};return r.attrs=function(i){return Ca(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ca(e,t,me(me({},n),i))},r}var zh=function(e){return Ca(ay,e)},y=zh;yh.forEach(function(e){y[e]=zh(e)});var uy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ah(t),Ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(va(Ht(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Nh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Lh.apply(void 0,ti([e],t,!1)),i="sc-global-".concat(wh(JSON.stringify(r))),o=new uy(r,i),l=function(a){var c=Sa(),f=Ze.useContext(zu),d=Ze.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(d,a,c.styleSheet,f,c.stylis),Ze.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,a,c.styleSheet,f,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,a,c.styleSheet,f,c.stylis]),null};function s(a,c,f,d,g){if(o.isStatic)o.renderStyles(a,A1,f,g);else{var w=me(me({},c),{theme:gh(c,d,l.defaultProps)});o.renderStyles(a,w,f,g)}}return Ze.memo(l)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const ud="popstate";function cy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ka("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wo(i)}return fy(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ih(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dy(){return Math.random().toString(36).substr(2,8)}function cd(e,t){return{usr:e.state,key:e.key,idx:t}}function ka(e,t,n,r){return n===void 0&&(n=null),ri({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||dy()})}function Wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=It.Pop,a=null,c=f();c==null&&(c=0,l.replaceState(ri({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function d(){s=It.Pop;let C=f(),h=C==null?null:C-c;c=C,a&&a({action:s,location:x.location,delta:h})}function g(C,h){s=It.Push;let p=ka(x.location,C,h);c=f()+1;let m=cd(p,c),S=x.createHref(p);try{l.pushState(m,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&a&&a({action:s,location:x.location,delta:1})}function w(C,h){s=It.Replace;let p=ka(x.location,C,h);c=f();let m=cd(p,c),S=x.createHref(p);l.replaceState(m,"",S),o&&a&&a({action:s,location:x.location,delta:0})}function v(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:Wo(C);return p=p.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return s},get location(){return e(i,l)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ud,d),a=C,()=>{i.removeEventListener(ud,d),a=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(C){return l.go(C)}};return x}var dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dd||(dd={}));function py(e,t,n){return n===void 0&&(n="/"),hy(e,t,n,!1)}function hy(e,t,n,r){let i=typeof t=="string"?ur(t):t,o=Nu(i.pathname||"/",n);if(o==null)return null;let l=$h(e);my(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let c=Ty(o);s=Ey(l[a],c,r)}return s}function $h(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Wt([r,a.relativePath]),f=n.concat(a);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$h(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Cy(c,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Oh(o.path))i(o,l,a)}),t}function Oh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Oh(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function my(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ky(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gy=/^:[\w-]+$/,yy=3,vy=2,xy=1,wy=10,Sy=-2,fd=e=>e==="*";function Cy(e,t){let n=e.split("/"),r=n.length;return n.some(fd)&&(r+=Sy),t&&(r+=vy),n.filter(i=>!fd(i)).reduce((i,o)=>i+(gy.test(o)?yy:o===""?xy:wy),r)}function ky(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ey(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=pd({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),g=a.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=pd({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Wt([o,d.pathname]),pathnameBase:Ay(Wt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Wt([o,d.pathnameBase]))}return l}function pd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let x=s[d]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[d];return w&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ih(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ty(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ih(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Py(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ur(e):e;return{pathname:n?n.startsWith("/")?n:Ry(n,t):t,search:Ly(r),hash:zy(i)}}function Ry(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _y(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dh(e,t){let n=_y(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ur(e):(i=ri({},e),ne(!i.pathname||!i.pathname.includes("?"),rs("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),rs("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),rs("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let a=Py(i,s),c=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Ay=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ny(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fh=["post","put","patch","delete"];new Set(Fh);const Iy=["get",...Fh];new Set(Iy);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}const Iu=R.createContext(null),$y=R.createContext(null),Cn=R.createContext(null),gl=R.createContext(null),kn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Bh=R.createContext(null);function Oy(e,t){let{relative:n}=t===void 0?{}:t;pi()||ne(!1);let{basename:r,navigator:i}=R.useContext(Cn),{hash:o,pathname:l,search:s}=Uh(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Wt([r,l])),i.createHref({pathname:a,search:s,hash:o})}function pi(){return R.useContext(gl)!=null}function yl(){return pi()||ne(!1),R.useContext(gl).location}function Mh(e){R.useContext(Cn).static||R.useLayoutEffect(e)}function $u(){let{isDataRoute:e}=R.useContext(kn);return e?qy():Dy()}function Dy(){pi()||ne(!1);let e=R.useContext(Iu),{basename:t,future:n,navigator:r}=R.useContext(Cn),{matches:i}=R.useContext(kn),{pathname:o}=yl(),l=JSON.stringify(Dh(i,n.v7_relativeSplatPath)),s=R.useRef(!1);return Mh(()=>{s.current=!0}),R.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=bh(c,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Wt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,l,o,e])}function Uh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(Cn),{matches:i}=R.useContext(kn),{pathname:o}=yl(),l=JSON.stringify(Dh(i,r.v7_relativeSplatPath));return R.useMemo(()=>bh(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function by(e,t){return Fy(e,t)}function Fy(e,t,n,r){pi()||ne(!1);let{navigator:i}=R.useContext(Cn),{matches:o}=R.useContext(kn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=yl(),f;if(t){var d;let C=typeof t=="string"?ur(t):t;a==="/"||(d=C.pathname)!=null&&d.startsWith(a)||ne(!1),f=C}else f=c;let g=f.pathname||"/",w=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=py(e,{pathname:w}),x=Wy(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Wt([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Wt([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&x?R.createElement(gl.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:It.Pop}},x):x}function By(){let e=Ky(),t=Ny(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,null)}const My=R.createElement(By,null);class Uy extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(kn.Provider,{value:this.props.routeContext},R.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(Iu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(kn.Provider,{value:t},r)}function Wy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||ne(!1),l=l.slice(0,Math.min(l.length,f+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let d=l[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:g,errors:w}=n,v=d.route.loader&&g[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((f,d,g)=>{let w,v=!1,x=null,C=null;n&&(w=s&&d.route.id?s[d.route.id]:void 0,x=d.route.errorElement||My,a&&(c<0&&g===0?(v=!0,C=null):c===g&&(v=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,g+1)),p=()=>{let m;return w?m=x:v?m=C:d.route.Component?m=R.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,R.createElement(Hy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?R.createElement(Uy,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hh||{}),Vo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vo||{});function Vy(e){let t=R.useContext(Iu);return t||ne(!1),t}function Qy(e){let t=R.useContext($y);return t||ne(!1),t}function Gy(e){let t=R.useContext(kn);return t||ne(!1),t}function Wh(e){let t=Gy(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Ky(){var e;let t=R.useContext(Bh),n=Qy(Vo.UseRouteError),r=Wh(Vo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qy(){let{router:e}=Vy(Hh.UseNavigateStable),t=Wh(Vo.UseNavigateStable),n=R.useRef(!1);return Mh(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ii({fromRouteId:t},o)))},[e,t])}function oi(e){ne(!1)}function Yy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=It.Pop,navigator:o,static:l=!1,future:s}=e;pi()&&ne(!1);let a=t.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:a,navigator:o,static:l,future:ii({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=ur(r));let{pathname:f="/",search:d="",hash:g="",state:w=null,key:v="default"}=r,x=R.useMemo(()=>{let C=Nu(f,a);return C==null?null:{location:{pathname:C,search:d,hash:g,state:w,key:v},navigationType:i}},[a,f,d,g,w,v,i]);return x==null?null:R.createElement(Cn.Provider,{value:c},R.createElement(gl.Provider,{children:n,value:x}))}function Vh(e){let{children:t,location:n}=e;return by(Ea(t),n)}new Promise(()=>{});function Ea(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let o=[...t,i];if(r.type===R.Fragment){n.push.apply(n,Ea(r.props.children,o));return}r.type!==oi&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ea(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}function Xy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zy(e,t){return e.button===0&&(!t||t==="_self")&&!Jy(e)}const ev=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],tv="6";try{window.__reactRouterVersion=tv}catch{}const nv="startTransition",hd=J0[nv];function rv(e){let{basename:t,children:n,future:r,window:i}=e,o=R.useRef();o.current==null&&(o.current=cy({window:i,v5Compat:!0}));let l=o.current,[s,a]=R.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},f=R.useCallback(d=>{c&&hd?hd(()=>a(d)):a(d)},[a,c]);return R.useLayoutEffect(()=>l.listen(f),[l,f]),R.createElement(Yy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qh=R.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:c,preventScrollReset:f,unstable_viewTransition:d}=t,g=Xy(t,ev),{basename:w}=R.useContext(Cn),v,x=!1;if(typeof c=="string"&&ov.test(c)&&(v=c,iv))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=Nu(S.pathname,w);S.origin===m.origin&&E!=null?c=E+S.search+S.hash:x=!0}catch{}let C=Oy(c,{relative:i}),h=lv(c,{replace:l,state:s,target:a,preventScrollReset:f,relative:i,unstable_viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return R.createElement("a",ja({},g,{href:v||C,onClick:x||o?r:p,ref:n,target:a}))});var md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(md||(md={}));var gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gd||(gd={}));function lv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,a=$u(),c=yl(),f=Uh(e,{relative:l});return R.useCallback(d=>{if(Zy(d,n)){d.preventDefault();let g=r!==void 0?r:Wo(c)===Wo(f);a(e,{replace:g,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}},[c,a,f,r,i,n,e,o,l,s])}const sv="/assets/img/DiaGreenLogo-No-Title-Clear-Background-3FMOHvgW.png",av="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic:round-menu'%3e%3cpath%20id='Vector'%20d='M5.33333%2024H26.6667C27.4%2024%2028%2023.4%2028%2022.6667C28%2021.9333%2027.4%2021.3333%2026.6667%2021.3333H5.33333C4.6%2021.3333%204%2021.9333%204%2022.6667C4%2023.4%204.6%2024%205.33333%2024ZM5.33333%2017.3333H26.6667C27.4%2017.3333%2028%2016.7333%2028%2016C28%2015.2667%2027.4%2014.6667%2026.6667%2014.6667H5.33333C4.6%2014.6667%204%2015.2667%204%2016C4%2016.7333%204.6%2017.3333%205.33333%2017.3333ZM4%209.33333C4%2010.0667%204.6%2010.6667%205.33333%2010.6667H26.6667C27.4%2010.6667%2028%2010.0667%2028%209.33333C28%208.6%2027.4%208%2026.6667%208H5.33333C4.6%208%204%208.6%204%209.33333Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",uv=y.nav`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,cv=y.div`
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`,dv=y.img`
  height: 50px;
  cursor: pointer;
`,fv=y.h1`
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
`,pv=y.span`
  color: var(--green);
`,hv=y.button`
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
`,mv=y.div`
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
`,gv=y.div`
  width: 100%;
  padding: 8% 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;
`,yd=y(Qh)`
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-family: "Aileron-Bold";
  text-decoration: none;
  color: black;
  padding: 4% 0;
  border-bottom: 1px solid #f0f0f0;

  &:active {
    color: var(--green);
  }
`,yv=y.button`
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
`,vd=y.span`
  color: #77b9f3;
`,vv=()=>{const[e,t]=R.useState(!1),n=$u(),r=()=>{t(!e)},i=()=>{t(!1),n("/"),window.scrollTo({top:0,behavior:"smooth"})},o=s=>{t(!1),n(s),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},50)},l=()=>{t(!1),window.location.pathname==="/"?setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},100):(n("/"),setTimeout(()=>{const s=document.getElementById("contact");if(s){const f=s.offsetTop-70;window.scrollTo({top:f,behavior:"smooth"})}},500))};return u.jsxs(u.Fragment,{children:[u.jsx(uv,{children:u.jsxs(cv,{children:[u.jsx(dv,{onClick:i,src:sv,alt:"Día Dev & Design Logo"}),u.jsxs(fv,{children:[u.jsx(vd,{children:"<"}),u.jsx(pv,{children:"Día"}),u.jsx(vd,{children:": Dev & Design />"})]}),u.jsx(hv,{onClick:r,"aria-label":"Toggle menu",children:u.jsx("img",{src:av,alt:"Menu"})})]})}),u.jsx(mv,{$isOpen:e,children:u.jsxs(gv,{children:[u.jsx(yd,{to:"/",onClick:()=>o("/"),children:"Home"}),u.jsx(yd,{to:"/about",onClick:()=>o("/about"),children:"About Us"}),u.jsx(yv,{onClick:l,children:"Contact Us"})]})})]})},Gh="/assets/img/DevBro-BrzQ5_d1.svg",xv=y.div`
  width: 100%;
  min-height: 85vh;
  padding: 4% 5%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`,wv=y.div`
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
`,Sv=y.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,Cv=y.p`
  width: 100%;
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  text-align: left;
  margin: 4% 0;
`,kv=y.button`
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
`,Ev=y.div`
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
`,jv=y.span`
  color: #77b9f3;
`,Tv=()=>{const e=()=>{setTimeout(()=>{const t=document.getElementById("contact");if(t){const i=t.offsetTop-70;window.scrollTo({top:i,behavior:"smooth"})}},100)};return u.jsxs(xv,{children:[u.jsxs(wv,{children:[u.jsxs(Di,{children:["Every-",u.jsx(jv,{children:"Día"}),". "]}),u.jsx(Di,{children:"We build."}),u.jsx(Di,{children:"We create."}),u.jsxs(Di,{children:["You ",u.jsx(Sv,{children:"succeed"}),"!"]}),u.jsx(Cv,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(kv,{onClick:e,children:"Contact Us"})]}),u.jsx(Ev,{children:u.jsx("img",{src:Gh,alt:"Developer illustration"})})]})},Kh="data:image/svg+xml,%3csvg%20width='119'%20height='96'%20viewBox='0%200%20119%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M117.318%200H1.68181C0.885686%200%200.236359%200.59896%200.236359%201.33333V94.6667C0.236359%2095.4063%200.885686%2096%201.68181%2096H117.318C118.12%2096%20118.764%2095.4063%20118.764%2094.6667V1.33333C118.764%200.59896%20118.12%200%20117.318%200ZM3.12727%202.66667H115.873V20H3.12727V2.66667ZM115.873%2093.3333H3.12727V22.6667H115.873V93.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_2'%20d='M13.9682%206.66666C11.1789%206.66666%208.90909%208.76039%208.90909%2011.3333C8.90909%2013.9063%2011.1789%2016%2013.9682%2016C16.7575%2016%2019.0273%2013.9063%2019.0273%2011.3333C19.0273%208.76039%2016.7575%206.66666%2013.9682%206.66666ZM13.9682%2013.3333C12.7712%2013.3333%2011.8%2012.4375%2011.8%2011.3333C11.8%2010.2292%2012.7712%209.33332%2013.9682%209.33332C15.1652%209.33332%2016.1364%2010.2292%2016.1364%2011.3333C16.1364%2012.4375%2015.1652%2013.3333%2013.9682%2013.3333Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_3'%20d='M41.3754%2069.9267C41.6577%2070.1871%2042.0304%2070.3173%2042.3974%2070.3173C42.7644%2070.3173%2043.1371%2070.1871%2043.4194%2069.9267C43.984%2069.4058%2043.984%2068.5621%2043.4194%2068.0412L32.5334%2057.9996L43.4194%2047.958C43.984%2047.4372%2043.984%2046.5934%2043.4194%2046.0725C42.8548%2045.5517%2041.9401%2045.5517%2041.3754%2046.0725L29.4673%2057.0569C28.9027%2057.5777%2028.9027%2058.4214%2029.4673%2058.9424L41.3754%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_4'%20d='M75.3769%2069.9267C75.6592%2070.1871%2076.0319%2070.3173%2076.3989%2070.3173C76.7659%2070.3173%2077.1385%2070.1871%2077.4209%2069.9267L89.3289%2058.9423C89.8936%2058.4214%2089.8936%2057.5777%2089.3289%2057.0568L77.4209%2046.0724C76.8562%2045.5516%2075.9416%2045.5516%2075.3768%2046.0724C74.8122%2046.5932%2074.8122%2047.4369%2075.3768%2047.9579L86.2628%2057.9995L75.3768%2068.0411C74.8122%2068.5619%2074.8123%2069.4057%2075.3769%2069.9267Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_5'%20d='M49.7547%2079.2293C49.9354%2079.3022%2050.1274%2079.3335%2050.3137%2079.3335C50.8783%2079.3335%2051.4147%2079.0262%2051.6462%2078.5158L69.8156%2038.5158C70.1261%2037.8387%2069.7761%2037.0574%2069.0421%2036.771C68.3024%2036.4897%2067.461%2036.8074%2067.1505%2037.4845L48.9812%2077.4845C48.6706%2078.1616%2049.0207%2078.9429%2049.7547%2079.2293Z'%20fill='%23070D0D'/%3e%3cpath%20id='Vector_6'%20d='M109.667%207.05734C109.103%206.53651%20108.188%206.53651%20107.623%207.05734L105.032%209.44801L102.44%207.05734C101.875%206.53651%20100.961%206.53651%20100.396%207.05734C99.8312%207.57816%2099.8313%208.42187%20100.396%208.9428L102.988%2011.3335L100.396%2013.7241C99.8313%2014.245%2099.8313%2015.0887%20100.396%2015.6096C100.678%2015.87%20101.051%2016.0002%20101.418%2016.0002C101.785%2016.0002%20102.158%2015.87%20102.44%2015.6096L105.032%2013.2189L107.623%2015.6096C107.906%2015.87%20108.278%2016.0002%20108.645%2016.0002C109.012%2016.0002%20109.385%2015.87%20109.667%2015.6096C110.232%2015.0888%20110.232%2014.2451%20109.667%2013.7241L107.076%2011.3335L109.667%208.9428C110.232%208.42198%20110.232%207.57827%20109.667%207.05734Z'%20fill='%23070D0D'/%3e%3c/g%3e%3c/svg%3e",qh="/assets/img/CustomApplicationsNew-CGRyDJpo.svg",Yh="/assets/img/ProblemSolutionsNew-DGYs1PFU.svg",Xh="/assets/img/TalentIncubatorNew-Z-AuMXFv.svg",Pv=y.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 6% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,Rv=y.div`
  width: 100%;
  margin-bottom: 8%;
`,_v=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 5%;
  font-family: "Aileron-Bold";
`,Av=y.div`
  width: 100%;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  line-height: 2.2rem;

  p {
    margin: 0 0 4%;
    text-align: left;
  }
`,Lv=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,zv=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,Nv=y.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;
`,vl=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 6%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
`,Iv=y(vl)`
  background-color: #edf3ff;
`,$v=y(vl)`
  background-color: #fffaec;
`,Ov=y(vl)`
  background-color: #f0fff4;
`,Dv=y(vl)`
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
`,bv=()=>u.jsxs(Pv,{children:[u.jsxs(Rv,{children:[u.jsx(_v,{children:"We Are"}),u.jsxs(Av,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(Lv,{children:[u.jsx(zv,{children:"What We Do"}),u.jsxs(Nv,{children:[u.jsxs(Iv,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Kh,alt:"Web Development"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Web Development"}),u.jsx(Ui,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs($v,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:qh,alt:"Custom Applications"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Custom Applications"}),u.jsx(Ui,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(Ov,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Yh,alt:"Marketing Solutions"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Marketing"}),u.jsx(Ui,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(Dv,{children:[u.jsx(bi,{children:u.jsx(Fi,{src:Xh,alt:"Tech Talent Incubator"})}),u.jsxs(Bi,{children:[u.jsx(Mi,{children:"Tech Incubator"}),u.jsx(Ui,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]});function Jh(e,t){return function(){return e.apply(t,arguments)}}const{toString:Fv}=Object.prototype,{getPrototypeOf:Ou}=Object,xl=(e=>t=>{const n=Fv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),it=e=>(e=e.toLowerCase(),t=>xl(t)===e),wl=e=>t=>typeof t===e,{isArray:cr}=Array,li=wl("undefined");function Bv(e){return e!==null&&!li(e)&&e.constructor!==null&&!li(e.constructor)&&De(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zh=it("ArrayBuffer");function Mv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zh(e.buffer),t}const Uv=wl("string"),De=wl("function"),e0=wl("number"),Sl=e=>e!==null&&typeof e=="object",Hv=e=>e===!0||e===!1,ho=e=>{if(xl(e)!=="object")return!1;const t=Ou(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Wv=it("Date"),Vv=it("File"),Qv=it("Blob"),Gv=it("FileList"),Kv=e=>Sl(e)&&De(e.pipe),qv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||De(e.append)&&((t=xl(e))==="formdata"||t==="object"&&De(e.toString)&&e.toString()==="[object FormData]"))},Yv=it("URLSearchParams"),[Xv,Jv,Zv,e2]=["ReadableStream","Request","Response","Headers"].map(it),t2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),cr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function t0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,n0=e=>!li(e)&&e!==un;function Ta(){const{caseless:e}=n0(this)&&this||{},t={},n=(r,i)=>{const o=e&&t0(t,i)||i;ho(t[o])&&ho(r)?t[o]=Ta(t[o],r):ho(r)?t[o]=Ta({},r):cr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&hi(arguments[r],n);return t}const n2=(e,t,n,{allOwnKeys:r}={})=>(hi(t,(i,o)=>{n&&De(i)?e[o]=Jh(i,n):e[o]=i},{allOwnKeys:r}),e),r2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),i2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},o2=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Ou(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},l2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},s2=e=>{if(!e)return null;if(cr(e))return e;let t=e.length;if(!e0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},a2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ou(Uint8Array)),u2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},c2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},d2=it("HTMLFormElement"),f2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),xd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),p2=it("RegExp"),r0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};hi(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},h2=e=>{r0(e,(t,n)=>{if(De(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(De(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},m2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return cr(e)?r(e):r(String(e).split(t)),n},g2=()=>{},y2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,is="abcdefghijklmnopqrstuvwxyz",wd="0123456789",i0={DIGIT:wd,ALPHA:is,ALPHA_DIGIT:is+is.toUpperCase()+wd},v2=(e=16,t=i0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function x2(e){return!!(e&&De(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const w2=e=>{const t=new Array(10),n=(r,i)=>{if(Sl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=cr(r)?[]:{};return hi(r,(l,s)=>{const a=n(l,i+1);!li(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},S2=it("AsyncFunction"),C2=e=>e&&(Sl(e)||De(e))&&De(e.then)&&De(e.catch),o0=((e,t)=>e?setImmediate:t?((n,r)=>(un.addEventListener("message",({source:i,data:o})=>{i===un&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),un.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",De(un.postMessage)),k2=typeof queueMicrotask<"u"?queueMicrotask.bind(un):typeof process<"u"&&process.nextTick||o0,k={isArray:cr,isArrayBuffer:Zh,isBuffer:Bv,isFormData:qv,isArrayBufferView:Mv,isString:Uv,isNumber:e0,isBoolean:Hv,isObject:Sl,isPlainObject:ho,isReadableStream:Xv,isRequest:Jv,isResponse:Zv,isHeaders:e2,isUndefined:li,isDate:Wv,isFile:Vv,isBlob:Qv,isRegExp:p2,isFunction:De,isStream:Kv,isURLSearchParams:Yv,isTypedArray:a2,isFileList:Gv,forEach:hi,merge:Ta,extend:n2,trim:t2,stripBOM:r2,inherits:i2,toFlatObject:o2,kindOf:xl,kindOfTest:it,endsWith:l2,toArray:s2,forEachEntry:u2,matchAll:c2,isHTMLForm:d2,hasOwnProperty:xd,hasOwnProp:xd,reduceDescriptors:r0,freezeMethods:h2,toObjectSet:m2,toCamelCase:f2,noop:g2,toFiniteNumber:y2,findKey:t0,global:un,isContextDefined:n0,ALPHABET:i0,generateString:v2,isSpecCompliantForm:x2,toJSONObject:w2,isAsyncFn:S2,isThenable:C2,setImmediate:o0,asap:k2};function I(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const l0=I.prototype,s0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s0[e]={value:e}});Object.defineProperties(I,s0);Object.defineProperty(l0,"isAxiosError",{value:!0});I.from=(e,t,n,r,i,o)=>{const l=Object.create(l0);return k.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),I.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const E2=null;function Pa(e){return k.isPlainObject(e)||k.isArray(e)}function a0(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Sd(e,t,n){return e?e.concat(t).map(function(i,o){return i=a0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function j2(e){return k.isArray(e)&&!e.some(Pa)}const T2=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Cl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!k.isUndefined(C[x])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!a&&k.isBlob(v))throw new I("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,x,C){let h=v;if(v&&!C&&typeof v=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&j2(v)||(k.isFileList(v)||k.endsWith(x,"[]"))&&(h=k.toArray(v)))return x=a0(x),h.forEach(function(m,S){!(k.isUndefined(m)||m===null)&&t.append(l===!0?Sd([x],S,o):l===null?x:x+"[]",c(m))}),!1}return Pa(v)?!0:(t.append(Sd(C,x,o),c(v)),!1)}const d=[],g=Object.assign(T2,{defaultVisitor:f,convertValue:c,isVisitable:Pa});function w(v,x){if(!k.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),k.forEach(v,function(h,p){(!(k.isUndefined(h)||h===null)&&i.call(t,h,k.isString(p)?p.trim():p,x,g))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Cd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Du(e,t){this._pairs=[],e&&Cl(e,this,t)}const u0=Du.prototype;u0.append=function(t,n){this._pairs.push([t,n])};u0.toString=function(t){const n=t?function(r){return t.call(this,r,Cd)}:Cd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function P2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function c0(e,t,n){if(!t)return e;const r=n&&n.encode||P2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Du(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class kd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const d0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R2=typeof URLSearchParams<"u"?URLSearchParams:Du,_2=typeof FormData<"u"?FormData:null,A2=typeof Blob<"u"?Blob:null,L2={isBrowser:!0,classes:{URLSearchParams:R2,FormData:_2,Blob:A2},protocols:["http","https","file","blob","url","data"]},bu=typeof window<"u"&&typeof document<"u",Ra=typeof navigator=="object"&&navigator||void 0,z2=bu&&(!Ra||["ReactNative","NativeScript","NS"].indexOf(Ra.product)<0),N2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",I2=bu&&window.location.href||"http://localhost",$2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bu,hasStandardBrowserEnv:z2,hasStandardBrowserWebWorkerEnv:N2,navigator:Ra,origin:I2},Symbol.toStringTag,{value:"Module"})),Te={...$2,...L2};function O2(e,t){return Cl(e,new Te.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Te.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function D2(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function b2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function f0(e){function t(n,r,i,o){let l=n[o++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&k.isArray(i)?i.length:l,a?(k.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!k.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&k.isArray(i[l])&&(i[l]=b2(i[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(D2(r),i,n,0)}),n}return null}function F2(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const mi={transitional:d0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(f0(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return O2(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Cl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),F2(t)):t}],transformResponse:[function(t){const n=this.transitional||mi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?I.from(s,I.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{mi.headers[e]={}});const B2=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),M2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&B2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ed=Symbol("internals");function Cr(e){return e&&String(e).trim().toLowerCase()}function mo(e){return e===!1||e==null?e:k.isArray(e)?e.map(mo):String(e)}function U2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const H2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function os(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function W2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function V2(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Pe{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,c){const f=Cr(a);if(!f)throw new Error("header name must be a non-empty string");const d=k.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||a]=mo(s))}const l=(s,a)=>k.forEach(s,(c,f)=>o(c,f,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!H2(t))l(M2(t),n);else if(k.isHeaders(t))for(const[s,a]of t.entries())o(a,s,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return U2(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||os(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Cr(l),l){const s=k.findKey(r,l);s&&(!n||os(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||os(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const l=k.findKey(r,o);if(l){n[l]=mo(i),delete n[o];return}const s=t?W2(o):String(o).trim();s!==o&&delete n[o],n[s]=mo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ed]=this[Ed]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=Cr(l);r[s]||(V2(i,l),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Pe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Pe);function ls(e,t){const n=this||mi,r=t||n,i=Pe.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function p0(e){return!!(e&&e.__CANCEL__)}function dr(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(dr,I,{__CANCEL__:!0});function h0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Q2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function G2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),f=r[o];l||(l=c),n[i]=a,r[i]=c;let d=o,g=0;for(;d!==i;)g+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-l<t)return;const w=f&&c-f;return w?Math.round(g*1e3/w):void 0}}function K2(e,t){let n=0,r=1e3/t,i,o;const l=(c,f=Date.now())=>{n=f,i=null,o&&(clearTimeout(o),o=null),e.apply(null,c)};return[(...c)=>{const f=Date.now(),d=f-n;d>=r?l(c,f):(i=c,o||(o=setTimeout(()=>{o=null,l(i)},r-d)))},()=>i&&l(i)]}const Qo=(e,t,n=3)=>{let r=0;const i=G2(50,250);return K2(o=>{const l=o.loaded,s=o.lengthComputable?o.total:void 0,a=l-r,c=i(a),f=l<=s;r=l;const d={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&f?(s-l)/c:void 0,event:o,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},jd=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Td=e=>(...t)=>k.asap(()=>e(...t)),q2=Te.hasStandardBrowserEnv?function(){const t=Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=k.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),Y2=Te.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function X2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function J2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function m0(e,t){return e&&!X2(t)?J2(e,t):t}const Pd=e=>e instanceof Pe?{...e}:e;function xn(e,t){t=t||{};const n={};function r(c,f,d){return k.isPlainObject(c)&&k.isPlainObject(f)?k.merge.call({caseless:d},c,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function i(c,f,d){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function o(c,f){if(!k.isUndefined(f))return r(void 0,f)}function l(c,f){if(k.isUndefined(f)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function s(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(c,f)=>i(Pd(c),Pd(f),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,g=d(e[f],t[f],f);k.isUndefined(g)&&d!==s||(n[f]=g)}),n}const g0=e=>{const t=xn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:l,auth:s}=t;t.headers=l=Pe.from(l),t.url=c0(m0(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(k.isFormData(n)){if(Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[c,...f]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];l.setContentType([c||"multipart/form-data",...f].join("; "))}}if(Te.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&q2(t.url))){const c=i&&o&&Y2.read(o);c&&l.set(i,c)}return t},Z2=typeof XMLHttpRequest<"u",ex=Z2&&function(e){return new Promise(function(n,r){const i=g0(e);let o=i.data;const l=Pe.from(i.headers).normalize();let{responseType:s,onUploadProgress:a,onDownloadProgress:c}=i,f,d,g,w,v;function x(){w&&w(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function h(){if(!C)return;const m=Pe.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!s||s==="text"||s==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:m,config:e,request:C};h0(function(j){n(j),x()},function(j){r(j),x()},E),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new I("Request aborted",I.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||d0;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),r(new I(S,E.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,C)),C=null},o===void 0&&l.setContentType(null),"setRequestHeader"in C&&k.forEach(l.toJSON(),function(S,E){C.setRequestHeader(E,S)}),k.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),s&&s!=="json"&&(C.responseType=i.responseType),c&&([g,v]=Qo(c,!0),C.addEventListener("progress",g)),a&&C.upload&&([d,w]=Qo(a),C.upload.addEventListener("progress",d),C.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(f=m=>{C&&(r(!m||m.type?new dr(null,e,C):m),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const p=Q2(i.url);if(p&&Te.protocols.indexOf(p)===-1){r(new I("Unsupported protocol "+p+":",I.ERR_BAD_REQUEST,e));return}C.send(o||null)})},tx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(c){if(!i){i=!0,s();const f=c instanceof Error?c:this.reason;r.abort(f instanceof I?f:new dr(f instanceof Error?f.message:f))}};let l=t&&setTimeout(()=>{l=null,o(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const s=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>k.asap(s),a}},nx=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},rx=async function*(e,t){for await(const n of ix(e))yield*nx(n,t)},ix=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Rd=(e,t,n,r)=>{const i=rx(e,t);let o=0,l,s=a=>{l||(l=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:c,value:f}=await i.next();if(c){s(),a.close();return}let d=f.byteLength;if(n){let g=o+=d;n(g)}a.enqueue(new Uint8Array(f))}catch(c){throw s(c),c}},cancel(a){return s(a),i.return()}},{highWaterMark:2})},kl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",y0=kl&&typeof ReadableStream=="function",ox=kl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),v0=(e,...t)=>{try{return!!e(...t)}catch{return!1}},lx=y0&&v0(()=>{let e=!1;const t=new Request(Te.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_d=64*1024,_a=y0&&v0(()=>k.isReadableStream(new Response("").body)),Go={stream:_a&&(e=>e.body)};kl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Go[t]&&(Go[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const sx=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Te.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await ox(e)).byteLength},ax=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??sx(t)},ux=kl&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:c,headers:f,withCredentials:d="same-origin",fetchOptions:g}=g0(e);c=c?(c+"").toLowerCase():"text";let w=tx([i,o&&o.toAbortSignal()],l),v;const x=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(a&&lx&&n!=="get"&&n!=="head"&&(C=await ax(f,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),T;if(k.isFormData(r)&&(T=E.headers.get("content-type"))&&f.setContentType(T),E.body){const[j,L]=jd(C,Qo(Td(a)));r=Rd(E.body,_d,j,L)}}k.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;v=new Request(t,{...g,signal:w,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let p=await fetch(v);const m=_a&&(c==="stream"||c==="response");if(_a&&(s||m&&x)){const E={};["status","statusText","headers"].forEach(B=>{E[B]=p[B]});const T=k.toFiniteNumber(p.headers.get("content-length")),[j,L]=s&&jd(T,Qo(Td(s),!0))||[];p=new Response(Rd(p.body,_d,j,()=>{L&&L(),x&&x()}),E)}c=c||"text";let S=await Go[k.findKey(Go,c)||"text"](p,e);return!m&&x&&x(),await new Promise((E,T)=>{h0(E,T,{data:S,headers:Pe.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(h){throw x&&x(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,v),{cause:h.cause||h}):I.from(h,h&&h.code,e,v)}}),Aa={http:E2,xhr:ex,fetch:ux};k.forEach(Aa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ad=e=>`- ${e}`,cx=e=>k.isFunction(e)||e===null||e===!1,x0={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!cx(n)&&(r=Aa[(l=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(Ad).join(`
`):" "+Ad(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Aa};function ss(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dr(null,e)}function Ld(e){return ss(e),e.headers=Pe.from(e.headers),e.data=ls.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),x0.getAdapter(e.adapter||mi.adapter)(e).then(function(r){return ss(e),r.data=ls.call(e,e.transformResponse,r),r.headers=Pe.from(r.headers),r},function(r){return p0(r)||(ss(e),r&&r.response&&(r.response.data=ls.call(e,e.transformResponse,r.response),r.response.headers=Pe.from(r.response.headers))),Promise.reject(r)})}const w0="1.7.7",Fu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zd={};Fu.transitional=function(t,n,r){function i(o,l){return"[Axios v"+w0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new I(i(l," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!zd[l]&&(zd[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function dx(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new I("option "+o+" must be "+a,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}}const La={assertOptions:dx,validators:Fu},Tt=La.validators;class pn{constructor(t){this.defaults=t,this.interceptors={request:new kd,response:new kd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&La.assertOptions(r,{silentJSONParsing:Tt.transitional(Tt.boolean),forcedJSONParsing:Tt.transitional(Tt.boolean),clarifyTimeoutError:Tt.transitional(Tt.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:La.assertOptions(i,{encode:Tt.function,serialize:Tt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Pe.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(a=a&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,g;if(!a){const v=[Ld.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,c),g=v.length,f=Promise.resolve(n);d<g;)f=f.then(v[d++],v[d++]);return f}g=s.length;let w=n;for(d=0;d<g;){const v=s[d++],x=s[d++];try{w=v(w)}catch(C){x.call(this,C);break}}try{f=Ld.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,g=c.length;d<g;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=xn(this.defaults,t);const n=m0(t.baseURL,t.url);return c0(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){pn.prototype[t]=function(n,r){return this.request(xn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(xn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}pn.prototype[t]=n(),pn.prototype[t+"Form"]=n(!0)});class Bu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new dr(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Bu(function(i){t=i}),cancel:t}}}function fx(e){return function(n){return e.apply(null,n)}}function px(e){return k.isObject(e)&&e.isAxiosError===!0}const za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(za).forEach(([e,t])=>{za[t]=e});function S0(e){const t=new pn(e),n=Jh(pn.prototype.request,t);return k.extend(n,pn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return S0(xn(e,i))},n}const re=S0(mi);re.Axios=pn;re.CanceledError=dr;re.CancelToken=Bu;re.isCancel=p0;re.VERSION=w0;re.toFormData=Cl;re.AxiosError=I;re.Cancel=re.CanceledError;re.all=function(t){return Promise.all(t)};re.spread=fx;re.isAxiosError=px;re.mergeConfig=xn;re.AxiosHeaders=Pe;re.formToJSON=e=>f0(k.isHTMLForm(e)?new FormData(e):e);re.getAdapter=x0.getAdapter;re.HttpStatusCode=za;re.default=re;const hx="https://diapage-server.fly.dev",C0=(e,t)=>{let n=localStorage.getItem("authToken");return re.post(hx+e,t,{headers:{Authorization:`Bearer ${n}`}})},k0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9471%201.02847C24.0017%200.892169%2024.015%200.742859%2023.9855%200.599044C23.956%200.45523%2023.885%200.323236%2023.7812%200.219426C23.6774%200.115616%2023.5454%200.0445561%2023.4015%200.0150549C23.2577%20-0.0144463%2023.1084%20-0.00109103%2022.9721%200.053465L1.15162%208.78197H1.15012L0.472125%209.05196C0.34371%209.10319%200.231953%209.18891%200.149198%209.29966C0.0664433%209.41041%200.0159116%209.54188%200.00318483%209.67955C-0.00954198%209.81721%200.0160314%209.95572%200.0770801%2010.0798C0.138129%2010.2038%200.232277%2010.3086%200.349125%2010.3825L0.964125%2010.7725L0.965625%2010.7755L8.45812%2015.5425L13.2251%2023.035L13.2281%2023.038L13.6181%2023.653C13.6923%2023.7694%2013.7971%2023.863%2013.921%2023.9237C14.045%2023.9844%2014.1833%2024.0097%2014.3207%2023.9968C14.4581%2023.9839%2014.5892%2023.9334%2014.6998%2023.8508C14.8103%2023.7681%2014.8959%2023.6566%2014.9471%2023.5285L23.9471%201.02847ZM21.1976%203.86347L9.95662%2015.1045L9.63412%2014.5975C9.57503%2014.5044%209.49616%2014.4256%209.40312%2014.3665L8.89612%2014.044L20.1371%202.80296L21.9041%202.09646L21.1991%203.86347H21.1976Z'%20fill='%23EEEEEE'/%3e%3c/svg%3e",E0="/assets/img/Dog-DhZuYJLQ.svg",j0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='EnvelopeFill'%3e%3cpath%20id='Vector'%20d='M0.075%205.3325C0.226227%204.66986%200.597983%204.07822%201.12938%203.65446C1.66078%203.23071%202.32033%202.99995%203%203H21C21.6797%202.99995%2022.3392%203.23071%2022.8706%203.65446C23.402%204.07822%2023.7738%204.66986%2023.925%205.3325L12%2012.621L0.075%205.3325ZM0%207.0455V17.7015L8.7045%2012.3645L0%207.0455ZM10.1415%2013.245L0.2865%2019.2855C0.52999%2019.7989%200.91429%2020.2326%201.39467%2020.5362C1.87505%2020.8397%202.43176%2021.0005%203%2021H21C21.5681%2021.0001%2022.1246%2020.8389%2022.6048%2020.5351C23.0849%2020.2313%2023.4688%2019.7975%2023.712%2019.284L13.857%2013.2435L12%2014.379L10.1415%2013.2435V13.245ZM15.2955%2012.366L24%2017.7015V7.0455L15.2955%2012.3645V12.366Z'%20fill='%2302A66A'/%3e%3c/g%3e%3c/svg%3e",mx=y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #01402f;
  padding: 8% 5%;
  box-sizing: border-box;
`,gx=y.h2`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 4%;
  font-family: "Aileron-Bold";
  text-align: center;
`,yx=y.h3`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 700;
  color: white;
  margin: 0 0 6%;
  text-align: center;
  font-family: "Aileron-Bold";
`,vx=y.span`
  color: var(--green);

  &:active {
    color: #a9e6b9;
  }
`,xx=y.div`
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
`,wx=y.span`
  color: white;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 500;
`,Sx=y.img`
  width: 30%;
  max-width: 150px;
  margin-bottom: -2%;
  position: relative;
  z-index: 1;
`,Cx=y.div`
  width: 100%;
  min-height: 70vh;
  background-color: #eeeeee;
  border-radius: 16px;
  padding: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,kx=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Ex=y.span`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin-bottom: 4%;
  font-weight: 500;
`,jx=y.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  margin-bottom: 6%;
`,Tn=y.button`
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

  &:hover {
    background-color: #a9e6b9;
    color: black;
  }

  // &:active {
  //   background-color: var(--green);
  // }

  ${e=>e.$active&&`
    background-color: #77b9f3;
    color: black;
    border-color: var(--green);
    `}
`,Tx=y.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`,as=y.label`
  color: var(--gray);
  font-size: ${e=>e.$active?"1.3rem":"1.6rem"};
  margin-top: ${e=>e.$active?"4%":"6%"};
  margin-bottom: 1%;
  transition: font-size 0.3s ease;
`,Nd=y.input`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  width: 100%;
  padding: 2% 0;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;
`,Px=y.textarea`
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
`,Rx=y.button`
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
`,_x=y.p`
  white-space: pre-wrap;
  color: white;
  font-family: "Aileron-Bold";
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 900;
  text-align: center;
  margin-top: 10%;
`,Ax=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(null),[i,o]=R.useState({name:"",email:"",message:""}),[l,s]=R.useState(""),a=(d,g)=>{let w=[...e],v=w.findIndex(x=>x===g);v>-1?w.splice(v,1):w.push(g),t(w)},c=d=>{o(g=>({...g,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(g=>{console.log(g.data.message),s(g.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(g=>{console.log(g)})};return R.useEffect(()=>{const d=()=>r(null);return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),u.jsxs(mx,{id:"contact",children:[u.jsx(gx,{children:"Get In Touch"}),u.jsxs(yx,{children:["Let's discuss something ",u.jsx(vx,{children:"cool"})," together!"]}),u.jsxs(xx,{children:[u.jsx("img",{src:j0,alt:"Email icon"}),u.jsx(wx,{children:"info@diadevdesign.com"})]}),l?u.jsx(_x,{children:l}):u.jsxs(u.Fragment,{children:[u.jsx(Sx,{src:E0,alt:"Dog mascot"}),u.jsx(Cx,{children:u.jsxs(kx,{children:[u.jsx(Ex,{children:"I'm interested in..."}),u.jsxs(jx,{children:[u.jsx(Tn,{$active:e.includes("Web Development"),onClick:d=>a(d,"Web Development"),children:"Web Development"}),u.jsx(Tn,{$active:e.includes("UX/UI Design"),onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"}),u.jsx(Tn,{$active:e.includes("Marketing"),onClick:d=>a(d,"Marketing"),children:"Marketing"}),u.jsx(Tn,{$active:e.includes("Custom APIs"),onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"}),u.jsx(Tn,{$active:e.includes("AI Apps/Agents"),onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"}),u.jsx(Tn,{$active:e.includes("Other"),onClick:d=>a(d,"Other"),children:"Other"})]}),u.jsxs(Tx,{onSubmit:f,children:[u.jsx(as,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Nd,{type:"text",name:"name",id:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d),required:!0}),u.jsx(as,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Nd,{type:"email",name:"email",id:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d),required:!0}),u.jsx(as,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx(Px,{name:"message",id:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d),required:!0}),u.jsxs(Rx,{type:"submit",children:[u.jsx("img",{src:k0,alt:"Send message icon"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})},Lx=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #f2f2f2;
`,zx=()=>u.jsxs(Lx,{children:[u.jsx(Tv,{}),u.jsx(bv,{}),u.jsx(Ax,{})]}),Nx="/assets/fonts/Aileron-Regular-CtKlDjcc.otf",Ix="/assets/fonts/Aileron-Bold-BWrAr8GE.otf",$x="/assets/fonts/Aileron-Black-DX8rpg6F.otf",Ox="/assets/fonts/Aileron-BlackItalic-CDBNzfOi.otf",Dx="/assets/fonts/Aileron-BoldItalic-BpRWpHqE.otf",bx="/assets/fonts/Aileron-Heavy-CNC5NjKR.otf",Fx="/assets/fonts/Aileron-HeavyItalic-Cu9nKrNV.otf",Bx="/assets/fonts/Aileron-Italic-DYUE3e7y.otf",Mx="/assets/fonts/Aileron-Light-LZTtHK4h.otf",Ux="/assets/fonts/Aileron-LightItalic-WKAGcBBf.otf",Hx="/assets/fonts/Aileron-SemiBold-C3IbYb9I.otf",Wx="/assets/fonts/Aileron-SemiBoldItalic-DLbJRGCk.otf",Vx="/assets/fonts/Aileron-Thin-Brp9Y9vu.otf",Qx="/assets/fonts/Aileron-ThinItalic-CWr2f7xD.otf",Gx="/assets/fonts/Aileron-UltraLight-Cw0yx4GS.otf",Kx="/assets/fonts/Aileron-UltraLightItalic-B5h6okXt.otf",qx=Nh`

@font-face {
  font-family: "Aileron-Regular";   /*Can be any text*/
  src: url(${Nx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black";   /*Can be any text*/
  src: url(${$x}) format("opentype");
}

@font-face {
  font-family: "Aileron-Black-Italic";   /*Can be any text*/
  src: url(${Ox}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold";   /*Can be any text*/
  src: url(${Ix}) format("opentype");
}

@font-face {
  font-family: "Aileron-Bold-Italic";   /*Can be any text*/
  src: url(${Dx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy";   /*Can be any text*/
  src: url(${bx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Heavy-Italic";   /*Can be any text*/
  src: url(${Fx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Italic";   /*Can be any text*/
  src: url(${Bx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light";   /*Can be any text*/
  src: url(${Mx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Light-Italic";   /*Can be any text*/
  src: url(${Ux}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold";   /*Can be any text*/
  src: url(${Hx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Semi-Bold-Italic";   /*Can be any text*/
  src: url(${Wx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin";   /*Can be any text*/
  src: url(${Vx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Thin-Italic";   /*Can be any text*/
  src: url(${Qx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite";   /*Can be any text*/
  src: url(${Gx}) format("opentype");
}

@font-face {
  font-family: "Aileron-Ultra-Lite-Italic";   /*Can be any text*/
  src: url(${Kx}) format("opentype");
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
`,T0="data:image/svg+xml,%3csvg%20width='1512'%20height='657'%20viewBox='0%200%201512%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M962.408%2046.0762C1037.52%2065.7203%201108.42%2084.265%201184.4%2084.2649C1385.21%2084.2649%201512%2017.7214%201512%2017.7214V175.219H0V0C38.0005%200%2073.3722%207.92574%20113.298%2016.872C200.793%2036.4769%20310.159%2060.9827%20516.994%2017.7214C704.245%20-21.444%20839.001%2013.8002%20962.408%2046.0762ZM1512%20175.219V602.831C1512%20602.831%201253.7%20548.888%20964.688%20602.831C761.911%20640.679%20733.582%20637.047%20626.749%20623.35C581.316%20617.526%20521.685%20609.88%20428.4%20602.831C115.763%20579.206%200.000242615%20656.775%200.000242615%20656.775V175.219H1512Z'%20fill='%2377B9F3'/%3e%3c/svg%3e",P0="/assets/img/Fishermen-D8grav2G.svg",R0="/assets/img/Hands-On-Training-CAh4lW99.svg",_0="/assets/img/Performance-CiLV-Kb0.svg",A0="/assets/img/Community-Engagement-Cuw581Qp.svg",L0="/assets/img/DiaGreenLogo-2-b3J3yriU.png",z0="/assets/img/Plant-BKSABYCs.svg",N0="/assets/img/BalloonDog-IURLZLkm.svg",I0="data:image/svg+xml,%3csvg%20width='1512'%20height='185'%20viewBox='0%200%201512%20185'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M359.888%200C672.131%20-8.65219e-05%20602.831%2071.7909%20964.688%2071.7909C1326.54%2071.7909%201512%20184.211%201512%20184.211V185H0C0%20185%2047.6438%208.65221e-05%20359.888%200Z'%20fill='%2301402F'/%3e%3c/svg%3e",Yx=y.div`
  width: 100%;
  min-height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`,Xx=y.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`,us=y.section`
  width: 100%;
  padding: 6% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
`,Id=y.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
  width: 100%;
`,Hi=y.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-weight: 400;
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  width: 100%;
`,Jx=y.div`
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
`,Zx=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4%;
  margin-top: 4%;
`,ew=y.div`
  display: flex;
  align-items: flex-start;
  gap: 8%;
  padding: 2%;
  box-sizing: border-box;
`,tw=y.div`
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
`,nw=y.p`
  flex: 1;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,rw=y.section`
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 4% 0;
  box-sizing: border-box;
  overflow: hidden;
`,iw=y.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
`,ow=y.div`
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
    ${""}
    height: auto;
    display: block;
  }
`,lw=y.div`
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
`,sw=y.section`
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
`,aw=y.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 6% 0;
  text-align: center;
  position: relative;
  z-index: 3;
`,$d=y.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Roboto", "Aileron-Regular", sans-serif;
  color: #070d0d;
  line-height: 1.6;
  margin: 0 0 6%;
  text-align: center;
  max-width: 361px;
  position: relative;
  z-index: 3;
`,Od=y.div`
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
`,uw=y.div`
  position: relative;
  width: 100%;
`,cw=y.img`
  position: absolute;
  bottom: -16%;
  right: 0;
  width: 30%;
  max-width: 120px;
  height: auto;
  z-index: 2;
  pointer-events: none;
  // margin-bottom: 40%;
`,Dd=y.h3`
  font-size: clamp(2.8rem, 7vw, 3.4rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 6%;
`,bd=y.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
`,Fd=y.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`,Bd=y.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0;
`,Md=y.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,dw=y.section`
  width: 100%;
  padding: 8% 4% 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  position: relative;
  overflow: visible;
`,fw=y.h2`
  font-size: clamp(3.6rem, 9vw, 4.8rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 10% 0 8%;
  text-align: center;
  z-index: 1;
`,pw=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6%;
`,hw=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6%;
  box-sizing: border-box;
  z-index: 3;
`,mw=y.div`
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
`,gw=y.h4`
  font-size: clamp(1.8rem, 4.5vw, 2rem);
  font-weight: 700;
  font-family: "Aileron-Bold";
  color: #070d0d;
  margin: 0 0 3%;
`,yw=y.p`
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  font-family: "Aileron-Regular";
  color: #070d0d;
  line-height: 1.5;
  margin: 0;
`,vw=y.section`
  width: 100%;
  position: relative;
  margin-top: -35%;
  margin-bottom: 0;
  padding: 0;
  min-height: 300px;
  height: auto;
  background-color: transparent;
  overflow-x: hidden;
  overflow-y: visible;
  z-index: 2;
`,xw=y.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 140%;
  height: auto;
  transform: scale(1.6);
  transform-origin: bottom left;
  z-index: 10;
  pointer-events: none;
`,ww=y.img`
  position: absolute;
  bottom: 20%;
  left: 3%;
  width: 25%;
  max-width: 120px;
  height: auto;
  z-index: 5;
  pointer-events: none;
`,Sw=()=>{const e=[{icon:"🎯",text:"We are committed to empowering your business with cutting-edge solutions that align with your goals."},{icon:"⚙️",text:"Our primary focus is on delivering customized technology that caters to your unique requirements."},{icon:"🤝",text:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}],t=[{title:"Tailored",description:"Solutions for your unique business needs and goals."},{title:"Scalable",description:"Applications that evolve as your business grows."},{title:"Responsive",description:"Seamlessly compatible with all devices and screen sizes."},{title:"Cross-Platform Integration",description:"Incorporate custom applications with your current systems and software."},{title:"Robust Architecture",description:"Reliable and scalable software that can handle increasing loads and complexities."},{title:"User-Centered Experience",description:"Intuitive design and engaging interfaces."},{title:"Agile Development",description:"To deliver projects on time and adapt to changing requirements quickly."}],n=[{title:"Increased efficiency",description:"Save time and cut costs with automated, streamlined processes."},{title:"Competitive Advantage",description:"Cutting-edge technology to stay ahead in your industry and set you apart."},{title:"Advanced Analytics",description:"Reporting features to provide valuable insights into your operations."},{title:"Security",description:"Safeguard your data and observe compliance with advanced measures and best practices."},{title:"Maintenance and Support",description:"Keep your software up-to-date and optimized with ongoing care."}],r=[{image:R0,title:"Hands-On Training",description:"Training and workshops covering the latest technologies and industry best practices."},{image:_0,title:"Performance Feedback",description:"Training and workshops covering the latest technologies and industry best practices."},{image:A0,title:"Community Engagement",description:"Participate in advancing local technological innovation and progress."}];return u.jsx(Yx,{children:u.jsxs(Xx,{children:[u.jsxs(us,{children:[u.jsx(Id,{children:"Our Story"}),u.jsx(Hi,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(Hi,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and individuals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(Hi,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."}),u.jsx(Jx,{children:u.jsx("img",{src:L0,alt:"Día Dev & Design Logo"})})]}),u.jsxs(us,{children:[u.jsx(Id,{children:"Why We Do It"}),u.jsx(Hi,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsx(Zx,{children:e.map((i,o)=>u.jsxs(ew,{children:[u.jsx(tw,{children:u.jsx("span",{style:{fontSize:"32px"},children:i.icon})}),u.jsx(nw,{children:i.text})]},o))})]}),u.jsx(rw,{children:u.jsxs(iw,{children:[u.jsx(ow,{children:u.jsx("img",{src:T0,alt:"Ocean waves"})}),u.jsx(lw,{children:u.jsx("img",{src:P0,alt:"Fisherman in boat"})})]})}),u.jsxs(sw,{children:[u.jsx(aw,{children:"We Bring Good Tech to Life!"}),u.jsx($d,{children:"At <Dia, Dev, & Design>, we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."}),u.jsx($d,{children:"At <Dia, Dev, & Design>, we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."})]}),u.jsxs(us,{children:[u.jsxs(Od,{children:[u.jsx(Dd,{children:"We build…"}),u.jsx(bd,{children:t.map((i,o)=>u.jsxs(Fd,{children:[u.jsx(Bd,{children:i.title}),u.jsx(Md,{children:i.description})]},o))})]}),u.jsxs(uw,{children:[u.jsxs(Od,{children:[u.jsx(Dd,{children:"You get…"}),u.jsx(bd,{children:n.map((i,o)=>u.jsxs(Fd,{children:[u.jsx(Bd,{children:i.title}),u.jsx(Md,{children:i.description})]},o))})]}),u.jsx(cw,{src:z0,alt:"Decorative plant illustration"})]})]}),u.jsxs(dw,{children:[u.jsx(fw,{children:"Tech Incubator"}),u.jsx(pw,{children:r.map((i,o)=>u.jsxs(hw,{children:[u.jsx(mw,{children:i.image?u.jsx("img",{src:i.image,alt:i.title}):u.jsx("span",{style:{fontSize:"64px",color:"#ccc"},children:"📷"})}),u.jsx(gw,{children:i.title}),u.jsx(yw,{children:i.description})]},o))})]}),u.jsxs(vw,{children:[u.jsx(ww,{src:N0,alt:"Decorative balloon dog illustration"}),u.jsx(xw,{src:I0,alt:"Decorative wavy bottom shape"})]})]})})},Cw=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`,kw=()=>u.jsxs(Cw,{children:[u.jsx(qx,{}),u.jsx(vv,{}),u.jsxs(Vh,{children:[u.jsx(oi,{path:"/",element:u.jsx(zx,{})}),u.jsx(oi,{path:"/about",element:u.jsx(Sw,{})})]})]}),Ew=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
    transition: color 0.3s ease-in-out;
  }
`,jw="/assets/img/NavbarLogo-CUmuBQyF.png",Tw=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: #ffffff;
`,Pw=y.img`
  height: 75%;
`,Rw=y.h1`
  font-size: 5rem;
  margin-left: 1%;
`,_w=y.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Ud=y(Qh)`
  font-size: 2.1rem;
  font-family: "Aileron-Bold";
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &:hover {
    color: var(--green);
  }
`,Aw=y.button`
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
`,Lw=()=>{const e=$u(),t=()=>{e("/")},n=async()=>{t(),setTimeout(()=>{const r=document.getElementById("contact");r&&window.scrollTo({top:r.getBoundingClientRect().top,behavior:"smooth"})},1)};return u.jsxs(Tw,{children:[u.jsx(Pw,{onClick:t,src:jw}),u.jsxs(Rw,{children:["<",u.jsx(Ew,{children:"Día:"})," Dev & Design>"]}),u.jsxs(_w,{children:[u.jsx(Ud,{to:"/",children:"Home"}),u.jsx(Ud,{to:"/about",children:"About Us"}),u.jsx(Aw,{onClick:n,children:"Contact Us"})]})]})},zw=y.div`
  width: 1200px;
  height: inherit;
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  align-self: inherit;
`,Yt=({children:e})=>u.jsx(zw,{children:e}),Nw=y.div`
  height: 85vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`,Iw=y.div`
  display: flex;
  padding: 0;
  ${""}
  ${""}
  justify-content: space-between;
  align-items: center;
`,$w=y.div`
  width: 49.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${""}
`,Ow=y.button`
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
`,Dw=y.p`
  width: 100%;
  line-height: 2.2rem;
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  word-wrap: break-word;
`,bw=y.div`
  width: 41.1%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`,Fw=()=>{const e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return u.jsx(Nw,{children:u.jsx(Yt,{children:u.jsxs(Iw,{children:[u.jsxs($w,{children:[u.jsxs(Wi,{children:["Every-",u.jsx(Hd,{id:"dia",children:"Día"}),". "]}),u.jsx(Wi,{children:"We build."}),u.jsx(Wi,{children:"We create."}),u.jsxs(Wi,{children:["You ",u.jsx(Hd,{id:"dia",children:"succeed"}),"!"]}),u.jsx(Dw,{children:"We partner with you to craft tailored applications that meet your unique requirements, operational needs, and strategic goals. Our focus is on efficiency, productivity, and innovation."}),u.jsx(Ow,{onClick:e,children:"Contact Us"})]}),u.jsx(bw,{children:u.jsx("img",{src:Gh,alt:"header-image"})})]})})})},Bw=y.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
`,Mw=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Uw=y.div`
  margin-top: 1%;
  width: 81%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,Hw=y.span`
  font-weight: 700;
  font-size: 9.6rem;
`,Ww=y.div`
  width: 60%;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  margin-top: 4%;
`,Vw=y.div`
  height: 71%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${""}
`,Qw=y.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 9.6rem;
  margin: 0px;
  font-weight: 700;
  ${""}
  ${""}
`,Gw=y.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`,El=y.div`
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
`,Kw=y(El)`
  background-color: #edf3ff;
`,qw=y(El)`
  background-color: #fffaec;
`,Yw=y(El)`
  background-color: #f0fff4;
`,Xw=y(El)`
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
`,Qi=y.img`
  height: 62%;
  width: 62%;
  ${""}
`,Gi=y.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${""}
  ${""}
  width: 56%;
  padding: 0;
  margin: 0;
`,Ki=y.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #77b9f3;
  ${""}
  text-align: left;
  margin: 0;
  padding: 0;
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
`,Jw=()=>u.jsx(Bw,{children:u.jsx(Yt,{children:u.jsxs(Mw,{children:[u.jsxs(Uw,{children:[u.jsx(Hw,{children:"We Are"}),u.jsxs(Ww,{children:[u.jsx("p",{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."}),u.jsx("p",{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."}),u.jsx("p",{children:"Simultaneously, we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]}),u.jsxs(Vw,{children:[u.jsx(Qw,{children:"What We Do"}),u.jsxs(Gw,{children:[u.jsxs(Kw,{children:[u.jsx(Vi,{children:u.jsx(Qi,{src:Kh,alt:"web-dev"})}),u.jsxs(Gi,{children:[u.jsx(Ki,{children:"Web Development"}),u.jsx(qi,{children:"Save time and cut costs with automated, streamlined processes. Safeguard your data and observe compliance with advanced measures and best practices. Keep your software up-to-date and optimized with ongoing care."})]})]}),u.jsxs(qw,{children:[u.jsx(Vi,{children:u.jsx(Qi,{src:qh,alt:"custom-applications"})}),u.jsxs(Gi,{children:[u.jsx(Ki,{children:"Custom Applications"}),u.jsx(qi,{children:"Solutions for your unique business needs and goals. Applications that evolve as your business grows. Seamlessly compatible with all devices and screen sizes. Intuitive design and engaging interfaces."})]})]}),u.jsxs(Yw,{children:[u.jsx(Vi,{children:u.jsx(Qi,{src:Yh,alt:"problem-solutions"})}),u.jsxs(Gi,{children:[u.jsx(Ki,{children:"Marketing"}),u.jsx(qi,{children:"Solutions that address your specific challenges. Fast and efficient responses that minimize downtime and disruption. Drive savings through swift and effective issue resolution."})]})]}),u.jsxs(Xw,{children:[u.jsx(Vi,{children:u.jsx(Qi,{src:Xh,alt:"tech-talent-incubator"})}),u.jsxs(Gi,{children:[u.jsx(Ki,{children:"Tech Incubator"}),u.jsx(qi,{children:"If feel you have a really marketable tech concept that needs help, we are ready to take your business concept and, with our focus on excellence, turn it into a product the changes the world!"})]})]})]})]})]})})}),Zw=y.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #01402f;
  z-index: 11;
`,e3=y.h1`
  margin-top: 5%;
  font-weight: 700;
  font-size: 9.6rem;
  color: white;
  line-height: 100%;
  width: fit-content;
`,t3=y.div`
  font-family: "Poppins";
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${""}
`,n3=y.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 65%;
  margin-top: -3%;
  height: 60% ${""};
`,r3=y.div`
  height: 95%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i3=y.div`
  margin-top: -10%;
  margin-left: 7%;
  font-weight: 700;
  font-size: 4.9rem;
  width: 490px;
  text-align: left;
  color: white;
`,o3=y.span`
  color: var(--green);

  &:hover {
    color: #a9e6b9;
  }
`,l3=y.div`
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
`,s3=y.img`
  width: 20%;
  ${""}
  display: block;
  z-index: 12;
  margin-bottom: -1%;
  margin-left: 45%;
`,a3=y.div`
  margin-top: 9%;
  margin-left: 10%;
  width: 50%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  ${""}
`,u3=y.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(3vw, 5vh);

  span {
    font-size: 20px;
  }
`,c3=y.div`
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
`,d3=y.form`
  display: flex;
  flex-direction: column;
  min-height: 65%;
  height: fit-content;
  justify-content: space-evenly;
  ${""}
`,cs=y.label`
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
`,f3=y.textarea`
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 3.5px solid
    ${e=>e.$active?"var(--green)":"var(--gray)"};
  z-index: 9999;
  width: 88%;
  transition: border-color 0.5s ease-in-out;
  field-sizing: content;
`,p3=y.button`
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
`,h3=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(null),[i,o]=R.useState({name:"",email:"",message:""}),[l,s]=R.useState(""),a=(d,g)=>{let w=[...e],v=w.findIndex(x=>x===g);v>-1?w.splice(v,1):w.push(g),t(w)},c=d=>{o(g=>({...g,[d.target.name]:d.target.value}))},f=d=>{d.preventDefault(),C0("/send-email",{emailContent:i,subjectsSelected:e}).then(g=>{console.log(g.data.message),s(g.data.message),t([]),o({name:"",email:"",message:""}),setTimeout(()=>{s("")},4500)}).catch(g=>{console.log(g)})};return R.useEffect(()=>{document.addEventListener("mousedown",()=>r(null))},[]),u.jsx(Zw,{children:u.jsx(Yt,{children:u.jsxs(t3,{id:"contact",children:[u.jsxs(n3,{children:[u.jsx(e3,{children:"Get In Touch"}),u.jsxs(i3,{children:["Let’s discuss something ",u.jsx(o3,{children:"cool"})," together!"]}),u.jsxs(a3,{children:[u.jsx("span",{children:u.jsx("img",{src:j0})}),u.jsx("span",{style:{color:"white",fontSize:"2rem",fontWeight:"500"},children:"info@diadevdesign.com"})]})]}),l?u.jsx("p",{style:{whiteSpace:"pre-wrap",color:"white",fontFamily:"Aileron-Bold",fontSize:"3.6rem",fontWeight:"900"},children:l}):u.jsxs(r3,{children:[u.jsx(s3,{src:E0,alt:"Dog Image"}),u.jsx(l3,{children:u.jsxs(u3,{children:[u.jsx("span",{children:"I’m interested in..."}),u.jsxs(c3,{children:[u.jsx(Pn,{$active:e.includes("Web Development"),value:"Web Development",onClick:d=>a(d,"Web Development"),children:"Web Development"},"button-1"),u.jsx(Pn,{$active:e.includes("UX/UI Design"),value:"UX/UI Design",onClick:d=>a(d,"UX/UI Design"),children:"UX/UI Design"},"button-2"),u.jsx(Pn,{$active:e.includes("Graphic Design"),value:"Graphic Design",onClick:d=>a(d,"Graphic Design"),children:"Marketing"},"button-3"),u.jsx(Pn,{$active:e.includes("Custom APIs"),value:"Custom APIs",onClick:d=>a(d,"Custom APIs"),children:"Custom APIs"},"button-5"),u.jsx(Pn,{$active:e.includes("AI Apps/Agents"),value:"AI Apps/Agents",onClick:d=>a(d,"AI Apps/Agents"),children:"AI Apps/Agents"},"button-6"),u.jsx(Pn,{$active:e.includes("Other"),value:"Other",onClick:d=>a(d,"Other"),children:"Other"},"button-7")]}),u.jsxs(d3,{onSubmit:f,children:[u.jsx(cs,{htmlFor:"name",$active:n==="input-1",children:"Your Name"}),u.jsx(Wd,{type:"text",name:"name",value:i.name,$active:n==="input-1",onClick:()=>r("input-1"),onChange:d=>c(d)}),u.jsx(cs,{htmlFor:"email",$active:n==="input-2",children:"Your Email"}),u.jsx(Wd,{type:"email",name:"email",value:i.email,$active:n==="input-2",onClick:()=>r("input-2"),onChange:d=>c(d)}),u.jsx(cs,{htmlFor:"message",$active:n==="input-3",children:"Your Message"}),u.jsx(f3,{type:"text",name:"message",value:i.message,$active:n==="input-3",onClick:()=>r("input-3"),onChange:d=>c(d)}),u.jsxs(p3,{type:"submit",children:[u.jsx("img",{src:k0,alt:"send message"}),u.jsx("p",{children:"Send Message"})]})]})]})})]})]})})})},m3=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,g3=()=>u.jsxs(m3,{children:[u.jsx(Fw,{}),u.jsx(Jw,{}),u.jsx(h3,{})]}),y3=Nh`


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
`,v3="/assets/img/BalloonCat-v3wmWc6F.svg",x3=y.div`
  height: 85vh;
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,w3=y.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,S3=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 80%;
`,C3=y.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
`,k3=y.img`
  height: 80%;
`,E3=y.div`
  width: 95%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j3=y.img`
  height: 85%;
  margin-left: 1%;
`,T3=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 74%;
`,ds=y.div`
  font-size: 1.6rem;
  font-family: "Roboto";
`,P3=()=>u.jsx(x3,{children:u.jsx(Yt,{children:u.jsxs(w3,{children:[u.jsxs(S3,{children:[u.jsx(C3,{children:"Our Story"}),u.jsx(k3,{src:v3,alt:"ballon-cat"})]}),u.jsxs(E3,{children:[u.jsx(j3,{src:L0,alt:"dia-green-logo"}),u.jsxs(T3,{children:[u.jsx(ds,{children:"Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry. Día: Dev & Design organically developed as the next step venture for Ironhack graduates and it came to fruition after one of those intense conversations about the state of affairs in the tech industry."}),u.jsx(ds,{children:"In the early days, our discussions often turned into achieving two goals: delivering valuable technological solutions to businesses and inStoryContaineriduals while nurturing the community and emerging local talent. Our vision is a business that fosters continuous learning and growth while making a tangible impact on the tech industry."}),u.jsx(ds,{children:"Driven by this vision, we founded Día: Dev & Design. More than just a business, it is a collaborative effort that embodies our passion for problem-solving and innovation. And so we also crafted an Incubator program designed to offer internships and mentorship to jump-start careers in tech. By nurturing local enterprises, we aim to foster a community of skilled professionals propelling the technological progress of our region."})]})]})]})})}),R3="/assets/img/TargetIcon-BDgFxHvR.svg",_3="/assets/img/EyeIcon-GMqB3cgM.svg",A3="/assets/img/HandsIcon-DC7nJpKX.svg",L3=y.div`
  ${""}
  width: 100%;

  background-color: #f2f2f2;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`,z3=y(Yt)`
  flex-direction: column;
`,N3=y.h1`
  font-family: "Aileron-Bold";
  font-size: 9.6rem;
  font-weight: 700;
  width: 100%;
  ${""}
  ${""}
`,I3=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-top: 1%;
`,$3=y.p`
  width: 39%;
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`,O3=y.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`,fs=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`,ps=y.div`
  width: 7.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`,hs=y.img`
  height: 60%;
`,ms=y.p`
  font-family: "Aileron-Light";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`,D3=()=>u.jsx(L3,{children:u.jsxs(z3,{children:[u.jsx(N3,{children:"Why We Do It"}),u.jsxs(I3,{children:[u.jsx($3,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals. Our primary focus is on delivering customized technology that caters to your unique requirements. Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."}),u.jsxs(O3,{children:[u.jsxs(fs,{children:[u.jsx(ps,{children:u.jsx(hs,{src:R3,alt:"target-icon"})}),u.jsx(ms,{children:"We are committed to empowering your business with cutting-edge solutions that align with your goals."})]}),u.jsxs(fs,{children:[u.jsx(ps,{children:u.jsx(hs,{src:_3,alt:"eye-icon"})}),u.jsx(ms,{children:"Our primary focus is on delivering customized technology that caters to your unique requirements."})]}),u.jsxs(fs,{children:[u.jsx(ps,{children:u.jsx(hs,{src:A3,alt:"hands-icon"})}),u.jsx(ms,{children:"Simultaneously we support our community through continuous learning and creative collaboration, turning our efforts into sustainable, fulfilling careers and successful businesses."})]})]})]})]})}),b3=y.div`
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
`,F3=y.div`
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
`,B3=y.div`
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
`,M3=y.div`
  width: 14%;
  height: 37%;
  position: absolute;
  left: 15.4%;
  top: -6.2%;
  ${""}
  z-index: 13
`,U3=y.img`
  width: 100%;
  height: 100%;
`,H3=y.h1`
  color: var(--Natural-2, #070d0d);
  /* Display */
  font-family: Aileron;
  font-size: 9.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,W3=y.div`
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
`,V3=()=>u.jsx(b3,{children:u.jsxs(F3,{children:[u.jsx(M3,{children:u.jsx(U3,{src:P0,alt:"fishermen"})}),u.jsx(Yt,{children:u.jsxs(B3,{children:[u.jsx(H3,{children:"Consulting"}),u.jsxs(W3,{children:[u.jsxs(Vd,{children:["At ","<Día Dev & Design>",", we offer tailored solutions to meet your unique challenges, ensuring that your business benefits from rapid responses and minimal downtime. Our team conducts thorough analyses to pinpoint the root causes of technical issues, helping you enhance your operational efficiency and streamline your processes. By addressing problems quickly and effectively, we drive cost savings and maximize the value of your technology investments. Let us help you boost your business performance with our cost-efficient services."]}),u.jsxs(Vd,{children:["At ","<Día Dev & Design>",", we are committed to fostering a collaborative partnership with your team, ensuring we fully grasp the context and impact of each issue. Using advanced tools and techniques, we conduct comprehensive diagnostics to identify problems and perform in-depth root cause analysis to ensure recurring issues are fixed. Our tailored strategies are crafted to meet your specific objectives. We also offer preventative monitoring through systems which are designed to anticipate and mitigate future issues. Additionally, we offer continuous support with ongoing recommendations to drive your business's continual improvement."]})]})]})})]})}),Q3=y.div`
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
`,G3=y.div`
  ${""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,K3=y.div`
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
`,q3=y.div`
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
`,Y3=y.div`
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
`,Qd=y.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5%;
`,Gd=y.h3`
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
`,Le=y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 2rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
`,ze=y.div`
  align-self: stretch;
  color: #070d0d;
  font-size: 1.6rem;
  font-family: "Aileron";
  font-weight: 400;
  word-wrap: break-word;
`,X3=()=>u.jsx(Q3,{children:u.jsx(Yt,{children:u.jsx(G3,{children:u.jsxs(K3,{children:[u.jsx(q3,{children:u.jsxs(Qd,{children:[u.jsx(Gd,{children:"We build..."}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Tailored"}),u.jsx(ze,{children:"Solutions for your unique business needs and goals."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Scalable"}),u.jsx(ze,{children:"Applications that evolve as your business grows."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Responsive"}),u.jsx(ze,{children:"Seamlessly compatible with all devices and screen sizes."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Cross-Platform Integration"}),u.jsx(ze,{children:"Incorporate custom applications with your current systems and software."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Robust Architecture"}),u.jsx(ze,{children:"Reliable and scalable software that can handle increasing loads and complexities."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"User-Centered Experience"}),u.jsx(ze,{children:"Intuitive design and engaging interfaces."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Agile Development"}),u.jsx(ze,{children:"To deliver projects on time and adapt to changing requirements quickly."})]})]})}),u.jsx(Y3,{children:u.jsxs(Qd,{children:[u.jsx(Gd,{children:"You get..."}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Increased efficiency"}),u.jsx(ze,{children:"Save time and cut costs with automated, streamlined processes."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Competitive Advantage"}),u.jsx(ze,{children:"Cutting-edge technology to stay ahead in your industry and set you apart."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Advanced Analytics"}),u.jsx(ze,{children:"Reporting features to provide valuable insights into your operations."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Security"}),u.jsx(ze,{children:"Safeguard your data and observe compliance with advanced measures and best practices."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Maintenance and Support"}),u.jsx(ze,{children:"Keep your software up-to-date and optimized with ongoing care."})]}),u.jsxs(Ae,{children:[u.jsx(Le,{children:"Excellence"}),u.jsx(ze,{children:"With our dedication to always delivering cutting-edge design, development, and marketing, we ensure you always get the very best!"})]})]})})]})})})}),J3=y.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10%;
  width: 100%; /* Make sure this has a defined width */
`,Z3=y.h1`
  color: #070d0d;
  font-size: 9.6rem;
  font-family: "Aileron";
  font-weight: 700;
  word-wrap: break-word;
  margin: auto;
`,eS=y.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
  z-index: 2;
`,gs=y.div`
  flex: 1 1 0;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  display: inline-flex;
`,ys=y.img`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
`,vs=y.div`
  align-self: stretch;
  height: 74px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`,xs=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 20px;
  font-family: "Aileron", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`,ws=y.div`
  align-self: stretch;
  text-align: center;
  color: #070d0d;
  font-size: 16px;
  font-family: "Aileron", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,tS=y.img`
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
`,nS=y.img`
  width: 100vw;
  z-index: 2;
  padding: 0;
  display: block;
  margin-top: 25%;
`,rS=()=>u.jsxs(J3,{children:[u.jsx("img",{style:{height:"40vh",marginRight:"-55%",marginBottom:"-5%"},src:z0,alt:"plant-image"}),u.jsx(Yt,{style:{marginTop:"-20%",height:"fit-content"},children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"-20%"},children:[u.jsx(Z3,{children:"Tech Incubator"}),u.jsxs(eS,{children:[u.jsxs(gs,{children:[u.jsx(ys,{src:R0,alt:"hands-on-training"}),u.jsxs(vs,{children:[u.jsx(xs,{children:"Hands-On Training"}),u.jsx(ws,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(gs,{children:[u.jsx(ys,{src:_0,alt:"performance"}),u.jsxs(vs,{children:[u.jsx(xs,{children:"Performance Feedback"}),u.jsx(ws,{children:"Training and workshops covering the latest technologies and industry best practices."})]})]}),u.jsxs(gs,{children:[u.jsx(ys,{src:A0,alt:"community-engagement"}),u.jsxs(vs,{children:[u.jsx(xs,{children:"Community Engagement"}),u.jsx(ws,{children:"Participate in advancing local technological innovation and progress."})]})]})]})]})}),u.jsx(tS,{src:N0,alt:"ballon-dog"}),u.jsx(nS,{src:I0,alt:"bottom-wavy-top-rectangle"})]}),iS=y.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  width: 100%;
`,oS=()=>u.jsxs(iS,{children:[u.jsx(P3,{}),u.jsx(D3,{}),u.jsx(V3,{}),u.jsx(X3,{}),u.jsx(rS,{})]}),lS=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`,sS=()=>u.jsxs(lS,{children:[u.jsx(y3,{}),u.jsx(Lw,{}),u.jsxs(Vh,{children:[u.jsx(oi,{path:"/",element:u.jsx(g3,{})}),u.jsx(oi,{path:"/about",element:u.jsx(oS,{})})]})]}),aS=()=>{const[e,t]=R.useState(null),n=()=>{let r=window.innerWidth;t(r)};return R.useEffect(()=>{n();let r;const i=()=>{clearTimeout(r),r=setTimeout(()=>{n()},150)};return window.addEventListener("resize",i),()=>{clearTimeout(r),window.removeEventListener("resize",i)}},[]),u.jsx(u.Fragment,{children:e>1024?u.jsx(sS,{resize:n}):e?u.jsx(kw,{resize:n}):null})};Ss.createRoot(document.getElementById("root")).render(u.jsx(Ze.StrictMode,{children:u.jsx(rv,{children:u.jsx(aS,{})})}));
