(this["webpackJsonpgestao-a-vista-curingas"]=this["webpackJsonpgestao-a-vista-curingas"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(78),a(15)),l=a(11),s=a(57),u=a(58),f=a(68),m=a(138),d=a(134),h=a(137),p=a(135),g=a(130),b=a(114),E=a(136),y=a(5),v=a(9),k=a(67),x=Object(k.a)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),O=a(65),w=a.n(O),S=a(66),C=a.n(S),q=a(128),j=a(12),z=a.n(j),M=function(e){var t=z()().diff(e,"days"),a="#454545";return a=t>14?"#e95d6a":14===t?"#f6b26b":"#57bb8a",r.a.createElement(g.a,{style:{width:"64%",fontSize:"3rem",fontWeight:900,backgroundColor:a,color:"#ffffff"}},e.isValid()?e.format("DD/MM"):"NOVO")},D=function(e){return r.a.createElement(q.a,{container:!0,align:"center"},r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement(g.a,{style:{fontSize:"1.6rem",fontWeight:300,color:"#ffffff"}},"Check Arquitetural")),r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement(g.a,{style:{fontSize:"1.6rem",fontWeight:300,color:"#ffffff"}},"Check de Execu\xe7\xe3o")),r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement(g.a,{style:{fontSize:"1.6rem",fontWeight:300,color:"#ffffff"}},"Retro do Squad")),r.a.createElement(q.a,{item:!0,xs:4},M(e.squad.DataCheckArquitetural)),r.a.createElement(q.a,{item:!0,xs:4},M(e.squad.DataCheckExecucao)),r.a.createElement(q.a,{item:!0,xs:4},M(e.squad.DataRetroSquad)))},W=a(26),A=a.n(W),Y=function(e){var t=Object.entries(e.squad).filter((function(e){return e[0].includes("ScoreGemba")})),a=t.map((function(e){return e[0].replace("ScoreGemba","")})),n=t.map((function(e){return e[1]}));return r.a.createElement(A.a,{options:{chart:{height:20,type:"radar",background:"rgba(41, 40, 61, 0)"},colors:["#57bb8a"],fill:{colors:["#57bb8a"],opacity:.9},theme:{mode:"dark",palette:"palette8"},xaxis:{categories:a}},series:[{name:"",data:n}],type:"radar",height:500})},F=a(131),B=a(132),I=a(60),K=a.n(I),N=function(e){if(!e)return(void 0).props.classes.Escalado;var t=z()().diff(z()(e.lastMeeting),"days");return t<21?"#57bb8a":t<30?"#f6b26b":t<45?"#e95d6a":"#505050"},P=function(e){return r.a.createElement(q.a,{container:!0,spacing:2,align:"center"},e.membros.map((function(t){var a="#1c68b1";if(e.crafters){var n=e.crafters.find((function(e){return e.email.includes(t.login)}));a=N(n.meeting)}var o=r.a.createElement(F.a,{style:{border:"8px solid ".concat(a),width:"8vw",height:"8vw",backgroundColor:a},src:"./images/fotos/".concat(t.login,".JPG")});return"tiago.turibio"===t.login&&(o=r.a.createElement(B.a,{overlap:"circle",anchororigin:{vertical:"top",horizontal:"right"},badgeContent:r.a.createElement(F.a,{style:{backgroundColor:a,height:"3vw",width:"3vw"}},r.a.createElement(K.a,{style:{color:"#ffffff",height:"80%",width:"80%"}}))},o)),r.a.createElement(q.a,{item:!0,xs:4,key:t.login},o,r.a.createElement(g.a,{style:{fontSize:"1.6rem",fontWeight:600,color:"#ffffff"}},t.nome))})))},V=function(e){var t=Object.entries(e.squad).filter((function(e){return e[0].includes("ScoreCE")})),a=t.map((function(e){return e[0].replace("ScoreCE","")})),n=t.map((function(e){return e[1]}));return r.a.createElement(A.a,{options:{chart:{height:"20%",type:"radar",background:"rgba(41, 40, 61, 0)"},colors:["#57bb8a"],fill:{colors:["#57bb8a"],opacity:.9},theme:{mode:"dark",palette:"palette8"},xaxis:{categories:a,labels:{show:!0}}},series:[{name:"",data:n}],type:"radar",height:500})},G=function(e){return r.a.createElement(g.a,{style:{fontSize:"1.2rem",fontWeight:300,color:"#ffffff"}},e.squad.PlanoDeAcao)},R=function(e){return r.a.createElement("div",{style:{height:"100%",width:"100%",backgroundImage:"url(".concat(e.squad.Cover,")"),backgroundSize:"cover",overflow:"hidden"}},r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#29283ddd",overflow:"hidden"}},r.a.createElement(g.a,{style:{padding:16,fontSize:"2.2rem",fontWeight:900,color:"#ffffff"}},e.squad.Squad),r.a.createElement(q.a,{container:!0,spacing:4,alignItems:"flex-start"},r.a.createElement(q.a,{item:!0,container:!0,xs:8,spacing:4,alignItems:"flex-start"},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(D,{squad:e.squad})),r.a.createElement(q.a,{item:!0,xs:6,align:"center"},r.a.createElement(g.a,{style:{fontSize:"2rem",fontWeight:900,color:"#ffffff"}},"Gemba Check"),r.a.createElement(Y,{squad:e.squad})),r.a.createElement(q.a,{item:!0,xs:6,align:"center"},r.a.createElement(g.a,{style:{fontSize:"2rem",fontWeight:900,color:"#ffffff"}},"Check de Execu\xe7\xe3o"),r.a.createElement(V,{squad:e.squad})),r.a.createElement(q.a,{item:!0,xs:12,align:"center"},r.a.createElement(g.a,{style:{fontSize:"2rem",fontWeight:900,color:"#ffffff"}},"Plano de A\xe7\xe3o"),r.a.createElement(G,{squad:e.squad}))),r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement(P,{membros:e.squad.Membros,crafters:e.crafters})))))},J=a(14),_=a.n(J),H=a(27),Q=a(28),Z=a.n(Q),L=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"listarSquads",value:function(){var e=Object(H.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=766563780&single=true&output=tsv").then((function(e){for(var t=e.data.split("\r\n"),a=[],n=t[0].split("\t"),r=1;r<t.length;r++){for(var o={},c=t[r].split("\t"),i=0;i<n.length;i++)n[i].includes("Data")?o[n[i]]=z()(c[i],"DD/MM/YYYY"):n[i].includes("Score")?o[n[i]]=Number(c[i].replace(",",".")):n[i].includes("Membros")?o[n[i]]=JSON.parse(c[i]):o[n[i]]=c[i];a.push(o)}return a})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),T=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"listarCuringas",value:function(){var e=Object(H.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z.a.get("https://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas").then((function(e){return v.filter(e.data.crafters,(function(e){return"leonardo.goncalves@dtidigital.com.br"!==e.email}))})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"parseCuringa",value:function(e){return{Crafter:e[0],Data:z()(e[1],"DD/MM/YYYY"),Lider:e[2]}}}]),e}()),U=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"listarOkrs",value:function(){var e=Object(H.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1278116042&single=true&output=tsv").then((function(e){for(var t=e.data.split("\r\n"),a=[],n=t[0].split("\t"),r=1;r<t.length;r++){for(var o={},c=t[r].split("\t"),i=0;i<n.length;i++)n[i].includes("Target")||n[i].includes("/")?""===c[i]?o[n[i]]=null:o[n[i]]=Number(c[i].replace(",",".")):o[n[i]]=c[i];a.push(o)}return a})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),X=a(133),$=a(41),ee=a.n($),te=a(61),ae=a.n(te),ne=a(62),re=a.n(ne),oe=function(e){switch(e){case"Baixa":return r.a.createElement(ae.a,{fontSize:"large",style:{color:"#e95d6a"}});case"M\xe9dia":return r.a.createElement(ee.a,{fontSize:"large",style:{color:"#f6b26b"}});case"Alta":return r.a.createElement(re.a,{fontSize:"large",style:{color:"#57bb8a"}});default:return r.a.createElement(ee.a,{fontSize:"large",style:{color:"#f6b26b"}})}},ce=function(e){var t=Object(v.chain)(e.okr).pickBy((function(e,t){return t.includes("/")})).map((function(e,t){return[z()(t,"DD/MM/YYYY"),e]})).orderBy((function(e,t){return t})).value(),a=Object(v.map)(t,(function(e){return e[0].format("D/M")})),n=Object(v.map)(t,(function(){return e.okr.Target})),o=Object(v.map)(t,(function(e){return e[1]}));return r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:10},r.a.createElement(g.a,{style:{fontSize:"1rem",fontWeight:300,color:"#ffffff"}},e.okr.KeyResult)),r.a.createElement(q.a,{item:!0,xs:2},oe(e.okr.Confianca)),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(A.a,{options:{chart:{height:20,type:"line",background:"rgba(41, 40, 61, 0)",toolbar:{show:!1}},colors:["#1c68b1","#57bb8a"],fill:{type:"solid",opacity:[.5,1]},legend:{show:!1},theme:{mode:"dark"},xaxis:{categories:a}},series:[{name:"Okr",type:"area",data:o},{name:"Meta",type:"line",data:n}],type:"area",height:200})))},ie=function(e){var t=Object(v.groupBy)(e.okrs,"Objetivo");return r.a.createElement(X.a,{maxWidth:"xl",style:{height:"100%"}},r.a.createElement(q.a,{container:!0,style:{padding:16}},Object(v.map)(t,(function(e,t){return r.a.createElement(q.a,{container:!0,item:!0,xs:12,key:t,spacing:2},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(g.a,{style:{fontSize:"1.6rem",fontWeight:900,color:"#ffffff"}},t)),Object(v.map)(e,(function(e){return r.a.createElement(q.a,{item:!0,xs:6,key:e.KeyResult},r.a.createElement(ce,{okr:e}))})))}))))},le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,play:!0},a.handleChange=function(e,t){a.setState({index:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.listarCuringas().then((function(t){e.setState({crafters:t})})),L.listarSquads().then((function(t){e.setState({squads:t})})),U.listarOkrs().then((function(t){e.setState({okrs:t})})),this.timer=setInterval((function(){if(e.state.play){var t=(e.state.index+1)%(e.state.squads.length+1);e.setState({index:t})}}),3e4)}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.squads,n=e.crafters,o=e.okrs,c=this.props.classes;return r.a.createElement(m.a,{theme:x},r.a.createElement(d.a,{position:"static"},r.a.createElement(h.a,{value:t,onChange:this.handleChange,style:{flexGrow:1}},Object(v.map)(a,(function(e,t){return r.a.createElement(p.a,{wrapped:!0,key:e.Squad,label:e.Squad,value:t})})),o&&a&&r.a.createElement(p.a,{wrapped:!0,key:"okr",label:"Okrs",value:a.length})),r.a.createElement(g.a,{variant:"overline",style:{position:"absolute",right:"16px",top:"24px"}},"3.1.0")),Object(v.map)(a,(function(e,a){return r.a.createElement(b.a,{className:c.pageView,hidden:t!==a,key:e.Squad},r.a.createElement(R,{squad:e,crafters:n}))})),a&&o&&r.a.createElement(b.a,{className:c.pageView,hidden:t<a.length,key:"okr"},r.a.createElement(ie,{okrs:o})),r.a.createElement(E.a,{onClick:this.handleClick,className:c.fab,color:"secondary"},this.state.play?r.a.createElement(w.a,{style:{color:"#ffffff"}}):r.a.createElement(C.a,{style:{color:"#ffffff"}})))}}]),t}(r.a.Component),se=Object(y.a)((function(e){return{fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},pageView:{height:"calc(100vh - 48px)",backgroundColor:"#29283d",borderRadius:0}}}))(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a(113)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.b0f83091.chunk.js.map