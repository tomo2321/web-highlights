(()=>{var e={30827:(e,r,o)=>{"use strict";o.d(r,{y:()=>n});var t=o(38085),a=o(93811);class n extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,t.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,r,o){(0,t.defineWebHighlightsElement)(e,r,o)}}},35612:(e,r,o)=>{var t=o(98863);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var o="",t=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),t&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=e(r),t&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o}).join("")},r.i=function(e,o,t,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);t&&i[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal},98863:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>s});var t=o(36758),a=o.n(t),n=o(40935),i=o.n(n)()(a());i.push([e.id,':host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;line-height:24px}.avatar{border-radius:50%;border:2.5px solid var(--wh-primary-600)}.avatar-with-name{display:flex;-moz-column-gap:8px;column-gap:8px;align-items:flex-end}.avatar-with-name p{margin:0}.normal-link{color:var(--link-color);text-decoration:none}.normal-link:hover{text-decoration:underline}.chrome-web-store-link{font-weight:700;color:var(--wh-primary-color)}.chrome-rating-prompt-container{color:var(--wh-gray-700);padding:2rem;max-width:90vw;background-color:#fff;display:flex;justify-content:center;flex-wrap:wrap;row-gap:16px}.chrome-rating-prompt-container header{display:flex;justify-content:center;flex-wrap:wrap}footer button{margin:0 10px}',""]);const s=i}},r={};function o(t){var a=r[t];if(void 0!==a)return a.exports;var n=r[t]={id:t,exports:{}};return e[t](n,n.exports,o),n.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=o(38085),r=o(93811),t=o(95665),a=o(30827),n=o(35612),i=o.n(n);const s=e.SHARED_COMPONENTS.ChromeRatingPrompt,l=s.TAG;class c extends a.y{constructor(){super(...arguments),this.components=[e.SHARED_COMPONENTS.LogoAnimated.TAG]}onCancel(){this.dispatchEvent(new CustomEvent("cancelled"))}onConfirmed(){this.dispatchEvent(new CustomEvent("confirmed"))}onChromeStoreLinkClicked(e){e.preventDefault(),this.onConfirmed()}render(){var o,t;return r.html`
      <div class="chrome-rating-prompt-container">
        <header>
          <webhighlights-logo-animated
            .light=${!0}
          ></webhighlights-logo-animated>
        </header>
        <main>
          <span>
            <div class="avatar-with-name">
              <p>
                Hey there 👋 <b class="font-semibold">Marius</b> here from Web
                Highlights
              </p>
              <img
                src="https://avatars.githubusercontent.com/u/38838885?v=4"
                loading="lazy"
                width="52"
                height="52"
                alt="Marius Bongarts from Web Highlights"
                class="avatar"
              />
            </div>

            <br />
            I'm glad you seem to like Web Highlight. I'm truly happy and
            grateful to see that more and more users are finding value in a tool
            that was initially a personal project, helping me organize articles
            on the web.
            <br />
            <br />
            If you have a spare moment, I'd be thrilled if you could
            <a
              href=${null!==(t=null===(o=(0,e.useContextWithCatch)())||void 0===o?void 0:o.appConfig.storePublishUrl)&&void 0!==t?t:"https://chromewebstore.google.com/detail/web-highlights-pdf-web-hi/hldjnlbobkdkghfidgoecgmklcemanhm"}
              @click=${this.onChromeStoreLinkClicked}
              data-testid=${s.TEST_IDS.CHROME_STORE_LINK}
              target="_blank"
              class="chrome-web-store-link"
              >leave a nice review on the Chrome Web Store</a
            >. Your feedback and support help me dedicate more time to improving
            the app for all of you.
            <br />
            <br />

            Remember, I'm always here to listen to your thoughts and
            suggestions. Don't hesitate to leave me a message on
            <a
              class="normal-link"
              target="_blank"
              rel="me"
              href="https://twitter.com/MariusBongarts"
              >Twitter</a
            >
            or
            <a
              class="normal-link"
              target="_blank"
              rel="me"
              href="https://www.linkedin.com/in/marius-bongarts-6b3638171/"
              >LinkedIn</a
            >. You can also fill out
            <a
              class="normal-link"
              target="_blank"
              rel="nofollow"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwd4lCfSWjCxp6XkbhDmgsVssiQIx_EQKQ_MPbhES3MPgLnA/viewform?usp=sf_link"
              >this form</a
            >
            to request new featuress.

            <br />
            <br />
            Thanks a lot for taking the time! 🙏
            <br />
            <br />
          </span>
        </main>
        <footer>
          <button
            class="secondary-btn"
            @click=${this.onCancel}
            data-testid=${s.TEST_IDS.DECLINE_BTN}
          >
            No, I Don't Want To 😔
          </button>
          <button
            class="primary-btn"
            @click=${this.onConfirmed}
            data-testid=${s.TEST_IDS.CONFIRM_BTN}
          >
            Yes, I Will Support And Give Feedback 🙂
          </button>
        </footer>
      </div>
    `}}c.styles=r.css`
    ${(0,r.unsafeCSS)(i())}
  `,function(e,r,o,t){var a,n=arguments.length,i=n<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(r,o,i):a(r,o))||i);n>3&&i&&Object.defineProperty(r,o,i)}([(0,t.property)()],c.prototype,"paymentInformation",void 0),a.y.define(l,c)})()})();