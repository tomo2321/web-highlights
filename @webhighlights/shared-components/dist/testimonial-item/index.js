(()=>{var e={30827:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var i=r(38085),o=r(93811);class n extends o.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,r){(0,i.defineWebHighlightsElement)(e,t,r)}}},31036:(e,t,r)=>{var i=r(74195);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",i=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),i&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),i&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,i,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);i&&a[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},74195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(36758),o=r.n(i),n=r(40935),a=r.n(n)()(o());a.push([e.id,":host{display:inline-block;width:100%;page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid;height:-moz-fit-content;height:fit-content;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);background-color:#fff;text-align:center;border-radius:8px;cursor:default}figure{width:100%;height:100%;margin:0;padding:12px 6px;box-sizing:border-box}figcaption{font-size:14px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;margin-top:10px}figcaption img{margin-right:12px}.stars{display:flex;align-items:center;justify-content:center;color:#fde047}blockquote{margin:10px 8px}.blockquote-text{font-size:16px;font-size:var(--blockquote-font-size, 16px);font-style:italic;font-style:var(--blockquote-font-style, italic);font-weight:300;font-weight:var(--blockquote-font-weight, 300);color:#47585b;word-break:break-word;margin:0}.avatar-img{border-radius:50%}.reviewer-info-container{display:flex;align-items:center;justify-content:center}.reviewer-info-container>:not(template)~:not(template){border-left-width:2px;margin-left:-2px;border-left-style:solid;border-color:rgba(107,114,128,.3882352941)}.reviewer-info-text{padding-right:12px;font-weight:500;color:#111827}.reviewer-subinfo{padding-left:12px;font-size:14px;color:#6b7280}.visually-hidden{position:absolute !important;padding:0 !important;border:0 !important;height:1px !important;width:1px !important}.visually-hidden{clip:rect(1px, 1px, 1px, 1px);overflow:hidden;white-space:nowrap}",""]);const s=a},93811:e=>{"use strict";e.exports=LitExternal},95665:e=>{"use strict";e.exports=LitDecoratorsExternal}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={id:i,exports:{}};return e[i](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(93811),t=r(95665),i=r(38085),o=r(30827),n=r(31036),a=r.n(n);const s=i.SHARED_COMPONENTS.TestimonialItem.TAG;class c extends o.y{render(){var t;if(!(null===(t=this.props)||void 0===t?void 0:t.item))return e.html``;const{reviewText:r,reviewer:o,rating:n,createdAt:a,updatedAt:s}=this.props.item,c=new Date(Math.max(null!=a?a:0,null!=s?s:0)).toLocaleDateString(),l=(0,i.toGoogleAvatarUrl)(o.avatarURL,24);return e.html`
      <figure aria-labelledby="reviewRating" role="group">
        <div class="stars" id="reviewRating">
          ${Array.from({length:n}).map((t,r)=>e.html`
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                width="16"
                height="16"
                part="star"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            `)}
          <!-- Hidden description for screen readers to announce the rating -->
          <span class="visually-hidden">${n} out of 5 stars</span>
        </div>
        <blockquote part="blockquote">
          <p part="review-text" class="blockquote-text">
            &quot;${r}&quot;
          </p>
        </blockquote>
        <figcaption part="caption">
          <img
            class="avatar-img"
            part="image"
            referrerpolicy="no-referrer"
            width="${24}"
            height="${24}"
            loading="lazy"
            src=${l}
            alt="Profile picture of reviewer '${o.name}'"
          />
          <div class="reviewer-info-container">
            <cite class="reviewer-info-text" part="reviewer-name">
              ${(0,i.truncateString)(o.name,20,{truncateSymbol:""})}
            </cite>
            <time class="reviewer-subinfo" part="date-text"
              >${c}</time
            >
          </div>
        </figcaption>
      </figure>
    `}}c.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);n>3&&a&&Object.defineProperty(t,r,a)}([(0,t.property)()],c.prototype,"props",void 0),o.y.define(s,c)})()})();