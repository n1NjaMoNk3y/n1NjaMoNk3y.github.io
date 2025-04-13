"use strict";(()=>{var Rt=Object.create;var At=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var Vt=Object.getOwnPropertyNames;var Ft=Object.getPrototypeOf,Kt=Object.prototype.hasOwnProperty;var K=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var zt=(e,n,c,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of Vt(n))!Kt.call(e,o)&&o!==c&&At(e,o,{get:()=>n[o],enumerable:!(a=Ut(n,o))||a.enumerable});return e};var it=(e,n,c)=>(c=e!=null?Rt(Ft(e)):{},zt(n||!e||!e.__esModule?At(c,"default",{value:e,enumerable:!0}):c,e));var Ct=K((st,ot)=>{var rt,tt;rt=st,tt=function(){"use strict";function e(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);i&&(u=u.filter(function(E){return Object.getOwnPropertyDescriptor(t,E).enumerable})),s.push.apply(s,u)}return s}function n(t){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?e(Object(s),!0).forEach(function(u){a(t,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(s,u))})}return t}function c(t){return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},c(t)}function a(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}function o(t){return function(i){if(Array.isArray(i))return y(i)}(t)||function(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}(t)||l(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function l(t,i){if(t){if(typeof t=="string")return y(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?y(t,i):void 0}}function y(t,i){(i==null||i>t.length)&&(i=t.length);for(var s=0,u=new Array(i);s<i;s++)u[s]=t[s];return u}var b=function(t){return typeof t=="string"?document.querySelector(t):t()},L=function(t,i){var s=typeof t=="string"?document.createElement(t):t;for(var u in i){var E=i[u];if(u==="inside")E.append(s);else if(u==="dest")b(E[0]).insertAdjacentElement(E[1],s);else if(u==="around"){var _=E;_.parentNode.insertBefore(s,_),s.append(_),_.getAttribute("autofocus")!=null&&_.focus()}else u in s?s[u]=E:s.setAttribute(u,E)}return s},M=function(t,i){return t=String(t).toLowerCase(),i?t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):t},R=function(t,i){return L("mark",n({innerHTML:t},typeof i=="string"&&{class:i})).outerHTML},$=function(t,i){i.input.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:i.feedback,cancelable:!0}))},F=function(t,i,s){var u=s||{},E=u.mode,_=u.diacritics,A=u.highlight,D=M(i,_);if(i=String(i),t=M(t,_),E==="loose"){var O=(t=t.replace(/ /g,"")).length,T=0,N=Array.from(i).map(function(k,I){return T<O&&D[I]===t[T]&&(k=A?R(k,A):k,T++),k}).join("");if(T===O)return N}else{var C=D.indexOf(t);if(~C)return t=i.substring(C,C+t.length),C=A?i.replace(t,R(t,A)):i}},H=function(t,i){return new Promise(function(s,u){var E;return(E=t.data).cache&&E.store?s():new Promise(function(_,A){return typeof E.src=="function"?E.src(i).then(_,A):_(E.src)}).then(function(_){try{return t.feedback=E.store=_,$("response",t),s()}catch(A){return u(A)}},u)})},x=function(t,i){var s=i.data,u=i.searchEngine,E=[];s.store.forEach(function(A,D){var O=function(C){var k=C?A[C]:A,I=typeof u=="function"?u(t,k):F(t,k,{mode:u,diacritics:i.diacritics,highlight:i.resultItem.highlight});if(I){var J={match:I,value:A};C&&(J.key=C),E.push(J)}};if(s.keys){var T,N=function(C,k){var I=typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(!I){if(Array.isArray(C)||(I=l(C))||k&&C&&typeof C.length=="number"){I&&(C=I);var J=0,X=function(){};return{s:X,n:function(){return J>=C.length?{done:!0}:{done:!1,value:C[J++]}},e:function(B){throw B},f:X}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Q,W=!0,Z=!1;return{s:function(){I=I.call(C)},n:function(){var B=I.next();return W=B.done,B},e:function(B){Z=!0,Q=B},f:function(){try{W||I.return==null||I.return()}finally{if(Z)throw Q}}}}(s.keys);try{for(N.s();!(T=N.n()).done;)O(T.value)}catch(C){N.e(C)}finally{N.f()}}else O()}),s.filter&&(E=s.filter(E));var _=E.slice(0,i.resultsList.maxResults);i.feedback={query:t,matches:E,results:_},$("results",i)},P="aria-expanded",U="aria-activedescendant",q="aria-selected",j=function(t,i){t.feedback.selection=n({index:i},t.feedback.results[i])},V=function(t){t.isOpen||((t.wrapper||t.input).setAttribute(P,!0),t.list.removeAttribute("hidden"),t.isOpen=!0,$("open",t))},p=function(t){t.isOpen&&((t.wrapper||t.input).setAttribute(P,!1),t.input.setAttribute(U,""),t.list.setAttribute("hidden",""),t.isOpen=!1,$("close",t))},f=function(t,i){var s=i.resultItem,u=i.list.getElementsByTagName(s.tag),E=!!s.selected&&s.selected.split(" ");if(i.isOpen&&u.length){var _,A,D=i.cursor;t>=u.length&&(t=0),t<0&&(t=u.length-1),i.cursor=t,D>-1&&(u[D].removeAttribute(q),E&&(A=u[D].classList).remove.apply(A,o(E))),u[t].setAttribute(q,!0),E&&(_=u[t].classList).add.apply(_,o(E)),i.input.setAttribute(U,u[i.cursor].id),i.list.scrollTop=u[t].offsetTop-i.list.clientHeight+u[t].clientHeight+5,i.feedback.cursor=i.cursor,j(i,t),$("navigate",i)}},w=function(t){f(t.cursor+1,t)},m=function(t){f(t.cursor-1,t)},r=function(t,i,s){(s=s>=0?s:t.cursor)<0||(t.feedback.event=i,j(t,s),$("selection",t),p(t))};function d(t,i){var s=this;return new Promise(function(u,E){var _,A;return _=i||((A=t.input)instanceof HTMLInputElement||A instanceof HTMLTextAreaElement?A.value:A.innerHTML),function(O,T,N){return T?T(O):O.length>=N}(_=t.query?t.query(_):_,t.trigger,t.threshold)?H(t,_).then(function(O){try{return t.feedback instanceof Error?u():(x(_,t),t.resultsList&&function(T){var N=T.resultsList,C=T.list,k=T.resultItem,I=T.feedback,J=I.matches,X=I.results;if(T.cursor=-1,C.innerHTML="",J.length||N.noResults){var Q=new DocumentFragment;X.forEach(function(W,Z){var B=L(k.tag,n({id:"".concat(k.id,"_").concat(Z),role:"option",innerHTML:W.match,inside:Q},k.class&&{class:k.class}));k.element&&k.element(B,W)}),C.append(Q),N.element&&N.element(C,I),V(T)}else p(T)}(t),D.call(s))}catch(T){return E(T)}},E):(p(t),D.call(s));function D(){return u()}})}var h=function(t,i){for(var s in t)for(var u in t[s])i(s,u)},g=function(t){var i,s,u,E=t.events,_=(i=function(){return d(t)},s=t.debounce,function(){clearTimeout(u),u=setTimeout(function(){return i()},s)}),A=t.events=n({input:n({},E&&E.input)},t.resultsList&&{list:E?n({},E.list):{}}),D={input:{input:function(){_()},keydown:function(O){(function(T,N){switch(T.keyCode){case 40:case 38:T.preventDefault(),T.keyCode===40?w(N):m(N);break;case 13:N.submit||T.preventDefault(),N.cursor>=0&&r(N,T);break;case 9:N.resultsList.tabSelect&&N.cursor>=0&&r(N,T);break;case 27:N.input.value="",p(N)}})(O,t)},blur:function(){p(t)}},list:{mousedown:function(O){O.preventDefault()},click:function(O){(function(T,N){var C=N.resultItem.tag.toUpperCase(),k=Array.from(N.list.querySelectorAll(C)),I=T.target.closest(C);I&&I.nodeName===C&&r(N,T,k.indexOf(I))})(O,t)}}};h(D,function(O,T){(t.resultsList||T==="input")&&(A[O][T]||(A[O][T]=D[O][T]))}),h(A,function(O,T){t[O].addEventListener(T,A[O][T])})};function S(t){var i=this;return new Promise(function(s,u){var E,_,A;if(E=t.placeHolder,A={role:"combobox","aria-owns":(_=t.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},L(t.input,n(n({"aria-controls":_.id,"aria-autocomplete":"both"},E&&{placeholder:E}),!t.wrapper&&n({},A))),t.wrapper&&(t.wrapper=L("div",n({around:t.input,class:t.name+"_wrapper"},A))),_&&(t.list=L(_.tag,n({dest:[_.destination,_.position],id:_.id,role:"listbox",hidden:"hidden"},_.class&&{class:_.class}))),g(t),t.data.cache)return H(t).then(function(O){try{return D.call(i)}catch(T){return u(T)}},u);function D(){return $("init",t),s()}return D.call(i)})}function v(t){var i=t.prototype;i.init=function(){S(this)},i.start=function(s){d(this,s)},i.unInit=function(){if(this.wrapper){var s=this.wrapper.parentNode;s.insertBefore(this.input,this.wrapper),s.removeChild(this.wrapper)}var u;h((u=this).events,function(E,_){u[E].removeEventListener(_,u.events[E][_])})},i.open=function(){V(this)},i.close=function(){p(this)},i.goTo=function(s){f(s,this)},i.next=function(){w(this)},i.previous=function(){m(this)},i.select=function(s){r(this,null,s)},i.search=function(s,u,E){return F(s,u,E)}}return function t(i){this.options=i,this.id=t.instances=(t.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(s){var u=s.name,E=s.options,_=s.resultsList,A=s.resultItem;for(var D in E)if(c(E[D])==="object")for(var O in s[D]||(s[D]={}),E[D])s[D][O]=E[D][O];else s[D]=E[D];s.selector=s.selector||"#"+u,_.destination=_.destination||s.selector,_.id=_.id||u+"_list_"+s.id,A.id=A.id||u+"_result",s.input=b(s.selector)}(this),v.call(this,t),S(this)}},typeof st=="object"&&typeof ot<"u"?ot.exports=tt():typeof define=="function"&&define.amd?define(tt):(rt=typeof globalThis<"u"?globalThis:rt||self).autoComplete=tt()});var Lt=K((at,ct)=>{(function(e,n){typeof at=="object"&&typeof ct<"u"?ct.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.Data=n())})(at,function(){"use strict";let e=new Map;return{set(c,a,o){e.has(c)||e.set(c,new Map);let l=e.get(c);if(!l.has(a)&&l.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(l.keys())[0]}.`);return}l.set(a,o)},get(c,a){return e.has(c)&&e.get(c).get(a)||null},remove(c,a){if(!e.has(c))return;let o=e.get(c);o.delete(a),o.size===0&&e.delete(c)}}})});var Y=K((et,Nt)=>{(function(e,n){typeof et=="object"&&typeof Nt<"u"?n(et):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.Index={}))})(et,function(e){"use strict";let a="transitionend",o=r=>(r&&window.CSS&&window.CSS.escape&&(r=r.replace(/#([^\s"#']+)/g,(d,h)=>`#${CSS.escape(h)}`)),r),l=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),y=r=>{do r+=Math.floor(Math.random()*1e6);while(document.getElementById(r));return r},b=r=>{if(!r)return 0;let{transitionDuration:d,transitionDelay:h}=window.getComputedStyle(r),g=Number.parseFloat(d),S=Number.parseFloat(h);return!g&&!S?0:(d=d.split(",")[0],h=h.split(",")[0],(Number.parseFloat(d)+Number.parseFloat(h))*1e3)},L=r=>{r.dispatchEvent(new Event(a))},M=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),R=r=>M(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(o(r)):null,$=r=>{if(!M(r)||r.getClientRects().length===0)return!1;let d=getComputedStyle(r).getPropertyValue("visibility")==="visible",h=r.closest("details:not([open])");if(!h)return d;if(h!==r){let g=r.closest("summary");if(g&&g.parentNode!==h||g===null)return!1}return d},F=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",H=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){let d=r.getRootNode();return d instanceof ShadowRoot?d:null}return r instanceof ShadowRoot?r:r.parentNode?H(r.parentNode):null},x=()=>{},P=r=>{r.offsetHeight},U=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,q=[],j=r=>{document.readyState==="loading"?(q.length||document.addEventListener("DOMContentLoaded",()=>{for(let d of q)d()}),q.push(r)):r()},V=()=>document.documentElement.dir==="rtl",p=r=>{j(()=>{let d=U();if(d){let h=r.NAME,g=d.fn[h];d.fn[h]=r.jQueryInterface,d.fn[h].Constructor=r,d.fn[h].noConflict=()=>(d.fn[h]=g,r.jQueryInterface)}})},f=(r,d=[],h=r)=>typeof r=="function"?r(...d):h,w=(r,d,h=!0)=>{if(!h){f(r);return}let S=b(d)+5,v=!1,t=({target:i})=>{i===d&&(v=!0,d.removeEventListener(a,t),f(r))};d.addEventListener(a,t),setTimeout(()=>{v||L(d)},S)},m=(r,d,h,g)=>{let S=r.length,v=r.indexOf(d);return v===-1?!h&&g?r[S-1]:r[0]:(v+=h?1:-1,g&&(v=(v+S)%S),r[Math.max(0,Math.min(v,S-1))])};e.defineJQueryPlugin=p,e.execute=f,e.executeAfterTransition=w,e.findShadowRoot=H,e.getElement=R,e.getNextActiveElement=m,e.getTransitionDurationFromElement=b,e.getUID=y,e.getjQuery=U,e.isDisabled=F,e.isElement=M,e.isRTL=V,e.isVisible=$,e.noop=x,e.onDOMContentLoaded=j,e.parseSelector=o,e.reflow=P,e.toType=l,e.triggerTransitionEnd=L,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})});var G=K((ut,lt)=>{(function(e,n){typeof ut=="object"&&typeof lt<"u"?lt.exports=n(Y()):typeof define=="function"&&define.amd?define(["../util/index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.EventHandler=n(e.Index))})(ut,function(e){"use strict";let n=/[^.]*(?=\..*)\.|.*/,c=/\..*/,a=/::\d+$/,o={},l=1,y={mouseenter:"mouseover",mouseleave:"mouseout"},b=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(p,f){return f&&`${f}::${l++}`||p.uidEvent||l++}function M(p){let f=L(p);return p.uidEvent=f,o[f]=o[f]||{},o[f]}function R(p,f){return function w(m){return V(m,{delegateTarget:p}),w.oneOff&&j.off(p,m.type,f),f.apply(p,[m])}}function $(p,f,w){return function m(r){let d=p.querySelectorAll(f);for(let{target:h}=r;h&&h!==this;h=h.parentNode)for(let g of d)if(g===h)return V(r,{delegateTarget:h}),m.oneOff&&j.off(p,r.type,f,w),w.apply(h,[r])}}function F(p,f,w=null){return Object.values(p).find(m=>m.callable===f&&m.delegationSelector===w)}function H(p,f,w){let m=typeof f=="string",r=m?w:f||w,d=q(p);return b.has(d)||(d=p),[m,r,d]}function x(p,f,w,m,r){if(typeof f!="string"||!p)return;let[d,h,g]=H(f,w,m);f in y&&(h=(E=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return E.call(this,_)})(h));let S=M(p),v=S[g]||(S[g]={}),t=F(v,h,d?w:null);if(t){t.oneOff=t.oneOff&&r;return}let i=L(h,f.replace(n,"")),s=d?$(p,w,h):R(p,h);s.delegationSelector=d?w:null,s.callable=h,s.oneOff=r,s.uidEvent=i,v[i]=s,p.addEventListener(g,s,d)}function P(p,f,w,m,r){let d=F(f[w],m,r);d&&(p.removeEventListener(w,d,!!r),delete f[w][d.uidEvent])}function U(p,f,w,m){let r=f[w]||{};for(let[d,h]of Object.entries(r))d.includes(m)&&P(p,f,w,h.callable,h.delegationSelector)}function q(p){return p=p.replace(c,""),y[p]||p}let j={on(p,f,w,m){x(p,f,w,m,!1)},one(p,f,w,m){x(p,f,w,m,!0)},off(p,f,w,m){if(typeof f!="string"||!p)return;let[r,d,h]=H(f,w,m),g=h!==f,S=M(p),v=S[h]||{},t=f.startsWith(".");if(typeof d<"u"){if(!Object.keys(v).length)return;P(p,S,h,d,r?w:null);return}if(t)for(let i of Object.keys(S))U(p,S,i,f.slice(1));for(let[i,s]of Object.entries(v)){let u=i.replace(a,"");(!g||f.includes(u))&&P(p,S,h,s.callable,s.delegationSelector)}},trigger(p,f,w){if(typeof f!="string"||!p)return null;let m=e.getjQuery(),r=q(f),d=f!==r,h=null,g=!0,S=!0,v=!1;d&&m&&(h=m.Event(f,w),m(p).trigger(h),g=!h.isPropagationStopped(),S=!h.isImmediatePropagationStopped(),v=h.isDefaultPrevented());let t=V(new Event(f,{bubbles:g,cancelable:!0}),w);return v&&t.preventDefault(),S&&p.dispatchEvent(t),t.defaultPrevented&&h&&h.preventDefault(),t}};function V(p,f={}){for(let[w,m]of Object.entries(f))try{p[w]=m}catch{Object.defineProperty(p,w,{configurable:!0,get(){return m}})}return p}return j})});var Ot=K((dt,ft)=>{(function(e,n){typeof dt=="object"&&typeof ft<"u"?ft.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.Manipulator=n())})(dt,function(){"use strict";function e(a){if(a==="true")return!0;if(a==="false")return!1;if(a===Number(a).toString())return Number(a);if(a===""||a==="null")return null;if(typeof a!="string")return a;try{return JSON.parse(decodeURIComponent(a))}catch{return a}}function n(a){return a.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(a,o,l){a.setAttribute(`data-bs-${n(o)}`,l)},removeDataAttribute(a,o){a.removeAttribute(`data-bs-${n(o)}`)},getDataAttributes(a){if(!a)return{};let o={},l=Object.keys(a.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(let y of l){let b=y.replace(/^bs/,"");b=b.charAt(0).toLowerCase()+b.slice(1,b.length),o[b]=e(a.dataset[y])}return o},getDataAttribute(a,o){return e(a.getAttribute(`data-bs-${n(o)}`))}}})});var Dt=K((ht,pt)=>{(function(e,n){typeof ht=="object"&&typeof pt<"u"?pt.exports=n(Ot(),Y()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.Config=n(e.Manipulator,e.Index))})(ht,function(e,n){"use strict";class c{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,l){let y=n.isElement(l)?e.getDataAttribute(l,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...n.isElement(l)?e.getDataAttributes(l):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,l=this.constructor.DefaultType){for(let[y,b]of Object.entries(l)){let L=o[y],M=n.isElement(L)?"element":n.toType(L);if(!new RegExp(b).test(M))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${M}" but expected type "${b}".`)}}}return c})});var yt=K((mt,gt)=>{(function(e,n){typeof mt=="object"&&typeof gt<"u"?gt.exports=n(Lt(),G(),Dt(),Y()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.BaseComponent=n(e.Data,e.EventHandler,e.Config,e.Index))})(mt,function(e,n,c,a){"use strict";let o="5.3.2";class l extends c{constructor(b,L){super(),b=a.getElement(b),b&&(this._element=b,this._config=this._getConfig(L),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),n.off(this._element,this.constructor.EVENT_KEY);for(let b of Object.getOwnPropertyNames(this))this[b]=null}_queueCallback(b,L,M=!0){a.executeAfterTransition(b,L,M)}_getConfig(b){return b=this._mergeConfigObj(b,this._element),b=this._configAfterMerge(b),this._typeCheckConfig(b),b}static getInstance(b){return e.get(a.getElement(b),this.DATA_KEY)}static getOrCreateInstance(b,L={}){return this.getInstance(b)||new this(b,typeof L=="object"?L:null)}static get VERSION(){return o}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(b){return`${b}${this.EVENT_KEY}`}}return l})});var bt=K((Et,_t)=>{(function(e,n){typeof Et=="object"&&typeof _t<"u"?_t.exports=n(Y()):typeof define=="function"&&define.amd?define(["../util/index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.SelectorEngine=n(e.Index))})(Et,function(e){"use strict";let n=a=>{let o=a.getAttribute("data-bs-target");if(!o||o==="#"){let l=a.getAttribute("href");if(!l||!l.includes("#")&&!l.startsWith("."))return null;l.includes("#")&&!l.startsWith("#")&&(l=`#${l.split("#")[1]}`),o=l&&l!=="#"?e.parseSelector(l.trim()):null}return o},c={find(a,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,a))},findOne(a,o=document.documentElement){return Element.prototype.querySelector.call(o,a)},children(a,o){return[].concat(...a.children).filter(l=>l.matches(o))},parents(a,o){let l=[],y=a.parentNode.closest(o);for(;y;)l.push(y),y=y.parentNode.closest(o);return l},prev(a,o){let l=a.previousElementSibling;for(;l;){if(l.matches(o))return[l];l=l.previousElementSibling}return[]},next(a,o){let l=a.nextElementSibling;for(;l;){if(l.matches(o))return[l];l=l.nextElementSibling}return[]},focusableChildren(a){let o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(l=>`${l}:not([tabindex^="-"])`).join(",");return this.find(o,a).filter(l=>!e.isDisabled(l)&&e.isVisible(l))},getSelectorFromElement(a){let o=n(a);return o&&c.findOne(o)?o:null},getElementFromSelector(a){let o=n(a);return o?c.findOne(o):null},getMultipleElementsFromSelector(a){let o=n(a);return o?c.find(o):[]}};return c})});var It=K((wt,St)=>{(function(e,n){typeof wt=="object"&&typeof St<"u"?St.exports=n(yt(),G(),bt(),Y()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.Collapse=n(e.BaseComponent,e.EventHandler,e.SelectorEngine,e.Index))})(wt,function(e,n,c,a){"use strict";let o="collapse",y=".bs.collapse",b=".data-api",L=`show${y}`,M=`shown${y}`,R=`hide${y}`,$=`hidden${y}`,F=`click${y}${b}`,H="show",x="collapse",P="collapsing",U="collapsed",q=`:scope .${x} .${x}`,j="collapse-horizontal",V="width",p="height",f=".collapse.show, .collapse.collapsing",w='[data-bs-toggle="collapse"]',m={parent:null,toggle:!0},r={parent:"(null|element)",toggle:"boolean"};class d extends e{constructor(g,S){super(g,S),this._isTransitioning=!1,this._triggerArray=[];let v=c.find(w);for(let t of v){let i=c.getSelectorFromElement(t),s=c.find(i).filter(u=>u===this._element);i!==null&&s.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m}static get DefaultType(){return r}static get NAME(){return o}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let g=[];if(this._config.parent&&(g=this._getFirstLevelChildren(f).filter(u=>u!==this._element).map(u=>d.getOrCreateInstance(u,{toggle:!1}))),g.length&&g[0]._isTransitioning||n.trigger(this._element,L).defaultPrevented)return;for(let u of g)u.hide();let v=this._getDimension();this._element.classList.remove(x),this._element.classList.add(P),this._element.style[v]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let t=()=>{this._isTransitioning=!1,this._element.classList.remove(P),this._element.classList.add(x,H),this._element.style[v]="",n.trigger(this._element,M)},s=`scroll${v[0].toUpperCase()+v.slice(1)}`;this._queueCallback(t,this._element,!0),this._element.style[v]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown()||n.trigger(this._element,R).defaultPrevented)return;let S=this._getDimension();this._element.style[S]=`${this._element.getBoundingClientRect()[S]}px`,a.reflow(this._element),this._element.classList.add(P),this._element.classList.remove(x,H);for(let t of this._triggerArray){let i=c.getElementFromSelector(t);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;let v=()=>{this._isTransitioning=!1,this._element.classList.remove(P),this._element.classList.add(x),n.trigger(this._element,$)};this._element.style[S]="",this._queueCallback(v,this._element,!0)}_isShown(g=this._element){return g.classList.contains(H)}_configAfterMerge(g){return g.toggle=!!g.toggle,g.parent=a.getElement(g.parent),g}_getDimension(){return this._element.classList.contains(j)?V:p}_initializeChildren(){if(!this._config.parent)return;let g=this._getFirstLevelChildren(w);for(let S of g){let v=c.getElementFromSelector(S);v&&this._addAriaAndCollapsedClass([S],this._isShown(v))}}_getFirstLevelChildren(g){let S=c.find(q,this._config.parent);return c.find(g,this._config.parent).filter(v=>!S.includes(v))}_addAriaAndCollapsedClass(g,S){if(g.length)for(let v of g)v.classList.toggle(U,!S),v.setAttribute("aria-expanded",S)}static jQueryInterface(g){let S={};return typeof g=="string"&&/show|hide/.test(g)&&(S.toggle=!1),this.each(function(){let v=d.getOrCreateInstance(this,S);if(typeof g=="string"){if(typeof v[g]>"u")throw new TypeError(`No method named "${g}"`);v[g]()}})}}return n.on(document,F,w,function(h){(h.target.tagName==="A"||h.delegateTarget&&h.delegateTarget.tagName==="A")&&h.preventDefault();for(let g of c.getMultipleElementsFromSelector(this))d.getOrCreateInstance(g,{toggle:!1}).toggle()}),a.defineJQueryPlugin(d),d})});var $t=K((nt,kt)=>{(function(e,n){typeof nt=="object"&&typeof kt<"u"?n(nt,G(),bt(),Y()):typeof define=="function"&&define.amd?define(["exports","../dom/event-handler","../dom/selector-engine","./index"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.ComponentFunctions={},e.EventHandler,e.SelectorEngine,e.Index))})(nt,function(e,n,c,a){"use strict";let o=(l,y="hide")=>{let b=`click.dismiss${l.EVENT_KEY}`,L=l.NAME;n.on(document,b,`[data-bs-dismiss="${L}"]`,function(M){if(["A","AREA"].includes(this.tagName)&&M.preventDefault(),a.isDisabled(this))return;let R=c.getElementFromSelector(this)||this.closest(`.${L}`);l.getOrCreateInstance(R)[y]()})};e.enableDismissTrigger=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})});var qt=K((vt,Tt)=>{(function(e,n){typeof vt=="object"&&typeof Tt<"u"?Tt.exports=n(yt(),G(),$t(),Y()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./util/component-functions","./util/index"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.Toast=n(e.BaseComponent,e.EventHandler,e.ComponentFunctions,e.Index))})(vt,function(e,n,c,a){"use strict";let o="toast",y=".bs.toast",b=`mouseover${y}`,L=`mouseout${y}`,M=`focusin${y}`,R=`focusout${y}`,$=`hide${y}`,F=`hidden${y}`,H=`show${y}`,x=`shown${y}`,P="fade",U="hide",q="show",j="showing",V={animation:"boolean",autohide:"boolean",delay:"number"},p={animation:!0,autohide:!0,delay:5e3};class f extends e{constructor(m,r){super(m,r),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return p}static get DefaultType(){return V}static get NAME(){return o}show(){if(n.trigger(this._element,H).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(P);let r=()=>{this._element.classList.remove(j),n.trigger(this._element,x),this._maybeScheduleHide()};this._element.classList.remove(U),a.reflow(this._element),this._element.classList.add(q,j),this._queueCallback(r,this._element,this._config.animation)}hide(){if(!this.isShown()||n.trigger(this._element,$).defaultPrevented)return;let r=()=>{this._element.classList.add(U),this._element.classList.remove(j,q),n.trigger(this._element,F)};this._element.classList.add(j),this._queueCallback(r,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(q),super.dispose()}isShown(){return this._element.classList.contains(q)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(m,r){switch(m.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=r;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=r;break}}if(r){this._clearTimeout();return}let d=m.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){n.on(this._element,b,m=>this._onInteraction(m,!0)),n.on(this._element,L,m=>this._onInteraction(m,!1)),n.on(this._element,M,m=>this._onInteraction(m,!0)),n.on(this._element,R,m=>this._onInteraction(m,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(m){return this.each(function(){let r=f.getOrCreateInstance(this,m);if(typeof m=="string"){if(typeof r[m]>"u")throw new TypeError(`No method named "${m}"`);r[m](this)}})}}return c.enableDismissTrigger(f),a.defineJQueryPlugin(f),f})});var Pt=it(Ct()),te=it(It());var Mt=null;var z=class{static apiUrl=`${Mt}api/hackropole`;static isLogged(){return"auth"in window.localStorage}static async authorize(n){let c=await fetch(this.apiUrl+"/auth/authorize",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)});if(!c.ok)throw Error("authorize failed");return await c.json()}static async login(n){let c=await fetch(this.apiUrl+"/auth/authenticate",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)});if(!c.ok)throw Error("login failed");let a=await c.json();window.localStorage.setItem("auth",JSON.stringify(a))}static logout(){let n;"theme"in window.localStorage&&(n=window.localStorage.getItem("theme")),window.localStorage.clear(),n&&window.localStorage.setItem("theme",n),window.location.reload()}static async refresh(){let n=JSON.parse(window.localStorage.getItem("auth")),c=await fetch(this.apiUrl+"/auth/refresh",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)});c.ok||(alert("Authentication has expired, please try again after logging in."),this.logout());let a=await c.json();return window.localStorage.setItem("auth",JSON.stringify(a)),a}static async api(n,c={},a=!0){let o=JSON.parse(window.localStorage.getItem("auth")),l=new Headers({"Content-Type":"application/json"}),y=await fetch(this.apiUrl+n,{method:"post",headers:l,body:JSON.stringify({...o,...c})});if(y.status===401){let b=await this.refresh();y=await fetch(this.apiUrl+n,{method:"post",headers:l,body:JSON.stringify({...b,...c})})}if(!y.ok)throw Error(`API returned ${y.status}`);if(a)return await y.json()}static async getSelfUserData(){return await this.api("/user/self")}static async deleteUserData(){await this.api("/user/delete",{},!1)}static async voteChallenge(n){return await this.api("/vote/challenge",{challenge:n})}static async voteSolution(n){return await this.api("/vote/solution",{solution:n})}static async submission(n,c){return await this.api("/submit_flag",{challenge:n,flag:c})}static async submitWriteUp(n,c){return await this.api("/submit_solution",{challenge:n,url:c})}};var Ht=it(qt()),Yt="1";function jt(){let e=JSON.parse(window.sessionStorage.getItem("providers")),n=document.getElementById("login-providers");n.querySelector("div").classList.add("d-none"),n.querySelector("ul").classList.remove("d-none"),e.forEach(c=>{let a=document.createElement("li"),o=document.createElement("a"),l=document.createTextNode(`${n.dataset.prefix}${c.name}`),y=document.createElementNS("http://www.w3.org/2000/svg","svg"),b=document.createElementNS("http://www.w3.org/2000/svg","use");b.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+c.name.toLowerCase().replace(/[^a-z0-9_]+/g,"_")),y.classList.add("bi"),y.ariaHidden="true",y.appendChild(b),o.classList.add("dropdown-item"),o.classList.add("icon-link"),o.href=c.url,o.appendChild(y),o.appendChild(l),a.appendChild(o),n.querySelector("ul").appendChild(a)})}async function Jt(e){let n=await z.authorize({redirect_uri:e});window.sessionStorage.setItem("providers",JSON.stringify(n)),window.sessionStorage.setItem("providers_redirect_uri",e)}document.getElementById("btn-logout").addEventListener("click",e=>{e.preventDefault(),z.logout()});var xt=document.getElementById("menu-login").dataset.redirectUri;sessionStorage.getItem("providers_redirect_uri")===xt?jt():document.querySelector("#menu-login .spinner-border").addEventListener("animationstart",()=>{Jt(xt).then(()=>jt()).catch(()=>{new Ht.default(document.getElementById("toast-api-error")).show()})},{once:!0});z.isLogged()&&localStorage.getItem("version")!==Yt&&z.logout();document.getElementById("menu-login").classList.toggle("d-none",z.isLogged());document.getElementById("menu-account").classList.toggle("d-none",!z.isLogged());var Qt=`${window.location.origin}/${location.pathname.split("/")[1]}/index.json`,ne=new Pt.default({selector:"#challenges-search",data:{src:async()=>await(await fetch(Qt)).json(),keys:["title","content"],cache:!0,filter:function(e){e.sort(function(c,a){return c.key===a.key?0:c.key==="title"?-1:1});let n=new Set;return e.filter(function(c){return n.has(c.value.title)?!1:(n.add(c.value.title),!0)})}},diacritics:!0,threshold:0,resultsList:{tabSelect:!0,maxResults:void 0},resultItem:{element:(e,n)=>{let c=n.match.match(/([^\s]*.{0,10}<mark>.*<\/mark>.{0,10}[^\s]*)/);c&&(n.key==="title"?e.innerHTML=`<b>${n.value.title}</b>`:e.innerHTML=`<b>${n.value.title}</b> : ${c[1]}`)},highlight:!0}});document.querySelector("#challenges-search").addEventListener("selection",function(e){window.location=e.detail.selection.value.uri});document.addEventListener("keydown",e=>{e.target.tagName==="INPUT"||e.repeat||e.ctrlKey||(e.key==="/"?(document.getElementById("challenges-search").select(),e.preventDefault()):e.key==="t"&&(document.querySelector(".theme-switch").click(),e.preventDefault()))});document.querySelectorAll("[data-countdown]").forEach(e=>{let n=new Date(parseInt(e.dataset.countdown)).getTime(),c=()=>{let a=new Date().getTime(),o=n-a;o>=0?(e.querySelector(".countdown-day").textContent=Math.floor(o/864e5),e.querySelector(".countdown-hour").textContent=String(Math.floor(o%864e5/36e5)).padStart(2,"0"),e.querySelector(".countdown-min").textContent=String(Math.floor(o%36e5/6e4)).padStart(2,"0"),e.querySelector(".countdown-sec").textContent=String(Math.floor(o%6e4/1e3)).padStart(2,"0")):(e.querySelector(".countdown-day").textContent="0",e.querySelector(".countdown-hour").textContent="00",e.querySelector(".countdown-min").textContent="00",e.querySelector(".countdown-sec").textContent="00")};setInterval(c,500),c()});})();
/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
