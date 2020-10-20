(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[19],{108:function(t,e,n){var o={"./uv-ebook-reader_2.entry.js":[242,5,32]};function i(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],i=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id=108,t.exports=i},26:function(t,e,n){"use strict";var o;n.d(e,"a",(function(){return o})),function(t){t.CANVAS_RENDERINGS="canvasRenderings",t.CURRENT_VIEW="currentView",t.ENTIRE_DOCUMENT_AS_PDF="entireDocumentAsPdf",t.ENTIRE_DOCUMENT_AS_TEXT="entireDocumentAsText",t.ENTIRE_FILE_AS_ORIGINAL="entireFileAsOriginal",t.IMAGE_RENDERINGS="imageRenderings",t.MANIFEST_RENDERINGS="manifestRenderings",t.RANGE_RENDERINGS="rangeRenderings",t.SELECTION="selection",t.UNKNOWN="unknown",t.WHOLE_IMAGE_HIGH_RES="wholeImageHighRes",t.WHOLE_IMAGE_LOW_RES="wholeImageLowRes",t.WHOLE_IMAGES_HIGH_RES="wholeImagesHighRes"}(o||(o={}))},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o,i=n(4),r=n(18),a=n(26),s=n(3),c=n(1),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e=this;this.setConfig("downloadDialogue"),t.prototype.create.call(this),this.openCommand=i.a.SHOW_DOWNLOAD_DIALOGUE,this.closeCommand=i.a.HIDE_DOWNLOAD_DIALOGUE,this.component.subscribe(this.openCommand,(function(t){e.open(t)})),this.component.subscribe(this.closeCommand,(function(){e.close()})),this.$title=$("<h1>"+this.content.title+"</h1>"),this.$content.append(this.$title),this.$noneAvailable=$('<div class="noneAvailable">'+this.content.noneAvailable+"</div>"),this.$content.append(this.$noneAvailable),this.$downloadOptions=$('<ol class="options"></ol>'),this.$content.append(this.$downloadOptions),this.$footer=$('<div class="footer"></div>'),this.$content.append(this.$footer),this.$termsOfUseButton=$('<a href="#">'+this.extension.data.config.content.termsOfUse+"</a>"),this.$footer.append(this.$termsOfUseButton),this.$termsOfUseButton.onPressed((function(){e.component.publish(i.a.SHOW_TERMS_OF_USE)})),this.$element.hide(),this.updateTermsOfUseButton()},e.prototype.addEntireFileDownloadOptions=function(){if(this.isDownloadOptionAvailable(a.a.ENTIRE_FILE_AS_ORIGINAL)){this.$downloadOptions.empty();for(var t=this.extension.helper.getCurrentCanvas(),e=!1,n=t.getRenderings(),o=0;o<n.length;o++){var i=n[o],r=i.getFormat(),s="";r&&(s=r.toString()),this.addEntireFileDownloadOption(i.id,c.LanguageMap.getValue(i.getLabel()),s),e=!0}if(!e){var l=!1,p=t.getContent();for(o=0;o<p.length;o++){var u=p[o].getBody();if(u.length)(s=u[0].getFormat())&&(this.addEntireFileDownloadOption(u[0].id,"",s.toString()),l=!0)}l||this.addEntireFileDownloadOption(t.id,"","")}}},e.prototype.addEntireFileDownloadOption=function(t,e,n){var o;o=n?s.f.simplifyMimeType(n):this.getFileExtension(t),e||(e=this.content.entireFileAsOriginal),o&&(e+=" ("+o+")"),this.$downloadOptions.append('<li><a href="'+t+'" target="_blank" download tabindex="0">'+e+"</li>")},e.prototype.resetDynamicDownloadOptions=function(){this.renderingUrls=[],this.renderingUrlsCount=0,this.$downloadOptions.find("li.dynamic").remove()},e.prototype.getDownloadOptionsForRenderings=function(t,e,n){for(var o=t.getRenderings(),i=[],r=0;r<o.length;r++){var a=o[r];if(a){var l=c.LanguageMap.getValue(a.getLabel(),this.extension.getLocale()),p="downloadOption"+ ++this.renderingUrlsCount;l?l+=" ({0})":l=e;var u=s.f.simplifyMimeType(a.getFormat().toString());l=s.n.format(l,u),this.renderingUrls[p]=a.id;var h=$('<li class="option dynamic"><input id="'+p+'" data-mime="'+u+'" title="'+l+'" type="radio" name="downloadOptions" tabindex="0" /><label for="'+p+'">'+l+"</label></li>");i.push({type:n,button:h})}}return i},e.prototype.getSelectedOption=function(){return this.$downloadOptions.find("li.option input:checked")},e.prototype.getCurrentResourceId=function(){return this.extension.helper.getCurrentCanvas().externalResource.data.id},e.prototype.getCurrentResourceFormat=function(){var t=this.getCurrentResourceId();return t.substr(t.lastIndexOf(".")+1).toLowerCase()},e.prototype.updateNoneAvailable=function(){this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show()},e.prototype.updateTermsOfUseButton=function(){var t=this.extension.helper.getRequiredStatement();s.b.getBool(this.extension.data.config.options.termsOfUseEnabled,!1)&&t&&t.value?this.$termsOfUseButton.show():this.$termsOfUseButton.hide()},e.prototype.getFileExtension=function(t){var e=t.split(".").pop();return e.length>5||-1!==e.indexOf("/")?null:e},e.prototype.isMediaDownloadEnabled=function(){return this.extension.helper.isUIEnabled("mediaDownload")},e.prototype.isDownloadOptionAvailable=function(t){switch(t){case a.a.ENTIRE_FILE_AS_ORIGINAL:return this.isMediaDownloadEnabled()}return!0},e.prototype.close=function(){t.prototype.close.call(this)},e.prototype.resize=function(){this.setDockedPosition()},e}(r.a)},292:function(t,e,n){"use strict";n.r(e);var o,i=n(4),r=n(44),a=n(36),s=function(){function t(){}return t.namespace="ebookExtension.",t.CFI_FRAGMENT_CHANGE=t.namespace+"cfiFragmentChange",t.ITEM_CLICKED=t.namespace+"itemClicked",t.LOADED_NAVIGATION=t.namespace+"loadedNavigation",t.RELOCATED=t.namespace+"relocated",t.RENDITION_ATTACHED=t.namespace+"renditionAttached",t.TOC_READY=t.namespace+"tocReady",t}(),c=n(3),l=n(98),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))},h=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},f=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.create=function(){return u(this,void 0,void 0,(function(){var e=this;return h(this,(function(n){switch(n.label){case 0:return this.setConfig("ebookLeftPanel"),t.prototype.create.call(this),this._$container=$('<div class="container"></div>'),[4,Object(l.a)()];case 1:return n.sent(),Object(l.b)(window),this._ebookTOC=document.createElement("uv-ebook-toc"),this._$ebookTOC=$(this._ebookTOC),this.$main.addClass("disabled"),this.$main.append(this._$container),this._$container.append(this._$ebookTOC),this.setTitle(this.content.title),this.component.subscribe(s.LOADED_NAVIGATION,(function(t){e.$main.removeClass("disabled"),e._ebookTOC.toc=t.toc})),this.component.subscribe(s.RELOCATED,(function(t){e._ebookTOC.selected=t.start.href})),this._ebookTOC.addEventListener("itemClicked",(function(t){e.component.publish(s.ITEM_CLICKED,t.detail)}),!1),c.a.waitFor((function(){return void 0!==window.customElements}),(function(){customElements.whenDefined("uv-ebook-toc").then((function(){e.component.publish(s.TOC_READY)}))})),[2]}}))}))},e.prototype.expandFullStart=function(){t.prototype.expandFullStart.call(this),this.component.publish(i.a.LEFTPANEL_EXPAND_FULL_START)},e.prototype.expandFullFinish=function(){t.prototype.expandFullFinish.call(this),this.component.publish(i.a.LEFTPANEL_EXPAND_FULL_FINISH)},e.prototype.collapseFullStart=function(){t.prototype.collapseFullStart.call(this),this.component.publish(i.a.LEFTPANEL_COLLAPSE_FULL_START)},e.prototype.collapseFullFinish=function(){t.prototype.collapseFullFinish.call(this),this.component.publish(i.a.LEFTPANEL_COLLAPSE_FULL_FINISH)},e.prototype.resize=function(){t.prototype.resize.call(this),this._$container.height(this.$main.height()-this._$container.verticalPadding())},e}(a.a),d=n(27),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=function(t){function e(e){return t.call(this,e)||this}return _(e,t),e.prototype.create=function(){this.setConfig("downloadDialogue"),t.prototype.create.call(this)},e.prototype.open=function(e){t.prototype.open.call(this,e),this.addEntireFileDownloadOptions(),this.updateNoneAvailable(),this.resize()},e.prototype.isDownloadOptionAvailable=function(e){return t.prototype.isDownloadOptionAvailable.call(this,e)},e}(d.a),b=n(33),g=n(61),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),E=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))},v=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},O=function(t){function e(e){var n=t.call(this,e)||this;return n._ebookReaderReady=!1,n._state={},n._prevState={},n.attributionPosition=g.a.BOTTOM_RIGHT,n}return m(e,t),e.prototype.create=function(){return E(this,void 0,void 0,(function(){var e,n=this;return v(this,(function(o){switch(o.label){case 0:return this.setConfig("ebookCenterPanel"),t.prototype.create.call(this),[4,Object(l.a)()];case 1:return o.sent(),Object(l.b)(window),this._ebookReader=document.createElement("uv-ebook-reader"),this.$content.prepend(this._ebookReader),this._ebookReader.setAttribute("width","100%"),this._ebookReader.setAttribute("height","100%"),this._ebookReader.addEventListener("loadedNavigation",(function(t){n.component.publish(s.LOADED_NAVIGATION,t.detail)}),!1),this._ebookReader.addEventListener("relocated",(function(t){n.component.publish(s.RELOCATED,t.detail),n._cfi=t.detail.start.cfi,n.component.publish(s.CFI_FRAGMENT_CHANGE,n._cfi)}),!1),c.a.waitFor((function(){return void 0!==window.customElements}),(function(){customElements.whenDefined("uv-ebook-reader").then((function(){n._ebookReaderReady=!0}))})),e=this,this.component.subscribe(i.a.OPEN_EXTERNAL_RESOURCE,(function(t,n){e.openMedia(n)})),this.component.subscribe(s.ITEM_CLICKED,(function(t){n._nextState({cfi:t})})),this.component.subscribe(s.CFI_FRAGMENT_CHANGE,(function(t){c.a.waitFor((function(){return n._ebookReaderReady}),(function(){t!==n._cfi&&n._nextState({cfi:t})}))})),[2]}}))}))},e.prototype.openMedia=function(t){var e=this;this.extension.getExternalResources(t).then((function(){var t=e.extension.helper.getCurrentCanvas().getContent();if(t.length){var n=t[0].getBody();if(n.length){var o=n[0];e._nextState({bookPath:o.id})}}e.component.publish(i.a.EXTERNAL_RESOURCE_OPENED),e.component.publish(i.a.LOAD)}))},e.prototype._nextState=function(t){var e=this;this._state=Object.assign({},this._state,t),c.a.waitFor((function(){return e._ebookReaderReady}),(function(){e._state.bookPath&&e._state.bookPath!==e._prevState.bookPath&&e._ebookReader.load(e._state.bookPath),e._state.cfi&&e._state.cfi!==e._prevState.cfi&&e._ebookReader.display(e._state.cfi),e._prevState=Object.assign({},e._state)}))},e.prototype.resize=function(){var e=this;t.prototype.resize.call(this),this._ebookReaderReady&&setTimeout((function(){e._ebookReader.resize()}),10)},e}(b.a),w=n(28),A=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(t){function e(e){return t.call(this,e)||this}return A(e,t),e.prototype.create=function(){this.setConfig("mobileFooterPanel"),t.prototype.create.call(this)},e.prototype.resize=function(){t.prototype.resize.call(this),this.$options.css("left",Math.floor(this.$element.width()/2-this.$options.width()/2))},e}(w.a),D=n(45),R=n(51),P=n(46),I=n(34),F=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),L=function(t){function e(e){return t.call(this,e)||this}return F(e,t),e.prototype.create=function(){this.setConfig("settingsDialogue"),t.prototype.create.call(this)},e}(I.a),N=n(35),T=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(t){function e(e){return t.call(this,e)||this}return T(e,t),e.prototype.create=function(){this.setConfig("shareDialogue"),t.prototype.create.call(this)},e.prototype.update=function(){t.prototype.update.call(this),this.code=this.extension.getEmbedScript(this.options.embedTemplate,this.currentWidth,this.currentHeight),this.$code.val(this.code)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(N.a),k=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.component.subscribe(i.a.CANVAS_INDEX_CHANGE,(function(t){e.viewCanvas(t)})),this.component.subscribe(s.CFI_FRAGMENT_CHANGE,(function(t){e.cfiFragement=t,e.fire(s.CFI_FRAGMENT_CHANGE,e.cfiFragement)}))},e.prototype.createModules=function(){t.prototype.createModules.call(this),this.isHeaderPanelEnabled()?this.headerPanel=new D.a(this.shell.$headerPanel):this.shell.$headerPanel.hide(),this.isLeftPanelEnabled()?this.leftPanel=new f(this.shell.$leftPanel):this.shell.$leftPanel.hide(),this.centerPanel=new O(this.shell.$centerPanel),this.isRightPanelEnabled()?this.rightPanel=new P.a(this.shell.$rightPanel):this.shell.$rightPanel.hide(),this.isFooterPanelEnabled()?(this.footerPanel=new w.a(this.shell.$footerPanel),this.mobileFooterPanel=new C(this.shell.$mobileFooterPanel)):this.shell.$footerPanel.hide(),this.$moreInfoDialogue=$('<div class="overlay moreInfo" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$moreInfoDialogue),this.moreInfoDialogue=new R.a(this.$moreInfoDialogue),this.$shareDialogue=$('<div class="overlay share" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$shareDialogue),this.shareDialogue=new S(this.$shareDialogue),this.$downloadDialogue=$('<div class="overlay download" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$downloadDialogue),this.downloadDialogue=new y(this.$downloadDialogue),this.$settingsDialogue=$('<div class="overlay settings" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$settingsDialogue),this.settingsDialogue=new L(this.$settingsDialogue),this.isHeaderPanelEnabled()&&this.headerPanel.init(),this.isLeftPanelEnabled()&&this.leftPanel.init(),this.isRightPanelEnabled()&&this.rightPanel.init(),this.isFooterPanelEnabled()&&this.footerPanel.init()},e.prototype.isLeftPanelEnabled=function(){return!0},e.prototype.render=function(){t.prototype.render.call(this),this.checkForCFIParam()},e.prototype.getEmbedScript=function(t,e,n){var o=this.getAppUri()+"#?manifest="+this.helper.manifestUri+"&cfi="+this.cfiFragement;return c.n.format(t,o,e.toString(),n.toString())},e.prototype.checkForCFIParam=function(){var t=this.data.cfi;t&&this.component.publish(s.CFI_FRAGMENT_CHANGE,t)},e}(r.a);e.default=x},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o,i=n(4),r=n(18),a=n(23),s=n(3),c=n(56),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e=this;this.setConfig("moreInfoDialogue"),t.prototype.create.call(this),this.openCommand=i.a.SHOW_MOREINFO_DIALOGUE,this.closeCommand=i.a.HIDE_MOREINFO_DIALOGUE,this.component.subscribe(this.openCommand,(function(t){e.open(t)})),this.component.subscribe(this.closeCommand,(function(){e.close()})),this.config.content=this.extension.data.config.modules.moreInfoRightPanel.content,this.config.options=this.extension.data.config.modules.moreInfoRightPanel.options,this.$title=$("<h1>"+this.config.content.title+"</h1>"),this.$content.append(this.$title),this.$metadata=$('<div class="iiif-metadata-component"></div>'),this.$content.append(this.$metadata),this.metadataComponent=new c.MetadataComponent({target:this.$metadata[0]}),this.$element.hide()},e.prototype.open=function(e){t.prototype.open.call(this,e),this.metadataComponent.set(this._getData())},e.prototype._getData=function(){return{canvasDisplayOrder:this.config.options.canvasDisplayOrder,canvases:this.extension.getCurrentCanvases(),canvasExclude:this.config.options.canvasExclude,canvasLabels:this.extension.getCanvasLabels(this.content.page),content:this.config.content,copiedMessageDuration:2e3,copyToClipboardEnabled:s.b.getBool(this.config.options.copyToClipboardEnabled,!1),helper:this.extension.helper,licenseFormatter:null,limit:this.config.options.textLimit||4,limitType:c.LimitType.LINES,manifestDisplayOrder:this.config.options.manifestDisplayOrder,manifestExclude:this.config.options.manifestExclude,range:this.extension.getCurrentCanvasRange(),rtlLanguageCodes:this.config.options.rtlLanguageCodes,sanitizer:function(t){return Object(a.b)(t)},showAllLanguages:this.config.options.showAllLanguages}},e.prototype.close=function(){t.prototype.close.call(this)},e.prototype.resize=function(){this.setDockedPosition()},e}(r.a)}}]);