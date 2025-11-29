(()=>{var t={30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>a});var n=o(38085),r=o(93811);class a extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},36239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>d});var n=o(36758),r=o.n(n),a=o(40935),i=o.n(a)()(r());i.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{max-width:100%;color:var(--wh-text-light);font-family:var(--wh-font-family);display:flex;flex-direction:column;height:100%;width:100%;padding:16px 4px;gap:8px}@media(min-width: 768px){:host{padding:24px;gap:16px}}.add-content-header-label{font-size:16px;font-weight:500;color:var(--wh-text);letter-spacing:.01em;text-transform:none;padding-left:2px}.add-content-box{background:var(--wh-gray-100);color:var(--wh-secondary-800);font-family:var(--wh-font-family);font-size:14px;line-height:1.5;border:1px solid #444851;border:1px solid var(--wh-border-base, #444851);border-radius:4px;padding:8px;width:100%;min-height:120px;max-height:100%;overflow:auto;margin-bottom:8px;box-sizing:border-box;flex:1 1 0;position:relative}.add-url-box{font-family:var(--wh-font-family);font-size:14px;line-height:1.5;border-radius:4px;width:100%;min-height:120px;max-height:100%;overflow:auto;box-sizing:border-box;flex:1 1 0;position:relative;display:flex;flex-direction:column}.add-url-box .add-content-url-preview{overflow:hidden;height:100%;flex:1}.add-content-placeholder-text{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.add-content-placeholder-text h2{font-size:16px;font-weight:600;margin:0 0 2px 0;color:var(--wh-text-lightest)}.add-content-placeholder-text p{font-size:13px;color:var(--wh-gray-500);margin:0}.add-content-editable-placeholder{position:absolute;top:8px;left:8px;color:var(--wh-gray-500);font-size:14px;line-height:1.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}.add-content-box [contenteditable=true]{background:rgba(0,0,0,0);border:none;padding:0;margin:0;outline:none;min-height:120px;width:100%;font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;box-sizing:border-box}.add-content-btn{width:100%;font-size:17px;padding:14px 0;border-radius:6px;margin-top:8px}@media(min-width: 768px){.add-content-btn{width:240px;font-size:16px;padding:12px 0}}.add-content-footer{display:flex;justify-content:flex-end;align-items:center;width:100%;gap:12px;flex-direction:column}@media(min-width: 768px){.add-content-footer{flex-direction:row}}.add-content-footer button{width:100%;border-radius:999px;padding:12px 24px;font-size:16px;font-weight:500;cursor:pointer;transition:background-color .2s}@media(min-width: 768px){.add-content-footer button{width:auto;padding:12px 24px}}.add-content-close-btn{background:var(--wh-bg-front);color:var(--wh-text);border:none}.add-content-close-btn:hover{background:var(--wh-bg-front-hover)}.add-content-create-btn{background:#00b37a;background:var(--wh-primary-color, #00b37a);color:#fff;border:none}.add-content-create-btn:hover{background:#009d6b;background:var(--wh-primary-color-hover, #009d6b)}.add-content-create-btn:disabled{opacity:.6;cursor:not-allowed;background:#e0e0e0;background:var(--wh-gray-300, #e0e0e0);color:#888;color:var(--wh-gray-500, #888)}.add-content-tabs{display:flex;width:100%;border-bottom:1px solid #444851;border-bottom:1px solid var(--wh-border-base, #444851)}.add-content-tab{display:flex;align-items:center;gap:6px;background:rgba(0,0,0,0);border:none;border-radius:0;padding:8px 16px;font-size:14px;font-weight:500;color:var(--wh-text-lightest);fill:var(--wh-text-lightest);cursor:pointer;transition:color .2s;outline:none;position:relative;min-width:70px}.add-content-tab .add-content-tab-icon::part(icon){fill:var(--wh-text-lightest) !important}.add-content-tab.active{color:var(--wh-text-strongest);fill:var(--wh-text-strongest)}.add-content-tab.active .add-content-tab-icon::part(icon){fill:var(--wh-text-strongest) !important}.add-content-tab.active::after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--wh-text-strongest);border-radius:1px}.add-content-tab-logo{height:18px;-o-object-fit:contain;object-fit:contain}.add-content-tab-label{margin-left:2px}.add-content-container{display:flex;flex-direction:column;flex:1;width:100%}.add-content-view{width:100%;display:flex;flex-direction:column;background:var(--wh-bg-back);border-radius:7px;padding:14px 12px 12px 12px;box-sizing:border-box;min-height:220px;flex:1;justify-content:center;overflow:hidden;height:100%;min-height:0}.add-content-placeholder{display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--wh-gray-500);gap:10px}.add-content-placeholder-logo{height:36px;margin-bottom:4px}.add-content-url-input{width:100%;padding:10px 12px;border:1px solid #444851;border:1px solid var(--wh-border-base, #444851);border-radius:4px;font-size:14px;background:var(--wh-bg-front);color:var(--wh-text);box-sizing:border-box;outline:none;transition:border-color .2s;font-family:var(--wh-font-family);-webkit-appearance:none;-moz-appearance:none;appearance:none}.add-content-url-input:focus{border-color:#444851;border-color:var(--wh-border-front-strong-hover, #444851)}.add-content-url-input::-moz-placeholder{color:var(--wh-gray-500);opacity:1}.add-content-url-input::placeholder{color:var(--wh-gray-500);opacity:1}.add-content-url-input:disabled{opacity:.6;cursor:not-allowed;background:rgba(0,0,0,.5)}.add-content-url-error{color:#e53e3e;color:var(--wh-error, #e53e3e);font-size:13px;margin-bottom:4px}.add-content-url-loading{color:var(--wh-gray-500);font-size:13px;margin-bottom:4px}.add-content-url-preview{margin-top:8px}.add-url-input-row{display:flex;flex-direction:row;gap:8px;align-items:center}.add-content-url-search-btn{min-width:60px;padding:8px 12px;background:#00b37a;background:var(--wh-primary-color, #00b37a);color:#fff;border:none;border-radius:4px;font-size:13px;font-weight:500;cursor:pointer;transition:background-color .2s;height:36px;display:flex;align-items:center;justify-content:center}.add-content-url-search-btn:disabled{opacity:.7;cursor:not-allowed}.add-content-url-search-btn.clear-btn{background:var(--wh-bg-front);color:var(--wh-text);border:1px solid #444851;border:1px solid var(--wh-border-base, #444851)}.add-content-url-search-btn.clear-btn:hover{background:var(--wh-bg-front-hover)}',""]);const d=i},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,n,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},76686:(t,e,o)=>{var n=o(36239);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(38085),n=o(95665),r=o(30827),a=o(76686),i=o.n(a),d=function(t,e,o,n){var r,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(i=(a<3?r(i):a>3?r(e,o,i):r(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},l=function(t,e,o,n){return new(o||(o=Promise))(function(r,a){function i(t){try{l(n.next(t))}catch(t){a(t)}}function d(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(i,d)}l((n=n.apply(t,e||[])).next())})};const s=e.SHARED_COMPONENTS.AddContent,c=s.TAG;class p extends r.y{constructor(){super(...arguments),this.addContentType="text",this.hasContent=!1,this.urlInput="",this.urlError="",this.isUrlLoading=!1,this.previewBookmark=null,this.components=[e.SHARED_COMPONENTS.PageContentPreview.TAG,e.SHARED_COMPONENTS.CreateBookmark.TAG]}get createBookmarkProps(){return this.previewBookmark?{bookmark:this.previewBookmark,onBookmarkUpdated:t=>{this.previewBookmark=t}}:null}get isCreateDisabled(){if("text"===this.addContentType)return!this.hasContent;if("URL"===this.addContentType){const{isValid:t}=this.validateAndFormatUrl(this.urlInput);return!t||!this.previewBookmark}return!0}firstUpdated(t){var e;this.props.defaultType&&this.setAddContentType(this.props.defaultType),(null===(e=this.props.defaultValue)||void 0===e?void 0:e.value)&&(this.setAddContentType(this.props.defaultValue.type),"URL"===this.props.defaultValue.type&&(this.urlInput=this.props.defaultValue.value,this.urlInputElement&&(this.urlInputElement.value=this.props.defaultValue.value),this.handleUrlSearch()),"text"===this.props.defaultValue.type&&this.addContentTextElement&&(this.addContentTextElement.textContent=this.props.defaultValue.value))}setAddContentType(t){this.hasContent=!1,this.addContentType=t,this.hasContent||this.focusInput(t)}focusInput(t){setTimeout(()=>{var e,o;"URL"===t&&(null===(e=this.urlInputElement)||void 0===e||e.focus()),"text"!==t||this.hasContent||null===(o=this.addContentTextElement)||void 0===o||o.focus()},100)}handleContentInput(){var t,e;const o=(null===(e=null===(t=this.addContentTextElement)||void 0===t?void 0:t.textContent)||void 0===e?void 0:e.trim())||"";this.hasContent=o.length>0}handleUrlInput(t){this.urlInput=t.target.value,this.urlError="",this.hasContent=this.urlInput.length>0,this.previewBookmark=null,this.isUrlLoading=!1}handleUrlSearch(){return l(this,void 0,void 0,function*(){if(this.previewBookmark)return this.urlInput="",this.previewBookmark=null,this.urlError="",void(this.hasContent=!1);const{isValid:t,formattedUrl:o}=this.validateAndFormatUrl(this.urlInput);if(!t)return this.urlError="Please enter a valid website URL. Example: https://example.com",void(this.previewBookmark=null);this.isUrlLoading=!0,this.urlError="";const n=yield(0,e.useContext)().db.getBookmarkForUrl({currentUrl:o,canonicalLink:null,asin:null});if(n)return this.previewBookmark=n,this.urlError="",void(this.isUrlLoading=!1);try{const t=yield(0,e.useContext)().httpFacade.getMetaData(o),n=(0,e.generateNewBookmark)({isStarred:!0,title:t.title||"Untitled",description:t.description||"",url:o,meta:t});this.previewBookmark=n,this.urlError=""}catch(t){this.previewBookmark=null,this.urlError="Could not fetch preview for this URL."}finally{this.isUrlLoading=!1}})}validateAndFormatUrl(t){let e=t;e.startsWith("http://")||e.startsWith("https://")||(e=`https://${e}`);try{const o=new URL(e),n="http:"===o.protocol||"https:"===o.protocol,r=o.hostname.startsWith("localhost"),a=location.host.startsWith("localhost"),i=(o.hostname.includes(".")||a)&&o.hostname.length>3,d=!t.includes(" ");return{isValid:n&&i&&d&&(!r||a),formattedUrl:e}}catch(t){return{isValid:!1,formattedUrl:e}}}navigateToBookmark(t,o){var n;"function"!=typeof(null===(n=this.props)||void 0===n?void 0:n.onNavigateToBookmark)?e.notifications.dispatch("bookmarkSelected",{detail:[t,Object.assign({openAs:"page",location:"bookmark-preview",bookmarkProps:{activeTabsView:"reader"}},o)]}):this.props.onNavigateToBookmark(t,o)}onAddContent(){return l(this,void 0,void 0,function*(){if("URL"!==this.addContentType){if("text"===this.addContentType&&this.addContentTextElement){const t=(0,e.getPageContentFromTextContent)(this.addContentTextElement);if(!t)return void(0,e.showToast)({content:"Something went wrong while creating the content",uniqueId:`add-content-error-${Date.now()}`,variant:"error"});const o=(0,e.getBookmarkFromPageContent)(t,this.addContentType);return yield(0,e.addBookmark)(o),yield(0,e.createOrUpdatePageContent)(t),(0,e.closeDialog)(),void this.navigateToBookmark(o)}}else this.previewBookmark&&(yield(0,e.addBookmark)(this.previewBookmark),(0,e.closeDialog)(),this.navigateToBookmark(this.previewBookmark))})}updated(){"text"===this.addContentType&&this.addContentTextElement&&document.activeElement!==this.addContentTextElement&&setTimeout(()=>{var t;null===(t=this.addContentTextElement)||void 0===t||t.focus()},100)}renderTabs(){return t.html`
      <div class="add-content-tabs">
        ${["text","URL","PDF"].map(o=>t.html`
            <button
              class="add-content-tab ${this.addContentType===o?"active":""}"
              data-testid=${s.TEST_IDS[`${o}_TAB`]}
              @click=${()=>this.setAddContentType(o)}
              type="button"
            >
              <webhighlights-icon
                icon="${e.CONTENT_TYPE_ICON_MAP[o]}"
                size="16"
                class="add-content-tab-icon"
              ></webhighlights-icon>
              <span class="add-content-tab-label"
                >${o.charAt(0).toUpperCase()+o.slice(1)}</span
              >
            </button>
          `)}
      </div>
    `}get textView(){return t.html`
      <div class="add-content-box">
        ${this.hasContent?"":t.html`
              <div class="add-content-editable-placeholder">
                Start typing or paste your content here...
              </div>
            `}
        <div
          contenteditable="true"
          id="${e.SHARED_COMPONENTS.AddContent.CONTENT_BOX_ID}"
          @input=${this.handleContentInput}
        ></div>
      </div>
    `}get urlView(){var o,n;return t.html`
      <div class="add-url-box">
        <div class="add-url-input-row">
          <input
            type="url"
            autocomplete="off"
            class="add-content-url-input"
            id="${e.SHARED_COMPONENTS.AddContent.URL_INPUT_ID}"
            data-testid=${s.TEST_IDS.URL_INPUT}
            .value=${this.urlInput}
            placeholder="Enter website URL (e.g., https://example.com)"
            @input=${this.handleUrlInput}
            @keydown=${this.handleUrlKeydown}
            ?disabled=${this.isUrlLoading}
          />
          <button
            class="add-content-url-search-btn ${this.previewBookmark?"clear-btn":""}"
            @click=${this.handleUrlSearch}
            data-testid=${s.TEST_IDS.SEARCH_BTN}
            ?disabled=${this.isUrlLoading||!this.urlInput&&!this.previewBookmark}
            type="button"
          >
            ${this.isUrlLoading?"Loading…":this.previewBookmark?"✕":"Search"}
          </button>
        </div>
        <div class="add-content-url-preview">
          ${this.urlError?t.html`<div class="add-content-url-error">${this.urlError}</div>`:""}
          ${this.isUrlLoading?t.html`<div class="add-content-url-loading">Loading preview…</div>`:""}
          ${this.previewBookmark?t.html`
                <webhighlights-create-bookmark
                  part="bookmark-details"
                  .props=${this.createBookmarkProps}
                  .meta=${null!==(n=null===(o=this.previewBookmark)||void 0===o?void 0:o.meta)&&void 0!==n?n:{}}
                ></webhighlights-create-bookmark>
              `:""}
        </div>
      </div>
    `}handleUrlKeydown(t){"Enter"===t.key&&this.urlInput.trim()&&(t.preventDefault(),this.handleUrlSearch())}get placeholderView(){return t.html`
      <div class="add-content-placeholder">
        <img
          src="${e.CONTENT_TYPE_LOGO_MAP[this.addContentType]}"
          alt="${this.addContentType} logo"
          class="add-content-placeholder-logo"
        />
        <div class="add-content-placeholder-text">
          <h2>
            ${this.addContentType.charAt(0).toUpperCase()+this.addContentType.slice(1)}
            upload coming soon
          </h2>
          <p>This feature is not yet available.</p>
        </div>
      </div>
    `}renderContentView(){return"text"===this.addContentType?this.textView:"URL"===this.addContentType?this.urlView:this.placeholderView}renderActionButtons(){return t.html`<div class="add-content-footer">
      <button
        class="add-content-close-btn"
        data-testid=${s.TEST_IDS.CLOSE_BTN}
        @click=${e.closeDialog}
      >
        Close
      </button>
      <button
        class="add-content-create-btn"
        @click=${this.onAddContent}
        ?disabled=${this.isCreateDisabled}
        data-testid=${s.TEST_IDS.CREATE_BTN}
      >
        Create
      </button>
    </div>`}render(){return t.html`
      <div class="add-content-header-label">Add content</div>
      <div class="add-content-container">
        ${this.renderTabs()}
        <div class="add-content-view">${this.renderContentView()}</div>
      </div>
      ${this.renderActionButtons()}
    `}}p.styles=t.css`
    ${(0,t.unsafeCSS)(i())}
  `,d([(0,n.property)()],p.prototype,"props",void 0),d([(0,n.query)(`#${e.SHARED_COMPONENTS.AddContent.CONTENT_BOX_ID}`)],p.prototype,"addContentTextElement",void 0),d([(0,n.query)(`#${e.SHARED_COMPONENTS.AddContent.URL_INPUT_ID}`)],p.prototype,"urlInputElement",void 0),d([(0,n.state)()],p.prototype,"addContentType",void 0),d([(0,n.state)()],p.prototype,"hasContent",void 0),d([(0,n.state)()],p.prototype,"urlInput",void 0),d([(0,n.state)()],p.prototype,"urlError",void 0),d([(0,n.state)()],p.prototype,"isUrlLoading",void 0),d([(0,n.state)()],p.prototype,"previewBookmark",void 0),r.y.define(c,p)})()})();