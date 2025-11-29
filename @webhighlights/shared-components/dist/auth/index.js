(()=>{var t={1190:(t,e,o)=>{var i=o(64203);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},1543:(t,e,o)=>{var i=o(89156);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},4022:(t,e,o)=>{"use strict";o.d(e,{w:()=>i});const i=o(93811).css`
  :host {
    font-family: var(--wh-font-family);
    display: inline-block;
    width: 100%;
  }
  .sign-in-container {
    display: block;
  }

  .google-auth-btn {
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: var(--wh-text);
    padding: 12px 16px;
    border: 1px solid var(--wh-border-back);
    border-radius: 4px;
    column-gap: 4px;
    background-color: var(--wh-bg-back);
    width: 100%;
  }

  .google-auth-btn:hover {
    background-color: var(--wh-bg-back-hover);
  }

  .google-auth-btn .loading {
    margin-right: 0.5rem;
    margin-left: -0.25rem;
  }
  .google-auth-btn svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    display: block;
    align-items: center;
  }
`},6547:(t,e,o)=>{"use strict";var i=o(93811),a=o(38085),s=o(95665),r=o(30827),n=o(4022),l=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const h=a.SHARED_COMPONENTS_INTERNAL.SocialAuth,p=h.TAG;class c extends r.y{constructor(){super(...arguments),this.oAuthInProgress=!1,this.components=[a.SHARED_COMPONENTS.Loading.TAG]}get btnDescription(){return`Sign ${"signIn"===this.authType?"in":"up"} with Google`}get isDisabled(){return!1}onOAuthStarted(){return t=this,e=void 0,i=function*(){yield(0,a.askForBackupFileDownloadBeforeSignUp)(),this.dispatchEvent(new CustomEvent("oAuthStarted",{bubbles:!0,detail:"google"}))},new((o=void 0)||(o=Promise))(function(a,s){function r(t){try{l(i.next(t))}catch(t){s(t)}}function n(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(r,n)}l((i=i.apply(t,e||[])).next())});var t,e,o,i}render(){return i.html`
      <button
        @click=${this.onOAuthStarted}
        class="google-auth-btn"
        data-provider-id="google.com"
        data-testid=${h.TEST_IDS.GOOGLE_AUTH_BTN}
        ?disabled=${this.isDisabled}
      >
        ${this.oAuthInProgress?i.html`
              <webhighlights-loading class="loading"></webhighlights-loading>
              Finish in popup...
            `:i.html`
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_13183_10121)">
                  <path
                    d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                    fill="#3F83F8"
                  ></path>
                  <path
                    d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                    fill="#EA4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_13183_10121">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              ${this.btnDescription}
            `}
      </button>
    `}}c.styles=n.w,l([(0,s.property)()],c.prototype,"authType",void 0),l([(0,s.property)()],c.prototype,"oAuthInProgress",void 0),r.y.define(p,c)},6881:(t,e,o)=>{"use strict";var i=o(93811),a=o(95665),s=o(38085),r=o(30827),n=o(25160),l=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const h="emailpasswordsignup_email",p=s.SHARED_COMPONENTS_INTERNAL.ForgotPasswordForm,c=p.TAG;class d extends r.y{constructor(){super(...arguments),this.errors=[],this.successMessages=[],this.loading=!1,this.emailValue="",this.components=[s.SHARED_COMPONENTS.Loading.TAG]}onEmailChange(t){this.emailValue=t.target.value||""}isFormValid(){var t;return this.emailValue&&(null===(t=this.form)||void 0===t?void 0:t.checkValidity())}sendPasswordResetEmail(t){return e=this,o=void 0,a=function*(){t.preventDefault(),this.errors=[],this.successMessages=[];const e=this.emailValue;if(this.isFormValid())try{this.loading=!0,yield this.authProps.userService.sendPasswordResetEmail(e),this.successMessages.push("Password reset email sent. Please check your inbox 📥")}catch(t){(0,s.isBusinessError)(t)?this.errors.push(null==t?void 0:t.error):this.errors.push("Something went wrong. Please try again later.")}this.loading=!1},new((i=void 0)||(i=Promise))(function(t,s){function r(t){try{l(a.next(t))}catch(t){s(t)}}function n(t){try{l(a.throw(t))}catch(t){s(t)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i(function(t){t(o)})).then(r,n)}l((a=a.apply(e,o||[])).next())});var e,o,i,a}goBackToLogin(){this.dispatchEvent(new CustomEvent("goBack"))}render(){return i.html`<div class="forgot-password-container" part="container">
      <form @submit="${this.sendPasswordResetEmail}">
        <section class="email-sign-in">
          <div class="auth-input-container">
            <input
              id=${h}
              name=${h}
              class="auth-input"
              type="email"
              @change=${this.onEmailChange}
              @keydown=${s.stopPropagation}
              @keyup=${s.stopPropagation}
              @keypress=${s.stopPropagation}
              data-value="${this.emailValue}"
              data-testid=${p.TEST_IDS.EMAIL}
              autocomplete="username"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${h}"
              >Email</label
            >
          </div>
        </section>
        <div>
          ${this.errors.map(t=>i.html`<p
                class="auth-validation-error"
                data-testid=${p.TEST_IDS.ERROR_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
          ${this.successMessages.map(t=>i.html`<p
                class="auth-validation-success"
                data-testid=${p.TEST_IDS.SUCCESSS_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
        </div>
        <button
          class="back-to-login-btn"
          tabindex="1"
          type="button"
          data-testid=${p.TEST_IDS.GO_BACK_BTN}
          @click=${this.goBackToLogin}
        >
          ← Back to Login
        </button>
        <button
          type="submit"
          class="auth-cta-btn"
          data-testid=${p.TEST_IDS.SUBMIT_BTN}
        >
          ${this.loading?i.html`<webhighlights-loading
                class="loading"
              ></webhighlights-loading>`:"Send Password Reset Email"}
        </button>
        <!-- <webhighlights-social-auth></webhighlights-social-auth> -->
      </form>
    </div>`}}d.styles=[n.w],l([(0,a.property)()],d.prototype,"authProps",void 0),l([(0,a.state)()],d.prototype,"errors",void 0),l([(0,a.state)()],d.prototype,"successMessages",void 0),l([(0,a.state)()],d.prototype,"loading",void 0),l([(0,a.state)()],d.prototype,"emailValue",void 0),l([(0,a.query)("form")],d.prototype,"form",void 0),r.y.define(c,d)},8636:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(36758),a=o.n(i),s=o(40935),r=o.n(s)()(a());r.push([t.id,".change-password{margin-bottom:12px;display:flex;flex-wrap:wrap;row-gap:12px}.back-to-login-btn{background:none;color:var(--link-color);border:none;cursor:pointer;padding:0;font-size:inherit;font-size:11px;margin-top:8px;margin-bottom:12px}.back-to-login-btn:hover{text-decoration:underline}",""]);const n=r},11324:(t,e,o)=>{"use strict";o.d(e,{w:()=>l});var i=o(93811),a=o(21451),s=o(49071),r=o(43770),n=o.n(r);const l=i.css`
  ${(0,i.unsafeCSS)(n())}
  ${a.h}
  :host {
    font-family: var(--wh-font-family);
  }
  .sign-in-container {
    display: block;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    color: var(--wh-text-strong);
    margin: 48px 0 30px 0;
  }

  @container (min-width: ${s.H}px) {
    .title {
      font-size: 28px;
    }
  }
`},17493:(t,e,o)=>{"use strict";var i=o(93811),a=o(95665),s=o(38085),r=o(30827),n=o(11324),l=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const h="emailpasswordsignup_email",p="emailpasswordsignup_password",c=s.SHARED_COMPONENTS_INTERNAL.SignInForm,d=c.TAG;class u extends r.y{constructor(){super(...arguments),this.errors=[],this.loading=!1,this.emailValue="",this.passwordValue="",this.components=[s.SHARED_COMPONENTS.Loading.TAG]}onEmailChange(t){this.emailValue=t.target.value||""}onPasswordChange(t){this.passwordValue=t.target.value||""}onForgotPassword(){this.dispatchEvent(new CustomEvent("forgotPassword"))}isFormValid(){var t;return this.emailValue&&this.passwordValue&&(null===(t=this.form)||void 0===t?void 0:t.checkValidity())}handleSignIn(t){return e=this,o=void 0,a=function*(){t.preventDefault(),this.errors=[];const e=this.emailValue,o=this.passwordValue;if(this.isFormValid())try{this.loading=!0;const t=yield this.authProps.userService.login({email:e,password:o});t&&(s.notifications.dispatch("loggedIn",{detail:{token:t}}),(0,s.closeDialog)())}catch(t){console.error(t),(0,s.isBusinessError)(t)?this.errors.push(null==t?void 0:t.error):this.errors.push("Something went wrong. Please try again later.")}this.loading=!1},new((i=void 0)||(i=Promise))(function(t,s){function r(t){try{l(a.next(t))}catch(t){s(t)}}function n(t){try{l(a.throw(t))}catch(t){s(t)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i(function(t){t(o)})).then(r,n)}l((a=a.apply(e,o||[])).next())});var e,o,i,a}render(){return i.html`<div class="sign-up-container" part="container">
      <form @submit="${this.handleSignIn}">
        <section class="email-sign-in">
          <div class="auth-input-container">
            <input
              id=${h}
              name=${h}
              class="auth-input"
              type="email"
              @change=${this.onEmailChange}
              @keydown=${s.stopPropagation}
              @keyup=${s.stopPropagation}
              @keypress=${s.stopPropagation}
              data-value="${this.emailValue}"
              data-testid=${c.TEST_IDS.EMAIL}
              autocomplete="username"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${h}"
              >Email</label
            >
          </div>
          <div class="auth-input-container">
            <input
              id=${p}
              name=${p}
              class="auth-input"
              type="password"
              @change=${this.onPasswordChange}
              @keydown=${s.stopPropagation}
              @keyup=${s.stopPropagation}
              @keypress=${s.stopPropagation}
              data-value="${this.passwordValue}"
              data-testid=${c.TEST_IDS.PASSWORD}
              autocomplete="current-password"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label
              class="auth-input-label minimized"
              for=${p}
            >
              Password
            </label>
          </div>
        </section>
        <div>
          ${this.errors.map(t=>i.html`<p
                class="auth-validation-error"
                data-testid=${c.TEST_IDS.ERROR_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
        </div>
        <button
          class="forgot-password-btn"
          tabindex="-1"
          type="button"
          data-testid=${c.TEST_IDS.FORGOT_PASSWORD_BTN}
          @click=${this.onForgotPassword}
        >
          Forgot password?
        </button>
        <button
          type="submit"
          class="auth-cta-btn"
          data-testid=${c.TEST_IDS.SIGN_IN_BTN}
        >
          ${this.loading?i.html`<webhighlights-loading
                class="loading"
              ></webhighlights-loading>`:"Login"}
        </button>
      </form>
    </div>`}}u.styles=[n.w],l([(0,a.property)()],u.prototype,"authProps",void 0),l([(0,a.state)()],u.prototype,"errors",void 0),l([(0,a.state)()],u.prototype,"loading",void 0),l([(0,a.state)()],u.prototype,"emailValue",void 0),l([(0,a.state)()],u.prototype,"passwordValue",void 0),l([(0,a.query)("form")],u.prototype,"form",void 0),r.y.define(d,u)},21451:(t,e,o)=>{"use strict";o.d(e,{h:()=>i});const i=o(93811).css`
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
`},25160:(t,e,o)=>{"use strict";o.d(e,{w:()=>l});var i=o(93811),a=o(21451),s=o(49071),r=o(1190),n=o.n(r);const l=i.css`
  ${(0,i.unsafeCSS)(n())}
  ${a.h}
  :host {
    font-family: var(--wh-font-family);
  }
  .forgot-password-container {
    display: block;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    color: var(--wh-text-strong);
    margin: 48px 0 30px 0;
  }

  @container (min-width: ${s.H}px) {
    .title {
      font-size: 28px;
    }
  }
`},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>s});var i=o(38085),a=o(93811);class s extends a.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,i.defineWebHighlightsElement)(t,e,o)}}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,i,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var n=0;n<this.length;n++){var l=this[n][0];null!=l&&(r[l]=!0)}for(var h=0;h<t.length;h++){var p=[].concat(t[h]);i&&r[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},41943:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(36758),a=o.n(i),s=o(40935),r=o.n(s)()(a());r.push([t.id,".email-sign-in{margin-bottom:12px;display:flex;flex-wrap:wrap;row-gap:12px}.forgot-password-btn{background:none;color:var(--link-color);border:none;cursor:pointer;padding:0;font-size:inherit;font-size:12px;margin-top:8px;margin-bottom:12px}.forgot-password-btn:hover{text-decoration:underline}",""]);const n=r},43770:(t,e,o)=>{var i=o(41943);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},49071:(t,e,o)=>{"use strict";o.d(e,{H:()=>r,w:()=>n});var i=o(93811),a=o(1543),s=o.n(a);const r=900,n=i.css`
  ${(0,i.unsafeCSS)(s())}

  .auth-section-outer {
    height: 100%;
    min-height: max-content;
    padding: 24px 8px;
    box-sizing: border-box;
  }
  .auth-section {
    display: flex;
    flex-wrap: wrap;
    width: ${360}px;
    max-width: 100vw;
    box-sizing: content-box;
    align-items: space-between;
    height: 100%;

    .auth-section-main {
      width: 100%;
    }
    .auth-section-footer {
      width: 100%;
      margin-top: auto;
      container-type: inline-size;
    }
  }

  .side-info-container {
    display: none;
    flex: 1;
    flex-wrap: wrap;
    padding: 24px;
    box-sizing: border-box;
    align-items: center;
    border-left: 1px solid var(--wh-border-base-strong);
  }

  webhighlights-premium-benefits {
    margin-top: auto;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
    color: var(--wh-text-strong);
  }

  @container (min-width: ${r}px) {
    .side-info-container {
      display: flex;
    }

    .title {
      font-size: 20px;
    }
    .auth-section-outer {
      padding: 24px 32px;
    }
  }

  @container (min-width: 1200px) {
    .title {
      font-size: 24px;
    }
    .auth-section-outer {
      padding: 24px 64px;
    }
  }
  @container (min-width: 1400px) {
    .auth-section-outer {
      padding: 24px 128px;
    }
  }
  @container (min-width: 1600px) {
    .auth-section-outer {
      padding: 24px 128px;
    }
  }
`},58937:(t,e,o)=>{var i=o(8636);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},64203:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(36758),a=o.n(i),s=o(40935),r=o.n(s)()(a());r.push([t.id,".email-sign-in{margin-bottom:12px;display:flex;flex-wrap:wrap;row-gap:12px}.back-to-login-btn{background:none;color:var(--link-color);border:none;cursor:pointer;padding:0;font-size:inherit;font-size:11px;margin-top:8px;margin-bottom:12px}.back-to-login-btn:hover{text-decoration:underline}",""]);const n=r},66698:(t,e,o)=>{"use strict";o.d(e,{w:()=>l});var i=o(93811),a=o(21451),s=o(49071),r=o(70016),n=o.n(r);const l=i.css`
  ${(0,i.unsafeCSS)(n())}
  ${a.h}
  :host {
    font-family: var(--wh-font-family);
  }
  .sign-up-container {
    display: block;
  }

  .visually-hidden {
    display: none;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
    color: var(--wh-text-strong);
    margin: 48px 0 30px 0;
  }

  @container (min-width: ${s.H}px) {
    .title {
      font-size: 24px;
    }
  }
`},67969:(t,e,o)=>{"use strict";o.d(e,{w:()=>l});var i=o(93811),a=o(21451),s=o(49071),r=o(58937),n=o.n(r);const l=i.css`
  ${(0,i.unsafeCSS)(n())}
  ${a.h}
  :host {
    font-family: var(--wh-font-family);
  }
  .change-password-container {
    display: block;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    color: var(--wh-text-strong);
    margin: 48px 0 30px 0;
  }

  @container (min-width: ${s.H}px) {
    .title {
      font-size: 28px;
    }
  }
`},70016:(t,e,o)=>{var i=o(83349);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},76103:(t,e,o)=>{"use strict";var i=o(93811),a=o(95665),s=o(38085),r=o(30827),n=o(66698),l=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const h="emailpasswordsignup_email",p="emailpasswordsignup_password",c=s.SHARED_COMPONENTS_INTERNAL.SignUpForm,d=c.TAG;class u extends r.y{constructor(){super(...arguments),this.errors=[],this.loading=!1,this.emailValue="",this.passwordValue="",this.components=[s.SHARED_COMPONENTS.Loading.TAG]}onEmailChange(t){this.emailValue=t.target.value||""}onPasswordChange(t){this.passwordValue=t.target.value||""}isFormValid(){var t;return this.emailValue&&this.passwordValue&&(null===(t=this.form)||void 0===t?void 0:t.checkValidity())}handleSignUp(t){return e=this,o=void 0,a=function*(){t.preventDefault(),this.errors=[];const e=this.emailValue,o=this.passwordValue;if(this.isFormValid())try{this.loading=!0,yield(0,s.askForBackupFileDownloadBeforeSignUp)();const t=yield this.authProps.userService.register({email:e,password:o});t&&(s.notifications.dispatch("loggedIn",{detail:{token:t}}),(0,s.closeDialog)())}catch(t){(0,s.isBusinessError)(t)?this.errors.push(t.error):this.errors.push("Something went wrong. Please try again later.")}this.loading=!1},new((i=void 0)||(i=Promise))(function(t,s){function r(t){try{l(a.next(t))}catch(t){s(t)}}function n(t){try{l(a.throw(t))}catch(t){s(t)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i(function(t){t(o)})).then(r,n)}l((a=a.apply(e,o||[])).next())});var e,o,i,a}render(){return i.html`<div class="sign-up-container" part="container">
      <form @submit="${this.handleSignUp}">
        <section class="email-sign-up">
          <div class="auth-input-container">
            <input
              id=${h}
              name=${h}
              data-testid=${c.TEST_IDS.EMAIL}
              class="auth-input"
              type="email"
              @change=${this.onEmailChange}
              @keydown=${s.stopPropagation}
              @keyup=${s.stopPropagation}
              @keypress=${s.stopPropagation}
              data-value="${this.emailValue}"
              autocomplete="username"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${h}"
              >Email</label
            >
          </div>
          <div class="auth-input-container">
            <input
              id=${p}
              name=${p}
              data-testid=${c.TEST_IDS.PASSWORD}
              class="auth-input"
              type="password"
              @change=${this.onPasswordChange}
              @keydown=${s.stopPropagation}
              @keyup=${s.stopPropagation}
              @keypress=${s.stopPropagation}
              data-value="${this.passwordValue}"
              autocomplete="new-password"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label
              class="auth-input-label minimized"
              for=${p}
            >
              Password
            </label>
          </div>
        </section>
        <div>
          ${this.errors.map(t=>i.html`<p
                class="auth-validation-error"
                data-testid=${c.TEST_IDS.ERROR_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
        </div>
        <button
          type="submit"
          class="auth-cta-btn"
          data-testid=${c.TEST_IDS.SIGN_UP_BTN}
        >
          ${this.loading?i.html`<webhighlights-loading
                class="loading"
              ></webhighlights-loading>`:"Create Account"}
        </button>

        <!-- <webhighlights-social-auth></webhighlights-social-auth> -->
      </form>
    </div>`}}u.formAssociated=!0,u.styles=[n.w],l([(0,a.property)()],u.prototype,"authProps",void 0),l([(0,a.state)()],u.prototype,"errors",void 0),l([(0,a.state)()],u.prototype,"loading",void 0),l([(0,a.state)()],u.prototype,"emailValue",void 0),l([(0,a.state)()],u.prototype,"passwordValue",void 0),l([(0,a.query)("form")],u.prototype,"form",void 0),r.y.define(d,u)},83349:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(36758),a=o.n(i),s=o(40935),r=o.n(s)()(a());r.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.email-sign-up{margin-bottom:12px;display:flex;flex-wrap:wrap;row-gap:12px}",""]);const n=r},89156:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(36758),a=o.n(i),s=o(40935),r=o.n(s)()(a());r.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);container-type:inline-size;display:block;height:100%;width:100%}.auth-container{border-radius:8px;background:var(--wh-bg-base);color:var(--wh-text-light);width:100%;height:100%;max-height:100vh;overflow:auto;box-sizing:border-box;display:flex;justify-content:center}@media(min-width: 600px){.auth-container::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.auth-container::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.auth-container::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.auth-section{width:100%}.switch-auth-type-container{font-size:14px;display:flex;justify-content:flex-start;margin:24px 0px;color:var(--wh-text-lighter)}.switch-auth-type-container .auth-type-switch-btn{background:none;color:var(--link-color);border:none;cursor:pointer;padding:0;font-size:inherit}.switch-auth-type-container .auth-type-switch-btn:hover{text-decoration:underline}.side-info-container-inner{display:flex;flex-wrap:wrap;height:-moz-fit-content;height:fit-content;width:100%}.side-info-container-header{width:100%;height:-moz-fit-content;height:fit-content}.side-info-container-main{width:100%;display:flex;height:-moz-fit-content;height:fit-content;align-items:center}.social-auth-divider-container{display:flex;align-items:center;margin:18px 0px}.social-auth-divider-container .social-auth-divider{flex:1 1 0%;background-color:var(--wh-subtle-gray);height:1px;border:none}.social-auth-divider-container .social-auth-divider-text{color:var(--wh-text-lightest);margin:0 16px}.tos-privacy-info{font-size:14px;color:var(--wh-text-lighter);margin:16px 0;display:inline-block}.tos-privacy-info a{color:var(--wh-text-lighter);text-decoration:underline}.tos-privacy-info a:hover{color:var(--wh-text);text-decoration:underline}',""]);const n=r},93811:t=>{"use strict";t.exports=LitExternal},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},99126:(t,e,o)=>{"use strict";var i=o(93811),a=o(95665),s=o(38085),r=o(30827),n=o(67969),l=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const h="changepassword_old",p="changepassword_new",c=s.SHARED_COMPONENTS_INTERNAL.ChangePasswordForm,d=c.TAG;class u extends r.y{constructor(){super(...arguments),this.errors=[],this.successMessages=[],this.loading=!1,this.oldPasswordValue="",this.newPasswordValue="",this.components=[s.SHARED_COMPONENTS.Loading.TAG]}onOldPasswordValueChange(t){this.oldPasswordValue=t.target.value||""}onNewPasswordValueChange(t){this.newPasswordValue=t.target.value||""}isFormValid(){var t;return this.oldPasswordValue&&this.newPasswordValue&&this.oldPasswordValue!==this.newPasswordValue&&(null===(t=this.form)||void 0===t?void 0:t.checkValidity())}changePassword(t){return e=this,o=void 0,a=function*(){if(t.preventDefault(),this.errors=[],this.successMessages=[],this.isFormValid())try{this.loading=!0,yield this.authProps.userService.changePassword({newPassword:this.newPasswordValue,oldPassword:this.oldPasswordValue}),this.successMessages.push("Successfully changed password!")}catch(t){(0,s.isBusinessError)(t)?this.errors.push(null==t?void 0:t.error):this.errors.push("Something went wrong. Please try again later.")}else this.oldPasswordValue===this.newPasswordValue&&this.errors.push("Old and new passwords must be different.");this.loading=!1},new((i=void 0)||(i=Promise))(function(t,s){function r(t){try{l(a.next(t))}catch(t){s(t)}}function n(t){try{l(a.throw(t))}catch(t){s(t)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i(function(t){t(o)})).then(r,n)}l((a=a.apply(e,o||[])).next())});var e,o,i,a}goBackToLogin(){this.dispatchEvent(new CustomEvent("goBack"))}render(){return i.html`<div class="change-password-container" part="container">
      <form @submit="${this.changePassword}">
        <section class="change-password">
          <div class="auth-input-container">
            <input
              id=${h}
              name=${h}
              class="auth-input"
              type="password"
              @change=${this.onOldPasswordValueChange}
              data-value="${this.oldPasswordValue}"
              data-testid=${c.TEST_IDS.OLD_PASSWORD}
              autocomplete="current-password"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${h}"
              >Current Password</label
            >
          </div>
          <div class="auth-input-container">
            <input
              id=${p}
              name=${p}
              class="auth-input"
              type="password"
              @change=${this.onNewPasswordValueChange}
              data-value="${this.newPasswordValue}"
              data-testid=${c.TEST_IDS.NEW_PASSWORD}
              autocomplete="new-password"
              required
            />
            <!-- Label must be direct sibling after input because of CSS -->
            <label class="auth-input-label" for="${p}"
              >New Password</label
            >
          </div>
        </section>
        <div>
          ${this.errors.map(t=>i.html`<p
                class="auth-validation-error"
                data-testid=${c.TEST_IDS.ERROR_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
          ${this.successMessages.map(t=>i.html`<p
                class="auth-validation-success"
                data-testid=${c.TEST_IDS.SUCCESSS_MSG}
                id="helper-text-explanation"
              >
                ${t}
              </p>`)}
        </div>
        <button
          type="submit"
          class="auth-cta-btn"
          data-testid=${c.TEST_IDS.SUBMIT_BTN}
        >
          ${this.loading?i.html`<webhighlights-loading
                class="loading"
              ></webhighlights-loading>`:"Change password"}
        </button>
      </form>
    </div>`}}u.styles=[n.w],l([(0,a.property)()],u.prototype,"authProps",void 0),l([(0,a.state)()],u.prototype,"errors",void 0),l([(0,a.state)()],u.prototype,"successMessages",void 0),l([(0,a.state)()],u.prototype,"loading",void 0),l([(0,a.state)()],u.prototype,"oldPasswordValue",void 0),l([(0,a.state)()],u.prototype,"newPasswordValue",void 0),l([(0,a.query)("form")],u.prototype,"form",void 0),r.y.define(d,u)}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(95665),i=o(38085),a=(o(99126),o(6881),o(17493),o(76103),o(6547),o(30827)),s=o(49071),r=function(t,e,o,i){var a,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,o,r):a(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const n=i.SHARED_COMPONENTS.Auth,l="webhighlights-auth";class h extends a.y{constructor(){super(...arguments),this.oAuthInProgress=!1,this.components=[i.SHARED_COMPONENTS.Logo.TAG,i.SHARED_COMPONENTS.LegalFooter.TAG,i.SHARED_COMPONENTS.PremiumBenefits.TAG]}get title(){return"signUp"===this.props.authType?"Try Web Highlights Ultimate for free and enjoy a 7-day trial.":"signIn"===this.props.authType?"Welcome back!":"forgotPassword"===this.props.authType?"Forgot password":"changePassword"===this.props.authType?"Change password":"Welcome back!"}toggleAuthType(){this.props=Object.assign(Object.assign({},this.props),{authType:"signUp"===this.props.authType?"signIn":"signUp"})}setAuthTypeLogin(){this.props=Object.assign(Object.assign({},this.props),{authType:"signIn"})}onForgotPassword(){this.props=Object.assign(Object.assign({},this.props),{authType:"forgotPassword"})}onOAuthStarted(t){var e,o;null===(o=(e=this.props).onOAuthStarted)||void 0===o||o.call(e,t)}loggedIn(t){return e=this,o=void 0,s=function*(){const e=t.detail;e&&(i.notifications.dispatch("loggedIn",{detail:{token:e}}),this.dispatchEvent(new CustomEvent("loggedIn",{detail:e})))},new((a=void 0)||(a=Promise))(function(t,i){function r(t){try{l(s.next(t))}catch(t){i(t)}}function n(t){try{l(s.throw(t))}catch(t){i(t)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof a?o:new a(function(t){t(o)})).then(r,n)}l((s=s.apply(e,o||[])).next())});var e,o,a,s}get showSocialAuth(){return"forgotPassword"!==this.props.authType&&"changePassword"!==this.props.authType}get showSwitchContainer(){return"changePassword"!==this.props.authType}get showSideInfo(){return"changePassword"!==this.props.authType}get showLegalInfo(){return"changePassword"!==this.props.authType}render(){if(!this.props)throw new Error(`'props' missing in '${l}'`);return t.html`
      <div class="auth-container" part="container">
        <section class="auth-section-outer" part="auth-section-outer">
          <div class="auth-section" part="auth-section">
            <header part="header" class="side-info-container-header">
              <webhighlights-logo></webhighlights-logo>
            </header>
            <main class="auth-section-main">
              <h1 class="title" data-testid="${n.TEST_IDS.TITLE}">
                ${this.title}
              </h1>
              ${this.showSwitchContainer?t.html`
                    <div class="switch-auth-type-container">
                      <span>
                        ${"signUp"===this.props.authType?"Save your highlights in the cloud and unlock all features. Already have an account?":"New to Web Highlights?"}
                        <button
                          class="auth-type-switch-btn"
                          data-testid=${n.TEST_IDS.AUTH_TYPE_SWITCH_BTN}
                          type="button"
                          @click=${this.toggleAuthType}
                        >
                          ${"signUp"===this.props.authType?"Login":"Create account"}
                        </button>
                      </span>
                    </div>
                  `:t.html``}
              ${"signUp"===this.props.authType?t.html`<webhighlights-sign-up-form
                    .authProps=${this.props}
                  ></webhighlights-sign-up-form>`:""}
              ${"signIn"===this.props.authType?t.html`<webhighlights-sign-in-form
                    .authProps=${this.props}
                    @forgotPassword=${this.onForgotPassword}
                  ></webhighlights-sign-in-form>`:""}
              ${"forgotPassword"===this.props.authType?t.html`<webhighlights-forgot-password-form
                    .authProps=${this.props}
                    @goBack=${this.setAuthTypeLogin}
                  ></webhighlights-forgot-password-form>`:""}
              ${"changePassword"===this.props.authType?t.html`<webhighlights-change-password-form
                    .authProps=${this.props}
                  ></webhighlights-change-password-form>`:""}
              ${this.showSocialAuth?t.html`
                    <div class="social-auth-divider-container">
                      <hr class="social-auth-divider" />
                      <span class="social-auth-divider-text">or</span>
                      <hr class="social-auth-divider" />
                    </div>

                    <webhighlights-social-auth
                      class="social-auth"
                      @loggedIn=${this.loggedIn}
                      .authType=${this.props.authType}
                      @oAuthStarted=${this.onOAuthStarted}
                      .oAuthInProgress=${this.oAuthInProgress}
                    ></webhighlights-social-auth>
                  `:t.html``}
              ${this.showLegalInfo?t.html`
                    <span
                      class="tos-privacy-info"
                      data-testid=${n.TEST_IDS.TOS_PRIVACY_INFO}
                      >By
                      ${"signUp"===this.props.authType?"signin up":"signin in"}
                      you confirm that you have read our
                      <a target="_blank" href=${i.CONSTANTS.LEGAL_PRIVACY_LINK}
                        >Privacy Policy</a
                      >
                      and that you accept our
                      <a target="_blank" href=${i.CONSTANTS.LEGAL_TOS_LINK}
                        >Terms of Service</a
                      >.
                    </span>
                  `:""}
            </main>

            <footer class="auth-section-footer" part="footer">
              <webhighlights-legal-footer></webhighlights-legal-footer>
            </footer>
          </div>
        </section>

        ${this.showSideInfo?t.html`
              <div class="side-info-container">
                <div class="side-info-container-inner">
                  <main class="side-info-container-main">
                    <webhighlights-premium-benefits></webhighlights-premium-benefits>
                  </main>
                </div>
              </div>
            `:t.html``}
      </div>
    `}}h.styles=s.w,r([(0,e.property)({type:Object})],h.prototype,"props",void 0),r([(0,e.property)({type:Boolean})],h.prototype,"oAuthInProgress",void 0),a.y.define(l,h)})()})();