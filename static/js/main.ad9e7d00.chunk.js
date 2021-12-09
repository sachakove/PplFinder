(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{112:function(e,n,t){"use strict";t.r(n);var a,i,r,l,o,c,s,d,u,m,f,p,v,h,b,x,E,j=t(0),g=t.n(j),O=t(25),y=t.n(O),k=t(33),w=t(7),z=t(114),C=t(8),S=t(9),F=S.a.div(a||(a=Object(C.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),L=function(e){var n=e.size,t=void 0===n?"14px":n,a=e.children,i=e.bold;return g.a.createElement(z.a,{component:"div"},g.a.createElement(F,{size:t,bold:i},a))},I=t(20),N=t(141),U=function(e){var n=e.size,t=e.color,a=e.thickness,i=e.variant;return g.a.createElement(N.a,{size:n,color:t,thickness:a,variant:i})},J=t(148),M=t(142),A=S.a.div(i||(i=Object(C.a)([""]))),B=function(e){var n=e.isChecked,t=e.onChange,a=e.label,i=e.value;return g.a.createElement(A,null,g.a.createElement(M.a,{control:g.a.createElement(J.a,{checked:n,onChange:function(){t&&t(i)},color:"primary"}),label:a}))},D=t(143),R=t(71),G=t.n(R),H=S.a.div(r||(r=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),K=S.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),T=S.a.div(o||(o=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),V=S.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),q=S.a.img(s||(s=Object(C.a)(["\n  border-radius: 45%;\n"]))),P=S.a.div(d||(d=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Y=S.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),Q=S.a.div(m||(m=Object(C.a)(["\n  width: 500px;\n  display: flex;\n  flex-flow: row-reverse wrap;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n  max-height: ",";\n  transition: all 0.5s;\n  overflow: hidden;\n"])),(function(e){return e.isExpand?"200px":"40px"})),W=S.a.span(f||(f=Object(C.a)(["\n  align-self: flex-end;\n  margin-bottom: 10px;\n  cursor: pointer;\n  font-size: 10px;\n  color: #84ffff;\n"]))),X=[{code:"DE",name:"Germany"},{code:"CA",name:"Canada"},{code:"AU",name:"Australia"},{code:"BR",name:"Brazil"},{code:"CH",name:"Switzerland"},{code:"DK",name:"Denmark"},{code:"ES",name:"Spain"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GB",name:"UK"},{code:"IE",name:"Ireland"},{code:"IR",name:"Iran"},{code:"NL",name:"Netherlands"},{code:"US",name:"United States"}],Z=function(e){var n=e.users,t=e.isLoading,a=e.handleChecked,i=e.handleFavorites,r=e.favorites,l=Object(j.useState)(),o=Object(I.a)(l,2),c=o[0],s=o[1],d=Object(j.useState)(!1),u=Object(I.a)(d,2),m=u[0],f=u[1],p=Object(w.f)(),v=function(){s()};return g.a.createElement(H,null,"/"===p.location.pathname&&g.a.createElement(Q,{isExpand:m},g.a.createElement(W,{color:"primary",onClick:function(){return f(!m)}},m?"less":"more..."),X.map((function(e,n){return g.a.createElement(B,{key:n,value:e.code,label:e.name,onChange:a})}))),g.a.createElement(K,null,n.map((function(e,n){return g.a.createElement(T,{key:n,onMouseEnter:function(){return function(e){s(e)}(n)},onMouseLeave:v},g.a.createElement(q,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),g.a.createElement(V,null,g.a.createElement(L,{size:"22px",bold:!0},null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last),g.a.createElement(L,{size:"14px"},null===e||void 0===e?void 0:e.email),g.a.createElement(L,{size:"14px"},null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name),g.a.createElement(L,{size:"14px"},null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country)),g.a.createElement(Y,{isVisible:(null===r||void 0===r?void 0:r.includes(e))||n===c},g.a.createElement(D.a,{onClick:function(){return i(e)}},g.a.createElement(G.a,{color:"error"}))))})),t&&g.a.createElement(P,null,g.a.createElement(U,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"}))))},$=t(48),_=t.n($),ee=t(72),ne=t(49),te=t(73),ae=t.n(te),ie=function(){var e=Object(j.useState)([]),n=Object(I.a)(e,2),t=n[0],a=n[1],i=Object(j.useState)(!1),r=Object(I.a)(i,2),l=r[0],o=r[1],c=Object(j.useState)([]),s=Object(I.a)(c,2),d=s[0],u=s[1],m=Object(j.useState)((function(){var e=localStorage.getItem("powerLinkFavorites");return e?JSON.parse(e):[]})),f=Object(I.a)(m,2),p=f[0],v=f[1];function h(e){return b.apply(this,arguments)}function b(){return(b=Object(ee.a)(_.a.mark((function e(n){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,ae.a.get("https://randomuser.me/api/?nat=".concat(null===n||void 0===n?void 0:n.join(),"&results=25&page=1"));case 3:t=e.sent,o(!1),a(t.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.useEffect)((function(){h(d)}),[d]),{users:t,favorites:p,isLoading:l,fetchUsers:h,handleChecked:function(e){var n=d;n.includes(e)?n.splice(n.indexOf(e),1):n.push(e),u(Object(ne.a)(n))},handleFavorites:function(e){var n=p;n.includes(e)?n.splice(n.indexOf(e),1):n.push(e),v(Object(ne.a)(n)),localStorage.setItem("powerLinkFavorites",JSON.stringify(n))}}},re=S.a.div(p||(p=Object(C.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),le=S.a.div(v||(v=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),oe=S.a.div(h||(h=Object(C.a)(["\n  display: flex;\n"]))),ce=(S.a.div(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=ie(),n=e.users,t=e.favorites,a=e.isLoading,i=e.handleChecked,r=e.handleFavorites;return g.a.createElement(re,null,g.a.createElement(le,null,g.a.createElement(oe,null,g.a.createElement(L,{size:"64px",bold:!0},"PplFinder")),g.a.createElement(Z,{users:n,isLoading:a,handleChecked:i,handleFavorites:r,favorites:t})))}),se=S.a.div(x||(x=Object(C.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]))),de=S.a.div(E||(E=Object(C.a)(["\n  width: 90%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]))),ue=function(){var e=ie(),n=e.favorites,t=e.handleFavorites;return g.a.createElement(se,null,g.a.createElement(de,null,0===n.length?g.a.createElement(L,{size:"26px"},"There are no favorites yet"):g.a.createElement(g.a.Fragment,null,g.a.createElement(L,{size:"40px",bold:!0},"Your Favorites"),g.a.createElement(Z,{users:n,handleFavorites:t,favorites:n}))))},me=t(74),fe=t(144),pe=t(145),ve=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},a=g.a.useMemo((function(){return Object(me.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[t]);return g.a.createElement(fe.a,{theme:a},g.a.createElement(pe.a,null),n)},he=t(149),be=t(147),xe=t(146),Ee=function(){var e=["/","/favorites"],n=Object(w.f)(),t=Object(j.useState)((function(){return n?n.location.pathname:"/"})),a=Object(I.a)(t,2),i=a[0],r=a[1];return g.a.createElement(he.a,{position:"static",color:"transparent",style:{position:"fixed",top:0}},g.a.createElement(be.a,{value:i,onChange:function(e,n){r(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary"},g.a.createElement(xe.a,{label:"Home",value:e[0],component:k.b,to:"/"}),g.a.createElement(xe.a,{label:"Favorites",value:e[1],component:k.b,to:"/favorites"})))},je=function(){return g.a.createElement(ve,null,g.a.createElement(k.a,null,g.a.createElement(Ee,null),g.a.createElement(w.c,null,g.a.createElement(w.a,{exact:!0,path:"/",component:ce}),g.a.createElement(w.a,{exact:!0,path:"/favorites",component:ue}))))};y.a.render(g.a.createElement(je,null),document.querySelector("#root"))},79:function(e,n,t){e.exports=t(112)}},[[79,1,2]]]);
//# sourceMappingURL=main.ad9e7d00.chunk.js.map