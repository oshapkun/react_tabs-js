(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(4),s=c(1),d=(c(9),c(10),c(11),c(0)),b=function(t){var e=t.selectedTabId,c=t.tabs,n=t.onTabSelected,a=c.find((function(t){return t.id===e})).content;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{className:t.id===e?"is-active":"","data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){t.id!==e&&n(t)},children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(o[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=o.find((function(t){return t.id===c})).title;return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is"," ".concat(a)]}),Object(d.jsx)(b,{selectedTabId:c,tabs:o,onTabSelected:function(t){c!==t.id&&n(t.id)}})]})};a.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e88334d5.chunk.js.map