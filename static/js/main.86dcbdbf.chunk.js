(this["webpackJsonpra-lifecycle-watches"]=this["webpackJsonpra-lifecycle-watches"]||[]).push([[0],{20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},30:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(14),s=a.n(i),o=(a(20),a(13)),r=a(15),h=(a(21),a(8)),l=a(11),u=a(7),f=a(2),d=a(3),j=a(5),m=a(4),b=(a(22),a(0)),p=function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(f.a)(this,a),(n=e.call(this,t)).onClick=function(t){t.preventDefault(),n.props.addWatch(n.state.city,n.state.timestamp),n.setState((function(){return{city:"",timestamp:""}}))},n.state={city:"",timestamp:""},n}return Object(d.a)(a,[{key:"onInputHandler",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},a,n))}))}},{key:"render",value:function(){return Object(b.jsxs)("form",{className:"form",name:"form",children:[Object(b.jsxs)("div",{className:"form__city-name",children:[Object(b.jsx)("div",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("input",{value:this.state.city,type:"text",name:"city",id:"city",onChange:this.onInputHandler.bind(this)})]}),Object(b.jsxs)("div",{className:"form__timestamp",children:[Object(b.jsx)("div",{children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(b.jsx)("input",{value:this.state.timestamp,type:"text",name:"timestamp",id:"timestamp",onChange:this.onInputHandler.bind(this)})]}),Object(b.jsx)("div",{className:"form__submit",children:Object(b.jsx)("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:this.onClick})})]})}}]),a}(n.Component),v=(a(24),a(25),a(6)),O=a.n(v),k=(a(27),function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(f.a)(this,a),(n=e.call(this,t)).state={date:n.props.date},n.clockRef=c.a.createRef(),n}return Object(d.a)(a,[{key:"displayCanvas",value:function(t){var e=this.clockRef.current;e.setAttribute("width",200),e.setAttribute("height",200);var a=this.clockRef.current.getContext("2d");a.strokeRect(0,0,e.width,e.height);var n=e.width/2-10,c=e.width/2,i=e.height/2;a.fillStyle="#ffffff",a.fillRect(0,0,e.width,e.height),a.strokeStyle="#000000",a.lineWidth=1,a.beginPath(),a.arc(c,i,n,0,2*Math.PI,!0),a.moveTo(c,i),a.stroke(),a.closePath();for(var s,o=n-10,r=0;r<60;r++){a.beginPath(),s=r%5===0?5:2;var h=c+o*Math.cos(-6*r*(Math.PI/180)+Math.PI/2),l=i-o*Math.sin(-6*r*(Math.PI/180)+Math.PI/2);a.arc(h,l,s,0,2*Math.PI,!0),a.stroke(),a.closePath()}for(var u=1;u<=12;u++){a.beginPath(),a.font="bold 25px sans-serif";var f=c+(o-30)*Math.cos(-30*u*(Math.PI/180)+Math.PI/2),d=i-(o-30)*Math.sin(-30*u*(Math.PI/180)+Math.PI/2);u<=9?a.strokeText(u,f-5,d+10):a.strokeText(u,f-15,d+10),a.stroke(),a.closePath()}var j=o-10,m=o-15,b=m/1.5,p=6*t.seconds(),v=6*(t.minutes()+1/60*t.seconds()),O=30*(t.hours()+1/60*t.minutes());a.beginPath(),a.strokeStyle="#FF0000",a.moveTo(c,i),a.lineTo(c+j*Math.cos(Math.PI/2-p*(Math.PI/180)),i-j*Math.sin(Math.PI/2-p*(Math.PI/180))),a.stroke(),a.closePath(),a.beginPath(),a.strokeStyle="#000000",a.lineWidth=3,a.moveTo(c,i),a.lineTo(c+m*Math.cos(Math.PI/2-v*(Math.PI/180)),i-m*Math.sin(Math.PI/2-v*(Math.PI/180))),a.stroke(),a.closePath(),a.beginPath(),a.lineWidth=5,a.moveTo(c,i),a.lineTo(c+b*Math.cos(Math.PI/2-O*(Math.PI/180)),i-b*Math.sin(Math.PI/2-O*(Math.PI/180))),a.stroke(),a.closePath(),a.beginPath(),a.strokeStyle="#000000",a.fillStyle="#ffffff",a.lineWidth=3,a.arc(c,i,5,0,2*Math.PI,!0),a.stroke(),a.fill(),a.closePath()}},{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.setState({date:t.props.date}),t.displayCanvas(t.state.date)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return Object(b.jsx)("canvas",{className:"watch__clock",ref:this.clockRef,id:"clock"})}}]),a}(n.Component));O.a.tz.setDefault("Europe/London");var y=function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(f.a)(this,a),(n=e.call(this,t)).diff=60*+n.props.timestamp,O()().utcOffset(n.diff),n.state={date:O()().utcOffset(n.diff)},n.deleteWatch=n.props.deleteWatch,n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:O()().utcOffset(this.diff)})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"watch",children:[Object(b.jsx)("span",{className:"watch__city",children:this.props.city}),Object(b.jsx)("span",{className:"watch__delete",onClick:this.deleteWatch,children:"\u2718"}),Object(b.jsx)(k,{date:this.state.date})]})}}]),a}(n.Component),P=function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(t){return Object(f.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"watches",children:this.props.state.map((function(e,a){return Object(b.jsx)(y,Object(u.a)(Object(u.a)({},e),{},{deleteWatch:function(){return t.props.deleteWatch(a)}}),e.key)}))})}}]),a}(n.Component);function M(){var t=Object(n.useState)([{city:"Moscow",timestamp:"+3",key:Object(h.a)(5)},{city:"London",timestamp:"+1",key:Object(h.a)(5)},{city:"Tokyo",timestamp:"+9",key:Object(h.a)(5)},{city:"New York",timestamp:"-4",key:Object(h.a)(5)}]),e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(p,{state:a,addWatch:function(t,e){if(!t||!e)return null;c((function(a){return[].concat(Object(o.a)(a),[{city:t,timestamp:e,key:Object(h.a)(5)}])}))}}),Object(b.jsx)(P,{state:a,deleteWatch:function(t){console.log(t);var e=Object(o.a)(a);console.log(e[t]),e.splice(t,1),c((function(){return e}))}})]})}var I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.86dcbdbf.chunk.js.map