(function(e){function r(r){for(var o,n,c=r[0],l=r[1],u=r[2],s=0,d=[];s<c.length;s++)n=c[s],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(r);while(d.length)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],o=!0,n=1;n<t.length;n++){var c=t[n];0!==i[c]&&(o=!1)}o&&(a.splice(r--,1),e=l(l.s=t[0]))}return e}var o={},n={app:0},i={app:0},a=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-71a7fcd9":"7ee2c13c","chunk-186eb1bc":"378c09d2","chunk-dff06bd0":"3ecf0a99"}[e]+".js"}function l(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var r=[],t={"chunk-71a7fcd9":1,"chunk-186eb1bc":1,"chunk-dff06bd0":1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=new Promise((function(r,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-71a7fcd9":"5349be4f","chunk-186eb1bc":"68aaa6a5","chunk-dff06bd0":"e4f66e00"}[e]+".css",i=l.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===i))return r()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===i)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var o=r&&r.target&&r.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[e],f.parentNode.removeChild(f),t(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){n[e]=0})));var o=i[e];if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(r,t){o=i[e]=[r,t]}));r.push(o[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(r){s.onerror=s.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,t[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(r)},l.m=e,l.c=o,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)l.d(t,o,function(r){return e[r]}.bind(null,o));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=r,u=u.slice();for(var d=0;d<u.length;d++)r(u[d]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){t("8f7e"),e.exports=t("cd49")},"5c0b":function(e,r,t){"use strict";var o=t("9c0c"),n=t.n(o);n.a},"9c0c":function(e,r,t){},cd49:function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=(t("5c0b"),t("2877")),c={},l=Object(a["a"])(c,n,i,!1,null,null,null),u=l.exports,s=(t("d3b7"),t("8c4f")),d=function(){return Promise.all([t.e("chunk-71a7fcd9"),t.e("chunk-186eb1bc")]).then(t.bind(null,"427d"))},f=function(){return Promise.all([t.e("chunk-71a7fcd9"),t.e("chunk-dff06bd0")]).then(t.bind(null,"32cb"))};o["a"].use(s["a"]);var h=[{path:"/",name:"Home",component:d},{path:"/editor",name:"Editor",component:f}],p=new s["a"]({routes:h}),g=p,b=t("a925"),m={"Do Not Click Me":"没事不要点","Dark Theme":"暗色主题","Light Theme":"浅色主题",GitHub:"代码猫",Telegram:"观星台",Discord:"Discord",English:"英文","Toggle chorus mode":"多重吟唱模式开关","Music board":"声音面板",Back:"返回","Suisei Remix Editor":"星音混响编辑器",experimental:"实验性",Play:"播放",Export:"导出",Clear:"清除","Your device screen is too small to run this editor. Sorry~":"你的屏幕尺寸过小，不适合运行此编辑器。抱歉～","long-editor-description":"你可以在此页对星音剪辑进行组合，并且导出你的作品。<br>轨道总长度为 5 秒。拖动声音剪辑按钮到轨道上以添加音频片段。<br>在创作衍生作品时，请遵守 <a href='https://hololive.tv/terms'>Hololive 二创条例</a>。<br>（这是一个实验性编辑器。在将来可能会有大量改变及功能添加。）","Error in sound playing:":"在播放声音时出现错误","We've known about it and will work on it soon.":"我们已经获知此问题并将着手处理。","Sound list fetch error:":"音频列表获取失败："},v={"Do Not Click Me":"Do Not Click Me","Dark Theme":"Dark Theme","Light Theme":"Light Theme",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"English","Toggle chorus mode":"Toggle chorus mode","Music board":"Music board",Back:"Back","Suisei Remix Editor":"Suisei Remix Editor",experimental:"experimental",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"Your device screen is too small to run this editor. Sorry~","long-editor-description":"Here you can remix with Suisei's voice clips and export your sparks.<br>The full track length is 5 seconds. Drag the voice clip button on wherever you want on the track.<br>Please comply to <a href='https://en.hololive.tv/terms'>Hololive's fan work guidelines</a> when creating derivative works.<br>(This editor is experimental and may change a lot and add many features in the future.)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:"},y={"Do Not Click Me":"クリックしないでください","Dark Theme":"暗色のテーマ","Light Theme":"明色のテーマ",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"英語","Toggle chorus mode":"コーラスモードをオンにする","Music board":"Music board",Back:"Back","Suisei Remix Editor":"すいちゃんリミックスエディター",experimental:"試作版",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"ごめんなさい。画面が小さいためこのエディターを利用できません。","long-editor-description":"ここですいちゃんの音声素材をリミックスして保存することができます。<br>音声は5秒まで可能です。 追加したい場所に音声素材をドラッグしてください。<br>使用する際は<a href='https://hololive.tv/terms'>ホロライブ二次創作規約</a>に従ってください。<br>(このエディターは試作版です。今後新たな機能が追加されることがあります。)","Error in sound playing:":"Error in sound playing:","We've known about it and will work on it soon.":"We've known about it and will work on it soon.","Sound list fetch error:":"Sound list fetch error:"};o["a"].use(b["a"]);var k=new b["a"]({locale:"zh",fallbackLocale:"en",messages:{en:v,ja:y,zh:m}}),w=(t("ddb0"),t("b85c")),E=t("d4ec"),T=t("bee2"),x=function(){function e(){Object(E["a"])(this,e),this.audios=[],this.multiPlay=!0,this.playCount=0}return Object(T["a"])(e,[{key:"addAudio",value:function(e){var r=this,t=new Audio;return t.preload="auto",this.audios.push(t),t.addEventListener("play",(function(){r.playCount+=1})),t.addEventListener("pause",(function(){r.playCount-=1})),t.src=e,t}},{key:"stopAllWhenNonMultiPlay",value:function(){this.multiPlay||this.stopAll()}},{key:"preload",value:function(e){this.addAudio(e,!1)}},{key:"stopAll",value:function(){var e,r=Object(w["a"])(this.audios.values());try{for(r.s();!(e=r.n()).done;){var t=e.value;t.pause()}}catch(o){r.e(o)}finally{r.f()}}}]),e}(),S=t("dc21"),P=t("e594"),C=t("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].prototype.$status={darkMode:!1,playCount:0,player:new x},S["a"]({dsn:"https://fea8a42155df4851b95de0a8de86cb17@o407537.ingest.sentry.io/5276695",integrations:[new P["a"]({Vue:o["a"],attachProps:!0})]}),o["a"].config.productionTip=!1,new o["a"]({router:g,i18n:k,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.c28116c3.js.map