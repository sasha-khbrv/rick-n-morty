(this["webpackJsonprick-n-morty"]=this["webpackJsonprick-n-morty"]||[]).push([[0],{52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),o=n(22),a=n.n(o),h=n(4),r=n(5),d=n(3),l=n(8),c=n(7),u=n(23),p=n.n(u),f=n(11),g=n(1),m=function(t){return Object(g.jsxs)("svg",{width:t.width,height:t.height,x:t.x,y:t.y,children:[Object(g.jsx)("rect",{id:t.id,onMouseEnter:t.showPlanetInfo,onMouseLeave:t.hidePlanetInfo,width:"100%",height:"100%",fill:"white",stroke:"grey"}),Object(g.jsx)("text",{x:"5",y:"15",width:"30px",height:"10px",className:"svgText",children:t.residents})]})},j=function(t,e){this.init(t,e)};j.prototype={init:function(t,e){this.root={x:0,y:0,w:t,h:e}},fit:function(t){var e,n,i;for(e=0;e<t.length;e++)i=t[e],(n=this.findChildRoot(this.root,i.w,i.h))&&(i.fit=this.splitChildRoot(n,i.w,i.h))},findChildRoot:function(t,e,n){return t.used?this.findChildRoot(t.right,e,n)||this.findChildRoot(t.down,e,n):e<=t.w&&n<=t.h?t:null},splitChildRoot:function(t,e,n){return t.used=!0,t.down={x:t.x,y:t.y+n,w:t.w,h:t.h-n},t.right={x:t.x+e,y:t.y,w:t.w-e,h:n},t}};var b,x=function(t){Object(l.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(h.a)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,planetRenderFull:[]},t.updateDimensions=function(){t.setState({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,rate:document.documentElement.clientWidth*document.documentElement.clientHeight/t.numOfPlanets})},t}return Object(r.a)(n,[{key:"setPlanetSize",value:function(t,e){return t.map((function(t){var n;return n=t.residents.length>5?Math.floor(Math.sqrt(t.residents.length*e)):20,{id:t.id,residents:t.residents.length,w:n,h:n}}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions);var t=this.props.planetsList.sort((function(t,e){return e.residents.length-t.residents.length})),e=t.map((function(t){return t.residents.length})).reduce((function(t,e){return t+e})),n=Math.floor(this.state.width*this.state.height/e-1500),i=this.setPlanetSize(t,n);new j(this.state.width,this.state.height).fit(i,n),this.setState({planetRenderFull:i.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{x:t.fit?t.fit.x:0,y:t.fit?t.fit.y:0})}))})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var t=this;return Object(g.jsx)("svg",{width:this.state.width,height:this.state.height,children:this.state.planetRenderFull.length>0&&this.state.planetRenderFull.map((function(e){return Object(g.jsx)(m,{showPlanetInfo:t.props.showPlanetInfo,hidePlanetInfo:t.props.hidePlanetInfo,planetsList:t.props.planetsList,id:e.id,residents:e.residents,width:e.w,height:e.h,x:e.x,y:e.y},e.id)}))})}}]),n}(s.a.Component),w=n(24),v=n(25).a.div(b||(b=Object(w.a)(["\nbox-sizing: border-box;\nwidth: 380px;\nheight: 200px;\nposition: absolute;\nbackground-color: #FFFFFF;\nborder-radius: 5px;\npadding: 20px 40px 40px;\nbox-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);\nz-index: 99;\npointer-events: none;\n"]))),O=function(t){var e,n=t.state,i=n.planetsList,s=n.planetId,o=n.pageX,a=n.pageY,h=i.filter((function(t){return t.id===+s}));e=document.documentElement.clientWidth-(o+400)>0?o+20:o-400;var r={top:document.documentElement.clientHeight-(a+220)>0?a+20:a-220,left:e};return Object(g.jsxs)(v,{style:r,children:[Object(g.jsx)("h2",{children:h[0].name}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Type:"})," ",h[0].type]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Dimension:"})," ",h[0].dimension]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Residents:"})," ",h[0].residents.length]})]})},y=function(t){Object(l.a)(n,t);var e=Object(c.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).state={planetsList:[],showPlanetInfo:!1,planetId:"",pageX:"",pageY:""},i.showPlanetInfo=i.showPlanetInfo.bind(Object(d.a)(i)),i.hidePlanetInfo=i.hidePlanetInfo.bind(Object(d.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://rickandmortyapi.com/api/location").then((function(e){var n=e.data.results;t.setState({planetsList:n})}))}},{key:"showPlanetInfo",value:function(t){this.setState({showPlanetInfo:!0,planetId:t.target.id,pageX:t.pageX,pageY:t.pageY})}},{key:"hidePlanetInfo",value:function(t){this.setState({showPlanetInfo:!1,planetId:t.target.id})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"mainContainer",children:[this.state.showPlanetInfo&&Object(g.jsx)(O,{state:this.state}),this.state.planetsList.length>0?Object(g.jsx)(x,{planetsList:this.state.planetsList,showPlanetInfo:this.showPlanetInfo,hidePlanetInfo:this.hidePlanetInfo}):"Loading..."]})}}]),n}(s.a.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),o(t),a(t)}))};n(52);a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),I()}},[[53,1,2]]]);
//# sourceMappingURL=main.a71d9aa0.chunk.js.map