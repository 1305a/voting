(function(){"use strict";var e={2628:function(e,t,s){var n=s(9242),i=s(3396);function o(e,t,s,n,o,r){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var r={name:"App"},a=s(89);const c=(0,a.Z)(r,[["render",o]]);var d=c,l=s(2483),u=s(7139);const h={class:"voting-wrapper"},v={class:"voting-container"},w={class:"header"},p={key:0,class:"subheader"},f={key:1,class:"subheader"},g={key:2,class:"answers-container"},m=["onClick"],k={class:"answer-item-text"},I={key:3,class:"answers-container"},D=["onClick"],y={class:"answer-item-text"},b={key:4,innerHTML:"Спасибо!<br>Ваш голос учтен",class:"is-voted-text"},q={class:"voting-button-container"};function A(e,t,s,n,o,r){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",v,[(0,i._)("div",w,(0,u.zw)(o.questionData.question),1),1===o.questionData.type?((0,i.wg)(),(0,i.iD)("div",p," Можно отметить только один пункт ")):(0,i.kq)("",!0),2===o.questionData.type?((0,i.wg)(),(0,i.iD)("div",f," Можно отметить несколько пунктов ")):(0,i.kq)("",!0),o.isVoted||1!==o.questionData.type?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.questionData.variants,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(["answer-item",{"background-blue":o.selectedAnswerId===e.id}]),key:e.id,onClick:t=>r.answerClick(e.id)},[(0,i._)("div",k,(0,u.zw)(e.name),1)],10,m)))),128))])),o.isVoted||2!==o.questionData.type?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",I,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.questionData.variants,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(["answer-item",{"background-blue":o.selectedAnswerIds.includes(e.id)}]),key:e.id,onClick:t=>r.answerClick(e.id)},[(0,i._)("div",y,(0,u.zw)(e.name),1)],10,D)))),128))])),o.isVoted?((0,i.wg)(),(0,i.iD)("div",b)):(0,i.kq)("",!0),(0,i._)("div",q,[o.isVoted?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>r.vote&&r.vote(...e)),class:(0,u.C_)([{enable:o.selectedAnswerId||o.selectedAnswerIds.length>0},"voting-button"])}," ПРОГОЛОСОВАТЬ ",2))])])])}s(7658);var $=s(4161),C={data(){return{serverURL:"https://dev1.med-game.ru/api/v1",questionData:{},selectedAnswerId:null,isVoted:!1,selectedAnswerIds:[]}},computed:{},methods:{getQuestionData(){(0,$.Z)({method:"get",url:`${this.serverURL}/voting/${this.$route.params.sessionId}`}).then((e=>{this.questionData=e.data.data})).catch((e=>(console.log("Ошибка:"),console.log(e),e)))},answerClick(e){if(2===this.questionData.type){const t=this.selectedAnswerIds.indexOf(e);-1===t?(console.log("push id: "+e),this.selectedAnswerIds.push(e)):this.selectedAnswerIds.splice(t,1)}else this.selectedAnswerId===e?this.selectedAnswerId=null:this.selectedAnswerId=e},vote(){if(console.log("Vote"),2===this.questionData.type){console.log("Vote type2"+this.questionData.type),console.log("this.$route.params.sessionId: "+this.$route.params.sessionId);for(let e=0;e<this.selectedAnswerIds.length;e++)console.log("this.selectedAnswerIds[i]: "+this.selectedAnswerIds[e]),(0,$.Z)({url:`${this.serverURL}/voting/${this.$route.params.sessionId}/answer`,method:"post",data:{variant_id:this.selectedAnswerIds[e]}}).then((()=>{this.isVoted=!0,localStorage.setItem(this.$route.params.sessionId,1)})).catch((function(e){console.log(e)}))}else(0,$.Z)({url:`${this.serverURL}/voting/${this.$route.params.sessionId}/answer`,method:"post",data:{variant_id:this.selectedAnswerId}}).then((()=>{this.isVoted=!0,localStorage.setItem(this.$route.params.sessionId,1)})).catch((function(e){console.log(e)}))}},mounted(){this.getQuestionData();const e=localStorage.getItem(this.$route.params.sessionId);this.isVoted=1==e}};const O=(0,a.Z)(C,[["render",A]]);var _=O;function V(e,t,s,n,o,r){return(0,i.wg)(),(0,i.iD)("div",null,"Стартовая страница голосования")}var x={};const j=(0,a.Z)(x,[["render",V]]);var Z=j;const L=[{path:"/",name:"start",component:Z},{path:"/:sessionId",name:"voting",component:_}],R=(0,l.p7)({history:(0,l.r5)(),routes:L});var U=R;(0,n.ri)(d).use(U).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,o){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],a=n[1],c=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(c)var l=c(s)}for(t&&t(n);d<r.length;d++)o=r[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},n=self["webpackChunkmedtest14"]=self["webpackChunkmedtest14"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(2628)}));n=s.O(n)})();
//# sourceMappingURL=app.ffa4f2a8.js.map