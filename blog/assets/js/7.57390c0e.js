(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{354:function(e,t,n){"use strict";n.r(t);var a=n(42),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("任何一个容器都可以指定为 flex 布局，它的所有子元素自动成为容器成员。")]),e._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[e._v("// 块级元素\n.box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("flex\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[e._v("// 行内元素\n.box")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("inline-flex\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("blockquote",[n("p",[e._v("注意点："),e._v("设为 Flex 布局以后，子元素的"),n("code",[e._v("float")]),e._v("、"),n("code",[e._v("clear")]),e._v("和"),n("code",[e._v("vertical-align")]),e._v("属性将失效。")])]),e._v(" "),n("p",[e._v("下文将设置了display:flex的元素称为容器，容器的子元素称为盒子。")]),e._v(" "),n("h2",{attrs:{id:"容器属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器属性"}},[e._v("#")]),e._v(" 容器属性")]),e._v(" "),n("ul",[n("li",[e._v("flex-direction：决定主轴方向\n"),n("ul",[n("li",[e._v("row(👉) | row-reverse(👈) | column(👇) | column-reverse(👆);")])])]),e._v(" "),n("li",[e._v("flex-wrap： 一条轴线排不下是否换行\n"),n("ul",[n("li",[e._v("nowrap | wrap | wrap-reverse;")])])]),e._v(" "),n("li",[e._v("flex-flow： 简写形式，row nowrap。\n"),n("ul",[n("li",[e._v("flex-direction | flex-wrap;")])])]),e._v(" "),n("li",[e._v("justify-content： 盒子在主轴上的对齐方式。\n"),n("ul",[n("li",[e._v("flex-start | flex-end | center | space-between | space-around |  space-evenly;")])])]),e._v(" "),n("li",[e._v("align-items: 盒子在交叉轴上如何对齐。\n"),n("ul",[n("li",[e._v("flex-start | flex-end | center | baseline(第一行文字的基线对齐。) | stretch(默认值，拉升到容器一样的高度);")])])]),e._v(" "),n("li",[e._v("align-content: 定义了多根轴线的对齐方式。如果只有一根轴线，该属性不起作用；\n"),n("ul",[n("li",[e._v("flex-start | flex-end | center | space-between | space-around | stretch;")])])])]),e._v(" "),n("h2",{attrs:{id:"盒子属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盒子属性"}},[e._v("#")]),e._v(" 盒子属性")]),e._v(" "),n("ul",[n("li",[e._v("order：整数\n"),n("ul",[n("li",[e._v("定义盒子的排列顺序。数值越小，排列越靠前，默认为0。")])])]),e._v(" "),n("li",[e._v("flex-grow：number\n"),n("ul",[n("li",[e._v("按number比例分配容器剩余空间给盒子。")])])]),e._v(" "),n("li",[e._v("flex-shrink： number 1 | 0 (不缩小)\n"),n("ul",[n("li",[e._v("定义了盒子的缩小比例，默认为1，即如果空间不足，该盒子将缩小。")])])]),e._v(" "),n("li",[e._v("flex-basis：\n"),n("ul",[n("li",[e._v("定义了在分配多余空间之前，盒子占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即盒子本来所占的大小。")]),e._v(" "),n("li",[e._v("它可以设为跟width或height属性一样的值（比如350px），则盒子将占据固定空间。")])])]),e._v(" "),n("li",[e._v("flex\n"),n("ul",[n("li",[e._v("是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。")]),e._v(" "),n("li",[e._v("建议优先使用这个写法，而不是上面三个分开写")])])]),e._v(" "),n("li",[e._v("align-self\n"),n("ul",[n("li",[e._v("属性允许单个盒子有与其他盒子不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")])])])]),e._v(" "),n("h2",{attrs:{id:"常用组合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用组合"}},[e._v("#")]),e._v(" 常用组合")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 不定宽高盒子 自适应居中 给父盒子加上下面的CSS即可。\n.father{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n// footer在底部 不受内容高度影响\n<div class="box">\n  <header></header>\n  <div class="main"></div>\n  <footer></footer>\n</div>\n.box{\n  display:flex;\n  min-height:100vh;\n  flex-direction:column;\n}\nmain{\n  flex:1;\n}\n')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);