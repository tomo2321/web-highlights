(()=>{var e={30827:(e,o,r)=>{"use strict";r.d(o,{y:()=>i});var t=r(38085),a=r(93811);class i extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,t.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,o,r){(0,t.defineWebHighlightsElement)(e,o,r)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var r="",t=void 0!==o[5];return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),t&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=e(o),t&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r}).join("")},o.i=function(e,r,t,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(n[l]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);t&&n[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),o.push(p))}},o}},82299:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>s});var t=r(36758),a=r.n(t),i=r(40935),n=r.n(i)()(a());n.push([e.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{font-family:var(--wh-font-family);display:flex;flex-direction:column;height:100%;width:100%;overflow:auto;background-color:var(--wh-bg-base);color:var(--wh-text)}.bookmark-preview-header{width:100%;height:160px;position:relative}.bookmark-preview-image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.bookmark-preview-image.fallback{min-height:100px}.bookmark-preview-header-top{display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:absolute;left:0;top:0;padding:4px 8px;width:100%;box-sizing:border-box}.bookmark-preview-header-top-left-url{display:flex;flex-direction:row;align-items:center;gap:2px;padding:2px;background:linear-gradient(134deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));border-radius:4px}.bookmark-preview-backdrop{position:absolute;bottom:0;left:0;width:100%;height:80%;display:flex;flex-direction:column;justify-content:flex-end;padding:0 8px;background:linear-gradient(to top, var(--wh-bg-base), rgba(0, 0, 0, 0));box-sizing:border-box}.bookmark-preview-details{display:flex;flex-direction:column;width:100%;height:100%;padding:8px 16px 16px 8px;box-sizing:border-box;backdrop-filter:blur(40px);background:var(--wh-bg-base)}.bookmark-preview-content{padding:8px 16px 16px 8px;padding-bottom:48px;--wh-reader-font-size: calc(var(--wh-font-size, 14px) + 2px)}.bookmark-preview-content .page-content-preview-element::part(reader){padding:0}input{background-color:rgba(0,0,0,0);color:var(--wh-text-strongest);border:none;border-radius:4px;font-size:16px;font-family:var(--wh-font-family);outline:none;text-overflow:ellipsis}input:focus{border-color:#fff}.title-input{font-size:22px;font-weight:600;width:100%;word-break:break-all}.description-input{font-size:14px;width:100%;word-break:break-all;color:var(--wh-text-light)}.url-input{font-size:11px;width:100%;word-break:break-all;color:var(--wh-gray-300);width:200px}',""]);const s=n},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal},98666:(e,o,r)=>{var t=r(82299);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var i=o[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(93811),o=r(38085),t=r(95665),a=r(30827),i=r(98666),n=r.n(i);const s=o.SHARED_COMPONENTS.CreateBookmark,l=s.TAG;class d extends a.y{constructor(){super(...arguments),this.components=[o.SHARED_COMPONENTS.Tags.TAG,o.SHARED_COMPONENTS.Favicon.TAG,o.SHARED_COMPONENTS.PageContentPreview.TAG,o.SHARED_COMPONENTS.Loading.TAG,o.SHARED_COMPONENTS.ImageWithFallback.TAG]}get previewProps(){return{pageContent:{url:this.props.bookmark.url,content:""},isUrlCrawlEnabled:!0,showOverlay:!1}}onBookmarkUpdated(e){var o,r;const t=Object.assign(Object.assign({},this.props.bookmark),e);null===(r=(o=this.props).onBookmarkUpdated)||void 0===r||r.call(o,t),this.dispatchEvent(new CustomEvent("bookmarkUpdated",{detail:t}))}onTitleChange(e){const o=e.target;this.onBookmarkUpdated({title:o.value})}onDescriptionChange(e){const o=e.target;this.onBookmarkUpdated({description:o.value})}onUrlChange(e){const o=e.target;this.onBookmarkUpdated({url:o.value})}onTagsChanged(e){this.onBookmarkUpdated({tags:e.detail.tags})}get imageWithFallbackProps(){var e,o,r,t,a;return{src:null===(o=null===(e=this.props.bookmark.meta)||void 0===e?void 0:e.image)||void 0===o?void 0:o.url,alt:null!==(a=null===(t=null===(r=this.props.bookmark.meta)||void 0===r?void 0:r.image)||void 0===t?void 0:t.alt)&&void 0!==a?a:"Website preview"}}render(){var o;return e.html`
      <div class="bookmark-preview-header">
        <div class="bookmark-preview-header-top">
          <div class="bookmark-preview-header-top-left">
            <div class="bookmark-preview-header-top-left-url">
              <webhighlights-favicon
                .src=${null===(o=this.props.bookmark.meta)||void 0===o?void 0:o.favicon}
                .size=${16}
              ></webhighlights-favicon>
              <input
                type="url"
                name="url"
                placeholder="URL"
                class="url-input"
                data-testid=${s.TEST_IDS.URL_INPUT}
                value=${this.props.bookmark.url||""}
                @input=${this.onUrlChange}
              />
            </div>
          </div>
        </div>
        <webhighlights-image-with-fallback
          class="bookmark-preview-image fallback"
          data-testid=${s.TEST_IDS.IMAGE}
          .props=${this.imageWithFallbackProps}
        ></webhighlights-image-with-fallback>

        <div class="bookmark-preview-backdrop">
          <input
            type="text"
            name="title"
            autofocus
            placeholder="Title"
            class="title-input"
            value=${this.props.bookmark.title||"Untitled"}
            @input=${this.onTitleChange}
            data-testid=${s.TEST_IDS.TITLE_INPUT}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            class="description-input"
            value=${this.props.bookmark.description||""}
            @input=${this.onDescriptionChange}
            data-testid=${s.TEST_IDS.DESCRIPTION_INPUT}
          />
        </div>
      </div>
      <div class="bookmark-preview-details">
        <webhighlights-tags
          .tags=${this.props.bookmark.tags}
          @tagsChanged=${this.onTagsChanged}
        ></webhighlights-tags>
      </div>
      <div class="bookmark-preview-content">
        <webhighlights-page-content-preview
          class="page-content-preview-element"
          .props=${this.previewProps}
        ></webhighlights-page-content-preview>
      </div>
    `}}d.styles=e.css`
    ${(0,e.unsafeCSS)(n())}
  `,function(e,o,r,t){var a,i=arguments.length,n=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,r,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(i<3?a(n):i>3?a(o,r,n):a(o,r))||n);i>3&&n&&Object.defineProperty(o,r,n)}([(0,t.property)()],d.prototype,"props",void 0),a.y.define(l,d)})()})();