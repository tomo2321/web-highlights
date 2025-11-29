/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={30827:(t,e,r)=>{"use strict";r.d(e,{y:()=>a});var i=r(38085),o=r(93811);class a extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,r){(0,i.defineWebHighlightsElement)(t,e,r)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},36774:(t,e,r)=>{"use strict";r.d(e,{YZ:()=>i.YZ});var i=r(57929)},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r="",i=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),i&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),i&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r}).join("")},e.i=function(t,r,i,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(n[l]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);i&&n[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},57929:(t,e,r)=>{"use strict";r.d(e,{YZ:()=>a});var i=r(58207);const o=Symbol();class a{get taskComplete(){return this.t||(1===this.i?this.t=new Promise((t,e)=>{this.o=t,this.h=e}):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,r){this.p=0,this.i=0,(this._=t).addController(this);const i="object"==typeof e?e:{task:e,args:r};this.v=i.task,this.j=i.args,this.m=i.argsEqual??n,this.k=i.onComplete,this.A=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,r;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const i=++this.p;this.q=new AbortController;let a=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){a=!0,r=t}if(this.p===i){if(e===o)this.i=0;else{if(!1===a){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(r)}catch{}this.i=3,this.h?.(r)}this.u=e,this.l=r}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const n=(t,e)=>t===e||t.length===e.length&&t.every((t,r)=>!(0,i.Ec)(t,e[r]))},58207:(t,e,r)=>{"use strict";r.d(e,{Ec:()=>x});var i=r(86663);const{is:o,defineProperty:a,getOwnPropertyDescriptor:n,getOwnPropertyNames:s,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,p=globalThis,h=p.trustedTypes,c=h?h.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},x=(t,e)=>!o(t,e),f={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&a(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=n(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);o?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??f}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...s(t),...l(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift((0,i.sk)(t))}else void 0!==t&&e.push((0,i.sk)(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,i.Rf)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:u).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=i;const a=o.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??x)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,g?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.1")},82620:(t,e,r)=>{var i=r(88115);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},86663:(t,e,r)=>{"use strict";r.d(e,{Rf:()=>l,sk:()=>d});const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(e,t))}return t}toString(){return this.cssText}}const l=(t,e)=>{if(o)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=r.cssText,t.appendChild(e)}},d=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,a))(e)})(t):t},88115:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var i=r(36758),o=r.n(i),a=r(40935),n=r.n(a)()(o());n.push([t.id,':host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}.flex{display:flex}.flex-0{flex:0}.flex-1{flex:1}.flex-col{flex-direction:column}@media screen and (min-width: 768px){.sm\\:flex-row{flex-direction:row}}@media screen and (min-width: 768px){.md\\:flex-row{flex-direction:row}}@media screen and (min-width: 1024px){.lg\\:flex-row{flex-direction:row}}.flex-center{justify-content:center;align-items:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.flex-wrap{flex-wrap:wrap}.m-0{margin:0}.p-0{padding:0}.m-1{margin:4px}.m-2{margin:8px}.m-3{margin:12px}.m-4{margin:16px}.m-5{margin:20px}.mt-0{margin-top:0}.mt-0\\.5{margin-top:2px}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-3{margin-top:12px}.mt-4{margin-top:16px}.mt-5{margin-top:20px}.mt-8{margin-top:32px}.my-8{margin-top:32px;margin-bottom:32px}.mb-0{margin-bottom:0}.mb-1{margin-bottom:4px}.mb-2{margin-bottom:8px}.mb-3{margin-bottom:12px}.mb-4{margin-bottom:16px}.mb-5{margin-bottom:20px}.mb-8{margin-bottom:32px}.ml-0{margin-left:0}.ml-1{margin-left:4px}.ml-2{margin-left:8px}.ml-3{margin-left:12px}.ml-4{margin-left:16px}.ml-5{margin-left:20px}.mr-0{margin-right:0}.mr-1{margin-right:4px}.mr-2{margin-right:8px}.mr-3{margin-right:12px}.mr-4{margin-right:16px}.mr-5{margin-right:20px}.p-0{padding:0}.p-1{padding:4px}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.p-5{padding:20px}.pt-0{padding-top:0}.pt-1{padding-top:4px}.pt-2{padding-top:8px}.pt-3{padding-top:12px}.pt-4{padding-top:16px}.pt-5{padding-top:20px}.pb-0{padding-bottom:0}.pb-1{padding-bottom:4px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:12px}.pb-4{padding-bottom:16px}.pb-5{padding-bottom:20px}.pl-0{padding-left:0}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pl-3{padding-left:12px}.pl-4{padding-left:16px}.pl-5{padding-left:20px}.pr-0{padding-right:0}.pr-1{padding-right:4px}.pr-2{padding-right:8px}.pr-3{padding-right:12px}.pr-4{padding-right:16px}.pr-5{padding-right:20px}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:4px;margin-bottom:4px}.my-2{margin-top:8px;margin-bottom:8px}.my-3{margin-top:12px;margin-bottom:12px}.my-4{margin-top:16px;margin-bottom:16px}.my-5{margin-top:20px;margin-bottom:20px}.mx-auto{margin-left:auto;margin-right:auto}.my-auto{margin-top:auto;margin-bottom:auto}.m-auto{margin:auto}.mx-2{margin-left:8px;margin-right:8px}.mx-4{margin-left:16px;margin-right:16px}.mx-8{margin-left:32px;margin-right:32px}.py-0{padding-top:0;padding-bottom:0}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-5{padding-top:20px;padding-bottom:20px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:4px;padding-right:4px}.px-2{padding-left:8px;padding-right:8px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.px-5{padding-left:20px;padding-right:20px}.grid{display:grid}@media screen and (min-width: 768px){.sm-grid{display:grid}}@media screen and (min-width: 1024px){.md-grid{display:grid}}@media screen and (min-width: 1280px){.lg-grid{display:grid}}.grid-cols-2{grid-template-columns:repeat(2, 1fr)}.grid-cols-3{grid-template-columns:repeat(3, 1fr)}.grid-cols-4{grid-template-columns:repeat(4, 1fr)}.grid-cols-6{grid-template-columns:repeat(6, 1fr)}.grid-cols-12{grid-template-columns:repeat(12, 1fr)}@media screen and (min-width: 768px){.sm-grid-cols-2{grid-template-columns:repeat(2, 1fr)}.sm-grid-cols-3{grid-template-columns:repeat(3, 1fr)}.sm-grid-cols-4{grid-template-columns:repeat(4, 1fr)}.sm-grid-cols-6{grid-template-columns:repeat(6, 1fr)}.sm-grid-cols-12{grid-template-columns:repeat(12, 1fr)}}@media screen and (min-width: 1024px){.md-grid-cols-2{grid-template-columns:repeat(2, 1fr)}.md-grid-cols-3{grid-template-columns:repeat(3, 1fr)}.md-grid-cols-4{grid-template-columns:repeat(4, 1fr)}.md-grid-cols-6{grid-template-columns:repeat(6, 1fr)}.md-grid-cols-12{grid-template-columns:repeat(12, 1fr)}}@media screen and (min-width: 1280px){.lg-grid-cols-2{grid-template-columns:repeat(2, 1fr)}.lg-grid-cols-3{grid-template-columns:repeat(3, 1fr)}.lg-grid-cols-4{grid-template-columns:repeat(4, 1fr)}.lg-grid-cols-6{grid-template-columns:repeat(6, 1fr)}.lg-grid-cols-12{grid-template-columns:repeat(12, 1fr)}}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.gap-5{gap:20px}.gap-8{gap:32px}@media screen and (min-width: 768px){.sm-gap-1{gap:4px}.sm-gap-2{gap:8px}.sm-gap-3{gap:12px}.sm-gap-4{gap:16px}.sm-gap-5{gap:20px}}@media screen and (min-width: 1024px){.md-gap-1{gap:4px}.md-gap-2{gap:8px}.md-gap-3{gap:12px}.md-gap-4{gap:16px}.md-gap-5{gap:20px}}@media screen and (min-width: 1280px){.lg-gap-1{gap:4px}.lg-gap-2{gap:8px}.lg-gap-3{gap:12px}.lg-gap-4{gap:16px}.lg-gap-5{gap:20px}}.grid-flow-row{grid-auto-flow:row}.grid-flow-col{grid-auto-flow:column}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-3{grid-column:span 3/span 3}.col-span-4{grid-column:span 4/span 4}.col-span-6{grid-column:span 6/span 6}.col-span-8{grid-column:span 8/span 8}.col-span-12{grid-column:span 12/span 12}@media screen and (min-width: 768px){.sm-col-span-1{grid-column:span 1/span 1}.sm-col-span-2{grid-column:span 2/span 2}.sm-col-span-3{grid-column:span 3/span 3}.sm-col-span-4{grid-column:span 4/span 4}.sm-col-span-6{grid-column:span 6/span 6}.sm-col-span-8{grid-column:span 8/span 8}.sm-col-span-12{grid-column:span 12/span 12}}@media screen and (min-width: 1024px){.md-col-span-1{grid-column:span 1/span 1}.md-col-span-2{grid-column:span 2/span 2}.md-col-span-3{grid-column:span 3/span 3}.md-col-span-4{grid-column:span 4/span 4}.md-col-span-6{grid-column:span 6/span 6}.md-col-span-8{grid-column:span 8/span 8}.md-col-span-12{grid-column:span 12/span 12}}@media screen and (min-width: 1280px){.lg-col-span-1{grid-column:span 1/span 1}.lg-col-span-2{grid-column:span 2/span 2}.lg-col-span-3{grid-column:span 3/span 3}.lg-col-span-4{grid-column:span 4/span 4}.lg-col-span-6{grid-column:span 6/span 6}.lg-col-span-8{grid-column:span 8/span 8}.lg-col-span-12{grid-column:span 12/span 12}}.text-xs{font-size:10px}.text-sm{font-size:12px}.text-md{font-size:16px}.text-lg{font-size:20px}.text-xl{font-size:24px}.text-2xl{font-size:32px}.text-light{color:var(--wh-text-light)}.text-lighter{color:var(--wh-text-lighter)}.text-lightest{color:var(--wh-text-lightest)}.text-strong{color:var(--wh-text-strong)}.text-stronger{color:var(--wh-text-stronger)}.text-strongest{color:var(--wh-text-strongest)}.text-hover{color:var(--wh-text-hover)}.text{color:var(--wh-text)}.w-full{width:100%}.h-full{height:100%}.w-fit{width:-moz-fit-content;width:fit-content}@media screen and (min-width: 768px){.sm-w-full{width:100%}}@media screen and (min-width: 768px){.sm-w-fit{width:-moz-fit-content;width:fit-content}}[dir="ltr"] .text-start{text-align:left}[dir="rtl"] .text-start{text-align:right}[dir="ltr"] .text-end{text-align:right}[dir="rtl"] .text-end{text-align:left}.text-center{text-align:center}.no-wrap{white-space:nowrap}.cursor-pointer{cursor:pointer}.shadow{box-shadow:0 2px 8px rgba(0,0,0,.08)}.border{border:1px solid var(--wh-border-base)}.border:hover{border-color:var(--wh-border-base-hover)}.border-strong{border:1px solid var(--wh-border-base-strong)}.border-strong:hover{border-color:var(--wh-border-base-strong-hover)}.border-none{border:none}.border-white{border-color:#fff}.border-gray-300{border-color:#d1d5db}.rounded{border-radius:4px}.rounded-md{border-radius:8px}.rounded-lg{border-radius:12px}.overflow-hidden{overflow:hidden}.overflow-auto{overflow:auto}@media(min-width: 600px){.overflow-auto::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.overflow-auto::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.overflow-auto::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.btn-no-style{border:none;background:none;cursor:pointer}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mt-auto{margin-top:auto}.mb-auto{margin-bottom:auto}.order-0{order:0}.order-1{order:1}.order-2{order:2}@media screen and (min-width: 768px){.sm\\:order-0{order:0}}@media screen and (min-width: 768px){.sm\\:order-1{order:1}}@media screen and (min-width: 768px){.sm\\:order-2{order:2}}@media screen and (min-width: 1024px){.md\\:order-0{order:0}}@media screen and (min-width: 1024px){.md\\:order-1{order:1}}@media screen and (min-width: 1024px){.md\\:order-2{order:2}}@media screen and (min-width: 1280px){.lg\\:order-0{order:0}}@media screen and (min-width: 1280px){.lg\\:order-1{order:1}}@media screen and (min-width: 1280px){.lg\\:order-2{order:2}}.block{display:block}.text-center{text-align:center}.font-bold{font-weight:600}.font-semibold{font-weight:500}.box-border{box-sizing:border-box}.relative{position:relative}.overflow-hidden{overflow:hidden}.text-ellipsis{text-overflow:ellipsis}.max-w-screen-sm{max-width:640px}.max-w-screen-md{max-width:768px}.max-w-screen-lg{max-width:1024px}.max-w-screen-xl{max-width:1280px}.max-w-screen-2xl{max-width:1536px}.font-extrabold{font-weight:800}.tracking-wide{letter-spacing:.05em}.text-3xl{font-size:40px}.rounded-full{border-radius:50%}.border-b-2{border-bottom:2px solid #ccc}.bg-white{background:#fff}.absolute{position:absolute}.top-5{top:20px}.right-5{right:20px}.w-12{width:48px}.h-12{height:48px}.object-cover{-o-object-fit:cover;object-fit:cover}.h-screen{height:100vh}.w-screen{width:100vw}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.text-black{color:#000}.text-2xl{font-size:32px}.text-base{font-size:18px}.font-normal{font-weight:400}.font-medium{font-weight:500}.leading-tight{line-height:1.15}.leading-normal{line-height:1.5}.gap-8{gap:32px}.gap-12{gap:48px}.gap-20{gap:80px}.p-8{padding:32px}.p-12{padding:48px}.p-20{padding:80px}.rounded-xl{border-radius:16px}.bg-opacity-95{background-color:rgba(255,255,255,.95)}.min-w-\\[260px\\]{min-width:260px}.max-w-xs{max-width:20rem}.p-6{padding:24px}.px-3{padding-left:12px;padding-right:12px}.py-1{padding-top:4px;padding-bottom:4px}.self-end{align-self:flex-end}.rounded-xl{border-radius:16px}.shadow{box-shadow:0 2px 8px rgba(0,0,0,.08)}.bg-gray-100{background:var(--wh-gray-100)}.text-xs{font-size:12px}.font-medium{font-weight:500}.text-white{color:#fff}.text-gray-50{color:var(--wh-gray-50)}.text-gray-100{color:var(--wh-gray-100)}.text-gray-200{color:var(--wh-gray-200)}.text-gray-300{color:var(--wh-gray-300)}.text-gray-400{color:var(--wh-gray-400)}.text-gray-500{color:var(--wh-gray-500)}.text-gray-600{color:var(--wh-gray-600)}.text-gray-700{color:var(--wh-gray-700)}.text-gray-800{color:var(--wh-gray-800)}.text-gray-900{color:var(--wh-gray-900)}.text-gray-950{color:var(--wh-gray-950)}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.w-4{width:16px}.h-4{height:16px}.w-6{width:24px}.h-6{height:24px}.w-8{width:32px}.h-8{height:32px}.w-10{width:40px}.h-10{height:40px}:host{font-family:var(--wh-font-family);position:relative;display:block;width:100%;height:100%}.left-container{min-width:440px;overflow-y:auto}.rounded-divider{border:none;border-top:2px solid rgba(225,225,225,.5);border-radius:5px;width:50%;margin:0 auto}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6)}.social-media-btn{width:48px;height:48px;box-shadow:rgba(0,0,0,.24) 0px 3px 8px}.social-media-btn:hover{background-color:var(--wh-gray-50)}.social-media-btn.facebook{color:#1877f2}.social-media-btn.linkedin{color:#0077b5}.social-media-btn.twitter{color:#000}.thank-you-container{border:2px solid #fff;font-family:emoji}.right-container{background:linear-gradient(135deg, #4d372d 0%, #a77658 15%, #dab9a4 30%, #9e7d61 65%, #c5a86d 100%)}.bg-image{background-image:url("https://images.unsplash.com/photo-1665686377065-08ba896d16fd?auto=format&fit=crop&w=800&q=80");background-size:cover;background-position:center;background-repeat:no-repeat}.user-input{border-radius:4px;border:1px solid rgba(255,255,255,.5);color:#fff;background-color:rgba(0,0,0,.2);padding:10px 8px;font-size:13px;width:100%;box-sizing:border-box;outline:none}.user-input::-moz-placeholder{color:rgba(255,255,255,.5)}.user-input::placeholder{color:rgba(255,255,255,.5)}.user-input.focus-visible{outline:none}.user-input:focus-visible{outline:none}.posted-form-container{width:100%;max-width:340px;margin:0 auto;padding:16px;border-radius:8px}.posted-form-container.form{background-color:var(--wh-secondary-800)}.cancel-btn{background-color:rgba(0,0,0,0);color:var(--wh-gray-100);border:1px solid var(--wh-gray-300)}.cancel-btn:hover{background-color:rgba(0,0,0,.1)}.input-error{color:#ff4d4f;color:var(--error-color, #ff4d4f);font-size:12px;margin-top:4px;margin-bottom:4px;text-align:left}.email-prompt{margin-bottom:8px}.thank-you-message a{color:inherit}.input-label{font-size:11px;color:#b0b0b0;color:var(--wh-gray-300, #b0b0b0);margin-bottom:1.5px;margin-left:2px;font-weight:500}',""]);const s=n},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,exports:{}};return t[i](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=r(36774),e=r(38085),i=r(93811),o=r(95665),a=r(30827),n=r(82620),s=r.n(n),l=function(t,e,r,i){var o,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,r,n):o(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n},d=function(t,e,r,i){return new(r||(r=Promise))(function(o,a){function n(t){try{l(i.next(t))}catch(t){a(t)}}function s(t){try{l(i.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(n,s)}l((i=i.apply(t,e||[])).next())})};const p=e.SHARED_COMPONENTS.SpreadTheWordPrompt,h=p.TAG;class c extends a.y{constructor(){super(...arguments),this.hasShared=!1,this.urlValue="",this.urlError="",this.showUrlError=!1,this.emailValue="",this.emailError="",this.showEmailError=!1,this.step="intro",this.isLoading=!0,this.onStartShare=()=>{this.step="form"},this._giveawayEntriesCount=new t.YZ(this,{task:()=>d(this,void 0,void 0,function*(){const t=yield(0,e.useContext)().httpFacade.getGiveawayCountResultThisMonth();return"number"!=typeof t.count?null:t.count}),args:()=>[]})}firstUpdated(t){const r=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return d(this,void 0,void 0,function*(){var i,o;r.firstUpdated.call(this,t);const a=yield this.getExistingGiveawayId();if(this.emailValue=null!==(o=null===(i=yield e.chromeJwtService.getJwtPayload())||void 0===i?void 0:i.email)&&void 0!==o?o:"",a){if(this.giveawayResult=yield(0,e.useContext)().httpFacade.getGiveawayEntryById(a),!this.giveawayResult)return;this.step="done",this.hasShared=!0}this.isLoading=!1})}getExistingGiveawayId(){return d(this,void 0,void 0,function*(){const t=yield(0,e.useContext)().db.getChromeSettings();if(t.giveawayId)return t.giveawayId;const r=yield e.chromeStorageService.getStorage();return r.giveawayId?r.giveawayId:void 0})}onCloseClick(t){this.dispatchEvent(new CustomEvent("cancelled"))}getTemplatePost(t){return`Just discovered ${(null==t?void 0:t.tagName)||"Web Highlights"} and it's been a game-changer for my reading workflow! Finally found a way to actually remember and organize all the amazing articles I find online. \n\nIf you're drowning in bookmarks like I was, you'll love this: https://web-highlights.com`}validateUrl(t){if(!t)return!1;try{return new URL(t),!0}catch(t){return!1}}validateEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}onUrlInput(t){this.urlValue=t.target.value,this.showUrlError&&(this.urlError="",this.showUrlError=!1)}onEmailInput(t){this.emailValue=t.target.value,this.showEmailError&&(this.emailError="",this.showEmailError=!1)}onJoinGiveaway(){return d(this,void 0,void 0,function*(){this.showUrlError=!0,this.showEmailError=!0;let t=!1;if(this.validateUrl(this.urlValue)?this.urlError="":(this.urlError="Please add the link to your social post so we can enter you into the giveaway! (We verify all posts)",t=!0),this.validateEmail(this.emailValue)?this.emailError="":(this.emailError="Please enter a valid email address.",t=!0),!t){try{const t=yield(0,e.useContext)().httpFacade.postGiveawayEntry({email:this.emailValue,url:this.urlValue});if(!(null==t?void 0:t._id))return void(this.emailError="Something went wrong. Please try again later.");this.giveawayResult=t,e.chromeStorageService.setValue("giveawayId",t._id),yield(0,e.updateChromeSettings)({giveawayId:t._id}),yield this._giveawayEntriesCount.run(),this.emailError="",this.step="done",this.hasShared=!0}catch(t){return(0,e.isBusinessError)(t)?void(this.emailError=t.error):void(this.emailError="Something went wrong. Please try again later.")}this.step="done",this.hasShared=!0,this.onConfirmed()}})}onSharedOnLinkedIn(){window.open(`https://www.linkedin.com/feed/?shareActive&mini=true&text=${encodeURIComponent(this.getTemplatePost({tagName:"@Web Highlights"}))}`,"_blank")}onSharedOnX(){window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(this.getTemplatePost({tagName:"@WebHighlights_"}))}`,"_blank")}onSharedOnFacebook(){window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://web-highlights.com")}`,"_blank")}onCancel(){this.dispatchEvent(new CustomEvent("cancelled")),(0,e.closeDialog)()}onConfirmed(){this.dispatchEvent(new CustomEvent("confirmed"))}render(){var t,e,r,o,a;const n=i.html`
      <div
        class="text-gray-100 text-xs text-center"
        style="max-width: 320px;"
        data-testid="${p.TEST_IDS.WINNER_CHANCE_INFO}"
      >
        *One winner is notified on the 1st of each month by email.
        ${this._giveawayEntriesCount.render({pending:()=>i.html``,complete:t=>{if("number"!=typeof t)return i.html``;const e=t-("done"===this.step?1:0),r=Math.min(100,1/(t+("done"===this.step?0:1))*100).toFixed(2);return i.html`${`This month, ${"done"===this.step?"you and ":" "}${e} ${1===e?"user "+("done"===this.step?"have":"has"):"users have"} shared. If no one else joins, your chance of winning is`}
              <b>${r}%</b>.`}})}
      </div>
    `,s=i.html` <img
      src="https://livecards.net/pl/70355.png"
      alt="Amazon Gift Card"
      class="mx-auto"
      width="160"
    />`;return i.html`
      <div class="flex w-full h-full overflow-hidden">
        <!-- Left: Text -->
        <div
          class="left-container flex-0 flex flex-col box-border justify-center p-12 gap-8 w-1/2 h-full bg-white"
        >
          <div>
            <div class="font-extrabold text-2xl leading-tight mb-4">
              Love Web Highlights?<br />Share the love! ❤️
            </div>
            <div class="text-base font-normal leading-normal mb-8">
              <div class="flex flex-col items-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/38838885?v=4"
                  alt="Marius"
                  width="48"
                  height="48"
                  class="rounded-full mb-2 shadow"
                />
                <span class="text-center">
                  Hey 👋 If Web Highlights helps your workflow, please help me
                  share it!
                </span>
              </div>
              <ol>
                <li class="mb-1">Share on social media</li>
                <li class="mb-1">Enter URL of post</li>
                <li>Win $50 Amazon gift card 🎁 *</li>
              </ol>
            </div>
            <hr class="rounded-divider" />
            <div class="flex w-full justify-center gap-8 mt-8">
              <button
                title="Share on LinkedIn"
                @click=${this.onSharedOnLinkedIn}
                data-testid="${p.TEST_IDS.LINKED_IN_SHARE_BTN}"
                aria-label="Share on LinkedIn"
                class="social-media-btn linkedin bg-white border-none rounded-full flex items-center justify-center text-2xl font-normal cursor-pointer"
              >
                in
              </button>
              <button
                title="Share on X"
                @click=${this.onSharedOnX}
                data-testid="${p.TEST_IDS.X_SHARE_BTN}"
                aria-label="Share on X"
                class="social-media-btn twitter bg-white border-none rounded-full flex items-center justify-center text-2xl font-normal cursor-pointer"
              >
                &#120143;
              </button>
              <button
                title="Share on Facebook"
                @click=${this.onSharedOnFacebook}
                data-testid="${p.TEST_IDS.FACEBOOK_SHARE_BTN}"
                aria-label="Share on Facebook"
                class="social-media-btn facebook bg-white border-none rounded-full flex items-center justify-center text-2xl font-normal cursor-pointer"
              >
                f
              </button>
            </div>
          </div>
        </div>
        <!-- Right: Image -->
        <div
          class="right-container relative w-1/2 h-full overflow-hidden flex-1"
        >
          <div class="overlay"></div>
          <div
            alt="People talking"
            class="bg-image flex flex-center w-full h-full"
          >
            ${"intro"===this.step?i.html`
                  <div
                    class="flex flex-col flex-center w-full h-full z-10 justify-center items-center gap-4"
                  >
                    ${s}
                    <div class="flex gap-4 justify-center mb-2">
                      <button
                        class="primary-btn"
                        @click=${this.onStartShare}
                        style="min-width: 150px;"
                        data-testid="${p.TEST_IDS.CTA}"
                      >
                        I've shared it ✨
                      </button>
                      <button
                        class="secondary-btn cancel-btn"
                        @click=${this.onCancel}
                        style="min-width: 110px;"
                        data-testid="${p.TEST_IDS.NO_THANKS_BTN}"
                      >
                        No, thanks
                      </button>
                    </div>
                    ${n}
                  </div>
                `:"done"===this.step?i.html`
                    ${this.giveawayResult&&this.giveawayResult.year===(new Date).getFullYear()&&this.giveawayResult.month===(new Date).getMonth()+1?i.html`
                          <div
                            class="posted-form-container done flex flex-col gap-4 w-full h-full z-10 justify-center items-center"
                            data-testid="${p.TEST_IDS.DONE_CONTAINER}"
                          >
                            ${s}
                            <div
                              class="thank-you-message text-white text-lg text-center"
                            >
                              Thanks for sharing ❤️<br />

                              <div class="text-sm text-center mt-2 text-md">
                                We will verify
                                <a
                                  href=${null!==(e=null===(t=this.giveawayResult)||void 0===t?void 0:t.url)&&void 0!==e?e:""}
                                  target="_blank"
                                  class="underline"
                                  data-testid="${p.TEST_IDS.POST_URL}"
                                  rel="noopener noreferrer nofollow"
                                >
                                  your post
                                </a>
                                and let you know on 1st of next month if you
                                won*
                              </div>
                            </div>
                            ${n}
                            <section class="cta-container">
                              <button
                                class="secondary-btn cancel-btn"
                                @click=${this.onCancel}
                                data-testid="${p.TEST_IDS.CLOSE_BTN}"
                              >
                                Close
                              </button>
                            </section>
                          </div>
                        `:i.html`
                          <div
                            class="posted-form-container done flex flex-col gap-4 w-full h-full z-10 justify-center items-center"
                          >
                            <div
                              class="thank-you-message text-white text-lg text-center"
                            >
                              ${(null===(r=this.giveawayResult)||void 0===r?void 0:r.isWinner)?"You are a winner! 🎉":"Thanks for sharing ❤️"}<br />

                              <div
                                class="text-sm text-center mt-2 text-gray-100"
                              >
                                ${(null===(o=this.giveawayResult)||void 0===o?void 0:o.isWinner)?`We contacted you on the 1st of the month at ${null===(a=this.giveawayResult)||void 0===a?void 0:a.email}. If you did not receive an email, please check your spam folder or reach out to us at marius@web-highlights.com`:"Someone else won the giveaway. Thank you for sharing 🙏🏻"}
                              </div>
                            </div>
                            <section class="cta-container">
                              <button
                                class="secondary-btn cancel-btn"
                                @click=${this.onCancel}
                                data-testid="${p.TEST_IDS.CLOSE_BTN}"
                              >
                                Close
                              </button>
                            </section>
                          </div>
                        `}
                  `:i.html`
                    <div class="flex flex-col flex-center w-full h-full z-10">
                      <div
                        class="posted-form-container ${this.step} flex flex-col gap-4"
                      >
                        ${s}
                        <div class="flex flex-col gap-1">
                          <label class="input-label" for="url-input"
                            >URL of post</label
                          >
                          <input
                            id="url-input"
                            type="url"
                            class="w-full h-full user-input"
                            placeholder="https://linkedin.com/posts/xyz"
                            .value=${this.urlValue}
                            @input=${this.onUrlInput}
                            data-testid="${p.TEST_IDS.URL_INPUT}"
                            autocomplete="url"
                          />
                          ${this.showUrlError&&this.urlError?i.html`<div
                                class="input-error"
                                data-testid="${p.TEST_IDS.INPUT_ERROR}"
                              >
                                ${this.urlError}
                              </div>`:""}
                        </div>
                        <div class="flex flex-col gap-1">
                          <label class="input-label" for="email-input"
                            >Your email</label
                          >
                          <input
                            id="email-input"
                            type="email"
                            class="w-full h-full user-input"
                            placeholder="your@email.com"
                            .value=${this.emailValue}
                            @input=${this.onEmailInput}
                            data-testid="${p.TEST_IDS.EMAIL_INPUT}"
                            autocomplete="email"
                          />
                          ${this.showEmailError&&this.emailError?i.html`<div
                                class="input-error"
                                data-testid="${p.TEST_IDS.INPUT_ERROR}"
                              >
                                ${this.emailError}
                              </div>`:""}
                        </div>
                        <section class="cta-container">
                          <button
                            class="primary-btn"
                            @click=${this.onJoinGiveaway}
                            data-testid="${p.TEST_IDS.JOIN_GIVEAWAY_BTN}"
                          >
                            Join giveaway 🎁
                          </button>
                          <button
                            class="secondary-btn cancel-btn"
                            @click=${this.onCancel}
                            data-testid="${p.TEST_IDS.CANCEL_BTN}"
                          >
                            Cancel
                          </button>
                        </section>
                        ${n}
                      </div>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}}c.styles=i.css`
    ${(0,i.unsafeCSS)(s())}
  `,l([(0,o.state)()],c.prototype,"giveawayResult",void 0),l([(0,o.state)()],c.prototype,"hasShared",void 0),l([(0,o.state)()],c.prototype,"urlValue",void 0),l([(0,o.state)()],c.prototype,"urlError",void 0),l([(0,o.state)()],c.prototype,"showUrlError",void 0),l([(0,o.state)()],c.prototype,"emailValue",void 0),l([(0,o.state)()],c.prototype,"emailError",void 0),l([(0,o.state)()],c.prototype,"showEmailError",void 0),l([(0,o.state)()],c.prototype,"step",void 0),l([(0,o.state)()],c.prototype,"isLoading",void 0),a.y.define(h,c)})()})();