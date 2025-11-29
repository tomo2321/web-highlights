(()=>{"use strict";var t={30827:(t,e,o)=>{o.d(e,{y:()=>s});var r=o(38085),i=o(93811);class s extends i.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,r.defineWebHighlightsElement)(t,e,o)}}},38085:t=>{t.exports=WebHighlightsSharedLibExternal},81844:(t,e,o)=>{o.d(e,{w:()=>r});const r=o(93811).css`
  :host {
    display: block;
  }

  .made-with-love-text {
    color: var(--wh-text-lighter);
    font-size: 12px;
    display: block;
    margin: 8px 0;
  }

  .legal-footer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .legal-footer-link {
    font-size: 12px;
    color: var(--wh-text-lighter);
    text-decoration: none;
  }
  .legal-footer-link:hover {
    text-decoration: underline;
  }
  .dot-divider {
    font-size: 12px;
    color: var(--wh-text-lighter);
    margin: 0 2px;
  }
  .dot-divider:last-child {
    display: none;
  }

  .made-with-text {
    font-size: 12px;
  }

  @container (min-width: 900px) {
    .auth-section {
      padding: 24px 32px;
    }
  }
`},93811:t=>{t.exports=LitExternal},95665:t=>{t.exports=LitDecoratorsExternal}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r=o(93811),i=o(38085),s=o(95665),a=o(30827),l=o(81844),n=function(t,e,o,r){var i,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(s<3?i(a):s>3?i(e,o,a):i(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a};const d=i.SHARED_COMPONENTS.LegalFooter,c=d.TAG;class h extends a.y{constructor(){super(...arguments),this.showFaq=!0,this.showTos=!0,this.showPrivacy=!0,this.showImprint=!0,this.showBlog=!0}render(){const t="_self";return r.html`
      <span class="made-with-love-text">Made with ♥ in Germany</span>
      <nav
        aria-label="Legal Footer of Web Highlights"
        target=${t}
        class="legal-footer-container"
        part="container"
      >
        ${this.showFaq?r.html`<a
                target=${t}
                class="legal-footer-link"
                href="${i.CONSTANTS.FAQ_LINK}"
                data-testid=${d.TEST_IDS.FAQ_LINK}
                >FAQ</a
              >
              <div class="dot-divider">·</div>`:r.html``}
        ${this.showBlog?r.html`<a
                target=${t}
                class="legal-footer-link"
                href="${i.CONSTANTS.BLOG_LINK}"
                data-testid=${d.TEST_IDS.BLOG_LINK}
                >Blog</a
              >
              <div class="dot-divider">·</div>`:r.html``}
        ${this.showTos?r.html`<a
                target=${t}
                class="legal-footer-link"
                href="${i.CONSTANTS.LEGAL_TOS_LINK}"
                data-testid=${d.TEST_IDS.TOS_LINK}
                >Terms of Service</a
              >
              <div class="dot-divider">·</div>`:r.html``}
        ${this.showPrivacy?r.html` <a
                target=${t}
                class="legal-footer-link"
                href="${i.CONSTANTS.LEGAL_PRIVACY_LINK}"
                data-testid=${d.TEST_IDS.PRIVACY_LINK}
                >Privacy Policy</a
              >
              <div class="dot-divider">·</div>`:r.html``}
        ${this.showImprint?r.html`<a
                target=${t}
                class="legal-footer-link"
                href="${i.CONSTANTS.LEGAL_IMPRINT_LINK}"
                data-testid=${d.TEST_IDS.IMPRINT_LINK}
                >Imprint</a
              >
              <div class="dot-divider">·</div>`:r.html``}
      </nav>
    `}}h.styles=l.w,n([(0,s.property)()],h.prototype,"showFaq",void 0),n([(0,s.property)()],h.prototype,"showTos",void 0),n([(0,s.property)()],h.prototype,"showPrivacy",void 0),n([(0,s.property)()],h.prototype,"showImprint",void 0),n([(0,s.property)()],h.prototype,"showBlog",void 0),a.y.define(c,h)})();