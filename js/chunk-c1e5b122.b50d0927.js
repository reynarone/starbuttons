(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1e5b122"],{2532:function(t,e,r){"use strict";var n=r("23e7"),s=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"427d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{class:{themeDark:t.enforceDarkTheme,themeSystem:t.useSystemTheme},attrs:{id:"page"}},[t._l(t.currentErrors,(function(t,e){return[r("ErrorBar",{key:e,attrs:{err:t}})]})),r("div",{attrs:{id:"settings",title:t.$t("Toggle chorus mode")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{type:"checkbox",value:"multiPlay"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"multiPlay")>-1:t.settings},on:{change:function(e){var r=t.settings,n=e.target,s=!!n.checked;if(Array.isArray(r)){var i="multiPlay",a=t._i(r,i);n.checked?a<0&&(t.settings=r.concat([i])):a>-1&&(t.settings=r.slice(0,a).concat(r.slice(a+1)))}else t.settings=s}}}),r("label",{attrs:{for:"isMutliplay"}},[t._v(t._s(t.$t("Do Not Click Me")))]),t._v(" | "),"light"===t.currentSystemTheme?[r("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{id:"toggleEnforceDarkMode",type:"checkbox",value:"enforceMode__dark"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"enforceMode__dark")>-1:t.settings},on:{change:function(e){var r=t.settings,n=e.target,s=!!n.checked;if(Array.isArray(r)){var i="enforceMode__dark",a=t._i(r,i);n.checked?a<0&&(t.settings=r.concat([i])):a>-1&&(t.settings=r.slice(0,a).concat(r.slice(a+1)))}else t.settings=s}}}),r("label",{attrs:{for:"toggleEnforceDarkMode"}},[t._v(t._s(t.$t("Dark Theme")))])]:[r("input",{directives:[{name:"model",rawName:"v-model",value:t.settings,expression:"settings"}],attrs:{id:"toggleEnforceLightMode",type:"checkbox",value:"enforceMode__light"},domProps:{checked:Array.isArray(t.settings)?t._i(t.settings,"enforceMode__light")>-1:t.settings},on:{change:function(e){var r=t.settings,n=e.target,s=!!n.checked;if(Array.isArray(r)){var i="enforceMode__light",a=t._i(r,i);n.checked?a<0&&(t.settings=r.concat([i])):a>-1&&(t.settings=r.slice(0,a).concat(r.slice(a+1)))}else t.settings=s}}}),r("label",{attrs:{for:"toggleEnforceLightMode"}},[t._v(t._s(t.$t("Light Theme")))])]],2),r("div",{attrs:{id:"mainWrapper"}},[r("div",{staticClass:"bigBtn",class:{musicBoard:t.displayMusicBoard,animateBtn:!t.displayMusicBoard},attrs:{id:"board"},on:{click:t.playEhhh}},[r("div",{attrs:{id:"boardWrapper"}},[t._l(t.sounds,(function(e,n){return[t.displayMusicBoard?r("BaseButton",{key:n,staticClass:"normalBtn",attrs:{item:e}}):t._e()]}))],2),r("span",{class:{playingBtn:t.playingBtn},attrs:{id:"bigButtonText",tabindex:t.displayMusicBoard?-1:0},on:{error:t.showError}},[t._v(" "+t._s(t.ehhhLocalizedName)+" ")])])]),r("BaseButton",{ref:"centralButton",attrs:{id:"virtualCentralButton",item:t.sounds[0]},on:{started:function(e){t.playingBtn=!0},stopped:function(e){t.playingBtn=!1},error:t.showError}}),r("div",{staticClass:"animateBtn smallBtn",attrs:{id:"switchBtn",tabindex:"0"},on:{click:function(e){t.displayMusicBoard=!t.displayMusicBoard}}},[t._v(" "+t._s(t.displayMusicBoard?t.$t("Back"):t.$t("Music board"))+" ")]),t._m(0)],2)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"bottom"}},[r("a",{staticClass:"bottonBtnLink",attrs:{href:"https://github.com/suisei-cn/starbuttons","aria-label":"GitHub repository of suisei.moe",target:"_blank"}},[r("i",{staticClass:"icon-github"})]),t._v("/ "),r("a",{staticClass:"bottonBtnLink",attrs:{href:"https://t.me/Hoshimachi_Suisei","aria-label":"Telegram Fan Group",target:"_blank"}},[r("i",{staticClass:"icon-telegram"}),t._v(" "),r("sup",[t._v("(CN)")])]),t._v("/ "),r("a",{staticClass:"bottonBtnLink",attrs:{href:"https://discord.gg/9fJGBZz","aria-label":"Discord Fan Group",target:"_blank"}},[r("i",{staticClass:"icon-discord"}),t._v(" "),r("sup",[t._v("(JP)")])]),t._v("/"),r("a",{staticClass:"bottonBtnLink",attrs:{href:"https://discord.gg/4fmY8WC","aria-label":"Discord Fan Group",target:"_blank"}},[r("i",{staticClass:"icon-discord"}),t._v(" "),r("sup",[t._v("(EN)")])])])}],i=(r("caad"),r("c975"),r("a434"),r("b0c0"),r("d3b7"),r("25f0"),r("2532"),r("96cf"),r("1da1")),a=r("d4ec"),o=r("bee2"),c=r("262e"),u=r("2caf"),l=r("9ab4"),d=r("60a3");function h(t,e){try{localStorage.setItem(t,e)}catch(r){}}function f(t){try{return localStorage.getItem(t)}catch(e){return null}}function g(t){try{localStorage.removeItem(t)}catch(e){}}var p=r("82ea"),m=r("1bec"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error n",domProps:{innerHTML:t._s(t.err)}})},b=[],y=function(t){Object(c["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return r}(d["d"]);Object(l["b"])([Object(d["c"])()],y.prototype,"err",void 0),y=Object(l["b"])([d["a"]],y);var _=y,k=_,B=(r("796b"),r("2877")),S=Object(B["a"])(k,v,b,!1,null,"3c93ea97",null),O=S.exports,x="enforced-theme",E=function(t){Object(c["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(a["a"])(this,r),t=e.apply(this,arguments),t.sounds=[{}],t.displayMusicBoard=!1,t.settings=[],t.useSystemTheme=!0,t.enforceDarkTheme=!1,t.playingBtn=!1,t.currentSystemTheme="light",t.currentErrors=[],t}return Object(o["a"])(r,[{key:"showError",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.currentErrors.push(t),setTimeout((function(){var r=e.currentErrors.indexOf(t);e.currentErrors.splice(r,1)}),r)}},{key:"updateSettings",value:function(t){t.includes("enforceMode__dark")?(h(x,"dark"),this.enforceDarkTheme=!0):t.includes("enforceMode__light")?(h(x,"light"),this.enforceDarkTheme=!1,this.useSystemTheme=!1):(this.enforceDarkTheme=!1,this.useSystemTheme=!0),this.$status.player.multiPlay=t.includes("multiPlay")}},{key:"playEhhh",value:function(){this.displayMusicBoard||this.$refs.centralButton.play()}},{key:"updateThemeSettings",value:function(){this.currentSystemTheme=function(){try{return getComputedStyle(document.getElementById("page")).getPropertyValue("--theme-preference").includes("light")?"light":"dark"}catch(t){return"light"}}();var t=f(x);null!==t&&(this.currentSystemTheme===t?g(x):(this.useSystemTheme=!1,this.settings.push("enforceMode__".concat(t))))}},{key:"mounted",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.settings=["multiPlay"],t.next=3,fetch("/sounds.json").then((function(t){return t.json()})).catch((function(t){console.error("Sound data fetch error. Exiting."),e.showError(e.$t("Sound list fetch error:")+t.toString())}));case 3:this.sounds=t.sent,Object(m["a"])(window,navigator,this),this.updateThemeSettings();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"ehhhLocalizedName",get:function(){return((null===this||void 0===this?void 0:this.sounds[0].name_l10n)||{})[this.$i18n.locale]||(null===this||void 0===this?void 0:this.sounds[0].name)||""}}]),r}(d["d"]);Object(l["b"])([Object(d["b"])("error")],E.prototype,"showError",null),Object(l["b"])([Object(d["e"])("settings")],E.prototype,"updateSettings",null),E=Object(l["b"])([Object(d["a"])({components:{BaseButton:p["a"],ErrorBar:O}})],E);var M=E,T=M,w=(r("b32a"),r("b438"),Object(B["a"])(T,n,s,!1,null,"7c9f267f",null));e["default"]=w.exports},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"796b":function(t,e,r){"use strict";var n=r("7b1f"),s=r.n(n);s.a},"7b1f":function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),s=r("23cb"),i=r("a691"),a=r("50c4"),o=r("7b0b"),c=r("65f0"),u=r("8418"),l=r("1dde"),d=r("ae40"),h=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,p=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var r,n,l,d,h,f,b=o(this),y=a(b.length),_=s(t,y),k=arguments.length;if(0===k?r=n=0:1===k?(r=0,n=y-_):(r=k-2,n=p(g(i(e),0),y-_)),y+r-n>m)throw TypeError(v);for(l=c(b,n),d=0;d<n;d++)h=_+d,h in b&&u(l,d,b[h]);if(l.length=n,r<n){for(d=_;d<y-n;d++)h=d+n,f=d+r,h in b?b[f]=b[h]:delete b[f];for(d=y;d>y-n+r;d--)delete b[d-1]}else if(r>n)for(d=y-n;d>_;d--)h=d+n-1,f=d+r-1,h in b?b[f]=b[h]:delete b[f];for(d=0;d<r;d++)b[d+_]=arguments[d+2];return b.length=y-n+r,l}})},ab13:function(t,e,r){var n=r("b622"),s=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[s]=!1,"/./"[t](e)}catch(n){}}return!1}},b32a:function(t,e,r){"use strict";var n=r("c6b8"),s=r.n(n);s.a},b438:function(t,e,r){"use strict";var n=r("b9d9"),s=r.n(n);s.a},b9d9:function(t,e,r){},c6b8:function(t,e,r){},c975:function(t,e,r){"use strict";var n=r("23e7"),s=r("4d64").indexOf,i=r("a640"),a=r("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,r){"use strict";var n=r("23e7"),s=r("4d64").includes,i=r("44d2"),a=r("ae40"),o=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);
//# sourceMappingURL=chunk-c1e5b122.b50d0927.js.map