(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[138],{165:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_infinite_scroll",(function(){return s}));var i=n(10),o=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function l(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,l)}c((i=i.apply(t,e||[])).next())}))},r=function(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},s=function(){function t(t){var e=this;Object(i.o)(this,t),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var t=e.scrollEl;if(!t||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var i=t.scrollTop,o=t.scrollHeight,r=t.offsetHeight,s=0!==e.thrPc?r*e.thrPc:e.thrPx;if(("bottom"===e.position?o-n-i-s-r:i-n-s)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4},this.ionInfinite=Object(i.d)(this,"ionInfinite",7)}return t.prototype.thresholdChanged=function(){var t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)},t.prototype.disabledChanged=function(){var t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)},t.prototype.connectedCallback=function(){return o(this,void 0,void 0,(function(){var t,e,n=this;return r(this,(function(o){switch(o.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=o.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(i.p)((function(){n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)})),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},t.prototype.complete=function(){return o(this,void 0,void 0,(function(){var t,e,n=this;return r(this,(function(o){return t=this.scrollEl,this.isLoading&&t?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,e=t.scrollHeight-t.scrollTop,requestAnimationFrame((function(){Object(i.n)((function(){var o=t.scrollHeight-e;requestAnimationFrame((function(){Object(i.p)((function(){t.scrollTop=o,n.isBusy=!1}))}))}))}))),[2]):[2]}))}))},t.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},t.prototype.render=function(){var t,e=Object(i.g)(this),n=this.disabled;return Object(i.i)(i.a,{class:(t={},t[e]=!0,t["infinite-scroll-loading"]=this.isLoading,t["infinite-scroll-enabled"]=!n,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),t}()}}]);