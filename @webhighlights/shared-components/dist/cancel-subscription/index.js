/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={30827:(t,e,i)=>{"use strict";i.d(e,{y:()=>s});var o=i(38085),r=i(93811);class s extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,i){(0,o.defineWebHighlightsElement)(t,e,i)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},36774:(t,e,i)=>{"use strict";i.d(e,{YZ:()=>o.YZ});var o=i(57929)},37192:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var o=i(36758),r=i.n(o),s=i(40935),n=i.n(s)()(r());n.push([t.id,'.cancel-subscription-container{max-width:420px;margin:40px auto;background:var(--wh-bg-base);color:var(--wh-text);font-family:var(--wh-font-family);box-sizing:border-box;padding:0 8px}@media(min-width: 900px){.cancel-subscription-container{padding:0}}.step-container{display:flex;flex-direction:column;gap:20px}.step-title{font-size:1.5rem;font-weight:700;color:var(--wh-text-stronger);line-height:1.3;margin-bottom:8px}.step-desc{font-size:1rem;color:var(--wh-text-light)}.radio-group{display:flex;flex-direction:column;gap:12px}.radio-option{display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:8px;background:var(--wh-bg-front);cursor:pointer;border:1px solid var(--wh-border-color);transition:border .2s,background .2s}.radio-option[focus-within],.radio-option:hover{background:var(--wh-bg-front-hover-strong)}.radio-option:focus-within,.radio-option:hover{background:var(--wh-bg-front-hover-strong)}.radio-option input[type=radio]{width:18px;height:18px;flex-shrink:0;margin-top:2px;box-shadow:none;outline:none;border:2px solid var(--wh-primary-500);background:var(--wh-bg-base)}.radio-option span{font-size:1rem;color:var(--wh-text);line-height:1.4;word-break:break-word}textarea{width:100%;min-height:80px;border-radius:8px;border:1px solid var(--wh-border-color);padding:12px;font-size:1rem;color:var(--wh-text);background:var(--wh-bg-front);resize:vertical;transition:border .2s;box-sizing:border-box}textarea:focus{outline:none;border-color:var(--wh-primary-500)}.char-count{text-align:right;font-size:.9rem;color:var(--wh-text-lightest)}.step-actions{display:flex;gap:12px;justify-content:flex-end}.primary-btn{background:var(--wh-primary-500);color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:1rem;font-weight:600;cursor:pointer;transition:background .2s}.primary-btn:hover{background:var(--wh-primary-color-hover)}.secondary-btn{background:var(--wh-bg-front);color:var(--wh-primary-500);border:1px solid var(--wh-primary-500);border-radius:8px;padding:10px 22px;font-size:1rem;font-weight:600;cursor:pointer;text-decoration:none;transition:background .2s,color .2s}.secondary-btn:hover{background:var(--wh-primary-color-transparent);color:var(--wh-primary-color-hover)}.secondary-btn.cancel-btn{border-color:var(--wh-border-back);color:var(--wh-text-light)}.error{color:var(--wh-danger-color);font-size:.9rem;margin-top:-10px;margin-bottom:4px}.founder-bubble{display:none}@media(min-width: 1200px){.founder-bubble{position:fixed;bottom:24px;right:24px;display:flex;align-items:flex-start;gap:14px;max-width:340px;font-size:.9rem}.founder-bubble.hidden{display:none}}.founder-img{width:40px;height:40px;border-radius:50%;-o-object-fit:cover;object-fit:cover;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.08);flex-shrink:0}.close-button{position:absolute;top:-8px;right:-8px;width:20px;height:20px;border-radius:50%;background:var(--wh-bg-base);border:1px solid var(--wh-border-color);box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--wh-text-light);font-size:14px;line-height:1;transition:all .2s;z-index:1}.close-button:hover{background:var(--wh-bg-front-hover);color:var(--wh-text);transform:scale(1.05)}.bubble-content{position:relative;background:var(--wh-bg-base);border:1px solid var(--wh-border-color);border-radius:14px;padding:14px 18px;box-shadow:0 2px 12px rgba(0,0,0,.06);flex:1}.bubble-content::before{content:"";position:absolute;left:-7px;top:14px;width:12px;height:12px;background:var(--wh-bg-base);border-left:1px solid var(--wh-border-color);border-bottom:1px solid var(--wh-border-color);transform:rotate(45deg)}.founder-message{color:var(--wh-text);line-height:1.6;margin-bottom:10px}.founder-message a{color:var(--wh-primary-500);text-decoration:none;font-weight:500;transition:color .2s}.founder-message a:hover{color:var(--wh-primary-color-hover);text-decoration:underline}.founder-signature{font-size:.85rem;color:var(--wh-text-light);font-style:italic;border-top:1px solid var(--wh-border-color);margin-top:10px;padding-top:10px}@media(max-width: 575px){.founder-bubble{position:static;margin:24px 0 0 0;width:100%;max-width:100%}}.loss-list{background:var(--wh-bg-front);border-radius:12px;padding:20px;margin:8px 0 0 0;list-style:none;display:flex;flex-direction:column;gap:16px;font-size:.95rem;color:var(--wh-text);border:1px solid var(--wh-border-color)}.loss-list li{display:flex;align-items:center;gap:14px;line-height:1.5}.loss-icon{font-size:1.1em;flex-shrink:0;width:24px;text-align:center}',""]);const a=n},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},e.i=function(t,i,o,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&n[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},57929:(t,e,i)=>{"use strict";i.d(e,{YZ:()=>s});var o=i(58207);const r=Symbol();class s{get taskComplete(){return this.t||(1===this.i?this.t=new Promise((t,e)=>{this.o=t,this.h=e}):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,i){this.p=0,this.i=0,(this._=t).addController(this);const o="object"==typeof e?e:{task:e,args:i};this.v=o.task,this.j=o.args,this.m=o.argsEqual??n,this.k=o.onComplete,this.A=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.u=o.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||void 0===t||void 0!==e&&this.m(e,t)||await this.run(t)}async run(t){let e,i;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const o=++this.p;this.q=new AbortController;let s=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(t){s=!0,i=t}if(this.p===o){if(e===r)this.i=0;else{if(!1===s){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(i)}catch{}this.i=3,this.h?.(i)}this.u=e,this.l=i}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const n=(t,e)=>t===e||t.length===e.length&&t.every((t,i)=>!(0,o.Ec)(t,e[i]))},58207:(t,e,i)=>{"use strict";i.d(e,{Ec:()=>S});var o=i(86663);const{is:r,defineProperty:s,getOwnPropertyDescriptor:n,getOwnPropertyNames:a,getOwnPropertySymbols:l,getPrototypeOf:c}=Object,d=globalThis,h=d.trustedTypes,p=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,f=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},S=(t,e)=>!r(t,e),v={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&s(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=n(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=c(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...a(t),...l(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift((0,o.sk)(t))}else void 0!==t&&e.push((0,o.sk)(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,o.Rf)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o;const s=r.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,r=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??S)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[f("elementProperties")]=new Map,E[f("finalized")]=new Map,u?.({ReactiveElement:E}),(d.reactiveElementVersions??=[]).push("2.1.1")},86663:(t,e,i)=>{"use strict";i.d(e,{Rf:()=>l,sk:()=>c});const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const l=(t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=o.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},99921:(t,e,i)=>{var o=i(37192);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=i(36774),e=i(38085),o=i(93811),r=i(95665),s=i(30827),n=i(99921),a=i.n(n),l=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n},c=function(t,e,i,o){return new(i||(i=Promise))(function(r,s){function n(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,a)}l((o=o.apply(t,e||[])).next())})};const d=e.SHARED_COMPONENTS.CancelSubscription.TAG,h=["Didn't meet my expectations","Found a better alternative","No longer needed","Missing features","Technical issues","Other"];class p extends s.y{constructor(){super(...arguments),this.cancelUrl=null,this.step=e.CancellationFormStep.Reason,this.cancellationFeedbackState=e.CancellationFeedbackState.PENDING,this.reason=null,this.feedback="",this.cancellationOfferChoice=null,this.error=null,this.isBubbleVisible=!0,this._cancellationFeedbackId=(0,e.generateObjectId)(),this._subscriptionInfo=new t.YZ(this,{task:t=>c(this,[t],void 0,function*([]){return(0,e.fetchSubscriptionInfo)()}),args:()=>[]}),this._cancellationOffer=new t.YZ(this,{task:([t])=>t?(0,e.useContext)().httpFacade.getCancellationOfferForSubscription(t.subscription.subscription_id):null,args:()=>[this._subscriptionInfo.value]})}nextStep(){return c(this,void 0,void 0,function*(){this.step!==e.CancellationFormStep.Reason||this.reason?this.step===e.CancellationFormStep.Feedback&&this.feedback.length>500?this.error="Feedback must be 500 characters or less.":this.step!==e.CancellationFormStep.CancellationOffer||this.cancellationOfferChoice?(this.error=null,this.step=this.step+1,yield this.uploadFormData()):this.error="Please select an option.":this.error="Please select a reason."})}prevStep(){this.step>e.CancellationFormStep.Reason&&(this.step=this.step-1,this.error=null)}renderRadioGroup(t,i,r){return o.html`
      <div class="radio-group">
        ${t.map(t=>{const s="string"==typeof t?t:t.label,n="string"==typeof t?t:t.value;return o.html`
            <label class="radio-option">
              <input
                type="radio"
                name="radio-group-${this.step}"
                data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.RADIO_OPTION(null==n?void 0:n.replace(/\s+/g,"-").toLowerCase())}
                .value=${n}
                .checked=${i===n}
                @change=${()=>r(n)}
              />
              <span>${s}</span>
            </label>
          `})}
      </div>
    `}renderReasonStep(){return o.html`
      <div class="step-container">
        <div
          class="step-title"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
        >
          Sorry to see you go! Could you share why you're canceling?
        </div>
        ${this.renderRadioGroup(h,this.reason,t=>this.reason=t)}
        ${this.error?o.html`<div
              class="error"
              data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.ERROR_MESSAGE}
            >
              ${this.error}
            </div>`:""}
        <div class="step-actions">
          <button
            class="primary-btn"
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.PROCEED_BTN}
            @click=${this.nextStep}
          >
            Proceed
          </button>
        </div>
      </div>
    `}renderFeedbackStep(){return o.html`
      <div class="step-container">
        <div
          class="step-title"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
        >
          Anything I could do better?
        </div>
        <div
          class="step-desc"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_DESCRIPTION}
        >
          Your feedback helps me improve Web Highlights.
        </div>
        <textarea
          maxlength="500"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.FEEDBACK_TEXTAREA}
          .value=${this.feedback}
          @input=${t=>this.feedback=t.target.value}
          placeholder="I'd love to hear your thoughts..."
        ></textarea>
        <div
          class="char-count"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.CHAR_COUNT}
        >
          ${this.feedback.length}/500
        </div>
        ${this.error?o.html`<div
              class="error"
              data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.ERROR_MESSAGE}
            >
              ${this.error}
            </div>`:""}
        <div class="step-actions">
          <button
            class="secondary-btn"
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.BACK_BTN}
            @click=${()=>this.prevStep()}
          >
            Back
          </button>
          <button
            class="primary-btn"
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.PROCEED_BTN}
            @click=${this.nextStep}
          >
            Proceed
          </button>
        </div>
      </div>
    `}onCancellationOfferNext(t){return c(this,void 0,void 0,function*(){try{return this.cancellationOfferChoice===e.CancellationOfferChoice.REDEEM&&(yield(0,e.useContext)().httpFacade.redeemCancellationOffer(t.subscription.subscription_id),yield this._subscriptionInfo.run()),this.nextStep()}catch(t){(0,e.isBusinessError)(t)?this.error=t.error:this.error="Failed to redeem free month. Try again later or contact me at marius@web-highlights.com."}})}renderCancellationOfferStep(t){return this._cancellationOffer.render({pending:()=>o.html`<webhighlights-loading
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.LOADING}
        ></webhighlights-loading>`,complete:i=>{if(i)return i.isAvailable?o.html`
            <div class="step-container">
              <div
                class="step-title"
                data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
              >
                ${i.type===e.CancellationOfferType.FREE_MONTH?"Wait! Would you like a free month?":""}${i.type===e.CancellationOfferType.HALF_PRICE_NEXT_YEAR?"Wait! Would you like 50% off for the next year?":""}
              </div>
              <div
                class="step-desc"
                data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_DESCRIPTION}
              >
                ${i.type===e.CancellationOfferType.FREE_MONTH?"Instead of canceling, I'd love to offer you another month of Web\n                Highlights for free.":""}
                ${i.type===e.CancellationOfferType.HALF_PRICE_NEXT_YEAR?"Instead of canceling, I'd love to offer you 50% off for the next year.":""}
              </div>
              ${this.renderRadioGroup([{label:i.type===e.CancellationOfferType.FREE_MONTH?"Yes, give me a free month 🎁":"Yes, give me 50% off for the next year 🎁",value:e.CancellationOfferChoice.REDEEM},{label:"No thanks, continue cancellation",value:e.CancellationOfferChoice.DECLINE}],this.cancellationOfferChoice,t=>this.cancellationOfferChoice=t)}
              ${this.error?o.html`<div
                    class="error"
                    data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.ERROR_MESSAGE}
                  >
                    ${this.error}
                  </div>`:""}
              <div class="step-actions">
                <button
                  class="secondary-btn"
                  data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.BACK_BTN}
                  @click=${this.prevStep}
                >
                  Back
                </button>
                <button
                  class="primary-btn"
                  data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.PROCEED_BTN}
                  @click=${()=>c(this,void 0,void 0,function*(){return yield this.onCancellationOfferNext(t)})}
                >
                  Next
                </button>
              </div>
            </div>
          `:!i.isAvailable&&i.hasNotReachedOfferPeriod?o.html`
            <div class="step-container">
              <div
                class="step-title"
                data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
              >
                ${i.type===e.CancellationOfferType.FREE_MONTH?" You redeemed a free month, continue cancellation?":""}
                ${i.type===e.CancellationOfferType.HALF_PRICE_NEXT_YEAR?" You redeemed 50% off for the next year, continue cancellation?":""}
              </div>
              <div
                class="step-desc"
                data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_DESCRIPTION}
              >
                ${i.type===e.CancellationOfferType.FREE_MONTH?"If you continue, your free month will be removed and your\n                cancellation date will be set to your original end date of your\n                plan.":""}
                ${i.type===e.CancellationOfferType.HALF_PRICE_NEXT_YEAR?"If you continue, your 50% off will be removed and your\n                cancellation date will be set to your original end date of your\n                plan.":""}
              </div>
              ${this.error?o.html`<div
                    class="error"
                    data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.ERROR_MESSAGE}
                  >
                    ${this.error}
                  </div>`:""}
              <div class="step-actions">
                <button
                  class="secondary-btn"
                  data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.KEEP_SUBSCRIPTION_BTN}
                  @click=${this.onKeepCancellationOffer}
                >
                  ${i.type===e.CancellationOfferType.FREE_MONTH?"Keep free month":"Keep 50% off"}
                </button>
                <button
                  class="secondary-btn cancel-btn"
                  data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.CONTINUE_CANCEL_BTN}
                  @click=${this.onRemoveExistingCancellationOffer}
                >
                  Continue cancellation
                </button>
              </div>
            </div>
          `:(this.cancellationOfferChoice=e.CancellationOfferChoice.DECLINE,this.renderSummaryStep(t))},error:()=>this.renderSummaryStep(t)})}onCancelNow(){return c(this,void 0,void 0,function*(){this.cancellationFeedbackState=e.CancellationFeedbackState.SUBMITTED,this.uploadFormData()})}onKeepSyncing(){return c(this,void 0,void 0,function*(){this.cancellationFeedbackState=e.CancellationFeedbackState.ABORTED,this.uploadFormData()})}onKeepCancellationOffer(){return c(this,void 0,void 0,function*(){return this.cancellationFeedbackState=e.CancellationFeedbackState.ABORTED,this.cancellationOfferChoice=e.CancellationOfferChoice.KEEP_OFFER,this.nextStep()})}onRemoveExistingCancellationOffer(){return c(this,void 0,void 0,function*(){return this.cancellationOfferChoice=e.CancellationOfferChoice.REMOVE_OFFER,this.nextStep()})}uploadFormData(){return c(this,void 0,void 0,function*(){var t,i,o,r,s,n,a;try{const l={_id:this._cancellationFeedbackId,_user:null===(t=this._subscriptionInfo.value)||void 0===t?void 0:t.userInfo._id,createdAt:Date.now(),_subscription_id:null===(o=null===(i=this._subscriptionInfo.value)||void 0===i?void 0:i.subscription)||void 0===o?void 0:o.subscription_id,reason:this.reason,feedback:this.feedback,step:this.step,state:this.cancellationFeedbackState,availableOfferType:null!==(s=null===(r=this._cancellationOffer.value)||void 0===r?void 0:r.type)&&void 0!==s?s:null,offerChoice:this.cancellationOfferChoice,isOfferAvailable:null!==(a=null===(n=this._cancellationOffer.value)||void 0===n?void 0:n.isAvailable)&&void 0!==a&&a};return(0,e.useContext)().httpFacade.postCancellationFeedback(l)}catch(t){console.error("Error uploading form data",t)}})}renderSummaryStep(t){var i,r;return this.cancellationOfferChoice===e.CancellationOfferChoice.REDEEM||this.cancellationOfferChoice===e.CancellationOfferChoice.KEEP_OFFER?this._subscriptionInfo.render({pending:()=>o.html`<webhighlights-loading
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.LOADING}
          ></webhighlights-loading>`,complete:t=>{var i,r,s;return o.html`
          <div class="step-container">
            <div
              class="step-title"
              data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
            >
              I'm glad you're staying! 🎉
            </div>
            <div
              class="step-desc"
              data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_DESCRIPTION}
            >
              Your plan will renew on
              ${null===(i=null==t?void 0:t.subscription.next_payment)||void 0===i?void 0:i.date} for
              ${null===(r=null==t?void 0:t.subscription.next_payment)||void 0===r?void 0:r.amount}
              ${null===(s=null==t?void 0:t.subscription.next_payment)||void 0===s?void 0:s.currency}. Thank
              you for being a loyal user of this project!
            </div>
          </div>
        `}}):o.html`
      <div class="step-container">
        <div
          class="step-title"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_TITLE}
        >
          Before you cancel...
        </div>
        <div
          class="step-desc"
          data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.STEP_DESCRIPTION}
        >
          Here's what you'll lose when you end your subscription:
        </div>
        <ul class="loss-list">
          <li>
            <span class="loss-icon">❌</span>
            <span class="loss-text"
              ><b>Syncing</b> highlights & pages will be turned off</span
            >
          </li>
          <li>
            <span class="loss-icon">📱</span>
            <span class="loss-text"
              ><b>Cross-device access</b> will no longer work</span
            >
          </li>
          <li>
            <span class="loss-icon">⏰</span>
            <span class="loss-text">
              Features that rely on syncing, like <b>reminders</b>, won't work
              anymore</span
            >
          </li>
        </ul>
        <div class="step-actions">
          <a
            class="secondary-btn"
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.KEEP_SUBSCRIPTION_BTN}
            @click=${this.onKeepSyncing}
            href="${null!==(r=null===(i=(0,e.useContextWithCatch)())||void 0===i?void 0:i.environment.FRONTEND_URL)&&void 0!==r?r:"/"}"
          >
            Keep syncing
          </a>
          <a
            class="secondary-btn cancel-btn"
            data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.CANCEL_NOW_BTN}
            href="${t.subscription.cancel_url}"
            @click=${this.onCancelNow}
            target="_blank"
            rel="noopener"
            >Cancel Now</a
          >
        </div>
      </div>
    `}closeBubble(){this.isBubbleVisible=!1}render(){return o.html`
      <div class="cancel-subscription-container">
        ${this._subscriptionInfo.render({pending:()=>o.html`<webhighlights-loading
              data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.LOADING}
            ></webhighlights-loading>`,complete:t=>t?o.html`
                  ${this.step===e.CancellationFormStep.Reason?this.renderReasonStep():this.step===e.CancellationFormStep.Feedback?this.renderFeedbackStep():this.step===e.CancellationFormStep.CancellationOffer?this.renderCancellationOfferStep(t):this.renderSummaryStep(t)}
                  <div
                    class="founder-bubble ${this.isBubbleVisible?"":"hidden"}"
                    data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.FOUNDER_BUBBLE}
                  >
                    <button
                      class="close-button"
                      data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.CLOSE_BUBBLE_BTN}
                      @click=${this.closeBubble}
                    >
                      ×
                    </button>
                    <img
                      class="founder-img"
                      src="https://web-highlights.com/images/me.png"
                      alt="Marius, Founder of Web Highlights"
                    />
                    <div class="bubble-content">
                      <div class="founder-message">
                        Every subscription helps me keep working on Web
                        Highlights. If you have any questions, feel free to
                        reach out at <i>marius@web-highlights.com</i> or connect
                        with me on
                        <a href="${e.CONSTANTS.LINKED_IN_URL_PRIVATE}"
                          >LinkedIn</a
                        >
                        or
                        <a href="${e.CONSTANTS.TWITTER_URL_PRIVATE}">Twitter</a>.
                      </div>
                      <div class="founder-signature">Marius - Founder</div>
                    </div>
                  </div>
                `:o.html`<div
                  data-testid=${e.SHARED_COMPONENTS.CancelSubscription.TEST_IDS.NO_SUBSCRIPTION_MESSAGE}
                >
                  No subscription found
                </div>`})}
      </div>
    `}}p.styles=o.css`
    ${(0,o.unsafeCSS)(a())}
  `,l([(0,r.property)({type:String})],p.prototype,"cancelUrl",void 0),l([(0,r.state)()],p.prototype,"step",void 0),l([(0,r.state)()],p.prototype,"cancellationFeedbackState",void 0),l([(0,r.state)()],p.prototype,"reason",void 0),l([(0,r.state)()],p.prototype,"feedback",void 0),l([(0,r.state)()],p.prototype,"cancellationOfferChoice",void 0),l([(0,r.state)()],p.prototype,"error",void 0),l([(0,r.state)()],p.prototype,"isBubbleVisible",void 0),l([(0,r.state)()],p.prototype,"_cancellationFeedbackId",void 0),s.y.define(d,p)})()})();