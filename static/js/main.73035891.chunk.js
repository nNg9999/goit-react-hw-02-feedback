(this["webpackJsonpgoit-react"]=this["webpackJsonpgoit-react"]||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"FeedbackOptions_wrapper__3-9M_",button:"FeedbackOptions_button__142rO"}},12:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(6),l=a(7),u=a(8),s=a(11),d=a(10),p=a(1),b=a.n(p),m=function(e){var t=e.options,a=e.onLeaveFeedback,n=Object.keys(t);return r.a.createElement("div",{className:b.a.wrapper},n.map((function(e){return r.a.createElement("button",{type:"button",className:b.a.button,key:e,onClick:function(){return a(e)}},e)})))},f=a(9),v=a.n(f);function k(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement("div",{className:v.a.statistics},r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",o,"%"))}k.defaultProps={total:0,positivePercentage:0};var g=k,E=a(2),h=a.n(E),_=a(3),P=a.n(_);function F(e){var t=e.title,a=e.children;return r.a.createElement("section",{className:P.a.section},t&&r.a.createElement("h2",{className:P.a.title},t),a)}function O(e){var t=e.message;return r.a.createElement("p",null,t)}F.Proptype={title:h.a.string.isRequired,children:h.a.node.isRequired},O.defaultProps={message:"No feedback given"};var y=O,N=(a(19),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e,t){return Math.round(t/e*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(c,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{title:"Please leave feedback"},r.a.createElement(m,{options:this.state,onLeaveFeedback:this.leaveFeedback})),r.a.createElement(F,{title:"Statistics"},c>0?r.a.createElement(g,{good:t,neutral:a,bad:n,total:c,positivePercentage:o}):r.a.createElement(y,{title:"No feedback given"})))}}]),a}(n.Component));o.a.render(r.a.createElement(N,null),document.getElementById("root"))},3:function(e,t,a){e.exports={section:"Section_section__sfXQL",title:"Section_title__24_Z1"}},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.73035891.chunk.js.map