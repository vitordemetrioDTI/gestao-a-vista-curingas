(this["webpackJsonpgestao-a-vista-curingas"]=this["webpackJsonpgestao-a-vista-curingas"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),s=(a(81),a(9)),i=a.n(s),l=a(13),u=a(14),f=a(69),m=a(59),d=a(70),p=a(144),h=a(138),g=a(143),b=a(139),y=a(134),E=a(118),v=a(140),k=a(5),x=a(10),w=a(68),O=Object(w.a)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),C=a(66),S=a.n(C),q=a(67),j=a.n(q),A=a(132),D=a(12),M=a.n(D),z=function(e){var t=M()().diff(e,"days");return t>14?"#e95d6a":14===t?"#f6b26b":"#57bb8a"},F={fontSize:"1.6rem",fontWeight:300,color:"#ffffff"},B=function(e){var t=z(e);return r.a.createElement(y.a,{style:{width:"64%",fontSize:"3rem",fontWeight:900,backgroundColor:t,color:"#ffffff"}},e.isValid()?e.format("DD/MM"):"NOVO")},W=function(e){return r.a.createElement(A.a,{container:!0,align:"center"},r.a.createElement(A.a,{item:!0,xs:4},r.a.createElement(y.a,{style:F},"Check Arquitetural")),r.a.createElement(A.a,{item:!0,xs:4},r.a.createElement(y.a,{style:F},"Check de Execu\xe7\xe3o")),r.a.createElement(A.a,{item:!0,xs:4},r.a.createElement(y.a,{style:F},"Retro do Squad")),r.a.createElement(A.a,{item:!0,xs:4},B(e.squad.DataCheckArquitetural)),r.a.createElement(A.a,{item:!0,xs:4},B(e.squad.DataCheckExecucao)),r.a.createElement(A.a,{item:!0,xs:4},B(e.squad.DataRetroSquad)))},N=a(28),P=a.n(N),H=function(e){var t=function(e){return Object.entries(e.squad).filter((function(e){return e[0].includes("ScoreGemba")}))}(e),a=function(e){return e.map((function(e){return e[0].replace("ScoreGemba","")}))}(t),n=function(e){return e.map((function(e){return e[1]}))}(t);return r.a.createElement(P.a,{options:{chart:{type:"radar",background:"rgba(41, 40, 61, 0)"},plotOptions:{radar:{polygons:{strokeColor:"#ffffff",fill:{colors:["#ffffff20"]}}}},colors:["#1c68b1"],fill:{colors:["#1c68b1"],opacity:.9},markers:{size:0},stroke:{show:!1},theme:{mode:"dark",palette:"palette8"},yaxis:{show:!1},xaxis:{categories:a,labels:{show:!0,style:{colors:["#ffffff"],fontSize:"0.7rem",fontFamily:"Poppins"}}}},series:[{name:"",data:n}],type:"radar",height:500})},Y=function(e){var t=function(e){return Object.entries(e.squad).filter((function(e){return e[0].includes("ScoreCE")}))}(e),a=function(e){return e.map((function(e){return e[0].replace("ScoreCE","")}))}(t),n=function(e){return e.map((function(e){return e[1]}))}(t);return r.a.createElement(P.a,{options:{chart:{type:"radar",background:"rgba(41, 40, 61, 0)"},plotOptions:{radar:{polygons:{strokeColor:"#ffffff",fill:{colors:["#ffffff20"]}}}},colors:["#1c68b1"],fill:{colors:["#1c68b1"],opacity:.9},markers:{size:0},stroke:{show:!1},theme:{mode:"dark",palette:"palette8"},yaxis:{show:!1},xaxis:{categories:a,labels:{show:!0,style:{colors:["#ffffff"],fontSize:"0.7rem",fontFamily:"Poppins"}}}},series:[{name:"",data:n}],type:"radar",height:500})},I=a(141),K=a(135),R=Object(k.a)((function(e){return{typography:{paddingBlockEnd:"0.5em",fontSize:"1.4rem",fontWeight:"400",color:"#ffffff"},avatar:{height:"20px",width:"20px"}}}))((function(e){var t=e.classes;return e.membros.map((function(e){return e.plano?r.a.createElement(I.a,{key:e.plano,display:"flex",flexDirection:"row",justifyContent:"center"},r.a.createElement(I.a,{p:1,flexDirection:"row"},r.a.createElement(K.a,{className:t.avatar,style:{backgroundColor:e.cor}},r.a.createElement(y.a,{className:t.numero},"\u2660"))),r.a.createElement(I.a,null,r.a.createElement(y.a,{className:t.typography},e.plano))):null}))})),G=a(136),V=a(61),_=a.n(V),J=Object(k.a)((function(e){return{typography:{fontSize:"1.6rem",fontWeight:600,color:"#ffffff"},marcadorPlanoDeAcao:{height:"3vw",width:"3vw"},evento:{color:"#ffffff",height:"80%",width:"80%"},avatar:{width:"8vw",height:"8vw"}}}))((function(e){var t=e.classes,a="#1c68b1";return r.a.createElement(A.a,{container:!0,spacing:2,align:"center"},e.membros.map((function(n){if(e.crafters){var o=e.crafters.find((function(e){return e.email.includes(n.login)}));a=function(e,t){if(!e)return t.classes.Escalado;var a=M()().diff(M()(e.lastMeeting),"days");return a<21?"#57bb8a":a<30?"#f6b26b":a<45?"#e95d6a":"#505050"}(o.meeting,e)}var c=r.a.createElement(K.a,{className:t.avatar,style:{border:"8px solid ".concat(a),backgroundColor:a},src:"./images/fotos/".concat(n.login,".JPG")});return n.plano&&(c=r.a.createElement(G.a,{overlap:"circle",anchororigin:{vertical:"top",horizontal:"right"},badgeContent:r.a.createElement(K.a,{className:t.marcadorPlanoDeAcao,style:{backgroundColor:n.cor}},r.a.createElement(_.a,{className:t.evento}))},c)),r.a.createElement(A.a,{item:!0,xs:4,key:n.login},c,r.a.createElement(y.a,{className:t.typography},n.nome))})))})),L=a(19),Q=a.n(L),Z=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarMembros",value:function(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={HEADERS:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"}},a.next=4,i.a.awrap(Q.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1877599560&single=true&output=tsv",e));case 4:return t=a.sent,a.abrupt("return",t);case 8:a.prev=8,a.t0=a.catch(0),console.log("Erro no reposit\xf3rio de membros: ".concat(a.t0));case 11:case"end":return a.stop()}}),null,null,[[0,8]])}}]),e}()),U=function(e){var t=e.data.split("\r\n"),a=t[0].toLowerCase().split("\t");return t.map((function(e){for(var t={},n=e.split("\t"),r=0;r<a.length;r++)"plano de a\xe7\xe3o"===a[r]&&(a[r]="plano"),t[a[r]]=n[r];return t.plano&&(t.cor=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}()),t}))},X=function(e,t){return e.reduce((function(e,a){var n=t.filter((function(e){return e.squad.includes(a.Squad)}));return n.length&&(e[a.Squad]=n),e}),{})},T={fontSize:"2rem",fontWeight:900,color:"#ffffff",marginBlockEnd:"2%"},$=function(e){return r.a.createElement("div",{style:{width:"auto",height:"auto",backgroundImage:"url(".concat(e.squad.Cover,")"),backgroundSize:"cover",overflow:"hidden"}},r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#29283ddd",overflow:"hidden"}},r.a.createElement(y.a,{style:{padding:16,fontSize:"2.2rem",fontWeight:600,color:"#ffffff",marginLeft:"2%"}},e.squad.Squad),r.a.createElement(A.a,{container:!0,spacing:4,alignItems:"flex-start"},r.a.createElement(A.a,{item:!0,container:!0,xs:8,spacing:4,alignItems:"flex-start"},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(W,{squad:e.squad})),r.a.createElement(A.a,{item:!0,xs:6,align:"center"},r.a.createElement(y.a,{style:T},"Gemba Check"),r.a.createElement(H,{squad:e.squad})),r.a.createElement(A.a,{item:!0,xs:6,align:"center"},r.a.createElement(y.a,{style:T},"Check de Execu\xe7\xe3o"),r.a.createElement(Y,{squad:e.squad})),r.a.createElement(A.a,{item:!0,xs:12,align:"center"},r.a.createElement(y.a,{style:T},"Plano de A\xe7\xe3o"),r.a.createElement(R,{membros:e.membros}),r.a.createElement(y.a,{style:{marginBlockEnd:"100px"}}," "))),r.a.createElement(A.a,{item:!0,xs:4},r.a.createElement(J,{crafters:e.crafters,membros:e.membros})))))},ee=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarSquads",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={HEADERS:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"}},t.abrupt("return",Q.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=766563780&single=true&output=tsv",e).then((function(e){for(var t=e.data.split("\r\n"),a=[],n=t[0].split("\t"),r=1;r<t.length;r++){for(var o={},c=t[r].split("\t"),s=0;s<n.length;s++)n[s].includes("Data")?o[n[s]]=M()(c[s],"DD/MM/YYYY"):n[s].includes("Score")?o[n[s]]=Number(c[s].replace(",",".")):o[n[s]]=c[s];a.push(o)}return a})).catch((function(e){console.log("Erro no reposit\xf3rio de ritos:",e)})));case 2:case"end":return t.stop()}}))}}]),e}()),te=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarCuringas",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q.a.get("https://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas").then((function(e){return x.filter(e.data.crafters,(function(e){return"leonardo.goncalves@dtidigital.com.br"!==e.email}))})).catch((function(e){console.log("Erro na OneOnOne: ".concat(e))})));case 1:case"end":return e.stop()}}))}},{key:"parseCuringa",value:function(e){return{Crafter:e[0],Data:M()(e[1],"DD/MM/YYYY"),Lider:e[2]}}}]),e}()),ae=a(137),ne=a(43),re=a.n(ne),oe=a(62),ce=a.n(oe),se=a(63),ie=a.n(se),le=function(e){var t=function(e){return Object(x.chain)(e.okr).pickBy((function(e,t){return t.includes("/")})).map((function(e,t){return[M()(t,"DD/MM/YYYY"),e]})).orderBy((function(e,t){return t})).value()}(e),a=function(e){return Object(x.map)(e,(function(e){return e[0].format("D/M")}))}(t),n=function(e,t){return Object(x.map)(e,(function(){return t.okr.Target}))}(t,e),o=function(e){return Object(x.map)(e,(function(e){return e[1]}))}(t);return r.a.createElement(A.a,{container:!0},r.a.createElement(A.a,{item:!0,xs:10},r.a.createElement(y.a,{style:{fontSize:"1rem",fontWeight:300,color:"#ffffff"}},e.okr.KeyResult)),r.a.createElement(A.a,{item:!0,xs:2},function(e){switch(e){case"Baixa":return r.a.createElement(ce.a,{fontSize:"large",style:{color:"#e95d6a"}});case"M\xe9dia":return r.a.createElement(re.a,{fontSize:"large",style:{color:"#f6b26b"}});case"Alta":return r.a.createElement(ie.a,{fontSize:"large",style:{color:"#57bb8a"}});default:return r.a.createElement(re.a,{fontSize:"large",style:{color:"#f6b26b"}})}}(e.okr.Confianca)),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(P.a,{options:{chart:{height:20,type:"line",background:"rgba(41, 40, 61, 0)",toolbar:{show:!1}},colors:["#1c68b1","#57bb8a"],fill:{type:"solid",opacity:[.5,1]},legend:{show:!1},theme:{mode:"dark"},xaxis:{categories:a}},series:[{name:"Okr",type:"area",data:o},{name:"Meta",type:"line",data:n}],type:"area",height:200})))},ue=function(e){var t=function(e){return Object(x.groupBy)(e.okrs,"Objetivo")}(e);return r.a.createElement(ae.a,{maxWidth:"xl",style:{height:"100%"}},r.a.createElement(A.a,{container:!0,style:{padding:16}},Object(x.map)(t,(function(e,t){return r.a.createElement(A.a,{container:!0,item:!0,xs:12,key:t,spacing:2},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(y.a,{style:{fontSize:"1.6rem",fontWeight:700,color:"#ffffff"}},t)),Object(x.map)(e,(function(e){return r.a.createElement(A.a,{item:!0,xs:6,key:e.KeyResult},r.a.createElement(le,{okr:e}))})))}))))},fe=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"listarOkrs",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={HEADERS:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"}},t.abrupt("return",Q.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1278116042&single=true&output=tsv",e).then((function(e){for(var t=e.data.split("\r\n"),a=[],n=t[0].split("\t"),r=1;r<t.length;r++){for(var o={},c=t[r].split("\t"),s=0;s<n.length;s++)n[s].includes("Target")||n[s].includes("/")?""===c[s]?o[n[s]]=null:o[n[s]]=Number(c[s].replace(",",".")):o[n[s]]=c[s];a.push(o)}return a})).catch((function(e){console.log(e)})));case 2:case"end":return t.stop()}}))}}]),e}()),me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,play:!0},a.handleChange=function(e,t){a.setState({index:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e,t,a,n,r,o,c=this;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.awrap(te.listarCuringas());case 2:return e=s.sent,s.next=5,i.a.awrap(ee.listarSquads());case 5:return t=s.sent,s.next=8,i.a.awrap(Z.listarMembros());case 8:return a=s.sent,n=U(a),r=X(t,n),s.next=13,i.a.awrap(fe.listarOkrs());case 13:o=s.sent,this.setState({squads:t,membros:r,okrs:o,crafters:e}),this.timer=setInterval((function(){if(c.state.play){var e=(c.state.index+1)%(c.state.squads.length+1);c.setState({index:e})}}),3e4);case 16:case"end":return s.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.squads,n=e.crafters,o=e.okrs,c=e.membros,s=this.props.classes;return r.a.createElement(p.a,{theme:O},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,{value:t,onChange:this.handleChange,style:{flexGrow:1}},Object(x.map)(a,(function(e,t){return r.a.createElement(b.a,{wrapped:!0,key:e.Squad,label:e.Squad,value:t})})),o&&a&&r.a.createElement(b.a,{wrapped:!0,key:"okr",label:"Okrs",value:a.length})),r.a.createElement(y.a,{variant:"overline",style:{position:"absolute",right:"16px",top:"24px"}})),this.state.membros&&Object(x.map)(a,(function(e,a){return r.a.createElement(E.a,{className:s.pageView,hidden:t!==a,key:e.Squad},r.a.createElement($,{squad:e,crafters:n,membros:c[e.Squad]}))})),a&&o&&r.a.createElement(E.a,{style:{width:"auto",height:"auto",backgroundColor:"#29283ddd",overflow:"hidden",paddingBottom:"7%"},hidden:t<a.length,key:"okr"},r.a.createElement(ue,{okrs:o})),r.a.createElement(v.a,{style:{position:"fixed",bottom:"10px",right:"10px"},onClick:this.handleClick,className:s.fab,color:"secondary"},this.state.play?r.a.createElement(S.a,{style:{color:"#ffffff"}}):r.a.createElement(j.a,{style:{color:"#ffffff"}})))}}]),t}(r.a.Component),de=Object(k.a)((function(e){return{fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},pageView:{height:"calc(100vh - 48px)",backgroundColor:"#29283d",borderRadius:0}}}))(me);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a(117)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.35f25f21.chunk.js.map