(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(19),i=s.n(a),r=(s(28),s(15),s(0));var l=function(){return Object(r.jsx)("div",{className:"",children:Object(r.jsx)("div",{className:"header w3-top",children:Object(r.jsxs)("div",{className:"w3-bar  w3-card",children:[Object(r.jsx)("a",{href:"#home",className:"w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right",title:"Toggle Navigation Menu",children:Object(r.jsx)("i",{class:"fa fa-bars"})}),Object(r.jsx)("a",{href:"/home",className:"w3-bar-item w3-button w3-padding-large",children:"Quiz"}),Object(r.jsx)("a",{href:"https://www.interviewbit.com/javascript-interview-questions/",className:"w3-bar-item w3-button w3-padding-large w3-hide-small",children:"JavaScript"}),Object(r.jsx)("a",{href:"https://www.interviewbit.com/react-interview-questions/",className:"w3-bar-item w3-button w3-padding-large w3-hide-small",children:"ReactJs"}),Object(r.jsx)("a",{href:"https://www.interviewbit.com/node-js-interview-questions/",className:"w3-bar-item w3-button w3-padding-large w3-hide-small",children:"NodeJs"}),Object(r.jsxs)("div",{className:"w3-dropdown-hover w3-hide-small",children:[Object(r.jsxs)("button",{className:"w3-padding-large w3-button",title:"More",children:["MORE ",Object(r.jsx)("i",{className:"fa fa-caret-down"})]}),Object(r.jsxs)("div",{className:"w3-dropdown-content w3-bar-block w3-card-4",children:[Object(r.jsx)("a",{href:"https://www.interviewbit.com/html-interview-questions/",className:"w3-bar-item w3-button",children:"HTML"}),Object(r.jsx)("a",{href:"#home",className:"w3-bar-item w3-button",children:"Express"}),Object(r.jsx)("a",{href:"#home",className:"w3-bar-item w3-button",children:"JAVA"})]})]}),Object(r.jsx)("a",{href:"#home",className:"w3-padding-large w3-hover-red w3-hide-small w3-right",children:Object(r.jsx)("i",{className:"fa fa-search"})})]})})})},j=s(9),o=(s(16),s(20)),b=s(10),d=s.n(b),h=s(21);var u=function(e){var t=Object(c.useState)(null),s=Object(j.a)(t,2),n=s[0],a=s[1];Object(c.useEffect)((function(){fetch("/apnaquiz/"+e.sub).then((function(e){return e.json()})).then((function(t){console.log("json data"),console.log(e.sub),a(t)}))}),[]);var i=Object(c.useState)(0),l=Object(j.a)(i,2),b=l[0],u=l[1],m=Object(c.useState)(0),O=Object(j.a)(m,2),w=O[0],x=O[1],v=Object(c.useState)(!1),f=Object(j.a)(v,2),g=f[0],p=f[1],N=Object(c.useState)(0),S=Object(j.a)(N,2),q=S[0],C=S[1],y=Object(c.useState)(!0),J=Object(j.a)(y,2),k=J[0],T=J[1],A=function(){T(!0),x((function(e){return e+1}));for(var e=b+1,t=document.getElementsByClassName("option"),s=0;s<t.length;s++)t[s].style.backgroundColor="",t[s].style.color="",t[s].disabled=!1;e<n.length?u(e):(p(!0),u(0))};return Object(r.jsx)("div",{className:"quiz_box",children:g?Object(r.jsxs)("div",{className:"result_box",children:[Object(r.jsx)(h.a,{value:q,maxValue:n.length}),n.length===q?Object(r.jsx)("h3",{children:"Congratulations You Pass With Honors"}):n.length/2<q?Object(r.jsx)("h1",{children:"Well Done"}):(console.log(e.siteUrl),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Lern more And try Again"}),Object(r.jsxs)("a",{href:e.siteUrl,children:[" ",Object(r.jsx)("button",{children:e.name})]})]}))]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{className:"title",children:e.name}),Object(r.jsxs)("div",{class:"timecircle",children:[" ",Object(r.jsx)(o.CountdownCircleTimer,{strokeWidth:7,size:50,isPlaying:!!n&&k,duration:15,colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],onComplete:function(){return[!0,1e3]},children:function(e){var t=e.remainingTime;return 0===t&&A(),Object(r.jsx)("div",{children:t})}},w)]}),Object(r.jsx)("div",{className:"time_line"})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"que_text",children:n?n[b].question:Object(r.jsx)(d.a,{})}),Object(r.jsx)("div",{className:"option_list",children:n?n[b].options.map((function(e,t){return Object(r.jsx)("button",{className:"option",onClick:function(t){return function(e,t){T(!1),n[b].answer===t?(C(q+1),e.target.style.backgroundColor="green",e.target.style.color="white"):(e.target.style.backgroundColor="red",e.target.style.color="white",e.target.parentNode.querySelectorAll("button").forEach((function(e){e.innerHTML===n[b].answer&&(e.style.backgroundColor="green",e.style.color="white")}))),e.target.parentNode.querySelectorAll("button").forEach((function(e){return e.disabled=!0}))}(t,e)},children:e},t)})):Object(r.jsx)(d.a,{})})]}),n?Object(r.jsxs)("footer",{children:[Object(r.jsxs)("div",{className:"total_que",children:[n?n[b].numb:Object(r.jsx)(d.a,{})," out ",n?n.length:Object(r.jsx)(d.a,{})]}),Object(r.jsx)("button",{className:"next_btn",onClick:A,children:"Next Que"})]}):Object(r.jsx)(d.a,{})]})})},m=s(22),O=s(3);s(34);var w=function(){return Object(r.jsx)("div",{className:"txt",children:Object(r.jsxs)("div",{className:"tx",children:[Object(r.jsx)("h1",{children:"Welcome To Apna Quiz"}),Object(r.jsxs)("a",{href:"/start",children:[Object(r.jsx)("button",{className:"bt1",children:"Start"})," "]})]})})};var x=function(){return Object(r.jsxs)("div",{className:"info_box",children:[Object(r.jsx)("div",{className:"info-title",children:Object(r.jsx)("span",{children:"Choose Subject "})}),Object(r.jsxs)("a",{href:"/javas",className:"abtn",children:[" ",Object(r.jsx)("button",{className:"selectSub",children:"JavaScript"})]}),Object(r.jsxs)("a",{href:"/react",className:"abtn",children:[" ",Object(r.jsx)("button",{className:"selectSub",children:"ReactJs"})]}),Object(r.jsxs)("a",{href:"/node",className:"abtn",children:["  ",Object(r.jsx)("button",{className:"selectSub",children:"NodeJs"})]}),Object(r.jsxs)("a",{href:"/html",className:"abtn",children:["  ",Object(r.jsx)("button",{className:"selectSub",children:"HTML"})]}),Object(r.jsx)("div",{className:"buttons",children:Object(r.jsxs)("a",{href:"/home",children:[Object(r.jsx)("button",{class:"quit",children:"Exit Quiz"})," "]})})]})};var v=function(){return Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsxs)(O.c,{children:[Object(r.jsx)(O.a,{path:"/home",component:w}),Object(r.jsx)(O.a,{path:"/start",component:x}),Object(r.jsxs)(O.a,{path:"/javas",children:[" ",Object(r.jsx)(u,{sub:"javas",name:"JavaScript",siteUrl:"https://www.interviewbit.com/javascript-interview-questions/"})]}),Object(r.jsxs)(O.a,{path:"/react",children:[" ",Object(r.jsx)(u,{sub:"react",name:"ReactJs",siteUrl:"https://www.interviewbit.com/react-interview-questions/"})]}),Object(r.jsxs)(O.a,{path:"/node",children:[" ",Object(r.jsx)(u,{sub:"node",name:"NodeJs",siteUrl:"https://www.interviewbit.com/node-js-interview-questions/"})]}),Object(r.jsxs)(O.a,{path:"/html",children:[" ",Object(r.jsx)(u,{sub:"html",name:"HTML",siteUrl:"https://www.interviewbit.com/html-interview-questions/"})]})]})]})})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),f()}},[[41,1,2]]]);
//# sourceMappingURL=main.a45a4103.chunk.js.map