(function(e){function t(t){for(var o,r,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-bbfbf932":"429bd3b8","chunk-7f8c1b8c":"343cefab","chunk-9bfbd674":"f5f0adfe","chunk-1ed5d79c":"ce5b3d09","chunk-3345cfd8":"5c5773f9","chunk-7a97843b":"e99d882d","chunk-1d9f8c36":"ea2181b1","chunk-91b54928":"4817f066"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-bbfbf932":1,"chunk-7f8c1b8c":1,"chunk-9bfbd674":1,"chunk-1ed5d79c":1,"chunk-3345cfd8":1,"chunk-7a97843b":1,"chunk-1d9f8c36":1,"chunk-91b54928":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-bbfbf932":"9e62a3ec","chunk-7f8c1b8c":"c0ab0f78","chunk-9bfbd674":"70ddb242","chunk-1ed5d79c":"bb603d71","chunk-3345cfd8":"c69a78af","chunk-7a97843b":"ba70344d","chunk-1d9f8c36":"c8b44393","chunk-91b54928":"4f522853"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gr/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("1356"),r=n.n(o);r.a},"0594":function(e,t,n){},1356:function(e,t,n){},"3fed":function(e,t,n){e.exports=n.p+"img/box.9c40eb3d.png"},"4dc4":function(e,t,n){"use strict";var o=n("0594"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("e814"),r=n.n(o),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),c=n("ce5b"),s=n.n(c),i=(n("bf40"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"#E0E0E0"}},[n("div",{attrs:{id:"app"}},[n("router-view",{key:e.$route.fullPath})],1)])}),u=[],l={name:"app",data:function(){return{}},created:function(){},beforeDestroy:function(){console.log("clearing"),this.setStates(!1)}},f=l,d=(n("034f"),n("2877")),p=n("6544"),h=n.n(p),m=n("7496"),g=Object(d["a"])(f,i,u,!1,null,null,null),b=g.exports;h()(g,{VApp:m["a"]});n("ac6a");var v=n("2f62");a["default"].use(v["a"]);var k=new v["a"].Store({state:{ac_idx:0,level:0,flag:!1,sound:!0,map:[{type:0,status:0,clickable:0}],wrong:0,athena:2,scanner:1,owner:"",key:0,score:0,gemroom:0},mutations:{initMap:function(e){e.wrong=0,e.map=[{type:0,status:0,clickable:0}]},setAcIdx:function(e,t){e.ac_idx=t},setLevel:function(e,t){e.level=t},setFlag:function(e,t){e.flag=t},setSound:function(e,t){e.sound=t,localStorage.setItem("soundOn",t)},incrementWrong:function(e){e.wrong+=1},setKey:function(e,t){e.key=t},setGemRoom:function(e,t){e.gemroom=t},initScore:function(e,t){e.score=t},setScore:function(e,t){e.score+=t},setAthena:function(e,t){e.athena+=t},setScanner:function(e,t){e.scanner+=t},setOwner:function(e,t){e.owner=t},changeStatus:function(e,t){var n=t.index,o=t.status;if(console.log("index ",n),e.map[n].status=o,e.map[n].clickable=0,1===o){e.map.forEach(function(e){e.clickable=0});var r=n-1;r>0&&r%7!==6&&0===e.map[r].status&&e.map.splice(r,1,{type:e.map[r].type,status:e.map[r].status,clickable:-1}),r=n+1,r%7!=0&&0===e.map[r].status&&e.map.splice(r,1,{type:e.map[r].type,status:e.map[r].status,clickable:1}),r=n+7,r<e.map.length-1&&0===e.map[r].status&&e.map.splice(r,1,{type:e.map[r].type,status:e.map[r].status,clickable:7})}}},getters:{ac_idx:function(e){return e.ac_idx},level:function(e){return e.level},flag:function(e){return e.flag},sound:function(e){return e.sound},wrong:function(e){return e.wrong},owner:function(e){return e.owner},gemroom:function(e){return e.gemroom},key:function(e){return e.key},score:function(e){return e.score},athena:function(e){return e.athena},scanner:function(e){return e.scanner},status:function(e){return function(t){return e.map[t].status}},type:function(e){return function(t){return e.map[t].type}},clickable:function(e){return function(t){return e.map[t].clickable}},movable:function(e){return e.map.filter(function(e){return 0!==e.clickable}).length}}}),y=n("8c4f"),w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-img",{attrs:{src:n("a86b")}},[e.ready?o("v-container",{attrs:{"fill-height":""}},[o("v-flex",{attrs:{xs12:""}},[o("v-layout",{attrs:{column:"","fill-height":""}},[o("v-flex",{staticClass:"align-self-center justify-self-center mb-5"},[o("v-img",{attrs:{src:n("3fed")}},[o("br"),o("div",{staticClass:"text-xs-center mt-5 pa-5 headline",attrs:{wrap:""}},[e._v("\n              현재 황금성의 주인은\n              "),o("br"),o("strong",[e._v(e._s(e.owner))]),e._v("님 입니다.\n            ")])])],1),o("v-flex",{staticClass:"justify-self-end align-self-center mb-0 pb-0"},[o("v-btn",{staticClass:"brown darken-3 yellow--text headline",attrs:{large:""},on:{click:e.startGame}},[e._v("게임 시작")])],1)],1)],1)],1):e._e()],1)},x=[],_={name:"splash",data:function(){return{ready:!1}},props:{ac_idx:{type:String}},created:function(){var e=this;if(this.ac_idx)localStorage.setItem("userId",this.ac_idx),this.$store.commit("setAcIdx",this.ac_idx),this.getStates(),setTimeout(function(){e.ready=!0},1500);else{var t=localStorage.getItem("userId");t?(this.$store.commit("setAcIdx",t),this.getStates(),setTimeout(function(){e.ready=!0},1500)):console.log("no idx")}},computed:{owner:function(){return this.$store.getters.owner}},methods:{startGame:function(){this.$router.push({name:"game"})}}},S=_,j=(n("4dc4"),n("8336")),$=n("a523"),O=n("0e8f"),A=n("adda"),E=n("a722"),P=Object(d["a"])(S,w,x,!1,null,null,null),T=P.exports;h()(P,{VBtn:j["a"],VContainer:$["a"],VFlex:O["a"],VImg:A["a"],VLayout:E["a"]}),a["default"].use(y["a"]);var C,I=new y["a"]({mode:"history",routes:[{path:"/:ac_idx",name:"splash",component:T,props:!0},{path:"/game/:rand",name:"game",component:function(){return Promise.all([n.e("chunk-bbfbf932"),n.e("chunk-9bfbd674")]).then(n.bind(null,"25e0"))}},{path:"/bonus/:rand",name:"bonus",component:function(){return Promise.all([n.e("chunk-bbfbf932"),n.e("chunk-7f8c1b8c")]).then(n.bind(null,"a56f"))}}]}),N=n("7212"),F=n.n(N),L=(n("dfa4"),n("9483")),M=n("a543"),V=n.n(M),B=function(e){V.a.confirm("게임에 업데이트 내용이 있습니다!",function(){e.postMessage({action:"skipWaiting"})})};console.log("try to register service worker"),Object(L["a"])("".concat("/gr/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),B(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",function(){C||(window.location.reload(),C=!0)}),n("ed18").config(),a["default"].config.productionTip=!1,a["default"].use(s.a,{iconfont:"mdi"}),a["default"].use(F.a),a["default"].mixin({methods:{playbeep:function(e){if(this.$store.getters.sound&&e){var t=new Audio(e);t.play()}},getStates:function(){var e=this;console.log("getter called with "+this.$store.getters.ac_idx);var t=new FormData;t.append("ac_idx",this.$store.getters.ac_idx),fetch("https://www.hoopeeworld.co.kr/goldrush/getStates.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(t){0==t.result&&(e.$store.commit("initScore",r()(t.data.score)),e.$store.commit("setLevel",r()(t.data.level)),e.$store.commit("setGemRoom",r()(t.data.room_no)),e.$store.commit("setKey",r()(t.data.key_no)),e.$store.commit("setOwner",t.data.owner_name),console.log(t.data))})},setStates:function(e){var t=new FormData;t.append("ac_idx",this.$store.getters.ac_idx),t.append("score",this.$store.getters.score),e&&(t.append("room_no",this.$store.getters.gemroom),t.append("key_no",this.$store.getters.key)),fetch("https://www.hoopeeworld.co.kr/goldrush/setStates.php",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){0==e.result?console.log("success"):console.log(e.message)})}}}),new a["default"]({el:"#app",store:k,router:I,components:{App:b},template:"<App/>"})},a86b:function(e,t,n){e.exports=n.p+"img/main.0ebc1f35.jpg"}});
//# sourceMappingURL=app.303ec8f3.js.map