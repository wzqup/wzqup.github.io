(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1321:function(t,e,s){"use strict";var i=s("9345"),a=s.n(i);a.a},2474:function(t,e,s){t.exports=s.p+"img/cube.36964188.gif"},"397f":function(t,e,s){},"44d4":function(t,e,s){"use strict";var i=s("4f29"),a=s.n(i);a.a},"47e6":function(t,e,s){},"4f29":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("5466"),s("450d");var i=s("ecdf"),a=s.n(i),n=(s("38a0"),s("ad41")),r=s.n(n),c=(s("826b"),s("c263")),o=s.n(c),l=(s("6611"),s("e772")),u=s.n(l),d=(s("1f1a"),s("4e4b")),h=s.n(d),p=(s("10cb"),s("f3ad")),f=s.n(p),m=(s("a7cc"),s("df33")),v=s.n(m),g=(s("e960"),s("b35b")),b=s.n(g),w=(s("9d4c"),s("e450")),_=s.n(w),C=(s("28b2"),s("c7ad")),y=s.n(C),x=(s("b8e0"),s("a4c4")),j=s.n(x),k=(s("1951"),s("eedf")),O=s.n(k),P=(s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("2b0e")),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},L=[],M=s("2877"),A={},D=Object(M["a"])(A,S,L,!1,null,null,null),E=D.exports,U=(s("77ed"),s("8e1f"),s("be35"),s("c975"),s("8c4f")),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",class:[t.padding?"has-padding":"no-padding"]},[s("Aside"),s("main",{staticClass:"main"},[s("router-view")],1)],1)},B=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"aside",class:[t.trsin?"trs-in":"trs-out"],on:{mouseenter:t.showBtnFn,mouseleave:t.hidBtnFn}},[s("div",{staticClass:"logo"},[t._v("CODE MAN")]),t._m(0),s("div",{staticClass:"menu"},[s("h2",[t._v("个人信息")]),s("ul",{staticClass:"list-wrap"},[s("li",{staticClass:"list-item",class:["aboutme"===t.active?"active":""]},[s("router-link",{attrs:{to:"/aboutme"}},[t._v("关于我")])],1),s("li",{staticClass:"list-item",class:["cv"===t.active?"active":""]},[s("router-link",{attrs:{to:"/cv"}},[t._v("我的简历")])],1)]),s("h2",[t._v("项目展示")]),s("ul",{staticClass:"list-wrap"},[s("li",{staticClass:"list-item",class:["project"===t.active?"active":""]},[s("router-link",{attrs:{to:"/project"}},[t._v("项目经历")])],1),s("li",{staticClass:"list-item",class:["demolist"===t.active?"active":""]},[s("router-link",{attrs:{to:"/demolist"}},[t._v("DEMO")])],1),s("li",{staticClass:"list-item",class:["myblog"===t.active?"active":""]},[s("router-link",{attrs:{to:"/myblog"}},[t._v("我的博客")])],1)])]),s("div",{staticClass:"side"},[s("transition",{attrs:{name:"trs"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"btn",on:{click:t.hiddenAside,mouseenter:t.showBarAnm,mouseleave:t.hidBarAnm}},[s("i",{staticClass:"iconfont",class:[t.trsin?"icon-huaban":"icon-huaban1"]})])]),s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"side-bar",class:[t.barAnm?"anm":""]})])],1)])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"photoBox"},[s("div",{staticClass:"photo"},[s("img",{staticClass:"tx",attrs:{src:"http://qeh59wtc2.bkt.clouddn.com/tx.jpg",alt:""}})])])}],I=(s("b0c0"),{data:function(){return{showBtn:!0,trsin:!0,barAnm:!1,active:this.$route.name,switch:!0}},mounted:function(){var t=this;this.switch=document.body.clientWidth>750,window.onresize=function(){t.switch=document.body.clientWidth>750,t.switch||(t.showBtn=!0)}},methods:{hiddenAside:function(){this.trsin=!this.trsin,this.$parent.padding=this.trsin},showBtnFn:function(){this.trsin&&this.switch&&(this.showBtn=!0)},hidBtnFn:function(){this.trsin&&this.switch&&(this.showBtn=!1)},showBarAnm:function(){this.trsin||(this.barAnm=!0)},hidBarAnm:function(){this.trsin||(this.barAnm=!1)}},watch:{$route:function(t,e){this.active=t.name}}}),F=I,R=(s("a6af"),Object(M["a"])(F,N,T,!1,null,"cd0f35f4",null)),H=R.exports,z={components:{Aside:H},data:function(){return{padding:!0}}},q=z,W=(s("6605"),Object(M["a"])(q,$,B,!1,null,"7831b912",null)),J=W.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project-page"},[s("TopBar",{attrs:{titleStr:t.titleStr}}),s("Details")],1)},Y=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titleBar"},[s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("h3",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.smTitle))])]),s("div",{staticClass:"right"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDown,expression:"showDown"}],staticClass:"cv"},[s("p",[t._v("完整版简历")]),s("a",{attrs:{href:"http://qeh59wtc2.bkt.clouddn.com/%E9%AD%8F%E5%BF%97%E5%BC%BA_Web%E5%89%8D%E7%AB%AF_3%E5%B9%B4.pdf",target:"_blank"}},[t._v("下载")])])])])])},Q=[],X={props:{titleStr:Object},data:function(){return{title:this.titleStr.title,smTitle:this.titleStr.tip||"",showDown:!1}},mounted:function(){this.showDown="我的简历"==document.title}},G=X,Z=(s("d049"),Object(M["a"])(G,K,Q,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-box"},[s("div",{staticClass:"container"},t._l(t.projectArr,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("div",[s("a",{attrs:{href:e.url}},[s("img",{attrs:{src:e.imgUrl}})]),s("p",{style:{marginTop:"10px"}},[t._v(t._s(e.content))]),e.ex.length?s("p",[t._v(" 传送门： "),t._l(e.ex,(function(e){return s("a",{key:e.str,attrs:{href:e.url}},[t._v(t._s(e.str))])}))],2):t._e()])])})),0)])},st=[],it={data:function(){return{projectArr:[{id:"1",url:"https://www.sf-express.com",content:"顺丰官网&backbone、jquery",imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592988664395&di=776cf9e112097aeccb4a7920a35c685e&imgtype=0&src=http%3A%2F%2Fimg3.qianzhan.com%2Fnews%2F201409%2F03%2F20140903-7ad3a3994afb0a7b_550x1300.jpg",ex:[]},{id:"2",url:"https://v.sf-express.com/",content:"顺丰月结服务平台&vue技术栈",imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592988664395&di=776cf9e112097aeccb4a7920a35c685e&imgtype=0&src=http%3A%2F%2Fimg3.qianzhan.com%2Fnews%2F201409%2F03%2F20140903-7ad3a3994afb0a7b_550x1300.jpg",ex:[]},{id:"3",url:"http://www.sinanonc.cn/",content:"中科院苏州纳米所南昌研究院&官网&Jquery",imgUrl:"http://www.nczwkj.cn/public/uploads/20180522/3efc7cb0e554afa1e14611fde7edb56e.jpg",ex:[]},{id:"4",url:"http://www.yaocai.com",content:"药材网&电商平台&Jquery",imgUrl:"http://www.nczwkj.cn/public/uploads/20180512/e232026a367ee178255778df2aebf11c.png",ex:[]}]}}},at=it,nt=(s("6831"),Object(M["a"])(at,et,st,!1,null,"34997f38",null)),rt=nt.exports,ct={components:{TopBar:tt,Details:rt},data:function(){return{titleStr:{title:"项目经历",tip:"部分工作所经历的项目"}}}},ot=ct,lt=(s("a6ec"),Object(M["a"])(ot,V,Y,!1,null,"1ee9a71e",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TopBar",{attrs:{titleStr:t.titleStr}}),s("Details")],1)},ht=[],pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-box"},[s("div",{staticClass:"container"},t._l(t.strObj,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("div",{staticClass:"imgBox"},[s("img",{attrs:{src:e.imgUrl,alt:""}})]),s("div",{staticClass:"str"},[s("h4",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.content))])])])})),0)])},ft=[],mt={data:function(){return{strObj:[{id:"1",title:"梦想摆渡人",imgUrl:"http://xuanwen.wang/public/images/photo-team-1.jpg",content:"我是南昌工程学院应用电子技术专业2015级毕业生,在阿里巴巴渠道商江西聚友网络科技有限公司进行实习,期间接触到前端开发,感觉非常适合我,于是开启web前端开发之旅。"},{id:"2",imgUrl:"http://xuanwen.wang/public/images/photo-team-2.jpg",title:"前端工程师",content:"17年入职第一家以前端开发为岗位的公司，从一个初级实习生开始，历经万般险阻，其中辛酸只有自知。幸运的是，学到了很多，进步了很多，积累了大量的开发经验，成为一个真正合格的“前端攻城狮”!"},{id:"3",title:"我的爱好",imgUrl:"http://xuanwen.wang/public/images/photo-team-3.jpg",content:"闲暇时光喜欢看电影、玩游戏或者到处走走,拿着相机拍拍好看的风景、发现的美好事物。很喜欢的一句话--如果终其一生都畏手畏脚那将会很无趣，不怀疑自己，不畏惧失败才是我们该有的样子"}]}}},vt=mt,gt=(s("9f1d"),Object(M["a"])(vt,pt,ft,!1,null,"5239a074",null)),bt=gt.exports,wt={components:{TopBar:tt,Details:bt},data:function(){return{titleStr:{title:"关于我",tip:"简单介绍下我自己"}}}},_t=wt,Ct=Object(M["a"])(_t,dt,ht,!1,null,null,null),yt=Ct.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.PC?s("div",{staticClass:"demolist-page"},[s("div",{staticClass:"view"},[s("router-view")],1),s("div",{staticClass:"menu"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.page>0,expression:"page > 0"}],staticClass:"left btn",on:{click:t.trsL}},[s("i",{staticClass:"iconfont icon-arrow-lift"})]),s("ul",{staticClass:"list",style:{transform:t.translate}},t._l(t.demoName,(function(e,i){return s("li",{key:e.title,ref:"li",refInFor:!0,on:{click:function(e){return t.demoChange(i)}}},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),e.tips?s("div",{staticClass:"tips"},t._l(e.tips,(function(e){return s("P",{key:e.title},[t._v(t._s(e))])})),1):t._e()])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.demoUrl.length>4&&2*t.page<t.demoName.length-4,expression:"demoUrl.length > 4 &&  page*2 < demoName.length-4"}],staticClass:"right btn",on:{click:t.trsR}},[s("i",{staticClass:"iconfont icon-arrow-right"})])])]):s("div",[s("h2",{staticStyle:{textAlign:"center",fontSize:"18px"}},[t._v("为了更好的体验，该页面请在PC端查看！")])])},jt=[],kt=(s("cb29"),{data:function(){return{demoUrl:Array(10).fill("666"),demoName:[{title:"人生进度条",componentName:"timebar",tips:["点击头像进行设置","点击句子可更新","设置数据保存在localStorage"]},{title:"音乐播放器",componentName:"music",tips:["点击图片播放","控件只有播放按钮可用","其他功能正在开发中"]},{title:"3D正方体",componentName:"cube"}],index:0,page:0,iframe:!0,PC:!0}},created:function(){this.PC=!0},mounted:function(){var t=this;this.$refs.li&&(this.$nextTick((function(){t.itemW=t.$refs.li[0].offsetWidth})),addEventListener("resize",this.resizeFn))},beforeDestroy:function(){removeEventListener("resize",this.resizeFn)},methods:{resizeFn:function(){var t=this;this.$nextTick((function(){t.itemW=t.$refs.li[0].offsetWidth}))},trsL:function(){this.page--},trsR:function(){this.page++},demoChange:function(t){this.$router.push({name:this.demoName[t].componentName})},isPC:function(){for(var t=navigator.userAgent,e=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),s=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){s=!1;break}return s}},computed:{translate:function(){return"translateX(-".concat(2*this.page*this.itemW,"px)")}}}),Ot=kt,Pt=(s("7d72"),Object(M["a"])(Ot,xt,jt,!1,null,"1ad23790",null)),St=Pt.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cv-page"},[s("TopBar",{attrs:{titleStr:t.titleStr}}),s("Details")],1)},Mt=[],At=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-box"},[s("div",{staticClass:"container"},[s("div",{staticClass:"cv"},[s("h1",{staticClass:"title"},[t._v("个人信息")]),s("ul",[s("li",[t._v("姓名：魏志强")]),s("li",[t._v("性别：男")]),s("li",[t._v("毕业学校："),s("a",{attrs:{href:"http://www.nit.edu.cn",target:"_blank"}},[t._v("南昌工程学院")])]),s("li",[t._v("工作年限：3年")]),s("li",[t._v("期望职位：前端开发")])]),s("h1",{staticClass:"title"},[t._v("联系方式")]),s("ul",[s("li",[t._v("手机：18172894723")]),s("li",[t._v(" Email： "),s("a",{staticClass:"url",attrs:{href:"mailto:869612826@qq.com",target:"_blank"}},[t._v("869612826@qq.com")])])]),s("h1",{staticClass:"title"},[t._v("个人技能")]),s("ul",[s("li",[t._v("掌握HTML、CSS、JavaScript，可以高保真还原设计稿")]),s("li",[t._v("能够有效解决和改善不同屏幕的适配问题")]),s("li",[t._v("熟练使用jQuery,配合less完成PC端开发,熟练运用ajax进行前后端交互")]),s("li",[t._v("熟练使用vue.js,vue-cli,webpack,vue-router,axios等相关技术进行单页面应用开发")]),s("li",[t._v("熟练使用git、postman等开发工具")]),s("li",[t._v("了解node.js、熟练使用npm，熟悉模块化、组件化开发")])]),s("h1",{staticClass:"title"},[t._v("工作经历")]),s("ul",[s("li",[t._v("亿达信息技术有限公司 2019.8-2020-5 ")]),s("li",[t._v("筑网信息科技有限公司 2017.4-2019-7 ")])])])])])}],Et={data:function(){return{}}},Ut=Et,$t=(s("6a31"),Object(M["a"])(Ut,At,Dt,!1,null,"64b5332b",null)),Bt=$t.exports,Nt={components:{TopBar:tt,Details:Bt},data:function(){return{titleStr:{title:"我的简历",tip:"完整版PDF简历，请在右边下载"}}}},Tt=Nt,It=Object(M["a"])(Tt,Lt,Mt,!1,null,null,null),Ft=It.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-page"},[s("iframe",{staticClass:"blog-iframe",attrs:{src:t.blogUrl,frameborder:"0"}})])},Ht=[],zt={created:function(){var t=window.location.href;t.indexOf("wzq")>-1?this.blogUrl="./blog/":this.blogUrl="http://localhost:8081/"}},qt=zt,Wt=(s("b25e"),Object(M["a"])(qt,Rt,Ht,!1,null,null,null)),Jt=Wt.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time-bar",class:[t.selectPerson.blackOrwhite?"white":"black"]},[s("div",{staticClass:"tx-box",on:{click:function(e){t.showSetup=!0}}},[s("img",{staticClass:"tx",attrs:{src:t.selectPerson.txUrl}}),s("span",{staticClass:"str"},[t._v(t._s(t.selectPerson.name)+"("+t._s(t.timeObj.overYears)+"岁)")])]),s("div",{staticClass:"top-box"},[s("h2",{on:{click:t.getSentence}},[t._v(t._s(t.oneSentence.hitokoto))]),t.oneSentence.author?s("p",{staticClass:"author",staticStyle:{textAlign:"center",marginTop:"10px"}},[t._v(t._s(t.oneSentence.author+" · "+t.oneSentence.source))]):t._e(),s("div",{staticClass:"str-box"},[s("p",{staticClass:"str"},[t._v(" 你想活到"+t._s(t.selectPerson.maxAge)+"岁 "),s("span",{staticClass:"brack"},[t._v("人生")]),t._v(" 已经"+t._s(t.timeObj.overYears)+"年 ")]),s("div",{staticClass:"pgbar"},[s("div",{staticClass:"barMask",style:{width:Math.floor(t.timeObj.overYears/t.selectPerson.maxAge*100)+"%"}},[t._v(t._s(Math.floor(t.timeObj.overYears/t.selectPerson.maxAge*100))+"%")])]),s("p",{staticClass:"str"},[t._v("你可能已经吃过了"+t._s(t.timeObj.eat)+"顿饭,度过了"+t._s(t.timeObj.weekEnd)+"个愉快的周末,以及享受过"+t._s(t.timeObj.longDay)+"个美妙的夜晚")])])]),s("div",{staticClass:"bottom-box"},[s("p",{staticClass:"str"},[t._v("今天已经过去了大约"+t._s(t.timeObj.cHours)+"小时")]),s("div",{staticClass:"pgbar"},[s("div",{staticClass:"barMask",style:{width:Math.floor(t.timeObj.cHours/24*100)+"%"}},[t._v(t._s(Math.floor(t.timeObj.cHours/24*100))+"%")])]),s("p",{staticClass:"str"},[t._v("本周已经过去了"+t._s(t.getDay)+"天")]),s("div",{staticClass:"pgbar"},[s("div",{staticClass:"barMask",style:{width:Math.floor((t.getDay+t.timeObj.cHours/24)/7*100)+"%"}},[t._v(t._s(Math.floor((t.getDay+t.timeObj.cHours/24)/7*100))+"%")])]),s("p",{staticClass:"str"},[t._v("这个月已经过去了"+t._s(t.timeObj.cData-1)+"天")]),s("div",{staticClass:"pgbar"},[s("div",{staticClass:"barMask",style:{width:Math.floor((t.timeObj.cData+t.timeObj.cHours/24)/30*100)+"%"}},[t._v(t._s(Math.floor((t.timeObj.cData+t.timeObj.cHours/24)/31*100))+"%")])]),s("p",{staticClass:"str"},[t._v("2020年已经过去了"+t._s(t.timeObj.cMonth)+"个月")]),s("div",{staticClass:"pgbar"},[s("div",{staticClass:"barMask",style:{width:Math.floor(t.timeObj.cMonth/12*100)+"%"}},[t._v(t._s(Math.floor(t.timeObj.cMonth/12*100))+"%")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSetup,expression:"showSetup"}],staticClass:"setup"},[s("i",{staticClass:"iconfont icon-close",on:{click:function(e){t.showSetup=!1}}}),s("h4",[t._v("设置")]),s("div",{staticClass:"content"},[s("el-card",[s("div",{staticClass:"title",on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加成员")]),t._l(t.personList,(function(e,i){return s("div",{key:i,staticClass:"item"},[s("img",{staticClass:"tx",attrs:{src:e.txUrl,alt:""}}),s("div",{staticClass:"str-box"},[s("p",[t._v(t._s(e.name))]),s("p",[t._v(t._s(e.age))])]),t.personList.length>1?s("div",{staticClass:"del",class:[e.id==t.selectPersonId?"xuanzhong":"trash"],on:{click:function(s){return t.delPerson(e.id)}}},[s("i",{staticClass:"iconfont",class:[e.id==t.selectPersonId?"icon-xuanzhong":"icon-trash"]})]):t._e()])})),s("el-dialog",{attrs:{title:"添加成员",visible:t.dialogVisible,"modal-append-to-body":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{staticClass:"addPerson"},[s("div",{staticClass:"addPerson-item"},[s("span",[t._v("头像")]),s("div",{on:{click:t.rPic}},[s("img",{attrs:{src:t.testUrl}})]),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileSelect",attrs:{type:"file"},on:{change:t.getFile}})]),s("div",{staticClass:"addPerson-item"},[s("span",[t._v("昵称")]),s("div",[s("el-input",{style:{width:"80%"},attrs:{placeholder:"请输入昵称"},model:{value:t.addName,callback:function(e){t.addName=e},expression:"addName"}})],1)]),s("div",{staticClass:"addPerson-item"},[s("span",[t._v("生日")]),s("div",[s("el-date-picker",{style:{width:"80%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.addAge,callback:function(e){t.addAge=e},expression:"addAge"}})],1)])]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.addPerson}},[t._v("确 定")])],1)])],2),s("el-card",[s("div",{staticClass:"options-item"},[s("div",{staticClass:"one"},[s("span",[t._v("选个人吧?")])]),s("div",[s("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selectPersonChange},model:{value:t.selectPersonId,callback:function(e){t.selectPersonId=e},expression:"selectPersonId"}},t._l(t.personList,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),s("div",{staticClass:"options-item"},[s("div",{staticClass:"one"},[s("span",[t._v("你打算活到多少岁呢?")])]),s("div",[s("el-input-number",{attrs:{min:1,max:120},on:{change:t.editPerson},model:{value:t.selectPerson.maxAge,callback:function(e){t.$set(t.selectPerson,"maxAge",e)},expression:"selectPerson.maxAge"}})],1)]),s("div",{staticClass:"options-item"},[s("div",{staticClass:"one"},[s("span",[t._v("黑夜与光明?")])]),s("div",[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:t.editPerson},model:{value:t.selectPerson.blackOrwhite,callback:function(e){t.$set(t.selectPerson,"blackOrwhite",e)},expression:"selectPerson.blackOrwhite"}})],1)]),s("div",{staticClass:"options-item"},[s("div",{staticClass:"one"},[s("span",[t._v("第一天是周几?")])]),s("div",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selectPerson.firstDay,callback:function(e){t.$set(t.selectPerson,"firstDay",e)},expression:"selectPerson.firstDay"}},t._l(t.firstDayList,(function(t){return s("el-option",{key:t.firstday,attrs:{label:t.name,value:t.firstday}})})),1)],1)])])],1)])])},Yt=[],Kt=(s("7db0"),s("c740"),s("baa5"),s("a434"),s("a9e3"),s("d3b7"),s("ac1f"),s("3ca3"),s("1276"),s("ddb0"),s("2b3d"),s("bee2")),Qt=s("d4ec"),Xt=function t(e,s,i,a,n,r,c,o,l,u){Object(Qt["a"])(this,t),this.id=e,this.name=s,this.age=i,this.txUrl=a||"https://iph.href.lu/46x46",this.maxAge=n||80,this.blackOrwhite=r||0,this.firstDay=c||1,this.sense=o||0},Gt=function(){function t(e){Object(Qt["a"])(this,t),this.dataKey=e}return Object(Kt["a"])(t,[{key:"read",value:function(){var t=localStorage.getItem(this.dataKey);return t?JSON.parse(t):null}},{key:"save",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}}]),t}(),Zt=new Gt("personList"),te=new Gt("selectId"),ee={data:function(){return{showSetup:!1,dialogVisible:!1,addName:"",addAge:"",personList:[],selectPersonId:"",selectPerson:{},timeObj:{},firstDayList:[{firstday:0,name:"周日"},{firstday:1,name:"周一"}],testUrl:"https://iph.href.lu/60x60",oneSentence:{}}},created:function(){var t=this;if(this.getSentence(),Zt.read()&&Zt.read().length)this.personList=Zt.read(),te.read()?this.selectPersonId=te.read():this.selectPersonId=this.personList[0].id;else{var e=new Xt(1,"魏大帅哥","1993-09-09");this.personList.push(e),this.selectPersonId=1}this.selectPerson=this.personList.find((function(e){return e.id==t.selectPersonId}))},methods:{addPerson:function(){var t;t=this.personList.length?this.personList[this.personList.length-1].id+1:1;var e=new Xt(t,this.addName,this.addAge,this.testUrl);this.personList.push(e),Zt.save(this.personList),this.dialogVisible=!1,this.addName="",this.addAge=""},selectPersonChange:function(t){this.selectPerson=this.personList.find((function(e){return e.id===t})),te.save(t)},editPerson:function(){var t=this,e=this.personList.findIndex((function(e){return e.id==t.selectPersonId}));this.personList[e]=this.selectPerson,Zt.save(this.personList)},delPerson:function(t){if(t===this.selectPersonId)return!1;var e=this.personList.findIndex((function(e){return e.id==t}));this.personList.splice(e,1),Zt.save(this.personList),t==this.selectPersonId&&(this.personList.length?this.selectPersonId=this.personList[0].id:this.selectPersonId="",te.save(this.personList[0].id))},rPic:function(){this.$refs.fileSelect.click()},getFile:function(){var t=this,e=this.$refs.fileSelect.files[0];if(e&&e.type.indexOf("image")>-1){var s=null;void 0!=window.createObjectURL?s=window.createObjectURL(e):void 0!=window.URL?s=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(s=window.webkitURL.createObjectURL(e));var i=new Image;i.src=s,i.onload=function(){t.testUrl=ie(i)}}else alert("请选择图片！！！")},getSentence:function(){var t=this;fetch("https://api.imjad.cn/hitokoto/?cat=d&encode=json").then((function(t){return t.json()})).then((function(e){t.oneSentence=e}))}},computed:{getDay:function(){var t;return t=this.selectPerson.firstDay&&!this.timeObj.cDay?6:this.timeObj.cDay-this.selectPerson.firstDay,t}},watch:{selectPersonId:function(){var t=this;this.personList.length&&(this.selectPerson=this.personList.find((function(e){return e.id===t.selectPersonId}))),this.timeObj=se(this.selectPerson.age)}}};function se(t){var e=new Date,s=e.getFullYear(),i=e.getMonth(),a=e.getDate(),n=e.getDay(),r=e.getHours(),c=t.split("-"),o=Number(c[0]),l=(Number(c[1]),Number(c[2]),e.getTime()-new Date(t).getTime()),u=Math.floor(l/1e3/60/60/24),d=Math.floor(u/7),h=3*Math.floor(u),p=(e.toLocaleDateString().split("/"),s-o);return{overYears:p,cMonth:i,cData:a,cDay:n,cHours:r,longDay:u,weekEnd:d,eat:h}}function ie(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);var i=t.src.substring(t.src.lastIndexOf(".")+1).toLowerCase(),a=e.toDataURL("image/"+i);return a}var ae=ee,ne=(s("688c"),Object(M["a"])(ae,Vt,Yt,!1,null,"6dce0ca7",null)),re=ne.exports,ce=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},oe=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cube-page"},[i("div",{staticClass:"bigBox"},[i("div",{staticClass:"top circle"},[i("img",{attrs:{src:s("2474")}})]),i("div",{staticClass:"bottom circle"},[i("img",{attrs:{src:s("2474")}})]),i("div",{staticClass:"left circle"},[i("img",{attrs:{src:s("2474")}})]),i("div",{staticClass:"right circle"},[i("img",{attrs:{src:s("2474")}})]),i("div",{staticClass:"inside circle"},[i("img",{attrs:{src:s("2474")}})]),i("div",{staticClass:"outside circle"},[i("img",{attrs:{src:s("2474")}})])])])}],le=(s("1321"),{}),ue=Object(M["a"])(le,ce,oe,!1,null,"3f33508c",null),de=ue.exports,he=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-page"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"tab"},[s("span",{class:"new"===t.tabActive?"active":"",on:{click:function(e){return t.changeCate("new")}}},[t._v("最新歌曲")]),s("span",{class:"hot"===t.tabActive?"active":"",on:{click:function(e){return t.changeCate("hot")}}},[t._v("最热歌曲")])]),s("div",{staticClass:"seach"},[s("input",{attrs:{type:"text",placeholder:"搜索"},on:{focus:t.showHot,blur:t.hideHot}}),s("i")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.seachHot,expression:"seachHot"}],staticClass:"hot"})]),s("div",{staticClass:"viewBox"},[s("div",{staticClass:"music-list"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.songs}},[s("el-table-column",{attrs:{prop:"img",width:100},scopedSlots:t._u([{key:"default",fn:function(e){return[s("img",{attrs:{src:e.row.img,width:"66px",height:"66px"},on:{click:function(s){return t.selectMusic(e.row.id)}}})]}}])}),s("el-table-column",{attrs:{prop:"name"}}),s("el-table-column",{attrs:{prop:"artists[0].name",align:"center"}}),s("el-table-column",{attrs:{prop:"duration",align:"center","header-align":"right"},scopedSlots:t._u([{key:"header",fn:function(){return[s("ul",{staticClass:"music-type"},t._l(t.musicType,(function(e){return s("li",{key:e.type,class:{active:e.type===t.type},on:{click:function(s){return t.tabChange(e.type)}}},[t._v(t._s(e.title))])})),0)]},proxy:!0}])})],1)],1)]),s("div",{staticClass:"footer"},[s("div",{staticClass:"audioBar"},[s("div",{staticClass:"songs"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.currentSong.name,expression:"currentSong.name"}],staticClass:"img-wrap"},[s("img",{attrs:{src:t.currentSong.img}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.currentSong.name,expression:"currentSong.name"}],staticClass:"str"},[s("p",[t._v(t._s(t.currentSong.name))]),s("p",[t._v(t._s(this.formatTime(t.currentMusicTime))+"/"+t._s(this.formatTime(t.currentSong.duration/1e3)))])])]),s("div",{staticClass:"control"},[s("div",{staticClass:"btn-wrap"},[t._m(0),s("div",{staticClass:"play",on:{click:t.playOrpause}},[s("i",{staticClass:"iconfont",class:t.playing?"icon-iconstop":"icon-bofang"})]),t._m(1)]),s("audio",{ref:"audio",attrs:{src:t.musicUrl},on:{canplay:t.ready,ended:t.end,timeupdate:t.updateTime}})]),s("div",{staticClass:"mode"})])])])},pe=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pre"},[s("i",{staticClass:"iconfont icon-back"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"next"},[s("i",{staticClass:"iconfont icon-shangyiqu"})])}],fe=(s("99af"),s("d81d"),s("25f0"),s("96cf"),s("1da1")),me=s("bc3a"),ve=s.n(me),ge=be("https://api.mtnhao.com/");be("https://api.aaaa.com/");function be(t){var e=ve.a.create({baseURL:t});return e.interceptors.response.use(_e,we),e}function we(t){throw confirm("出错啦~"+t.message+"请检查网络连接或稍后再试!!"),t}function _e(t){return t.data}var Ce={data:function(){return{seachHot:!1,tabActive:"new",songs:[],currentIndex:0,currentSong:{},musicUrl:"",currentMusicTime:0,musicType:[{title:"全部",type:0},{title:"华语",type:7},{title:"欧美",type:96},{title:"日本",type:8},{title:"韩国",type:16}],type:0,playing:!1}},created:function(){var t=this;return Object(fe["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMusicList(t.type);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{showHot:function(){this.seachHot=!0},hideHot:function(){this.seachHot=!1},changeCate:function(t){this.tabActive=t;var e="new"===t?"最新歌曲":"最热歌曲";this.test=e},selectMusic:function(t){var e=this;return Object(fe["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.getMusicURL(t);case 2:i=s.sent,i&&(e.currentSong=e.songs.find((function(e){return e.id===t})),e.play(),e.playing=!0);case 4:case"end":return s.stop()}}),s)})))()},ready:function(){},end:function(){console.log("播放结束")},updateTime:function(t){this.currentMusicTime=t.target.currentTime},play:function(){this.audio.play()},pause:function(){this.audio.pause()},playOrpause:function(){this.currentSong.name?this.playing=!this.playing:confirm("请先选择歌曲!!")},tabChange:function(t){this.type!==t&&(this.type=t,this.getMusicList(t))},getMusicURL:function(t){var e=this;return Object(fe["a"])(regeneratorRuntime.mark((function s(){var i,a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,ge("/song/url?id=".concat(t));case 2:if(i=s.sent,a=i.data,n=a[0].url,!n){s.next=10;break}return e.musicUrl=n,s.abrupt("return",!0);case 10:return confirm("该歌曲无法播放,换一首试试吧!"),s.abrupt("return",!1);case 12:case"end":return s.stop()}}),s)})))()},getMusicList:function(t){var e=this;return Object(fe["a"])(regeneratorRuntime.mark((function s(){var i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,ge("top/song?type=".concat(t));case 2:i=s.sent,a=i.data,e.songs=a.map((function(t){var e=t.id,s=t.name,i=t.artists,a=t.duration,n=t.mvid,r=t.album,c=r.picUrl,o=r.name;return{id:e,name:s,artists:i,duration:a,albumName:o,img:c,mvId:n}}));case 5:case"end":return s.stop()}}),s)})))()},pad:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=t.toString().length;while(s<e)t="0"+t,s++;return t},formatTime:function(t){t|=0;var e=this.pad(t/60|0),s=this.pad(t%60);return"".concat(e,":").concat(s)}},computed:{audio:function(){return this.$refs.audio}},watch:{currentSong:function(t,e){console.log("更新歌曲")},playing:function(t,e){t?this.play():this.pause()}}},ye=Ce,xe=(s("44d4"),Object(M["a"])(ye,he,pe,!1,null,null,null)),je=xe.exports,ke=[{path:"/",redirect:{name:"aboutme"}},{path:"/home",component:J,children:[{path:"/aboutme",component:yt,name:"aboutme",meta:{title:"关于我"}},{path:"/cv",component:Ft,name:"cv",meta:{title:"我的简历"}},{path:"/project",component:ut,name:"project",meta:{title:"项目经历"}},{path:"/demolist",component:St,children:[{path:"/",component:re,name:"demolist",meta:{title:"DEMO"}},{path:"timebar",component:re,name:"timebar"},{path:"cube",component:de,name:"cube"},{path:"music",component:je,name:"music"}]},{path:"/myblog",component:Jt,name:"myblog",meta:{title:"我的博客"}}]}];P["default"].use(U["a"]);var Oe=U["a"].prototype.push;U["a"].prototype.push=function(t){return Oe.call(this,t).catch((function(t){return t}))};var Pe=new U["a"]({routes:ke});Pe.beforeEach((function(t,e,s){t.meta.title&&(document.title=t.meta.title);var i=document.getElementById("view");t.fullPath.indexOf("demolist")>-1?i.setAttribute("content",""):i.setAttribute("content","width=device-width, initial-scale=1, user-scalable=no"),s()}));var Se=Pe,Le=16;(function(){var t=function(){var t=18,e=12,s=document.getElementsByTagName("html")[0],i=s.clientWidth,a=Le*(i/1920);a=Math.min(t,a),a=Math.max(e,a),s.style.fontSize=a+"px",a};t(),window.addEventListener("resize",t)})(),P["default"].config.productionTip=!1,P["default"].use(O.a),P["default"].use(j.a),P["default"].use(y.a),P["default"].use(_.a),P["default"].use(b.a),P["default"].use(v.a),P["default"].use(f.a),P["default"].use(h.a),P["default"].use(u.a),P["default"].use(o.a),P["default"].use(r.a),P["default"].use(a.a),new P["default"]({render:function(t){return t(E)},router:Se}).$mount("#app")},"598f":function(t,e,s){},"5b03":function(t,e,s){},6605:function(t,e,s){"use strict";var i=s("5b03"),a=s.n(i);a.a},6831:function(t,e,s){"use strict";var i=s("397f"),a=s.n(i);a.a},"688c":function(t,e,s){"use strict";var i=s("8e5e"),a=s.n(i);a.a},"6a31":function(t,e,s){"use strict";var i=s("7877"),a=s.n(i);a.a},"768e":function(t,e,s){},7877:function(t,e,s){},"792c":function(t,e,s){},"7d72":function(t,e,s){"use strict";var i=s("598f"),a=s.n(i);a.a},"8e1f":function(t,e,s){},"8e5e":function(t,e,s){},9345:function(t,e,s){},"9f1d":function(t,e,s){"use strict";var i=s("768e"),a=s.n(i);a.a},a6af:function(t,e,s){"use strict";var i=s("ae54"),a=s.n(i);a.a},a6ec:function(t,e,s){"use strict";var i=s("e705"),a=s.n(i);a.a},ae54:function(t,e,s){},b25e:function(t,e,s){"use strict";var i=s("47e6"),a=s.n(i);a.a},be35:function(t,e,s){},d049:function(t,e,s){"use strict";var i=s("792c"),a=s.n(i);a.a},e705:function(t,e,s){}});
//# sourceMappingURL=app.83015dde.js.map