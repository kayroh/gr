(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3345cfd8"],{9910:function(t,a,n){"use strict";var e=n("80d2"),i=n("a523"),r=(n("f134"),n("b57a")),s={name:"v-content",mixins:[r["a"]],props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,a=t.bar,n=t.top,e=t.right,i=t.footer,r=t.insetFooter,s=t.bottom,c=t.left;return{paddingTop:n+a+"px",paddingRight:e+"px",paddingBottom:i+r+s+"px",paddingLeft:c+"px"}}},render:function(t){var a={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,a,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}},c=n("0e8f"),o=n("a722");n.d(a,"a",function(){return l});var l=Object(e["d"])("spacer","div","v-spacer");i["a"],c["a"],o["a"]},c48c:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-dialog",{attrs:{persistent:"",width:"640"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[0===t.type?n("v-card",[n("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":"",column:""}},[n("v-card-title",[n("h2",[t._v("실패")])]),n("v-card-text",{staticClass:"text-xs-center"},[n("h3",[t._v("\n          도전에 실패하셨습니다.\n          "),n("br"),t._v("다시 도전하시겠습니까?\n        ")])]),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.tryagain}},[t._v("예")]),n("v-btn",{attrs:{color:"secondary"},on:{click:t.quit}},[t._v("아니오")])],1)],1)],1):n("v-card",[n("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":"",column:""}},[n("v-card-title",[n("h2",[t._v("성공")])]),n("v-card-text",{staticClass:"text-xs-center"},[n("h3",[t._v("\n          보물을 성공적으로 보관했습니다.\n          "),n("br"),t._v("다시 한번 도전하시겠습니까?\n        ")])]),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.tryagain}},[t._v("예")]),n("v-btn",{attrs:{color:"secondary"},on:{click:t.quit}},[t._v("아니오")])],1)],1)],1)],1)},i=[],r={data:function(){return{localShow:!1}},props:["show","type"],methods:{tryagain:function(){this.setStates(!0),this.$emit("update:show",!1),this.$root.$emit("tryagain")},quit:function(){this.setStates(!1),this.$emit("update:show",!1),this.$root.$emit("quit")}}},s=r,c=n("2877"),o=n("6544"),l=n.n(o),d=n("8336"),u=n("b0af"),v=n("99d9"),p=n("12b2"),h=n("169a"),f=n("a722"),y=n("9910"),g=Object(c["a"])(s,e,i,!1,null,null,null);a["default"]=g.exports;l()(g,{VBtn:d["a"],VCard:u["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:p["a"],VDialog:h["a"],VLayout:f["a"],VSpacer:y["a"]})},f134:function(t,a,n){}}]);
//# sourceMappingURL=chunk-3345cfd8.5c5773f9.js.map