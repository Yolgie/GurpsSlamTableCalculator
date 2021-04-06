(function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/GurpsSlamTableCalculator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},7932:function(e,t,n){"use strict";n("c994")},"85ec":function(e,t,n){},c994:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("h1",{staticClass:"text--center"},[e._v("GURPS Slam Table Calculator")]),n("SlamTableCalculator")],1),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"disclaimer"},[n("h4",[e._v("Disclaimer")]),e._v(" GURPS is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All rights are reserved by Steve Jackson Games. This game aid is the original creation of Matthias Holzinger and is released for free distribution, and not for resale, under the permissions granted in the "),n("a",{attrs:{href:"http://www.sjgames.com/general/online_policy.html"}},[e._v("Steve Jackson Games Online Policy")]),e._v(". ")])}],l=n("d4ec"),i=n("262e"),s=n("2caf"),u=n("9ab4"),p=n("1b40"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("label",[e._v(" HP "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hp,expression:"hp",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.hp},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.calculate(t)},input:function(t){t.target.composing||(e.hp=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("button",{on:{click:e.calculate}},[e._v("Generate")])]),e.slamTable.length>0?n("div",{staticClass:"slam-table"},[n("table",[n("caption",[e._v("Table shows the damage for each range of speed with the given HP.")]),e._m(0),e._l(e.slamTable,(function(t){return n("tr",{key:t.damage},[n("td",[e._v(e._s(t.speedRange))]),n("td",[e._v(e._s(t.damage))])])}))],2)]):e._e()])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Speed Range")]),n("th",{attrs:{scope:"col"}},[e._v("Damage")])])}],b=n("3835"),h=n("b85c"),v=n("bee2"),m=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("25f0"),a=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(l["a"])(this,n),e=t.apply(this,arguments),e.hp=10,e.slamTable=[],e}return Object(v["a"])(n,[{key:"calculate",value:function(){var e,t=new Map([["1d-3",25],["1d-2",50],["1d-1",100],["1d",150],["2d",250],["3d",350]]),n=[],r=1,o=Object(h["a"])(t.entries());try{for(o.s();!(e=o.n()).done;){var c=Object(b["a"])(e.value,2),l=c[0],i=c[1],s=[];while(this.hp*r<i)s.push(r),r++;n.push({speedRange:a.toRangeString(s),damage:l})}}catch(u){o.e(u)}finally{o.f()}return this.slamTable=n,n}}],[{key:"toRangeString",value:function(e){return e.length<=0?"":1==e.length?e[0].toString():e[0].toString()+"-"+e[e.length-1]}}]),n}(p["b"]));m=a=Object(u["a"])([p["a"]],m);var g=m,y=g,_=(n("7932"),n("2877")),O=Object(_["a"])(y,f,d,!1,null,"2e54ab50",null),j=O.exports,S=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(l["a"])(this,n),t.apply(this,arguments)}return n}(p["b"]);S=Object(u["a"])([Object(p["a"])({components:{SlamTableCalculator:j}})],S);var w=S,k=w,P=(n("034f"),Object(_["a"])(k,o,c,!1,null,null,null)),T=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.f34b35fb.js.map