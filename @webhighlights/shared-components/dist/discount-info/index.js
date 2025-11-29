(()=>{var t={21483:(t,e,n)=>{var r=n(57810);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},30827:(t,e,n)=>{"use strict";n.d(e,{y:()=>i});var r=n(38085),o=n(93811);class i extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,n){(0,r.defineWebHighlightsElement)(t,e,n)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n}).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},57810:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var r=n(36758),o=n.n(r),i=n(40935),a=n.n(i)()(o());a.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family)}.discount-info{justify-content:center;color:var(--wh-text);text-align:center}.discount-info .title{margin-bottom:40px;font-size:24px}.discount-info .discount-info-container{margin-top:110px;margin-bottom:20px;width:100%;display:flex;flex-wrap:wrap;padding:20px 0;justify-content:center;background:linear-gradient(180deg, var(--wh-bg-back-strong) 0%, var(--wh-bg-back-strong) 10%, var(--wh-bg-back-strong) 20%, var(--wh-bg-back-strong) 100%)}.discount-info .discount-info-container article{margin:0 20px;margin-top:20px;border-radius:10px;background:var(--wh-bg-front);transform:translateY(-110px);box-shadow:rgba(50,50,93,.25) 0px 13px 27px -5px,rgba(0,0,0,.3) 0px 8px 16px -8px;width:260px;padding:24px;display:flex;flex-direction:column;justify-content:space-between}.discount-info .discount-info-container article:hover{box-shadow:rgba(0,0,0,.25) 0px 54px 55px,rgba(0,0,0,.12) 0px -12px 30px,rgba(0,0,0,.12) 0px 4px 6px,rgba(0,0,0,.17) 0px 12px 13px,rgba(0,0,0,.09) 0px -3px 5px}.discount-info .discount-info-container article main{flex:1;display:flex;align-items:center;font-size:15px;line-height:1.7;color:var(--wh-text-light)}.discount-info .discount-info-container article footer{margin-top:32px;display:flex;flex-wrap:wrap;justify-content:center}.discount-info .discount-info-container article footer .user-avatar{border-radius:50%;border:2px solid var(--wh-primary-500);margin-bottom:10px}.discount-info .discount-info-container article footer .user-info{width:100%;font-size:13px}@media(min-width: 900px){.discount-info .discount-info-container{border-radius:20px}}",""]);const s=a},93811:t=>{"use strict";t.exports=LitExternal}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=n(93811),e=n(38085),r=n(30827),o=n(21483),i=n.n(o);const a=e.SHARED_COMPONENTS.DiscountInfo.TAG;class s extends r.y{setSrcImg(t){t.target.src=e.FALBACK_AVATAR}render(){return t.html`
      <div class="discount-info row">
        <h3 class="title">Can't afford it?</h3>
        <div class="discount-info-container">
          <article>
            <main>
              I started developing Web Highlights as a student to better
              organize and find things on the internet. I want to make Web
              Highlights accessible to everyone in this world. If the above
              price is not affordable for you, feel free to send me an email.
              <br />
              <br />
              marius@web-highlights.com
            </main>
            <footer>
              <img
                class="user-avatar"
                referrerpolicy="no-referrer"
                width="60px"
                height="60px"
                src="${e.CONSTANTS.AVATAR_MARIUS_B}"
                alt="User avatar - Marius Bongarts"
                @error="${this.setSrcImg}"
              />
              <span class="user-info">
                <b>Marius Bongarts</b><br />
                Creator of Web Highlights
              </span>
            </footer>
          </article>
        </div>
      </div>
    `}}s.styles=t.css`
    ${(0,t.unsafeCSS)(i())}
  `,r.y.define(a,s)})()})();