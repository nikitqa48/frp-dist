(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"34d7":function(e,a,t){},"713b":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t("header-vue"),t("q-page-container",[t("router-view")],1)],1)},r=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-header",{ref:"header",class:{background:e.changeColor},staticStyle:{display:"flex","flex-direction":"column",width:"100%",background:"white",color:"black"}},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"div_logo",staticStyle:{width:"12vw","align-self":"center"}},[t("q-img",{staticClass:"logo",attrs:{src:"logo.png"},on:{click:e.push}})],1),t("div",{staticStyle:{display:"flex","flex-wrap":"nowrap","margin-left":"15vw"}},[e._l(e.items,(function(a,n){return[t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:n,staticStyle:{height:"10%","margin-left":"2vw"},attrs:{clickable:"",active:"Outbox"===a.label,to:a.to}},[t("q-item-section",[e._v("\n          "+e._s(a.label)+"\n      ")])],1)]}))],2)]),t("q-separator",{directives:[{name:"show",rawName:"v-show",value:!e.changeColor,expression:"!changeColor"}]})],1)},l=[],i=(t("b0c0"),{name:"myHeader",data:function(){return{items:[{label:"Производители",to:{name:"branch"}},{label:"Потребители",to:"/asdasda"},{label:"Торговая площадка",to:"/asdasd"},{label:"Регистрация",to:"/ывыфвфыв"},{label:"Контакты",to:"/asd"}]}},methods:{push:function(){this.$router.push({name:"landing"})}},computed:{changeColor:function(){return"landing"===this.$route.name}}}),s=i,c=(t("d11f"),t("2877")),d=t("e359"),u=t("068f"),p=t("66e5"),m=t("4074"),f=t("eb85"),h=t("714f"),v=t("eebe"),b=t.n(v),w=Object(c["a"])(s,o,l,!1,null,"c84d7a6a",null),g=w.exports;b()(w,"components",{QHeader:d["a"],QImg:u["a"],QItem:p["a"],QItemSection:m["a"],QSeparator:f["a"]}),b()(w,"directives",{Ripple:h["a"]});var y={name:"MainLayout",components:{headerVue:g},data:function(){return{}}},k=y,x=t("4d5a"),C=t("09e3"),_=Object(c["a"])(k,n,r,!1,null,"5094d16f",null);a["default"]=_.exports;b()(_,"components",{QLayout:x["a"],QPageContainer:C["a"]})},d11f:function(e,a,t){"use strict";t("34d7")}}]);