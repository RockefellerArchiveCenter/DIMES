(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[6,1],{17:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return c})),r.d(e,"createGesture",(function(){return h}));var i,n=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach((function(t){n=Math.max(n,t)})),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),s=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new n,u=function(t,e,r,i){var n,s,o=l(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(n="addEventListener",s="removeEventListener"),t[n](e,r,o),function(){t[s](e,r,o)}},l=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){i=!1}return!!i},d=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var e=!1,r=!1,i=!0,n=!1,s=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),o=s.canStart,a=s.onWillStart,l=s.onStart,h=s.onEnd,b=s.notCaptured,y=s.onMove,m=s.threshold,S={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},X=function(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(n?r:i)/h;return l=p>s?1:p<-s?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(s.direction,s.threshold,s.maxAngle),w=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),g=function(){e&&(n=!1,y&&y(S))},Y=function(){return!(w&&!w.capture())&&(e=!0,i=!1,S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp,a?a(S).then(G):G(),!0)},G=function(){l&&l(S),i=!0},D=function(){e=!1,r=!1,n=!1,i=!0,w.release()},_=function(t){var r=e,n=i;D(),n&&(p(S,t),r?h&&h(S):b&&b(S))},E=function(t,e,r,i,n){var s,o,a,c,l,h,p,f=0,v=function(i){f=Date.now()+2e3,e(i)&&(!o&&r&&(o=u(t,"touchmove",r,n)),a||(a=u(t,"touchend",y,n)),c||(c=u(t,"touchcancel",y,n)))},b=function(i){f>Date.now()||e(i)&&(!h&&r&&(h=u(d(t),"mousemove",r,n)),p||(p=u(d(t),"mouseup",m,n)))},y=function(t){S(),i&&i(t)},m=function(t){X(),i&&i(t)},S=function(){o&&o(),a&&a(),c&&c(),o=a=c=void 0},X=function(){h&&h(),p&&p(),h=p=void 0},w=function(){S(),X()},g=function(e){e?(s&&s(),l&&l(),s=l=void 0,w()):(s||(s=u(t,"touchstart",v,n)),l||(l=u(t,"mousedown",b,n)))};return{setDisabled:g,stop:w,destroy:function(){g(!0),i=r=e=void 0}}}(s.el,(function(t){var e=v(t);return!(r||!i)&&(f(t,S),S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp=e,S.velocityX=S.velocityY=S.deltaX=S.deltaY=0,S.event=t,(!o||!1!==o(S))&&(w.release(),!!w.start()&&(r=!0,0===m?Y():(X.start(S.startX,S.startY),!0))))}),(function(t){e?!n&&i&&(n=!0,p(S,t),requestAnimationFrame(g)):(p(S,t),X.detect(S.currentX,S.currentY)&&(X.isGesture()&&Y()||I()))}),_,{capture:!1}),I=function(){D(),E.stop(),b&&b(S)};return{setDisabled:function(t){t&&e&&_(void 0),E.setDisabled(t)},destroy:function(){w.destroy(),E.destroy()}}},p=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.timeStamp;f(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=v(e))-n;if(a>0&&a<100){var c=(s-r)/a,u=(o-i)/a;t.velocityX=.7*c+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}},f=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},v=function(t){return t.timeStamp||Date.now()}},95:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return n}));var i=r(17),n=function(t,e,r,n,s){var o=t.ownerDocument.defaultView;return Object(i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/o.innerWidth;n(e)},onEnd:function(t){var e=t.deltaX,r=o.innerWidth,i=e/r,n=t.velocityX,a=r/2,c=n>=0&&(n>.2||t.deltaX>a),u=(c?1-i:i)*r,l=0;if(u>5){var d=u/Math.abs(n);l=Math.min(d,540)}s(c,i<=0?.01:i,l)}})}}}]);