/*!
 * ··· Chatra | https://chatra.io/
 */
!function(a,b){function c(){}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b}function f(a,b){if(e(a)!=e(b))return!1;for(var c in a)if(a.hasOwnProperty(c)&&b[c]!=a[c])return!1;return!0}function g(a,b){new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)||(a.className+=" "+b)}function h(a,b){a.className=a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}function i(a){a.parentNode&&a.parentNode.removeChild(a)}function j(a){var c=["Webkit","Moz","ms"],d=b.createElement("div");if(void 0!==d.style[a])return!0;a=a.charAt(0).toUpperCase()+a.slice(1);for(var e in c)if(void 0!==d.style[c[e]+a])return!0;return!1}function k(a,b,c,d){return b?(a.addEventListener(b,c,!!d),function(){l(a,b,c,d)}):void 0}function l(a,b,c,d){b&&a.removeEventListener(b,c,!!d)}function m(a,c){var d=new Date;d.setTime(d.getTime()+31536e7),b.cookie=a+"="+c+";expires="+d.toGMTString()+";"}function n(a){var c=b.cookie.split(";");a+="=";for(var d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,e.length)}}function o(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function p(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))}function q(a){return a%2==1}function r(b){var c=!0;for(var d in b)b.hasOwnProperty(d)&&!{string:1,"boolean":1,number:1}[typeof b[d]]&&null!==b[d]&&(a.console&&a.console.warn&&a.console.warn("Chatra integration error: We accept Strings, Numbers, Booleans and null as integration property values. `"+d+"`’s type is `"+typeof b[d]+"`."),c=!1);return c}function s(a){for(var b in a)null!==a[b]&&(a[b]=a[b].toString());return a}function t(a){if(!a)return{};var b=document.createElement("a");return b.href=a,b}function u(a,c){if(u[a])return void(c&&c(null,u[a]));var d=b.createElement("script");d.async=!0,d.src=a,d.onload=function(){c&&c(null,u[a]=d)},d.onerror=function(a){c&&c(a)},b.head.appendChild(d)}function v(){function e(a){return function(){C[a].apply(C,arguments)}}var l=function(){arguments.length&&("function"==typeof l[arguments[0]]&&"_"!=arguments[0][0]?l[arguments[0]].apply(l,Array.prototype.slice.call(arguments,1)):console.warn("Chatra: No such method: "+arguments[0]))},C=l;d(l,{_init:function(){if(!a.ChatraID)return void console.warn("Chatra: No ChatraID specified, shutting down");if(w){var c=C._sniff=w(a.navigator.userAgent),d=C._setup=a.ChatraSetup||{},e=C._displayMode=d.mode||"widget";if(C._isMobile=c.features.mobile,"trident"==c.browser.engine&&c.browser.majorVersion&&c.browser.majorVersion<=8)return void C.kill();if("safari"==c.browser.name&&(C._isSafari=!0),"widget"==e&&d.mobileOnly===!0&&!C._isMobile)return void C.kill();if("widget"==e&&d.disabledOnMobile===!0&&C._isMobile)return void C.kill();C._features={transform:j("transform"),transition:j("transition")};var f=C._iframe=b.createElement("iframe"),g=C._wrapper=b.createElement("div"),h=C._style=b.createElement("style"),i=b.getElementsByTagName("head")[0],k=a.ChatraProtocol||("https:"===location.protocol?"https:":"http:"),l=a.ChatraHost||"chat.chatra.io",m=a.ChatraID,n=C._getClientId(),p=function(c){var d=function(){e||(!C._killed&&c(),e=!0)},e=!1;(b.attachEvent?"complete"===b.readyState:"loading"!==b.readyState)?d():(b.addEventListener("DOMContentLoaded",d,!1),a.addEventListener("load",d,!1))};i.appendChild(h),h.textContent=z,f.setAttribute("frameborder","0"),f.setAttribute("id","chatra__iframe"),f.setAttribute("allowtransparency","true"),g.setAttribute("id","chatra"),C._addAutoRemovableEvent(a,"message",function(a){var b;try{b=JSON.parse(a.data)}catch(c){return}b.type&&"string"==typeof b.type&&"Chatra"===b.sender&&C._messageHandler(b.type,b.data)}),C._addAutoRemovableEvent(a,"focus",function(){C._postMessage("focus")}),C._addAutoRemovableEvent(a,"blur",function(){C._postMessage("blur")}),d.groupId=window.ChatraGroupID||d.groupId,C._setReferrer();var q=(navigator.language||navigator.userLanguage||"en").split("-")[0],r="hostId="+m+"&mode="+encodeURIComponent(e)+(C._isMobile?"&isMobile=1":"")+(d.buttonStyle?"&buttonType="+d.buttonStyle:"")+"&lang="+q+(d.language&&"string"==typeof d.language?"&langOverride="+d.language:"")+(d.locale?"&locale="+encodeURIComponent(JSON.stringify(d.locale)):"")+("undefined"!=typeof d.groupId?"&groupId="+d.groupId:"")+"&clientId="+n+"&currentPage="+encodeURIComponent(location.href)+"&currentPageTitle="+encodeURIComponent(b.title)+"&referrer="+encodeURIComponent(C._referrer),s=k+"//"+l+"/?"+r.replace("&clientId","#clientId");switch(e){case"frame":var t,u=d.injectTo;if(!u)return console.warn("Chatra: `ChatraSetup.injectTo` is required when using `frame` mode!"),void C.kill();p(function(){return"string"==typeof u?t=b.getElementById(u):u[0]&&u[0].appendChild?t=u[0]:u.appendChild&&(t=u),t?(f.src=s,t.innerHTML="",t.appendChild(f),void(C._attachedToDom=!0)):(console.warn("Chatra: something is wrong with your `ChatraSetup.injectTo`"),void C.kill())});break;default:C._isMobile&&C._addClass("mobile-widget"),C._setButtonType("tab"),C._setChatPosition("br"),f.src=s,f.style.position="absolute",g.appendChild(f),p(function(){if("webkit"==c.browser.engine&&C._addAutoRemovableEvent(g,"wheel",function(a){C._chatExpanded&&o(a)}),C._isMobile&&C._features.transform){setTimeout(function(){C._adjustZoomLevel()},100);var d=C._adjustZoomLevel.bind(C);C._addAutoRemovableEvent(b.body,"touchend",d),C._addAutoRemovableEvent(a,"scroll",d),C._addAutoRemovableEvent(a,"orientationchange",d),C._addAutoRemovableEvent(a,"resize",d)}if(b.body.appendChild(g),C._attachedToDom=!0,a.Shopify&&"function"==typeof a.doShift){var e=a.doShift;a.doShift=function(){var a,b=g.style.position;return g.style.position="absolute",a=e.apply(this,arguments),g.style.position=b,a}}})}a.ChatraIntegration&&C.setIntegrationData(a.ChatraIntegration),d.startHidden&&C.hide(),C.setZIndex("number"==typeof d.zIndex?d.zIndex:C._zIndex),"function"==typeof d.onInit&&d.onInit(),d.colors&&C.setColors(d.colors),d.chatWidth&&C.setChatWidth(d.chatWidth),d.buttonSize&&C.setButtonSize(d.buttonSize),d.chatHeight&&C.setChatHeight(d.chatHeight),d.buttonPosition&&C.setButtonPosition(d.buttonPosition),C.pageView();for(var v=0;v<B.length;v++)C.apply(C,B[v])}},_chatWidth:340,_chatMinWidth:150,_chatHeight:480,_labelHeight:40,_mobileLabelHeight:45,_roundButtonSize:y,_labelMinWidth:80,_zIndex:9999,setIntegrationData:function(a){r(a)&&C._postMessage("integrationData",s(a))},updateIntegrationData:function(a){r(a)&&C._postMessage("updateIntegrationData",s(a))},pageView:function(){var a={currentPage:b.location.href,currentPageTitle:b.title,referrer:C._referrer};f(C._lastPageData,a)||(C._lastPageData=a,C._chatReady?C._sendPageInfo(a):C._pageInfoQ.push(a),C._setStoredItem("Chatra.lastPageViewAt",+new Date+""))},setChatWidth:function(a){"number"==typeof a&&(C._chatWidth=a,C._recalcChatSize())},setButtonSize:function(a){"number"==typeof a&&(20>a&&(a=20),C._roundButtonSize=a,C._recalcChatSize())},setChatHeight:function(a){"number"==typeof a&&(C._chatHeight=a,C._recalcChatSize())},setZIndex:function(a){"number"==typeof a&&(C._zIndex=a,C._refreshZIndex())},setButtonPosition:function(a){return-1==["lt","lm","lb","bl","bc","br","rt","rm","rb"].indexOf(a)?void console.warn("Chatra: invalid `positionCode`!"):void C._postMessage("setPosition",a)},resetButtonPosition:function(){C._postMessage("resetPosition")},setColors:function(a){C._postMessage("colors",a)},resetColors:function(){C._postMessage("resetColors")},_openChat:function(a){C._postMessage("openChat",!!a)},openChat:function(a){"widget"==C._displayMode&&C._openChat(!!a)},expandWidget:function(a){"widget"==C._displayMode&&(C._isMobile||C._openChat(!!a))},minimizeWidget:function(){"widget"==C._displayMode&&C._postMessage("collapseChat")},expandChat:e("expandWidget"),collapseChat:e("minimizeWidget"),closeChat:e("minimizeWidget"),hide:function(){"widget"==C._displayMode&&(C._chatHiddenByUser=!0,C._refreshChatVisibility())},show:function(){"widget"==C._displayMode&&(C._chatHiddenByUser=!1,C._refreshChatVisibility())},hideChat:e("hide"),showChat:e("show"),setGroupId:function(a){"undefined"!=typeof a&&C._postMessage("setGroupId",a)},_messageHandler:function(a,b){switch(a){case"setHostedItem":if(!b||"object"!=typeof b||"string"!=typeof b.key)return;C._setHostedItem(b.key,b.value);break;case"apiReady":C._apiReady=!0,C._sendMessageQ();break;case"readyToRetriveHostedStorage":C._sendHostedStorage();break;case"readyToRetriveData":C._chatReady=!0,C._sendFocus(),C._resolvePageInfoQ();break;case"headerReady":C._chatRendered=!0,"function"==typeof C._setup.onRendered&&C._setup.onRendered(),C._refreshChatVisibility();break;case"collapseWindow":C._collapseChatWindow();break;case"expandWindow":C._expandChatWindow();break;case"hideChat":C._hideChatFromFrame();break;case"showChat":C._showChatFromFrame();break;case"setPosition":if(!b||"string"!=typeof b)return;C._setChatPosition(b);break;case"buttonType":if(!b||"string"!=typeof b)return;C._setButtonType(b);break;case"titleBlink":C._titleBlink(b);break;case"banned":C._setStoredItem("Chatra.banned",!!b),C._refreshChatVisibility();break;case"restart":C.restart();break;case"analyticsEvent":if(!b||"string"!=typeof b)return;C._logAnalyticsEvent(b);break;case"labelWidth":if("number"!=typeof b&&null!==b)return;C._animating(),C._computedLabelWidth=b,C._recalcChatSize();break;case"enableThirdPartyScripts":C._watchAt();break;case"connectToP":if(!b||!b.md5)return;C._connectToP(b)}},_hideChatFromFrame:function(){C._chatHiddenByFrame=!0,C._refreshChatVisibility()},_showChatFromFrame:function(){C._chatHiddenByFrame=!1,C._refreshChatVisibility()},_getScaleLevel:function(){var c,d=a.screen,e=d.width;return{90:1,"-90":1}[a.orientation]&&("ios"==C._sniff.os.name&&"webkit"==C._sniff.browser.engine||"winphone"==C._sniff.os.name&&"trident"==C._sniff.browser.engine)&&(e=d.height),c=e<b.documentElement.clientWidth?a.innerWidth/e:a.innerWidth/b.documentElement.clientWidth},_adjustZoomLevel:function(){if(C._features.transform){var a=1;C._chatExpanded||(a=C._getScaleLevel()),C._setZoomLevel(a)}},_setZoomLevel:function(a){a>.9&&1.1>a&&(a=1),a=a.toFixed(2),a>1&&"webkit"==C._sniff.browser.engine&&"ios"==C._sniff.os.name&&(a=1),a!=C._scale&&(C._transform.scale=a,C._recalcTransform(),C._scale=a)},_transform:{},_recalcTransform:function(){var a=(C._transform,"");for(var b in C._transform)C._transform[b]&&C._transform.hasOwnProperty(b)&&(a+=" "+b+"("+C._transform[b]+")");a||(a="none"),C._wrapper.style.transform=C._wrapper.style.WebkitTransform=C._wrapper.style.MozTransform=C._wrapper.style.msTransform=a},_refreshZIndex:function(){C._wrapper.style.zIndex=C._chatExpanded&&C._isMobile?2147483647:C._zIndex},_refreshChatVisibility:function(){!C._chatRendered||C._chatHiddenByUser||C._chatHiddenByFrame||"true"===C._getStoredItem("Chatra.banned")?(C._visible=!1,C._removeClass("visible"),C._postMessage("visible",!1)):(C._visible=!0,C._addClass("visible"),C._postMessage("visible",!0),C._isSafari&&C._safariForceRedraw()),C._refreshMobileBodyFix(),C._refreshMobileViewportFix()},_refreshMobileBodyFix:function(){C._isMobile&&"widget"==C._displayMode&&(C._visible&&C._chatExpanded?(C._lastScrollTop=b.body.scrollTop,C._lastScrollLeft=b.body.scrollLeft,g(b.body,"chatra-mobile-widget-expanded")):(h(b.body,"chatra-mobile-widget-expanded"),C._lastScrollTop&&(b.body.scrollTop=C._lastScrollTop),C._lastScrollLeft&&(b.body.scrollLeft=C._lastScrollLeft)))},_refreshMobileViewportFix:function(){if(C._isMobile&&"widget"==C._displayMode&&("android"==C._sniff.os.name&&"webkit"==C._sniff.browser.engine&&C._sniff.os.majorVersion>=4||"ios"==C._sniff.os.name&&"webkit"==C._sniff.browser.engine))if(C._visible&&C._chatExpanded){var a=b.querySelector('meta[name="viewport"]');a||(a=b.createElement("meta"),a.setAttribute("name","viewport"),document.head.appendChild(a)),C._lastMetaViewportValue=a.getAttribute("content")||"",a.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")}else{var a=b.querySelector('meta[name="viewport"]');a&&"string"==typeof C._lastMetaViewportValue&&a.setAttribute("content",C._lastMetaViewportValue)}},_chatExpanded:!1,_expandChatWindow:function(){C._chatExpanded=!0,C._addClass("expanded"),C._refreshZIndex(),C._adjustZoomLevel(),C._isSafari&&(C._isToggling=!0),C._animating(function(){C._isSafari&&(C._isToggling=!1,C._recalcChatSize()),C._refreshMobileViewportFix(),setTimeout(C._refreshMobileBodyFix.bind(C),250)}),C._recalcChatSize()},_collapseChatWindow:function(){C._chatExpanded=!1,C._refreshMobileViewportFix(),C._refreshMobileBodyFix(),C._removeClass("expanded"),C._isSafari&&(C._isToggling=!0),C._animating(function(){C._isSafari&&(C._isToggling=!1,C._recalcChatSize()),C._adjustZoomLevel(),C._refreshZIndex()}),C._recalcChatSize()},_animating:function(a){if(!C._features.transition||!C._chatRendered||"round"==C._buttonType||C._isMobile)return void(a&&a());C._addClass("animating"),clearTimeout(C._animatingTimer);var b=x+30;C._animatingTimer=setTimeout(function(){C._removeClass("animating"),a&&a()},b)},_setChatPosition:function(a){var b={r:"right",l:"left",c:"center",t:"top",b:"bottom",m:"middle"},c=b[a.charAt(0)],d=b[a.charAt(1)];if(C._isMobile){var e=["0%","0%"];"center"==d&&(e[0]="50%"),("right"==d||"right"==c)&&(e[0]="100%"),"middle"==d&&(e[1]="50%"),"bottom"==c&&(e[1]="100%"),C._wrapper.style.transformOrigin=C._wrapper.style.WebkitTransformOrigin=C._wrapper.style.MozTransformOrigin=C._wrapper.style.msTransformOrigin=e.join(" ")}C._side&&C._removeClass("side-"+C._side),C._position&&C._removeClass("pos-"+C._position),C._addClass("side-"+c),C._addClass("pos-"+d),C._side=c,C._position=d,C._recalcChatSize()},_setButtonType:function(a){C._buttonType&&C._removeClass("style-"+C._buttonType),C._addClass("style-"+a),C._buttonType=a,C._recalcChatSize()},_recalcChatSize:function(){var a,b,c=C._chatExpanded&&C._isMobile;C._chatExpanded?(a=Math.max(C._chatWidth,C._chatMinWidth),b=C._chatHeight):"round"==C._buttonType?a=b=C._roundButtonSize+10:(a=Math.max(C._computedLabelWidth||C._chatWidth,C._labelMinWidth),b=C._isMobile?C._mobileLabelHeight:C._labelHeight,{left:1,right:1}[C._side]&&(b=[a,a=b][0])),"center"==C._position&&!c&&q(a)?C._addClass("correct-odd-width"):C._removeClass("correct-odd-width"),"middle"==C._position&&!C._chatExpanded&&q(b)?C._addClass("correct-odd-height"):C._removeClass("correct-odd-height"),c?(C._wrapper.style.width="100%",C._wrapper.style.height="100%"):(C._wrapper.style.width=a+"px",C._wrapper.style.height=b+"px"),C._transform.translateY="middle"!=C._position||C._chatExpanded?"top"!=C._position||C._chatExpanded||"round"==C._buttonType?void 0:C._isToggling&&C._isSafari?b+"px":"100%":C._isToggling&&C._isSafari?b/2+"px":"50%",C._transform.translateX="center"!=C._position||c?void 0:"-50%",C._recalcTransform()},_postMessageQ:[],_postMessage:function(a,b){C._apiReady?C._iframe.contentWindow&&C._iframe.contentWindow.postMessage(JSON.stringify({type:a,data:b,sender:"Chatra"}),"*"):C._postMessageQ.push([a,b])},_sendMessageQ:function(){for(;C._postMessageQ.length;)C._postMessage.apply(C,C._postMessageQ.shift())},_pageInfoQ:[],_resolvePageInfoQ:function(){for(;C._pageInfoQ.length;)C._sendPageInfo(C._pageInfoQ.shift())},_sendPageInfo:function(a){C._postMessage("clientData",a)},_sendFocus:function(){var a=b.hasFocus?b.hasFocus():!0;C._postMessage(a?"focus":"blur")},_getClientId:function(){var a=C._getStoredItem("Chatra.clientId"),b=C._setup.clientId;if(b){var c=typeof b;("string"===c||"number"===c)&&(a=b)}if(a)return a;for(var d=(+new Date+"").split(""),e="abcdefghijklmnopqrstuvwxyz".split("");e.length;)d.splice(p(d.length-1),0,e.splice(p(e.length-1),1)[0]);return a=d.join(""),C._setStoredItem("Chatra.clientId",a),a},_setReferrer:function(){var a=b.referrer;if(a&&t(a).host!==location.host)C._referrer=a;else{var c=+(C._getStoredItem("Chatra.lastPageViewAt")||"");C._referrer=new Date-c>36e5?a:C._getStoredItem("Chatra.referrer")||""}C._setStoredItem("Chatra.referrer",C._referrer||"")},_getHostedStorage:function(){var a;try{a=JSON.parse(C._getStoredItem("Chatra.hostedItems"))}catch(b){a={},C._setStoredItem("Chatra.hostedItems","{}")}return a},_sendHostedStorage:function(){C._postMessage("hostedStorage",C._getHostedStorage())},_setHostedItem:function(a,b){if("string"==typeof a){var c=C._getHostedStorage();c[a]=b,C._setStoredItem("Chatra.hostedItems",JSON.stringify(c))}},_getStoredItem:function(a){var b;try{b=localStorage.getItem(a)}catch(c){}return b||n(a)},_setStoredItem:function(a,b){try{localStorage.setItem(a,b)}catch(c){m(a,b)}},_addClass:function(a){for(var b=C._wrapper,c=[].concat(a),d=c.length-1;d>=0;d--)g(b,"chatra--"+c[d])},_removeClass:function(a){for(var b=C._wrapper,c=[].concat(a),d=c.length-1;d>=0;d--)h(b,"chatra--"+c[d])},_safariForceRedraw:function(){C._wrapper.style.zIndex=C._zIndex-1,C._wrapper.offsetWidth,C._refreshZIndex()},_titleBlink:function(a){clearTimeout(C._titleBlink._timeout),C._titleBlink.originalNow&&a?(C._titleBlink.originalTitle=b.title,b.title=C._titleBlink.newTitle=a):(b.title!==C._titleBlink.newTitle&&(C._titleBlink.originalTitle=b.title),b.title=C._titleBlink.originalTitle),C._titleBlink.originalNow=!a||!C._titleBlink.originalNow,a&&(C._titleBlink._timeout=setTimeout(function(){C._titleBlink(a)},p(1e3,2e3)))},_logAnalyticsEvent:function(b){"function"==typeof C._setup.onAnalyticEvent&&C._setup.onAnalyticEvent(b);var c;a.GoogleAnalyticsObject&&"function"==typeof a[a.GoogleAnalyticsObject]?c=a[a.GoogleAnalyticsObject]:"function"==typeof a.ga&&(c=a.ga),c?c("send","event","Chatra",b):a._gaq&&"function"==typeof a._gaq.push&&a._gaq.push(["_trackEvent","Chatra",b]);var d,e=a.Ya&&a.Ya.Metrika&&"function"==typeof a.Ya.Metrika.counters&&a.Ya.Metrika.counters(),f=e&&e[0]&&e[0].id;f&&a["yaCounter"+f]&&(d=a["yaCounter"+f]),d&&d.reachGoal&&d.reachGoal("Chatra_"+b.replace(/\s/g,"_"))},_watchAt:function(){C._addAutoRemovableEvent(a,"change",function(a){var b=a.target.value,c=b.match(A["@"]);c&&c[0]&&C._postMessage("prepareToP",c[0])})},_pQ:[],_connectToP:function(a){if(a){var b=5365;C._isConnectingToP?C._pQ.push(a):(C._isConnectingToP=!0,u("//pippio.com/api/sync?pid="+b+"&it=4&iv="+a.md5+"&it=4&iv="+a.sha1+"&it=4&iv="+a.sha256,function(){C._isConnectingToP=!1,C._connectToP(C._pQ.shift())}))}},_eventRemovers:[],_addAutoRemovableEvent:function(){C._eventRemovers.push(k.apply(C,arguments))},_cleanEventListeners:function(){for(var a=C._eventRemovers.length-1;a>=0;a--)C._eventRemovers[a]()},restart:function(){v()},kill:function(){C._cleanEventListeners(),C._iframe&&(i(C._iframe),C._iframe.src=""),C._wrapper&&i(C._wrapper),C._killed=!0;for(var b in a.Chatra)a.Chatra.hasOwnProperty(b)&&"function"==typeof a.Chatra[b]&&"restart"!=b&&(a.Chatra[b]=c)}}),a.Chatra&&a.Chatra.kill&&a.Chatra.kill(),a.Chatra=l,a.Chatra._init()}var w=function(a){function b(){for(var a in g)c(g[a])}function c(b){for(var c=0;c<b.length;c++){for(var e=!0,f=0;f<b[c].test.length;f++)if(b[c].test[f]instanceof RegExp){if(!b[c].test[f].test(a)){e=!1;break}}else if(-1==a.indexOf(b[c].test[f])){e=!1;break}if(e){d(b[c]);break}}}function d(a){for(var b in g)if(g.hasOwnProperty(b)&&a[b]){if(a[b].$version){var c=e(a[b].$version.search);if(c){var d=c.split("."),h=a[b].$version.names,i=a[b].$version.altNames;if(a[b].version=c,d[0]&&(a[b].majorVersion=parseInt(d[0])),d[1]&&(a[b].minorVersion=parseInt(d[1])),d[2]&&(a[b].patchVersion=parseInt(d[2])),h)for(var j,k=[],l=0;l<d.length;l++)k.push(d[l]),j=k.join("."),h[j]&&(a[b].versionName=h[j]),i&&i[j]&&(a[b].versionAltNames=i[j])}}for(var m in a[b])a[b].hasOwnProperty(m)&&"$"!==m[0]&&(f[b][m]=a[b][m])}}function e(b){var c;if(b instanceof RegExp){if(c=(a.match(b)||[])[0],!c)return}else c=b;var d,e=a.indexOf(c);if(-1!=e&&(d=a.substring(e+c.length),regexpResult=/^(\d+(\.|_)){0,2}\d+/.exec(d),regexpResult))return regexpResult[0].replace(/_/g,".")}var f={browser:{fullName:"",name:"",version:"",majorVersion:null,minorVersion:null,patchVersion:null,engine:""},os:{fullName:"",name:"",version:"",versionName:"",versionAltNames:[],majorVersion:null,minorVersion:null,patchVersion:null},features:{bw:!1,mobile:!1,tv:!1,proxy:!1}},g={browser:[{test:["SailfishBrowser"],browser:{fullName:"Sailfish Browser",name:"sailfishbrowser",engine:"gecko",$version:{search:"SailfishBrowser/"}},features:{mobile:!0}},{test:["Edge/"],browser:{fullName:"Edge",name:"edge",engine:"edgehtml",$version:{search:"Edge/"}}},{test:["MSIE"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"MSIE "}}},{test:["Trident"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"rv:"}}},{test:["OPR/"],browser:{fullName:"Opera",name:"opera",engine:"webkit",$version:{search:"OPR/"}}},{test:["Chrome"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"Chrome/"}}},{test:["Firefox"],browser:{fullName:"Firefox",name:"firefox",engine:"gecko",$version:{search:"Firefox/"}}},{test:["NokiaBrowser"],browser:{fullName:"Nokia Browser",name:"nokiabrowser",engine:"webkit",$version:{search:"NokiaBrowser/"}},features:{mobile:!0}},{test:["Opera Mini","Presto"],browser:{fullName:"Opera Mini",name:"operamini",engine:"presto",$version:{search:"Version/"}},features:{mobile:!0,proxy:!0}},{test:["Opera Mini","WebKit"],browser:{fullName:"Opera Mini",name:"operamini",engine:"webkit"},features:{mobile:!0,proxy:!0}},{test:["Opera"],browser:{fullName:"Opera",name:"opera",engine:"presto",$version:{search:"Version/"}}},{test:["OviBrowser"],browser:{fullName:"Ovi Browser",name:"ovi",engine:"gecko",$version:{search:"OviBrowser/"}},features:{mobile:!0,proxy:!0}},{test:["CriOS/"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"CriOS/"}}},{test:["Coast/"],browser:{fullName:"Opera Coast",name:"coast",engine:"webkit",$version:{search:"Coast/"}}},{test:["Safari","Version/",/(iPhone|iPod|iPad|Macintosh|Windows)/],browser:{fullName:"Safari",name:"safari",engine:"webkit",$version:{search:"Version/"}}},{test:["WebKit"],browser:{engine:"webkit"}},{test:["Gecko/"],browser:{engine:"gecko"}}],os:[{test:["Sailfish"],os:{fullName:"Sailfish OS",name:"sailfish"},features:{mobile:!0}},{test:["Windows Phone"],os:{fullName:"Windows Phone",name:"winphone",$version:{search:"Windows Phone "}},features:{mobile:!0}},{test:["Windows"],os:{fullName:"Windows",name:"win",$version:{search:"Windows NT ",names:{"10.0":"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP",5.01:"2000","5.0":"2000"},altNames:{5.2:["Server 2003"]}}}},{test:["Macintosh","OS X 10"],os:{fullName:"Mac OS X",name:"osx",$version:{search:/OS X /,names:{10.6:"Snow Leopard",10.7:"Lion",10.8:"Mountain Lion",10.9:"Mavericks","10.10":"Yosemite",10.11:"El Capitan"}}}},{test:["Ubuntu"],os:{fullName:"Ubuntu",name:"ubuntu"}},{test:["Fedora"],os:{fullName:"Fedora",name:"fedora",$version:{search:"Fedora/",names:{20:"Heisenbug",19:"Schrödinger's Cat",18:"Spherical Cow",17:"Beefy Miracle",16:"Verne",15:"Lovelock",14:"Laughlin",13:"Goddard",12:"Constantine",11:"Leonidas",10:"Cambridge",9:"Sulphur",8:"Werewolf",7:"Moonshine"}}}},{test:["Kindle"],os:{fullName:"Kindle",name:"kindle",$version:{search:"Kindle/"}},features:{bw:!0,mobile:!0}},{test:[/(BlackBerry|BB\d+)/],os:{fullName:"BlackBerry",name:"blackberry",$version:{search:"Version/"}},features:{mobile:!0}},{test:["Symbian"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["Series40"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["PlayStation Vita"],os:{fullName:"PlayStation Vita",name:"psvita"},features:{mobile:!0}},{test:["Nintendo DSi"],os:{fullName:"Nintendo DSi",name:"dsi"},features:{mobile:!0}},{test:["New Nintendo 3DS"],os:{fullName:"New Nintendo 3DS",name:"n3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Nintendo 3DS"],os:{fullName:"Nintendo 3DS",name:"3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Viera"],os:{fullName:"Viera",name:"viera"},browser:{engine:"webkit"},features:{tv:!0}},{test:["SonyDTV"],features:{tv:!0}},{test:["Android"],os:{fullName:"Android",name:"android",$version:{search:"Android "}},features:{mobile:!0}},{test:[/iPhone|iPod|iPad/],os:{fullName:"iOS",name:"ios",$version:{search:"OS "}},features:{mobile:!0}}],features:[{test:[/mobile/i],features:{mobile:!0}},{test:[/smart-{0,1}tv/i],features:{tv:!0}}]};return a?(b(),f):f},x=350,y=60,z="#chatra{visibility:hidden;opacity:0;position:fixed;max-height:95%;max-width:90%;max-width:calc(100% - 40px);transition:0.2s linear;transition-property:visibility, opacity;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:auto;height:auto;min-height:0;min-width:0;display:block;box-sizing:content-box;padding:0;margin:0} #chatra.chatra--animating{transition:"+x+"ms cubic-bezier(.04,.74,.4,.98);transition-property:height, width, max-width, max-height, top, bottom, left, right, margin-bottom, visibility, opacity, transform, -webkit-transform, -moz-transform;}#chatra.chatra--animating.chatra--mobile-widget{transition:none;} #chatra.chatra--animating.chatra--style-round{transition:none;} #chatra.chatra--side-bottom{bottom:0;} #chatra.chatra--side-bottom.chatra--style-round:not(.chatra--expanded){bottom:15px;} #chatra.chatra--side-left{left:0;} #chatra.chatra--side-left.chatra--style-round:not(.chatra--expanded){left:15px;} #chatra.chatra--side-right{right:0;} #chatra.chatra--side-right.chatra--style-round:not(.chatra--expanded){right:15px;} #chatra.chatra--side-left.chatra--expanded{bottom:0;left:20px;} #chatra.chatra--side-right.chatra--expanded{bottom:0;right:20px;} #chatra.chatra--pos-right{right:20px;} #chatra.chatra--pos-right.chatra--style-round:not(.chatra--expanded){right:15px;} #chatra.chatra--pos-left{left:20px;} #chatra.chatra--pos-left.chatra--style-round:not(.chatra--expanded){left:15px;} #chatra.chatra--pos-center{left:50%;} #chatra.chatra--pos-top.chatra--style-tab:not(.chatra--expanded){bottom:100%;margin-bottom:-40px;max-height:90%;max-height:calc(100% - 80px);} #chatra.chatra--pos-top.chatra--style-round:not(.chatra--expanded){top:15px;} #chatra.chatra--pos-bottom:not(.chatra--expanded){bottom:40px;max-height:90%;max-height:calc(100% - 80px);} #chatra.chatra--pos-bottom.chatra--style-round:not(.chatra--expanded){bottom:15px;} #chatra.chatra--pos-middle:not(.chatra--expanded){bottom:50%;max-height:90%;max-height:calc(100% - 80px);} #chatra.chatra--visible{visibility:visible;opacity:1;} #chatra.chatra--mobile-widget.chatra--pos-right{right:15px;} #chatra.chatra--mobile-widget.chatra--pos-left{left:15px;} #chatra.chatra--mobile-widget.chatra--expanded{max-width:none;max-height:none;} #chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-right{right:0;} #chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-left{left:0;} #chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-center{left:0;} #chatra.chatra--mobile-widget.chatra--expanded.chatra--side-right{right:0;} #chatra.chatra--mobile-widget.chatra--expanded.chatra--side-left{left:0;} body.chatra-mobile-widget-expanded{overflow:hidden;height:100%;width:100%;position:fixed;margin:0 !important;}#chatra__iframe{left:0;top:0;width:100%;max-width:100%;height:100%;max-height:100%;margin:0;display:block;background:transparent;} #chatra.chatra--correct-odd-width{padding-left:1px;}#chatra.chatra--correct-odd-width #chatra__iframe{left:1px;width:calc(100% - 1px);}#chatra.chatra--correct-odd-height{padding-top:1px;}#chatra.chatra--correct-odd-height #chatra__iframe{top:1px;height:calc(100% - 1px);}@media print {#chatra{display:none;}}",A={"@":/[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](?:\.?[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~])*@(?:(?:xn---*)?[a-z0-9](?:(?:-|\.(?:xn--)?)?[a-z0-9])*\.(?:xn--)?[a-z0-9]{2,}|[а-яё0-9](?:(?:-|\.)?[а-яё0-9])*\.рф)/gi},B=[];a.Chatra&&a.Chatra.q&&(B=a.Chatra.q),v()}(window,document);