(()=>{var t={28865:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>a});var i=e(36758),n=e.n(i),r=e(40935),s=e.n(r)()(n());s.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.full-modal{z-index:9999999999 !important}.full-modal{position:fixed;width:100vw;height:100vh;left:0;top:0;display:flex;align-items:center;justify-content:center;background-color:var(--backdrop-color);transition:.15s all ease-in-out}.close-btn{border:none;color:var(--wh-text);background:none;position:absolute;right:4px;top:4px;z-index:1;border-radius:4px;padding:4px;cursor:pointer;z-index:9999999999}.close-btn:hover{color:var(--wh-text-strongest);background-color:var(--wh-bg-base-hover-strong)}.animation-container{overflow:visible;height:-moz-fit-content;height:fit-content;align-items:center;display:flex;justify-content:center;flex-wrap:wrap;width:-moz-min-content;width:min-content}@keyframes modal-ease-in{0%{transform:scale(0.9);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes modal-ease-out{100%{opacity:0}0%{opacity:1}}",""]);const a=s},30827:(t,o,e)=>{"use strict";e.d(o,{y:()=>r});var i=e(38085),n=e(93811);class r extends n.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,o,e){(0,i.defineWebHighlightsElement)(t,o,e)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},37712:(t,o,e)=>{var i=e(28865);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var o=[];return o.toString=function(){return this.map(function(o){var e="",i=void 0!==o[5];return o[4]&&(e+="@supports (".concat(o[4],") {")),o[2]&&(e+="@media ".concat(o[2]," {")),i&&(e+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),e+=t(o),i&&(e+="}"),o[2]&&(e+="}"),o[4]&&(e+="}"),e}).join("")},o.i=function(t,e,i,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),o.push(d))}},o}},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},o={};function e(i){var n=o[i];if(void 0!==n)return n.exports;var r=o[i]={id:i,exports:{}};return t[i](r,r.exports,e),r.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=e(38085),o=e(93811),i=e(95665),n=e(30827),r=e(37712),s=e.n(r),a=function(t,o,e,i){var n,r=arguments.length,s=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(o,e,s):n(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};const c=t.SHARED_COMPONENTS.Modal.TAG,l=t.DIALOG_ANIMATION_DURATION,d="modal-backdrop";class p extends n.y{constructor(){super(...arguments),this.isFadeOutAnimation=!1,this.show=!0,this.closable=!1,this.hideBackdrop=!1,this.closeOnBackdropClick=!0,this.components=[t.SHARED_COMPONENTS.Icon.TAG]}onModalClose(){return t=this,o=void 0,i=function*(){this.isFadeOutAnimation=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("closed",{bubbles:!0})),this.remove()},l)},new((e=void 0)||(e=Promise))(function(n,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var o;t.done?n(t.value):(o=t.value,o instanceof e?o:new e(function(t){t(o)})).then(s,a)}c((i=i.apply(t,o||[])).next())});var t,o,e,i}updated(){this.show||this.onModalClose()}preventInnerClickPropagation(t){}get bounceInAnimation(){return`animation: modal-ease-in ${l}ms`}get bounceOutAnimation(){return`animation: modal-ease-out ${l}ms`}onBackdropClick(t){var o;const e=(null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(d))===t.target;this.closeOnBackdropClick&&e&&this.onModalClose()}render(){var e,i,n,r,s,a,c,l;return o.html`
      <style>
        :host {
          --backdrop-color: ${this.hideBackdrop?"transparent":"rgb(32, 38, 50, 0.8)"};
        }
        .animation-container {
          top: ${"number"==typeof(null===(e=this.position)||void 0===e?void 0:e.top)?`${null===(i=this.position)||void 0===i?void 0:i.top}px`:"unset"};
          right: ${"number"==typeof(null===(n=this.position)||void 0===n?void 0:n.right)?`${null===(r=this.position)||void 0===r?void 0:r.right}px`:"unset"};
          bottom: ${"number"==typeof(null===(s=this.position)||void 0===s?void 0:s.bottom)?`${null===(a=this.position)||void 0===a?void 0:a.bottom}px`:"unset"};
          left: ${"number"==typeof(null===(c=this.position)||void 0===c?void 0:c.left)?`${null===(l=this.position)||void 0===l?void 0:l.left}px`:"unset"};
          position: ${this.position?"absolute":"relative"};
        }
      </style>
      <div
        class="full-modal"
        id=${d}
        data-testid="${t.SHARED_COMPONENTS.Modal.TEST_IDS.CONTAINER}"
        part="modal-container"
        @click="${this.onBackdropClick}"
      >
        <div
          class="animation-container"
          part="animation-container"
          style="${this.isFadeOutAnimation?this.bounceOutAnimation:this.bounceInAnimation}"
        >
          ${this.closable?o.html`
                <button
                  class="close-btn"
                  part="close-btn"
                  @click="${this.onModalClose}"
                  data-testid="${t.SHARED_COMPONENTS.Modal.TEST_IDS.CLOSE_BTN}"
                >
                  <webhighlights-icon
                    icon="${t.ICON_NAMES["delete-x"]}"
                    size="16"
                  ></webhighlights-icon>
                </button>
              `:o.html``}
          <slot></slot>
        </div>
      </div>
    `}}p.styles=o.css`
    ${(0,o.unsafeCSS)(s())}
  `,a([(0,i.property)()],p.prototype,"isFadeOutAnimation",void 0),a([(0,i.property)()],p.prototype,"show",void 0),a([(0,i.property)()],p.prototype,"closable",void 0),a([(0,i.property)()],p.prototype,"hideBackdrop",void 0),a([(0,i.property)()],p.prototype,"closeOnBackdropClick",void 0),a([(0,i.property)()],p.prototype,"position",void 0),n.y.define(c,p)})()})();