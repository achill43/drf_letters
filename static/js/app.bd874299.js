(function(){"use strict";var e={2566:function(e,s,t){var n=t(9242),a=t(6423),r=t(3396);const o={class:"sidebar"},c=(0,r._)("h2",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"DRF Letters")],-1),l={class:"menu"},i={class:"content"};function d(e,s,t,n,a,d){const u=(0,r.up)("router-link"),g=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[c,(0,r._)("div",l,[(0,r.Wm)(u,{to:"/",class:"menu-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("Inbox")])),_:1}),(0,r.Wm)(u,{to:"/sended",class:"menu-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sended messages")])),_:1}),(0,r.Wm)(u,{to:"/recipient",class:"menu-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("Received messages")])),_:1}),(0,r.Wm)(u,{to:"/create-msg",class:"menu-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("Create message")])),_:1}),(0,r.Wm)(u,{to:"/login",class:"menu-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})])]),(0,r._)("div",i,[(0,r.Wm)(g)])],64)}var u={name:"App",async beforeCreate(){null==this.$store.state.tokens&&(this.$store.state.tokens={access:localStorage.getItem("access_token"),refresh:localStorage.getItem("refresh_token")}),await this.axios.post("auth/verify/",{token:this.$store.state.tokens.access}).catch((e=>{401==e.response.status&&this.$store.commit("REFTESH_TOKENS_FROM_API")}))}},g=t(89);const h=(0,g.Z)(u,[["render",d]]);var m=h,_=t(2483),p=t(7139);const w={class:"container"},v={class:"card"},f=(0,r._)("h1",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"Create new Message")],-1),b={class:"row"},k=(0,r._)("div",{class:"col-md-4"},[(0,r._)("span",null,"Recipient: ")],-1),y={class:"col-md-8"},x=["value"],M={class:"row"},D=(0,r._)("div",{class:"col-md-4"},[(0,r._)("span",null,"Title: ")],-1),S={class:"col-md-8"},z={class:"row"},$=(0,r._)("div",{class:"col-md-4"},[(0,r._)("span",null,"Text: ")],-1),C={class:"col-md-8"},I={key:0,class:"form-controll success-block"},O={key:1,class:"form-controll error-block"},R=(0,r._)("div",{class:"flex-center"},[(0,r._)("button",{class:"btn my-btn"},"Create")],-1);function T(e,s,t,a,o,c){return(0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("div",v,[(0,r._)("form",{onSubmit:s[3]||(s[3]=(0,n.iM)(((...e)=>c.submitForm&&c.submitForm(...e)),["prevent"]))},[f,(0,r._)("div",b,[k,(0,r._)("div",y,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.recipient=e),class:"form-select"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.userList,((e,s)=>((0,r.wg)(),(0,r.iD)("option",{key:s,value:e.id},(0,p.zw)(e.username),9,x)))),128))],512),[[n.bM,o.recipient]])])]),(0,r._)("div",M,[D,(0,r._)("div",S,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>o.title=e)},null,512),[[n.nr,o.title]])])]),(0,r._)("div",z,[$,(0,r._)("div",C,[(0,r.wy)((0,r._)("textarea",{cols:"30",rows:"10","onUpdate:modelValue":s[2]||(s[2]=e=>o.body=e),class:"form-control"},null,512),[[n.nr,o.body]])])]),o.success_msg?((0,r.wg)(),(0,r.iD)("div",I,(0,p.zw)(o.success_msg),1)):o.error_msg?((0,r.wg)(),(0,r.iD)("div",O,(0,p.zw)(o.error_msg),1)):(0,r.kq)("",!0),R],32)])])}var F={name:"CreateMessagge",data(){return{userList:[],recipient:null,title:"",body:"",error_msg:null,success_msg:null}},methods:{async createMessage(){let e=this.$store.state.tokens.access;const s={headers:{Authorization:`Bearer ${e}`}};await this.axios.post("messages/",{recipient:this.recipient,title:this.title,body:this.body},s).then((e=>{this.tockens=e.data,localStorage.setItem("access_token",this.tockens.access),localStorage.setItem("refresh_token",this.tockens.refresh),this.error_msg=null,this.success_msg="Your message successful"})).catch((e=>{this.error_msg=e.response.data.detail,this.success_msg=null}))},submitForm(){this.createMessage(),console.log("Create new Message!"),console.log(this.recipient),console.log(this.title),console.log(this.body)}},async beforeMount(){let e=this.$store.state.tokens.access;const s={headers:{Authorization:`Bearer ${e}`}};await this.axios.get("users/",s).then((e=>{this.userList=e.data}))}};const E=(0,g.Z)(F,[["render",T]]);var A=E;const L={class:"container"},U=(0,r._)("div",{class:"row"},[(0,r._)("h1",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"Inbox")]),(0,r._)("hr")],-1),Y={class:"row"},j={class:"col-md-12 flex-end"},B={class:"row"},Z={class:"col-md-12"},H={key:0,class:"msg-list"},K={class:"row"},P={class:"col-md-9"},W=(0,r._)("hr",null,null,-1),N=(0,r._)("hr",null,null,-1),V=(0,r._)("p",null," Text: ",-1),q={class:"col-md-3"},G={class:"flex-center"},J=["onClick"],Q=["onClick"],X={key:1};function ee(e,s,t,a,o,c){return(0,r.wg)(),(0,r.iD)("div",L,[U,(0,r._)("div",Y,[(0,r._)("div",j,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:s[0]||(s[0]=(...e)=>c.getInboxMessages&&c.getInboxMessages(...e))},"Sync")])]),(0,r._)("div",B,[(0,r._)("div",Z,[o.messages.length>0?((0,r.wg)(),(0,r.iD)("ul",H,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.messages,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"msg-item",key:e.id},[(0,r._)("div",K,[(0,r._)("div",P,[(0,r._)("h3",null,"Title: "+(0,p.zw)(e.title),1),W,(0,r._)("h5",null,"Sender: "+(0,p.zw)(e.sender.username),1),N,V,(0,r._)("p",null,(0,p.zw)(e.body),1),(0,r._)("p",null,"Date: "+(0,p.zw)(e.created_at),1)]),(0,r._)("div",q,[(0,r._)("div",G,[(0,r._)("button",{type:"button",class:"btn btn-info",onClick:s=>c.readMessages(e.id)},"Read",8,J),(0,r._)("button",{type:"button",class:"btn btn-danger",onClick:s=>c.deleteMessages(e.id)},"Delete",8,Q)])])])])))),128))])):((0,r.wg)(),(0,r.iD)("h3",X," You don't have new messages ")),(0,r.wy)((0,r._)("h3",null,(0,p.zw)(o.error_msg),513),[[n.F8,o.error_msg]])])])])}var se={name:"InboxMsg",data(){return{messages:[],error_msg:null}},methods:{async getInboxMessages(){let e=this.$store.state.tokens.access;const s={headers:{Authorization:`Bearer ${e}`}};await this.axios.get("messages/inbox/",s).then((e=>{this.messages=e.data})).catch((e=>{this.error_msg=e.response.data.detail}))},async deleteMessages(e){let s=this.$store.state.tokens.access;const t={headers:{Authorization:`Bearer ${s}`}};await this.axios.delete(`messages/${e}`,t).then((()=>{this.getInboxMessages()})).catch((e=>{this.error_msg=e.response.data.detail}))},async readMessages(e){let s=this.$store.state.tokens.access;const t={headers:{Authorization:`Bearer ${s}`}};await this.axios.get(`messages/${e}`,t).then((()=>{this.getInboxMessages()})).catch((e=>{this.error_msg=e.response.data.detail}))}},async beforeMount(){this.getInboxMessages()}};const te=(0,g.Z)(se,[["render",ee]]);var ne=te;const ae={class:"container"},re={class:"card"},oe=(0,r._)("h1",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"Login")],-1),ce={class:"row"},le=(0,r._)("div",{class:"col-md-4"}," Username: ",-1),ie={class:"col-md-8"},de=["value"],ue={class:"row"},ge=(0,r._)("div",{class:"col-md-4"}," Password: ",-1),he={class:"col-md-8"},me=["value"],_e={key:0,class:"row success-block"},pe={key:1,class:"row error-block"},we=(0,r._)("div",{class:"flex-center"},[(0,r._)("button",{class:"btn my-btn"},"Login"),(0,r._)("button",{class:"btn btn-dark"},"Registration")],-1);function ve(e,s,t,a,o,c){return(0,r.wg)(),(0,r.iD)("div",ae,[(0,r._)("div",re,[(0,r._)("form",{onSubmit:s[2]||(s[2]=(0,n.iM)(((...e)=>c.submitForm&&c.submitForm(...e)),["prevent"]))},[oe,(0,r._)("div",ce,[le,(0,r._)("div",ie,[(0,r._)("input",{type:"text",placeholder:"Enter username",class:"form-control",value:o.username,onInput:s[0]||(s[0]=(...e)=>c.usernameChange&&c.usernameChange(...e))},null,40,de)])]),(0,r._)("div",ue,[ge,(0,r._)("div",he,[(0,r._)("input",{type:"password",placeholder:"Enter password",class:"form-control",value:o.password,onInput:s[1]||(s[1]=(...e)=>c.passwordChange&&c.passwordChange(...e))},null,40,me)])]),o.success_msg?((0,r.wg)(),(0,r.iD)("div",_e,(0,p.zw)(o.success_msg),1)):o.error_msg?((0,r.wg)(),(0,r.iD)("div",pe,(0,p.zw)(o.error_msg),1)):(0,r.kq)("",!0),we],32)])])}var fe={name:"LoginForm",data(){return{username:"",password:"",error_msg:null,success_msg:null,tockens:null}},methods:{usernameChange(e){this.username=e.target.value},passwordChange(e){this.password=e.target.value},async makeLogin(e,s){await this.axios.post("auth/",{username:e,password:s}).then((e=>{this.tockens=e.data,localStorage.setItem("access_token",this.tockens.access),localStorage.setItem("refresh_token",this.tockens.refresh),this.$store.state.tokens={access:localStorage.getItem("access_token"),refresh:localStorage.getItem("refresh_token")},this.error_msg=null,this.success_msg="You login successful"})).catch((e=>{this.error_msg=e.response.data.detail,this.success_msg=null}))},submitForm(){this.makeLogin(this.username,this.password)}}};const be=(0,g.Z)(fe,[["render",ve]]);var ke=be;const ye={class:"container"},xe=(0,r._)("div",{class:"row"},[(0,r._)("h1",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"Sended Messages")]),(0,r._)("hr")],-1),Me={class:"row"},De={class:"col-md-12 flex-end"},Se={class:"row"},ze={class:"col-md-12"},$e={key:0,class:"msg-list"},Ce={class:"row"},Ie={class:"col-md-9"},Oe=(0,r._)("hr",null,null,-1),Re=(0,r._)("hr",null,null,-1),Te=(0,r._)("p",null," Text: ",-1),Fe={class:"col-md-3"},Ee={class:"flex-center"},Ae=["onClick"],Le={key:1};function Ue(e,s,t,a,o,c){return(0,r.wg)(),(0,r.iD)("div",ye,[xe,(0,r._)("div",Me,[(0,r._)("div",De,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:s[0]||(s[0]=(...e)=>c.getSendedMessages&&c.getSendedMessages(...e))},"Sync")])]),(0,r._)("div",Se,[(0,r._)("div",ze,[o.messages.length>0?((0,r.wg)(),(0,r.iD)("ul",$e,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.messages,((e,s)=>((0,r.wg)(),(0,r.iD)("li",{class:"msg-item",key:s},[(0,r._)("div",Ce,[(0,r._)("div",Ie,[(0,r._)("h3",null,"Title: "+(0,p.zw)(e.title),1),Oe,(0,r._)("h5",null,"Recipient: "+(0,p.zw)(e.recipient.username),1),Re,Te,(0,r._)("p",null,(0,p.zw)(e.body),1),(0,r._)("p",null,"Date: "+(0,p.zw)(e.created_at),1)]),(0,r._)("div",Fe,[(0,r._)("div",Ee,[(0,r._)("button",{type:"button",class:"btn btn-danger",onClick:s=>c.deleteMessages(e.id)},"Delete",8,Ae)])])])])))),128))])):((0,r.wg)(),(0,r.iD)("h3",Le," You don't have any messages ")),(0,r.wy)((0,r._)("h3",null,(0,p.zw)(o.error_msg),513),[[n.F8,o.error_msg]])])])])}var Ye={name:"SendedMsg",data(){return{messages:[],error_msg:null}},methods:{async getSendedMessages(){let e=this.$store.state.tokens.access;const s={headers:{Authorization:`Bearer ${e}`}};await this.axios.get("messages/sended/",s).then((e=>{this.messages=e.data})).catch((e=>{this.error_msg=e.response.data.detail}))},async deleteMessages(e){let s=this.$store.state.tokens.access;const t={headers:{Authorization:`Bearer ${s}`}};await this.axios.delete(`messages/${e}`,t).then((()=>{this.getSendedMessages()})).catch((e=>{this.error_msg=e.response.data.detail}))}},async beforeMount(){this.getSendedMessages()}};const je=(0,g.Z)(Ye,[["render",Ue]]);var Be=je;const Ze={class:"container"},He=(0,r._)("div",{class:"row"},[(0,r._)("h1",{class:"text-center"},[(0,r._)("span",{class:"underscore"},"Recipient Messages")]),(0,r._)("hr")],-1),Ke={class:"row"},Pe={class:"col-md-12 flex-end"},We={class:"row"},Ne={class:"col-md-12"},Ve={key:0,class:"msg-list"},qe={class:"row"},Ge={class:"col-md-9"},Je=(0,r._)("hr",null,null,-1),Qe=(0,r._)("hr",null,null,-1),Xe=(0,r._)("p",null," Text: ",-1),es={class:"col-md-3"},ss={class:"flex-center"},ts=["onClick"],ns={key:1};function as(e,s,t,a,o,c){return(0,r.wg)(),(0,r.iD)("div",Ze,[He,(0,r._)("div",Ke,[(0,r._)("div",Pe,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:s[0]||(s[0]=(...e)=>c.getRecipientMessages&&c.getRecipientMessages(...e))},"Sync")])]),(0,r._)("div",We,[(0,r._)("div",Ne,[o.messages.length>0?((0,r.wg)(),(0,r.iD)("ul",Ve,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.messages,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"msg-item",key:e.id},[(0,r._)("div",qe,[(0,r._)("div",Ge,[(0,r._)("h3",null,"Title: "+(0,p.zw)(e.title),1),Je,(0,r._)("h5",null,"Sender: "+(0,p.zw)(e.sender.username),1),Qe,Xe,(0,r._)("p",null,(0,p.zw)(e.body),1),(0,r._)("p",null,"Date: "+(0,p.zw)(e.created_at),1)]),(0,r._)("div",es,[(0,r._)("div",ss,[(0,r._)("button",{type:"button",class:"btn btn-danger",onClick:s=>c.deleteMessages(e.id)},"Delete",8,ts)])])])])))),128))])):((0,r.wg)(),(0,r.iD)("h3",ns," You don't have any messages ")),(0,r.wy)((0,r._)("h3",null,(0,p.zw)(o.error_msg),513),[[n.F8,o.error_msg]])])])])}var rs={name:"RecipientMsg",data(){return{messages:[],error_msg:null}},methods:{async getRecipientMessages(){let e=this.$store.state.tokens.access;const s={headers:{Authorization:`Bearer ${e}`}};await this.axios.get("messages/recipient/",s).then((e=>{this.messages=e.data})).catch((e=>{this.error_msg=e.response.data.detail}))},async deleteMessages(e){let s=this.$store.state.tokens.access;const t={headers:{Authorization:`Bearer ${s}`}};await this.axios.delete(`messages/${e}`,t).then((()=>{this.getRecipientMessages()})).catch((e=>{this.error_msg=e.response.data.detail}))}},async beforeMount(){this.getRecipientMessages()}};const os=(0,g.Z)(rs,[["render",as]]);var cs=os;const ls=[{path:"/",component:ne},{path:"/create-msg",component:A},{path:"/login",component:ke},{path:"/sended",component:Be},{path:"/recipient",component:cs}];var is=(0,_.p7)({history:(0,_.r5)(),routes:ls}),ds=t(4311),us=ds.Z.create({baseURL:"http://127.0.0.1:8000/api/v1/",responseType:"json"}),gs=t(65),hs=(0,gs.MT)({state(){return{tokens:null}},mutations:{async REFTESH_TOKENS_FROM_API(e){await ds.Z.post("http://127.0.0.1:8000/api/v1/auth/refresh/",{refresh:e.tokens.refresh}).then((s=>{let t=e.tokens.refresh;e.tokens={access:s.data.access,refresh:t}}))}},getters:{TOKENS(e){return e.tokens}}});const ms=(0,n.ri)(m);ms.use(is),ms.use(a.Z,us),ms.use(hs),ms.mount("#app")}},s={};function t(n){var a=s[n];if(void 0!==a)return a.exports;var r=s[n]={id:n,loaded:!1,exports:{}};return e[n](r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(s,n,a,r){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(c=!1,r<o&&(o=r));if(c){e.splice(d--,1);var i=a();void 0!==i&&(s=i)}}return s}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var a,r,o=n[0],c=n[1],l=n[2],i=0;if(o.some((function(s){return 0!==e[s]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(l)var d=l(t)}for(s&&s(n);i<o.length;i++)r=o[i],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},n=self["webpackChunkdrf_chat"]=self["webpackChunkdrf_chat"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2566)}));n=t.O(n)})();
//# sourceMappingURL=app.bd874299.js.map