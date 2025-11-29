(()=>{var e={15688:(e,t,i)=>{var o=i(65719);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},30827:(e,t,i)=>{"use strict";i.d(t,{y:()=>a});var o=i(38085),r=i(93811);class a extends r.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,o.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(e=>{e.unsubscribe()})}static define(e,t,i){(0,o.defineWebHighlightsElement)(e,t,i)}}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i="",o=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),o&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),o&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i}).join("")},t.i=function(e,i,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var n=0;n<this.length;n++){var h=this[n][0];null!=h&&(s[h]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},65719:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var o=i(36758),r=i.n(o),a=i(40935),s=i.n(a)()(r());s.push([e.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{--color: black}[dir="ltr"] #content{text-align:left}[dir="rtl"] #content{text-align:right}#content{color:var(--color)}',""]);const n=s},93811:e=>{"use strict";e.exports=LitExternal}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=i(93811),t=i(38085),o=i(30827),r=i(15688),a=i.n(r);const s=t.SHARED_COMPONENTS.TermsOfService.TAG;class n extends o.y{render(){return e.html`
      <div id="content" class="site-content">
        <div class="ast-container">
          <div id="primary" class="content-area primary">
            <main id="main" class="site-main">
              <article
                class="post-42 page type-page status-publish has-post-thumbnail ast-article-single"
                id="post-42"
                itemtype="https://schema.org/CreativeWork"
              >
                <!-- .entry-header -->
                <div class="entry-content clear" itemprop="text">
                  <h2 class="terms-overall-header">Terms of Service</h2>
                  <h3 class="terms-section-title">Definitions</h3>

                  <p>
                    (i) "User" or "You" means the individual or the business
                    entity to which a license is granted by Web Highlights for
                    the use of the Software;
                  </p>

                  <p>
                    (ii) "Effective Date" means the date on which a User first
                    installs the Licensed Software through Web Highlights’
                    website or through a third-party application, extension, or
                    add-on store such as the Chrome Web Store website;
                  </p>

                  <p>
                    (iii) “Licensed Software” means the web-based software
                    extension called
                    <a
                      href="https://chrome.google.com/webstore/detail/web-highlights-pdf-web-hi/hldjnlbobkdkghfidgoecgmklcemanhm"
                      >Web Highlights</a
                    >, which is legally represented by
                    <a href="https://marius-bongarts.de/"
                      >"Marius Bongarts - Web &amp; App Development"</a
                    >.
                  </p>

                  <p>
                    (iv) “Licensee Data” means all electronic data or
                    information submitted by User to the Service;
                  </p>

                  <p>
                    (v) “Service” means the provision of access to the Licensed
                    Software for the purpose of transmitting Licensee Data;
                  </p>

                  <p>
                    (vi) “Usage Data” means data collected about the User’s use
                    of the Service. For example, how often the User accesses a
                    to do list, or what photo(s) they favorite.
                  </p>

                  <h3 class="terms-section-title">
                    1. YOUR RELATIONSHIP WITH WEB HIGHLIGHTS
                  </h3>
                  <p>
                    1.1 Your use of the Web Highlights extension and website and
                    any Web Highlights products, software, data feeds and
                    services (collectively the “Service”) is subject to the
                    terms of a legal agreement between you and Web Highlights.
                  </p>
                  <p>
                    1.2 Your legal agreement with Web Highlights is made up of
                    (A) the terms and conditions set out in this document, Web
                    Highlights’s Privacy Policy&nbsp;(collectively called the
                    “Terms”).
                  </p>
                  <p>
                    1.3 The Terms form a legally binding agreement between you
                    and Web Highlights in relation to your use of the Service.
                    It is important that you take the time to read them
                    carefully.
                  </p>
                  <p>
                    1.4 The Terms apply to all users of the Service, including
                    users who are also contributors of Content, on the Service.
                    “Content” includes the webpage with highlights, text, data
                    of highlights, software, scripts, graphics, photos, sounds,
                    music, videos, audiovisual combinations, interactive
                    features and other materials you may view on, access through
                    or contribute to the Service.
                  </p>
                  <h3 class="terms-section-title">2. ACCEPTING THE TERMS</h3>
                  <p>
                    2.1 In order to use the Service, you must firstly agree to
                    the Terms. You may not use the Service if you do not accept
                    the Terms.
                  </p>
                  <p>
                    2.2 You can accept the Terms by simply using the Service.
                    You understand and agree that Web Highlights will treat your
                    use of the Service as acceptance of the Terms from that
                    point onwards.
                  </p>
                  <p>
                    2.3 You may not use the Service and may not accept the Terms
                    if (a) you are not of legal age to form a binding contract
                    with Web Highlights and are not above age of 13, or (b) you
                    are a person who is either barred or otherwise legally
                    prohibited from receiving or using the Service under the
                    laws of the country in which you are resident or from which
                    you access or use the Service.
                  </p>
                  <p>
                    2.4 You should print off or save a local copy of the Terms
                    for your records.
                  </p>
                  <h3 class="terms-section-title">3. CHANGES TO THE TERMS</h3>
                  <p>
                    Web Highlights reserves the right to make changes the Terms
                    from time to time, for example to address changes to the law
                    or regulatory changes or changes to functionality offered
                    through the Service. Therefore you must look at the Terms
                    regularly to check for such changes. The modified version of
                    the Terms (the “Modified Terms”) will be posted at
                    https://web-highlights.com/legal/terms-of-service or made
                    available within the Service (for any modified additional
                    terms). If you do not agree to the Modified Terms you must
                    stop using the Service. Your continued use of the Service
                    after the date the Modified Terms are posted will constitute
                    your acceptance of the Modified Terms.
                  </p>
                  <h3 class="terms-section-title">
                    4. WEB HIGHLIGHTS ACCOUNTS
                  </h3>
                  <p>
                    4.1 In order to access some features of the Website or other
                    elements of the Service, you will have to create a Web
                    Highlights account. When creating your account, you must
                    provide accurate and complete information. It is important
                    that you must keep your Web Highlights account password
                    secure and confidential.
                  </p>
                  <p>
                    4.2 You must notify Web Highlights immediately of any breach
                    of security or unauthorised use of your Web Highlights
                    account that you become aware of.
                  </p>
                  <p>
                    4.3 You agree that you will be solely responsible (to Web
                    Highlights, and to others) for all activity that occurs
                    under your Web Highlights account.
                  </p>
                  <h3 class="terms-section-title">
                    5. GENERAL RESTRICTIONS ON USE
                  </h3>
                  <p>
                    5.1 Web Highlights hereby grants you permission to access
                    and use the Service, subject to the following express
                    conditions, and you agree that your failure to adhere to any
                    of these conditions shall constitute a breach of these Terms
                    on your part:
                  </p>
                  <div class="terms-subsection">
                    <ul>
                      <li>
                        A. You agree not to distribute any part of or parts of
                        the Website or the Service, including but not limited to
                        any Content, in any medium without Web Highlights’s
                        prior written authorisation, unless Web Highlights makes
                        available the means for such distribution through
                        functionality offered by the Service (such as the Web
                        Highlights sharing feature);
                      </li>
                      <li>
                        B. You agree not to alter or modify any part of the
                        Website or any of the Service (including but not limited
                        to the Web Highlights and its related technologies);
                      </li>
                      <li>
                        C. You agree not to access Content through any
                        technology or means other than the webpages of the
                        Website itself, the Web Highlights, or such other means
                        as Web Highlights may explicitly designate for this
                        purpose;
                      </li>
                      <li>
                        D. You agree not to (or attempt to) circumvent, disable
                        or otherwise interfere with any security related
                        features of the Service or features that (i) prevent or
                        restrict use or copying of Content or (ii) enforce
                        limitations on use of the Service or the content
                        accessible via the Service;
                      </li>
                      <li>
                        E. You agree not to use the Service (including the Web
                        Highlights) for any of the following commercial uses
                        unless you obtain Web Highlights’s prior written
                        approval:
                      </li>
                      <li>
                        F. You agree not to use or launch any automated system
                        (including, without limitation, any robot, spider or
                        offline reader) that accesses the Service in a manner
                        that sends more request messages to the Web Highlights
                        servers in a given period of time than a human can
                        reasonably produce in the same period by using a
                        publicly available, standard (i.e. not modified) web
                        browser;
                      </li>
                      <li>
                        G. You shall not copy, reproduce, distribute, transmit,
                        broadcast, display, sell, license, or otherwise exploit
                        any Content for any other purposes without the prior
                        written consent of Web Highlights or the respective
                        licensors of the Content.
                      </li>
                    </ul>
                    <p>
                      5.2 You agree that you will comply with all of the other
                      provisions of the Terms at all times during your use of
                      the Service.
                    </p>
                  </div>
                  <p>
                    5.3 Web Highlights is constantly innovating in order to
                    provide the best possible experience for its users. You
                    acknowledge and agree that the form and nature of the
                    Service which Web Highlights provides may change from time
                    to time without prior notice to you.
                  </p>
                  <p>
                    5.4 As part of this continuing innovation, you acknowledge
                    and agree that Web Highlights may stop (permanently or
                    temporarily) providing the Service (or any features within
                    the Service) to you or to users generally at Web
                    Highlights’s sole discretion, without prior notice to you.
                    You may stop using the Service at any time. You do not need
                    to specifically inform Web Highlights when you stop using
                    the Service.
                  </p>
                  <p>
                    5.5 You agree that you are solely responsible for (and that
                    Web Highlights has no responsibility to you or to any third
                    party for) any breach of your obligations under the Terms
                    and for the consequences (including any loss or damage which
                    Web Highlights may suffer) of any such breach.
                  </p>
                  <h3 class="terms-section-title">6. COPYRIGHT POLICY</h3>
                  <p>
                    6.1 Web Highlights operates a clear copyright policy in
                    relation to any Content that is alleged to infringe the
                    copyright of a third party.
                  </p>
                  <p>
                    6.2 As part of Web Highlights’s copyright policy, Web
                    Highlights will terminate user access to the Service if a
                    user has been determined to be a repeat infringer. A repeat
                    infringer is a user who has been notified of infringing
                    activity more than twice.
                  </p>
                  <h3 class="terms-section-title">7. CONTENT</h3>
                  <p>
                    7.1 Content stands for the information of highlighted
                    position and annotation which you created in certain webpage
                    (collectively the “Content”). As a Web Highlights account
                    holder you may submit Content. Your Content may be exposed
                    to various search engines such as Google, Bing and etc.
                  </p>
                  <p>
                    7.2 You retain all of your ownership rights in your
                    Content(highlights), but you are required to grant limited
                    license rights to Web Highlights and other users of the
                    Service.
                  </p>
                  <p>
                    7.3 You understand and agree that you are solely responsible
                    for your own Content and the consequences of posting or
                    publishing it to various search engine such as Google, Bing
                    and etc. Web Highlights does not endorse any Content or any
                    opinion, recommendation, or advice expressed therein, and
                    Web Highlights expressly disclaims any and all liability in
                    connection with Content.
                  </p>
                  <p>
                    7.4 You understand that Web Highlights may use Your Content
                    in a number of different ways, including by publicly
                    displaying it, reformatting it, incorporating it into
                    advertisements and other works, creating derivative works
                    from it, promoting it, distributing it, and allowing others
                    to do the same in connection with their own websites and
                    media platforms (“Other Media”). As such, you hereby
                    irrevocably grant us world-wide, perpetual, non-exclusive,
                    royalty-free, assignable, sublicensable, transferable rights
                    to use Your Content for any purpose.
                  </p>
                  <p>
                    7.5 You understand that you irrevocably grant the users of
                    the Service (Web Highlights) and any Other Media the right
                    to access Your Content in connection with their use of the
                    Service and any Other Media. Finally, you irrevocably waive,
                    and cause to be waived, against Web Highlights and its users
                    any claims and assertions of moral rights or attribution
                    with respect to Your Content. By “use” we mean use, copy,
                    publicly perform and display, reproduce, distribute, modify,
                    translate, remove, analyze, commercialize, and prepare
                    derivative works of Your Content.
                  </p>
                  <p>
                    7.6 You represent and warrant that you have (and will
                    continue to have during your use of the Service) all
                    necessary licenses, rights, consents, and permissions which
                    are required to enable Web Highlights to use your Content
                    for the purposes of the provision of the Service by Web
                    Highlights, and otherwise to use your Content in the manner
                    contemplated by the Service and these Terms.
                  </p>
                  <p>
                    7.7 You agree that you will not post or upload any Content
                    which contains material which it is unlawful for you to
                    possess in the country in which you are resident, or which
                    it would be unlawful for Web Highlights to use or possess in
                    connection with the provision of the Service.
                  </p>
                  <p>
                    7.8 You agree that Content you submit to the Service will
                    not contain any third party copyright material, or material
                    that is subject to other third party proprietary rights
                    (including rights of privacy or rights of publicity), unless
                    you have a formal license or permission from the rightful
                    owner, or are otherwise legally entitled, to post the
                    material in question and to grant Web Highlights the license
                    referred to in paragraph 8.1 below.
                  </p>
                  <p>
                    7.9 On becoming aware of any potential violation of these
                    Terms, Web Highlights reserves the right (but shall have no
                    obligation) to decide whether Content complies with the
                    content requirements set out in these Terms and may remove
                    such Content and/or terminate a User’s access for uploading
                    Content which is in violation of these Terms at any time,
                    without prior notice and at its sole discretion.
                  </p>
                  <p>
                    7.10 You further understand and acknowledge that in using
                    the Service, you may be exposed to Content that is factually
                    inaccurate, offensive, indecent, or otherwise objectionable
                    to you. You agree to waive, and hereby do waive, any legal
                    or equitable rights or remedies you have or may have against
                    Web Highlights with respect to any such Content.
                  </p>
                  <h3 class="terms-section-title">8. LICENSE RIGHTS</h3>
                  <p>
                    8.1 When you upload or post Content to Web Highlights, you
                    grant:<br />A. to Web Highlights, a worldwide,
                    non-exclusive, royalty-free, transferable license (with
                    right to sub-license) to use, reproduce, distribute, prepare
                    derivative works of, display, and perform that Content in
                    connection with the provision of the Service and otherwise
                    in connection with the provision of the Service and Web
                    Highlights’s business, including without limitation for
                    promoting and redistributing part or all of the Service (and
                    derivative works thereof) in any media formats and through
                    any media channels;<br />B. to each user of the Service, a
                    worldwide, non-exclusive, royalty-free license to access
                    your Content through the Service, and to use, reproduce,
                    distribute, prepare derivative works of, display and perform
                    such Content to the extent permitted by the functionality of
                    the Service and under these Terms.
                  </p>
                  <p>
                    8.2 The above licenses granted by you in Content terminate
                    when you remove or delete your Content from the Website. The
                    above licenses granted by you in textual comments you submit
                    as Content are perpetual and irrevocable, but are otherwise
                    without prejudice to your ownerships rights, which are
                    retained by you as set out in paragraph 7.2 above.
                  </p>
                  <h3 class="terms-section-title">
                    9. WEB HIGHLIGHTS CONTENT ON THE WEBSITE
                  </h3>
                  <p>
                    9.1 With the exception of Content submitted to the Service
                    by you, all other Content on the Service is either owned by
                    or licensed to Web Highlights, and is subject to copyright,
                    trade mark rights, and other intellectual property rights of
                    Web Highlights or Web Highlights’s licensors. Any third
                    party trade or service marks present on Content not uploaded
                    or posted by you are trade or service marks of their
                    respective owners. Such Content may not be downloaded,
                    copied, reproduced, distributed, transmitted, broadcast,
                    displayed, sold, licensed, or otherwise exploited for any
                    other purpose whatsoever without the prior written consent
                    of Web Highlights or, where applicable, Web Highlights’s
                    licensors. Web Highlights and its licensors reserve all
                    rights not expressly granted in and to their Content.
                  </p>
                  <h3 class="terms-section-title">
                    10. LINKS FROM WEB HIGHLIGHTS
                  </h3>
                  <p>
                    10.1 The Service may include hyperlinks to other web sites
                    that are not owned or controlled by Web Highlights. Web
                    Highlights has no control over, and assumes no
                    responsibility for, the content, privacy policies, or
                    practices of any third party websites.
                  </p>
                  <p>
                    10.2 You acknowledge and agree that Web Highlights is not
                    responsible for the availability of any such external sites
                    or resources, and does not endorse any advertising, products
                    or other materials on or available from such web sites or
                    resources.
                  </p>
                  <p>
                    10.3 You acknowledge and agree that Web Highlights is not
                    liable for any loss or damage which may be incurred by you
                    as a result of the availability of those external sites or
                    resources, or as a result of any reliance placed by you on
                    the completeness, accuracy or existence of any advertising,
                    products or other materials on, or available from, such web
                    sites or resources.
                  </p>
                  <p>
                    10.4 Web Highlights encourages you to be aware when you
                    leave the Service and to read the terms and conditions and
                    privacy policy of each other website that you visit.
                  </p>
                  <h3 class="terms-section-title">
                    11. ENDING YOUR RELATIONSHIP WITH WEB HIGHLIGHTS
                  </h3>
                  <p>
                    11.1 The Terms will continue to apply until terminated by
                    either you or Web Highlights as set out below. Web
                    Highlights reserves the right, in its sole discretion, to
                    restrict, suspend, or terminate these Terms of Service and
                    your access to, or use of, all or any part of the Site or
                    the Services at any time and for any reason without prior
                    notice or liability.
                  </p>
                  <p>
                    11.2 If you want to terminate your legal agreement with Web
                    Highlights, you may do so by (a) notifying Web Highlights at
                    any time and (b) closing your Web Highlights account. Should
                    you wish to delete your account, you may email
                    <a href="mailto:marius@web-highlights.com"
                      >marius@web-highlights.com</a
                    >
                    to request the deletion of your account. Please send us the
                    request from the email account associated with your Web
                    Highlights user. We will thereafter aim to delete your
                    account within 7 days, and at the latest before 30 days. You
                    will also have access to deleting your account in the
                    <a href="https://web-highlights.com/settings"
                      >Web Highlights settings </a
                    >.
                    <br />
                    In addition, please note that Web Highlights also reserves
                    the right to delete inactive accounts after a period of
                    time. Before deleting an inactive account, Web Highlights
                    will send emails to inform the user about the deletion.
                  </p>
                  <p>
                    11.3 Web Highlights may at any time terminate its legal
                    agreement with you if:
                  </p>
                  <div class="terms-subsection">
                    <ul>
                      <li>
                        A. you have breached any provision of the Terms (or have
                        acted in manner which clearly shows that you do not
                        intend to, or are unable to comply with the provisions
                        of the Terms); or
                      </li>
                      <li>
                        B. Web Highlights is required to do so by law (for
                        example, where the provision of the Service to you is,
                        or becomes, unlawful); or
                      </li>
                      <li>
                        C. Web Highlights may delete inactive accounts.
                        Beforehand, users will receive emails informing them of
                        the deletion.
                      </li>
                    </ul>
                  </div>
                  <p>
                    11.4 Web Highlights may terminate its legal agreement with
                    you if:
                  </p>
                  <div class="terms-subsection">
                    <ul>
                      <li>
                        A. Web Highlights is transitioning to no longer
                        providing the Service to users in the country in which
                        you are resident or from which you use the Service; or
                      </li>
                      <li>
                        B. the provision of the Service to you by Web Highlights
                        is, in Web Highlights’s opinion, no longer commercially
                        viable and in the case of each of A and B of this clause
                        11.4 shall, where possible, give reasonable notice of
                        such termination; or
                      </li>
                      <li>
                        C. Web Highlights is transitioning to no longer
                        providing the Service to all users in general. The
                        reason for shutting down the application is immaterial
                        and can be done by Web Highlights at any time. Payments
                        of premium access do not entitle you to continue using
                        the application. If users are in the specified 14 days
                        money-back guarantee, a refund of the purchase price can
                        be made according to 14.2. Otherwise, a refund of the
                        purchase price is excluded.
                      </li>
                    </ul>
                  </div>
                  <p>
                    11.5 When these Terms come to an end, all of the legal
                    rights, obligations and liabilities that you and Web
                    Highlights have benefited from, been subject to (or which
                    have accrued over time whilst the Terms have been in force)
                    or which are expressed to continue indefinitely, shall be
                    unaffected by this cessation, and the provisions of
                    paragraph 14.6 shall continue to apply to such rights,
                    obligations and liabilities indefinitely.
                  </p>
                  <h3 class="terms-section-title">
                    12. EXCLUSION OF WARRANTIES
                  </h3>
                  <p>
                    12.1 Nothing in the Terms shall affect any statutory rights
                    that you are always entitled to as a consumer and that you
                    cannot contractually agree to alter or waive.
                  </p>
                  <p>
                    12.2 The Service is provided “as is” and Web Highlights
                    makes no warranty or representation to you with respect to
                    them.
                  </p>
                  <p>
                    12.3 In particular Web Highlights does not represent or
                    warrant to you that:
                  </p>
                  <div class="terms-subsection">
                    <ul>
                      <li>
                        A. Your use of the Service will meet your requirements,
                      </li>
                      <li>
                        B. Your use of the Service will be uninterrupted,
                        timely, secure or free from error,
                      </li>
                      <li>
                        C. Any information obtained by you as a result of your
                        use of the Service will be accurate or reliable, and
                      </li>
                      <li>
                        D. That defects in the operation or functionality of any
                        software provided to you as part of the Service will be
                        corrected.
                      </li>
                    </ul>
                  </div>
                  <p>
                    12.4 No conditions, warranties or other terms (including any
                    implied terms as to satisfactory quality, fitness for
                    purpose or conformance with description) apply to the
                    Service except to the extent that they are expressly set out
                    in the Terms.
                  </p>
                  <h3 class="terms-section-title">
                    13. LIMITATION OF LIABILITY
                  </h3>
                  <p>
                    13.1 Nothing in these Terms shall exclude or limit Web
                    Highlights’s liability for losses which may not be lawfully
                    excluded or limited by applicable law.
                  </p>
                  <p>
                    13.2 Subject to the overall provision in paragraph 13.1
                    above Web Highlights shall not be liable to you for:
                  </p>
                  <div class="terms-subsection">
                    <ul>
                      <li>
                        A. Any indirect or consequential losses which may be
                        incurred by you. This shall include; (i) any loss of
                        profit (whether incurred directly or indirectly); (ii)
                        any loss of goodwill or business reputation; (iii) any
                        loss of opportunity; or (iv) any loss of data suffered
                        by you;
                      </li>
                      <li>
                        B. Any loss or damage which may be incurred by you as a
                        result of:
                      </li>
                    </ul>
                    <div class="terms-subsection">
                      <ul>
                        <li style="list-style-type: none;">
                          <ul>
                            <li>
                              i. Any reliance placed by you on the completeness,
                              accuracy or existence of any advertising, or as a
                              result of any relationship or transaction between
                              you and any advertiser or sponsor whose
                              advertising appears on the Service;
                            </li>
                            <li>
                              ii. Any changes which Web Highlights may make to
                              the Service, or for any permanent or temporary
                              cessation in the provision of the Service (or any
                              features within the Service);
                            </li>
                            <li>
                              iii. The deletion of, corruption of, or failure to
                              store, any Content and other communications data
                              maintained or transmitted by or through your use
                              of the Service;
                            </li>
                            <li>
                              iv. Your failure to provide Web Highlights with
                              accurate account information;
                            </li>
                            <li>
                              v. Your failure to keep your password or Web
                              Highlights account details secure and
                              confidential.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    13.3 The limitations on Web Highlights’s liability to you in
                    paragraph 13.2 above shall apply whether or not Web
                    Highlights has been advised of or should have been aware of
                    the possibility of any such losses arising.
                  </p>
                  <h3 class="terms-section-title">14. PAYMENTS</h3>
                  <p>
                    14.1 Payment is made through our service provider Paddle,
                    who acts as Merchant of Record (MoR). Paddle is a trademark
                    of Paddle.com Market Limited, registered in England and
                    Wales with company number 10690412 and registered office at
                    60 St. Martin's Lane, London, WC2N 4JS, United Kingdom. By
                    using Paddle's payment services, you agree to Paddle's Terms
                    of Use, which are available at https://paddle.com/terms. The
                    user will receive a monthly or yearly invoice by email. In
                    case of late payment, the existing subscription will be
                    terminated.
                    <br />
                    <br />
                    In connection with your requested purchasing, you will be
                    asked to provide customary billing information such as name,
                    billing address, and credit card information third-party
                    payment processor, PayPal. You agree to pay Web Highlights
                    Payments for any confirmed purchasing made in connection
                    with your Web Highlights Account in accordance with these
                    Terms by one of the methods described on the Site or
                    Application, e.g. by PayPal. You hereby authorize the
                    collection of such amounts by charging the credit card
                    provided as part of requesting purchase via a third-party
                    online payment processor, PayPal.
                  </p>
                  <p>
                    14.2 Web Highlights offers a 14 days money-back guarantee
                    for any payment. You can request a refund during the 14 days
                    period by contacting
                    <a href="https://web-highlights.com/legal/imprint"
                      >Web Highlights</a
                    >.
                  </p>
                  <p>
                    14.3 In case you purchased a Web Highlights plan by a
                    one-time purchase you hereby agree that the one-time
                    purchase entitles you to use the Software for as long as Web
                    Highlights (iii) offers it. If Web Highlights (iii) decides
                    to shut down the Service, according to 11.4 (C), you will no
                    longer be entitled to use the Service.
                  </p>
                  <p>
                    14.4 In case you purchased the features of the product by a
                    paid subscription it will automatically renew after the
                    specified period (e. g. one year). It will be renewed
                    automatically by our payment provider Paddle, as stated in
                    14.1. The user can cancel the subscription at any time by
                    signing in to the account and visting the
                    <a href="https://web-highlights.com/settings"
                      >account settings</a
                    >. The cancellation takes effect at the end of the current
                    billing period. If there are technical problems or
                    cancellation is not possible for other reasons, it is also
                    possible to send an email to
                    <b>marius@web-highlights.com</b>. Should you want to stop
                    using one of our paid plans and return to the free version
                    within 14 days since the purchase, you can request a refund
                    according to 14.2.
                  </p>
                  <h3 class="terms-section-title">15. GENERAL LEGAL TERMS</h3>
                  <p>
                    15.1 The Terms constitute the whole legal agreement between
                    you and Web Highlights and govern your use of the Service
                    and completely replace any prior agreements between you and
                    Web Highlights in relation to the Service.
                  </p>
                  <p>
                    15.2 You agree that Web Highlights may provide you with
                    notices, including those regarding changes to the Terms, by
                    email, regular mail, or postings on the Service.
                  </p>
                  <p>
                    15.3 You agree that if Web Highlights does not exercise or
                    enforce any legal right or remedy which is contained in the
                    Terms (or which Web Highlights has the benefit of under any
                    applicable law), this will not be taken to be a formal
                    waiver of Web Highlights’s rights and that those rights or
                    remedies will still be available to Web Highlights.
                  </p>
                  <p>
                    15.4 If any court of law, having the jurisdiction to decide
                    on this matter, rules that any provision of these Terms is
                    invalid, then that provision will be removed from the Terms
                    without affecting the rest of the Terms. The remaining
                    provisions of the Terms will continue to be valid and
                    enforceable.
                  </p>
                  <p>
                    15.5 You acknowledge and agree that each member of the group
                    of companies of which Web Highlights is a part shall be
                    third party beneficiaries to the Terms and that such other
                    companies shall be entitled to directly enforce, and rely
                    upon, any provision of the Terms which confers a benefit on
                    (or rights in favour of) them. Other than this, no other
                    person or company shall be a third party beneficiary of the
                    Terms.
                  </p>

                  <h2>External Services</h2>
                  <h3 class="terms-section-title">ICONS</h3>
                  <p>
                    On this website and inside the chrome extensions, icons are
                    used that are created by
                    <a
                      data-v-552e60b4=""
                      rel="nofollow"
                      href="https://www.flaticon.com/de/autoren/smashicons"
                      title="Smashicons"
                      >Smashicons</a
                    >
                    from
                    <a
                      data-v-552e60b4=""
                      rel="nofollow"
                      href="https://www.flaticon.com/de/"
                      title="Flaticon"
                      >www.flaticon.com</a
                    >
                    and also from
                    <a
                      rel="nofollow"
                      href="https://iconscout.com/icons/cloud"
                      target="_blank"
                      >Cloud Icon</a
                    >
                    by
                    <a
                      rel="nofollow"
                      href="https://iconscout.com/contributors/google-inc"
                      >Google Inc.</a
                    >
                    on
                    <a href="https://iconscout.com" rel="nofollow">IconScout</a>
                  </p>
                </div>
                <!-- .entry-content .clear -->
              </article>
              <!-- #post-## -->
            </main>
            <!-- #main -->
          </div>
          <!-- #primary -->
        </div>
        <!-- ast-container -->
      </div>
    `}}n.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,o.y.define(s,n)})()})();