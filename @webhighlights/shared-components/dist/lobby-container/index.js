(()=>{var r={2392:(r,e,t)=>{var o=t(53107);o&&o.__esModule&&(o=o.default),r.exports="string"==typeof o?o:o.toString()},2783:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var o=t(36758),i=t.n(o),a=t(40935),n=t.n(a)()(i());n.push([r.id,':host{--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137);--primary-light: #53e3a6;--primary-dark: #007f4b;--primary-shadow: rgba(0,176,120,0.27843);--secondary-color: #3d4455;--secondary-light: #efefff;--secondary-dark: #252934;--secondary-dark-transparent: rgba(46,45,45,0.27451);--secondary-color-transparent: rgba(61,61,61,0.46667);--highlight-color: #92ffaa;--error-color: #c5344e;--error-info: #14854e;--font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;--white-dark: #dddddd}.badge{background-color:var(--wh-subtle-gray);color:var(--wh-text);box-shadow:0 4px 4px -2px rgba(0,0,0,.5);width:15px;height:15px;border-radius:50%;line-height:15px;text-align:center;margin-right:10px;line-height:100%}hr.divider{width:80%;margin:10px auto;border:solid .2px var(--secondary-light)}form{padding:20px 0;position:relative;z-index:2;text-align:center}form input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid rgba(255,255,255,.4);background-color:rgba(255,255,255,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px auto;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300}form input:hover{background-color:rgba(255,255,255,.4)}form input:focus{background-color:#fff;width:300px;color:#53e3a6}form button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:var(--wh-bg-base);border:0;padding:10px 15px;color:#53e3a6;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s}form button.loading{width:42px;border-radius:50%;transition:width .3s 0s,font-size .1s .15s,border-radius 0s .29s}form button:hover{background-color:var(--secondary-dark)}form button:disabled{color:#fff;background:var(--secondary-color-transparent);cursor:not-allowed}.was-validated input:invalid{border:solid var(--error-color) 1px}.was-validated input:invalid~.invalid-feedback{color:var(--error-color);margin-top:.2rem;font-size:.8rem;display:block}.invalid-feedback{color:var(--error-color);margin:5px auto}.resend-email{margin:5px auto;cursor:pointer}.resend-email button{background:none;color:var(--secondary-dark);padding:2px;margin:5px 0px}.resend-email button:hover{background:none;box-shadow:1px 1px 1px 1px var(--secondary-color);color:var(--secondary-dark)}',""]);const s=n},6927:(r,e,t)=>{"use strict";var o=t(38085),i=t(93811),a=t(95665),n=t(30827),s=t(2392),d=t.n(s),c=function(r,e,t,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,e,t,o);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n};const l=o.SHARED_COMPONENTS_INTERNAL.SignUp,p=l.TAG;class h extends n.y{constructor(){super(...arguments),this.formSuccess=!1,this.loading=!1,this.formIsValid=!1,this.errorMsg="",this.legalBaseUrl="https://web-highlights.com/legal"}submit(r){return e=this,t=void 0,i=function*(){null==r||r.stopImmediatePropagation(),null==r||r.preventDefault();let e="";if(this.isFormValid()){const r={email:this.emailElement.value,password:this.passwordElement.value};try{this.loading=!0,e=yield this.userService.register(r)}catch(r){this.errorMsg=null==r?void 0:r.error}e&&this.emitLogin(e),this.loading=!1}else this.form.classList.add("was-validated")},new((o=void 0)||(o=Promise))(function(r,a){function n(r){try{d(i.next(r))}catch(r){a(r)}}function s(r){try{d(i.throw(r))}catch(r){a(r)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o(function(r){r(t)})).then(n,s)}d((i=i.apply(e,t||[])).next())});var e,t,o,i}emitLogin(r){this.dispatchEvent(new CustomEvent("registered",{bubbles:!0,detail:r}))}emitPrivacyCheck(){this.dispatchEvent(new CustomEvent("privacyCheckboxChanged",{bubbles:!0,detail:this.privacyCheckbox.checked}))}isFormValid(){this.passwordElement.value&&this.passwordElement2.value&&this.passwordElement.value!==this.passwordElement2.value?(this.form.classList.add("was-validated"),this.passwordElement2.setCustomValidity("Passwords must match")):this.passwordElement2.setCustomValidity("");const r=this.form.checkValidity();return this.emitPrivacyCheck(),this.formIsValid=r,r}render(){return i.html`
      <form class="form">
        <input
          @keyup=${()=>this.isFormValid()}
          @keydown=${()=>this.isFormValid()}
          @change=${()=>this.isFormValid()}
          type="email"
          data-testid=${l.TEST_IDS.EMAIL}
          required
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          @keyup=${()=>this.isFormValid()}
          @keydown=${()=>this.isFormValid()}
          @change=${()=>this.isFormValid()}
          type="password"
          data-testid=${l.TEST_IDS.PASSWORD_1}
          required
          id="password"
          name="password"
          placeholder="Password"
        />
        <div>
          <input
            @keyup=${()=>this.isFormValid()}
            @keydown=${()=>this.isFormValid()}
            @change=${()=>this.isFormValid()}
            type="password"
            required
            id="password2"
            data-testid=${l.TEST_IDS.PASSWORD_2}
            name="password2"
            placeholder="Repeat Password"
          />
        </div>

        ${this.errorMsg?i.html`
              <div
                class="error-message"
                data-testid=${l.TEST_IDS.ERROR_MSG}
              >
                ${this.errorMsg}
              </div>
            `:""}

        <div class="privacy-confirmation">
          <input
            @change=${this.isFormValid}
            required
            type="checkbox"
            id="privacy-checkbox"
            data-testid=${l.TEST_IDS.PRIVACY_CHECKBOX}
            name="privacy-checkbox"
          />
          <label style="text-align: start !important" for="privacy-checkbox"
            >I hereby confirm that I have read and agree with the
            <a target="_blank" href=${o.CONSTANTS.LEGAL_TOS_LINK}
              >Terms of Service</a
            >
            and
            <a target="_blank" href=${o.CONSTANTS.LEGAL_PRIVACY_LINK}
              >Privacy Policy</a
            >.
          </label>
        </div>

        <button
          ?disabled=${!this.formIsValid}
          type="submit"
          id="login-button"
          data-testid=${l.TEST_IDS.SIGN_UP_BTN}
          @click=${r=>this.submit(r)}
          class="${this.loading?"loading":""}"
        >
          ${this.loading?"...":"Sign up"}
        </button>
      </form>
    `}}h.styles=i.css`
    ${(0,i.unsafeCSS)(d())}
  `,c([(0,a.property)()],h.prototype,"userService",void 0),c([(0,a.property)()],h.prototype,"formSuccess",void 0),c([(0,a.property)()],h.prototype,"loading",void 0),c([(0,a.property)()],h.prototype,"formIsValid",void 0),c([(0,a.query)("form")],h.prototype,"form",void 0),c([(0,a.property)()],h.prototype,"errorMsg",void 0),c([(0,a.query)("#email")],h.prototype,"emailElement",void 0),c([(0,a.query)("#password")],h.prototype,"passwordElement",void 0),c([(0,a.query)("#password2")],h.prototype,"passwordElement2",void 0),c([(0,a.query)("#privacy-checkbox")],h.prototype,"privacyCheckbox",void 0),n.y.define(p,h)},12336:(r,e,t)=>{var o=t(62263);o&&o.__esModule&&(o=o.default),r.exports="string"==typeof o?o:o.toString()},23078:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var o=t(36758),i=t.n(o),a=t(40935),n=t.n(a)()(i());n.push([r.id,':host{--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137);--primary-light: #53e3a6;--primary-dark: #007f4b;--primary-shadow: rgba(0,176,120,0.27843);--secondary-color: #3d4455;--secondary-light: #efefff;--secondary-dark: #252934;--secondary-dark-transparent: rgba(46,45,45,0.27451);--secondary-color-transparent: rgba(61,61,61,0.46667);--highlight-color: #92ffaa;--error-color: #c5344e;--error-info: #14854e;--font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;--white-dark: #dddddd}.badge{background-color:var(--wh-subtle-gray);color:var(--wh-text);box-shadow:0 4px 4px -2px rgba(0,0,0,.5);width:15px;height:15px;border-radius:50%;line-height:15px;text-align:center;margin-right:10px;line-height:100%}hr.divider{width:80%;margin:10px auto;border:solid .2px var(--secondary-light)}:host{z-index:99999999 !important}:host{min-width:360px;min-height:360px;background:var(--wh-primary-color);font-family:var(--font-family);border-radius:10px}.container{z-index:99999999 !important}.container{margin:0 auto;padding-bottom:20px;width:100%;background-color:var(--wh-primary-color);font-family:var(--font-family);border-radius:inherit;min-width:360px;min-height:360px;text-align:center}.container .welcome-header{font-size:35px;line-height:39px;transition-duration:1s;transition-timing-function:ease-in- put;font-weight:200;color:#fff;margin:30px auto;width:-moz-fit-content;width:fit-content}.container .welcome-header:after{content:"";height:3px;position:absolute;bottom:0;left:0;width:0%;background:var(--wh-primary-color);transition:.5s;transition-delay:.5s}.container .welcome-header svg{fill:var(--wh-primary-color);width:40px;position:absolute;left:10%;transition:.5s;transition-delay:.5s;opacity:0}.container.form-success{background-color:var(--wh-secondary-700);transition:.5s}.container.form-success .tabs{opacity:0}.container.form-success .welcome-header{transform:translateY(85px)}.container.form-success .welcome-header:after{width:100%}.container.form-success .welcome-header svg{left:96%;fill:var(--wh-primary-color);bottom:0;opacity:1}.container.form-success .legal-info-container{opacity:0}form{padding:20px 0 0 0;position:relative;z-index:2}form input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid rgba(255,255,255,.4);background-color:rgba(255,255,255,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px auto;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300}form input:hover{background-color:rgba(255,255,255,.4)}form input:focus{background-color:#fff;width:300px;color:#53e3a6}form button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:var(--wh-bg-base);border:0;padding:10px 15px;color:#53e3a6;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s}form button.loading{width:42px;border-radius:50%;transition:width .3s 0s,font-size .1s .15s,border-radius 0s .29s}form button:hover{background-color:var(--secondary-dark)}.tabs{display:flex}.tabs button{width:50%;height:50px;border:none;color:#fff;background:var(--wh-primary-color);outline:none;cursor:pointer;font-weight:bold;text-transform:uppercase}.tabs button:nth-child(1){border-radius:10px 0px 0px 0px}.tabs button:nth-child(2){border-radius:0px 10px 0px 0px}.tabs button.active{background:var(--wh-primary-color);color:var(--secondary-color);box-shadow:1px 1px 1px 1px var(--wh-primary-dark)}.forgot-password{cursor:pointer;color:var(--secondary-color);font-size:medium;text-align:center;margin-top:14px}.forgot-password:hover{text-decoration:underline;color:#1877f2}.legal-info-container{width:250px;margin:15px auto}.legal-info-container .legal-info{--legal-info-color: var(--secondary-color);text-align:center;font-size:12px;color:var(--legal-info-color)}.legal-info-container .legal-info a{color:var(--legal-info-color)}',""]);const s=n},30827:(r,e,t)=>{"use strict";t.d(e,{y:()=>a});var o=t(38085),i=t(93811);class a extends i.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(r=>{r.unsubscribe()})}static define(r,e,t){(0,o.defineWebHighlightsElement)(r,e,t)}}},31655:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var o=t(36758),i=t.n(o),a=t(40935),n=t.n(a)()(i());n.push([r.id,':host{--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137);--primary-light: #53e3a6;--primary-dark: #007f4b;--primary-shadow: rgba(0,176,120,0.27843);--secondary-color: #3d4455;--secondary-light: #efefff;--secondary-dark: #252934;--secondary-dark-transparent: rgba(46,45,45,0.27451);--secondary-color-transparent: rgba(61,61,61,0.46667);--highlight-color: #92ffaa;--error-color: #c5344e;--error-info: #14854e;--font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;--white-dark: #dddddd}.badge{background-color:var(--wh-subtle-gray);color:var(--wh-text);box-shadow:0 4px 4px -2px rgba(0,0,0,.5);width:15px;height:15px;border-radius:50%;line-height:15px;text-align:center;margin-right:10px;line-height:100%}hr.divider{width:80%;margin:10px auto;border:solid .2px var(--secondary-light)}:host{text-align:center}form{position:relative;z-index:2}form input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid rgba(255,255,255,.4);background-color:rgba(255,255,255,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px auto;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:300}form input:hover{background-color:rgba(255,255,255,.4)}form input:focus{background-color:#fff;width:300px;color:#53e3a6}form button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:var(--wh-bg-base);border:0;padding:10px 15px;color:#53e3a6;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s}form button.loading{width:42px;border-radius:50%;transition:width .3s 0s,font-size .1s .15s,border-radius 0s .29s}form button:hover{background-color:var(--secondary-dark)}form button:disabled{color:#fff;background:var(--secondary-color-transparent);cursor:not-allowed}.was-validated input:invalid{border:solid var(--error-color) 1px}.was-validated input:invalid~.invalid-feedback{color:var(--error-color);margin-top:.2rem;font-size:.8rem;display:block}.invalid-feedback{color:var(--error-color);margin:5px auto}.resend-email{margin:5px auto;cursor:pointer}.resend-email button{background:none;color:var(--secondary-dark);padding:2px;margin:5px 0px}.resend-email button:hover{background:none;box-shadow:1px 1px 1px 1px var(--secondary-color);color:var(--secondary-dark)}',""]);const s=n},36758:r=>{"use strict";r.exports=function(r){return r[1]}},38085:r=>{"use strict";r.exports=WebHighlightsSharedLibExternal},40935:r=>{"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map(function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=r(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},e.i=function(r,t,o,i,a){"string"==typeof r&&(r=[[null,r,void 0]]);var n={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(n[d]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);o&&n[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},53107:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var o=t(36758),i=t.n(o),a=t(40935),n=t.n(a)()(i());n.push([r.id,':host{--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137);--primary-light: #53e3a6;--primary-dark: #007f4b;--primary-shadow: rgba(0,176,120,0.27843);--secondary-color: #3d4455;--secondary-light: #efefff;--secondary-dark: #252934;--secondary-dark-transparent: rgba(46,45,45,0.27451);--secondary-color-transparent: rgba(61,61,61,0.46667);--highlight-color: #92ffaa;--error-color: #c5344e;--error-info: #14854e;--font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;--white-dark: #dddddd}.badge{background-color:var(--wh-subtle-gray);color:var(--wh-text);box-shadow:0 4px 4px -2px rgba(0,0,0,.5);width:15px;height:15px;border-radius:50%;line-height:15px;text-align:center;margin-right:10px;line-height:100%}hr.divider{width:80%;margin:10px auto;border:solid .2px var(--secondary-light)}form{position:relative;z-index:2;margin-bottom:0;text-align:center}form input:not(#privacy-checkbox){-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:1px solid rgba(255,255,255,.4);background-color:rgba(255,255,255,.2);width:250px;border-radius:3px;padding:10px 15px;margin:0 auto 10px auto;display:block;text-align:center;font-size:18px;color:#fff;transition-duration:.25s;font-weight:200}form input:hover{background-color:rgba(255,255,255,.4)}form input:focus{background-color:#fff;width:300px;color:#53e3a6}form button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:var(--wh-bg-base);border:0;padding:10px 15px;color:#53e3a6;border-radius:3px;width:250px;cursor:pointer;font-size:18px;transition-duration:.25s}form button.loading{width:42px;border-radius:50%;transition:width .3s 0s,font-size .1s .15s,border-radius 0s .29s}form button:hover{background-color:var(--secondary-dark)}form button:disabled{color:#fff;background:var(--secondary-color-transparent);cursor:not-allowed}.invalid-feedback{color:var(--error-color);margin:5px auto;display:none}.was-validated input:invalid{border:solid var(--error-color) 1px}.was-validated input:invalid~.invalid-feedback{color:var(--error-color);margin-top:.2rem;font-size:.8rem;display:block}.was-validated input:valid~.invalid-feedback{display:none}.error-message{color:var(--error-color);margin:5px auto}[dir="ltr"] .privacy-confirmation{text-align:left}[dir="rtl"] .privacy-confirmation{text-align:right}.privacy-confirmation{font-size:12px;display:flex;max-width:270px;margin:20px auto}.privacy-confirmation input{max-width:15px !important}[dir="ltr"] .privacy-confirmation input[type=checkbox]+label{text-align:left}[dir="rtl"] .privacy-confirmation input[type=checkbox]+label{text-align:right}.privacy-confirmation input[type=checkbox]+label{color:var(--secondary-color);margin-left:6px}.privacy-confirmation a{color:var(--secondary-color)}',""]);const s=n},57271:(r,e,t)=>{"use strict";var o=t(38085),i=t(93811),a=t(95665),n=t(30827),s=t(12336),d=t.n(s),c=function(r,e,t,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,e,t,o);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n};const l=o.SHARED_COMPONENTS_INTERNAL.GoogleSignIn.TAG;class p extends n.y{constructor(){super(...arguments),this.oAuthInProgress=!1}get btnDescription(){return`Sign ${"signIn"===this.activeTab?"in":"up"} with Google`}get isDisabled(){return!1}onOAuthStarted(){this.dispatchEvent(new CustomEvent("oAuthStarted",{bubbles:!0,detail:"google"}))}render(){return i.html`
      <button
        @click=${this.onOAuthStarted}
        class="google-auth-btn"
        data-provider-id="google.com"
        ?disabled=${this.isDisabled}
      >
        ${this.oAuthInProgress?i.html`
              <webhighlights-loading></webhighlights-loading>
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
    `}}p.styles=i.css`
    ${(0,i.unsafeCSS)(d())}
  `,c([(0,a.property)()],p.prototype,"activeTab",void 0),c([(0,a.property)()],p.prototype,"oAuthInProgress",void 0),n.y.define(l,p)},58659:(r,e,t)=>{"use strict";var o=t(38085),i=t(93811),a=t(95665),n=t(30827),s=t(63908),d=t.n(s),c=function(r,e,t,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,e,t,o);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},l=function(r,e,t,o){return new(t||(t=Promise))(function(i,a){function n(r){try{d(o.next(r))}catch(r){a(r)}}function s(r){try{d(o.throw(r))}catch(r){a(r)}}function d(r){var e;r.done?i(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(n,s)}d((o=o.apply(r,e||[])).next())})};const p=o.SHARED_COMPONENTS_INTERNAL.SignIn,h=p.TAG;class u extends n.y{constructor(){super(...arguments),this.formSuccess=!1,this.loading=!1,this.formIsValid=!1,this.errorMsg=""}submit(r){return l(this,void 0,void 0,function*(){null==r||r.stopImmediatePropagation(),null==r||r.preventDefault();let e="";if(this.isFormValid()){const r={email:this.emailElement.value,password:this.passwordElement.value};try{this.loading=!0,e=yield this.userService.login(r),e&&this.emitLogin(e)}catch(r){this.errorMsg=null==r?void 0:r.error}this.loading=!1}else this.form.classList.add("was-validated")})}emitLogin(r){this.dispatchEvent(new CustomEvent("loggedIn",{bubbles:!0,detail:r}))}resendEmailConfirmation(){return l(this,void 0,void 0,function*(){yield this.userService.resendEmailConfirmationLink(this.emailElement.value)})}isFormValid(){this.passwordElement.value&&this.emailElement.value&&this.form.classList.add("was-validated");const r=this.form.checkValidity();return this.formIsValid=r,r}render(){return i.html`
      <form class="form">
        <input
          @keyup=${this.isFormValid}
          @keydown=${this.isFormValid}
          @change=${this.isFormValid}
          type="email"
          required
          id="email"
          data-testid=${p.TEST_IDS.EMAIL}
          name="email"
          placeholder="Email"
        />
        <input
          @keyup=${this.isFormValid}
          @keydown=${this.isFormValid}
          @change=${this.isFormValid}
          type="password"
          data-testid=${p.TEST_IDS.PASSWORD}
          required
          id="password"
          name="password"
          placeholder="Password"
        />

        ${this.errorMsg?i.html`
              <div
                class="invalid-feedback"
                data-testid=${p.TEST_IDS.ERROR_MSG}
              >
                ${this.errorMsg}
              </div>

              <!-- Option to resend email confirmation link -->
              ${"Email is not confirmed yet!"===this.errorMsg?i.html`
						<div class="resend-email">
							<button data-testid=${p.TEST_IDS.RESEND_EMAIL_BTN} style="width: 80%" @click=${()=>l(this,void 0,void 0,function*(){return yield this.resendEmailConfirmation()})}>Resend email confirmation link<button>
							</div>
						`:""}
            `:""}
        <button
          ?disabled=${!this.formIsValid}
          type="submit"
          id="login-button"
          data-testid=${p.TEST_IDS.SIGN_IN_BTN}
          @click=${r=>this.submit(r)}
          class="${this.loading?"loading":""}"
        >
          ${this.loading?"...":"Sign In"}
        </button>
      </form>
    `}}u.styles=i.css`
    ${(0,i.unsafeCSS)(d())}
  `,c([(0,a.property)()],u.prototype,"userService",void 0),c([(0,a.property)()],u.prototype,"formSuccess",void 0),c([(0,a.property)()],u.prototype,"loading",void 0),c([(0,a.query)("form")],u.prototype,"form",void 0),c([(0,a.query)("#email")],u.prototype,"emailElement",void 0),c([(0,a.property)()],u.prototype,"formIsValid",void 0),c([(0,a.query)("#password")],u.prototype,"passwordElement",void 0),c([(0,a.property)()],u.prototype,"errorMsg",void 0),n.y.define(h,u)},62263:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var o=t(36758),i=t.n(o),a=t(40935),n=t.n(a)()(i());n.push([r.id,':host{--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137);--primary-light: #53e3a6;--primary-dark: #007f4b;--primary-shadow: rgba(0,176,120,0.27843);--secondary-color: #3d4455;--secondary-light: #efefff;--secondary-dark: #252934;--secondary-dark-transparent: rgba(46,45,45,0.27451);--secondary-color-transparent: rgba(61,61,61,0.46667);--highlight-color: #92ffaa;--error-color: #c5344e;--error-info: #14854e;--font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;--white-dark: #dddddd}.badge{background-color:var(--wh-subtle-gray);color:var(--wh-text);box-shadow:0 4px 4px -2px rgba(0,0,0,.5);width:15px;height:15px;border-radius:50%;line-height:15px;text-align:center;margin-right:10px;line-height:100%}hr.divider{width:80%;margin:10px auto;border:solid .2px var(--secondary-light)}:host{font-family:var(--font-family);display:inline-block;width:100%}button:disabled{cursor:not-allowed !important;color:rgba(0,0,0,.26) !important;background-color:rgba(255,255,255,.5333333333) !important}.google-auth-btn{display:inline-flex;align-items:center;width:100%;justify-content:center;cursor:pointer;font-size:16px;line-height:16px;text-align:center;color:var(--wh-text);padding:12px 16px;border:1px solid var(--wh-border-back);border-radius:4px;-moz-column-gap:4px;column-gap:4px;background-color:var(--wh-bg-back);width:100%}.google-auth-btn:hover{background-color:var(--wh-bg-back-hover)}.google-auth-btn webhighlights-loading{margin-right:.5rem;margin-left:-0.25rem}.google-auth-btn svg{width:18px;height:18px;margin-right:8px;display:block;align-items:center}',""]);const s=n},63908:(r,e,t)=>{var o=t(31655);o&&o.__esModule&&(o=o.default),r.exports="string"==typeof o?o:o.toString()},69361:(r,e,t)=>{"use strict";t.d(e,{D:()=>i,u:()=>a});var o=t(38085);const i=new o.ChromeJwtService;function a(r){return new o.HttpClient(r||o.productionEnvironment,i)}},82772:(r,e,t)=>{var o=t(2783);o&&o.__esModule&&(o=o.default),r.exports="string"==typeof o?o:o.toString()},87635:(r,e,t)=>{"use strict";var o=t(38085),i=t(93811),a=t(95665),n=t(30827),s=t(82772),d=t.n(s),c=function(r,e,t,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,e,t,o);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},l=function(r,e,t,o){return new(t||(t=Promise))(function(i,a){function n(r){try{d(o.next(r))}catch(r){a(r)}}function s(r){try{d(o.throw(r))}catch(r){a(r)}}function d(r){var e;r.done?i(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(n,s)}d((o=o.apply(r,e||[])).next())})};const p=o.SHARED_COMPONENTS_INTERNAL.ForgotPassword.TAG;class h extends n.y{constructor(){super(...arguments),this.formSuccess=!1,this.loading=!1,this.formIsValid=!1,this.errorMsg=""}submit(r){return l(this,void 0,void 0,function*(){if(null==r||r.stopImmediatePropagation(),null==r||r.preventDefault(),this.isFormValid()){const r={email:this.emailElement.value};try{this.loading=!0,yield this.userService.sendPasswordResetEmail(r.email),this.emailElement.value="",this.emitSuccess()}catch(r){this.errorMsg=null==r?void 0:r.error}this.loading=!1}else this.form.classList.add("was-validated")})}emitSuccess(){this.dispatchEvent(new CustomEvent("success",{bubbles:!0}))}resendEmailConfirmation(){return l(this,void 0,void 0,function*(){yield this.userService.resendEmailConfirmationLink(this.emailElement.value)})}isFormValid(){this.emailElement.value&&this.form.classList.add("was-validated");const r=this.form.checkValidity();return this.formIsValid=r,r}render(){return i.html`
      <form class="form">
        <input
          @keyup=${()=>this.isFormValid()}
          @keydown=${()=>this.isFormValid()}
          @change=${()=>this.isFormValid()}
          type="email"
          required
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        ${this.errorMsg?i.html`
              <div class="invalid-feedback">${this.errorMsg}</div>
              <!-- Option to resend email confirmation link -->
              ${"Email is not confirmed yet!"===this.errorMsg?i.html` <span>Sorry, this email is not registered yet.</span> `:""}
            `:""}
        <button
          ?disabled=${!this.formIsValid}
          type="submit"
          id="login-button"
          @click=${r=>this.submit(r)}
          class="${this.loading?"loading":""}"
        >
          ${this.loading?"...":"Send email"}
        </button>
      </form>
    `}}h.styles=i.css`
    ${(0,i.unsafeCSS)(d())}
  `,c([(0,a.property)()],h.prototype,"userService",void 0),c([(0,a.property)()],h.prototype,"formSuccess",void 0),c([(0,a.property)()],h.prototype,"loading",void 0),c([(0,a.query)("form")],h.prototype,"form",void 0),c([(0,a.query)("#email")],h.prototype,"emailElement",void 0),c([(0,a.property)()],h.prototype,"formIsValid",void 0),c([(0,a.property)()],h.prototype,"errorMsg",void 0),n.y.define(p,h)},89475:(r,e,t)=>{var o=t(23078);o&&o.__esModule&&(o=o.default),r.exports="string"==typeof o?o:o.toString()},93811:r=>{"use strict";r.exports=LitExternal},95665:r=>{"use strict";r.exports=LitDecoratorsExternal}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return r[o](a,a.exports,t),a.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{"use strict";var r=t(38085),e=t(69361),o=t(93811),i=t(95665),a=(t(87635),t(57271),t(58659),t(6927),t(30827)),n=t(89475),s=t.n(n),d=function(r,e,t,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,e,t,o);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(n=(a<3?i(n):a>3?i(e,t,n):i(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},c=function(r,e,t,o){return new(t||(t=Promise))(function(i,a){function n(r){try{d(o.next(r))}catch(r){a(r)}}function s(r){try{d(o.throw(r))}catch(r){a(r)}}function d(r){var e;r.done?i(r.value):(e=r.value,e instanceof t?e:new t(function(r){r(e)})).then(n,s)}d((o=o.apply(r,e||[])).next())})};const l=r.SHARED_COMPONENTS.LobbyContainer.TAG;class p extends a.y{constructor(){super(...arguments),this.activeTab="signIn",this.formSuccess=!1,this.oAuthInProgress=!1,this.privacyCheckboxChecked=!1}firstUpdated(){return c(this,void 0,void 0,function*(){this.userService=new r.UserService((0,e.u)(this.environment)),yield this.loadUserData()})}loadUserData(){return c(this,void 0,void 0,function*(){try{this.loggedUser=yield e.D.getJwtPayload(),this.loggedUser||this.logout()}catch(r){this.logout()}})}loggedIn(e){return c(this,void 0,void 0,function*(){const t=e.detail;t&&(this.formSuccess=!0,setTimeout(()=>c(this,void 0,void 0,function*(){this.loggedUser=(0,r.getPayloadFromToken)(t),r.notifications.dispatch("loggedIn",{detail:{token:t}}),this.emitLogin(t)}),1300))})}emitLogin(r){this.dispatchEvent(new CustomEvent("loggedIn",{bubbles:!0,detail:r}))}logout(){return c(this,void 0,void 0,function*(){var r;this.loggedUser=void 0,this.formSuccess=!1,yield null===(r=this.userService)||void 0===r?void 0:r.logout()})}onPrivacyCheckboxChanged(r){this.privacyCheckboxChecked=r.detail}onOAuthStarted(r){this.dispatchEvent(new CustomEvent("oAuthStarted",{bubbles:!0,detail:r.detail}))}render(){return this.userService?o.html`
      <div class="container ${this.formSuccess?"form-success":""}">
        <div class="tabs">
          <button
            @click=${()=>this.activeTab="signIn"}
            class="${"signIn"===this.activeTab?"active":""}"
          >
            Sign in
          </button>
          <button
            @click=${()=>this.activeTab="signUp"}
            class="${"signUp"===this.activeTab?"active":""}"
          >
            Sign up
          </button>
        </div>
        <div class="welcome-container">
          <h1 class="welcome-header">
            <svg
              class="icon markIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 544 512"
            >
              <path
                d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"
              />
            </svg>
            Welcome
          </h1>
        </div>
        ${this.formSuccess?"":o.html`
              ${"forgotPassword"===this.activeTab?o.html`
                    <webhighlights-forgot-password
                      @success=${()=>this.activeTab="signIn"}
                      .userService=${this.userService}
                    ></webhighlights-forgot-password>
                  `:o.html`
                    ${"signIn"===this.activeTab?o.html`
                          <!-- Sign in View -->
                          <webhighlights-sign-in
                            @loggedIn=${this.loggedIn}
                            .userService=${this.userService}
                          ></webhighlights-sign-in>
                          <div
                            @click=${()=>this.activeTab="forgotPassword"}
                            class="forgot-password"
                          >
                            Forgot password?
                          </div>
                        `:o.html`
                          <!-- Sign Up view -->
                          <webhighlights-sign-up
                            @privacyCheckboxChanged=${this.onPrivacyCheckboxChanged}
                            @registered=${this.loggedIn}
                            .userService=${this.userService}
                          ></webhighlights-sign-up>
                        `}
                  `}
            `}
        ${this.formSuccess?o.html``:o.html`
              <webhighlights-google-sign-in
                @loggedIn=${this.loggedIn}
                .activeTab=${this.activeTab}
                .userService=${this.userService}
                .oAuthInProgress=${this.oAuthInProgress}
                .privacyCheckboxChecked=${this.privacyCheckboxChecked}
                @oAuthStarted=${this.onOAuthStarted}
              ></webhighlights-google-sign-in>
            `}
        <div class="legal-info-container">
          <span class="legal-info"
            >By clicking sign in or sign up you agree to our
            <a href="https://web-highlights.com/legal/terms-of-service"
              >Terms of Service</a
            >
            and
            <a href="https://web-highlights.com/legal/privacy-policy"
              >Privacy Policy</a
            >.</span
          >
        </div>
      </div>
    `:o.html``}}p.styles=o.css`
    ${(0,o.unsafeCSS)(s())}
  `,d([(0,i.property)()],p.prototype,"userService",void 0),d([(0,i.property)()],p.prototype,"activeTab",void 0),d([(0,i.property)()],p.prototype,"formSuccess",void 0),d([(0,i.property)()],p.prototype,"oAuthInProgress",void 0),d([(0,i.query)("form")],p.prototype,"form",void 0),d([(0,i.query)("#email")],p.prototype,"emailElement",void 0),d([(0,i.query)("#password")],p.prototype,"passwordElement",void 0),d([(0,i.property)()],p.prototype,"loggedUser",void 0),d([(0,i.property)()],p.prototype,"environment",void 0),d([(0,i.property)()],p.prototype,"privacyCheckboxChecked",void 0),a.y.define(l,p)})()})();