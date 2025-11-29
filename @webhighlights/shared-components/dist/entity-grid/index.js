(()=>{var e={30827:(e,t,i)=>{"use strict";i.d(t,{y:()=>n});var r=i(38085),o=i(93811);class n extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,i){(0,r.defineWebHighlightsElement)(e,t,i)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i="",r=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),r&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),r&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i}).join("")},t.i=function(e,i,r,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var p={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(p[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&p[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},44330:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(36758),o=i.n(r),n=i(40935),p=i.n(n)()(o());p.push([e.id,":host{font-family:var(--wh-font-family)}.grid-section{padding:6px;display:flex;flex-wrap:wrap;height:-moz-fit-content;height:fit-content;width:100%;box-sizing:border-box;margin-bottom:8px}.grid-section.list.small{gap:0px}.grid-section.list.medium{gap:6px}.grid-section.list.large{gap:8px}.grid-section.grid.small{gap:6px;padding:4px}.grid-section.grid.medium{gap:8px;padding:8px}.grid-section.grid.large{gap:14px;padding:12px}.grid-container{display:flex;flex-wrap:wrap;box-sizing:border-box}.grid-container.list.small{gap:0px;padding:12px 0}.grid-container.list.medium{gap:6px;padding:16px 12px}.grid-container.list.large{gap:10px;padding:24px 14px}.grid-container.grid.small{gap:12px;padding:12px 8px}.grid-container.grid.medium{gap:14px;padding:16px 12px}.grid-container.grid.large{gap:16px;padding:24px 14px}.preview-component::part(preview-container){background-color:var(--wh-bg-back)}.preview-component:hover::part(preview-container){background-color:var(--wh-bg-back-hover)}.preview-component.list{width:100%}.preview-component.list.small::part(preview-container){padding:6px 4px}.preview-component.list.medium::part(preview-container){padding:12px 8px;border-radius:4px;box-shadow:var(--wh-shadow)}.preview-component.list.large::part(preview-container){padding:16px 12px;border-radius:8px;box-shadow:var(--wh-shadow)}.preview-component.grid{max-width:100vw}.preview-component.grid::part(preview-container){border-radius:4px;box-shadow:var(--wh-shadow);width:100%}.preview-component.grid.small.bookmarks{width:200px}.preview-component.grid.small.marks{width:300px}.preview-component.grid.small::part(preview-container){padding:8px 6px}.preview-component.grid.medium.bookmarks{width:220px}.preview-component.grid.medium.marks{width:360px}.preview-component.grid.medium::part(preview-container){padding:12px 8px}.preview-component.grid.large.bookmarks{width:260px}.preview-component.grid.large.marks{width:440px}.preview-component.grid.large::part(preview-container){padding:14px 10px;border-radius:8px}.grid-section-title{color:var(--wh-text);font-size:12px;margin-bottom:6px;display:inline-block;font-weight:600;width:100%}",""]);const s=p},52155:(e,t,i)=>{var r=i(44330);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=i(38085),t=i(93811),r=i(95665),o=i(30827),n=i(52155),p=i.n(n),s=function(e,t,i,r){return new(i||(i=Promise))(function(o,n){function p(e){try{a(r.next(e))}catch(e){n(e)}}function s(e){try{a(r.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(p,s)}a((r=r.apply(e,t||[])).next())})};const a=e.SHARED_COMPONENTS.EntityGrid.TAG;class c extends o.y{constructor(){super(...arguments),this.components=[e.SHARED_COMPONENTS.BookmarkPreview.TAG,e.SHARED_COMPONENTS.MarkPreview.TAG]}get sortedGridEntities(){const t=this.props.entities.sort((t,i)=>{var r;return(0,e.sortEntitiesBy)(t,i,this.props.sortDirection,null!==(r=this.props.sortType)&&void 0!==r?r:"createdAt")});return this.props.pagination?t.slice((this.props.pagination.page-1)*this.props.pagination.step,this.props.pagination.step*this.props.pagination.page):t}get groupedGridEntities(){var t,i,r,o;return(0,e.resolveGroupedGridEntities)(null!==(t=this.props.entities)&&void 0!==t?t:[],null!==(i=this.props.groupBy)&&void 0!==i?i:"date",null!==(r=this.props.sortDirection)&&void 0!==r?r:"asc",null!==(o=this.props.sortType)&&void 0!==o?o:"createdAt",this.props.pagination)}render(){var i,r,o;if(!this.props)throw new Error(`Props missing for '${a}'`);const n=e=>Object.assign({bookmark:e},this.props.previewOptions),p=e=>Object.assign({mark:e},this.props.previewOptions),c=e=>`preview-component ${this.props.previewOptions.size} ${this.props.previewOptions.type} ${e._objectStore}`,d=`grid-container ${this.props.previewOptions.size} ${this.props.previewOptions.type}`;return this.props.groupBy?t.html`<div class="${d}" part="grid-container">
      ${null===(o=this.groupedGridEntities)||void 0===o?void 0:o.map(i=>t.html`<section
          class="grid-section ${this.props.previewOptions.size} ${this.props.previewOptions.type}"
          part="grid-section"
        >
          <span class="grid-section-title">${i.title}</span>
          ${i.items.filter(e.isBookmark).map(i=>{const r=n(i);return t.html`<webhighlights-bookmark-preview
              part="bookmark-preview"
              tabindex="0"
              class="${c(i)}"
              @click=${t=>(0,e.onBookmarkSelected)(i,r,t)}
              @keyup=${t=>(0,e.isEnterKeyUp)(t)&&(0,e.onBookmarkSelected)(i,r)}
              .props=${r}
            >
            </webhighlights-bookmark-preview>`})}
          ${i.items.filter(e.isMark).map(i=>{const r=p(i);return t.html`<webhighlights-mark-preview
              part="mark-preview"
              tabindex="0"
              class="${c(i)}"
              @click=${t=>s(this,void 0,void 0,function*(){return(0,e.onMarkSelected)(i,r,t)})}
              @keyup=${t=>(0,e.isEnterKeyUp)(t)&&(0,e.onMarkSelected)(i,r)}
              .props=${r}
            >
            </webhighlights-mark-preview>`})}
        </section>`)}
    </div>`:t.html`<div class="${d}" part="grid-container">
        ${null===(i=this.sortedGridEntities)||void 0===i?void 0:i.filter(e.isBookmark).map(i=>{const r=n(i);return t.html`<webhighlights-bookmark-preview
            part="bookmark-preview"
            tabindex="0"
            class="${c(i)}"
            @click=${t=>(0,e.onBookmarkSelected)(i,r,t)}
            @keyup=${t=>(0,e.isEnterKeyUp)(t)&&(0,e.onBookmarkSelected)(i,r)}
            .props=${r}
          ></webhighlights-bookmark-preview>`})}
        ${null===(r=this.sortedGridEntities)||void 0===r?void 0:r.filter(e.isMark).map(i=>{const r=p(i);return t.html`<webhighlights-mark-preview
            part="mark-preview"
            tabindex="0"
            class="${c(i)}"
            @click=${t=>s(this,void 0,void 0,function*(){return(0,e.onMarkSelected)(i,r,t)})}
            @keyup=${t=>(0,e.isEnterKeyUp)(t)&&(0,e.onMarkSelected)(i,r)}
            .props=${r}
          ></webhighlights-mark-preview>`})}
      </div>`}}c.styles=t.css`
    ${(0,t.unsafeCSS)(p())}
  `,function(e,t,i,r){var o,n=arguments.length,p=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(p=(n<3?o(p):n>3?o(t,i,p):o(t,i))||p);n>3&&p&&Object.defineProperty(t,i,p)}([(0,r.property)()],c.prototype,"props",void 0),o.y.define(a,c)})()})();