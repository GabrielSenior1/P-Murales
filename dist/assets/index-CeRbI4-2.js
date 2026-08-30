(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const bh=()=>{};var aa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,g=o>>2,v=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(I=64)),r.push(e[g],e[v],e[I],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ec(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||v==null)throw new Ph;const I=o<<2|c>>4;if(r.push(I),d!==64){const R=c<<4&240|d>>2;if(r.push(R),v!==64){const b=d<<6&192|v;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vh=function(n){const t=ec(n);return nc.encodeByteArray(t,!0)},Ar=function(n){return Vh(n).replace(/\./g,"")},Dh=function(n){try{return nc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=()=>Nh().__FIREBASE_DEFAULTS__,Oh=()=>{if(typeof process>"u"||typeof aa>"u")return;const n=aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Dh(n[1]);return t&&JSON.parse(t)},bi=()=>{try{return bh()||kh()||Oh()||Mh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lh=n=>{var t,e;return(e=(t=bi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},rc=n=>{const t=Lh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},sc=()=>{var n;return(n=bi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ic(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ar(JSON.stringify(e)),Ar(JSON.stringify(a)),""].join(".")}const Pn={};function Fh(){const n={prod:[],emulator:[]};for(const t of Object.keys(Pn))Pn[t]?n.emulator.push(t):n.prod.push(t);return n}function Bh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ua=!1;function ac(n,t){if(typeof window>"u"||typeof document>"u"||!xr(window.location.host)||Pn[n]===t||Pn[n]||ua)return;Pn[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=Fh().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ua=!0,a()},I}function g(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function v(){const I=Bh(r),R=e("text"),b=document.getElementById(R)||document.createElement("span"),P=e("learnmore"),V=document.getElementById(P)||document.createElement("a"),L=e("preprendIcon"),x=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const k=I.element;c(k),g(V,P);const O=d();h(x,L),k.append(x,b,V,O),document.body.appendChild(k)}o?(b.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qh(){var n;const t=(n=bi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jh(){return!qh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $h(){try{return typeof indexedDB=="object"}catch{return!1}}function zh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="FirebaseError";class Ve extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Hh,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uc.prototype.create)}}class uc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Gh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ve(s,c,r)}}function Gh(n,t){return n.replace(Kh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Kh=/\{\$([^}]+)}/g;function Rr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ca(o)&&ca(a)){if(!Rr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Je{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new xh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yh(t))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ie){return this.instances.has(t)}getOptions(t=Ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ie){return this.component?this.component.multipleInstances?t:Ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wh(n){return n===Ie?void 0:n}function Yh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Xh={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Zh=G.INFO,td={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ed=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=td[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cc{constructor(t){this.name=t,this._logLevel=Zh,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const nd=(n,t)=>t.some(e=>n instanceof e);let la,ha;function rd(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lc=new WeakMap,ei=new WeakMap,hc=new WeakMap,vs=new WeakMap,Si=new WeakMap;function id(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(se(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&lc.set(e,n)}).catch(()=>{}),Si.set(t,n),t}function od(n){if(ei.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ei.set(n,t)}let ni={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ei.get(n);if(t==="objectStoreNames")return n.objectStoreNames||hc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return se(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ad(n){ni=n(ni)}function ud(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Is(this),t,...e);return hc.set(r,t.sort?t.sort():[t]),se(r)}:sd().includes(n)?function(...t){return n.apply(Is(this),t),se(lc.get(this))}:function(...t){return se(n.apply(Is(this),t))}}function cd(n){return typeof n=="function"?ud(n):(n instanceof IDBTransaction&&od(n),nd(n,rd())?new Proxy(n,ni):n)}function se(n){if(n instanceof IDBRequest)return id(n);if(vs.has(n))return vs.get(n);const t=cd(n);return t!==n&&(vs.set(n,t),Si.set(t,n)),t}const Is=n=>Si.get(n);function ld(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=se(a);return r&&a.addEventListener("upgradeneeded",h=>{r(se(a.result),h.oldVersion,h.newVersion,se(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],ws=new Map;function da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ws.get(t))return ws.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=dd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ws.set(t,o),o}ad(n=>({...n,get:(t,e,r)=>da(t,e)||n.get(t,e,r),has:(t,e)=>!!da(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(gd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function gd(n){const t=n.getComponent();return t?.type==="VERSION"}const ri="@firebase/app",fa="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new cc("@firebase/app"),md="@firebase/app-compat",pd="@firebase/analytics-compat",_d="@firebase/analytics",yd="@firebase/app-check-compat",Ed="@firebase/app-check",Td="@firebase/auth",vd="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",Ad="@firebase/database-compat",Rd="@firebase/functions",Cd="@firebase/functions-compat",bd="@firebase/installations",Sd="@firebase/installations-compat",Pd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",Nd="@firebase/performance-compat",kd="@firebase/remote-config",Od="@firebase/remote-config-compat",Md="@firebase/storage",Ld="@firebase/storage-compat",xd="@firebase/firestore",Fd="@firebase/ai",Bd="@firebase/firestore-compat",Ud="firebase",qd="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",jd={[ri]:"fire-core",[md]:"fire-core-compat",[_d]:"fire-analytics",[pd]:"fire-analytics-compat",[Ed]:"fire-app-check",[yd]:"fire-app-check-compat",[Td]:"fire-auth",[vd]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[Ad]:"fire-rtdb-compat",[Rd]:"fire-fn",[Cd]:"fire-fn-compat",[bd]:"fire-iid",[Sd]:"fire-iid-compat",[Pd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[Nd]:"fire-perf-compat",[kd]:"fire-rc",[Od]:"fire-rc-compat",[Md]:"fire-gcs",[Ld]:"fire-gcs-compat",[xd]:"fire-fst",[Bd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Map,$d=new Map,ii=new Map;function ga(n,t){try{n.container.addComponent(t)}catch(e){Kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Mn(n){const t=n.name;if(ii.has(t))return Kt.debug(`There were multiple attempts to register component ${t}.`),!1;ii.set(t,n);for(const e of On.values())ga(e,n);for(const e of $d.values())ga(e,n);return!0}function dc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function fc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ie=new uc("app","Firebase",zd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=qd;function mc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:si,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw ie.create("bad-app-name",{appName:String(s)});if(e||(e=sc()),!e)throw ie.create("no-options");const o=On.get(s);if(o){if(Rr(e,o.options)&&Rr(r,o.config))return o;throw ie.create("duplicate-app",{appName:s})}const a=new Jh(s);for(const h of ii.values())a.addComponent(h);const c=new Hd(e,r,a);return On.set(s,c),c}function pc(n=si){const t=On.get(n);if(!t&&n===si&&sc())return mc();if(!t)throw ie.create("no-app",{appName:n});return t}function ma(){return Array.from(On.values())}function oe(n,t,e){var r;let s=(r=jd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kt.warn(c.join(" "));return}Mn(new Je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebase-heartbeat-database",Kd=1,Ln="firebase-heartbeat-store";let As=null;function _c(){return As||(As=ld(Gd,Kd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ln)}catch(e){console.warn(e)}}}}).catch(n=>{throw ie.create("idb-open",{originalErrorMessage:n.message})})),As}async function Qd(n){try{const e=(await _c()).transaction(Ln),r=await e.objectStore(Ln).get(yc(n));return await e.done,r}catch(t){if(t instanceof Ve)Kt.warn(t.message);else{const e=ie.create("idb-get",{originalErrorMessage:t?.message});Kt.warn(e.message)}}}async function pa(n,t){try{const r=(await _c()).transaction(Ln,"readwrite");await r.objectStore(Ln).put(t,yc(n)),await r.done}catch(e){if(e instanceof Ve)Kt.warn(e.message);else{const r=ie.create("idb-set",{originalErrorMessage:e?.message});Kt.warn(r.message)}}}function yc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=1024,Yd=30;class Jd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_a();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Yd){const a=tf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_a(),{heartbeatsToSend:r,unsentEntries:s}=Xd(this._heartbeatsCache.heartbeats),o=Ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Kt.warn(e),""}}}function _a(){return new Date().toISOString().substring(0,10)}function Xd(n,t=Wd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ya(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ya(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Zd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $h()?zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Qd(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ya(n){return Ar(JSON.stringify({version:2,heartbeats:n})).length}function tf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){Mn(new Je("platform-logger",t=>new fd(t),"PRIVATE")),Mn(new Je("heartbeat",t=>new Jd(t),"PRIVATE")),oe(ri,fa,n),oe(ri,fa,"esm2017"),oe("fire-js","")}ef("");var nf="firebase",rf="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(nf,rf,"app");var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ae,Ec;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function p(){}p.prototype=m.prototype,T.D=m.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(y,E,w){for(var _=Array(arguments.length-2),q=2;q<arguments.length;q++)_[q-2]=arguments[q];return m.prototype[E].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,p){p||(p=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)y[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=T.g[0],p=T.g[1],E=T.g[2];var w=T.g[3],_=m+(w^p&(E^w))+y[0]+3614090360&4294967295;m=p+(_<<7&4294967295|_>>>25),_=w+(E^m&(p^E))+y[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(p^w&(m^p))+y[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(m^E&(w^m))+y[3]+3250441966&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(w^p&(E^w))+y[4]+4118548399&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(E^m&(p^E))+y[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(p^w&(m^p))+y[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(m^E&(w^m))+y[7]+4249261313&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(w^p&(E^w))+y[8]+1770035416&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(E^m&(p^E))+y[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(p^w&(m^p))+y[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(m^E&(w^m))+y[11]+2304563134&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(w^p&(E^w))+y[12]+1804603682&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(E^m&(p^E))+y[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(p^w&(m^p))+y[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(m^E&(w^m))+y[15]+1236535329&4294967295,p=E+(_<<22&4294967295|_>>>10),_=m+(E^w&(p^E))+y[1]+4129170786&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(m^p))+y[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(w^m))+y[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(E^w))+y[0]+3921069994&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(p^E))+y[5]+3593408605&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(m^p))+y[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(w^m))+y[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(E^w))+y[4]+3889429448&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(p^E))+y[9]+568446438&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(m^p))+y[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(w^m))+y[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(E^w))+y[8]+1163531501&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(p^E))+y[13]+2850285829&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(m^p))+y[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^p&(w^m))+y[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(E^w))+y[12]+2368359562&4294967295,p=E+(_<<20&4294967295|_>>>12),_=m+(p^E^w)+y[5]+4294588738&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^E)+y[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^p)+y[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^m)+y[14]+4259657740&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^w)+y[1]+2763975236&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^E)+y[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^p)+y[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^m)+y[10]+3200236656&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^w)+y[13]+681279174&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^E)+y[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^p)+y[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^m)+y[6]+76029189&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(p^E^w)+y[9]+3654602809&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^E)+y[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^p)+y[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^m)+y[2]+3299628645&4294967295,p=E+(_<<23&4294967295|_>>>9),_=m+(E^(p|~w))+y[0]+4096336452&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~E))+y[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~p))+y[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~m))+y[5]+4237533241&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~w))+y[12]+1700485571&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~E))+y[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~p))+y[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~m))+y[1]+2240044497&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~w))+y[8]+1873313359&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~E))+y[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~p))+y[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~m))+y[13]+1309151649&4294967295,p=E+(_<<21&4294967295|_>>>11),_=m+(E^(p|~w))+y[4]+4149444226&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~E))+y[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~p))+y[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var p=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=p;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var p=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=p&255,p/=256;for(this.u(T),T=Array(16),m=p=0;4>m;++m)for(var y=0;32>y;y+=8)T[p++]=this.g[m]>>>y&255;return T};function o(T,m){var p=c;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=m(T)}function a(T,m){this.h=m;for(var p=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(p[E]=w,y=!1)}this.g=p}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return V(d(-T));for(var m=[],p=1,y=0;T>=p;y++)m[y]=T/p|0,p*=4294967296;return new a(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(_))):(y=y.j(p),y=y.add(d(_)))}return y}var v=h(0),I=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(P(this))return-V(this).m();for(var T=0,m=1,p=0;p<this.g.length;p++){var y=this.i(p);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(P(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),p=this,y="";;){var E=O(p,m).g;p=L(p,E.j(m));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,b(p))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=L(this,T),P(T)?-1:b(T)?0:1};function V(T){for(var m=T.g.length,p=[],y=0;y<m;y++)p[y]=~T.g[y];return new a(p,~T.h).add(I)}n.abs=function(){return P(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=_>>>16,w&=65535,_&=65535,p[E]=_<<16|w}return new a(p,p[p.length-1]&-2147483648?-1:0)};function L(T,m){return T.add(V(m))}n.j=function(T){if(b(this)||b(T))return v;if(P(this))return P(T)?V(this).j(V(T)):V(V(this).j(T));if(P(T))return V(this.j(V(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,p=[],y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,_=this.i(y)&65535,q=T.i(E)>>>16,Rt=T.i(E)&65535;p[2*y+2*E]+=_*Rt,x(p,2*y+2*E),p[2*y+2*E+1]+=w*Rt,x(p,2*y+2*E+1),p[2*y+2*E+1]+=_*q,x(p,2*y+2*E+1),p[2*y+2*E+2]+=w*q,x(p,2*y+2*E+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new a(p,0)};function x(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function k(T,m){this.g=T,this.h=m}function O(T,m){if(b(m))throw Error("division by zero");if(b(T))return new k(v,v);if(P(T))return m=O(V(T),m),new k(V(m.g),V(m.h));if(P(m))return m=O(T,V(m)),new k(V(m.g),m.h);if(30<T.g.length){if(P(T)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var p=I,y=m;0>=y.l(T);)p=Q(p),y=Q(y);var E=M(p,1),w=M(y,1);for(y=M(y,2),p=M(p,2);!b(y);){var _=w.add(y);0>=_.l(T)&&(E=E.add(p),w=_),y=M(y,1),p=M(p,1)}return m=L(T,E.j(m)),new k(E,m)}for(E=v;0<=T.l(m);){for(p=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(p),_=w.j(m);P(_)||0<_.l(T);)p-=y,w=d(p),_=w.j(m);b(w)&&(w=I),E=E.add(w),T=L(T,_)}return new k(E,T)}n.A=function(T){return O(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)&T.i(y);return new a(p,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)|T.i(y);return new a(p,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)^T.i(y);return new a(p,this.h^T.h)};function Q(T){for(var m=T.g.length+1,p=[],y=0;y<m;y++)p[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(p,T.h)}function M(T,m){var p=m>>5;m%=32;for(var y=T.g.length-p,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+p)>>>m|T.i(w+p+1)<<32-m:T.i(w+p);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ec=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,ae=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tc,Rn,vc,yr,oi,Ic,wc,Ac;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof hr=="object"&&hr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var C=l++;return{value:u(C,i[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function g(i,u,l){return i.call.apply(i.bind,arguments)}function v(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(u,A)}}return function(){return i.apply(u,arguments)}}function I(i,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,I.apply(null,arguments)}function R(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function b(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,C){for(var N=Array(arguments.length-2),J=2;J<arguments.length;J++)N[J-2]=arguments[J];return u.prototype[A].apply(f,N)}}function P(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=i.length||0,C=f.length||0;i.length=A+C;for(let N=0;N<C;N++)i[A+N]=f[N]}else i.push(f)}}class L{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(i){return/^[\s\xa0]*$/.test(i)}function k(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function O(i){return O[" "](i),i}O[" "]=function(){};var Q=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let C=0;C<p.length;C++)l=p[C],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function E(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function _(){var i=ln;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,l){const f=Rt.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Rt=new L(()=>new pe,i=>i.reset());class pe{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,Wt=!1,ln=new q,Oe=()=>{const i=c.Promise.resolve(void 0);_e=()=>{i.then(Me)}};var Me=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(l){w(l)}var u=Rt;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Wt=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Jr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i})();function zt(i,u){if(ot.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Q){t:{try{O(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Kn[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&zt.aa.h.call(this)}}b(zt,ot);var Kn={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function Yt(i,u,l,f,A){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=A,this.key=++Dt,this.da=this.fa=!1}function Jt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qn(i){this.src=i,this.g={},this.h=0}Qn.prototype.add=function(i,u,l,f,A){var C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);var N=Zr(i,u,f,A);return-1<N?(u=i[N],l||(u.fa=!1)):(u=new Yt(u,this.src,C,!!f,A),u.fa=l,i.push(u)),u};function Xr(i,u){var l=u.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,u,void 0),C;(C=0<=A)&&Array.prototype.splice.call(f,A,1),C&&(Jt(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Zr(i,u,l,f){for(var A=0;A<i.length;++A){var C=i[A];if(!C.da&&C.listener==u&&C.capture==!!l&&C.ha==f)return A}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),es={};function ao(i,u,l,f,A){if(Array.isArray(u)){for(var C=0;C<u.length;C++)ao(i,u[C],l,f,A);return null}return l=lo(l),i&&i[Ct]?i.K(u,l,d(f)?!!f.capture:!1,A):Xl(i,u,l,!1,f,A)}function Xl(i,u,l,f,A,C){if(!u)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,J=rs(i);if(J||(i[ts]=J=new Qn(i)),l=J.add(u,l,f,N,C),l.proxy)return l;if(f=Zl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Jr||(A=N),A===void 0&&(A=!1),i.addEventListener(u.toString(),f,A);else if(i.attachEvent)i.attachEvent(co(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Zl(){function i(l){return u.call(i.src,i.listener,l)}const u=th;return i}function uo(i,u,l,f,A){if(Array.isArray(u))for(var C=0;C<u.length;C++)uo(i,u[C],l,f,A);else f=d(f)?!!f.capture:!!f,l=lo(l),i&&i[Ct]?(i=i.i,u=String(u).toString(),u in i.g&&(C=i.g[u],l=Zr(C,l,f,A),-1<l&&(Jt(C[l]),Array.prototype.splice.call(C,l,1),C.length==0&&(delete i.g[u],i.h--)))):i&&(i=rs(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Zr(u,l,f,A)),(l=-1<i?u[i]:null)&&ns(l))}function ns(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Ct])Xr(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(co(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=rs(u))?(Xr(l,i),l.h==0&&(l.src=null,u[ts]=null)):Jt(i)}}}function co(i){return i in es?es[i]:es[i]="on"+i}function th(i,u){if(i.da)i=!0;else{u=new zt(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&ns(i),i=l.call(f,u)}return i}function rs(i){return i=i[ts],i instanceof Qn?i:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function lo(i){return typeof i=="function"?i:(i[ss]||(i[ss]=function(u){return i.handleEvent(u)}),i[ss])}function mt(){Vt.call(this),this.i=new Qn(this),this.M=this,this.F=null}b(mt,Vt),mt.prototype[Ct]=!0,mt.prototype.removeEventListener=function(i,u,l,f){uo(this,i,u,l,f)};function wt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new ot(u,i);else if(u instanceof ot)u.target=u.target||i;else{var A=u;u=new ot(f,i),y(u,A)}if(A=!0,l)for(var C=l.length-1;0<=C;C--){var N=u.g=l[C];A=Wn(N,f,!0,u)&&A}if(N=u.g=i,A=Wn(N,f,!0,u)&&A,A=Wn(N,f,!1,u)&&A,l)for(C=0;C<l.length;C++)N=u.g=l[C],A=Wn(N,f,!1,u)&&A}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Jt(l[f]);delete i.g[u],i.h--}}this.F=null},mt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},mt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Wn(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,C=0;C<u.length;++C){var N=u[C];if(N&&!N.da&&N.capture==l){var J=N.listener,dt=N.ha||N.src;N.fa&&Xr(i.i,N),A=J.call(dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function ho(i,u,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function fo(i){i.g=ho(()=>{i.g=null,i.i&&(i.i=!1,fo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class eh extends Vt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:fo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(i){Vt.call(this),this.h=i,this.g={}}b(hn,Vt);var go=[];function mo(i){M(i.g,function(u,l){this.g.hasOwnProperty(l)&&ns(u)},i),i.g={}}hn.prototype.N=function(){hn.aa.N.call(this),mo(this)},hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=c.JSON.stringify,nh=c.JSON.parse,rh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function os(){}os.prototype.h=null;function po(i){return i.h||(i.h=i.i())}function _o(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function as(){ot.call(this,"d")}b(as,ot);function us(){ot.call(this,"c")}b(us,ot);var ye={},yo=null;function Yn(){return yo=yo||new mt}ye.La="serverreachability";function Eo(i){ot.call(this,ye.La,i)}b(Eo,ot);function fn(i){const u=Yn();wt(u,new Eo(u))}ye.STAT_EVENT="statevent";function To(i,u){ot.call(this,ye.STAT_EVENT,i),this.stat=u}b(To,ot);function At(i){const u=Yn();wt(u,new To(u,i))}ye.Ma="timingevent";function vo(i,u){ot.call(this,ye.Ma,i),this.size=u}b(vo,ot);function gn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function mn(){this.g=!0}mn.prototype.xa=function(){this.g=!1};function sh(i,u,l,f,A,C){i.info(function(){if(i.g)if(C)for(var N="",J=C.split("&"),dt=0;dt<J.length;dt++){var Y=J[dt].split("=");if(1<Y.length){var pt=Y[0];Y=Y[1];var _t=pt.split("_");N=2<=_t.length&&_t[1]=="type"?N+(pt+"="+Y+"&"):N+(pt+"=redacted&")}}else N=null;else N=C;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+u+`
`+l+`
`+N})}function ih(i,u,l,f,A,C,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+u+`
`+l+`
`+C+" "+N})}function Le(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+ah(i,l)+(f?" "+f:"")})}function oh(i,u){i.info(function(){return"TIMEOUT: "+u})}mn.prototype.info=function(){};function ah(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return is(l)}catch{return u}}var Jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Io={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cs;function Xn(){}b(Xn,os),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},cs=new Xn;function Xt(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wo}function wo(){this.i=null,this.g="",this.h=!1}var Ao={},ls={};function hs(i,u,l){i.L=1,i.v=nr(Ht(u)),i.m=l,i.P=!0,Ro(i,null)}function Ro(i,u){i.F=Date.now(),Zn(i),i.A=Ht(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Bo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new wo,i.g=ra(i.j,l?u:null,!i.m),0<i.O&&(i.M=new eh(I(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(go[0]=A.toString()),A=go);for(var C=0;C<A.length;C++){var N=ao(l,A[C],f||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),fn(),sh(i.i,i.u,i.A,i.l,i.R,i.m)}Xt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Gt(i)==3?u.j():this.Y(i)},Xt.prototype.Y=function(i){try{if(i==this.g)t:{const _t=Gt(this.g);var u=this.g.Ba();const Be=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||_t!=4||u==7||(u==8||0>=Be?fn(3):fn(2)),ds(this);var l=this.g.Z();this.X=l;e:if(Co(this)){var f=Go(this.g);i="";var A=f.length,C=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ee(this),pn(this);var N="";break e}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(C&&u==A-1)});f.length=0,this.h.g+=i,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=l==200,ih(this.i,this.u,this.A,this.l,this.R,_t,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,dt=this.g;if((J=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(J)){var Y=J;break e}}Y=null}if(l=Y)Le(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,l);else{this.o=!1,this.s=3,At(12),Ee(this),pn(this);break t}}if(this.P){l=!0;let Nt;for(;!this.J&&this.C<N.length;)if(Nt=uh(this,N),Nt==ls){_t==4&&(this.s=4,At(14),l=!1),Le(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Ao){this.s=4,At(15),Le(this.i,this.l,N,"[Invalid Chunk]"),l=!1;break}else Le(this.i,this.l,Nt,null),fs(this,Nt);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||N.length!=0||this.h.h||(this.s=1,At(16),l=!1),this.o=this.o&&l,!l)Le(this.i,this.l,N,"[Invalid Chunked Response]"),Ee(this),pn(this);else if(0<N.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Es(pt),pt.M=!0,At(11))}}else Le(this.i,this.l,N,null),fs(this,N);_t==4&&Ee(this),this.o&&!this.J&&(_t==4?Zo(this.j,this):(this.o=!1,Zn(this)))}else Rh(this.g),l==400&&0<N.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Ee(this),pn(this)}}}catch{}finally{}};function Co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function uh(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?ls:(l=Number(u.substring(l,f)),isNaN(l)?Ao:(f+=1,f+l>u.length?ls:(u=u.slice(f,f+l),i.C=f+l,u)))}Xt.prototype.cancel=function(){this.J=!0,Ee(this)};function Zn(i){i.S=Date.now()+i.I,bo(i,i.I)}function bo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=gn(I(i.ba,i),u)}function ds(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Xt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(oh(this.i,this.A),this.L!=2&&(fn(),At(17)),Ee(this),this.s=2,pn(this)):bo(this,this.S-i)};function pn(i){i.j.G==0||i.J||Zo(i.j,i)}function Ee(i){ds(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,mo(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function fs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||gs(l.h,i))){if(!i.K&&gs(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)ur(l),or(l);else break t;ys(l),At(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=gn(I(l.Za,l),6e3));if(1>=Vo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ve(l,11)}else if((i.K||l.g==i)&&ur(l),!x(u))for(A=l.Da.g.parse(u),u=0;u<A.length;u++){let Y=A[u];if(l.T=Y[0],Y=Y[1],l.G==2)if(Y[0]=="c"){l.K=Y[1],l.ia=Y[2];const pt=Y[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));const _t=Y[4];_t!=null&&(l.Aa=_t,l.j.info("SVER="+l.Aa));const Be=Y[5];Be!=null&&typeof Be=="number"&&0<Be&&(f=1.5*Be,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Nt=i.g;if(Nt){const lr=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var C=f.h;C.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ms(C,C.h),C.h=null))}if(f.D){const Ts=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(f.ya=Ts,X(f.I,f.D,Ts))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var N=i;if(f.qa=na(f,f.J?f.ia:null,f.W),N.K){Do(f.h,N);var J=N,dt=f.L;dt&&(J.I=dt),J.B&&(ds(J),Zn(J)),f.g=N}else Jo(f);0<l.i.length&&ar(l)}else Y[0]!="stop"&&Y[0]!="close"||ve(l,7);else l.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?ve(l,7):_s(l):Y[0]!="noop"&&l.l&&l.l.ta(Y),l.v=0)}}fn(4)}catch{}}var ch=class{constructor(i,u){this.g=i,this.map=u}};function So(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Po(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vo(i){return i.h?1:i.g?i.g.size:0}function gs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ms(i,u){i.g?i.g.add(u):i.h=u}function Do(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}So.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function No(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return P(i.i)}function lh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function hh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function ko(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=hh(i),f=lh(i),A=f.length,C=0;C<A;C++)u.call(void 0,f[C],l&&l[C],i)}var Oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dh(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var C=i[l].substring(0,f);A=i[l].substring(f+1)}else C=i[l];u(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Te(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Te){this.h=i.h,tr(this,i.j),this.o=i.o,this.g=i.g,er(this,i.s),this.l=i.l;var u=i.i,l=new En;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Mo(this,l),this.m=i.m}else i&&(u=String(i).match(Oo))?(this.h=!1,tr(this,u[1]||"",!0),this.o=_n(u[2]||""),this.g=_n(u[3]||"",!0),er(this,u[4]),this.l=_n(u[5]||"",!0),Mo(this,u[6]||"",!0),this.m=_n(u[7]||"")):(this.h=!1,this.i=new En(null,this.h))}Te.prototype.toString=function(){var i=[],u=this.j;u&&i.push(yn(u,Lo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(yn(u,Lo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(yn(l,l.charAt(0)=="/"?mh:gh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",yn(l,_h)),i.join("")};function Ht(i){return new Te(i)}function tr(i,u,l){i.j=l?_n(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function er(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Mo(i,u,l){u instanceof En?(i.i=u,yh(i.i,i.h)):(l||(u=yn(u,ph)),i.i=new En(u,i.h))}function X(i,u,l){i.i.set(u,l)}function nr(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function _n(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function yn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,fh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function fh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Lo=/[#\/\?@]/g,gh=/[#\?:]/g,mh=/[#\?]/g,ph=/[#\?@]/g,_h=/#/g;function En(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Zt(i){i.g||(i.g=new Map,i.h=0,i.i&&dh(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=En.prototype,n.add=function(i,u){Zt(this),this.i=null,i=xe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function xo(i,u){Zt(i),u=xe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Fo(i,u){return Zt(i),u=xe(i,u),i.g.has(u)}n.forEach=function(i,u){Zt(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(u,A,f,this)},this)},this)},n.na=function(){Zt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const A=i[f];for(let C=0;C<A.length;C++)l.push(u[f])}return l},n.V=function(i){Zt(this);let u=[];if(typeof i=="string")Fo(this,i)&&(u=u.concat(this.g.get(xe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Zt(this),this.i=null,i=xe(this,i),Fo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Bo(i,u,l){xo(i,u),0<l.length&&(i.i=null,i.g.set(xe(i,u),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const C=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=C;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),i.push(A)}}return this.i=i.join("&")};function xe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function yh(i,u){u&&!i.j&&(Zt(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(xo(this,f),Bo(this,A,l))},i)),i.j=u}function Eh(i,u){const l=new mn;if(c.Image){const f=new Image;f.onload=R(te,l,"TestLoadImage: loaded",!0,u,f),f.onerror=R(te,l,"TestLoadImage: error",!1,u,f),f.onabort=R(te,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=R(te,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Th(i,u){const l=new mn,f=new AbortController,A=setTimeout(()=>{f.abort(),te(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(C=>{clearTimeout(A),C.ok?te(l,"TestPingServer: ok",!0,u):te(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),te(l,"TestPingServer: error",!1,u)})}function te(i,u,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function vh(){this.g=new rh}function Ih(i,u,l){const f=l||"";try{ko(i,function(A,C){let N=A;d(A)&&(N=is(A)),u.push(f+C+"="+encodeURIComponent(N))})}catch(A){throw u.push(f+"type="+encodeURIComponent("_badmap")),A}}function rr(i){this.l=i.Ub||null,this.j=i.eb||!1}b(rr,os),rr.prototype.g=function(){return new sr(this.l,this.j)},rr.prototype.i=(function(i){return function(){return i}})({});function sr(i,u){mt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(sr,mt),n=sr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,vn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Tn(this):vn(this),this.readyState==3&&Uo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Tn(this))},n.Qa=function(i){this.g&&(this.response=i,Tn(this))},n.ga=function(){this.g&&Tn(this)};function Tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,vn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function qo(i){let u="";return M(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function ps(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=qo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,u,l))}function rt(i){mt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(rt,mt);var wh=/^https?$/i,Ah=["POST","PUT"];n=rt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cs.g(),this.v=this.o?po(this.o):po(cs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(C){jo(this,C);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())l.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ah,u,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,N]of l)this.g.setRequestHeader(C,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ho(this),this.u=!0,this.g.send(i),this.u=!1}catch(C){jo(this,C)}};function jo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,$o(i),ir(i)}function $o(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,wt(this,"complete"),wt(this,"abort"),ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ir(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zo(this):this.bb())},n.bb=function(){zo(this)};function zo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)ho(i.Ea,0,i);else if(wt(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const N=i.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=N===0){var A=String(i.D).match(Oo)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!wh.test(A?A.toLowerCase():"")}l=f}if(l)wt(i,"complete"),wt(i,"success");else{i.m=6;try{var C=2<Gt(i)?i.g.statusText:""}catch{C=""}i.l=C+" ["+i.Z()+"]",$o(i)}}finally{ir(i)}}}}function ir(i,u){if(i.g){Ho(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||wt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Ho(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),nh(u)}};function Go(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(i){const u={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(x(i[f]))continue;var l=E(i[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const C=u[A]||[];u[A]=C,C.push(l)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function Ko(i){this.Aa=0,this.i=[],this.j=new mn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=In("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=In("baseRetryDelayMs",5e3,i),this.cb=In("retryDelaySeedMs",1e4,i),this.Wa=In("forwardChannelMaxRetries",2,i),this.wa=In("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new So(i&&i.concurrentRequestLimit),this.Da=new vh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ko.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){At(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=na(this,null,this.W),ar(this)};function _s(i){if(Qo(i),i.G==3){var u=i.U++,l=Ht(i.I);if(X(l,"SID",i.K),X(l,"RID",u),X(l,"TYPE","terminate"),wn(i,l),u=new Xt(i,i.j,u),u.L=2,u.v=nr(Ht(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=ra(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zn(u)}ea(i)}function or(i){i.g&&(Es(i),i.g.cancel(),i.g=null)}function Qo(i){or(i),i.u&&(c.clearTimeout(i.u),i.u=null),ur(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ar(i){if(!Po(i.h)&&!i.s){i.s=!0;var u=i.Ga;_e||Oe(),Wt||(_e(),Wt=!0),ln.add(u,i),i.B=0}}function Ch(i,u){return Vo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=gn(I(i.Ga,i,u),ta(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Xt(this,this.j,i);let C=this.o;if(this.S&&(C?(C=m(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Yo(this,A,u),l=Ht(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),wn(this,l),C&&(this.O?u="headers="+encodeURIComponent(String(qo(C)))+"&"+u:this.m&&ps(l,this.m,C)),ms(this.h,A),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",u),X(l,"SID","null"),A.T=!0,hs(A,l,null)):hs(A,l,u),this.G=2}}else this.G==3&&(i?Wo(this,i):this.i.length==0||Po(this.h)||Wo(this))};function Wo(i,u){var l;u?l=u.l:l=i.U++;const f=Ht(i.I);X(f,"SID",i.K),X(f,"RID",l),X(f,"AID",i.T),wn(i,f),i.m&&i.o&&ps(f,i.m,i.o),l=new Xt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Yo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ms(i.h,l),hs(l,f,u)}function wn(i,u){i.H&&M(i.H,function(l,f){X(u,f,l)}),i.l&&ko({},function(l,f){X(u,f,l)})}function Yo(i,u,l){l=Math.min(i.i.length,l);var f=i.l?I(i.l.Na,i.l,i):null;t:{var A=i.i;let C=-1;for(;;){const N=["count="+l];C==-1?0<l?(C=A[0].g,N.push("ofs="+C)):C=0:N.push("ofs="+C);let J=!0;for(let dt=0;dt<l;dt++){let Y=A[dt].g;const pt=A[dt].map;if(Y-=C,0>Y)C=Math.max(0,A[dt].g-100),J=!1;else try{Ih(pt,N,"req"+Y+"_")}catch{f&&f(pt)}}if(J){f=N.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Jo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;_e||Oe(),Wt||(_e(),Wt=!0),ln.add(u,i),i.v=0}}function ys(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=gn(I(i.Fa,i),ta(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=gn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),or(this),Xo(this))};function Es(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Xo(i){i.g=new Xt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ht(i.qa);X(u,"RID","rpc"),X(u,"SID",i.K),X(u,"AID",i.T),X(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(u,"TO",i.ja),X(u,"TYPE","xmlhttp"),wn(i,u),i.m&&i.o&&ps(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=nr(Ht(u)),l.m=null,l.P=!0,Ro(l,i)}n.Za=function(){this.C!=null&&(this.C=null,or(this),ys(this),At(19))};function ur(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Zo(i,u){var l=null;if(i.g==u){ur(i),Es(i),i.g=null;var f=2}else if(gs(i.h,u))l=u.D,Do(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var A=i.B;f=Yn(),wt(f,new vo(f,l)),ar(i)}else Jo(i);else if(A=u.s,A==3||A==0&&0<u.X||!(f==1&&Ch(i,u)||f==2&&ys(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),A){case 1:ve(i,5);break;case 4:ve(i,10);break;case 3:ve(i,6);break;default:ve(i,2)}}}function ta(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ve(i,u){if(i.j.info("Error code "+u),u==2){var l=I(i.fb,i),f=i.Xa;const A=!f;f=new Te(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||tr(f,"https"),nr(f),A?Eh(f.toString(),l):Th(f.toString(),l)}else At(2);i.G=0,i.l&&i.l.sa(u),ea(i),Qo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function ea(i){if(i.G=0,i.ka=[],i.l){const u=No(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.ra()}}function na(i,u,l){var f=l instanceof Te?Ht(l):new Te(l);if(f.g!="")u&&(f.g=u+"."+f.g),er(f,f.s);else{var A=c.location;f=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var C=new Te(null);f&&tr(C,f),u&&(C.g=u),A&&er(C,A),l&&(C.l=l),f=C}return l=i.D,u=i.ya,l&&u&&X(f,l,u),X(f,"VER",i.la),wn(i,f),f}function ra(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new rt(new rr({eb:l})):new rt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}n=sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cr(){}cr.prototype.g=function(i,u){return new St(i,u)};function St(i,u){mt.call(this),this.g=new Ko(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!x(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Fe(this)}b(St,mt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){_s(this.g)},St.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=is(i),i=l);u.i.push(new ch(u.Ya++,i)),u.G==3&&ar(u)},St.prototype.N=function(){this.g.l=null,delete this.j,_s(this.g),delete this.g,St.aa.N.call(this)};function ia(i){as.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}b(ia,as);function oa(){us.call(this),this.status=1}b(oa,us);function Fe(i){this.g=i}b(Fe,sa),Fe.prototype.ua=function(){wt(this.g,"a")},Fe.prototype.ta=function(i){wt(this.g,new ia(i))},Fe.prototype.sa=function(i){wt(this.g,new oa)},Fe.prototype.ra=function(){wt(this.g,"b")},cr.prototype.createWebChannel=cr.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Ac=function(){return new cr},wc=function(){return Yn()},Ic=ye,oi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,yr=Jn,Io.COMPLETE="complete",vc=Io,_o.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Rn=_o,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Tc=rt}).apply(typeof hr<"u"?hr:typeof self<"u"?self:typeof window<"u"?window:{});const Ta="@firebase/firestore",va="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new cc("@firebase/firestore");function qe(){return Se.logLevel}function F(n,...t){if(Se.logLevel<=G.DEBUG){const e=t.map(Pi);Se.debug(`Firestore (${sn}): ${n}`,...e)}}function Qt(n,...t){if(Se.logLevel<=G.ERROR){const e=t.map(Pi);Se.error(`Firestore (${sn}): ${n}`,...e)}}function ue(n,...t){if(Se.logLevel<=G.WARN){const e=t.map(Pi);Se.warn(`Firestore (${sn}): ${n}`,...e)}}function Pi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Rc(n,r,e)}function Rc(n,t,e){let r=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Qt(r),new Error(r)}function nt(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Rc(t,s,r)}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Et.UNAUTHENTICATED)))}shutdown(){}}class of{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class af{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ae,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ae)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string",31837,{l:r}),new Cc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new Et(t)}}class uf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new uf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ia{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ia(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ia(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function ai(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return z(r,s);{const o=bc(),a=df(o.encode(wa(n,e)),o.encode(wa(t,e)));return a!==0?a:z(r,s)}}e+=r>65535?2:1}return z(n.length,t.length)}function wa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function df(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return z(n[e],t[e]);return z(n.length,t.length)}function Xe(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="__name__";class Lt{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&$(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Lt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const r=Lt.isNumericId(t),s=Lt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):ai(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ae.fromString(t.substring(4,t.length-2))}}class tt extends Lt{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new tt(e)}static emptyPath(){return new tt([])}}const ff=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Lt{construct(t,e,r){return new vt(t,e,r)}static isValidIdentifier(t){return ff.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Aa}static keyField(){return new vt([Aa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(tt.fromString(t))}static fromName(t){return new U(tt.fromString(t).popFirst(5))}static empty(){return new U(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new tt(t.slice()))}}function gf(n,t,e,r){if(t===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ra(n){if(U.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function He(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,t){const e={typeString:n};return t&&(e.value=t),e}function $n(n,t){if(!Pc(n))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new B(D.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-62135596800,ba=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ba);return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ca)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ba}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($n(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ca;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:ct("string",et._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new et(0,0))}static max(){return new j(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=-1;function mf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new ce(s,U.empty(),t)}function pf(n){return new ce(n.readTime,n.key,xn)}class ce{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ce(j.min(),U.empty(),xn)}static max(){return new ce(j.max(),U.empty(),xn)}}function _f(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==yf)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,o=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((g=>{a[d]=g,++c,c===o&&r(a)}),(g=>s(g)))}}))}static doWhile(t,e){return new S(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Tf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function on(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ur.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=-1;function qr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function If(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="";function wf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Sa(t)),t=Af(n.get(e),t);return Sa(t)}function Af(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Vc:e+="";break;default:e+=o}}return e}function Sa(n){return n+Vc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function an(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Dc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw $(27949);return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(t){return new Va(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Va{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new ne([])}unionWith(t){let e=new lt(vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nc("Invalid base64 string: "+o):o}})(t);return new gt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Rf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function le(n){if(nt(!!n,39018),typeof n=="string"){let t=0;const e=Rf.exec(n);if(nt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function he(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="server_timestamp",Oc="__type__",Mc="__previous_value__",Lc="__local_write_time__";function Vi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Oc])===null||e===void 0?void 0:e.stringValue)===kc}function jr(n){const t=n.mapValue.fields[Mc];return Vi(t)?jr(t):t}function Fn(n){const t=le(n.mapValue.fields[Lc].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e,r,s,o,a,c,h,d,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=g}}const br="(default)";class Bn{constructor(t,e){this.projectId=t,this.database=e||br}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database===br}isEqual(t){return t instanceof Bn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="__type__",bf="__max__",fr={mapValue:{}},Fc="__vector__",Sr="value";function de(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vi(n)?4:Pf(n)?9007199254740991:Sf(n)?10:11:$(28295,{value:n})}function qt(n,t){if(n===t)return!0;const e=de(n);if(e!==de(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=le(s.timestampValue),c=le(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return he(s.bytesValue).isEqual(he(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),c=st(o.doubleValue);return a===c?Cr(a)===Cr(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return Xe(n.arrayValue.values||[],t.arrayValue.values||[],qt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Pa(a)!==Pa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!qt(a[h],c[h])))return!1;return!0})(n,t);default:return $(52216,{left:n})}}function Un(n,t){return(n.values||[]).find((e=>qt(e,t)))!==void 0}function Ze(n,t){if(n===t)return 0;const e=de(n),r=de(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return Da(n.timestampValue,t.timestampValue);case 4:return Da(Fn(n),Fn(t));case 5:return ai(n.stringValue,t.stringValue);case 6:return(function(o,a){const c=he(o),h=he(a);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const g=z(c[d],h[d]);if(g!==0)return g}return z(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=z(st(o.latitude),st(a.latitude));return c!==0?c:z(st(o.longitude),st(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Na(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var c,h,d,g;const v=o.fields||{},I=a.fields||{},R=(c=v[Sr])===null||c===void 0?void 0:c.arrayValue,b=(h=I[Sr])===null||h===void 0?void 0:h.arrayValue,P=z(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((g=b?.values)===null||g===void 0?void 0:g.length)||0);return P!==0?P:Na(R,b)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===fr.mapValue&&a===fr.mapValue)return 0;if(o===fr.mapValue)return 1;if(a===fr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let v=0;v<h.length&&v<g.length;++v){const I=ai(h[v],g[v]);if(I!==0)return I;const R=Ze(c[h[v]],d[g[v]]);if(R!==0)return R}return z(h.length,g.length)})(n.mapValue,t.mapValue);default:throw $(23264,{le:e})}}function Da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=le(n),r=le(t),s=z(e.seconds,r.seconds);return s!==0?s:z(e.nanos,r.nanos)}function Na(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ze(e[s],r[s]);if(o)return o}return z(e.length,r.length)}function tn(n){return ui(n)}function ui(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=le(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return he(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return U.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ui(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ui(e.fields[a])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function Er(n){switch(de(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=jr(n);return t?16+Er(t):16;case 5:return 2*n.stringValue.length;case 6:return he(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Er(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return an(r.fields,((o,a)=>{s+=o.length+Er(a)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function ka(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ci(n){return!!n&&"integerValue"in n}function Di(n){return!!n&&"arrayValue"in n}function Oa(n){return!!n&&"nullValue"in n}function Ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rs(n){return!!n&&"mapValue"in n}function Sf(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[xc])===null||e===void 0?void 0:e.stringValue)===Fc}function Vn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return an(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Vn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Vn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Pf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vn(e)}setAll(t){let e=vt.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Vn(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){an(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new xt(Vn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,j.min(),j.min(),j.min(),xt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,j.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,j.min(),j.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,j.min(),j.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function La(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=Ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function xa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{}class ut extends Bc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Nf(t,e,r):e==="array-contains"?new Mf(t,r):e==="in"?new Lf(t,r):e==="not-in"?new xf(t,r):e==="array-contains-any"?new Ff(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new kf(t,r):new Of(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ze(e,this.value)):e!==null&&de(this.value)===de(e)&&this.matchesComparison(Ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends Bc{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ot(t,e)}matches(t){return Uc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uc(n){return n.op==="and"}function qc(n){return Df(n)&&Uc(n)}function Df(n){for(const t of n.filters)if(t instanceof Ot)return!1;return!0}function li(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(qc(n))return n.filters.map((t=>li(t))).join(",");{const t=n.filters.map((e=>li(e))).join(",");return`${n.op}(${t})`}}function jc(n,t){return n instanceof ut?(function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)})(n,t):n instanceof Ot?(function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&jc(a,s.filters[c])),!0):!1})(n,t):void $(19439)}function $c(n){return n instanceof ut?(function(e){return`${e.field.canonicalString()} ${e.op} ${tn(e.value)}`})(n):n instanceof Ot?(function(e){return e.op.toString()+" {"+e.getFilters().map($c).join(" ,")+"}"})(n):"Filter"}class Nf extends ut{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class kf extends ut{constructor(t,e){super(t,"in",e),this.keys=zc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Of extends ut{constructor(t,e){super(t,"not-in",e),this.keys=zc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function zc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>U.fromName(r.referenceValue)))}class Mf extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Di(e)&&Un(e.arrayValue,this.value)}}class Lf extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Un(this.value.arrayValue,e)}}class xf extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Un(this.value.arrayValue,e)}}class Ff extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Di(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Un(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Pe=null}}function Fa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Bf(n,t,e,r,s,o,a)}function Ni(n){const t=K(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>li(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>tn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>tn(r))).join(",")),t.Pe=e}return t.Pe}function ki(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!jc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!xa(n.startAt,t.startAt)&&xa(n.endAt,t.endAt)}function hi(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Uf(n,t,e,r,s,o,a,c){return new un(n,t,e,r,s,o,a,c)}function Oi(n){return new un(n)}function Ba(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hc(n){return n.collectionGroup!==null}function Dn(n){const t=K(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(vt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new qn(o,r))})),e.has(vt.keyField().canonicalString())||t.Te.push(new qn(vt.keyField(),r))}return t.Te}function Ft(n){const t=K(n);return t.Ie||(t.Ie=qf(t,Dn(n))),t.Ie}function qf(n,t){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new qn(s.field,o)}));const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function di(n,t){const e=n.filters.concat([t]);return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,t,e){return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function $r(n,t){return ki(Ft(n),Ft(t))&&n.limitType===t.limitType}function Gc(n){return`${Ni(Ft(n))}|lt:${n.limitType}`}function je(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>$c(s))).join(", ")}]`),qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>tn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>tn(s))).join(",")),`Target(${r})`})(Ft(n))}; limitType=${n.limitType})`}function zr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const d=La(a,c,h);return a.inclusive?d<=0:d<0})(r.startAt,Dn(r),s)||r.endAt&&!(function(a,c,h){const d=La(a,c,h);return a.inclusive?d>=0:d>0})(r.endAt,Dn(r),s))})(n,t)}function jf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kc(n){return(t,e)=>{let r=!1;for(const s of Dn(n)){const o=$f(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function $f(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ze(h,d):$(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){an(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Dc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new it(U.comparator);function fe(){return zf}const Qc=new it(U.comparator);function Cn(...n){let t=Qc;for(const e of n)t=t.insert(e.key,e);return t}function Hf(n){let t=Qc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function we(){return Nn()}function Wc(){return Nn()}function Nn(){return new De((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Gf=new lt(U.comparator);function W(...n){let t=Gf;for(const e of n)t=t.add(e);return t}const Kf=new lt(z);function Qf(){return Kf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function Yc(n){return{integerValue:""+n}}function Wf(n,t){return If(t)?Yc(t):Mi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this._=void 0}}function Yf(n,t,e){return n instanceof gi?(function(s,o){const a={fields:{[Oc]:{stringValue:kc},[Lc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Vi(o)&&(o=jr(o)),o&&(a.fields[Mc]=o),{mapValue:a}})(e,t):n instanceof Vr?Jc(n,t):n instanceof Dr?Xc(n,t):(function(s,o){const a=Xf(s,o),c=Ua(a)+Ua(s.Ee);return ci(a)&&ci(s.Ee)?Yc(c):Mi(s.serializer,c)})(n,t)}function Jf(n,t,e){return n instanceof Vr?Jc(n,t):n instanceof Dr?Xc(n,t):e}function Xf(n,t){return n instanceof mi?(function(r){return ci(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class gi extends Hr{}class Vr extends Hr{constructor(t){super(),this.elements=t}}function Jc(n,t){const e=Zc(t);for(const r of n.elements)e.some((s=>qt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Dr extends Hr{constructor(t){super(),this.elements=t}}function Xc(n,t){let e=Zc(t);for(const r of n.elements)e=e.filter((s=>!qt(s,r)));return{arrayValue:{values:e}}}class mi extends Hr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Ua(n){return st(n.integerValue||n.doubleValue)}function Zc(n){return Di(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Zf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Vr&&s instanceof Vr||r instanceof Dr&&s instanceof Dr?Xe(r.elements,s.elements,qt):r instanceof mi&&s instanceof mi?qt(r.Ee,s.Ee):r instanceof gi&&s instanceof gi})(n.transform,t.transform)}class Re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Re}static exists(t){return new Re(void 0,t)}static updateTime(t){return new Re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Li{}function tl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new eg(n.key,Re.none()):new xi(n.key,n.data,Re.none());{const e=n.data,r=xt.empty();let s=new lt(vt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Gr(n.key,r,new ne(s.toArray()),Re.none())}}function tg(n,t,e){n instanceof xi?(function(s,o,a){const c=s.value.clone(),h=ja(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof Gr?(function(s,o,a){if(!Tr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ja(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(el(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function kn(n,t,e,r){return n instanceof xi?(function(o,a,c,h){if(!Tr(o.precondition,a))return c;const d=o.value.clone(),g=$a(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Gr?(function(o,a,c,h){if(!Tr(o.precondition,a))return c;const d=$a(o.fieldTransforms,h,a),g=a.data;return g.setAll(el(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((v=>v.field)))})(n,t,e,r):(function(o,a,c){return Tr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function qa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xe(r,s,((o,a)=>Zf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xi extends Li{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gr extends Li{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function el(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function ja(n,t,e){const r=new Map;nt(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Jf(a,c,e[s]))}return r}function $a(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Yf(o,a,t))}return r}class eg extends Li{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&tg(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Wc();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=tl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),W())}isEqual(t){return this.batchId===t.batchId&&Xe(this.mutations,t.mutations,((e,r)=>qa(e,r)))&&Xe(this.baseMutations,t.baseMutations,((e,r)=>qa(e,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,H;function nl(n){if(n===void 0)return Qt("GRPC error has no .code"),D.UNKNOWN;switch(n){case at.OK:return D.OK;case at.CANCELLED:return D.CANCELLED;case at.UNKNOWN:return D.UNKNOWN;case at.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case at.INTERNAL:return D.INTERNAL;case at.UNAVAILABLE:return D.UNAVAILABLE;case at.UNAUTHENTICATED:return D.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case at.NOT_FOUND:return D.NOT_FOUND;case at.ALREADY_EXISTS:return D.ALREADY_EXISTS;case at.PERMISSION_DENIED:return D.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case at.ABORTED:return D.ABORTED;case at.OUT_OF_RANGE:return D.OUT_OF_RANGE;case at.UNIMPLEMENTED:return D.UNIMPLEMENTED;case at.DATA_LOSS:return D.DATA_LOSS;default:return $(39323,{code:n})}}(H=at||(at={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new ae([4294967295,4294967295],0);function za(n){const t=bc().encode(n),e=new Ec;return e.update(t),new Uint8Array(e.digest())}function Ha(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ae([e,r],0),new ae([s,o],0)]}class Fi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new bn(`Invalid padding: ${e}`);if(r<0)throw new bn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new bn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new bn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ae.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(ae.fromNumber(r)));return s.compare(ig)===1&&(s=new ae([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=za(t),[r,s]=Ha(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Fi(o,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.fe===0)return;const e=za(t),[r,s]=Ha(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,zn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Kr(j.min(),s,new it(z),fe(),W())}}class zn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new zn(r,e,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class rl{constructor(t,e){this.targetId=t,this.De=e}}class sl{constructor(t,e,r=gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ga{constructor(){this.ve=0,this.Ce=Ka(),this.Fe=gt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=W(),e=W(),r=W();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:o})}})),new zn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=Ka()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class og{constructor(t){this.We=t,this.Ge=new Map,this.ze=fe(),this.je=gr(),this.Je=gr(),this.He=new it(z)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:$(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(hi(o))if(r===0){const a=new U(o.path);this.Xe(e,a,Tt.newNoDocument(a,j.min()))}else nt(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const c=this._t(t),h=c?this.ut(c,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=he(r).toUint8Array()}catch(h){if(h instanceof Nc)return ue("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Fi(a,s,o)}catch(h){return ue(h instanceof bn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const c=this.st(a);if(c){if(o.current&&hi(c.target)){const h=new U(c.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Tt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let r=W();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const s=new Kr(t,e,this.He,this.ze,r);return this.ze=fe(),this.je=gr(),this.Je=gr(),this.He=new it(z),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Ga,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new lt(z),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new lt(z),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Ga),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function gr(){return new it(U.comparator)}function Ka(){return new it(U.comparator)}const ag={asc:"ASCENDING",desc:"DESCENDING"},ug={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cg={and:"AND",or:"OR"};class lg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function pi(n,t){return n.useProto3Json||qr(t)?t:{value:t}}function _i(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function il(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ge(n){return nt(!!n,49232),j.fromTimestamp((function(e){const r=le(e);return new et(r.seconds,r.nanos)})(n))}function ol(n,t){return yi(n,t).canonicalString()}function yi(n,t){const e=(function(s){return new tt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function al(n){const t=tt.fromString(n);return nt(dl(t),10190,{key:t.toString()}),t}function Cs(n,t){const e=al(t);if(e.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(cl(e))}function ul(n,t){return ol(n.databaseId,t)}function hg(n){const t=al(n);return t.length===4?tt.emptyPath():cl(t)}function Qa(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cl(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dg(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,g){return d.useProto3Json?(nt(g===void 0||typeof g=="string",58123),gt.fromBase64String(g||"")):(nt(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),gt.fromUint8Array(g||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const g=d.code===void 0?D.UNKNOWN:nl(d.code);return new B(g,d.message||"")})(a);e=new sl(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cs(n,r.document.name),o=Ge(r.document.updateTime),a=r.document.createTime?Ge(r.document.createTime):j.min(),c=new xt({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(s,o,a,c),d=r.targetIds||[],g=r.removedTargetIds||[];e=new vr(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Cs(n,r.document),o=r.readTime?Ge(r.readTime):j.min(),a=Tt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new vr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Cs(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return $(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new sg(s,o),c=r.targetId;e=new rl(c,a)}}return e}function fg(n,t){return{documents:[ul(n,t.path)]}}function gg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ul(n,s);const o=(function(d){if(d.length!==0)return hl(Ot.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((g=>(function(I){return{field:$e(I.field),direction:_g(I.dir)}})(g)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=pi(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function mg(n){let t=hg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(v){const I=ll(v);return I instanceof Ot&&qc(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(v){return v.map((I=>(function(b){return new qn(ze(b.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(I)))})(e.orderBy));let c=null;e.limit&&(c=(function(v){let I;return I=typeof v=="object"?v.value:v,qr(I)?null:I})(e.limit));let h=null;e.startAt&&(h=(function(v){const I=!!v.before,R=v.values||[];return new Pr(R,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(v){const I=!v.before,R=v.values||[];return new Pr(R,I)})(e.endAt)),Uf(t,s,a,o,c,"F",h,d)}function pg(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ll(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ze(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ze(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ze(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ze(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ut.create(ze(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ot.create(e.compositeFilter.filters.map((r=>ll(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(e.compositeFilter.op))})(n):$(30097,{filter:n})}function _g(n){return ag[n]}function yg(n){return ug[n]}function Eg(n){return cg[n]}function $e(n){return{fieldPath:n.canonicalString()}}function ze(n){return vt.fromServerFormat(n.fieldPath)}function hl(n){return n instanceof ut?(function(e){if(e.op==="=="){if(Ma(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NAN"}};if(Oa(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ma(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NAN"}};if(Oa(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$e(e.field),op:yg(e.op),value:e.value}}})(n):n instanceof Ot?(function(e){const r=e.getFilters().map((s=>hl(s)));return r.length===1?r[0]:{compositeFilter:{op:Eg(e.op),filters:r}}})(n):$(54877,{filter:n})}function dl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,r,s,o=j.min(),a=j.min(),c=gt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t){this.gt=t}}function vg(n){const t=mg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Dn=new wg}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ce.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ce.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class wg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(tt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fl=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(fl,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new en(0)}static ur(){return new en(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="LruGarbageCollector",Ag=1048576;function Ja([n,t],[e,r]){const s=z(n,e);return s===0?z(t,r):s}class Rg{constructor(t){this.Tr=t,this.buffer=new lt(Ja),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ja(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Cg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){F(Ya,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){on(e)?F(Ya,"Ignoring IndexedDB error during garbage collection: ",e):await Br(e)}await this.Rr(3e5)}))}}class bg{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Ur.ue);const r=new Rg(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Wa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wa):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,c,h,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s)))).next((v=>(r=v,c=Date.now(),this.removeTargets(t,r,e)))).next((v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((v=>(d=Date.now(),qe()<=G.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v}))))}}function Sg(n,t){return new bg(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.changes=new De((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&kn(r.mutation,s,ne.empty(),et.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,W()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=W()){const s=we();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=Cn();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=we();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,W())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let o=fe();const a=Nn(),c=(function(){return Nn()})();return e.forEach(((h,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof Gr)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),kn(g.mutation,d,g.mutation.getFieldMask(),et.now())):a.set(d.key,ne.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,g)=>a.set(d,g))),e.forEach(((d,g)=>{var v;return c.set(d,new Vg(g,(v=a.get(d))!==null&&v!==void 0?v:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=Nn();let s=new it(((a,c)=>a-c)),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||ne.empty();g=c.applyToLocalView(d,g),r.set(h,g);const v=(s.get(c.batchId)||W()).add(h);s=s.insert(c.batchId,v)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,g=h.value,v=Wc();g.forEach((I=>{if(!o.has(I)){const R=tl(e.get(I),r.get(I));R!==null&&v.set(I,R),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(we());let c=xn,h=o;return a.next((d=>S.forEach(d,((g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(g)?S.resolve():this.remoteDocumentCache.getEntry(t,g).next((I=>{h=h.insert(g,I)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,W()))).next((g=>({batchId:c,changes:Hf(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next((r=>{let s=Cn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Cn();return this.indexManager.getCollectionParents(t,o).next((c=>S.forEach(c,(h=>{const d=(function(v,I){return new un(I,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((g=>{g.forEach(((v,I)=>{a=a.insert(v,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Tt.newInvalidDocument(g)))}));let c=Cn();return a.forEach(((h,d)=>{const g=o.get(h);g!==void 0&&kn(g.mutation,d,ne.empty(),et.now()),zr(e,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ge(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:vg(s.bundledQuery),readTime:Ge(s.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.overlays=new it(U.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=we();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=we(),o=e.length+1,a=new U(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new it(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=we(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=we(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=s)););return S.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rg(e,r));let o=this.kr.get(e);o===void 0&&(o=W(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.qr=new lt(ht.Qr),this.$r=new lt(ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ht(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ht(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new U(new tt([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new U(new tt([])),r=new ht(e,t),s=new ht(e,t+1);let o=W();return this.$r.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ht(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return U.comparator(t.key,e.key)||z(t.Hr,e.Hr)}static Ur(t,e){return z(t.Hr,e.Hr)||U.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new lt(ht.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ng(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?vf:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);o.push(c)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(z);return e.forEach((s=>{const o=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(c=>{r=r.add(c.Hr)}))})),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new ht(new U(o),0);let c=new lt(z);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Hr)),!0)}),a),S.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){nt(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,(s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new ht(e,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.ni=t,this.docs=(function(){return new it(U.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=fe();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=fe();const a=e.path,c=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_f(pf(g),r)<=0||(s.has(g.key)||zr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){$(9500)}ri(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new xg(this)}getSize(t){return S.resolve(this.size)}}class xg extends Pg{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t){this.persistence=t,this.ii=new De((e=>Ni(e)),ki),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new Bi,this.targetCount=0,this._i=en.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new en(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ur(0),this.ci=!1,this.ci=!0,this.li=new Og,this.referenceDelegate=t(this),this.hi=new Fg(this),this.indexManager=new Ig,this.remoteDocumentCache=(function(s){return new Lg(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Tg(e),this.Ti=new Ng(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Mg(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){F("MemoryPersistence","Starting transaction:",t);const s=new Bg(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return S.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class Bg extends Ef{constructor(t){super(),this.currentSequenceNumber=t}}class Ui{constructor(t){this.persistence=t,this.Ai=new Bi,this.Ri=null}static Vi(t){return new Ui(t)}get mi(){if(this.Ri)return this.Ri;throw $(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,(r=>{const s=U.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,j.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Nr{constructor(t,e){this.persistence=t,this.gi=new De((r=>wf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Sg(this,e)}static Vi(t,e){return new Nr(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return S.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((c=>{c||(r++,o.removeEntry(a,j.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Er(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=W(),s=W();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new qi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return jh()?8:Tf(Uh())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Ug;return this.ws(t,e,a).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,a,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(qe()<=G.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(qe()<=G.DEBUG&&F("QueryEngine","Query:",je(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(qe()<=G.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):S.resolve())}ps(t,e){if(Ba(e))return S.resolve(null);let r=Ft(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=fi(e,null,"F"),r=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=W(...o);return this.gs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,c);return this.Ds(e,d,a,h.readTime)?this.ps(t,fi(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,r,s){return Ba(e)||s.isEqual(j.min())?S.resolve(null):this.gs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?S.resolve(null):(qe()<=G.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),je(e)),this.vs(t,a,e,mf(s,xn)).next((c=>c)))}))}bs(t,e){let r=new lt(Kc(t));return e.forEach(((s,o)=>{zr(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return qe()<=G.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",je(e)),this.gs.getDocumentsMatchingQuery(t,e,ce.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="LocalStore",jg=3e8;class $g{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new it(z),this.Ms=new De((o=>Ni(o)),ki),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dg(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function zg(n,t,e,r){return new $g(n,t,e,r)}async function ml(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let h=W();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function pl(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Hg(n,t){const e=K(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const c=[];t.targetChanges.forEach(((g,v)=>{const I=s.get(v);if(!I)return;c.push(e.hi.removeMatchingKeys(o,g.removedDocuments,v).next((()=>e.hi.addMatchingKeys(o,g.addedDocuments,v))));let R=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?R=R.withResumeToken(gt.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):g.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(g.resumeToken,r)),s=s.insert(v,R),(function(P,V,L){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=jg?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(I,R,g)&&c.push(e.hi.updateTargetData(o,R))}));let h=fe(),d=W();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),c.push(Gg(o,a,t.documentUpdates).next((g=>{h=g.Ls,d=g.ks}))),!r.isEqual(j.min())){const g=e.hi.getLastRemoteSnapshotVersion(o).next((v=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(g)}return S.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function Gg(n,t,e){let r=W(),s=W();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=fe();return e.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(j.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):F(ji,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:s}}))}function Kg(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,S.resolve(s)):e.hi.allocateTargetId(r).next((a=>(s=new re(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function Ei(n,t,e){const r=K(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!on(a))throw a;F(ji,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Xa(n,t,e){const r=K(n);let s=j.min(),o=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,g){const v=K(h),I=v.Ms.get(g);return I!==void 0?S.resolve(v.Fs.get(I)):v.hi.getTargetData(d,g)})(r,a,Ft(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:j.min(),e?o:W()))).next((c=>(Qg(r,jf(t),c),{documents:c,qs:o})))))}function Qg(n,t,e){let r=n.xs.get(t)||j.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class Za{constructor(){this.activeTargetIds=Qf()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wg{constructor(){this.Fo=new Za,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Za,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="ConnectivityMonitor";class eu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){F(tu,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){F(tu,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr=null;function Ti(){return mr===null?mr=(function(){return 268435456+Math.round(2147483648*Math.random())})():mr++,"0x"+mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="RestConnection",Jg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xg{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===br?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Ti(),c=this.Go(t,e.toUriEncodedString());F(bs,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(c),g=xr(d);return this.jo(t,c,h,r,g).then((v=>(F(bs,`Received RPC '${t}' ${a}: `,v),v)),(v=>{throw ue(bs,`RPC '${t}' ${a} failed with error: `,v,"url: ",c,"request:",r),v}))}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=Jg[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class tm extends Xg{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Ti();return new Promise(((c,h)=>{const d=new Tc;d.setWithCredentials(!0),d.listenOnce(vc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case yr.NO_ERROR:const v=d.getResponseJson();F(yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(v)),c(v);break;case yr.TIMEOUT:F(yt,`RPC '${t}' ${a} timed out`),h(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const I=d.getStatus();if(F(yt,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R?.error;if(b&&b.status&&b.message){const P=(function(L){const x=L.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(x)>=0?x:D.UNKNOWN})(b.status);h(new B(P,b.message))}else h(new B(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new B(D.UNAVAILABLE,"Connection failed."));break;default:$(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{F(yt,`RPC '${t}' ${a} completed.`)}}));const g=JSON.stringify(s);F(yt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",g,r,15)}))}P_(t,e,r){const s=Ti(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ac(),c=wc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");F(yt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const v=a.createWebChannel(g,h);this.T_(v);let I=!1,R=!1;const b=new Zg({Ho:V=>{R?F(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(I||(F(yt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),I=!0),F(yt,`RPC '${t}' stream ${s} sending:`,V),v.send(V))},Yo:()=>v.close()}),P=(V,L,x)=>{V.listen(L,(k=>{try{x(k)}catch(O){setTimeout((()=>{throw O}),0)}}))};return P(v,Rn.EventType.OPEN,(()=>{R||(F(yt,`RPC '${t}' stream ${s} transport opened.`),b.s_())})),P(v,Rn.EventType.CLOSE,(()=>{R||(R=!0,F(yt,`RPC '${t}' stream ${s} transport closed`),b.__(),this.I_(v))})),P(v,Rn.EventType.ERROR,(V=>{R||(R=!0,ue(yt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.__(new B(D.UNAVAILABLE,"The operation could not be completed")))})),P(v,Rn.EventType.MESSAGE,(V=>{var L;if(!R){const x=V.data[0];nt(!!x,16349);const k=x,O=k?.error||((L=k[0])===null||L===void 0?void 0:L.error);if(O){F(yt,`RPC '${t}' stream ${s} received error:`,O);const Q=O.status;let M=(function(p){const y=at[p];if(y!==void 0)return nl(y)})(Q),T=O.message;M===void 0&&(M=D.INTERNAL,T="Unknown error status: "+Q+" with message "+O.message),R=!0,b.__(new B(M,T)),v.close()}else F(yt,`RPC '${t}' stream ${s} received:`,x),b.a_(x)}})),P(c,Ic.STAT_EVENT,(V=>{V.stat===oi.PROXY?F(yt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===oi.NOPROXY&&F(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{b.o_()}),0),b}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){return new lg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="PersistentStream";class em{constructor(t,e,r,s,o,a,c,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _l(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return F(nu,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(F(nu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nm extends em{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=dg(this.serializer,t),r=(function(o){if(!("targetChange"in o))return j.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?Ge(a.readTime):j.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Qa(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=hi(h)?{documents:fg(o,h)}:{query:gg(o,h).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=il(o,a.resumeToken);const d=pi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=_i(o,a.snapshotVersion.toTimestamp());const d=pi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const r=pg(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Qa(this.serializer),e.removeTarget=t,this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{}class sm extends rm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,yi(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(D.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(t,yi(e,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Qt(e),this._a=!1):F("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="RemoteStore";class om{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Gn(this)&&(F(nn,"Restarting streams for network reachability change."),await(async function(h){const d=K(h);d.Ia.add(4),await Hn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Wr(d)})(this))}))})),this.Aa=new im(r,s)}}async function Wr(n){if(Gn(n))for(const t of n.da)await t(!0)}async function Hn(n){for(const t of n.da)await t(!1)}function yl(n,t){const e=K(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Gi(e)?Hi(e):cn(e).x_()&&zi(e,t))}function $i(n,t){const e=K(n),r=cn(e);e.Ta.delete(t),r.x_()&&El(e,t),e.Ta.size===0&&(r.x_()?r.B_():Gn(e)&&e.Aa.set("Unknown"))}function zi(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}cn(n).H_(t)}function El(n,t){n.Ra.$e(t),cn(n).Y_(t)}function Hi(n){n.Ra=new og({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),cn(n).start(),n.Aa.aa()}function Gi(n){return Gn(n)&&!cn(n).M_()&&n.Ta.size>0}function Gn(n){return K(n).Ia.size===0}function Tl(n){n.Ra=void 0}async function am(n){n.Aa.set("Online")}async function um(n){n.Ta.forEach(((t,e)=>{zi(n,t)}))}async function cm(n,t){Tl(n),Gi(n)?(n.Aa.la(t),Hi(n)):n.Aa.set("Unknown")}async function lm(n,t,e){if(n.Aa.set("Online"),t instanceof sl&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,t)}catch(r){F(nn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ru(n,r)}else if(t instanceof vr?n.Ra.Ye(t):t instanceof rl?n.Ra.it(t):n.Ra.et(t),!e.isEqual(j.min()))try{const r=await pl(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const c=o.Ra.Pt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ta.get(d);g&&o.Ta.set(d,g.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const g=o.Ta.get(h);if(!g)return;o.Ta.set(h,g.withResumeToken(gt.EMPTY_BYTE_STRING,g.snapshotVersion)),El(o,h);const v=new re(g.target,h,d,g.sequenceNumber);zi(o,v)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){F(nn,"Failed to raise snapshot:",r),await ru(n,r)}}async function ru(n,t,e){if(!on(t))throw t;n.Ia.add(1),await Hn(n),n.Aa.set("Offline"),e||(e=()=>pl(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(nn,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Wr(n)}))}async function su(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),F(nn,"RemoteStore received new credentials");const r=Gn(e);e.Ia.add(3),await Hn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Wr(e)}async function hm(n,t){const e=K(n);t?(e.Ia.delete(2),await Wr(e)):t||(e.Ia.add(2),await Hn(e),e.Aa.set("Unknown"))}function cn(n){return n.Va||(n.Va=(function(e,r,s){const o=K(e);return o.ia(),new nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:am.bind(null,n),e_:um.bind(null,n),n_:cm.bind(null,n),J_:lm.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Gi(n)?Hi(n):n.Aa.set("Unknown")):(await n.Va.stop(),Tl(n))}))),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Ki(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,t){if(Qt("AsyncQueue",`${t}: ${n}`),on(n))return new B(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{static emptySet(t){return new Ke(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=Cn(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.fa=new it(U.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):$(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class rn{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new rn(t,e,Ke.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class fm{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=K(e),o=s.queries;s.queries=ou(),o.forEach(((a,c)=>{for(const h of c.wa)h.onError(r)}))})(this,new B(D.ABORTED,"Firestore shutting down"))}}function ou(){return new De((n=>Gc(n)),$r)}async function Il(n,t){const e=K(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new dm,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=vl(a,`Initialization of query '${je(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Qi(e)}async function wl(n,t){const e=K(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function gm(n,t){const e=K(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Qi(e)}function mm(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Qi(n){n.Da.forEach((t=>{t.next()}))}var vi,au;(au=vi||(vi={})).Fa="default",au.Cache="cache";class Al{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new rn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==vi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.key=t}}class Cl{constructor(t){this.key=t}}class pm{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Kc(t),this.eu=new Ke(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new iu,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((g,v)=>{const I=s.get(g),R=zr(this.query,v)?v:null,b=!!I&&this.mutatedKeys.has(I.key),P=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;I&&R?I.data.isEqual(R.data)?b!==P&&(r.track({type:3,doc:R}),V=!0):this.iu(I,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Xa(R,h)>0||d&&this.Xa(R,d)<0)&&(c=!0)):!I&&R?(r.track({type:0,doc:R}),V=!0):I&&!R&&(r.track({type:1,doc:I}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=P?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{eu:a,ru:r,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((g,v)=>(function(R,b){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{At:V})}};return P(R)-P(b)})(g.type,v.type)||this.Xa(g.doc,v.doc))),this.su(r),s=s!=null&&s;const c=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new rn(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new iu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=W(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new Cl(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new Rl(r))})),e}uu(t){this.Ha=t.qs,this.Za=W();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return rn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Wi="SyncEngine";class _m{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ym{constructor(t){this.key=t,this.lu=!1}}class Em{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new De((c=>Gc(c)),$r),this.Tu=new Map,this.Iu=new Set,this.du=new it(U.comparator),this.Eu=new Map,this.Au=new Bi,this.Ru={},this.Vu=new Map,this.mu=en.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Tm(n,t,e=!0){const r=Dl(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await bl(r,t,e,!0),s}async function vm(n,t){const e=Dl(n);await bl(e,t,!0,!1)}async function bl(n,t,e,r){const s=await Kg(n.localStore,Ft(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Im(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&yl(n.remoteStore,s),c}async function Im(n,t,e,r,s){n.gu=(v,I,R)=>(async function(P,V,L,x){let k=V.view.nu(L);k.Ds&&(k=await Xa(P.localStore,V.query,!1).then((({documents:T})=>V.view.nu(T,k))));const O=x&&x.targetChanges.get(V.targetId),Q=x&&x.targetMismatches.get(V.targetId)!=null,M=V.view.applyChanges(k,P.isPrimaryClient,O,Q);return cu(P,V.targetId,M._u),M.snapshot})(n,v,I,R);const o=await Xa(n.localStore,t,!0),a=new pm(t,o.qs),c=a.nu(o.documents),h=zn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);cu(n,e,d._u);const g=new _m(t,e,a);return n.Pu.set(t,g),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function wm(n,t,e){const r=K(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((a=>!$r(a,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ei(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&$i(r.remoteStore,s.targetId),Ii(r,s.targetId)})).catch(Br)):(Ii(r,s.targetId),await Ei(r.localStore,s.targetId,!0))}async function Am(n,t){const e=K(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),$i(e.remoteStore,r.targetId))}async function Sl(n,t){const e=K(n);try{const r=await Hg(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Eu.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?nt(a.lu,14607):s.removedDocuments.size>0&&(nt(a.lu,42227),a.lu=!1))})),await Vl(e,r,t)}catch(r){await Br(r)}}function uu(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=K(a);h.onlineState=c;let d=!1;h.queries.forEach(((g,v)=>{for(const I of v.wa)I.va(c)&&(d=!0)})),d&&Qi(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rm(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new it(U.comparator);a=a.insert(o,Tt.newNoDocument(o,j.min()));const c=W().add(o),h=new Kr(j.min(),new Map,new it(z),a,c);await Sl(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Yi(r)}else await Ei(r.localStore,t,!1).then((()=>Ii(r,t,e))).catch(Br)}function Ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||Pl(n,r)}))}function Pl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&($i(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Yi(n))}function cu(n,t,e){for(const r of e)r instanceof Rl?(n.Au.addReference(r.key,t),Cm(n,r)):r instanceof Cl?(F(Wi,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Pl(n,r.key)):$(19791,{yu:r})}function Cm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(F(Wi,"New document in limbo: "+e),n.Iu.add(r),Yi(n))}function Yi(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new U(tt.fromString(t)),r=n.mu.next();n.Eu.set(r,new ym(e)),n.du=n.du.insert(e,r),yl(n.remoteStore,new re(Ft(Oi(e.path)),r,"TargetPurposeLimboResolution",Ur.ue))}}async function Vl(n,t,e){const r=K(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,h)=>{a.push(r.gu(h,t,e).then((d=>{var g;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(g=e?.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=qi.Es(h.targetId,d);o.push(v)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(h,d){const g=K(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>S.forEach(d,(I=>S.forEach(I.Is,(R=>g.persistence.referenceDelegate.addReference(v,I.targetId,R))).next((()=>S.forEach(I.ds,(R=>g.persistence.referenceDelegate.removeReference(v,I.targetId,R)))))))))}catch(v){if(!on(v))throw v;F(ji,"Failed to update sequence numbers: "+v)}for(const v of d){const I=v.targetId;if(!v.fromCache){const R=g.Fs.get(I),b=R.snapshotVersion,P=R.withLastLimboFreeSnapshotVersion(b);g.Fs=g.Fs.insert(I,P)}}})(r.localStore,o))}async function bm(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){F(Wi,"User change. New user:",t.toKey());const r=await ml(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new B(D.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vl(e,r.Bs)}}function Sm(n,t){const e=K(n),r=e.Eu.get(t);if(r&&r.lu)return W().add(r.key);{let s=W();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const c=e.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Dl(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rm.bind(null,t),t.hu.J_=gm.bind(null,t.eventManager),t.hu.pu=mm.bind(null,t.eventManager),t}class kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return zg(this.persistence,new qg,t.initialUser,this.serializer)}Du(t){return new gl(Ui.Vi,this.serializer)}bu(t){return new Wg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kr.provider={build:()=>new kr};class Pm extends kr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){nt(this.persistence.referenceDelegate instanceof Nr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Cg(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new gl((r=>Nr.Vi(r,e)),this.serializer)}}class wi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bm.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new fm})()}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),r=(function(o){return new tm(o)})(t.databaseInfo);return(function(o,a,c,h){return new sm(o,a,c,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,c){return new om(r,s,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>uu(this.syncEngine,e,0)),(function(){return eu.C()?new eu:new Yg})())}createSyncEngine(t,e){return(function(s,o,a,c,h,d,g){const v=new Em(s,o,a,c,h,d);return g&&(v.fu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=K(s);F(nn,"RemoteStore shutting down."),o.Ia.add(5),await Hn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}wi.provider={build:()=>new wi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="FirestoreClient";class Vm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{F(ge,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(F(ge,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=vl(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ps(n,t){n.asyncQueue.verifyOperationInProgress(),F(ge,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ml(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{ue("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{F("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ue("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function lu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Dm(n);F(ge,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>su(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>su(t.remoteStore,s))),n._onlineComponents=t}async function Dm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(ge,"Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ue("Error using user provided cache. Falling back to memory cache: "+e),await Ps(n,new kr)}}else F(ge,"Using default OfflineComponentProvider"),await Ps(n,new Pm(void 0));return n._offlineComponents}async function Nm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(ge,"Using user provided OnlineComponentProvider"),await lu(n,n._uninitializedComponentsProvider._online)):(F(ge,"Using default OnlineComponentProvider"),await lu(n,new wi))),n._onlineComponents}async function Ai(n){const t=await Nm(n),e=t.eventManager;return e.onListen=Tm.bind(null,t.syncEngine),e.onUnlisten=wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function km(n,t,e={}){const r=new Ae;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const g=new Nl({next:I=>{g.Ou(),a.enqueueAndForget((()=>wl(o,v))),I.fromCache&&h.source==="server"?d.reject(new B(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new Al(c,g,{includeMetadataChanges:!0,ka:!0});return Il(o,v)})(await Ai(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firestore.googleapis.com",du=!0;class fu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ol,this.ssl=du}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:du;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ag)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ji{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sf;switch(r.type){case"firstParty":return new cf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=hu.get(e);r&&(F("ComponentProvider","Removing Datastore"),hu.delete(e),r.terminate())})(this),Promise.resolve()}}function Om(n,t,e,r={}){var s;n=He(n,Ji);const o=xr(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(ic(`https://${h}`),ac("Firestore",!0)),a.host!==Ol&&a.host!==h&&ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Rr(d,c)&&(n._setSettings(d),r.mockUserToken)){let g,v;if(typeof r.mockUserToken=="string")g=r.mockUserToken,v=Et.MOCK_USER;else{g=oc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Et(I)}n._authCredentials=new of(new Cc(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new me(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if($n(e,It._jsonSchema))return new It(t,r||null,new U(tt.fromString(e.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:ct("string",It._jsonSchemaVersion),referencePath:ct("string")};class Qe extends me{constructor(t,e,r){super(t,e,Oi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new U(t))}withConverter(t){return new Qe(this.firestore,t,this._path)}}function Ml(n,t,...e){if(n=Ye(n),n instanceof Ji){const r=tt.fromString(t,...e);return Ra(r),new Qe(n,null,r)}{if(!(n instanceof It||n instanceof Qe))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Ra(r),new Qe(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="AsyncQueue";class mu{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _l(this,"async_queue_retry"),this.oc=()=>{const r=Ss();r&&F(gu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=Ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Ae;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!on(t))throw t;F(gu,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,Qt("INTERNAL UNHANDLED ERROR: ",pu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Ki.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&$(47125,{hc:pu(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function pu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Or extends Ji{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new mu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mu(t),this._firestoreClient=void 0,await t}}}function Mm(n,t){const e=typeof n=="object"?n:pc(),r=typeof n=="string"?n:br,s=dc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=rc("firestore");o&&Om(s,...o)}return s}function Ll(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Lm(n),n._firestoreClient}function Lm(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,h,d,g){return new Cf(c,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,kl(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(gt.fromBase64String(t))}catch(e){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($n(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:ct("string",Pt._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bt._jsonSchemaVersion}}static fromJSON(t){if($n(t,Bt._jsonSchema))return new Bt(t.latitude,t.longitude)}}Bt._jsonSchemaVersion="firestore/geoPoint/1.0",Bt._jsonSchema={type:ct("string",Bt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($n(t,Ut._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ut(t.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:ct("string",Ut._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=/^__.*__$/;function Bl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ec:n})}}class Xi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Xi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Ri(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Bl(this.Ec)&&xm.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Fm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qr(t)}Dc(t,e,r,s=!1){return new Xi({Ec:t,methodName:e,bc:r,path:vt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bm(n){const t=n._freezeSettings(),e=Qr(n._databaseId);return new Fm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Um(n,t,e,r=!1){return Zi(e,n.Dc(r?4:3,t))}function Zi(n,t){if(Ul(n=Ye(n)))return jm("Unsupported field value:",t,n),qm(n,t);if(n instanceof Fl)return(function(r,s){if(!Bl(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let h=Zi(c,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=et.fromDate(r);return{timestampValue:_i(s.serializer,o)}}if(r instanceof et){const o=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_i(s.serializer,o)}}if(r instanceof Bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:il(s.serializer,r._byteString)};if(r instanceof It){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ol(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ut)return(function(a,c){return{mapValue:{fields:{[xc]:{stringValue:Fc},[Sr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Mi(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Fr(r)}`)})(n,t)}function qm(n,t){const e={};return Dc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):an(n,((r,s)=>{const o=Zi(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Ul(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof Bt||n instanceof Pt||n instanceof It||n instanceof Fl||n instanceof Ut)}function jm(n,t,e){if(!Ul(e)||!Pc(e)){const r=Fr(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}const $m=new RegExp("[~\\*/\\[\\]]");function zm(n,t,e){if(t.search($m)>=0)throw Ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new xl(...t.split("."))._internalPath}catch{throw Ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ri(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new B(D.INVALID_ARGUMENT,c+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(to("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hm extends ql{data(){return super.data()}}function to(n,t){return typeof t=="string"?zm(n,t):t instanceof xl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eo{}class $l extends eo{}function Gm(n,t,...e){let r=[];t instanceof eo&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof ro)).length,c=o.filter((h=>h instanceof no)).length;if(a>1||a>0&&c>0)throw new B(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class no extends $l{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new no(t,e,r)}_apply(t){const e=this._parse(t);return zl(t._query,e),new me(t.firestore,t.converter,di(t._query,e))}_parse(t){const e=Bm(t.firestore);return(function(o,a,c,h,d,g,v){let I;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new B(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Eu(v,g);const b=[];for(const P of v)b.push(yu(h,o,P));I={arrayValue:{values:b}}}else I=yu(h,o,v)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Eu(v,g),I=Um(c,a,v,g==="in"||g==="not-in");return ut.create(d,g,I)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ro extends eo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ro(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Ot.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)zl(a,h),a=di(a,h)})(t._query,e),new me(t.firestore,t.converter,di(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class so extends $l{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new so(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new B(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qn(o,a)})(t._query,this._field,this._direction);return new me(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new un(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Km(n,t="asc"){const e=t,r=to("orderBy",n);return so._create(r,e)}function yu(n,t,e){if(typeof(e=Ye(e))=="string"){if(e==="")throw new B(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hc(t)&&e.indexOf("/")!==-1)throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!U.isDocumentKey(r))throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ka(n,new U(r))}if(e instanceof It)return ka(n,e._key);throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function Eu(n,t){if(!Array.isArray(n)||n.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zl(n,t){const e=(function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Qm{convertValue(t,e="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return an(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Sr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>st(a.doubleValue)));return new Ut(o)}convertGeoPoint(t){return new Bt(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=jr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Fn(t));default:return null}}convertTimestamp(t){const e=le(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);nt(dl(r),9688,{name:t});const s=new Bn(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ce extends ql{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(to("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ce._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ce._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ce._jsonSchema={type:ct("string",Ce._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class Ir extends Ce{data(t={}){return super.data(t)}}class be{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Ir(this._firestore,this._userDataWriter,r.key,r,new Sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new Ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new Ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:Wm(c.type),doc:h,oldIndex:d,newIndex:g}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=be._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Sc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Wm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}be._jsonSchemaVersion="firestore/querySnapshot/1.0",be._jsonSchema={type:ct("string",be._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class io extends Qm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Ym(n){n=He(n,me);const t=He(n.firestore,Or),e=Ll(t),r=new io(t);return jl(n._query),km(e,n._query).then((s=>new be(t,r,n,s)))}function Jm(n,...t){var e,r,s;n=Ye(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||_u(t[a])||(o=t[a++]);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(_u(t[a])){const v=t[a];t[a]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),t[a+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let h,d,g;if(n instanceof It)d=He(n.firestore,Or),g=Oi(n._key.path),h={next:v=>{t[a]&&t[a](Xm(d,n,v))},error:t[a+1],complete:t[a+2]};else{const v=He(n,me);d=He(v.firestore,Or),g=v._query;const I=new io(d);h={next:R=>{t[a]&&t[a](new be(d,I,v,R))},error:t[a+1],complete:t[a+2]},jl(n._query)}return(function(I,R,b,P){const V=new Nl(P),L=new Al(R,V,b);return I.asyncQueue.enqueueAndForget((async()=>Il(await Ai(I),L))),()=>{V.Ou(),I.asyncQueue.enqueueAndForget((async()=>wl(await Ai(I),L)))}})(Ll(d),g,c,h)}function Xm(n,t,e){const r=e.docs.get(t._key),s=new io(n);return new Ce(n,s,t._key,r,new Sn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){sn=s})(gc),Mn(new Je("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Or(new af(r.getProvider("auth-internal")),new lf(a,r.getProvider("app-check-internal")),(function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(d.options.projectId,g)})(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),oe(Ta,va,t),oe(Ta,va,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="firebasestorage.googleapis.com",Zm="storageBucket",tp=120*1e3,ep=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ve{constructor(t,e,r=0){super(Vs(t),`Firebase Storage: ${e} (${Vs(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$t.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Vs(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jt||(jt={}));function Vs(n){return"storage/"+n}function np(){const n="An unknown error occurred, please check the error payload for server response.";return new $t(jt.UNKNOWN,n)}function rp(){return new $t(jt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sp(){return new $t(jt.CANCELED,"User canceled the upload/download.")}function ip(n){return new $t(jt.INVALID_URL,"Invalid URL '"+n+"'.")}function op(n){return new $t(jt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Tu(n){return new $t(jt.INVALID_ARGUMENT,n)}function Gl(){return new $t(jt.APP_DELETED,"The Firebase app was deleted.")}function ap(n){return new $t(jt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=kt.makeFromUrl(t,e)}catch{return new kt(t,"")}if(r.path==="")return r;throw op(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const g="v[A-Za-z0-9_]+",v=e.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",R=new RegExp(`^https?://${v}/${g}/b/${s}/o${I}`,"i"),b={bucket:1,path:3},P=e===Hl?"(?:storage.googleapis.com|storage.cloud.google.com)":e,V="([^?#]*)",L=new RegExp(`^https?://${P}/${s}/${V}`,"i"),k=[{regex:c,indices:h,postModify:o},{regex:R,indices:b,postModify:d},{regex:L,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<k.length;O++){const Q=k[O],M=Q.regex.exec(t);if(M){const T=M[Q.indices.bucket];let m=M[Q.indices.path];m||(m=""),r=new kt(T,m),Q.postModify(r);break}}if(r==null)throw ip(t);return r}}class up{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n,t,e){let r=1,s=null,o=null,a=!1,c=0;function h(){return c===2}let d=!1;function g(...V){d||(d=!0,t.apply(null,V))}function v(V){s=setTimeout(()=>{s=null,n(R,h())},V)}function I(){o&&clearTimeout(o)}function R(V,...L){if(d){I();return}if(V){I(),g.call(null,V,...L);return}if(h()||a){I(),g.call(null,V,...L);return}r<64&&(r*=2);let k;c===1?(c=2,k=0):k=(r+Math.random())*1e3,v(k)}let b=!1;function P(V){b||(b=!0,I(),!d&&(s!==null?(V||(c=2),clearTimeout(s),v(0)):V||(c=1)))}return v(0),o=setTimeout(()=>{a=!0,P(!0)},e),P}function lp(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n){return n!==void 0}function vu(n,t,e,r){if(r<t)throw Tu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Tu(`Invalid value for '${n}'. Expected ${e} or less.`)}function dp(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var Mr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,e,r,s,o,a,c,h,d,g,v,I=!0,R=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=v,this.retry=I,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,P)=>{this.resolve_=b,this.reject_=P,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new pr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===Mr.NO_ERROR,h=o.getStatus();if(!c||fp(h,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===Mr.ABORT;r(!1,new pr(!1,null,g));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new pr(d,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());hp(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=np();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(s.canceled){const h=this.appDelete_?Gl():sp();a(h)}else{const h=rp();a(h)}};this.canceled_?e(!1,new pr(!1,null,!0)):this.backoffId_=cp(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&lp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function mp(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function pp(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function _p(n,t){t&&(n["X-Firebase-GMPID"]=t)}function yp(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Ep(n,t,e,r,s,o,a=!0,c=!1){const h=dp(n.urlParams),d=n.url+h,g=Object.assign({},n.headers);return _p(g,t),mp(g,e),pp(g,o),yp(g,r),new gp(d,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function vp(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e){this._service=t,e instanceof kt?this._location=e:this._location=kt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Lr(t,e)}get root(){const t=new kt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vp(this._location.path)}get storage(){return this._service}get parent(){const t=Tp(this._location.path);if(t===null)return null;const e=new kt(this._location.bucket,t);return new Lr(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw ap(t)}}function Iu(n,t){const e=t?.[Zm];return e==null?null:kt.makeFromBucketSpec(e,n)}function Ip(n,t,e,r={}){n.host=`${t}:${e}`;const s=xr(t);s&&(ic(`https://${n.host}/b`),ac("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:oc(o,n.app.options.projectId))}class wp{constructor(t,e,r,s,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Hl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tp,this._maxUploadRetryTime=ep,this._requests=new Set,s!=null?this._bucket=kt.makeFromBucketSpec(s,this._host):this._bucket=Iu(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,t):this._bucket=Iu(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){vu("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){vu("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(fc(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Lr(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new up(Gl());{const a=Ep(t,this._appId,r,s,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const wu="@firebase/storage",Au="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="storage";function Ap(n=pc(),t){n=Ye(n);const r=dc(n,Kl).getImmediate({identifier:t}),s=rc("storage");return s&&Rp(r,...s),r}function Rp(n,t,e,r={}){Ip(n,t,e,r)}function Cp(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new wp(e,r,s,t,gc)}function bp(){Mn(new Je(Kl,Cp,"PUBLIC").setMultipleInstances(!0)),oe(wu,Au,""),oe(wu,Au,"esm2017")}bp();const We={apiKey:"YOUR_API_KEY",authDomain:"YOUR_PROJECT_ID.firebaseapp.com",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_PROJECT_ID.appspot.com",messagingSenderId:"YOUR_SENDER_ID",appId:"YOUR_APP_ID"},Yr=()=>We.apiKey!=="YOUR_API_KEY"&&We.projectId!=="YOUR_PROJECT_ID"&&!!We.apiKey;let Ds=null,jn=null,Sp=null;try{Yr()?(Ds=ma().length===0?mc(We):ma()[0],jn=Mm(Ds),Sp=Ap(Ds),console.log("🔥 Firebase inicializado correctamente:",We.projectId)):console.warn("⚠️ Firebase no tiene credenciales configuradas. Se usarán datos locales/mock temporalmente.")}catch(n){console.error("❌ Error inicializando Firebase:",n)}const wr=[{id:"mural-01",title:"Mural Ancestral Tayrona",artist:"Colectivo Sierra Viva",location:"Plaza Principal - Sector Centro",category:"Cultura & Historia",description:"Representación tridimensional de la iconografía y guardianes ancestrales de la Sierra Nevada.",glbUrl:"https://modelviewer.dev/shared-assets/models/Astronaut.glb",usdzUrl:"https://modelviewer.dev/shared-assets/models/Astronaut.usdz",thumbnail:"🎨",year:"2024",dimensions:"12m x 4m",arScale:"auto"},{id:"mural-02",title:"El Jaguar del Bosque Húmedo",artist:"Mariana Restrepo",location:"Calle 15 con Carrera 4ta",category:"Fauna Silvestre",description:"Mural tridimensional hiperrealista del felino más imponente de la región del Caribe.",glbUrl:"https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",usdzUrl:"https://modelviewer.dev/shared-assets/models/NeilArmstrong.usdz",thumbnail:"🐆",year:"2024",dimensions:"8m x 5m",arScale:"auto"},{id:"mural-03",title:"Ecosistema de Manglar y Corales",artist:"Taller Mar y Sierra",location:"Paseo del Malecón",category:"Flora y Mar",description:"Inmersión 3D en las raíces del manglar rojo y las especies marinas que habitan en él.",glbUrl:"https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf",usdzUrl:"",thumbnail:"🌿",year:"2025",dimensions:"15m x 3.5m",arScale:"auto"}];async function Pp(){if(Yr()&&jn)try{const n=Ml(jn,"murales"),t=Gm(n,Km("title")),e=await Ym(t);if(!e.empty)return e.docs.map(r=>({id:r.id,...r.data()}));console.info("ℹ️ La colección 'murales' en Firestore está vacía. Mostrando murales de demostración.")}catch(n){console.warn("⚠️ No se pudieron cargar los murales de Firestore, usando fallback local:",n.message)}return wr}function Vp(n){if(Yr()&&jn)try{const t=Ml(jn,"murales");return Jm(t,e=>{if(e.empty)n(wr);else{const r=e.docs.map(s=>({id:s.id,...s.data()}));n(r)}},e=>{console.warn("⚠️ Error en snapshot de Firestore:",e),n(wr)})}catch(t){console.warn("⚠️ Error suscribiendo a Firestore:",t)}return n(wr),()=>{}}function Dp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ue={},Ns,Ru;function Np(){return Ru||(Ru=1,Ns=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Ns}var ks={},ee={},Cu;function Ne(){if(Cu)return ee;Cu=1;let n;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ee.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},ee.getSymbolTotalCodewords=function(r){return t[r]},ee.getBCHDigit=function(e){let r=0;for(;e!==0;)r++,e>>>=1;return r},ee.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');n=r},ee.isKanjiModeEnabled=function(){return typeof n<"u"},ee.toSJIS=function(r){return n(r)},ee}var Os={},bu;function oo(){return bu||(bu=1,(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+e)}}n.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},n.from=function(r,s){if(n.isValid(r))return r;try{return t(r)}catch{return s}}})(Os)),Os}var Ms,Su;function kp(){if(Su)return Ms;Su=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},Ms=n,Ms}var Ls,Pu;function Op(){if(Pu)return Ls;Pu=1;function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return n.prototype.set=function(t,e,r,s){const o=t*this.size+e;this.data[o]=r,s&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},Ls=n,Ls}var xs={},Vu;function Mp(){return Vu||(Vu=1,(function(n){const t=Ne().getSymbolSize;n.getRowColCoords=function(r){if(r===1)return[];const s=Math.floor(r/7)+2,o=t(r),a=o===145?26:Math.ceil((o-13)/(2*s-2))*2,c=[o-7];for(let h=1;h<s-1;h++)c[h]=c[h-1]-a;return c.push(6),c.reverse()},n.getPositions=function(r){const s=[],o=n.getRowColCoords(r),a=o.length;for(let c=0;c<a;c++)for(let h=0;h<a;h++)c===0&&h===0||c===0&&h===a-1||c===a-1&&h===0||s.push([o[c],o[h]]);return s}})(xs)),xs}var Fs={},Du;function Lp(){if(Du)return Fs;Du=1;const n=Ne().getSymbolSize,t=7;return Fs.getPositions=function(r){const s=n(r);return[[0,0],[s-t,0],[0,s-t]]},Fs}var Bs={},Nu;function xp(){return Nu||(Nu=1,(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};n.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},n.from=function(s){return n.isValid(s)?parseInt(s,10):void 0},n.getPenaltyN1=function(s){const o=s.size;let a=0,c=0,h=0,d=null,g=null;for(let v=0;v<o;v++){c=h=0,d=g=null;for(let I=0;I<o;I++){let R=s.get(v,I);R===d?c++:(c>=5&&(a+=t.N1+(c-5)),d=R,c=1),R=s.get(I,v),R===g?h++:(h>=5&&(a+=t.N1+(h-5)),g=R,h=1)}c>=5&&(a+=t.N1+(c-5)),h>=5&&(a+=t.N1+(h-5))}return a},n.getPenaltyN2=function(s){const o=s.size;let a=0;for(let c=0;c<o-1;c++)for(let h=0;h<o-1;h++){const d=s.get(c,h)+s.get(c,h+1)+s.get(c+1,h)+s.get(c+1,h+1);(d===4||d===0)&&a++}return a*t.N2},n.getPenaltyN3=function(s){const o=s.size;let a=0,c=0,h=0;for(let d=0;d<o;d++){c=h=0;for(let g=0;g<o;g++)c=c<<1&2047|s.get(d,g),g>=10&&(c===1488||c===93)&&a++,h=h<<1&2047|s.get(g,d),g>=10&&(h===1488||h===93)&&a++}return a*t.N3},n.getPenaltyN4=function(s){let o=0;const a=s.data.length;for(let h=0;h<a;h++)o+=s.data[h];return Math.abs(Math.ceil(o*100/a/5)-10)*t.N4};function e(r,s,o){switch(r){case n.Patterns.PATTERN000:return(s+o)%2===0;case n.Patterns.PATTERN001:return s%2===0;case n.Patterns.PATTERN010:return o%3===0;case n.Patterns.PATTERN011:return(s+o)%3===0;case n.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(o/3))%2===0;case n.Patterns.PATTERN101:return s*o%2+s*o%3===0;case n.Patterns.PATTERN110:return(s*o%2+s*o%3)%2===0;case n.Patterns.PATTERN111:return(s*o%3+(s+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}n.applyMask=function(s,o){const a=o.size;for(let c=0;c<a;c++)for(let h=0;h<a;h++)o.isReserved(h,c)||o.xor(h,c,e(s,h,c))},n.getBestMask=function(s,o){const a=Object.keys(n.Patterns).length;let c=0,h=1/0;for(let d=0;d<a;d++){o(d),n.applyMask(d,s);const g=n.getPenaltyN1(s)+n.getPenaltyN2(s)+n.getPenaltyN3(s)+n.getPenaltyN4(s);n.applyMask(d,s),g<h&&(h=g,c=d)}return c}})(Bs)),Bs}var _r={},ku;function Ql(){if(ku)return _r;ku=1;const n=oo(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return _r.getBlocksCount=function(s,o){switch(o){case n.L:return t[(s-1)*4+0];case n.M:return t[(s-1)*4+1];case n.Q:return t[(s-1)*4+2];case n.H:return t[(s-1)*4+3];default:return}},_r.getTotalCodewordsCount=function(s,o){switch(o){case n.L:return e[(s-1)*4+0];case n.M:return e[(s-1)*4+1];case n.Q:return e[(s-1)*4+2];case n.H:return e[(s-1)*4+3];default:return}},_r}var Us={},An={},Ou;function Fp(){if(Ou)return An;Ou=1;const n=new Uint8Array(512),t=new Uint8Array(256);return(function(){let r=1;for(let s=0;s<255;s++)n[s]=r,t[r]=s,r<<=1,r&256&&(r^=285);for(let s=255;s<512;s++)n[s]=n[s-255]})(),An.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},An.exp=function(r){return n[r]},An.mul=function(r,s){return r===0||s===0?0:n[t[r]+t[s]]},An}var Mu;function Bp(){return Mu||(Mu=1,(function(n){const t=Fp();n.mul=function(r,s){const o=new Uint8Array(r.length+s.length-1);for(let a=0;a<r.length;a++)for(let c=0;c<s.length;c++)o[a+c]^=t.mul(r[a],s[c]);return o},n.mod=function(r,s){let o=new Uint8Array(r);for(;o.length-s.length>=0;){const a=o[0];for(let h=0;h<s.length;h++)o[h]^=t.mul(s[h],a);let c=0;for(;c<o.length&&o[c]===0;)c++;o=o.slice(c)}return o},n.generateECPolynomial=function(r){let s=new Uint8Array([1]);for(let o=0;o<r;o++)s=n.mul(s,new Uint8Array([1,t.exp(o)]));return s}})(Us)),Us}var qs,Lu;function Up(){if(Lu)return qs;Lu=1;const n=Bp();function t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=n.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(r.length+this.degree);s.set(r);const o=n.mod(s,this.genPoly),a=this.degree-o.length;if(a>0){const c=new Uint8Array(this.degree);return c.set(o,a),c}return o},qs=t,qs}var js={},$s={},zs={},xu;function Wl(){return xu||(xu=1,zs.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),zs}var Mt={},Fu;function Yl(){if(Fu)return Mt;Fu=1;const n="[0-9]+",t="[A-Z $%*+\\-./:]+";let e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";e=e.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+e+`)(?:.|[\r
]))+`;Mt.KANJI=new RegExp(e,"g"),Mt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Mt.BYTE=new RegExp(r,"g"),Mt.NUMERIC=new RegExp(n,"g"),Mt.ALPHANUMERIC=new RegExp(t,"g");const s=new RegExp("^"+e+"$"),o=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Mt.testKanji=function(h){return s.test(h)},Mt.testNumeric=function(h){return o.test(h)},Mt.testAlphanumeric=function(h){return a.test(h)},Mt}var Bu;function ke(){return Bu||(Bu=1,(function(n){const t=Wl(),e=Yl();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(o,a){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?o.ccBits[0]:a<27?o.ccBits[1]:o.ccBits[2]},n.getBestModeForData=function(o){return e.testNumeric(o)?n.NUMERIC:e.testAlphanumeric(o)?n.ALPHANUMERIC:e.testKanji(o)?n.KANJI:n.BYTE},n.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},n.isValid=function(o){return o&&o.bit&&o.ccBits};function r(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+s)}}n.from=function(o,a){if(n.isValid(o))return o;try{return r(o)}catch{return a}}})($s)),$s}var Uu;function qp(){return Uu||(Uu=1,(function(n){const t=Ne(),e=Ql(),r=oo(),s=ke(),o=Wl(),a=7973,c=t.getBCHDigit(a);function h(I,R,b){for(let P=1;P<=40;P++)if(R<=n.getCapacity(P,b,I))return P}function d(I,R){return s.getCharCountIndicator(I,R)+4}function g(I,R){let b=0;return I.forEach(function(P){const V=d(P.mode,R);b+=V+P.getBitsLength()}),b}function v(I,R){for(let b=1;b<=40;b++)if(g(I,b)<=n.getCapacity(b,R,s.MIXED))return b}n.from=function(R,b){return o.isValid(R)?parseInt(R,10):b},n.getCapacity=function(R,b,P){if(!o.isValid(R))throw new Error("Invalid QR Code version");typeof P>"u"&&(P=s.BYTE);const V=t.getSymbolTotalCodewords(R),L=e.getTotalCodewordsCount(R,b),x=(V-L)*8;if(P===s.MIXED)return x;const k=x-d(P,R);switch(P){case s.NUMERIC:return Math.floor(k/10*3);case s.ALPHANUMERIC:return Math.floor(k/11*2);case s.KANJI:return Math.floor(k/13);case s.BYTE:default:return Math.floor(k/8)}},n.getBestVersionForData=function(R,b){let P;const V=r.from(b,r.M);if(Array.isArray(R)){if(R.length>1)return v(R,V);if(R.length===0)return 1;P=R[0]}else P=R;return h(P.mode,P.getLength(),V)},n.getEncodedBits=function(R){if(!o.isValid(R)||R<7)throw new Error("Invalid QR Code version");let b=R<<12;for(;t.getBCHDigit(b)-c>=0;)b^=a<<t.getBCHDigit(b)-c;return R<<12|b}})(js)),js}var Hs={},qu;function jp(){if(qu)return Hs;qu=1;const n=Ne(),t=1335,e=21522,r=n.getBCHDigit(t);return Hs.getEncodedBits=function(o,a){const c=o.bit<<3|a;let h=c<<10;for(;n.getBCHDigit(h)-r>=0;)h^=t<<n.getBCHDigit(h)-r;return(c<<10|h)^e},Hs}var Gs={},Ks,ju;function $p(){if(ju)return Ks;ju=1;const n=ke();function t(e){this.mode=n.NUMERIC,this.data=e.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s,o,a;for(s=0;s+3<=this.data.length;s+=3)o=this.data.substr(s,3),a=parseInt(o,10),r.put(a,10);const c=this.data.length-s;c>0&&(o=this.data.substr(s),a=parseInt(o,10),r.put(a,c*3+1))},Ks=t,Ks}var Qs,$u;function zp(){if($u)return Qs;$u=1;const n=ke(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(r){this.mode=n.ALPHANUMERIC,this.data=r}return e.getBitsLength=function(s){return 11*Math.floor(s/2)+6*(s%2)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(s){let o;for(o=0;o+2<=this.data.length;o+=2){let a=t.indexOf(this.data[o])*45;a+=t.indexOf(this.data[o+1]),s.put(a,11)}this.data.length%2&&s.put(t.indexOf(this.data[o]),6)},Qs=e,Qs}var Ws,zu;function Hp(){if(zu)return Ws;zu=1;const n=ke();function t(e){this.mode=n.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}return t.getBitsLength=function(r){return r*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let r=0,s=this.data.length;r<s;r++)e.put(this.data[r],8)},Ws=t,Ws}var Ys,Hu;function Gp(){if(Hu)return Ys;Hu=1;const n=ke(),t=Ne();function e(r){this.mode=n.KANJI,this.data=r}return e.getBitsLength=function(s){return s*13},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(r){let s;for(s=0;s<this.data.length;s++){let o=t.toSJIS(this.data[s]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[s]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),r.put(o,13)}},Ys=e,Ys}var Js={exports:{}},Gu;function Kp(){return Gu||(Gu=1,(function(n){var t={single_source_shortest_paths:function(e,r,s){var o={},a={};a[r]=0;var c=t.PriorityQueue.make();c.push(r,0);for(var h,d,g,v,I,R,b,P,V;!c.empty();){h=c.pop(),d=h.value,v=h.cost,I=e[d]||{};for(g in I)I.hasOwnProperty(g)&&(R=I[g],b=v+R,P=a[g],V=typeof a[g]>"u",(V||P>b)&&(a[g]=b,c.push(g,b),o[g]=d))}if(typeof s<"u"&&typeof a[s]>"u"){var L=["Could not find a path from ",r," to ",s,"."].join("");throw new Error(L)}return o},extract_shortest_path_from_predecessor_list:function(e,r){for(var s=[],o=r;o;)s.push(o),e[o],o=e[o];return s.reverse(),s},find_path:function(e,r,s){var o=t.single_source_shortest_paths(e,r,s);return t.extract_shortest_path_from_predecessor_list(o,s)},PriorityQueue:{make:function(e){var r=t.PriorityQueue,s={},o;e=e||{};for(o in r)r.hasOwnProperty(o)&&(s[o]=r[o]);return s.queue=[],s.sorter=e.sorter||r.default_sorter,s},default_sorter:function(e,r){return e.cost-r.cost},push:function(e,r){var s={value:e,cost:r};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=t})(Js)),Js.exports}var Ku;function Qp(){return Ku||(Ku=1,(function(n){const t=ke(),e=$p(),r=zp(),s=Hp(),o=Gp(),a=Yl(),c=Ne(),h=Kp();function d(L){return unescape(encodeURIComponent(L)).length}function g(L,x,k){const O=[];let Q;for(;(Q=L.exec(k))!==null;)O.push({data:Q[0],index:Q.index,mode:x,length:Q[0].length});return O}function v(L){const x=g(a.NUMERIC,t.NUMERIC,L),k=g(a.ALPHANUMERIC,t.ALPHANUMERIC,L);let O,Q;return c.isKanjiModeEnabled()?(O=g(a.BYTE,t.BYTE,L),Q=g(a.KANJI,t.KANJI,L)):(O=g(a.BYTE_KANJI,t.BYTE,L),Q=[]),x.concat(k,O,Q).sort(function(T,m){return T.index-m.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function I(L,x){switch(x){case t.NUMERIC:return e.getBitsLength(L);case t.ALPHANUMERIC:return r.getBitsLength(L);case t.KANJI:return o.getBitsLength(L);case t.BYTE:return s.getBitsLength(L)}}function R(L){return L.reduce(function(x,k){const O=x.length-1>=0?x[x.length-1]:null;return O&&O.mode===k.mode?(x[x.length-1].data+=k.data,x):(x.push(k),x)},[])}function b(L){const x=[];for(let k=0;k<L.length;k++){const O=L[k];switch(O.mode){case t.NUMERIC:x.push([O,{data:O.data,mode:t.ALPHANUMERIC,length:O.length},{data:O.data,mode:t.BYTE,length:O.length}]);break;case t.ALPHANUMERIC:x.push([O,{data:O.data,mode:t.BYTE,length:O.length}]);break;case t.KANJI:x.push([O,{data:O.data,mode:t.BYTE,length:d(O.data)}]);break;case t.BYTE:x.push([{data:O.data,mode:t.BYTE,length:d(O.data)}])}}return x}function P(L,x){const k={},O={start:{}};let Q=["start"];for(let M=0;M<L.length;M++){const T=L[M],m=[];for(let p=0;p<T.length;p++){const y=T[p],E=""+M+p;m.push(E),k[E]={node:y,lastCount:0},O[E]={};for(let w=0;w<Q.length;w++){const _=Q[w];k[_]&&k[_].node.mode===y.mode?(O[_][E]=I(k[_].lastCount+y.length,y.mode)-I(k[_].lastCount,y.mode),k[_].lastCount+=y.length):(k[_]&&(k[_].lastCount=y.length),O[_][E]=I(y.length,y.mode)+4+t.getCharCountIndicator(y.mode,x))}}Q=m}for(let M=0;M<Q.length;M++)O[Q[M]].end=0;return{map:O,table:k}}function V(L,x){let k;const O=t.getBestModeForData(L);if(k=t.from(x,O),k!==t.BYTE&&k.bit<O.bit)throw new Error('"'+L+'" cannot be encoded with mode '+t.toString(k)+`.
 Suggested mode is: `+t.toString(O));switch(k===t.KANJI&&!c.isKanjiModeEnabled()&&(k=t.BYTE),k){case t.NUMERIC:return new e(L);case t.ALPHANUMERIC:return new r(L);case t.KANJI:return new o(L);case t.BYTE:return new s(L)}}n.fromArray=function(x){return x.reduce(function(k,O){return typeof O=="string"?k.push(V(O,null)):O.data&&k.push(V(O.data,O.mode)),k},[])},n.fromString=function(x,k){const O=v(x,c.isKanjiModeEnabled()),Q=b(O),M=P(Q,k),T=h.find_path(M.map,"start","end"),m=[];for(let p=1;p<T.length-1;p++)m.push(M.table[T[p]].node);return n.fromArray(R(m))},n.rawSplit=function(x){return n.fromArray(v(x,c.isKanjiModeEnabled()))}})(Gs)),Gs}var Qu;function Wp(){if(Qu)return ks;Qu=1;const n=Ne(),t=oo(),e=kp(),r=Op(),s=Mp(),o=Lp(),a=xp(),c=Ql(),h=Up(),d=qp(),g=jp(),v=ke(),I=Qp();function R(M,T){const m=M.size,p=o.getPositions(T);for(let y=0;y<p.length;y++){const E=p[y][0],w=p[y][1];for(let _=-1;_<=7;_++)if(!(E+_<=-1||m<=E+_))for(let q=-1;q<=7;q++)w+q<=-1||m<=w+q||(_>=0&&_<=6&&(q===0||q===6)||q>=0&&q<=6&&(_===0||_===6)||_>=2&&_<=4&&q>=2&&q<=4?M.set(E+_,w+q,!0,!0):M.set(E+_,w+q,!1,!0))}}function b(M){const T=M.size;for(let m=8;m<T-8;m++){const p=m%2===0;M.set(m,6,p,!0),M.set(6,m,p,!0)}}function P(M,T){const m=s.getPositions(T);for(let p=0;p<m.length;p++){const y=m[p][0],E=m[p][1];for(let w=-2;w<=2;w++)for(let _=-2;_<=2;_++)w===-2||w===2||_===-2||_===2||w===0&&_===0?M.set(y+w,E+_,!0,!0):M.set(y+w,E+_,!1,!0)}}function V(M,T){const m=M.size,p=d.getEncodedBits(T);let y,E,w;for(let _=0;_<18;_++)y=Math.floor(_/3),E=_%3+m-8-3,w=(p>>_&1)===1,M.set(y,E,w,!0),M.set(E,y,w,!0)}function L(M,T,m){const p=M.size,y=g.getEncodedBits(T,m);let E,w;for(E=0;E<15;E++)w=(y>>E&1)===1,E<6?M.set(E,8,w,!0):E<8?M.set(E+1,8,w,!0):M.set(p-15+E,8,w,!0),E<8?M.set(8,p-E-1,w,!0):E<9?M.set(8,15-E-1+1,w,!0):M.set(8,15-E-1,w,!0);M.set(p-8,8,1,!0)}function x(M,T){const m=M.size;let p=-1,y=m-1,E=7,w=0;for(let _=m-1;_>0;_-=2)for(_===6&&_--;;){for(let q=0;q<2;q++)if(!M.isReserved(y,_-q)){let Rt=!1;w<T.length&&(Rt=(T[w]>>>E&1)===1),M.set(y,_-q,Rt),E--,E===-1&&(w++,E=7)}if(y+=p,y<0||m<=y){y-=p,p=-p;break}}}function k(M,T,m){const p=new e;m.forEach(function(q){p.put(q.mode.bit,4),p.put(q.getLength(),v.getCharCountIndicator(q.mode,M)),q.write(p)});const y=n.getSymbolTotalCodewords(M),E=c.getTotalCodewordsCount(M,T),w=(y-E)*8;for(p.getLengthInBits()+4<=w&&p.put(0,4);p.getLengthInBits()%8!==0;)p.putBit(0);const _=(w-p.getLengthInBits())/8;for(let q=0;q<_;q++)p.put(q%2?17:236,8);return O(p,M,T)}function O(M,T,m){const p=n.getSymbolTotalCodewords(T),y=c.getTotalCodewordsCount(T,m),E=p-y,w=c.getBlocksCount(T,m),_=p%w,q=w-_,Rt=Math.floor(p/w),pe=Math.floor(E/w),_e=pe+1,Wt=Rt-pe,ln=new h(Wt);let Oe=0;const Me=new Array(w),Vt=new Array(w);let ot=0;const Jr=new Uint8Array(M.buffer);for(let Yt=0;Yt<w;Yt++){const Jt=Yt<q?pe:_e;Me[Yt]=Jr.slice(Oe,Oe+Jt),Vt[Yt]=ln.encode(Me[Yt]),Oe+=Jt,ot=Math.max(ot,Jt)}const zt=new Uint8Array(p);let Kn=0,Ct,Dt;for(Ct=0;Ct<ot;Ct++)for(Dt=0;Dt<w;Dt++)Ct<Me[Dt].length&&(zt[Kn++]=Me[Dt][Ct]);for(Ct=0;Ct<Wt;Ct++)for(Dt=0;Dt<w;Dt++)zt[Kn++]=Vt[Dt][Ct];return zt}function Q(M,T,m,p){let y;if(Array.isArray(M))y=I.fromArray(M);else if(typeof M=="string"){let Rt=T;if(!Rt){const pe=I.rawSplit(M);Rt=d.getBestVersionForData(pe,m)}y=I.fromString(M,Rt||40)}else throw new Error("Invalid data");const E=d.getBestVersionForData(y,m);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=E;else if(T<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const w=k(T,m,y),_=n.getSymbolSize(T),q=new r(_);return R(q,T),b(q),P(q,T),L(q,m,0),T>=7&&V(q,T),x(q,w),isNaN(p)&&(p=a.getBestMask(q,L.bind(null,q,m))),a.applyMask(p,q),L(q,m,p),{modules:q,version:T,errorCorrectionLevel:m,maskPattern:p,segments:y}}return ks.create=function(T,m){if(typeof T>"u"||T==="")throw new Error("No input text");let p=t.M,y,E;return typeof m<"u"&&(p=t.from(m.errorCorrectionLevel,t.M),y=d.from(m.version),E=a.from(m.maskPattern),m.toSJISFunc&&n.setToSJISFunction(m.toSJISFunc)),Q(T,y,p,E)},ks}var Xs={},Zs={},Wu;function Jl(){return Wu||(Wu=1,(function(n){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let r=e.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+e);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const s=parseInt(r.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+r.slice(0,6).join("")}}n.getOptions=function(r){r||(r={}),r.color||(r.color={});const s=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:o,scale:o?4:a,margin:s,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},n.getScale=function(r,s){return s.width&&s.width>=r+s.margin*2?s.width/(r+s.margin*2):s.scale},n.getImageWidth=function(r,s){const o=n.getScale(r,s);return Math.floor((r+s.margin*2)*o)},n.qrToImageData=function(r,s,o){const a=s.modules.size,c=s.modules.data,h=n.getScale(a,o),d=Math.floor((a+o.margin*2)*h),g=o.margin*h,v=[o.color.light,o.color.dark];for(let I=0;I<d;I++)for(let R=0;R<d;R++){let b=(I*d+R)*4,P=o.color.light;if(I>=g&&R>=g&&I<d-g&&R<d-g){const V=Math.floor((I-g)/h),L=Math.floor((R-g)/h);P=v[c[V*a+L]?1:0]}r[b++]=P.r,r[b++]=P.g,r[b++]=P.b,r[b]=P.a}}})(Zs)),Zs}var Yu;function Yp(){return Yu||(Yu=1,(function(n){const t=Jl();function e(s,o,a){s.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=a,o.width=a,o.style.height=a+"px",o.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(o,a,c){let h=c,d=a;typeof h>"u"&&(!a||!a.getContext)&&(h=a,a=void 0),a||(d=r()),h=t.getOptions(h);const g=t.getImageWidth(o.modules.size,h),v=d.getContext("2d"),I=v.createImageData(g,g);return t.qrToImageData(I.data,o,h),e(v,d,g),v.putImageData(I,0,0),d},n.renderToDataURL=function(o,a,c){let h=c;typeof h>"u"&&(!a||!a.getContext)&&(h=a,a=void 0),h||(h={});const d=n.render(o,a,h),g=h.type||"image/png",v=h.rendererOpts||{};return d.toDataURL(g,v.quality)}})(Xs)),Xs}var ti={},Ju;function Jp(){if(Ju)return ti;Ju=1;const n=Jl();function t(s,o){const a=s.a/255,c=o+'="'+s.hex+'"';return a<1?c+" "+o+'-opacity="'+a.toFixed(2).slice(1)+'"':c}function e(s,o,a){let c=s+o;return typeof a<"u"&&(c+=" "+a),c}function r(s,o,a){let c="",h=0,d=!1,g=0;for(let v=0;v<s.length;v++){const I=Math.floor(v%o),R=Math.floor(v/o);!I&&!d&&(d=!0),s[v]?(g++,v>0&&I>0&&s[v-1]||(c+=d?e("M",I+a,.5+R+a):e("m",h,0),h=0,d=!1),I+1<o&&s[v+1]||(c+=e("h",g),g=0)):h++}return c}return ti.render=function(o,a,c){const h=n.getOptions(a),d=o.modules.size,g=o.modules.data,v=d+h.margin*2,I=h.color.light.a?"<path "+t(h.color.light,"fill")+' d="M0 0h'+v+"v"+v+'H0z"/>':"",R="<path "+t(h.color.dark,"stroke")+' d="'+r(g,d,h.margin)+'"/>',b='viewBox="0 0 '+v+" "+v+'"',V='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+b+' shape-rendering="crispEdges">'+I+R+`</svg>
`;return typeof c=="function"&&c(null,V),V},ti}var Xu;function Xp(){if(Xu)return Ue;Xu=1;const n=Np(),t=Wp(),e=Yp(),r=Jp();function s(o,a,c,h,d){const g=[].slice.call(arguments,1),v=g.length,I=typeof g[v-1]=="function";if(!I&&!n())throw new Error("Callback required as last argument");if(I){if(v<2)throw new Error("Too few arguments provided");v===2?(d=c,c=a,a=h=void 0):v===3&&(a.getContext&&typeof d>"u"?(d=h,h=void 0):(d=h,h=c,c=a,a=void 0))}else{if(v<1)throw new Error("Too few arguments provided");return v===1?(c=a,a=h=void 0):v===2&&!a.getContext&&(h=c,c=a,a=void 0),new Promise(function(R,b){try{const P=t.create(c,h);R(o(P,a,h))}catch(P){b(P)}})}try{const R=t.create(c,h);d(null,o(R,a,h))}catch(R){d(R)}}return Ue.create=t.create,Ue.toCanvas=s.bind(null,e.render),Ue.toDataURL=s.bind(null,e.renderToDataURL),Ue.toString=s.bind(null,function(o,a,c){return r.render(o,c)}),Ue}var Zp=Xp();const t_=Dp(Zp);function e_(){const n=navigator.userAgent||navigator.vendor||window.opera,t=/iPad|iPhone|iPod/.test(n)&&!window.MSStream,e=/android/i.test(n),r=t||e;return{isIOS:t,isAndroid:e,isMobile:r,isDesktop:!r}}async function n_(n){try{const t=new URL(window.location.href);t.searchParams.set("mural",n),t.searchParams.set("ar_mode","direct");const e=await t_.toDataURL(t.toString(),{width:260,margin:2,color:{dark:"#111827",light:"#FFFFFF"}});return{url:t.toString(),qrDataUrl:e}}catch(t){return console.error("Error generando código QR:",t),null}}function r_(n,t){!n||!t||(n.setAttribute("src",t.glbUrl||""),t.usdzUrl?n.setAttribute("ios-src",t.usdzUrl):n.removeAttribute("ios-src"),n.setAttribute("alt",t.title||"Modelo 3D Mural"),n.setAttribute("ar",""),n.setAttribute("ar-modes","webxr scene-viewer quick-look"),n.setAttribute("camera-controls",""),n.setAttribute("touch-action","pan-y"),n.setAttribute("auto-rotate",""),n.setAttribute("shadow-intensity","1"))}let Pe=null;const s_=e_(),Z={statusIndicator:document.getElementById("status-indicator"),statusText:document.getElementById("status-text"),muralsList:document.getElementById("murals-list"),muralCount:document.getElementById("mural-count"),viewer:document.getElementById("mural-viewer"),btnOpenQr:document.getElementById("btn-open-qr"),qrModal:document.getElementById("qr-modal"),btnCloseModal:document.getElementById("btn-close-modal"),qrImage:document.getElementById("qr-image"),detailTitle:document.getElementById("detail-title"),detailArtist:document.getElementById("detail-artist"),detailLocation:document.getElementById("detail-location"),detailCategory:document.getElementById("detail-category"),detailDescription:document.getElementById("detail-description"),specYear:document.getElementById("spec-year"),specDimensions:document.getElementById("spec-dimensions"),specFormat:document.getElementById("spec-format")};function i_(){Yr()?(Z.statusIndicator.className="status-dot online",Z.statusText.textContent=`Firebase Conectado (${We.projectId})`):(Z.statusIndicator.className="status-dot fallback",Z.statusText.textContent="Servidor Local (Modo Demostración)")}function Zu(n){Z.muralCount.textContent=`${n.length} mural${n.length===1?"":"es"}`,Z.muralsList.innerHTML="",n.forEach(t=>{const e=document.createElement("div");e.className=`mural-card ${Pe&&Pe.id===t.id?"active":""}`,e.dataset.id=t.id,e.innerHTML=`
      <div class="mural-icon">${t.thumbnail||"🎨"}</div>
      <div class="mural-info">
        <div class="mural-card-title">${t.title}</div>
        <div class="mural-card-location">${t.location||"Ubicación sin especificar"}</div>
      </div>
    `,e.addEventListener("click",()=>Ci(t)),Z.muralsList.appendChild(e)})}function Ci(n){if(!n)return;Pe=n,Z.muralsList.querySelectorAll(".mural-card").forEach(s=>{s.classList.toggle("active",s.dataset.id===n.id)}),r_(Z.viewer,n),Z.detailTitle.textContent=n.title||"Mural Sin Título",Z.detailArtist.textContent=`Artista: ${n.artist||"Desconocido"}`,Z.detailLocation.textContent=`Ubicación: ${n.location||"No especificada"}`,Z.detailCategory.textContent=`Categoría: ${n.category||"General"}`,Z.detailDescription.textContent=n.description||"Sin descripción disponible.",Z.specYear.textContent=n.year||"—",Z.specDimensions.textContent=n.dimensions||"—";const e=[];n.glbUrl&&e.push("GLB/GLTF"),n.usdzUrl&&e.push("USDZ (iOS)"),Z.specFormat.textContent=e.length?e.join(" / "):"GLB";const r=new URL(window.location.href);r.searchParams.set("mural",n.id),window.history.replaceState({},"",r)}async function o_(){if(!Pe)return;const n=await n_(Pe.id);n&&(Z.qrImage.src=n.qrDataUrl,Z.qrModal.classList.add("open"))}function tc(){Z.qrModal.classList.remove("open")}async function a_(){i_(),s_.isMobile&&(Z.btnOpenQr.style.display="none"),Z.btnOpenQr.addEventListener("click",o_),Z.btnCloseModal.addEventListener("click",tc),Z.qrModal.addEventListener("click",s=>{s.target===Z.qrModal&&tc()});const n=await Pp();Zu(n);const e=new URLSearchParams(window.location.search).get("mural"),r=n.find(s=>s.id===e)||n[0];r&&Ci(r),Vp(s=>{if(Zu(s),Pe){const o=s.find(a=>a.id===Pe.id);o&&Ci(o)}})}document.addEventListener("DOMContentLoaded",a_);
