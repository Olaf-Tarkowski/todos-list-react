(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),s=n.n(i),a=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(t){var e=t.addNewTaskContent,n=Object(c.useState)(""),o=Object(u.a)(n,2),i=o[0],s=o[1];return Object(d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),s(""),""!==i.trim())return e(i)},className:"form",children:[Object(d.jsx)("input",{value:i,onChange:function(t){return s(t.target.value)},className:"form__newTasks",type:"text",placeholder:"Co jest do zrobienia?",required:!0}),Object(d.jsx)("button",{className:"form__button form__button--action",children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,o=t.toggleDone;return Object(d.jsx)("ul",{className:"list",children:e.map((function(t){return Object(d.jsxs)("li",{className:"list__item ".concat(t.done&&n?"list__item--hidden":""),children:[Object(d.jsx)("button",{onClick:function(){return o(t.id)},className:"list__button list__button--green",children:t.done?"\u2714":""}),Object(d.jsxs)("span",{className:"list__position ".concat(t.done?"list__item--done":""),children:[t.id," - ",t.content]}),Object(d.jsx)("button",{onClick:function(){return c(t.id)},className:"list__button list__button--red",children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.toggleHideDone,c=t.setTasksDone,o=t.hideDone;return Object(d.jsx)("div",{className:"buttons",children:e.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:n,className:"button button__teal",children:o?"Poka\u017c uko\u0144czone":"Ukryj Uko\u0144czone"}),Object(d.jsx)("button",{onClick:c,className:"button button__teal",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("h2",{className:"section__header",children:[e,c]}),n]})}),h=function(t){var e=t.title;return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:e})})},O=(n(19),function(t){var e=t.children;return Object(d.jsx)("main",{className:"main",children:e})}),m=[{id:1,content:"Zje\u015b\u0107 kolacj\u0119",done:!1},{id:2,content:"Kupi\u0107 spodnie",done:!0},{id:3,content:"Odrobi\u0107 lekcje",done:!1},{id:4,content:"wyj\u015b\u0107 z psem na spacer"}];var x=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(m),s=Object(u.a)(i,2),x=s[0],_=s[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(h,{title:"Lista zada\u0144"}),Object(d.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTaskContent:function(t){_((function(e){return[].concat(Object(a.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",body:Object(d.jsx)(j,{tasks:x,hideDone:n,removeTask:function(t){_((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleDone:function(t){_((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(d.jsx)(b,{tasks:x,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setTasksDone:function(){_((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),_()}],[[20,1,2]]]);
//# sourceMappingURL=main.ef8d9a50.chunk.js.map