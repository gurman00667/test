(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-083497d4":"22b05971"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-083497d4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-083497d4":"8102053e"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"513c":function(e,t,r){"use strict";r("964b")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,l=r("2877"),c=r("6544"),u=r.n(c),d=r("7496"),f=r("f6c4"),m=Object(l["a"])(s,a,o,!1,null,null,null),p=m.exports;u()(m,{VApp:d["a"],VMain:f["a"]});r("d3b7"),r("3ca3"),r("ddb0");var v=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Login")},g=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"login",staticClass:"Login"},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Login")])],1),r("v-card-text",[r("v-form",{ref:"loginForm"},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"login",rules:e.loginEmailRules,label:"Login",type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Password",type:"password"},model:{value:e.pswrd,callback:function(t){e.pswrd=t},expression:"pswrd"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"},on:{click:function(t){e.dialog=!0}}},[e._v("Sign up")]),r("v-btn",{attrs:{color:"primary",type:"submit"},on:{click:e.checkuserexist}},[e._v("Login")])],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"600px","min-width":"360px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("div",[r("v-card",{staticClass:"px-4"},[r("v-card-text",[r("v-form",{ref:"registerForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],label:"First Name",maxlength:"20",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],label:"Last Name",maxlength:"20",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{block:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.passwordMatch],type:e.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.verify,callback:function(t){e.verify=t},expression:"verify"}})],1),r("v-spacer"),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-btn",{attrs:{"x-large":"",block:"",disabled:!e.valid,color:"success"},on:{click:e.submitInfo}},[e._v("Register")])],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-btn",{attrs:{"x-large":"",block:"",color:"error"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")])],1)],1)],1)],1)],1)],1)]),r("v-dialog",{attrs:{width:"350"},model:{value:e.errordialog,callback:function(t){e.errordialog=t},expression:"errordialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Error ")]),r("v-card-text",[e._v(" "+e._s(e.error.message)+" ")]),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.errordialog=!1}}},[e._v(" close ")])],1)],1)],1)],1)},w=[],x=r("1da1"),y=(r("96cf"),r("b0c0"),r("ac1f"),r("1276"),r("bc3a")),k=r.n(y),_=(r("25f0"),r("3452")),E=r.n(_),O="Id09tk90w",C={encrypt:function(e){return E.a.AES.encrypt(e,O).toString()},decrypt:function(e){var t=E.a.AES.decrypt(e,O);return t.toString(E.a.enc.Utf8)}},V=C,j={name:"Login",props:{msg:String},data:function(){return{dialog:!1,person:{name:"",company:""},firstName:"",lastName:"",email:"",password:"",verify:"",valid:!1,show1:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e&&e.length>=8||"Min 8 characters"}},emailRules:[function(e){return!!e||"Required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],errordialog:!1,error:{message:""},username:"",pswrd:"",loginEmailRules:[function(e){return!!e||"Required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{passwordMatch:function(){var e=this;return function(){return e.password===e.verify||"Password must match"}}},methods:{checkuserexist:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(window.location),-1===e.username.indexOf("@localhost.com",e.username.length-"@localhost.com".length)){t.next=9;break}return t.next=4,k.a.get("/login",{params:{username:e.username}});case 4:r=t.sent,n=r.data.data,n?n.Email==e.username&&V.decrypt(n.password)==e.pswrd?e.$router.push({name:"home",params:{userName:n.name}}):(e.errordialog=!0,e.error.message="invalid usename or password."):(e.errordialog=!0,e.error.message="user doesn't exists"),t.next=11;break;case 9:e.errordialog=!0,e.error.message=" only localhost users";case 11:case"end":return t.stop()}}),t)})))()},extractHostname:function(e){var t;return t=e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0],t=t.split(":")[0],t=t.split("?")[0],t},extractRootDomain:function(e){var t=this.extractHostname(e),r=t.split("."),n=r.length;return n>2&&(t=r[n-2]+"."+r[n-1],2==r[n-2].length&&2==r[n-1].length&&(t=r[n-3]+"."+t)),t},submitInfo:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.extractRootDomain(window.location.href),n="@"+r+".com",-1===e.email.indexOf(n,e.email.length-n.length)){t.next=9;break}if(e.password!==e.verify){t.next=9;break}return a={Email:e.email,name:e.firstName,password:V.encrypt(e.password),noofPost:0,comment:0},t.next=7,k.a.post("/adduser",a);case 7:o=t.sent,200==o.data.status?(alert(o.data.message),e.dialog=!1):404==o.data.status&&alert(o.data.message);case 9:case"end":return t.stop()}}),t)})))()}}},N=j,S=(r("513c"),r("8336")),P=r("b0af"),R=r("99d9"),L=r("62ad"),T=r("a523"),q=r("169a"),A=r("ce7e"),M=r("0e8f"),F=r("4bd4"),D=r("a722"),H=r("0fd9"),$=r("2fa4"),B=r("8654"),I=r("71d9"),J=r("2a7f"),U=Object(l["a"])(N,b,w,!1,null,"7acab50c",null),z=U.exports;u()(U,{VBtn:S["a"],VCard:P["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:L["a"],VContainer:T["a"],VDialog:q["a"],VDivider:A["a"],VFlex:M["a"],VForm:F["a"],VLayout:D["a"],VRow:H["a"],VSpacer:$["a"],VTextField:B["a"],VToolbar:I["a"],VToolbarTitle:J["a"]});var K={name:"Home",components:{Login:z}},G=K,Q=Object(l["a"])(G,h,g,!1,null,null,null),W=Q.exports;n["a"].use(v["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/home",name:"home",component:function(){return r.e("chunk-083497d4").then(r.bind(null,"f820"))}}],Y=new v["a"]({routes:X}),Z=Y,ee=r("f309");n["a"].use(ee["a"]);var te=new ee["a"]({});n["a"].use(ee["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Z,vuetify:te,render:function(e){return e(p)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"964b":function(e,t,r){}});
//# sourceMappingURL=app.c45ef41a.js.map