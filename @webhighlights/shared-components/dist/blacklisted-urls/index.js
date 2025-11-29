(()=>{var t={30827:(t,e,r)=>{"use strict";r.d(e,{y:()=>n});var o=r(38085),i=r(93811);class n extends i.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,r){(0,o.defineWebHighlightsElement)(t,e,r)}}},36633:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var o=r(36758),i=r.n(o),n=r(40935),s=r.n(n)()(i());s.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.blacklist{padding:0;margin:0;list-style:none}.control-btn{width:24px;height:24px;padding:4px;margin-left:8px;display:flex}.control-btn .icon{width:100%;height:100%}.control-btn.delete-btn{background:none;box-shadow:none;color:var(--wh-text);transform:scale(1.5)}li{display:flex;align-items:center;margin:8px 0px}li:first-child{margin:0 0 16px 0}.blacklist-url-input{flex-grow:1;margin-right:4px;padding:12px 20px;display:inline-block;border:1px solid var(--wh-border-color);background-color:var(--wh-bg-base);color:var(--wh-text);border-radius:4px;box-sizing:border-box;outline:none}.blacklist-url-input:hover{background-color:var(--wh-bg-base-hover)}",""]);const a=s},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r}).join("")},e.i=function(t,r,o,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&s[c[0]]||(void 0!==n&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=n),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},47274:(t,e,r)=>{var o=r(36633);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={id:o,exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=r(38085),e=r(93811),o=r(95665),i=r(30827),n=r(47274),s=r.n(n),a=function(t,e,r,o){var i,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,r,s):i(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};const l=t.SHARED_COMPONENTS.BlacklistesUrls;class d extends i.y{constructor(){super(...arguments),this.chromeSettings=t.fallbackChromeSettings,this.deleteOnly=!1,this.throttleInputChange=!1}get showAddInput(){return!this.deleteOnly}updateSettings(t){this.dispatchChangeEvent(t)}dispatchChangeEvent(t){this.dispatchEvent(new CustomEvent("blacklistChanged",{bubbles:!0,detail:t}))}addNewUrlToBlacklist(){const t=this.newUrlInput.value;t&&(this.refreshPageIfNeeded(t),this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{blacklistedUrls:[...new Set([...this.chromeSettings.blacklistedUrls,t])]}),this.updateSettings({blacklistedUrls:this.chromeSettings.blacklistedUrls}),this.newUrlInput.value="")}onUpdateUrl(t,e){this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{blacklistedUrls:[...this.chromeSettings.blacklistedUrls.slice(0,+e),t,...this.chromeSettings.blacklistedUrls.slice(+e+1)]}),this.throttleInputChange||(this.throttleInputChange=!0,setTimeout(()=>{this.throttleInputChange=!1,this.updateSettings({blacklistedUrls:this.chromeSettings.blacklistedUrls})},1e3))}refreshPageIfNeeded(e){!(0,t.isWebAppUrl)(location.href)&&e&&(0,t.urlIsBlacklisted)(location.href,[e])&&setTimeout(()=>location.reload(),500)}onDeleteUrl(t){this.refreshPageIfNeeded(this.chromeSettings.blacklistedUrls[t]),this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{blacklistedUrls:[...this.chromeSettings.blacklistedUrls.slice(0,+t),...this.chromeSettings.blacklistedUrls.slice(+t+1)]}),this.updateSettings({blacklistedUrls:this.chromeSettings.blacklistedUrls})}render(){return e.html`
      <ul class="blacklist">
        ${this.showAddInput?e.html`
              <li>
                <input
                  class="blacklist-url-input"
                  data-testid=${l.TEST_IDS.ADD_URL_INPUT}
                  @keyup=${t=>"Enter"===t.key&&this.addNewUrlToBlacklist()}
                  id="new-url-input"
                  placeholder="e.g. notion.so/*, linkedin.com/mynetwork/*, medium.com/new-story"
                />
                <button
                  aria-label="Add URL to blacklist"
                  data-testid=${l.TEST_IDS.ADD_URL_BTN}
                  class="primary-btn control-btn"
                  @click=${this.addNewUrlToBlacklist}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </li>
            `:e.html``}
        ${this.chromeSettings.blacklistedUrls.map((t,r)=>this.displayFilter&&!this.displayFilter(t)?e.html``:e.html`
            <li data-testid=${l.TEST_IDS.LIST_ENTRY(r)}>
              <input
                data-testid=${l.TEST_IDS.INPUT_VALUE(r)}
                class="blacklist-url-input"
                ?disabled=${this.deleteOnly}
                .defaultValue=${t}
                @keyup=${t=>{var e,o;return this.onUpdateUrl(null!==(o=null===(e=t.target)||void 0===e?void 0:e.value)&&void 0!==o?o:"",r)}}
              />
              <button
                class="primary-btn control-btn delete-btn"
                data-testid=${l.TEST_IDS.DELETE_BTN(r)}
                aria-label="Delete URL from blacklist"
                @click=${()=>this.onDeleteUrl(r)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </li>
          `)}
      </ul>
    `}}d.styles=e.css`
    ${(0,e.unsafeCSS)(s())}
  `,a([(0,o.query)("#new-url-input")],d.prototype,"newUrlInput",void 0),a([(0,o.property)({type:Object})],d.prototype,"chromeSettings",void 0),a([(0,o.property)({type:Object})],d.prototype,"httpFacade",void 0),a([(0,o.property)({type:Boolean})],d.prototype,"deleteOnly",void 0),a([(0,o.property)()],d.prototype,"displayFilter",void 0),i.y.define("webhighlights-blacklisted-urls",d)})()})();