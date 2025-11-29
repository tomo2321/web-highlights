(()=>{var e={18021:(e,t,r)=>{var o=r(86830);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},30827:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var o=r(38085),n=r(93811);class i extends n.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,r){(0,o.defineWebHighlightsElement)(e,t,r)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),t.push(u))}},t}},86830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(36758),n=r.n(o),i=r(40935),c=r.n(i)()(n());c.push([e.id,":host{display:block}.fallback-img{background-color:white;background-color:var(--wh-fallback-img-color, white);display:flex;align-items:center;justify-content:center;width:100%;height:100%}.fallback-img svg{color:gray}",""]);const s=c},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(93811),t=r(38085),o=r(95665),n=r(30827),i=r(18021),c=r.n(i);t.SHARED_COMPONENTS.FallbackImage;class s extends n.y{constructor(){super(...arguments),this.size=24}render(){return e.html`
      <div
        class="fallback-img"
        part="fallback-img"
        aria-label="Fallback Cover Image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="${this.size}"
          height="${this.size}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-image"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
    `}}s.styles=e.css`
    ${(0,e.unsafeCSS)(c())}
  `,function(e,t,r,o){var n,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(i<3?n(c):i>3?n(t,r,c):n(t,r))||c);i>3&&c&&Object.defineProperty(t,r,c)}([(0,o.property)()],s.prototype,"size",void 0),n.y.define("webhighlights-fallback-img",s)})()})();