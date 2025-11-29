(()=>{var e={22888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(36758),a=r.n(o),n=r(40935),s=r.n(n)()(a());s.push([e.id,'[dir="ltr"] :host{text-align:left}[dir="rtl"] :host{text-align:right}:host{--tag-size: 12px;--tag-remove-bg-color-hover: rgba(234, 234, 234, 0.2);display:flex;align-items:center;font-family:var(--wh-font-family)}.tag{border-radius:4px;padding:2.5px 5px;background-color:var(--wh-bg-tags);color:var(--wh-text-light);font-size:12px;font-size:var(--tag-size, 12px);line-height:1;display:inline-flex;-moz-column-gap:4px;column-gap:4px;align-items:center;transition:.1s all ease-in-out;opacity:1;border:.1px solid var(--wh-subtle-gray)}.tag:hover{color:var(--wh-text)}.tag:hover .tag-badge{color:var(--wh-text)}.tag.selectable{cursor:pointer}.tag.selectable:hover{background-color:var(--wh-bg-tags-hover)}.tag-badge{font-size:8px;border-radius:9999px;background-color:var(--wh-subtle-gray);color:var(--wh-text-lighter);display:inline-flex;text-align:center;align-items:center;padding:0 5px;box-sizing:border-box;justify-content:center;height:12px;height:var(--tag-size, 12px)}.removable-x{cursor:pointer;border:none;background:rgba(0,0,0,0);display:inline-flex;text-align:center;align-items:center;box-sizing:border-box;padding:0;justify-content:center;transition:all .1s ease-in;color:var(--wh-text-lighter);border-radius:4px;outline:none}.removable-x:hover,.removable-x:focus{color:var(--wh-text-strong);background:var(--wh-subtle-gray)}',""]);const i=s},30827:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var o=r(38085),a=r(93811);class n extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,r){(0,o.defineWebHighlightsElement)(e,t,r)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,o,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&s[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},49925:(e,t,r)=>{var o=r(22888);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(38085),t=r(93811),o=r(95665),a=r(30827),n=r(49925),s=r.n(n),i=function(e,t,r,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};const l=e.SHARED_COMPONENTS.Tag,c=l.TAG;class p extends a.y{constructor(){super(...arguments),this.badge=null,this.readOnly=!1,this.removable=!1,this.selectable=!1}get showRemoveIcon(){return!1!==this.removable}get isSelectable(){return!1!==this.selectable}get showBadge(){return!(!this.badge||!Number(this.badge))&&"number"==typeof+this.badge&&+this.badge>1}onRemoveIconClick(t){(0,e.stopPropagation)(t),this.dispatchEvent(new CustomEvent("removed"))}onTagSelected(t){this.readOnly&&t&&(0,e.stopPropagation)(t),"function"!=typeof this.onSelect?this.isSelectable&&e.notifications.dispatch("selectedTag",{detail:{tag:this.tag}}):this.onSelect()}onKeyUp(t){(0,e.isEnterKeyUp)(t)&&this.selectable&&this.onTagSelected()}render(){return"string"!=typeof this.tag?(console.error("[webhighlights-tag] Please pass a 'tag'"),t.html``):t.html` <span
      part="tag"
      class="tag ${this.isSelectable?"selectable":""}"
      data-testId=${l.TEST_IDS.SELECT_BTN}
      tabindex="0"
      @click=${this.onTagSelected}
      @keyup=${this.onKeyUp}
      ><slot></slot>
      ${this.showBadge?t.html`<span
            part="badge"
            class="tag-badge"
            data-testId=${l.TEST_IDS.BADGE}
            >${this.badge}</span
          >`:t.html``}
      ${this.showRemoveIcon?t.html`<button
            class="removable-x"
            title="Remove tag"
            part="remove-btn"
            @click=${this.onRemoveIconClick}
            data-testId=${l.TEST_IDS.DELETE_BTN}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button> `:t.html``}
    </span>`}}p.styles=t.css`
    ${(0,t.unsafeCSS)(s())}
  `,i([(0,o.property)()],p.prototype,"tag",void 0),i([(0,o.property)()],p.prototype,"badge",void 0),i([(0,o.property)()],p.prototype,"readOnly",void 0),i([(0,o.property)()],p.prototype,"removable",void 0),i([(0,o.property)()],p.prototype,"selectable",void 0),i([(0,o.property)()],p.prototype,"onSelect",void 0),a.y.define(c,p)})()})();