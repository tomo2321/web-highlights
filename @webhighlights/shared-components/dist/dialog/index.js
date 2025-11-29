(()=>{var i={30827:(i,e,o)=>{"use strict";o.d(e,{y:()=>a});var t=o(38085),r=o(93811);class a extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,t.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(i=>{i.unsubscribe()})}static define(i,e,o){(0,t.defineWebHighlightsElement)(i,e,o)}}},36758:i=>{"use strict";i.exports=function(i){return i[1]}},36861:(i,e,o)=>{var t=o(43298);t&&t.__esModule&&(t=t.default),i.exports="string"==typeof t?t:t.toString()},38085:i=>{"use strict";i.exports=WebHighlightsSharedLibExternal},40935:i=>{"use strict";i.exports=function(i){var e=[];return e.toString=function(){return this.map(function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=i(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(i,o,t,r,a){"string"==typeof i&&(i=[[null,i,void 0]]);var n={};if(t)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(n[d]=!0)}for(var h=0;h<i.length;h++){var s=[].concat(i[h]);t&&n[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),o&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=o):s[2]=o),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},43298:(i,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var t=o(36758),r=o.n(t),a=o(40935),n=o.n(a)()(r());n.push([i.id,':host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{visibility:visible !important}:host{--wh-dialog-header-height: 35px}.dialog-container{overflow:hidden;display:flex;align-items:center;justify-content:center;font-family:var(--wh-font-family);flex-wrap:wrap;box-shadow:var(--wh-shadow);max-width:100vw;max-height:100vh}@media(min-width: 767px){.dialog-container{border:.5px solid var(--wh-border-base);border-radius:8px;max-width:90vw;max-height:90vh}}.dialog-container.auth,.dialog-container.bookmark-details{border:1px solid var(--wh-border-base)}.dialog-container.upgrade-needed{width:900px;background-color:var(--wh-bg-base);color:var(--wh-text);padding:24px 24px 48px;box-sizing:border-box}.dialog-container.product-hunt-prompt,.dialog-container.sign-up-prompt{background-color:#fff;color:var(--wh-secondary-800);padding:0;box-sizing:border-box;overflow:auto}.dialog-container.upgrade-deal-prompt{background-color:var(--wh-bg-back);color:var(--wh-text-light);padding:0;box-sizing:border-box;overflow:auto}.dialog-container.search{background-color:var(--wh-bg-base);color:var(--wh-text);box-sizing:border-box;width:100vw;height:100vh;display:flex;align-items:flex-start;overflow:hidden}@media(min-width: 767px){.dialog-container.search{width:700px;height:580px}}.dialog-container.add-content{background-color:var(--wh-bg-base);color:var(--wh-text);box-sizing:border-box;width:100vw;height:100vh;display:flex;align-items:flex-start;overflow:hidden}@media(min-width: 767px){.dialog-container.add-content{width:700px;height:580px}}@media(min-width: 991px){.dialog-container.add-content{width:800px;height:600px}}.dialog-container.create-bookmark{box-sizing:border-box;width:100vw;height:100vh;display:flex;align-items:flex-start;overflow:hidden}@media(min-width: 767px){.dialog-container.create-bookmark{width:480px;height:580px}}@media(min-width: 991px){.dialog-container.create-bookmark{width:500px;height:600px}}.dialog-container.learning-dashboard{max-width:90vw;height:100vh;max-height:100vh;display:flex;flex-direction:column;flex-wrap:nowrap}@media(min-width: 767px){.dialog-container.learning-dashboard{width:90vw;height:90vh}}@media(min-width: 1199px){.dialog-container.learning-dashboard{width:80vw;height:90vh}}@media(min-width: 1699px){.dialog-container.learning-dashboard{width:70vw;height:90vh}}.dialog-container.spread-the-word-prompt{background-color:#fff;color:var(--wh-secondary-800);padding:0;box-sizing:border-box;overflow:auto;max-width:100vw;width:100vw;height:100vh;max-height:100vh}@media(min-width: 767px){.dialog-container.spread-the-word-prompt{max-width:90vw;max-height:90vh;width:90vw;height:90vh}}@media(min-width: 1199px){.dialog-container.spread-the-word-prompt{width:1000px;height:600px}}.dialog-container.page-content-preview{overflow:auto;width:100vw}@media(min-width: 700px){.dialog-container.page-content-preview{width:700px}}.dialog-container.delete-entity-list{overflow:auto;background-color:var(--wh-bg-base)}@media(min-width: 700px){.dialog-container.delete-entity-list{width:700px}}webhighlights-modal.page-content-preview::part(close-btn){top:8px;right:16px;color:var(--wh-gray-800);background:var(--wh-gray-50)}webhighlights-modal.page-content-preview::part(close-btn):hover{color:var(--wh-gray-900);background:var(--wh-gray-100)}.pricing-dialog{width:100vw;height:100vh;max-height:100vh;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){.pricing-dialog::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.pricing-dialog::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.pricing-dialog::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}@media(min-width: 767px){.pricing-dialog{max-width:90vw;max-height:90vh;width:1020px;height:860px}}.pricing-dialog webhighlights-pricing{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.pricing-dialog webhighlights-pricing::part(plans-container),.pricing-dialog webhighlights-pricing::part(header){background:var(--wh-bg-base)}[dir="ltr"] .pricing-dialog webhighlights-pricing::part(header){border-bottom-right-radius:0}[dir="rtl"] .pricing-dialog webhighlights-pricing::part(header){border-bottom-left-radius:0}[dir="ltr"] .pricing-dialog webhighlights-pricing::part(header){border-bottom-left-radius:0}[dir="rtl"] .pricing-dialog webhighlights-pricing::part(header){border-bottom-right-radius:0}.pricing-dialog webhighlights-pricing::part(header){border-bottom:none}[dir="ltr"] .pricing-dialog webhighlights-pricing::part(plans-container){border-top-right-radius:0}[dir="rtl"] .pricing-dialog webhighlights-pricing::part(plans-container){border-top-left-radius:0}[dir="ltr"] .pricing-dialog webhighlights-pricing::part(plans-container){border-top-left-radius:0}[dir="rtl"] .pricing-dialog webhighlights-pricing::part(plans-container){border-top-right-radius:0}.pricing-dialog webhighlights-pricing::part(plans-container){border-top:none;border-radius:0}.datetimepicker-dialog{width:-moz-max-content;width:max-content}.loading-dialog webhighlights-modal{--backdrop-color: transparent}webhighlights-modal.chrome-rating-prompt::part(modal-container){z-index:1 !important}webhighlights-modal.chrome-rating-prompt::part(close-btn){right:5px;top:50px;color:var(--wh-text)}webhighlights-modal.upgrade-deal-prompt::part(close-btn),webhighlights-modal.product-hunt-prompt::part(close-btn){color:var(--wh-gray-500)}webhighlights-modal.image-viewer::part(close-btn){right:8px;top:8px;background-color:var(--wh-secondary-400);color:var(--wh-gray-200)}webhighlights-modal.image-viewer::part(close-btn):hover{color:#fff;background-color:var(--wh-secondary-200)}.chrome-rating-prompt{width:600px;max-width:100vw;max-height:100vh;overflow:auto}.dialog-container.image-viewer{max-width:100vw;max-height:100vh;border-radius:0}.dialog-header{border-bottom:.5px solid var(--wh-border-base-strong);display:flex;align-items:center;justify-content:space-between;background:var(--wh-bg-base);width:100%;height:var(--wh-dialog-header-height)}.dialog-header .toolbar{display:flex;gap:4px;align-items:center;padding:6px 12px}.dialog-header .toolbar button,.dialog-header .toolbar a{background:none;border:none;color:var(--wh-text);cursor:pointer;border-radius:4px;padding:4px}.dialog-header .toolbar button:hover,.dialog-header .toolbar a:hover{background-color:var(--wh-bg-base-hover-strong)}.bookmark-details-dialog{width:100vw;height:100vh;background:var(--wh-bg-base);display:flex;flex-direction:column;flex-wrap:nowrap;height:calc(100vh - var(--wh-dialog-header-height));box-sizing:content-box;overflow:auto}@media(min-width: 767px){.bookmark-details-dialog{max-height:calc(90vh - var(--wh-dialog-header-height))}}@media(min-width: 991px){.bookmark-details-dialog{max-width:900px}}@media(min-width: 1199px){.bookmark-details-dialog{max-width:1000px}}.notifications-list-dialog{width:100vw;height:100vh}@media(min-width: 767px){.notifications-list-dialog{max-width:520px;max-height:600px}}webhighlights-modal.notifications-list::part(close-btn){right:10px}webhighlights-modal.spread-the-word-prompt::part(close-btn){background-color:rgba(0,0,0,.5);color:#fff}.discover-feed-info{width:100vw;height:100vh}@media(min-width: 767px){.discover-feed-info{max-width:800px;max-height:600px}}.auth-dialog{width:100vw;height:100vh;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){.auth-dialog::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.auth-dialog::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.auth-dialog::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}@media(min-width: 767px){.auth-dialog{width:90vw;height:90vh}}@media(min-width: 1199px){.auth-dialog{width:80vw;height:90vh}}@media(min-width: 1699px){.auth-dialog{width:70vw;height:90vh}}.logo{margin:4px 8px}.logo::part(logo-text){row-gap:0}.logo::part(logo-headline){font-size:13px}.logo::part(logo-subline){font-size:11px;display:none}.logo::part(logo-link){-moz-column-gap:10px;column-gap:10px}.backup-or-sync-prompt{background-color:var(--wh-bg-back);box-sizing:border-box;overflow:auto;width:720px;max-width:100vw;max-height:100vh;overflow:auto}.learning-dashboard-dialog{width:100%;flex:1;background:var(--wh-bg-base);overflow:hidden}.learning-reminder-dialog{max-width:100vw;max-height:100vh;background:var(--wh-bg-base);overflow:auto;color:var(--wh-text)}@media(min-width: 600px){.learning-reminder-dialog::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.learning-reminder-dialog::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.learning-reminder-dialog::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.custom-dialog{width:100vw;height:100vh}@media(min-width: 767px){.custom-dialog{max-width:500px;max-height:70vh}}',""]);const l=n},93811:i=>{"use strict";i.exports=LitExternal},95665:i=>{"use strict";i.exports=LitDecoratorsExternal}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={id:t,exports:{}};return i[t](a,a.exports,o),a.exports}o.n=i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return o.d(e,{a:e}),e},o.d=(i,e)=>{for(var t in e)o.o(e,t)&&!o.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),o.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{"use strict";var i=o(38085),e=o(93811),t=o(95665),r=o(30827),a=o(36861),n=o.n(a),l=function(i,e,o,t){var r,a=arguments.length,n=a<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(i,e,o,t);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(a<3?r(n):a>3?r(e,o,n):r(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n},d=function(i,e,o,t){return new(o||(o=Promise))(function(r,a){function n(i){try{d(t.next(i))}catch(i){a(i)}}function l(i){try{d(t.throw(i))}catch(i){a(i)}}function d(i){var e;i.done?r(i.value):(e=i.value,e instanceof o?e:new o(function(i){i(e)})).then(n,l)}d((t=t.apply(i,e||[])).next())})};const h=i.SHARED_COMPONENTS.Dialog.TAG;class s extends r.y{constructor(){super(...arguments),this.show=!0,this.dialogClosedWasCalled=!1,this.components=[i.SHARED_COMPONENTS.Modal.TAG,i.SHARED_COMPONENTS.Icon.TAG,i.SHARED_COMPONENTS.Logo.TAG]}dialogClosed(i){var e,o;this.dialogClosedWasCalled||(null===(o=null===(e=this.props)||void 0===e?void 0:e.onDialogClosed)||void 0===o||o.call(e,i),this.dialogClosedWasCalled=!0)}dialogConfirmed(i){this.show=!1,this.waitForAnimation(()=>{this.dialogClosed({type:"confirm",payload:null==i?void 0:i.detail})})}dialogCancelled(i){this.show=!1,this.waitForAnimation(()=>{this.dialogClosed({type:"cancel",payload:null==i?void 0:i.detail})})}get renderedComponent(){var o,t,r,a,n,l,d,h,s,g,p,c,b,w,v,m,u,f,x,k,y,O,A,N,C,D,E,S,T;if(!(null===(o=this.props)||void 0===o?void 0:o.dialogName))return e.html``;if(this.props.templateOveride)return e.html`<div class="custom-dialog">
        ${this.props.templateOveride}
      </div>`;switch(this.props.dialogName){case"pricing":const o={httpFacade:null===(t=this.props.options)||void 0===t?void 0:t.httpFacade};return(0,i.lazyDefine)([i.SHARED_COMPONENTS.Pricing.TAG]),e.html`
          <div class="pricing-dialog">
            <webhighlights-pricing
              @priceSelected=${this.dialogConfirmed}
              .props=${o}
            ></webhighlights-pricing>
          </div>
        `;case"loading":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.Loading.TAG]),e.html`
          <div class="loading-dialog">
            <webhighlights-loading></webhighlights-loading>
          </div>
        `;case"datetimepicker":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.DatetimePicker.TAG]),e.html`
          <div class="datetimepicker-dialog">
            <webhighlights-datetimepicker
              @dateTimeSelected=${this.dialogConfirmed}
              @cancelled=${this.dialogCancelled}
            ></webhighlights-datetimepicker>
          </div>
        `;case"bookmark-details":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.BookmarkDetails.TAG]),e.html`
          <article class="bookmark-details-dialog">
            <webhighlights-bookmark-details
              .props=${null===(r=this.props.options)||void 0===r?void 0:r.props}
            ></webhighlights-bookmark-details>
          </article>
        `;case"chrome-rating-prompt":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.ChromeRatingPrompt.TAG]),e.html`
          <div class="chrome-rating-prompt">
            <webhighlights-chrome-rating-prompt
              @cancelled=${this.dialogCancelled}
              @confirmed=${this.dialogConfirmed}
            ></webhighlights-chrome-rating-prompt>
          </div>
        `;case"notifications-list":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.NotificationsList.TAG]),e.html`
          <div class="notifications-list-dialog">
            <webhighlights-notifications-list></webhighlights-notifications-list>
          </div>
        `;case"auth":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.Auth.TAG]),e.html`
          <div class="auth-dialog">
            <webhighlights-auth
              .props=${null!==(n=null===(a=this.props.options)||void 0===a?void 0:a.props)&&void 0!==n?n:{}}
            ></webhighlights-auth>
          </div>
        `;case"upgrade-needed":(0,i.lazyDefine)([i.SHARED_COMPONENTS.UpgradeNeeded.TAG]);const P=Object.assign({},null!==(d=null===(l=this.props.options)||void 0===l?void 0:l.props)&&void 0!==d?d:{});return e.html`
          <webhighlights-upgrade-needed
            .props=${P}
          ></webhighlights-upgrade-needed>
        `;case"settings":(0,i.lazyDefine)([i.SHARED_COMPONENTS.Settings.TAG]);const $=Object.assign({},null!==(s=null===(h=this.props.options)||void 0===h?void 0:h.props)&&void 0!==s?s:{});return e.html`
          <webhighlights-settings
            .props=${$}
          ></webhighlights-settings>
        `;case"search":(0,i.lazyDefine)([i.SHARED_COMPONENTS.Search.TAG]);const _=Object.assign({},null!==(p=null===(g=this.props.options)||void 0===g?void 0:g.props)&&void 0!==p?p:{});return e.html`
          <webhighlights-search .props=${_}></webhighlights-search>
        `;case"image-viewer":return(0,i.lazyDefine)([i.SHARED_COMPONENTS.ImageViewer.TAG]),e.html`
          <webhighlights-image-viewer
            .props=${null===(c=this.props.options)||void 0===c?void 0:c.props}
            @outsideClick=${()=>this.dialogCancelled()}
          ></webhighlights-image-viewer>
        `;case i.DIALOG_NAME["discover-feed-info"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.DiscoverFeedInfo.TAG]),e.html`
          <div class="discover-feed-info">
            <webhighlights-discover-feed-info
              .props=${null===(b=this.props.options)||void 0===b?void 0:b.props}
            ></webhighlights-discover-feed-info>
          </div>
        `;case i.DIALOG_NAME["upgrade-deal-prompt"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.UpgradeDealPrompt.TAG]),e.html`
          <webhighlights-upgrade-deal-prompt
            .props=${null===(w=this.props.options)||void 0===w?void 0:w.props}
            @confirmed=${this.dialogConfirmed}
            @cancelled=${this.dialogCancelled}
            @closed=${this.dialogClosed}
          ></webhighlights-upgrade-deal-prompt>
        `;case i.DIALOG_NAME["sign-up-prompt"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.SignUpPrompt.TAG]),e.html`
          <webhighlights-sign-up-prompt
            .props=${null===(v=this.props.options)||void 0===v?void 0:v.props}
            @confirmed=${this.dialogConfirmed}
            @cancelled=${this.dialogCancelled}
            @closed=${this.dialogClosed}
          ></webhighlights-sign-up-prompt>
        `;case i.DIALOG_NAME["backup-or-sync-prompt"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.BackupOrSyncPrompt.TAG]),e.html`
          <webhighlights-backup-or-sync-prompt
            .props=${null===(m=this.props.options)||void 0===m?void 0:m.props}
          ></webhighlights-backup-or-sync-prompt>
        `;case i.DIALOG_NAME["learning-dashboard"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.LearningDashboard.TAG]),e.html`
          <div class="learning-dashboard-dialog">
            <webhighlights-learning-dashboard
              .props=${null===(u=this.props.options)||void 0===u?void 0:u.props}
            ></webhighlights-learning-dashboard>
          </div>
        `;case i.DIALOG_NAME["learning-reminder"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.LearningReminder.TAG]),e.html`
          <div class="learning-reminder-dialog">
            <webhighlights-learning-reminder
              .props=${null!==(x=null===(f=this.props.options)||void 0===f?void 0:f.props)&&void 0!==x?x:{}}
            ></webhighlights-learning-reminder>
          </div>
        `;case i.DIALOG_NAME["page-content-preview"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.PageContentPreview.TAG]),e.html`
          <webhighlights-page-content-preview
            .props=${null!==(y=null===(k=this.props.options)||void 0===k?void 0:k.props)&&void 0!==y?y:{}}
          ></webhighlights-page-content-preview>
        `;case i.DIALOG_NAME["delete-entity-list"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.DeleteEntityList.TAG]),e.html`
          <webhighlights-delete-entity-list
            .props=${null!==(A=null===(O=this.props.options)||void 0===O?void 0:O.props)&&void 0!==A?A:{}}
          ></webhighlights-delete-entity-list>
        `;case i.DIALOG_NAME["spread-the-word-prompt"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.SpreadTheWordPrompt.TAG]),e.html`
          <webhighlights-spread-the-word-prompt
            .props=${null!==(C=null===(N=this.props.options)||void 0===N?void 0:N.props)&&void 0!==C?C:{}}
          ></webhighlights-spread-the-word-prompt>
        `;case i.DIALOG_NAME["add-content"]:(0,i.lazyDefine)([i.SHARED_COMPONENTS.AddContent.TAG]);const M=Object.assign(Object.assign({},null!==(E=null===(D=this.props.options)||void 0===D?void 0:D.props)&&void 0!==E?E:{}),{defaultType:"text"});return e.html`<webhighlights-add-content
          .props=${M}
        ></webhighlights-add-content> `;case i.DIALOG_NAME["create-bookmark"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.CreateBookmark.TAG]),e.html`<webhighlights-create-bookmark
          .props=${null!==(T=null===(S=this.props.options)||void 0===S?void 0:S.props)&&void 0!==T?T:{}}
        ></webhighlights-create-bookmark> `;case i.DIALOG_NAME["youtube-loading"]:return(0,i.lazyDefine)([i.SHARED_COMPONENTS.YoutubeLoading.TAG]),e.html`<webhighlights-youtube-loading></webhighlights-youtube-loading> `;default:return e.html``}}onOpenPageCallback(e){return d(this,void 0,void 0,function*(){var o,t;e.preventDefault(),(null===(t=null===(o=this.props.options)||void 0===o?void 0:o.headerOptions)||void 0===t?void 0:t.openPageCallback)&&(this.props.options.headerOptions.openPageCallback(),(0,i.closeDialog)())})}checkLoginRequirement(e){return d(this,void 0,void 0,function*(){var o,t;if(null===(t=null===(o=this.props.options)||void 0===o?void 0:o.headerOptions)||void 0===t?void 0:t.openPageUrlRequiresLogin){e.preventDefault();const o=()=>{var i,e;(null===(e=null===(i=this.props.options)||void 0===i?void 0:i.headerOptions)||void 0===e?void 0:e.openPageUrl)&&(location.href=this.props.options.headerOptions.openPageUrl)},t=!!(yield i.chromeJwtService.getJwtPayload());t||i.notifications.dispatch("loginNeeded",{detail:{}}),t&&this.props.options.headerOptions.openPageUrl&&o()}})}get renderHeader(){var o,t;const r=null===(o=this.props.options)||void 0===o?void 0:o.headerOptions;return r?e.html`<header class="dialog-header">
      <div class="toolbar">
        ${r.showLogo?e.html`
              <webhighlights-logo
                .headline=${r.logoHeadline}
                .subline=${r.logoSubline}
                size="16"
                class="logo"
              ></webhighlights-logo>
            `:e.html``}
      </div>
      <div class="toolbar">
        ${r.openPageUrl||r.openPageCallback?e.html`
              <a
                href=${null!==(t=r.openPageUrl)&&void 0!==t?t:""}
                data-testid=${"OPEN_AS_PAGE_BTN"}
                title="Open as page"
                aria-label="Open as page"
                @click=${r.openPageCallback?this.onOpenPageCallback:this.checkLoginRequirement}
              >
                <webhighlights-icon
                  icon=${i.ICON_NAMES["maximize-2"]}
                  size="15"
                ></webhighlights-icon>
              </a>
            `:e.html``}
        ${r.showCloseButton?e.html`
              <button
                title="Close Modal"
                aria-label="Close Modal"
                @click=${this.dialogCancelled}
              >
                <webhighlights-icon
                  icon=${i.ICON_NAMES["delete-x"]}
                  size="15"
                ></webhighlights-icon>
              </button>
            `:e.html``}
      </div>
    </header>`:e.html``}waitForAnimation(e){setTimeout(()=>{e()},i.DIALOG_ANIMATION_DURATION)}render(){var i,o,t,r;return this.props?e.html`
      <webhighlights-modal
        .show=${this.show}
        class=${null===(i=this.props)||void 0===i?void 0:i.dialogName}
        .closable=${null===(o=this.props.options)||void 0===o?void 0:o.closable}
        .hideBackdrop=${this.props.hideBackdrop}
        .position=${this.props.position}
        .closeOnBackdropClick=${null===(t=this.props.closeOnBackdropClick)||void 0===t||t}
        @closed=${()=>this.dialogClosed({type:"close"})}
      >
        <div class="dialog-container ${null===(r=this.props)||void 0===r?void 0:r.dialogName}">
          ${this.renderHeader} ${this.renderedComponent}
        </div>
      </webhighlights-modal>
    `:e.html``}}s.styles=e.css`
    ${(0,e.unsafeCSS)(n())}
  `,l([(0,t.property)()],s.prototype,"show",void 0),l([(0,t.property)()],s.prototype,"dialogClosedWasCalled",void 0),l([(0,t.property)()],s.prototype,"props",void 0),r.y.define(h,s)})()})();