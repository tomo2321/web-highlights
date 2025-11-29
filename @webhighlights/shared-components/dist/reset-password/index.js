(()=>{var t={21451:(t,e,o)=>{"use strict";o.d(e,{h:()=>r});const r=o(93811).css`
  form {
    margin: 0;
  }
  .auth-input-container {
    position: relative;
    width: 100%;
  }
  .auth-input {
    font-size: 16px;
    line-height: 16px;
    color: var(--wh-text);
    border-radius: 4px;
    background-color: var(--wh-bg-base);
    border: 1px solid var(--wh-border-base-strong);
    width: 100%;
    padding: 18px 12px 6px;
    box-sizing: border-box;
    caret-color: var(--wh-text) !important;
  }

  .auth-input:-webkit-autofill:focus-visible,
  .auth-input:focus-visible,
  .auth-input:hover {
    outline: none;
    border: 1px solid var(--wh-border-base-strong-hover);
  }
  .auth-input:-webkit-autofill,
  .auth-input:-webkit-autofill:hover,
  .auth-input:-webkit-autofill:focus,
  .auth-input:-webkit-autofill:active {
    color: var(--wh-text) !important;
    caret-color: var(--wh-text) !important;
    -webkit-text-fill-color: var(--wh-text) !important;
    -webkit-box-shadow: 0 0 0 1000px var(--wh-bg-base-hover) inset !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
  }

  .auth-input-label {
    position: absolute;
    transition: all 0.2s;
    left: 12px;
    /* Adjust top attribute too if changing font-size */
    font-size: 13px;
    line-height: 13px;
    /* Font-Size / 2 */
    top: calc(25% + 6.5px);
    pointer-events: none;
    color: var(--wh-text-lighter);
  }

  .auth-input-container:focus-within .auth-input-label,
  .auth-input:not(input[data-value='']):not(input:focus) + label {
    top: 4px;
    font-size: 10px;
  }

  .auth-cta-btn {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    background: var(--wh-primary-700);
    border: none;
    color: white;
    width: 100%;
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
  }
  .auth-cta-btn:hover,
  .auth-cta-btn:focus {
    background: var(--wh-primary-600);
  }
  .auth-cta-btn:focus {
    outline: 2px solid var(--wh-form-active-color);
    outline-offset: 2px;
  }

  .auth-cta-btn .loading {
    --spinner-color: white;
  }

  .social-auth-divider-container {
    display: flex;
    align-items: center;
    margin: 16px 0px;
  }
  .social-auth-divider {
    flex: 1 1 0%;
    background-color: var(--wh-subtle-gray);
    height: 1px;
    border: none;
  }
  .social-auth-divider-text {
    color: var(--wh-text-lightest);
    margin: 0 16px;
  }

  .auth-validation-error,
  .auth-validation-success {
    margin: 8px 0;
    font-size: 12px;
  }
  .auth-validation-error {
    color: var(--error-color);
  }
  .auth-validation-success {
    color: var(--wh-text);
  }
`},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>s});var r=o(38085),a=o(93811);class s extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,r.defineWebHighlightsElement)(t,e,o)}}},31138:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var r=o(36758),a=o.n(r),s=o(40935),i=o.n(s)()(a());i.push([t.id,":host{font-family:var(--wh-font-family);max-width:600px;color:var(--wh-text)}.title{font-size:16px;font-weight:500;margin-bottom:24px}.auth-cta-btn{margin-top:16px;max-width:200px}",""]);const n=i},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,r,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},44286:(t,e,o)=>{var r=o(31138);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),r=o(95665),a=o(30827),s=o(21451),i=o(44286),n=o.n(i),c=function(t,e,o,r){var a,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(s<3?a(i):s>3?a(e,o,i):a(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};const l=t.SHARED_COMPONENTS.ResetPassword,u=l.TAG,h="resetpassword_new";class p extends a.y{constructor(){super(...arguments),this.errors=[],this.successMessages=[],this.newPasswordValue="",this.loading=!1,this.components=[t.SHARED_COMPONENTS.Loading.TAG]}firstUpdated(t){if(!this.props.token)throw new Error("No token found to reset password")}isFormValid(){var t;return this.newPasswordValue&&(null===(t=this.form)||void 0===t?void 0:t.checkValidity())}onNewPasswordValueChange(t){this.newPasswordValue=t.target.value||""}changePassword(e){return o=this,r=void 0,s=function*(){var o;const r=new t.UserService((0,t.useContext)().httpFacade.httpClient);if(e.preventDefault(),this.errors=[],this.successMessages=[],this.isFormValid())try{this.loading=!0,yield r.resetPasswordWithToken(null!==(o=this.props.token)&&void 0!==o?o:"",this.newPasswordValue),this.successMessages.push("Successfully changed password!")}catch(e){(0,t.isBusinessError)(e)?this.errors.push(null==e?void 0:e.error):this.errors.push("Something went wrong. Please try again later.")}else this.newPasswordValue||this.errors.push("Enter a new password.");this.loading=!1},new((a=void 0)||(a=Promise))(function(t,e){function i(t){try{c(s.next(t))}catch(t){e(t)}}function n(t){try{c(s.throw(t))}catch(t){e(t)}}function c(e){var o;e.done?t(e.value):(o=e.value,o instanceof a?o:new a(function(t){t(o)})).then(i,n)}c((s=s.apply(o,r||[])).next())});var o,r,a,s}render(){return e.html`<div part="container" class="container">
      <h1 class="title">Reset your password for Web Highlights</h1>
      <form @submit="${this.changePassword}">
        <section class="change-password">
          <div class="auth-input-container">
            <input
              id=${h}
              name=${h}
              class="auth-input"
              type="password"
              @change=${this.onNewPasswordValueChange}
              data-value="${this.newPasswordValue}"
              data-testid=${l.TEST_IDS.NEW_PASSWORD_INPUT}
              autocomplete="new-password"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${h}"
              >New Password</label
            >
          </div>
        </section>
        <div>
          ${this.errors.map(t=>e.html`<p
                class="auth-validation-error"
                data-testid=${l.TEST_IDS.ERROR_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
          ${this.successMessages.map(t=>e.html`<p
                class="auth-validation-success"
                data-testid=${l.TEST_IDS.SUCCESSS_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
        </div>
        <button
          type="submit"
          class="auth-cta-btn"
          data-testid=${l.TEST_IDS.SUBMIT_BTN}
        >
          ${this.loading?e.html`<webhighlights-loading
                class="loading"
              ></webhighlights-loading>`:"Change password"}
        </button>
        <!-- <webhighlights-social-auth></webhighlights-social-auth> -->
      </form>
    </div>`}}p.styles=e.css`
    ${s.h}
    ${(0,e.unsafeCSS)(n())}
  `,c([(0,r.property)()],p.prototype,"props",void 0),c([(0,r.state)()],p.prototype,"errors",void 0),c([(0,r.state)()],p.prototype,"successMessages",void 0),c([(0,r.state)()],p.prototype,"newPasswordValue",void 0),c([(0,r.state)()],p.prototype,"loading",void 0),c([(0,r.query)("form")],p.prototype,"form",void 0),a.y.define(u,p)})()})();