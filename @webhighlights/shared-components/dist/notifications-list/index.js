(()=>{var t={4942:(t,i,e)=>{var o=e(83557);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},7183:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>s});var o=e(36758),n=e.n(o),r=e(40935),a=e.n(r)()(n());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:flex;-moz-column-gap:12px;column-gap:12px;width:100%;color:var(--wh-text-light)}.avatar{border-radius:50%;width:32px;height:32px;border:none}.avatar.no-border-radius{border-radius:0}.notification-content{display:block;width:100%}.notification-content-header{display:flex;width:100%;justify-content:space-between;margin-bottom:6px;-moz-column-gap:4px;column-gap:4px}.notification-content-header .title{font-size:16px;font-weight:500;margin:0;display:block}.notification-content-header .date{font-size:11.5px;color:var(--wh-text-lightest);white-space:nowrap}.notification-content-main .description{font-size:12px;color:var(--wh-text-lighter);display:block;line-height:1.5}.link-wrapper{color:inherit;text-decoration:none}.cta-link{font-size:12px;color:var(--wh-primary-500);text-decoration:none;display:block;font-weight:500;margin-top:12px}.cta-link:hover{text-decoration:underline}.icon-link{color:var(--wh-text-strongest);padding:8px;border-radius:50%;display:inline-block;margin-right:4px;border:.1px solid rgba(0,0,0,0);margin-top:4px}.icon-link:hover{border:.1px solid var(--wh-border-base-strong)}.link-preview{margin-top:12px;width:100%;height:auto;height:initial;border-radius:8px;border:.1px solid var(--wh-border-base-strong);background-color:none}.link-preview:hover{background-color:var(--wh-bg-base-hover)}.link-preview:hover::part(image){--wh-fallback-img-color: var(--wh-bg-base-hover)}.link-preview::part(info-container){order:1}.link-preview::part(header){font-size:12px;color:var(--wh-text-light)}.link-preview::part(description){font-size:10px;color:var(--wh-text-lightest);display:inline-block;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px}.link-preview::part(image){flex:0 0 100px;order:2;--wh-fallback-img-color: transparent}',""]);const s=a},24972:(t,i,e)=>{var o=e(7183);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},30827:(t,i,e)=>{"use strict";e.d(i,{y:()=>r});var o=e(38085),n=e(93811);class r extends n.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,i,e){(0,o.defineWebHighlightsElement)(t,i,e)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var i=[];return i.toString=function(){return this.map(function(i){var e="",o=void 0!==i[5];return i[4]&&(e+="@supports (".concat(i[4],") {")),i[2]&&(e+="@media ".concat(i[2]," {")),o&&(e+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),e+=t(i),o&&(e+="}"),i[2]&&(e+="}"),i[4]&&(e+="}"),e}).join("")},i.i=function(t,e,o,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),i.push(d))}},i}},83557:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>s});var o=e(36758),n=e.n(o),r=e(40935),a=e.n(r)()(n());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family)}.notifications-list-container{padding:24px;border-radius:8px;background:var(--wh-bg-base);color:var(--wh-text-light);box-shadow:var(--wh-shadow);width:100%;height:100%;overflow:auto;box-sizing:border-box}@media(min-width: 600px){.notifications-list-container::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.notifications-list-container::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.notifications-list-container::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.notifications-list-header{display:flex;align-items:center;justify-content:space-between}.notifications-list-header .follow-us-container{display:flex;align-items:center;gap:12px}.notifications-list-header .follow-us-container a{text-decoration:none;color:var(--wh-text-light)}.notifications-list-header .follow-us-container a:hover{color:var(--wh-text-strongest)}.notifications-list-header-title{font-size:24px;font-weight:500;margin-bottom:14px;margin-top:12px;display:block}.notification-list-item{display:flex;justify-content:space-between;padding:16px 16px;border-bottom:.1px solid var(--wh-border-base-strong);overflow:auto;cursor:pointer;transition:.2s background-color ease-in-out}.notification-list-item:hover{background-color:var(--wh-bg-base-hover)}.notification-list-item.unread{background-color:var(--wh-bg-notification-unread)}.notification-list-item.unread:hover{background-color:var(--wh-bg-notification-unread-hover)}',""]);const s=a},86547:(t,i,e)=>{"use strict";var o=e(93811),n=e(95665),r=e(38085),a=e(30827),s=e(24972),l=e.n(s);const c=r.SHARED_COMPONENTS_INTERNAL.NotificationsListItem,d=c.TAG;class p extends a.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.LinkPreview.TAG]}onLinkClick(t){(0,r.stopPropagation)(t)}onNotificationContainerClick(){"function"==typeof this.props.ctaAction&&this.props.ctaAction()}render(){var t,i;return o.html`
      <img
        src="${this.props.avatar.src}"
        loading="lazy"
        alt="${this.props.avatar.alt}"
        class="avatar ${null!==(t=this.props.avatar.cssClass)&&void 0!==t?t:""}"
      />
      <div
        class="notification-content"
        @click=${this.onNotificationContainerClick}
      >
        <header class="notification-content-header">
          <span class="title" data-testid="${c.TEST_IDS.TITLE}"
            >${this.props.title}</span
          >
          <span class="date"
            >${(0,r.toDateTimeStringShort)(new Date(this.props.createdAt).toDateString(),{hideHoursAndMinutes:!0})}</span
          >
        </header>
        <main class="notification-content-main">
          <div class="description">
            ${"string"==typeof this.props.description?o.html`<span>${this.props.description}</span>`:this.props.description}
          </div>
        </main>
        <footer class="notification-content-footer">
          ${this.props.linkPreviewProps?o.html`<a
                href="${this.props.linkPreviewProps.url}"
                title="Visit article"
                @click=${this.onLinkClick}
                target="_blank"
                aria-label="Visit article"
                class="link-wrapper"
                ><webhighlights-link-preview
                  class="link-preview"
                  .props=${this.props.linkPreviewProps}
                ></webhighlights-link-preview
              ></a>`:o.html``}
          <section>
            ${null===(i=this.props.ctaLinks)||void 0===i?void 0:i.map(t=>{var i,e,n;return o.html`<a
                  href="${t.url}"
                  @click=${i=>{this.onLinkClick(i),"function"==typeof t.onLinkClick&&(i.preventDefault(),t.onLinkClick())}}
                  target="${null!==(i=t.target)&&void 0!==i?i:"_blank"}"
                  data-testid="${c.TEST_IDS.CTA_LINK}"
                  title="${null!==(e=t.title)&&void 0!==e?e:"Visit link"}"
                  class="cta-link ${null!==(n=t.cssClasses)&&void 0!==n?n:""}"
                  >${t.text}</a
                >`})}
          </section>
        </footer>
      </div>
    `}}p.styles=[o.css`
      ${(0,o.unsafeCSS)(l())}
    `],function(t,i,e,o){var n,r=arguments.length,a=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(i,e,a):n(i,e))||a);r>3&&a&&Object.defineProperty(i,e,a)}([(0,n.property)()],p.prototype,"props",void 0),a.y.define(d,p)},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},i={};function e(o){var n=i[o];if(void 0!==n)return n.exports;var r=i[o]={id:o,exports:{}};return t[o](r,r.exports,e),r.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=e(93811),i=e(95665),o=e(38085),n=(e(86547),e(30827)),r=e(4942),a=e.n(r),s=function(t,i,e,o){var n,r=arguments.length,a=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(i,e,a):n(i,e))||a);return r>3&&a&&Object.defineProperty(i,e,a),a};const l=o.SHARED_COMPONENTS.NotificationsList.TAG;class c extends n.y{constructor(){super(...arguments),this.notifications=[],this.components=[o.SHARED_COMPONENTS.Icon.TAG]}firstUpdated(t){this.readNotifications(),(0,o.updateChromeSettings)({notificationsLastOpenedAt:Date.now()})}readNotifications(){return i=this,e=void 0,r=function*(){this.notifications=yield(0,o.resolveNotificationItems)({html:t.html})},new((n=void 0)||(n=Promise))(function(t,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(i){var e;i.done?t(i.value):(e=i.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}l((r=r.apply(i,e||[])).next())});var i,e,n,r}render(){return t.html`
      <div class="notifications-list-container">
        <header class="notifications-list-header">
          <h2 class="notifications-list-header-title">Notifications</h2>
          <div class="follow-us-container">
            <a href="${o.CONSTANTS.LINKED_IN_URL}" title="Follow us on Twitter">
              <webhighlights-icon
                icon="${o.ICON_NAMES.twitter}"
                size="20"
                strokeWidth="1.5"
              ></webhighlights-icon>
            </a>
            <a href="${o.CONSTANTS.LINKED_IN_URL}" title="Follow us on LinkedIn">
              <webhighlights-icon
                icon="${o.ICON_NAMES.linkedin}"
                size="20"
                strokeWidth="1.5"
              ></webhighlights-icon>
            </a>
          </div>
        </header>
        <main>
          <div class="notifications-list">
            ${this.notifications.map(i=>t.html`
                <div
                  class="notification-list-item ${i.read?"read":"unread"}"
                >
                  <webhighlights-notifications-list-item
                    .props=${i}
                  ></webhighlights-notifications-list-item>
                </div>
              `)}
          </div>
        </main>
      </div>
    `}}c.styles=[t.css`
      ${(0,t.unsafeCSS)(a())}
    `],s([(0,i.property)()],c.prototype,"props",void 0),s([(0,i.state)()],c.prototype,"notifications",void 0),n.y.define(l,c)})()})();