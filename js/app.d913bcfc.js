(function(e){function t(t){for(var n,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-52f32780":"9460cc57","chunk-320b93c2":"81201cd8","chunk-e80e87de":"d6724459"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-52f32780":1,"chunk-320b93c2":1,"chunk-e80e87de":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-52f32780":"d1e0cfd8","chunk-320b93c2":"cd06f895","chunk-e80e87de":"51b940a8"}[e]+".css",i=u.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===n||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],h.parentNode.removeChild(h),r(a)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}i[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){r("8f7e"),e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],a=(r("5c0b"),r("2877")),c={},u=Object(a["a"])(c,o,i,!1,null,null,null),s=u.exports,l=(r("d3b7"),r("8c4f")),d=function(){return Promise.all([r.e("chunk-52f32780"),r.e("chunk-320b93c2")]).then(r.bind(null,"427d"))},h=function(){return Promise.all([r.e("chunk-52f32780"),r.e("chunk-e80e87de")]).then(r.bind(null,"32cb"))};n["a"].use(l["a"]);var f=[{path:"/",name:"Home",component:d},{path:"/editor",name:"Editor",component:h}],p=new l["a"]({routes:f}),m=p,g=r("a925"),v={"Do Not Click Me":"没事不要点","Dark Theme":"暗色主题","Light Theme":"浅色主题",GitHub:"代码猫",Telegram:"观星台",Discord:"Discord",English:"英文","Toggle chorus mode":"多重吟唱模式开关","Music board":"声音面板",Back:"返回","Suisei Remix Editor":"星音混响编辑器",experimental:"实验性",Play:"播放",Export:"导出",Clear:"清除","Your device screen is too small to run this editor. Sorry~":"你的屏幕尺寸过小，不适合运行此编辑器。抱歉～","long-editor-description":"你可以在此页对星音剪辑进行组合，并且导出你的作品。<br>轨道总长度为 5 秒。拖动声音剪辑按钮到轨道上以添加音频片段。<br>在创作衍生作品时，请遵守 <a href='https://hololive.tv/terms'>Hololive 二创条例</a>。<br>（这是一个实验性编辑器。在将来可能会有大量改变及功能添加。）"},b={"Do Not Click Me":"Do Not Click Me","Dark Theme":"Dark Theme","Light Theme":"Light Theme",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"English","Toggle chorus mode":"Toggle chorus mode","Music board":"Music board",Back:"Back","Suisei Remix Editor":"Suisei Remix Editor",experimental:"experimental",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"Your device screen is too small to run this editor. Sorry~","long-editor-description":"Here you can remix with Suisei's voice clips and export your sparks.<br>The full track length is 5 seconds. Drag the voice clip button on wherever you want on the track.<br>Please comply to <a href='https://en.hololive.tv/terms'>Hololive's fan work guidelines</a> when creating derivative works.<br>(This editor is experimental and may change a lot and add many features in the future.)"},y={"Do Not Click Me":"クリックしないでください","Dark Theme":"暗色のテーマ","Light Theme":"明色のテーマ",GitHub:"GitHub",Telegram:"Telegram",Discord:"Discord",English:"英語","Toggle chorus mode":"コーラスモードをオンにする","Music board":"Music board",Back:"Back","Suisei Remix Editor":"すいちゃんリミックスエディター",experimental:"試作版",Play:"Play",Export:"Export",Clear:"Clear","Your device screen is too small to run this editor. Sorry~":"ごめんなさい。画面が小さいためこのエディターを利用できません。","long-editor-description":"ここですいちゃんの音声素材をリミックスして保存することができます。<br>音声は5秒まで可能です。 追加したい場所に音声素材をドラッグしてください。<br>使用する際は<a href='https://hololive.tv/terms'>ホロライブ二次創作規約</a>に従ってください。<br>(このエディターは試作版です。今後新たな機能が追加されることがあります。)"};n["a"].use(g["a"]);var k=new g["a"]({locale:"zh",fallbackLocale:"en",messages:{en:b,ja:y,zh:v}}),w=r("b85c"),E=r("d4ec"),T=r("bee2"),x=function(){function e(){Object(E["a"])(this,e),this.audios=[],this.multiPlay=!0,this.playCount=0}return Object(T["a"])(e,[{key:"addAudio",value:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Audio(e);return this.audios.push(n),n.addEventListener("play",(function(){t.playCount+=1})),n.addEventListener("pause",(function(){t.playCount-=1})),r&&n.addEventListener("loadeddata",(function(){t.multiPlay||t.stopAll(),n.play()})),n}},{key:"preload",value:function(e){this.addAudio(e,!1)}},{key:"stopAll",value:function(){var e,t=Object(w["a"])(this.audios);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.pause()}}catch(n){t.e(n)}finally{t.f()}}}]),e}(),C=r("dc21"),P=r("e594"),S=r("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].prototype.$status={darkMode:!1,playCount:0,player:new x},C["a"]({dsn:"https://fea8a42155df4851b95de0a8de86cb17@o407537.ingest.sentry.io/5276695",integrations:[new P["a"]({Vue:n["a"],attachProps:!0})]}),n["a"].config.productionTip=!1,new n["a"]({router:m,i18n:k,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.d913bcfc.js.map