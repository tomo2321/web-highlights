(()=>{var t={27479:(t,e,i)=>{"use strict";i.d(e,{c:()=>n});const n=i(38085).productionEnvironment},30827:(t,e,i)=>{"use strict";i.d(e,{y:()=>r});var n=i(38085),o=i(93811);class r extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,i){(0,n.defineWebHighlightsElement)(t,e,i)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},e.i=function(t,i,n,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var p=0;p<t.length;p++){var l=[].concat(t[p]);n&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),i&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=i):l[2]=i),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},61400:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var n=i(36758),o=i.n(n),r=i(40935),s=i.n(r)()(o());s.push([t.id,":host{width:100%;text-align:left;font-family:var(--wh-font-family)}.main{display:flex;flex-wrap:wrap;width:100%;justify-content:center}.expiry-info{margin:32px 0 24px 0}@media(min-width: 481px){.expiry-info{width:80%}}.headline{margin:32px 0 24px 0;font-size:18px;font-weight:600}.cta-btn{margin:24px 0 24px 0;display:flex;align-items:center;-moz-column-gap:12px;column-gap:12px;background:var(--wh-primary-700);color:#fff;fill:#fff;border:.5px solid var(--wh-primary-800);padding:12px 32px;cursor:pointer;border-radius:8px;font-size:18px;z-index:2}.cta-btn:hover{background:var(--wh-primary-600)}",""]);const a=s},81511:(t,e,i)=>{var n=i(61400);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=i(38085),e=i(93811),n=i(95665),o=i(27479),r=i(30827),s=i(81511),a=i.n(s),c=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};const p=t.SHARED_COMPONENTS.UpgradeNeeded,l=p.TAG;class h extends r.y{constructor(){super(...arguments),this.components=[t.SHARED_COMPONENTS.PremiumBenefits.TAG,t.SHARED_COMPONENTS.ExpiryInfo.TAG,t.SHARED_COMPONENTS.Icon.TAG,t.SHARED_COMPONENTS.Logo.TAG],this.props={}}get benefitsProps(){return Object.assign(Object.assign({},this.props.benefitsProps),{rotationIntervalMillis:5e3})}firstUpdated(e){t.chromeJwtService.getJwtPayload().then(t=>{this.loggedUser=t})}onCtaClick(){return e=this,i=void 0,r=function*(){"function"==typeof this.props.onCtaClick?this.props.onCtaClick():(yield t.chromeJwtService.isLoggedIn())?window.open((0,t.isWebAppUrl)(location.href)?"/pricing":`${o.c.FRONTEND_URL}/pricing`,(0,t.isWebAppUrl)(location.href)?"_self":"_blank"):t.notifications.dispatch("loginNeeded",{detail:{authType:"signUp"}})},new((n=void 0)||(n=Promise))(function(t,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n(function(t){t(i)})).then(s,a)}c((r=r.apply(e,i||[])).next())});var e,i,n,r}render(){return e.html`<section class="container" part="container">
      ${this.props.showLogo?e.html`
            <header part="header" class="header">
              <webhighlights-logo></webhighlights-logo>
            </header>
          `:e.html``}
      <main part="main" class="main">
        ${this.props.headline?e.html`
              <h2 class="headline" data-testid=${p.TEST_IDS.HEADLINE}>
                ${this.props.headline}
              </h2>
            `:e.html``}
        ${this.props.hideExpiryInfo?e.html``:e.html`
              <webhighlights-expiry-info
                class="expiry-info"
                subInfo="${this.props.subInfo||"Upgrade now to enjoy all features."}"
                .loggedUser=${this.loggedUser}
              ></webhighlights-expiry-info>
            `}
        <webhighlights-premium-benefits
          .props=${this.benefitsProps}
        ></webhighlights-premium-benefits>
        <button
          class="cta-btn"
          part="cta-btn"
          @click=${this.onCtaClick}
          data-testid=${p.TEST_IDS.CTA_BTN}
        >
          <webhighlights-icon icon="rocket" size="16"></webhighlights-icon
          >Upgrade now
        </button>
      </main>
      <footer part="footer" class="footer"></footer>
    </section>`}}h.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,c([(0,n.property)()],h.prototype,"props",void 0),c([(0,n.state)()],h.prototype,"loggedUser",void 0),r.y.define(l,h)})()})();