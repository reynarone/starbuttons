(function(e){function t(t){for(var o,r,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-595b11fa":"9b5fbd64","chunk-72d90555":"8bc6fdf9","chunk-dff06bd0":"de5ac862"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-595b11fa":1,"chunk-72d90555":1,"chunk-dff06bd0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-595b11fa":"5510e101","chunk-72d90555":"cf8dc8fd","chunk-dff06bd0":"3f8a07e9"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=a[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===o||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("8f7e"),e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),l={},s=Object(a["a"])(l,r,i,!1,null,null,null),c=s.exports,u=(n("d3b7"),n("8c4f")),d=function(){return Promise.all([n.e("chunk-595b11fa"),n.e("chunk-72d90555")]).then(n.bind(null,"427d"))},f=function(){return Promise.all([n.e("chunk-595b11fa"),n.e("chunk-dff06bd0")]).then(n.bind(null,"32cb"))};o["a"].use(u["a"]);var h=[{path:"/",name:"Home",component:d},{path:"/editor",name:"Editor",component:f}],p=new u["a"]({routes:h}),g=p,b=n("a925"),m={"Do Not Click Me":"没事不要点",Repeat:"洗脑循环","Dark Theme":"暗色主题","Light Theme":"浅色主题",GitHub:"代码猫",Telegram:"观星台",Discord:"Discord",English:"英文","Toggle chorus mode":"多重吟唱模式开关","Music board":"声音面板",Back:"返回","Suisei Remix Editor":"星音混响编辑器",experimental:"实验性",Play:"播放",Export:"导出",Clear:"清除","Your device screen is too small to run this editor. Sorry~":"你的屏幕尺寸过小，不适合运行此编辑器。抱歉～","long-editor-description":"你可以在此页对星音剪辑进行组合，并且导出你的作品。<br>轨道总长度为 5 秒。拖动声音剪辑按钮到轨道上以添加音频片段。<br>在创作衍生作品时，请遵守 <a href='https://hololive.tv/terms'>Hololive 二创条例</a>。<br>（这是一个实验性编辑器。在将来可能会有大量改变及功能添加。）","Error in sound playing:":"在播放声音时出现错误","We've known about it and will work on it soon.":"我们已经获知此问题并将着手处理。","Sound list fetch error:":"音频列表获取失败：","Voices are still loading. Please be patient...":"音频仍在加载，请稍等...","Unrecognized sound list.":"未能识别声音列表。","Still loading...":"仍在加载..."},v={"Do Not Click Me":"Do Not Click Me",Repeat:"Repeat","Dark Theme":"Dark Theme","Light Theme":"Light Theme",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"English","Toggle chorus mode":"Toggle chorus mode","Music board":"Music board",Back:"Back","Suisei Remix Editor":"Suisei Remix Editor",experimental:"experimental",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"Your device screen is too small to run this editor. Sorry~","long-editor-description":"Here you can remix with Suisei's voice clips and export your sparks.<br>The full track length is 5 seconds. Drag the voice clip button on wherever you want on the track.<br>Please comply to <a href='https://en.hololive.tv/terms'>Hololive's fan work guidelines</a> when creating derivative works.<br>(This editor is experimental and may change a lot and add many features in the future.)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:","Voices are still loading. Please be patient...":"Voices are still loading. Please be patient...","Unrecognized sound list.":"Unrecognized sound list.","Still loading...":"Still loading..."},y={"Do Not Click Me":"クリックしないでください",Repeat:"Repeat","Dark Theme":"暗色のテーマ","Light Theme":"明色のテーマ",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"英語","Toggle chorus mode":"コーラスモードをオンにする","Music board":"Music board",Back:"Back","Suisei Remix Editor":"すいちゃんリミックスエディター",experimental:"試作版",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"ごめんなさい。画面が小さいためこのエディターを利用できません。","long-editor-description":"ここですいちゃんの音声素材をリミックスして保存することができます。<br>音声は5秒まで可能です。 追加したい場所に音声素材をドラッグしてください。<br>使用する際は<a href='https://hololive.tv/terms'>ホロライブ二次創作規約</a>に従ってください。<br>(このエディターは試作版です。今後新たな機能が追加されることがあります。)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:","Voices are still loading. Please be patient...":"Voices are still loading. Please be patient...","Unrecognized sound list.":"Unrecognized sound list.","Still loading...":"Still loading..."};o["a"].use(b["a"]);var k=new b["a"]({locale:"zh",fallbackLocale:"en",messages:{en:v,ja:y,zh:m}}),w=(n("ddb0"),n("b85c")),E=n("d4ec"),S=n("bee2"),T=function(){function e(){Object(E["a"])(this,e),this.audios=[],this.multiPlay=!0,this.repeatThis=!1,this.playCount=0}return Object(S["a"])(e,[{key:"addAudio",value:function(e){var t=this,n=new Audio;return n.preload="auto",this.audios.push(n),n.addEventListener("play",(function(){t.playCount+=1})),n.addEventListener("pause",(function(){t.playCount-=1})),n.addEventListener("ended",(function(){t.repeatThis&&n.play()})),n.src=e,n}},{key:"stopAllWhenNonMultiPlay",value:function(){this.multiPlay||this.stopAll()}},{key:"preload",value:function(e){this.addAudio(e)}},{key:"stopAll",value:function(){var e,t=Object(w["a"])(this.audios.values());try{for(t.s();!(e=t.n()).done;){var n=e.value;try{n.pause()}catch(o){}}}catch(r){t.e(r)}finally{t.f()}}}]),e}(),P=n("dc21"),x=n("e594"),C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].prototype.$status={darkMode:!1,playCount:0,player:new T},P["a"]({dsn:"https://fea8a42155df4851b95de0a8de86cb17@o407537.ingest.sentry.io/5276695",integrations:[new x["a"]({Vue:o["a"],attachProps:!0})]}),o["a"].config.productionTip=!1,new o["a"]({router:g,i18n:k,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.ed9e06ec.js.map