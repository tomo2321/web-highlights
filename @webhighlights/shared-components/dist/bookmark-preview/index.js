(()=>{var t={14955:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(36758),r=i.n(o),n=i(40935),a=i.n(n)()(r());a.push([t.id,".bookmark-preview-container{background:var(--wh-bg-base);transition:.2s background-color ease-in-out;color:var(--wh-text-light)}.bookmark-preview-container:hover{color:var(--wh-text);background:var(--wh-bg-base-hover)}",""]);const s=a},16625:(t,e,i)=>{"use strict";i.d(e,{Y:()=>n});var o=i(38085),r=i(93811);function n({url:t,testId:e,faviconUrl:i,faviconSize:n=9}){return r.html`
    <div class="url-container">
      ${i?r.html`<webhighlights-favicon
            .src=${i}
            .size=${n}
            class="favicon"
          ></webhighlights-favicon>`:r.html``}
      <span
        class="url truncate"
        href="${t}"
        target="_blank"
        title="${t}"
        data-testid="${e}"
        >${(0,o.urlWithoutSchema)(t)}</span
      >
      <a
        class="entity-external-link-icon"
        href=${t}
        target="_blank"
        title=${t}
        @click=${o.stopPropagation}
      >
        <webhighlights-icon
          class="icon"
          icon=${o.ICON_NAMES["external-link"]}
          size="9.5"
        ></webhighlights-icon
      ></a>
    </div>
  `}},25996:(t,e,i)=>{"use strict";var o=i(93811),r=i(95665),n=i(28619),a=i.n(n),s=i(38085),l=i(30827),h=i(16625);const p=s.SHARED_COMPONENTS_INTERNAL.BookmarkPreviewList,c=p.TAG;class d extends l.y{constructor(){super(...arguments),this.components=[s.SHARED_COMPONENTS.Loading.TAG,s.SHARED_COMPONENTS.BookmarkPreviewHighlightsNotesInfo.TAG,s.SHARED_COMPONENTS.ImageWithFallback.TAG]}onBookmarkSelected(){this.dispatchEvent(new CustomEvent("selected"))}get imageWithFallbackProps(){var t,e,i,o,r,n,a;return{src:null===(i=null===(e=null===(t=this.props.bookmark)||void 0===t?void 0:t.meta)||void 0===e?void 0:e.image)||void 0===i?void 0:i.url,alt:null!==(a=null===(n=null===(r=null===(o=this.props.bookmark)||void 0===o?void 0:o.meta)||void 0===r?void 0:r.image)||void 0===n?void 0:n.alt)&&void 0!==a?a:"Website preview"}}render(){var t,e,i,r,n,a,l,c,d,g,v,u;if(this.props.loading)return o.html``;if(!this.props.bookmark)return o.html``;const f=this.props.bookmark,m=null!==(e=null===(t=this.props.bookmark)||void 0===t?void 0:t.title)&&void 0!==e?e:"Untitled",w=null!==(l=null!==(r=null===(i=this.props.bookmark)||void 0===i?void 0:i.description)&&void 0!==r?r:null===(a=null===(n=this.props.bookmark)||void 0===n?void 0:n.meta)||void 0===a?void 0:a.description)&&void 0!==l?l:"No description",b="small"===this.props.size,k=(0,s.resolveUrlForUrlEntity)({url:null!==(c=null==f?void 0:f.url)&&void 0!==c?c:""});return o.html`
      ${b?o.html`
            <webhighlights-favicon
              src=${null!==(g=null===(d=null==f?void 0:f.meta)||void 0===d?void 0:d.favicon)&&void 0!==g?g:""}
              size="22"
              data-testid="${p.TEST_IDS.FAVICON}"
              alt=${`Icon - ${null!==(v=null==f?void 0:f.title)&&void 0!==v?v:""}`}
            ></webhighlights-favicon>
          `:o.html`
            <webhighlights-image-with-fallback
              class="preview-image"
              .props=${this.imageWithFallbackProps}
            ></webhighlights-image-with-fallback>
          `}
      <div class="card-content">
        <main class="page-info">
          <span
            part="title"
            class="title truncate"
            title="${m}"
            data-testid="${p.TEST_IDS.TITLE}"
            >${m}</span
          >
          ${"small"===this.props.size?o.html``:o.html`
                <span
                  part="description"
                  class="description"
                  title="${w}"
                  data-testid="${p.TEST_IDS.DESCRIPTION}"
                  >${(0,s.truncateString)(w,160)}</span
                >
              `}
          ${this.props.hideUrl?o.html``:(0,h.Y)({url:k,testId:p.TEST_IDS.URL,faviconUrl:b||null===(u=null==f?void 0:f.meta)||void 0===u?void 0:u.favicon})}
        </main>
        <footer>
          ${"small"===this.props.size?o.html``:o.html`
                <webhighlights-bookmark-preview-tags
                  .props=${this.props}
                ></webhighlights-bookmark-preview-tags>
              `}
          ${this.props.hideAmountInfo?o.html``:o.html`
                <webhighlights-bookmark-preview-highlights-notes-info
                  .props=${this.props}
                ></webhighlights-bookmark-preview-highlights-notes-info>
              `}
        </footer>
      </div>
    `}}d.styles=o.css`
    ${(0,o.unsafeCSS)(a())}
  `,function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);n>3&&a&&Object.defineProperty(e,i,a)}([(0,r.property)()],d.prototype,"props",void 0),l.y.define(c,d)},28619:(t,e,i)=>{var o=i(68404);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},30827:(t,e,i)=>{"use strict";i.d(e,{y:()=>n});var o=i(38085),r=i(93811);class n extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,i){(0,o.defineWebHighlightsElement)(t,e,i)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},e.i=function(t,i,o,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var h=0;h<t.length;h++){var p=[].concat(t[h]);o&&a[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},50288:(t,e,i)=>{var o=i(14955);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},63876:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(36758),r=i.n(o),n=i(40935),a=i.n(n)()(r());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}.url-container{display:flex;align-items:center;gap:2px}.url-container .url{color:var(--wh-text-lightest);font-size:9.5px;line-height:12px;max-width:140px;text-decoration:none}.url-container .favicon{transform:translateY(1px)}.url-container .entity-external-link-icon{transition:opacity .2s ease}.url-container .entity-external-link-icon:not(:focus){opacity:0}.url-container .icon{color:var(--wh-text-lightest);fill:var(--wh-text-lightest)}.url-container:hover .entity-external-link-icon{opacity:1}.url-container:hover .entity-external-link-icon:hover .icon{color:var(--wh-text);fill:var(--wh-text)}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host{font-family:var(--wh-font-family);cursor:pointer;width:100%;line-height:1.2;display:flex;align-items:center;flex-wrap:wrap;justify-content:left;box-sizing:border-box}.preview-image{border-radius:8px}:host(.small){gap:8px;font-size:12px}:host(.small) .preview-image{height:80px}:host(.medium){gap:14px;font-size:13px}:host(.medium) .preview-image{height:100px}:host(.large){gap:18px;font-size:14px}:host(.large) .preview-image{height:140px}:host(:hover) .badge,:host(:hover) .title{color:var(--wh-text)}.title{color:var(--wh-text-light);font-size:12ppx;max-width:190px;max-width:var(--wh-max-width-title, 190px);font-weight:600}.page-info{display:flex;flex-direction:column}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}header{width:100%}footer{margin-left:auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:2px;justify-content:flex-end;width:100%;row-gap:6px}footer .tags,footer .highlights-info{flex:1 auto;display:flex;gap:4px;flex-wrap:wrap;width:100%}footer .tags{height:16px}',""]);const s=a},67050:(t,e,i)=>{"use strict";var o=i(93811),r=i(95665),n=i(79525),a=i.n(n),s=i(38085),l=i(30827);const h=s.SHARED_COMPONENTS_INTERNAL.BookmarkPreviewTags.TAG;class p extends l.y{constructor(){super(...arguments),this.components=[s.SHARED_COMPONENTS.Tag.TAG]}get maxTags(){var t;return 2===(null===(t=this.props.bookmark)||void 0===t?void 0:t.tags.length)?2:1}render(){var t,e,i,r,n,a,l,h,p;return o.html`
      ${null===(i=null===(e=null===(t=this.props.bookmark)||void 0===t?void 0:t.tags)||void 0===e?void 0:e.slice(0,this.maxTags))||void 0===i?void 0:i.map(t=>o.html`<webhighlights-tag
              class="tag"
              .readOnly=${!0}
              .selectable=${!0}
              .tag=${t}
              >${(0,s.truncateString)(t,30)}</webhighlights-tag
            >`)}
      ${(null!==(a=null===(n=null===(r=this.props.bookmark)||void 0===r?void 0:r.tags)||void 0===n?void 0:n.length)&&void 0!==a?a:0)>this.maxTags?o.html`<webhighlights-tag
            class="tag"
            .selectable=${!1}
            .tag=${"More"}
            >... ${(null!==(p=null===(h=null===(l=this.props.bookmark)||void 0===l?void 0:l.tags)||void 0===h?void 0:h.length)&&void 0!==p?p:0)-this.maxTags}
            more</webhighlights-tag
          >`:o.html``}
    `}}p.styles=o.css`
    ${(0,o.unsafeCSS)(a())}
  `,function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);n>3&&a&&Object.defineProperty(e,i,a)}([(0,r.property)()],p.prototype,"props",void 0),l.y.define(h,p)},68404:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(36758),r=i.n(o),n=i(40935),a=i.n(n)()(r());a.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}.url-container{display:flex;align-items:center;gap:2px}.url-container .url{color:var(--wh-text-lightest);font-size:9.5px;line-height:12px;max-width:140px;text-decoration:none}.url-container .favicon{transform:translateY(1px)}.url-container .entity-external-link-icon{transition:opacity .2s ease}.url-container .entity-external-link-icon:not(:focus){opacity:0}.url-container .icon{color:var(--wh-text-lightest);fill:var(--wh-text-lightest)}.url-container:hover .entity-external-link-icon{opacity:1}.url-container:hover .entity-external-link-icon:hover .icon{color:var(--wh-text);fill:var(--wh-text)}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host{font-family:var(--wh-font-family);cursor:pointer;width:100%;font-size:var(--wh-font-size);line-height:calc(var(--wh-font-size) + 2px);display:flex;align-items:center;justify-content:left;gap:8px;box-sizing:border-box}.preview-image{aspect-ratio:1200/630;border-radius:8px}:host(.small){font-size:12px}:host(.small) .preview-image{width:40px}:host(.small) .card-content{justify-content:space-between}:host(.small) footer{width:-moz-fit-content;width:fit-content;margin-left:auto}:host(.medium){font-size:13px}:host(.medium) .preview-image{width:120px}:host(.medium) footer{width:100%}:host(.large){font-size:14px}:host(.large) .preview-image{width:160px}:host(.large) footer{width:100%}:host(:hover) .badge,:host(:hover) .title{color:var(--wh-text)}.title{color:var(--wh-text-light);font-weight:600;line-height:1.5;max-width:165px;max-width:var(--wh-max-width-title, 165px)}.description{font-size:11px;color:var(--wh-text-lighter);margin:4px 0 8px 0;display:none}@media(min-width: 768px){.description{display:block}}.page-info{display:flex;flex-direction:column}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2.5px;-moz-column-gap:8px;column-gap:8px}.card-content{display:flex;flex-wrap:wrap;align-items:center;width:100%;gap:4px}',""]);const s=a},73679:(t,e,i)=>{var o=i(63876);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},76064:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(36758),r=i.n(o),n=i(40935),a=i.n(n)()(r());a.push([t.id,":host{font-family:var(--wh-font-family);display:flex;align-items:center;gap:4px}:host .tag{--tag-size: 11px}",""]);const s=a},78936:(t,e,i)=>{"use strict";var o=i(93811),r=i(95665),n=i(73679),a=i.n(n),s=i(38085),l=i(30827),h=i(16625);const p=s.SHARED_COMPONENTS_INTERNAL.BookmarkPreviewGrid,c=p.TAG;class d extends l.y{constructor(){super(...arguments),this.components=[s.SHARED_COMPONENTS.Loading.TAG,s.SHARED_COMPONENTS.BookmarkPreviewHighlightsNotesInfo.TAG,s.SHARED_COMPONENTS.ImageWithFallback.TAG,s.SHARED_COMPONENTS.Favicon.TAG]}onBookmarkSelected(){this.dispatchEvent(new CustomEvent("selected"))}get imageWithFallbackProps(){var t,e,i,o,r,n,a;return{src:null===(i=null===(e=null===(t=this.props.bookmark)||void 0===t?void 0:t.meta)||void 0===e?void 0:e.image)||void 0===i?void 0:i.url,alt:null!==(a=null===(n=null===(r=null===(o=this.props.bookmark)||void 0===o?void 0:o.meta)||void 0===r?void 0:r.image)||void 0===n?void 0:n.alt)&&void 0!==a?a:"Website preview"}}render(){var t,e;if(this.props.loading)return o.html`<webhighlights-loading></webhighlights-loading>`;if(!this.props.bookmark)return o.html``;const i=this.props.bookmark,r=(null===(t=this.props.bookmark)||void 0===t?void 0:t.title)||"Untitled",n=(0,s.resolveUrlForUrlEntity)({url:i.url});return o.html`
      <webhighlights-image-with-fallback
        class="preview-image"
        .props=${this.imageWithFallbackProps}
      ></webhighlights-image-with-fallback>

      <header class="page-info">
        <span
          part="title"
          class="title truncate"
          title="${r}"
          data-testid="${p.TEST_IDS.TITLE}"
          >${r}</span
        >
        ${this.props.hideUrl?o.html``:(0,h.Y)({url:n,testId:p.TEST_IDS.URL,faviconUrl:null===(e=null==i?void 0:i.meta)||void 0===e?void 0:e.favicon})}
      </header>
      <footer>
        <webhighlights-bookmark-preview-tags
          class="tags"
          .props=${this.props}
        ></webhighlights-bookmark-preview-tags>

        ${this.props.hideAmountInfo?o.html``:o.html`
              <webhighlights-bookmark-preview-highlights-notes-info
                class="highlights-info"
                .props=${this.props}
              ></webhighlights-bookmark-preview-highlights-notes-info>
            `}
      </footer>
    `}}d.styles=o.css`
    ${(0,o.unsafeCSS)(a())}
  `,function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);n>3&&a&&Object.defineProperty(e,i,a)}([(0,r.property)()],d.prototype,"props",void 0),l.y.define(c,d)},79525:(t,e,i)=>{var o=i(76064);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={id:o,exports:{}};return t[o](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=i(38085),e=i(93811),o=i(95665),r=i(30827),n=i(50288),a=i.n(n),s=(i(78936),i(25996),i(67050),function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a});const l=t.SHARED_COMPONENTS.BookmarkPreview,h="webhighlights-bookmark-preview";class p extends r.y{render(){if(!this.props)throw new Error(`Props missing for '${h}'`);return"list"===this.props.type?e.html`<webhighlights-bookmark-preview-list
        part="preview-container"
        class="preview-container ${this.props.size}"
        data-testid=${l.TEST_IDS.PREVIEW_ITEM}
        .props=${this.props}
      ></webhighlights-bookmark-preview-list>`:"grid"===this.props.type?e.html`<webhighlights-bookmark-preview-grid
        part="preview-container"
        class="preview-container ${this.props.size}"
        data-testid=${l.TEST_IDS.PREVIEW_ITEM}
        .props=${this.props}
      ></webhighlights-bookmark-preview-grid>`:e.html``}}p.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,s([(0,o.property)({type:Object})],p.prototype,"props",void 0),r.y.define(h,p)})()})();