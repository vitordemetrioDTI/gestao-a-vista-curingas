(this["webpackJsonpgestao-a-vista-curingas"]=this["webpackJsonpgestao-a-vista-curingas"]||[]).push([[0],{229:function(e,t,a){e.exports=a(472)},234:function(e,t,a){},257:function(e,t){},259:function(e,t){},290:function(e,t){},291:function(e,t){},356:function(e,t){},472:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(56),c=a.n(o),i=(a(234),a(23)),s=a.n(i),l=a(31),u=a(32),f=a(222),m=a(212),d=a(223),p=a(499),h=a(493),g=a(498),b=a(494),y=a(489),E=a(473),v=a(495),k=a(9),x=a(24),w=a(221),O=Object(w.a)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),C=a(219),S=a.n(C),q=a(220),j=a.n(q),z=a(487),A=a(37),D=a.n(A),N=function(e){var t=D()().diff(e,"days");return t>14?"#e95d6a":14===t?"#f6b26b":"#57bb8a"},M={fontSize:"1.6rem",fontWeight:300,color:"#ffffff"},F=function(e){var t=N(e);return r.a.createElement(y.a,{style:{width:"64%",fontSize:"3rem",fontWeight:900,backgroundColor:t,color:"#ffffff"}},e.isValid()?e.format("DD/MM"):"NOVO")},B=function(e){return r.a.createElement(z.a,{container:!0,align:"center"},r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(y.a,{style:M},"Check Arquitetural")),r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(y.a,{style:M},"Check de Execu\xe7\xe3o")),r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(y.a,{style:M},"Retro do Squad")),r.a.createElement(z.a,{item:!0,xs:4},F(e.squad.DataCheckArquitetural)),r.a.createElement(z.a,{item:!0,xs:4},F(e.squad.DataCheckExecucao)),r.a.createElement(z.a,{item:!0,xs:4},F(e.squad.DataRetroSquad)))},W=a(59),P=a.n(W),I=function(e){return e.map((function(e){return isNaN(e[1])?null:e[1]}))},K=function(e,t){return e.map((function(e){return e[0].replace(t,"")}))},R=function(e,t){return Object.entries(e.squad).filter((function(e){return e[0].includes(t)}))},G=function(e){var t=R(e,"ScoreCE"),a=K(t,"ScoreCE"),n=I(t);return r.a.createElement(P.a,{series:[{data:n}],options:{chart:{height:650,width:"100%",type:"radar",background:"rgba(41, 40, 61, 0)"},dataLabels:{enabled:!0},plotOptions:{radar:{size:165,polygons:{strokeColor:"#e9e9e9",fill:{colors:["#b0b0b020"]}}}},colors:["#004b94"],fill:{colors:["#1f82e0"],opacity:.7},markers:{size:0,colors:["#fff"]},xaxis:{categories:a,labels:{show:!0,style:{colors:["#ffffff"],fontSize:"0.7rem",fontFamily:"Poppins"}}},yaxis:{show:!1},responsive:[{breakpoint:1800,options:{plotOptions:{radar:{size:108,polygons:{strokeColor:"#e9e9e9",fill:{colors:["#b0b0b020"]}}}}}}]},type:"radar"})},H=function(e){var t=R(e,"ScoreGemba"),a=K(t,"ScoreGemba"),n=I(t);return r.a.createElement(P.a,{series:[{data:n}],options:{chart:{height:650,width:"100%",type:"radar",background:"rgba(41, 40, 61, 0)"},dataLabels:{enabled:!0},plotOptions:{radar:{size:165,polygons:{strokeColor:"#e9e9e9",fill:{colors:["#b0b0b020"]}}}},colors:["#004b94"],fill:{colors:["#1f82e0"],opacity:.7},markers:{size:0,colors:["#fff"]},xaxis:{categories:a,labels:{show:!0,style:{colors:["#ffffff"],fontSize:"0.7rem",fontFamily:"Poppins"}}},yaxis:{show:!1},responsive:[{breakpoint:1800,options:{plotOptions:{radar:{size:108,polygons:{strokeColor:"#e9e9e9",fill:{colors:["#b0b0b020"]}}}}}}]},type:"radar"})},L=a(496),V=a(490),Y=Object(k.a)((function(e){return{typography:{paddingBlockEnd:"0.5em",fontSize:"1.4rem",fontWeight:"400",color:"#ffffff"},avatar:{height:"20px",width:"20px"}}}))((function(e){var t=e.classes;return e.membros.map((function(e){return e.plano?r.a.createElement(L.a,{key:e.plano,display:"flex",flexDirection:"row",justifyContent:"center"},r.a.createElement(L.a,{p:1,flexDirection:"row"},r.a.createElement(V.a,{className:t.avatar,style:{backgroundColor:e.cor}},r.a.createElement(y.a,{className:t.numero},"\u2660"))),r.a.createElement(L.a,null,r.a.createElement(y.a,{className:t.typography},e.plano))):null}))})),_=a(491),J=a(214),Q=a.n(J),Z=Object(k.a)((function(e){return{typography:{fontSize:"1.6rem",fontWeight:600,color:"#ffffff"},marcadorPlanoDeAcao:{height:"3vw",width:"3vw"},evento:{color:"#ffffff",height:"80%",width:"80%"},avatar:{width:"8vw",height:"8vw"}}}))((function(e){var t=e.classes,a="#1c68b1";return r.a.createElement(z.a,{container:!0,spacing:2,align:"center"},e.membros.map((function(n){if(e.crafters){var o=e.crafters.find((function(e){return e.email.includes(n.login)}));a=function(e){if(!e.data)return"#1c68b1";var t=D()().diff(D()(e.data),"days");return t<21?"#57bb8a":t<30?"#f6b26b":t<45?"#e95d6a":"#505050"}(o)}var c=r.a.createElement(V.a,{className:t.avatar,style:{border:"8px solid ".concat(a),backgroundColor:a},src:"./images/fotos/".concat(n.login,".JPG")});return n.plano&&(c=r.a.createElement(_.a,{overlap:"circle",anchororigin:{vertical:"top",horizontal:"right"},badgeContent:r.a.createElement(V.a,{className:t.marcadorPlanoDeAcao,style:{backgroundColor:n.cor}},r.a.createElement(Q.a,{className:t.evento}))},c)),r.a.createElement(z.a,{item:!0,xs:4,key:n.login},c,r.a.createElement(y.a,{className:t.typography},n.nome))})))})),T=a(12),U=a(137),X=T.promisify(U),$=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarMembros",value:function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={method:"GET",url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1877599560&single=true&output=tsv",headers:{}},a.next=4,s.a.awrap(X(e));case 4:return t=a.sent,a.abrupt("return",t);case 8:a.prev=8,a.t0=a.catch(0),console.log("Erro no reposit\xf3rio de membros",a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])}}]),e}()),ee=function(e){var t=e.body.split("\r\n"),a=t[0].toLowerCase().split("\t");return t.map((function(e){for(var t={},n=e.split("\t"),r=0;r<a.length;r++)"plano de a\xe7\xe3o"===a[r]&&(a[r]="plano"),t[a[r]]=n[r];return t.plano&&(t.cor=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}()),t}))},te=function(e,t){return e.reduce((function(e,a){var n=t.filter((function(e){return e.squad.includes(a.Squad)}));return n.length&&(e[a.Squad]=n),e}),{})},ae=Object(k.a)({planoDeAcao:{fontSize:"2rem",fontWeight:900,color:"#ffffff",marginBlockEnd:"2%"},titulo:{fontSize:"2rem",fontWeight:900,color:"#ffffff"},degrade:{width:"auto",height:"auto",backgroundColor:"#29283ddd",overflow:"hidden"},tituloPrincipal:{padding:16,fontSize:"2.2rem",fontWeight:600,color:"#ffffff",marginLeft:"2%"},page:{width:"auto",height:"auto",backgroundSize:"cover",overflow:"hidden"}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.page,style:{backgroundImage:"url(".concat(e.squad.Cover,")")}},r.a.createElement("div",{className:t.degrade},r.a.createElement(y.a,{className:t.tituloPrincipal},e.squad.Squad),r.a.createElement(z.a,{container:!0,spacing:4,alignItems:"flex-start"},r.a.createElement(z.a,{item:!0,container:!0,xs:8,spacing:4,alignItems:"flex-start"},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(B,{squad:e.squad})),r.a.createElement(z.a,{item:!0,xs:6,align:"center"},r.a.createElement(y.a,{className:t.titulo},"Gemba Check"),r.a.createElement(H,{squad:e.squad})),r.a.createElement(z.a,{item:!0,xs:6,align:"center"},r.a.createElement(y.a,{className:t.titulo},"Check de Execu\xe7\xe3o"),r.a.createElement(G,{squad:e.squad})),r.a.createElement(z.a,{item:!0,xs:12,align:"center"},r.a.createElement(y.a,{className:t.planoDeAcao},"Plano de A\xe7\xe3o"),r.a.createElement(Y,{membros:e.membros}),r.a.createElement(y.a,{style:{marginBlockEnd:"300px"}}," "))),r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(Z,{crafters:e.crafters,membros:e.membros})))))})),ne=a(12),re=a(137),oe=ne.promisify(re),ce=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarSquads",value:function(){var e,t,a,n,r,o,c,i,l;return s.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e={method:"GET",url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=766563780&single=true&output=tsv",headers:{}},u.prev=1,u.next=4,s.a.awrap(oe(e));case 4:for(t=u.sent,a=t.body.split("\r\n"),n=[],r=a[0].split("\t"),o=1;o<a.length;o++){for(c={},i=a[o].split("\t"),l=0;l<r.length;l++)r[l].includes("Data")?c[r[l]]=D()(i[l],"DD/MM/YYYY"):r[l].includes("Score")?c[r[l]]=Number(i[l].replace(",",".")):c[r[l]]=i[l];n.push(c)}return u.abrupt("return",n);case 12:u.prev=12,u.t0=u.catch(1),console.log("Erro no SquadRepo ",u.t0);case 15:case"end":return u.stop()}}),null,null,[[1,12]])}}]),e}()),ie=a(98),se=a.n(ie),le=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarCuringas",value:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se.a.get("https://one-on-ones-dti.herokuapp.com/api/data_tribe?tribe=Curingas").then((function(e){return x.filter(e.data.crafters,(function(e){return"leonardo.goncalves@dtidigital.com.br"!==e.email}))})).catch((function(e){console.log("Erro na OneOnOne: ".concat(e))})));case 1:case"end":return e.stop()}}))}}]),e}()),ue=a(492),fe=a(130),me=a.n(fe),de=a(215),pe=a.n(de),he=a(216),ge=a.n(he),be=function(e){var t=function(e){return Object(x.chain)(e.okr).pickBy((function(e,t){return t.includes("/")})).map((function(e,t){return[D()(t,"DD/MM/YYYY"),e]})).orderBy((function(e,t){return t})).value()}(e),a=function(e){return Object(x.map)(e,(function(e){return e[0].format("D/M")}))}(t),n=function(e,t){return Object(x.map)(e,(function(){return t.okr.Target}))}(t,e),o=function(e){return Object(x.map)(e,(function(e){return e[1]}))}(t);return r.a.createElement(z.a,{container:!0},r.a.createElement(z.a,{item:!0,xs:10},r.a.createElement(y.a,{style:{fontSize:"1rem",fontWeight:300,color:"#ffffff"}},e.okr.KeyResult)),r.a.createElement(z.a,{item:!0,xs:2},function(e){switch(e){case"Baixa":return r.a.createElement(pe.a,{fontSize:"large",style:{color:"#e95d6a"}});case"M\xe9dia":return r.a.createElement(me.a,{fontSize:"large",style:{color:"#f6b26b"}});case"Alta":return r.a.createElement(ge.a,{fontSize:"large",style:{color:"#57bb8a"}});default:return r.a.createElement(me.a,{fontSize:"large",style:{color:"#f6b26b"}})}}(e.okr.Confianca)),r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(P.a,{options:{chart:{height:20,type:"line",background:"rgba(41, 40, 61, 0)",toolbar:{show:!1}},colors:["#1c68b1","#57bb8a"],fill:{type:"solid",opacity:[.5,1]},legend:{show:!1},theme:{mode:"dark"},xaxis:{categories:a}},series:[{name:"Okr",type:"area",data:o},{name:"Meta",type:"line",data:n}],type:"area",height:200})))},ye=function(e){var t=function(e){return Object(x.groupBy)(e.okrs,"Objetivo")}(e);return r.a.createElement(ue.a,{maxWidth:"xl",style:{height:"100%"}},r.a.createElement(z.a,{container:!0,style:{padding:16}},Object(x.map)(t,(function(e,t){return r.a.createElement(z.a,{container:!0,item:!0,xs:12,key:t,spacing:2},r.a.createElement(z.a,{item:!0,xs:12},r.a.createElement(y.a,{style:{fontSize:"1.6rem",fontWeight:700,color:"#ffffff"}},t)),Object(x.map)(e,(function(e){return r.a.createElement(z.a,{item:!0,xs:6,key:e.KeyResult},r.a.createElement(be,{okr:e}))})))}))))},Ee=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarOkrs",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={HEADERS:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"}},t.abrupt("return",se.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1278116042&single=true&output=tsv",e).then((function(e){for(var t=e.data.split("\r\n"),a=[],n=t[0].split("\t"),r=1;r<t.length;r++){for(var o={},c=t[r].split("\t"),i=0;i<n.length;i++)n[i].includes("Target")||n[i].includes("/")?""===c[i]?o[n[i]]=null:o[n[i]]=Number(c[i].replace(",",".")):o[n[i]]=c[i];a.push(o)}return a})).catch((function(e){console.log(e)})));case 2:case"end":return t.stop()}}))}}]),e}()),ve=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,play:!0},a.handleChange=function(e,t){a.setState({index:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e,t,a,n,r,o,c,i=this;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,s.a.awrap(le.listarCuringas());case 2:return e=l.sent,t=(u=e)?u.map((function(e){return e.association?{tribo:e.tribe,nome:e.name,email:e.email,lider:e.association.leader,atrasado:e.association.isLate,data:new Date(e.association.lastMeeting)}:{tribo:e.tribe,nome:e.name,email:e.email,lider:null,atrasado:null,data:null}})):(console.log("Repositorio de OneOnOne's est\xe1 fora do ar"),null),l.next=6,s.a.awrap(ce.listarSquads());case 6:return a=l.sent,l.next=9,s.a.awrap($.listarMembros());case 9:return n=l.sent,r=ee(n),o=te(a,r),l.next=14,s.a.awrap(Ee.listarOkrs());case 14:c=l.sent,this.setState({squads:a,membros:o,okrs:c,crafters:t}),this.timer=setInterval((function(){if(i.state.play){var e=(i.state.index+1)%(i.state.squads.length+1);i.setState({index:e})}}),3e4);case 17:case"end":return l.stop()}var u}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.squads,n=e.crafters,o=e.okrs,c=e.membros,i=this.props.classes;return r.a.createElement(p.a,{theme:O},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,{value:t,onChange:this.handleChange,style:{flexGrow:1}},Object(x.map)(a,(function(e,t){return r.a.createElement(b.a,{wrapped:!0,key:e.Squad,label:e.Squad,value:t})})),o&&a&&r.a.createElement(b.a,{wrapped:!0,key:"okr",label:"Okrs",value:a.length})),r.a.createElement(y.a,{variant:"overline",style:{position:"absolute",right:"16px",top:"24px"}})),this.state.membros&&Object(x.map)(a,(function(e,a){return r.a.createElement(E.a,{className:i.pageView,hidden:t!==a,key:e.Squad},r.a.createElement(ae,{squad:e,crafters:n,membros:c[e.Squad]}))})),a&&o&&r.a.createElement(E.a,{style:{width:"auto",height:"auto",backgroundColor:"#29283ddd",overflow:"hidden",paddingBottom:"7%"},hidden:t<a.length,key:"okr"},r.a.createElement(ye,{okrs:o})),r.a.createElement(v.a,{style:{position:"fixed",bottom:"10px",right:"10px"},onClick:this.handleClick,className:i.fab,color:"secondary"},this.state.play?r.a.createElement(S.a,{style:{color:"#ffffff"}}):r.a.createElement(j.a,{style:{color:"#ffffff"}})))}}]),t}(r.a.Component),ke=Object(k.a)((function(e){return{fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},pageView:{height:"calc(100vh - 48px)",backgroundColor:"#29283d",borderRadius:0}}}))(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.48e30003.chunk.js.map