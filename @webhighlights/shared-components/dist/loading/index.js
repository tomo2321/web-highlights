(()=>{var t={7857:(t,e,r)=>{var n=r(11068);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},11068:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var n=r(36758),o=r.n(n),i=r(40935),s=r.n(i)()(o());s.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--spinner-color: var(--wh-primary-color)}.loader{display:flex;align-items:center;justify-content:center}svg path,svg rect{fill:var(--spinner-color)}",""]);const a=s},30827:(t,e,r)=>{"use strict";r.d(e,{y:()=>i});var n=r(38085),o=r(93811);class i extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,r){(0,n.defineWebHighlightsElement)(t,e,r)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r}).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);n&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=r(93811),e=r(95665),n=r(38085),o=r(30827),i=r(7857),s=r.n(i),a=function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const c=n.SHARED_COMPONENTS.Loading.TAG;class l extends o.y{constructor(){super(...arguments),this.type="spinner",this.size=24}renderLoadingComponent(e){if("spinner"===this.type)return t.html`
          <!-- 3  -->
          <div class="loader loader--style3" title="2">
            <svg
              version="1.1"
              id="loader-1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="${this.size}px"
              height="${this.size}px"
              viewBox="0 0 50 50"
              style="enable-background:new 0 0 50 50;"
              xml:space="preserve"
            >
              <path
                fill="#000"
                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        `}render(){return this.renderLoadingComponent(this.type)}}l.styles=t.css`
    ${(0,t.unsafeCSS)(s())}
  `,a([(0,e.property)()],l.prototype,"type",void 0),a([(0,e.property)()],l.prototype,"size",void 0),o.y.define(c,l)})()})();