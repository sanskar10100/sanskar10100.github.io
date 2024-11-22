(function(e){function t(t){for(var n,l,s=t[0],i=t[1],c=t[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0802":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view",{staticClass:"bg-gray-900 h-screen flex flex-col items-center"})],1)},o=[],l=a("2877"),s={},i=Object(l["a"])(s,r,o,!1,null,null,null),c=i.exports,u=(a("caad"),a("b0c0"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"justify-center"},[a("div",{staticClass:"bg-gray-800 text-gray-100 p-5 rounded shadow-xl w-9/12"},[Object.keys(e.players).length?a("ul",{staticClass:"p-0 mb-6 list-none"},e._l(e.players,(function(t,n){return a("li",{key:n,staticClass:"p-2 flex"},[a("h2",{staticClass:"m-0 font-medium text-xl"},[e._v(e._s(t.name))]),a("h3",{staticClass:"ml-auto font-semibold text-base text-green-500"},[e._v(" +"+e._s(new Intl.NumberFormat("en-IN").format(t.amount))+" ")])])})),0):a("div",{staticClass:"mb-6 text-center text-gray-600"},[e._v(" Start by adding 2 or more players ")]),a("Button",{staticClass:"text-blue-400 border-blue-400 w-full",attrs:{variant:"secondary"},on:{click:function(t){e.newPlayer.modal=!0}}},[e._v(" Add a player ")])],1),a("Modal",{model:{value:e.newPlayer.modal,callback:function(t){e.$set(e.newPlayer,"modal",t)},expression:"newPlayer.modal"}},[a("NFCReader",{model:{value:e.newPlayer.id,callback:function(t){e.$set(e.newPlayer,"id",t)},expression:"newPlayer.id"}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.addPlayer(t)}}},[a("FormInput",{attrs:{type:"text",required:""},model:{value:e.newPlayer.name,callback:function(t){e.$set(e.newPlayer,"name",t)},expression:"newPlayer.name"}},[e._v(" Name ")]),a("FormInput",{attrs:{type:"number",required:""},model:{value:e.newPlayer.amount,callback:function(t){e.$set(e.newPlayer,"amount",t)},expression:"newPlayer.amount"}},[e._v(" Initial Amount ")]),a("FormInput",{attrs:{type:"text",placeholder:"Bring RFID card closer to NFC sensor",disabled:""},model:{value:e.newPlayer.id,callback:function(t){e.$set(e.newPlayer,"id",t)},expression:"newPlayer.id"}},[e._v(" Card ")]),e.newPlayer.id in e.players?a("p",{staticClass:"text-center text-red-500 mb-5"},[e._v(" Player already exists. "),a("br"),e._v(" Try adding a different card. ")]):e._e(),a("Button",{staticClass:"bg-blue-400 w-full",attrs:{type:"submit",disabled:e.newPlayer.id in e.players}},[e._v(" Add player ")])],1)],1),a("Button",{staticClass:"bg-blue-400 fixed w-4/6",staticStyle:{bottom:"30px"},attrs:{disabled:Object.keys(e.players).length<2},on:{click:e.startGame}},[e._v(" Start game! ")])],1)},p=[],m=(a("b64b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",e._g(e._b({staticClass:"text-lg focus:outline-none font-medium py-3 px-4 rounded disabled:opacity-50",class:{"shadow-lg text-gray-900":"primary"===this.variant,"bg-transparent border-2 border-solid":"secondary"===this.variant}},"button",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),f=[],y={name:"Button",props:{variant:{type:String,default:"primary"}}},b=y,h=Object(l["a"])(b,m,f,!1,null,null,null),v=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value?a("div",{staticClass:"modal-wrapper",on:{click:function(t){return e.$emit("input",!1)}}},[a("div",{staticClass:"bg-gray-800 modal",on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)]):e._e()},x=[],_={name:"Modal",props:["value"]},w=_,C=(a("d9ad"),Object(l["a"])(w,g,x,!1,null,"7feb064e",null)),P=C.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"text-gray-500 block my-4"},[e._t("default"),a("input",e._b({staticClass:"bg-gray-800 border border-solid border-gray-700 text-gray-300 w-full p-3 rounded outline-none disabled:bg-gray-700 shadow-inner",domProps:{value:e.value},on:{input:e.handleInput}},"input",e.$attrs,!1))],2)},k=[],O={name:"FormInput",props:["value"],methods:{handleInput:function(e){this.$emit("input",e.target.value)}}},S=O,j=Object(l["a"])(S,I,k,!1,null,null,null),$=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},E=[],F={name:"NFCReader",props:{silent:{type:Boolean,default:!1}},data:function(){return{reader:new NDEFReader}},methods:{handleReading:function(e){var t=this;if(!this.silent){var a=new Audio("/scan.mp3");a.play()}setTimeout((function(){t.$emit("input",e.serialNumber)}),this.silent?550:0)},handleError:function(){console.log("Cannot read data from the NFC tag. Try another one?")}},created:function(){var e=this;try{this.reader.scan().then((function(){console.log("Scan started successfully."),e.reader.addEventListener("error",e.handleError),e.reader.addEventListener("reading",e.handleReading)})).catch((function(e){console.log("Error! Scan failed to start: ".concat(e,"."))}))}catch(t){console.log(t)}},beforeDestroy:function(){this.reader.removeEventListener("error",this.handleError),this.reader.removeEventListener("reading",this.handleReading)}},B=F,M=Object(l["a"])(B,N,E,!1,null,null,null),R=M.exports,T={name:"Home",components:{Button:v,Modal:P,FormInput:$,NFCReader:R},data:function(){return{newPlayer:{modal:!1,id:"",name:"",amount:0},players:{}}},methods:{addPlayer:function(){this.newPlayer.id&&(this.players[this.newPlayer.id]={name:this.newPlayer.name,amount:parseInt(this.newPlayer.amount),transactions:this.newPlayer.amount?[{type:"collect",amount:this.newPlayer.amount}]:[]},this.newPlayer={modal:!1,id:"",name:"",amount:0})},startGame:function(){Object.keys(this.players).length<2||(localStorage.setItem("game",JSON.stringify(this.players)),this.$router.push("/game"))}},created:function(){var e=localStorage.getItem("game");e&&(this.players=JSON.parse(e))}},A=T,G=Object(l["a"])(A,d,p,!1,null,null,null),J=G.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"justify-center"},[a("div",{staticClass:"w-9/12 text-center py-20 mb-5 -mt-24 border-2 border-dotted border-blue-400 rounded-md text-blue-400"},[a("NFCReader",{model:{value:e.playerId,callback:function(t){e.playerId=t},expression:"playerId"}}),e._v(" Bring player card here to"),a("br"),e._v(" start a transaction ")],1),a("ul",{staticClass:"w-9/12 grid grid-cols-2 gap-3"},e._l(e.players,(function(t,n){return a("li",{key:n,staticClass:"bg-gray-800 text-gray-100 p-4 rounded text-center shadow-md"},[a("div",{staticClass:"w-8 h-8 rounded-full bg-blue-500 inline-block"}),a("h2",{staticClass:"mt-3 font-medium text-2xl"},[e._v(" "+e._s(t.name)+" ")]),a("h3",{staticClass:"text-green-500 font-semibold"},[e._v(" "+e._s(new Intl.NumberFormat("en-IN").format(t.amount))+" ")])])})),0),a("Button",{staticClass:"border-red-800 text-red-800 fixed w-4/6",staticStyle:{bottom:"30px"},attrs:{variant:"secondary",danger:""},on:{click:e.endGame}},[e._v(" End Game ")])],1)},q=[],D=(a("ac1f"),a("5319"),{name:"Game",components:{NFCReader:R,Button:v},data:function(){return{playerId:""}},computed:{players:function(){return JSON.parse(localStorage.getItem("game"))}},watch:{playerId:function(){this.$router.push("/transact/".concat(this.playerId))}},methods:{endGame:function(){localStorage.removeItem("game"),this.$router.replace("/")}}}),L=D,H=Object(l["a"])(L,V,q,!1,null,null,null),z=H.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"justify-start"},[a("h3",{staticClass:"text-2xl text-gray-100 text-center font-semibold mt-10"},[e._v(e._s(e.players[e.activePlayerId].name))]),a("form",{staticClass:"mt-32 w-9/12",on:{submit:function(t){return t.preventDefault(),e.transact(t)}}},[a("div",{staticClass:"flex"},[a("MegaChoice",{attrs:{name:"type",inputValue:"collect",overrideClass:"border-green-500 text-green-500"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v(" Collect ")]),a("MegaChoice",{attrs:{name:"type",inputValue:"pay",overrideClass:"border-red-500 text-red-500"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v(" Pay ")])],1),a("FormInput",{staticClass:"my-10",attrs:{type:"number",required:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}},[e._v(" Amount ")]),a("div",{staticClass:"text-gray-500"},["pay"===e.type?a("span",[e._v("To")]):"collect"===e.type?a("span",[e._v("From")]):e._e()]),a("div",{staticClass:"flex"},[a("MegaChoice",{attrs:{name:"to",inputValue:"0"},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}},[e._v(" Bank ")]),e._l(e.opponents,(function(t,n){return a("MegaChoice",{key:n,attrs:{name:"to",inputValue:n},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}},[e._v(" "+e._s(t.name)+" ")])}))],2),a("Button",{staticClass:"fixed w-4/6 transform -translate-x-1/2",class:"pay"===e.type?"bg-red-500":"bg-green-500",staticStyle:{bottom:"30px",left:"50%"},attrs:{type:"submit"}},["pay"===e.type?a("span",[e._v(" Pay ")]):e._e(),"collect"===e.type?a("span",[e._v(" Collect ")]):e._e()])],1)])},Q=[],U=(a("d81d"),a("5530")),W=a("15fd"),X=a("a38e"),Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:"bg-gray-800 block text-center rounded mr-2 w-full py-5 shadow-lg border-solid text-lg cursor-pointer\n    "+(this.overrideClass||"text-blue-400 border-blue-400")+"\n    "+(e.value===e.inputValue&&(this.activeClass||"border-2 shadow-inner"))},[e._t("default"),a("input",{staticClass:"hidden",attrs:{type:"radio",name:e.name},domProps:{value:e.inputValue},on:{input:e.handleInput}})],2)},Z=[],ee={name:"MegaChoice",props:{name:{type:String,required:!0},value:String,inputValue:{type:String,required:!0},activeClass:String,overrideClass:String},methods:{handleInput:function(e){this.$emit("input",e.target.value)}}},te=ee,ae=Object(l["a"])(te,Y,Z,!1,null,null,null),ne=ae.exports,re={name:"Transact",components:{FormInput:$,MegaChoice:ne,Button:v},data:function(){return{type:"pay",to:"0",amount:0}},computed:{activePlayerId:function(){return this.$route.params.id},players:function(){return JSON.parse(localStorage.getItem("game"))},opponents:function(){var e=this.players,t=this.activePlayerId,a=(e[t],Object(W["a"])(e,[t].map(X["a"])));return a}},methods:{transact:function(){var e=parseInt(this.amount),t=Object(U["a"])({},this.players),a=t[this.activePlayerId],n=this.type;"pay"===n&&(e=-e),a.amount+=e,a.transactions.push({type:n,amount:e}),"0"!==this.to&&(t[this.to].amount-=e,t[this.to].transactions.push({type:"pay"===n?"collect":"pay",amount:e})),localStorage.setItem("game",JSON.stringify(t)),this.$router.replace("/game")}}},oe=re,le=Object(l["a"])(oe,K,Q,!1,null,null,null),se=le.exports;n["a"].use(u["a"]);var ie=[{path:"/",name:"Home",component:J},{path:"/game",name:"Game",component:z},{path:"/transact/:id",name:"Transact",component:se}],ce=new u["a"]({mode:"history",base:"/",routes:ie});ce.beforeEach((function(e,t,a){["Game","Transact"].includes(e.name)&&!localStorage.getItem("game")&&a({name:"Home"}),a()}));var ue=ce,de=a("9483");Object(de["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("def6");n["a"].config.productionTip=!1,new n["a"]({router:ue,render:function(e){return e(c)}}).$mount("#app")},d9ad:function(e,t,a){"use strict";var n=a("0802"),r=a.n(n);r.a},def6:function(e,t,a){}});
//# sourceMappingURL=app.cc260c46.js.map