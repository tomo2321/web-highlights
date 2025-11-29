(()=>{var e={12857:(e,t,o)=>{var r=o(79222);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()},30827:(e,t,o)=>{"use strict";o.d(t,{y:()=>i});var r=o(38085),s=o(93811);class i extends s.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,o){(0,r.defineWebHighlightsElement)(e,t,o)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o}).join("")},t.i=function(e,o,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var n=0;n<this.length;n++){var l=this[n][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var h=[].concat(e[d]);r&&a[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),o&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=o):h[2]=o),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),t.push(h))}},t}},79222:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var r=o(36758),s=o.n(r),i=o(40935),a=o.n(i)()(s());a.push([e.id,":host{display:block}.mark-element-container{position:relative;padding:0}.mark-element-container .header-toolbar{opacity:0;--wh-toolbar-icon-size: 14px}.mark-element-container .header-toolbar::part(container){position:absolute;right:0;top:-14px}.mark-element-container:hover .header-toolbar,.mark-element-container[focus-within] .header-toolbar,.mark-element-container.focused .header-toolbar{opacity:1}.mark-element-container:hover .header-toolbar,.mark-element-container:focus-within .header-toolbar,.mark-element-container.focused .header-toolbar{opacity:1}.mark-element-container .blockquote-element{--mark-blockquote-color: var(--wh-text-light)}.mark-element-container .blockquote-element:hover{--mark-blockquote-color: var(--wh-text-strong)}.footer{width:100%;display:flex;flex-wrap:wrap;row-gap:4px;-moz-column-gap:4px;column-gap:4px;align-items:center}webhighlights-notes-editor{width:100%;margin-top:4px}webhighlights-tags{margin-top:4px}.notes-editor{padding-bottom:8px}",""]);const n=a},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=o(93811),t=o(95665),r=o(38085),s=o(30827),i=o(12857),a=o.n(i),n=function(e,t,o,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};const l=r.SHARED_COMPONENTS.MarkElement;class d extends s.y{constructor(){super(...arguments),this.isFocusedMark=!1,this.readOnly=!1,this.showDeleteBtn=!0,this.showColorPicker=!0,this.isCurrentPageMode=!1,this.showCopyToClipboard=!0,this.notesWereToggled=!1,this.tagsWereToggled=!1,this.isDragged=!1,this.components=[r.SHARED_COMPONENTS.MarkElementToolbar.TAG,r.SHARED_COMPONENTS.MarkMediaItem.TAG,r.SHARED_COMPONENTS.Tags.TAG,r.SHARED_COMPONENTS.NotesEditor.TAG]}tagsChanged(e){e.stopPropagation();const t=e.detail.tags;this.mark=Object.assign(Object.assign({},this.mark),{tags:t}),(0,r.updateMark)({_id:this.mark._id,tags:t})}get notesEditorProps(){return{content:(0,r.resolveNotesContentOfMark)(this.mark),isLoading:!1,focused:this.notesWereToggled,editable:!this.readOnly,onUpdate:e=>{const t={notes:e,_id:this.mark._id};(0,r.updateMark)(t),this.mark=Object.assign(Object.assign({},this.mark),t)}}}get shouldShowNotes(){return(this.notesWereToggled||(0,r.markHasNote)(this.mark))&&this.notesEditorProps}get shouldShowTags(){var e,t;return this.tagsWereToggled||(null===(t=null===(e=this.mark)||void 0===e?void 0:e.tags)||void 0===t?void 0:t.length)}onToggleRichEditor(e){this.notesWereToggled&&!(0,r.markHasNote)(this.mark)?this.notesWereToggled=!1:this.notesWereToggled=!0}onMarkMediaItemClick(e){this.isCurrentPageMode&&((0,r.isMobileTouchDevice)()&&(0,r.sidebarIsOpen)()&&r.notifications.dispatch("toggleSidebar",{detail:{}}),(0,r.scrollToMark)(e,this.mark))}onOutsideClickBlurred(){this.isFocusedMark=!1,this.notesWereToggled=!1,this.tagsWereToggled=!1}onToggleTags(e){var t,o;this.tagsWereToggled&&!(null===(o=null===(t=this.mark)||void 0===t?void 0:t.tags)||void 0===o?void 0:o.length)?this.tagsWereToggled=!1:this.tagsWereToggled=!0}get markElementToolbarProps(){var e;return{mark:this.mark,markId:this.mark._id,isLoading:!1,chromeSettings:null!==(e=this.chromeSettings)&&void 0!==e?e:r.fallbackChromeSettings,notesWereToggled:this.notesWereToggled,tagsWereToggled:this.tagsWereToggled,readOnly:this.readOnly,showDropdownArrowForMediaType:!1,enabledFeatures:{changeColor:!0,deleteMark:!0,toggleNotes:!0,toggleTags:!0,copyToClipboard:!0,mediaTypes:!0}}}render(){var t,o,r,s;return this.mark?e.html`
      <section
        class="mark-element-container ${this.isFocusedMark?"focused":""} ${this.isDragged?"dragged":""}"
        data-testid=${l.TEST_IDS.CONTAINER}
        part="container"
      >
        ${this.readOnly?e.html``:e.html`
              <webhighlights-mark-element-toolbar
                class="header-toolbar"
                part="header-toolbar"
                .props=${this.markElementToolbarProps}
                @toggleTags=${this.onToggleTags}
                @toggleRichEditor=${this.onToggleRichEditor}
              ></webhighlights-mark-element-toolbar>
            `}
        <main>
          <webhighlights-mark-media-item
            class="blockquote-element ${this.isCurrentPageMode?"current-page-mode":""}"
            @click=${this.onMarkMediaItemClick}
            .mark=${this.mark}
          ></webhighlights-mark-media-item>
        </main>
        <footer class="footer">
          ${this.shouldShowTags?e.html`
                <webhighlights-tags
                  class="${(null===(t=this.mark.tags)||void 0===t?void 0:t.length)?"":"no-tags"}"
                  .tags=${null!==(o=this.mark.tags)&&void 0!==o?o:[]}
                  .readOnly=${this.readOnly}
                  data-testid=${l.TEST_IDS.TAGS}
                  .autofocus=${this.tagsWereToggled&&!(null===(s=null===(r=this.mark)||void 0===r?void 0:r.tags)||void 0===s?void 0:s.length)}
                  @blurred=${this.onOutsideClickBlurred}
                  @tagsChanged=${this.tagsChanged}
                ></webhighlights-tags>
              `:e.html``}
          ${this.shouldShowNotes?e.html`
                <webhighlights-notes-editor
                  .props=${this.notesEditorProps}
                  class="notes-editor"
                  @outsideClickBlurred=${this.onOutsideClickBlurred}
                  data-testid=${l.TEST_IDS.RICH_EDITOR}
                ></webhighlights-notes-editor>
              `:e.html``}
        </footer>
      </section>
    `:e.html``}}d.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,n([(0,t.property)()],d.prototype,"mark",void 0),n([(0,t.property)()],d.prototype,"chromeSettings",void 0),n([(0,t.property)()],d.prototype,"isFocusedMark",void 0),n([(0,t.property)()],d.prototype,"readOnly",void 0),n([(0,t.property)()],d.prototype,"showDeleteBtn",void 0),n([(0,t.property)()],d.prototype,"showColorPicker",void 0),n([(0,t.property)()],d.prototype,"isCurrentPageMode",void 0),n([(0,t.property)()],d.prototype,"showCopyToClipboard",void 0),n([(0,t.state)()],d.prototype,"notesWereToggled",void 0),n([(0,t.state)()],d.prototype,"tagsWereToggled",void 0),n([(0,t.state)()],d.prototype,"isDragged",void 0),s.y.define("webhighlights-mark-element",d)})()})();