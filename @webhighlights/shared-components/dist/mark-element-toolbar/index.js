(()=>{var t={22691:(t,e,o)=>{var i=o(69216);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>s});var i=o(38085),r=o(93811);class s extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,i.defineWebHighlightsElement)(t,e,o)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,i,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);i&&n[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},69216:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var i=o(36758),r=o.n(i),s=o(40935),n=o.n(s)()(r());n.push([t.id,":host{display:block;--border-radius-item: 4px;--wh-toolbar-icon-size: 14px}.container{display:flex;align-items:center;width:100%;-moz-column-gap:2.5px;column-gap:2.5px;justify-content:flex-end;background-color:var(--wh-bg-base);width:-moz-fit-content;width:fit-content;box-shadow:var(--wh-shadow);z-index:1;border-radius:var(--border-radius-item);cursor:default}.toolbar-btn{display:flex;align-items:center;background-color:var(--wh-bg-base);border-radius:var(--border-radius-item);color:var(--wh-text);padding:4px;box-sizing:content-box;background:none;border:none;cursor:pointer}.toolbar-btn:hover,.toolbar-btn.active{background-color:var(--wh-bg-base-hover-strong);color:var(--wh-text-strong)}.toolbar-btn.toolbar-btn{--wh-icon-size: var(--wh-toolbar-icon-size, 14px)}.toolbar-btn.toolbar-btn::part(icon){width:14px;width:var(--wh-toolbar-icon-size, 14px);height:14px;height:var(--wh-toolbar-icon-size, 14px)}.toolbar-btn.toolbar-btn.has-content{cursor:not-allowed;opacity:.5}.toolbar-btn.color-picker{--color-picker-size: var(--wh-toolbar-icon-size, 14px)}.toolbar-btn.color-picker::part(button){box-shadow:none}.media-type-dropdown-container{position:relative;--media-type-dropdown-icon-size: var(--wh-toolbar-icon-size, 14px)}.media-type-dropdown-container .selected-media-item::part(blocktype-dropdown-item-btn){padding:4px}.media-type-dropdown-container .selected-media-item.active{background-color:var(--wh-bg-base-hover-strong);color:var(--wh-text-strong)}",""]);const a=n},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function o(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(95665),i=o(38085),r=o(30827),s=o(22691),n=o.n(s),a=function(t,e,o,i){var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},l=function(t,e,o,i){return new(o||(o=Promise))(function(r,s){function n(t){try{l(i.next(t))}catch(t){s(t)}}function a(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,a)}l((i=i.apply(t,e||[])).next())})};const d=i.SHARED_COMPONENTS.MarkElementToolbar;class p extends r.y{constructor(){super(...arguments),this.components=[i.SHARED_COMPONENTS.Icon.TAG,i.SHARED_COMPONENTS.ColorPicker.TAG,i.SHARED_COMPONENTS.ClipboardButton.TAG,i.SHARED_COMPONENTS.MediaTypeDropdown.TAG,i.SHARED_COMPONENTS.MediaTypeDropdownItem.TAG],this.isMediaTypeDropdownOpen=!1,this.outsideClickListener=null}get shouldShowTags(){var t,e;return this.props.enabledFeatures.toggleTags&&!(this.props.tagsWereToggled||(null===(e=null===(t=this.props.mark)||void 0===t?void 0:t.tags)||void 0===e?void 0:e.length))}get shouldShowColorPicker(){return this.props.enabledFeatures.changeColor&&!this.props.readOnly}get shouldShowCopyToClipboard(){return this.props.enabledFeatures.copyToClipboard}get shouldShowNotes(){return this.props.enabledFeatures.toggleNotes&&!this.props.notesWereToggled&&!(0,i.markHasNote)(this.props.mark)}get shouldShowDeleteBtn(){return this.props.enabledFeatures.deleteMark}get shouldShowMediaTypes(){var t;return this.props.enabledFeatures.mediaTypes&&"image"!==(null===(t=this.props.mark)||void 0===t?void 0:t.mediaType)}get shouldShowSidebarToggle(){return this.props.enabledFeatures.sidebarToggle}get activeDropDownItemProps(){var t;return{activeMediaType:(null===(t=this.props.mark)||void 0===t?void 0:t.mediaType)||i.DEFAULT_MEDIA_TYPE,isLoading:this.props.isLoading}}tagsChanged(t){if(!this.props.mark)return;t.stopPropagation();const e=t.detail.tags;this.props.mark=Object.assign(Object.assign({},this.props.mark),{tags:e}),(0,i.updateMark)({_id:this.props.mark._id,tags:e})}onToggleTags(t){(0,i.stopPropagation)(t),this.dispatchEvent(new CustomEvent("toggleTags",{detail:null}))}onToggleRichEditor(t){(0,i.stopPropagation)(t),this.dispatchEvent(new CustomEvent("toggleRichEditor",{detail:null}))}onDeleteClick(t){(this.props.markId||this.props.mark)&&((0,i.stopPropagation)(t),(0,i.deleteMark)(Object.assign({_id:this.props.markId},this.props.mark)),this.dispatchEvent(new CustomEvent("deleted")))}onCopyToClipboard(t){return l(this,void 0,void 0,function*(){this.props.mark&&(yield(0,i.copyMark)(this.props.mark))})}updateColorOfMark(t){return l(this,void 0,void 0,function*(){var e;if(!this.props.mark)return;const{recentColors:o}=null!==(e=this.props.chromeSettings)&&void 0!==e?e:i.fallbackChromeSettings,r=[t,...o].slice(0,10);yield(0,i.updateChromeSettings)({recentColors:r}),this.props.mark=Object.assign(Object.assign({},this.props.mark),{color:t})})}updateColor(t){return l(this,arguments,void 0,function*({isChange:t,color:e,isDefaultChange:o}){var r;this.props.mark&&t&&!o&&this.props.mark&&(null===(r=this.props.mark)||void 0===r?void 0:r.color)!==e&&(yield this.updateColorOfMark(e),(0,i.isWebAppUrl)(location.href)||(0,i.updateColorOfMarkDomElements)(Object.assign(Object.assign({},this.props.mark),{color:e})),yield(0,i.updateMark)({_id:this.props.mark._id,color:e}))})}changeMediaTypeOfMark(t){return l(this,void 0,void 0,function*(){if(!this.props.mark)return;let e=i.DEFAULT_MEDIA_TYPE;(0,i.isAcceptedMediaType)(t.type)&&(e=t.type),yield(0,i.updateMark)({_id:this.props.mark._id,mediaType:e}),this.isMediaTypeDropdownOpen=!1})}onMediaTypeDropdownItemSelected(t){this.changeMediaTypeOfMark(t.detail)}clickAwayListener(t){var e;!(null===(e=t.composedPath())||void 0===e?void 0:e.some(t=>t==this))&&(this.isMediaTypeDropdownOpen=!1,this.removeClickAwayListener())}addClickAwayListener(){this.removeClickAwayListener(),this.outsideClickListener=this.clickAwayListener.bind(this),document.addEventListener("click",this.outsideClickListener)}removeClickAwayListener(){this.outsideClickListener&&document.removeEventListener("click",this.outsideClickListener)}onToggleMediaTypeDropdown(){this.isMediaTypeDropdownOpen=!this.isMediaTypeDropdownOpen,this.isMediaTypeDropdownOpen&&this.addClickAwayListener()}onToggleSidebar(){const t=!(0,i.sidebarIsOpen)();document.body.click(),i.notifications.dispatch("toggleSidebar",{detail:null}),t&&setTimeout(()=>{this.props.mark&&i.notifications.dispatch("clickOnHighlight",{detail:this.props.mark})},400)}get sidebarIsLeftAligned(){var t;return"left"===(null!==(t=this.props.chromeSettings)&&void 0!==t?t:i.fallbackChromeSettings).sidebarOptions.sidebarAlignment}render(){var e,o,r,s,n,a,p,c;return t.html`<header
      class="container"
      part="container"
      data-testid=${d.TEST_IDS.CONTAINER}
    >
      ${this.shouldShowSidebarToggle?t.html` <button
            class="toolbar-btn"
            title="Toggle sidebar"
            @click=${this.onToggleSidebar}
            data-testid=${d.TEST_IDS.TOGGLE_SIDEBAR_BTN}
            style="transform: rotate(${(0,i.sidebarIsOpen)()?this.sidebarIsLeftAligned?"180":"0":this.sidebarIsLeftAligned?"0":"180"}deg);"
          >
            <webhighlights-icon
              icon="${i.ICON_NAMES["sidebar-expand"]}"
              class="icon"
              strokeWidth="1.5"
              size="14"
            ></webhighlights-icon>
          </button>`:t.html``}
      ${this.shouldShowColorPicker?t.html`
            <webhighlights-color-picker
              class="toolbar-btn color-picker"
              .highlightColor="${null===(o=null===(e=this.props)||void 0===e?void 0:e.mark)||void 0===o?void 0:o.color}"
              .isLoading=${this.props.isLoading}
              .recentColors=${null!==(s=null===(r=this.props.chromeSettings)||void 0===r?void 0:r.recentColors)&&void 0!==s?s:[]}
              .chromeSettings=${null!==(n=this.props.chromeSettings)&&void 0!==n?n:i.fallbackChromeSettings}
              .popupPosition=${"left"}
              data-testid=${d.TEST_IDS.COLOR_PICKER}
              @changeColor=${t=>l(this,void 0,void 0,function*(){return yield this.updateColor(t.detail)})}
            ></webhighlights-color-picker>
          `:t.html``}
      ${this.shouldShowTags?t.html` <button
            class="toolbar-btn ${(null===(p=null===(a=this.props.mark)||void 0===a?void 0:a.tags)||void 0===p?void 0:p.length)?"has-content":"has-no-content"}"
            title="Add tags"
            @click=${this.onToggleTags}
            data-testid=${d.TEST_IDS.TOGGLE_TAGS_BTN}
          >
            <webhighlights-icon
              icon=${i.ICON_NAMES.tag}
              strokeWidth="1.5"
              size="14"
            ></webhighlights-icon>
          </button>`:t.html``}
      ${this.shouldShowNotes?t.html` <button
            class="toolbar-btn ${(0,i.markHasNote)(this.props.mark)?"has-content":"has-no-content"}"
            title="Take note"
            @click=${this.onToggleRichEditor}
            data-testid=${d.TEST_IDS.TOGGLE_NOTES_BTN}
          >
            <webhighlights-icon
              icon=${i.ICON_NAMES["feather-edit-3"]}
              class="icon"
              strokeWidth="1.5"
              size="14"
            ></webhighlights-icon>
          </button>`:t.html``}
      ${this.shouldShowCopyToClipboard?t.html`
            <webhighlights-clipboard-button
              tooltipPosition="up"
              class="toolbar-btn"
              .isLoading=${this.props.isLoading}
              data-testid=${d.TEST_IDS.COPY_BTN}
              @click=${i.stopPropagation}
              @copied="${this.onCopyToClipboard}"
            ></webhighlights-clipboard-button>
          `:t.html``}
      ${this.shouldShowMediaTypes?t.html`
            <div class="media-type-dropdown-container" title="Select format">
              <webhighlights-media-type-dropdown-item
                @itemSelected=${this.onToggleMediaTypeDropdown}
                .props=${this.activeDropDownItemProps}
                class="selected-media-item ${this.isMediaTypeDropdownOpen?"active":""}"
                .showDropdownIcon=${null!==(c=this.props.showDropdownArrowForMediaType)&&void 0!==c&&c}
                .showLabel=${!1}
              ></webhighlights-media-type-dropdown-item>
              ${this.isMediaTypeDropdownOpen?t.html`
                    <webhighlights-media-type-dropdown
                      @itemSelected=${this.onMediaTypeDropdownItemSelected}
                      .activeMediaType=${this.activeDropDownItemProps.activeMediaType}
                    ></webhighlights-media-type-dropdown>
                  `:t.html``}
            </div>
          `:t.html``}
      ${this.shouldShowDeleteBtn?t.html`
            <button
              class="delete-btn toolbar-btn"
              title="Delete highlight"
              data-testid="${d.TEST_IDS.DELETE_BTN}"
              @click=${this.onDeleteClick}
            >
              <webhighlights-icon
                class="icon"
                icon=${i.ICON_NAMES.trash}
                strokeWidth="1.5"
                size="14"
              ></webhighlights-icon>
            </button>
          `:t.html``}
    </header>`}}p.styles=t.css`
    ${(0,t.unsafeCSS)(n())}
  `,a([(0,e.property)({type:Object})],p.prototype,"props",void 0),a([(0,e.state)()],p.prototype,"isMediaTypeDropdownOpen",void 0),r.y.define("webhighlights-mark-element-toolbar",p)})()})();