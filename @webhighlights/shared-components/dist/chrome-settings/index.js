(()=>{var t={30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>r});var n=o(38085),i=o(93811);class r extends i.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},35733:(t,e,o)=>{var n=o(54900);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,n,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(s[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);n&&s[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},54900:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var n=o(36758),i=o.n(n),r=o(40935),s=o.n(r)()(i());s.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}.entry-container{width:100%;display:flex;flex-wrap:wrap;border-bottom:1px solid var(--wh-border-base);background:var(--wh-bg-base)}.entry{width:100%;display:flex;background:var(--wh-bg-base);opacity:1;justify-content:space-between;align-items:center;padding:12px 16px;box-sizing:border-box}.entry:hover{opacity:1;background:var(--wh-bg-base-hover)}.entry-header{margin-right:10px}.entry-header .entry-title{color:var(--wh-text-light);font-size:12px;margin:0 0 4px 0}.entry-header .entry-description{color:var(--wh-text-lighter);font-size:11px}.entry-title{display:flex;-moz-column-gap:6px;column-gap:6px}b{font-weight:600}.shortcut-link{text-decoration:none;font-weight:600;font-size:12px;color:var(--wh-primary-color);margin-top:6px;text-decoration:underline}.backup-interval-input{width:52px;margin:0 4px;background:var(--wh-bg-back-strong);border-radius:2px;color:var(--wh-text);border:none}.backup-interval-input:disabled{opacity:.4}',""]);const a=s},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(95665),n=o(35733),i=o.n(n),r=o(38085),s=o(30827),a=function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};r.SHARED_COMPONENTS.ChromeSettings;class h extends s.y{constructor(){super(...arguments),this.chromeSettings=r.fallbackChromeSettings,this.colorsPopupPosition="right",this.throttleInputChange=!1,this.components=[r.SHARED_COMPONENTS.ToggleButton.TAG,r.SHARED_COMPONENTS.ColorPicker.TAG]}goToShortcutSettings(t){(0,r.stopPropagation)(t),(0,r.goToShortcutSettings)()}toggleShowLeftSidebarWidget(t){const e={showLeftSidebarWidget:t};this.dispatchCustomChangeEvent(e)}toggleShowMarker(t){const e={showMarkerPopup:t};this.dispatchCustomChangeEvent(e)}toggleShowToolbox(t){const e={showToolboxAutomatically:t};this.dispatchCustomChangeEvent(e)}dispatchColorChangeEvent(t){const e={defaultHighlightColor:t};this.dispatchCustomChangeEvent(e)}dispatchCustomChangeEvent(t){this.dispatchEvent(new CustomEvent("settingsChanged",{detail:Object.assign(Object.assign({},this.chromeSettings),t)}))}updateColor(t){return e=this,o=arguments,i=function*({color:t,isDefaultChange:e}){this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{defaultHighlightColor:t});const o={defaultHighlightColor:this.chromeSettings.defaultHighlightColor};this.throttleInputChange||(this.throttleInputChange=!0,setTimeout(()=>{this.throttleInputChange=!1,this.dispatchColorChangeEvent(o.defaultHighlightColor),this.dispatchCustomChangeEvent(o)},200))},new((n=void 0)||(n=Promise))(function(t,r){function s(t){try{h(i.next(t))}catch(t){r(t)}}function a(t){try{h(i.throw(t))}catch(t){r(t)}}function h(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n(function(t){t(o)})).then(s,a)}h((i=i.apply(e,o||[])).next())});var e,o,n,i}onPdfHintClick(t){try{chrome.tabs.update({url:t})}catch(t){}}render(){var e,o,n;return t.html`
      <section class="entry-container" part="container">
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Show toolbox automatically</h3>
            <span class="entry-description">
              If enabled, a popup appears automatically to enter tags and notes
              when creating highlights.</span
            >
          </div>
          <webhighlights-toggle-button
            .isEnabled=${null===(e=this.chromeSettings)||void 0===e?void 0:e.showToolboxAutomatically}
            inputId="showToolboxAutomatically"
            @changed="${t=>this.toggleShowToolbox(t.detail)}"
          ></webhighlights-toggle-button>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Show sidebar widget</h3>
            <span class="entry-description">
              If enabled, a widget to open the sidebar is shown on the left
              border of the screen.</span
            >
          </div>
          <webhighlights-toggle-button
            .isEnabled=${null===(o=this.chromeSettings)||void 0===o?void 0:o.showLeftSidebarWidget}
            inputId="showLeftSidebarWidget"
            @changed="${t=>this.toggleShowLeftSidebarWidget(t.detail)}"
          ></webhighlights-toggle-button>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Default highlight color</h3>
            <span class="entry-description">
              Change the default highlight color. You can also modify each
              highlight's color in the popup.</span
            >
          </div>
          <!-- Edit color -->
          <webhighlights-color-picker
            @changeColor="${t=>this.updateColor(t.detail)}"
            .highlightColor=${this.chromeSettings.defaultHighlightColor}
            .defaultHighlightColor=${this.chromeSettings.defaultHighlightColor}
            .recentColors=${null!==(n=this.chromeSettings.recentColors)&&void 0!==n?n:[]}
            .httpFacade=${this.httpFacade}
            .chromeSettings=${this.chromeSettings}
            .showMakeDefaultButton=${!1}
            .popupPosition=${this.colorsPopupPosition}
          ></webhighlights-color-picker>
        </div>
      </section>
    `}}h.styles=t.css`
    ${(0,t.unsafeCSS)(i())}
  `,a([(0,e.property)()],h.prototype,"chromeSettings",void 0),a([(0,e.property)()],h.prototype,"httpFacade",void 0),a([(0,e.property)()],h.prototype,"colorsPopupPosition",void 0),s.y.define("webhighlights-chrome-settings",h)})()})();