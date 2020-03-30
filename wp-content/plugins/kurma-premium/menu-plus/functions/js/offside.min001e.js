!function(e,n,t){"use strict";var o=function(){function o(o){function s(e,n,o){var s=g(e!==t?e:".offside");return!1!==s?new i(s[0],n,o):null}function i(e,n,t){var o,s;s={buttonsSelector:"",slidingSide:"left",init:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};for(o in n)s.hasOwnProperty(o)&&(s[o]=n[o]);var i=e,r=g(s.buttonsSelector),l=s.slidingSide,v="offside--"+l,b=y+"--is-open",h=y+"--is-"+l,L=t||0,w=function(){!1===p(S,L)?x():A()},x=function(){s.beforeOpen(),O&&(O=!1,c()),f(),a(C,b),a(C,h),a(i,"is-open"),S.push(L),s.afterOpen()},A=function(){var e=p(S,L);!1!==e&&(s.beforeClose(),d(C,b),d(C,h),d(i,"is-open"),S.splice(e,1),s.afterClose())},D=function(){f()},T=function(e){e.preventDefault(),w()},N=function(){s.beforeDestroy(),A(),r.forEach(function(e){m(e,"click",T)}),d(i,"offside"),d(i,v),delete E[L],s.afterDestroy()},I=function(){i||console.error('Offside alert: "offside" selector could not match any element'),r.length||console.error('Offside alert: "buttonsSelector" selector could not match any element')};this.toggle=function(){w()},this.open=function(){x()},this.close=function(){A()},this.closeAll=function(){D()},this.destroy=function(){N()},k&&I(),a(i,"offside"),a(i,v),r.forEach(function(e){u(e,"click",T)}),s.init()}var r,l,f=function(e){S.length>0&&(isNaN(e)?S.forEach(function(e){E[e].close()}):E[e].close())},c=function(){a(C,h)},a=function(e,n){e.classList?e.classList.add(n):e.className=(e.className+" "+n).trim()},d=function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")},u=function(e,n,t){e.addEventListener(n,t)},m=function(e,n,t){e.removeEventListener(n,t)},g=function(e){return e instanceof HTMLElement?[e]:Array.isArray(e)?e:"string"==typeof e&&Array.apply(null,n.querySelectorAll(e))},p=function(e,n){var t=e.indexOf(n);return t>-1&&t};l={slidingElementsSelector:".offside-sliding-element",disableCss3dTransforms:!1,debug:!1};for(r in o)l.hasOwnProperty(r)&&(l[r]=o[r]);var y="offside-js",v=y+"--init",b="offside-sliding-element",h=y+"--interact",E=[],O=!0,L=!l.disableCss3dTransforms&&function(){if(!e.getComputedStyle)return!1;var o,s=n.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(s,null);for(var r in i)s.style[r]!==t&&(s.style[r]="translate3d(1px,1px,1px)",o=e.getComputedStyle(s).getPropertyValue(i[r]));return n.body.removeChild(s),o!==t&&o.length>0&&"none"!==o}(),S=[],C=n.body,w=g(l.slidingElementsSelector),k=l.debug;return w.forEach(function(e){a(e,b)}),L||a(n.documentElement,"no-csstransforms3d"),a(C,v),{closeOpenOffside:function(){f()},getOffsideInstance:function(e,n){var t=E.length||0,o=s(e,n,t);if(null!==o)return E[t]=o}}}return{getInstance:function(n,t){return e.offside.factory||(e.offside.factory=o(t)),e.offside.factory.getOffsideInstance(n,t)}}}();"undefined"!=typeof module&&module.exports?module.exports=o.getInstance:e.offside=o.getInstance}(window,document),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".slideout-navigation").style.display=""});for(var generateOffside=offside(".slideout-navigation",{slidingElementsSelector:"#slideout-container",buttonsSelector:".slideout-mobile .main-navigation .menu-toggle, .slideout-both .main-navigation .menu-toggle, .slideout-both .slideout-toggle, .slideout-desktop .slideout-toggle",slidingSide:offSide.side,afterOpen:function(){document.documentElement.classList.add("slide-opened"),document.body.classList.add("slide-opened")},afterClose:function(){for(var e=document.querySelectorAll(".main-navigation"),n=0;n<e.length;n++)e[n].classList.contains("toggled")&&e[n].classList.remove("toggled");document.documentElement.classList.remove("slide-opened"),document.body.classList.remove("slide-opened")}}),closeElements=document.querySelectorAll(".slideout-overlay, .slider-exit a"),i=0;i<closeElements.length;i++)closeElements[i].addEventListener("click",function(e){e.preventDefault(),generateOffside.close()});document.addEventListener("keyup",function(e){document.body.classList.contains("slide-opened")&&27==(e=e||window.event).keyCode&&generateOffside.close()});
