(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MenuBar"),a("ItemList"),t.$store.state.isShow?a("MemoEditor"):t._e()],1)},o=[],i=a("d4ec"),r=a("262e"),l=a("2caf"),c=a("9ab4"),u=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse navbar-right"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"add dropdown"},[a("a",{staticClass:"create-new dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("新建")]),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{on:{click:t.showAdd}},[t._v("文本便签")])])])]),a("li",{staticClass:"categories dropdown"},[a("a",{staticClass:"current-category dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])]),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"total",on:{click:function(e){return t.doFilterByCateId(-1)}}},[a("a",[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])])]),a("li",{staticClass:"divider"}),a("li",{on:{click:function(e){return t.doFilterByCateId(0)}}},[a("a",[t._v(" 工作 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(0)))])])]),a("li",{on:{click:function(e){return t.doFilterByCateId(1)}}},[a("a",[t._v(" 生活 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(1)))])])]),a("li",{on:{click:function(e){return t.doFilterByCateId(2)}}},[a("a",[t._v(" 学习 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(2)))])])])])])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"navbar-brand"}),a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false"}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])])}],v=(a("4de4"),a("bee2")),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(i["a"])(this,t),this.id=e,this.categoryId=a,this.title=n,this.content=s,this.id=e,this.categoryId=a,this.title=n,this.content=s,this.createTime=this.toSelfDateStr(Date.now())}return Object(v["a"])(t,[{key:"toSelfDateStr",value:function(t){var e=new Date(t),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+(e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes());return a}}]),t}(),p=h,f=function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"showAdd",value:function(){this.$store.state.transMemo=new p(-1,0),this.$store.state.isShow=!0}},{key:"doFilter",value:function(t){return-1==t?this.$store.state.aHelper.memoList.length:this.$store.state.aHelper.memoList.filter((function(e){return e.categoryId==t})).length}},{key:"doFilterByCateId",value:function(t){this.$store.state.filterCateId=t}}]),a}(u["c"]);f=Object(c["a"])([u["a"]],f);var g=f,b=g,y=a("2877"),C=Object(y["a"])(b,d,m,!1,null,null,null),w=C.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"memos"}},t._l(t.filterMemo(),(function(t){return a("MemoItem",{key:t.id,attrs:{memo:t}})})),1)},_=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"memo-container"},[a("div",{staticClass:"memo"},[a("div",{staticClass:"mark"}),a("div",{staticClass:"memo-heading"},[a("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"edit",on:{click:t.showEdit}}),a("li",{staticClass:"delete",on:{click:t.doDel}})])]),a("h6",{staticClass:"memo-info"},[a("span",{staticClass:"timeStamp"},[t._v(t._s(t.memo.createTime))]),a("span",{staticClass:"category"},[t._v("分类: "+t._s(t.$store.state.aHelper.getCategoryName(t.memo.categoryId)))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[t._v(t._s(t.memo.content))])])])])},k=[],I=function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"doDel",value:function(){window.confirm("确认要删除【".concat(this.memo.title,"】的笔记吗？"))&&this.$store.state.aHelper.removeDataById(this.memo.id)}},{key:"showEdit",value:function(){var t=JSON.parse(JSON.stringify(this.memo));this.$store.commit("showEditMemo",t)}}]),a}(u["c"]);Object(c["a"])([Object(u["b"])()],I.prototype,"memo",void 0),I=Object(c["a"])([u["a"]],I);var $=I,S=$,M=Object(y["a"])(S,j,k,!1,null,null,null),x=M.exports,D=function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.memoArr=t.$store.state.aHelper.memoList,t.n=t.$store.state.aHelper.number,t.num=1,t}return Object(v["a"])(a,[{key:"fn",value:function(){this.num++,console.log(this.n),console.log(this.memoArr),console.log(this.$store.state.aHelper),console.log(this.$store.state.aHelper.number)}},{key:"filterMemo",value:function(){var t=this;return-1==this.$store.state.filterCateId?this.memoArr:this.memoArr.filter((function(e){return e.categoryId==t.$store.state.filterCateId}))}},{key:"computedMsg",get:function(){return"computed "+this.n}}]),a}(u["c"]);D=Object(c["a"])([Object(u["a"])({components:{MemoItem:x}})],D);var L=D,H=L,E=Object(y["a"])(H,O,_,!1,null,null,null),F=E.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cover-layer"}),a("div",{staticClass:"editor-layer",attrs:{id:"new-markdown"}},[a("div",{staticClass:"editor-top"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.memo.title,expression:"memo.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.memo.title},on:{input:function(e){e.target.composing||t.$set(t.memo,"title",e.target.value)}}}),a("div",{staticClass:"dropdown select-category"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[a("span",{staticClass:"category"},[t._v(t._s(this.$store.state.aHelper.getCategoryName(t.memo.categoryId)))]),a("span",{staticClass:"caret"})]),a("ul",{staticClass:"dropdown-menu"},[a("li",{on:{click:function(e){t.memo.categoryId=0}}},[a("a",[t._v("工作")])]),a("li",{on:{click:function(e){t.memo.categoryId=1}}},[a("a",[t._v("生活")])]),a("li",{on:{click:function(e){t.memo.categoryId=2}}},[a("a",[t._v("学习")])])])]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"save",on:{click:t.saveNew}}),a("li",{staticClass:"cancel",on:{click:t.closeWin}})])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo.content,expression:"memo.content"}],staticClass:"text-content form-control",attrs:{placeholder:"内容"},domProps:{value:t.memo.content},on:{input:function(e){e.target.composing||t.$set(t.memo,"content",e.target.value)}}})])])},B=[],P=(a("498a"),function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.call(this),t.memo=new p(-1,0),t}return Object(v["a"])(a,[{key:"created",value:function(){this.memo=this.$store.state.transMemo}},{key:"closeWin",value:function(){this.$store.state.isShow=!1}},{key:"saveNew",value:function(){this.memo&&this.memo.categoryId>-1&&this.memo.title.trim().length>0&&this.memo.content.trim().length>0?(this.memo.id<=-1?this.$store.state.aHelper.addData(this.memo):this.$store.state.aHelper.edit(this.memo),this.$store.state.isShow=!1):window.alert("对不起，输入错误~~！")}}]),a}(u["c"]));P=Object(c["a"])([u["a"]],P);var A=P,T=A,J=Object(y["a"])(T,N,B,!1,null,null,null),K=J.exports,W=function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);W=Object(c["a"])([Object(u["a"])({components:{MenuBar:w,ItemList:F,MemoEditor:K}})],W);var Y=W,q=Y,z=Object(y["a"])(q,s,o,!1,null,null,null),G=z.exports,Q=a("2f62"),R=(a("7db0"),a("c740"),a("d81d"),a("a434"),function(){function t(){Object(i["a"])(this,t),this.dataKey="memoList",this.primaryKey="id",this.memoList=this.read(),this.number=this.memoList.length}return Object(v["a"])(t,[{key:"memoLength",value:function(){return this.memoList.length}},{key:"read",value:function(){var t=localStorage.getItem(this.dataKey),e=t?JSON.parse(t):[];if(e.length>0){var a=this.readItemData(e);return a}return e}},{key:"readItemData",value:function(t){var e=t.map((function(t){var e=new p;return e.id=t.id,e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,e.createTime=t.createTime,e}));return e}},{key:"saveData",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"addData",value:function(t){var e=this.read(),a=e.length>0?e[e.length-1][this.primaryKey]+1:1;return t.id=a,e.push(t),this.memoList.push(t),this.number=this.memoList.length,console.log("addDataNumber"+this.number),this.saveData(e),a}},{key:"edit",value:function(t){var e=this.memoList.find((function(e){return t.id==e.id}));e&&(e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,this.saveData(this.memoList))}},{key:"removeDataById",value:function(t){var e=this.memoList,a=e.findIndex((function(e){return e.id==t}));return a>-1&&(e.splice(a,1),this.saveData(e),!0)}},{key:"removeAll",value:function(){localStorage.removeItem(this.dataKey)}},{key:"getCategoryName",value:function(t){var e=["工作","生活","学习"];return e[t]}}]),t}()),U=R;n["a"].use(Q["a"]);var V=new Q["a"].Store({state:{title:"便签",isShow:!1,transMemo:null,aHelper:new U,filterCateId:-1},mutations:{showEditMemo:function(t,e){t.transMemo=e,t.isShow=!0}}}),X=V;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)},store:X}).$mount("#app")}});
//# sourceMappingURL=app.a1f8b814.js.map