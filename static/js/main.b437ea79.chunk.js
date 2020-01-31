(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(317)},190:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i),c=(a(190),a(18)),s=a(19),l=a(24),p=a(23),f=a(25),u=a(11),m=a(5),g=Object(u.createMuiTheme)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),h=a(89),d=a.n(h),b=a(38),y=a(26),E=a.n(y),v=new(function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"listarCuringas",value:function(){return d.a.get("https://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas").then(function(e){return b.filter(e.data.crafters,function(e){return"leonardo.goncalves@dtidigital.com.br"!==e.email})}).catch(function(e){console.log(e)})}},{key:"parseCuringa",value:function(e){return{Crafter:e[0],Data:E()(e[1],"DD/MM/YYYY"),Lider:e[2]}}}]),e}()),O=(a(272),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).prettyName=function(e){return e.split("@")[0].split(".").join(" ")},a.corStatus=function(e){if(!e)return a.props.classes.Escalado;var t=E()().diff(E()(e.lastMeeting),"days");return t<21?a.props.classes.EmDia:t<30?a.props.classes.Proximo:t<45?a.props.classes.Atrasado:a.props.classes.Escalado},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.crafter;return r.a.createElement(m.f,{item:!0,xs:1},r.a.createElement(m.b,{className:this.corStatus(e.meeting)},r.a.createElement(m.d,{style:{height:"22vh"},image:"./images/fotos/".concat(e.email.split("@")[0],".JPG")}),r.a.createElement(m.c,{style:{minHeight:64}},r.a.createElement(m.f,{container:!0},r.a.createElement(m.f,{item:!0,xs:12},r.a.createElement(m.i,{align:"left",style:{fontSize:20,fontWeight:900,color:"#ffffff",minHeight:140,textTransform:"capitalize"}},e.name)),r.a.createElement(m.f,{item:!0,xs:12},r.a.createElement(m.i,{style:{fontSize:16,fontWeight:700,color:"#ffffff"}},e.meeting?E()(e.meeting.lastMeeting).format("DD/MM"):"-")),r.a.createElement(m.f,{item:!0,xs:12},r.a.createElement(m.i,{style:{fontSize:16,fontWeight:400,color:"#ffffff"},noWrap:!0},e.meeting?e.meeting.leader:"-"))))))}}]),t}(r.a.Component)),w=Object(u.withStyles)(function(){return{Atrasado:{backgroundColor:"#e95d6a"},EmDia:{backgroundColor:"#57bb8a"},Proximo:{backgroundColor:"#f6b26b"},Escalado:{backgroundColor:"#505050"}}})(O),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,crafters:[]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.listarCuringas().then(function(t){e.setState({crafters:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.card},r.a.createElement(m.f,{container:!0,spacing:8,direction:"row"},b.chain(this.state.crafters).orderBy(function(e){return e.meeting?e.meeting.lastMeeting:""}).map(function(e){return r.a.createElement(w,{key:e.name,crafter:e})}).value()))}}]),t}(r.a.Component),j=Object(u.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,"px)")}}})(C),k=a(90),x=a.n(k),F=a(91),M=a.n(F);var S=Object(u.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,"px)")}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.card},r.a.createElement("iframe",{src:e.page,width:"100%",height:"100%",frameborder:"0","X-FrameOptions":"sameorigin"}))}),A=[0,1,2,3],D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,page:0,play:!0},a.handleChange=function(e,t){a.setState({page:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){if(e.state.play){var t=(e.state.index+1)%A.length;e.setState({index:t,page:A[t]})}},3e4)}},{key:"render",value:function(){var e=this.state.page,t=this.props.classes;return r.a.createElement(u.MuiThemeProvider,{theme:g},r.a.createElement(m.a,{position:"static"},r.a.createElement(m.h,{value:e,onChange:this.handleChange,style:{flexGrow:1}},r.a.createElement(m.g,{wrapped:!0,label:"Ritos"}),r.a.createElement(m.g,{wrapped:!0,label:"Diagn\xf3stico"}),r.a.createElement(m.g,{wrapped:!0,label:"1-1"}),r.a.createElement(m.g,{wrapped:!0,label:"OKR Prodap"})),r.a.createElement(m.e,{onClick:this.handleClick,className:t.fab,color:"secondary"},this.state.play?r.a.createElement(x.a,{style:{color:"#ffffff"}}):r.a.createElement(M.a,{style:{color:"#ffffff"}}))),0===e&&r.a.createElement(S,{page:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=2092766634&single=true"}),1===e&&r.a.createElement(S,{page:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=890090851&single=true"}),2===e&&r.a.createElement(j,null),3===e&&r.a.createElement(S,{page:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=4758285&single=true"}))}}]),t}(r.a.Component),P=Object(u.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.b437ea79.chunk.js.map