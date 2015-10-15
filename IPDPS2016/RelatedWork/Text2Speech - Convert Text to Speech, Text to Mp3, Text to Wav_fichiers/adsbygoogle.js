(function(){var q=this,fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ga=function(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,
c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)};var ka=(new Date).getTime();var la={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ma=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},na=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},oa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,pa=function(a,b){if(!a)return b;var c=a.match(oa);return c?c[0]:b};var qa=t("0.15"),ra=t("0.0"),ya=t("0.001"),za=t("0.05"),Aa=t("0.001"),Ba=t("0"),Ca=t(""),Da=t("0.001"),Ea=t("0.001"),Fa=t("0.2"),Ga=na("true",
!0),Ha=t(""),Ia=t("0.001");var Ja=na("false",!1),Ka=na("false",!1),La=Ka||!Ja;var Ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,jb=/'/g,kb=/\x00/g,lb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},mb={"'":"\\'"},nb=function(a,b){return a<b?-1:a>b?1:0};var u=function(a){u[" "](a);return a};u[" "]=function(){};var x=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{u(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},ob=function(){var a=window;return x(a.top)?a.top:null},pb=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},y=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){var d=window;try{var e=new Uint32Array(1);d.crypto.getRandomValues(e);c=e[0]/65536/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},
qb=/^([0-9.]+)px$/,rb=/^(-?[0-9.]{1,30})$/,sb=function(a){return rb.test(a)&&(a=Number(a),!isNaN(a))?a:null},tb=function(a){return(a=qb.exec(a))?+a[1]:null};var ub=document,C=window;var vb=function(a,b){return a===b};var G;a:{var wb=q.navigator;if(wb){var xb=wb.userAgent;if(xb){G=xb;break a}}G=""}var H=function(a){return-1!=G.indexOf(a)};var yb=H("Opera")||H("OPR"),I=H("Trident")||H("MSIE"),zb=H("Edge"),Ab=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Bb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"),Cb=function(){var a=G;if(Ab)return/rv\:([^\);]+)(\)|;)/.exec(a);if(zb)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Bb)return/WebKit\/(\S+)/.exec(a)},Db=function(){var a=q.document;return a?a.documentMode:void 0},Eb=function(){if(yb&&
q.opera){var a=q.opera.version;return"function"==fa(a)?a():a}var a="",b=Cb();b&&(a=b?b[1]:"");return I&&(b=Db(),b>parseFloat(a))?String(b):a}(),Fb={},Gb=function(a){if(!Fb[a]){for(var b=0,c=Ma(String(Eb)).split("."),d=Ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var l=m.exec(g)||["","",""],n=k.exec(h)||["","",""];if(0==l[0].length&&0==n[0].length)break;b=nb(0==l[1].length?0:parseInt(l[1],
10),0==n[1].length?0:parseInt(n[1],10))||nb(0==l[2].length,0==n[2].length)||nb(l[2],n[2])}while(0==b)}Fb[a]=0<=b}},Hb=q.document,Ib=Hb&&I?Db()||("CSS1Compat"==Hb.compatMode?parseInt(Eb,10):5):void 0;var Jb;if(!(Jb=!Ab&&!I)){var Kb;if(Kb=I)Kb=9<=Ib;Jb=Kb}Jb||Ab&&Gb("1.9.1");I&&Gb("9");var Lb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var J=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},N=function(a){return!!a&&"function"==typeof a&&!!a.call},Mb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},O=function(a,b){if(a.indexOf){var c=a.indexOf(b);return!(-1===c||!1===c)}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Nb=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",
a)},Ob=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},Pb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Qb=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Rb=/(^| )adsbygoogle($| )/;var rc=!!window.google_async_iframe_id,sc=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Mb(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var tc=Math.random(),uc={},vc={},P=function(a,b,c,d,e){var f,g=!0;try{f=c()}catch(h){try{var m=Lb(h);c="";h.fileName&&(c=h.fileName);var k=-1;h.lineNumber&&(k=h.lineNumber);g=b(a,m,c,k,d)}catch(l){wc("pAR",l)}if(!g)throw h;}finally{if(e)try{e()}catch(n){}}return f},Q=function(a,b,c,d,e,f){var g={};if(e)try{e(g)}catch(h){}g.context=a;g.msg=b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=ub.URL.substring(0,512);g.ref=ub.referrer.substring(0,512);xc(g);yc("jserror",g,f);return!0},yc=
function(a,b,c){try{if(("jserror"==a?Math.random():tc)<(c||.01)){var d="/pagead/gen_204?id="+a+zc(b),e="http"+("http:"==C.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+d,e=e.substring(0,2E3);C.google_image_requests||(C.google_image_requests=[]);var f=C.document.createElement("img");f.src=e;C.google_image_requests.push(f)}}catch(g){}},wc=function(a,b){try{var c=Lb(b),d="";b.fileName&&(d=b.fileName);var e=-1;b.lineNumber&&(e=b.lineNumber);Q(a,c,d,e,void 0,void 0)}catch(f){yc("jserror",
{context:"mRE",msg:f.toString()+"\n"+(f.stack||"")},void 0)}},xc=function(a){var b=a||{};J(uc,function(a,d){b[d]=a});J(vc,function(a,d){null!=C[a]&&(b[d]=C[a])})},Ac=function(a,b){return function(){var c=arguments;return P(a,Q,function(){return b.apply(void 0,c)},void 0,void 0)}},Bc=function(a,b){return Ac(a,b)},Cc=function(a){return Ac("aa:reactiveTag",a)},zc=function(a){var b="";J(a,function(a,d){if(0===a||a){var e=String(a);b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(e):
escape(e))}});return b};var Dc=null,Ec=function(){if(!Dc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,x(a))b=a;else break;Dc=b}return Dc};var T={V:{j:"17415661",i:"17415662"},sa:{j:"453848100",i:"453848101"},ea:{j:"828064124",i:"828064125"},da:{j:"828064127",i:"828064128"},fa:{j:"828064170",i:"828064171"},X:{j:"453848130",i:"453848131",qa:"453848132",ra:"453848133"},ga:{j:"24819312",i:"24819313"},ia:{j:"24819308",i:"24819309",W:"24819320"},Y:{ba:"828064119"},ka:{j:"828064162",i:"828064163"},ja:{j:"828064164",i:"828064165",$:"828064166"},ca:{j:"828064190",i:"828064191"},ma:{j:"10573501",i:"10573502"},C:{j:"10573591",i:"10573592"},pa:{j:"10573511",
i:"10573512"},u:{j:"10573581",i:"10573582"},aa:{j:"10573521",i:"10573522"},A:{j:"10573571",i:"10573572"},na:{j:"10573531",i:"10573532"},D:{j:"10573561",i:"10573562"},oa:{j:"10573551",i:"10573552"},ha:{j:24819400,i:24819401},la:{j:"312815000",i:"312815001"},B:{j:"312815100",i:"312815101"},Z:{j:"26835101",i:"26835102"}};var Fc=function(){},Hc=function(a,b,c){switch(typeof b){case "string":Gc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Hc(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Gc(e,
c),c.push(":"),Hc(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Ic={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Gc=function(a,b){b.push('"');b.push(a.replace(Jc,function(a){if(a in Ic)return Ic[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ic[a]=e+b.toString(16)}));
b.push('"')};var Kc=null,Lc=Ab||Bb||yb||"function"==typeof q.atob;var Mc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Nc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];J(a,function(a,d){if(null!=a){var e;try{var f=[];Hc(new Fc,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),Mb(b,d,"=",e,";"))}});return b.join("")};var U=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var Oc=function(a,b,c){P("files::getSrc",Q,function(){if("https:"==C.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Pc=function(a,b,c){c||(c=La?"https":"http");return Oc(a,b,c)};var V=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Qc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Rc=null;var Sc=function(a){this.s=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:r(this.T,this)});this.P=a.google_iframe_oncopy},Tc;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(Na,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(Oa,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(Pa,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(Qa,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(jb,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(kb,"&#0;")));Tc=W;Sc.prototype.set=function(a,b){this.P.handlers[a]=b;this.s.addEventListener&&this.s.addEventListener("load",r(this.L,this,a),!1)};
Sc.prototype.L=function(a){a=this.s.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Sc.prototype.T=function(a,b){var c=Uc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Uc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Vc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Wc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Xc="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),Yc=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var X,Y=function(a){this.w=[];this.s=a||window;this.o=0;this.v=null;this.K=0},Zc=function(a,b){this.M=a;this.U=b};Y.prototype.enqueue=function(a,b){0!=this.o||0!=this.w.length||b&&b!=window?this.G(a,b):(this.o=2,this.I(new Zc(a,window)))};Y.prototype.G=function(a,b){this.w.push(new Zc(a,b||this.s));$c(this)};Y.prototype.N=function(a){this.o=1;if(a){var b=Bc("sjr::timeout",r(this.H,this,!0));this.v=this.s.setTimeout(b,a)}};
Y.prototype.H=function(a){a&&++this.K;1==this.o&&(null!=this.v&&(this.s.clearTimeout(this.v),this.v=null),this.o=0);$c(this)};Y.prototype.O=function(){return!(!window||!Array)};Y.prototype.R=function(){return this.K};Y.prototype.nq=Y.prototype.enqueue;Y.prototype.nqa=Y.prototype.G;Y.prototype.al=Y.prototype.N;Y.prototype.rl=Y.prototype.H;Y.prototype.sz=Y.prototype.O;Y.prototype.tc=Y.prototype.R;var $c=function(a){var b=Bc("sjr::tryrun",r(a.S,a));a.s.setTimeout(b,0)};
Y.prototype.S=function(){if(0==this.o&&this.w.length){var a=this.w.shift();this.o=2;var b=Bc("sjr::run",r(this.I,this,a));a.U.setTimeout(b,0);$c(this)}};Y.prototype.I=function(a){this.o=0;a.M()};
var ad=function(a){try{return a.sz()}catch(b){return!1}},bd=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ad(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},cd=function(){if(X&&ad(X))return X;var a=Ec(),b=a.google_jobrunner;return bd(b)?X=b:a.google_jobrunner=X=new Y(a)},dd=function(a,b){cd().nq(a,b)},ed=function(a,b){cd().nqa(a,b)};var fd=rc?1==Pb(C):!Pb(C),gd=function(){var a=Ka?"https":"http",b=u("script"),c;c=pa("","pagead2.googlesyndication.com");return["<",b,' src="',Pc(c,"/pagead/js/r20150827/r20150820/show_ads_impl.js",a),'"></',b,">"].join("")},hd=function(a,b,c,d){return function(){var e=!1;d&&cd().al(3E4);var f=a.document.getElementById(b);f&&!x(f.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(x(g)){var h=a.document.getElementById(b).contentWindow,m=h.document;m.body&&m.body.firstChild||(m.open(),h.google_async_iframe_close=!0,m.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;f=c;f=String(f);if(f.quote)l=f.quote();else{g=['"'];for(h=0;h<f.length;h++){var n=f.charAt(h),p=n.charCodeAt(0),m=g,z=h+1,K;if(!(K=lb[n])){var D;if(31<p&&127>p)D=n;else{var A=n;if(A in mb)D=
mb[A];else if(A in lb)D=mb[A]=lb[A];else{var v=A,E=A.charCodeAt(0);if(31<E&&127>E)v=A;else{if(256>E){if(v="\\x",16>E||256<E)v+="0"}else v="\\u",4096>E&&(v+="0");v+=E.toString(16).toUpperCase()}D=mb[A]=v}}K=D}m[z]=K}g.push('"');l=g.join("")}k.location.replace("javascript:"+l)}e=!0}catch(Z){k=Ec().google_jobrunner,bd(k)&&k.rl()}e&&(e=Uc("google_async_rrc",c),(new Sc(a)).set(b,hd(a,b,e,!1)))}},id=function(a){var b=["<iframe"];J(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},kd=function(a,b,c){jd(a,b,c,function(a,b,f){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(f.google_ad_width);h=Number(f.google_ad_height);16==f.google_reactive_ad_format?(f=a.createElement("div"),f.innerHTML=sc(b,g,h),c.appendChild(f.firstChild)):c.innerHTML=sc(b,g,h);return b.id})},jd=function(a,b,c,d){var e=u("script"),f,g;a:{try{var h=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof h){g=h;break a}h=y(["C","E"],
Ha)||null;a.top.google_pubvars_reuse_experiment=h;if(a.top.google_pubvars_reuse_experiment===h){g=h;break a}}catch(m){}g=null}if("E"===g){var k=null!=b.google_ad_client,l=null!=b.google_ad_width,n=null!=b.google_ad_height,p=Yc(a);if(p){for(var z=0;z<Xc.length;z++){var K=Xc[z];null!=b[K]&&(p[K]=b[K])}var D=Yc(a);if(D){var A=D.google_ad_width,v=D.google_ad_height,E=D.google_ad_format;if(A&&v&&E){var Z,Ra=E&&E.match(/(\d+)x(\d+)/);Z=Ra?{width:Ra[1],height:Ra[2]}:null;!Z||Z.width==A&&Z.height==v||delete D.google_ad_format}}}var Sa=
Yc(a);if(Sa)for(var Ta=0;Ta<Xc.length;Ta++){var sa=Xc[Ta];null==b[sa]&&null!=Sa[sa]&&(b[sa]=Sa[sa])}var Md=null!=b.google_ad_client,Nd=null!=b.google_ad_width,Od=null!=b.google_ad_height;f=[k?"c2":Md?"c1":"c0",l?"w2":Nd?"w1":"w0",n?"h2":Od?"h1":"h0"].join()}var B={},Pd=b.google_ad_height;B.width='"'+b.google_ad_width+'"';B.height='"'+Pd+'"';B.frameborder='"0"';B.marginwidth='"0"';B.marginheight='"0"';B.vspace='"0"';B.hspace='"0"';B.allowtransparency='"true"';B.scrolling='"no"';B.allowfullscreen='"true"';
B.onload='"'+Tc+'"';var Ua=d(a,B,b),ta;ta=ld(b)?y(["c","e"],Fa):null;var Sb=b.google_ad_output,L=b.google_ad_format;L||"html"!=Sb&&null!=Sb||(L=b.google_ad_width+"x"+b.google_ad_height,"e"==ta&&(L+="_as"));var Qd=!b.google_ad_slot||ld(b),L=L&&Qd?L.toLowerCase():"";b.google_ad_format=L;for(var Tb=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],Ub,Vb=[],Wb=0,aa=c;aa&&25>Wb;aa=aa.parentNode,++Wb)Vb.push(9!=aa.nodeType&&aa.id||"");(Ub=Vb.join())&&Tb.push(Ub);
b.google_ad_unit_key=Qb(Tb.join(":")).toString();var Xb=a.google_adk2_experiment=a.google_adk2_experiment||y(["C","E"],Ea)||"N";if("E"==Xb){for(var w=c,Yb=[],Zb=0;w&&25>Zb;++Zb){var ua="",ua=(ua=9!=w.nodeType&&w.id)?"/"+ua:"",Va;a:{if(w&&w.nodeName&&w.parentElement)for(var Rd=w.nodeName.toString().toLowerCase(),$b=w.parentElement.childNodes,ac=0,Wa=0;Wa<$b.length;++Wa){var Xa=$b[Wa];if(Xa.nodeName&&Xa.nodeName.toString().toLowerCase()==Rd){if(w==Xa){Va="."+ac;break a}++ac}}Va=""}Yb.push((w.nodeName&&
w.nodeName.toString().toLowerCase())+ua+Va);w=w.parentElement}var Sd=Yb.join()+":",R=a,bc=[];if(R)try{for(var ba=R.parent,cc=0;ba&&ba!=R&&25>cc;++cc){for(var dc=ba.frames,va=0;va<dc.length;++va)if(R==dc[va]){bc.push(va);break}R=ba;ba=R.parent}}catch(ie){}b.google_ad_unit_key_2=Qb(Sd+bc.join()).toString()}else"C"==Xb&&(b.google_ad_unit_key_2="ctrl");var Td=Nc(b),S=null,Ya=y(["C","E"],Ia);if("E"==Ya){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var Za=encodeURIComponent(window.JSON.stringify(b)),
$a;if(Lc)$a=q.btoa(Za);else{for(var F=[],ec=0,ab=0;ab<Za.length;ab++){for(var ca=Za.charCodeAt(ab);255<ca;)F[ec++]=ca&255,ca>>=8;F[ec++]=ca}if(!ga(F))throw Error("encodeByteArray takes an array as a parameter");if(!Kc){Kc={};for(var wa=0;65>wa;wa++)Kc[wa]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(wa)}for(var xa=Kc,fc=[],M=0;M<F.length;M+=3){var gc=F[M],hc=M+1<F.length,ic=hc?F[M+1]:0,jc=M+2<F.length,kc=jc?F[M+2]:0,Ud=gc>>2,Vd=(gc&3)<<4|ic>>4,lc=(ic&15)<<2|kc>>6,mc=
kc&63;jc||(mc=64,hc||(lc=64));fc.push(xa[Ud],xa[Vd],xa[lc],xa[mc])}$a=fc.join("")}S=$a;break a}yc("sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0})}catch(Wd){wc("sblob",Wd)}S=""}S||(S="{X}")}else"C"==Ya&&(S="{C}");var bb;var Xd=b.google_ad_client,cb;if(cb=fd){if(!Rc)b:{for(var db=[C.top],eb=[],Yd=0,da;da=db[Yd++];){eb.push(da);try{if(da.frames)for(var Zd=da.frames.length,fb=0;fb<Zd&&1024>db.length;++fb)db.push(da.frames[fb])}catch(je){}}for(var gb=0;gb<eb.length;gb++)try{var nc=eb[gb].frames.google_esf;
if(nc){Rc=nc;break b}}catch(ke){}Rc=null}cb=!Rc}if(cb){var ea={style:"display:none"};ea["data-ad-client"]=Vc(Xd);ea.id="google_esf";ea.name="google_esf";ea.src=Pc(pa("","googleads.g.doubleclick.net"),"/pagead/html/r20150827/r20150820/zrt_lookup.html");bb=id(ea)}else bb="";var hb=ka,oc=(new Date).getTime(),pc=a.google_top_experiment,ib=a.google_async_for_oa_experiment;ib&&(a.google_async_for_oa_experiment=
void 0);var qc=a.google_always_use_delayed_impressions_experiment,$d=["<!doctype html><html><body>",bb,"<",e,">",Td,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',Ua,'";google_start_time=',hb,";",Ya?'google_pub_vars = "'+S+'";':"",f?'google_pubvars_reuse_experiment_result = "'+f+'";':"",pc?'google_top_experiment="'+pc+'";':"",ib?'google_async_for_oa_experiment="'+ib+'";':"",qc?'google_always_use_delayed_impressions_experiment="'+qc+'";':"",ta?'google_append_as_for_format_override="'+
ta+'";':"","google_bpp=",oc>hb?oc-hb:1,";google_async_rrc=0;</",e,">",gd(),"</body></html>"].join("");(a.document.getElementById(Ua)?dd:ed)(hd(a,Ua,$d,!0))},md=Math.floor(1E6*Math.random()),nd=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(f){}c=b[3];if(b[1]==md&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=
0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},ld=function(a){return a.google_override_format||!Wc[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},od=function(a,b){var c=navigator;if(Ga&&a&&b&&c){var d=a.document,c=d.createElement("script"),e=Vc(b);c.async=!0;c.type="text/javascript";c.src=Pc("pagead2.googlesyndication.com","/pub-config/"+e+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,
d)}};var pd=function(){return H("iPad")||H("Android")&&!H("Mobile")||H("Silk")};var qd=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var f;f=tb(a[c[d]]);f=null===f?null:Math.round(f);null!=f&&(b[e]=f)}}},rd=function(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(e){return null}};var sd={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},td=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},
{width:120,height:600,format:4},{width:120,height:240,format:4},{width:301,height:300,format:8},{width:120,height:600,format:8}];var ud=[{l:[3,0,0],m:[6,12,14,0,1,3,2,4,13,5,7,8,9,10,11,15]},{l:[3,0,1],m:[6,15,0,1,2,3,4,13,5,7,8,9,10,11,12,14]},{l:[3,0,2],m:[6,15,0,1,2,3,4,7,8,9,10,13,5,11,12,14]},{l:[3,1,0],m:[6,12,15,0,1,3,4,13,2,5,7,8,9,10,11,14]},{l:[3,1,1],m:[6,15,0,1,7,8,11,2,3,4,5,9,10,12,13,14]},{l:[3,1,2],m:[6,15,0,1,2,3,4,7,9,11,5,8,10,12,13,14]},{l:[3,2,0],m:[0,6,12,15,1,2,3,4,13,5,7,8,9,10,11,14]},{l:[3,2,1],m:[0,6,12,14,1,2,3,4,13,5,7,8,9,10,11,15]},{l:[3,2,2],m:[0,15,1,2,3,4,13,9,5,6,7,8,10,11,12,14]},{l:[2,0,
0],m:[6,15,0,1,3,2,7,8,10,13,9,4,5,11,12,14]},{l:[2,0,1],m:[6,15,0,1,2,3,7,8,4,10,9,13,5,11,12,14]},{l:[2,0,2],m:[0,15,1,2,3,4,7,8,13,5,6,9,10,11,12,14]},{l:[4,0,0],m:[6,12,14,15,0,1,7,2,8,11,9,3,4,5,10,13]},{l:[4,0,1],m:[6,12,14,0,1,2,3,4,7,8,11,13,5,9,10,15]},{l:[4,0,2],m:[6,15,0,1,2,3,5,7,8,13,9,4,10,11,12,14]}],vd=function(a,b){if(!b)return 0;var c=b.y;switch(a){case 2:return 285>c?0:1396>c?1:2;case 4:return 275>c?0:1057>c?1:2;default:return 216>c?0:838>c?1:2}};var wd=function(a){var b=Infinity;do{var c;a:{if(a&&a.style&&a.style.height&&(c=/^(\d+)px$/.exec(a.style.height))){c=+c[1];break a}c=null}c&&(b=Math.min(b,c))}while(a=a.parentNode);return b},yd=function(a,b,c){if("auto"==c)return c=U(a).clientWidth,c=Math.min(1200,c),b/=c,xd(a)&&!(488>U(a).clientWidth)&&.6<b?2:.25>=b?4:3;if(O(V(a),T.B.i)&&"autorelaxed"==c)return 8;a=0;for(var d in sd)-1!=c.indexOf(d)&&(a|=sd[d]);return a},Ad=function(a,b,c,d,e){var f;if(xd(d)){b:{f=!pd()&&(H("iPod")||H("iPhone")||
H("Android")||H("IEMobile"))?2:pd()?4:3;var g=rd(e,d);f=[f,g&&3==f?83>g.x?0:265>g.x?1:2:0,vd(f,g)];for(g=0;g<ud.length;++g){var h=ud[g],m;c:{m=f;var k=h.l;if(ga(m)&&ga(k)&&m.length==k.length){for(var l=m.length,n=vb,p=0;p<l;p++)if(!n(m[p],k[p])){m=!1;break c}m=!0}else m=!1}if(m){f=h.m;break b}}throw Error("No format for "+f);}g=[];for(h=0;h<f.length;++h)g.push(td[f[h]]);f=g}else f=td.slice(0).sort(zd);if(O(V(d),T.u.i)){g=f.length;h=[];for(m=0;m<g;++m)k=Math.floor(Math.random()*(m+1)),h[m]=h[k],h[k]=
f[m];f=h}if(h=g=488>U(d).clientWidth)h=Math.min(U(d).clientHeight,16*U(d).clientWidth/9),d=rd(e,d),h=(d?d.y:0)<h-100;d=h;for(e=0;e<f.length;e++)if(h=f[e],h.width<=a&&h.height<=b&&h.format&c&&!(320==h.width&&(g&&50==h.height||!g&&100==h.height)||d&&250<=h.height))return h;return null},zd=function(a,b){return b.width-a.width||b.height-a.height},xd=function(a){return O(V(a),T.C.i)||Bd(a)},Bd=function(a){var b=T.D;return"LE"==a.google_responsive_override_logs_experiment||O(V(a),b.i)};var Cd=function(a,b){b&&a.push(b);return b},Dd=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:y([c,d],b)},Ed=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];return O(V(b),c)?(a.push(c),c):O(V(b),d)?(a.push(d),d):null};var Fd=function(a){return Rb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Hd=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");Gd(a,b,c)},Gd=function(a,b,c){Id(a,b,c);if(!Jd(a,b,c)){if(b.google_reactive_ads_config){if(Kd)throw Error("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");Kd=!0}Ob(c);1==Pb(c)&&od(c,b.google_ad_client);J(Mc,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&
"html"!=d)throw Error("adsbygoogle.push() error: No support for google_ad_output="+d);P("aa::load",Q,function(){kd(c,b,a)})}},Jd=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var e=d.page_level_pubvars,f=(ha(e)?e:{}).google_tag_origin;var g=b.google_ad_slot,e=c.google_ad_modifications;!e||Qc(e.ad_whitelist,g,f||b.google_tag_origin)?e=null:(f=e.space_collapsing||"none",e=(g=Qc(e.ad_blacklist,g))?{F:!0,J:g.space_collapsing||f}:e.remove_ads_by_default?{F:!0,J:f}:null);return e&&e.F&&"on"!=
b.google_adtest?("slot"==e.J&&(null!==sb(a.getAttribute("width"))&&a.setAttribute("width",0),null!==sb(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(e=pb(a,c))||"none"!=e.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},Ld=function(a,b){var c=a.getBoundingClientRect();if(c&&0==c.left&&0==
c.right&&0==c.width&&0==c.height)return!1;var d=pb(a,b);if(!d)return!1;c=tb(d.width);d=tb(d.height);return null==c||null==d||Wc[c+"x"+d]?!1:!0},Id=function(a,b,c){for(var d=a.attributes,e=d.length,f=0;f<e;f++){var g=d[f];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");if(!b.hasOwnProperty(h)){var g=g.value,m={google_reactive_ad_format:ma,google_allow_expandable_ads:na},g=m.hasOwnProperty(h)?m[h](g,null):g;null===g||(b[h]=g)}}}d=c.google_ad_modifications=c.google_ad_modifications||
{};d.plle||(d.plle=!0,d=d.loeids=d.loeids||[],e=T.C,Cd(d,Dd(c,ya,e.j,e.i))||(e=T.B,Cd(d,Dd(c,za,e.j,e.i))),e=T.u,Cd(d,Dd(c,Aa,e.j,e.i)),e=T.A,Cd(d,Dd(c,Ba,e.j,e.i)),e=T.D,Cd(d,Dd(c,Ca,e.j,e.i)));if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=U(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=
U(c).clientWidth||0,b.google_ad_height=U(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=U(c).clientWidth||0,b.google_ad_height=U(c).clientHeight||0,a.style.display="none";else if(d=b.google_ad_format,(d="auto"==d||/^((^|,) *(horizontal|vertical|rectangle|autorelaxed) *)+$/.test(d))||(Ld(a,c)?(d=T.D,Ed(b,c,d.j,d.i)!==d.i?d=!1:(b.google_ad_format="auto",d=!0)):d=!1),d){var k=T.C;Ed(b,c,k.j,k.i);k=T.u;Ed(b,c,k.j,k.i);k=T.A;Ed(b,c,k.j,k.i);"autorelaxed"==
b.google_ad_format&&(k=T.B,Ed(b,c,k.j,k.i));var k=a.offsetWidth,l=O(V(c),T.A.i)||xd(c)||O(V(c),T.u.i)?wd(a):void 0,n=b.google_ad_format,p="number"==typeof l?l:Infinity,z=yd(c,k,n);b&&(b.google_responsive_formats=z);c=Bd(c)?Ad(k,p,z,c,a)||Ad(k,p,7,c,a):Ad(k,p,z,c,a);if(!c)throw Error("adsbygoogle.push() error: Cannot find a responsive size for a container of width="+k+"px and height="+l+"px data-ad-format="+n);b.google_ad_width=300<k&&300<c.height?c.width:1200<k?1200:Math.round(k);b.google_ad_height=
c.height;a.style.height=c.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{d=Ld(a,c)?(d=y(["LC","LE"],Da))?"LE"==(b.google_responsive_override_logs_experiment=d):!1:!1;if(d)try{l=a.offsetWidth,n=yd(c,l,"auto"),z=wd(a),k=(p=Ad(l,z,n,c,a)||Ad(l,z,7,c,a))?{width:300<l&&300<p.height?p.width:1200<l?1200:Math.round(l),height:p.height,format:p.format}:null,b.google_ember_w=k?k.width:"x",b.google_ember_h=k?k.height:"x"}catch(K){b.google_ember_w=b.google_ember_h=
"e"}!rb.test(b.google_ad_width)&&!qb.test(a.style.width)||!rb.test(b.google_ad_height)&&!qb.test(a.style.height)?(k=pb(a,c),a.style.width=k.width,a.style.height=k.height,qd(k,b),b.google_loader_features_used=256):(qd(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(k=a.style.width,a.style.width="100%",l=a.offsetWidth,a.style.width=k,b.google_available_width=l));l=b.google_ad_width;k=b.google_ad_height;l&&k&&!Wc[l+"x"+k]&&(k=y("CD ED CA EA CW EW".split(" "),
ra))&&("CD"==k?b.google_overflowing_ads_experiment=k:((l=/W$/.test(k)&&728>l)||(l=/^E/.test(k),n=U(c),a&&a.getBoundingClientRect&&n&&n.getBoundingClientRect?(c=a.getBoundingClientRect(),n=n.getBoundingClientRect(),c=Math.min(c.right,n.right)-Math.max(c.left,n.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(n=a.style.width||"",a.style.width="100%",p=a.offsetWidth,160>p||0>c-p?(a.style.width=n,a=!1):(l?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=n,a=!0)),l=!a&&
"ED"!=k),l||(b.google_overflowing_ads_experiment=k)))}},ae=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Fd(d)&&(!a||d.id==a))return d;return null},Kd=!1,be=function(a){var b={};J(la,function(c,e){a.hasOwnProperty(e)&&(b[e]=a[e])});ha(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);Hd(c,{google_reactive_ads_config:b,
google_ad_client:a.google_ad_client})},ce=function(a){if(!ob())throw Error("adsbygoogle.push() error: Page-level tag must be placed in top window.");document.body?be(a):Nb(Cc(function(){be(a)}))},de=function(a,b,c,d,e,f){if(-1<b.indexOf("adsbygoogle.push() error: ")){c={};xc(c);if(e)try{e(c)}catch(g){}c.context=a;c.msg=b.substring(0,512);c.url=ub.URL.substring(0,512);c.ref=ub.referrer.substring(0,512);yc("puberror",c,f||.01);return!1}return Q(a,b,c,d,e,f)},fe=function(a){var b={};P("aa::hqe",de,function(){ee(a,
b)},function(c){c.client=c.client||b.google_ad_client||a.google_ad_client;c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})},ee=function(a,b){ka=(new Date).getTime();var c;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){c=!0;break a}throw Error("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");}c=!1}if(c)ce(a);else{c=a.element;var d=a.params;d&&J(d,function(a,c){b[c]=a});if(c){if(!Fd(c)&&(c=c.id?ae(c.id):null,
!c))throw Error("adsbygoogle.push() error: 'element' has already been filled.");if(!("innerHTML"in c))throw Error("adsbygoogle.push() error: 'element' is not a good DOM element.");}else if(c=ae(),!c)throw Error("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");Hd(c,b)}},ge=function(){P("aa::main",de,function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:x(a.top)?1:2))window.google_top_js_status=
0;else if(top.postMessage){var b;try{b=C.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=y(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],qa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",nd,!1):a.attachEvent&&a.attachEvent("onmessage",nd);window.google_top_js_status=3;a={0:"google_loc_request",1:md};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=
2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{fe(a)}catch(e){throw window.setTimeout(ge,0),e;}if(!d||!d.loaded){window.adsbygoogle={push:fe,loaded:!0};d&&he(d.onload);try{Object.defineProperty(window.adsbygoogle,"onload",{set:he})}catch(f){}}})},he=function(a){N(a)&&window.setTimeout(a,0)};ge();}).call(this);
