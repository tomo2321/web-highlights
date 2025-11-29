/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={672:(t,e,o)=>{"use strict";o.d(e,{r:()=>r});const r=o(93811).css`
  :host {
    display: block;
  }
`},869:(t,e,o)=>{"use strict";o.d(e,{_:()=>i});var r=o(85608);function i(t,e,o,r,i){return new s(t,e,o,r,i)}var s=function(t){function e(e,o,r,i,s,n){var l=t.call(this,e)||this;return l.onFinalize=s,l.shouldUnsubscribe=n,l._next=o?function(t){try{o(t)}catch(t){e.error(t)}}:t.prototype._next,l._error=i?function(t){try{i(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,l}return(0,r.C6)(e,t),e.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;t.prototype.unsubscribe.call(this),!o&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},e}(o(21235).vU)},1772:(t,e,o)=>{"use strict";o.d(e,{M:()=>s});var r=o(61824),i=o(54184);function s(t,e){if(!t)throw new Error("Iterable cannot be null");return new r.c(function(o){(0,i.N)(o,e,function(){var r=t[Symbol.asyncIterator]();(0,i.N)(o,e,function(){r.next().then(function(t){t.done?o.complete():o.next(t.value)})},0,!0)})})}},2702:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(14977),c=o.n(a);const h=r.SHARED_COMPONENTS_INTERNAL.SettingsIntegrationItem.TAG;class d extends n.y{render(){if(!this.props)throw new Error(`'props' is missing in ${h}`);return i.html`
      <header>
        <div class="image-container">${this.props.image}</div>
        <span class="title" part="title">${this.props.title}</span>
      </header>
      ${this.props.whatItCanDo?i.html`
            <span class="description" part="description"
              >${this.props.whatItCanDo}</span
            >
          `:i.html``}
    `}}d.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,s.property)()],d.prototype,"props",void 0),n.y.define(h,d)},3862:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,"ul{padding-left:0;margin:0}ul.flex.flex-wrap.items-center{display:flex;flex-wrap:wrap;align-items:center}li.w-full.grid.grid-cols-3.justify-items-end.items-center.border-b.border-gray-100.text-gray-600.py-2{width:100%;display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));justify-content:flex-start;align-items:center;border-bottom:1px solid var(--wh-border-base-strong);color:var(--wh-text-light);padding-top:.5rem;padding-bottom:.5rem}li.w-full:last-child{border-bottom:none}li a.text-blue-600.col-span-1{color:#3b82f6;grid-column:span 1}li a.text-blue-600.col-span-1:hover{text-decoration:underline}li span.col-span-1{grid-column:span 1}span.col-span-1.w-fit.inline-flex.items-center.px-2.py-1.ml-2.text-sm.font-medium.rounded{grid-column:span 1;width:-moz-fit-content;width:fit-content;display:inline-flex;align-items:center;padding-left:.5rem;padding-right:.5rem;margin-left:.5rem;font-size:.875rem;font-weight:500;border-radius:.375rem}.text-green-800{color:#2f855a}.bg-green-100{background-color:#f0fdf4}.dark .bg-green-900{background-color:#22543d}.dark .text-green-300{color:#4fd1a7}.text-gray-800{color:#1a202c}.bg-gray-100{background-color:#f0f4f7}.dark .bg-gray-700{background-color:#4a5568}.dark .text-gray-300{color:#a0aec0}.text-red-800{color:#9b2c2c}.bg-red-100{background-color:#fdf2f2}.dark .bg-red-900{background-color:#742a2a}.dark .text-red-300{color:#f56565}",""]);const l=n},3941:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,':host,.sl-theme-dark{color-scheme:dark;--sl-color-gray-50: hsl(240, 5.1%, 15%);--sl-color-gray-100: hsl(240, 5.7%, 18.2%);--sl-color-gray-200: hsl(240, 4.6%, 22%);--sl-color-gray-300: hsl(240, 5%, 27.6%);--sl-color-gray-400: hsl(240, 5%, 35.5%);--sl-color-gray-500: hsl(240, 3.7%, 44%);--sl-color-gray-600: hsl(240, 5.3%, 58%);--sl-color-gray-700: hsl(240, 5.6%, 73%);--sl-color-gray-800: hsl(240, 7.3%, 84%);--sl-color-gray-900: hsl(240, 9.1%, 91.8%);--sl-color-gray-950: hsl(0, 0%, 95%);--sl-color-red-50: hsl(0, 56%, 23.9%);--sl-color-red-100: hsl(0.6, 60%, 33.9%);--sl-color-red-200: hsl(0.9, 67.2%, 37.1%);--sl-color-red-300: hsl(1.1, 71.3%, 43.7%);--sl-color-red-400: hsl(1, 76%, 52.5%);--sl-color-red-500: hsl(0.7, 89.6%, 57.2%);--sl-color-red-600: hsl(0, 98.6%, 67.9%);--sl-color-red-700: hsl(0, 100%, 72.3%);--sl-color-red-800: hsl(0, 100%, 85.6%);--sl-color-red-900: hsl(0, 100%, 90.3%);--sl-color-red-950: hsl(0, 100%, 95.9%);--sl-color-orange-50: hsl(15, 64.2%, 23.3%);--sl-color-orange-100: hsl(15.1, 70.9%, 31.1%);--sl-color-orange-200: hsl(15.3, 75.7%, 35.5%);--sl-color-orange-300: hsl(17.1, 83.5%, 42.7%);--sl-color-orange-400: hsl(20.1, 88%, 50.8%);--sl-color-orange-500: hsl(24.3, 100%, 50.5%);--sl-color-orange-600: hsl(27.2, 100%, 57.7%);--sl-color-orange-700: hsl(31.3, 100%, 68.7%);--sl-color-orange-800: hsl(33.8, 100%, 79.3%);--sl-color-orange-900: hsl(38.9, 100%, 87.7%);--sl-color-orange-950: hsl(46.2, 100%, 95%);--sl-color-amber-50: hsl(21.9, 66.3%, 21.1%);--sl-color-amber-100: hsl(21.5, 73.6%, 29.7%);--sl-color-amber-200: hsl(22.3, 77.6%, 33.3%);--sl-color-amber-300: hsl(25.4, 84.2%, 39.6%);--sl-color-amber-400: hsl(31.4, 87.4%, 46.7%);--sl-color-amber-500: hsl(37, 96.6%, 48.3%);--sl-color-amber-600: hsl(43.3, 100%, 53.4%);--sl-color-amber-700: hsl(46.5, 100%, 61.1%);--sl-color-amber-800: hsl(49.3, 100%, 73%);--sl-color-amber-900: hsl(51.8, 100%, 85%);--sl-color-amber-950: hsl(60, 100%, 94.6%);--sl-color-yellow-50: hsl(32.5, 60%, 18.2%);--sl-color-yellow-100: hsl(28.1, 68.6%, 29%);--sl-color-yellow-200: hsl(31.3, 75.8%, 30.8%);--sl-color-yellow-300: hsl(34.7, 84.4%, 35.3%);--sl-color-yellow-400: hsl(40.1, 87.3%, 43.3%);--sl-color-yellow-500: hsl(44.7, 88%, 46%);--sl-color-yellow-600: hsl(47.7, 100%, 50.9%);--sl-color-yellow-700: hsl(51.3, 100%, 59.9%);--sl-color-yellow-800: hsl(54.6, 100%, 73%);--sl-color-yellow-900: hsl(58.9, 100%, 84.2%);--sl-color-yellow-950: hsl(60, 100%, 94%);--sl-color-lime-50: hsl(86.5, 54.4%, 18%);--sl-color-lime-100: hsl(87.6, 56.8%, 23.3%);--sl-color-lime-200: hsl(85.8, 63.2%, 24.5%);--sl-color-lime-300: hsl(86.1, 72%, 29.4%);--sl-color-lime-400: hsl(85.5, 76.8%, 37.3%);--sl-color-lime-500: hsl(84.3, 74.2%, 42.1%);--sl-color-lime-600: hsl(82.8, 81.5%, 52.6%);--sl-color-lime-700: hsl(82, 89.9%, 64%);--sl-color-lime-800: hsl(80.9, 97.9%, 76.6%);--sl-color-lime-900: hsl(77.9, 100%, 85.8%);--sl-color-lime-950: hsl(69.5, 100%, 93.8%);--sl-color-green-50: hsl(144.3, 53.6%, 16%);--sl-color-green-100: hsl(143.2, 55.4%, 23.5%);--sl-color-green-200: hsl(141.5, 58.2%, 26.3%);--sl-color-green-300: hsl(140.8, 64.2%, 31.8%);--sl-color-green-400: hsl(140.3, 68%, 39.2%);--sl-color-green-500: hsl(141.1, 64.9%, 43%);--sl-color-green-600: hsl(141.6, 72.4%, 55.2%);--sl-color-green-700: hsl(141.7, 82.7%, 70.1%);--sl-color-green-800: hsl(141, 90.9%, 82.1%);--sl-color-green-900: hsl(142, 100%, 89.1%);--sl-color-green-950: hsl(144, 100%, 95.5%);--sl-color-emerald-50: hsl(164.3, 75%, 13.5%);--sl-color-emerald-100: hsl(163.5, 72.6%, 20.1%);--sl-color-emerald-200: hsl(162.1, 73.7%, 22.4%);--sl-color-emerald-300: hsl(161.3, 77.3%, 27.6%);--sl-color-emerald-400: hsl(159.6, 77.1%, 34.3%);--sl-color-emerald-500: hsl(159.1, 73.5%, 37.9%);--sl-color-emerald-600: hsl(157.8, 66.8%, 48.9%);--sl-color-emerald-700: hsl(156.2, 76.1%, 63.8%);--sl-color-emerald-800: hsl(152.4, 84.4%, 77.4%);--sl-color-emerald-900: hsl(149.3, 100%, 87%);--sl-color-emerald-950: hsl(158.6, 100%, 94.8%);--sl-color-teal-50: hsl(176.5, 51.5%, 15.4%);--sl-color-teal-100: hsl(175.9, 54.7%, 22.3%);--sl-color-teal-200: hsl(175.9, 60.7%, 23.9%);--sl-color-teal-300: hsl(174.5, 67.3%, 28.8%);--sl-color-teal-400: hsl(174.4, 71.9%, 34.9%);--sl-color-teal-500: hsl(173.1, 71%, 38.3%);--sl-color-teal-600: hsl(172.3, 68.2%, 48.1%);--sl-color-teal-700: hsl(170.5, 81.3%, 61.5%);--sl-color-teal-800: hsl(168.4, 92.1%, 75.2%);--sl-color-teal-900: hsl(168.3, 100%, 86%);--sl-color-teal-950: hsl(180, 100%, 95.5%);--sl-color-wh-50: hsl(168.5, 65%, 11%);--sl-color-wh-100: hsl(167, 76%, 19%);--sl-color-wh-200: hsl(165.5, 86%, 24%);--sl-color-wh-300: hsl(164, 94%, 29%);--sl-color-wh-400: hsl(162.5, 103%, 31%);--sl-color-wh-500: hsl(161, 100%, 35%);--sl-color-wh-600: hsl(161, 86%, 45%);--sl-color-wh-700: hsl(161, 76%, 55%);--sl-color-wh-800: hsl(161, 83%, 76%);--sl-color-wh-900: hsl(161, 85%, 89%);--sl-color-wh-950: hsl(161, 76%, 96%);--sl-color-cyan-50: hsl(197.1, 53.8%, 20.3%);--sl-color-cyan-100: hsl(196.8, 57.3%, 27.2%);--sl-color-cyan-200: hsl(195.3, 62.7%, 29.4%);--sl-color-cyan-300: hsl(193.5, 71.3%, 34.1%);--sl-color-cyan-400: hsl(192.5, 76.8%, 40.6%);--sl-color-cyan-500: hsl(189.4, 78.6%, 42.6%);--sl-color-cyan-600: hsl(188.2, 89.1%, 51.7%);--sl-color-cyan-700: hsl(187, 98.6%, 66.2%);--sl-color-cyan-800: hsl(184.9, 100%, 78.3%);--sl-color-cyan-900: hsl(180, 100%, 86.6%);--sl-color-cyan-950: hsl(180, 100%, 94.8%);--sl-color-sky-50: hsl(203, 63.8%, 20.9%);--sl-color-sky-100: hsl(203.4, 70.4%, 28%);--sl-color-sky-200: hsl(202.7, 75.8%, 30.8%);--sl-color-sky-300: hsl(203.1, 80.4%, 36.1%);--sl-color-sky-400: hsl(202.1, 80.5%, 44.3%);--sl-color-sky-500: hsl(199.7, 85.9%, 47.7%);--sl-color-sky-600: hsl(198.7, 97.9%, 57.2%);--sl-color-sky-700: hsl(198.7, 100%, 70.5%);--sl-color-sky-800: hsl(198.8, 100%, 82.5%);--sl-color-sky-900: hsl(198.5, 100%, 89.9%);--sl-color-sky-950: hsl(186, 100%, 95.5%);--sl-color-blue-50: hsl(227.1, 49.5%, 22.7%);--sl-color-blue-100: hsl(225.8, 58.9%, 36.8%);--sl-color-blue-200: hsl(227.7, 64.4%, 42.9%);--sl-color-blue-300: hsl(226.1, 72.7%, 51.2%);--sl-color-blue-400: hsl(222.6, 86.5%, 56.3%);--sl-color-blue-500: hsl(217.8, 95.8%, 57.4%);--sl-color-blue-600: hsl(213.3, 100%, 65%);--sl-color-blue-700: hsl(210.9, 100%, 74.8%);--sl-color-blue-800: hsl(211.5, 100%, 83.4%);--sl-color-blue-900: hsl(211, 100%, 88.9%);--sl-color-blue-950: hsl(201.8, 100%, 95.3%);--sl-color-indigo-50: hsl(243.5, 40.8%, 27%);--sl-color-indigo-100: hsl(242.9, 45.7%, 37.6%);--sl-color-indigo-200: hsl(244.7, 52.7%, 43.1%);--sl-color-indigo-300: hsl(245.3, 60.5%, 52.4%);--sl-color-indigo-400: hsl(244.1, 79.2%, 60.4%);--sl-color-indigo-500: hsl(239.6, 88.7%, 63.8%);--sl-color-indigo-600: hsl(234.5, 96.7%, 70.9%);--sl-color-indigo-700: hsl(229.4, 100%, 78.3%);--sl-color-indigo-800: hsl(227.1, 100%, 85%);--sl-color-indigo-900: hsl(223.8, 100%, 89.9%);--sl-color-indigo-950: hsl(220, 100%, 95.1%);--sl-color-violet-50: hsl(265.1, 57.3%, 25.4%);--sl-color-violet-100: hsl(263.5, 63.8%, 39.4%);--sl-color-violet-200: hsl(263.4, 66.2%, 44.1%);--sl-color-violet-300: hsl(263.7, 72.8%, 52.4%);--sl-color-violet-400: hsl(262.5, 87.3%, 59.8%);--sl-color-violet-500: hsl(258.3, 95.1%, 63.2%);--sl-color-violet-600: hsl(255.1, 100%, 67.2%);--sl-color-violet-700: hsl(253, 100%, 81.5%);--sl-color-violet-800: hsl(251.7, 100%, 87.9%);--sl-color-violet-900: hsl(254.1, 100%, 91.7%);--sl-color-violet-950: hsl(257.1, 100%, 96.1%);--sl-color-purple-50: hsl(276, 54.3%, 20.5%);--sl-color-purple-100: hsl(273.6, 61.8%, 35.4%);--sl-color-purple-200: hsl(272.9, 64%, 41.4%);--sl-color-purple-300: hsl(271.9, 68.1%, 49.2%);--sl-color-purple-400: hsl(271.5, 85.1%, 57.8%);--sl-color-purple-500: hsl(270.7, 96.4%, 62.1%);--sl-color-purple-600: hsl(270.5, 100%, 71.9%);--sl-color-purple-700: hsl(270.9, 100%, 81.3%);--sl-color-purple-800: hsl(272.4, 100%, 87.7%);--sl-color-purple-900: hsl(276.7, 100%, 91.5%);--sl-color-purple-950: hsl(300, 100%, 96.5%);--sl-color-fuchsia-50: hsl(297.1, 51.2%, 18.6%);--sl-color-fuchsia-100: hsl(296.7, 59.5%, 31.5%);--sl-color-fuchsia-200: hsl(295.4, 65.4%, 35.1%);--sl-color-fuchsia-300: hsl(294.6, 67.4%, 42.2%);--sl-color-fuchsia-400: hsl(293.3, 68.7%, 51.2%);--sl-color-fuchsia-500: hsl(292.1, 88.4%, 57.7%);--sl-color-fuchsia-600: hsl(292, 98.5%, 59.5%);--sl-color-fuchsia-700: hsl(292.4, 100%, 79.5%);--sl-color-fuchsia-800: hsl(292.9, 100%, 86.8%);--sl-color-fuchsia-900: hsl(300, 100%, 91.5%);--sl-color-fuchsia-950: hsl(300, 100%, 96.3%);--sl-color-pink-50: hsl(336.2, 59.6%, 20%);--sl-color-pink-100: hsl(336.8, 63.9%, 34%);--sl-color-pink-200: hsl(336.8, 68.7%, 37.6%);--sl-color-pink-300: hsl(336.1, 71.8%, 44.5%);--sl-color-pink-400: hsl(333.9, 74.9%, 53.1%);--sl-color-pink-500: hsl(330.7, 86.3%, 57.7%);--sl-color-pink-600: hsl(328.6, 91.5%, 67.2%);--sl-color-pink-700: hsl(327.4, 97.6%, 78.7%);--sl-color-pink-800: hsl(325.1, 100%, 86.6%);--sl-color-pink-900: hsl(322.1, 100%, 91.3%);--sl-color-pink-950: hsl(315, 100%, 95.9%);--sl-color-rose-50: hsl(342.3, 62.9%, 21.5%);--sl-color-rose-100: hsl(342.8, 68.9%, 34.2%);--sl-color-rose-200: hsl(344.8, 72.6%, 37.3%);--sl-color-rose-300: hsl(346.9, 75.8%, 43.7%);--sl-color-rose-400: hsl(348.2, 80.1%, 52.7%);--sl-color-rose-500: hsl(350.4, 94.8%, 57.5%);--sl-color-rose-600: hsl(351.2, 100%, 58.1%);--sl-color-rose-700: hsl(352.3, 100%, 78.1%);--sl-color-rose-800: hsl(352, 100%, 86.2%);--sl-color-rose-900: hsl(354.5, 100%, 90.7%);--sl-color-rose-950: hsl(353.3, 100%, 95.7%);--sl-color-primary-50: var(--sl-color-wh-50);--sl-color-primary-100: var(--sl-color-wh-100);--sl-color-primary-200: var(--sl-color-wh-200);--sl-color-primary-300: var(--sl-color-wh-300);--sl-color-primary-400: var(--sl-color-wh-400);--sl-color-primary-500: var(--sl-color-wh-500);--sl-color-primary-600: var(--sl-color-wh-600);--sl-color-primary-700: var(--sl-color-wh-700);--sl-color-primary-800: var(--sl-color-wh-800);--sl-color-primary-900: var(--sl-color-wh-900);--sl-color-primary-950: var(--sl-color-wh-950);--sl-color-success-50: var(--sl-color-green-50);--sl-color-success-100: var(--sl-color-green-100);--sl-color-success-200: var(--sl-color-green-200);--sl-color-success-300: var(--sl-color-green-300);--sl-color-success-400: var(--sl-color-green-400);--sl-color-success-500: var(--sl-color-green-500);--sl-color-success-600: var(--sl-color-green-600);--sl-color-success-700: var(--sl-color-green-700);--sl-color-success-800: var(--sl-color-green-800);--sl-color-success-900: var(--sl-color-green-900);--sl-color-success-950: var(--sl-color-green-950);--sl-color-warning-50: var(--sl-color-amber-50);--sl-color-warning-100: var(--sl-color-amber-100);--sl-color-warning-200: var(--sl-color-amber-200);--sl-color-warning-300: var(--sl-color-amber-300);--sl-color-warning-400: var(--sl-color-amber-400);--sl-color-warning-500: var(--sl-color-amber-500);--sl-color-warning-600: var(--sl-color-amber-600);--sl-color-warning-700: var(--sl-color-amber-700);--sl-color-warning-800: var(--sl-color-amber-800);--sl-color-warning-900: var(--sl-color-amber-900);--sl-color-warning-950: var(--sl-color-amber-950);--sl-color-danger-50: var(--sl-color-red-50);--sl-color-danger-100: var(--sl-color-red-100);--sl-color-danger-200: var(--sl-color-red-200);--sl-color-danger-300: var(--sl-color-red-300);--sl-color-danger-400: var(--sl-color-red-400);--sl-color-danger-500: var(--sl-color-red-500);--sl-color-danger-600: var(--sl-color-red-600);--sl-color-danger-700: var(--sl-color-red-700);--sl-color-danger-800: var(--sl-color-red-800);--sl-color-danger-900: var(--sl-color-red-900);--sl-color-danger-950: var(--sl-color-red-950);--sl-color-neutral-50: var(--sl-color-gray-50);--sl-color-neutral-100: var(--sl-color-gray-100);--sl-color-neutral-200: var(--sl-color-gray-200);--sl-color-neutral-300: var(--sl-color-gray-300);--sl-color-neutral-400: var(--sl-color-gray-400);--sl-color-neutral-500: var(--sl-color-gray-500);--sl-color-neutral-600: var(--sl-color-gray-600);--sl-color-neutral-700: var(--sl-color-gray-700);--sl-color-neutral-800: var(--sl-color-gray-800);--sl-color-neutral-900: var(--sl-color-gray-900);--sl-color-neutral-950: var(--sl-color-gray-950);--sl-color-neutral-0: hsl(240, 5.9%, 11%);--sl-color-neutral-1000: hsl(0, 0%, 100%);--sl-border-radius-small: 0.1875rem;--sl-border-radius-medium: 0.25rem;--sl-border-radius-large: 0.5rem;--sl-border-radius-x-large: 1rem;--sl-border-radius-circle: 50%;--sl-border-radius-pill: 9999px;--sl-shadow-x-small: 0 1px 2px rgba(0, 0, 0, 0.18);--sl-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.24);--sl-shadow-medium: 0 2px 4px rgba(0, 0, 0, 0.24);--sl-shadow-large: 0 2px 8px rgba(0, 0, 0, 0.24);--sl-shadow-x-large: 0 4px 16px rgba(0, 0, 0, 0.24);--sl-spacing-3x-small: 0.125rem;--sl-spacing-2x-small: 0.25rem;--sl-spacing-x-small: 0.5rem;--sl-spacing-small: 0.75rem;--sl-spacing-medium: 1rem;--sl-spacing-large: 1.25rem;--sl-spacing-x-large: 1.75rem;--sl-spacing-2x-large: 2.25rem;--sl-spacing-3x-large: 3rem;--sl-spacing-4x-large: 4.5rem;--sl-transition-x-slow: 1000ms;--sl-transition-slow: 500ms;--sl-transition-medium: 250ms;--sl-transition-fast: 150ms;--sl-transition-x-fast: 50ms;--sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;--sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--sl-font-serif: Georgia, "Times New Roman", serif;--sl-font-size-2x-small: 0.575em;--sl-font-size-x-small: 0.7em;--sl-font-size-small: 0.8em;--sl-font-size-medium: 0.95em;--sl-font-size-large: 1.2em;--sl-font-size-x-large: 1.45em;--sl-font-size-2x-large: 2em;--sl-font-size-3x-large: 1.85em;--sl-font-size-4x-large: 4em;--sl-font-weight-light: 300;--sl-font-weight-normal: 400;--sl-font-weight-semibold: 500;--sl-font-weight-bold: 700;--sl-letter-spacing-denser: -0.03em;--sl-letter-spacing-dense: -0.015em;--sl-letter-spacing-normal: normal;--sl-letter-spacing-loose: 0.075em;--sl-letter-spacing-looser: 0.15em;--sl-line-height-denser: 1;--sl-line-height-dense: 1.4;--sl-line-height-normal: 1.8;--sl-line-height-loose: 2.2;--sl-line-height-looser: 2.6;--sl-focus-ring-color: var(--sl-color-primary-700);--sl-focus-ring-style: solid;--sl-focus-ring-width: 3px;--sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset: 1px;--sl-button-font-size-small: var(--sl-font-size-x-small);--sl-button-font-size-medium: var(--sl-font-size-small);--sl-button-font-size-large: var(--sl-font-size-medium);--sl-input-height-small: 1.875rem;--sl-input-height-medium: 2.5rem;--sl-input-height-large: 3.125rem;--sl-input-background-color: var(--wh-bg-base);--sl-input-background-color-hover: var(--wh-bg-back);--sl-input-background-color-focus: var(--wh-bg-back);--sl-input-background-color-disabled: var(--wh-bg-front);--sl-input-border-color: var(--wh-border-base);--sl-input-border-color-hover: var(--wh-border-base-hover);--sl-input-border-color-focus: var(--wh-border-base-hover);--sl-input-border-color-disabled: var(--wh-border-base-hover);--sl-input-border-width: 1px;--sl-input-required-content: "*";--sl-input-required-content-offset: -2px;--sl-input-required-content-color: var(--sl-input-label-color);--sl-input-border-radius-small: var(--sl-border-radius-medium);--sl-input-border-radius-medium: var(--sl-border-radius-medium);--sl-input-border-radius-large: var(--sl-border-radius-medium);--sl-input-font-family: var(--sl-font-sans);--sl-input-font-weight: var(--sl-font-weight-normal);--sl-input-font-size-small: var(--sl-font-size-small);--sl-input-font-size-medium: var(--sl-font-size-medium);--sl-input-font-size-large: var(--sl-font-size-large);--sl-input-letter-spacing: var(--sl-letter-spacing-normal);--sl-input-color: var(--wh-text);--sl-input-color-hover: var(--wh-text);--sl-input-color-focus: var(--wh-text);--sl-input-color-disabled: var(--wh-text-lighter);--sl-input-icon-color-hover: var(--sl-color-neutral-600);--sl-input-icon-color-focus: var(--sl-color-neutral-600);--sl-input-placeholder-color: var(--wh-text-lighter);--sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);--sl-input-spacing-small: var(--sl-spacing-small);--sl-input-spacing-medium: var(--sl-spacing-medium);--sl-input-spacing-large: var(--sl-spacing-large);--sl-input-filled-background-color: var(--wh-bg-front);--sl-input-filled-background-color-hover: var(--wh-bg-front);--sl-input-filled-background-color-focus: var(--wh-bg-front);--sl-input-filled-background-color-disabled: var(--wh-bg-front);--sl-input-filled-color: var(--sl-color-neutral-800);--sl-input-filled-color-hover: var(--sl-color-neutral-800);--sl-input-filled-color-focus: var(--wh-text);--sl-input-filled-color-disabled: var(--sl-color-neutral-800);--sl-input-focus-ring-color: hsla(198.6, 88.7%, 48.4%, 0.4);--sl-input-focus-ring-offset: 0;--sl-input-label-font-size-small: var(--sl-font-size-small);--sl-input-label-font-size-medium: var(--sl-font-size-medium);--sl-input-label-font-size-large: var(--sl-font-size-large);--sl-input-label-color: inherit;--sl-input-help-text-font-size-small: var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium: var(--sl-font-size-small);--sl-input-help-text-font-size-large: var(--sl-font-size-medium);--sl-input-help-text-color: var(--wh-text-light);--sl-toggle-size-small: 0.875rem;--sl-toggle-size-medium: 1.125rem;--sl-toggle-size-large: 1.375rem;--sl-overlay-background-color: hsla(0, 0%, 0%, 0.43);--sl-panel-background-color: var(--wh-bg-base);--sl-panel-border-color: var(--wh-border-base);--sl-panel-border-width: 1px;--sl-tooltip-border-radius: var(--sl-border-radius-medium);--sl-tooltip-background-color: var(--wh-bg-base);--sl-tooltip-color: var(--wh-text);--sl-tooltip-font-family: var(--sl-font-sans);--sl-tooltip-font-weight: var(--sl-font-weight-normal);--sl-tooltip-font-size: var(--sl-font-size-x-small);--sl-tooltip-line-height: var(--sl-line-height-dense);--sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size: 6px;--sl-z-index-drawer: 700;--sl-z-index-dialog: 800;--sl-z-index-dropdown: 900;--sl-z-index-toast: 950;--sl-z-index-tooltip: 1000}',""]);const l=n},3945:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,".backup-import-container{display:flex;-moz-column-gap:8px;column-gap:8px;align-items:center}.backup-import-container,.backup-import-btn-container,.choose-file-container{display:flex;align-items:center}",""]);const l=n},4334:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}.entry-container{width:100%;display:flex;flex-wrap:wrap;border-bottom:1px solid var(--wh-border-base);background:var(--wh-bg-base)}.entry{width:100%;display:flex;background:var(--wh-bg-base);opacity:1;justify-content:space-between;align-items:center;padding:12px 16px;box-sizing:border-box}.entry:hover{opacity:1;background:var(--wh-bg-base-hover)}.entry-header{margin-right:10px}.entry-header .entry-title{color:var(--wh-text-light);font-size:12px;margin:0 0 4px 0}.entry-header .entry-description{color:var(--wh-text-lighter);font-size:11px}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.blacklist{width:100%;padding:12px 16px;box-sizing:border-box;display:block}webhighlights-chrome-settings::part(container){border-bottom:none}.backup-interval-input{width:52px;margin:0 4px;background:var(--wh-bg-back-strong);border-radius:2px;color:var(--wh-text);border:none}.backup-interval-input:disabled{opacity:.4}.section-title{margin-bottom:4px}hr.settings-divider{margin:16px 0}',""]);const l=n},5733:(t,e,o)=>{var r=o(5782);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},5782:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);display:block}.container{display:flex;gap:12px;flex-wrap:wrap;position:relative;margin:0}.option-container{display:block;position:relative;border-radius:4px;width:340px;overflow:hidden;border:1px solid var(--wh-border-base-strong)}.option-container:hover{border-color:var(--wh-border-base-strong-hover)}.option-container.checked{border-color:var(--wh-accent-blue)}.radio-label-image{width:100%;min-height:160px;-o-object-fit:cover;object-fit:cover}.radio-label{cursor:pointer;display:block;width:100%;height:100%}.radio-label-text{display:block}.radio-label-description{display:block;color:var(--wh-text-light);font-size:11px;line-height:1.4}.radio-label-footer{width:100%;height:var(--wh-highlighter-label-footer-height);border-top:1px solid var(--wh-border-base-strong);box-sizing:border-box;display:flex;row-gap:8px;align-items:center;flex-wrap:wrap;padding:8px 14px}.radio-label-footer section{display:block;display:flex;gap:10px;align-items:center;width:100%}.highlighter-mode-option-input{margin:0}.helper-container{margin-left:auto;display:flex;gap:8px}.helper-container .learn-more-btn{background:var(--wh-bg-back);color:var(--wh-primary-600);cursor:pointer;font-size:12px;text-decoration:none}.helper-container .learn-more-btn:hover{text-decoration:underline}sl-tooltip::part(body),sl-tooltip::part(label),sl-tooltip::part(base__arrow){color:var(--wh-gray-50);background-color:var(--wh-secondary-800);font-size:11.5px}.highlighter-mode-icon:hover{color:var(--wh-text-strongest);fill:var(--wh-text-strongest)}",""]);const l=n},7427:(t,e,o)=>{"use strict";o.d(e,{P:()=>n});var r=o(46195),i=o(45106),s=o(36518);function n(t,e){return(0,r.Tg)(t).pipe((0,s._)(e),(0,i.Q)(e))}},7861:(t,e,o)=>{"use strict";o.d(e,{Y:()=>s,l:()=>n});var r=o(30747),i=null;function s(t){if(r.$.useDeprecatedSynchronousErrorHandling){var e=!i;if(e&&(i={errorThrown:!1,error:null}),t(),e){var o=i,s=o.errorThrown,n=o.error;if(i=null,s)throw n}}else t()}function n(t){r.$.useDeprecatedSynchronousErrorHandling&&i&&(i.errorThrown=!0,i.error=t)}},10101:(t,e,o)=>{"use strict";o.d(e,{x:()=>n});var r=o(46195),i=o(45106),s=o(36518);function n(t,e){return(0,r.Tg)(t).pipe((0,s._)(e),(0,i.Q)(e))}},10402:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var r=(0,o(24166).L)(function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}})},12068:(t,e,o)=>{var r=o(23581);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},14460:(t,e,o)=>{"use strict";function r(t){return"function"==typeof t}o.d(e,{T:()=>r})},14635:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(12068),c=o.n(a);const h=r.SHARED_COMPONENTS_INTERNAL.SettingsIntegrationPreview.TAG;class d extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Icon.TAG]}onGoBack(){this.dispatchEvent(new CustomEvent("goBack"))}render(){var t,e;if(!this.props)throw new Error(`'props' is missing in ${h}`);return i.html`
      <header class="header">
        <button class="back-btn" @click=${this.onGoBack}>
          <webhighlights-icon
            class="icon"
            icon="arrow-right"
            size="20"
          ></webhighlights-icon>
        </button>
        <div class="image-container">${this.props.image}</div>
        <h2 class="title">${this.props.title}</h2>
      </header>
      ${this.props.whatItCanDo?i.html`
            <section class="integration-section">
              <h3 class="title">What can this integration do?</h3>
              <span class="description" part="description"
                >${this.props.whatItCanDoLong||this.props.whatItCanDo}
                ${this.props.learnMoreLink?i.html`<a href="${this.props.learnMoreLink}" target="_blank"
                        >Learn more</a
                      >.`:i.html``}</span
              >
            </section>
          `:i.html``}
      ${this.props.howItWorksTemplate?i.html` <section class="integration-section">
            ${this.props.howItWorksTemplate}
          </section>`:i.html``}
      ${(null===(t=this.props.howItWorksSteps)||void 0===t?void 0:t.length)?i.html`
            <section class="integration-section">
              <h3 class="title">How it works</h3>
              <ol class="how-it-works-steps">
                ${null===(e=this.props.howItWorksSteps)||void 0===e?void 0:e.map((t,e)=>{var o;return i.html`
                    <li class="how-it-works-list-item">
                      <div class="step-index-badge">
                        <span>${e+1}</span>
                      </div>
                      <div class="item-content">
                        <span class="title">${t.title}</span>
                        ${t.image?i.html`
                              <img
                                class="item-image"
                                src=${t.image.url}
                                alt=${t.image.alt}
                                width=${t.image.width}
                              />
                            `:i.html``}
                        <span class="description"
                          >${null!==(o=t.description)&&void 0!==o?o:""}</span
                        >
                      </div>
                    </li>
                  `})}
              </ol>
            </section>
          `:i.html``}
      ${this.props.learnMoreLink?i.html`
            <section class="integration-section">
              <h3 class="title">To learn more read the full documentation:</h3>
              <a
                class="learn-more-link"
                href=${this.props.learnMoreLink}
                target="_blank"
                ><webhighlights-icon
                  icon=${r.ICON_NAMES.book}
                  size="24"
                ></webhighlights-icon
                >Learn more<webhighlights-icon
                  icon=${r.ICON_NAMES["arrow-right"]}
                  class="arrow-right-icon"
                  size="24"
                ></webhighlights-icon
              ></a>
            </section>
          `:i.html``}
    `}}d.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,s.property)()],d.prototype,"props",void 0),n.y.define(h,d)},14977:(t,e,o)=>{var r=o(97126);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},17826:(t,e,o)=>{var r=o(3941);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},18045:(t,e,o)=>{"use strict";o.d(e,{T:()=>s});var r=o(22185),i=o(869);function s(t,e){return(0,r.N)(function(o,r){var s=0;o.subscribe((0,i._)(r,function(o){r.next(t.call(e,o,s++))}))})}},18109:(t,e,o)=>{var r=o(3862);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},19802:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(18109),a=o.n(l),c=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const h=r.SHARED_COMPONENTS.Invoices.TAG;class d extends n.y{constructor(){super(...arguments),this.transactions=[],this.loading=!0,this.components=[r.SHARED_COMPONENTS.Loading.TAG]}firstUpdated(){var t;(null!==(t=this.httpFacade)&&void 0!==t?t:(0,r.useContext)().httpFacade).getUserTransactions({paddle_user_id:this.subscriptionUserId}).then(t=>{this.transactions=t}).finally(()=>{this.loading=!1})}resolveStatusClassName(t){return"completed"===t.status?"text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300":["refunded","partially_refunded"].includes(t.status)?"text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-300":"disputed"===t.status?"text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300":void 0}render(){return this.loading?i.html`<webhighlights-loading></webhighlights-loading>`:i.html`
      <ul class="flex flex-wrap items-center">
        ${this.transactions.map(t=>i.html`
            <li
              class="w-full grid grid-cols-3 justify-items-end items-center border-b border-gray-100 text-gray-600 py-2"
            >
              <a
                href=${t.receipt_url}
                target="_blank"
                rel="noreferrer"
                class="text-blue-600 hover:underline col-span-1"
              >
                ${new Date(t.created_at).toLocaleDateString()} </a
              >${" "}
              <span class="col-span-1">
                ${t.currency} ${t.amount}
              </span>
              <span
                class=${`${t.status} col-span-1 w-fit inline-flex items-center px-2 py-1 ml-2 text-sm font-medium  rounded ${this.resolveStatusClassName(t)}`}
              >
                ${t.status.toUpperCase()}
              </span>
            </li>
          `)}
      </ul>
    `}}d.styles=i.css`
    ${(0,i.unsafeCSS)(a())}
  `,c([(0,s.property)()],d.prototype,"subscriptionUserId",void 0),c([(0,s.property)()],d.prototype,"httpFacade",void 0),c([(0,s.state)()],d.prototype,"transactions",void 0),c([(0,s.state)()],d.prototype,"loading",void 0),n.y.define(h,d)},20533:(t,e,o)=>{"use strict";o.d(e,{f:()=>i});var r=o(85608),i={setTimeout:function(t,e){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var n=i.delegate;return(null==n?void 0:n.setTimeout)?n.setTimeout.apply(n,(0,r.fX)([t,e],(0,r.zs)(o))):setTimeout.apply(void 0,(0,r.fX)([t,e],(0,r.zs)(o)))},clearTimeout:function(t){var e=i.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0}},21235:(t,e,o)=>{"use strict";o.d(e,{Ms:()=>f,vU:()=>p});var r=o(85608),i=o(14460),s=o(71868),n=o(30747),l=o(43585),a=o(62508),c=o(51998),h=o(20533),d=o(7861),p=function(t){function e(e){var o=t.call(this)||this;return o.isStopped=!1,e?(o.destination=e,(0,s.Uv)(e)&&e.add(o)):o.destination=w,o}return(0,r.C6)(e,t),e.create=function(t,e,o){return new f(t,e,o)},e.prototype.next=function(t){this.isStopped?m((0,c.ro)(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?m((0,c.A2)(t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?m(c.M7,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(s.yU),u=Function.prototype.bind;function g(t,e){return u.call(t,e)}var b=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){v(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){v(t)}else v(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){v(t)}},t}(),f=function(t){function e(e,o,r){var s,l,a=t.call(this)||this;return(0,i.T)(e)||!e?s={next:null!=e?e:void 0,error:null!=o?o:void 0,complete:null!=r?r:void 0}:a&&n.$.useDeprecatedNextContext?((l=Object.create(e)).unsubscribe=function(){return a.unsubscribe()},s={next:e.next&&g(e.next,l),error:e.error&&g(e.error,l),complete:e.complete&&g(e.complete,l)}):s=e,a.destination=new b(s),a}return(0,r.C6)(e,t),e}(p);function v(t){n.$.useDeprecatedSynchronousErrorHandling?(0,d.l)(t):(0,l.m)(t)}function m(t,e){var o=n.$.onStoppedNotification;o&&h.f.setTimeout(function(){return o(t,e)})}var w={closed:!0,next:a.l,error:function(t){throw t},complete:a.l}},21601:(t,e,o)=>{"use strict";function r(t,e){if(t){var o=t.indexOf(e);0<=o&&t.splice(o,1)}}o.d(e,{o:()=>r})},22185:(t,e,o)=>{"use strict";o.d(e,{N:()=>i});var r=o(14460);function i(t){return function(e){if(function(t){return(0,r.T)(null==t?void 0:t.lift)}(e))return e.lift(function(e){try{return t(e,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}},23330:(t,e,o)=>{"use strict";o.d(e,{l:()=>s});var r=o(59805),i=o(14460);function s(t){return(0,i.T)(t[r.s])}},23581:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0}a{color:var(--link-color)}.header{width:100%;display:flex;align-items:center;-moz-column-gap:8px;column-gap:8px;border-bottom:1px solid var(--wh-border-base);padding-bottom:4px}.header .title{margin:0}.image-container{display:flex;justify-content:center;align-items:center;width:20px;height:20px}.image-container>*{height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.title{display:block;font-size:18px;font-weight:600}.back-btn{border:none;background:none;border-radius:50%;cursor:pointer;padding:8px;margin-right:4px}.back-btn .icon{transform:rotate(180deg);color:var(--wh-text-strongest);fill:var(--wh-text-strongest)}.back-btn:hover{background-color:var(--wh-bg-base-hover)}.integration-section{padding:2px 4px;margin-top:12px;margin-bottom:28px}@media(min-width: 768px){.integration-section{padding:4px 16px}}.integration-section .title{font-size:16px;font-weight:500;margin-top:0;margin-bottom:16px}.integration-section .description{font-size:14px;font-weight:normal;color:var(--wh-text-light)}.how-it-works-steps{display:flex;flex-wrap:wrap;padding:0;margin:0;row-gap:12px}.how-it-works-steps .how-it-works-list-item{padding:12px;width:100%;display:flex;border-radius:16px;gap:8px;background:var(--wh-primary-color-transparent);border:1px solid var(--wh-border-base)}.how-it-works-steps .how-it-works-list-item .item-image{border-radius:16px;margin:12px 0;box-sizing:border-box;display:block;box-shadow:var(--wh-shadow);max-width:100%}.how-it-works-steps .how-it-works-list-item a{color:var(--wh-text-light)}.how-it-works-steps .how-it-works-list-item .step-index-badge{display:flex;align-items:center;justify-self:center;background:var(--wh-primary-color-transparent-light);border-radius:8px;height:-moz-fit-content;height:fit-content;justify-content:center;padding:4px 8px;color:var(--wh-text-light)}.how-it-works-steps .how-it-works-list-item .step-index-badge span{line-height:1}.how-it-works-steps .how-it-works-list-item .item-content{display:block;padding:4px}.how-it-works-steps .how-it-works-list-item .title{font-size:14px;font-weight:500;margin-top:0;margin-bottom:4px;color:var(--wh-text)}.how-it-works-steps .how-it-works-list-item .description{font-size:13px;font-weight:400;color:var(--wh-text-light);line-height:1.5}.learn-more-link{display:flex;align-items:center;justify-content:flex-start;padding:16px;box-sizing:border-box;border:1px solid var(--wh-border-front);border-radius:8px;background-color:var(--wh-bg-front);text-decoration:none;color:var(--wh-text-light);-moz-column-gap:8px;column-gap:8px}.learn-more-link:hover{background-color:var(--wh-bg-front-hover)}.learn-more-link .arrow-right-icon{margin-left:auto}",""]);const l=n},24166:(t,e,o)=>{"use strict";function r(t){var e=t(function(t){Error.call(t),t.stack=(new Error).stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}o.d(e,{L:()=>r})},24205:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.user-plan-info{color:var(--wh-text-light);font-size:14px}.upgrade-now-btn{color:var(--wh-gray-50);background-color:var(--wh-primary-600);border:none;box-shadow:var(--wh-shadow-primary)}.upgrade-now-btn:hover{border:none;background-color:var(--wh-primary-500);color:#fff;border-color:var(--wh-primary-800)}.invoices{width:100%;display:block;margin:4px 0}.upgrade-to-ultimate-info{line-height:1.3;max-width:440px;margin-top:4px}.upgrade-to-ultimate-link{color:var(--wh-primary-500);text-decoration:underline}.upgrade-to-ultimate-link:hover{color:var(--wh-primary-400)}',""]);const l=n},24254:(t,e,o)=>{"use strict";function r(t){return t}o.d(e,{D:()=>r})},24611:(t,e,o)=>{"use strict";o.d(e,{E:()=>i});var r=o(92257),i=new(o(97042).q)(r.R)},24957:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(71882),a=o(65560),c=o(58426),h=o.n(c),d=(o(50234),function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n}),p=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const u=r.SHARED_COMPONENTS_INTERNAL.SettingsSettings.TAG;class g extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.HighlighterModeSelector.TAG,r.SHARED_COMPONENTS.ChromeSettings.TAG,r.SHARED_COMPONENTS.BlacklistesUrls.TAG,r.SHARED_COMPONENTS.Icon.TAG]}firstUpdated(t){this.loadData()}loadData(){return p(this,void 0,void 0,function*(){try{this.chromeSettings=yield(0,r.useContext)().db.getChromeSettings()}catch(t){console.error(t),this.chromeSettings=r.fallbackChromeSettings}})}chromeSettingsChanged(t){return p(this,void 0,void 0,function*(){this.chromeSettings&&(this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),t.detail),yield(0,r.updateChromeSettings)(this.chromeSettings))})}render(){if(!this.props)throw new Error(`'props' is missing in ${u}`);return this.chromeSettings?((0,r.isExtensionEnvironment)(),i.html`<div class="container" part="container">
      <header>
        <h3 class="section-title">Highlighter Popup</h3>
      </header>
      <webhighlights-show-popup-selector
        class="highlighter-popup-selector"
        .chromeSettings=${this.chromeSettings}
      ></webhighlights-show-popup-selector>
      <header>
        <h3 class="section-title">Highlighter Mode</h3>
      </header>
      <webhighlights-highlighter-mode-selector
        class="highlighter-mode-selector"
        .chromeSettings=${this.chromeSettings}
      ></webhighlights-highlighter-mode-selector>
      <header>
        <h3 class="section-title">Basic settings</h3>
      </header>
      <webhighlights-chrome-settings
        .httpFacade=${(0,r.useContext)().httpFacade}
        @settingsChanged=${this.chromeSettingsChanged}
        .chromeSettings=${this.chromeSettings}
        .colorsPopupPosition=${"left"}
      ></webhighlights-chrome-settings>

      <hr class="settings-divider" />

      <header>
        <h3 class="section-title">Disabled Websites</h3>
        <span class="section-description"
          >Blacklisted URLs for which the extension should be disabled.
          <br />
          (Please reload the affected page to see the changes)</span
        >
      </header>

      <webhighlights-blacklisted-urls
        class="blacklist"
        .httpFacade="${(0,r.useContext)().httpFacade}"
        .chromeSettings=${this.chromeSettings}
        @blacklistChanged=${this.chromeSettingsChanged}
      ></webhighlights-blacklisted-urls>
    </div>`):i.html``}}g.styles=[i.css`
      ${a.Y}
      ${(0,i.unsafeCSS)(h())}
    `,...l.f],d([(0,s.property)()],g.prototype,"props",void 0),d([(0,s.state)()],g.prototype,"chromeSettings",void 0),n.y.define(u,g)},25361:(t,e,o)=>{"use strict";o.d(e,{lI:()=>i});var r=o(61867);function i(t){return(0,r.m)((e=t)[e.length-1])?t.pop():void 0;var e}},26691:(t,e,o)=>{"use strict";o.d(e,{y:()=>i});var r=o(14460);function i(t){return(0,r.T)(null==t?void 0:t.then)}},27773:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.blacklist{width:100%;padding:12px 16px;box-sizing:border-box;display:block}webhighlights-chrome-settings::part(container){border-bottom:none}.delete-account-btn{border:none;background-color:var(--wh-danger-color);color:var(--wh-gray-50);min-width:112px;border-radius:4px;padding:8px 10px}.delete-account-btn:hover{color:#fff;background-color:var(--wh-danger-color-hover);border:none}.verify-email-container{display:flex;align-items:center;gap:8px;max-width:380px;margin-top:12px}.verify-email-container .verify-email-text{font-size:12px}.verify-email-container .alert-icon{color:var(--wh-warning-color)}.verify-email-container .resend-email-btn{border:none;background:none;display:inline-block;color:var(--wh-primary-color);font-weight:600;font-size:12px;padding:0;margin:0;cursor:pointer}.verify-email-container .resend-email-btn:hover{color:var(--wh-primary-color-hover);text-decoration:underline}.verify-email-container .resend-email-btn:disabled{opacity:.5;cursor:not-allowed}.info-container{display:flex;align-items:center;gap:8px;max-width:440px;margin-top:12px}.info-container .info-text{font-size:12px}',""]);const l=n},28032:(t,e,o)=>{"use strict";o.d(e,{P:()=>r});var r=(0,o(24166).L)(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})},28461:(t,e,o)=>{var r=o(36564);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},29699:(t,e,o)=>{"use strict";var r=o(93811),i=o(95665),s=o(70924),n=o.n(s),l=o(38085),a=o(73764),c=o(30827),h=o(71882),d=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},p=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const u=l.SHARED_COMPONENTS_INTERNAL.NotionApiIntegration,g=u.TAG;class b extends c.y{constructor(){super(...arguments),this.notionPages=[],this.errorMsg=null,this.loadingState="LOADING",this.activeIntegration=null,this.components=[l.SHARED_COMPONENTS.Icon.TAG,l.SHARED_COMPONENTS.Loading.TAG]}get activePage(){var t,e,o;return(null===(t=this.activeIntegration)||void 0===t?void 0:t.id)&&null!==(o=null===(e=this.notionPages)||void 0===e?void 0:e.find(t=>{var e;return(null===(e=this.activeIntegration)||void 0===e?void 0:e.pageId)===t.id}))&&void 0!==o?o:null}firstUpdated(t){return p(this,void 0,void 0,function*(){this.loadData()})}loadData(){return p(this,void 0,void 0,function*(){var t;this.errorMsg=null;const{db:e}=(0,l.useContext)();try{const o=(yield e.getChromeSettings()).integrations;this.activeIntegration=null!==(t=null==o?void 0:o.find(l.isNotionIntegration))&&void 0!==t?t:null,this.notionPages=yield this.loadNotionPages(),this.activePage||(yield this.deleteActiveIntegration());const r=yield(0,l.getNotionAccessToken)();r||(this.errorMsg="You need to authorize your Notion account first."),this.loadingState=r?"SUCCESS":"AUTH_NEEDED"}catch(t){if(console.error(t),(0,l.isNotionApiError)(t))return this.loadingState=t.code,this.errorMsg=t.message,void(t.code===l.NotionApiErrorCode.unauthorized&&(0,l.setNotionAccessToken)(""));this.errorMsg="Something went wrong. Try to connect to Notion again.",this.loadingState="GENERAL_ERROR"}})}loadNotionPages(){return p(this,void 0,void 0,function*(){const{httpFacade:t}=(0,l.useContext)();if(!(yield(0,l.getNotionAccessToken)()))return[];const e=yield t.getNotionPages();return this.notionPages=Array.isArray(e)?e:[],e})}deleteActiveIntegration(){return p(this,void 0,void 0,function*(){return this.updateNotionIntegration({pageId:null,databaseId:null})})}updateNotionIntegration(t){return p(this,void 0,void 0,function*(){const e={id:l.INTEGRATION_IDS.NOTION_EXPORT,pageId:t.pageId,databaseId:t.databaseId};this.activeIntegration=e,yield(0,l.updateIntegrations)(e)})}createDatabaseForNotionPage(){return p(this,void 0,void 0,function*(){var t;try{if(this.loadingState="LOADING",!(null===(t=this.activeIntegration)||void 0===t?void 0:t.pageId))throw new Error("Missing 'pageId' in integration.");const{httpFacade:e,db:o}=(0,l.useContext)(),r=yield e.createNotionDatabase(this.activeIntegration.pageId);yield this.updateNotionIntegration({pageId:this.activeIntegration.pageId,databaseId:r.id}),this.loadingState="SUCCESS"}catch(t){if(console.error(t),(0,l.isNotionApiError)(t))return this.loadingState=t.code,void(this.errorMsg=t.message);this.loadingState="GENERAL_ERROR"}})}onPageSelected(t){return p(this,void 0,void 0,function*(){yield this.updateNotionIntegration(t),yield this.createDatabaseForNotionPage()})}onPageSelectorChange(t){return p(this,void 0,void 0,function*(){var e;const o=null!==(e=t.target.value)&&void 0!==e?e:null;return this.onPageSelected({pageId:o,databaseId:null})})}render(){var t,e;return"LOADING"===this.loadingState?r.html`<webhighlights-loading></webhighlights-loading>`:this.loadingState===l.NotionApiErrorCode.unauthorized||"GENERAL_ERROR"===this.loadingState||"AUTH_NEEDED"===this.loadingState?r.html`<div class="error-container">
        <sl-alert variant="neutral" class="error-alert" part="container" open>
          <webhighlights-icon
            slot="icon"
            icon=${l.ICON_NAMES["alert-circle"]}
            size="24"
          ></webhighlights-icon>
          ${this.errorMsg}
        </sl-alert>
        <a
          href="${l.CONSTANTS.NOTION_AUTH_URL}"
          rel="nofollow"
          data-testid=${u.TEST_IDS.AUTHORIZE_LINK}
          class="integrate-btn primary-btn"
          title="Authorize Notion Account"
          >Integrate with Notion</a
        >
      </div>`:r.html`<div>
      ${0===(null===(t=this.notionPages)||void 0===t?void 0:t.length)?r.html`
            <sl-alert
              class="grant-page-access-alert"
              variant="warning"
              part="container"
              open
            >
              <webhighlights-icon
                slot="icon"
                icon=${l.ICON_NAMES["alert-circle"]}
                size="24"
              ></webhighlights-icon>
              You have to grant access to Notion pages first:
              <ol>
                <li>Go to Notion</li>
                <li>Click on "Settings & members"</li>
                <li>Click "My connections" on the left side</li>
                <li>
                  Find the Web Highlights integration and click the three dots
                  next to it
                </li>
                <li>Choose at least one page</li>
                <li>Click "Update access"</li>
              </ol>
            </sl-alert>
          `:r.html``}
      <sl-select
        value=${(0,a.J)(null===(e=this.activePage)||void 0===e?void 0:e.id)}
        @sl-change=${this.onPageSelectorChange}
        size="large"
        class="page-selector"
        placeholder="Select a page"
      >
        ${this.notionPages.map(t=>r.html`
            <sl-option value="${t.id}"
              >${(0,l.resolveNotionPageIcon)(t)}
              ${(0,l.resolveNotionPageTitle)(t)}</sl-option
            >
          `)}
      </sl-select>
      ${this.activeIntegration&&this.activePage?r.html`
            <a
              href="${this.activePage.url}"
              rel="nofollow"
              target="_blank"
              class="active-integration-card"
            >
              <header>
                <webhighlights-icon
                  class="active-icon"
                  icon=${l.ICON_NAMES.circle}
                  size="12"
                ></webhighlights-icon>
                <button
                  @click=${t=>p(this,void 0,void 0,function*(){return t.preventDefault(),this.deleteActiveIntegration()})}
                >
                  <webhighlights-icon
                    icon=${l.ICON_NAMES.trash}
                    size="16"
                  ></webhighlights-icon>
                </button>

                <webhighlights-icon
                  class="external-link-icon"
                  icon=${l.ICON_NAMES["external-link"]}
                  size="16"
                ></webhighlights-icon>
              </header>
              <main>
                ${(0,l.resolveNotionPageIcon)(this.activePage)}
                ${(0,l.resolveNotionPageTitle)(this.activePage)}
              </main>
              <footer>
                <span class="url-info">${this.activePage.url}</span>
              </footer>
            </a>
          `:r.html``}
    </div>`}}b.styles=[r.css`
      ${(0,r.unsafeCSS)(n())}
    `,...h.f],d([(0,i.state)()],b.prototype,"notionPages",void 0),d([(0,i.state)()],b.prototype,"errorMsg",void 0),d([(0,i.state)()],b.prototype,"loadingState",void 0),d([(0,i.state)()],b.prototype,"activeIntegration",void 0),c.y.define(g,b)},29773:(t,e,o)=>{"use strict";o.d(e,{r:()=>i});var r=o(85608),i=function(t){function e(e,o){return t.call(this)||this}return(0,r.C6)(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(o(71868).yU)},30371:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(672),c=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const h=r.SHARED_COMPONENTS_INTERNAL.BackupExportBtn,d=h.TAG,p="download-anchor-element";class u extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Loading.TAG],this.loading=!1}get httpFacade(){return(0,r.useContext)().httpFacade}backupExport(){return t=this,e=void 0,i=function*(){this.loading=!0;const t=this.downloadAnchorElement;yield(0,r.downloadBackupFile)(null!=t?t:null),this.loading=!1},new((o=void 0)||(o=Promise))(function(r,s){function n(t){try{a(i.next(t))}catch(t){s(t)}}function l(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((i=i.apply(t,e||[])).next())});var t,e,o,i}render(){return i.html`
      <div id="${p}"></div>
      ${this.loading?i.html` <webhighlights-loading v-if="loading"></webhighlights-loading> `:i.html`
            <button
              data-testid=${h.TEST_IDS.EXPORT_BTN}
              class="section-button"
              @click=${this.backupExport}
            >
              Export
            </button>
          `}
    `}}u.styles=i.css`
    ${l.Y}
    ${a.r}
  `,c([(0,s.state)()],u.prototype,"loading",void 0),c([(0,s.query)(`#${p}`)],u.prototype,"downloadAnchorElement",void 0),n.y.define(d,u)},30595:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=(o(58874),o(57240),o(87532)),c=o.n(a),h=o(90696),d=(o(29699),o(2702),o(14635),function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n});const p=r.SHARED_COMPONENTS_INTERNAL.SettingsIntegrations,u=p.TAG;class g extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Loading.TAG,r.SHARED_COMPONENTS.Icon.TAG],this.selectedIntegration=null}onIntegrationSelected(t){this.selectedIntegration=t}firstUpdated(t){var e;(null===(e=this.props)||void 0===e?void 0:e.selectedIntegration)&&(this.selectedIntegration=(0,h.P)(this.props.selectedIntegration))}render(){const t=t=>i.html`
      <webhighlights-settings-integration-item
        .props=${t}
        @click=${()=>this.onIntegrationSelected(t)}
        tabindex="0"
        class="integration-item"
        data-testid=${p.TEST_IDS.INTEGRATION_ITEM(null==t?void 0:t.id)}
        @keyup=${e=>(0,r.isEnterKeyUp)(e)&&this.onIntegrationSelected(t)}
      ></webhighlights-settings-integration-item>
    `;return i.html`<div class="container" part="container">
      ${this.selectedIntegration?i.html`<webhighlights-settings-integration-preview
            .props=${this.selectedIntegration}
            @goBack=${()=>this.selectedIntegration=null}
          ></webhighlights-settings-integration-preview>`:i.html`
            <section class="section-entry">
              <header>
                <h3 class="section-title">Export</h3>
              </header>
              <div class="integrations-container">
                ${[r.INTEGRATION_IDS.NOTION_EXPORT,r.INTEGRATION_IDS.MARKDOWN_EXPORT,r.INTEGRATION_IDS.CAPACITIES_EXPORT].map(h.P).map(t)}
              </div>
            </section>
            <section class="section-entry">
              <header>
                <h3 class="section-title">Import</h3>
              </header>
              <div class="integrations-container">
                ${[r.INTEGRATION_IDS.BOOKMARK_IMPORT_CHROME,r.INTEGRATION_IDS.MOBILE_SAVE_BOOKMARK,r.INTEGRATION_IDS.WEAVA_IMPORT,r.INTEGRATION_IDS.DIIGO_IMPORT,r.INTEGRATION_IDS.POCKET_IMPORT_CSV,r.INTEGRATION_IDS.POCKET_IMPORT_JSON].map(h.P).map(t)}
              </div>
            </section>
          `}
    </div>`}}g.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,d([(0,s.property)()],g.prototype,"props",void 0),d([(0,s.state)()],g.prototype,"selectedIntegration",void 0),n.y.define(u,g)},30747:(t,e,o)=>{"use strict";o.d(e,{$:()=>r});var r={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>s});var r=o(38085),i=o(93811);class s extends i.LitElement{constructor(){super(...arguments),this.components=[],this.subscriptions=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}unsubscribe(){this.subscriptions.forEach(t=>{t.unsubscribe()})}static define(t,e,o){(0,r.defineWebHighlightsElement)(t,e,o)}}},31006:(t,e,o)=>{"use strict";o.d(e,{J:()=>i});var r=o(80181);const i=t=>t??r.s6},31604:(t,e,o)=>{"use strict";o.d(e,{X:()=>r});var r=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},34916:(t,e,o)=>{var r=o(24205);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},35315:(t,e,o)=>{"use strict";o.d(e,{H:()=>s});var r=o(55034),i=o(46195);function s(t,e){return e?(0,r.c)(t,e):(0,i.Tg)(t)}},36518:(t,e,o)=>{"use strict";o.d(e,{_:()=>i});var r=o(22185);function i(t,e){return void 0===e&&(e=0),(0,r.N)(function(o,r){r.add(t.schedule(function(){return o.subscribe(r)},e))})}},36564:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{display:block;font-size:16px;font-family:var(--wh-font-family);color:var(--wh-text);box-sizing:border-box}.active{background-color:var(--wh-primary-500)}.loading{display:block;margin-top:16px}.error-container{display:block}.error-msg{display:block;color:var(--wh-text-light);font-size:12px;margin:10px 0}.token-input-container{display:flex;align-items:center;justify-content:center;gap:2px;position:relative;border-radius:4px;border:1px solid var(--wh-border-base);overflow:hidden}.token-input-container[focus-within]{border-color:var(--wh-border-base-strong)}.token-input-container:focus-within{border-color:var(--wh-border-base-strong)}.token-input{caret-color:var(--wh-text) !important}.token-input{border:none;font-size:16px;line-height:1.2;color:var(--wh-text);background-color:var(--wh-bg-base);width:100%;padding:6px 4px;box-sizing:border-box}.token-input.focus-visible{outline:none}.token-input:focus-visible{outline:none}.token-input-label{font-size:11px;line-height:1.2;color:var(--wh-text-lightest);margin-bottom:4px;opacity:0;transition:opacity .2s ease-in-out;display:block}.token-input-label.show{opacity:1}.external-link{font-size:14px;color:var(--wh-blue-500);text-decoration:none;display:block;font-weight:500;margin-top:12px}.external-link:hover{color:var(--wh-blue-600);text-decoration:underline}.page-selector{margin:16px 0 8px 0}.page-selector sl-option::part(base){--sl-color-neutral-700: var(--wh-text);--sl-color-neutral-100: var(--wh-bg-back-strong);--sl-color-neutral-1000: var(--wh-text-strong);--sl-color-primary-600: var(--wh-bg-back-strong-hover);color:var(--wh-text)}.active-integration-card{padding:8px 16px;border-radius:4px;border:1px solid var(--wh-border-base-strong);background:var(--wh-bg-back);color:var(--wh-text);text-decoration:none;display:block;max-width:100%;position:relative}.active-integration-card:hover{background:var(--wh-bg-back-hover)}.active-integration-card header{display:flex;width:100%;justify-content:flex-end;box-sizing:border-box;position:absolute;right:8px;top:8px;gap:8px}.active-integration-card header .active-icon{color:var(--wh-green-500)}.active-integration-card header .active-icon::part(icon){fill:var(--wh-green-500)}.active-integration-card header button{background:none;border:none;color:var(--wh-text-light);cursor:pointer;padding:0}.active-integration-card header button:hover{color:var(--wh-text)}.active-integration-card main{padding-top:8px}.active-integration-card footer{padding-top:2px;padding-bottom:8px}.active-integration-card footer .url-info{color:var(--wh-text-lighter);max-width:200px;overflow:hidden;text-overflow:ellipsis;display:inline-block;font-size:10px;white-space:nowrap}",""]);const l=n},36758:t=>{"use strict";t.exports=function(t){return t[1]}},37438:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,".payment-method-container{display:inline;border:none;background-color:var(--wh-bg-base);color:var(--wh-text-light);border-radius:8px;padding:4px 12px;transition:.1s all ease-in-out;border:.8px solid var(--wh-border-base);text-decoration:none;font-size:14px;padding:4px 12px;cursor:default}.font-semibold{font-weight:700}",""]);const l=n},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},38932:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}.backup-import-container{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.backup-import-container,.backup-import-btn-container,.choose-file-container{display:flex;align-items:center;width:100%}.uploaded-data-info{--tag-size: 14px}",""]);const l=n},39113:(t,e,o)=>{var r=o(41614);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},39643:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(64340),c=o.n(a),h=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},d=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const p=r.SHARED_COMPONENTS_INTERNAL.SettingsAccount,u=p.TAG;class g extends n.y{constructor(){super(...arguments),this.isEmailVerificationNeeded=!1,this.isResendingConfirmationEmail=!1,this.components=[r.SHARED_COMPONENTS.Icon.TAG]}firstUpdated(t){this.props.jwtPayload&&(0,r.checkIfEmailIsVerified)().then(t=>{this.isEmailVerificationNeeded=!t})}onChangePassword(){(0,r.closeDialog)(),(0,r.isWebAppUrl)(location.href)?r.notifications.dispatch("updateAppRouter",{detail:{path:"/change-password"}}):location.href=(0,r.useContext)().environment.FRONTEND_URL}onDeleteAccount(){return d(this,void 0,void 0,function*(){if(confirm("Do you really want to delete your account? This can not be undone, all marks, bookmarks, and tags will be deleted!")){const t=new r.UserService((0,r.useContext)().httpFacade.httpClient);yield t.deleteUser(),(0,r.closeDialog)(),r.chromeJwtService.setJwt(""),(0,r.useContext)().db.clearDatabases(),(0,r.isWebAppUrl)(location.href)&&((0,r.clearAppLocalStorage)(),r.notifications.dispatch("updateAppRouter",{detail:{path:"/login"}}))}})}onLogout(){return d(this,void 0,void 0,function*(){(0,r.closeDialog)(),r.chromeJwtService.setJwt(""),(0,r.clearAppLocalStorage)(),(0,r.isWebAppUrl)(location.href)&&r.notifications.dispatch("updateAppRouter",{detail:{path:"auth"}})})}get isEmailUser(){var t;return"email"===(null===(t=this.props.userInfo)||void 0===t?void 0:t.strategy)}onResendConfirmationEmail(){return d(this,void 0,void 0,function*(){this.isResendingConfirmationEmail=!0,yield(0,r.resendConfirmationEmail)(),this.isResendingConfirmationEmail=!1})}render(){var t,e,o,s,n;if(!this.props)throw new Error(`'props' is missing in ${u}`);return i.html`<div class="container" part="container">
      <section class="section-entry">
        <header>
          <h3 class="section-title">Email</h3>
          <span class="section-description"
            >The email address you signed up with. To change your email address,
            please contact me at marius@web-highlights.com.</span
          >
          ${this.isEmailVerificationNeeded?i.html`
                <div class="verify-email-container">
                  <webhighlights-icon
                    icon="${r.ICON_NAMES["alert-circle"]}"
                    class="alert-icon"
                    strokeWidth="1.5"
                    size="20"
                  ></webhighlights-icon>
                  <span class="verify-email-text"
                    >Verify your email to continue using Web Highlights. Please
                    also check your <strong>SPAM</strong> folder.
                    <button
                      class="resend-email-btn"
                      @click=${()=>d(this,void 0,void 0,function*(){return this.onResendConfirmationEmail()})}
                      ?disabled=${this.isResendingConfirmationEmail}
                    >
                      Resend Email
                    </button></span
                  >
                </div>
              `:i.html``}
        </header>

        <span
          class="section-info-label"
          data-testid=${p.TEST_IDS.EMAIL_ADDRESS}
          >${null!==(e=null===(t=this.props.jwtPayload)||void 0===t?void 0:t.email)&&void 0!==e?e:"Not logged in."}</span
        >
      </section>

      ${this.isEmailUser?i.html`
            <section class="section-entry">
              <header>
                <h3 class="section-title">Password</h3>
                <span class="section-description"
                  >Change the password for your Web Highlights account.</span
                >
              </header>
              <button
                class="section-button"
                data-testid="${p.TEST_IDS.CHANGE_PASSWORD_BTN}"
                @click=${this.onChangePassword}
              >
                Change
              </button>
            </section>
          `:i.html``}
      ${(null===(o=this.props.userInfo)||void 0===o?void 0:o.strategy)?i.html`
            <section class="section-entry">
              <header>
                <h3 class="section-title">Linked Account</h3>
                <span class="section-description"
                  >Use the following service to sign in into your account.</span
                >
                ${"email"!==this.props.userInfo.strategy?i.html`<div class="info-container">
                      <webhighlights-icon
                        icon="${r.ICON_NAMES.info}"
                        class="alert-icon"
                        strokeWidth="1.5"
                        size="20"
                      ></webhighlights-icon>

                      <span class="info-text"
                        >If you want to set a password for your account, please
                        go to the login page and click "Forgot password" and set
                        a password by clicking the link in the email.
                      </span>
                    </div>`:i.html``}
              </header>
              <span
                class="section-info-label"
                data-testid="${p.TEST_IDS.LINKED_ACCOUNT_LABEL}"
              >
                ${r.signUpStrategyLabelMap[null!==(n=null===(s=this.props.userInfo)||void 0===s?void 0:s.strategy)&&void 0!==n?n:"email"]}
              </span>
            </section>
          `:i.html``}

      <section class="section-entry">
        <header>
          <h3 class="section-title">Logout</h3>
          <span class="section-description"
            >Sign out of your Web Highlights account.</span
          >
        </header>
        <button
          class="section-button"
          data-testid="${p.TEST_IDS.LOGOUT_BTN}"
          @click=${this.onLogout}
        >
          Logout
        </button>
      </section>

      <hr class="settings-divider" />
      <section class="section-entry">
        <header>
          <h3 class="section-title">Delete Account</h3>
          <span class="section-description"
            >Attention: Deleting your account can not be undone! All marks,
            bookmarks, and tags will be deleted!</span
          >
        </header>
        <button
          class="section-button delete-account-btn"
          data-testid="${p.TEST_IDS.DELETE_ACCOUNT_BTN}"
          @click=${this.onDeleteAccount}
        >
          Delete Account
        </button>
      </section>
    </div>`}}g.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,h([(0,s.property)()],g.prototype,"props",void 0),h([(0,s.state)()],g.prototype,"isEmailVerificationNeeded",void 0),h([(0,s.state)()],g.prototype,"isResendingConfirmationEmail",void 0),n.y.define(u,g)},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o}).join("")},e.i=function(t,o,r,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(r)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(n[a]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);r&&n[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),o&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=o):h[2]=o),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},41614:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}',""]);const l=n},43585:(t,e,o)=>{"use strict";o.d(e,{m:()=>s});var r=o(30747),i=o(20533);function s(t){i.f.setTimeout(function(){var e=r.$.onUnhandledError;if(!e)throw t;e(t)})}},44371:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,':root,:host,.sl-theme-light{color-scheme:light;--sl-color-gray-50: hsl(0, 0%, 97.5%);--sl-color-gray-100: hsl(240, 4.8%, 95.9%);--sl-color-gray-200: hsl(240, 5.9%, 90%);--sl-color-gray-300: hsl(240, 4.9%, 83.9%);--sl-color-gray-400: hsl(240, 5%, 64.9%);--sl-color-gray-500: hsl(240, 3.8%, 46.1%);--sl-color-gray-600: hsl(240, 5.2%, 33.9%);--sl-color-gray-700: hsl(240, 5.3%, 26.1%);--sl-color-gray-800: hsl(240, 3.7%, 15.9%);--sl-color-gray-900: hsl(240, 5.9%, 10%);--sl-color-gray-950: hsl(240, 7.3%, 8%);--sl-color-red-50: hsl(0, 85.7%, 97.3%);--sl-color-red-100: hsl(0, 93.3%, 94.1%);--sl-color-red-200: hsl(0, 96.3%, 89.4%);--sl-color-red-300: hsl(0, 93.5%, 81.8%);--sl-color-red-400: hsl(0, 90.6%, 70.8%);--sl-color-red-500: hsl(0, 84.2%, 60.2%);--sl-color-red-600: hsl(0, 72.2%, 50.6%);--sl-color-red-700: hsl(0, 73.7%, 41.8%);--sl-color-red-800: hsl(0, 70%, 35.3%);--sl-color-red-900: hsl(0, 62.8%, 30.6%);--sl-color-red-950: hsl(0, 60%, 19.6%);--sl-color-orange-50: hsl(33.3, 100%, 96.5%);--sl-color-orange-100: hsl(34.3, 100%, 91.8%);--sl-color-orange-200: hsl(32.1, 97.7%, 83.1%);--sl-color-orange-300: hsl(30.7, 97.2%, 72.4%);--sl-color-orange-400: hsl(27, 96%, 61%);--sl-color-orange-500: hsl(24.6, 95%, 53.1%);--sl-color-orange-600: hsl(20.5, 90.2%, 48.2%);--sl-color-orange-700: hsl(17.5, 88.3%, 40.4%);--sl-color-orange-800: hsl(15, 79.1%, 33.7%);--sl-color-orange-900: hsl(15.3, 74.6%, 27.8%);--sl-color-orange-950: hsl(15.2, 69.1%, 19%);--sl-color-amber-50: hsl(48, 100%, 96.1%);--sl-color-amber-100: hsl(48, 96.5%, 88.8%);--sl-color-amber-200: hsl(48, 96.6%, 76.7%);--sl-color-amber-300: hsl(45.9, 96.7%, 64.5%);--sl-color-amber-400: hsl(43.3, 96.4%, 56.3%);--sl-color-amber-500: hsl(37.7, 92.1%, 50.2%);--sl-color-amber-600: hsl(32.1, 94.6%, 43.7%);--sl-color-amber-700: hsl(26, 90.5%, 37.1%);--sl-color-amber-800: hsl(22.7, 82.5%, 31.4%);--sl-color-amber-900: hsl(21.7, 77.8%, 26.5%);--sl-color-amber-950: hsl(22.9, 74.1%, 16.7%);--sl-color-yellow-50: hsl(54.5, 91.7%, 95.3%);--sl-color-yellow-100: hsl(54.9, 96.7%, 88%);--sl-color-yellow-200: hsl(52.8, 98.3%, 76.9%);--sl-color-yellow-300: hsl(50.4, 97.8%, 63.5%);--sl-color-yellow-400: hsl(47.9, 95.8%, 53.1%);--sl-color-yellow-500: hsl(45.4, 93.4%, 47.5%);--sl-color-yellow-600: hsl(40.6, 96.1%, 40.4%);--sl-color-yellow-700: hsl(35.5, 91.7%, 32.9%);--sl-color-yellow-800: hsl(31.8, 81%, 28.8%);--sl-color-yellow-900: hsl(28.4, 72.5%, 25.7%);--sl-color-yellow-950: hsl(33.1, 69%, 13.9%);--sl-color-lime-50: hsl(78.3, 92%, 95.1%);--sl-color-lime-100: hsl(79.6, 89.1%, 89.2%);--sl-color-lime-200: hsl(80.9, 88.5%, 79.6%);--sl-color-lime-300: hsl(82, 84.5%, 67.1%);--sl-color-lime-400: hsl(82.7, 78%, 55.5%);--sl-color-lime-500: hsl(83.7, 80.5%, 44.3%);--sl-color-lime-600: hsl(84.8, 85.2%, 34.5%);--sl-color-lime-700: hsl(85.9, 78.4%, 27.3%);--sl-color-lime-800: hsl(86.3, 69%, 22.7%);--sl-color-lime-900: hsl(87.6, 61.2%, 20.2%);--sl-color-lime-950: hsl(86.5, 60.6%, 13.9%);--sl-color-green-50: hsl(138.5, 76.5%, 96.7%);--sl-color-green-100: hsl(140.6, 84.2%, 92.5%);--sl-color-green-200: hsl(141, 78.9%, 85.1%);--sl-color-green-300: hsl(141.7, 76.6%, 73.1%);--sl-color-green-400: hsl(141.9, 69.2%, 58%);--sl-color-green-500: hsl(142.1, 70.6%, 45.3%);--sl-color-green-600: hsl(142.1, 76.2%, 36.3%);--sl-color-green-700: hsl(142.4, 71.8%, 29.2%);--sl-color-green-800: hsl(142.8, 64.2%, 24.1%);--sl-color-green-900: hsl(143.8, 61.2%, 20.2%);--sl-color-green-950: hsl(144.3, 60.7%, 12%);--sl-color-emerald-50: hsl(151.8, 81%, 95.9%);--sl-color-emerald-100: hsl(149.3, 80.4%, 90%);--sl-color-emerald-200: hsl(152.4, 76%, 80.4%);--sl-color-emerald-300: hsl(156.2, 71.6%, 66.9%);--sl-color-emerald-400: hsl(158.1, 64.4%, 51.6%);--sl-color-emerald-500: hsl(160.1, 84.1%, 39.4%);--sl-color-emerald-600: hsl(161.4, 93.5%, 30.4%);--sl-color-emerald-700: hsl(162.9, 93.5%, 24.3%);--sl-color-emerald-800: hsl(163.1, 88.1%, 19.8%);--sl-color-emerald-900: hsl(164.2, 85.7%, 16.5%);--sl-color-emerald-950: hsl(164.3, 87.5%, 9.4%);--sl-color-teal-50: hsl(166.2, 76.5%, 96.7%);--sl-color-teal-100: hsl(167.2, 85.5%, 89.2%);--sl-color-teal-200: hsl(168.4, 83.8%, 78.2%);--sl-color-teal-300: hsl(170.6, 76.9%, 64.3%);--sl-color-teal-400: hsl(172.5, 66%, 50.4%);--sl-color-teal-500: hsl(173.4, 80.4%, 40%);--sl-color-teal-600: hsl(174.7, 83.9%, 31.6%);--sl-color-teal-700: hsl(175.3, 77.4%, 26.1%);--sl-color-teal-800: hsl(176.1, 69.4%, 21.8%);--sl-color-teal-900: hsl(175.9, 60.8%, 19%);--sl-color-teal-950: hsl(176.5, 58.6%, 11.4%);--sl-color-wh-50: hsl(161, 76%, 96%);--sl-color-wh-100: hsl(161, 85%, 89%);--sl-color-wh-200: hsl(161, 83%, 76%);--sl-color-wh-300: hsl(161, 76%, 55%);--sl-color-wh-400: hsl(161, 86%, 45%);--sl-color-wh-500: hsl(161, 100%, 35%);--sl-color-wh-600: hsl(162.5, 103%, 31%);--sl-color-wh-700: hsl(164, 94%, 29%);--sl-color-wh-800: hsl(165.5, 86%, 24%);--sl-color-wh-900: hsl(167, 76%, 19%);--sl-color-wh-950: hsl(168.5, 65%, 11%);--sl-color-cyan-50: hsl(183.2, 100%, 96.3%);--sl-color-cyan-100: hsl(185.1, 95.9%, 90.4%);--sl-color-cyan-200: hsl(186.2, 93.5%, 81.8%);--sl-color-cyan-300: hsl(187, 92.4%, 69%);--sl-color-cyan-400: hsl(187.9, 85.7%, 53.3%);--sl-color-cyan-500: hsl(188.7, 94.5%, 42.7%);--sl-color-cyan-600: hsl(191.6, 91.4%, 36.5%);--sl-color-cyan-700: hsl(192.9, 82.3%, 31%);--sl-color-cyan-800: hsl(194.4, 69.6%, 27.1%);--sl-color-cyan-900: hsl(196.4, 63.6%, 23.7%);--sl-color-cyan-950: hsl(196.8, 61%, 16.1%);--sl-color-sky-50: hsl(204, 100%, 97.1%);--sl-color-sky-100: hsl(204, 93.8%, 93.7%);--sl-color-sky-200: hsl(200.6, 94.4%, 86.1%);--sl-color-sky-300: hsl(199.4, 95.5%, 73.9%);--sl-color-sky-400: hsl(198.4, 93.2%, 59.6%);--sl-color-sky-500: hsl(198.6, 88.7%, 48.4%);--sl-color-sky-600: hsl(200.4, 98%, 39.4%);--sl-color-sky-700: hsl(201.3, 96.3%, 32.2%);--sl-color-sky-800: hsl(201, 90%, 27.5%);--sl-color-sky-900: hsl(202, 80.3%, 23.9%);--sl-color-sky-950: hsl(202.3, 73.8%, 16.5%);--sl-color-blue-50: hsl(213.8, 100%, 96.9%);--sl-color-blue-100: hsl(214.3, 94.6%, 92.7%);--sl-color-blue-200: hsl(213.3, 96.9%, 87.3%);--sl-color-blue-300: hsl(211.7, 96.4%, 78.4%);--sl-color-blue-400: hsl(213.1, 93.9%, 67.8%);--sl-color-blue-500: hsl(217.2, 91.2%, 59.8%);--sl-color-blue-600: hsl(221.2, 83.2%, 53.3%);--sl-color-blue-700: hsl(224.3, 76.3%, 48%);--sl-color-blue-800: hsl(225.9, 70.7%, 40.2%);--sl-color-blue-900: hsl(224.4, 64.3%, 32.9%);--sl-color-blue-950: hsl(226.2, 55.3%, 18.4%);--sl-color-indigo-50: hsl(225.9, 100%, 96.7%);--sl-color-indigo-100: hsl(226.5, 100%, 93.9%);--sl-color-indigo-200: hsl(228, 96.5%, 88.8%);--sl-color-indigo-300: hsl(229.7, 93.5%, 81.8%);--sl-color-indigo-400: hsl(234.5, 89.5%, 73.9%);--sl-color-indigo-500: hsl(238.7, 83.5%, 66.7%);--sl-color-indigo-600: hsl(243.4, 75.4%, 58.6%);--sl-color-indigo-700: hsl(244.5, 57.9%, 50.6%);--sl-color-indigo-800: hsl(243.7, 54.5%, 41.4%);--sl-color-indigo-900: hsl(242.2, 47.4%, 34.3%);--sl-color-indigo-950: hsl(243.5, 43.6%, 22.9%);--sl-color-violet-50: hsl(250, 100%, 97.6%);--sl-color-violet-100: hsl(251.4, 91.3%, 95.5%);--sl-color-violet-200: hsl(250.5, 95.2%, 91.8%);--sl-color-violet-300: hsl(252.5, 94.7%, 85.1%);--sl-color-violet-400: hsl(255.1, 91.7%, 76.3%);--sl-color-violet-500: hsl(258.3, 89.5%, 66.3%);--sl-color-violet-600: hsl(262.1, 83.3%, 57.8%);--sl-color-violet-700: hsl(263.4, 70%, 50.4%);--sl-color-violet-800: hsl(263.4, 69.3%, 42.2%);--sl-color-violet-900: hsl(263.5, 67.4%, 34.9%);--sl-color-violet-950: hsl(265.1, 61.5%, 21.4%);--sl-color-purple-50: hsl(270, 100%, 98%);--sl-color-purple-100: hsl(268.7, 100%, 95.5%);--sl-color-purple-200: hsl(268.6, 100%, 91.8%);--sl-color-purple-300: hsl(269.2, 97.4%, 85.1%);--sl-color-purple-400: hsl(270, 95.2%, 75.3%);--sl-color-purple-500: hsl(270.7, 91%, 65.1%);--sl-color-purple-600: hsl(271.5, 81.3%, 55.9%);--sl-color-purple-700: hsl(272.1, 71.7%, 47.1%);--sl-color-purple-800: hsl(272.9, 67.2%, 39.4%);--sl-color-purple-900: hsl(273.6, 65.6%, 32%);--sl-color-purple-950: hsl(276, 59.5%, 16.5%);--sl-color-fuchsia-50: hsl(289.1, 100%, 97.8%);--sl-color-fuchsia-100: hsl(287, 100%, 95.5%);--sl-color-fuchsia-200: hsl(288.3, 95.8%, 90.6%);--sl-color-fuchsia-300: hsl(291.1, 93.1%, 82.9%);--sl-color-fuchsia-400: hsl(292, 91.4%, 72.5%);--sl-color-fuchsia-500: hsl(292.2, 84.1%, 60.6%);--sl-color-fuchsia-600: hsl(293.4, 69.5%, 48.8%);--sl-color-fuchsia-700: hsl(294.7, 72.4%, 39.8%);--sl-color-fuchsia-800: hsl(295.4, 70.2%, 32.9%);--sl-color-fuchsia-900: hsl(296.7, 63.6%, 28%);--sl-color-fuchsia-950: hsl(297.1, 56.8%, 14.5%);--sl-color-pink-50: hsl(327.3, 73.3%, 97.1%);--sl-color-pink-100: hsl(325.7, 77.8%, 94.7%);--sl-color-pink-200: hsl(325.9, 84.6%, 89.8%);--sl-color-pink-300: hsl(327.4, 87.1%, 81.8%);--sl-color-pink-400: hsl(328.6, 85.5%, 70.2%);--sl-color-pink-500: hsl(330.4, 81.2%, 60.4%);--sl-color-pink-600: hsl(333.3, 71.4%, 50.6%);--sl-color-pink-700: hsl(335.1, 77.6%, 42%);--sl-color-pink-800: hsl(335.8, 74.4%, 35.3%);--sl-color-pink-900: hsl(335.9, 69%, 30.4%);--sl-color-pink-950: hsl(336.2, 65.4%, 15.9%);--sl-color-rose-50: hsl(355.7, 100%, 97.3%);--sl-color-rose-100: hsl(355.6, 100%, 94.7%);--sl-color-rose-200: hsl(352.7, 96.1%, 90%);--sl-color-rose-300: hsl(352.6, 95.7%, 81.8%);--sl-color-rose-400: hsl(351.3, 94.5%, 71.4%);--sl-color-rose-500: hsl(349.7, 89.2%, 60.2%);--sl-color-rose-600: hsl(346.8, 77.2%, 49.8%);--sl-color-rose-700: hsl(345.3, 82.7%, 40.8%);--sl-color-rose-800: hsl(343.4, 79.7%, 34.7%);--sl-color-rose-900: hsl(341.5, 75.5%, 30.4%);--sl-color-rose-950: hsl(341.3, 70.1%, 17.1%);--sl-color-primary-50: var(--sl-color-wh-50);--sl-color-primary-100: var(--sl-color-wh-100);--sl-color-primary-200: var(--sl-color-wh-200);--sl-color-primary-300: var(--sl-color-wh-300);--sl-color-primary-400: var(--sl-color-wh-400);--sl-color-primary-500: var(--sl-color-wh-500);--sl-color-primary-600: var(--sl-color-wh-600);--sl-color-primary-700: var(--sl-color-wh-700);--sl-color-primary-800: var(--sl-color-wh-800);--sl-color-primary-900: var(--sl-color-wh-900);--sl-color-primary-950: var(--sl-color-wh-950);--sl-color-success-50: var(--sl-color-green-50);--sl-color-success-100: var(--sl-color-green-100);--sl-color-success-200: var(--sl-color-green-200);--sl-color-success-300: var(--sl-color-green-300);--sl-color-success-400: var(--sl-color-green-400);--sl-color-success-500: var(--sl-color-green-500);--sl-color-success-600: var(--sl-color-green-600);--sl-color-success-700: var(--sl-color-green-700);--sl-color-success-800: var(--sl-color-green-800);--sl-color-success-900: var(--sl-color-green-900);--sl-color-success-950: var(--sl-color-green-950);--sl-color-warning-50: var(--sl-color-amber-50);--sl-color-warning-100: var(--sl-color-amber-100);--sl-color-warning-200: var(--sl-color-amber-200);--sl-color-warning-300: var(--sl-color-amber-300);--sl-color-warning-400: var(--sl-color-amber-400);--sl-color-warning-500: var(--sl-color-amber-500);--sl-color-warning-600: var(--sl-color-amber-600);--sl-color-warning-700: var(--sl-color-amber-700);--sl-color-warning-800: var(--sl-color-amber-800);--sl-color-warning-900: var(--sl-color-amber-900);--sl-color-warning-950: var(--sl-color-amber-950);--sl-color-danger-50: var(--sl-color-red-50);--sl-color-danger-100: var(--sl-color-red-100);--sl-color-danger-200: var(--sl-color-red-200);--sl-color-danger-300: var(--sl-color-red-300);--sl-color-danger-400: var(--sl-color-red-400);--sl-color-danger-500: var(--sl-color-red-500);--sl-color-danger-600: var(--sl-color-red-600);--sl-color-danger-700: var(--sl-color-red-700);--sl-color-danger-800: var(--sl-color-red-800);--sl-color-danger-900: var(--sl-color-red-900);--sl-color-danger-950: var(--sl-color-red-950);--sl-color-neutral-50: var(--sl-color-gray-50);--sl-color-neutral-100: var(--sl-color-gray-100);--sl-color-neutral-200: var(--sl-color-gray-200);--sl-color-neutral-300: var(--sl-color-gray-300);--sl-color-neutral-400: var(--sl-color-gray-400);--sl-color-neutral-500: var(--sl-color-gray-500);--sl-color-neutral-600: var(--sl-color-gray-600);--sl-color-neutral-700: var(--sl-color-gray-700);--sl-color-neutral-800: var(--sl-color-gray-800);--sl-color-neutral-900: var(--sl-color-gray-900);--sl-color-neutral-950: var(--sl-color-gray-950);--sl-color-neutral-0: hsl(0, 0%, 100%);--sl-color-neutral-1000: hsl(0, 0%, 0%);--sl-border-radius-small: 0.1875rem;--sl-border-radius-medium: 0.25rem;--sl-border-radius-large: 0.5rem;--sl-border-radius-x-large: 1rem;--sl-border-radius-circle: 50%;--sl-border-radius-pill: 9999px;--sl-shadow-x-small: 0 1px 2px hsla(240, 3.8%, 46.1%, 0.06);--sl-shadow-small: 0 1px 2px hsla(240, 3.8%, 46.1%, 0.12);--sl-shadow-medium: 0 2px 4px hsla(240, 3.8%, 46.1%, 0.12);--sl-shadow-large: 0 2px 8px hsla(240, 3.8%, 46.1%, 0.12);--sl-shadow-x-large: 0 4px 16px hsla(240, 3.8%, 46.1%, 0.12);--sl-spacing-3x-small: 0.125rem;--sl-spacing-2x-small: 0.25rem;--sl-spacing-x-small: 0.5rem;--sl-spacing-small: 0.75rem;--sl-spacing-medium: 1rem;--sl-spacing-large: 1.25rem;--sl-spacing-x-large: 1.75rem;--sl-spacing-2x-large: 2.25rem;--sl-spacing-3x-large: 3rem;--sl-spacing-4x-large: 4.5rem;--sl-transition-x-slow: 1000ms;--sl-transition-slow: 500ms;--sl-transition-medium: 250ms;--sl-transition-fast: 150ms;--sl-transition-x-fast: 50ms;--sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;--sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--sl-font-serif: Georgia, "Times New Roman", serif;--sl-font-size-2x-small: 0.575em;--sl-font-size-x-small: 0.7em;--sl-font-size-small: 0.8em;--sl-font-size-medium: 0.95em;--sl-font-size-large: 1.2em;--sl-font-size-x-large: 1.45em;--sl-font-size-2x-large: 2em;--sl-font-size-3x-large: 1.85em;--sl-font-size-4x-large: 4em;--sl-font-weight-light: 300;--sl-font-weight-normal: 400;--sl-font-weight-semibold: 500;--sl-font-weight-bold: 700;--sl-letter-spacing-denser: -0.03em;--sl-letter-spacing-dense: -0.015em;--sl-letter-spacing-normal: normal;--sl-letter-spacing-loose: 0.075em;--sl-letter-spacing-looser: 0.15em;--sl-line-height-denser: 1;--sl-line-height-dense: 1.4;--sl-line-height-normal: 1.8;--sl-line-height-loose: 2.2;--sl-line-height-looser: 2.6;--sl-focus-ring-color: var(--sl-color-primary-600);--sl-focus-ring-style: solid;--sl-focus-ring-width: 3px;--sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset: 1px;--sl-button-font-size-small: var(--sl-font-size-x-small);--sl-button-font-size-medium: var(--sl-font-size-small);--sl-button-font-size-large: var(--sl-font-size-medium);--sl-input-height-small: 1.875rem;--sl-input-height-medium: 2.5rem;--sl-input-height-large: 3.125rem;--sl-input-background-color: var(--wh-bg-base);--sl-input-background-color-hover: var(--wh-bg-back);--sl-input-background-color-focus: var(--wh-bg-back);--sl-input-background-color-disabled: var(--wh-bg-front);--sl-input-border-color: var(--wh-border-base);--sl-input-border-color-hover: var(--wh-border-base-hover);--sl-input-border-color-focus: var(--wh-border-base-hover);--sl-input-border-color-disabled: var(--wh-border-base-hover);--sl-input-border-width: 1px;--sl-input-required-content: "*";--sl-input-required-content-offset: -2px;--sl-input-required-content-color: var(--sl-input-label-color);--sl-input-border-radius-small: var(--sl-border-radius-medium);--sl-input-border-radius-medium: var(--sl-border-radius-medium);--sl-input-border-radius-large: var(--sl-border-radius-medium);--sl-input-font-family: var(--sl-font-sans);--sl-input-font-weight: var(--sl-font-weight-normal);--sl-input-font-size-small: var(--sl-font-size-small);--sl-input-font-size-medium: var(--sl-font-size-medium);--sl-input-font-size-large: var(--sl-font-size-large);--sl-input-letter-spacing: var(--sl-letter-spacing-normal);--sl-input-color: var(--wh-text);--sl-input-color-hover: var(--wh-text);--sl-input-color-focus: var(--wh-text);--sl-input-color-disabled: var(--wh-text-lighter);--sl-input-icon-color-hover: var(--sl-color-neutral-600);--sl-input-icon-color-focus: var(--sl-color-neutral-600);--sl-input-placeholder-color: var(--wh-text-lighter);--sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);--sl-input-spacing-small: var(--sl-spacing-small);--sl-input-spacing-medium: var(--sl-spacing-medium);--sl-input-spacing-large: var(--sl-spacing-large);--sl-input-filled-background-color: var(--wh-bg-front);--sl-input-filled-background-color-hover: var(--wh-bg-front);--sl-input-filled-background-color-focus: var(--wh-bg-front);--sl-input-filled-background-color-disabled: var(--wh-bg-front);--sl-input-filled-color: var(--sl-color-neutral-800);--sl-input-filled-color-hover: var(--sl-color-neutral-800);--sl-input-filled-color-focus: var(--wh-text);--sl-input-filled-color-disabled: var(--sl-color-neutral-800);--sl-input-focus-ring-color: hsla(198.6, 88.7%, 48.4%, 0.4);--sl-input-focus-ring-offset: 0;--sl-input-label-font-size-small: var(--sl-font-size-small);--sl-input-label-font-size-medium: var(--sl-font-size-medium);--sl-input-label-font-size-large: var(--sl-font-size-large);--sl-input-label-color: inherit;--sl-input-help-text-font-size-small: var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium: var(--sl-font-size-small);--sl-input-help-text-font-size-large: var(--sl-font-size-medium);--sl-input-help-text-color: var(--wh-text-light);--sl-toggle-size-small: 0.875rem;--sl-toggle-size-medium: 1.125rem;--sl-toggle-size-large: 1.375rem;--sl-overlay-background-color: hsla(0, 0%, 0%, 0.43);--sl-panel-background-color: var(--wh-bg-base);--sl-panel-border-color: var(--wh-border-base);--sl-panel-border-width: 1px;--sl-tooltip-border-radius: var(--sl-border-radius-medium);--sl-tooltip-background-color: var(--wh-bg-base);--sl-tooltip-color: var(--wh-text);--sl-tooltip-font-family: var(--sl-font-sans);--sl-tooltip-font-weight: var(--sl-font-weight-normal);--sl-tooltip-font-size: var(--sl-font-size-x-small);--sl-tooltip-line-height: var(--sl-line-height-dense);--sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size: 6px;--sl-z-index-drawer: 700;--sl-z-index-dialog: 800;--sl-z-index-dropdown: 900;--sl-z-index-toast: 950;--sl-z-index-tooltip: 1000}',""]);const l=n},45106:(t,e,o)=>{"use strict";o.d(e,{Q:()=>n});var r=o(54184),i=o(22185),s=o(869);function n(t,e){return void 0===e&&(e=0),(0,i.N)(function(o,i){o.subscribe((0,s._)(i,function(o){return(0,r.N)(i,t,function(){return i.next(o)},e)},function(){return(0,r.N)(i,t,function(){return i.complete()},e)},function(o){return(0,r.N)(i,t,function(){return i.error(o)},e)}))})}},46195:(t,e,o)=>{"use strict";o.d(e,{Tg:()=>b});var r=o(85608),i=o(31604),s=o(26691),n=o(61824),l=o(23330),a=o(74956),c=o(64904),h=o(93206),d=o(98523),p=o(14460),u=o(43585),g=o(59805);function b(t){if(t instanceof n.c)return t;if(null!=t){if((0,l.l)(t))return m=t,new n.c(function(t){var e=m[g.s]();if((0,p.T)(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")});if((0,i.X)(t))return v=t,new n.c(function(t){for(var e=0;e<v.length&&!t.closed;e++)t.next(v[e]);t.complete()});if((0,s.y)(t))return b=t,new n.c(function(t){b.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,u.m)});if((0,a.T)(t))return f(t);if((0,h.x)(t))return o=t,new n.c(function(t){var e,i;try{for(var s=(0,r.Ju)(o),n=s.next();!n.done;n=s.next()){var l=n.value;if(t.next(l),t.closed)return}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=s.return)&&i.call(s)}finally{if(e)throw e.error}}t.complete()});if((0,d.U)(t))return e=t,f((0,d.C)(e))}var e,o,b,v,m;throw(0,c.L)(t)}function f(t){return new n.c(function(e){(function(t,e){var o,i,s,n;return(0,r.sH)(this,void 0,void 0,function(){var l,a;return(0,r.YH)(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),o=(0,r.xN)(t),c.label=1;case 1:return[4,o.next()];case 2:if((i=c.sent()).done)return[3,4];if(l=i.value,e.next(l),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),s={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),i&&!i.done&&(n=o.return)?[4,n.call(o)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})})(t,e).catch(function(t){return e.error(t)})})}},46919:(t,e,o)=>{var r=o(4334);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},49335:(t,e,o)=>{var r=o(38932);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},49758:(t,e,o)=>{"use strict";o.d(e,{l:()=>r});var r="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},50234:(t,e,o)=>{"use strict";var r=o(93811),i=o(95665),s=o(5733),n=o.n(s),l=o(38085),a=o(30827),c=o(71882);const h=l.SHARED_COMPONENTS_INTERNAL.ShowPopupSelector,d=h.TAG;class p extends a.y{constructor(){super(...arguments),this.chromeSettings=l.fallbackChromeSettings,this.components=[l.SHARED_COMPONENTS.Icon.TAG]}onSelected(t,e){return o=this,r=void 0,s=function*(){const t="on"===e;return this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{showMarkerPopup:t}),(0,l.updateChromeSettings)({showMarkerPopup:t})},new((i=void 0)||(i=Promise))(function(t,e){function n(t){try{a(s.next(t))}catch(t){e(t)}}function l(t){try{a(s.throw(t))}catch(t){e(t)}}function a(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i(function(t){t(o)})).then(n,l)}a((s=s.apply(o,r||[])).next())});var o,r,i,s}render(){const t={on:"A popup will be shown when you highlight text from which you can select multiple colors.",off:"The popup will not be shown. You can still highlight text by right-clicking on the text or using keyboard shortcuts."},e={on:"https://email.web-highlights.com/uploads/popup-on_07CbdR.png",off:"https://email.web-highlights.com/uploads/popup-off_r6155w.png"},o={on:"On",off:"Off"};return r.html`
      <div class="container" part="container" role="radiogroup">
        ${["on","off"].map(i=>{var s,n;const a=`show-popup-option-${i}`,c=(null===(s=this.chromeSettings)||void 0===s?void 0:s.showMarkerPopup)&&"on"===i||!(null===(n=this.chromeSettings)||void 0===n?void 0:n.showMarkerPopup)&&"off"===i;return r.html`
            <div
              class="option-container ${c?"checked":""}"
              data-testid=${h.TEST_IDS.SHOW_POPUP_OPTION_CONTAINER(i)}
            >
              <label class="radio-label" for="${a}">
                <img
                  alt="Showing popup ${i} mode"
                  class="radio-label-image"
                  loading="lazy"
                  src=${e[i]}
                />
                <div class="radio-label-footer">
                  <section>
                    <input
                      type="radio"
                      id="${a}"
                      tabindex="0"
                      @change=${t=>this.onSelected(t,i)}
                      name="show-popup-option"
                      class="show-popup-option-input"
                      data-testid=${h.TEST_IDS.SHOW_POPUP_OPTION(i)}
                      value=${i}
                      ?checked=${c}
                    />
                    <span class="radio-label-text"
                      >${o[i]}</span
                    >
                    <div class="helper-container">
                      ${"off"===i?r.html`<a
                            class="learn-more-btn"
                            title="Learn how to disable automatic popup"
                            target="_blank"
                            href="http://web-highlights.com/docs/introduction/helpful-settings#how-to-disable-automatic-popup"
                            >Learn More</a
                          >`:r.html``}
                      <sl-tooltip
                        class="highlighter-mode-tooltip"
                        pacement="top"
                        content="${t[i]}"
                      >
                        <webhighlights-icon
                          class="highlighter-mode-icon"
                          icon=${l.ICON_NAMES.info}
                          size="16"
                          strokeWidth="1.5"
                        ></webhighlights-icon>
                      </sl-tooltip>
                    </div>
                  </section>
                </div>
              </label>
            </div>
          `})}
      </div>
    `}}p.styles=[r.css`
      ${(0,r.unsafeCSS)(n())}
    `,...c.f],function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,i.state)()],p.prototype,"chromeSettings",void 0),a.y.define(d,p)},51998:(t,e,o)=>{"use strict";o.d(e,{A2:()=>i,M7:()=>r,ro:()=>s});var r=n("C",void 0,void 0);function i(t){return n("E",void 0,t)}function s(t){return n("N",t,void 0)}function n(t,e,o){return{kind:t,value:e,error:o}}},52348:(t,e,o)=>{"use strict";o.d(e,{K:()=>i});var r=o(59904);function i(){return(0,r.U)(1)}},53888:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(46919),c=o.n(a),h=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},d=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const p=r.SHARED_COMPONENTS_INTERNAL.SettingsNotifications,u="webhighlights-settings-notifications";class g extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.ToggleButton.TAG],this.settings=null,this.learningInfo=null}firstUpdated(t){this.loadChromeSettings(),this.loadEmailSettings()}loadChromeSettings(){return d(this,void 0,void 0,function*(){try{this.chromeSettings=yield(0,r.useContext)().db.getChromeSettings()}catch(t){console.error(t),this.chromeSettings=r.fallbackChromeSettings}})}loadEmailSettings(){return d(this,void 0,void 0,function*(){if(this.props.jwtPayload)try{this.settings=yield(0,r.useContext)().httpFacade.getSettings()}catch(t){this.settings=Object.assign(Object.assign({},r.DEFAULT_WEBHIGHLIGHTS_SETTINGS),{_user:this.props.jwtPayload._id})}else this.settings=null})}chromeSettingsChanged(t){return d(this,void 0,void 0,function*(){this.chromeSettings&&(this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),t.detail),yield(0,r.updateChromeSettings)(this.chromeSettings))})}toggleShowBackupDialogPrompt(t){return d(this,void 0,void 0,function*(){const e={showBackupDialogPrompt:t};yield(0,r.updateChromeSettings)(e)})}toggleShowLearningTeaser(t){return d(this,void 0,void 0,function*(){const e={showLearningTeaser:t};yield(0,r.updateChromeSettings)(e)})}toggleIsLearningReminderEmailEnabled(t){return d(this,void 0,void 0,function*(){return this.updateSettings({isLearningReminderEmailEnabled:t})})}toggleIsEmailNewsletterEnabled(t){return d(this,void 0,void 0,function*(){return this.updateSettings({emailSettings:t?r.EmailNewsletterState.ALL:r.EmailNewsletterState.NONE})})}updateSettings(t){return d(this,void 0,void 0,function*(){this.settings&&(this.settings=Object.assign(Object.assign({},this.settings),t),yield(0,r.useContext)().httpFacade.updateSettings(t))})}onBackupIntervalChange(t){return d(this,void 0,void 0,function*(){const e=+t.target.value;this.chromeSettings&&"number"==typeof e&&!Number.isNaN(e)&&(yield(0,r.updateChromeSettings)({backupDialogPromptInterval:e}),this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{backupDialogPromptInterval:e}))})}onCreateAccount(){r.notifications.dispatch("loginNeeded",{detail:{}})}render(){var t,e,o,s,n;if(!this.props)throw new Error(`'props' is missing in ${u}`);return this.chromeSettings?i.html`<div class="container" part="container">
      <!-- # Browser Plugin Notifications -->
      <header>
        <h3 class="section-title">Browser Plugin Notifications</h3>
        <span class="section-subtitle">
          These notifications are only visible when using the browser extension.
          They will not be shown within the web app.</span
        >
      </header>

      <!-- ## Backup Reminder -->
      <div class="entry">
        <div class="entry-header">
          <h3 class="entry-title">Show Backup Reminder</h3>
          <span class="entry-description">
            If enabled, a dialog appears regularly to remind you to back up your
            data (Only if cloud-sync is disabled).</span
          >
          <br />
          <span class="entry-description"
            >Shows up every
            <input
              type="number"
              class="backup-interval-input"
              data-testid=${p.TEST_IDS.BACKUP_INTERVAL_INPUT}
              @change=${this.onBackupIntervalChange}
              ?disabled=${!this.chromeSettings.showBackupDialogPrompt}
              value=${this.chromeSettings.backupDialogPromptInterval}
            />
            unsynced changes.</span
          >
        </div>
        <webhighlights-toggle-button
          .isEnabled=${null===(t=this.chromeSettings)||void 0===t?void 0:t.showBackupDialogPrompt}
          inputId="showBackupDialogPrompt"
          @changed="${t=>this.toggleShowBackupDialogPrompt(t.detail)}"
        ></webhighlights-toggle-button>
      </div>

      <!-- ## Learning Reminder -->
      <div class="entry">
        <div class="entry-header">
          <h3 class="entry-title">Show Learning Reminder</h3>
          <span class="entry-description">
            If enabled, a popup appears daily to remind you to learn and to not
            lose your streak.</span
          >
        </div>
        <webhighlights-toggle-button
          .isEnabled=${!!(null===(e=this.chromeSettings)||void 0===e?void 0:e.showLearningTeaser)}
          inputId="showLearningTeaser"
          @changed="${t=>this.toggleShowLearningTeaser(t.detail)}"
        ></webhighlights-toggle-button>
      </div>

      <hr class="settings-divider" />

      <!-- # Email Notifications -->
      <header>
        <h3 class="section-title">Email Notifications</h3>
        <span class="section-subtitle">
          These notifications will be sent to the email address you signed up
          with.
          ${(null===(o=this.props.jwtPayload)||void 0===o?void 0:o.email)?i.html`Your email address is
                <strong>${this.props.jwtPayload.email}</strong>.`:i.html`You have to create an account first to enable email
              notifications.`}
        </span>
      </header>

      ${this.props.jwtPayload&&this.settings?i.html`
            <!-- ## Email Newsletter -->
            <div class="entry">
              <div class="entry-header">
                <h3 class="entry-title">Email Newsletter</h3>
                <span class="entry-description">
                  If enabled, you will receive important updates, news, and
                  onboarding emails about Web Highlights.</span
                >
              </div>
              <webhighlights-toggle-button
                .isEnabled=${(null===(s=this.settings)||void 0===s?void 0:s.emailSettings)===r.EmailNewsletterState.ALL}
                inputId="isEmailNewsletterEnabled"
                @changed="${t=>this.toggleIsEmailNewsletterEnabled(t.detail)}"
              ></webhighlights-toggle-button>
            </div>
            <!-- ## Email Learning Reminder -->
            <div class="entry">
              <div class="entry-header">
                <h3 class="entry-title">Learning Reminder Email</h3>
                <span class="entry-description">
                  If enabled, an email will be sent to remind you to learn and
                  to not lose your learning streak 🔥</span
                >
              </div>
              <webhighlights-toggle-button
                .isEnabled=${!!(null===(n=this.settings)||void 0===n?void 0:n.isLearningReminderEmailEnabled)}
                inputId="isLearningReminderEmailEnabled"
                @changed="${t=>this.toggleIsLearningReminderEmailEnabled(t.detail)}"
              ></webhighlights-toggle-button>
            </div>
          `:i.html`<button class="primary-btn" @click=${this.onCreateAccount}>
            Create Account
          </button>`}
    </div>`:i.html``}}g.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,h([(0,s.property)({type:Object})],g.prototype,"props",void 0),h([(0,s.state)()],g.prototype,"settings",void 0),h([(0,s.state)()],g.prototype,"learningInfo",void 0),h([(0,s.state)()],g.prototype,"chromeSettings",void 0),n.y.define(u,g)},54184:(t,e,o)=>{"use strict";function r(t,e,o,r,i){void 0===r&&(r=0),void 0===i&&(i=!1);var s=e.schedule(function(){o(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}o.d(e,{N:()=>r})},55034:(t,e,o)=>{"use strict";o.d(e,{c:()=>f});var r=o(10101),i=o(7427),s=o(62731),n=o(59862),l=o(1772),a=o(23330),c=o(26691),h=o(31604),d=o(93206),p=o(74956),u=o(64904),g=o(98523),b=o(57115);function f(t,e){if(null!=t){if((0,a.l)(t))return(0,r.x)(t,e);if((0,h.X)(t))return(0,s.V)(t,e);if((0,c.y)(t))return(0,i.P)(t,e);if((0,p.T)(t))return(0,l.M)(t,e);if((0,d.x)(t))return(0,n.S)(t,e);if((0,g.U)(t))return(0,b.v)(t,e)}throw(0,u.L)(t)}},56438:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(95905),a=o.n(l);const c=r.SHARED_COMPONENTS.PaymentMethod.TAG;class h extends n.y{render(){var t;if(!(null===(t=this.paymentInformation)||void 0===t?void 0:t.payment_method))return i.html` <span>No payment method available.</span> `;const{payment_method:e,last_four_digits:o,card_type:r}=this.paymentInformation;return"card"===e?i.html`
        <div class="payment-method-container">
          <span class="font-semibold">${r.toUpperCase()}</span>
          ${e}${" "}ending in${" "}
          <span class="font-semibold">${o}</span>
        </div>
      `:i.html`
      <div class="payment-method-container">
        ${e.toUpperCase()}
      </div>
    `}}h.styles=i.css`
    ${(0,i.unsafeCSS)(a())}
  `,function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,s.property)()],h.prototype,"paymentInformation",void 0),n.y.define(c,h)},57115:(t,e,o)=>{"use strict";o.d(e,{v:()=>s});var r=o(1772),i=o(98523);function s(t,e){return(0,r.M)((0,i.C)(t),e)}},57240:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(49335),a=o.n(l),c=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},h=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const d=r.SHARED_COMPONENTS_INTERNAL.FileImport,p=d.TAG;class u extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Tag.TAG,r.SHARED_COMPONENTS.Loading.TAG],this.importedDataResponse=null,this.fileLoading=!1,this.loading=!1}deleteSelectedFile(){this.importedDataResponse=null,this.fileInputElement.value=""}get exportedDataInfo(){var t,e,o,r;return`${null===(e=null===(t=this.importedDataResponse)||void 0===t?void 0:t.marks)||void 0===e?void 0:e.length} Highlights on ${null===(r=null===(o=this.importedDataResponse)||void 0===o?void 0:o.bookmarks)||void 0===r?void 0:r.length} Pages`}get httpFacade(){return(0,r.useContext)().httpFacade}onChooseFileClick(){const t=this.fileInputElement;t?t.click():(0,r.showSomethingWentWrong)()}onFileUpload(t){this.fileLoading=!0;const e=t.target,o=e.files&&e.files[0];if(o&&o.type===this.fileImportType.fileFormat){this.deleteSelectedFile();const t=new FileReader;t.onload=t=>h(this,void 0,void 0,function*(){var e,o,i,s,n;try{const l=null===(e=t.target)||void 0===e?void 0:e.result;if(this.importedDataResponse=yield(0,r.getImportedDataResponse)(l,this.fileImportType),!(null===(i=null===(o=this.importedDataResponse)||void 0===o?void 0:o.bookmarks)||void 0===i?void 0:i.length)&&!(null===(n=null===(s=this.importedDataResponse)||void 0===s?void 0:s.marks)||void 0===n?void 0:n.length))throw new Error("No data available in file")}catch(t){console.error(t),this.deleteSelectedFile(),(0,r.showInvalidFileError)(this.fileImportType)}finally{this.fileLoading=!1}}),t.readAsText(o)}else this.deleteSelectedFile(),(0,r.showInvalidFileError)(this.fileImportType),this.fileLoading=!1}startImport(){return h(this,void 0,void 0,function*(){this.loading=!0;try{if(this.importedDataResponse){const{uniqueBookmarks:t,uniqueMarks:e}=yield(0,r.resolveUniqueEntitiesForImport)(this.importedDataResponse);t.length!==this.importedDataResponse.bookmarks.length&&(0,r.showToast)({content:"Some pages were not imported because they already exist in your library.",variant:"neutral",uniqueId:`${this.fileImportType.fileExtension}-import-duplicate-pages-${this.fileImportType.type}`}),e.length!==this.importedDataResponse.marks.length&&(0,r.showToast)({content:"Some highlights were not imported because they already exist in your library.",variant:"neutral",uniqueId:`${this.fileImportType.fileExtension}-import-duplicate-highlights-${this.fileImportType.type}`}),yield(0,r.useContext)().db.createOrUpdateEntities({entities:t,objectStoreName:r.ObjectStoreNameSyncable.bookmarks}),yield(0,r.useContext)().db.createOrUpdateEntities({entities:e,objectStoreName:r.ObjectStoreNameSyncable.marks}),(0,r.showToast)({content:`Successfully started importing ${this.fileImportType.title} highlights & pages`,uniqueId:`${this.fileImportType.fileExtension}-import-success-${this.fileImportType.type}`,variant:"success"}),this.importedDataResponse=null,this.chromeSyncStatusSubscription=r.notifications.subscribe("chromeSyncStatusChanged",t=>h(this,void 0,void 0,function*(){var e;[r.CHROME_SYNC_STATE.UPDATING,r.CHROME_SYNC_STATE.NEEDS_SYNC].includes(t.detail.chromeSyncState)?this.loading=!0:(null===(e=this.chromeSyncStatusSubscription)||void 0===e||e.unsubscribe(),yield(0,r.wait)(500),location.reload())})),(0,r.useContext)().chromeSyncService.executeSync()}else(0,r.showInvalidFileError)(this.fileImportType)}catch(t){(0,r.isPaymentRequiredError)(t)||(0,r.showSomethingWentWrong)()}finally{this.loading=!1}})}render(){return i.html` <div class="backup-import-container">
      <div>
        <input
          type="file"
          id="fileInputElement"
          style="display: none"
          data-testid="${d.TEST_IDS.FILE_INPUT}"
          @change="${this.onFileUpload}"
        />
        ${this.importedDataResponse?i.html`<webhighlights-tag
              .removable=${!0}
              @removed=${this.deleteSelectedFile}
              class="uploaded-data-info"
              .tag=${this.exportedDataInfo}
              data-testid=${d.TEST_IDS.UPLOADED_FILE_INFO}
              >${this.exportedDataInfo}</webhighlights-tag
            >`:i.html``}
        ${this.fileLoading||this.importedDataResponse||this.loading?i.html``:i.html`
              <button
                class="section-button primary-btn"
                data-testid="${d.TEST_IDS.CHOOSE_FILE_BTN}"
                @click="${this.onChooseFileClick}"
              >
                <span
                  >Upload ${this.fileImportType.title}
                  .${this.fileImportType.fileExtension} file</span
                >
              </button>
            `}
        ${this.fileLoading?i.html` <webhighlights-loading></webhighlights-loading> `:i.html``}
      </div>
      <div class="backup-import-btn-container">
        ${this.loading?i.html` <webhighlights-loading></webhighlights-loading> `:i.html`
              ${this.importedDataResponse?i.html`
                    <button
                      class="section-button primary-btn"
                      title="Import ${this.exportedDataInfo} to Web Highlights"
                      data-testid="${d.TEST_IDS.IMPORT_BTN}"
                      @click="${this.startImport}"
                    >
                      <span>Start Import</span>
                    </button>
                  `:i.html``}
            `}
      </div>
    </div>`}}u.styles=i.css`
    ${(0,i.unsafeCSS)(a())}
  `,c([(0,s.property)({type:Object})],u.prototype,"fileImportType",void 0),c([(0,s.state)()],u.prototype,"importedDataResponse",void 0),c([(0,s.state)()],u.prototype,"fileLoading",void 0),c([(0,s.state)()],u.prototype,"loading",void 0),c([(0,s.query)("#fileInputElement")],u.prototype,"fileInputElement",void 0),n.y.define(p,u)},58426:(t,e,o)=>{var r=o(61057);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},58874:(t,e,o)=>{"use strict";var r=o(93811),i=o(95665),s=o(28461),n=o.n(s),l=o(38085),a=o(79097),c=o(67083),h=o(85833),d=o(30827),p=o(71882),u=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},g=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const b=l.SHARED_COMPONENTS_INTERNAL.CapacitiesApiIntegration;class f extends d.y{constructor(){super(...arguments),this.spaces=[],this.errorMsg=null,this.capacitiesToken="",this.loadingState="LOADING",this.activeIntegration=null,this.updatedSearchValue$=new a.B,this.components=[l.SHARED_COMPONENTS.Loading.TAG,l.SHARED_COMPONENTS.Icon.TAG]}get activeSpace(){var t,e,o;return(null===(t=this.activeIntegration)||void 0===t?void 0:t.id)&&null!==(o=null===(e=this.spaces)||void 0===e?void 0:e.find(t=>{var e;return(null===(e=this.activeIntegration)||void 0===e?void 0:e.spaceId)===t.id}))&&void 0!==o?o:null}firstUpdated(t){return g(this,void 0,void 0,function*(){this.startUpdateValueDebouncer(),this.loadData()})}disconnectedCallback(){this.unsubscribe(),super.disconnectedCallback()}unsubscribe(){var t;null===(t=this.updateSearchValueSubscription$)||void 0===t||t.unsubscribe()}startUpdateValueDebouncer(){this.updateSearchValueSubscription$=(0,c.x)(this.updatedSearchValue$.pipe((0,h.B)(500))).subscribe(t=>{this.loadData()})}loadData(){return g(this,void 0,void 0,function*(){var t,e,o;this.loadingState="LOADING",this.errorMsg=null;const{db:r}=(0,l.useContext)();try{this.capacitiesToken=null!==(t=yield(0,l.getCapacitiesToken)())&&void 0!==t?t:"",this.capacitiesToken||(this.errorMsg="Please enter a valid Capacities API Token. You can obtain an access token in the Capatities app at Settings > Capacities API.");const i=(yield r.getChromeSettings()).integrations;this.activeIntegration=null!==(e=null==i?void 0:i.find(l.isCapacitiesIntegration))&&void 0!==e?e:null,this.spaces=yield this.loadCapacitiesPages(),(null===(o=this.spaces)||void 0===o?void 0:o.length)&&!this.activeSpace&&this.onSpaceSelected({spaceId:this.spaces[0].id}),this.activeSpace||(yield this.deleteActiveIntegration()),this.loadingState=this.capacitiesToken?"SUCCESS":"AUTH_NEEDED"}catch(t){if(console.error(t),(0,l.isCapacitiesApiError)(t))return this.loadingState=t.code,this.errorMsg=t.message,void(t.code===l.CapacitiesApiErrorCode.unauthorized&&(0,l.setCapacitiesToken)(""));this.errorMsg="Something went wrong. Your token might be incorrect, please enter a valid Capacities API token. You can obtain an access token in the Capatities app at Settings > Capacities API.",this.loadingState="GENERAL_ERROR"}})}loadCapacitiesPages(){return g(this,void 0,void 0,function*(){const{httpFacade:t}=(0,l.useContext)();if(!(yield(0,l.getCapacitiesToken)()))return[];const e=yield t.getCapacitiesSpaces();return this.spaces=Array.isArray(e)?e:[],e})}deleteActiveIntegration(){return g(this,void 0,void 0,function*(){return this.updateCapacitiesIntegration({spaceId:null})})}updateCapacitiesIntegration(t){return g(this,void 0,void 0,function*(){const e={id:l.INTEGRATION_IDS.CAPACITIES_EXPORT,spaceId:t.spaceId};this.activeIntegration=e,yield(0,l.updateIntegrations)(e)})}onSpaceSelected(t){return g(this,void 0,void 0,function*(){yield this.updateCapacitiesIntegration(t)})}onSpaceSelectorChange(t){return g(this,void 0,void 0,function*(){var e;const o=null!==(e=t.target.value)&&void 0!==e?e:null;return this.onSpaceSelected({spaceId:o})})}onTokenInputChange(t){const e=t.target.value||"";(0,l.setCapacitiesToken)(e),this.capacitiesToken!==e&&(this.capacitiesToken=e,this.updatedSearchValue$.next(e))}render(){var t,e,o;return r.html`<div>
      <label
        for="token-input"
        class="token-input-label ${(null===(t=this.capacitiesToken)||void 0===t?void 0:t.length)?"show":""}"
        >Capacities API Token</label
      >
      <div class="token-input-container" part="container">
        <input
          id="token-input"
          class="token-input"
          placeholder="Capacities API Token"
          data-testid=${b.TEST_IDS.TOKEN_INPUT}
          .value=${this.capacitiesToken}
          @input=${this.onTokenInputChange}
        />
      </div>
      ${"LOADING"===this.loadingState?r.html`
            <webhighlights-loading class="loading"></webhighlights-loading>
          `:r.html``}
      ${"SUCCESS"!==this.loadingState?r.html`<div class="error-container">
            <span class="error-msg">${this.errorMsg}</span>
          </div>`:r.html`
            <sl-select
              value=${null!==(o=null===(e=this.activeSpace)||void 0===e?void 0:e.id)&&void 0!==o?o:""}
              @sl-change=${this.onSpaceSelectorChange}
              size="large"
              class="page-selector"
              placeholder="Select a page"
            >
              ${this.spaces.map(t=>r.html`
                  <sl-option value="${t.id}"
                    >${(0,l.resolveCapacitiesSpaceIcon)(t)}
                    ${(0,l.resolveCapacitiesPageTitle)(t)}</sl-option
                  >
                `)}
            </sl-select>
            ${this.activeIntegration&&this.activeSpace?r.html`<a
                  href="https://app.capacities.io/${this.activeSpace.id}"
                  rel="nofollow"
                  target="_blank"
                  class="active-integration-card"
                >
                  <header>
                    <webhighlights-icon
                      class="active-icon"
                      icon=${l.ICON_NAMES.circle}
                      size="12"
                    ></webhighlights-icon>
                    <button
                      @click=${t=>g(this,void 0,void 0,function*(){return t.preventDefault(),this.deleteActiveIntegration()})}
                    >
                      <webhighlights-icon
                        icon=${l.ICON_NAMES.trash}
                        size="16"
                      ></webhighlights-icon>
                    </button>

                    <webhighlights-icon
                      class="external-link-icon"
                      icon=${l.ICON_NAMES["external-link"]}
                      size="16"
                    ></webhighlights-icon>
                  </header>
                  <main>
                    ${(0,l.resolveCapacitiesSpaceIcon)(this.activeSpace)}
                    ${(0,l.resolveCapacitiesPageTitle)(this.activeSpace)}
                  </main>
                  <footer>
                    <span class="url-info"
                      >app.capacities.io/${this.activeSpace.id}</span
                    >
                  </footer>
                </a> `:r.html``}
          `}
    </div>`}}f.styles=[r.css`
      ${(0,r.unsafeCSS)(n())}
    `,...p.f],u([(0,i.state)()],f.prototype,"spaces",void 0),u([(0,i.state)()],f.prototype,"errorMsg",void 0),u([(0,i.state)()],f.prototype,"capacitiesToken",void 0),u([(0,i.state)()],f.prototype,"loadingState",void 0),u([(0,i.state)()],f.prototype,"activeIntegration",void 0),d.y.define("webhighlights-capacities-api-integration",f)},59805:(t,e,o)=>{"use strict";o.d(e,{s:()=>r});var r="function"==typeof Symbol&&Symbol.observable||"@@observable"},59862:(t,e,o)=>{"use strict";o.d(e,{S:()=>l});var r=o(61824),i=o(49758),s=o(14460),n=o(54184);function l(t,e){return new r.c(function(o){var r;return(0,n.N)(o,e,function(){r=t[i.l](),(0,n.N)(o,e,function(){var t,e,i;try{e=(t=r.next()).value,i=t.done}catch(t){return void o.error(t)}i?o.complete():o.next(e)},0,!0)}),function(){return(0,s.T)(null==r?void 0:r.return)&&r.return()}})}},59904:(t,e,o)=>{"use strict";o.d(e,{U:()=>s});var r=o(96961),i=o(24254);function s(t){return void 0===t&&(t=1/0),(0,r.Z)(i.D,t)}},61057:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.blacklist{width:100%;padding:12px 16px;box-sizing:border-box;display:block}webhighlights-chrome-settings::part(container){border-bottom:none}.highlighter-popup-selector,.highlighter-mode-selector{padding:6px 0 16px 0;margin-bottom:8px}.settings-link-btn{text-decoration:underline}sl-alert{margin:0 0 20px 0}sl-alert::part(message){color:var(--wh-text)}.text-link{color:inherit;text-decoration:underline}.text-link:hover{color:var(--wh-text)}',""]);const l=n},61824:(t,e,o)=>{"use strict";o.d(e,{c:()=>h});var r=o(21235),i=o(71868),s=o(59805),n=o(63404),l=o(30747),a=o(14460),c=o(7861),h=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var o=new t;return o.source=this,o.operator=e,o},t.prototype.subscribe=function(t,e,o){var s,n=this,l=(s=t)&&s instanceof r.vU||function(t){return t&&(0,a.T)(t.next)&&(0,a.T)(t.error)&&(0,a.T)(t.complete)}(s)&&(0,i.Uv)(s)?t:new r.Ms(t,e,o);return(0,c.Y)(function(){var t=n,e=t.operator,o=t.source;l.add(e?e.call(l,o):o?n._subscribe(l):n._trySubscribe(l))}),l},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var o=this;return new(e=d(e))(function(e,i){var s=new r.Ms({next:function(e){try{t(e)}catch(t){i(t),s.unsubscribe()}},error:i,complete:e});o.subscribe(s)})},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[s.s]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0,n.m)(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=d(t))(function(t,o){var r;e.subscribe(function(t){return r=t},function(t){return o(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function d(t){var e;return null!==(e=null!=t?t:l.$.Promise)&&void 0!==e?e:Promise}},61867:(t,e,o)=>{"use strict";o.d(e,{m:()=>i});var r=o(14460);function i(t){return t&&(0,r.T)(t.schedule)}},62508:(t,e,o)=>{"use strict";function r(){}o.d(e,{l:()=>r})},62731:(t,e,o)=>{"use strict";o.d(e,{V:()=>i});var r=o(61824);function i(t,e){return new r.c(function(o){var r=0;return e.schedule(function(){r===t.length?o.complete():(o.next(t[r++]),o.closed||this.schedule())})})}},63404:(t,e,o)=>{"use strict";o.d(e,{m:()=>i});var r=o(24254);function i(t){return 0===t.length?r.D:1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}}},64340:(t,e,o)=>{var r=o(27773);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},64904:(t,e,o)=>{"use strict";function r(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}o.d(e,{L:()=>r})},64991:(t,e,o)=>{"use strict";o.d(e,{f:()=>i});var r=o(85608),i={setInterval:function(t,e){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var n=i.delegate;return(null==n?void 0:n.setInterval)?n.setInterval.apply(n,(0,r.fX)([t,e],(0,r.zs)(o))):setInterval.apply(void 0,(0,r.fX)([t,e],(0,r.zs)(o)))},clearInterval:function(t){var e=i.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0}},65560:(t,e,o)=>{"use strict";o.d(e,{Y:()=>r});const r=o(93811).css`
  .container {
    overflow: hidden;
  }

  .section-entry {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 14px 16px;
    column-gap: 16px;
  }
  .section-entry:hover {
    background: var(--wh-bg-base-hover);
  }
  .section-title {
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .section-description {
    font-size: 11.5px;
    font-weight: 400;
    color: var(--wh-text-lighter);
    display: block;
    margin-bottom: 8px;
    max-width: 440px;
    line-height: 1.2;
  }
  .section-subtitle {
    font-size: 12px;
    font-weight: 400;
    color: var(--wh-text-lighter);
    display: block;
    margin-bottom: 8px;
    margin-bottom: 16px;
  }

  .section-button {
    border: none;
    cursor: pointer;
    background-color: var(--wh-bg-back);
    color: var(--wh-text-light);
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
    border: 1px solid var(--wh-border-base-strong);
    text-decoration: none;
    font-size: 14px;
    min-width: 100px;
    text-align: center;
  }

  .section-button:hover {
    background-color: var(--wh-bg-back-strong-hover);
    color: var(--wh-text);
  }

  .section-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  hr.settings-divider {
    border: 0.1px solid var(--wh-border-base);
    margin: 8px 0;
    outline: none;
    background: none;
  }

  .section-entry-container {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .section-info-label {
    border: none;
    background-color: var(--wh-bg-base);
    color: var(--wh-text-light);
    border-radius: 8px;
    padding: 4px 12px;
    transition: 0.1s all ease-in-out;
    border: 0.8px solid var(--wh-border-base);
    text-decoration: none;
    font-size: 14px;
    padding: 4px 12px;
    cursor: default;
  }

  .settings-link-btn {
    color: var(--wh-link-color);
    font-weight: 600;
    line-height: 2;
  }
  .settings-link-btn:hover {
    color: var(--wh-text-strong);
  }
`},67083:(t,e,o)=>{"use strict";o.d(e,{x:()=>n});var r=o(52348),i=o(25361),s=o(35315);function n(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0,r.K)()((0,s.H)(t,(0,i.lI)(t)))}},67533:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(672),c=o(68250),h=o.n(c),d=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const p=r.SHARED_COMPONENTS_INTERNAL.BackupImport,u=p.TAG;class g extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Tag.TAG,r.SHARED_COMPONENTS.Loading.TAG],this.backupExportResponse=null,this.fileLoading=!1,this.loading=!1}deleteSelectedFile(){this.backupExportResponse=null,this.fileInputElement.value=""}get exportedDataInfo(){var t,e,o,r;return`${null===(e=null===(t=this.backupExportResponse)||void 0===t?void 0:t.marks)||void 0===e?void 0:e.length} Highlights on ${null===(r=null===(o=this.backupExportResponse)||void 0===o?void 0:o.bookmarks)||void 0===r?void 0:r.length} Pages`}get httpFacade(){return(0,r.useContext)().httpFacade}onChooseFileClick(){const t=this.fileInputElement;t?t.click():(0,r.showSomethingWentWrong)()}onFileUpload(t){this.fileLoading=!0;const e=t.target,o=e.files&&e.files[0];if(o&&"application/json"===o.type){this.deleteSelectedFile();const t=new FileReader;t.onload=t=>{var e;try{const o=JSON.parse(null===(e=t.target)||void 0===e?void 0:e.result);if(!(0,r.backupExportResponseIsValid)(o))throw Error("Invalid data");this.backupExportResponse=o}catch(t){this.deleteSelectedFile(),(0,r.showInvalidBackupFileError)()}finally{this.fileLoading=!1}},t.readAsText(o)}else(0,r.showInvalidBackupFileError)(),this.fileLoading=!1}backupImport(){return t=this,e=void 0,i=function*(){var t,e,o;if(confirm(`ATTENTION: This can not be undone! All your current Highlights & Bookmarks will be overwritten. Do you really want to import ${this.exportedDataInfo} from the file?`)){this.loading=!0;try{if((0,r.backupExportResponseIsValid)(this.backupExportResponse)){const i=yield r.chromeJwtService.isLoggedIn();if(i){const i=((null===(t=this.backupExportResponse)||void 0===t?void 0:t.pagecontents)||[]).map(t=>Object.assign(Object.assign({},t),{content:void 0})),s=null===(o=null===(e=this.backupExportResponse)||void 0===e?void 0:e.pagecontents)||void 0===o?void 0:o.filter(t=>!!t.content);yield this.httpFacade.backupImport(Object.assign(Object.assign({},this.backupExportResponse),{pagecontents:i})),(null==s?void 0:s.length)&&(yield(0,r.useContext)().db.createOrUpdateEntities({entities:s.map(t=>Object.assign(Object.assign({},t),{updatedAt:Date.now()})),objectStoreName:r.ObjectStoreNameSyncable.pagecontents}),yield(0,r.useContext)().chromeSyncService.executeSyncPromise())}i||(yield(0,r.useContext)().db.importBackupData(this.backupExportResponse)),location.reload()}else(0,r.showInvalidBackupFileError)()}catch(t){(0,r.isPaymentRequiredError)(t)||(0,r.showSomethingWentWrong)()}finally{this.loading=!1}}},new((o=void 0)||(o=Promise))(function(r,s){function n(t){try{a(i.next(t))}catch(t){s(t)}}function l(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((i=i.apply(t,e||[])).next())});var t,e,o,i}render(){return i.html` <div class="backup-import-container">
      <div>
        <input
          type="file"
          id="fileInputElement"
          style="display: none"
          data-testid="${p.TEST_IDS.FILE_INPUT}"
          @change="${this.onFileUpload}"
        />
        ${this.backupExportResponse?i.html`<webhighlights-tag
              .removable=${!0}
              @removed=${this.deleteSelectedFile}
              .tag=${this.exportedDataInfo}
              data-testid=${p.TEST_IDS.UPLOADED_BACKUP_FILE_INFO}
              >${this.exportedDataInfo}</webhighlights-tag
            >`:i.html``}
        ${this.fileLoading||this.backupExportResponse?i.html``:i.html`
              <button
                class="section-button"
                data-testid="${p.TEST_IDS.CHOOSE_FILE_BTN}"
                @click="${this.onChooseFileClick}"
              >
                <span>Choose File</span>
              </button>
            `}
        ${this.fileLoading?i.html` <webhighlights-loading></webhighlights-loading> `:i.html``}
      </div>
      <div class="backup-import-btn-container">
        ${this.loading?i.html` <webhighlights-loading></webhighlights-loading> `:i.html`
              <button
                class="section-button"
                data-testid="${p.TEST_IDS.IMPORT_BTN}"
                ?disabled="${!this.backupExportResponse}"
                @click="${this.backupImport}"
              >
                <span>Import</span>
              </button>
            `}
      </div>
    </div>`}}g.styles=i.css`
    ${a.r}
    ${l.Y}
    ${(0,i.unsafeCSS)(h())}
  `,d([(0,s.state)()],g.prototype,"backupExportResponse",void 0),d([(0,s.state)()],g.prototype,"fileLoading",void 0),d([(0,s.state)()],g.prototype,"loading",void 0),d([(0,s.query)("#fileInputElement")],g.prototype,"fileInputElement",void 0),n.y.define(u,g)},68001:(t,e,o)=>{"use strict";o.d(e,{h:()=>n});var r=o(46195),i=o(54184),s=o(869);function n(t,e,o,n,l,a,c,h){var d=[],p=0,u=0,g=!1,b=function(){!g||d.length||p||e.complete()},f=function(t){return p<n?v(t):d.push(t)},v=function(t){a&&e.next(t),p++;var h=!1;(0,r.Tg)(o(t,u++)).subscribe((0,s._)(e,function(t){null==l||l(t),a?f(t):e.next(t)},function(){h=!0},void 0,function(){if(h)try{p--;for(var t=function(){var t=d.shift();c?(0,i.N)(e,c,function(){return v(t)}):v(t)};d.length&&p<n;)t();b()}catch(t){e.error(t)}}))};return t.subscribe((0,s._)(e,f,function(){g=!0,b()})),function(){null==h||h()}}},68250:(t,e,o)=>{var r=o(3945);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},68465:(t,e,o)=>{var r=o(95928);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},70924:(t,e,o)=>{var r=o(75909);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},71868:(t,e,o)=>{"use strict";o.d(e,{Kn:()=>a,Uv:()=>c,yU:()=>l});var r=o(85608),i=o(14460),s=o(10402),n=o(21601),l=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,o,n,l;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var c=(0,r.Ju)(a),d=c.next();!d.done;d=c.next())d.value.remove(this)}catch(e){t={error:e}}finally{try{d&&!d.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if((0,i.T)(p))try{p()}catch(t){l=t instanceof s.Z?t.errors:[t]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var g=(0,r.Ju)(u),b=g.next();!b.done;b=g.next()){var f=b.value;try{h(f)}catch(t){l=null!=l?l:[],t instanceof s.Z?l=(0,r.fX)((0,r.fX)([],(0,r.zs)(l)),(0,r.zs)(t.errors)):l.push(t)}}}catch(t){o={error:t}}finally{try{b&&!b.done&&(n=g.return)&&n.call(g)}finally{if(o)throw o.error}}}if(l)throw new s.Z(l)}},t.prototype.add=function(e){var o;if(e&&e!==this)if(this.closed)h(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(o=this._finalizers)&&void 0!==o?o:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&(0,n.o)(e,t)},t.prototype.remove=function(e){var o=this._finalizers;o&&(0,n.o)(o,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),a=l.EMPTY;function c(t){return t instanceof l||t&&"closed"in t&&(0,i.T)(t.remove)&&(0,i.T)(t.add)&&(0,i.T)(t.unsubscribe)}function h(t){(0,i.T)(t)?t():t.unsubscribe()}},71882:(t,e,o)=>{"use strict";o.d(e,{f:()=>a});var r=o(93811),i=o(99986),s=o.n(i),n=o(17826),l=o.n(n);const a=[r.css`
    ${(0,r.unsafeCSS)(l())}
  `,r.css`
    ${(0,r.unsafeCSS)(s())}
  `]},73764:(t,e,o)=>{"use strict";o.d(e,{J:()=>r.J});var r=o(31006)},74956:(t,e,o)=>{"use strict";o.d(e,{T:()=>i});var r=o(14460);function i(t){return Symbol.asyncIterator&&(0,r.T)(null==t?void 0:t[Symbol.asyncIterator])}},75909:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}:host{display:block;font-size:16px;font-family:var(--wh-font-family);color:var(--wh-text);box-sizing:border-box}.active{background-color:var(--wh-primary-500)}.error-container{display:block}.error-alert{display:block;margin:0 0 20px 0}.error-alert::part(message){color:var(--wh-text-light)}.integrate-btn{display:block;width:-moz-fit-content;width:fit-content}.external-link{font-size:14px;color:var(--wh-blue-500);text-decoration:none;display:block;font-weight:500;margin-top:12px}.external-link:hover{color:var(--wh-blue-600);text-decoration:underline}.page-selector{margin:8px 0}.page-selector sl-option::part(base){--sl-color-neutral-700: var(--wh-text);--sl-color-neutral-100: var(--wh-bg-back-strong);--sl-color-neutral-1000: var(--wh-text-strong);--sl-color-primary-600: var(--wh-bg-back-strong-hover);color:var(--wh-text)}.active-integration-card{padding:8px 16px;border-radius:4px;border:1px solid var(--wh-border-base-strong);background:var(--wh-bg-back);color:var(--wh-text);text-decoration:none;display:block;max-width:100%;position:relative}.active-integration-card:hover{background:var(--wh-bg-back-hover)}.active-integration-card header{display:flex;width:100%;justify-content:flex-end;box-sizing:border-box;position:absolute;right:8px;top:8px;gap:8px}.active-integration-card header .active-icon{color:var(--wh-green-500)}.active-integration-card header .active-icon::part(icon){fill:var(--wh-green-500)}.active-integration-card header button{background:none;border:none;color:var(--wh-text-light);cursor:pointer;padding:0}.active-integration-card header button:hover{color:var(--wh-text)}.active-integration-card main{padding-top:8px}.active-integration-card footer{padding-top:2px;padding-bottom:8px}.active-integration-card footer .url-info{color:var(--wh-text-lighter);max-width:200px;overflow:hidden;text-overflow:ellipsis;display:inline-block;font-size:10px;white-space:nowrap}.grant-page-access-alert{margin:0 0 20px 0}.grant-page-access-alert::part(message){color:var(--wh-text)}",""]);const l=n},76127:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,':host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;width:100vw;height:100vh;max-height:100vh;background:var(--wh-bg-base);color:var(--wh-text)}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}@media(min-width: 481px){:host{max-width:90vw;max-height:calc(90vh - 0px);max-height:calc(90vh - var(--wh-dialog-header-height, 0px));width:1020px;height:715px}}@media(max-width: 480px){.mobile-closed{display:none !important}}.container{height:100%;display:flex;width:100%;box-sizing:border-box}.active-settings-view{padding:8px;box-sizing:border-box;flex:1 auto;overflow-y:auto}@media(min-width: 600px){.active-settings-view::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.active-settings-view::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.active-settings-view::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}@media(min-width: 481px){.active-settings-view{padding:16px}}.active-settings-view-header{display:flex;align-items:center;-moz-column-gap:8px;column-gap:8px}@media(min-width: 481px){.active-settings-view-header{display:none}}.settings-views-sidebar{height:100%;border-right:1px solid var(--wh-border-base);min-width:220px;overflow-y:auto}@media(min-width: 600px){.settings-views-sidebar::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}.settings-views-sidebar::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}.settings-views-sidebar::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}@media(max-width: 480px){.settings-views-sidebar.mobile-open{width:100%}}.account-info{width:100%;padding:8px;box-sizing:border-box;display:block;padding:12px 14px}.settings-view-btns{margin-top:16px}.settings-view-btn{padding:8px 16px;border:none;background:none;cursor:pointer;width:100%;display:flex;align-items:center;-moz-column-gap:8px;column-gap:8px;font-size:13px;color:var(--wh-text-lighter);fill:var(--wh-text-lighter);transition:.1s all ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.settings-view-btn:hover,.settings-view-btn.active{background-color:var(--wh-bg-base-hover-strong);color:var(--wh-text-light);fill:var(--wh-text-light)}.active-settings-title{display:flex;align-items:center;font-size:14px;-moz-column-gap:12px;column-gap:12px}.mobile-back-btn{border:none;background:none;cursor:pointer;padding:8px}.mobile-back-btn .icon{transform:rotate(180deg);color:var(--wh-text);fill:var(--wh-text)}.auth::part(auth-section-outer){padding:0}.auth::part(header){display:none}.auth::part(footer){margin:0}',""]);const l=n},77143:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}.header{width:100%}.section-entry:hover{background:var(--wh-bg-base)}.integrations-container{width:100%;display:flex;flex-wrap:wrap;gap:8px}.section-title{margin-bottom:16px}',""]);const l=n},77814:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=(o(30371),o(67533),o(39113)),c=o.n(a);const h=r.SHARED_COMPONENTS_INTERNAL.SettingsBackup.TAG;class d extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.UpgradeNeeded.TAG]}render(){var t;return(0,r.userCan)("backup",null!==(t=this.props.jwtPayload)&&void 0!==t?t:null)?i.html` <div class="container" part="container">
      <section class="section-entry">
        <header>
          <h3 class="section-title">Export</h3>
          <span class="section-description"
            >Export your highlights, notes, and bookmarks to a local file.</span
          >
        </header>

        <webhighlights-backup-export-btn></webhighlights-backup-export-btn>
      </section>

      <hr class="settings-divider" />
      <section class="section-entry">
        <header>
          <h3 class="section-title">Import</h3>
          <span class="section-description"
            >Import highlights, notes, and bookmarks from a local file.</span
          >
        </header>

        <webhighlights-backup-import></webhighlights-backup-import>
      </section>
    </div>`:i.html`<section>
        <webhighlights-upgrade-needed
          .props=${{showLogo:!1,hideExpiryInfo:!0}}
        ></webhighlights-upgrade-needed>
      </section>`}}d.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,s.property)()],d.prototype,"props",void 0),n.y.define(h,d)},78154:(t,e,o)=>{"use strict";o.d(e,{U:()=>r});var r={now:function(){return(r.delegate||Date).now()},delegate:void 0}},79097:(t,e,o)=>{"use strict";o.d(e,{B:()=>c});var r=o(85608),i=o(61824),s=o(71868),n=o(28032),l=o(21601),a=o(7861),c=function(t){function e(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return(0,r.C6)(e,t),e.prototype.lift=function(t){var e=new h(this,this);return e.operator=t,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new n.P},e.prototype.next=function(t){var e=this;(0,a.Y)(function(){var o,i;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var s=(0,r.Ju)(e.currentObservers),n=s.next();!n.done;n=s.next())n.value.next(t)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var e=this;(0,a.Y)(function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var o=e.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;(0,a.Y)(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var e=this,o=this,r=o.hasError,i=o.isStopped,n=o.observers;return r||i?s.Kn:(this.currentObservers=null,n.push(t),new s.yU(function(){e.currentObservers=null,(0,l.o)(n,t)}))},e.prototype._checkFinalizedStatuses=function(t){var e=this,o=e.hasError,r=e.thrownError,i=e.isStopped;o?t.error(r):i&&t.complete()},e.prototype.asObservable=function(){var t=new i.c;return t.source=this,t},e.create=function(t,e){return new h(t,e)},e}(i.c),h=function(t){function e(e,o){var r=t.call(this)||this;return r.destination=e,r.source=o,r}return(0,r.C6)(e,t),e.prototype.next=function(t){var e,o;null===(o=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===o||o.call(e,t)},e.prototype.error=function(t){var e,o;null===(o=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===o||o.call(e,t)},e.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},e.prototype._subscribe=function(t){var e,o;return null!==(o=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==o?o:s.Kn},e}(c)},80181:(t,e,o)=>{"use strict";o.d(e,{s6:()=>I});const r=globalThis,i=r.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,n="$lit$",l=`lit$${Math.random().toFixed(9).slice(2)}$`,a="?"+l,c=`<${a}>`,h=document,d=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,g="[ \t\n\f\r]",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,v=/>/g,m=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,y=/"/g,x=/^(?:script|style|textarea|title)$/i,k=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),S=(k(1),k(2),k(3),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),E=new WeakMap,_=h.createTreeWalker(h,129);function T(t,e){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const N=(t,e)=>{const o=t.length-1,r=[];let i,s=2===e?"<svg>":3===e?"<math>":"",a=b;for(let e=0;e<o;e++){const o=t[e];let h,d,p=-1,u=0;for(;u<o.length&&(a.lastIndex=u,d=a.exec(o),null!==d);)u=a.lastIndex,a===b?"!--"===d[1]?a=f:void 0!==d[1]?a=v:void 0!==d[2]?(x.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=m):void 0!==d[3]&&(a=m):a===m?">"===d[0]?(a=i??b,p=-1):void 0===d[1]?p=-2:(p=a.lastIndex-d[2].length,h=d[1],a=void 0===d[3]?m:'"'===d[3]?y:w):a===y||a===w?a=m:a===f||a===v?a=b:(a=m,i=void 0);const g=a===m&&t[e+1].startsWith("/>")?" ":"";s+=a===b?o+c:p>=0?(r.push(h),o.slice(0,p)+n+o.slice(p)+l+g):o+l+(-2===p?e:g)}return[T(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class A{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,c=0;const h=t.length-1,p=this.parts,[u,g]=N(t,e);if(this.el=A.createElement(u,o),_.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=_.nextNode())&&p.length<h;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(n)){const e=g[c++],o=r.getAttribute(t).split(l),i=/([.?@])?(.*)/.exec(e);p.push({type:1,index:s,name:i[2],strings:o,ctor:"."===i[1]?R:"?"===i[1]?D:"@"===i[1]?M:P}),r.removeAttribute(t)}else t.startsWith(l)&&(p.push({type:6,index:s}),r.removeAttribute(t));if(x.test(r.tagName)){const t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=i?i.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],d()),_.nextNode(),p.push({type:2,index:++s});r.append(t[e],d())}}}else if(8===r.nodeType)if(r.data===a)p.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)p.push({type:7,index:s}),t+=l.length-1}s++}}static createElement(t,e){const o=h.createElement("template");return o.innerHTML=t,o}}function $(t,e,o=t,r){if(e===S)return e;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const s=p(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(e=$(t,i._$AS(t,e.values),i,r)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??h).importNode(e,!0);_.currentNode=r;let i=_.nextNode(),s=0,n=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new C(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new z(i,this,t)),this._$AV.push(e),l=o[++n]}s!==l?.index&&(i=_.nextNode(),s++)}return _.currentNode=h,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=$(this,t,e),p(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>u(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==I&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=A.createElement(T(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new O(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new A(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new C(this.O(d()),this.O(d()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class P{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(t,e=this,o,r){const i=this.strings;let s=!1;if(void 0===i)t=$(this,t,e,0),s=!p(t)||t!==this._$AH&&t!==S,s&&(this._$AH=t);else{const r=t;let n,l;for(t=i[0],n=0;n<i.length-1;n++)l=$(this,r[o+n],e,n),l===S&&(l=this._$AH[n]),s||=!p(l)||l!==this._$AH[n],l===I?t=I:t!==I&&(t+=(l??"")+i[n+1]),this._$AH[n]=l}s&&!r&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class R extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}class D extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==I)}}class M extends P{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=$(this,t,e,0)??I)===S)return;const o=this._$AH,r=t===I&&o!==I||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==I&&(o===I||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){$(this,t)}}const L=r.litHtmlPolyfillSupport;L?.(A,C),(r.litHtmlVersions??=[]).push("3.3.1")},85608:(t,e,o)=>{"use strict";o.d(e,{AQ:()=>d,C6:()=>i,Ju:()=>l,N3:()=>h,YH:()=>n,fX:()=>c,sH:()=>s,xN:()=>p,zs:()=>a});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}function s(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})}function n(t,e){var o,r,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},n=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return n.next=l(0),n.throw=l(1),n.return=l(2),"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(l){return function(a){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;n&&(n=0,l[0]&&(s=0)),s;)try{if(o=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,r=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){s=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){s.label=l[1];break}if(6===l[0]&&s.label<i[1]){s.label=i[1],i=l;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(l);break}i[2]&&s.ops.pop(),s.trys.pop();continue}l=e.call(t,s)}catch(t){l=[6,t],r=0}finally{o=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}}function l(t){var e="function"==typeof Symbol&&Symbol.iterator,o=e&&t[e],r=0;if(o)return o.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,i,s=o.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)n.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}return n}function c(t,e,o){if(o||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function h(t){return this instanceof h?(this.v=t,this):new h(t)}function d(t,e,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=o.apply(t,e||[]),s=[];return r=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),n("next"),n("throw"),n("return",function(t){return function(e){return Promise.resolve(e).then(t,c)}}),r[Symbol.asyncIterator]=function(){return this},r;function n(t,e){i[t]&&(r[t]=function(e){return new Promise(function(o,r){s.push([t,e,o,r])>1||l(t,e)})},e&&(r[t]=e(r[t])))}function l(t,e){try{(o=i[t](e)).value instanceof h?Promise.resolve(o.value.v).then(a,c):d(s[0][2],o)}catch(t){d(s[0][3],t)}var o}function a(t){l("next",t)}function c(t){l("throw",t)}function d(t,e){t(e),s.shift(),s.length&&l(s[0][0],s[0][1])}}function p(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=t[Symbol.asyncIterator];return o?o.call(t):(t=l(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(e){return new Promise(function(r,i){!function(t,e,o,r){Promise.resolve(r).then(function(e){t({value:e,done:o})},e)}(r,i,(e=t[o](e)).done,e.value)})}}}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},85833:(t,e,o)=>{"use strict";o.d(e,{B:()=>n});var r=o(24611),i=o(22185),s=o(869);function n(t,e){return void 0===e&&(e=r.E),(0,i.N)(function(o,r){var i=null,n=null,l=null,a=function(){if(i){i.unsubscribe(),i=null;var t=n;n=null,r.next(t)}};function c(){var o=l+t,s=e.now();if(s<o)return i=this.schedule(void 0,o-s),void r.add(i);a()}o.subscribe((0,s._)(r,function(o){n=o,l=e.now(),i||(i=e.schedule(c,t),r.add(i))},function(){a(),r.complete()},void 0,function(){n=i=null}))})}},87532:(t,e,o)=>{var r=o(77143);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},90342:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(68465),a=o.n(l);r.SHARED_COMPONENTS_INTERNAL.SettingsDocuments;class c extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.ToggleButton.TAG,r.SHARED_COMPONENTS.DocumentsList.TAG]}render(){return i.html`<div part="container">
      <webhighlights-documents-list></webhighlights-documents-list>
    </div>`}}c.styles=i.css`
    ${(0,i.unsafeCSS)(a())}
  `,function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)}([(0,s.property)({type:Object})],c.prototype,"props",void 0),n.y.define("webhighlights-settings-documents",c)},90696:(t,e,o)=>{"use strict";o.d(e,{P:()=>h});var r=o(38085),i=o(93811);const s={type:r.FileImportType.WEAVA,fileFormat:"text/csv",fileExtension:"csv",title:"Weava",description:"Import your highlights & bookmarks from the Weava Chrome Extension"},n={type:r.FileImportType.POCKET,fileFormat:"text/csv",fileExtension:"csv",title:"Pocket",description:"Upload the .csv export file from Pocket to import all of your saved pages."},l={type:r.FileImportType.POCKET,fileFormat:"application/json",fileExtension:"json",title:"Pocket",description:"Upload the .json export file from Pocket to import your annotations and add them to your saved pages."},a={type:r.FileImportType.BROWSER_BOOKMARKS,fileFormat:"text/html",fileExtension:"html",title:"Bookmarks Import",description:"Bring all your existing browser bookmarks into Web Highlights to organize them alongside your highlights and notes."},c={type:r.FileImportType.DIIGO,fileFormat:"text/csv",fileExtension:"csv",title:"Diigo",description:"Upload the .csv export file from Diigo to import your highlights and add them to your saved pages."};function h(t){var e,o;const h=(null===(e=(0,r.useContextWithCatch)())||void 0===e?void 0:e.environment.FRONTEND_URL)||r.productionEnvironment.FRONTEND_URL,d={MOBILE_SAVE_BOOKMARK:{id:r.INTEGRATION_IDS.MOBILE_SAVE_BOOKMARK,title:"Mobile phone",type:"import",whatItCanDo:"Easily save pages as bookmarks by sharing them directly from your smartphone.",whatItCanDoLong:"Save web pages effortlessly using your phone's 'Share' feature. The Web Highlights App integration makes it simple, streamlining the process to help you easily organize your online findings.",image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.smartphone}"
        size="24"
        strokeWidth="1"
      ></webhighlights-icon>`,howItWorksSteps:[{title:"Get the web app on your phone",description:i.html`First, go to your phone's browser and launch the
            <a
              href="${(null===(o=(0,r.useContextWithCatch)())||void 0===o?void 0:o.environment.FRONTEND_URL)||r.productionEnvironment.FRONTEND_URL}"
              target="_blank"
              >Web Highlights App</a
            >. Then, in your browser settings, find the option to install the
            app. Simply scroll down and tap on <b>Install app</b>. Confirm by
            tapping <b>Add</b>.`},{title:"Visit any website and share it",description:i.html`Choose any website you'd like to save and open it in
          your phone's browser. Navigate to your browser settings and look for
          the 'Share' icon. Click on it to share the webpage. Among the options,
          find the Web Highlights app in the share apps and select it.`,image:{url:"https://email.web-highlights.com/uploads/save-page-from-mobile.jpeg",alt:"Save page from phone",width:"200"}},{title:"Organize with tags",description:i.html`Congratulations! You've successfully bookmarked a
          page on your phone. Now, make it easier to find later by adding tags.
          For instance, you can create a tag like 'Reading List' to group all
          the websites you plan to read in the future.`}]},MARKDOWN_EXPORT:{id:r.INTEGRATION_IDS.MARKDOWN_EXPORT,type:"export",title:"Markdown Export",learnMoreLink:"https://web-highlights.com/blog/how-to-export-your-research-to-obsidian-with-web-highlights/",whatItCanDo:"Effortlessly send your highlights, notes, and tags to Obsidian, Notion, Capacities, and more using the copy to markdown feature.",image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES["copy-file"]}"
        size="24"
      ></webhighlights-icon>`,howItWorksSteps:[{title:"Copy highlights & notes to markdown",description:i.html`First, you can go to any highlighted page either
            from the
            <a href="${h}">web app</a>
            or the extension. Then click the three dots in the top right corner
            and select '<b>Copy Markdown</b>'.`,image:{url:`${h}/images/copy-to-markdown.png`,alt:"How to copy to markdown",width:"340"}},{title:"Paste your Markdown",description:i.html` Then, go
            <a
              href="https://notion.so?ref=${r.productionEnvironment.FRONTEND_URL}"
              target="_blank"
              rel="nofollow"
              >Notion</a
            >,
            <a
              href="https://obsidian.md?ref=${r.productionEnvironment.FRONTEND_URL}"
              target="_blank"
              rel="nofollow"
              >Obsidian</a
            >,
            <a
              href="https://app.capacities.io?ref=${r.productionEnvironment.FRONTEND_URL}"
              target="_blank"
              rel="nofollow"
              >Capacities</a
            >, or any other service and paste the markdown to the page. Once
            you've pasted the content onto the page, you should see your
            highlights, notes, and tags. If your highlighted page has a banner
            image, that should be visible as well.`}]},NOTION_EXPORT:{id:r.INTEGRATION_IDS.NOTION_EXPORT,type:"export",title:"Notion Export",learnMoreLink:"https://web-highlights.com/blog/how-to-export-highlights-to-notion-with-one-click/",whatItCanDo:"Seamlessly connect Web Highlights to Notion and export pages and highlights directly to your workspace.",image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.notion}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-notion-api-integration></webhighlights-notion-api-integration>`,howItWorksSteps:[{title:"Connect to Notion",description:"Click the button above to allow access to Notion. You will be redirected to Notion to grant permission. This step is necessary to enable direct sending of your highlights and notes to Notion."},{title:"Allow access to at least one Notion page",description:"Once you click on 'Integrate with Notion', you will be redirected to Notion where you need to grant access to at least one of your Notion pages. Select one of your pages and click 'Allow access'."},{title:"Select a Page",description:"Once connected, you can select from the pages you granted access to. This is where your highlights will be stored. Choose the desired page, and it will appear above.",image:{url:"https://email.web-highlights.com/uploads/select-notion-page.png",alt:"Select Notion page",width:"480"}},{title:"Send to Notion",description:i.html`Navigate to any highlighted page and click the three
          dots in the sidebar. Select "Export to Notion." Within a few seconds,
          your Notion page will be created.`,image:{url:"https://email.web-highlights.com/uploads/send-to-notion.png",alt:"Send to Notion",width:"340"}},{title:"Open in Notion",description:i.html`Once the page is created, an "Open in Notion" button
          will appear on your highlighted page. Click this button to directly
          open the Notion page in your browser.`,image:{url:"https://email.web-highlights.com/uploads/open-in-notion.png",alt:"Open in Notion",width:"480"}}]},CAPACITIES_EXPORT:{id:r.INTEGRATION_IDS.CAPACITIES_EXPORT,type:"export",title:"Capacities Export",learnMoreLink:"https://web-highlights.com/blog/how-to-export-your-research-to-capacities-with-web-highlights/",whatItCanDo:"Seamlessly connect Web Highlights to Capacities and export pages and highlights directly to your Capacity space.",image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.capacities}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-capacities-api-integration></webhighlights-capacities-api-integration>`,howItWorksSteps:[{title:"Add Capacities API Token",description:i.html`You can obtain an access token in the Capatities app
          at Settings > Capacities API. The access token allows access to all
          your data. Do not share it with anyone you don't trust.`},{title:"Select Space",description:i.html`Once connected, you can select the Capacity space
          where your weblinks and highlights will be stored. Choose the desired
          space, and it will appear above.`,image:{url:"https://email.web-highlights.com/uploads/select-capacities-space.png",alt:"Select Notion page",width:"480"}},{title:"Send to Capacities",description:i.html`Navigate to any highlighted page and click the three
          dots in the sidebar. Select "Export to Capacities." Within a few
          seconds, your Capacities weblink will be created.`,image:{url:"https://email.web-highlights.com/uploads/send-to-capacities.png",alt:"Send to Capacities",width:"340"}},{title:"Open in Capacities",description:i.html`Once the weblink is created, an "Open in Capacities"
          button will appear on your highlighted page. Click this button to
          directly open the Capacity weblink in your browser.`,image:{url:"https://email.web-highlights.com/uploads/open-in-capacities.png",alt:"Open in Notion",width:"480"}}]},WEAVA_IMPORT:{id:r.INTEGRATION_IDS.WEAVA_IMPORT,type:"export",title:r.INTEGRATION_LABEL_MAP.WEAVA_IMPORT,learnMoreLink:"https://web-highlights.com/blog/import-research-from-weava-highlighter-to-web-highlights",whatItCanDo:"Import your highlights & bookmarks from the Weava Chrome Extension",image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.weava}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-file-import
        .fileImportType="${s}"
      ></webhighlights-file-import>`,howItWorksSteps:[{title:"Export Weava CSV File",description:i.html`Visit the Weava dashboard and export your highlights
          to a .csv file and save it to your computer.`,image:{url:"https://email.web-highlights.com/uploads/weava-export.png",alt:"Export a Weava CSV File",width:"700"}},{title:"Upload .CSV File To Web Highlights",description:i.html`Click 'Upload Weava CSV File' and select the
          exported Weava .csv file.`},{title:"Import your Weava Research",description:i.html`If you've uploaded the right Weava CSV file, you'll
          see a button to import your highlights and pages. Click it, and Web
          Highlights will import your Weava research.`}]},POCKET_IMPORT_CSV:{id:r.INTEGRATION_IDS.POCKET_IMPORT_CSV,type:"export",title:r.INTEGRATION_LABEL_MAP.POCKET_IMPORT_CSV,learnMoreLink:"https://web-highlights.com/blog/how-to-export-pocket-saves-and-import-to-webhighlights",whatItCanDo:n.description,image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.pocket}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-file-import
        .fileImportType="${n}"
      ></webhighlights-file-import> `,howItWorksSteps:[{title:"Export Pocket CSV File",description:i.html`Visit the Pocket export at
            <a
              href="https://getpocket.com/export"
              target="_blank"
              rel="nofollow"
              >https://getpocket.com/export</a
            >. Click "Export CSV file" and wait for an email from Pocket. Then
            extract the pocket.zip file.`},{title:"Upload .CSV File To Web Highlights",description:i.html`Click 'Upload Pocket CSV File' and select the
          exported Pocket .csv file.`},{title:"Import your Pocket Research",description:i.html`If you've uploaded the right Pocket CSV file, you'll
          see a button to import your highlights and pages. Click it, and Web
          Highlights will import your Pocket research.`}]},POCKET_IMPORT_JSON:{id:r.INTEGRATION_IDS.POCKET_IMPORT_JSON,type:"export",title:r.INTEGRATION_LABEL_MAP.POCKET_IMPORT_JSON,learnMoreLink:"https://web-highlights.com/blog/how-to-export-pocket-saves-and-import-to-webhighlights",whatItCanDo:l.description,image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.pocket}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-file-import
        .fileImportType="${l}"
      ></webhighlights-file-import> `,howItWorksSteps:[{title:"Export Pocket JSON File",description:i.html`Visit the Pocket export at
            <a
              href="https://getpocket.com/export"
              rel="nofollow"
              target="_blank"
              >https://getpocket.com/export</a
            >. Click "Export CSV file" and wait for an email from Pocket. Then
            extract the pocket.zip file. If you made annotations, your zipped
            folder will contain a json file with the annotations. If you didn't
            make any annotations, you can just use the csv file and choose the
            other Pocket Import option for .csv files.`},{title:"Upload .JSON File To Web Highlights",description:i.html`Click 'Upload Pocket JSON File' and select the
          exported Pocket .json file.`},{title:"Import your Pocket Research",description:i.html`If you've uploaded the right Pocket JSON file,
          you'll see a button to import your highlights and pages. Click it, and
          Web Highlights will import your Pocket annotations and adds them to
          your saved pages.`}]},BOOKMARK_IMPORT_CHROME:{id:r.INTEGRATION_IDS.BOOKMARK_IMPORT_CHROME,type:"export",title:r.INTEGRATION_LABEL_MAP.BOOKMARK_IMPORT_CHROME,learnMoreLink:"https://web-highlights.com/blog/how-to-export-bookmarks-and-import-to-web-highlights",whatItCanDo:a.description,image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.bookmark}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-file-import
        .fileImportType="${a}"
      ></webhighlights-file-import> `,howItWorksSteps:[{title:"Export bookmarks to .html file",description:i.html`Every browser allows you to export your bookmarks to
            a .html file. Check out the guide for your browser below:
            <ul style="margin-top: 8px;">
              ${r.tutorialBrowsers.map(t=>{var e;return i.html`<li style="margin-bottom: 4px;">
                    <a
                      href="${(null===(e=(0,r.useContextWithCatch)())||void 0===e?void 0:e.environment.WEBSITE_URL)||r.productionEnvironment.WEBSITE_URL}/tutorials/browser/${t.type}/how-to-export-bookmarks"
                      target="_blank"
                      >Export ${t.name} Bookmarks</a
                    >
                  </li>`})}
            </ul> `},{title:"Upload .html file to Web Highlights",description:i.html`Click 'Upload bookmarks File' and select the .html
          file you exported from your browser.`},{title:"Import your bookmarks",description:i.html`Once you've uploaded the correct .html file, you'll
          see a button to import your bookmarks. Click it to complete the
          import.`}]},DIIGO_IMPORT:{id:r.INTEGRATION_IDS.DIIGO_IMPORT,type:"export",title:r.INTEGRATION_LABEL_MAP.DIIGO_IMPORT,learnMoreLink:"https://web-highlights.com/blog/how-to-import-highlights-from-diigo-into-web-highlights",whatItCanDo:c.description,image:i.html`<webhighlights-icon
        icon="${r.ICON_NAMES.diigo}"
        size="24"
      ></webhighlights-icon>`,howItWorksTemplate:i.html`<webhighlights-file-import
        .fileImportType="${c}"
      ></webhighlights-file-import> `,howItWorksSteps:[{title:"Sign in to Diigo",description:i.html`Visit the Diigo dashboard and sign in.`},{title:"Export your library",description:i.html`Now go to
            <a href="https://www.diigo.com/tools" rel="nofollow" target="_blank"
              >"Tools"</a
            >
            and choose "Export your library" at the bottom of the page.`,image:{url:"https://email.web-highlights.com/uploads/export-your-library_VxmqBE.png",alt:"Tools > Export your library",width:"400"}},{title:"Export to CSV format",description:i.html`Choose the CSV format and click "Export". You should
          receive an email with the exported CSV file. Alternatively, you can
          also download the file from the "Export History" page which will
          appear after the export is complete. You might need to refresh the
          page.`,image:{url:"https://email.web-highlights.com/uploads/choose-csv-format_XkLzJf.png",alt:"Choose CSV format & export",width:"400"}},{title:"Download the CSV export file",description:i.html`Download the exported CSV file from the email or
          from the Export History.`,image:{url:"https://email.web-highlights.com/uploads/download-from-export-history_yIVW0V.png",alt:"Download from Export History",width:"400"}},{title:"Upload .CSV File To Web Highlights",description:i.html`Click 'Upload Diigo CSV File' and select the
          exported Diigo .csv file.`},{title:"Import your Diigo Research",description:i.html`If you've uploaded the right Diigo CSV file, you'll
          see a button to import your highlights and pages. Click it, and Web
          Highlights will import your Diigo research.`}]}};return d[t]}},92257:(t,e,o)=>{"use strict";o.d(e,{R:()=>l});var r=o(85608),i=o(29773),s=o(64991),n=o(21601),l=function(t){function e(e,o){var r=t.call(this,e,o)||this;return r.scheduler=e,r.work=o,r.pending=!1,r}return(0,r.C6)(e,t),e.prototype.schedule=function(t,e){var o;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,i=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(i,r,e)),this.pending=!0,this.delay=e,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(i,this.id,e),this},e.prototype.requestAsyncId=function(t,e,o){return void 0===o&&(o=0),s.f.setInterval(t.flush.bind(t,this),o)},e.prototype.recycleAsyncId=function(t,e,o){if(void 0===o&&(o=0),null!=o&&this.delay===o&&!1===this.pending)return e;null!=e&&s.f.clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(t,e);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var o,r=!1;try{this.work(t)}catch(t){r=!0,o=t||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o},e.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,o=this.scheduler,r=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,n.o)(r,this),null!=e&&(this.id=this.recycleAsyncId(o,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(i.r)},93206:(t,e,o)=>{"use strict";o.d(e,{x:()=>s});var r=o(49758),i=o(14460);function s(t){return(0,i.T)(null==t?void 0:t[r.l])}},93308:(t,e,o)=>{var r=o(76127);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},93811:t=>{"use strict";t.exports=LitExternal},94644:(t,e,o)=>{"use strict";o.d(e,{_:()=>i});var r=o(78154),i=function(){function t(e,o){void 0===o&&(o=t.now),this.schedulerActionCtor=e,this.now=o}return t.prototype.schedule=function(t,e,o){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(o,e)},t.now=r.U.now,t}()},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},95905:(t,e,o)=>{var r=o(37438);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},95928:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,'.wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking;background:var(--wh-skeleton-bg);border-radius:4px;position:relative;overflow:hidden}.wh-loading-skeleton::after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, var(--wh-skeleton-bg-hover), transparent);animation:skeleton-shimmer 2s infinite}@keyframes loadingBlinking{0%{background:var(--wh-skeleton-bg)}70%{background:var(--wh-skeleton-bg-hover)}100%{background:var(--wh-skeleton-bg-strong)}}@keyframes skeleton-shimmer{0%{left:-100%}100%{left:100%}}:host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.primary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-primary-700);text-decoration:none}.primary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-btn:not(:disabled):hover{background:var(--wh-primary-600)}.secondary-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;background:var(--wh-gray-50);border:.5px solid rgba(47,50,55,.2392156863);background:var(--wh-gray-50);color:var(--wh-gray-600)}.secondary-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.primary-text-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;color:#fff;background:var(--secondary-dark);border:1px solid var(--wh-primary-600)}.primary-text-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn{box-shadow:5px 7px 6px -4px rgba(0,0,0,.1);padding:10px 20px;border:none;border-radius:4px;color:#fff;font-weight:400;font-family:var(--wh-font-family);cursor:pointer;padding:0;background:var(--wh-primary-600);box-shadow:0px 2px 1px -1px rgba(var(--wh-primary-600), 0.6),0 1px 1px 0 rgba(var(--wh-primary-600), 0.341),0 1px 3px 0 rgba(var(--wh-primary-600), 0.322)}.chrome-btn:disabled{background:var(--wh-bg-disabled);color:var(--wh-text-light);cursor:not-allowed;box-shadow:none}.chrome-btn a{text-decoration:none;padding:10px 20px;line-height:40px;color:#fff}.chrome-btn:hover{background:var(--wh-primary-600);transition:all .2s ease;transform:scale(1.03)}.entry-container{width:100%;display:flex;flex-wrap:wrap;border-bottom:1px solid var(--wh-border-base);background:var(--wh-bg-base)}.entry{width:100%;display:flex;background:var(--wh-bg-base);opacity:1;justify-content:space-between;align-items:center;padding:12px 16px;box-sizing:border-box}.entry:hover{opacity:1;background:var(--wh-bg-base-hover)}.entry-header{margin-right:10px}.entry-header .entry-title{color:var(--wh-text-light);font-size:12px;margin:0 0 4px 0}.entry-header .entry-description{color:var(--wh-text-lighter);font-size:11px}:host{font-family:var(--wh-font-family);display:block;box-sizing:border-box;padding:0;background:var(--wh-bg-base);overflow:auto}@media(min-width: 600px){:host::-webkit-scrollbar-track{background:var(--wh-bg-front-strong)}:host::-webkit-scrollbar-thumb{background:var(--wh-border-front-strong);box-shadow:var(--wh-shadow);border-radius:10px}:host::-webkit-scrollbar-thumb:hover{background:var(--wh-border-front-strong)}}',""]);const l=n},96961:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var r=o(18045),i=o(46195),s=o(22185),n=o(68001),l=o(14460);function a(t,e,o){return void 0===o&&(o=1/0),(0,l.T)(e)?a(function(o,s){return(0,r.T)(function(t,r){return e(o,t,s,r)})((0,i.Tg)(t(o,s)))},o):("number"==typeof e&&(o=e),(0,s.N)(function(e,r){return(0,n.h)(e,r,t,o)}))}},97042:(t,e,o)=>{"use strict";o.d(e,{q:()=>s});var r=o(85608),i=o(94644),s=function(t){function e(e,o){void 0===o&&(o=i._.now);var r=t.call(this,e,o)||this;return r.actions=[],r._active=!1,r}return(0,r.C6)(e,t),e.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var o;this._active=!0;do{if(o=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,o){for(;t=e.shift();)t.unsubscribe();throw o}}},e}(i._)},97126:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box;padding:12px 16px;cursor:pointer;background-color:var(--wh-bg-back);border:.1px solid var(--wh-border-base);border-radius:8px;transition:.2s all ease-in-out;width:100%}@media(min-width: 1200px){:host{max-width:320px}}:host(:hover){background-color:var(--wh-bg-back-hover);border:.1px solid var(--wh-border-base-hover)}.image-container{display:flex;justify-content:center;align-items:center;width:24px;height:24px}.image-container>*{height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}header{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.title,.description{display:block}.description{font-size:12px;color:var(--wh-text-lighter);margin-top:8px;line-height:1.17}.title{font-weight:normal}",""]);const l=n},98523:(t,e,o)=>{"use strict";o.d(e,{C:()=>s,U:()=>n});var r=o(85608),i=o(14460);function s(t){return(0,r.AQ)(this,arguments,function(){var e,o,i;return(0,r.YH)(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,(0,r.N3)(e.read())];case 3:return o=s.sent(),i=o.value,o.done?[4,(0,r.N3)(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,(0,r.N3)(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function n(t){return(0,i.T)(null==t?void 0:t.getReader)}},99979:(t,e,o)=>{"use strict";var r=o(38085),i=o(93811),s=o(95665),n=o(30827),l=o(65560),a=o(34916),c=o.n(a),h=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},d=function(t,e,o,r){return new(o||(o=Promise))(function(i,s){function n(t){try{a(r.next(t))}catch(t){s(t)}}function l(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(n,l)}a((r=r.apply(t,e||[])).next())})};const p=r.SHARED_COMPONENTS_INTERNAL.SettingsBilling,u=p.TAG;class g extends n.y{constructor(){super(...arguments),this.components=[r.SHARED_COMPONENTS.Loading.TAG,r.SHARED_COMPONENTS.PaymentMethod.TAG,r.SHARED_COMPONENTS.Invoices.TAG],this.subscription=null,this.loading=!0}get activePlan(){var t;return(0,r.getActivePlanForUser)(null!==(t=this.props.jwtPayload)&&void 0!==t?t:null)}get subscriptionIsActive(){var t;return"active"===(null===(t=this.subscription)||void 0===t?void 0:t.state)}get subscriptionIsPastDue(){var t,e;return"past_due"===(null===(t=this.subscription)||void 0===t?void 0:t.state)||"paused"===(null===(e=this.subscription)||void 0===e?void 0:e.state)}get nextPaymentDate(){var t,e,o;return(null===(e=null===(t=this.subscription)||void 0===t?void 0:t.next_payment)||void 0===e?void 0:e.date)?new Date(null===(o=this.subscription.next_payment)||void 0===o?void 0:o.date).toDateString():null}get nextPaymentAmountText(){var t,e,o,r,i;return(null===(t=this.subscription)||void 0===t?void 0:t.next_payment)?`${null===(o=null===(e=this.subscription)||void 0===e?void 0:e.next_payment)||void 0===o?void 0:o.amount} ${null===(i=null===(r=this.subscription)||void 0===r?void 0:r.next_payment)||void 0===i?void 0:i.currency}`:null}get expiryDate(){var t,e,o;return new Date(null!==(o=null===(e=null===(t=this.props.jwtPayload)||void 0===t?void 0:t.userPlan)||void 0===e?void 0:e.expiresDateMillis)&&void 0!==o?o:0).toDateString()}get expiryText(){var t,e,o;return this.activePlan===r.USER_PLAN_TYPE.FREE?`${this.subscriptionIsPastDue?"Your payment failed. Please update your payment method. ":""}Your ${r.USER_PLAN_DISPLAY_NAME[null!==(o=null===(e=null===(t=this.props.jwtPayload)||void 0===t?void 0:t.userPlan)||void 0===e?void 0:e.type)&&void 0!==o?o:r.USER_PLAN_TYPE.FREE_TRIAL]} plan ended on ${this.expiryDate}.`:this.activePlan===r.USER_PLAN_TYPE.PREMIUM||r.USER_PLAN_TYPE.ULTIMATE?this.subscription?"active"===this.subscription.state?`Your current plan automatically renews on ${this.nextPaymentDate} for ${this.nextPaymentAmountText}.`:this.subscriptionIsPastDue?`Your payment failed. Please update your payment method. Your current plan ends on ${this.expiryDate}.`:`Your current plan was cancelled and ends on ${this.expiryDate}.`:`Your current plan will end automatically on ${this.expiryDate}.`:this.activePlan===r.USER_PLAN_TYPE.FREE_TRIAL?`Your '${r.USER_PLAN_DISPLAY_NAME.FREE_TRIAL}' will end on ${this.expiryDate}.`:void 0}get userPlanDisplayName(){var t;return r.USER_PLAN_DISPLAY_NAME[(0,r.getActivePlanForUser)(null!==(t=this.props.jwtPayload)&&void 0!==t?t:null)]}get showUpgradeBtn(){return!this.subscriptionIsPastDue&&(this.activePlan===r.USER_PLAN_TYPE.FREE||this.activePlan===r.USER_PLAN_TYPE.FREE_TRIAL)}get isEmailUser(){var t;return"email"===(null===(t=this.props.userInfo)||void 0===t?void 0:t.strategy)}get showCancelBtn(){var t;return(null===(t=this.subscription)||void 0===t?void 0:t.cancel_url)&&(this.subscriptionIsActive||this.subscriptionIsPastDue)}get httpFacade(){return(0,r.useContext)().httpFacade}firstUpdated(t){this.loadData()}loadData(){return d(this,void 0,void 0,function*(){var t,e,o,r;try{(null===(e=null===(t=this.props.userInfo)||void 0===t?void 0:t.userPlan)||void 0===e?void 0:e.subscription_id)?this.subscription=yield this.httpFacade.getSubscription({subscription_id:null===(r=null===(o=this.props.userInfo)||void 0===o?void 0:o.userPlan)||void 0===r?void 0:r.subscription_id}):this.subscription=null}catch(t){console.error(t)}finally{this.loading=!1}})}get pricingUrl(){return`${(0,r.useContext)().environment.FRONTEND_URL}/pricing`}onUpgradeNow(){return d(this,void 0,void 0,function*(){(0,r.closeDialog)(),(0,r.isWebAppUrl)(location.href)?r.notifications.dispatch("updateAppRouter",{detail:{path:"pricing"}}):location.href=this.pricingUrl})}get paymentInformation(){var t;return null===(t=this.subscription)||void 0===t?void 0:t.payment_information}render(){var t,e,o,s,n,l,a;if(!this.props)throw new Error(`'props' is missing in ${u}`);return this.loading?i.html`<webhighlights-loading></webhighlights-loading>`:i.html` <div class="container" part="container">
      <section class="section-entry">
        <header>
          <h3 class="section-title">Current Plan</h3>
          <span
            data-testid="${p.TEST_IDS.EXPIRY_INFO}"
            class="section-description"
            >${this.expiryText}<br />
            ${this.showCancelBtn?i.html`
                  <a
                    href="${(0,r.getSubscriptionUrl)()}"
                    rel="nofollow"
                    data-testid="${p.TEST_IDS.CANCEL_NOW_BTN}"
                    class="settings-link-btn"
                  >
                    Cancel now
                  </a>
                `:i.html``}
          </span>
          ${this.activePlan===r.USER_PLAN_TYPE.PREMIUM?i.html`<span class="section-description upgrade-to-ultimate-info"
                >Want to upgrade to
                <b>${r.USER_PLAN_DISPLAY_NAME[r.USER_PLAN_TYPE.ULTIMATE]}</b>?
                Please cancel your current plan and
                <a
                  class="settings-link-btn upgrade-to-ultimate-link"
                  href="${this.pricingUrl}"
                >
                  upgrade to Ultimate</a
                >. Please send me an email (${r.LEGAL.EMAIL}) and I will refund
                you the amount for the current subscription.
              </span>`:i.html``}
        </header>

        <div class="section-entry-container">
          <span
            class="section-info-label"
            data-testid="${p.TEST_IDS.USERPLAN_INFO}"
            >${this.userPlanDisplayName}</span
          >
          ${this.showUpgradeBtn?i.html`
                <button
                  class="section-button upgrade-now-btn"
                  @click="${this.onUpgradeNow}"
                >
                  Upgrade
                </button>
              `:i.html``}
          ${this.subscriptionIsPastDue&&(null===(t=this.subscription)||void 0===t?void 0:t.update_url)?i.html`
                <a
                  href="${null!==(o=null===(e=this.subscription)||void 0===e?void 0:e.update_url)&&void 0!==o?o:""}"
                  rel="nofollow"
                  class="section-button"
                >
                  Update Payment Method
                </a>
              `:i.html``}
        </div>
      </section>

      <section class="section-entry">
        <header>
          <h3 class="section-title">Payment method</h3>
          <span class="section-description"
            >Your stored payment option for
            subscriptions.${(null===(s=this.subscription)||void 0===s?void 0:s.update_url)?i.html`<br />
                  <a
                    class="settings-link-btn"
                    rel="nofollow"
                    data-testid="${p.TEST_IDS.CHANGE_PAYMENT_METHOD_LINK}"
                    href=${null===(n=this.subscription)||void 0===n?void 0:n.update_url}
                  >
                    Change
                  </a>`:i.html``}</span
          >
        </header>
        ${this.paymentInformation?i.html`
              <webhighlights-payment-method
                .paymentInformation="${this.paymentInformation}"
              ></webhighlights-payment-method>
            `:i.html`<span class="section-info-label">None</span>`}
      </section>

      <hr class="settings-divider" />
      <section class="section-entry">
        <header>
          <h3 class="section-title">Invoices</h3>
          <span class="section-description">
            You'll see your subscription plan invoices here if you currently
            have or had a paid subscription.</span
          >
        </header>
        ${(null===(l=this.subscription)||void 0===l?void 0:l.user_id)?i.html`
              <webhighlights-invoices
                class="invoices"
                .subscriptionUserId="${null===(a=this.subscription)||void 0===a?void 0:a.user_id}"
              ></webhighlights-invoices>
            `:i.html``}
      </section>
      <hr class="settings-divider" />
      <section class="section-entry">
        <header>
          <h3 class="section-title">Need help?</h3>
          <span class="section-description"
            >👉 If you run into any problems concerning your billing and plans,
            feel free to get in touch with me at: <b>${r.LEGAL.EMAIL}</b>. No need
            to worry, we fill figure it out.</span
          >
        </header>
      </section>
    </div>`}}g.styles=i.css`
    ${l.Y}
    ${(0,i.unsafeCSS)(c())}
  `,h([(0,s.property)()],g.prototype,"props",void 0),h([(0,s.state)()],g.prototype,"subscription",void 0),h([(0,s.state)()],g.prototype,"loading",void 0),n.y.define(u,g)},99986:(t,e,o)=>{var r=o(44371);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),r=o(95665),i=o(30827),s=(o(19802),o(56438),o(93308)),n=o.n(s),l=(o(39643),o(77814),o(99979),o(90342),o(30595),o(53888),o(24957),o(65560)),a=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const c=t.SHARED_COMPONENTS.Settings,h=c.TAG;class d extends i.y{constructor(){super(...arguments),this.props={},this.userInfo=void 0,this.jwtPayload=void 0,this.userInfoLoaded=!1,this.authLoaded=!1,this.activeSettingsView=(0,t.isMobile)()?null:"settings",this.components=[t.SHARED_COMPONENTS.Loading.TAG,t.SHARED_COMPONENTS.Auth.TAG,t.SHARED_COMPONENTS.AccountInfo.TAG,t.SHARED_COMPONENTS.Icon.TAG]}firstUpdated(t){this.activeSettingsView=this.props.view||this.activeSettingsView,this.loadUserInfo()}loadUserInfo(){return e=this,o=void 0,i=function*(){try{this.jwtPayload=yield t.chromeJwtService.getJwtPayload(),this.authLoaded=!0,this.jwtPayload&&(this.userInfo=yield(0,t.useContext)().httpFacade.getUserInfo(this.jwtPayload._id,!0))}catch(t){console.error("Error loading user info")}finally{this.userInfoLoaded=!0}},new((r=void 0)||(r=Promise))(function(t,s){function n(t){try{a(i.next(t))}catch(t){s(t)}}function l(t){try{a(i.throw(t))}catch(t){s(t)}}function a(e){var o;e.done?t(e.value):(o=e.value,o instanceof r?o:new r(function(t){t(o)})).then(n,l)}a((i=i.apply(e,o||[])).next())});var e,o,r,i}get settingsViewProps(){var t;return{loaded:this.userInfoLoaded,userInfo:this.userInfo,jwtPayload:this.jwtPayload,integrationProps:null===(t=this.props)||void 0===t?void 0:t.integrationProps}}onChangeSettingsView(t){this.activeSettingsView=t}onMobileBack(){this.activeSettingsView=null}render(){var o;if(!this.authLoaded)return e.html`<webhighlights-loading></webhighlights-loading>`;const r=e.html`<webhighlights-auth
      class="auth"
      .props=${this.props.authProps}
    ></webhighlights-auth>`;return e.html`<div class="container" part="container">
      <nav
        class="settings-views-sidebar ${this.activeSettingsView?"mobile-closed":"mobile-open"}"
      >
        <webhighlights-account-info
          class="account-info"
          data-testid=${c.TEST_IDS.ACCOUNT_INFO}
          .props=${this.settingsViewProps}
        ></webhighlights-account-info>
        <section class="settings-view-btns">
          ${t.SETTINGS_VIEWS.map(o=>e.html`<button
                data-testid=${c.TEST_IDS.VIEW_BTN(o)}
                class="settings-view-btn ${this.activeSettingsView===o?"active":""}"
                @click=${()=>this.onChangeSettingsView(o)}
              >
                <webhighlights-icon
                  icon=${t.settingsViewIconMap[o]}
                  size="14"
                ></webhighlights-icon>
                ${t.settingsViewLabelMap[o]}
              </button>`)}
        </section>
      </nav>
      <section
        class="active-settings-view ${this.activeSettingsView?"mobile-open":"mobile-closed"}"
      >
        <header class="active-settings-view-header">
          ${this.activeSettingsView?e.html`<button class="mobile-back-btn" @click=${this.onMobileBack}>
                  <webhighlights-icon
                    class="icon"
                    icon="arrow-right"
                    size="16"
                  ></webhighlights-icon>
                </button>
                <h2 class="active-settings-title">
                  <webhighlights-icon
                    icon=${t.settingsViewIconMap[this.activeSettingsView]}
                    size="16"
                  ></webhighlights-icon>
                  ${t.settingsViewLabelMap[this.activeSettingsView]}
                </h2>`:e.html``}
        </header>
        ${"settings"===this.activeSettingsView?e.html`<webhighlights-settings-settings
              class="settings-view"
              .props=${this.settingsViewProps}
            ></webhighlights-settings-settings>`:e.html``}
        ${"account"===this.activeSettingsView?e.html`
              ${this.jwtPayload?e.html`<webhighlights-settings-account
                    class="settings-view"
                    .props=${this.settingsViewProps}
                  ></webhighlights-settings-account>`:r}
            `:e.html``}
        ${"backup"===this.activeSettingsView?e.html` <webhighlights-settings-backup
              class="settings-view"
              .props=${this.settingsViewProps}
            ></webhighlights-settings-backup>`:e.html``}
        ${"billing"===this.activeSettingsView?e.html`
              ${this.jwtPayload?e.html`<webhighlights-settings-billing
                    class="settings-view"
                    .props=${this.settingsViewProps}
                  ></webhighlights-settings-billing>`:r}
            `:e.html``}
        ${"notifications"===this.activeSettingsView?e.html`
              <webhighlights-settings-notifications
                class="settings-view"
                .props=${this.settingsViewProps}
              ></webhighlights-settings-notifications>
            `:e.html``}
        ${"integrations"===this.activeSettingsView?e.html`
              <webhighlights-settings-integrations
                class="settings-view"
                .props=${null===(o=this.settingsViewProps)||void 0===o?void 0:o.integrationProps}
              ></webhighlights-settings-integrations>
            `:e.html``}
        ${"documents"===this.activeSettingsView?e.html`
              <webhighlights-settings-documents
                class="settings-view"
                .props=${this.settingsViewProps}
              ></webhighlights-settings-documents>
            `:e.html``}
      </section>
    </div>`}}d.styles=e.css`
    ${l.Y}
    ${(0,e.unsafeCSS)(n())}
  `,a([(0,r.property)()],d.prototype,"props",void 0),a([(0,r.state)()],d.prototype,"userInfo",void 0),a([(0,r.state)()],d.prototype,"jwtPayload",void 0),a([(0,r.state)()],d.prototype,"userInfoLoaded",void 0),a([(0,r.state)()],d.prototype,"authLoaded",void 0),a([(0,r.state)()],d.prototype,"activeSettingsView",void 0),i.y.define(h,d)})()})();