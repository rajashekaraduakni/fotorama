/*!
 * Fotorama 4.2.0 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/^m/)&&a.match(/-?\d+/g)[4]}function i(a){return nc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a){var b={};return nc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[V.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn.call(this)}),b.tEnd=!0}}function r(a,b,c){var d,e=a.data();e&&(e.onEndFn=function(){d||(c.call(this),d=!0)},e.tProp=b,q(a))}function s(a,b){if(a.length){nc?a.css(k(0)).data("onEndFn",f):a.stop();var c=b||i(a);return a.css(j(c)),c}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.p=u.p||("https://"===location.protocol?"https://":"http://"),u.p}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,d,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===d&&h.thumbsReady){var i={videoReady:!0};i[wc]=i[yc]=i[xc]=!1,e.splice(f,1,c.extend({},h,i,b));break}}}function z(a){function b(a,b){var c=a.data(),e=a.children("img").eq(0),f=a.attr("href"),g=a.attr("src"),h=e.attr("src"),i=c.video,j=b?w(f,i===!0):!1;j?f=!1:j=w(i,i);var k=c.img||f||g||h,m=c.thumb||h||g||f,n=k!==m,o=l(c.width||a.attr("width")),p=l(c.height||a.attr("height")),q=l(c.thumbWidth||e.attr("width")||n||o),r=l(c.thumbHeight||e.attr("height")||n||p);return{video:j,img:k,width:o||d,height:p||d,thumb:m,thumbRatio:q/r||d}}var e=[];return a.children().each(function(){var a=c(this),d=c.extend(a.data(),{id:a.attr("id")});if(a.is("a, img"))c.extend(d,b(a,!0));else{if(a.is(":empty"))return;c.extend(d,{html:this,_html:a.html()})}e.push(d)}),e}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a){return!c.contains(b.documentElement,a)}function C(a,b,c){a()?b():setTimeout(function(){C(a,b)},c||100)}function D(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function E(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(h),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function F(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function G(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function H(a,b,c){if(!c)return!1;if(!isNaN(a))return a-1;for(var d,e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function I(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(O(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function J(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function K(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function L(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){L(a,c.extend({},b,{overPos:b.pos,time:Math.max(qc,b.time/2)}))});var g=c.extend(j(d),{width:b.width});nc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,zc,e)}function M(a,b,d,e){a=a||c(a),b=b||c(b);var g=a[0],h=b[0],i="crossfade"===e.method,j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Kb+" "+Jb),a.addClass(Kb),b.addClass(Jb),nc?(s(a),s(b),i&&h&&a.css(c.extend(m,n)).width(),a.css(c.extend(i?l:m,o)),b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),i&&h&&a.fadeTo(0,0),a.fadeTo(i?e.time:0,1,i&&j),b.fadeTo(e.time,0,j),g&&i||h||j())}function N(a,b){a._x=b?a.touches[0].pageX:a.pageX,a._y=b?a.touches[0].pageY:a.pageY}function O(a,b){function d(a){return m=c(a.target),s.checked=i=l=p=q=!1,h||k||a.touches&&a.touches.length>1||a.which>1||bb&&bb.type!==a.type&&db||(p=b.select&&m.is(b.select,r))?p:(o=a.type.match("touch"),q=m.is("a, a *",r),N(a,o),bb=a,cb=a.type.replace(/down|start/,"move"),j=a,n=s.control,(b.onStart||f).call(r,a,{control:n,$target:m}),h=k=!0,o||a.preventDefault(),void 0)}function e(a){if(!h||a.touches&&a.touches.length>1)return g(),void 0;if(cb===a.type){N(a,o);var c=Math.abs(a._x-j._x),d=Math.abs(a._y-j._y),e=c-d,k=!s.stable||e>=3,m=-3>=e;l||(l=!(!k&&!m)),o&&!s.checked?((k||m)&&(s.checked=!0,i=k),(!s.checked||i)&&a.preventDefault()):!o||i?(a.preventDefault(),(b.onMove||f).call(r,a,{touch:o})):h=!1,s.checked=s.checked||k||m}}function g(a){var c=h;k=s.control=h=!1,!c||q&&!s.checked||(a&&a.preventDefault(),db=!0,clearTimeout(eb),eb=setTimeout(function(){db=!1},1e3),(b.onEnd||f).call(r,{moved:!!l,$target:m,control:n,startEvent:j,aborted:!a,touch:o}))}var h,i,j,k,l,m,n,o,p,q,r=a[0],s={};return r.addEventListener&&(r.addEventListener("touchstart",d),r.addEventListener("touchmove",e),r.addEventListener("touchend",g)),a.on("mousedown",d),kc.on("mousemove",e).on("mouseup",g),a.on("click","a",function(a){s.checked&&a.preventDefault()}),s}function P(a,b){function d(c){k=l=c._x,p=[[+new Date,k]],m=n=s(a,b.getPos&&b.getPos()),z=C.stable=!(m%v),!z&&c.preventDefault(),(b.onStart||f).call(A,c,{pos:m})}function e(a,b){r=B.minPos,u=B.maxPos,v=B.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c,e){x&&(x=!1,d(c)),l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=G(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),C.noMove||(a.css(j(n)),y||(y=!0,e.touch||a.addClass(Zb))),(b.onMove||f).call(A,c,{pos:n,edge:o})}function i(d){if(!x){d.touch||a.removeClass(Zb),q=(new Date).getTime();for(var e,h,i,j,k,o,s,t,y,z=q-pc,B=null,C=qc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],h=Math.abs(e-z),null===B||i>h)B=e,j=p[E][1];else if(B===z||h>i)break;i=h}s=g(n,r,u);var F=j-l,G=F>=0,H=q-B,I=H>pc,J=!I&&n!==m&&s===n;v&&(s=g(Math[J?G?"floor":"ceil":"round"](n/v)*v,r,u),r=u=s),J&&(v||s===n)&&(y=-(F/H),C*=g(Math.abs(y),b.timeLow,b.timeHigh),k=Math.round(n+y*C/D),v||(s=k),(!G&&k>u||G&&r>k)&&(o=G?r:u,t=k-o,v||(s=o),t=g(s+.03*t,o-50,o+50),C=Math.abs((n-t)/(y/D)))),C*=w?10:1,(b.onEnd||f).call(A,c.extend(d,{pos:n,newPos:s,overPos:t,time:C,moved:I&&v||d.moved}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z,A=a[0],B=a.data(),C={};return C=c.extend(O(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),C)}function Q(a){R(!0),Ac.appendTo(a),gb=0,Bc(),fb=setInterval(Bc,200)}function R(a){a||Ac.detach(),clearInterval(fb)}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},T=new RegExp("[&<>\"'/]","g"),U={escape:function(a){return null==a?"":(""+a).replace(T,function(a){return S[a]})}},V=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),W={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},X="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)W.ok=!0;else for(var Y=0,Z=X.length;Z>Y;Y++)if(W.prefix=X[Y],"undefined"!=typeof b[W.prefix+"CancelFullScreen"]){W.ok=!0;break}W.ok&&(W.event=W.prefix+"fullscreenchange",W.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},W.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},W.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var $,_,ab,bb,cb,db,eb,fb,gb,hb="fotorama",ib="fullscreen",jb=hb+"__wrap",kb=jb+"--css3",lb=jb+"--video",mb=jb+"--fade",nb=jb+"--slide",ob=jb+"--no-controls",pb=hb+"__stage",qb=pb+"__frame",rb=qb+"--video",sb=pb+"__shaft",tb=pb+"--only-active",ub=hb+"__grab",vb=hb+"__arr",wb=vb+"--disabled",xb=vb+"--prev",yb=vb+"--next",zb=vb+"__arr",Ab=hb+"__nav",Bb=Ab+"-wrap",Cb=Ab+"__shaft",Db=Ab+"--dots",Eb=Ab+"--thumbs",Fb=Ab+"__frame",Gb=Fb+"--dot",Hb=Fb+"--thumb",Ib=hb+"__fade",Jb=Ib+"-front",Kb=Ib+"-rear",Lb=hb+"__shadow",Mb=Lb+"s",Nb=Mb+"--left",Ob=Mb+"--right",Pb=hb+"__active",Qb=hb+"__select",Rb=hb+"--hidden",Sb=hb+"--fullscreen",Tb=hb+"__fullscreen-icon",Ub=hb+"__error",Vb=hb+"__loading",Wb=hb+"__loaded",Xb=Wb+"--full",Yb=Wb+"--img",Zb=hb+"__grabbing",$b=hb+"__img",_b=$b+"--full",ac=hb+"__dot",bc=hb+"__thumb",cc=bc+"-border",dc=hb+"__html",ec=hb+"__video",fc=ec+"-play",gc=ec+"-close",hc=hb+"__caption",ic=hb+"__oooo",jc=c(a),kc=c(b),lc="CSS1Compat"===b.compatMode,mc="quirks"===location.hash.replace("#",""),nc=V.csstransforms3d&&!mc,oc=W.ok,pc=250,qc=300,rc=5e3,sc=2,tc=64,uc=500,vc=333,wc="$stageFrame",xc="$navDotFrame",yc="$navThumbFrame",zc=e([.1,0,.25,1]),Ac=c(J("",J(ic))),Bc=function(){Ac.attr("class",ic+" "+ic+"--"+gb),gb++,gb>4&&(gb=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Nc,function(a,b){if(!b.i){b.i=rd++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Nc,nd),y(Nc,{img:d.img,thumb:d.thumb},b.i,nd)}}})}function i(){Nc=nd.data=Nc||z(e),Oc=nd.size=Nc.length,!Mc.ok&&f.shuffle&&K(Nc),h(),Md=A(Md),Oc&&(kd||(e.html("").append(vd),c.Fotorama.size++,kd=!0))}function q(){Qd.noMove=2>Oc||Qc||bd,xd.toggleClass(ub,!Qd.noMove)}function r(a){a===!0&&(a=""),f.autoplay=Math.max(Number(a)||rc,1.5*qc)}function t(a){return a?"add":"remove"}function u(){bd="crossfade"===f.transition||"dissolve"===f.transition,Yc=f.loop&&(Oc>2||bd);var a={add:[],remove:[]};Oc>1?(Zc=f.nav,$c="top"===f.navPosition,a.remove.push(Qb),Bd.toggle(f.arrows),gb()):(Zc=!1,Bd.hide()),a[t(Oc>1)].push("fotorama__wrap--navigation"),f.autoplay&&r(f.autoplay),cd=l(f.thumbWidth)||tc,dd=l(f.thumbHeight)||tc,q(),mc(f,!0),"thumbs"===Zc?(bb(Oc,"navThumb"),Pc=Gd,ab=yc,F(td,c.Fotorama.jst.style({w:cd,h:dd,m:sc,s:pd,q:!lc})),Dd.addClass(Eb).removeClass(Db)):"dots"===Zc?(bb(Oc,"navDot"),Pc=Fd,ab=xc,Dd.addClass(Db).removeClass(Eb)):(Zc=!1,Dd.removeClass(Eb+" "+Db)),Zc&&($c?Cd.insertBefore(wd):Cd.insertAfter(wd),fb.nav=!1,fb(Pc,Ed,"nav")),_c=f.allowFullScreen,e.insertAfter(ud).removeClass(Rb),_c?(Kd.appendTo(wd),ad=oc&&"native"===_c):(Kd.detach(),ad=!1),a[t(bd)].push(mb),a[t(!bd)].push(nb),R(),vd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),Od=c.extend({},f)}function v(a){return 0>a?(Oc+a%Oc)%Oc:a>=Oc?a%Oc:a}function A(a){return g(a,0,Oc-1)}function N(a){return Yc?v(a):A(a)}function O(a){return a>0||Yc?a-1:!1}function S(a){return Oc-1>a||Yc?a+1:!1}function T(){Hd.minPos=Yc?-1/0:-o(Oc-1,Pd.w,sc,Tc),Hd.maxPos=Yc?1/0:-o(0,Pd.w,sc,Tc),Hd.snap=Pd.w+sc}function U(){Id.minPos=Math.min(0,Pd.w-Ed.width()),Id.maxPos=0,Rd.noMove=Id.minPos===Id.maxPos,Ed.toggleClass(ub,!Rd.noMove)}function V(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Nc[v(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function X(a,b,c,d){(!ed||"*"===ed&&d===Nd)&&(a=n(f.width)||n(a)||uc,b=n(f.height)||n(b)||vc,nd.resize({width:a,ratio:f.ratio||c||a/b},0,d===Nd?!0:"*"))}function Y(a,b,d,e,g){V(a,b,function(a,h,i,j,k,l){function m(a){var b=v(h);zc(a,{index:b,src:w,frame:Nc[b]})}function n(){s.remove(),c.Fotorama.cache[w]="error",i.html&&"stage"===b||!x||x===w?(w&&!i.html?(j.trigger("f:error").removeClass(Vb).addClass(Ub),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb),m("load"),X()),l.state="error",!(Oc>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,nd.splice(h,1))):(i[u]=w=x,Y([h],b,d,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},X(a,g,k,h),s.off("load error").addClass($b+(q?" "+_b:"")).prependTo(j),E(s,d||Pd,e||i.fit||f.fit),c.Fotorama.cache[w]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb+" "+(q?Xb:Yb)),"stage"===b&&m("load")},5)}function p(){C(function(){return!md},function(){o()})}if(j){var q=nd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",w=i[u],x=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!w)return n(),void 0;c.Fotorama.cache[w]?function y(){"error"===c.Fotorama.cache[w]?n():"loaded"===c.Fotorama.cache[w]?setTimeout(p,0):setTimeout(y,100)}():(c.Fotorama.cache[w]="*",s.on("load",p).on("error",n)),r.src=w}}})}function Z(){var a=nd.activeFrame[wc];a&&!a.data().state&&(Q(a),a.on("f:load f:error",function(){a.off("f:load f:error"),R()}))}function bb(a,b){V(a,b,function(a,d,e,g,h,i){if(!g)if(g=e[h]=vd[h].clone(),i=g.data(),i.data=e,"stage"===b){if(e.html&&c('<div class="'+dc+'"></div>').append(c(e.html).removeAttr("id").html(e._html)).appendTo(g),f.captions&&e.caption&&c('<div class="'+hc+'"></div>').append(e.caption).appendTo(g),e.video){var j=Ld.clone();I(j,function(){Bc(),nd.playVideo()},{onStart:function(){Ac(),Qd.control=!0},tail:Qd}),g.addClass(rb).append(j)}yd=yd.add(g)}else"navDot"===b?Fd=Fd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),Gd=Gd.add(g),e.video&&g.append(Ld.clone()))})}function cb(a,b,c){return a&&a.length&&E(a,b,c)}function db(a){V(a,"stage",function(a,b,d,e,g,h){if(e){Td[wc].push(e.css(c.extend({left:bd?0:o(b,Pd.w,sc,Tc)},bd&&k(0)))),B(e[0])&&(e.appendTo(xd),Hc(d.$video));var i=d.fit||f.fit;cb(h.$img,Pd,i),cb(h.$full,Pd,i)}})}function eb(a,b){if("thumbs"===Zc&&!isNaN(a)){var d=-a,e=-a+Pd.w;Gd.each(function(){var a=c(this),f=a.data(),g=f.eq,h={h:dd},i="cover";h.w=f.w,f.l+f.w<d||f.l>e||cb(f.$img,h,i)||b&&Y([g],"navThumb",h,i)})}}function fb(a,b,d){if(!fb[d]){var e="nav"===d&&"thumbs"===Zc,f=0;b.append(a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Nc.length;f>e;e++)if(d.data===Nc[e]){a=!0,d.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).each(function(){if(e){var a=c(this),b=a.data(),d=Math.round(dd*b.data.thumbRatio||cd);b.l=f,b.w=d,a.css({width:d}),f+=d+sc}})),fb[d]=!0}}function gb(){Bd.each(function(a){c(this).toggleClass(wb,!(Yc||Md+a&&Md-Oc+a||Qc))})}function Ib(a){return a.l+a.w/2}function Jb(a){var b=nd.activeFrame[ab].data();L(Jd,{time:.9*a,pos:b.l,width:b.w-2*sc})}function Kb(a){if(Nc[a.guessIndex][ab]){var b=g(a.coo-Ib(Nc[a.guessIndex][ab].data()),Id.minPos,Id.maxPos),c=.9*a.time;L(Ed,{time:c,pos:b,onEnd:function(){eb(b,!0)}}),c&&eb(b),Gc(Dd,G(b,Id.minPos,Id.maxPos))}}function Lb(){Zb(ab),Sd[ab].push(nd.activeFrame[ab].addClass(Pb))}function Zb(a){for(var b=Sd[a];b.length;)b.shift().removeClass(Pb)}function ec(a){for(var b=Td[a];b.length;){var c=b.shift();nd.activeFrame[a]!==c&&c.detach()}}function ic(){Tc=Uc=Md;var a=nd.activeFrame,b=a[wc];b&&(Zb(wc),Sd[wc].push(b.addClass(Pb)),s(xd.css(j(0))),ec(wc),db(Sc),T(),U())}function mc(a,b){a&&c.extend(Pd,{width:a.width||Pd.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:Pd.width,height:Pd.height,minWidth:Pd.minWidth,maxWidth:Pd.maxWidth,minHeight:Pd.minHeight,maxHeight:Pd.maxHeight,ratio:Pd.ratio})}function zc(a,b){e.trigger(hb+":"+a,[nd,b])}function Ac(){clearTimeout(Bc.t),md=1,f.stopAutoplayOnTouch?nd.stopAutoplay():id=!0}function Bc(){Bc.t=setTimeout(function(){md=0},qc+pc)}function Dc(){id=!(!Qc&&!jd)}function Ec(){if(clearTimeout(Ec.t),!f.autoplay||id)return nd.autoplay&&(nd.autoplay=!1,zc("stopautoplay")),void 0;nd.autoplay||(nd.autoplay=!0,zc("startautoplay"));var a=Md;Ec.t=setTimeout(function(){var b=nd.activeFrame[wc].data();C(function(){return b.state||a!==Md},function(){id||a!==Md||nd.show(Yc?">":v(Md+1))})},f.autoplay)}function Fc(){nd.fullScreen&&(nd.fullScreen=!1,oc&&W.cancel(qd),_.removeClass(ib),e.removeClass(Sb).insertAfter(ud),zc("fullscreenexit"),Pd=c.extend({},ld),Hc(Qc,!0),nd.resize(),Y(Sc,"stage"),jc.scrollLeft(gd).scrollTop(fd))}function Gc(a,b){a.removeClass(Nb+" "+Ob),b&&!Qc&&a.addClass(b.replace(/^|\s/g," "+Mb+"--"))}function Hc(a,b,c){b&&(vd.removeClass(lb),Qc=!1,q()),a&&a!==Qc&&(a.remove(),zc("unloadvideo")),c&&(Dc(),Ec())}function Ic(a){vd.toggleClass(ob,a)}function Jc(a,b){Qc?Hc(Qc,!0,!0):b?Ic():nd.show({index:a.shiftKey||a._x-wd.offset().left<Pd.w/3?"<":">",slow:a.altKey,direct:!0})}function Kc(a,b){var d=c(this).data().eq;nd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-Dd.offset().left,time:b})}function Lc(){i(),u(),Mc.ok||(f.hash&&location.hash&&(Nd=H(location.hash.replace(/^#/,""),Nc,0===od)),Md=Tc=Uc=Vc=Nd=N(Nd)||0),Oc?(Qc&&Hc(Qc,!0),nd.show({index:Md,time:0}),nd.resize()):nd.destroy()}function Mc(){Mc.ok||(Mc.ok=!0,zc("ready"))}$=$||c("html"),_=_||c("body");var Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd=this,od=Cc,pd=+new Date,qd=e.addClass(hb+pd)[0],rd=1,sd=e.data(),td=c("<style></style>").insertBefore(e),ud=c(J(Rb)).insertBefore(e),vd=c(J(jb)),wd=c(J(pb)).appendTo(vd),xd=(wd[0],c(J(sb)).appendTo(wd)),yd=c(),zd=c(J(vb+" "+xb,J(zb))),Ad=c(J(vb+" "+yb,J(zb))),Bd=zd.add(Ad).appendTo(wd),Cd=c(J(Bb)),Dd=c(J(Ab)).appendTo(Cd),Ed=c(J(Cb)).appendTo(Dd),Fd=c(),Gd=c(),Hd=xd.data(),Id=Ed.data(),Jd=c(J(cc)).appendTo(Ed),Kd=c(J(Tb)),Ld=c(J(fc)),Md=(c(J(gc)).appendTo(wd),!1),Nd=!1,Od={},Pd={},Qd={},Rd={},Sd={},Td={};vd[wc]=c(J(qb)),vd[yc]=c(J(Fb+" "+Hb,J(bc))),vd[xc]=c(J(Fb+" "+Gb,J(ac))),Sd[wc]=[],Sd[yc]=[],Sd[xc]=[],Td[wc]=[],nc&&vd.addClass(kb),sd.fotorama=this,nd.options=f,Cc++,nd.startAutoplay=function(a){return nd.autoplay?this:(id=jd=!1,r(a||f.autoplay),Ec(),this)},nd.stopAutoplay=function(){return nd.autoplay&&(id=jd=!0,Ec()),this},nd.show=function(a){function b(){Z(),Y(Sc,"stage"),ic(),zc("showend",a.direct),Dc(),Ec()}var c,d,e=qc;if("object"!=typeof a?(c=a,a={}):(c=a.index,e="number"==typeof a.time?a.time:e,d=a.overPos),a.slow&&(e*=10),c=">"===c?Uc+1:"<"===c?Uc-1:"<<"===c?0:">>"===c?Oc-1:c,c=isNaN(c)?H(c,Nc,!0):c,c="undefined"==typeof c?Md||0:c,nd.activeIndex=Md=N(c),Wc=O(Md),Xc=S(Md),Sc=[Md,Wc,Xc],Uc=Yc?c:Md,nd.activeFrame=Rc=Nc[Md],Hc(!1,Rc.i!==Nc[v(Tc)].i),bb([Md,Wc,Xc],"stage"),db([Uc]),zc("show",a.direct),bd){var h=Rc[wc],i=Md!==Vc?Nc[Vc][wc]:null;M(h,i,yd,{time:e,method:f.transition,onEnd:b})}else L(xd,{pos:-o(Uc,Pd.w,sc,Tc),overPos:d,time:e,onEnd:b});if(gb(),Zc){Lb();var j=A(Md+g(Uc-Vc,-1,1)),k="undefined"==typeof a.coo;(k||j!==Md)&&Kb({time:e,coo:k?Pd.w/2:a.coo,guessIndex:k?Md:j}),"thumbs"===Zc&&Jb(e)}return hd="undefined"!=typeof Vc&&Vc!==Md,Vc=Md,f.hash&&hd&&!nd.eq&&D(Rc.id||Md+1),this},nd.requestFullScreen=function(){return _c&&!nd.fullScreen&&(fd=jc.scrollTop(),gd=jc.scrollLeft(),jc.scrollTop(0).scrollLeft(0),ld=c.extend({},Pd),e.addClass(Sb).appendTo(_.addClass(ib)),Hc(Qc,!0),nd.fullScreen=!0,ad&&W.request(qd),nd.resize(),Y(Sc,"stage"),zc("fullscreenenter")),this},nd.cancelFullScreen=function(){return ad&&W.is()?W.cancel(b):Fc(),this},b.addEventListener&&b.addEventListener(W.event,function(){W.is()||Qc||Fc()}),kc.on("keydown",function(a){Qc&&27===a.keyCode?(a.preventDefault(),Hc(Qc,!0,!0)):(nd.fullScreen||f.keyboard&&!od)&&(27===a.keyCode?(a.preventDefault(),nd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&nd.fullScreen?(a.preventDefault(),nd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&nd.fullScreen)&&(a.preventDefault(),nd.show({index:"<",slow:a.altKey,direct:!0})))}),od||kc.on("keydown","textarea, input, select",function(a){nd.fullScreen||a.stopPropagation()}),nd.resize=function(b){if(!Nc)return this;mc(nd.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b,nd.fullScreen);var c=arguments[1]||0,d=arguments[2],e=Pd.width,f=Pd.height,h=Pd.ratio,i=a.innerHeight-(Zc?Dd.height():0);return n(e)&&(vd.css({width:e,minWidth:Pd.minWidth,maxWidth:Pd.maxWidth}),e=Pd.w=vd.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=Pd.h=Math.round(g(f,m(Pd.minHeight)/100*i||l(Pd.minHeight),m(Pd.maxHeight)/100*i||l(Pd.maxHeight))),ic(),wd.addClass(tb).stop().animate({width:e,height:f},c,function(){wd.removeClass(tb)}),Zc&&(Dd.stop().animate({width:e},c).css({left:0}),Kb({guessIndex:Md,time:c,coo:Pd.w/2}),"thumbs"===Zc&&fb.nav&&Jb(c)),ed=d||!0,Mc())),this},nd.setOptions=function(a){return c.extend(f,a),Lc(),this},nd.shuffle=function(){return Nc&&K(Nc)&&Lc(),this},nd.destroy=function(){return nd.stopAutoplay(),vd.detach(),e.html(sd.urtext),kd=!1,Nc=nd.data=null,c.Fotorama.size--,this},nd.playVideo=function(){var a=nd.activeFrame,b=a.video,d=Md;return"object"==typeof b&&a.videoReady&&(ad&&nd.fullScreen&&nd.cancelFullScreen(),C(function(){return!W.is()||d!==Md},function(){d===Md&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[wc]),vd.addClass(lb),Qc=a.$video,Qd.noMove=!0,zc("loadvideo"))})),this},nd.stopVideo=function(){return Hc(Qc,!0,!0),this},vd.hover(function(){Ic(!1)},function(){Ic(!0)}),Qd=P(xd,{onStart:Ac,onMove:function(a,b){Gc(wd,b.edge)},onEnd:function(a){if(Gc(wd),Bc(),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,Pd.w,sc,Tc);nd.show({index:b,time:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Jc(a.startEvent,a.touch)},getPos:function(){return-o(Uc,Pd.w,sc,Tc)},timeLow:1,timeHigh:1,friction:2,select:"."+Qb+", ."+Qb+" *",$wrap:wd}),Rd=P(Ed,{onStart:Ac,onMove:function(a,b){Gc(Dd,b.edge)},onEnd:function(a){function b(){Dc(),Ec(),eb(a.newPos,!0)}if(Bc(),a.moved)a.pos!==a.newPos?(L(Ed,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),eb(a.newPos),Gc(Dd,G(a.newPos,Id.minPos,Id.maxPos))):b();else{var c=a.$target.closest("."+Fb,Ed)[0];c&&Kc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Dd}),I(Bd,function(a){a.preventDefault(),Qc?Hc(Qc,!0,!0):(Bc(),nd.show({index:Bd.index(this)?">":"<",slow:a.altKey,direct:!0}))},{onStart:function(){Ac(),Qd.control=!0},tail:Qd}),I(Kd,function(){Bc(),nd.fullScreen?nd.cancelFullScreen():nd.requestFullScreen(),Dc(),Ec()},{onStart:function(){Ac(),Qd.control=!0},tail:Qd}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){nd[b]=function(){return Nc=Nc||[],"load"!==b?Array.prototype[b].apply(Nc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Nc=arguments[0]),Lc(),nd}}),jc.on("resize",nd.resize),Lc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):C(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:tc,thumbHeight:tc,arrows:!0,allowFullScreen:!1,fit:"contain",transition:"slide",captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1,shuffle:!1},a,e))})})},c.Fotorama.cache={};var Cc=0;c.Fotorama.size=0,c(function(){c("."+hb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return U.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\npadding-left:0;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame:last-child{\npadding-right:0}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(U.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'}}(window,document,jQuery);