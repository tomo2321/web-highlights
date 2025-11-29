(()=>{var t={27148:(t,e,n)=>{var r=n(92633);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},30827:(t,e,n)=>{"use strict";n.d(e,{y:()=>i});var r=n(38085),s=n(93811);class i extends s.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,n){(0,r.defineWebHighlightsElement)(t,e,n)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n}).join("")},e.i=function(t,n,r,s,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},92633:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var r=n(36758),s=n.n(r),i=n(40935),a=n.n(i)()(s());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{--color: black}[dir="ltr"] #content{text-align:left}[dir="rtl"] #content{text-align:right}#content{color:var(--color)}',""]);const o=a},93811:t=>{"use strict";t.exports=LitExternal}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=n(93811),e=n(38085),r=n(30827),s=n(27148),i=n.n(s);const a=e.SHARED_COMPONENTS.Imprint.TAG;class o extends r.y{render(){return t.html`
      <div id="content" class="site-content">
        <div class="ast-container">
          <div id="primary" class="content-area primary">
            <main id="main" class="site-main">
              <h2 class="terms-overall-header">Imprint</h2>
              <p>
                According to § 5 TMG
                <br />
                <br />
                Marius Bongarts <br />
                Web & App Entwicklung <br />
                Sentmaringer Weg 87 <br />
                48151 Muenster
              </p>

              <h3 class="terms-section-title">Represented by:</h3>
              <p>Marius Bongarts</p>

              <h3 class="terms-section-title">Tax number:</h3>
              <p>337/5027/4267</p>

              <h3 class="terms-section-title">Contact:</h3>
              <p>
                E-Mail: marius@web-highlights.com
                <br />
                Website:
                <a href="https://marius-bongarts.de/">marius-bongarts.de</a>
              </p>

              <h3 class="terms-section-title">VAT Tax ID:</h3>
              <p>
                Sales tax identification number according to §27a sales tax law:
                <br />
                As a small business owner within the meaning of Section 19 (1)
                of the Sales Tax Act (UStG), no sales tax is charged.
              </p>
            </main>

            <!-- #main -->
          </div>
          <!-- #primary -->
        </div>
        <!-- ast-container -->
      </div>
    `}}o.styles=t.css`
    ${(0,t.unsafeCSS)(i())}
  `,r.y.define(a,o)})()})();