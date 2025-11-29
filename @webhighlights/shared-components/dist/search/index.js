(()=>{var t={16094:(t,e,i)=>{var r=i(62093);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},16625:(t,e,i)=>{"use strict";i.d(e,{Y:()=>o});var r=i(38085),n=i(93811);function o({url:t,testId:e,faviconUrl:i,faviconSize:o=9}){return n.html`
    <div class="url-container">
      ${i?n.html`<webhighlights-favicon
            .src=${i}
            .size=${o}
            class="favicon"
          ></webhighlights-favicon>`:n.html``}
      <span
        class="url truncate"
        href="${t}"
        target="_blank"
        title="${t}"
        data-testid="${e}"
        >${(0,r.urlWithoutSchema)(t)}</span
      >
      <a
        class="entity-external-link-icon"
        href=${t}
        target="_blank"
        title=${t}
        @click=${r.stopPropagation}
      >
        <webhighlights-icon
          class="icon"
          icon=${r.ICON_NAMES["external-link"]}
          size="9.5"
        ></webhighlights-icon
      ></a>
    </div>
  `}},28230:(t,e,i)=>{"use strict";i.d(e,{r:()=>a});var r=i(38085),n=i(93811);const o="15",a={[r.MARK_MEDIA_TYPE.PARAGRAPH]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 6V21H11V6H5V4H19V6H13Z"></path>
    </svg>`,[r.MARK_MEDIA_TYPE.BLOCKQUOTE]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_1]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM21.0005 8V20H19.0005L19 10.204L17 10.74V8.67L19.5005 8H21.0005Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_2]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4V11H11V4H13V20H11V13H4V20H2V4H4ZM18.5 8C20.5711 8 22.25 9.67893 22.25 11.75C22.25 12.6074 21.9623 13.3976 21.4781 14.0292L21.3302 14.2102L18.0343 18H22V20H15L14.9993 18.444L19.8207 12.8981C20.0881 12.5908 20.25 12.1893 20.25 11.75C20.25 10.7835 19.4665 10 18.5 10C17.5818 10 16.8288 10.7071 16.7558 11.6065L16.75 11.75H14.75C14.75 9.67893 16.4289 8 18.5 8Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_3]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8L21.9984 10L19.4934 12.883C21.0823 13.3184 22.25 14.7728 22.25 16.5C22.25 18.5711 20.5711 20.25 18.5 20.25C16.674 20.25 15.1528 18.9449 14.8184 17.2166L16.7821 16.8352C16.9384 17.6413 17.6481 18.25 18.5 18.25C19.4665 18.25 20.25 17.4665 20.25 16.5C20.25 15.5335 19.4665 14.75 18.5 14.75C18.214 14.75 17.944 14.8186 17.7056 14.9403L16.3992 13.3932L19.3484 10H15V8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM]:n.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${o}
      width=${o}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.CODE]:n.html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${o}
        width=${o}
        viewBox="0 0 24 24"
        fill="none"
        part="icon"
        class="icon"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    `,[r.MARK_MEDIA_TYPE.IMAGE]:n.html`
      <webhighlights-icon
        icon=${r.ICON_NAMES.image}
        size=${o}
      ></webhighlights-icon>
    `};r.MARK_MEDIA_TYPE.PARAGRAPH,a[r.MARK_MEDIA_TYPE.PARAGRAPH],r.MARK_MEDIA_TYPE.BLOCKQUOTE,a[r.MARK_MEDIA_TYPE.BLOCKQUOTE],r.MARK_MEDIA_TYPE.HEADING_1,a[r.MARK_MEDIA_TYPE.HEADING_1],r.MARK_MEDIA_TYPE.HEADING_2,a[r.MARK_MEDIA_TYPE.HEADING_2],r.MARK_MEDIA_TYPE.HEADING_3,a[r.MARK_MEDIA_TYPE.HEADING_3],r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM,a[r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM],r.MARK_MEDIA_TYPE.CODE,a[r.MARK_MEDIA_TYPE.CODE]},30827:(t,e,i)=>{"use strict";i.d(e,{y:()=>o});var r=i(38085),n=i(93811);class o extends n.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,i){(0,r.defineWebHighlightsElement)(t,e,i)}}},32921:(t,e,i)=>{var r=i(72334);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i="",r=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),r&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),r&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},e.i=function(t,i,r,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var h=this[s][0];null!=h&&(a[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},62093:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var r=i(36758),n=i.n(r),o=i(40935),a=i.n(o)()(n());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}.url-container{display:flex;align-items:center;gap:2px}.url-container .url{color:var(--wh-text-lightest);font-size:9.5px;line-height:12px;max-width:140px;text-decoration:none}.url-container .favicon{transform:translateY(1px)}.url-container .entity-external-link-icon{transition:opacity .2s ease}.url-container .entity-external-link-icon:not(:focus){opacity:0}.url-container .icon{color:var(--wh-text-lightest);fill:var(--wh-text-lightest)}.url-container:hover .entity-external-link-icon{opacity:1}.url-container:hover .entity-external-link-icon:hover .icon{color:var(--wh-text);fill:var(--wh-text)}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host{font-family:var(--wh-font-family);display:flex;flex-direction:column;padding:0;font-size:14px;width:100%;height:100%;box-sizing:border-box;overflow:hidden}.search-entity-container{display:flex;align-items:center;-moz-column-gap:8px;column-gap:8px;padding:6px 8px;border-radius:4px;cursor:pointer}@media(min-width: 768px){.search-entity-container{-moz-column-gap:12px;column-gap:12px;padding:8px 10px}}.search-entity-container.selected{background-color:var(--wh-bg-base-hover-strong)}.search-entity-container:hover:not(.selected){background-color:var(--wh-bg-base-hover)}.search-entity-container.no-results-info{font-size:16px;color:var(--wh-text-lightest);cursor:text}.search-entity-container.no-results-info:hover{background:none;background-color:none}.search-type-indicator{display:flex;align-items:center;justify-content:center;border:.5px solid var(--wh-border-base);padding:4px;border-radius:4px}.icon{color:var(--wh-text-lighter);fill:var(--wh-text-lighter)}.search-entity-content{display:flex;align-items:center;flex:1 auto;row-gap:4px;line-height:1.18}.entity-info-right{margin-left:auto}.highlights-notes-info::part(badge){font-size:9px;background-color:var(--wh-bg-base)}.search-entity-date{font-size:10px;color:var(--wh-text-lighter);text-align:right;min-width:-moz-max-content;min-width:max-content;margin-left:8px}.entity-details{width:100%;margin-top:4px;display:flex;align-items:center;gap:4px}.favicon::part(image){border:none !important}.favicon::part(image){padding:0}.notes-editor::part(notes-container){height:20px;border-radius:0;overflow:hidden;background:rgba(0,0,0,0);border:none;color:var(--wh-text-light);cursor:pointer}.notes-editor::part(notes-container)[focus-within]{color:var(--wh-text);border:none}.notes-editor::part(notes-container):focus-within{color:var(--wh-text);border:none}.notes-editor::part(notes-container){padding:0}.notes-editor::part(text-container){margin:2px 0}',""]);const s=a},72334:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var r=i(36758),n=i.n(r),o=i(40935),a=i.n(o)()(n());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:flex;flex-direction:column;padding:0;font-size:14px;width:100%;height:100%;box-sizing:border-box;overflow:hidden}header{padding:8px}main{overflow:auto;padding-left:8px;padding-right:8px}@media(min-width: 600px){main::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}main::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}main::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.search-entities-container{display:block;margin-top:8px}.loading{display:block;margin-top:16px;--spinner-color: var(--wh-text-light)}.search-entity{display:block;height:-moz-fit-content;height:fit-content}.search-entity.selected{background-color:var(--wh-bg-base-hover-strong)}.search-entity.selected::part(search-entity){background-color:var(--wh-bg-base-hover-strong)}.search-entity:hover:not(.selected){background-color:var(--wh-bg-base-hover)}.search-entity:hover:not(.selected)::part(search-entity){background-color:var(--wh-bg-base-hover)}.search-entity.no-results-info{font-size:16px;color:var(--wh-text-lightest);cursor:text}.search-entity.no-results-info:hover{background:none;background-color:none}.icon{color:var(--wh-text-lighter);fill:var(--wh-text-lighter)}.search-bar{width:100%}.search-bar::part(container){border:none;border-bottom:1px solid var(--wh-border-base);padding:8px 4px;border-radius:0}.search-entity-filter-container{display:flex;gap:4px;margin-top:8px}.search-entity-filter-container .search-entity-filter{display:flex;align-items:center;border:1px solid var(--wh-border-back);color:var(--wh-text-lighter);gap:4px;padding:2px 6px;cursor:pointer;background:var(--wh-bg-base);border-radius:4px;transition:all .1s ease-in-out}.search-entity-filter-container.all-enabled .search-entity-filter:hover{background:var(--wh-primary-600);color:#fff}.search-entity-filter-container.not-all-enabled .search-entity-filter:not(.disabled){background:var(--wh-primary-600);color:#fff}.search-entity-filter-container.not-all-enabled .search-entity-filter.disabled{opacity:.4;border-color:var(--wh-border-base)}.search-entity-filter-container.not-all-enabled .search-entity-filter.disabled:hover{background:var(--wh-primary-600);color:#fff}',""]);const s=a},72593:(t,e,i)=>{"use strict";var r=i(38085),n=i(93811),o=i(95665),a=i(30827),s=i(16625),h=i(28230),l=i(16094),c=i.n(l),d=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const p=r.SHARED_COMPONENTS_INTERNAL.SearchEntity,g=p.TAG;class E extends a.y{constructor(){super(...arguments),this.selectedIndex=0,this.components=[r.SHARED_COMPONENTS.Icon.TAG,r.SHARED_COMPONENTS.Favicon.TAG,r.SHARED_COMPONENTS.NotesEditor.TAG,r.SHARED_COMPONENTS.BookmarkPreviewHighlightsNotesInfo.TAG]}onSearchEntitySelected(t){this.dispatchEvent(new CustomEvent("selected",{detail:t}))}render(){var t,e,i,o,a,l;return this.searchEntity?n.html`<div
      class="search-entity-container"
      part="search-entity"
      role="menuitem"
      data-testid=${p.TEST_IDS.CONTAINER}
      @click=${()=>this.onSearchEntitySelected(this.searchEntity)}
      tabindex="-1"
    >
      <div
        class="search-type-indicator"
        data-testid=${p.TEST_IDS.SEARCH_TYPE_INDICATOR(this.searchEntity.searchType)}
      >
        ${(0,r.isBookmark)(this.searchEntity)?n.html`
              <webhighlights-favicon
                src=${null!==(i=null===(e=null===(t=this.searchEntity)||void 0===t?void 0:t.meta)||void 0===e?void 0:e.favicon)&&void 0!==i?i:""}
                class="favicon"
                size="16"
                alt=${`Icon - ${null!==(a=null===(o=this.searchEntity)||void 0===o?void 0:o.title)&&void 0!==a?a:""}`}
              ></webhighlights-favicon>
            `:(0,r.isMark)(this.searchEntity)&&"marks"===this.searchEntity.searchType?h.r[null!==(l=this.searchEntity.mediaType)&&void 0!==l?l:r.DEFAULT_MEDIA_TYPE]:n.html`
                <webhighlights-icon
                  class="icon ${r.SEARCH_ENTITY_ICON_MAP[this.searchEntity.searchType]}"
                  size="16"
                  stroke-width="1.5"
                  icon=${r.SEARCH_ENTITY_ICON_MAP[this.searchEntity.searchType]}
                ></webhighlights-icon>
              `}
      </div>
      <div class="search-entity-content">
        <div>
          <span data-testid=${p.TEST_IDS.SEARCH_ENTITY_CONTENT}>
            ${(0,r.isMark)(this.searchEntity)&&this.searchEntity.notes&&"notes"===this.searchEntity.searchType?n.html`<webhighlights-notes-editor
                  class="notes-editor"
                  .props=${{content:this.searchEntity.notes,editable:!1}}
                ></webhighlights-notes-editor>`:(0,r.isImageMark)(this.searchEntity)?n.html`<img
                    src=${this.searchEntity.imageSrc}
                    alt=${this.searchEntity.imageAlt||"Image"}
                    height="80"
                  />`:(0,r.truncateString)((0,r.isBookmark)(this.searchEntity)?this.searchEntity.title:(0,r.isMark)(this.searchEntity)?this.searchEntity.text:(0,r.isTagSearchEntity)(this.searchEntity)?`${this.searchEntity.name}${this.searchEntity.count?` (${this.searchEntity.count})`:""}`:"Not assignable",65)}
          </span>
          ${(0,r.isMark)(this.searchEntity)||(0,r.isBookmark)(this.searchEntity)?n.html`
                <div
                  class="entity-details"
                  data-testid=${p.TEST_IDS.SEARCH_ENTITY_DETAILS}
                >
                  ${(0,s.Y)({url:this.searchEntity.url,testId:p.TEST_IDS.SEARCH_ENTITY_URL})}
                </div>
              `:n.html``}
        </div>
        <div class="entity-info-right">
          ${this.searchEntity.createdAt>0?n.html`
                <div
                  class="search-entity-date"
                  data-testid=${p.TEST_IDS.SEARCH_ENTITY_DATE}
                >
                  ${(0,r.toDateTimeStringShort)(new Date(this.searchEntity.createdAt).toDateString(),{hideHoursAndMinutes:!0})}
                </div>
              `:n.html``}
          ${(0,r.isBookmarkWithCount)(this.searchEntity)?n.html`<webhighlights-bookmark-preview-highlights-notes-info
                class="highlights-notes-info"
                .props=${(0,r.toHighlightNotesInfoProps)(this.searchEntity)}
              ></webhighlights-bookmark-preview-highlights-notes-info>`:n.html``}
        </div>
      </div>
    </div>`:n.html``}}E.styles=n.css`
    ${(0,n.unsafeCSS)(c())}
  `,d([(0,o.property)()],E.prototype,"searchEntity",void 0),d([(0,o.property)()],E.prototype,"selected",void 0),d([(0,o.state)()],E.prototype,"selectedIndex",void 0),a.y.define(g,E)},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=i(38085),e=i(93811),r=i(95665),n=i(30827),o=i(32921),a=i.n(o),s=(i(72593),function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a});const h=t.SHARED_COMPONENTS.Search,l=h.TAG,c="search-scroll-container";class d extends n.y{constructor(){super(...arguments),this.marks=[],this.marksWithNotes=[],this.bookmarks=[],this.tags=[],this.pagination=25,this.selectedIndex=0,this.searchValue="",this.searchEntityTypeEnabledMap={bookmarks:!0,marks:!0,tag:!0,notes:!0},this.loading=!0,this.components=[t.SHARED_COMPONENTS.SearchBar.TAG,t.SHARED_COMPONENTS.Icon.TAG,t.SHARED_COMPONENTS.Loading.TAG]}get searchEntities(){const e=this.searchEntityTypeEnabledMap.bookmarks,i=this.searchEntityTypeEnabledMap.marks,r=this.searchEntityTypeEnabledMap.tag,n=this.searchEntityTypeEnabledMap.notes;return[...[...e?this.bookmarks:[],...i?this.marks:[]].map(t.entityToSearchEntity),...r?this.tags.map(t.tagToSearchEntity):[],...n?this.marksWithNotes.map(t.entityToSearchEntity).map(t=>Object.assign(Object.assign({},t),{searchType:"notes"})):[]].slice(0,this.pagination)}firstUpdated(t){this.updateData(),this.initListeners()}initListeners(){this.searchScrollContainer&&(this.searchScrollContainer.onscroll=t=>{const e=t.target;e.scrollHeight-e.scrollTop<1.1*e.clientHeight&&(this.pagination=this.pagination+25)})}updateData(){return e=this,i=void 0,n=function*(){var e;this.loading=!0;try{const{marks:i,bookmarks:r,tags:n,marksWithNotes:o}=yield(0,t.useContext)().db.getEntitiesForSearchValue({searchValue:(null===(e=this.searchValue)||void 0===e?void 0:e.length)>2?this.searchValue:""});this.marks=i,this.marksWithNotes=o,this.bookmarks=r,this.tags=n}catch(t){console.error(t),this.marks=[],this.bookmarks=[],this.tags=[]}finally{this.loading=!1,this.selectedIndex=0}},new((r=void 0)||(r=Promise))(function(t,o){function a(t){try{h(n.next(t))}catch(t){o(t)}}function s(t){try{h(n.throw(t))}catch(t){o(t)}}function h(e){var i;e.done?t(e.value):(i=e.value,i instanceof r?i:new r(function(t){t(i)})).then(a,s)}h((n=n.apply(e,i||[])).next())});var e,i,r,n}onSearchValueCanged(t){this.updateSearchValue("string"==typeof t.detail?t.detail:"")}onCleared(){this.updateSearchValue("")}updateSearchValue(t){this.searchValue!==t&&(this.searchValue=t,this.loading=!0,this.updateData())}onSearchEntitySelected(t){this.triggerSelectedEvent(t),"function"==typeof this.props.onSearchEntitySelected&&this.props.onSearchEntitySelected(t)}triggerSelectedEvent(e){const i={size:"small",type:"grid"};var r,n;(0,t.isBookmark)(e)?(0,t.onBookmarkSelected)(e,(r=e,Object.assign(Object.assign({bookmark:r},i),{bookmarkSelectionOptions:{openAs:"page"}}))):(0,t.isMark)(e)?(0,t.onMarkSelected)(e,(n=e,Object.assign(Object.assign({mark:n},i),{bookmarkSelectionOptions:{openAs:"page"}}))):(0,t.isTagSearchEntity)(e)&&t.notifications.dispatch("selectedTag",{detail:{tag:e.name}})}get searchBarProps(){return Object.assign({autofocus:!0,showCancelBtn:!0},this.props)}onSearchCancelled(){(0,t.closeDialog)()}getSelectedPreviewElement(){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".search-entity.selected")}scrollToSelectedSearchElement(t){const e=this.getSelectedPreviewElement();e instanceof HTMLElement&&e.scrollIntoView(t)}onArrowDown(){this.selectedIndex<this.searchEntities.length-1&&(this.selectedIndex=this.selectedIndex+1),setTimeout(()=>{this.scrollToSelectedSearchElement({block:"end"})})}onArrowUp(){this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1),setTimeout(()=>{this.scrollToSelectedSearchElement({block:"nearest"})})}onEnter(){const t=this.searchEntities[this.selectedIndex];t&&this.onSearchEntitySelected(t)}onSpecialKeyPress(t){this[`on${t.detail}`]()}get allTypesAreEnabled(){return t.SEARCH_ENTITY_TYPES.every(t=>this.searchEntityTypeEnabledMap[t])}toggleSearchEntityType(e){const i=this.allTypesAreEnabled,r=i?{bookmarks:!1,marks:!1,tag:!1,notes:!1}:this.searchEntityTypeEnabledMap;r[e]=i||!this.searchEntityTypeEnabledMap[e],this.searchEntityTypeEnabledMap=Object.assign({},r),t.SEARCH_ENTITY_TYPES.every(t=>!this.searchEntityTypeEnabledMap[t])&&(this.searchEntityTypeEnabledMap={bookmarks:!0,marks:!0,tag:!0,notes:!0})}onSelected(t){this.onSearchEntitySelected(t.detail)}render(){var i;if(!this.props)throw new Error(`Props missing for '${l}'`);return e.html` <header>
        <webhighlights-searchbar
          class="search-bar"
          @changed=${this.onSearchValueCanged}
          @cancelled=${this.onSearchCancelled}
          @cleared=${this.onCleared}
          @specialKeyPress=${this.onSpecialKeyPress}
          .props=${this.searchBarProps}
        ></webhighlights-searchbar>
        <div
          class="search-entity-filter-container ${this.allTypesAreEnabled?"all-enabled":"not-all-enabled"}"
        >
          ${t.SEARCH_ENTITY_TYPES.map(i=>e.html`<button
                @click=${()=>this.toggleSearchEntityType(i)}
                data-testid=${h.TEST_IDS.SEARCH_TYPE_FILTER(i)}
                class="search-entity-filter ${this.searchEntityTypeEnabledMap[i]?"":"disabled"}"
              >
                <webhighlights-icon
                  class="icon ${t.SEARCH_ENTITY_ICON_MAP[i]}"
                  size="14"
                  stroke-width="1.5"
                  icon=${t.SEARCH_ENTITY_ICON_MAP[i]}
                ></webhighlights-icon>
                <span>${t.SEARCH_ENTITY_LABEL_MAP[i]}</span>
              </button>`)}
        </div>
      </header>
      <main id="${c}">
        ${this.loading?e.html`<webhighlights-loading
              class="loading"
              data-testid=${h.TEST_IDS.LOADING}
            ></webhighlights-loading>`:e.html`
              <div class="search-entities-container">
                ${this.searchEntities.map((t,i)=>e.html`<webhighlights-search-entity
                      @selected=${this.onSelected}
                      class="search-entity ${t.searchType} ${this.selectedIndex===i?"selected":""}"
                      .searchEntity=${t}
                      data-testid=${h.TEST_IDS.SEARCH_ENTITY}
                      .selected=${this.selectedIndex===i}
                    ></webhighlights-search-entity>`)}
                ${0===(null===(i=this.searchEntities)||void 0===i?void 0:i.length)?e.html`
                      <span
                        class="search-entity no-results-info"
                        data-testid=${h.TEST_IDS.NO_RESULTS_INFO}
                        >No results found.</span
                      >
                    `:e.html``}
              </div>
            `}
      </main>`}}d.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,s([(0,r.property)()],d.prototype,"props",void 0),s([(0,r.state)()],d.prototype,"marks",void 0),s([(0,r.state)()],d.prototype,"marksWithNotes",void 0),s([(0,r.state)()],d.prototype,"bookmarks",void 0),s([(0,r.state)()],d.prototype,"tags",void 0),s([(0,r.state)()],d.prototype,"pagination",void 0),s([(0,r.state)()],d.prototype,"selectedIndex",void 0),s([(0,r.state)()],d.prototype,"searchValue",void 0),s([(0,r.state)()],d.prototype,"searchEntityTypeEnabledMap",void 0),s([(0,r.state)()],d.prototype,"loading",void 0),s([(0,r.query)(`#${c}`)],d.prototype,"searchScrollContainer",void 0),n.y.define(l,d)})()})();