(()=>{var t={27316:(t,e,o)=>{var n=o(35665);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>r});var n=o(38085),a=o(93811);class r extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},35665:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var n=o(36758),a=o.n(n),r=o(40935),i=o.n(r)()(a());i.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{font-family:var(--wh-font-family);position:relative;color:var(--wh-text-light)}.chrome-rating-prompt-container{padding:24px 16px;padding-bottom:0}.main{display:block;text-align:center;line-height:1.5}.cta-container{width:100%;height:200px;text-align:center;display:flex;justify-content:center;padding:24px 0;gap:16px}.side-by-side-button{flex:1;height:100%;border-radius:4px;border:none;box-shadow:var(--wh-shadow);color:var(--wh-text-light);background:var(--wh-bg-base);cursor:pointer}.side-by-side-button:hover{background:var(--wh-bg-base-hover);color:var(--wh-text)}.side-by-side-button .cta-btn-content{display:flex;justify-content:center;width:100%;flex-wrap:wrap;row-gap:8px}.side-by-side-button .cta-btn-content .cta-btn-label{width:100%}.title{font-size:28px;margin:0;padding-bottom:8px}.sub-title{max-width:500px;margin:auto}.cta-btn{border-radius:16px;background:var(--wh-primary-700);font-size:18px;box-shadow:var(--wh-shadow-strong);cursor:pointer;padding:15px 30px;font-weight:500;border:none;text-decoration:none;z-index:2}.cta-btn:hover{background:var(--wh-primary-600)}footer{padding-top:12px;padding-bottom:24px;color:var(--wh-text)}footer .dismiss-checkbox-container{display:flex;align-items:center;-moz-column-gap:6px;column-gap:6px;margin-top:12px}footer .dismiss-checkbox-container .dismiss-checkbox-input{margin:0}footer .dismiss-checkbox-container .dismiss-checkbox-container-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;color:var(--wh-text-lighter)}footer .dismiss-checkbox-container{font-size:12px;color:var(--wh-text-lightest)}footer .backup-info-text{color:var(--wh-text-lightest);font-size:10.5px;max-width:400px;display:inline-block;line-height:1.15}.backup-interval-input{width:52px;margin:0 4px;border:none;background:var(--wh-bg-back-strong);border-radius:2px;color:var(--wh-text)}.backup-interval-input:disabled{opacity:.4}",""]);const s=i},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,n,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);n&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),n=o(95665),a=o(30827),r=o(27316),i=o.n(r),s=function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},c=function(t,e,o,n){return new(o||(o=Promise))(function(a,r){function i(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(i,s)}c((n=n.apply(t,e||[])).next())})};const d=t.SHARED_COMPONENTS.BackupOrSyncPrompt,l="download-anchor-element";class p extends a.y{constructor(){super(...arguments),this.backupLoading=!1,this.chromeSettings=t.fallbackChromeSettings,this.components=[t.SHARED_COMPONENTS.Icon.TAG,t.SHARED_COMPONENTS.Loading.TAG]}firstUpdated(){var e;null===(e=(0,t.useContextWithCatch)())||void 0===e||e.db.getChromeSettings().then(t=>this.chromeSettings=t)}onSyncCtaClick(e){return c(this,void 0,void 0,function*(){e.preventDefault(),(yield t.chromeJwtService.getJwtPayload())?(0,t.navigateExternal)("https://bit.ly/3WcNuRD",!0):t.notifications.dispatch("loginNeeded",{detail:{authType:"signUp"}})})}onBackupCtaClick(){return c(this,void 0,void 0,function*(){this.backupLoading=!0;const e=this.downloadAnchorElement;yield(0,t.downloadBackupFile)(null!=e?e:null),this.backupLoading=!1})}onDismissChanged(e){return c(this,void 0,void 0,function*(){const o=e.target.checked;if("boolean"==typeof o){const e=!o;yield(0,t.updateChromeSettings)({showBackupDialogPrompt:e}),this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{showBackupDialogPrompt:e})}else console.error(`Something went wrong because of unallowed checked value: ${o}`)})}onBackupIntervalChange(e){return c(this,void 0,void 0,function*(){const o=+e.target.value;"number"!=typeof o||Number.isNaN(o)||(yield(0,t.updateChromeSettings)({backupDialogPromptInterval:o}),this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{backupDialogPromptInterval:o}))})}render(){return e.html`
      <div class="chrome-rating-prompt-container">
        <div id="${l}"></div>
        <main class="main">
          <h1 class="title">Backup Your Data 💾</h1>
          <p class="sub-title">
            You've done a lot of work. Make sure it's saved to prevent any loss!
          </p>
          <section class="cta-container">
            <button
              title="Start syncing your data"
              target="_blank"
              class="side-by-side-button"
              data-testid=${d.TEST_IDS.CTA_SYNC}
              @click=${this.onSyncCtaClick}
            >
              <div class="cta-btn-content">
                <webhighlights-icon
                  size="28"
                  class="cta-btn-icon"
                  icon="${t.ICON_NAMES.cloud}"
                ></webhighlights-icon>
                <span class="cta-btn-label">Enable Cloud Sync</span>
              </div>
            </button>
            <button
              title="Create local backup file"
              target="_blank"
              class="side-by-side-button"
              data-testid=${d.TEST_IDS.CTA_BACKUP}
              @click=${this.onBackupCtaClick}
            >
              <div class="cta-btn-content">
                ${this.backupLoading?e.html` <webhighlights-loading
                      class="cta-btn-icon"
                    ></webhighlights-loading>`:e.html`
                      <webhighlights-icon
                        size="32"
                        class="cta-btn-icon"
                        strokeWidth="1.5"
                        icon="${t.ICON_NAMES.save}"
                      ></webhighlights-icon>
                    `}
                <span class="cta-btn-label">Download Backup File</span>
              </div>
            </button>
          </section>
        </main>
        <footer>
          <div class="backup-info-text-container">
            <span class="backup-info-text"
              >This dialog appears for every
              <input
                type="number"
                class="backup-interval-input"
                data-testid=${d.TEST_IDS.BACKUP_INTERVAL_INPUT}
                @change=${this.onBackupIntervalChange}
                ?disabled=${!this.chromeSettings.showBackupDialogPrompt}
                value=${this.chromeSettings.backupDialogPromptInterval}
              />
              unsynced change to remind you to back up your data regularly. The
              safest method is to enable cloud sync, which stores your data in
              the cloud.</span
            >
          </div>
          <div class="dismiss-checkbox-container">
            <input
              class="dismiss-checkbox-input"
              id="dismiss-checkbox-input"
              type="checkbox"
              data-testid=${d.TEST_IDS.DISMISS_CHECKBOX_INPUT}
              ?checked=${!this.chromeSettings.showBackupDialogPrompt}
              @change=${this.onDismissChanged}
            />
            <label
              for="dismiss-checkbox-input"
              class="dismiss-checkbox-container-label"
              >Don't show this again</label
            >
          </div>
        </footer>
      </div>
    `}}p.styles=e.css`
    ${(0,e.unsafeCSS)(i())}
  `,s([(0,n.query)(`#${l}`)],p.prototype,"downloadAnchorElement",void 0),s([(0,n.property)({type:Object})],p.prototype,"props",void 0),s([(0,n.state)()],p.prototype,"backupLoading",void 0),s([(0,n.state)()],p.prototype,"chromeSettings",void 0),a.y.define("webhighlights-backup-or-sync-prompt",p)})()})();