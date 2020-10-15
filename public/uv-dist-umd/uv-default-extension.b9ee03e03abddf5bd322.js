(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[18],{29:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n,s=i(4),o=i(21),r=i(0),a=i(3),h=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(e){var i=t.call(this,e,!0,!0)||this;return i.isCreated=!1,i.isOpen=!1,i}return h(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.component.subscribe(s.a.CANVAS_INDEX_CHANGE,(function(t){e.selectIndex(parseInt(t))})),this.component.subscribe(s.a.LOGIN,(function(){e.loadThumbs()})),this.component.subscribe(s.a.CLICKTHROUGH,(function(){e.loadThumbs()})),this.$thumbs=$('<div class="thumbs"></div>'),this.$element.append(this.$thumbs);var i=this.extension.helper.getViewingDirection()||r.f.LEFT_TO_RIGHT;this.$thumbs.addClass(i);var n=this;$.templates({thumbsTemplate:'<div id="thumb{{>index}}" class="{{:~className()}}" data-src="{{>uri}}" data-visible="{{>visible}}" data-index="{{>index}}">                                <div class="wrap" style="height:{{>height + ~extraHeight()}}px"></div>                                <div class="info">                                    <span class="index">{{:#index + 1}}</span>                                    <span class="label" title="{{>label}}">{{>label}}&nbsp;</span>                                    <span class="searchResults" title="{{:~searchResultsTitle()}}">{{>data.searchResults}}</span>                                </div>                             </div>                             {{if ~separator()}}                                  <div class="separator"></div>                              {{/if}}'});var o=this.options.thumbsExtraHeight;$.views.helpers({separator:function(){return!1},extraHeight:function(){return o},className:function(){var t="thumb";0===this.data.index&&(t+=" first"),this.data.uri||(t+=" placeholder");var e=n.extension.helper.getViewingDirection();return!e||e!==r.f.LEFT_TO_RIGHT&&e!==r.f.RIGHT_TO_LEFT?n.extension.helper.isPaged()?t+=" twoCol":t+=" oneCol":t+=" twoCol",t},searchResultsTitle:function(){var t=Number(this.data.data.searchResults);return t?t>1?a.n.format(n.content.searchResults,t.toString()):a.n.format(n.content.searchResult,t.toString()):""}}),this.$element.on("scroll",(function(){e.scrollStop()}),100),this.resize()},e.prototype.databind=function(){this.thumbs&&(this._$thumbsCache=null,this.createThumbs(),this.loadThumbs(0),this.selectIndex(this.extension.helper.canvasIndex))},e.prototype.createThumbs=function(){var t=this;if(this.thumbs){for(var e=[],i=0;i<this.thumbs.length;i++){var n=this.thumbs[i];e.push(n.height)}var o=a.h.median(e);for(i=0;i<this.thumbs.length;i++){(n=this.thumbs[i]).height=o}this.$thumbs.link($.templates.thumbsTemplate,this.thumbs),this.$thumbs.undelegate(".thumb","click"),this.$thumbs.delegate(".thumb","click",(function(e){e.preventDefault();var i=$.view(this).data;t.lastThumbClickedIndex=i.index,t.component.publish(s.a.THUMB_SELECTED,i)})),this.setLabel(),this.isCreated=!0}},e.prototype.scrollStop=function(){var t=1/((this.$thumbs.height()-this.$element.height())/this.$element.scrollTop());t>1&&(t=1);var e=Math.floor((this.thumbs.length-1)*t);this.loadThumbs(e)},e.prototype.loadThumbs=function(t){if(void 0===t&&(t=this.extension.helper.canvasIndex),this.thumbs&&this.thumbs.length){var e,i=this.extension.helper.getCanvasByIndex(t).getContent();if(i.length){var n=i[0].getBody();if(n.length){var s=n[0].getType();s&&(e=s.toString().toLowerCase())}}for(var o=t,r=this.options.thumbsLoadRange,h={start:o>r?o-r:0,end:o<this.thumbs.length-1-r?o+r:this.thumbs.length-1},l=this.options.thumbsImageFadeInDuration,c=h.start;c<=h.end;c++){var u=this.getThumbByIndex(c),p=u.find(".wrap");if(!p.hasClass("loading")&&!p.hasClass("loaded"))if("false"!==u.attr("data-visible")){p.removeClass("loadingFailed"),p.addClass("loading"),e&&p.addClass(e);var d=u.attr("data-src");this.config.options.thumbsCacheInvalidation&&this.config.options.thumbsCacheInvalidation.enabled&&(d+=this.config.options.thumbsCacheInvalidation.paramType+"t="+a.c.getTimeStamp());var f=$('<img src="'+d+'" alt=""/>');f.hide(),f.on("load",(function(){$(this).fadeIn(l,(function(){$(this).parent().switchClass("loading","loaded")}))})),f.on("error",(function(){$(this).parent().switchClass("loading","loadingFailed")})),p.append(f)}else p.addClass("hidden")}}},e.prototype.show=function(){var t=this;this.isOpen=!0,this.$element.show(),setTimeout((function(){t.selectIndex(t.extension.helper.canvasIndex)}),1)},e.prototype.hide=function(){this.isOpen=!1,this.$element.hide()},e.prototype.isPDF=function(){var t=this.extension.helper.getCurrentCanvas().getType();return!!t&&t.toString().includes("pdf")},e.prototype.setLabel=function(){$(this.$thumbs).find("span.index").hide(),$(this.$thumbs).find("span.label").show()},e.prototype.addSelectedClassToThumbs=function(t){this.getThumbByIndex(t).addClass("selected")},e.prototype.selectIndex=function(t){-1!==t&&(this.thumbs&&this.thumbs.length&&(this.getAllThumbs().removeClass("selected"),this.$selectedThumb=this.getThumbByIndex(t),this.addSelectedClassToThumbs(t),~this.extension.getPagedIndices(t).indexOf(this.lastThumbClickedIndex)||this.$element.scrollTop(this.$selectedThumb.position().top),this.loadThumbs(t)))},e.prototype.getAllThumbs=function(){return this._$thumbsCache||(this._$thumbsCache=this.$thumbs.find(".thumb")),this._$thumbsCache},e.prototype.getThumbByIndex=function(t){return this.$thumbs.find('[data-index="'+t+'"]')},e.prototype.scrollToThumb=function(t){var e=this.getThumbByIndex(t);this.$element.scrollTop(e.position().top)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(o.a)},296:function(t,e,i){"use strict";i.r(e);var n,s=i(4),o=i(44),r=i(33),a=i(23),h=i(1),l=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}h((n=n.apply(t,e||[])).next())}))},u=function(t,e){var i,n,s,o,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(s=r.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){r.label=o[1];break}if(6===o[0]&&r.label<s[1]){r.label=s[1],s=o;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(o);break}s[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],n=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},p=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e=this;this.setConfig("fileLinkCenterPanel"),t.prototype.create.call(this),this.component.subscribe(s.a.OPEN_EXTERNAL_RESOURCE,(function(t){e.openMedia(t)})),this.$scroll=$('<div class="scroll"></div>'),this.$content.append(this.$scroll),this.$downloadItems=$("<ol></ol>"),this.$scroll.append(this.$downloadItems),this.$downloadItemTemplate=$('<li><img/><div class="col2"><a class="filename" target="_blank" download=""></a><span class="label"></span><a class="description" target="_blank" download=""></a></div></li>'),this.title=this.extension.helper.getLabel()},e.prototype.openMedia=function(t){return c(this,void 0,void 0,(function(){var e,i,n,o,r,l,c,p,d,f,b,m,g,y;return u(this,(function(u){switch(u.label){case 0:return[4,this.extension.getExternalResources(t)];case 1:for(u.sent(),e=this.extension.helper.getCurrentCanvas(),i=e.getContent(),o=0;o<i.length;o++)(r=i[o]).getBody().length&&(n=this.$downloadItemTemplate.clone(),l=n.find(".filename"),c=n.find(".label"),p=n.find("img"),d=n.find(".description"),f=r.getBody()[0],(b=f.getProperty("id"))&&(l.prop("href",b),l.text(b.substr(b.lastIndexOf("/")+1))),(m=h.LanguageMap.getValue(f.getLabel()))&&c.text(Object(a.b)(m)),(g=r.getProperty("thumbnail"))?p.prop("src",g):p.hide(),(y=f.getProperty("description"))&&(d.text(Object(a.b)(y)),b&&d.prop("href",b)),this.$downloadItems.append(n));return this.component.publish(s.a.EXTERNAL_RESOURCE_OPENED),this.component.publish(s.a.LOAD),[2]}}))}))},e.prototype.resize=function(){t.prototype.resize.call(this),this.title&&this.$title.text(Object(a.b)(this.title)),this.$scroll.height(this.$content.height()-this.$scroll.verticalMargins())},e}(r.a),d=i(28),f=i(45),b=i(50),m=i(46),g=i(55),y=i(34),v=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),_=function(t){function e(e){return t.call(this,e)||this}return v(e,t),e.prototype.create=function(){this.setConfig("settingsDialogue"),t.prototype.create.call(this)},e}(y.a),w=i(35),T=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),C=function(t){function e(e){return t.call(this,e)||this}return T(e,t),e.prototype.create=function(){this.setConfig("shareDialogue"),t.prototype.create.call(this)},e.prototype.update=function(){t.prototype.update.call(this),this.code=this.extension.getEmbedScript(this.options.embedTemplate,this.currentWidth,this.currentHeight),this.$code.val(this.code)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(w.a),x=i(3),E=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return E(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),$(window).bind("enterfullscreen",(function(){e.component.publish(s.a.TOGGLE_FULLSCREEN)})),$(window).bind("exitfullscreen",(function(){e.component.publish(s.a.TOGGLE_FULLSCREEN)})),this.component.subscribe(s.a.CANVAS_INDEX_CHANGE,(function(t){e.viewCanvas(t)})),this.component.subscribe(s.a.THUMB_SELECTED,(function(t){e.component.publish(s.a.CANVAS_INDEX_CHANGE,t)}))},e.prototype.createModules=function(){t.prototype.createModules.call(this),this.isHeaderPanelEnabled()?this.headerPanel=new f.a(this.shell.$headerPanel):this.shell.$headerPanel.hide(),this.isLeftPanelEnabled()&&(this.leftPanel=new g.a(this.shell.$leftPanel)),this.centerPanel=new p(this.shell.$centerPanel),this.isRightPanelEnabled()&&(this.rightPanel=new m.a(this.shell.$rightPanel)),this.isFooterPanelEnabled()?this.footerPanel=new d.a(this.shell.$footerPanel):this.shell.$footerPanel.hide(),this.$helpDialogue=$('<div class="overlay help" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$helpDialogue),this.helpDialogue=new b.a(this.$helpDialogue),this.$shareDialogue=$('<div class="overlay share" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$shareDialogue),this.shareDialogue=new C(this.$shareDialogue),this.$settingsDialogue=$('<div class="overlay settings" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$settingsDialogue),this.settingsDialogue=new _(this.$settingsDialogue),this.isLeftPanelEnabled()&&this.leftPanel.init(),this.isRightPanelEnabled()&&this.rightPanel.init()},e.prototype.render=function(){t.prototype.render.call(this)},e.prototype.isLeftPanelEnabled=function(){return x.b.getBool(this.data.config.options.leftPanelEnabled,!0)&&(this.helper.isMultiCanvas()||this.helper.isMultiSequence()||this.helper.hasResources())},e.prototype.getEmbedScript=function(t,e,i){var n=this.getAppUri()+"#?manifest="+this.helper.manifestUri+"&c="+this.helper.collectionIndex+"&m="+this.helper.manifestIndex+"&cv="+this.helper.canvasIndex;return x.n.format(t,n,e.toString(),i.toString())},e}(o.a);e.default=P},50:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n,s=i(4),o=i(18),r=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.create=function(){var e=this;this.setConfig("helpDialogue"),t.prototype.create.call(this),this.openCommand=s.a.SHOW_HELP_DIALOGUE,this.closeCommand=s.a.HIDE_HELP_DIALOGUE,this.component.subscribe(this.openCommand,(function(){e.open()})),this.component.subscribe(this.closeCommand,(function(){e.close()})),this.$title=$("<h1></h1>"),this.$content.append(this.$title),this.$scroll=$('<div class="scroll"></div>'),this.$content.append(this.$scroll),this.$message=$("<p></p>"),this.$scroll.append(this.$message),this.$title.text(this.content.title),this.$message.html(this.content.text),this.$message.targetBlank(),this.$element.hide()},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(o.a)},55:function(t,e,i){"use strict";var n,s=i(4),o=i(36),r=i(29),a=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this)},e}(r.a),l=i(0),c=i(3),u=i(1);i.d(e,"a",(function(){return d}));var p=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),d=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this),this.setTitle(this.content.title),this.$tabsContent=$('<div class="tabsContent"></div>'),this.$main.append(this.$tabsContent),this.$views=$('<div class="views"></div>'),this.$tabsContent.append(this.$views),this.$thumbsView=$('<div class="thumbsView"></div>'),this.$views.append(this.$thumbsView),this.$resourcesView=$('<div class="resourcesView"></div>'),this.$resources=$("<ul></ul>"),this.$resourcesView.append(this.$resources),this.$views.append(this.$resourcesView),this.thumbsView=new h(this.$thumbsView),this.dataBind()},e.prototype.dataBind=function(){this.dataBindThumbsView();var t=this.extension.helper.getCurrentCanvas().getResources();0===t.length&&this.$resourcesView.hide();for(var e=0;e<t.length;e++){var i=t[e].getResource();if(i){var n=u.LanguageMap.getValue(i.getLabel());if(n){var s=c.f.simplifyMimeType(i.getFormat().toString()),o=$('<li><a href="'+i.id+'" target="_blank">'+n+" ("+s+")</li>");this.$resources.append(o)}}}},e.prototype.dataBindThumbsView=function(){if(this.thumbsView){var t,e,i=this.extension.helper.getViewingDirection();!i||i!==l.f.LEFT_TO_RIGHT&&i!==l.f.RIGHT_TO_LEFT?(t=this.config.options.oneColThumbWidth,e=this.config.options.oneColThumbHeight):(t=this.config.options.twoColThumbWidth,e=this.config.options.twoColThumbHeight),void 0===t&&(t=100),void 0===e&&(e=100),this.thumbsView.thumbs=this.extension.helper.getThumbs(t,e),this.thumbsView.thumbs.length<2&&this.$thumbsView.hide(),this.thumbsView.databind()}},e.prototype.expandFullStart=function(){t.prototype.expandFullStart.call(this),this.component.publish(s.a.LEFTPANEL_EXPAND_FULL_START)},e.prototype.expandFullFinish=function(){t.prototype.expandFullFinish.call(this),this.component.publish(s.a.LEFTPANEL_EXPAND_FULL_FINISH)},e.prototype.collapseFullStart=function(){t.prototype.collapseFullStart.call(this),this.component.publish(s.a.LEFTPANEL_COLLAPSE_FULL_START)},e.prototype.collapseFullFinish=function(){t.prototype.collapseFullFinish.call(this),this.component.publish(s.a.LEFTPANEL_COLLAPSE_FULL_FINISH)},e.prototype.resize=function(){t.prototype.resize.call(this),this.$views.height(this.$main.height()),this.$resources.height(this.$main.height())},e}(o.a)}}]);