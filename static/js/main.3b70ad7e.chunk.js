(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),o=n(3),i=n.n(o),a=(n(8),n(9),n(0)),r=function(t){return Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("input",{className:"form__newTasks",type:"text",placeholder:"Co jest do zrobienia?",required:!0}),Object(a.jsx)("button",{className:"form__button form__button--action",children:"Dodaj zadanie"})]})},d=(n(11),function(t){var e=t.tasks,n=t.hideDoneTasks;return Object(a.jsx)("ul",{className:"list",children:e.map((function(t){return Object(a.jsxs)("li",{className:"list__item ".concat(t.done&&n?"list__item--hidden":""),children:[Object(a.jsx)("button",{className:"list__button list__button--green",children:t.done?"\u2714":""}),Object(a.jsx)("span",{className:"list__position ".concat(t.done?"list__item--done":""),children:t.content}),Object(a.jsx)("button",{className:"list__button list__button--red",children:"\ud83d\uddd1"})]})}))})}),l=(n(12),function(t){var e=t.tasks,n=t.hideDoneTask;return Object(a.jsx)("span",{className:"buttons",children:e.length>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"button button__teal",children:n?"Poka\u017c uko\u0144czone":"Ukryj Uko\u0144czone"}),Object(a.jsx)("button",{className:"button button__teal",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})}),j=(n(13),function(t){var e=t.title,n=t.body,s=t.extraHeaderContent;return Object(a.jsxs)("section",{className:"section",children:[Object(a.jsxs)("h2",{className:"section__header",children:[e,s]}),n]})}),u=function(t){var e=t.title;return Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:e})})},b=(n(14),function(t){var e=t.children;return Object(a.jsx)("main",{className:"main",children:e})}),h=[{id:1,content:"Jee\u015b\u0107",done:!1},{id:2,content:"Jkuic kompa",done:!0},{id:3,content:"Jee\u015b\u0107",done:!1},{id:4,content:"Jee\u015b\u0107"}];var m=function(){return Object(a.jsxs)(b,{children:[Object(a.jsx)(u,{title:"Lista zada\u0144"}),Object(a.jsx)(j,{title:"Dodaj nowe zadanie",body:Object(a.jsx)(r,{})}),Object(a.jsx)(j,{title:"Lista zada\u0144",body:Object(a.jsx)(d,{tasks:h,hideDoneTasks:false}),extraHeaderContent:Object(a.jsx)(l,{tasks:h,hideDoneTasks:false})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),s(t),c(t),o(t),i(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),x()}],[[15,1,2]]]);
//# sourceMappingURL=main.3b70ad7e.chunk.js.map