(function(t){function e(e){for(var a,o,c=e[0],l=e[1],s=e[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/GurpsSlamTableCalculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"13af":function(t,e,n){},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,i,r,o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"content"},[n("h1",{staticClass:"text--center"},[t._v("GURPS Slam Table Calculator")]),n("SlamTableCalculator")],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"disclaimer"},[n("h4",[t._v("Disclaimer")]),t._v(" GURPS is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All rights are reserved by Steve Jackson Games. This game aid is the original creation of Matthias Holzinger and is released for free distribution, and not for resale, under the permissions granted in the "),n("a",{attrs:{href:"http://www.sjgames.com/general/online_policy.html"}},[t._v("Steve Jackson Games Online Policy")]),t._v(". ")])}],s=n("d4ec"),u=n("262e"),d=n("2caf"),h=n("9ab4"),m=n("1b40"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("div",{attrs:{id:"hp-input"}},[n("label",[t._v(" HP "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hp,expression:"hp",modifiers:{number:!0}}],staticClass:"numberInput",attrs:{type:"number",step:"1",min:"1",max:"999"},domProps:{value:t.hp},on:{change:t.calculate,input:function(e){e.target.composing||(t.hp=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t.slamTable.length>0?n("div",{attrs:{id:"slam-table"}},[n("table",[t._m(0),t._l(t.slamTable,(function(e){return n("tr",{key:e.damage.toString()},[n("td",[t._v(t._s(e.speedRange))]),n("td",[t._v(t._s(e.damage))])])}))],2)]):t._e()])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Speed Range")]),n("th",{attrs:{scope:"col"}},[t._v("Damage")])])}],v=n("2909"),b=n("b85c"),g=n("bee2"),O=n("257e"),j=n("ade3"),y=(n("99af"),n("d3b7"),n("25f0"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(s["a"])(this,t),Object(j["a"])(this,"count",void 0),Object(j["a"])(this,"mod",void 0),this.count=e,this.mod=n}return Object(g["a"])(t,[{key:"getCountString",value:function(){return 0!==this.count?"".concat(this.count,"d"):""}},{key:"getModString",value:function(){if(0!==this.mod){var t=this.mod>0?"+":"";return t+this.mod.toString()}return""}},{key:"toString",value:function(){return this.getCountString()+this.getModString()}}]),t}()),_=y,S=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;Object(s["a"])(this,t),Object(j["a"])(this,"min",void 0),Object(j["a"])(this,"max",void 0),void 0!==e&&(this.min=e,this.max=e)}return Object(g["a"])(t,[{key:"expandTo",value:function(t){(void 0===this.max||t>this.max)&&(this.max=t),(void 0===this.min||t<this.min)&&(this.min=t)}},{key:"toString",value:function(){return void 0===this.min||void 0===this.max?"-":this.min===this.max?this.min.toString():"".concat(this.min,"-").concat(this.max)}}]),t}(),w=S,x=(i=a=function(t){Object(u["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;Object(s["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(j["a"])(Object(O["a"])(t),"hp",10),Object(j["a"])(Object(O["a"])(t),"slamTable",[]),t}return Object(g["a"])(n,[{key:"mounted",value:function(){this.calculate()}},{key:"calculate",value:function(){this.hp<1&&(this.hp=1);var t,e=[],n=1,a=Object(b["a"])(this.getDamageLimitsUntilSpeed(r.untilSpeed));try{for(a.s();!(t=a.n()).done;){var i=t.value,o=new w;while(this.hp*n<i.limit)o.expandTo(n),n++;e.push({speedRange:o,damage:i.dice})}}catch(c){a.e(c)}finally{a.f()}this.slamTable=e}},{key:"getDamageLimitsUntilSpeed",value:function(t){var e=Object(v["a"])(r.initialDamageLimits);while(e[e.length-1].limit<=this.hp*t){var n=e[e.length-1],a=new _(n.dice.count+1),i=n.limit+100;e.push({limit:i,dice:a})}return e}}]),n}(m["b"]),Object(j["a"])(a,"untilSpeed",25),Object(j["a"])(a,"initialDamageLimits",[{dice:new _(1,-3),limit:25},{dice:new _(1,-2),limit:50},{dice:new _(1,-1),limit:100},{dice:new _(1),limit:150}]),r=i);x=r=Object(h["a"])([m["a"]],x);var k=x,T=k,P=(n("d547"),n("2877")),C=Object(P["a"])(T,f,p,!1,null,"0ca419f0",null),G=C.exports,M=function(t){Object(u["a"])(n,t);var e=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(m["b"]);M=Object(h["a"])([Object(m["a"])({components:{SlamTableCalculator:G}})],M);var D=M,J=D,$=(n("034f"),Object(P["a"])(J,c,l,!1,null,null,null)),R=$.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(R)}}).$mount("#app")},d547:function(t,e,n){"use strict";n("13af")}});
//# sourceMappingURL=app.bb4946cc.js.map