(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),l=a(1),i=a(2),s=a(4),m=a(3),u=(a(12),a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){var t=new Date;e.setState({time:t.toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},c.a.createElement("p",{className:"clock__Name"},"Clock name:",this.props.name),c.a.createElement("p",{className:"clock__Time"},"Current time:",this.state.time))}}]),a}(c.a.Component));function p(){return Math.ceil(99*Math.random()+1).toString()}var k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:p()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isClockVisible,n=t.clockName;return c.a.createElement("div",{className:"app"},a?c.a.createElement(u,{name:n}):c.a.createElement(c.a.Fragment,null),c.a.createElement("button",{className:"app__button",type:"button",onClick:function(){e.setState({isClockVisible:!a})}},a?"Hide":"Open"),c.a.createElement("button",{className:"app__button",type:"button",onClick:function(){e.setState({clockName:p()}),console.log("The Clock was renamed from oldName to newName.")}},"Rename"))}}]),a}(c.a.Component);r.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.26a42f1a.chunk.js.map