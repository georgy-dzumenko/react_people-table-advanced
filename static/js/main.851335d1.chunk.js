(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{27:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg=="},28:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII="},29:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7XQMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC"},31:function(e,a,t){e.exports=t(51)},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),s=t(3),o=t(1),m=function(){return r.a.createElement("p",{className:"title is-3 is-spaced"},"Home")},u=t(14),i=t(4),p=t(26),d=function(e){var a=e.person,t=e.isParent,n=void 0!==t&&t,l=Object(o.h)();return r.a.createElement(p.a,{smooth:!0,to:{pathname:"/people/:".concat(a.slug).concat(l.pathname.includes("/new")?"/new":""),hash:n?"#".concat(a.slug):"",search:l.search}},a.name||"-")},h=function(e){var a=e.person,t=e.isSelected;return r.a.createElement("tr",{className:t?"is-selected ".concat("f"===a.sex?"has-background-danger-dark":"has-background-link-dark"):"",id:a.slug},r.a.createElement("td",null,r.a.createElement(d,{person:a})),r.a.createElement("td",null,a.sex),r.a.createElement("td",null,a.born),r.a.createElement("td",null,a.died),r.a.createElement("td",null,null!==a.mother?r.a.createElement(d,{person:a.mother,isParent:!0}):r.a.createElement("p",{className:"has-text-weight-bold"},a.motherName)),r.a.createElement("td",null,null!==a.father?r.a.createElement(d,{person:a.father,isParent:!0}):r.a.createElement("p",{className:"has-text-weight-bold"},a.fatherName)))},E=t(27),b=t.n(E),f=t(28),g=t.n(f),A=t(29),v=t.n(A),N=function(e){var a,t=e.title,n=Object(o.g)(),l=Object(o.h)(),c=new URLSearchParams(l.search),s=c.get("sortBy"),m=c.get("sortOrder")||1,u="asc"===m?r.a.createElement("img",{src:b.a,alt:""}):r.a.createElement("img",{src:g.a,alt:""});return r.a.createElement("th",{className:"is-clickable is-unselectable",onClick:(a=t,function(){s===a&&"asc"===m?c.set("sortOrder","desc"):c.set("sortOrder","asc"),a?c.set("sortBy",a):c.delete("sortBy"),n.push({search:c.toString()})})},t," ",s===t?u:r.a.createElement("img",{src:v.a,alt:"*"}))},O=function(e){var a=e.people,t=e.selectedPersonSlug;return r.a.createElement("table",{style:{"table-row-active-color":"red","border-collapse":"collapse"},className:"table is-hoverable"},r.a.createElement("thead",null,r.a.createElement(N,{title:"name"}),r.a.createElement(N,{title:"sex"}),r.a.createElement(N,{title:"born"}),r.a.createElement(N,{title:"died"}),r.a.createElement("th",null,"mother's name"),r.a.createElement("th",null,"father's name")),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(h,{person:e,isSelected:t===":".concat(e.slug)})}))))},j=t(30),x=t.n(j),S=function(){var e=Object(o.g)(),a=Object(o.h)(),t=new URLSearchParams(a.search),l=Object(n.useState)(t.get("name")),c=Object(i.a)(l,2),s=c[0],m=c[1],u=Object(n.useCallback)(x()((function(a){a?t.set("name",a):t.delete("name"),e.push({search:t.toString()})}),500));return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{value:s,onChange:function(e){m(e.target.value),u(e.target.value)},className:"input",type:"text",placeholder:"Enter name of person you want to find"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-search"}))))},C=t(13),w=t(8),P=function(e){var a=e.applyName,t=Object(n.useState)(""),l=Object(i.a)(t,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name",r.a.createElement("div",{className:"control"},r.a.createElement("input",{value:c,onChange:function(e){-1===e.target.value.search(/[0-9]/)&&(s(e.target.value),a(e.target.value))},className:"input",type:"text",placeholder:"John Smith junior",required:!0}))))},y=function(e){var a=e.people,t=e.setParent,n=e.disabled,l=void 0!==n&&n,c=e.err;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{className:c?"is-danger":"",onChange:function(e){return t(e.target.value)},disabled:l},r.a.createElement("option",{selected:!0,value:""},"select mother"),a?a.map((function(e){return r.a.createElement("option",{value:e.name},e.name)})):""),r.a.createElement("p",{className:"help is-danger"},c))};y.defaultProps={disabled:!1};var B=function(e){var a=e.applySex,t=Object(n.useState)(""),l=Object(i.a)(t,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"}," ","Sex",r.a.createElement("div",{className:"control",value:c,onChange:function(e){a(e.target.value),s(e.target.value)}},r.a.createElement("label",{className:"radio"},r.a.createElement("input",{value:"m",type:"radio",name:"answer",required:!0}),"male"),r.a.createElement("label",{className:"radio"},r.a.createElement("input",{value:"f",type:"radio",name:"answer",required:!0}),"female"))))},Q=function(e){var a=e.applyDate,t=e.placeholder,l=e.label,c=e.disabled,s=void 0!==c&&c,o=e.err,m=void 0===o?"":o,u=e.min,p=void 0===u?1400:u,d=Object(n.useState)(""),h=Object(i.a)(d,2),E=h[0],b=h[1];return r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},l),r.a.createElement("div",{className:"control"},r.a.createElement("input",{min:p,max:"2021",disabled:s,value:E,onChange:function(e){b(e.target.value),a(+e.target.value)},className:"input ".concat(m?"is-danger":""),type:"number",placeholder:t,required:!0}),r.a.createElement("p",{className:"help is-danger"},m)))},k=function(e){var a=e.addPerson,t=e.people,l=Object(n.useState)({name:"",sex:"",born:0,died:0,fatherName:"",motherName:"",mother:{},father:{}}),c=Object(i.a)(l,2),s=c[0],m=c[1],u=function(e){return function(a){m(Object(w.a)(Object(w.a)({},s),{},Object(C.a)({},e,a)))}},p=Object(o.g)(),d=Object(o.h)(),h=s.name,E=s.born,b=s.died,f=s.mother,g=s.father,A=Object(n.useState)({nameErr:"",birthErr:"",deathErr:"",motherErr:"",fatherErr:""}),v=Object(i.a)(A,2),N=v[0],O=v[1],j=t?t.sort((function(e,a){return e.name.localeCompare(a.name)})).filter((function(e){return"f"===e.sex})):[],x=t?t.sort((function(e,a){return e.name.localeCompare(a.name)})).filter((function(e){return"m"===e.sex})):[];return r.a.createElement("form",{onChange:function(){O({})},className:"box column is-4",onSubmit:function(e){e.preventDefault();var t={deathErr:b-E>150?"people can't live so long":"",motherErr:f.died<E||b<f.born?"she can't be mother of this person":"",fatherErr:g.died<E||b<g.born?"he can't be father of this person":""};O(t),Object.values(t).reduce((function(e,a){return e&&!a}),!0)&&(a(Object(w.a)(Object(w.a)({},s),{},{slug:"".concat(h.toLowerCase().split(" ").join("-"),"-").concat(E.toString())})),p.push({pathname:"/people",search:d.search}))}},r.a.createElement("button",{type:"button",className:"delete is-pulled-right",onClick:function(){p.push({pathname:"/people",search:d.search})}}),r.a.createElement("div",{className:"block"},r.a.createElement(P,{applyName:u("name")}),r.a.createElement(B,{applySex:u("sex")}),r.a.createElement(Q,{placeholder:"1964",label:"birth date",applyDate:u("born"),err:N.birthErr}),r.a.createElement(Q,{placeholder:"1994",label:"death date",applyDate:u("died"),disabled:!E,err:N.deathErr,min:E}),r.a.createElement(y,{people:j,setParent:function(e){return m(Object(w.a)(Object(w.a)({},s),{},{motherName:e,mother:j.find((function(a){return a.name===e}))||null}))},err:N.motherErr,disabled:!E}),r.a.createElement(y,{people:x,setParent:function(e){return m(Object(w.a)(Object(w.a)({},s),{},{fatherName:e,father:x.find((function(a){return a.name===e}))||null}))},err:N.fatherErr,disabled:!E})),r.a.createElement("button",{type:"submit",className:"button is-success"},"Add person"))},G=function(e){var a=e.match,t=Object(n.useState)([]),l=Object(i.a)(t,2),c=l[0],m=l[1],p=Object(n.useState)(c),d=Object(i.a)(p,2),h=d[0],E=d[1],b=Object(o.h)(),f=new URLSearchParams(b.search),g=f.get("name")||"",A=f.get("sortBy"),v="asc"===f.get("sortOrder")?1:-1;return Object(n.useEffect)((function(){return E(Object(u.a)(c).sort((function(e,a){return"name"===A||"sex"===A?v*e[A].localeCompare(a[A]):"born"===A||"died"===A?v*(+e[A]-+a[A]):0})).filter((function(e){var a=g.toLowerCase();return e.name.toLowerCase().includes(a)||"".concat(e.motherName).toLowerCase().includes(a)||"".concat(e.fatherName).toLowerCase().includes(a)})))}),[A,v,c]),Object(n.useEffect)((function(){(function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e.map((function(a){var t=a.name,n=a.sex,r=a.born,l=a.died,c=a.fatherName,s=a.motherName,o=a.slug;return{name:t,sex:n,born:r,died:l,motherName:s,fatherName:c,mother:e.find((function(e){return e.name===s}))||null,father:e.find((function(e){return e.name===c}))||null,slug:o}}))}))})().then((function(e){m(e),E(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"title is-3 is-spaced"},"People"),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/people/:personSlug?/new"},r.a.createElement(k,{addPerson:function(e){m([e].concat(Object(u.a)(c)))},people:Object(u.a)(c)})),r.a.createElement(o.b,{path:"/people"},r.a.createElement(s.b,{to:{pathname:"/people/".concat(a.params.personSlug?"".concat(a.params.personSlug,"/"):"","new"),search:b.search},className:"button is-success"},r.a.createElement("i",{className:"fas fa-user-plus"})))),r.a.createElement(S,null),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{people:h,selectedPersonSlug:a.params.personSlug})):"")},D=function(){var e=Object(o.h)().search;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar tabs"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active"},"Home")),r.a.createElement("li",null,r.a.createElement(s.c,{className:"navbar-item is-tab",activeClassName:"is-active",to:{pathname:"/people",search:e}},"People")))))},U=(t(50),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"title is-3 is-spaced"},"Page not found :("))}),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(D,null),r.a.createElement("div",{className:"App"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:m}),r.a.createElement(o.b,{path:"/people/:personSlug?",component:G}),r.a.createElement(o.a,{path:"/home",to:"/"}),r.a.createElement(U,null)))))};c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.851335d1.chunk.js.map